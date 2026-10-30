n.d(t, {
    $8: () => O,
    Lb: () => C,
    NI: () => S,
    Q9: () => y,
    ST: () => P,
    Sr: () => b,
    Y2: () => L,
    b8: () => D,
    dZ: () => v,
    i2: () => m,
    lU: () => p,
    mK: () => M,
    p9: () => T,
    uE: () => R,
    yM: () => N,
});
var i = n(582128),
    r = n(687123),
    a = n(17928),
    s = n(155718),
    l = n(475743);
n(923495);
var o = n(207560),
    d = n(280450),
    c = n(287809),
    u = n(306537);
(n(787301), n(96358));
var _ = n(40449),
    E = n(204925),
    A = n(418528),
    h = n(105292);
let f = new Set([u.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, u.q1.START_STAGE_PROMPT, u.q1.STAGE_CHANNEL_RAISE_HAND]),
    I = new Set([
        E.w_.NSFW_SERVER,
        E.w_.NSFW_SERVER_INVITE,
        E.w_.NSFW_SERVER_INVITE_EMBED,
        E.w_.LARGE_GUILD,
        E.w_.JOIN_LARGE_GUILD_UNDERAGE,
        E.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]);
function p(e) {
    return I.has(e);
}
function T() {
    return !O();
}
function m() {
    return !R();
}
function g(e) {
    return e === s.Tk.VERIFIED_TEEN || e === s.Tk.INFERRED_TEEN;
}
function S() {
    return g(c.default.getCurrentUser()?.ageVerificationStatus);
}
function N() {
    return (0, a.bG)([c.default], () => g(c.default.getCurrentUser()?.ageVerificationStatus));
}
function C(e) {
    return e === s.Tk.VERIFIED_ADULT || e === s.Tk.INFERRED_ADULT;
}
function O() {
    return C(c.default.getCurrentUser()?.ageVerificationStatus);
}
function R() {
    let e = (0, a.bG)([c.default], () => c.default.getCurrentUser());
    return C(e?.ageVerificationStatus);
}
function L() {
    let e = (0, a.bG)([c.default], () => {
        var e;
        return (
            (e = c.default.getCurrentUser()?.ageVerificationStatus) === s.Tk.INFERRED_ADULT || e === s.Tk.INFERRED_TEEN
        );
    });
    return (0, o.aX)(r.t.REACTIVE_CHECK) && e;
}
function y() {
    let e = c.default.getCurrentUser();
    return e?.ageVerificationStatus !== s.Tk.UNVERIFIED && e?.ageVerificationStatus !== s.Tk.CLIENT_ONLY_PENDING;
}
function D() {
    let e = (0, a.bG)([c.default], () => c.default.getCurrentUser());
    return e?.ageVerificationStatus !== s.Tk.UNVERIFIED && e?.ageVerificationStatus !== s.Tk.CLIENT_ONLY_PENDING;
}
function v(e) {
    let t = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, l.Ay)(t),
        r = (0, a.bG)([d.default], () => null != d.default.getSuspendedUserToken()),
        s = (0, a.bG)([d.default], () => d.default.isAuthenticated()),
        o = null != n && null != t && n !== t,
        u = !r && !s;
    i.useEffect(() => {
        (o || u) && e();
    }, [e, o, u]);
}
function b(e) {
    return null != e && _.zn.has(e);
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return f.has(e) ? h.intl.string(h.t.lSWVTM) : t ? h.intl.string(A.default["/kgWIg"]) : h.intl.string(h.t.xYXsr6);
}
function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    return f.has(e)
        ? h.intl.string(h.t["S/xS/w"])
        : n
          ? h.intl.string(A.default.h7qzoa)
          : r && null != t && null != i
            ? h.intl.format(A.default["+Ft5ch"], { handleOnHelpUrlHook: t, handleOnTrustedProvidersHook: i })
            : r && null != t
              ? h.intl.format(A.default["22HSSI"], { handleOnHelpUrlHook: t })
              : null != t
                ? h.intl.format(A.default.RpMIT0, { handleOnHelpUrlHook: t })
                : h.intl.string(h.t.HxS3oQ);
}
