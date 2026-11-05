var l = i(477900);
i(582128);
var t = i(665260),
    s = i(646514),
    r = i(534514),
    d = i(664121),
    a = i(950305),
    u = i(652215),
    o = i(792996),
    c = i(311595);
let m = { size: "md", color: s.A.colors.INTERACTIVE_TEXT_DEFAULT };
i.d(
    e,
    {},
    {
        A: function (n) {
            let { subscriptions: e, color: i = "text-default" } = n,
                s = e.some((n) => (0, t.Lt)(n.skuFlags, u.d68.APPLICATION_GUILD_SUBSCRIPTION));
            return (0, l.jsx)(r.D, {
                variant: "heading-lg/semibold",
                color: i,
                className: c.R,
                children: s
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.ServerIcon, { ...m, color: "currentColor" }),
                              o.intl.string(o.t.XIhSoj),
                          ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(a.UserIcon, { ...m, color: "currentColor" }),
                              o.intl.string(o.t.dxfZph),
                          ],
                      }),
            });
        },
    },
);
