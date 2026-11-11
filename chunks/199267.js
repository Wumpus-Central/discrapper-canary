var t = a(477900);
a(582128);
var l = a(189213),
    i = a(858899),
    r = a(331322),
    s = a(834730),
    c = a(733791),
    o = a(936508),
    d = a(706935),
    u = a(191850),
    p = a(792996);
a.d(
    n,
    {},
    {
        A: function (e) {
            let { target: n, ...a } = e,
                { optionalItems: m, body: h, notes: g, pending: x, error: v, submit: b } = (0, o.Ay)(n);
            return (0, t.jsx)(l.a, {
                ...a,
                role: "alertdialog",
                title: (0, c.WX)((0, d.tb)(u.default.x6FvsZ, n.appName)),
                subtitle: h,
                "aria-label": p.intl.formatToPlainString(u.default.x6FvsZ, { app: n.appName }),
                notice: null == v ? void 0 : { message: v, type: "critical", role: "alert" },
                actions: [
                    { text: p.intl.string(p.t["ETE/oC"]), variant: "secondary", onClick: a.onClose },
                    {
                        text: p.intl.string(u.default.BGF8VT),
                        variant: "critical-primary",
                        loading: x,
                        disabled: x,
                        onClick: async function () {
                            let e = await b();
                            null != e && ((0, i.P0)({ text: e, variant: "success" }), a.onClose());
                        },
                    },
                ],
                children:
                    m.length > 0 || g.length > 0
                        ? (0, t.jsxs)(r.B, {
                              gap: 12,
                              children: [
                                  m.length > 0 ? (0, t.jsx)(d.Ay, { items: [], optionalItems: m }) : null,
                                  g.map((e) =>
                                      (0, t.jsx)(
                                          s.E,
                                          { variant: "body-sm/normal", color: "text-muted", children: e },
                                          e,
                                      ),
                                  ),
                              ],
                          })
                        : null,
            });
        },
    },
);
