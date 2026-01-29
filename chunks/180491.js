i.d(t, {
    m: () => d,
});
var n = i(827343),
    l = i(419954),
    s = i(430452),
    r = i(780964),
    a = i(903427),
    u = i(652215),
    o = i(985018);
let d = (0, l.sN)(r.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
    useTitle: () => o.intl.string(o.t.GCNMM8),
    useSearchTerms: () => [o.intl.string(o.t["pS+K2L"]), o.intl.string(o.t.nuFtHH)],
    setValue: function (e) {
        n.A.setMode(u.TBI.PUSH_TO_TALK, {
            delay: e,
        });
    },
    minValue: 0,
    maxValue: u.IjB,
    getInitialValue: function () {
        let { delay: e } = s.A.getModeOptions();
        return e;
    },
    onValueRender: function (e) {
        return e >= 1e3 ? ((e /= 1e3), "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xa0ms");
    },
    usePredicate: a.P,
});
