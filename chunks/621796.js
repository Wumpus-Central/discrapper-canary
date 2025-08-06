var r = n(359282),
    i = n(716818),
    o = n(836392),
    a = n(108267),
    s = n(148727),
    l = n(65183),
    c = n(650132),
    u = n(661785),
    d = n(581079),
    f = n(170261),
    _ = n(999296),
    p = n(191395),
    h = n(653216),
    m = l.OrderedSet,
    g = {
        replaceText: function (e, t, n, i, o) {
            var a = p(_(e, t), t),
                s = r.create({
                    style: i || m(),
                    entity: o || null,
                });
            return u(a, a.getSelectionAfter(), n, s);
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
                (o = e.getBlockForKey(r));
            var r,
                i,
                o,
                s = e.getBlockForKey(i),
                l = t.getStartOffset(),
                c = t.getEndOffset(),
                u = o.getEntityAt(l),
                d = s.getEntityAt(c - 1);
            if (r === i && u && u === d) {
                var f = a(e.getEntityMap(), o, s, t, n);
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
            return o(_(e, t), t, n);
        },
    };
e.exports = g;
