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
    _ = n(504117),
    p = n(703579),
    h = n(40375),
    m = n(65183),
    g = n(581079),
    E = h("draft_tree_data_support"),
    b = m.List,
    y = m.Map,
    O = m.OrderedMap,
    v = function (e, t) {
        var n = e.key,
            r = e.type,
            i = e.data;
        return {
            text: e.text,
            depth: e.depth || 0,
            type: r || "unstyled",
            key: n || p(),
            data: y(i),
            characterList: I(e, t),
        };
    },
    I = function (e, t) {
        var n = e.text,
            i = e.entityRanges,
            a = e.inlineStyleRanges,
            o = i || [];
        return d(
            _(n, a || []),
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
    T = function (e) {
        return r({}, e, { key: e.key || p() });
    },
    S = function (e, t, n) {
        var i = t.map(function (e) {
            return r({}, e, { parentRef: n });
        });
        return e.concat(i.reverse());
    },
    A = function (e, t) {
        return e.map(T).reduce(function (n, i, a) {
            Array.isArray(i.children) || g(!1);
            var s = i.children.map(T),
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
            for (var c = S([], s, l); c.length > 0; ) {
                var u = c.pop(),
                    d = u.parentRef,
                    f = d.getChildKeys(),
                    _ = f.indexOf(u.key),
                    p = Array.isArray(u.children);
                if (!p) {
                    p || g(!1);
                    break;
                }
                var h = u.children.map(T),
                    m = new o(
                        r({}, v(u, t), {
                            parent: d.getKey(),
                            children: b(
                                h.map(function (e) {
                                    return e.key;
                                }),
                            ),
                            prevSibling: 0 === _ ? null : f.get(_ - 1),
                            nextSibling: _ === f.size - 1 ? null : f.get(_ + 1),
                        }),
                    );
                (n = n.set(m.getKey(), m)), (c = S(c, h, m));
            }
            return n;
        }, O());
    },
    C = function (e, t) {
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
        return E ? A(r, t) : C(n ? c.fromRawTreeStateToRawState(e).blocks : r, t);
    },
    R = function (e) {
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
    var t = R(e),
        n = N(e, t),
        r = n.isEmpty() ? new u() : u.createEmpty(n.first().getKey());
    return new s({
        blockMap: n,
        entityMap: t,
        selectionBefore: r,
        selectionAfter: r,
    });
};
