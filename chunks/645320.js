let t, l;
n.d(r, { default: () => G });
var i = n(477900),
    o = n(582128),
    a = n(503698),
    u = n.n(a),
    c = n(333007),
    s = n(231723),
    d = n(315710),
    f = n(289873),
    h = n(772707),
    p = n(174459),
    E = n(625494),
    k = n(964486),
    C = n(888548),
    w = n(652215);
n(321073);
var m = n(844074),
    y = n(955205),
    b = n(132500);
let A = {
        110100: "invalid-sitekey",
        110110: "sitekey-not-found",
        110200: "domain-not-authorized",
        110600: "challenge-timeout",
        110620: "interaction-timeout",
        200100: "clock-or-cache-problem",
        200500: "iframe-load-error",
        400020: "invalid-sitekey",
        400070: "sitekey-disabled",
    },
    v = "turnstile-script",
    g = "turnstileOnLoad",
    _ = "unloaded",
    x = R();
function R() {
    return new Promise((e, r) => {
        ((t = e), (l = r));
    });
}
function S() {
    Reflect.deleteProperty(window, g);
}
function T() {
    "ready" !== _ && null != window.turnstile && ((_ = "ready"), S(), t?.());
}
let P = {
    normal: { width: 300, height: 65 },
    compact: { width: 150, height: 140 },
    invisible: { width: 0, height: 0, overflow: "hidden" },
};
function j(e) {
    let {
            sitekey: r,
            theme: n,
            size: t,
            onLoad: a,
            onVerify: u,
            onError: c,
            onExpire: s,
            onUnknownVendorErrorCode: d,
        } = e,
        f = o.useRef(null),
        h = o.useRef(null),
        p = o.useRef({ onLoad: a, onVerify: u, onError: c, onExpire: s, onUnknownVendorErrorCode: d });
    ((p.current = { onLoad: a, onVerify: u, onError: c, onExpire: s, onUnknownVendorErrorCode: d }),
        o.useEffect(() => {
            let e = !1,
                i = 0;
            return (
                (function () {
                    if (null != window.turnstile) return (T(), x);
                    if (
                        ("unloaded" === _ &&
                            ((_ = "loading"),
                            Object.assign(window, {
                                [g]() {
                                    T();
                                },
                            })),
                        null == document.getElementById(v))
                    ) {
                        let e = document.createElement("script");
                        ((e.src = `https://challenges.cloudflare.com/turnstile/v0/api.js?onload=${g}&render=explicit`),
                            (e.id = v),
                            (e.async = !0),
                            (e.defer = !0),
                            (e.onerror = () => {
                                !(function (e) {
                                    if ("ready" === _) return;
                                    ((_ = "unloaded"), S(), document.getElementById(v)?.remove());
                                    let r = l;
                                    ((x = R()), r?.(e ?? Error("Turnstile script failed to load")));
                                })(Error("Turnstile script failed to load"));
                            }),
                            document.body.appendChild(e));
                    }
                    return x;
                })()
                    .then(() => {
                        if (e || null == f.current || null == window.turnstile) return;
                        let l = "invisible" === t ? "normal" : (t ?? "normal");
                        ((h.current = window.turnstile.render(f.current, {
                            sitekey: r,
                            theme: n ?? "auto",
                            size: l,
                            retry: "never",
                            callback: (e) => {
                                p.current.onVerify(e);
                            },
                            "error-callback": (r) => {
                                let n = (function (e) {
                                    if (null == e) return "unknown";
                                    let r = e.trim();
                                    return "" === r
                                        ? "unknown"
                                        : null != A[r]
                                          ? A[r]
                                          : r.startsWith("300") || r.startsWith("600")
                                            ? "generic-challenge-error"
                                            : "unknown";
                                })(r);
                                return (
                                    "unknown" === n && p.current.onUnknownVendorErrorCode?.(r),
                                    p.current.onError?.(n),
                                    i >= 3 ||
                                        (i++,
                                        setTimeout(() => {
                                            e ||
                                                null == h.current ||
                                                null == window.turnstile ||
                                                window.turnstile.reset(h.current);
                                        }, 3e3),
                                        !0)
                                );
                            },
                            "expired-callback": () => {
                                p.current.onExpire?.();
                            },
                        })),
                            p.current.onLoad?.());
                    })
                    .catch(() => {
                        e || p.current.onError?.("script-error");
                    }),
                () => {
                    ((e = !0),
                        null != h.current &&
                            null != window.turnstile &&
                            (window.turnstile.remove(h.current), (h.current = null)));
                }
            );
        }, [r, n, t]));
    let E = P[t ?? "normal"];
    return (0, i.jsx)("div", { ref: f, style: E });
}
var L = n(731738),
    M = n(319400),
    N = n(807393),
    H = n(38405),
    I = n(700525);
