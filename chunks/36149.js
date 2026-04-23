n.d(t, {
    $8: () => V,
    I7: () => J,
    NI: () => w,
    Q9: () => j,
    ST: () => X,
    Sr: () => q,
    Wv: () => W,
    Y2: () => k,
    YU: () => Y,
    b8: () => K,
    dZ: () => Q,
    i2: () => B,
    lU: () => M,
    mK: () => z,
    nn: () => $,
    p9: () => v,
    tC: () => Z,
    uE: () => H,
    uN: () => x,
    yM: () => F,
});
var i,
    r,
    a = n(64700),
    s = n(687123),
    _ = n(17928),
    l = n(228366),
    o = n(155718),
    E = n(475743),
    d = n(923495),
    c = n(207560),
    u = n(381689),
    I = n(393033),
    A = n(732061),
    T = n(495544),
    S = n(232835),
    N = n(287809),
    O = n(139716),
    R = n(847599),
    f = n(787301),
    C = n(295972),
    p = n(96358),
    m = n(40449),
    L = n(652215),
    D = n(204925),
    h = n(835002),
    g = n(516761),
    b = n(985018);
let U = new Set([R.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, R.q1.START_STAGE_PROMPT, R.q1.STAGE_CHANNEL_RAISE_HAND]),
    P = new Set([
        D.w_.NSFW_SERVER,
        D.w_.NSFW_SERVER_INVITE,
        D.w_.NSFW_SERVER_INVITE_EMBED,
        D.w_.LARGE_GUILD,
        D.w_.JOIN_LARGE_GUILD_UNDERAGE,
        D.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]),
    M = (e) => P.has(e);
function y() {
    return d.A.isFeatureAgeGated(s.t.REACTIVE_CHECK);
}
function G() {
    return (0, c.aX)(s.t.REACTIVE_CHECK);
}
function v() {
    let e = N.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return !(t === o.Tk.VERIFIED_ADULT || (y() && t === o.Tk.INFERRED_ADULT));
}
function B() {
    let e = (0, _.bG)([N.default], () => N.default.getCurrentUser()),
        t = G() && e?.ageVerificationStatus === o.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus !== o.Tk.VERIFIED_ADULT && !t;
}
function w() {
    let e = N.default.getCurrentUser();
    return e?.ageVerificationStatus === o.Tk.VERIFIED_TEEN;
}
function F() {
    let e = (0, _.bG)([N.default], () => N.default.getCurrentUser());
    return e?.ageVerificationStatus === o.Tk.VERIFIED_TEEN;
}
function V() {
    let e = N.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return t === o.Tk.VERIFIED_ADULT || (y() && t === o.Tk.INFERRED_ADULT);
}
function H() {
    let e = (0, _.bG)([N.default], () => N.default.getCurrentUser()),
        t = G() && e?.ageVerificationStatus === o.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus === o.Tk.VERIFIED_ADULT || t;
}
function k() {
    let e = (0, _.bG)([N.default], () => N.default.getCurrentUser()?.ageVerificationStatus === o.Tk.INFERRED_ADULT);
    return (0, c.aX)(s.t.REACTIVE_CHECK) && e;
}
var x = (((i = {}).CTAS = "ctas"), (i.CONTENT_TYPE = "content_type"), i),
    W = (((r = {}).VERIFIED_ADULT = "verified_adult"), (r.VERIFIED_TEEN = "verified_teen"), (r.ERROR = "error"), r);
function Y(e, t) {
    let n = S.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== L.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return i?.rawValue.split(",").includes("retry");
}
function j() {
    let e = N.default.getCurrentUser();
    return e?.ageVerificationStatus !== o.Tk.UNVERIFIED && e?.ageVerificationStatus !== o.Tk.CLIENT_ONLY_PENDING;
}
function K() {
    let e = (0, _.bG)([N.default], () => N.default.getCurrentUser());
    return e?.ageVerificationStatus !== o.Tk.UNVERIFIED && e?.ageVerificationStatus !== o.Tk.CLIENT_ONLY_PENDING;
}
function $(e) {
    let {
            onComplete: t,
            entryPoint: n,
            isRetry: i = !1,
            visibleContent: r = null,
            shouldShowExpressiveModal: s = !1,
            classificationId: o = null,
        } = e,
        [E, d] = a.useState(!1),
        c = (0, _.bG)([N.default], () => N.default.getCurrentUser()),
        { current: T } = a.useRef(c?.ageVerificationStatus),
        S = (0, I.W$)(),
        R = a.useCallback(() => {
            l.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: T }),
                i ||
                    S ||
                    A.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_intro_screen",
                        visibleContent: r,
                    });
        }, [T, i, r, S]),
        f = a.useCallback(
            async (e) => {
                d(!0);
                try {
                    l.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let i = await (0, C.uf)({ method: e, classificationId: o ?? void 0 });
                    O.A.showAgeVerification({
                        webviewUrl: i.verification_webview_url,
                        verificationRequestId: i.verification_request_id,
                        verificationVendorName: i.verification_vendor_name,
                        onComplete: t,
                        onClose: R,
                        onCancel: R,
                        entryPoint: n,
                        shouldShowExpressiveModal: s,
                    });
                } catch (e) {
                    u.A.showFailedToast(h.OB.TIGGER_PAWTECT_ERROR), R();
                } finally {
                    d(!1);
                }
            },
            [t, R, s, o, n],
        );
    return { loading: E, initiateAgeVerification: f };
}
function Q(e) {
    let t = (0, _.bG)([N.default], () => N.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, E.A)(t),
        i = (0, _.bG)([T.default], () => null != T.default.getSuspendedUserToken()),
        r = (0, _.bG)([T.default], () => T.default.isAuthenticated()),
        s = null != n && null != t && n !== t,
        l = !i && !r;
    a.useEffect(() => {
        (s || l) && e();
    }, [e, s, l]);
}
function q(e) {
    return null != e && m.zn.has(e);
}
function X(e) {
    return U.has(e) ? b.intl.string(b.t.lSWVTM) : b.intl.string(b.t.xYXsr6);
}
function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return U.has(e)
        ? b.intl.string(b.t["S/xS/w"])
        : n
          ? b.intl.string(g.default.h7qzoa)
          : null != t
            ? b.intl.format(g.default.RpMIT0, { handleOnHelpUrlHook: t })
            : b.intl.string(b.t.HxS3oQ);
}
function J(e) {
    let t,
        n,
        i =
            ((t = K()),
            (n = (0, c.aX)(s.t.REACTIVE_CHECK)),
            (0, _.bG)([f.A], () => !t && n && f.A.shouldCallReactiveCheck(), [t, n]));
    a.useEffect(() => {
        i && D.Qx.has(e) && (0, p.z)();
    }, [i, e]);
}
async function Z() {
    return !j() && y() && f.A.shouldCallReactiveCheck() ? await (0, p.z)() : null;
}
