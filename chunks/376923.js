n.d(t, {
    LD: () => _,
    LJ: () => C,
    mV: () => g,
    mh: () => b,
    qc: () => m,
    wi: () => y
}),
    n(789020),
    n(47120);
var r,
    i = n(192379),
    l = n(913527),
    o = n.n(l),
    a = n(399606),
    s = n(983736),
    c = n(271383),
    u = n(430824),
    d = n(594174),
    p = n(630388),
    h = n(709054);
n(893966), n(527379);
var f = n(372897),
    m = (((r = {})[(r.NO_GATE = 0)] = 'NO_GATE'), (r[(r.NO_AGREEMENT = 1)] = 'NO_AGREEMENT'), (r[(r.AGREED = 2)] = 'AGREED'), r);
function g(e, t) {
    var n, r;
    let i = (0, a.e7)([d.default], () => d.default.getUser(e), [e]),
        l = (0, a.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]),
        o = (0, a.e7)([u.Z], () => u.Z.getGuild(t), [t]);
    return (0, s.Dc)(o) ? (null == i || null == l || null == o ? 1 : (0, p.yE)(null != (n = l.flags) ? n : 0, f.q.BYPASSES_VERIFICATION) || (0, p.yE)(null != (r = l.flags) ? r : 0, f.q.COMPLETED_ONBOARDING) || (null != l.isPending && !l.isPending) ? 2 : 1) : 0;
}
function b(e, t) {
    var n;
    let r = (0, a.e7)([d.default], () => d.default.getUser(e), [e]),
        i = (0, a.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]);
    if (null == r || null == i) return !1;
    let l = (0, p.yE)(null != (n = i.flags) ? n : 0, f.q.BYPASSES_VERIFICATION),
        o = (null == r ? void 0 : r.isPhoneVerified()) || (null == r ? void 0 : r.isStaff()),
        s = (null == i ? void 0 : i.joinedAt) != null;
    return r.verified || o || s || l;
}
function _(e) {
    return i.useMemo(() => {
        let t = h.default.extractTimestamp(e);
        return o()(new Date(t)).format('MMM DD, YYYY');
    }, [e]);
}
function C(e) {
    return i.useMemo(() => {
        let t = h.default.extractTimestamp(e);
        return o()(new Date(t)).format('MM/DD/YYYY');
    }, [e]);
}
function y(e, t) {
    let n = (0, a.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]),
        r = null == n ? void 0 : n.joinedAt;
    return i.useMemo(() => (null == r ? '' : o()(new Date(r)).format('MMM DD, YYYY')), [r]);
}
