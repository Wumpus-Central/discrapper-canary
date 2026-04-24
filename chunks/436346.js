"use strict";
var n = r(617179),
    i = r(27395),
    o = r(116740);
o.List;
var a = o.Map,
    s = function (t, e, r) {
        if (t) {
            var n = e.get(t);
            n && e.set(t, r(n));
        }
    },
    u = function (t, e) {
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
            k = u(y, h);
        _.getNextSiblingKey() && (S = S.concat(k)),
            w.isEmpty() || (S = S.concat(k.concat([y]))),
            (S = S.concat(u(i(_, h), h)));
    }
    o =
        m === _
            ? p(m.getCharacterList(), g, v)
            : m.getCharacterList().slice(0, g).concat(_.getCharacterList().slice(v));
    var x = m.merge({ text: m.getText().slice(0, g) + _.getText().slice(v), characterList: o }),
        C =
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
                          return e === d ? x : null;
                      }),
        E = h.merge(C).filter(function (t) {
            return !!t;
        });
    return (
        b &&
            m !== _ &&
            (E = (r = E).withMutations(function (t) {
                if (
                    (s(m.getKey(), t, function (e) {
                        return e.merge({ nextSibling: l(e, t, h), prevSibling: f(e, t, h) });
                    }),
                    s(_.getKey(), t, function (e) {
                        return e.merge({ nextSibling: l(e, t, h), prevSibling: f(e, t, h) });
                    }),
                    u(m.getKey(), h).forEach(function (e) {
                        return s(e, t, function (e) {
                            return e.merge({
                                children: e.getChildKeys().filter(function (e) {
                                    return t.get(e);
                                }),
                                nextSibling: l(e, t, h),
                                prevSibling: f(e, t, h),
                            });
                        });
                    }),
                    s(m.getNextSiblingKey(), t, function (t) {
                        return t.merge({ prevSibling: m.getPrevSiblingKey() });
                    }),
                    s(m.getPrevSiblingKey(), t, function (e) {
                        return e.merge({ nextSibling: l(e, t, h) });
                    }),
                    s(_.getNextSiblingKey(), t, function (e) {
                        return e.merge({ prevSibling: f(e, t, h) });
                    }),
                    s(_.getPrevSiblingKey(), t, function (t) {
                        return t.merge({ nextSibling: _.getNextSiblingKey() });
                    }),
                    u(_.getKey(), h).forEach(function (e) {
                        s(e, t, function (e) {
                            return e.merge({
                                children: e.getChildKeys().filter(function (e) {
                                    return t.get(e);
                                }),
                                nextSibling: l(e, t, h),
                                prevSibling: f(e, t, h),
                            });
                        });
                    }),
                    c(_, h).forEach(function (e) {
                        return s(e, t, function (e) {
                            return e.merge({ nextSibling: l(e, t, h), prevSibling: f(e, t, h) });
                        });
                    }),
                    null == r.get(m.getKey()) &&
                        null != r.get(_.getKey()) &&
                        _.getParentKey() === m.getKey() &&
                        null == _.getPrevSiblingKey())
                ) {
                    var e = m.getPrevSiblingKey();
                    s(_.getKey(), t, function (t) {
                        return t.merge({ prevSibling: e });
                    }),
                        s(e, t, function (t) {
                            return t.merge({ nextSibling: _.getKey() });
                        });
                    var n = e ? r.get(e) : null,
                        i = n ? n.getParentKey() : null;
                    if (
                        (m.getChildKeys().forEach(function (e) {
                            s(e, t, function (t) {
                                return t.merge({ parent: i });
                            });
                        }),
                        null != i)
                    ) {
                        var o = r.get(i);
                        s(i, t, function (t) {
                            return t.merge({ children: o.getChildKeys().concat(m.getChildKeys()) });
                        });
                    }
                    s(
                        m.getChildKeys().find(function (t) {
                            return null === r.get(t).getNextSiblingKey();
                        }),
                        t,
                        function (t) {
                            return t.merge({ nextSibling: m.getNextSiblingKey() });
                        },
                    );
                }
            })),
        t.merge({
            blockMap: E,
            selectionBefore: e,
            selectionAfter: e.merge({ anchorKey: d, anchorOffset: g, focusKey: d, focusOffset: g, isBackward: !1 }),
        })
    );
};
