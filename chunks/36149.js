n.d(t, {
    $8: () => G,
    Dn: () => k,
    NI: () => U,
    Ny: () => X,
    Q9: () => Y,
    ST: () => Q,
    Sr: () => Z,
    Wv: () => V,
    Y2: () => F,
    YU: () => H,
    b8: () => K,
    cc: () => j,
    dZ: () => q,
    i2: () => M,
    lU: () => v,
    lW: () => W,
    mK: () => J,
    nn: () => z,
    p9: () => b,
    uE: () => x,
    uN: () => B,
    yM: () => w,
});
var i,
    r,
    a = n(582128),
    s = n(687123),
    l = n(17928),
    o = n(228366),
    d = n(155718),
    c = n(475743),
    u = n(653166),
    _ = n(138054);
n(923495);
var E = n(207560),
    A = n(381689),
    h = n(280450),
    I = n(232835),
    f = n(287809),
    p = n(379257),
    T = n(847599);
n(787301);
var m = n(295972),
    g = n(757319);
n(96358);
var S = n(40449),
    N = n(652215),
    C = n(204925),
    O = n(835002),
    R = n(841365),
    L = n(375708);
let y = new Set([T.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, T.q1.START_STAGE_PROMPT, T.q1.STAGE_CHANNEL_RAISE_HAND]),
    D = new Set([
        C.w_.NSFW_SERVER,
        C.w_.NSFW_SERVER_INVITE,
        C.w_.NSFW_SERVER_INVITE_EMBED,
        C.w_.LARGE_GUILD,
        C.w_.JOIN_LARGE_GUILD_UNDERAGE,
        C.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]);
function v(e) {
    return D.has(e);
}
function b() {
    return !G();
}
function M() {
    return !x();
}
function P(e) {
    return e === d.Tk.VERIFIED_TEEN || e === d.Tk.INFERRED_TEEN;
}
function U() {
    return P(f.default.getCurrentUser()?.ageVerificationStatus);
}
function w() {
    return (0, l.bG)([f.default], () => P(f.default.getCurrentUser()?.ageVerificationStatus));
}
function G() {
    let e = f.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return t === d.Tk.VERIFIED_ADULT || t === d.Tk.INFERRED_ADULT;
}
function x() {
    let e = (0, l.bG)([f.default], () => f.default.getCurrentUser());
    return e?.ageVerificationStatus === d.Tk.VERIFIED_ADULT || e?.ageVerificationStatus === d.Tk.INFERRED_ADULT;
}
function k() {
    let e = (0, l.bG)([f.default], () => f.default.getCurrentUser());
    return e?.ageVerificationStatus === d.Tk.VERIFIED_ADULT;
}
function F() {
    let e = (0, l.bG)([f.default], () => {
        var e;
        return (
            (e = f.default.getCurrentUser()?.ageVerificationStatus) === d.Tk.INFERRED_ADULT || e === d.Tk.INFERRED_TEEN
        );
    });
    return (0, E.aX)(s.t.REACTIVE_CHECK) && e;
}
var B = (((i = {}).CTAS = "ctas"), (i.CONTENT_TYPE = "content_type"), i),
    V =
        (((r = {}).VERIFIED_ADULT = "verified_adult"),
        (r.VERIFIED_TEEN = "verified_teen"),
        (r.ERROR = "error"),
        (r.FAE_FAILED = "fae_failed"),
        (r.ID_FAILED = "id_failed"),
        (r.UNDERAGE = "underage"),
        r);
