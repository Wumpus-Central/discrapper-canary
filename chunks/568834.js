n.d(t, { A: () => p });
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(554146),
    r = n(397927),
    o = n(541689),
    d = n(199773),
    c = n(963763),
    u = n(64343),
    m = n(821052),
    h = n(594061),
    x = n(331755);
function p() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: n,
        } = (0, s.cf)([d.A], () => ({
            dailyCapReached: d.A.hasUserHitDCCap(),
            dailyCapOverridden: d.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: d.A.newUserMinAgeRequiredOverridden,
        })),
        [p, g] = i.useState(""),
        [f, _] = i.useState(20),
        v = i.useMemo(
            () =>
                Object.keys(l.M)
                    .filter((e) => e.toLowerCase().includes(p.toLowerCase()))
                    .reverse(),
            [p],
        ),
        b = i.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && f < v.length && _((e) => e + 100);
            },
            [f, v.length],
        );
    return (0, a.jsx)(r.ChK, {
        onScroll: b,
        children: (0, a.jsxs)("div", {
            className: x.KE,
            children: [
                (0, a.jsxs)(r.nVY, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, a.jsxs)(r.BJc, {
                            gap: 4,
                            children: [
                                (0, a.jsx)(r.Button, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, o.Ab)(),
                                }),
                                (0, a.jsx)(r.Button, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, h.nT)(),
                                }),
                                (0, a.jsx)(r.Button, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, h.D1)(),
                                }),
                                (0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, a.jsx)(r.dOG, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: o.SE,
                        }),
                        (0, a.jsx)(r.dOG, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: n,
                            onChange: o.U$,
                        }),
                    ],
                }),
                (0, a.jsx)(m.A, {}),
                (0, a.jsx)(u.A, {}),
                (0, a.jsxs)(r.nVY, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, a.jsx)(r.IWV, { query: p, onChange: g, onClear: () => g("") }),
                        (0, a.jsx)(c.A, { items: v.slice(0, f) }),
                    ],
                }),
            ],
        }),
    });
}
