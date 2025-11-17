var r = n(720218),
    i = n(384404),
    a = n(290963),
    o = n(467159),
    s = {
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
                    return s.toggleInlineStyle(e, "BOLD");
                case "italic":
                    return s.toggleInlineStyle(e, "ITALIC");
                case "underline":
                    return s.toggleInlineStyle(e, "UNDERLINE");
                case "code":
                    return s.toggleCode(e);
                case "backspace":
                case "backspace-word":
                case "backspace-to-start-of-line":
                    return s.onBackspace(e);
                case "delete":
                case "delete-word":
                case "delete-to-end-of-block":
                    return s.onDelete(e);
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
                var o = n.getBlockMap().delete(a.getKey()),
                    l = n.merge({
                        blockMap: o,
                        selectionAfter: t,
                    });
                if (l !== n) return i.push(e, l, "remove-range");
            }
            var c = s.tryToRemoveBlockStyle(e);
            return c ? i.push(e, c, "change-block-type") : null;
        },
        onDelete: function (e) {
            var t = e.getSelection();
            if (!t.isCollapsed()) return null;
            var n = e.getCurrentContent(),
                a = t.getStartKey(),
                o = n.getBlockForKey(a).getLength();
            if (t.getStartOffset() < o) return null;
            var s = n.getBlockAfter(a);
            if (!s || "atomic" !== s.getType()) return null;
            var l = t.merge({
                    focusKey: s.getKey(),
                    focusOffset: s.getLength(),
                }),
                c = r.removeRange(n, l, "forward");
            return c !== n ? i.push(e, c, "remove-range") : null;
        },
        onTab: function (e, t, n) {
            var r = t.getSelection(),
                o = r.getAnchorKey();
            if (o !== r.getFocusKey()) return t;
            var s = t.getCurrentContent(),
                l = s.getBlockForKey(o),
                c = l.getType();
            if ("unordered-list-item" !== c && "ordered-list-item" !== c) return t;
            e.preventDefault();
            var u = l.getDepth();
            if (!e.shiftKey && u === n) return t;
            var d = a(s, r, e.shiftKey ? -1 : 1, n);
            return i.push(t, d, "adjust-depth");
        },
        toggleBlockType: function (e, t) {
            var n = e.getSelection(),
                a = n.getStartKey(),
                s = n.getEndKey(),
                l = e.getCurrentContent(),
                c = n;
            if (a !== s && 0 === n.getEndOffset()) {
                var u = o(l.getBlockBefore(s));
                (s = u.getKey()),
                    (c = c.merge({
                        anchorKey: a,
                        anchorOffset: n.getStartOffset(),
                        focusKey: s,
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
                        return t !== s;
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
            return t.isCollapsed() || n !== r ? s.toggleBlockType(e, "code-block") : s.toggleInlineStyle(e, "CODE");
        },
        toggleInlineStyle: function (e, t) {
            var n,
                a = e.getSelection(),
                o = e.getCurrentInlineStyle();
            if (a.isCollapsed()) return i.setInlineStyleOverride(e, o.has(t) ? o.remove(t) : o.add(t));
            var s = e.getCurrentContent();
            return (
                (n = o.has(t) ? r.removeInlineStyle(s, a, t) : r.applyInlineStyle(s, a, t)),
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
                    o = a.getBlockForKey(i).getType(),
                    s = a.getBlockBefore(i);
                if ("code-block" === o && s && "code-block" === s.getType() && 0 !== s.getLength()) return null;
                if ("unstyled" !== o) return r.setBlockType(a, t, "unstyled");
            }
            return null;
        },
    };
e.exports = s;
