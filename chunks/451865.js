var r = n(617179),
    i = n(279998),
    a = n(116740),
    s = n(797686),
    o = n(728601),
    l = a.List,
    c = a.Map,
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
                    a = t.toArray();
                return (
                    a.splice(n, 0, i),
                    e.merge({
                        children: l(a),
                    })
                );
            }),
                u(t.getNextSiblingKey(), e, function (e) {
                    return e.merge({
                        prevSibling: i,
                    });
                }),
                u(r, e, function (e) {
                    return e.merge({
                        nextSibling: i,
                    });
                }),
                u(i, e, function (e) {
                    return e.merge({
                        prevSibling: r,
                    });
                });
        });
    };
e.exports = function (e, t) {
    t.isCollapsed() || s(!1);
    var n = t.getAnchorKey(),
        a = e.getBlockMap(),
        l = a.get(n),
        u = l.getText();
    if (!u) {
        var f = l.getType();
        if ("unordered-list-item" === f || "ordered-list-item" === f)
            return o(e, t, function (e) {
                return e.merge({
                    type: "unstyled",
                    depth: 0,
                });
            });
    }
    var p = t.getAnchorOffset(),
        _ = l.getCharacterList(),
        h = i(),
        m = l instanceof r,
        g = l.merge({
            text: u.slice(0, p),
            characterList: _.slice(0, p),
        }),
        E = g.merge({
            key: h,
            text: u.slice(p),
            characterList: _.slice(p),
            data: c(),
        }),
        b = a.toSeq().takeUntil(function (e) {
            return e === l;
        }),
        y = a
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
        m && (l.getChildKeys().isEmpty() || s(!1), (O = d(O, g, E))),
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
