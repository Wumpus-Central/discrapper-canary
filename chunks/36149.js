"use strict";
n.d(t, {
    $8: () => F,
    Dn: () => B,
    I7: () => en,
    NI: () => x,
    Ny: () => X,
    Q9: () => $,
    ST: () => ee,
    Sr: () => J,
    Wv: () => W,
    Y2: () => H,
    YU: () => Y,
    b8: () => z,
    dZ: () => Q,
    i2: () => G,
    lU: () => M,
    lW: () => K,
    mK: () => et,
    nn: () => Z,
    p9: () => w,
    tC: () => ei,
    uE: () => V,
    uN: () => j,
    yM: () => k,
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
    _ = n(138054),
    E = n(923495),
    A = n(207560),
    h = n(381689),
    I = n(280450),
    f = n(232835),
    p = n(287809),
    T = n(31720),
    m = n(847599),
    g = n(787301),
    S = n(295972),
    N = n(96358),
    C = n(40449),
    O = n(652215),
    R = n(204925),
    L = n(835002),
    D = n(516761),
    y = n(375708);
let v = new Set([m.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, m.q1.START_STAGE_PROMPT, m.q1.STAGE_CHANNEL_RAISE_HAND]),
    b = new Set([
        R.w_.NSFW_SERVER,
        R.w_.NSFW_SERVER_INVITE,
        R.w_.NSFW_SERVER_INVITE_EMBED,
        R.w_.LARGE_GUILD,
        R.w_.JOIN_LARGE_GUILD_UNDERAGE,
        R.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]);
function M(e) {
    return b.has(e);
}
function P() {
    return E.A.isFeatureAgeGated(s.t.REACTIVE_CHECK);
}
function U() {
    return (0, A.aX)(s.t.REACTIVE_CHECK);
}
function w() {
    let e = p.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return !(t === d.Tk.VERIFIED_ADULT || (P() && t === d.Tk.INFERRED_ADULT));
}
function G() {
    let e = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        t = U() && e?.ageVerificationStatus === d.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus !== d.Tk.VERIFIED_ADULT && !t;
}
function x() {
    let e = p.default.getCurrentUser();
    return e?.ageVerificationStatus === d.Tk.VERIFIED_TEEN;
}
function k() {
    let e = (0, l.bG)([p.default], () => p.default.getCurrentUser());
    return e?.ageVerificationStatus === d.Tk.VERIFIED_TEEN;
}
function F() {
    let e = p.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return t === d.Tk.VERIFIED_ADULT || (P() && t === d.Tk.INFERRED_ADULT);
}
function V() {
    let e = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        t = U() && e?.ageVerificationStatus === d.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus === d.Tk.VERIFIED_ADULT || t;
}
function B() {
    let e = (0, l.bG)([p.default], () => p.default.getCurrentUser());
    return e?.ageVerificationStatus === d.Tk.VERIFIED_ADULT;
}
function H() {
    let e = (0, l.bG)([p.default], () => p.default.getCurrentUser()?.ageVerificationStatus === d.Tk.INFERRED_ADULT);
    return (0, A.aX)(s.t.REACTIVE_CHECK) && e;
}
var j = (((i = {}).CTAS = "ctas"), (i.CONTENT_TYPE = "content_type"), i),
    W = (((r = {}).VERIFIED_ADULT = "verified_adult"), (r.VERIFIED_TEEN = "verified_teen"), (r.ERROR = "error"), r);
function Y(e, t) {
    let n = f.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== O.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return i?.rawValue.split(",").includes("retry");
}
function K(e, t) {
    if (null == _.A.getPendingConnection()) return !1;
    let n = f.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== O.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return (
        i?.rawValue.split(",").includes("connect_to_teen") === !0 &&
        u.q.getConfig({ location: "isAgeVerificationMessageWithConnectToTeenCta" }).enabled
    );
}
function $() {
    let e = p.default.getCurrentUser();
    return e?.ageVerificationStatus !== d.Tk.UNVERIFIED && e?.ageVerificationStatus !== d.Tk.CLIENT_ONLY_PENDING;
}
function z() {
    let e = (0, l.bG)([p.default], () => p.default.getCurrentUser());
    return e?.ageVerificationStatus !== d.Tk.UNVERIFIED && e?.ageVerificationStatus !== d.Tk.CLIENT_ONLY_PENDING;
}
function q(e) {
    let { onComplete: t, entryPoint: n, shouldShowExpressiveModal: i = !1 } = e,
        [r, s] = a.useState(!1),
        d = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        { current: c } = a.useRef(d?.ageVerificationStatus),
        u = a.useCallback(() => {
            o.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: c });
        }, [c]);
    return {
        loading: r,
        startVerification: a.useCallback(
            async (e) => {
                s(!0);
                try {
                    o.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let r = await e(),
                        a = T.A.showAgeVerification({
                            webviewUrl: r.verification_webview_url,
                            verificationRequestId: r.verification_request_id,
                            verificationVendorName: r.verification_vendor_name,
                            incodeParameters: r.incode_parameters,
                            onComplete: t,
                            onClose: u,
                            onCancel: u,
                            entryPoint: n,
                            shouldShowExpressiveModal: i,
                        });
                    !1 === a && (h.A.showFailedToast(L.OB.TIGGER_PAWTECT_ERROR), u());
                } catch (e) {
                    h.A.showFailedToast(L.OB.TIGGER_PAWTECT_ERROR), u();
                } finally {
                    s(!1);
                }
            },
            [t, u, i, n],
        ),
    };
}
function Z(e) {
    let { onComplete: t, entryPoint: n, shouldShowExpressiveModal: i = !1, classificationId: r = null } = e,
        { loading: s, startVerification: l } = q({ onComplete: t, entryPoint: n, shouldShowExpressiveModal: i });
    return {
        loading: s,
        initiateAgeVerification: a.useCallback(
            (e, t) => l(() => (0, S.uf)({ method: e, classificationId: r ?? void 0, vendor: t })),
            [l, r],
        ),
    };
}
function X(e) {
    let { onComplete: t, entryPoint: n } = e,
        { loading: i, startVerification: r } = q({ onComplete: t, entryPoint: n, shouldShowExpressiveModal: !0 });
    return { loading: i, initiateAgeVerificationV2: a.useCallback((e, t) => r(() => (0, S.UQ)(e, t)), [r]) };
}
function Q(e) {
    let t = (0, l.bG)([p.default], () => p.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, c.A)(t),
        i = (0, l.bG)([I.default], () => null != I.default.getSuspendedUserToken()),
        r = (0, l.bG)([I.default], () => I.default.isAuthenticated()),
        s = null != n && null != t && n !== t,
        o = !i && !r;
    a.useEffect(() => {
        (s || o) && e();
    }, [e, s, o]);
}
function J(e) {
    return null != e && C.zn.has(e);
}
function ee(e) {
    return v.has(e) ? y.intl.string(y.t.lSWVTM) : y.intl.string(y.t.xYXsr6);
}
function et(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return v.has(e)
        ? y.intl.string(y.t["S/xS/w"])
        : n
          ? y.intl.string(D.default.h7qzoa)
          : null != t
            ? y.intl.format(D.default.RpMIT0, { handleOnHelpUrlHook: t })
            : y.intl.string(y.t.HxS3oQ);
}
function en(e) {
    let t,
        n,
        i =
            ((t = z()),
            (n = (0, A.aX)(s.t.REACTIVE_CHECK)),
            (0, l.bG)([g.A], () => !t && n && g.A.shouldCallReactiveCheck(), [t, n]));
    a.useEffect(() => {
        i && R.Qx.has(e) && (0, N.z)();
    }, [i, e]);
}
async function ei() {
    return !$() && P() && g.A.shouldCallReactiveCheck() ? await (0, N.z)() : null;
}
