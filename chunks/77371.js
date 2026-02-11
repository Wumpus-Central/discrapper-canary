i.d(t, { C: () => c });
var n = i(627968),
    l = i(158954),
    s = i(311907),
    r = i(827343),
    a = i(117178),
    u = i(419954),
    o = i(430452),
    d = i(780964),
    _ = i(840065),
    T = i(903427),
    A = i(652215),
    S = i(985018),
    E = i(755087);
let c = (0, u.E2)(d.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    useSearchTerms: () => [S.intl.string(S.t["pS+K2L"]), S.intl.string(S.t.nuFtHH)],
    usePredicate: T.P,
    Component: function () {
        let e = (0, s.bG)([o.Ay], () => {
                let { shortcut: e } = o.Ay.getModeOptions();
                return e;
            }),
            t = S.intl.format(S.t.HVvn5T, {
                onClick: () => (0, _.openUserSettings)(d.X.KEYBINDS_PANEL, { section: A.nc_.KEYBINDS }),
            });
        return (0, n.jsx)(l.D0$, {
            label: S.intl.string(S.t["o+BJQR"]),
            description: t,
            layout: "horizontal-responsive",
            children: (0, n.jsx)("div", {
                className: E.e,
                children: (0, n.jsx)(a.A, {
                    defaultValue: e,
                    onChange: (e) => r.A.setMode(A.TBI.PUSH_TO_TALK, { shortcut: e }),
                }),
            }),
        });
    },
});
