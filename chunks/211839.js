n.d(e, { m: () => T });
var i = n(442837),
    l = n(136097),
    s = n(509613),
    u = n(594174),
    r = n(313789),
    a = n(36192),
    o = n(388032);
let T = (0, s.ON)(r.n.SESSIONS_OTHER_SESSIONS_SETTING, {
    Component: a.Vy,
    useSearchTerms: () => [o.intl.string(o.t["+1h0k/"])],
    usePredicate: () => {
        let { otherSessions: t } = (0, l.h)(),
            e = (0, i.e7)([u.default], () => u.default.getCurrentUser());
        return t.length > 0 || !(null == e ? void 0 : e.mfaEnabled);
    },
});
