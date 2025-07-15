(n.d(t, {
    LD: () => f,
    LJ: () => O,
    mV: () => g,
    mh: () => m,
    qc: () => I,
    wi: () => N
}),
    n(997841),
    n(388685));
var r,
    l = n(73800),
    i = n(399606),
    s = n(983736),
    a = n(706454),
    o = n(271383),
    u = n(430824),
    c = n(594174),
    E = n(630388),
    d = n(709054);
(n(893966), n(527379));
var _ = n(372897);
let A = {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    },
    T = {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
    };
var I = (((r = {})[(r.NO_GATE = 0)] = 'NO_GATE'), (r[(r.NO_AGREEMENT = 1)] = 'NO_AGREEMENT'), (r[(r.AGREED = 2)] = 'AGREED'), r);
function g(e, t) {
    var n, r;
    let l = (0, i.e7)([c.default], () => c.default.getUser(e), [e]),
        a = (0, i.e7)([o.ZP], () => o.ZP.getMember(t, e), [t, e]),
        d = (0, i.e7)([u.Z], () => u.Z.getGuild(t), [t]);
    return (0, s.Dc)(d) ? (null == l || null == a || null == d ? 1 : (0, E.yE)(null != (n = a.flags) ? n : 0, _.q.BYPASSES_VERIFICATION) || (0, E.yE)(null != (r = a.flags) ? r : 0, _.q.COMPLETED_ONBOARDING) || (null != a.isPending && !a.isPending) ? 2 : 1) : 0;
}
function m(e, t) {
    var n;
    let r = (0, i.e7)([c.default], () => c.default.getUser(e), [e]),
        l = (0, i.e7)([o.ZP], () => o.ZP.getMember(t, e), [t, e]);
    if (null == r || null == l) return !1;
    let s = (0, E.yE)(null != (n = l.flags) ? n : 0, _.q.BYPASSES_VERIFICATION),
        a = (null == r ? void 0 : r.isPhoneVerified()) || (null == r ? void 0 : r.isStaff()),
        u = (null == l ? void 0 : l.joinedAt) != null;
    return r.verified || a || u || s;
}
function f(e) {
    let t = (0, i.e7)([a.default], () => a.default.locale);
    return l.useMemo(() => new Date(d.default.extractTimestamp(e)).toLocaleDateString(t, A), [e, t]);
}
function O(e) {
    let t = (0, i.e7)([a.default], () => a.default.locale);
    return l.useMemo(() => new Date(d.default.extractTimestamp(e)).toLocaleDateString(t, T), [e, t]);
}
function N(e, t) {
    let n = (0, i.e7)([a.default], () => a.default.locale),
        r = (0, i.e7)([o.ZP], () => o.ZP.getMember(t, e), [t, e]),
        s = null == r ? void 0 : r.joinedAt;
    return l.useMemo(() => (null == s ? '' : new Date(s).toLocaleDateString(n, A)), [s, n]);
}
