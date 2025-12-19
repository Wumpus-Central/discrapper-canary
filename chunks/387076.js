n.d(e, { q: () => S });
var i = n(846027),
    l = n(509613),
    s = n(131951),
    u = n(313789),
    r = n(325808),
    a = n(595373),
    o = n(981631),
    T = n(388032);
let S = (0, l.UO)(u.n.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
    useTitle: () => T.intl.string(T.t.GCNMM8),
    useSearchTerms: () => [T.intl.string(T.t["pS+K2L"]), T.intl.string(T.t.nuFtHH)],
    setValue: function (t) {
        i.Z.setMode(o.pM4.PUSH_TO_TALK, { delay: t });
    },
    minValue: 0,
    maxValue: o.qhL,
    getInitialValue: function () {
        let { delay: t } = s.Z.getModeOptions();
        return t;
    },
    onValueRender: r.cO,
    usePredicate: a.J,
});
