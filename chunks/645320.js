let n, l;
t.d(r, { default: () => D });
var i = t(627968),
    a = t(64700),
    o = t(503698),
    c = t.n(o),
    u = t(772707),
    s = t(231723),
    d = t(289873),
    f = t(954571),
    p = t(625494),
    h = t(964486),
    E = t(888548),
    C = t(652215);
t(321073);
var w = t(411722),
    y = t(3745),
    k = t(132500);
let m = "turnstile-script",
    A = "turnstileOnLoad",
    b = "unloaded",
    v = _();
function _() {
    return new Promise((e, r) => {
        (n = e), (l = r);
    });
}
function x() {
    Reflect.deleteProperty(window, A);
}
function R() {
    "ready" !== b && null != window.turnstile && ((b = "ready"), x(), n?.());
}
let g = {
    normal: { width: 300, height: 65 },
    compact: { width: 150, height: 140 },
    invisible: { width: 0, height: 0, overflow: "hidden" },
};
function T(e) {
    let { sitekey: r, theme: t, size: n, onLoad: o, onVerify: c, onError: u, onExpire: s } = e,
        d = a.useRef(null),
        f = a.useRef(null),
        p = a.useRef({ onLoad: o, onVerify: c, onError: u, onExpire: s });
    (p.current = { onLoad: o, onVerify: c, onError: u, onExpire: s }),
        a.useEffect(() => {
            let e = !1,
                i = 0;
            return (
                (function () {
                    if (null != window.turnstile) return R(), v;
                    if (
                        ("unloaded" === b &&
                            ((b = "loading"),
                            Object.assign(window, {
                                [A]() {
                                    R();
                                },
                            })),
                        null == document.getElementById(m))
                    ) {
                        let e = document.createElement("script");
                        (e.src = `https://challenges.cloudflare.com/turnstile/v0/api.js?onload=${A}&render=explicit`),
                            (e.id = m),
                            (e.async = !0),
                            (e.defer = !0),
                            (e.onerror = () => {
                                !(function (e) {
                                    if ("ready" === b) return;
                                    (b = "unloaded"), x(), document.getElementById(m)?.remove();
                                    let r = l;
                                    (v = _()), r?.(e ?? Error("Turnstile script failed to load"));
                                })(Error("Turnstile script failed to load"));
                            }),
                            document.body.appendChild(e);
                    }
                    return v;
                })()
                    .then(() => {
                        if (e || null == d.current || null == window.turnstile) return;
                        let l = "invisible" === n ? "normal" : (n ?? "normal");
                        (f.current = window.turnstile.render(d.current, {
                            sitekey: r,
                            theme: t ?? "auto",
                            size: l,
                            retry: "never",
                            callback: (e) => {
                                p.current.onVerify(e);
                            },
                            "error-callback": () => (
                                p.current.onError?.(),
                                i >= 3 ||
                                    (i++,
                                    setTimeout(() => {
                                        e ||
                                            null == f.current ||
                                            null == window.turnstile ||
                                            window.turnstile.reset(f.current);
                                    }, 3e3),
                                    !0)
                            ),
                            "expired-callback": () => {
                                p.current.onExpire?.();
                            },
                        })),
                            p.current.onLoad?.();
                    })
                    .catch(() => {
                        e || p.current.onError?.();
                    }),
                () => {
                    (e = !0),
                        null != f.current &&
                            null != window.turnstile &&
                            (window.turnstile.remove(f.current), (f.current = null));
                }
            );
        }, [r, t, n]);
    let h = g[n ?? "normal"];
    return (0, i.jsx)("div", { ref: d, style: h });
}
var P = t(731738),
    S = t(319400),
    j = t(831062),
    H = t(700525);
