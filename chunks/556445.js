n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var i = n(990078),
    l = n(397927),
    a = n(562153),
    s = n(353411);

function o(e) {
    let {
            activity: t,
            user: n,
            channelId: o,
            guildId: c,
            source: u,
            size: d = "sm",
            variant: p = "secondary",
            onAction: f,
        } = e,
        m = (function (e, t) {
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
        })(e, ["activity", "user", "channelId", "guildId", "source", "size", "variant", "onAction"]),
        { tooltip: g, loading: y, disabled: _, onClick: b } = (0, s.J$)(t, n, u, a.Ay.getNickname(c, o, n));
    return (0, r.jsx)(i.m, {
        text: g,
        children: (0, r.jsx)(
            l.K0,
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
                    icon: l.J2m,
                    size: d,
                    variant: p,
                    onClick: () => {
                        null == f || f(), b();
                    },
                    disabled: _,
                    loading: y,
                    "aria-label": null != g ? g : t.name,
                },
                m,
            ),
        ),
    });
}
