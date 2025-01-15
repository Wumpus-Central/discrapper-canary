var n = r(806998),
    i = r(918720),
    o = r(65183);
o.List;
var a = o.Map,
    u = function (t, e, r) {
        if (!t) return;
        var n = e.get(t);
        if (!!n) e.set(t, r(n));
    },
    s = function (t, e) {
        var r = [];
        if (!t) return r;
        for (var n = e.get(t); n && n.getParentKey(); ) {
            var i = n.getParentKey();
            i && r.push(i), (n = i ? e.get(i) : null);
        }
        return r;
    },
    c = function (t, e) {
        var r = [];
        if (!t) return r;
        for (var n = i(t, e); n && e.get(n); ) {
            var o = e.get(n);
            r.push(n), (n = o.getParentKey() ? i(o, e) : null);
        }
        return r;
    },
    l = function (t, e, r) {
        if (!t) return null;
        for (var n = r.get(t.getKey()).getNextSiblingKey(); n && !e.get(n); ) n = r.get(n).getNextSiblingKey() || null;
        return n;
    },
    f = function (t, e, r) {
        if (!t) return null;
        for (var n = r.get(t.getKey()).getPrevSiblingKey(); n && !e.get(n); ) n = r.get(n).getPrevSiblingKey() || null;
        return n;
    },
    p = function (t, e, r) {
        if (0 === e) for (; e < r; ) (t = t.shift()), e++;
        else if (r === t.count()) for (; r > e; ) (t = t.pop()), r--;
        else {
            var n = t.slice(0, e),
                i = t.slice(r);
            t = n.concat(i).toList();
        }
        return t;
    };
t.exports = function (t, e) {
    if (e.isCollapsed()) return t;
    var r,
        o,
        h,
        d,
        g,
        y = t.getBlockMap(),
        v = e.getStartKey(),
        m = e.getStartOffset(),
        _ = e.getEndKey(),
        b = e.getEndOffset(),
        S = y.get(v),
        w = y.get(_),
        k = S instanceof n,
        x = [];
    if (k) {
        var C = w.getChildKeys(),
            E = s(_, y);
        w.getNextSiblingKey() && (x = x.concat(E)), !C.isEmpty() && (x = x.concat(E.concat([_]))), (x = x.concat(s(i(w, y), y)));
    }
    g = S === w ? p(S.getCharacterList(), m, b) : S.getCharacterList().slice(0, m).concat(w.getCharacterList().slice(b));
    var D = S.merge({
            text: S.getText().slice(0, m) + w.getText().slice(b),
            characterList: g
        }),
        O =
            k && 0 === m && 0 === b && w.getParentKey() === v && null == w.getPrevSiblingKey()
                ? a([[v, null]])
                : y
                      .toSeq()
                      .skipUntil(function (t, e) {
                          return e === v;
                      })
                      .takeUntil(function (t, e) {
                          return e === _;
                      })
                      .filter(function (t, e) {
                          return -1 === x.indexOf(e);
                      })
                      .concat(a([[_, null]]))
                      .map(function (t, e) {
                          return e === v ? D : null;
                      }),
        K = y.merge(O).filter(function (t) {
            return !!t;
        });
    if (k && S !== w) {
        (r = K),
            (o = S),
            (h = w),
            (d = y),
            (K = r.withMutations(function (t) {
                if (
                    (u(o.getKey(), t, function (e) {
                        return e.merge({
                            nextSibling: l(e, t, d),
                            prevSibling: f(e, t, d)
                        });
                    }),
                    u(h.getKey(), t, function (e) {
                        return e.merge({
                            nextSibling: l(e, t, d),
                            prevSibling: f(e, t, d)
                        });
                    }),
                    s(o.getKey(), d).forEach(function (e) {
                        return u(e, t, function (e) {
                            return e.merge({
                                children: e.getChildKeys().filter(function (e) {
                                    return t.get(e);
                                }),
                                nextSibling: l(e, t, d),
                                prevSibling: f(e, t, d)
                            });
                        });
                    }),
                    u(o.getNextSiblingKey(), t, function (t) {
                        return t.merge({ prevSibling: o.getPrevSiblingKey() });
                    }),
                    u(o.getPrevSiblingKey(), t, function (e) {
                        return e.merge({ nextSibling: l(e, t, d) });
                    }),
                    u(h.getNextSiblingKey(), t, function (e) {
                        return e.merge({ prevSibling: f(e, t, d) });
                    }),
                    u(h.getPrevSiblingKey(), t, function (t) {
                        return t.merge({ nextSibling: h.getNextSiblingKey() });
                    }),
                    s(h.getKey(), d).forEach(function (e) {
                        u(e, t, function (e) {
                            return e.merge({
                                children: e.getChildKeys().filter(function (e) {
                                    return t.get(e);
                                }),
                                nextSibling: l(e, t, d),
                                prevSibling: f(e, t, d)
                            });
                        });
                    }),
                    c(h, d).forEach(function (e) {
                        return u(e, t, function (e) {
                            return e.merge({
                                nextSibling: l(e, t, d),
                                prevSibling: f(e, t, d)
                            });
                        });
                    }),
                    null == r.get(o.getKey()) && null != r.get(h.getKey()) && h.getParentKey() === o.getKey() && null == h.getPrevSiblingKey())
                ) {
                    var e = o.getPrevSiblingKey();
                    u(h.getKey(), t, function (t) {
                        return t.merge({ prevSibling: e });
                    }),
                        u(e, t, function (t) {
                            return t.merge({ nextSibling: h.getKey() });
                        });
                    var n = e ? r.get(e) : null,
                        i = n ? n.getParentKey() : null;
                    if (
                        (o.getChildKeys().forEach(function (e) {
                            u(e, t, function (t) {
                                return t.merge({ parent: i });
                            });
                        }),
                        null != i)
                    ) {
                        var a = r.get(i);
                        u(i, t, function (t) {
                            return t.merge({ children: a.getChildKeys().concat(o.getChildKeys()) });
                        });
                    }
                    u(
                        o.getChildKeys().find(function (t) {
                            return null === r.get(t).getNextSiblingKey();
                        }),
                        t,
                        function (t) {
                            return t.merge({ nextSibling: o.getNextSiblingKey() });
                        }
                    );
                }
            }));
    }
    return t.merge({
        blockMap: K,
        selectionBefore: e,
        selectionAfter: e.merge({
            anchorKey: v,
            anchorOffset: m,
            focusKey: v,
            focusOffset: m,
            isBackward: !1
        })
    });
};
