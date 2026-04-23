n.d(t, { m: () => u });
var i = n(827343),
    s = n(419954),
    l = n(430452),
    a = n(780964),
    r = n(916607),
    o = n(652215),
    d = n(985018);
let u = (0, s.sN)(a.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
    useTitle: () => d.intl.string(d.t.GCNMM8),
    useSearchTerms: () => [d.intl.string(d.t["pS+K2L"]), d.intl.string(d.t.nuFtHH)],
    setValue: function (e) {
        i.A.setMode(o.TBI.PUSH_TO_TALK, { delay: e });
    },
    minValue: 0,
    maxValue: o.IjB,
    getInitialValue: function () {
        let { delay: e } = l.Ay.getModeOptions();
        return e;
    },
    onValueRender: function (e) {
        return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
    },
    usePredicate: r.P,
});
