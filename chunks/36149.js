n.d(t, {
    $8: () => v,
    NI: () => y,
    Q9: () => k,
    ST: () => H,
    Sr: () => V,
    Wv: () => U,
    Y2: () => M,
    YU: () => w,
    b8: () => F,
    cc: () => G,
    dZ: () => B,
    i2: () => R,
    lU: () => C,
    lW: () => x,
    mK: () => j,
    p9: () => O,
    uE: () => b,
    uN: () => P,
    yM: () => D,
});
var i,
    r,
    a = n(582128),
    s = n(687123),
    l = n(17928),
    o = n(155718),
    d = n(475743),
    c = n(138054);
n(923495);
var u = n(207560),
    _ = n(280450),
    E = n(232835),
    A = n(287809),
    h = n(306537);
n(787301);
var f = n(757319);
n(96358);
var I = n(40449),
    p = n(652215),
    T = n(204925),
    m = n(799719),
    g = n(660183);
let S = new Set([h.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, h.q1.START_STAGE_PROMPT, h.q1.STAGE_CHANNEL_RAISE_HAND]),
    N = new Set([
        T.w_.NSFW_SERVER,
        T.w_.NSFW_SERVER_INVITE,
        T.w_.NSFW_SERVER_INVITE_EMBED,
        T.w_.LARGE_GUILD,
        T.w_.JOIN_LARGE_GUILD_UNDERAGE,
        T.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]);
function C(e) {
    return N.has(e);
}
function O() {
    return !v();
}
function R() {
    return !b();
}
function L(e) {
    return e === o.Tk.VERIFIED_TEEN || e === o.Tk.INFERRED_TEEN;
}
function y() {
    return L(A.default.getCurrentUser()?.ageVerificationStatus);
}
function D() {
    return (0, l.bG)([A.default], () => L(A.default.getCurrentUser()?.ageVerificationStatus));
}
function v() {
    let e = A.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return t === o.Tk.VERIFIED_ADULT || t === o.Tk.INFERRED_ADULT;
}
function b() {
    let e = (0, l.bG)([A.default], () => A.default.getCurrentUser());
    return e?.ageVerificationStatus === o.Tk.VERIFIED_ADULT || e?.ageVerificationStatus === o.Tk.INFERRED_ADULT;
}
function M() {
    let e = (0, l.bG)([A.default], () => {
        var e;
        return (
            (e = A.default.getCurrentUser()?.ageVerificationStatus) === o.Tk.INFERRED_ADULT || e === o.Tk.INFERRED_TEEN
        );
    });
    return (0, u.aX)(s.t.REACTIVE_CHECK) && e;
}
var P = (((i = {}).CTAS = "ctas"), (i.CONTENT_TYPE = "content_type"), i),
    U =
        (((r = {}).VERIFIED_ADULT = "verified_adult"),
        (r.VERIFIED_TEEN = "verified_teen"),
        (r.ERROR = "error"),
        (r.FAE_FAILED = "fae_failed"),
        (r.ID_FAILED = "id_failed"),
        (r.UNDERAGE = "underage"),
        (r.MANUAL_REVIEW_SUBMITTED = "manual_review_submitted"),
        r);
function w(e, t) {
    let n = E.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== p.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return i?.rawValue.split(",").includes("retry");
}
function G(e, t) {
    let n = E.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== p.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return (
        i?.rawValue.split(",").includes("request_manual_review") === !0 &&
        (0, f._)("isAgeVerificationMessageWithManualReviewCta")
    );
}
function x(e, t) {
    if (null == c.A.getPendingConnection()) return !1;
    let n = E.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== p.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return i?.rawValue.split(",").includes("connect_to_teen") === !0;
}
function k() {
    let e = A.default.getCurrentUser();
    return e?.ageVerificationStatus !== o.Tk.UNVERIFIED && e?.ageVerificationStatus !== o.Tk.CLIENT_ONLY_PENDING;
}
function F() {
    let e = (0, l.bG)([A.default], () => A.default.getCurrentUser());
    return e?.ageVerificationStatus !== o.Tk.UNVERIFIED && e?.ageVerificationStatus !== o.Tk.CLIENT_ONLY_PENDING;
}
function B(e) {
    let t = (0, l.bG)([A.default], () => A.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, d.Ay)(t),
        i = (0, l.bG)([_.default], () => null != _.default.getSuspendedUserToken()),
        r = (0, l.bG)([_.default], () => _.default.isAuthenticated()),
        s = null != n && null != t && n !== t,
        o = !i && !r;
    a.useEffect(() => {
        (s || o) && e();
    }, [e, s, o]);
}
function V(e) {
    return null != e && I.zn.has(e);
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return S.has(e) ? g.intl.string(g.t.lSWVTM) : t ? g.intl.string(m.default["/kgWIg"]) : g.intl.string(g.t.xYXsr6);
}
function j(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    return S.has(e)
        ? g.intl.string(g.t["S/xS/w"])
        : n
          ? g.intl.string(m.default.h7qzoa)
          : r && null != t && null != i
            ? g.intl.format(m.default["+Ft5ch"], { handleOnHelpUrlHook: t, handleOnTrustedProvidersHook: i })
            : r && null != t
              ? g.intl.format(m.default["22HSSI"], { handleOnHelpUrlHook: t })
              : null != t
                ? g.intl.format(m.default.RpMIT0, { handleOnHelpUrlHook: t })
                : g.intl.string(g.t.HxS3oQ);
}