function H(e, t) {
    let n = I.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== N.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return i?.rawValue.split(",").includes("retry");
}
function j(e, t) {
    let n = I.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== N.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return (
        i?.rawValue.split(",").includes("request_manual_review") === !0 &&
        (0, g._)("isAgeVerificationMessageWithManualReviewCta")
    );
}
function W(e, t) {
    if (null == _.A.getPendingConnection()) return !1;
    let n = I.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== N.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return (
        i?.rawValue.split(",").includes("connect_to_teen") === !0 &&
        u.q.getConfig({ location: "isAgeVerificationMessageWithConnectToTeenCta" }).enabled
    );
}
function Y() {
    let e = f.default.getCurrentUser();
    return e?.ageVerificationStatus !== d.Tk.UNVERIFIED && e?.ageVerificationStatus !== d.Tk.CLIENT_ONLY_PENDING;
}
function K() {
    let e = (0, l.bG)([f.default], () => f.default.getCurrentUser());
    return e?.ageVerificationStatus !== d.Tk.UNVERIFIED && e?.ageVerificationStatus !== d.Tk.CLIENT_ONLY_PENDING;
}
function $(e) {
    let { onComplete: t, entryPoint: n, shouldShowExpressiveModal: i = !1, onMethodUnavailable: r } = e,
        [s, d] = a.useState(!1),
        c = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        { current: u } = a.useRef(c?.ageVerificationStatus),
        _ = a.useCallback(() => {
            o.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: u });
        }, [u]);
    return {
        loading: s,
        startVerification: a.useCallback(
            async (e, a) => {
                d(!0);
                try {
                    o.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let r = await e(),
                        s = p.A.showAgeVerification({
                            method: a?.method,
                            externalWindow: a?.externalWindow,
                            webviewUrl: r.verification_webview_url,
                            verificationRequestId: r.verification_request_id,
                            verificationVendorName: r.verification_vendor_name,
                            incodeParameters: r.incode_parameters,
                            onComplete: t,
                            onClose: _,
                            onCancel: _,
                            entryPoint: n,
                            shouldShowExpressiveModal: i,
                        });
                    !1 === s && (A.A.showFailedToast(O.OB.TIGGER_PAWTECT_ERROR), _());
                } catch (e) {
                    (_(),
                        null != r && e?.body?.code === N.t02.AGE_VERIFICATION_METHOD_UNAVAILABLE
                            ? (A.A.showFailedToast(O.OB.AGE_VERIFICATION_METHOD_UNAVAILABLE), r())
                            : A.A.showFailedToast(O.OB.TIGGER_PAWTECT_ERROR));
                } finally {
                    d(!1);
                }
            },
            [t, _, i, n, r],
        ),
    };
}
function z(e) {
    let { onComplete: t, entryPoint: n, shouldShowExpressiveModal: i = !1, classificationId: r = null } = e,
        { loading: s, startVerification: l } = $({ onComplete: t, entryPoint: n, shouldShowExpressiveModal: i });
    return {
        loading: s,
        initiateAgeVerification: a.useCallback(
            (e, t) => l(() => (0, m.uf)({ method: e, classificationId: r ?? void 0, vendor: t })),
            [l, r],
        ),
    };
}
function X(e) {
    let { onComplete: t, entryPoint: n, onMethodUnavailable: i } = e,
        { loading: r, startVerification: s } = $({
            onComplete: t,
            entryPoint: n,
            shouldShowExpressiveModal: !0,
            onMethodUnavailable: i,
        });
    return {
        loading: r,
        initiateAgeVerificationV2: a.useCallback((e) => s(() => (0, m.en)(e.method, e.vendor), e), [s]),
    };
}
function q(e) {
    let t = (0, l.bG)([f.default], () => f.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, c.Ay)(t),
        i = (0, l.bG)([h.default], () => null != h.default.getSuspendedUserToken()),
        r = (0, l.bG)([h.default], () => h.default.isAuthenticated()),
        s = null != n && null != t && n !== t,
        o = !i && !r;
    a.useEffect(() => {
        (s || o) && e();
    }, [e, s, o]);
}
function Z(e) {
    return null != e && S.zn.has(e);
}
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return y.has(e) ? L.intl.string(L.t.lSWVTM) : t ? L.intl.string(R.default["/kgWIg"]) : L.intl.string(L.t.xYXsr6);
}
function J(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    return y.has(e)
        ? L.intl.string(L.t["S/xS/w"])
        : n
          ? L.intl.string(R.default.h7qzoa)
          : r && null != t && null != i
            ? L.intl.format(R.default["+Ft5ch"], { handleOnHelpUrlHook: t, handleOnTrustedProvidersHook: i })
            : r && null != t
              ? L.intl.format(R.default["22HSSI"], { handleOnHelpUrlHook: t })
              : null != t
                ? L.intl.format(R.default.RpMIT0, { handleOnHelpUrlHook: t })
                : L.intl.string(L.t.HxS3oQ);
}
