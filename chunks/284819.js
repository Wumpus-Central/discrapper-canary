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
    o = n(430031),
    l = n(279998),
    c = n(51169),
    u = n(661551),
    d = n(116740),
    f = n(396276),
    p = d.List,
    _ = d.Repeat,
    h = u("draft_tree_data_support"),
    m = h ? s : a;
e.exports = {
    processHTML: function (e, t) {
        return o(e, c, t);
    },
    processText: function (e, t, n) {
        return e.reduce(function (e, i, a) {
            i = f(i);
            var s = l(),
                o = {
                    key: s,
                    type: n,
                    text: i,
                    characterList: p(_(t, i.length)),
                };
            if (h && 0 !== a) {
                var c = a - 1;
                o = r({}, o, { prevSibling: (e[c] = e[c].merge({ nextSibling: s })).getKey() });
            }
            return e.push(new m(o)), e;
        }, []);
    },
};
