"use strict";
n.d(t, {
    $8: () => F,
    Dn: () => B,
    I7: () => ee,
    NI: () => x,
    Q9: () => $,
    ST: () => Q,
    Sr: () => X,
    Wv: () => W,
    Y2: () => H,
    YU: () => Y,
    b8: () => z,
    dZ: () => Z,
    i2: () => G,
    lU: () => M,
    lW: () => K,
    mK: () => J,
    nn: () => q,
    p9: () => w,
    tC: () => et,
    uE: () => V,
    uN: () => j,
    yM: () => k,
});
var i,
    r,
    a = n(64700),
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
    y = n(516761),
    D = n(375708);
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
    let { onComplete: t, entryPoint: n, shouldShowExpressiveModal: i = !1, classificationId: r = null } = e,
        [s, d] = a.useState(!1),
        c = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        { current: u } = a.useRef(c?.ageVerificationStatus),
        _ = a.useCallback(() => {
            o.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: u });
        }, [u]),
        E = a.useCallback(
            async (e, a) => {
                d(!0);
                try {
                    o.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let s = await (0, S.uf)({ method: e, classificationId: r ?? void 0, vendor: a }),
                        l = T.A.showAgeVerification({
                            webviewUrl: s.verification_webview_url,
                            verificationRequestId: s.verification_request_id,
                            verificationVendorName: s.verification_vendor_name,
                            incodeParameters: s.incode_parameters,
                            onComplete: t,
                            onClose: _,
                            onCancel: _,
                            entryPoint: n,
                            shouldShowExpressiveModal: i,
                        });
                    !1 === l && (h.A.showFailedToast(L.OB.TIGGER_PAWTECT_ERROR), _());
                } catch (e) {
                    h.A.showFailedToast(L.OB.TIGGER_PAWTECT_ERROR), _();
                } finally {
                    d(!1);
                }
            },
            [t, _, i, r, n],
        );
    return { loading: s, initiateAgeVerification: E };
}
function Z(e) {
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
function X(e) {
    return null != e && C.zn.has(e);
}
function Q(e) {
    return v.has(e) ? D.intl.string(D.t.lSWVTM) : D.intl.string(D.t.xYXsr6);
}
function J(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return v.has(e)
        ? D.intl.string(D.t["S/xS/w"])
        : n
          ? D.intl.string(y.default.h7qzoa)
          : null != t
            ? D.intl.format(y.default.RpMIT0, { handleOnHelpUrlHook: t })
            : D.intl.string(D.t.HxS3oQ);
}
function ee(e) {
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
async function et() {
    return !$() && P() && g.A.shouldCallReactiveCheck() ? await (0, N.z)() : null;
}
