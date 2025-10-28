n.d(t, { Z: () => h }), n(388685), n(583741);
var a = n(951288),
    r = n(647438),
    l = n(442837),
    i = n(704215),
    o = n(481060),
    s = n(883904),
    c = n(68985),
    d = n(699867),
    u = n(227157),
    m = n(775195),
    p = n(455698);
function h() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: n,
        } = (0, l.cj)([c.Z], () => ({
            dailyCapReached: c.Z.hasUserHitDCCap(),
            dailyCapOverridden: c.Z.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: c.Z.newUserMinAgeRequiredOverridden,
        })),
        [h, x] = r.useState(""),
        [f, b] = r.useState(20),
        g = r.useMemo(
            () =>
                Object.keys(i.z)
                    .filter((e) => e.toLowerCase().includes(h.toLowerCase()))
                    .reverse(),
            [h],
        ),
        v = r.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && f < g.length && b((e) => e + 100);
            },
            [f, g.length],
        );
    return (0, a.jsx)(o.h21, {
        onScroll: v,
        children: (0, a.jsxs)("div", {
            className: p.panelContainer,
            children: [
                (0, a.jsxs)(o.C3N, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, a.jsxs)(o.Kqy, {
                            gap: 4,
                            children: [
                                (0, a.jsx)(o.Button, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, s.EG)(),
                                }),
                                (0, a.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children: "Daily Cap Reached: ".concat(e ? "Yes" : "No"),
                                }),
                            ],
                        }),
                        (0, a.jsx)(o.izJ, { gap: 24 }),
                        (0, a.jsx)(o.rsf, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: s.Nj,
                        }),
                        (0, a.jsx)(o.rsf, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: n,
                            onChange: s.KC,
                        }),
                    ],
                }),
                (0, a.jsx)(m.Z, {}),
                (0, a.jsx)(u.Z, {}),
                (0, a.jsxs)(o.C3N, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, a.jsx)(o.E1j, {
                            query: h,
                            onChange: x,
                            onClear: () => x(""),
                        }),
                        (0, a.jsx)(d.Z, { items: g.slice(0, f) }),
                    ],
                }),
            ],
        }),
    });
}
