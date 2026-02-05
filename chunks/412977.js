"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(118001),
    d = n(147925),
    c = n(652215),
    u = n(985018),
    m = n(690450);
function g(e) {
    let { guild: t } = e,
        l = t.verificationLevel,
        g = s.useMemo(() => (0, o.RU)(l), [l]);
    return (0, i.jsxs)(a.DUT, {
        onClick: () =>
            (0, a.mMO)(async () => {
                let { default: e } = await n.e("70232").then(n.bind(n, 313003));
                return (n) => (0, i.jsx)(e, { ...n, guild: t, hideColors: !0 });
            }),
        className: r()(m.ph, m.vk),
        children: [
            (0, i.jsxs)("div", {
                className: m.Ly,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: u.intl.string(u.t.DpRdYK),
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: u.intl.string(u.t.mA17eD),
                    }),
                    (0, i.jsx)("div", {
                        className: m.__invalid_pillRow,
                        children: (0, i.jsxs)(a.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-text-default",
                            className: m.Lp,
                            children: [
                                l === c.PvD.VERY_HIGH
                                    ? (0, i.jsx)(a.u6o, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                      })
                                    : (0, i.jsx)(a.u6c, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                      }),
                                g,
                            ],
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(d.A, { height: 24, width: 24, direction: d.A.Directions.RIGHT, className: m.OW }),
        ],
    });
}
