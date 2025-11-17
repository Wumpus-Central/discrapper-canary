var r = n(309987),
    i = n(44135),
    a = n(65183),
    o = n(581079),
    s = a.OrderedMap,
    l = a.List,
    c = function (e, t, n) {
        if (e) {
            var r = t.get(e);
            r && t.set(e, n(r));
        }
    },
    u = function (e, t, n, r, i) {
        if (!i) return e;
        var a = "after" === r,
            o = t.getKey(),
            s = n.getKey(),
            u = t.getParentKey(),
            d = t.getNextSiblingKey(),
            f = t.getPrevSiblingKey(),
            _ = n.getParentKey(),
            p = a ? n.getNextSiblingKey() : s,
            h = a ? s : n.getPrevSiblingKey();
        return e.withMutations(function (e) {
            c(u, e, function (e) {
                var t = e.getChildKeys();
                return e.merge({ children: t.delete(t.indexOf(o)) });
            }),
                c(f, e, function (e) {
                    return e.merge({ nextSibling: d });
                }),
                c(d, e, function (e) {
                    return e.merge({ prevSibling: f });
                }),
                c(p, e, function (e) {
                    return e.merge({ prevSibling: o });
                }),
                c(h, e, function (e) {
                    return e.merge({ nextSibling: o });
                }),
                c(_, e, function (e) {
                    var t = e.getChildKeys(),
                        n = t.indexOf(s),
                        r = a ? n + 1 : 0 !== n ? n - 1 : 0,
                        i = t.toArray();
                    return i.splice(r, 0, o), e.merge({ children: l(i) });
                }),
                c(o, e, function (e) {
                    return e.merge({
                        nextSibling: p,
                        prevSibling: h,
                        parent: _,
                    });
                });
        });
    };
e.exports = function (e, t, n, a) {
    "replace" === a && o(!1);
    var l = n.getKey(),
        c = t.getKey();
    c === l && o(!1);
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
                        a = n && t !== n,
                        o = !n && e.getParentKey() && (!r || t !== r);
                    return !!(i || a || o);
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
    if ("before" === a) {
        var b = e.getBlockBefore(l);
        b && b.getKey() === t.getKey() && o(!1), (E = h.concat([].concat(g, [[l, n]]), m).toOrderedMap());
    } else if ("after" === a) {
        var y = e.getBlockAfter(l);
        y && y.getKey() === c && o(!1), (E = h.concat([[l, n]].concat(g), m).toOrderedMap());
    }
    return e.merge({
        blockMap: u(E, t, n, a, f),
        selectionBefore: e.getSelectionAfter(),
        selectionAfter: e.getSelectionAfter().merge({
            anchorKey: c,
            focusKey: c,
        }),
    });
};
