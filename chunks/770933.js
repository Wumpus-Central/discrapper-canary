"use strict";
var n = r(954055),
    i = r(869639),
    o = r(807495),
    a = r(670200),
    s = {
        currentBlockContainsLink: function (t) {
            var e = t.getSelection(),
                r = t.getCurrentContent(),
                n = r.getEntityMap();
            return r
                .getBlockForKey(e.getAnchorKey())
                .getCharacterList()
                .slice(e.getStartOffset(), e.getEndOffset())
                .some(function (t) {
                    var e = t.getEntity();
                    return !!e && "LINK" === n.__get(e).getType();
                });
        },
        getCurrentBlockType: function (t) {
            var e = t.getSelection();
            return t.getCurrentContent().getBlockForKey(e.getStartKey()).getType();
        },
        getDataObjectForLinkURL: function (t) {
            return { url: t.toString() };
        },
        handleKeyCommand: function (t, e, r) {
            switch (e) {
                case "bold":
                    return s.toggleInlineStyle(t, "BOLD");
                case "italic":
                    return s.toggleInlineStyle(t, "ITALIC");
                case "underline":
                    return s.toggleInlineStyle(t, "UNDERLINE");
                case "code":
                    return s.toggleCode(t);
                case "backspace":
                case "backspace-word":
                case "backspace-to-start-of-line":
                    return s.onBackspace(t);
                case "delete":
                case "delete-word":
                case "delete-to-end-of-block":
                    return s.onDelete(t);
                default:
                    return null;
            }
        },
        insertSoftNewline: function (t) {
            var e = n.insertText(t.getCurrentContent(), t.getSelection(), "\n", t.getCurrentInlineStyle(), null),
                r = i.push(t, e, "insert-characters");
            return i.forceSelection(r, e.getSelectionAfter());
        },
        onBackspace: function (t) {
            var e = t.getSelection();
            if (!e.isCollapsed() || e.getAnchorOffset() || e.getFocusOffset()) return null;
            var r = t.getCurrentContent(),
                n = e.getStartKey(),
                o = r.getBlockBefore(n);
            if (o && "atomic" === o.getType()) {
                var a = r.getBlockMap().delete(o.getKey()),
                    u = r.merge({ blockMap: a, selectionAfter: e });
                if (u !== r) return i.push(t, u, "remove-range");
            }
            var c = s.tryToRemoveBlockStyle(t);
            return c ? i.push(t, c, "change-block-type") : null;
        },
        onDelete: function (t) {
            var e = t.getSelection();
            if (!e.isCollapsed()) return null;
            var r = t.getCurrentContent(),
                o = e.getStartKey(),
                a = r.getBlockForKey(o).getLength();
            if (e.getStartOffset() < a) return null;
            var s = r.getBlockAfter(o);
            if (!s || "atomic" !== s.getType()) return null;
            var u = e.merge({ focusKey: s.getKey(), focusOffset: s.getLength() }),
                c = n.removeRange(r, u, "forward");
            return c !== r ? i.push(t, c, "remove-range") : null;
        },
        onTab: function (t, e, r) {
            var n = e.getSelection(),
                a = n.getAnchorKey();
            if (a !== n.getFocusKey()) return e;
            var s = e.getCurrentContent(),
                u = s.getBlockForKey(a),
                c = u.getType();
            if ("unordered-list-item" !== c && "ordered-list-item" !== c) return e;
            t.preventDefault();
            var l = u.getDepth();
            if (!t.shiftKey && l === r) return e;
            var f = o(s, n, t.shiftKey ? -1 : 1, r);
            return i.push(e, f, "adjust-depth");
        },
        toggleBlockType: function (t, e) {
            var r = t.getSelection(),
                o = r.getStartKey(),
                s = r.getEndKey(),
                u = t.getCurrentContent(),
                c = r;
            if (o !== s && 0 === r.getEndOffset()) {
                var l = a(u.getBlockBefore(s));
                (s = l.getKey()),
                    (c = c.merge({
                        anchorKey: o,
                        anchorOffset: r.getStartOffset(),
                        focusKey: s,
                        focusOffset: l.getLength(),
                        isBackward: !1,
                    }));
            }
            if (
                u
                    .getBlockMap()
                    .skipWhile(function (t, e) {
                        return e !== o;
                    })
                    .reverse()
                    .skipWhile(function (t, e) {
                        return e !== s;
                    })
                    .some(function (t) {
                        return "atomic" === t.getType();
                    })
            )
                return t;
            var f = u.getBlockForKey(o).getType() === e ? "unstyled" : e;
            return i.push(t, n.setBlockType(u, c, f), "change-block-type");
        },
        toggleCode: function (t) {
            var e = t.getSelection(),
                r = e.getAnchorKey(),
                n = e.getFocusKey();
            return e.isCollapsed() || r !== n ? s.toggleBlockType(t, "code-block") : s.toggleInlineStyle(t, "CODE");
        },
        toggleInlineStyle: function (t, e) {
            var r,
                o = t.getSelection(),
                a = t.getCurrentInlineStyle();
            if (o.isCollapsed()) return i.setInlineStyleOverride(t, a.has(e) ? a.remove(e) : a.add(e));
            var s = t.getCurrentContent();
            return (
                (r = a.has(e) ? n.removeInlineStyle(s, o, e) : n.applyInlineStyle(s, o, e)),
                i.push(t, r, "change-inline-style")
            );
        },
        toggleLink: function (t, e, r) {
            var o = n.applyEntity(t.getCurrentContent(), e, r);
            return i.push(t, o, "apply-entity");
        },
        tryToRemoveBlockStyle: function (t) {
            var e = t.getSelection(),
                r = e.getAnchorOffset();
            if (e.isCollapsed() && 0 === r) {
                var i = e.getAnchorKey(),
                    o = t.getCurrentContent(),
                    a = o.getBlockForKey(i).getType(),
                    s = o.getBlockBefore(i);
                if ("code-block" === a && s && "code-block" === s.getType() && 0 !== s.getLength()) return null;
                if ("unstyled" !== a) return n.setBlockType(o, e, "unstyled");
            }
            return null;
        },
    };
t.exports = s;
