var n = r(806998),
    i = r(918720),
    o = r(65183);
o.List;
var a = o.Map,
    u = function (t, e, r) {
        if (t) {
            var n = e.get(t);
            n && e.set(t, r(n));
        }
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
        h = t.getBlockMap(),
        d = e.getStartKey(),
        g = e.getStartOffset(),
        y = e.getEndKey(),
        v = e.getEndOffset(),
        m = h.get(d),
        _ = h.get(y),
        b = m instanceof n,
        S = [];
    if (b) {
        var w = _.getChildKeys(),
            x = s(y, h);
        _.getNextSiblingKey() && (S = S.concat(x)), w.isEmpty() || (S = S.concat(x.concat([y]))), (S = S.concat(s(i(_, h), h)));
    }
    o = m === _ ? p(m.getCharacterList(), g, v) : m.getCharacterList().slice(0, g).concat(_.getCharacterList().slice(v));
    var k = m.merge({
            text: m.getText().slice(0, g) + _.getText().slice(v),
            characterList: o
        }),
        E =
            b && 0 === g && 0 === v && _.getParentKey() === d && null == _.getPrevSiblingKey()
                ? a([[d, null]])
                : h
                      .toSeq()
                      .skipUntil(function (t, e) {
                          return e === d;
                      })
                      .takeUntil(function (t, e) {
                          return e === y;
                      })
                      .filter(function (t, e) {
                          return -1 === S.indexOf(e);
                      })
                      .concat(a([[y, null]]))
                      .map(function (t, e) {
                          return e === d ? k : null;
                      }),
        C = h.merge(E).filter(function (t) {
            return !!t;
        });
    return (
        b &&
            m !== _ &&
            (C = (r = C).withMutations(function (t) {
                if (
                    (u(m.getKey(), t, function (e) {
                        return e.merge({
                            nextSibling: l(e, t, h),
                            prevSibling: f(e, t, h)
                        });
                    }),
                    u(_.getKey(), t, function (e) {
                        return e.merge({
                            nextSibling: l(e, t, h),
                            prevSibling: f(e, t, h)
                        });
                    }),
                    s(m.getKey(), h).forEach(function (e) {
                        return u(e, t, function (e) {
                            return e.merge({
                                children: e.getChildKeys().filter(function (e) {
                                    return t.get(e);
                                }),
                                nextSibling: l(e, t, h),
                                prevSibling: f(e, t, h)
                            });
                        });
                    }),
                    u(m.getNextSiblingKey(), t, function (t) {
                        return t.merge({ prevSibling: m.getPrevSiblingKey() });
                    }),
                    u(m.getPrevSiblingKey(), t, function (e) {
                        return e.merge({ nextSibling: l(e, t, h) });
                    }),
                    u(_.getNextSiblingKey(), t, function (e) {
                        return e.merge({ prevSibling: f(e, t, h) });
                    }),
                    u(_.getPrevSiblingKey(), t, function (t) {
                        return t.merge({ nextSibling: _.getNextSiblingKey() });
                    }),
                    s(_.getKey(), h).forEach(function (e) {
                        u(e, t, function (e) {
                            return e.merge({
                                children: e.getChildKeys().filter(function (e) {
                                    return t.get(e);
                                }),
                                nextSibling: l(e, t, h),
                                prevSibling: f(e, t, h)
                            });
                        });
                    }),
                    c(_, h).forEach(function (e) {
                        return u(e, t, function (e) {
                            return e.merge({
                                nextSibling: l(e, t, h),
                                prevSibling: f(e, t, h)
                            });
                        });
                    }),
                    null == r.get(m.getKey()) && null != r.get(_.getKey()) && _.getParentKey() === m.getKey() && null == _.getPrevSiblingKey())
                ) {
                    var e = m.getPrevSiblingKey();
                    u(_.getKey(), t, function (t) {
                        return t.merge({ prevSibling: e });
                    }),
                        u(e, t, function (t) {
                            return t.merge({ nextSibling: _.getKey() });
                        });
                    var n = e ? r.get(e) : null,
                        i = n ? n.getParentKey() : null;
                    if (
                        (m.getChildKeys().forEach(function (e) {
                            u(e, t, function (t) {
                                return t.merge({ parent: i });
                            });
                        }),
                        null != i)
                    ) {
                        var o = r.get(i);
                        u(i, t, function (t) {
                            return t.merge({ children: o.getChildKeys().concat(m.getChildKeys()) });
                        });
                    }
                    u(
                        m.getChildKeys().find(function (t) {
                            return null === r.get(t).getNextSiblingKey();
                        }),
                        t,
                        function (t) {
                            return t.merge({ nextSibling: m.getNextSiblingKey() });
                        }
                    );
                }
            })),
        t.merge({
            blockMap: C,
            selectionBefore: e,
            selectionAfter: e.merge({
                anchorKey: d,
                anchorOffset: g,
                focusKey: d,
                focusOffset: g,
                isBackward: !1
            })
        })
    );
};
