"use strict";
n.d(t, {
    $8: () => w,
    NI: () => D,
    Q9: () => U,
    ST: () => j,
    Sr: () => B,
    Wv: () => M,
    YU: () => k,
    b8: () => G,
    dZ: () => V,
    i2: () => O,
    lU: () => N,
    mK: () => H,
    nn: () => F,
    p9: () => R,
    uE: () => x,
    uN: () => P,
    yM: () => L,
});
var r = n(64700);
n(687123);
var i = n(311907),
    a = n(73153),
    s = n(155718),
    o = n(475743);
n(81428), n(207560);
var l = n(662502),
    u = n(393033),
    c = n(105428),
    d = n(961350),
    _ = n(320501),
    f = n(287809),
    h = n(935649),
    p = n(847599),
    g = n(870383);
n(787301);
var E = n(295972),
    A = n(40449),
    I = n(652215),
    T = n(204925),
    y = n(835002),
    S = n(536242),
    v = n(985018);
let C = new Set([p.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, p.q1.START_STAGE_PROMPT, p.q1.STAGE_CHANNEL_RAISE_HAND]),
    b = new Set([
        T.w_.NSFW_SERVER,
        T.w_.NSFW_SERVER_INVITE,
        T.w_.NSFW_SERVER_INVITE_EMBED,
        T.w_.LARGE_GUILD,
        T.w_.JOIN_LARGE_GUILD_UNDERAGE,
        T.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]),
    N = (e) => b.has(e);
function R() {
    let e = f.default.getCurrentUser();
    return e?.ageVerificationStatus !== s.Tk.VERIFIED_ADULT;
}
function O() {
    let e = (0, i.bG)([f.default], () => f.default.getCurrentUser());
    return e?.ageVerificationStatus !== s.Tk.VERIFIED_ADULT;
}
function D() {
    let e = f.default.getCurrentUser();
    return e?.ageVerificationStatus === s.Tk.VERIFIED_TEEN;
}
function L() {
    let e = (0, i.bG)([f.default], () => f.default.getCurrentUser());
    return e?.ageVerificationStatus === s.Tk.VERIFIED_TEEN;
}
function w() {
    let e = f.default.getCurrentUser();
    return e?.ageVerificationStatus === s.Tk.VERIFIED_ADULT;
}
function x() {
    let e = (0, i.bG)([f.default], () => f.default.getCurrentUser());
    return e?.ageVerificationStatus === s.Tk.VERIFIED_ADULT;
}
var P = (function (e) {
        return (e.CTAS = "ctas"), (e.CONTENT_TYPE = "content_type"), e;
    })({}),
    M = (function (e) {
        return (e.VERIFIED_ADULT = "verified_adult"), (e.VERIFIED_TEEN = "verified_teen"), (e.ERROR = "error"), e;
    })({});
function k(e, t) {
    let n = _.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== I.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let r = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return r?.rawValue.split(",").includes("retry");
}
function U() {
    let e = f.default.getCurrentUser();
    return e?.ageVerificationStatus !== s.Tk.UNVERIFIED && e?.ageVerificationStatus !== s.Tk.CLIENT_ONLY_PENDING;
}
function G() {
    let e = (0, i.bG)([f.default], () => f.default.getCurrentUser());
    return e?.ageVerificationStatus !== s.Tk.UNVERIFIED && e?.ageVerificationStatus !== s.Tk.CLIENT_ONLY_PENDING;
}
function F(e) {
    let {
            onComplete: t,
            entryPoint: n,
            isRetry: s = !1,
            visibleContent: o = null,
            shouldShowExpressiveModal: d = !1,
            classificationId: _ = null,
        } = e,
        [p, g] = r.useState(!1),
        A = (0, i.bG)([f.default], () => f.default.getCurrentUser()),
        { current: I } = r.useRef(A?.ageVerificationStatus),
        T = (0, u.W$)(),
        S = r.useCallback(() => {
            a.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: I }),
                s ||
                    T ||
                    c.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_intro_screen",
                        visibleContent: o,
                    });
        }, [I, s, o, T]),
        v = r.useCallback(
            async (e) => {
                g(!0);
                try {
                    a.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let r = await (0, E.uf)({ method: e, classificationId: _ ?? void 0 });
                    h.A.showAgeVerification({
                        webviewUrl: r.verification_webview_url,
                        verificationRequestId: r.verification_request_id,
                        verificationVendorName: r.verification_vendor_name,
                        onComplete: t,
                        onClose: S,
                        onCancel: S,
                        entryPoint: n,
                        shouldShowExpressiveModal: d,
                    });
                } catch (e) {
                    l.A.showFailedToast(y.OB.TIGGER_PAWTECT_ERROR), S();
                } finally {
                    g(!1);
                }
            },
            [t, S, d, _, n],
        );
    return { loading: p, initiateAgeVerification: v };
}
function V(e) {
    let t = (0, i.bG)([f.default], () => f.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, o.A)(t),
        a = (0, i.bG)([d.default], () => null != d.default.getSuspendedUserToken()),
        s = (0, i.bG)([d.default], () => d.default.isAuthenticated()),
        l = null != n && null != t && n !== t,
        u = !a && !s;
    r.useEffect(() => {
        (l || u) && e();
    }, [e, l, u]);
}
function B(e) {
    return null != e && A.zn.has(e);
}
function j(e) {
    return C.has(e) ? v.intl.string(v.t.lSWVTM) : (0, g.H)(v.intl.string(v.t.JHNunj), v.intl.string(v.t.xYXsr6));
}
function H(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return C.has(e)
        ? v.intl.string(v.t["S/xS/w"])
        : n
          ? (0, g.H)(v.intl.string(S.default["1/6wta"]), v.intl.string(S.default.h7qzoa))
          : null != t
            ? v.intl.format(S.default.RpMIT0, { handleOnHelpUrlHook: t })
            : (0, g.H)(v.intl.string(v.t["+BLIGh"]), v.intl.string(v.t.HxS3oQ));
}
