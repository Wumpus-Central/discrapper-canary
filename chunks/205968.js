function r(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}

function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var a = n(68055),
    s = n(617179),
    o = n(244767),
    l = n(45069),
    c = n(144531);
n(9011);
var u = n(225758),
    d = n(190346),
    f = n(622114),
    p = n(185607),
    _ = n(279998),
    h = n(661551),
    m = n(116740),
    g = n(797686),
    E = h("draft_tree_data_support"),
    b = m.List,
    y = m.Map,
    O = m.OrderedMap,
    A = function (e, t) {
        var n = e.key,
            r = e.type,
            i = e.data;
        return {
            text: e.text,
            depth: e.depth || 0,
            type: r || "unstyled",
            key: n || _(),
            data: y(i),
            characterList: v(e, t),
        };
    },
    v = function (e, t) {
        var n = e.text,
            i = e.entityRanges,
            a = e.inlineStyleRanges,
            s = i || [];
        return d(
            p(n, a || []),
            f(
                n,
                s
                    .filter(function (e) {
                        return t.hasOwnProperty(e.key);
                    })
                    .map(function (e) {
                        return r({}, e, {
                            key: t[e.key],
                        });
                    }),
            ),
        );
    },
    S = function (e) {
        return r({}, e, {
            key: e.key || _(),
        });
    },
    I = function (e, t, n) {
        var i = t.map(function (e) {
            return r({}, e, {
                parentRef: n,
            });
        });
        return e.concat(i.reverse());
    },
    T = function (e, t) {
        return e.map(S).reduce(function (n, i, a) {
            Array.isArray(i.children) || g(!1);
            var o = i.children.map(S),
                l = new s(
                    r({}, A(i, t), {
                        prevSibling: 0 === a ? null : e[a - 1].key,
                        nextSibling: a === e.length - 1 ? null : e[a + 1].key,
                        children: b(
                            o.map(function (e) {
                                return e.key;
                            }),
                        ),
                    }),
                );
            n = n.set(l.getKey(), l);
            for (var c = I([], o, l); c.length > 0; ) {
                var u = c.pop(),
                    d = u.parentRef,
                    f = d.getChildKeys(),
                    p = f.indexOf(u.key),
                    _ = Array.isArray(u.children);
                if (!_) {
                    _ || g(!1);
                    break;
                }
                var h = u.children.map(S),
                    m = new s(
                        r({}, A(u, t), {
                            parent: d.getKey(),
                            children: b(
                                h.map(function (e) {
                                    return e.key;
                                }),
                            ),
                            prevSibling: 0 === p ? null : f.get(p - 1),
                            nextSibling: p === f.size - 1 ? null : f.get(p + 1),
                        }),
                    );
                (n = n.set(m.getKey(), m)), (c = I(c, h, m));
            }
            return n;
        }, O());
    },
    C = function (e, t) {
        return O(
            e.map(function (e) {
                var n = new a(A(e, t));
                return [n.getKey(), n];
            }),
        );
    },
    N = function (e, t) {
        var n = e.blocks.find(function (e) {
                return Array.isArray(e.children) && e.children.length > 0;
            }),
            r = E && !n ? c.fromRawStateToRawTreeState(e).blocks : e.blocks;
        return E ? T(r, t) : C(n ? c.fromRawTreeStateToRawState(e).blocks : r, t);
    },
    R = function (e) {
        var t = e.entityMap,
            n = {};
        return (
            Object.keys(t).forEach(function (e) {
                var r = t[e],
                    i = r.type,
                    a = r.mutability,
                    s = r.data;
                n[e] = l.__create(i, a, s || {});
            }),
            n
        );
    };
e.exports = function (e) {
    Array.isArray(e.blocks) || g(!1);
    var t = R(e),
        n = N(e, t),
        r = n.isEmpty() ? new u() : u.createEmpty(n.first().getKey());
    return new o({
        blockMap: n,
        entityMap: t,
        selectionBefore: r,
        selectionAfter: r,
    });
};
