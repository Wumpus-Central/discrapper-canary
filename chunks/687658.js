n.d(t, { Z: () => h });
var a = n(54381),
    l = n(473749),
    r = n(793030),
    i = n(668339),
    s = n(481060),
    o = n(972959),
    c = n(313789),
    d = n(518596),
    u = n(246992),
    m = n(981631);
let p = (0, o.H)(() => ({
    setting: c.n.ACCOUNT_PANEL,
    section: m.oAB.ACCOUNT,
    subsection: void 0,
}));
function h() {
    let e = p.useField("setting"),
        t = p.useField("section"),
        n = p.useField("subsection"),
        o = l.useCallback(() => {
            (0, d.openUserSettings)(e, {
                section: t,
                subsection: n,
            });
        }, [e, t, n]),
        h = l.useMemo(
            () =>
                Object.values(c.n).map((e) => ({
                    label: e,
                    value: e,
                })),
            [],
        ),
        x = l.useMemo(
            () =>
                Object.values(m.oAB).map((e) => ({
                    label: e,
                    value: e,
                })),
            [],
        );
    return (0, a.jsxs)(r.C3N, {
        label: "Settings Navigation Tool",
        children: [
            (0, a.jsx)(i.d, {
                label: "Setting (Redesign)",
                placeholder: "Select a setting",
                value: e,
                onChange: (e) => p.setState({ setting: e }),
                options: h,
                popoutLayerContext: u.O$,
            }),
            (0, a.jsx)(i.d, {
                label: "Setting Section (Legacy)",
                value: t,
                onChange: (e) => p.setState({ section: e }),
                options: x,
                popoutLayerContext: u.O$,
            }),
            (0, a.jsx)(s.oil, {
                label: "Setting Subsection (Legacy)",
                placeholder: "Type a subsection...",
                onChange: (e) => p.setState({ subsection: e }),
            }),
            (0, a.jsx)(r.zxk, {
                variant: "primary",
                onClick: o,
                text: "Open User Settings",
            }),
        ],
    });
}
