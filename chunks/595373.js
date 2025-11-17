n.d(e, {
    Z: () => f,
    p: () => N,
});
var i = n(54381),
    l = n(473749),
    u = n(818710),
    r = n(793030),
    s = n(442837),
    a = n(100527),
    o = n(509613),
    c = n(131951),
    E = n(313789),
    S = n(325808),
    T = n(962100),
    d = n(518596),
    I = n(345655),
    O = n(981631),
    g = n(65154),
    _ = n(388032);
function N() {
    return (0, s.e7)([c.Z], () => c.Z.getActiveInputProfile() !== I._.STUDIO);
}
function A() {
    let t = (0, s.e7)([c.Z], () => c.Z.getMode() === g.pM.PUSH_TO_TALK),
        e = l.useCallback((t) => {
            (0, S.XH)(t ? g.pM.PUSH_TO_TALK : g.pM.VOICE_ACTIVITY, [a.Z.USER_SETTINGS_VOICE_AND_VIDEO]);
        }, []),
        n = u.FB ? _.intl.string(_.t.tG4Np5) : _.intl.string(_.t.JMyQin),
        o = (0, s.e7)([c.Z], () => c.Z.getMode()),
        I = l.useMemo(
            () =>
                u.FB || o !== g.pM.PUSH_TO_TALK
                    ? _.intl.format(_.t.HVvn5T, {
                          onClick: () => (0, d.openUserSettings)(E.n.KEYBINDS_PANEL, { section: O.oAB.KEYBINDS }),
                      })
                    : _.intl.format(_.t.zvMPOc, { onDownloadClick: () => (0, T.y)("Help Text PTT") }),
            [o],
        );
    return (0, i.jsxs)(r.Kqy, {
        gap: 16,
        children: [
            (0, i.jsx)(r.M14, {
                type: "info",
                children: I,
            }),
            (0, i.jsx)(r.rsf, {
                label: n,
                description: _.intl.string(_.t.yept4k),
                checked: t,
                onChange: (t) => e(t),
            }),
        ],
    });
}
let f = (0, o.ON)(E.n.VOICE_PUSH_TO_TALK_SETTING, {
    usePredicate: N,
    render: () => (0, i.jsx)(A, {}),
    useSearchTerms: () => [
        u.FB ? _.intl.string(_.t.tG4Np5) : _.intl.string(_.t.JMyQin),
        _.intl.string(_.t["pS+K2L"]),
        _.intl.string(_.t.nuFtHH),
    ],
});
