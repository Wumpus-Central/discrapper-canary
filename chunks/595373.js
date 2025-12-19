n.d(e, {
    J: () => _,
    Y: () => g,
});
var i = n(473749),
    l = n(818710),
    s = n(442837),
    u = n(100527),
    r = n(509613),
    a = n(131951),
    o = n(313789),
    T = n(325808),
    S = n(962100),
    c = n(345655),
    E = n(65154),
    d = n(388032);
function _() {
    return (0, s.e7)([a.Z], () => a.Z.getMode() === E.pM.PUSH_TO_TALK);
}
let g = (0, r.qs)(o.n.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return l.FB ? d.intl.string(d.t.tG4Np5) : d.intl.string(d.t.JMyQin);
    },
    useSubtitle: function () {
        let t = (0, s.e7)([a.Z], () => a.Z.getMode());
        return i.useMemo(() => {
            if (!l.FB && t === E.pM.PUSH_TO_TALK)
                return d.intl.format(d.t["VHI4+Y"], { onDownloadClick: () => (0, S.y)("Help Text PTT") });
        }, [t]);
    },
    usePredicate: function () {
        return (0, s.e7)([a.Z], () => a.Z.getActiveInputProfile() !== c._.STUDIO);
    },
    useValue: function () {
        return (0, s.e7)([a.Z], () => a.Z.getMode() === E.pM.PUSH_TO_TALK);
    },
    setValue: function (t) {
        (0, T.XH)(t ? E.pM.PUSH_TO_TALK : E.pM.VOICE_ACTIVITY, [u.Z.USER_SETTINGS_VOICE_AND_VIDEO]);
    },
    useSearchTerms: () => [d.intl.string(d.t["pS+K2L"]), d.intl.string(d.t.nuFtHH)],
});
