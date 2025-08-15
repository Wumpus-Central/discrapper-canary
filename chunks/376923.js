t.d(e, {
    LD: () => B,
    LJ: () => w,
    mV: () => E,
    mh: () => C,
    qc: () => d,
    wi: () => D,
}),
    t(997841),
    t(388685);
var n,
    r = t(647438),
    l = t(399606),
    i = t(983736),
    a = t(706454),
    s = t(271383),
    o = t(430824),
    g = t(594174),
    c = t(630388),
    f = t(709054);
t(893966), t(527379);
var v = t(372897);
let u = {
        month: "short",
        day: "numeric",
        year: "numeric",
    },
    h = {
        month: "numeric",
        day: "numeric",
        year: "numeric",
    };
var d =
    (((n = {})[(n.NO_GATE = 0)] = "NO_GATE"),
    (n[(n.NO_AGREEMENT = 1)] = "NO_AGREEMENT"),
    (n[(n.AGREED = 2)] = "AGREED"),
    n);
function E(A, e) {
    var t, n;
    let r = (0, l.e7)([g.default], () => g.default.getUser(A), [A]),
        a = (0, l.e7)([s.ZP], () => s.ZP.getMember(e, A), [e, A]),
        f = (0, l.e7)([o.Z], () => o.Z.getGuild(e), [e]);
    return (0, i.Dc)(f)
        ? null == r || null == a || null == f
            ? 1
            : (0, c.yE)(null != (t = a.flags) ? t : 0, v.q.BYPASSES_VERIFICATION) ||
                (0, c.yE)(null != (n = a.flags) ? n : 0, v.q.COMPLETED_ONBOARDING) ||
                (null != a.isPending && !a.isPending)
              ? 2
              : 1
        : 0;
}
function C(A, e) {
    var t;
    let n = (0, l.e7)([g.default], () => g.default.getUser(A), [A]),
        r = (0, l.e7)([s.ZP], () => s.ZP.getMember(e, A), [e, A]);
    if (null == n || null == r) return !1;
    let i = (0, c.yE)(null != (t = r.flags) ? t : 0, v.q.BYPASSES_VERIFICATION),
        a = (null == n ? void 0 : n.isPhoneVerified()) || (null == n ? void 0 : n.isStaff()),
        o = (null == r ? void 0 : r.joinedAt) != null;
    return n.verified || a || o || i;
}
function B(A) {
    let e = (0, l.e7)([a.default], () => a.default.locale);
    return r.useMemo(() => new Date(f.default.extractTimestamp(A)).toLocaleDateString(e, u), [A, e]);
}
function w(A) {
    let e = (0, l.e7)([a.default], () => a.default.locale);
    return r.useMemo(() => new Date(f.default.extractTimestamp(A)).toLocaleDateString(e, h), [A, e]);
}
function D(A, e) {
    let t = (0, l.e7)([a.default], () => a.default.locale),
        n = (0, l.e7)([s.ZP], () => s.ZP.getMember(e, A), [e, A]),
        i = null == n ? void 0 : n.joinedAt;
    return r.useMemo(() => (null == i ? "" : new Date(i).toLocaleDateString(t, u)), [i, t]);
}
