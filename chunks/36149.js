"use strict";
n.d(t, {
    $8: () => F,
    Dn: () => B,
    I7: () => ee,
    NI: () => U,
    Q9: () => $,
    ST: () => Q,
    Sr: () => X,
    Wv: () => Y,
    Y2: () => j,
    YU: () => W,
    b8: () => z,
    dZ: () => Z,
    i2: () => k,
    lU: () => w,
    lW: () => K,
    mK: () => J,
    nn: () => q,
    p9: () => x,
    tC: () => et,
    uE: () => V,
    uN: () => H,
    yM: () => G,
});
var i,
    r,
    s = n(64700),
    a = n(687123),
    o = n(17928),
    l = n(228366),
    u = n(155718),
    c = n(475743),
    d = n(653166),
    _ = n(138054),
    h = n(923495),
    f = n(207560),
    p = n(381689),
    E = n(495544),
    m = n(232835),
    g = n(287809),
    A = n(379257),
    I = n(847599),
    T = n(787301),
    S = n(295972),
    y = n(96358),
    C = n(40449),
    N = n(652215),
    v = n(204925),
    R = n(835002),
    O = n(432632),
    b = n(375708);
let D = new Set([I.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, I.q1.START_STAGE_PROMPT, I.q1.STAGE_CHANNEL_RAISE_HAND]),
    L = new Set([
        v.w_.NSFW_SERVER,
        v.w_.NSFW_SERVER_INVITE,
        v.w_.NSFW_SERVER_INVITE_EMBED,
        v.w_.LARGE_GUILD,
        v.w_.JOIN_LARGE_GUILD_UNDERAGE,
        v.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]);
function w(e) {
    return L.has(e);
}
function M() {
    return h.A.isFeatureAgeGated(a.t.REACTIVE_CHECK);
}
function P() {
    return (0, f.aX)(a.t.REACTIVE_CHECK);
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
    let e = (0, o.bG)([g.default], () => g.default.getCurrentUser());
    return e?.ageVerificationStatus === u.Tk.VERIFIED_ADULT;
}
function j() {
    let e = (0, o.bG)([g.default], () => g.default.getCurrentUser()?.ageVerificationStatus === u.Tk.INFERRED_ADULT);
    return (0, f.aX)(a.t.REACTIVE_CHECK) && e;
}
var H = (((i = {}).CTAS = "ctas"), (i.CONTENT_TYPE = "content_type"), i),
    Y = (((r = {}).VERIFIED_ADULT = "verified_adult"), (r.VERIFIED_TEEN = "verified_teen"), (r.ERROR = "error"), r);
function W(e, t) {
    let n = m.A.getMessage(e, t);
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
function K(e, t) {
    if (null == _.A.getPendingConnection()) return !1;
    let n = m.A.getMessage(e, t);
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
        d.q.getConfig({ location: "isAgeVerificationMessageWithConnectToTeenCta" }).enabled
    );
}
function $() {
    let e = g.default.getCurrentUser();
    return e?.ageVerificationStatus !== u.Tk.UNVERIFIED && e?.ageVerificationStatus !== u.Tk.CLIENT_ONLY_PENDING;
}
function z() {
    let e = (0, o.bG)([g.default], () => g.default.getCurrentUser());
    return e?.ageVerificationStatus !== u.Tk.UNVERIFIED && e?.ageVerificationStatus !== u.Tk.CLIENT_ONLY_PENDING;
}
function q(e) {
    let { onComplete: t, entryPoint: n, shouldShowExpressiveModal: i = !1, classificationId: r = null } = e,
        [a, u] = s.useState(!1),
        c = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        { current: d } = s.useRef(c?.ageVerificationStatus),
        _ = s.useCallback(() => {
            l.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: d });
        }, [d]),
        h = s.useCallback(
            async (e) => {
                u(!0);
                try {
                    l.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let s = await (0, S.uf)({ method: e, classificationId: r ?? void 0 }),
                        a = A.A.showAgeVerification({
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
                    !1 === a && (p.A.showFailedToast(R.OB.TIGGER_PAWTECT_ERROR), _());
                } catch (e) {
                    p.A.showFailedToast(R.OB.TIGGER_PAWTECT_ERROR), _();
                } finally {
                    u(!1);
                }
            },
            [t, _, i, r, n],
        );
    return { loading: a, initiateAgeVerification: h };
}
function Z(e) {
    let t = (0, o.bG)([g.default], () => g.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, c.A)(t),
        i = (0, o.bG)([E.default], () => null != E.default.getSuspendedUserToken()),
        r = (0, o.bG)([E.default], () => E.default.isAuthenticated()),
        a = null != n && null != t && n !== t,
        l = !i && !r;
    s.useEffect(() => {
        (a || l) && e();
    }, [e, a, l]);
}
function X(e) {
    return null != e && C.zn.has(e);
}
function Q(e) {
    return D.has(e) ? b.intl.string(b.t.lSWVTM) : b.intl.string(b.t.xYXsr6);
}
function J(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return D.has(e)
        ? b.intl.string(b.t["S/xS/w"])
        : n
          ? b.intl.string(O.default.h7qzoa)
          : null != t
            ? b.intl.format(O.default.RpMIT0, { handleOnHelpUrlHook: t })
            : b.intl.string(b.t.HxS3oQ);
}
function ee(e) {
    let t,
        n,
        i =
            ((t = z()),
            (n = (0, f.aX)(a.t.REACTIVE_CHECK)),
            (0, o.bG)([T.A], () => !t && n && T.A.shouldCallReactiveCheck(), [t, n]));
    s.useEffect(() => {
        i && v.Qx.has(e) && (0, y.z)();
    }, [i, e]);
}
async function et() {
    return !$() && M() && T.A.shouldCallReactiveCheck() ? await (0, y.z)() : null;
}
