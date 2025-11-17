n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(399606),
    l = n(159691),
    a = n(481060),
    s = n(601964),
    o = n(430824),
    c = n(594174),
    d = n(723047),
    u = n(388032);
function g(e) {
    let { guildId: t, application: g } = e,
        m = (0, i.e7)([o.Z], () => o.Z.getGuild(t)),
        p = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        f = (0, d.mY)();
    if (null == m || !(0, s.eM)(m, p)) return null;
    let h = g.team;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: f ? "text-muted" : "text-default",
                children: null != h ? u.intl.format(u.t.erxwWA, { teamName: h.name }) : u.intl.string(u.t.FGzLkK),
            }),
            (0, r.jsx)(a.LZC, { size: 16 }),
            (0, r.jsx)(l.zxk, {
                text: null != h ? u.intl.string(u.t["/Fjq5P"]) : u.intl.string(u.t["6ih+b4"]),
                variant: null != h ? "secondary" : "primary",
                onClick: () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e("83942").then(n.bind(n, 743582));
                        return (t) => {
                            var n, i;
                            return (0, r.jsx)(
                                e,
                                ((n = (function (e) {
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
                                })({}, t)),
                                (i = i = { application: g }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                n),
                            );
                        };
                    });
                },
                disabled: f,
            }),
        ],
    });
}
