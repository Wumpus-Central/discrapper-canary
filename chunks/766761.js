i.d(e, { A: () => d });
var n = i(311907),
    l = i(754333),
    s = i(419954),
    r = i(287809),
    a = i(780964),
    u = i(119762),
    o = i(985018);
let d = (0, s.E2)(a.X.SESSIONS_OTHER_SESSIONS_SETTING, {
    Component: u.Af,
    useSearchTerms: () => [o.intl.string(o.t["+1h0k/"])],
    usePredicate: () => {
        let { otherSessions: t } = (0, l.r)(),
            e = (0, n.bG)([r.default], () => r.default.getCurrentUser());
        return t.length > 0 || !e?.mfaEnabled;
    },
});
