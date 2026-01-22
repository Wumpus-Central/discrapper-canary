n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(417597),
    l = n(732955),
    s = n(397927),
    a = n(260509),
    c = n(71393),
    o = n(287809),
    d = n(11351),
    u = n(985018);

function f(e) {
    let { guildId: t, application: f } = e,
        g = (0, i.bG)([c.A], () => c.A.getGuild(t)),
        b = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        m = (0, d.gN)();
    if (null == g || !(0, a.bM)(g, b)) return null;
    let p = f.team;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: m ? "text-muted" : "text-default",
                children:
                    null != p
                        ? u.intl.format(u.t.erxwWA, {
                              teamName: p.name,
                          })
                        : u.intl.string(u.t.FGzLkK),
            }),
            (0, r.jsx)(s.hKd, {
                size: 16,
            }),
            (0, r.jsx)(l.$nd, {
                text: null != p ? u.intl.string(u.t["/Fjq5P"]) : u.intl.string(u.t["6ih+b4"]),
                variant: null != p ? "secondary" : "primary",
                onClick: () => {
                    (0, s.mMO)(async () => {
                        let { default: e } = await n.e("71678").then(n.bind(n, 180493));
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
                                (i = i =
                                    {
                                        application: f,
                                    }),
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
                disabled: m,
            }),
        ],
    });
}
