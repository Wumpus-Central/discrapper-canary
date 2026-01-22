n.d(t, {
    $8: () => w,
    NI: () => N,
    Q9: () => j,
    ST: () => V,
    Sr: () => G,
    Wv: () => x,
    YU: () => L,
    b8: () => M,
    dZ: () => U,
    i2: () => C,
    lU: () => I,
    mK: () => F,
    nn: () => k,
    p9: () => T,
    uE: () => P,
    uN: () => D,
    yM: () => R,
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
    m = n(295972),
    g = n(40449),
    E = n(652215),
    b = n(204925),
    y = n(835002),
    O = n(536242),
    A = n(985018);
let v = new Set([h.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, h.q1.START_STAGE_PROMPT, h.q1.STAGE_CHANNEL_RAISE_HAND]),
    S = new Set([
        b.w_.NSFW_SERVER,
        b.w_.NSFW_SERVER_INVITE,
        b.w_.NSFW_SERVER_INVITE_EMBED,
        b.w_.LARGE_GUILD,
        b.w_.JOIN_LARGE_GUILD_UNDERAGE,
        b.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]),
    I = (e) => S.has(e);

function T() {
    let e = p.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.VERIFIED_ADULT;
}

function C() {
    let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.VERIFIED_ADULT;
}

function N() {
    let e = p.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === s.Tk.VERIFIED_TEEN;
}

function R() {
    let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === s.Tk.VERIFIED_TEEN;
}

function w() {
    let e = p.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === s.Tk.VERIFIED_ADULT;
}

function P() {
    let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === s.Tk.VERIFIED_ADULT;
}
var D = (function (e) {
        return (e.CTAS = "ctas"), (e.CONTENT_TYPE = "content_type"), e;
    })({}),
    x = (function (e) {
        return (e.VERIFIED_ADULT = "verified_adult"), (e.VERIFIED_TEEN = "verified_teen"), (e.ERROR = "error"), e;
    })({});

function L(e, t) {
    let n = f.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== E.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let r = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return null == r ? void 0 : r.rawValue.split(",").includes("retry");
}

function j() {
    let e = p.default.getCurrentUser();
    return (
        (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.UNVERIFIED &&
        (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.CLIENT_ONLY_PENDING
    );
}

function M() {
    let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
    return (
        (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.UNVERIFIED &&
        (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.CLIENT_ONLY_PENDING
    );
}

function k(e) {
    let {
            onComplete: t,
            entryPoint: n,
            isRetry: s = !1,
            visibleContent: o = null,
            shouldShowExpressiveModal: d = !1,
            classificationId: f = null,
        } = e,
        [h, g] = r.useState(!1),
        E = (0, i.bG)([p.default], () => p.default.getCurrentUser()),
        { current: b } = r.useRef(null == E ? void 0 : E.ageVerificationStatus),
        O = (0, c.W$)(),
        A = r.useCallback(() => {
            a.h.dispatch({
                type: "CLOSE_AGE_VERIFICATION_MODAL",
                status: b,
            }),
                s ||
                    O ||
                    u.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_intro_screen",
                        visibleContent: o,
                    });
        }, [b, s, o, O]),
        v = r.useCallback(
            async (e) => {
                g(!0);
                try {
                    a.h.dispatch({
                        type: "INITIATE_AGE_VERIFICATION",
                    });
                    let r = await (0, m.uf)({
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
                    l.A.showFailedToast(y.OB.TIGGER_PAWTECT_ERROR), A();
                } finally {
                    g(!1);
                }
            },
            [t, A, d, f, n],
        );
    return {
        loading: h,
        initiateAgeVerification: v,
    };
}

function U(e) {
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

function G(e) {
    return null != e && g.zn.has(e);
}

function V(e) {
    return v.has(e) ? A.intl.string(A.t.lSWVTM) : A.intl.string(A.t.JHNunj);
}

function F(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return v.has(e)
        ? A.intl.string(A.t["S/xS/w"])
        : n
          ? A.intl.string(O.default["1/6wta"])
          : null != t
            ? A.intl.format(O.default.RpMIT0, {
                  handleOnHelpUrlHook: t,
              })
            : A.intl.string(A.t["+BLIGh"]);
}
