n.d(t, { A: () => c });
var i = n(311907),
    s = n(754333),
    l = n(419954),
    a = n(287809),
    r = n(780964),
    o = n(102255),
    d = n(985018);
let c = (0, l.E2)(r.X.SESSIONS_OTHER_SESSIONS_SETTING, {
    Component: o.AF,
    useSearchTerms: () => [d.intl.string(d.t["+1h0k/"])],
    usePredicate: () => {
        let { otherSessions: e } = (0, s.r)(),
            t = (0, i.bG)([a.default], () => a.default.getCurrentUser());
        return e.length > 0 || !t?.mfaEnabled;
    },
});
