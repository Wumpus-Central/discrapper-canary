n.d(t, {
    $8: () => P,
    NI: () => R,
    Q9: () => M,
    ST: () => F,
    Sr: () => V,
    Wv: () => L,
    YU: () => j,
    b8: () => k,
    dZ: () => G,
    i2: () => N,
    lU: () => T,
    mK: () => B,
    nn: () => U,
    p9: () => C,
    uE: () => D,
    uN: () => x,
    yM: () => w,
}),
    n(896048),
    n(747238);
var r = n(64700),
    i = n(311907),
    a = n(73153),
    s = n(155718),
    o = n(475743),
    l = n(662502),
    c = n(393033),
    u = n(105428),
    d = n(961350),
    f = n(320501),
    p = n(287809),
    _ = n(935649),
    h = n(847599),
    m = n(870383),
    g = n(295972),
    E = n(40449),
    b = n(652215),
    y = n(204925),
    O = n(835002),
    A = n(536242),
    v = n(985018);
let S = new Set([h.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, h.q1.START_STAGE_PROMPT, h.q1.STAGE_CHANNEL_RAISE_HAND]),
    I = new Set([
        y.w_.NSFW_SERVER,
        y.w_.NSFW_SERVER_INVITE,
        y.w_.NSFW_SERVER_INVITE_EMBED,
        y.w_.LARGE_GUILD,
        y.w_.JOIN_LARGE_GUILD_UNDERAGE,
        y.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]),
    T = (e) => I.has(e);

function C() {
    let e = p.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.VERIFIED_ADULT;
}

function N() {
    let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.VERIFIED_ADULT;
}

function R() {
    let e = p.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === s.Tk.VERIFIED_TEEN;
}

function w() {
    let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === s.Tk.VERIFIED_TEEN;
}

function P() {
    let e = p.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === s.Tk.VERIFIED_ADULT;
}

function D() {
    let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === s.Tk.VERIFIED_ADULT;
}
var x = (function (e) {
        return (e.CTAS = "ctas"), (e.CONTENT_TYPE = "content_type"), e;
    })({}),
    L = (function (e) {
        return (e.VERIFIED_ADULT = "verified_adult"), (e.VERIFIED_TEEN = "verified_teen"), (e.ERROR = "error"), e;
    })({});

function j(e, t) {
    let n = f.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== b.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let r = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return null == r ? void 0 : r.rawValue.split(",").includes("retry");
}

function M() {
    let e = p.default.getCurrentUser();
    return (
        (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.UNVERIFIED &&
        (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.CLIENT_ONLY_PENDING
    );
}

function k() {
    let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
    return (
        (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.UNVERIFIED &&
        (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.CLIENT_ONLY_PENDING
    );
}

function U(e) {
    let {
            onComplete: t,
            entryPoint: n,
            isRetry: s = !1,
            visibleContent: o = null,
            shouldShowExpressiveModal: d = !1,
            classificationId: f = null,
        } = e,
        [h, m] = r.useState(!1),
        E = (0, i.bG)([p.default], () => p.default.getCurrentUser()),
        { current: b } = r.useRef(null == E ? void 0 : E.ageVerificationStatus),
        y = (0, c.W$)(),
        A = r.useCallback(() => {
            a.h.dispatch({
                type: "CLOSE_AGE_VERIFICATION_MODAL",
                status: b,
            }),
                s ||
                    y ||
                    u.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_intro_screen",
                        visibleContent: o,
                    });
        }, [b, s, o, y]),
        v = r.useCallback(
            async (e) => {
                m(!0);
                try {
                    a.h.dispatch({
                        type: "INITIATE_AGE_VERIFICATION",
                    });
                    let r = await (0, g.uf)({
                        method: e,
                        classificationId: null != f ? f : void 0,
                    });
                    _.A.showAgeVerification({
                        webviewUrl: r.verification_webview_url,
                        verificationRequestId: r.verification_request_id,
                        verificationVendorName: r.verification_vendor_name,
                        onComplete: t,
                        onClose: A,
                        onCancel: A,
                        entryPoint: n,
                        shouldShowExpressiveModal: d,
                    });
                } catch (e) {
                    l.A.showFailedToast(O.OB.TIGGER_PAWTECT_ERROR), A();
                } finally {
                    m(!1);
                }
            },
            [t, A, d, f, n],
        );
    return {
        loading: h,
        initiateAgeVerification: v,
    };
}

function G(e) {
    let t = (0, i.bG)([p.default], () => {
            var e;
            return null == (e = p.default.getCurrentUser()) ? void 0 : e.ageVerificationStatus;
        }),
        n = (0, o.A)(t),
        a = (0, i.bG)([d.default], () => null != d.default.getSuspendedUserToken()),
        s = (0, i.bG)([d.default], () => d.default.isAuthenticated()),
        l = null != n && null != t && n !== t,
        c = !a && !s;
    r.useEffect(() => {
        (l || c) && e();
    }, [e, l, c]);
}

function V(e) {
    return null != e && E.zn.has(e);
}

function F(e) {
    return S.has(e) ? v.intl.string(v.t.lSWVTM) : (0, m.H)(v.intl.string(v.t.JHNunj), v.intl.string(v.t.xYXsr6));
}

function B(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return S.has(e)
        ? v.intl.string(v.t["S/xS/w"])
        : n
          ? (0, m.H)(v.intl.string(A.default["1/6wta"]), v.intl.string(A.default.h7qzoa))
          : null != t
            ? v.intl.format(A.default.RpMIT0, {
                  handleOnHelpUrlHook: t,
              })
            : (0, m.H)(v.intl.string(v.t["+BLIGh"]), v.intl.string(v.t.HxS3oQ));
}
