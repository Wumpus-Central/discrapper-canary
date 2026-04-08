n.d(t, { A: () => g });
var i = n(627968),
    s = n(311907),
    l = n(754333),
    a = n(419954),
    r = n(287809),
    o = n(780964),
    d = n(358776),
    c = n(102255),
    u = n(17308),
    m = n(985018);
let g = (0, a.E2)(o.X.SESSIONS_OTHER_SESSIONS_SETTING, {
    Component: function () {
        return (0, d._A)("OtherSessionsSetting") ? (0, i.jsx)(u.A, {}) : (0, i.jsx)(c.AF, {});
    },
    useSearchTerms: () => [m.intl.string(m.t.Vij32M)],
    usePredicate: () => {
        let { otherSessions: e } = (0, l.r)(),
            t = (0, s.bG)([r.default], () => r.default.getCurrentUser()?.mfaEnabled);
        return e.length > 0 || !t;
    },
});