let O = new Set([
        "rate-limited",
        "network-error",
        "invalid-data",
        "challenge-error",
        "challenge-closed",
        "challenge-expired",
        "missing-captcha",
        "invalid-captcha-id",
        "internal-error",
        "script-error",
        "invalid-sitekey",
        "sitekey-not-found",
        "sitekey-disabled",
        "domain-not-authorized",
        "challenge-timeout",
        "interaction-timeout",
        "clock-or-cache-problem",
        "iframe-load-error",
        "generic-challenge-error",
    ]),
    V = (e) => {
        let {
                captchaService: r = M.MS.RECAPTCHA,
                sitekey: n,
                rqdata: t,
                onRender: l,
                onVerify: a,
                onError: u,
                onOpen: c,
                onClose: s,
                onChalExpired: d,
                size: f,
                userflow: h,
                ...E
            } = e,
            k = o.useRef(null),
            A = (0, b.A)(),
            [v, g] = o.useState(!1),
            _ = o.useCallback(
                (e) => {
                    p.default.track(w.HAw.CAPTCHA_EVENT, {
                        captcha_event_name: e,
                        captcha_service: r,
                        sitekey: n,
                        captcha_flow_key: A,
                    });
                },
                [A, r, n],
            ),
            x = o.useCallback(
                (e, n) => {
                    let t = [`event_name:${e}`, `captcha_service:${r}`];
                    (null != n && t.push(`error_code:${n}`), N.A.increment({ name: L.K.CAPTCHA_EVENT, tags: t }));
                },
                [r],
            ),
            R = o.useCallback(() => {
                r === M.MS.HCAPTCHA &&
                    (null != t && "" !== t && null != k.current && k.current?.setData({ rqdata: t }),
                    "invisible" === f && null != k.current && k.current?.execute());
            }, [t, k, f, r]),
            S = o.useCallback(() => {
                (v || (_("initial-load"), x("initial-load"), g(!0)), R());
            }, [x, v, _, R]);
        (o.useEffect(() => {
            R();
        }, [R]),
            o.useEffect(() => {
                S();
            }, [S]));
        let T = o.useCallback(
                (e) => {
                    (_("error"), x("error", null != e && O.has(e) ? e : "unknown"), R(), u?.());
                },
                [_, x, R, u],
            ),
            P = o.useCallback(
                (e) => {
                    (_("verify"), x("verify"), a(e));
                },
                [x, a, _],
            ),
            V = o.useCallback(() => {
                (_("render"), (0, C.emitCaptchaDistributionMetric)(h), l?.());
            }, [l, _, h]),
            D = o.useCallback(() => {
                (_("open"), x("open"), (0, C.emitCaptchaDistributionMetric)(h), c?.());
            }, [x, c, _, h]),
            z = o.useCallback(() => {
                (_("close"), x("cancel"), s?.(), R());
            }, [s, _, x, R]),
            U = o.useCallback(() => {
                (_("chal-expire"), x("chal-expire"), d?.());
            }, [d, _, x]),
            $ = o.useCallback((e) => {
                H.A.captureMessage(`Unknown Turnstile error code: ${e}`, {
                    tags: { captcha_service: M.MS.TURNSTILE, vendor_error_code: e ?? "undefined" },
                });
            }, []);
        switch (((null == n || "" === n) && (n = w._Ak), r)) {
            case M.MS.RECAPTCHA:
                return (0, i.jsx)(y.A, { ...E, onLoad: S, onRender: V, onVerify: P, onError: T, sitekey: n });
            case M.MS.RECAPTCHA_ENTERPRISE:
                return (0, i.jsx)(I.d, {
                    ...E,
                    onLoad: S,
                    onRender: V,
                    onVerify: P,
                    onError: T,
                    sitekey: n,
                    action: h,
                });
            case M.MS.HCAPTCHA:
                return (0, i.jsx)(m.A, {
                    ref: k,
                    ...E,
                    sitekey: n,
                    onLoad: S,
                    onError: T,
                    onVerify: P,
                    onChalExpired: U,
                    onOpen: D,
                    onClose: z,
                    size: f,
                    reCaptchaCompat: !1,
                });
            case M.MS.TURNSTILE:
                return (0, i.jsx)(j, {
                    sitekey: n,
                    theme: E.theme,
                    size: f,
                    onLoad: S,
                    onVerify: P,
                    onError: T,
                    onExpire: U,
                    onUnknownVendorErrorCode: $,
                });
            default:
                return (0, i.jsx)(y.A, { ...E, sitekey: n, onLoad: S, onRender: V, onVerify: P, onError: T });
        }
    };
