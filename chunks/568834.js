n.d(t, { A: () => f }), n(896048), n(264879);
var a = n(627968),
    l = n(64700),
    i = n(311907),
    r = n(554146),
    s = n(397927),
    o = n(541689),
    c = n(199773),
    d = n(963763),
    u = n(64343),
    m = n(821052),
    p = n(594061),
    h = n(304932);
function f() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: n,
        } = (0, i.cf)([c.A], () => ({
            dailyCapReached: c.A.hasUserHitDCCap(),
            dailyCapOverridden: c.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: c.A.newUserMinAgeRequiredOverridden,
        })),
        [f, x] = l.useState(""),
        [b, g] = l.useState(20),
        v = l.useMemo(
            () =>
                Object.keys(r.M)
                    .filter((e) => e.toLowerCase().includes(f.toLowerCase()))
                    .reverse(),
            [f],
        ),
        j = l.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && b < v.length && g((e) => e + 100);
            },
            [b, v.length],
        );
    return (0, a.jsx)(s.ChK, {
        onScroll: j,
        children: (0, a.jsxs)("div", {
            className: h.KE,
            children: [
                (0, a.jsxs)(s.nVY, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, a.jsxs)(s.BJc, {
                            gap: 4,
                            children: [
                                (0, a.jsxs)(s.BJc, {
                                    gap: 4,
                                    direction: "horizontal",
                                    children: [
                                        (0, a.jsx)(s.Button, {
                                            variant: "primary",
                                            text: "Reset Daily Cap",
                                            onClick: () => (0, o.Ab)(),
                                        }),
                                        (0, a.jsx)(s.Button, {
                                            variant: "primary",
                                            text: "Clear All",
                                            onClick: () => (0, p.nT)(),
                                        }),
                                        (0, a.jsx)(s.Button, {
                                            variant: "primary",
                                            text: "Check All",
                                            onClick: () => (0, p.D1)(),
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
                        (0, a.jsx)(s.dOG, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: o.SE,
                        }),
                        (0, a.jsx)(s.dOG, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: n,
                            onChange: o.U$,
                        }),
                    ],
                }),
                (0, a.jsx)(m.A, {}),
                (0, a.jsx)(u.A, {}),
                (0, a.jsxs)(s.nVY, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, a.jsx)(s.IWV, {
                            query: f,
                            onChange: x,
                            onClear: () => x(""),
                        }),
                        (0, a.jsx)(d.A, { items: v.slice(0, b) }),
                    ],
                }),
            ],
        }),
    });
}
