var r = n(50153),
    i = n(468577),
    a = n(235296),
    o = n(904254),
    s = n(511076),
    l = n(65183),
    c = n(884848),
    u = n(985407),
    d = n(581079),
    f = n(470780),
    _ = n(652092),
    p = n(348568),
    h = n(20271),
    m = l.OrderedSet,
    g = {
        replaceText: function (e, t, n, i, a) {
            var o = p(_(e, t), t),
                s = r.create({
                    style: i || m(),
                    entity: a || null,
                });
            return u(o, o.getSelectionAfter(), n, s);
        },
        insertText: function (e, t, n, r, i) {
            return t.isCollapsed() || d(!1), g.replaceText(e, t, n, r, i);
        },
        moveText: function (e, t, n) {
            var r = s(e, t),
                i = g.removeRange(e, t, "backward");
            return g.replaceWithFragment(i, n, r);
        },
        replaceWithFragment: function (e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "REPLACE_WITH_NEW_DATA",
                i = p(_(e, t), t);
            return c(i, i.getSelectionAfter(), n, r);
        },
        removeRange: function (e, t, n) {
            t.getIsBackward() &&
                (t = t.merge({
                    anchorKey: t.getFocusKey(),
                    anchorOffset: t.getFocusOffset(),
                    focusKey: t.getAnchorKey(),
                    focusOffset: t.getAnchorOffset(),
                    isBackward: !1,
                })),
                (r = t.getAnchorKey()),
                (i = t.getFocusKey()),
                (a = e.getBlockForKey(r));
            var r,
                i,
                a,
                s = e.getBlockForKey(i),
                l = t.getStartOffset(),
                c = t.getEndOffset(),
                u = a.getEntityAt(l),
                d = s.getEntityAt(c - 1);
            if (r === i && u && u === d) {
                var f = o(e.getEntityMap(), a, s, t, n);
                return p(e, f);
            }
            return p(_(e, t), t);
        },
        splitBlock: function (e, t) {
            var n = p(_(e, t), t);
            return h(n, n.getSelectionAfter());
        },
        applyInlineStyle: function (e, t, n) {
            return i.add(e, t, n);
        },
        removeInlineStyle: function (e, t, n) {
            return i.remove(e, t, n);
        },
        setBlockType: function (e, t, n) {
            return f(e, t, function (e) {
                return e.merge({
                    type: n,
                    depth: 0,
                });
            });
        },
        setBlockData: function (e, t, n) {
            return f(e, t, function (e) {
                return e.merge({ data: n });
            });
        },
        mergeBlockData: function (e, t, n) {
            return f(e, t, function (e) {
                return e.merge({ data: e.getData().merge(n) });
            });
        },
        applyEntity: function (e, t, n) {
            return a(_(e, t), t, n);
        },
    };
e.exports = g;
