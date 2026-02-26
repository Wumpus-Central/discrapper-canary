"use strict";
n.d(t, {
    $8: () => U,
    I7: () => Q,
    NI: () => P,
    Q9: () => Y,
    ST: () => q,
    Sr: () => $,
    Wv: () => H,
    Y2: () => V,
    YU: () => j,
    b8: () => W,
    dZ: () => z,
    i2: () => M,
    lU: () => D,
    mK: () => Z,
    nn: () => K,
    p9: () => x,
    tC: () => ee,
    uE: () => G,
    uN: () => B,
    yM: () => k,
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
    A = n(787301),
    I = n(295972),
    T = n(96358),
    S = n(40449),
    y = n(652215),
    v = n(204925),
    N = n(835002),
    C = n(949268),
    b = n(985018);
let R = new Set([g.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, g.q1.START_STAGE_PROMPT, g.q1.STAGE_CHANNEL_RAISE_HAND]),
    O = new Set([
        v.w_.NSFW_SERVER,
        v.w_.NSFW_SERVER_INVITE,
        v.w_.NSFW_SERVER_INVITE_EMBED,
        v.w_.LARGE_GUILD,
        v.w_.JOIN_LARGE_GUILD_UNDERAGE,
        v.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]),
    D = (e) => O.has(e);
function L() {
    return u.A.isFeatureAgeGated(i.t.REACTIVE_CHECK);
}
function w() {
    return (0, c.aX)(i.t.REACTIVE_CHECK);
}
function x() {
    let e = m.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return !(t === o.Tk.VERIFIED_ADULT || (L() && t === o.Tk.INFERRED_ADULT));
}
function M() {
    let e = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        t = w() && e?.ageVerificationStatus === o.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus !== o.Tk.VERIFIED_ADULT && !t;
}
function P() {
    let e = m.default.getCurrentUser();
    return e?.ageVerificationStatus === o.Tk.VERIFIED_TEEN;
}
function k() {
    let e = (0, s.bG)([m.default], () => m.default.getCurrentUser());
    return e?.ageVerificationStatus === o.Tk.VERIFIED_TEEN;
}
function U() {
    let e = m.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return t === o.Tk.VERIFIED_ADULT || (L() && t === o.Tk.INFERRED_ADULT);
}
function G() {
    let e = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        t = w() && e?.ageVerificationStatus === o.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus === o.Tk.VERIFIED_ADULT || t;
}
function F() {
    return (0, s.bG)([m.default], () => m.default.getCurrentUser()?.ageVerificationStatus === o.Tk.INFERRED_ADULT);
}
function V() {
    let e = F();
    return (0, c.aX)(i.t.REACTIVE_CHECK) && e;
}
var B = (function (e) {
        return (e.CTAS = "ctas"), (e.CONTENT_TYPE = "content_type"), e;
    })({}),
    H = (function (e) {
        return (e.VERIFIED_ADULT = "verified_adult"), (e.VERIFIED_TEEN = "verified_teen"), (e.ERROR = "error"), e;
    })({});
function j(e, t) {
    let n = h.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== y.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let r = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return r?.rawValue.split(",").includes("retry");
}
function Y() {
    let e = m.default.getCurrentUser();
    return e?.ageVerificationStatus !== o.Tk.UNVERIFIED && e?.ageVerificationStatus !== o.Tk.CLIENT_ONLY_PENDING;
}
function W() {
    let e = (0, s.bG)([m.default], () => m.default.getCurrentUser());
    return e?.ageVerificationStatus !== o.Tk.UNVERIFIED && e?.ageVerificationStatus !== o.Tk.CLIENT_ONLY_PENDING;
}
function K(e) {
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
        T = r.useCallback(() => {
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
                    let r = await (0, I.uf)({ method: e, classificationId: u ?? void 0 });
                    E.A.showAgeVerification({
                        webviewUrl: r.verification_webview_url,
                        verificationRequestId: r.verification_request_id,
                        verificationVendorName: r.verification_vendor_name,
                        onComplete: t,
                        onClose: T,
                        onCancel: T,
                        entryPoint: n,
                        shouldShowExpressiveModal: l,
                    });
                } catch (e) {
                    d.A.showFailedToast(N.OB.TIGGER_PAWTECT_ERROR), T();
                } finally {
                    p(!1);
                }
            },
            [t, T, l, u, n],
        );
    return { loading: c, initiateAgeVerification: S };
}
function z(e) {
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
function $(e) {
    return null != e && S.zn.has(e);
}
function q(e) {
    return R.has(e) ? b.intl.string(b.t.lSWVTM) : b.intl.string(b.t.xYXsr6);
}
function Z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return R.has(e)
        ? b.intl.string(b.t["S/xS/w"])
        : n
          ? b.intl.string(C.default.h7qzoa)
          : null != t
            ? b.intl.format(C.default.RpMIT0, { handleOnHelpUrlHook: t })
            : b.intl.string(b.t.HxS3oQ);
}
function X() {
    let e = W(),
        t = (0, c.aX)(i.t.REACTIVE_CHECK);
    return (0, s.bG)([A.A], () => !e && t && A.A.shouldCallReactiveCheck(), [e, t]);
}
function Q(e) {
    let t = X();
    r.useEffect(() => {
        t && v.Qx.has(e) && (0, T.z)();
    }, [t, e]);
}
function J() {
    return !Y() && L() && A.A.shouldCallReactiveCheck();
}
async function ee() {
    return J() ? await (0, T.z)() : null;
}
