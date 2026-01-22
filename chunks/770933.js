var r = n(954055),
    i = n(869639),
    a = n(807495),
    s = n(670200),
    o = {
        currentBlockContainsLink: function (e) {
            var t = e.getSelection(),
                n = e.getCurrentContent(),
                r = n.getEntityMap();
            return n
                .getBlockForKey(t.getAnchorKey())
                .getCharacterList()
                .slice(t.getStartOffset(), t.getEndOffset())
                .some(function (e) {
                    var t = e.getEntity();
                    return !!t && "LINK" === r.__get(t).getType();
                });
        },
        getCurrentBlockType: function (e) {
            var t = e.getSelection();
            return e.getCurrentContent().getBlockForKey(t.getStartKey()).getType();
        },
        getDataObjectForLinkURL: function (e) {
            return { url: e.toString() };
        },
        handleKeyCommand: function (e, t, n) {
            switch (t) {
                case "bold":
                    return o.toggleInlineStyle(e, "BOLD");
                case "italic":
                    return o.toggleInlineStyle(e, "ITALIC");
                case "underline":
                    return o.toggleInlineStyle(e, "UNDERLINE");
                case "code":
                    return o.toggleCode(e);
                case "backspace":
                case "backspace-word":
                case "backspace-to-start-of-line":
                    return o.onBackspace(e);
                case "delete":
                case "delete-word":
                case "delete-to-end-of-block":
                    return o.onDelete(e);
                default:
                    return null;
            }
        },
        insertSoftNewline: function (e) {
            var t = r.insertText(e.getCurrentContent(), e.getSelection(), "\n", e.getCurrentInlineStyle(), null),
                n = i.push(e, t, "insert-characters");
            return i.forceSelection(n, t.getSelectionAfter());
        },
        onBackspace: function (e) {
            var t = e.getSelection();
            if (!t.isCollapsed() || t.getAnchorOffset() || t.getFocusOffset()) return null;
            var n = e.getCurrentContent(),
                r = t.getStartKey(),
                a = n.getBlockBefore(r);
            if (a && "atomic" === a.getType()) {
                var s = n.getBlockMap().delete(a.getKey()),
                    l = n.merge({
                        blockMap: s,
                        selectionAfter: t,
                    });
                if (l !== n) return i.push(e, l, "remove-range");
            }
            var c = o.tryToRemoveBlockStyle(e);
            return c ? i.push(e, c, "change-block-type") : null;
        },
        onDelete: function (e) {
            var t = e.getSelection();
            if (!t.isCollapsed()) return null;
            var n = e.getCurrentContent(),
                a = t.getStartKey(),
                s = n.getBlockForKey(a).getLength();
            if (t.getStartOffset() < s) return null;
            var o = n.getBlockAfter(a);
            if (!o || "atomic" !== o.getType()) return null;
            var l = t.merge({
                    focusKey: o.getKey(),
                    focusOffset: o.getLength(),
                }),
                c = r.removeRange(n, l, "forward");
            return c !== n ? i.push(e, c, "remove-range") : null;
        },
        onTab: function (e, t, n) {
            var r = t.getSelection(),
                s = r.getAnchorKey();
            if (s !== r.getFocusKey()) return t;
            var o = t.getCurrentContent(),
                l = o.getBlockForKey(s),
                c = l.getType();
            if ("unordered-list-item" !== c && "ordered-list-item" !== c) return t;
            e.preventDefault();
            var u = l.getDepth();
            if (!e.shiftKey && u === n) return t;
            var d = a(o, r, e.shiftKey ? -1 : 1, n);
            return i.push(t, d, "adjust-depth");
        },
        toggleBlockType: function (e, t) {
            var n = e.getSelection(),
                a = n.getStartKey(),
                o = n.getEndKey(),
                l = e.getCurrentContent(),
                c = n;
            if (a !== o && 0 === n.getEndOffset()) {
                var u = s(l.getBlockBefore(o));
                (o = u.getKey()),
                    (c = c.merge({
                        anchorKey: a,
                        anchorOffset: n.getStartOffset(),
                        focusKey: o,
                        focusOffset: u.getLength(),
                        isBackward: !1,
                    }));
            }
            if (
                l
                    .getBlockMap()
                    .skipWhile(function (e, t) {
                        return t !== a;
                    })
                    .reverse()
                    .skipWhile(function (e, t) {
                        return t !== o;
                    })
                    .some(function (e) {
                        return "atomic" === e.getType();
                    })
            )
                return e;
            var d = l.getBlockForKey(a).getType() === t ? "unstyled" : t;
            return i.push(e, r.setBlockType(l, c, d), "change-block-type");
        },
        toggleCode: function (e) {
            var t = e.getSelection(),
                n = t.getAnchorKey(),
                r = t.getFocusKey();
            return t.isCollapsed() || n !== r ? o.toggleBlockType(e, "code-block") : o.toggleInlineStyle(e, "CODE");
        },
        toggleInlineStyle: function (e, t) {
            var n,
                a = e.getSelection(),
                s = e.getCurrentInlineStyle();
            if (a.isCollapsed()) return i.setInlineStyleOverride(e, s.has(t) ? s.remove(t) : s.add(t));
            var o = e.getCurrentContent();
            return (
                (n = s.has(t) ? r.removeInlineStyle(o, a, t) : r.applyInlineStyle(o, a, t)),
                i.push(e, n, "change-inline-style")
            );
        },
        toggleLink: function (e, t, n) {
            var a = r.applyEntity(e.getCurrentContent(), t, n);
            return i.push(e, a, "apply-entity");
        },
        tryToRemoveBlockStyle: function (e) {
            var t = e.getSelection(),
                n = t.getAnchorOffset();
            if (t.isCollapsed() && 0 === n) {
                var i = t.getAnchorKey(),
                    a = e.getCurrentContent(),
                    s = a.getBlockForKey(i).getType(),
                    o = a.getBlockBefore(i);
                if ("code-block" === s && o && "code-block" === o.getType() && 0 !== o.getLength()) return null;
                if ("unstyled" !== s) return r.setBlockType(a, t, "unstyled");
            }
            return null;
        },
    };
e.exports = o;
