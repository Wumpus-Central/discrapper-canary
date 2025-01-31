n.d(t, {
    LD: () => C,
    LJ: () => x,
    mV: () => g,
    mh: () => _,
    qc: () => f,
    wi: () => v
}),
    n(789020),
    n(47120);
var i,
    l = n(192379),
    a = n(913527),
    r = n.n(a),
    s = n(399606),
    o = n(983736),
    c = n(271383),
    d = n(430824),
    u = n(594174),
    h = n(630388),
    p = n(709054);
n(893966), n(527379);
var m = n(372897),
    f = (((i = {})[(i.NO_GATE = 0)] = 'NO_GATE'), (i[(i.NO_AGREEMENT = 1)] = 'NO_AGREEMENT'), (i[(i.AGREED = 2)] = 'AGREED'), i);
function g(e, t) {
    var n, i;
    let l = (0, s.e7)([u.default], () => u.default.getUser(e), [e]),
        a = (0, s.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]),
        r = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]);
    return (0, o.Dc)(r) ? (null == l || null == a || null == r ? 1 : (0, h.yE)(null !== (n = a.flags) && void 0 !== n ? n : 0, m.q.BYPASSES_VERIFICATION) || (0, h.yE)(null !== (i = a.flags) && void 0 !== i ? i : 0, m.q.COMPLETED_ONBOARDING) || (null != a.isPending && !a.isPending) ? 2 : 1) : 0;
}
function _(e, t) {
    var n;
    let i = (0, s.e7)([u.default], () => u.default.getUser(e), [e]),
        l = (0, s.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]);
    if (null == i || null == l) return !1;
    let a = (0, h.yE)(null !== (n = l.flags) && void 0 !== n ? n : 0, m.q.BYPASSES_VERIFICATION),
        r = (null == i ? void 0 : i.isPhoneVerified()) || (null == i ? void 0 : i.isStaff()),
        o = (null == l ? void 0 : l.joinedAt) != null;
    return i.verified || r || o || a;
}
function C(e) {
    return l.useMemo(() => {
        let t = p.default.extractTimestamp(e);
        return r()(new Date(t)).format('MMM DD, YYYY');
    }, [e]);
}
function x(e) {
    return l.useMemo(() => {
        let t = p.default.extractTimestamp(e);
        return r()(new Date(t)).format('MM/DD/YYYY');
    }, [e]);
}
function v(e, t) {
    let n = (0, s.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]),
        i = null == n ? void 0 : n.joinedAt;
    return l.useMemo(() => (null == i ? '' : r()(new Date(i)).format('MMM DD, YYYY')), [i]);
}
