var r = n(621796),
    i = n(172367),
    o = n(668370),
    a = n(467159),
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
                    return !!t && 'LINK' === r.__get(t).getType();
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
                case 'bold':
                    return s.toggleInlineStyle(e, 'BOLD');
                case 'italic':
                    return s.toggleInlineStyle(e, 'ITALIC');
                case 'underline':
                    return s.toggleInlineStyle(e, 'UNDERLINE');
                case 'code':
                    return s.toggleCode(e);
                case 'backspace':
                case 'backspace-word':
                case 'backspace-to-start-of-line':
                    return s.onBackspace(e);
                case 'delete':
                case 'delete-word':
                case 'delete-to-end-of-block':
                    return s.onDelete(e);
                default:
                    return null;
            }
        },
        insertSoftNewline: function (e) {
            var t = r.insertText(e.getCurrentContent(), e.getSelection(), '\n', e.getCurrentInlineStyle(), null),
                n = i.push(e, t, 'insert-characters');
            return i.forceSelection(n, t.getSelectionAfter());
        },
        onBackspace: function (e) {
            var t = e.getSelection();
            if (!t.isCollapsed() || t.getAnchorOffset() || t.getFocusOffset()) return null;
            var n = e.getCurrentContent(),
                r = t.getStartKey(),
                o = n.getBlockBefore(r);
            if (o && 'atomic' === o.getType()) {
                var a = n.getBlockMap().delete(o.getKey()),
                    l = n.merge({
                        blockMap: a,
                        selectionAfter: t
                    });
                if (l !== n) return i.push(e, l, 'remove-range');
            }
            var c = s.tryToRemoveBlockStyle(e);
            return c ? i.push(e, c, 'change-block-type') : null;
        },
        onDelete: function (e) {
            var t = e.getSelection();
            if (!t.isCollapsed()) return null;
            var n = e.getCurrentContent(),
                o = t.getStartKey(),
                a = n.getBlockForKey(o).getLength();
            if (t.getStartOffset() < a) return null;
            var s = n.getBlockAfter(o);
            if (!s || 'atomic' !== s.getType()) return null;
            var l = t.merge({
                    focusKey: s.getKey(),
                    focusOffset: s.getLength()
                }),
                c = r.removeRange(n, l, 'forward');
            return c !== n ? i.push(e, c, 'remove-range') : null;
        },
        onTab: function (e, t, n) {
            var r = t.getSelection(),
                a = r.getAnchorKey();
            if (a !== r.getFocusKey()) return t;
            var s = t.getCurrentContent(),
                l = s.getBlockForKey(a),
                c = l.getType();
            if ('unordered-list-item' !== c && 'ordered-list-item' !== c) return t;
            e.preventDefault();
            var u = l.getDepth();
            if (!e.shiftKey && u === n) return t;
            var d = o(s, r, e.shiftKey ? -1 : 1, n);
            return i.push(t, d, 'adjust-depth');
        },
        toggleBlockType: function (e, t) {
            var n = e.getSelection(),
                o = n.getStartKey(),
                s = n.getEndKey(),
                l = e.getCurrentContent(),
                c = n;
            if (o !== s && 0 === n.getEndOffset()) {
                var u = a(l.getBlockBefore(s));
                ((s = u.getKey()),
                    (c = c.merge({
                        anchorKey: o,
                        anchorOffset: n.getStartOffset(),
                        focusKey: s,
                        focusOffset: u.getLength(),
                        isBackward: !1
                    })));
            }
            if (
                l
                    .getBlockMap()
                    .skipWhile(function (e, t) {
                        return t !== o;
                    })
                    .reverse()
                    .skipWhile(function (e, t) {
                        return t !== s;
                    })
                    .some(function (e) {
                        return 'atomic' === e.getType();
                    })
            )
                return e;
            var d = l.getBlockForKey(o).getType() === t ? 'unstyled' : t;
            return i.push(e, r.setBlockType(l, c, d), 'change-block-type');
        },
        toggleCode: function (e) {
            var t = e.getSelection(),
                n = t.getAnchorKey(),
                r = t.getFocusKey();
            return t.isCollapsed() || n !== r ? s.toggleBlockType(e, 'code-block') : s.toggleInlineStyle(e, 'CODE');
        },
        toggleInlineStyle: function (e, t) {
            var n,
                o = e.getSelection(),
                a = e.getCurrentInlineStyle();
            if (o.isCollapsed()) return i.setInlineStyleOverride(e, a.has(t) ? a.remove(t) : a.add(t));
            var s = e.getCurrentContent();
            return ((n = a.has(t) ? r.removeInlineStyle(s, o, t) : r.applyInlineStyle(s, o, t)), i.push(e, n, 'change-inline-style'));
        },
        toggleLink: function (e, t, n) {
            var o = r.applyEntity(e.getCurrentContent(), t, n);
            return i.push(e, o, 'apply-entity');
        },
        tryToRemoveBlockStyle: function (e) {
            var t = e.getSelection(),
                n = t.getAnchorOffset();
            if (t.isCollapsed() && 0 === n) {
                var i = t.getAnchorKey(),
                    o = e.getCurrentContent(),
                    a = o.getBlockForKey(i).getType(),
                    s = o.getBlockBefore(i);
                if ('code-block' === a && s && 'code-block' === s.getType() && 0 !== s.getLength()) return null;
                if ('unstyled' !== a) return r.setBlockType(o, t, 'unstyled');
            }
            return null;
        }
    };
e.exports = s;
