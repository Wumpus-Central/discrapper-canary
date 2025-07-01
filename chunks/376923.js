(n.d(t, {
    LD: () => g,
    LJ: () => I,
    mV: () => T,
    mh: () => f,
    qc: () => m,
    wi: () => h
}),
    n(997841),
    n(388685));
var r,
    l = n(73800),
    i = n(913527),
    s = n.n(i),
    a = n(399606),
    o = n(983736),
    u = n(271383),
    c = n(430824),
    d = n(594174),
    E = n(630388),
    _ = n(709054);
(n(893966), n(527379));
var A = n(372897),
    m = (((r = {})[(r.NO_GATE = 0)] = 'NO_GATE'), (r[(r.NO_AGREEMENT = 1)] = 'NO_AGREEMENT'), (r[(r.AGREED = 2)] = 'AGREED'), r);
function T(e, t) {
    var n, r;
    let l = (0, a.e7)([d.default], () => d.default.getUser(e), [e]),
        i = (0, a.e7)([u.ZP], () => u.ZP.getMember(t, e), [t, e]),
        s = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]);
    return (0, o.Dc)(s) ? (null == l || null == i || null == s ? 1 : (0, E.yE)(null != (n = i.flags) ? n : 0, A.q.BYPASSES_VERIFICATION) || (0, E.yE)(null != (r = i.flags) ? r : 0, A.q.COMPLETED_ONBOARDING) || (null != i.isPending && !i.isPending) ? 2 : 1) : 0;
}
function f(e, t) {
    var n;
    let r = (0, a.e7)([d.default], () => d.default.getUser(e), [e]),
        l = (0, a.e7)([u.ZP], () => u.ZP.getMember(t, e), [t, e]);
    if (null == r || null == l) return !1;
    let i = (0, E.yE)(null != (n = l.flags) ? n : 0, A.q.BYPASSES_VERIFICATION),
        s = (null == r ? void 0 : r.isPhoneVerified()) || (null == r ? void 0 : r.isStaff()),
        o = (null == l ? void 0 : l.joinedAt) != null;
    return r.verified || s || o || i;
}
function g(e) {
    return l.useMemo(() => {
        let t = _.default.extractTimestamp(e);
        return s()(new Date(t)).format('MMM DD, YYYY');
    }, [e]);
}
function I(e) {
    return l.useMemo(() => {
        let t = _.default.extractTimestamp(e);
        return s()(new Date(t)).format('MM/DD/YYYY');
    }, [e]);
}
function h(e, t) {
    let n = (0, a.e7)([u.ZP], () => u.ZP.getMember(t, e), [t, e]),
        r = null == n ? void 0 : n.joinedAt;
    return l.useMemo(() => (null == r ? '' : s()(new Date(r)).format('MMM DD, YYYY')), [r]);
}
