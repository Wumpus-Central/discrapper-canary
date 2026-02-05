"use strict";
n.d(t, {
    $8: () => L,
    NI: () => O,
    Q9: () => k,
    ST: () => B,
    Sr: () => F,
    Wv: () => P,
    YU: () => M,
    b8: () => U,
    dZ: () => V,
    i2: () => R,
    lU: () => b,
    mK: () => j,
    nn: () => G,
    p9: () => N,
    uE: () => w,
    uN: () => x,
    yM: () => D,
});
var r = n(64700),
    i = n(311907),
    a = n(73153),
    s = n(155718),
    o = n(475743),
    l = n(662502),
    u = n(393033),
    c = n(105428),
    d = n(961350),
    _ = n(320501),
    f = n(287809),
    p = n(935649),
    h = n(847599),
    m = n(870383),
    g = n(295972),
    E = n(40449),
    A = n(652215),
    I = n(204925),
    T = n(835002),
    y = n(536242),
    S = n(985018);
let v = new Set([h.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, h.q1.START_STAGE_PROMPT, h.q1.STAGE_CHANNEL_RAISE_HAND]),
    C = new Set([
        I.w_.NSFW_SERVER,
        I.w_.NSFW_SERVER_INVITE,
        I.w_.NSFW_SERVER_INVITE_EMBED,
        I.w_.LARGE_GUILD,
        I.w_.JOIN_LARGE_GUILD_UNDERAGE,
        I.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]),
    b = (e) => C.has(e);
function N() {
    let e = f.default.getCurrentUser();
    return e?.ageVerificationStatus !== s.Tk.VERIFIED_ADULT;
}
function R() {
    let e = (0, i.bG)([f.default], () => f.default.getCurrentUser());
    return e?.ageVerificationStatus !== s.Tk.VERIFIED_ADULT;
}
function O() {
    let e = f.default.getCurrentUser();
    return e?.ageVerificationStatus === s.Tk.VERIFIED_TEEN;
}
function D() {
    let e = (0, i.bG)([f.default], () => f.default.getCurrentUser());
    return e?.ageVerificationStatus === s.Tk.VERIFIED_TEEN;
}
function L() {
    let e = f.default.getCurrentUser();
    return e?.ageVerificationStatus === s.Tk.VERIFIED_ADULT;
}
function w() {
    let e = (0, i.bG)([f.default], () => f.default.getCurrentUser());
    return e?.ageVerificationStatus === s.Tk.VERIFIED_ADULT;
}
var x = (function (e) {
        return (e.CTAS = "ctas"), (e.CONTENT_TYPE = "content_type"), e;
    })({}),
    P = (function (e) {
        return (e.VERIFIED_ADULT = "verified_adult"), (e.VERIFIED_TEEN = "verified_teen"), (e.ERROR = "error"), e;
    })({});
function M(e, t) {
    let n = _.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== A.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let r = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return r?.rawValue.split(",").includes("retry");
}
function k() {
    let e = f.default.getCurrentUser();
    return e?.ageVerificationStatus !== s.Tk.UNVERIFIED && e?.ageVerificationStatus !== s.Tk.CLIENT_ONLY_PENDING;
}
function U() {
    let e = (0, i.bG)([f.default], () => f.default.getCurrentUser());
    return e?.ageVerificationStatus !== s.Tk.UNVERIFIED && e?.ageVerificationStatus !== s.Tk.CLIENT_ONLY_PENDING;
}
function G(e) {
    let {
            onComplete: t,
            entryPoint: n,
            isRetry: s = !1,
            visibleContent: o = null,
            shouldShowExpressiveModal: d = !1,
            classificationId: _ = null,
        } = e,
        [h, m] = r.useState(!1),
        E = (0, i.bG)([f.default], () => f.default.getCurrentUser()),
        { current: A } = r.useRef(E?.ageVerificationStatus),
        I = (0, u.W$)(),
        y = r.useCallback(() => {
            a.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: A }),
                s ||
                    I ||
                    c.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_intro_screen",
                        visibleContent: o,
                    });
        }, [A, s, o, I]),
        S = r.useCallback(
            async (e) => {
                m(!0);
                try {
                    a.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let r = await (0, g.uf)({ method: e, classificationId: _ ?? void 0 });
                    p.A.showAgeVerification({
                        webviewUrl: r.verification_webview_url,
                        verificationRequestId: r.verification_request_id,
                        verificationVendorName: r.verification_vendor_name,
                        onComplete: t,
                        onClose: y,
                        onCancel: y,
                        entryPoint: n,
                        shouldShowExpressiveModal: d,
                    });
                } catch (e) {
                    l.A.showFailedToast(T.OB.TIGGER_PAWTECT_ERROR), y();
                } finally {
                    m(!1);
                }
            },
            [t, y, d, _, n],
        );
    return { loading: h, initiateAgeVerification: S };
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
function F(e) {
    return null != e && E.zn.has(e);
}
function B(e) {
    return v.has(e) ? S.intl.string(S.t.lSWVTM) : (0, m.H)(S.intl.string(S.t.JHNunj), S.intl.string(S.t.xYXsr6));
}
function j(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return v.has(e)
        ? S.intl.string(S.t["S/xS/w"])
        : n
          ? (0, m.H)(S.intl.string(y.default["1/6wta"]), S.intl.string(y.default.h7qzoa))
          : null != t
            ? S.intl.format(y.default.RpMIT0, { handleOnHelpUrlHook: t })
            : (0, m.H)(S.intl.string(S.t["+BLIGh"]), S.intl.string(S.t.HxS3oQ));
}
