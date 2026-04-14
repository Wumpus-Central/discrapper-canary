let r, a;
n.d(t, { A: () => y });
var i = n(627968),
    c = n(64700);
let o = "turnstile-script",
    s = "turnstileOnLoad",
    d = "unloaded",
    l = p();
function p() {
    return new Promise((e, t) => {
        (r = e), (a = t);
    });
}
function h() {
    Reflect.deleteProperty(window, s);
}
function u() {
    "ready" !== d && null != window.turnstile && ((d = "ready"), h(), r?.());
}
let f = {
    normal: { width: 300, height: 65 },
    compact: { width: 150, height: 140 },
    invisible: { width: 0, height: 0, overflow: "hidden" },
};
function y(e) {
    let { sitekey: t, theme: n, size: r, onLoad: y, onVerify: m, onError: v, onExpire: C } = e,
        E = c.useRef(null),
        b = c.useRef(null),
        A = c.useRef({ onLoad: y, onVerify: m, onError: v, onExpire: C });
    (A.current = { onLoad: y, onVerify: m, onError: v, onExpire: C }),
        c.useEffect(() => {
            let e = !1;
            return (
                (function () {
                    if (null != window.turnstile) return u(), l;
                    if (
                        ("unloaded" === d &&
                            ((d = "loading"),
                            Object.assign(window, {
                                [s]() {
                                    u();
                                },
                            })),
                        null == document.getElementById(o))
                    ) {
                        let e = document.createElement("script");
                        (e.src = `https://challenges.cloudflare.com/turnstile/v0/api.js?onload=${s}&render=explicit`),
                            (e.id = o),
                            (e.async = !0),
                            (e.defer = !0),
                            (e.onerror = () => {
                                !(function (e) {
                                    if ("ready" === d) return;
                                    (d = "unloaded"), h(), document.getElementById(o)?.remove();
                                    let t = a;
                                    (l = p()), t?.(e ?? Error("Turnstile script failed to load"));
                                })(Error("Turnstile script failed to load"));
                            }),
                            document.body.appendChild(e);
                    }
                    return l;
                })()
                    .then(() => {
                        if (e || null == E.current || null == window.turnstile) return;
                        let a = "invisible" === r ? "normal" : (r ?? "normal");
                        (b.current = window.turnstile.render(E.current, {
                            sitekey: t,
                            theme: n ?? "auto",
                            size: a,
                            callback: (e) => {
                                A.current.onVerify(e);
                            },
                            "error-callback": () => {
                                A.current.onError?.();
                            },
                            "expired-callback": () => {
                                A.current.onExpire?.();
                            },
                        })),
                            A.current.onLoad?.();
                    })
                    .catch(() => {
                        e || A.current.onError?.();
                    }),
                () => {
                    (e = !0),
                        null != b.current &&
                            null != window.turnstile &&
                            (window.turnstile.remove(b.current), (b.current = null));
                }
            );
        }, [t, n, r]);
    let w = f[r ?? "normal"];
    return (0, i.jsx)("div", { ref: E, style: w });
}
