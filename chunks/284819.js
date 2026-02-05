"use strict";
var n = r(68055),
    i = r(617179),
    o = r(430031),
    a = r(279998),
    s = r(51169),
    u = r(661551),
    c = r(116740),
    l = r(396276),
    f = c.List,
    p = c.Repeat,
    h = u("draft_tree_data_support"),
    d = h ? i : n;
t.exports = {
    processHTML: function (t, e) {
        return o(t, s, e);
    },
    processText: function (t, e, r) {
        return t.reduce(function (t, n, i) {
            n = l(n);
            var o = a(),
                s = { key: o, type: r, text: n, characterList: f(p(e, n.length)) };
            if (h && 0 !== i) {
                var u = i - 1;
                s = (function (t) {
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
                })({}, s, { prevSibling: (t[u] = t[u].merge({ nextSibling: o })).getKey() });
            }
            return t.push(new d(s)), t;
        }, []);
    },
};
