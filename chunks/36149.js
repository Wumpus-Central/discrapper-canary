"use strict";
n.d(t, {
    $8: () => F,
    I7: () => Q,
    NI: () => k,
    Q9: () => W,
    ST: () => Z,
    Sr: () => q,
    Wv: () => j,
    Y2: () => B,
    YU: () => Y,
    b8: () => K,
    dZ: () => $,
    i2: () => U,
    lU: () => w,
    mK: () => X,
    nn: () => z,
    p9: () => x,
    tC: () => J,
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
    d = n(923495),
    _ = n(207560),
    f = n(381689),
    h = n(393033),
    p = n(732061),
    E = n(495544),
    m = n(232835),
    g = n(287809),
    A = n(139716),
    I = n(847599),
    T = n(787301),
    S = n(295972),
    N = n(96358),
    y = n(40449),
    C = n(652215),
    v = n(204925),
    O = n(835002),
    R = n(516761),
    b = n(375708);
let D = new Set([I.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, I.q1.START_STAGE_PROMPT, I.q1.STAGE_CHANNEL_RAISE_HAND]),
    L = new Set([
        v.w_.NSFW_SERVER,
        v.w_.NSFW_SERVER_INVITE,
        v.w_.NSFW_SERVER_INVITE_EMBED,
        v.w_.LARGE_GUILD,
        v.w_.JOIN_LARGE_GUILD_UNDERAGE,
        v.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]),
    w = (e) => L.has(e);
function M() {
    return d.A.isFeatureAgeGated(a.t.REACTIVE_CHECK);
}
function P() {
    return (0, _.aX)(a.t.REACTIVE_CHECK);
}
function x() {
    let e = g.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return !(t === u.Tk.VERIFIED_ADULT || (M() && t === u.Tk.INFERRED_ADULT));
}
function U() {
    let e = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        t = P() && e?.ageVerificationStatus === u.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus !== u.Tk.VERIFIED_ADULT && !t;
}
function k() {
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
    let e = (0, o.bG)([g.default], () => g.default.getCurrentUser()?.ageVerificationStatus === u.Tk.INFERRED_ADULT);
    return (0, _.aX)(a.t.REACTIVE_CHECK) && e;
}
var H = (((i = {}).CTAS = "ctas"), (i.CONTENT_TYPE = "content_type"), i),
    j = (((r = {}).VERIFIED_ADULT = "verified_adult"), (r.VERIFIED_TEEN = "verified_teen"), (r.ERROR = "error"), r);
function Y(e, t) {
    let n = m.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== C.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return i?.rawValue.split(",").includes("retry");
}
function W() {
    let e = g.default.getCurrentUser();
    return e?.ageVerificationStatus !== u.Tk.UNVERIFIED && e?.ageVerificationStatus !== u.Tk.CLIENT_ONLY_PENDING;
}
function K() {
    let e = (0, o.bG)([g.default], () => g.default.getCurrentUser());
    return e?.ageVerificationStatus !== u.Tk.UNVERIFIED && e?.ageVerificationStatus !== u.Tk.CLIENT_ONLY_PENDING;
}
function z(e) {
    let {
            onComplete: t,
            entryPoint: n,
            isRetry: i = !1,
            visibleContent: r = null,
            shouldShowExpressiveModal: a = !1,
            classificationId: u = null,
        } = e,
        [c, d] = s.useState(!1),
        _ = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        { current: E } = s.useRef(_?.ageVerificationStatus),
        m = (0, h.W$)(),
        I = s.useCallback(() => {
            l.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: E }),
                i ||
                    m ||
                    p.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_intro_screen",
                        visibleContent: r,
                    });
        }, [E, i, r, m]),
        T = s.useCallback(
            async (e) => {
                d(!0);
                try {
                    l.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let i = await (0, S.uf)({ method: e, classificationId: u ?? void 0 });
                    A.A.showAgeVerification({
                        webviewUrl: i.verification_webview_url,
                        verificationRequestId: i.verification_request_id,
                        verificationVendorName: i.verification_vendor_name,
                        onComplete: t,
                        onClose: I,
                        onCancel: I,
                        entryPoint: n,
                        shouldShowExpressiveModal: a,
                    });
                } catch (e) {
                    f.A.showFailedToast(O.OB.TIGGER_PAWTECT_ERROR), I();
                } finally {
                    d(!1);
                }
            },
            [t, I, a, u, n],
        );
    return { loading: c, initiateAgeVerification: T };
}
function $(e) {
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
function q(e) {
    return null != e && y.zn.has(e);
}
function Z(e) {
    return D.has(e) ? b.intl.string(b.t.lSWVTM) : b.intl.string(b.t.xYXsr6);
}
function X(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return D.has(e)
        ? b.intl.string(b.t["S/xS/w"])
        : n
          ? b.intl.string(R.default.h7qzoa)
          : null != t
            ? b.intl.format(R.default.RpMIT0, { handleOnHelpUrlHook: t })
            : b.intl.string(b.t.HxS3oQ);
}
function Q(e) {
    let t,
        n,
        i =
            ((t = K()),
            (n = (0, _.aX)(a.t.REACTIVE_CHECK)),
            (0, o.bG)([T.A], () => !t && n && T.A.shouldCallReactiveCheck(), [t, n]));
    s.useEffect(() => {
        i && v.Qx.has(e) && (0, N.z)();
    }, [i, e]);
}
async function J() {
    return !W() && M() && T.A.shouldCallReactiveCheck() ? await (0, N.z)() : null;
}
