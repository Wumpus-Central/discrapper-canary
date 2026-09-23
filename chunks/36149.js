n.d(t, {
    $8: () => w,
    Dn: () => x,
    NI: () => P,
    Ny: () => z,
    Q9: () => W,
    ST: () => Z,
    Sr: () => q,
    Wv: () => B,
    Y2: () => k,
    YU: () => V,
    b8: () => Y,
    cc: () => H,
    dZ: () => X,
    i2: () => b,
    lU: () => D,
    lW: () => j,
    mK: () => Q,
    nn: () => $,
    p9: () => v,
    uE: () => G,
    uN: () => F,
    yM: () => U,
});
var i,
    r,
    a = n(582128),
    s = n(687123),
    l = n(17928),
    o = n(228366),
    d = n(155718),
    c = n(475743),
    u = n(138054);
n(923495);
var _ = n(207560),
    E = n(381689),
    A = n(280450),
    h = n(232835),
    I = n(287809),
    f = n(379257),
    p = n(306537);
n(787301);
var T = n(295972),
    m = n(757319);
n(96358);
var g = n(40449),
    S = n(652215),
    N = n(204925),
    C = n(835002),
    O = n(799719),
    R = n(375708);
let L = new Set([p.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, p.q1.START_STAGE_PROMPT, p.q1.STAGE_CHANNEL_RAISE_HAND]),
    y = new Set([
        N.w_.NSFW_SERVER,
        N.w_.NSFW_SERVER_INVITE,
        N.w_.NSFW_SERVER_INVITE_EMBED,
        N.w_.LARGE_GUILD,
        N.w_.JOIN_LARGE_GUILD_UNDERAGE,
        N.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]);
function D(e) {
    return y.has(e);
}
function v() {
    return !w();
}
function b() {
    return !G();
}
function M(e) {
    return e === d.Tk.VERIFIED_TEEN || e === d.Tk.INFERRED_TEEN;
}
function P() {
    return M(I.default.getCurrentUser()?.ageVerificationStatus);
}
function U() {
    return (0, l.bG)([I.default], () => M(I.default.getCurrentUser()?.ageVerificationStatus));
}
function w() {
    let e = I.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return t === d.Tk.VERIFIED_ADULT || t === d.Tk.INFERRED_ADULT;
}
function G() {
    let e = (0, l.bG)([I.default], () => I.default.getCurrentUser());
    return e?.ageVerificationStatus === d.Tk.VERIFIED_ADULT || e?.ageVerificationStatus === d.Tk.INFERRED_ADULT;
}
function x() {
    let e = (0, l.bG)([I.default], () => I.default.getCurrentUser());
    return e?.ageVerificationStatus === d.Tk.VERIFIED_ADULT;
}
function k() {
    let e = (0, l.bG)([I.default], () => {
        var e;
        return (
            (e = I.default.getCurrentUser()?.ageVerificationStatus) === d.Tk.INFERRED_ADULT || e === d.Tk.INFERRED_TEEN
        );
    });
    return (0, _.aX)(s.t.REACTIVE_CHECK) && e;
}
var F = (((i = {}).CTAS = "ctas"), (i.CONTENT_TYPE = "content_type"), i),
    B =
        (((r = {}).VERIFIED_ADULT = "verified_adult"),
        (r.VERIFIED_TEEN = "verified_teen"),
        (r.ERROR = "error"),
        (r.FAE_FAILED = "fae_failed"),
        (r.ID_FAILED = "id_failed"),
        (r.UNDERAGE = "underage"),
        (r.MANUAL_REVIEW_SUBMITTED = "manual_review_submitted"),
        r);
