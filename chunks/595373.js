n.d(e, {
    Z: () => T,
    p: () => S,
});
var i = n(818710),
    l = n(442837),
    r = n(100527),
    u = n(509613),
    s = n(131951),
    a = n(313789),
    o = n(325808),
    c = n(345655),
    E = n(65154),
    d = n(388032);
function S() {
    return (0, l.e7)([s.Z], () => s.Z.getActiveInputProfile() !== c._.STUDIO);
}
let T = (0, u.qs)(a.n.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: () => (i.FB ? d.intl.string(d.t.tG4Np5) : d.intl.string(d.t.JMyQin)),
    useSubtitle: () => d.intl.string(d.t.yept4k),
    usePredicate: S,
    useValue: function () {
        return (0, l.e7)([s.Z], () => s.Z.getMode() === E.pM.PUSH_TO_TALK);
    },
    setValue: function (t) {
        (0, o.XH)(t ? E.pM.PUSH_TO_TALK : E.pM.VOICE_ACTIVITY, [r.Z.USER_SETTINGS_VOICE_AND_VIDEO]);
    },
    useSearchTerms: () => [d.intl.string(d.t["pS+K2L"]), d.intl.string(d.t.nuFtHH)],
});
