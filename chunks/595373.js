n.d(e, {
    J: () => I,
    Y: () => g,
});
var i = n(473749),
    l = n(818710),
    s = n(442837),
    r = n(100527),
    u = n(509613),
    a = n(131951),
    o = n(313789),
    c = n(325808),
    d = n(962100),
    T = n(345655),
    E = n(65154),
    S = n(388032);
function I() {
    return (0, s.e7)([a.Z], () => a.Z.getMode() === E.pM.PUSH_TO_TALK);
}
let g = (0, u.qs)(o.n.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return l.FB ? S.intl.string(S.t.tG4Np5) : S.intl.string(S.t.JMyQin);
    },
    useSubtitle: function () {
        let t = (0, s.e7)([a.Z], () => a.Z.getMode());
        return i.useMemo(() => {
            if (!l.FB && t === E.pM.PUSH_TO_TALK)
                return S.intl.format(S.t["VHI4+Y"], { onDownloadClick: () => (0, d.y)("Help Text PTT") });
        }, [t]);
    },
    usePredicate: function () {
        return (0, s.e7)([a.Z], () => a.Z.getActiveInputProfile() !== T._.STUDIO);
    },
    useValue: function () {
        return (0, s.e7)([a.Z], () => a.Z.getMode() === E.pM.PUSH_TO_TALK);
    },
    setValue: function (t) {
        (0, c.XH)(t ? E.pM.PUSH_TO_TALK : E.pM.VOICE_ACTIVITY, [r.Z.USER_SETTINGS_VOICE_AND_VIDEO]);
    },
    useSearchTerms: () => [S.intl.string(S.t["pS+K2L"]), S.intl.string(S.t.nuFtHH)],
});