function V(e, t) {
    let n = h.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== S.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return i?.rawValue.split(",").includes("retry");
}
function H(e, t) {
    let n = h.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== S.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return (
        i?.rawValue.split(",").includes("request_manual_review") === !0 &&
        (0, m._)("isAgeVerificationMessageWithManualReviewCta")
    );
}
function j(e, t) {
    if (null == u.A.getPendingConnection()) return !1;
    let n = h.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== S.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return i?.rawValue.split(",").includes("connect_to_teen") === !0;
}
function W() {
    let e = I.default.getCurrentUser();
    return e?.ageVerificationStatus !== d.Tk.UNVERIFIED && e?.ageVerificationStatus !== d.Tk.CLIENT_ONLY_PENDING;
}
function Y() {
    let e = (0, l.bG)([I.default], () => I.default.getCurrentUser());
    return e?.ageVerificationStatus !== d.Tk.UNVERIFIED && e?.ageVerificationStatus !== d.Tk.CLIENT_ONLY_PENDING;
}
function K(e) {
    let { onComplete: t, entryPoint: n, shouldShowExpressiveModal: i = !1, onMethodUnavailable: r } = e,
        [s, d] = a.useState(!1),
        c = (0, l.bG)([I.default], () => I.default.getCurrentUser()),
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
                        s = f.A.showAgeVerification({
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
                    !1 === s && (E.A.showFailedToast(C.OB.TIGGER_PAWTECT_ERROR), _());
                } catch (e) {
                    (_(),
                        null != r && e?.body?.code === S.t02.AGE_VERIFICATION_METHOD_UNAVAILABLE
                            ? (E.A.showFailedToast(C.OB.AGE_VERIFICATION_METHOD_UNAVAILABLE), r())
                            : E.A.showFailedToast(C.OB.TIGGER_PAWTECT_ERROR));
                } finally {
                    d(!1);
                }
            },
            [t, _, i, n, r],
        ),
    };
}
function $(e) {
    let { onComplete: t, entryPoint: n, shouldShowExpressiveModal: i = !1, classificationId: r = null } = e,
        { loading: s, startVerification: l } = K({ onComplete: t, entryPoint: n, shouldShowExpressiveModal: i });
    return {
        loading: s,
        initiateAgeVerification: a.useCallback(
            (e, t) => l(() => (0, T.uf)({ method: e, classificationId: r ?? void 0, vendor: t })),
            [l, r],
        ),
    };
}
function z(e) {
    let { onComplete: t, entryPoint: n, onMethodUnavailable: i } = e,
        { loading: r, startVerification: s } = K({
            onComplete: t,
            entryPoint: n,
            shouldShowExpressiveModal: !0,
            onMethodUnavailable: i,
        });
    return {
        loading: r,
        initiateAgeVerificationV2: a.useCallback((e) => s(() => (0, T.en)(e.method, e.vendor), e), [s]),
    };
}
function X(e) {
    let t = (0, l.bG)([I.default], () => I.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, c.Ay)(t),
        i = (0, l.bG)([A.default], () => null != A.default.getSuspendedUserToken()),
        r = (0, l.bG)([A.default], () => A.default.isAuthenticated()),
        s = null != n && null != t && n !== t,
        o = !i && !r;
    a.useEffect(() => {
        (s || o) && e();
    }, [e, s, o]);
}
function q(e) {
    return null != e && g.zn.has(e);
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return L.has(e) ? R.intl.string(R.t.lSWVTM) : t ? R.intl.string(O.default["/kgWIg"]) : R.intl.string(R.t.xYXsr6);
}
function Q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    return L.has(e)
        ? R.intl.string(R.t["S/xS/w"])
        : n
          ? R.intl.string(O.default.h7qzoa)
          : r && null != t && null != i
            ? R.intl.format(O.default["+Ft5ch"], { handleOnHelpUrlHook: t, handleOnTrustedProvidersHook: i })
            : r && null != t
              ? R.intl.format(O.default["22HSSI"], { handleOnHelpUrlHook: t })
              : null != t
                ? R.intl.format(O.default.RpMIT0, { handleOnHelpUrlHook: t })
                : R.intl.string(R.t.HxS3oQ);
}
