"use strict";
n.d(t, {
    $8: () => G,
    I7: () => J,
    NI: () => k,
    Q9: () => W,
    ST: () => Z,
    Sr: () => q,
    Wv: () => j,
    Y2: () => B,
    YU: () => Y,
    b8: () => K,
    dZ: () => $,
    i2: () => P,
    lU: () => L,
    mK: () => X,
    nn: () => z,
    p9: () => M,
    tC: () => et,
    uE: () => F,
    uN: () => H,
    yM: () => U,
});
var r = n(64700),
    i = n(687123),
    s = n(311907),
    a = n(73153),
    o = n(155718),
    l = n(475743),
    u = n(81428),
    c = n(207560),
    d = n(662502),
    _ = n(393033),
    f = n(105428),
    p = n(961350),
    h = n(320501),
    m = n(287809),
    E = n(935649),
    g = n(847599),
    A = n(870383),
    I = n(787301),
    T = n(295972),
    S = n(96358),
    y = n(40449),
    v = n(652215),
    N = n(204925),
    C = n(835002),
    b = n(536242),
    R = n(985018);
let O = new Set([g.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, g.q1.START_STAGE_PROMPT, g.q1.STAGE_CHANNEL_RAISE_HAND]),
    D = new Set([
        N.w_.NSFW_SERVER,
        N.w_.NSFW_SERVER_INVITE,
        N.w_.NSFW_SERVER_INVITE_EMBED,
        N.w_.LARGE_GUILD,
        N.w_.JOIN_LARGE_GUILD_UNDERAGE,
        N.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]),
    L = (e) => D.has(e);
function w() {
    return u.A.isFeatureAgeGated(i.t.REACTIVE_CHECK);
}
function x() {
    return (0, c.aX)(i.t.REACTIVE_CHECK);
}
function M() {
    let e = m.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return !(t === o.Tk.VERIFIED_ADULT || (w() && t === o.Tk.INFERRED_ADULT));
}
function P() {
    let e = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        t = x() && e?.ageVerificationStatus === o.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus !== o.Tk.VERIFIED_ADULT && !t;
}
function k() {
    let e = m.default.getCurrentUser();
    return e?.ageVerificationStatus === o.Tk.VERIFIED_TEEN;
}
function U() {
    let e = (0, s.bG)([m.default], () => m.default.getCurrentUser());
    return e?.ageVerificationStatus === o.Tk.VERIFIED_TEEN;
}
function G() {
    let e = m.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return t === o.Tk.VERIFIED_ADULT || (w() && t === o.Tk.INFERRED_ADULT);
}
function F() {
    let e = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        t = x() && e?.ageVerificationStatus === o.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus === o.Tk.VERIFIED_ADULT || t;
}
function V() {
    return (0, s.bG)([m.default], () => m.default.getCurrentUser()?.ageVerificationStatus === o.Tk.INFERRED_ADULT);
}
function B() {
    let e = V();
    return (0, c.aX)(i.t.REACTIVE_CHECK) && e;
}
var H = (function (e) {
        return (e.CTAS = "ctas"), (e.CONTENT_TYPE = "content_type"), e;
    })({}),
    j = (function (e) {
        return (e.VERIFIED_ADULT = "verified_adult"), (e.VERIFIED_TEEN = "verified_teen"), (e.ERROR = "error"), e;
    })({});
function Y(e, t) {
    let n = h.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== v.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let r = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return r?.rawValue.split(",").includes("retry");
}
function W() {
    let e = m.default.getCurrentUser();
    return e?.ageVerificationStatus !== o.Tk.UNVERIFIED && e?.ageVerificationStatus !== o.Tk.CLIENT_ONLY_PENDING;
}
function K() {
    let e = (0, s.bG)([m.default], () => m.default.getCurrentUser());
    return e?.ageVerificationStatus !== o.Tk.UNVERIFIED && e?.ageVerificationStatus !== o.Tk.CLIENT_ONLY_PENDING;
}
function z(e) {
    let {
            onComplete: t,
            entryPoint: n,
            isRetry: i = !1,
            visibleContent: o = null,
            shouldShowExpressiveModal: l = !1,
            classificationId: u = null,
        } = e,
        [c, p] = r.useState(!1),
        h = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        { current: g } = r.useRef(h?.ageVerificationStatus),
        A = (0, _.W$)(),
        I = r.useCallback(() => {
            a.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: g }),
                i ||
                    A ||
                    f.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_intro_screen",
                        visibleContent: o,
                    });
        }, [g, i, o, A]),
        S = r.useCallback(
            async (e) => {
                p(!0);
                try {
                    a.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let r = await (0, T.uf)({ method: e, classificationId: u ?? void 0 });
                    E.A.showAgeVerification({
                        webviewUrl: r.verification_webview_url,
                        verificationRequestId: r.verification_request_id,
                        verificationVendorName: r.verification_vendor_name,
                        onComplete: t,
                        onClose: I,
                        onCancel: I,
                        entryPoint: n,
                        shouldShowExpressiveModal: l,
                    });
                } catch (e) {
                    d.A.showFailedToast(C.OB.TIGGER_PAWTECT_ERROR), I();
                } finally {
                    p(!1);
                }
            },
            [t, I, l, u, n],
        );
    return { loading: c, initiateAgeVerification: S };
}
function $(e) {
    let t = (0, s.bG)([m.default], () => m.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, l.A)(t),
        i = (0, s.bG)([p.default], () => null != p.default.getSuspendedUserToken()),
        a = (0, s.bG)([p.default], () => p.default.isAuthenticated()),
        o = null != n && null != t && n !== t,
        u = !i && !a;
    r.useEffect(() => {
        (o || u) && e();
    }, [e, o, u]);
}
function q(e) {
    return null != e && y.zn.has(e);
}
function Z(e) {
    return O.has(e) ? R.intl.string(R.t.lSWVTM) : (0, A.H)(R.intl.string(R.t.JHNunj), R.intl.string(R.t.xYXsr6));
}
function X(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return O.has(e)
        ? R.intl.string(R.t["S/xS/w"])
        : n
          ? (0, A.H)(R.intl.string(b.default["1/6wta"]), R.intl.string(b.default.h7qzoa))
          : null != t
            ? R.intl.format(b.default.RpMIT0, { handleOnHelpUrlHook: t })
            : (0, A.H)(R.intl.string(R.t["+BLIGh"]), R.intl.string(R.t.HxS3oQ));
}
function Q() {
    let e = K(),
        t = (0, c.aX)(i.t.REACTIVE_CHECK);
    return (0, s.bG)([I.A], () => !e && t && I.A.shouldCallReactiveCheck(), [e, t]);
}
function J(e) {
    let t = Q();
    r.useEffect(() => {
        t && N.Qx.has(e) && (0, S.z)();
    }, [t, e]);
}
function ee() {
    return !W() && w() && I.A.shouldCallReactiveCheck();
}
async function et() {
    return ee() ? await (0, S.z)() : null;
}
