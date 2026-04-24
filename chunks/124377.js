"use strict";
var n = r(68055),
    i = r(617179),
    o = r(367932),
    a = r(176486),
    s = r(885019),
    u = r(797686),
    c = function (t, e) {
        return {
            key: t.getKey(),
            text: t.getText(),
            type: t.getType(),
            depth: t.getDepth(),
            inlineStyleRanges: s(t),
            entityRanges: a(t, e),
            data: t.getData().toObject(),
        };
    },
    l = function (t, e, r, o) {
        if (t instanceof n) return void r.push(c(t, e));
        t instanceof i || u(!1);
        var a = t.getParentKey(),
            s = (o[t.getKey()] = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (t) {
                                return Object.getOwnPropertyDescriptor(r, t).enumerable;
                            }),
                        )),
                        n.forEach(function (e) {
                            var n, i, o;
                            (n = t),
                                (i = e),
                                (o = r[e]),
                                i in n
                                    ? Object.defineProperty(n, i, {
                                          value: o,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (n[i] = o);
                        });
                }
                return t;
            })({}, c(t, e), { children: [] }));
        a ? o[a].children.push(s) : r.push(s);
    },
    f = function (t, e) {
        var r = e.entityMap,
            n = [],
            i = {},
            a = {},
            s = 0;
        return (
            t.getBlockMap().forEach(function (t) {
                t.findEntityRanges(
                    function (t) {
                        return null !== t.getEntity();
                    },
                    function (e) {
                        var n = t.getEntityAt(e),
                            i = o.stringify(n);
                        !a[i] && ((a[i] = n), (r[i] = "".concat(s)), s++);
                    },
                ),
                    l(t, r, n, i);
            }),
            { blocks: n, entityMap: r }
        );
    },
    p = function (t, e) {
        var r = e.blocks,
            n = e.entityMap,
            i = {};
        return (
            Object.keys(n).forEach(function (e, r) {
                var n = t.getEntity(o.unstringify(e));
                i[r] = { type: n.getType(), mutability: n.getMutability(), data: n.getData() };
            }),
            { blocks: r, entityMap: i }
        );
    };
t.exports = function (t) {
    var e = { entityMap: {}, blocks: [] };
    return (e = f(t, e)), (e = p(t, e));
};
