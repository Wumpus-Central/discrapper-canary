n.d(e, {
    J: () => T,
    Z: () => g,
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
    E = n(345655),
    S = n(65154),
    I = n(388032);
function T() {
    return (0, s.e7)([a.Z], () => a.Z.getMode() === S.pM.PUSH_TO_TALK);
}
let g = (0, u.qs)(o.n.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return l.FB ? I.intl.string(I.t.tG4Np5) : I.intl.string(I.t.JMyQin);
    },
    useSubtitle: function () {
        let t = (0, s.e7)([a.Z], () => a.Z.getMode());
        return i.useMemo(() => {
            if (!l.FB && t === S.pM.PUSH_TO_TALK)
                return I.intl.format(I.t["VHI4+Y"], { onDownloadClick: () => (0, d.y)("Help Text PTT") });
        }, [t]);
    },
    usePredicate: function () {
        return (0, s.e7)([a.Z], () => a.Z.getActiveInputProfile() !== E._.STUDIO);
    },
    useValue: function () {
        return (0, s.e7)([a.Z], () => a.Z.getMode() === S.pM.PUSH_TO_TALK);
    },
    setValue: function (t) {
        (0, c.XH)(t ? S.pM.PUSH_TO_TALK : S.pM.VOICE_ACTIVITY, [r.Z.USER_SETTINGS_VOICE_AND_VIDEO]);
    },
    useSearchTerms: () => [I.intl.string(I.t["pS+K2L"]), I.intl.string(I.t.nuFtHH)],
});
