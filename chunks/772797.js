i.d(e, {
    A: () => S,
});
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    u = i(555444),
    a = i(780964),
    o = i(903427),
    T = i(731854),
    A = i(985018);
let S = (0, s.zD)(a.X.VOICE_PUSH_TO_TALK_LATCHING_SETTING, {
    useTitle: () => A.intl.string(A.t.EGn1eN),
    useSubtitle: () => A.intl.string(A.t.iT257i),
    useSearchTerms: () => [A.intl.string(A.t["pS+K2L"]), A.intl.string(A.t.nuFtHH)],
    useValue: function () {
        return (0, n.bG)([r.A], () => {
            let { pttLatchingEnabled: t } = r.A.getModeOptions();
            return null != t && t;
        });
    },
    setValue: function (t) {
        l.A.setMode(T.TB.PUSH_TO_TALK, {
            pttLatchingEnabled: t,
        });
    },
    usePredicate: function () {
        let t = (0, o.P)(),
            { enableLatching: e } = (0, u.y)({
                location: "PushToTalkLatchingSetting",
            });
        return t && e;
    },
});
