let t, i;
n.d(r, { default: () => B });
var l = n(477900),
    o = n(582128),
    a = n(503698),
    c = n.n(a),
    u = n(333007),
    s = n(231723),
    d = n(315710),
    f = n(289873),
    h = n(772707),
    p = n(174459),
    E = n(625494),
    k = n(964486),
    C = n(888548),
    m = n(652215);
n(321073);
var w = n(844074),
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
        ((t = e), (i = r));
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
            onVerify: c,
            onError: u,
            onExpire: s,
            onUnknownVendorErrorCode: d,
        } = e,
        f = o.useRef(null),
        h = o.useRef(null),
        p = o.useRef({ onLoad: a, onVerify: c, onError: u, onExpire: s, onUnknownVendorErrorCode: d });
    ((p.current = { onLoad: a, onVerify: c, onError: u, onExpire: s, onUnknownVendorErrorCode: d }),
        o.useEffect(() => {
            let e = !1,
                l = 0;
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
                                    let r = i;
                                    ((x = R()), r?.(e ?? Error("Turnstile script failed to load")));
                                })(Error("Turnstile script failed to load"));
                            }),
                            document.body.appendChild(e));
                    }
                    return x;
                })()
                    .then(() => {
                        if (e || null == f.current || null == window.turnstile) return;
                        let i = "invisible" === t ? "normal" : (t ?? "normal");
                        ((h.current = window.turnstile.render(f.current, {
                            sitekey: r,
                            theme: n ?? "auto",
                            size: i,
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
                                    l >= 3 ||
                                        (l++,
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
    return (0, l.jsx)("div", { ref: f, style: E });
}
var L = n(731738),
    M = n(319400),
    N = n(267102),
    H = n(807393),
    I = n(38405),
    O = n(700525);
let V = new Set([
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
    D = (e) => {
        let {
                captchaService: r = M.MS.RECAPTCHA,
                sitekey: n,
                rqdata: t,
                onRender: i,
                onVerify: a,
                onError: c,
                onOpen: u,
                onClose: s,
                onChalExpired: d,
                size: f,
                userflow: h,
                ...E
            } = e,
            k = o.useRef(null),
            A = (0, b.A)(),
            v = (0, N._o)().document.head,
            [g, _] = o.useState(!1),
            x = o.useCallback(
                (e) => {
                    p.default.track(m.HAw.CAPTCHA_EVENT, {
                        captcha_event_name: e,
                        captcha_service: r,
                        sitekey: n,
                        captcha_flow_key: A,
                    });
                },
                [A, r, n],
            ),
            R = o.useCallback(
                (e, n) => {
                    let t = [`event_name:${e}`, `captcha_service:${r}`];
                    (null != n && t.push(`error_code:${n}`), H.A.increment({ name: L.K.CAPTCHA_EVENT, tags: t }));
                },
                [r],
            ),
            S = o.useCallback(() => {
                r === M.MS.HCAPTCHA &&
                    (null != t && "" !== t && null != k.current && k.current?.setData({ rqdata: t }),
                    "invisible" === f && null != k.current && k.current?.execute());
            }, [t, k, f, r]),
            T = o.useCallback(() => {
                (g || (x("initial-load"), R("initial-load"), _(!0)), S());
            }, [R, g, x, S]);
        (o.useEffect(() => {
            S();
        }, [S]),
            o.useEffect(() => {
                T();
            }, [T]));
        let P = o.useCallback(
                (e) => {
                    (x("error"), R("error", null != e && V.has(e) ? e : "unknown"), S(), c?.());
                },
                [x, R, S, c],
            ),
            D = o.useCallback(
                (e) => {
                    (x("verify"), R("verify"), a(e));
                },
                [R, a, x],
            ),
            z = o.useCallback(() => {
                (x("render"), (0, C.emitCaptchaDistributionMetric)(h), i?.());
            }, [i, x, h]),
            U = o.useCallback(() => {
                (x("open"), R("open"), (0, C.emitCaptchaDistributionMetric)(h), u?.());
            }, [R, u, x, h]),
            $ = o.useCallback(() => {
                (x("close"), R("cancel"), s?.(), S());
            }, [s, x, R, S]),
            G = o.useCallback(() => {
                (x("chal-expire"), R("chal-expire"), d?.());
            }, [d, x, R]),
            B = o.useCallback((e) => {
                I.A.captureMessage(`Unknown Turnstile error code: ${e}`, {
                    tags: { captcha_service: M.MS.TURNSTILE, vendor_error_code: e ?? "undefined" },
                });
            }, []);
        switch (((null == n || "" === n) && (n = m._Ak), r)) {
            case M.MS.RECAPTCHA:
                return (0, l.jsx)(y.A, { ...E, onLoad: T, onRender: z, onVerify: D, onError: P, sitekey: n });
            case M.MS.RECAPTCHA_ENTERPRISE:
                return (0, l.jsx)(O.d, {
                    ...E,
                    onLoad: T,
                    onRender: z,
                    onVerify: D,
                    onError: P,
                    sitekey: n,
                    action: h,
                });
            case M.MS.HCAPTCHA:
                return (0, l.jsx)(w.A, {
                    ref: k,
                    ...E,
                    sitekey: n,
                    scriptLocation: v,
                    onLoad: T,
                    onError: P,
                    onVerify: D,
                    onChalExpired: G,
                    onOpen: U,
                    onClose: $,
                    size: f,
                    reCaptchaCompat: !1,
                });
            case M.MS.TURNSTILE:
                return (0, l.jsx)(j, {
                    sitekey: n,
                    theme: E.theme,
                    size: f,
                    onLoad: T,
                    onVerify: D,
                    onError: P,
                    onExpire: G,
                    onUnknownVendorErrorCode: B,
                });
            default:
                return (0, l.jsx)(y.A, { ...E, sitekey: n, onLoad: T, onRender: z, onVerify: D, onError: P });
        }
    };
var z = n(105292),
    U = n(423075);
let $ = new Set([s.ip.ENTERING, s.ip.ENTERED]);
function G() {
    let e = o.useRef(null);
    return ((0, d.tj)(e, { disable: !0 }), null);
}
function B(e) {
    let {
            onClose: r,
            onCaptchaVerify: n,
            onReject: t,
            transitionState: i,
            headerText: a,
            bodyText: s,
            rqtoken: d,
            serveInvisible: w,
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
                        p.default.track(m.HAw.OPEN_MODAL, { type: n }),
                        () => {
                            t.current && p.default.track(m.HAw.MODAL_DISMISSED, { type: n });
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
            E._.subscribe(m.jej.LAYER_POP_ESCAPE_KEY, r);
        }, [r]),
        o.useEffect(() => {
            p.default.track(m.HAw.OPEN_MODAL, { type: "Captcha Modal" });
        }, []),
        null == i || !$.has(i))
    )
        return null;
    let g = (0, l.jsxs)("div", {
        className: c()(U.GC, U.P),
        children: [
            w && (0, l.jsx)(f.y, { type: f.y.Type.SPINNING_CIRCLE }),
            A && (0, l.jsx)(G, {}),
            (0, l.jsx)(D, {
                size: w ? "invisible" : void 0,
                onVerify: function (e) {
                    (b(), n(e, d), r());
                },
                onOpen: function () {
                    (0, u.flushSync)(() => v(!0));
                },
                onClose: function () {
                    (v(!1), w && r());
                },
                ...y,
            }),
        ],
    });
    return (0, l.jsx)(h.k, {
        transitionState: i,
        onClose: r,
        size: "sm",
        gradientColor: "blue",
        graphic: { type: "image", src: "/assets/a1c385fb82c39bab.svg" },
        title: a ?? z.intl.string(z.t.FpoiHe),
        subtitle: s ?? z.intl.string(z.t["/CidxO"]),
        children: g,
    });
}
