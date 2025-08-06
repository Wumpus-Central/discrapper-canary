function r(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            }));
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var o = n(879154),
    a = n(214788),
    s = n(738766),
    l = n(551558),
    c = n(982716),
    u = n(223138),
    d = n(65183),
    f = n(555159),
    _ = d.List,
    p = d.Repeat,
    h = u('draft_tree_data_support'),
    m = h ? a : o;
e.exports = {
    processHTML: function (e, t) {
        return s(e, c, t);
    },
    processText: function (e, t, n) {
        return e.reduce(function (e, i, o) {
            i = f(i);
            var a = l(),
                s = {
                    key: a,
                    type: n,
                    text: i,
                    characterList: _(p(t, i.length))
                };
            if (h && 0 !== o) {
                var c = o - 1;
                s = r({}, s, { prevSibling: (e[c] = e[c].merge({ nextSibling: a })).getKey() });
            }
            return (e.push(new m(s)), e);
        }, []);
    }
};
