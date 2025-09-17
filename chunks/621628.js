n.d(t, { Z: () => E }), n(388685), n(642613);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    l = n(675478),
    c = n(883904),
    u = n(68985),
    d = n(211644),
    f = n(98460),
    _ = n(686534),
    p = n(699867),
    h = n(227157),
    m = n(775195),
    g = n(197571);
function E() {
    let e = (0, d.ZP)((e) => e.recentlyShown),
        t = (0, a.e7)([u.Z], () => u.Z.newUserMinAgeRequiredOverridden),
        [n, E] = i.useState(""),
        [b, y] = (0, f.Z)(),
        O = e.map((e) => o.z[e]),
        v = Object.keys(o.z)
            .filter((e) => !O.includes(e))
            .filter((e) => !b.includes(e))
            .filter((e) => e.toLowerCase().includes(n.toLowerCase()))
            .sort((e, t) => e.localeCompare(t));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.hjN, {
                title: "Dismissible Content Fatigue",
                tag: s.RB0.H1,
                className: g.marginBottom60,
                children: [
                    (0, r.jsx)(_.Z, {}),
                    (0, r.jsx)(s.j7V, {
                        value: t,
                        onChange: c.KC,
                        children: "Override Minimum User Account Age Requirement",
                    }),
                    (0, r.jsxs)(s.xJW, {
                        children: [
                            (0, r.jsx)(s.zxk, {
                                variant: "primary",
                                text: "Reset DismissibleContentFrameworkStore",
                                onClick: () => (0, c.EG)(),
                            }),
                            (0, r.jsx)(s.R94, {
                                className: g.marginTop4,
                                children: "This will reset the daily cap and content seen during session",
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(s.hjN, {
                title: "Dismissible Contents",
                tag: s.RB0.H1,
                children: (0, r.jsxs)(s.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(s.E1j, {
                            query: n,
                            onChange: E,
                            onClear: () => E(""),
                        }),
                        (0, r.jsxs)(s.hE2, {
                            children: [
                                (0, r.jsx)(s.zxk, {
                                    variant: "critical-primary",
                                    text: "Clear All Dismissed Contents",
                                    onClick: l.sr,
                                }),
                                (0, r.jsx)(s.zxk, {
                                    variant: "secondary",
                                    text: "Check All Dismissed Contents",
                                    onClick: l.bE,
                                }),
                            ],
                        }),
                        (0, r.jsx)(m.Z, { searchQuery: n }),
                        (0, r.jsx)(h.Z, { searchQuery: n }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(s.vwX, {
                                    tag: s.RB0.H2,
                                    children: "Available Dismissible Contents",
                                }),
                                (0, r.jsx)(p.Z, { items: v }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
