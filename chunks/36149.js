"use strict";
n.d(t, {
    $8: () => k,
    I7: () => X,
    NI: () => M,
    Q9: () => j,
    ST: () => $,
    Sr: () => z,
    Wv: () => B,
    Y2: () => F,
    YU: () => H,
    b8: () => Y,
    dZ: () => K,
    i2: () => x,
    lU: () => L,
    mK: () => q,
    nn: () => W,
    p9: () => w,
    uE: () => U,
    uN: () => V,
    yM: () => P,
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
    let e = m.default.getCurrentUser();
    return e?.ageVerificationStatus !== o.Tk.VERIFIED_ADULT;
}
function x() {
    let e = (0, s.bG)([m.default], () => m.default.getCurrentUser());
    return e?.ageVerificationStatus !== o.Tk.VERIFIED_ADULT;
}
function M() {
    let e = m.default.getCurrentUser();
    return e?.ageVerificationStatus === o.Tk.VERIFIED_TEEN;
}
function P() {
    let e = (0, s.bG)([m.default], () => m.default.getCurrentUser());
    return e?.ageVerificationStatus === o.Tk.VERIFIED_TEEN;
}
function k() {
    let e = m.default.getCurrentUser();
    return e?.ageVerificationStatus === o.Tk.VERIFIED_ADULT;
}
function U() {
    let e = (0, s.bG)([m.default], () => m.default.getCurrentUser());
    return e?.ageVerificationStatus === o.Tk.VERIFIED_ADULT;
}
function G() {
    return (0, s.bG)([m.default], () => m.default.getCurrentUser()?.ageVerificationStatus === o.Tk.INFERRED_ADULT);
}
function F() {
    let e = G();
    return (0, c.aX)(i.t.REACTIVE_CHECK) && e;
}
var V = (function (e) {
        return (e.CTAS = "ctas"), (e.CONTENT_TYPE = "content_type"), e;
    })({}),
    B = (function (e) {
        return (e.VERIFIED_ADULT = "verified_adult"), (e.VERIFIED_TEEN = "verified_teen"), (e.ERROR = "error"), e;
    })({});
function H(e, t) {
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
function j() {
    let e = m.default.getCurrentUser();
    return e?.ageVerificationStatus !== o.Tk.UNVERIFIED && e?.ageVerificationStatus !== o.Tk.CLIENT_ONLY_PENDING;
}
function Y() {
    let e = (0, s.bG)([m.default], () => m.default.getCurrentUser());
    return e?.ageVerificationStatus !== o.Tk.UNVERIFIED && e?.ageVerificationStatus !== o.Tk.CLIENT_ONLY_PENDING;
}
function W(e) {
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
function K(e) {
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
function z(e) {
    return null != e && y.zn.has(e);
}
function $(e) {
    return O.has(e) ? R.intl.string(R.t.lSWVTM) : (0, A.H)(R.intl.string(R.t.JHNunj), R.intl.string(R.t.xYXsr6));
}
function q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return O.has(e)
        ? R.intl.string(R.t["S/xS/w"])
        : n
          ? (0, A.H)(R.intl.string(b.default["1/6wta"]), R.intl.string(b.default.h7qzoa))
          : null != t
            ? R.intl.format(b.default.RpMIT0, { handleOnHelpUrlHook: t })
            : (0, A.H)(R.intl.string(R.t["+BLIGh"]), R.intl.string(R.t.HxS3oQ));
}
function Z() {
    let e = Y();
    return (0, s.bG)(
        [I.A, u.A],
        () => !e && u.A.isFeatureAgeGated(i.t.REACTIVE_CHECK) && I.A.shouldCallReactiveCheck(),
        [e],
    );
}
function X(e) {
    let t = Z();
    r.useEffect(() => {
        t && N.Qx.has(e) && (0, S.z)();
    }, [t, e]);
}
