t.d(e, {
    c1: () => i,
    zb: () => a
}),
    t(47120);
var n = t(200651);
t(192379);
let [r, a] = (0, t(975104).Z)();
function i(o) {
    var { children: e } = o,
        t = (function (o, e) {
            if (null == o) return {};
            var t,
                n,
                r = (function (o, e) {
                    if (null == o) return {};
                    var t,
                        n,
                        r = {},
                        a = Object.keys(o);
                    for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = o[t]);
                    return r;
                })(o, e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(o);
                for (n = 0; n < a.length; n++) (t = a[n]), !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(o, t) && (r[t] = o[t]);
            }
            return r;
        })(o, ['children']);
    return (0, n.jsx)(r.Provider, {
        value: t,
        children: e
    });
}
