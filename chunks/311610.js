var r = n(617179),
    i = n(27395),
    a = n(116740),
    s = n(797686),
    o = a.OrderedMap,
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
            s = t.getKey(),
            o = n.getKey(),
            u = t.getParentKey(),
            d = t.getNextSiblingKey(),
            f = t.getPrevSiblingKey(),
            p = n.getParentKey(),
            _ = a ? n.getNextSiblingKey() : o,
            h = a ? o : n.getPrevSiblingKey();
        return e.withMutations(function (e) {
            c(u, e, function (e) {
                var t = e.getChildKeys();
                return e.merge({
                    children: t.delete(t.indexOf(s)),
                });
            }),
                c(f, e, function (e) {
                    return e.merge({
                        nextSibling: d,
                    });
                }),
                c(d, e, function (e) {
                    return e.merge({
                        prevSibling: f,
                    });
                }),
                c(_, e, function (e) {
                    return e.merge({
                        prevSibling: s,
                    });
                }),
                c(h, e, function (e) {
                    return e.merge({
                        nextSibling: s,
                    });
                }),
                c(p, e, function (e) {
                    var t = e.getChildKeys(),
                        n = t.indexOf(o),
                        r = a ? n + 1 : 0 !== n ? n - 1 : 0,
                        i = t.toArray();
                    return (
                        i.splice(r, 0, s),
                        e.merge({
                            children: l(i),
                        })
                    );
                }),
                c(s, e, function (e) {
                    return e.merge({
                        nextSibling: _,
                        prevSibling: h,
                        parent: p,
                    });
                });
        });
    };
e.exports = function (e, t, n, a) {
    "replace" === a && s(!1);
    var l = n.getKey(),
        c = t.getKey();
    c === l && s(!1);
    var d = e.getBlockMap(),
        f = t instanceof r,
        p = [t],
        _ = d.delete(c);
    f &&
        ((p = []),
        (_ = d.withMutations(function (e) {
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
                        s = !n && e.getParentKey() && (!r || t !== r);
                    return !!(i || a || s);
                })
                .forEach(function (t) {
                    p.push(t), e.delete(t.getKey());
                });
        })));
    var h = _.toSeq().takeUntil(function (e) {
            return e === n;
        }),
        m = _.toSeq()
            .skipUntil(function (e) {
                return e === n;
            })
            .skip(1),
        g = p.map(function (e) {
            return [e.getKey(), e];
        }),
        E = o();
    if ("before" === a) {
        var b = e.getBlockBefore(l);
        b && b.getKey() === t.getKey() && s(!1), (E = h.concat([].concat(g, [[l, n]]), m).toOrderedMap());
    } else if ("after" === a) {
        var y = e.getBlockAfter(l);
        y && y.getKey() === c && s(!1), (E = h.concat([[l, n]].concat(g), m).toOrderedMap());
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
