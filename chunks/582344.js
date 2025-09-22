n.d(t, { Z: () => p }), n(388685), n(583741);
var a = n(951288),
    r = n(647438),
    i = n(442837),
    l = n(704215),
    s = n(481060),
    o = n(883904),
    c = n(68985),
    d = n(699867),
    u = n(227157),
    m = n(775195),
    h = n(455698);
function p() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: n,
        } = (0, i.cj)([c.Z], () => ({
            dailyCapReached: c.Z.hasUserHitDCCap(),
            dailyCapOverridden: c.Z.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: c.Z.newUserMinAgeRequiredOverridden,
        })),
        [p, x] = r.useState(""),
        f = Object.keys(l.z)
            .filter((e) => e.toLowerCase().includes(p.toLowerCase()))
            .reverse();
    return (0, a.jsx)(s.zJl, {
        children: (0, a.jsxs)("div", {
            className: h.panelContainer,
            children: [
                (0, a.jsxs)(s.hjN, {
                    title: "Dismissible Content Overrides",
                    tag: "h1",
                    children: [
                        (0, a.jsxs)(s.Kqy, {
                            gap: 4,
                            children: [
                                (0, a.jsx)(s.zxk, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, o.EG)(),
                                }),
                                (0, a.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children: "Daily Cap Reached: ".concat(e ? "Yes" : "No"),
                                }),
                            ],
                        }),
                        (0, a.jsx)(s.$i$, { className: h.divider }),
                        (0, a.jsx)(s.j7V, {
                            value: t,
                            onChange: o.Nj,
                            children: "Override Dismissible Content Daily Cap",
                        }),
                        (0, a.jsx)(s.j7V, {
                            value: n,
                            onChange: o.KC,
                            children: "Override Minimum User Account Age Requirement",
                        }),
                    ],
                }),
                (0, a.jsx)(m.Z, {}),
                (0, a.jsx)(u.Z, {}),
                (0, a.jsxs)(s.hjN, {
                    title: "All Dismissible Contents",
                    tag: "h1",
                    children: [
                        (0, a.jsx)("div", {
                            className: h.searchBarContainer,
                            children: (0, a.jsx)(s.E1j, {
                                query: p,
                                onChange: x,
                                onClear: () => x(""),
                            }),
                        }),
                        (0, a.jsx)(d.Z, { items: f }),
                    ],
                }),
            ],
        }),
    });
}
