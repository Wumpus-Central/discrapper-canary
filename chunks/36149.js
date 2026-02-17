"use strict";
n.d(t, {
    $8: () => k,
    I7: () => q,
    NI: () => P,
    Q9: () => B,
    ST: () => K,
    Sr: () => W,
    Wv: () => F,
    YU: () => V,
    b8: () => j,
    dZ: () => Y,
    i2: () => x,
    lU: () => L,
    mK: () => $,
    nn: () => H,
    p9: () => w,
    uE: () => U,
    uN: () => G,
    yM: () => M,
});
var r = n(64700),
    i = n(687123),
    a = n(311907),
    s = n(73153),
    o = n(155718),
    l = n(475743),
    u = n(81428);
n(207560);
var c = n(662502),
    d = n(393033),
    _ = n(105428),
    f = n(961350),
    h = n(320501),
    p = n(287809),
    g = n(935649),
    E = n(847599),
    A = n(870383),
    I = n(787301),
    T = n(295972),
    y = n(96358),
    S = n(40449),
    v = n(652215),
    C = n(204925),
    b = n(835002),
    N = n(536242),
    R = n(985018);
let O = new Set([E.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, E.q1.START_STAGE_PROMPT, E.q1.STAGE_CHANNEL_RAISE_HAND]),
    D = new Set([
        C.w_.NSFW_SERVER,
        C.w_.NSFW_SERVER_INVITE,
        C.w_.NSFW_SERVER_INVITE_EMBED,
        C.w_.LARGE_GUILD,
        C.w_.JOIN_LARGE_GUILD_UNDERAGE,
        C.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]),
    L = (e) => D.has(e);
function w() {
    let e = p.default.getCurrentUser();
    return e?.ageVerificationStatus !== o.Tk.VERIFIED_ADULT;
}
function x() {
    let e = (0, a.bG)([p.default], () => p.default.getCurrentUser());
    return e?.ageVerificationStatus !== o.Tk.VERIFIED_ADULT;
}
function P() {
    let e = p.default.getCurrentUser();
    return e?.ageVerificationStatus === o.Tk.VERIFIED_TEEN;
}
function M() {
    let e = (0, a.bG)([p.default], () => p.default.getCurrentUser());
    return e?.ageVerificationStatus === o.Tk.VERIFIED_TEEN;
}
function k() {
    let e = p.default.getCurrentUser();
    return e?.ageVerificationStatus === o.Tk.VERIFIED_ADULT;
}
function U() {
    let e = (0, a.bG)([p.default], () => p.default.getCurrentUser());
    return e?.ageVerificationStatus === o.Tk.VERIFIED_ADULT;
}
var G = (function (e) {
        return (e.CTAS = "ctas"), (e.CONTENT_TYPE = "content_type"), e;
    })({}),
    F = (function (e) {
        return (e.VERIFIED_ADULT = "verified_adult"), (e.VERIFIED_TEEN = "verified_teen"), (e.ERROR = "error"), e;
    })({});
function V(e, t) {
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
function B() {
    let e = p.default.getCurrentUser();
    return e?.ageVerificationStatus !== o.Tk.UNVERIFIED && e?.ageVerificationStatus !== o.Tk.CLIENT_ONLY_PENDING;
}
function j() {
    let e = (0, a.bG)([p.default], () => p.default.getCurrentUser());
    return e?.ageVerificationStatus !== o.Tk.UNVERIFIED && e?.ageVerificationStatus !== o.Tk.CLIENT_ONLY_PENDING;
}
function H(e) {
    let {
            onComplete: t,
            entryPoint: n,
            isRetry: i = !1,
            visibleContent: o = null,
            shouldShowExpressiveModal: l = !1,
            classificationId: u = null,
        } = e,
        [f, h] = r.useState(!1),
        E = (0, a.bG)([p.default], () => p.default.getCurrentUser()),
        { current: A } = r.useRef(E?.ageVerificationStatus),
        I = (0, d.W$)(),
        y = r.useCallback(() => {
            s.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: A }),
                i ||
                    I ||
                    _.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_intro_screen",
                        visibleContent: o,
                    });
        }, [A, i, o, I]),
        S = r.useCallback(
            async (e) => {
                h(!0);
                try {
                    s.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let r = await (0, T.uf)({ method: e, classificationId: u ?? void 0 });
                    g.A.showAgeVerification({
                        webviewUrl: r.verification_webview_url,
                        verificationRequestId: r.verification_request_id,
                        verificationVendorName: r.verification_vendor_name,
                        onComplete: t,
                        onClose: y,
                        onCancel: y,
                        entryPoint: n,
                        shouldShowExpressiveModal: l,
                    });
                } catch (e) {
                    c.A.showFailedToast(b.OB.TIGGER_PAWTECT_ERROR), y();
                } finally {
                    h(!1);
                }
            },
            [t, y, l, u, n],
        );
    return { loading: f, initiateAgeVerification: S };
}
function Y(e) {
    let t = (0, a.bG)([p.default], () => p.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, l.A)(t),
        i = (0, a.bG)([f.default], () => null != f.default.getSuspendedUserToken()),
        s = (0, a.bG)([f.default], () => f.default.isAuthenticated()),
        o = null != n && null != t && n !== t,
        u = !i && !s;
    r.useEffect(() => {
        (o || u) && e();
    }, [e, o, u]);
}
function W(e) {
    return null != e && S.zn.has(e);
}
function K(e) {
    return O.has(e) ? R.intl.string(R.t.lSWVTM) : (0, A.H)(R.intl.string(R.t.JHNunj), R.intl.string(R.t.xYXsr6));
}
function $(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return O.has(e)
        ? R.intl.string(R.t["S/xS/w"])
        : n
          ? (0, A.H)(R.intl.string(N.default["1/6wta"]), R.intl.string(N.default.h7qzoa))
          : null != t
            ? R.intl.format(N.default.RpMIT0, { handleOnHelpUrlHook: t })
            : (0, A.H)(R.intl.string(R.t["+BLIGh"]), R.intl.string(R.t.HxS3oQ));
}
function z() {
    let e = j();
    return (0, a.bG)(
        [I.A, u.A],
        () => !e && u.A.isFeatureAgeGated(i.t.REACTIVE_CHECK) && I.A.shouldCallReactiveCheck(),
        [e],
    );
}
function q(e) {
    let t = z();
    r.useEffect(() => {
        t && C.Qx.has(e) && (0, y.z)();
    }, [t, e]);
}
