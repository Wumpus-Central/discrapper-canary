"use strict";
n.d(t, {
    $8: () => U,
    Dn: () => F,
    I7: () => X,
    NI: () => x,
    Q9: () => Y,
    ST: () => q,
    Sr: () => z,
    Wv: () => j,
    Y2: () => V,
    YU: () => H,
    b8: () => W,
    dZ: () => $,
    i2: () => P,
    lU: () => D,
    mK: () => Z,
    nn: () => K,
    p9: () => M,
    tC: () => Q,
    uE: () => G,
    uN: () => B,
    yM: () => k,
});
var i,
    r,
    s = n(64700),
    a = n(687123),
    o = n(17928),
    l = n(228366),
    u = n(155718),
    c = n(475743),
    d = n(923495),
    _ = n(207560),
    h = n(381689),
    f = n(495544),
    p = n(232835),
    E = n(287809),
    m = n(139716),
    g = n(847599),
    A = n(787301),
    I = n(295972),
    T = n(96358),
    S = n(40449),
    y = n(652215),
    C = n(204925),
    N = n(835002),
    v = n(516761),
    R = n(375708);
let O = new Set([g.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, g.q1.START_STAGE_PROMPT, g.q1.STAGE_CHANNEL_RAISE_HAND]),
    b = new Set([
        C.w_.NSFW_SERVER,
        C.w_.NSFW_SERVER_INVITE,
        C.w_.NSFW_SERVER_INVITE_EMBED,
        C.w_.LARGE_GUILD,
        C.w_.JOIN_LARGE_GUILD_UNDERAGE,
        C.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]);
function D(e) {
    return b.has(e);
}
function L() {
    return d.A.isFeatureAgeGated(a.t.REACTIVE_CHECK);
}
function w() {
    return (0, _.aX)(a.t.REACTIVE_CHECK);
}
function M() {
    let e = E.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return !(t === u.Tk.VERIFIED_ADULT || (L() && t === u.Tk.INFERRED_ADULT));
}
function P() {
    let e = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        t = w() && e?.ageVerificationStatus === u.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus !== u.Tk.VERIFIED_ADULT && !t;
}
function x() {
    let e = E.default.getCurrentUser();
    return e?.ageVerificationStatus === u.Tk.VERIFIED_TEEN;
}
function k() {
    let e = (0, o.bG)([E.default], () => E.default.getCurrentUser());
    return e?.ageVerificationStatus === u.Tk.VERIFIED_TEEN;
}
function U() {
    let e = E.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return t === u.Tk.VERIFIED_ADULT || (L() && t === u.Tk.INFERRED_ADULT);
}
function G() {
    let e = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        t = w() && e?.ageVerificationStatus === u.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus === u.Tk.VERIFIED_ADULT || t;
}
function F() {
    let e = (0, o.bG)([E.default], () => E.default.getCurrentUser());
    return e?.ageVerificationStatus === u.Tk.VERIFIED_ADULT;
}
function V() {
    let e = (0, o.bG)([E.default], () => E.default.getCurrentUser()?.ageVerificationStatus === u.Tk.INFERRED_ADULT);
    return (0, _.aX)(a.t.REACTIVE_CHECK) && e;
}
var B = (((i = {}).CTAS = "ctas"), (i.CONTENT_TYPE = "content_type"), i),
    j = (((r = {}).VERIFIED_ADULT = "verified_adult"), (r.VERIFIED_TEEN = "verified_teen"), (r.ERROR = "error"), r);
function H(e, t) {
    let n = p.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== y.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return i?.rawValue.split(",").includes("retry");
}
function Y() {
    let e = E.default.getCurrentUser();
    return e?.ageVerificationStatus !== u.Tk.UNVERIFIED && e?.ageVerificationStatus !== u.Tk.CLIENT_ONLY_PENDING;
}
function W() {
    let e = (0, o.bG)([E.default], () => E.default.getCurrentUser());
    return e?.ageVerificationStatus !== u.Tk.UNVERIFIED && e?.ageVerificationStatus !== u.Tk.CLIENT_ONLY_PENDING;
}
function K(e) {
    let { onComplete: t, entryPoint: n, shouldShowExpressiveModal: i = !1, classificationId: r = null } = e,
        [a, u] = s.useState(!1),
        c = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        { current: d } = s.useRef(c?.ageVerificationStatus),
        _ = s.useCallback(() => {
            l.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: d });
        }, [d]),
        f = s.useCallback(
            async (e) => {
                u(!0);
                try {
                    l.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let s = await (0, I.uf)({ method: e, classificationId: r ?? void 0 });
                    m.A.showAgeVerification({
                        webviewUrl: s.verification_webview_url,
                        verificationRequestId: s.verification_request_id,
                        verificationVendorName: s.verification_vendor_name,
                        onComplete: t,
                        onClose: _,
                        onCancel: _,
                        entryPoint: n,
                        shouldShowExpressiveModal: i,
                    });
                } catch (e) {
                    h.A.showFailedToast(N.OB.TIGGER_PAWTECT_ERROR), _();
                } finally {
                    u(!1);
                }
            },
            [t, _, i, r, n],
        );
    return { loading: a, initiateAgeVerification: f };
}
function $(e) {
    let t = (0, o.bG)([E.default], () => E.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, c.A)(t),
        i = (0, o.bG)([f.default], () => null != f.default.getSuspendedUserToken()),
        r = (0, o.bG)([f.default], () => f.default.isAuthenticated()),
        a = null != n && null != t && n !== t,
        l = !i && !r;
    s.useEffect(() => {
        (a || l) && e();
    }, [e, a, l]);
}
function z(e) {
    return null != e && S.zn.has(e);
}
function q(e) {
    return O.has(e) ? R.intl.string(R.t.lSWVTM) : R.intl.string(R.t.xYXsr6);
}
function Z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return O.has(e)
        ? R.intl.string(R.t["S/xS/w"])
        : n
          ? R.intl.string(v.default.h7qzoa)
          : null != t
            ? R.intl.format(v.default.RpMIT0, { handleOnHelpUrlHook: t })
            : R.intl.string(R.t.HxS3oQ);
}
function X(e) {
    let t,
        n,
        i =
            ((t = W()),
            (n = (0, _.aX)(a.t.REACTIVE_CHECK)),
            (0, o.bG)([A.A], () => !t && n && A.A.shouldCallReactiveCheck(), [t, n]));
    s.useEffect(() => {
        i && C.Qx.has(e) && (0, T.z)();
    }, [i, e]);
}
async function Q() {
    return !Y() && L() && A.A.shouldCallReactiveCheck() ? await (0, T.z)() : null;
}
