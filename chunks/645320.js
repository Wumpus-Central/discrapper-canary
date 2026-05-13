let n, i;
t.d(r, { default: () => V });
var l = t(627968),
    o = t(64700),
    a = t(503698),
    c = t.n(a),
    u = t(772707),
    s = t(231723),
    d = t(289873),
    f = t(174459),
    h = t(625494),
    p = t(964486),
    E = t(888548),
    C = t(652215);
t(321073);
var k = t(411722),
    m = t(3745),
    y = t(835245);
let w = {
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
        (n = e), (i = r);
    });
}
function x() {
    Reflect.deleteProperty(window, A);
}
function R() {
    "ready" !== v && null != window.turnstile && ((v = "ready"), x(), n?.());
}
let T = {
    normal: { width: 300, height: 65 },
    compact: { width: 150, height: 140 },
    invisible: { width: 0, height: 0, overflow: "hidden" },
};
function P(e) {
    let { sitekey: r, theme: t, size: n, onLoad: a, onVerify: c, onError: u, onExpire: s } = e,
        d = o.useRef(null),
        f = o.useRef(null),
        h = o.useRef({ onLoad: a, onVerify: c, onError: u, onExpire: s });
    (h.current = { onLoad: a, onVerify: c, onError: u, onExpire: s }),
        o.useEffect(() => {
            let e = !1,
                l = 0;
            return (
                (function () {
                    if (null != window.turnstile) return R(), g;
                    if (
                        ("unloaded" === v &&
                            ((v = "loading"),
                            Object.assign(window, {
                                [A]() {
                                    R();
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
                                    (v = "unloaded"), x(), document.getElementById(b)?.remove();
                                    let r = i;
                                    (g = _()), r?.(e ?? Error("Turnstile script failed to load"));
                                })(Error("Turnstile script failed to load"));
                            }),
                            document.body.appendChild(e);
                    }
                    return g;
                })()
                    .then(() => {
                        if (e || null == d.current || null == window.turnstile) return;
                        let i = "invisible" === n ? "normal" : (n ?? "normal");
                        (f.current = window.turnstile.render(d.current, {
                            sitekey: r,
                            theme: t ?? "auto",
                            size: i,
                            retry: "never",
                            callback: (e) => {
                                h.current.onVerify(e);
                            },
                            "error-callback": (r) => (
                                h.current.onError?.(
                                    (function (e) {
                                        if (null == e) return "unknown";
                                        let r = e.trim();
                                        return "" === r
                                            ? "unknown"
                                            : null != w[r]
                                              ? w[r]
                                              : r.startsWith("300") || r.startsWith("600")
                                                ? "generic-challenge-error"
                                                : "unknown";
                                    })(r),
                                ),
                                l >= 3 ||
                                    (l++,
                                    setTimeout(() => {
                                        e ||
                                            null == f.current ||
                                            null == window.turnstile ||
                                            window.turnstile.reset(f.current);
                                    }, 3e3),
                                    !0)
                            ),
                            "expired-callback": () => {
                                h.current.onExpire?.();
                            },
                        })),
                            h.current.onLoad?.();
                    })
                    .catch(() => {
                        e || h.current.onError?.("script-error");
                    }),
                () => {
                    (e = !0),
                        null != f.current &&
                            null != window.turnstile &&
                            (window.turnstile.remove(f.current), (f.current = null));
                }
            );
        }, [r, t, n]);
    let p = T[n ?? "normal"];
    return (0, l.jsx)("div", { ref: d, style: p });
}
var S = t(731738),
    j = t(319400),
    H = t(807393),
    L = t(700525);
let N = new Set([
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
    M = (e) => {
        let {
                captchaService: r = j.MS.RECAPTCHA,
                sitekey: t,
                rqdata: n,
                onRender: i,
                onVerify: a,
                onError: c,
                onOpen: u,
                onClose: s,
                onChalExpired: d,
                size: h,
                userflow: p,
                ...w
            } = e,
            b = o.useRef(null),
            A = (0, y.A)(),
            [v, g] = o.useState(!1),
            _ = o.useCallback(
                (e) => {
                    f.default.track(C.HAw.CAPTCHA_EVENT, {
                        captcha_event_name: e,
                        captcha_service: r,
                        sitekey: t,
                        captcha_flow_key: A,
                    });
                },
                [A, r, t],
            ),
            x = o.useCallback(
                (e, t) => {
                    let n = [`event_name:${e}`, `captcha_service:${r}`];
                    null != t && n.push(`error_code:${t}`), H.A.increment({ name: S.K.CAPTCHA_EVENT, tags: n });
                },
                [r],
            ),
            R = o.useCallback(() => {
                r === j.MS.HCAPTCHA &&
                    (null != n && "" !== n && null != b.current && b.current?.setData({ rqdata: n }),
                    "invisible" === h && null != b.current && b.current?.execute());
            }, [n, b, h, r]),
            T = o.useCallback(() => {
                v || (_("initial-load"), x("initial-load"), g(!0)), R();
            }, [x, v, _, R]);
        o.useEffect(() => {
            R();
        }, [R]),
            o.useEffect(() => {
                T();
            }, [T]);
        let M = o.useCallback(
                (e) => {
                    _("error"), x("error", null != e && N.has(e) ? e : "unknown"), R(), c?.();
                },
                [_, x, R, c],
            ),
            I = o.useCallback(
                (e) => {
                    _("verify"), x("verify"), a(e);
                },
                [x, a, _],
            ),
            O = o.useCallback(() => {
                _("render"), (0, E.emitCaptchaDistributionMetric)(p), i?.();
            }, [i, _, p]),
            D = o.useCallback(() => {
                _("open"), x("open"), (0, E.emitCaptchaDistributionMetric)(p), u?.();
            }, [x, u, _, p]),
            V = o.useCallback(() => {
                _("close"), x("cancel"), s?.(), R();
            }, [s, _, x, R]),
            z = o.useCallback(() => {
                _("chal-expire"), x("chal-expire"), d?.();
            }, [d, _, x]);
        return ((null == t || "" === t) && (t = C._Ak), r === j.MS.RECAPTCHA)
            ? (0, l.jsx)(m.A, { ...w, onLoad: T, onRender: O, onVerify: I, onError: M, sitekey: t })
            : r === j.MS.RECAPTCHA_ENTERPRISE
              ? (0, l.jsx)(L.d, { ...w, onLoad: T, onRender: O, onVerify: I, onError: M, sitekey: t, action: p })
              : r === j.MS.HCAPTCHA
                ? (0, l.jsx)(k.A, {
                      ref: b,
                      ...w,
                      sitekey: t,
                      onLoad: T,
                      onError: M,
                      onVerify: I,
                      onChalExpired: z,
                      onOpen: D,
                      onClose: V,
                      size: h,
                      reCaptchaCompat: !1,
                  })
                : r === j.MS.TURNSTILE
                  ? (0, l.jsx)(P, {
                        sitekey: t,
                        theme: w.theme,
                        size: h,
                        onLoad: T,
                        onVerify: I,
                        onError: M,
                        onExpire: z,
                    })
                  : (0, l.jsx)(m.A, { ...w, sitekey: t, onLoad: T, onRender: O, onVerify: I, onError: M });
    };
var I = t(375708),
    O = t(846762);
let D = new Set([s.ip.ENTERING, s.ip.ENTERED]);
function V(e) {
    let {
            onClose: r,
            onCaptchaVerify: t,
            onReject: n,
            transitionState: i,
            headerText: a,
            bodyText: s,
            rqtoken: k,
            serveInvisible: m,
            ...y
        } = e,
        w = (function (e) {
            let { onReject: r, analyticsType: t = "Guild Join Captcha" } = e,
                n = o.useRef(!0);
            return (
                (0, p.Ay)(() => () => {
                    n.current && r?.(E.CaptchaError.CANCEL);
                }),
                o.useEffect(
                    () => (
                        f.default.track(C.HAw.OPEN_MODAL, { type: t }),
                        () => {
                            n.current && f.default.track(C.HAw.MODAL_DISMISSED, { type: t });
                        }
                    ),
                    [t],
                ),
                () => {
                    n.current = !1;
                }
            );
        })({ onReject: n });
    if (
        (o.useEffect(() => {
            h._.subscribe(C.jej.LAYER_POP_ESCAPE_KEY, r);
        }, [r]),
        o.useEffect(() => {
            f.default.track(C.HAw.OPEN_MODAL, { type: "Captcha Modal" });
        }, []),
        null == i || !D.has(i))
    )
        return null;
    let b = (0, l.jsxs)("div", {
        className: c()(O.GC, O.P),
        children: [
            m && (0, l.jsx)(d.y, { type: d.y.Type.SPINNING_CIRCLE }),
            (0, l.jsx)(M, {
                size: m ? "invisible" : void 0,
                onVerify: (e) => {
                    w(), t(e, k), r();
                },
                onClose: m ? r : void 0,
                ...y,
            }),
        ],
    });
    return (0, l.jsx)(u.k, {
        transitionState: i,
        onClose: r,
        size: "sm",
        gradientColor: "blue",
        graphic: { type: "image", src: "/assets/a1c385fb82c39bab.svg" },
        title: a ?? I.intl.string(I.t.FpoiHe),
        subtitle: s ?? I.intl.string(I.t["/CidxO"]),
        children: b,
    });
}
