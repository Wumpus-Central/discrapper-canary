n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var i = n(990078),
    l = n(397927),
    a = n(353411);

function s(e) {
    let { activity: t, user: n, source: s, size: o = "sm", variant: c = "secondary", fullWidth: u, onAction: d } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["activity", "user", "source", "size", "variant", "fullWidth", "onAction"]),
        { label: f, tooltip: m, loading: g, disabled: y, onClick: _ } = (0, a._B)(t, n, s);
    return (0, r.jsx)(i.m, {
        text: m,
        children: (0, r.jsx)(
            l.Button,
            (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    variant: c,
                    size: o,
                    icon: l.L5T,
                    text: f,
                    fullWidth: u,
                    onClick: () => {
                        null == d || d(), _();
                    },
                    disabled: y,
                    loading: g,
                },
                p,
            ),
        ),
    });
}
