(t.d(e, {
    LD: () => B,
    LJ: () => w,
    mV: () => d,
    mh: () => C,
    qc: () => E,
    wi: () => D
}),
    t(997841),
    t(388685));
var n,
    r = t(73800),
    l = t(399606),
    i = t(983736),
    s = t(706454),
    a = t(271383),
    o = t(430824),
    g = t(594174),
    f = t(630388),
    c = t(709054);
(t(893966), t(527379));
var v = t(372897);
let h = {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    },
    u = {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
    };
var E = (((n = {})[(n.NO_GATE = 0)] = 'NO_GATE'), (n[(n.NO_AGREEMENT = 1)] = 'NO_AGREEMENT'), (n[(n.AGREED = 2)] = 'AGREED'), n);
function d(A, e) {
    var t, n;
    let r = (0, l.e7)([g.default], () => g.default.getUser(A), [A]),
        s = (0, l.e7)([a.ZP], () => a.ZP.getMember(e, A), [e, A]),
        c = (0, l.e7)([o.Z], () => o.Z.getGuild(e), [e]);
    return (0, i.Dc)(c) ? (null == r || null == s || null == c ? 1 : (0, f.yE)(null != (t = s.flags) ? t : 0, v.q.BYPASSES_VERIFICATION) || (0, f.yE)(null != (n = s.flags) ? n : 0, v.q.COMPLETED_ONBOARDING) || (null != s.isPending && !s.isPending) ? 2 : 1) : 0;
}
function C(A, e) {
    var t;
    let n = (0, l.e7)([g.default], () => g.default.getUser(A), [A]),
        r = (0, l.e7)([a.ZP], () => a.ZP.getMember(e, A), [e, A]);
    if (null == n || null == r) return !1;
    let i = (0, f.yE)(null != (t = r.flags) ? t : 0, v.q.BYPASSES_VERIFICATION),
        s = (null == n ? void 0 : n.isPhoneVerified()) || (null == n ? void 0 : n.isStaff()),
        o = (null == r ? void 0 : r.joinedAt) != null;
    return n.verified || s || o || i;
}
function B(A) {
    let e = (0, l.e7)([s.default], () => s.default.locale);
    return r.useMemo(() => new Date(c.default.extractTimestamp(A)).toLocaleDateString(e, h), [A, e]);
}
function w(A) {
    let e = (0, l.e7)([s.default], () => s.default.locale);
    return r.useMemo(() => new Date(c.default.extractTimestamp(A)).toLocaleDateString(e, u), [A, e]);
}
function D(A, e) {
    let t = (0, l.e7)([s.default], () => s.default.locale),
        n = (0, l.e7)([a.ZP], () => a.ZP.getMember(e, A), [e, A]),
        i = null == n ? void 0 : n.joinedAt;
    return r.useMemo(() => (null == i ? '' : new Date(i).toLocaleDateString(t, h)), [i, t]);
}
