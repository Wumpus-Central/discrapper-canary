n.d(t, { C: () => h });
var i = n(627968),
    s = n(158954),
    l = n(311907),
    a = n(827343),
    r = n(117178),
    o = n(419954),
    d = n(430452),
    c = n(780964),
    u = n(840065),
    _ = n(903427),
    m = n(652215),
    g = n(985018),
    A = n(755087);
let h = (0, o.E2)(c.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
    usePredicate: _.P,
    Component: function () {
        let e = (0, l.bG)([d.Ay], () => {
                let { shortcut: e } = d.Ay.getModeOptions();
                return e;
            }),
            t = g.intl.format(g.t.HVvn5T, { onClick: () => (0, u.openUserSettings)(c.X.KEYBINDS_PANEL) });
        return (0, i.jsx)(s.D0$, {
            label: g.intl.string(g.t["o+BJQR"]),
            description: t,
            layout: "horizontal-responsive",
            children: (0, i.jsx)("div", {
                className: A.e,
                children: (0, i.jsx)(r.A, {
                    defaultValue: e,
                    onChange: (e) => a.A.setMode(m.TBI.PUSH_TO_TALK, { shortcut: e }),
                }),
            }),
        });
    },
});
