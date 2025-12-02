n.d(e, {
    J: () => I,
    Z: () => g,
});
var i = n(473749),
    r = n(818710),
    l = n(442837),
    s = n(100527),
    u = n(509613),
    a = n(131951),
    o = n(313789),
    c = n(325808),
    d = n(962100),
    E = n(345655),
    S = n(65154),
    T = n(388032);
function I() {
    return (0, l.e7)([a.Z], () => a.Z.getMode() === S.pM.PUSH_TO_TALK);
}
let g = (0, u.qs)(o.n.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return r.FB ? T.intl.string(T.t.tG4Np5) : T.intl.string(T.t.JMyQin);
    },
    useSubtitle: function () {
        let t = (0, l.e7)([a.Z], () => a.Z.getMode());
        return i.useMemo(() => {
            if (!r.FB && t === S.pM.PUSH_TO_TALK)
                return T.intl.format(T.t["VHI4+Y"], { onDownloadClick: () => (0, d.y)("Help Text PTT") });
        }, [t]);
    },
    usePredicate: function () {
        return (0, l.e7)([a.Z], () => a.Z.getActiveInputProfile() !== E._.STUDIO);
    },
    useValue: function () {
        return (0, l.e7)([a.Z], () => a.Z.getMode() === S.pM.PUSH_TO_TALK);
    },
    setValue: function (t) {
        (0, c.XH)(t ? S.pM.PUSH_TO_TALK : S.pM.VOICE_ACTIVITY, [s.Z.USER_SETTINGS_VOICE_AND_VIDEO]);
    },
    useSearchTerms: () => [T.intl.string(T.t["pS+K2L"]), T.intl.string(T.t.nuFtHH)],
});
