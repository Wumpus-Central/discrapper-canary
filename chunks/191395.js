var r = n(214788),
    i = n(260284),
    o = n(65183);
o.List;
var a = o.Map,
    s = function (e, t, n) {
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
            (i && n.push(i), (r = i ? t.get(i) : null));
        }
        return n;
    },
    c = function (e, t) {
        var n = [];
        if (!e) return n;
        for (var r = i(e, t); r && t.get(r); ) {
            var o = t.get(r);
            (n.push(r), (r = o.getParentKey() ? i(o, t) : null));
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
                (s(t.getKey(), i, function (e) {
                    return e.merge({
                        nextSibling: u(e, i, r),
                        prevSibling: d(e, i, r)
                    });
                }),
                s(n.getKey(), i, function (e) {
                    return e.merge({
                        nextSibling: u(e, i, r),
                        prevSibling: d(e, i, r)
                    });
                }),
                l(t.getKey(), r).forEach(function (e) {
                    return s(e, i, function (e) {
                        return e.merge({
                            children: e.getChildKeys().filter(function (e) {
                                return i.get(e);
                            }),
                            nextSibling: u(e, i, r),
                            prevSibling: d(e, i, r)
                        });
                    });
                }),
                s(t.getNextSiblingKey(), i, function (e) {
                    return e.merge({ prevSibling: t.getPrevSiblingKey() });
                }),
                s(t.getPrevSiblingKey(), i, function (e) {
                    return e.merge({ nextSibling: u(e, i, r) });
                }),
                s(n.getNextSiblingKey(), i, function (e) {
                    return e.merge({ prevSibling: d(e, i, r) });
                }),
                s(n.getPrevSiblingKey(), i, function (e) {
                    return e.merge({ nextSibling: n.getNextSiblingKey() });
                }),
                l(n.getKey(), r).forEach(function (e) {
                    s(e, i, function (e) {
                        return e.merge({
                            children: e.getChildKeys().filter(function (e) {
                                return i.get(e);
                            }),
                            nextSibling: u(e, i, r),
                            prevSibling: d(e, i, r)
                        });
                    });
                }),
                c(n, r).forEach(function (e) {
                    return s(e, i, function (e) {
                        return e.merge({
                            nextSibling: u(e, i, r),
                            prevSibling: d(e, i, r)
                        });
                    });
                }),
                null == e.get(t.getKey()) && null != e.get(n.getKey()) && n.getParentKey() === t.getKey() && null == n.getPrevSiblingKey())
            ) {
                var o = t.getPrevSiblingKey();
                (s(n.getKey(), i, function (e) {
                    return e.merge({ prevSibling: o });
                }),
                    s(o, i, function (e) {
                        return e.merge({ nextSibling: n.getKey() });
                    }));
                var a = o ? e.get(o) : null,
                    f = a ? a.getParentKey() : null;
                if (
                    (t.getChildKeys().forEach(function (e) {
                        s(e, i, function (e) {
                            return e.merge({ parent: f });
                        });
                    }),
                    null != f)
                ) {
                    var _ = e.get(f);
                    s(f, i, function (e) {
                        return e.merge({ children: _.getChildKeys().concat(t.getChildKeys()) });
                    });
                }
                s(
                    t.getChildKeys().find(function (t) {
                        return null === e.get(t).getNextSiblingKey();
                    }),
                    i,
                    function (e) {
                        return e.merge({ nextSibling: t.getNextSiblingKey() });
                    }
                );
            }
        });
    },
    _ = function (e, t, n) {
        if (0 === t) for (; t < n; ) ((e = e.shift()), t++);
        else if (n === e.count()) for (; n > t; ) ((e = e.pop()), n--);
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
        o = e.getBlockMap(),
        s = t.getStartKey(),
        c = t.getStartOffset(),
        u = t.getEndKey(),
        d = t.getEndOffset(),
        p = o.get(s),
        h = o.get(u),
        m = p instanceof r,
        g = [];
    if (m) {
        var E = h.getChildKeys(),
            b = l(u, o);
        (h.getNextSiblingKey() && (g = g.concat(b)), E.isEmpty() || (g = g.concat(b.concat([u]))), (g = g.concat(l(i(h, o), o))));
    }
    n = p === h ? _(p.getCharacterList(), c, d) : p.getCharacterList().slice(0, c).concat(h.getCharacterList().slice(d));
    var y = p.merge({
            text: p.getText().slice(0, c) + h.getText().slice(d),
            characterList: n
        }),
        O =
            m && 0 === c && 0 === d && h.getParentKey() === s && null == h.getPrevSiblingKey()
                ? a([[s, null]])
                : o
                      .toSeq()
                      .skipUntil(function (e, t) {
                          return t === s;
                      })
                      .takeUntil(function (e, t) {
                          return t === u;
                      })
                      .filter(function (e, t) {
                          return -1 === g.indexOf(t);
                      })
                      .concat(a([[u, null]]))
                      .map(function (e, t) {
                          return t === s ? y : null;
                      }),
        v = o.merge(O).filter(function (e) {
            return !!e;
        });
    return (
        m && p !== h && (v = f(v, p, h, o)),
        e.merge({
            blockMap: v,
            selectionBefore: t,
            selectionAfter: t.merge({
                anchorKey: s,
                anchorOffset: c,
                focusKey: s,
                focusOffset: c,
                isBackward: !1
            })
        })
    );
};
