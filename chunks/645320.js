let t, i;
n.d(r, { default: () => z });
var l = n(627968),
    o = n(64700),
    a = n(503698),
    c = n.n(a),
    u = n(772707),
    s = n(231723),
    d = n(289873),
    f = n(174459),
    h = n(625494),
    p = n(964486),
    E = n(888548),
    k = n(652215);
n(321073);
var C = n(411722),
    m = n(3745),
    w = n(835245);
let y = {
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
    b = "turnstile-script",
    A = "turnstileOnLoad",
    v = "unloaded",
    g = _();
function _() {
    return new Promise((e, r) => {
        (t = e), (i = r);
    });
}
function T() {
    Reflect.deleteProperty(window, A);
}
function x() {
    "ready" !== v && null != window.turnstile && ((v = "ready"), T(), t?.());
}
let R = {
    normal: { width: 300, height: 65 },
    compact: { width: 150, height: 140 },
    invisible: { width: 0, height: 0, overflow: "hidden" },
};
function S(e) {
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
    (p.current = { onLoad: a, onVerify: c, onError: u, onExpire: s, onUnknownVendorErrorCode: d }),
        o.useEffect(() => {
            let e = !1,
                l = 0;
            return (
                (function () {
                    if (null != window.turnstile) return x(), g;
                    if (
                        ("unloaded" === v &&
                            ((v = "loading"),
                            Object.assign(window, {
                                [A]() {
                                    x();
                                },
                            })),
                        null == document.getElementById(b))
                    ) {
                        let e = document.createElement("script");
                        (e.src = `https://challenges.cloudflare.com/turnstile/v0/api.js?onload=${A}&render=explicit`),
                            (e.id = b),
                            (e.async = !0),
                            (e.defer = !0),
                            (e.onerror = () => {
                                !(function (e) {
                                    if ("ready" === v) return;
                                    (v = "unloaded"), T(), document.getElementById(b)?.remove();
                                    let r = i;
                                    (g = _()), r?.(e ?? Error("Turnstile script failed to load"));
                                })(Error("Turnstile script failed to load"));
                            }),
                            document.body.appendChild(e);
                    }
                    return g;
                })()
                    .then(() => {
                        if (e || null == f.current || null == window.turnstile) return;
                        let i = "invisible" === t ? "normal" : (t ?? "normal");
                        (h.current = window.turnstile.render(f.current, {
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
                                        : null != y[r]
                                          ? y[r]
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
                            p.current.onLoad?.();
                    })
                    .catch(() => {
                        e || p.current.onError?.("script-error");
                    }),
                () => {
                    (e = !0),
                        null != h.current &&
                            null != window.turnstile &&
                            (window.turnstile.remove(h.current), (h.current = null));
                }
            );
        }, [r, n, t]);
    let E = R[t ?? "normal"];
    return (0, l.jsx)("div", { ref: f, style: E });
}
var P = n(731738),
    L = n(319400),
    M = n(807393),
    N = n(38405),
    j = n(700525);
let H = new Set([
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
    I = (e) => {
        let {
                captchaService: r = L.MS.RECAPTCHA,
                sitekey: n,
                rqdata: t,
                onRender: i,
                onVerify: a,
                onError: c,
                onOpen: u,
                onClose: s,
                onChalExpired: d,
                size: h,
                userflow: p,
                ...y
            } = e,
            b = o.useRef(null),
            A = (0, w.A)(),
            [v, g] = o.useState(!1),
            _ = o.useCallback(
                (e) => {
                    f.default.track(k.HAw.CAPTCHA_EVENT, {
                        captcha_event_name: e,
                        captcha_service: r,
                        sitekey: n,
                        captcha_flow_key: A,
                    });
                },
                [A, r, n],
            ),
            T = o.useCallback(
                (e, n) => {
                    let t = [`event_name:${e}`, `captcha_service:${r}`];
                    null != n && t.push(`error_code:${n}`), M.A.increment({ name: P.K.CAPTCHA_EVENT, tags: t });
                },
                [r],
            ),
            x = o.useCallback(() => {
                r === L.MS.HCAPTCHA &&
                    (null != t && "" !== t && null != b.current && b.current?.setData({ rqdata: t }),
                    "invisible" === h && null != b.current && b.current?.execute());
            }, [t, b, h, r]),
            R = o.useCallback(() => {
                v || (_("initial-load"), T("initial-load"), g(!0)), x();
            }, [T, v, _, x]);
        o.useEffect(() => {
            x();
        }, [x]),
            o.useEffect(() => {
                R();
            }, [R]);
        let I = o.useCallback(
                (e) => {
                    _("error"), T("error", null != e && H.has(e) ? e : "unknown"), x(), c?.();
                },
                [_, T, x, c],
            ),
            V = o.useCallback(
                (e) => {
                    _("verify"), T("verify"), a(e);
                },
                [T, a, _],
            ),
            O = o.useCallback(() => {
                _("render"), (0, E.emitCaptchaDistributionMetric)(p), i?.();
            }, [i, _, p]),
            D = o.useCallback(() => {
                _("open"), T("open"), (0, E.emitCaptchaDistributionMetric)(p), u?.();
            }, [T, u, _, p]),
            z = o.useCallback(() => {
                _("close"), T("cancel"), s?.(), x();
            }, [s, _, T, x]),
            U = o.useCallback(() => {
                _("chal-expire"), T("chal-expire"), d?.();
            }, [d, _, T]),
            $ = o.useCallback((e) => {
                N.A.captureMessage(`Unknown Turnstile error code: ${e}`, {
                    tags: { captcha_service: L.MS.TURNSTILE, vendor_error_code: e ?? "undefined" },
                });
            }, []);
        return ((null == n || "" === n) && (n = k._Ak), r === L.MS.RECAPTCHA)
            ? (0, l.jsx)(m.A, { ...y, onLoad: R, onRender: O, onVerify: V, onError: I, sitekey: n })
            : r === L.MS.RECAPTCHA_ENTERPRISE
              ? (0, l.jsx)(j.d, { ...y, onLoad: R, onRender: O, onVerify: V, onError: I, sitekey: n, action: p })
              : r === L.MS.HCAPTCHA
                ? (0, l.jsx)(C.A, {
                      ref: b,
                      ...y,
                      sitekey: n,
                      onLoad: R,
                      onError: I,
                      onVerify: V,
                      onChalExpired: U,
                      onOpen: D,
                      onClose: z,
                      size: h,
                      reCaptchaCompat: !1,
                  })
                : r === L.MS.TURNSTILE
                  ? (0, l.jsx)(S, {
                        sitekey: n,
                        theme: y.theme,
                        size: h,
                        onLoad: R,
                        onVerify: V,
                        onError: I,
                        onExpire: U,
                        onUnknownVendorErrorCode: $,
                    })
                  : (0, l.jsx)(m.A, { ...y, sitekey: n, onLoad: R, onRender: O, onVerify: V, onError: I });
    };
var V = n(375708),
    O = n(846762);
let D = new Set([s.ip.ENTERING, s.ip.ENTERED]);
function z(e) {
    let {
            onClose: r,
            onCaptchaVerify: n,
            onReject: t,
            transitionState: i,
            headerText: a,
            bodyText: s,
            rqtoken: C,
            serveInvisible: m,
            ...w
        } = e,
        y = (function (e) {
            let { onReject: r, analyticsType: n = "Guild Join Captcha" } = e,
                t = o.useRef(!0);
            return (
                (0, p.Ay)(() => () => {
                    t.current && r?.(E.CaptchaError.CANCEL);
                }),
                o.useEffect(
                    () => (
                        f.default.track(k.HAw.OPEN_MODAL, { type: n }),
                        () => {
                            t.current && f.default.track(k.HAw.MODAL_DISMISSED, { type: n });
                        }
                    ),
                    [n],
                ),
                () => {
                    t.current = !1;
                }
            );
        })({ onReject: t });
    if (
        (o.useEffect(() => {
            h._.subscribe(k.jej.LAYER_POP_ESCAPE_KEY, r);
        }, [r]),
        o.useEffect(() => {
            f.default.track(k.HAw.OPEN_MODAL, { type: "Captcha Modal" });
        }, []),
        null == i || !D.has(i))
    )
        return null;
    let b = (0, l.jsxs)("div", {
        className: c()(O.GC, O.P),
        children: [
            m && (0, l.jsx)(d.y, { type: d.y.Type.SPINNING_CIRCLE }),
            (0, l.jsx)(I, {
                size: m ? "invisible" : void 0,
                onVerify: (e) => {
                    y(), n(e, C), r();
                },
                onClose: m ? r : void 0,
                ...w,
            }),
        ],
    });
    return (0, l.jsx)(u.k, {
        transitionState: i,
        onClose: r,
        size: "sm",
        gradientColor: "blue",
        graphic: { type: "image", src: "/assets/a1c385fb82c39bab.svg" },
        title: a ?? V.intl.string(V.t.FpoiHe),
        subtitle: s ?? V.intl.string(V.t["/CidxO"]),
        children: b,
    });
}
