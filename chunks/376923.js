n.d(t, {
    LD: () => g,
    LJ: () => N,
    mV: () => m,
    mh: () => f,
    qc: () => I,
    wi: () => h,
}),
    n(997841),
    n(388685);
var r,
    l = n(473749),
    i = n(95015),
    a = n(399606),
    s = n(983736),
    o = n(706454),
    u = n(271383),
    c = n(430824),
    E = n(594174),
    d = n(709054);
n(893966), n(527379);
var _ = n(372897);
let A = {
        month: "short",
        day: "numeric",
        year: "numeric",
    },
    T = {
        month: "numeric",
        day: "numeric",
        year: "numeric",
    };
var I =
    (((r = {})[(r.NO_GATE = 0)] = "NO_GATE"),
    (r[(r.NO_AGREEMENT = 1)] = "NO_AGREEMENT"),
    (r[(r.AGREED = 2)] = "AGREED"),
    r);
function m(e, t) {
    var n, r;
    let l = (0, a.e7)([E.default], () => E.default.getUser(e), [e]),
        o = (0, a.e7)([u.ZP], () => u.ZP.getMember(t, e), [t, e]),
        d = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]);
    return (0, s.Dc)(d)
        ? null == l || null == o || null == d
            ? 1
            : (0, i.yE)(null != (n = o.flags) ? n : 0, _.q.BYPASSES_VERIFICATION) ||
                (0, i.yE)(null != (r = o.flags) ? r : 0, _.q.COMPLETED_ONBOARDING) ||
                (null != o.isPending && !o.isPending)
              ? 2
              : 1
        : 0;
}
function f(e, t) {
    var n;
    let r = (0, a.e7)([E.default], () => E.default.getUser(e), [e]),
        l = (0, a.e7)([u.ZP], () => u.ZP.getMember(t, e), [t, e]);
    if (null == r || null == l) return !1;
    let s = (0, i.yE)(null != (n = l.flags) ? n : 0, _.q.BYPASSES_VERIFICATION),
        o = (null == r ? void 0 : r.isPhoneVerified()) || (null == r ? void 0 : r.isStaff()),
        c = (null == l ? void 0 : l.joinedAt) != null;
    return r.verified || o || c || s;
}
function g(e) {
    let t = (0, a.e7)([o.default], () => o.default.locale);
    return l.useMemo(() => new Date(d.default.extractTimestamp(e)).toLocaleDateString(t, A), [e, t]);
}
function N(e) {
    let t = (0, a.e7)([o.default], () => o.default.locale);
    return l.useMemo(() => new Date(d.default.extractTimestamp(e)).toLocaleDateString(t, T), [e, t]);
}
function h(e, t) {
    let n = (0, a.e7)([o.default], () => o.default.locale),
        r = (0, a.e7)([u.ZP], () => u.ZP.getMember(t, e), [t, e]),
        i = null == r ? void 0 : r.joinedAt;
    return l.useMemo(() => (null == i ? "" : new Date(i).toLocaleDateString(n, A)), [i, n]);
}