let L = new Set([
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
    ]),
    N = (e) => {
        let {
                captchaService: r = S.MS.RECAPTCHA,
                sitekey: t,
                rqdata: n,
                onRender: l,
                onVerify: o,
                onError: c,
                onOpen: u,
                onClose: s,
                onChalExpired: d,
                size: p,
                userflow: h,
                ...m
            } = e,
            A = a.useRef(null),
            b = (0, k.A)(),
            [v, _] = a.useState(!1),
            x = a.useCallback(
                (e) => {
                    f.default.track(C.HAw.CAPTCHA_EVENT, {
                        captcha_event_name: e,
                        captcha_service: r,
                        sitekey: t,
                        captcha_flow_key: b,
                    });
                },
                [b, r, t],
            ),
            R = a.useCallback(
                (e, t) => {
                    let n = [`event_name:${e}`, `captcha_service:${r}`];
                    null != t && n.push(`error_code:${t}`), j.A.increment({ name: P.K.CAPTCHA_EVENT, tags: n });
                },
                [r],
            ),
            g = a.useCallback(() => {
                r === S.MS.HCAPTCHA &&
                    (null != n && "" !== n && null != A.current && A.current?.setData({ rqdata: n }),
                    "invisible" === p && null != A.current && A.current?.execute());
            }, [n, A, p, r]),
            N = a.useCallback(() => {
                v || (x("initial-load"), R("initial-load"), _(!0)), g();
            }, [R, v, x, g]);
        a.useEffect(() => {
            g();
        }, [g]),
            a.useEffect(() => {
                N();
            }, [N]);
        let M = a.useCallback(
                (e) => {
                    x("error"), R("error", null != e && L.has(e) ? e : "unknown"), g(), c?.();
                },
                [x, R, g, c],
            ),
            I = a.useCallback(
                (e) => {
                    x("verify"), R("verify"), o(e);
                },
                [R, o, x],
            ),
            O = a.useCallback(() => {
                x("render"), (0, E.emitCaptchaDistributionMetric)(h), l?.();
            }, [l, x, h]),
            D = a.useCallback(() => {
                x("open"), R("open"), (0, E.emitCaptchaDistributionMetric)(h), u?.();
            }, [R, u, x, h]),
            V = a.useCallback(() => {
                x("close"), R("cancel"), s?.(), g();
            }, [s, x, R, g]),
            z = a.useCallback(() => {
                x("chal-expire"), R("chal-expire"), d?.();
            }, [d, x, R]);
        return ((null == t || "" === t) && (t = C._Ak), r === S.MS.RECAPTCHA)
            ? (0, i.jsx)(y.A, { ...m, onLoad: N, onRender: O, onVerify: I, onError: M, sitekey: t })
            : r === S.MS.RECAPTCHA_ENTERPRISE
              ? (0, i.jsx)(H.d, { ...m, onLoad: N, onRender: O, onVerify: I, onError: M, sitekey: t, action: h })
              : r === S.MS.HCAPTCHA
                ? (0, i.jsx)(w.A, {
                      ref: A,
                      ...m,
                      sitekey: t,
                      onLoad: N,
                      onError: M,
                      onVerify: I,
                      onChalExpired: z,
                      onOpen: D,
                      onClose: V,
                      size: p,
                      reCaptchaCompat: !1,
                  })
                : r === S.MS.TURNSTILE
                  ? (0, i.jsx)(T, {
                        sitekey: t,
                        theme: m.theme,
                        size: p,
                        onLoad: N,
                        onVerify: I,
                        onError: M,
                        onExpire: z,
                    })
                  : (0, i.jsx)(y.A, { ...m, sitekey: t, onLoad: N, onRender: O, onVerify: I, onError: M });
    };
var M = t(985018),
    I = t(846762);
let O = new Set([s.ip.ENTERING, s.ip.ENTERED]);
function D(e) {
    let {
            onClose: r,
            onCaptchaVerify: t,
            onReject: n,
            transitionState: l,
            headerText: o,
            bodyText: s,
            rqtoken: w,
            serveInvisible: y,
            ...k
        } = e,
        m = (function (e) {
            let { onReject: r, analyticsType: t = "Guild Join Captcha" } = e,
                n = a.useRef(!0);
            return (
                (0, h.Ay)(() => () => {
                    n.current && r?.(E.CaptchaError.CANCEL);
                }),
                a.useEffect(
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
        (a.useEffect(() => {
            p._.subscribe(C.jej.LAYER_POP_ESCAPE_KEY, r);
        }, [r]),
        a.useEffect(() => {
            f.default.track(C.HAw.OPEN_MODAL, { type: "Captcha Modal" });
        }, []),
        null == l || !O.has(l))
    )
        return null;
    let A = (0, i.jsxs)("div", {
        className: c()(I.GC, I.P),
        children: [
            y && (0, i.jsx)(d.y, { type: d.y.Type.SPINNING_CIRCLE }),
            (0, i.jsx)(N, {
                size: y ? "invisible" : void 0,
                onVerify: (e) => {
                    m(), t(e, w), r();
                },
                onClose: y ? r : void 0,
                ...k,
            }),
        ],
    });
    return (0, i.jsx)(u.k, {
        transitionState: l,
        onClose: r,
        size: "sm",
        gradientColor: "blue",
        graphic: { type: "image", src: "/assets/a1c385fb82c39bab.svg" },
        title: o ?? M.intl.string(M.t.FpoiHe),
        subtitle: s ?? M.intl.string(M.t["/CidxO"]),
        children: A,
    });
}
