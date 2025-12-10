n.d(e, {
    J: () => g,
    Y: () => I,
});
var i = n(473749),
    l = n(818710),
    s = n(442837),
    u = n(100527),
    r = n(509613),
    a = n(131951),
    o = n(313789),
    c = n(325808),
    d = n(962100),
    S = n(345655),
    T = n(65154),
    E = n(388032);
function g() {
    return (0, s.e7)([a.Z], () => a.Z.getMode() === T.pM.PUSH_TO_TALK);
}
let I = (0, r.qs)(o.n.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return l.FB ? E.intl.string(E.t.tG4Np5) : E.intl.string(E.t.JMyQin);
    },
    useSubtitle: function () {
        let t = (0, s.e7)([a.Z], () => a.Z.getMode());
        return i.useMemo(() => {
            if (!l.FB && t === T.pM.PUSH_TO_TALK)
                return E.intl.format(E.t["VHI4+Y"], { onDownloadClick: () => (0, d.y)("Help Text PTT") });
        }, [t]);
    },
    usePredicate: function () {
        return (0, s.e7)([a.Z], () => a.Z.getActiveInputProfile() !== S._.STUDIO);
    },
    useValue: function () {
        return (0, s.e7)([a.Z], () => a.Z.getMode() === T.pM.PUSH_TO_TALK);
    },
    setValue: function (t) {
        (0, c.XH)(t ? T.pM.PUSH_TO_TALK : T.pM.VOICE_ACTIVITY, [u.Z.USER_SETTINGS_VOICE_AND_VIDEO]);
    },
    useSearchTerms: () => [E.intl.string(E.t["pS+K2L"]), E.intl.string(E.t.nuFtHH)],
});
