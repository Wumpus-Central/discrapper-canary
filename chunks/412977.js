n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(192308),
    o = n(939249),
    d = n(534514),
    c = n(834730),
    u = n(646270),
    m = n(849516),
    g = n(118001),
    h = n(147925),
    x = n(652215),
    _ = n(985018),
    p = n(101839);
function A(e) {
    let { guild: t } = e,
        s = t.verificationLevel,
        A = l.useMemo(() => (0, g.RU)(s), [s]);
    return (0, i.jsxs)(o.D, {
        onClick: () =>
            (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e("70232").then(n.bind(n, 313003));
                return (n) => (0, i.jsx)(e, { ...n, guild: t, hideColors: !0 });
            }),
        className: r()(p.ph, p.vk),
        children: [
            (0, i.jsxs)("div", {
                className: p.Ly,
                children: [
                    (0, i.jsx)(d.D, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: _.intl.string(_.t.DpRdYK),
                    }),
                    (0, i.jsx)(c.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: _.intl.string(_.t.mA17eD),
                    }),
                    (0, i.jsx)("div", {
                        className: p.__invalid_pillRow,
                        children: (0, i.jsxs)(c.E, {
                            variant: "text-xs/medium",
                            color: "interactive-text-default",
                            className: p.Lp,
                            children: [
                                s === x.PvD.VERY_HIGH
                                    ? (0, i.jsx)(u.u, { size: "custom", color: "currentColor", width: 16, height: 16 })
                                    : (0, i.jsx)(m.u, { size: "custom", color: "currentColor", width: 16, height: 16 }),
                                A,
                            ],
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(h.A, { height: 24, width: 24, direction: h.A.Directions.RIGHT, className: p.OW }),
        ],
    });
}
