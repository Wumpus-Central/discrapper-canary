var r = n(617179),
    i = n(27395),
    a = n(116740);
a.List;
var s = a.Map,
    o = function (e, t, n) {
        if (e) {
            var r = t.get(e);
            r && t.set(e, n(r));
        }
    },
    l = function (e, t) {
        var n = [];
        if (!e) return n;
        for (var r = t.get(e); r && r.getParentKey(); ) {
            var i = r.getParentKey();
            i && n.push(i), (r = i ? t.get(i) : null);
        }
        return n;
    },
    c = function (e, t) {
        var n = [];
        if (!e) return n;
        for (var r = i(e, t); r && t.get(r); ) {
            var a = t.get(r);
            n.push(r), (r = a.getParentKey() ? i(a, t) : null);
        }
        return n;
    },
    u = function (e, t, n) {
        if (!e) return null;
        for (var r = n.get(e.getKey()).getNextSiblingKey(); r && !t.get(r); ) r = n.get(r).getNextSiblingKey() || null;
        return r;
    },
    d = function (e, t, n) {
        if (!e) return null;
        for (var r = n.get(e.getKey()).getPrevSiblingKey(); r && !t.get(r); ) r = n.get(r).getPrevSiblingKey() || null;
        return r;
    },
    f = function (e, t, n, r) {
        return e.withMutations(function (i) {
            if (
                (o(t.getKey(), i, function (e) {
                    return e.merge({
                        nextSibling: u(e, i, r),
                        prevSibling: d(e, i, r),
                    });
                }),
                o(n.getKey(), i, function (e) {
                    return e.merge({
                        nextSibling: u(e, i, r),
                        prevSibling: d(e, i, r),
                    });
                }),
                l(t.getKey(), r).forEach(function (e) {
                    return o(e, i, function (e) {
                        return e.merge({
                            children: e.getChildKeys().filter(function (e) {
                                return i.get(e);
                            }),
                            nextSibling: u(e, i, r),
                            prevSibling: d(e, i, r),
                        });
                    });
                }),
                o(t.getNextSiblingKey(), i, function (e) {
                    return e.merge({ prevSibling: t.getPrevSiblingKey() });
                }),
                o(t.getPrevSiblingKey(), i, function (e) {
                    return e.merge({ nextSibling: u(e, i, r) });
                }),
                o(n.getNextSiblingKey(), i, function (e) {
                    return e.merge({ prevSibling: d(e, i, r) });
                }),
                o(n.getPrevSiblingKey(), i, function (e) {
                    return e.merge({ nextSibling: n.getNextSiblingKey() });
                }),
                l(n.getKey(), r).forEach(function (e) {
                    o(e, i, function (e) {
                        return e.merge({
                            children: e.getChildKeys().filter(function (e) {
                                return i.get(e);
                            }),
                            nextSibling: u(e, i, r),
                            prevSibling: d(e, i, r),
                        });
                    });
                }),
                c(n, r).forEach(function (e) {
                    return o(e, i, function (e) {
                        return e.merge({
                            nextSibling: u(e, i, r),
                            prevSibling: d(e, i, r),
                        });
                    });
                }),
                null == e.get(t.getKey()) &&
                    null != e.get(n.getKey()) &&
                    n.getParentKey() === t.getKey() &&
                    null == n.getPrevSiblingKey())
            ) {
                var a = t.getPrevSiblingKey();
                o(n.getKey(), i, function (e) {
                    return e.merge({ prevSibling: a });
                }),
                    o(a, i, function (e) {
                        return e.merge({ nextSibling: n.getKey() });
                    });
                var s = a ? e.get(a) : null,
                    f = s ? s.getParentKey() : null;
                if (
                    (t.getChildKeys().forEach(function (e) {
                        o(e, i, function (e) {
                            return e.merge({ parent: f });
                        });
                    }),
                    null != f)
                ) {
                    var p = e.get(f);
                    o(f, i, function (e) {
                        return e.merge({ children: p.getChildKeys().concat(t.getChildKeys()) });
                    });
                }
                o(
                    t.getChildKeys().find(function (t) {
                        return null === e.get(t).getNextSiblingKey();
                    }),
                    i,
                    function (e) {
                        return e.merge({ nextSibling: t.getNextSiblingKey() });
                    },
                );
            }
        });
    },
    p = function (e, t, n) {
        if (0 === t) for (; t < n; ) (e = e.shift()), t++;
        else if (n === e.count()) for (; n > t; ) (e = e.pop()), n--;
        else {
            var r = e.slice(0, t),
                i = e.slice(n);
            e = r.concat(i).toList();
        }
        return e;
    };
e.exports = function (e, t) {
    if (t.isCollapsed()) return e;
    var n,
        a = e.getBlockMap(),
        o = t.getStartKey(),
        c = t.getStartOffset(),
        u = t.getEndKey(),
        d = t.getEndOffset(),
        _ = a.get(o),
        h = a.get(u),
        m = _ instanceof r,
        g = [];
    if (m) {
        var E = h.getChildKeys(),
            b = l(u, a);
        h.getNextSiblingKey() && (g = g.concat(b)),
            E.isEmpty() || (g = g.concat(b.concat([u]))),
            (g = g.concat(l(i(h, a), a)));
    }
    n =
        _ === h
            ? p(_.getCharacterList(), c, d)
            : _.getCharacterList().slice(0, c).concat(h.getCharacterList().slice(d));
    var y = _.merge({
            text: _.getText().slice(0, c) + h.getText().slice(d),
            characterList: n,
        }),
        O =
            m && 0 === c && 0 === d && h.getParentKey() === o && null == h.getPrevSiblingKey()
                ? s([[o, null]])
                : a
                      .toSeq()
                      .skipUntil(function (e, t) {
                          return t === o;
                      })
                      .takeUntil(function (e, t) {
                          return t === u;
                      })
                      .filter(function (e, t) {
                          return -1 === g.indexOf(t);
                      })
                      .concat(s([[u, null]]))
                      .map(function (e, t) {
                          return t === o ? y : null;
                      }),
        A = a.merge(O).filter(function (e) {
            return !!e;
        });
    return (
        m && _ !== h && (A = f(A, _, h, a)),
        e.merge({
            blockMap: A,
            selectionBefore: t,
            selectionAfter: t.merge({
                anchorKey: o,
                anchorOffset: c,
                focusKey: o,
                focusOffset: c,
                isBackward: !1,
            }),
        })
    );
};
