n.d(t, {
    $8: () => B,
    I7: () => X,
    NI: () => x,
    Q9: () => W,
    ST: () => Q,
    Sr: () => q,
    Wv: () => j,
    Y2: () => k,
    YU: () => Y,
    b8: () => K,
    dZ: () => Z,
    i2: () => w,
    lU: () => U,
    mK: () => z,
    nn: () => $,
    p9: () => G,
    tC: () => J,
    uE: () => F,
    uN: () => H,
    yM: () => V,
});
var i,
    a,
    r = n(64700),
    s = n(687123),
    l = n(17928),
    o = n(228366),
    d = n(155718),
    c = n(475743),
    _ = n(923495),
    E = n(207560),
    u = n(381689),
    A = n(393033),
    I = n(732061),
    T = n(495544),
    h = n(232835),
    S = n(287809),
    N = n(139716),
    f = n(847599),
    p = n(787301),
    m = n(295972),
    O = n(96358),
    C = n(40449),
    R = n(652215),
    g = n(204925),
    L = n(835002),
    D = n(516761),
    b = n(985018);
let M = new Set([f.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, f.q1.START_STAGE_PROMPT, f.q1.STAGE_CHANNEL_RAISE_HAND]),
    P = new Set([
        g.w_.NSFW_SERVER,
        g.w_.NSFW_SERVER_INVITE,
        g.w_.NSFW_SERVER_INVITE_EMBED,
        g.w_.LARGE_GUILD,
        g.w_.JOIN_LARGE_GUILD_UNDERAGE,
        g.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]),
    U = (e) => P.has(e);
function v() {
    return _.A.isFeatureAgeGated(s.t.REACTIVE_CHECK);
}
function y() {
    return (0, E.aX)(s.t.REACTIVE_CHECK);
}
function G() {
    let e = S.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return !(t === d.Tk.VERIFIED_ADULT || (v() && t === d.Tk.INFERRED_ADULT));
}
function w() {
    let e = (0, l.bG)([S.default], () => S.default.getCurrentUser()),
        t = y() && e?.ageVerificationStatus === d.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus !== d.Tk.VERIFIED_ADULT && !t;
}
function x() {
    let e = S.default.getCurrentUser();
    return e?.ageVerificationStatus === d.Tk.VERIFIED_TEEN;
}
function V() {
    let e = (0, l.bG)([S.default], () => S.default.getCurrentUser());
    return e?.ageVerificationStatus === d.Tk.VERIFIED_TEEN;
}
function B() {
    let e = S.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return t === d.Tk.VERIFIED_ADULT || (v() && t === d.Tk.INFERRED_ADULT);
}
function F() {
    let e = (0, l.bG)([S.default], () => S.default.getCurrentUser()),
        t = y() && e?.ageVerificationStatus === d.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus === d.Tk.VERIFIED_ADULT || t;
}
function k() {
    let e = (0, l.bG)([S.default], () => S.default.getCurrentUser()?.ageVerificationStatus === d.Tk.INFERRED_ADULT);
    return (0, E.aX)(s.t.REACTIVE_CHECK) && e;
}
var H = (((i = {}).CTAS = "ctas"), (i.CONTENT_TYPE = "content_type"), i),
    j = (((a = {}).VERIFIED_ADULT = "verified_adult"), (a.VERIFIED_TEEN = "verified_teen"), (a.ERROR = "error"), a);
function Y(e, t) {
    let n = h.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== R.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return i?.rawValue.split(",").includes("retry");
}
function W() {
    let e = S.default.getCurrentUser();
    return e?.ageVerificationStatus !== d.Tk.UNVERIFIED && e?.ageVerificationStatus !== d.Tk.CLIENT_ONLY_PENDING;
}
function K() {
    let e = (0, l.bG)([S.default], () => S.default.getCurrentUser());
    return e?.ageVerificationStatus !== d.Tk.UNVERIFIED && e?.ageVerificationStatus !== d.Tk.CLIENT_ONLY_PENDING;
}
function $(e) {
    let {
            onComplete: t,
            entryPoint: n,
            isRetry: i = !1,
            visibleContent: a = null,
            shouldShowExpressiveModal: s = !1,
            classificationId: d = null,
        } = e,
        [c, _] = r.useState(!1),
        E = (0, l.bG)([S.default], () => S.default.getCurrentUser()),
        { current: T } = r.useRef(E?.ageVerificationStatus),
        h = (0, A.W$)(),
        f = r.useCallback(() => {
            o.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: T }),
                i ||
                    h ||
                    I.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_intro_screen",
                        visibleContent: a,
                    });
        }, [T, i, a, h]),
        p = r.useCallback(
            async (e) => {
                _(!0);
                try {
                    o.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let i = await (0, m.uf)({ method: e, classificationId: d ?? void 0 });
                    N.A.showAgeVerification({
                        webviewUrl: i.verification_webview_url,
                        verificationRequestId: i.verification_request_id,
                        verificationVendorName: i.verification_vendor_name,
                        onComplete: t,
                        onClose: f,
                        onCancel: f,
                        entryPoint: n,
                        shouldShowExpressiveModal: s,
                    });
                } catch (e) {
                    u.A.showFailedToast(L.OB.TIGGER_PAWTECT_ERROR), f();
                } finally {
                    _(!1);
                }
            },
            [t, f, s, d, n],
        );
    return { loading: c, initiateAgeVerification: p };
}
function Z(e) {
    let t = (0, l.bG)([S.default], () => S.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, c.A)(t),
        i = (0, l.bG)([T.default], () => null != T.default.getSuspendedUserToken()),
        a = (0, l.bG)([T.default], () => T.default.isAuthenticated()),
        s = null != n && null != t && n !== t,
        o = !i && !a;
    r.useEffect(() => {
        (s || o) && e();
    }, [e, s, o]);
}
function q(e) {
    return null != e && C.zn.has(e);
}
function Q(e) {
    return M.has(e) ? b.intl.string(b.t.lSWVTM) : b.intl.string(b.t.xYXsr6);
}
function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return M.has(e)
        ? b.intl.string(b.t["S/xS/w"])
        : n
          ? b.intl.string(D.default.h7qzoa)
          : null != t
            ? b.intl.format(D.default.RpMIT0, { handleOnHelpUrlHook: t })
            : b.intl.string(b.t.HxS3oQ);
}
function X(e) {
    let t,
        n,
        i =
            ((t = K()),
            (n = (0, E.aX)(s.t.REACTIVE_CHECK)),
            (0, l.bG)([p.A], () => !t && n && p.A.shouldCallReactiveCheck(), [t, n]));
    r.useEffect(() => {
        i && g.Qx.has(e) && (0, O.z)();
    }, [i, e]);
}
async function J() {
    return !W() && v() && p.A.shouldCallReactiveCheck() ? await (0, O.z)() : null;
}
