n.d(t, { Z: () => m });
var a = n(54381),
    r = n(473749),
    i = n(793030),
    l = n(481060),
    s = n(972959),
    o = n(313789),
    c = n(518596),
    d = n(981631);
let u = (0, s.H)(() => ({
    setting: o.n.ACCOUNT_PANEL,
    section: d.oAB.ACCOUNT,
    subsection: void 0,
}));
function m() {
    let e = u.useField("setting"),
        t = u.useField("section"),
        n = u.useField("subsection"),
        s = r.useCallback(() => {
            (0, c.openUserSettings)(e, {
                section: t,
                subsection: n,
            });
        }, [e, t, n]),
        m = r.useMemo(
            () =>
                Object.values(o.n).map((e) => ({
                    id: e,
                    label: e,
                    value: e,
                })),
            [],
        ),
        p = r.useMemo(
            () =>
                Object.values(d.oAB).map((e) => ({
                    id: e,
                    label: e,
                    value: e,
                })),
            [],
        );
    return (0, a.jsxs)(i.C3N, {
        label: "Settings Navigation Tool",
        children: [
            (0, a.jsx)(l.VcW, {
                label: "Setting (Redesign)",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => u.setState({ setting: e }),
                options: m,
                selectionMode: "single",
            }),
            (0, a.jsx)(l.VcW, {
                label: "Setting Section (Legacy)",
                value: t,
                onSelectionChange: (e) => u.setState({ section: e }),
                options: p,
                selectionMode: "single",
            }),
            (0, a.jsx)(l.oil, {
                label: "Setting Subsection (Legacy)",
                placeholder: "Type a subsection...",
                onChange: (e) => u.setState({ subsection: e }),
            }),
            (0, a.jsx)(i.zxk, {
                variant: "primary",
                onClick: s,
                text: "Open User Settings",
            }),
        ],
    });
}
