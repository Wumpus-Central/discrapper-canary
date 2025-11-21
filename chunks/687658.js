n.d(t, { Z: () => p });
var a = n(54381),
    l = n(473749),
    i = n(793030),
    r = n(481060),
    s = n(972959),
    o = n(313789),
    c = n(518596),
    d = n(246992),
    u = n(981631);
let m = (0, s.H)(() => ({
    setting: o.n.ACCOUNT_PANEL,
    section: u.oAB.ACCOUNT,
    subsection: void 0,
}));
function p() {
    let e = m.useField("setting"),
        t = m.useField("section"),
        n = m.useField("subsection"),
        s = l.useCallback(() => {
            (0, c.openUserSettings)(e, {
                section: t,
                subsection: n,
            });
        }, [e, t, n]),
        p = l.useMemo(
            () =>
                Object.values(o.n).map((e) => ({
                    label: e,
                    value: e,
                })),
            [],
        ),
        h = l.useMemo(
            () =>
                Object.values(u.oAB).map((e) => ({
                    label: e,
                    value: e,
                })),
            [],
        );
    return (0, a.jsxs)(i.C3N, {
        label: "Settings Navigation Tool",
        children: [
            (0, a.jsx)(r.VcW, {
                label: "Setting (Redesign)",
                placeholder: "Select a setting",
                value: e,
                onChange: (e) => m.setState({ setting: e }),
                options: p,
                popoutLayerContext: d.O$,
            }),
            (0, a.jsx)(r.VcW, {
                label: "Setting Section (Legacy)",
                value: t,
                onChange: (e) => m.setState({ section: e }),
                options: h,
                popoutLayerContext: d.O$,
            }),
            (0, a.jsx)(r.oil, {
                label: "Setting Subsection (Legacy)",
                placeholder: "Type a subsection...",
                onChange: (e) => m.setState({ subsection: e }),
            }),
            (0, a.jsx)(i.zxk, {
                variant: "primary",
                onClick: s,
                text: "Open User Settings",
            }),
        ],
    });
}
