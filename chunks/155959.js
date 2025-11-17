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
    s = n(637914),
    l = n(703579),
    c = n(249252),
    u = n(40375),
    d = n(65183),
    f = n(799995),
    _ = d.List,
    p = d.Repeat,
    h = u("draft_tree_data_support"),
    m = h ? o : a;
e.exports = {
    processHTML: function (e, t) {
        return s(e, c, t);
    },
    processText: function (e, t, n) {
        return e.reduce(function (e, i, a) {
            i = f(i);
            var o = l(),
                s = {
                    key: o,
                    type: n,
                    text: i,
                    characterList: _(p(t, i.length)),
                };
            if (h && 0 !== a) {
                var c = a - 1;
                s = r({}, s, { prevSibling: (e[c] = e[c].merge({ nextSibling: o })).getKey() });
            }
            return e.push(new m(s)), e;
        }, []);
    },
};
