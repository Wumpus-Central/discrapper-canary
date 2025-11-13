n.d(e, { Z: () => E });
var i = n(846027),
    l = n(509613),
    u = n(131951),
    r = n(313789),
    s = n(325808),
    a = n(595373),
    o = n(981631),
    c = n(388032);
let E = (0, l.UO)(r.n.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
    useTitle: () => c.intl.string(c.t.GCNMM8),
    usePredicate: a.p,
    getInitialValue: function () {
        let { delay: t } = u.Z.getModeOptions();
        return t;
    },
    setValue: function (t) {
        i.Z.setMode(o.pM4.PUSH_TO_TALK, { delay: t });
    },
    minValue: 0,
    maxValue: o.qhL,
    onValueRender: s.cO,
    useSearchTerms: () => [c.intl.string(c.t["pS+K2L"]), c.intl.string(c.t.nuFtHH)],
});
