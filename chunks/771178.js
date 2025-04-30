var n = r(166763),
    i = r(133092),
    o = r(42904),
    a = r(467159),
    u = {
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
                    return !!e && 'LINK' === n.__get(e).getType();
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
                case 'bold':
                    return u.toggleInlineStyle(t, 'BOLD');
                case 'italic':
                    return u.toggleInlineStyle(t, 'ITALIC');
                case 'underline':
                    return u.toggleInlineStyle(t, 'UNDERLINE');
                case 'code':
                    return u.toggleCode(t);
                case 'backspace':
                case 'backspace-word':
                case 'backspace-to-start-of-line':
                    return u.onBackspace(t);
                case 'delete':
                case 'delete-word':
                case 'delete-to-end-of-block':
                    return u.onDelete(t);
                default:
                    return null;
            }
        },
        insertSoftNewline: function (t) {
            var e = n.insertText(t.getCurrentContent(), t.getSelection(), '\n', t.getCurrentInlineStyle(), null),
                r = i.push(t, e, 'insert-characters');
            return i.forceSelection(r, e.getSelectionAfter());
        },
        onBackspace: function (t) {
            var e = t.getSelection();
            if (!e.isCollapsed() || e.getAnchorOffset() || e.getFocusOffset()) return null;
            var r = t.getCurrentContent(),
                n = e.getStartKey(),
                o = r.getBlockBefore(n);
            if (o && 'atomic' === o.getType()) {
                var a = r.getBlockMap().delete(o.getKey()),
                    s = r.merge({
                        blockMap: a,
                        selectionAfter: e
                    });
                if (s !== r) return i.push(t, s, 'remove-range');
            }
            var c = u.tryToRemoveBlockStyle(t);
            return c ? i.push(t, c, 'change-block-type') : null;
        },
        onDelete: function (t) {
            var e = t.getSelection();
            if (!e.isCollapsed()) return null;
            var r = t.getCurrentContent(),
                o = e.getStartKey(),
                a = r.getBlockForKey(o).getLength();
            if (e.getStartOffset() < a) return null;
            var u = r.getBlockAfter(o);
            if (!u || 'atomic' !== u.getType()) return null;
            var s = e.merge({
                    focusKey: u.getKey(),
                    focusOffset: u.getLength()
                }),
                c = n.removeRange(r, s, 'forward');
            return c !== r ? i.push(t, c, 'remove-range') : null;
        },
        onTab: function (t, e, r) {
            var n = e.getSelection(),
                a = n.getAnchorKey();
            if (a !== n.getFocusKey()) return e;
            var u = e.getCurrentContent(),
                s = u.getBlockForKey(a),
                c = s.getType();
            if ('unordered-list-item' !== c && 'ordered-list-item' !== c) return e;
            t.preventDefault();
            var l = s.getDepth();
            if (!t.shiftKey && l === r) return e;
            var f = o(u, n, t.shiftKey ? -1 : 1, r);
            return i.push(e, f, 'adjust-depth');
        },
        toggleBlockType: function (t, e) {
            var r = t.getSelection(),
                o = r.getStartKey(),
                u = r.getEndKey(),
                s = t.getCurrentContent(),
                c = r;
            if (o !== u && 0 === r.getEndOffset()) {
                var l = a(s.getBlockBefore(u));
                (u = l.getKey()),
                    (c = c.merge({
                        anchorKey: o,
                        anchorOffset: r.getStartOffset(),
                        focusKey: u,
                        focusOffset: l.getLength(),
                        isBackward: !1
                    }));
            }
            if (
                s
                    .getBlockMap()
                    .skipWhile(function (t, e) {
                        return e !== o;
                    })
                    .reverse()
                    .skipWhile(function (t, e) {
                        return e !== u;
                    })
                    .some(function (t) {
                        return 'atomic' === t.getType();
                    })
            )
                return t;
            var f = s.getBlockForKey(o).getType() === e ? 'unstyled' : e;
            return i.push(t, n.setBlockType(s, c, f), 'change-block-type');
        },
        toggleCode: function (t) {
            var e = t.getSelection(),
                r = e.getAnchorKey(),
                n = e.getFocusKey();
            return e.isCollapsed() || r !== n ? u.toggleBlockType(t, 'code-block') : u.toggleInlineStyle(t, 'CODE');
        },
        toggleInlineStyle: function (t, e) {
            var r,
                o = t.getSelection(),
                a = t.getCurrentInlineStyle();
            if (o.isCollapsed()) return i.setInlineStyleOverride(t, a.has(e) ? a.remove(e) : a.add(e));
            var u = t.getCurrentContent();
            return (r = a.has(e) ? n.removeInlineStyle(u, o, e) : n.applyInlineStyle(u, o, e)), i.push(t, r, 'change-inline-style');
        },
        toggleLink: function (t, e, r) {
            var o = n.applyEntity(t.getCurrentContent(), e, r);
            return i.push(t, o, 'apply-entity');
        },
        tryToRemoveBlockStyle: function (t) {
            var e = t.getSelection(),
                r = e.getAnchorOffset();
            if (e.isCollapsed() && 0 === r) {
                var i = e.getAnchorKey(),
                    o = t.getCurrentContent(),
                    a = o.getBlockForKey(i).getType(),
                    u = o.getBlockBefore(i);
                if ('code-block' === a && u && 'code-block' === u.getType() && 0 !== u.getLength()) return null;
                if ('unstyled' !== a) return n.setBlockType(o, e, 'unstyled');
            }
            return null;
        }
    };
t.exports = u;
