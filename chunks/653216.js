var r = n(214788),
    i = n(551558),
    o = n(65183),
    a = n(581079),
    s = n(170261),
    l = o.List,
    c = o.Map,
    u = function (e, t, n) {
        if (e) {
            var r = t.get(e);
            r && t.set(e, n(r));
        }
    },
    d = function (e, t, n) {
        return e.withMutations(function (e) {
            var r = t.getKey(),
                i = n.getKey();
            u(t.getParentKey(), e, function (e) {
                var t = e.getChildKeys(),
                    n = t.indexOf(r) + 1,
                    o = t.toArray();
                return o.splice(n, 0, i), e.merge({ children: l(o) });
            }),
                u(t.getNextSiblingKey(), e, function (e) {
                    return e.merge({ prevSibling: i });
                }),
                u(r, e, function (e) {
                    return e.merge({ nextSibling: i });
                }),
                u(i, e, function (e) {
                    return e.merge({ prevSibling: r });
                });
        });
    };
e.exports = function (e, t) {
    t.isCollapsed() || a(!1);
    var n = t.getAnchorKey(),
        o = e.getBlockMap(),
        l = o.get(n),
        u = l.getText();
    if (!u) {
        var f = l.getType();
        if ("unordered-list-item" === f || "ordered-list-item" === f)
            return s(e, t, function (e) {
                return e.merge({
                    type: "unstyled",
                    depth: 0,
                });
            });
    }
    var _ = t.getAnchorOffset(),
        p = l.getCharacterList(),
        h = i(),
        m = l instanceof r,
        g = l.merge({
            text: u.slice(0, _),
            characterList: p.slice(0, _),
        }),
        E = g.merge({
            key: h,
            text: u.slice(_),
            characterList: p.slice(_),
            data: c(),
        }),
        b = o.toSeq().takeUntil(function (e) {
            return e === l;
        }),
        y = o
            .toSeq()
            .skipUntil(function (e) {
                return e === l;
            })
            .rest(),
        O = b
            .concat(
                [
                    [n, g],
                    [h, E],
                ],
                y,
            )
            .toOrderedMap();
    return (
        m && (l.getChildKeys().isEmpty() || a(!1), (O = d(O, g, E))),
        e.merge({
            blockMap: O,
            selectionBefore: t,
            selectionAfter: t.merge({
                anchorKey: h,
                anchorOffset: 0,
                focusKey: h,
                focusOffset: 0,
                isBackward: !1,
            }),
        })
    );
};