var D = n(375708),
    z = n(423075);
let U = new Set([s.ip.ENTERING, s.ip.ENTERED]);
function $() {
    let e = o.useRef(null);
    return ((0, d.tj)(e, { disable: !0 }), null);
}
function G(e) {
    let {
            onClose: r,
            onCaptchaVerify: n,
            onReject: t,
            transitionState: l,
            headerText: a,
            bodyText: s,
            rqtoken: d,
            serveInvisible: m,
            ...y
        } = e,
        b = (function (e) {
            let { onReject: r, analyticsType: n = "Guild Join Captcha" } = e,
                t = o.useRef(!0);
            return (
                (0, k.Ay)(() => () => {
                    t.current && r?.(C.CaptchaError.CANCEL);
                }),
                o.useEffect(
                    () => (
                        p.default.track(w.HAw.OPEN_MODAL, { type: n }),
                        () => {
                            t.current && p.default.track(w.HAw.MODAL_DISMISSED, { type: n });
                        }
                    ),
                    [n],
                ),
                function () {
                    t.current = !1;
                }
            );
        })({ onReject: t }),
        [A, v] = o.useState(!1);
    if (
        (o.useEffect(() => {
            E._.subscribe(w.jej.LAYER_POP_ESCAPE_KEY, r);
        }, [r]),
        o.useEffect(() => {
            p.default.track(w.HAw.OPEN_MODAL, { type: "Captcha Modal" });
        }, []),
        null == l || !U.has(l))
    )
        return null;
    let g = (0, i.jsxs)("div", {
        className: u()(z.GC, z.P),
        children: [
            m && (0, i.jsx)(f.y, { type: f.y.Type.SPINNING_CIRCLE }),
            A && (0, i.jsx)($, {}),
            (0, i.jsx)(V, {
                size: m ? "invisible" : void 0,
                onVerify: function (e) {
                    (b(), n(e, d), r());
                },
                onOpen: function () {
                    (0, c.flushSync)(() => v(!0));
                },
                onClose: function () {
                    (v(!1), m && r());
                },
                ...y,
            }),
        ],
    });
    return (0, i.jsx)(h.k, {
        transitionState: l,
        onClose: r,
        size: "sm",
        gradientColor: "blue",
        graphic: { type: "image", src: "/assets/a1c385fb82c39bab.svg" },
        title: a ?? D.intl.string(D.t.FpoiHe),
        subtitle: s ?? D.intl.string(D.t["/CidxO"]),
        children: g,
    });
}
