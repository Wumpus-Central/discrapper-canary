i.d(e, {
    C: () => I,
});
var n = i(627968),
    l = i(158954),
    s = i(311907),
    r = i(827343),
    u = i(117178),
    a = i(419954),
    o = i(430452),
    T = i(780964),
    A = i(840065),
    S = i(903427),
    E = i(652215),
    d = i(985018),
    _ = i(755087);
let I = (0, a.E2)(T.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    useSearchTerms: () => [d.intl.string(d.t["pS+K2L"]), d.intl.string(d.t.nuFtHH)],
    usePredicate: S.P,
    Component: function () {
        let t = (0, s.bG)([o.A], () => {
                let { shortcut: t } = o.A.getModeOptions();
                return t;
            }),
            e = d.intl.format(d.t.HVvn5T, {
                onClick: () =>
                    (0, A.openUserSettings)(T.X.KEYBINDS_PANEL, {
                        section: E.nc_.KEYBINDS,
                    }),
            });
        return (0, n.jsx)(l.D0$, {
            label: d.intl.string(d.t["o+BJQR"]),
            description: e,
            layout: "horizontal-responsive",
            children: (0, n.jsx)("div", {
                className: _.e,
                children: (0, n.jsx)(u.A, {
                    defaultValue: t,
                    onChange: (t) =>
                        r.A.setMode(E.TBI.PUSH_TO_TALK, {
                            shortcut: t,
                        }),
                }),
            }),
        });
    },
});
