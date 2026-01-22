i.d(e, { m: () => A });
var n = i(827343),
    l = i(419954),
    s = i(430452),
    r = i(780964),
    u = i(330688),
    a = i(903427),
    o = i(652215),
    T = i(985018);
let A = (0, l.sN)(r.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
    useTitle: () => T.intl.string(T.t.GCNMM8),
    useSearchTerms: () => [T.intl.string(T.t["pS+K2L"]), T.intl.string(T.t.nuFtHH)],
    setValue: function (t) {
        n.A.setMode(o.TBI.PUSH_TO_TALK, { delay: t });
    },
    minValue: 0,
    maxValue: o.IjB,
    getInitialValue: function () {
        let { delay: t } = s.A.getModeOptions();
        return t;
    },
    onValueRender: u.hH,
    usePredicate: a.P,
});
