i.d(t, { A: () => T });
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    a = i(555444),
    u = i(780964),
    o = i(903427),
    d = i(731854),
    _ = i(985018);
let T = (0, s.zD)(u.X.VOICE_PUSH_TO_TALK_LATCHING_SETTING, {
    useTitle: () => _.intl.string(_.t.EGn1eN),
    useSubtitle: () => _.intl.string(_.t.iT257i),
    useSearchTerms: () => [_.intl.string(_.t["pS+K2L"]), _.intl.string(_.t.nuFtHH)],
    useValue: function () {
        return (0, n.bG)([r.Ay], () => {
            let { pttLatchingEnabled: e } = r.Ay.getModeOptions();
            return e ?? !1;
        });
    },
    setValue: function (e) {
        l.A.setMode(d.TB.PUSH_TO_TALK, { pttLatchingEnabled: e });
    },
    usePredicate: function () {
        let e = (0, o.P)(),
            { enableLatching: t } = (0, a.y)({ location: "PushToTalkLatchingSetting" });
        return e && t;
    },
});
