n.d(t, { Z: () => f }), n(388685), n(583741);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(704215),
    s = n(481060),
    o = n(883904),
    c = n(68985),
    d = n(699867),
    u = n(227157),
    m = n(775195),
    p = n(675478),
    h = n(117768);
function f() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: n,
        } = (0, i.cj)([c.Z], () => ({
            dailyCapReached: c.Z.hasUserHitDCCap(),
            dailyCapOverridden: c.Z.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: c.Z.newUserMinAgeRequiredOverridden,
        })),
        [f, x] = r.useState(""),
        [b, g] = r.useState(20),
        v = r.useMemo(
            () =>
                Object.keys(l.z)
                    .filter((e) => e.toLowerCase().includes(f.toLowerCase()))
                    .reverse(),
            [f],
        ),
        j = r.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && b < v.length && g((e) => e + 100);
            },
            [b, v.length],
        );
    return (0, a.jsx)(s.h21, {
        onScroll: j,
        children: (0, a.jsxs)("div", {
            className: h.panelContainer,
            children: [
                (0, a.jsxs)(s.C3N, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, a.jsxs)(s.Kqy, {
                            gap: 4,
                            children: [
                                (0, a.jsxs)(s.Kqy, {
                                    gap: 4,
                                    direction: "horizontal",
                                    children: [
                                        (0, a.jsx)(s.Button, {
                                            variant: "primary",
                                            text: "Reset Daily Cap",
                                            onClick: () => (0, o.EG)(),
                                        }),
                                        (0, a.jsx)(s.Button, {
                                            variant: "primary",
                                            text: "Clear All",
                                            onClick: () => (0, p.sr)(),
                                        }),
                                        (0, a.jsx)(s.Button, {
                                            variant: "primary",
                                            text: "Check All",
                                            onClick: () => (0, p.bE)(),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
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
                            query: f,
                            onChange: x,
                            onClear: () => x(""),
                        }),
                        (0, a.jsx)(d.Z, { items: v.slice(0, b) }),
                    ],
                }),
            ],
        }),
    });
}
