n.d(t, { Z: () => g }), n(388685), n(642613);
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
    _ = n(699867),
    p = n(227157),
    h = n(775195),
    m = n(10198);
function g() {
    let e = (0, d.ZP)((e) => e.recentlyShown),
        {
            dailyCapReached: t,
            dailyCapOverridden: n,
            newUserMinAgeRequiredOverridden: g,
        } = (0, a.cj)([u.Z], () => ({
            dailyCapReached: u.Z.hasUserHitDCCap(),
            dailyCapOverridden: u.Z.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: u.Z.newUserMinAgeRequiredOverridden,
        })),
        [E, b] = i.useState(""),
        [y, O] = (0, f.Z)(),
        v = e.map((e) => o.z[e]),
        I = Object.keys(o.z)
            .filter((e) => !v.includes(e))
            .filter((e) => !y.includes(e))
            .filter((e) => e.toLowerCase().includes(E.toLowerCase()))
            .sort((e, t) => e.localeCompare(t));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.hjN, {
                title: "Dismissible Content Fatigue",
                tag: s.RB0.H1,
                className: m.marginBottom60,
                children: [
                    (0, r.jsx)(s.xJW, {
                        children: (0, r.jsxs)(s.R94, {
                            className: m.marginBottom4,
                            children: ["Daily Cap Reached: ", t ? "Yes" : "No"],
                        }),
                    }),
                    (0, r.jsx)(s.j7V, {
                        value: n,
                        onChange: c.Nj,
                        children: "Override Dismissible Content Daily Cap",
                    }),
                    (0, r.jsx)(s.j7V, {
                        value: g,
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
                                className: m.marginTop4,
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
                            query: E,
                            onChange: b,
                            onClear: () => b(""),
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
                        (0, r.jsx)(h.Z, { searchQuery: E }),
                        (0, r.jsx)(p.Z, { searchQuery: E }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(s.vwX, {
                                    tag: s.RB0.H2,
                                    children: "Available Dismissible Contents",
                                }),
                                (0, r.jsx)(_.Z, { items: I }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
