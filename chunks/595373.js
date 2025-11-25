n.d(e, {
    J: () => I,
    Z: () => O,
});
var i = n(473749),
    l = n(818710),
    r = n(442837),
    u = n(100527),
    s = n(509613),
    a = n(131951),
    o = n(313789),
    c = n(325808),
    E = n(962100),
    d = n(345655),
    S = n(65154),
    T = n(388032);
function I() {
    return (0, r.e7)([a.Z], () => a.Z.getMode() === S.pM.PUSH_TO_TALK);
}
let O = (0, s.qs)(o.n.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return l.FB ? T.intl.string(T.t.tG4Np5) : T.intl.string(T.t.JMyQin);
    },
    useSubtitle: function () {
        let t = (0, r.e7)([a.Z], () => a.Z.getMode());
        return i.useMemo(() => {
            if (!l.FB && t === S.pM.PUSH_TO_TALK)
                return T.intl.format(T.t["VHI4+Y"], { onDownloadClick: () => (0, E.y)("Help Text PTT") });
        }, [t]);
    },
    usePredicate: function () {
        return (0, r.e7)([a.Z], () => a.Z.getActiveInputProfile() !== d._.STUDIO);
    },
    useValue: function () {
        return (0, r.e7)([a.Z], () => a.Z.getMode() === S.pM.PUSH_TO_TALK);
    },
    setValue: function (t) {
        (0, c.XH)(t ? S.pM.PUSH_TO_TALK : S.pM.VOICE_ACTIVITY, [u.Z.USER_SETTINGS_VOICE_AND_VIDEO]);
    },
    useSearchTerms: () => [T.intl.string(T.t["pS+K2L"]), T.intl.string(T.t.nuFtHH)],
});
