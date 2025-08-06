var r = n(214788),
    i = n(260284),
    o = n(65183),
    a = n(581079),
    s = o.OrderedMap,
    l = o.List,
    c = function (e, t, n) {
        if (e) {
            var r = t.get(e);
            r && t.set(e, n(r));
        }
    },
    u = function (e, t, n, r, i) {
        if (!i) return e;
        var o = "after" === r,
            a = t.getKey(),
            s = n.getKey(),
            u = t.getParentKey(),
            d = t.getNextSiblingKey(),
            f = t.getPrevSiblingKey(),
            _ = n.getParentKey(),
            p = o ? n.getNextSiblingKey() : s,
            h = o ? s : n.getPrevSiblingKey();
        return e.withMutations(function (e) {
            c(u, e, function (e) {
                var t = e.getChildKeys();
                return e.merge({ children: t.delete(t.indexOf(a)) });
            }),
                c(f, e, function (e) {
                    return e.merge({ nextSibling: d });
                }),
                c(d, e, function (e) {
                    return e.merge({ prevSibling: f });
                }),
                c(p, e, function (e) {
                    return e.merge({ prevSibling: a });
                }),
                c(h, e, function (e) {
                    return e.merge({ nextSibling: a });
                }),
                c(_, e, function (e) {
                    var t = e.getChildKeys(),
                        n = t.indexOf(s),
                        r = o ? n + 1 : 0 !== n ? n - 1 : 0,
                        i = t.toArray();
                    return i.splice(r, 0, a), e.merge({ children: l(i) });
                }),
                c(a, e, function (e) {
                    return e.merge({
                        nextSibling: p,
                        prevSibling: h,
                        parent: _,
                    });
                });
        });
    };
e.exports = function (e, t, n, o) {
    "replace" === o && a(!1);
    var l = n.getKey(),
        c = t.getKey();
    c === l && a(!1);
    var d = e.getBlockMap(),
        f = t instanceof r,
        _ = [t],
        p = d.delete(c);
    f &&
        ((_ = []),
        (p = d.withMutations(function (e) {
            var n = t.getNextSiblingKey(),
                r = i(t, e);
            e.toSeq()
                .skipUntil(function (e) {
                    return e.getKey() === c;
                })
                .takeWhile(function (e) {
                    var t = e.getKey(),
                        i = t === c,
                        o = n && t !== n,
                        a = !n && e.getParentKey() && (!r || t !== r);
                    return !!(i || o || a);
                })
                .forEach(function (t) {
                    _.push(t), e.delete(t.getKey());
                });
        })));
    var h = p.toSeq().takeUntil(function (e) {
            return e === n;
        }),
        m = p
            .toSeq()
            .skipUntil(function (e) {
                return e === n;
            })
            .skip(1),
        g = _.map(function (e) {
            return [e.getKey(), e];
        }),
        E = s();
    if ("before" === o) {
        var b = e.getBlockBefore(l);
        b && b.getKey() === t.getKey() && a(!1), (E = h.concat([].concat(g, [[l, n]]), m).toOrderedMap());
    } else if ("after" === o) {
        var y = e.getBlockAfter(l);
        y && y.getKey() === c && a(!1), (E = h.concat([[l, n]].concat(g), m).toOrderedMap());
    }
    return e.merge({
        blockMap: u(E, t, n, o, f),
        selectionBefore: e.getSelectionAfter(),
        selectionAfter: e.getSelectionAfter().merge({
            anchorKey: c,
            focusKey: c,
        }),
    });
};
