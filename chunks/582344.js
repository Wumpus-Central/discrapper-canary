n.d(t, { Z: () => h }), n(388685), n(583741);
var a = n(54381),
    l = n(473749),
    i = n(442837),
    r = n(704215),
    s = n(481060),
    o = n(883904),
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
        } = (0, i.cj)([c.Z], () => ({
            dailyCapReached: c.Z.hasUserHitDCCap(),
            dailyCapOverridden: c.Z.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: c.Z.newUserMinAgeRequiredOverridden,
        })),
        [h, x] = l.useState(""),
        [g, f] = l.useState(20),
        b = l.useMemo(
            () =>
                Object.keys(r.z)
                    .filter((e) => e.toLowerCase().includes(h.toLowerCase()))
                    .reverse(),
            [h],
        ),
        v = l.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && g < b.length && f((e) => e + 100);
            },
            [g, b.length],
        );
    return (0, a.jsx)(s.h21, {
        onScroll: v,
        children: (0, a.jsxs)("div", {
            className: p.panelContainer,
            children: [
                (0, a.jsxs)(s.C3N, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, a.jsxs)(s.Kqy, {
                            gap: 4,
                            children: [
                                (0, a.jsx)(s.Button, {
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
                        (0, a.jsx)(s.izJ, { gap: 24 }),
                        (0, a.jsx)(s.rsf, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: o.Nj,
                        }),
                        (0, a.jsx)(s.rsf, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: n,
                            onChange: o.KC,
                        }),
                    ],
                }),
                (0, a.jsx)(m.Z, {}),
                (0, a.jsx)(u.Z, {}),
                (0, a.jsxs)(s.C3N, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, a.jsx)(s.E1j, {
                            query: h,
                            onChange: x,
                            onClear: () => x(""),
                        }),
                        (0, a.jsx)(d.Z, { items: b.slice(0, g) }),
                    ],
                }),
            ],
        }),
    });
}
