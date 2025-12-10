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
var a = n(117242),
    o = n(309987),
    s = n(769698),
    l = n(364918),
    c = n(798485);
n(72322);
var u = n(365702),
    d = n(281509),
    f = n(62105),
    p = n(504117),
    _ = n(703579),
    m = n(40375),
    h = n(65183),
    g = n(581079),
    E = m("draft_tree_data_support"),
    b = h.List,
    y = h.Map,
    O = h.OrderedMap,
    v = function (e, t) {
        var n = e.key,
            r = e.type,
            i = e.data;
        return {
            text: e.text,
            depth: e.depth || 0,
            type: r || "unstyled",
            key: n || _(),
            data: y(i),
            characterList: S(e, t),
        };
    },
    S = function (e, t) {
        var n = e.text,
            i = e.entityRanges,
            a = e.inlineStyleRanges,
            o = i || [];
        return d(
            p(n, a || []),
            f(
                n,
                o
                    .filter(function (e) {
                        return t.hasOwnProperty(e.key);
                    })
                    .map(function (e) {
                        return r({}, e, { key: t[e.key] });
                    }),
            ),
        );
    },
    I = function (e) {
        return r({}, e, { key: e.key || _() });
    },
    T = function (e, t, n) {
        var i = t.map(function (e) {
            return r({}, e, { parentRef: n });
        });
        return e.concat(i.reverse());
    },
    C = function (e, t) {
        return e.map(I).reduce(function (n, i, a) {
            Array.isArray(i.children) || g(!1);
            var s = i.children.map(I),
                l = new o(
                    r({}, v(i, t), {
                        prevSibling: 0 === a ? null : e[a - 1].key,
                        nextSibling: a === e.length - 1 ? null : e[a + 1].key,
                        children: b(
                            s.map(function (e) {
                                return e.key;
                            }),
                        ),
                    }),
                );
            n = n.set(l.getKey(), l);
            for (var c = T([], s, l); c.length > 0; ) {
                var u = c.pop(),
                    d = u.parentRef,
                    f = d.getChildKeys(),
                    p = f.indexOf(u.key),
                    _ = Array.isArray(u.children);
                if (!_) {
                    _ || g(!1);
                    break;
                }
                var m = u.children.map(I),
                    h = new o(
                        r({}, v(u, t), {
                            parent: d.getKey(),
                            children: b(
                                m.map(function (e) {
                                    return e.key;
                                }),
                            ),
                            prevSibling: 0 === p ? null : f.get(p - 1),
                            nextSibling: p === f.size - 1 ? null : f.get(p + 1),
                        }),
                    );
                (n = n.set(h.getKey(), h)), (c = T(c, m, h));
            }
            return n;
        }, O());
    },
    A = function (e, t) {
        return O(
            e.map(function (e) {
                var n = new a(v(e, t));
                return [n.getKey(), n];
            }),
        );
    },
    N = function (e, t) {
        var n = e.blocks.find(function (e) {
                return Array.isArray(e.children) && e.children.length > 0;
            }),
            r = E && !n ? c.fromRawStateToRawTreeState(e).blocks : e.blocks;
        return E ? C(r, t) : A(n ? c.fromRawTreeStateToRawState(e).blocks : r, t);
    },
    P = function (e) {
        var t = e.entityMap,
            n = {};
        return (
            Object.keys(t).forEach(function (e) {
                var r = t[e],
                    i = r.type,
                    a = r.mutability,
                    o = r.data;
                n[e] = l.__create(i, a, o || {});
            }),
            n
        );
    };
e.exports = function (e) {
    Array.isArray(e.blocks) || g(!1);
    var t = P(e),
        n = N(e, t),
        r = n.isEmpty() ? new u() : u.createEmpty(n.first().getKey());
    return new s({
        blockMap: n,
        entityMap: t,
        selectionBefore: r,
        selectionAfter: r,
    });
};
