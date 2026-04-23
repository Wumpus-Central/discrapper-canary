"use strict";
n.d(t, {
    $8: () => F,
    I7: () => Z,
    NI: () => U,
    Q9: () => W,
    ST: () => X,
    Sr: () => q,
    Wv: () => j,
    Y2: () => B,
    YU: () => Y,
    b8: () => K,
    dZ: () => z,
    i2: () => k,
    lU: () => w,
    mK: () => Q,
    nn: () => $,
    p9: () => x,
    tC: () => J,
    uE: () => V,
    uN: () => H,
    yM: () => G,
});
var r,
    i,
    s = n(64700),
    a = n(687123),
    o = n(311907),
    l = n(73153),
    u = n(155718),
    c = n(475743),
    d = n(81428),
    _ = n(207560),
    f = n(662502),
    p = n(393033),
    h = n(105428),
    E = n(961350),
    m = n(320501),
    g = n(287809),
    A = n(935649),
    I = n(847599),
    T = n(787301),
    S = n(295972),
    y = n(96358),
    N = n(40449),
    v = n(652215),
    C = n(204925),
    O = n(835002),
    R = n(516761),
    b = n(985018);
let D = new Set([I.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, I.q1.START_STAGE_PROMPT, I.q1.STAGE_CHANNEL_RAISE_HAND]),
    L = new Set([
        C.w_.NSFW_SERVER,
        C.w_.NSFW_SERVER_INVITE,
        C.w_.NSFW_SERVER_INVITE_EMBED,
        C.w_.LARGE_GUILD,
        C.w_.JOIN_LARGE_GUILD_UNDERAGE,
        C.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]),
    w = (e) => L.has(e);
function M() {
    return d.A.isFeatureAgeGated(a.t.REACTIVE_CHECK);
}
function P() {
    return (0, _.aX)(a.t.REACTIVE_CHECK);
}
function x() {
    let e = g.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return !(t === u.Tk.VERIFIED_ADULT || (M() && t === u.Tk.INFERRED_ADULT));
}
function k() {
    let e = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        t = P() && e?.ageVerificationStatus === u.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus !== u.Tk.VERIFIED_ADULT && !t;
}
function U() {
    let e = g.default.getCurrentUser();
    return e?.ageVerificationStatus === u.Tk.VERIFIED_TEEN;
}
function G() {
    let e = (0, o.bG)([g.default], () => g.default.getCurrentUser());
    return e?.ageVerificationStatus === u.Tk.VERIFIED_TEEN;
}
function F() {
    let e = g.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return t === u.Tk.VERIFIED_ADULT || (M() && t === u.Tk.INFERRED_ADULT);
}
function V() {
    let e = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        t = P() && e?.ageVerificationStatus === u.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus === u.Tk.VERIFIED_ADULT || t;
}
function B() {
    let e = (0, o.bG)([g.default], () => g.default.getCurrentUser()?.ageVerificationStatus === u.Tk.INFERRED_ADULT);
    return (0, _.aX)(a.t.REACTIVE_CHECK) && e;
}
var H = (((r = {}).CTAS = "ctas"), (r.CONTENT_TYPE = "content_type"), r),
    j = (((i = {}).VERIFIED_ADULT = "verified_adult"), (i.VERIFIED_TEEN = "verified_teen"), (i.ERROR = "error"), i);
function Y(e, t) {
    let n = m.A.getMessage(e, t);
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
    let e = g.default.getCurrentUser();
    return e?.ageVerificationStatus !== u.Tk.UNVERIFIED && e?.ageVerificationStatus !== u.Tk.CLIENT_ONLY_PENDING;
}
function K() {
    let e = (0, o.bG)([g.default], () => g.default.getCurrentUser());
    return e?.ageVerificationStatus !== u.Tk.UNVERIFIED && e?.ageVerificationStatus !== u.Tk.CLIENT_ONLY_PENDING;
}
function $(e) {
    let {
            onComplete: t,
            entryPoint: n,
            isRetry: r = !1,
            visibleContent: i = null,
            shouldShowExpressiveModal: a = !1,
            classificationId: u = null,
        } = e,
        [c, d] = s.useState(!1),
        _ = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        { current: E } = s.useRef(_?.ageVerificationStatus),
        m = (0, p.W$)(),
        I = s.useCallback(() => {
            l.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: E }),
                r ||
                    m ||
                    h.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_intro_screen",
                        visibleContent: i,
                    });
        }, [E, r, i, m]),
        T = s.useCallback(
            async (e) => {
                d(!0);
                try {
                    l.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let r = await (0, S.uf)({ method: e, classificationId: u ?? void 0 });
                    A.A.showAgeVerification({
                        webviewUrl: r.verification_webview_url,
                        verificationRequestId: r.verification_request_id,
                        verificationVendorName: r.verification_vendor_name,
                        onComplete: t,
                        onClose: I,
                        onCancel: I,
                        entryPoint: n,
                        shouldShowExpressiveModal: a,
                    });
                } catch (e) {
                    f.A.showFailedToast(O.OB.TIGGER_PAWTECT_ERROR), I();
                } finally {
                    d(!1);
                }
            },
            [t, I, a, u, n],
        );
    return { loading: c, initiateAgeVerification: T };
}
function z(e) {
    let t = (0, o.bG)([g.default], () => g.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, c.A)(t),
        r = (0, o.bG)([E.default], () => null != E.default.getSuspendedUserToken()),
        i = (0, o.bG)([E.default], () => E.default.isAuthenticated()),
        a = null != n && null != t && n !== t,
        l = !r && !i;
    s.useEffect(() => {
        (a || l) && e();
    }, [e, a, l]);
}
function q(e) {
    return null != e && N.zn.has(e);
}
function X(e) {
    return D.has(e) ? b.intl.string(b.t.lSWVTM) : b.intl.string(b.t.xYXsr6);
}
function Q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return D.has(e)
        ? b.intl.string(b.t["S/xS/w"])
        : n
          ? b.intl.string(R.default.h7qzoa)
          : null != t
            ? b.intl.format(R.default.RpMIT0, { handleOnHelpUrlHook: t })
            : b.intl.string(b.t.HxS3oQ);
}
function Z(e) {
    let t,
        n,
        r =
            ((t = K()),
            (n = (0, _.aX)(a.t.REACTIVE_CHECK)),
            (0, o.bG)([T.A], () => !t && n && T.A.shouldCallReactiveCheck(), [t, n]));
    s.useEffect(() => {
        r && C.Qx.has(e) && (0, y.z)();
    }, [r, e]);
}
async function J() {
    return !W() && M() && T.A.shouldCallReactiveCheck() ? await (0, y.z)() : null;
}
