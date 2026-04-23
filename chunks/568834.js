a.d(t, { A: () => j });
var n = a(627968),
    l = a(64700),
    i = a(311907),
    s = a(554146),
    r = a(599319),
    o = a(270003),
    d = a(331322),
    c = a(821609),
    u = a(834730),
    m = a(243721),
    h = a(892547),
    p = a(541689),
    x = a(199773),
    g = a(963763),
    v = a(64343),
    b = a(821052),
    _ = a(594061),
    f = a(268571);
function j() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, i.cf)([x.A], () => ({
            dailyCapReached: x.A.hasUserHitDCCap(),
            dailyCapOverridden: x.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: x.A.newUserMinAgeRequiredOverridden,
        })),
        [j, A] = l.useState(""),
        [y, C] = l.useState(20),
        E = l.useMemo(
            () =>
                Object.keys(s.M)
                    .filter((e) => e.toLowerCase().includes(j.toLowerCase()))
                    .reverse(),
            [j],
        ),
        S = l.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && y < E.length && C((e) => e + 100);
            },
            [y, E.length],
        );
    return (0, n.jsx)(r.Ch, {
        onScroll: S,
        children: (0, n.jsxs)("div", {
            className: f.KE,
            children: [
                (0, n.jsxs)(o.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, n.jsxs)(d.B, {
                            gap: 4,
                            children: [
                                (0, n.jsx)(c.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, p.Ab)(),
                                }),
                                (0, n.jsx)(c.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, _.nT)(),
                                }),
                                (0, n.jsx)(c.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, _.D1)(),
                                }),
                                (0, n.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, n.jsx)(m.d, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: p.SE,
                        }),
                        (0, n.jsx)(m.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: p.U$,
                        }),
                    ],
                }),
                (0, n.jsx)(b.A, {}),
                (0, n.jsx)(v.A, {}),
                (0, n.jsxs)(o.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, n.jsx)(h.I, { query: j, onChange: A, onClear: () => A("") }),
                        (0, n.jsx)(g.A, { items: E.slice(0, y) }),
                    ],
                }),
            ],
        }),
    });
}
