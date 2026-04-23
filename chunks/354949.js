n.d(t, { A: () => h, d: () => u });
var i = n(627968),
    s = n(64700),
    l = n(3745),
    a = n(462887),
    r = n(289873),
    o = n(954571),
    d = n(966284),
    c = n(652215);
function u(e) {
    let { sitekey: t, action: n, onVerify: l } = e,
        [a, u] = s.useState("uninitialized"),
        p = s.useCallback((e) => {
            o.default.track(c.HAw.RECAPTCHA_MODAL_EVENT, { recaptcha_event_name: e });
        }, []),
        h = s.useCallback(
            (e) => {
                p("handle-verify"), l(e);
            },
            [l, p],
        ),
        m = s.useCallback(() => {
            window?.grecaptcha?.enterprise?.ready(async () => {
                p("recaptcha-ready"),
                    h(await (window?.grecaptcha).enterprise.execute(t, null != n ? { action: n } : void 0)),
                    u("loaded");
            });
        }, [t, n, h, p]),
        _ = s.useCallback(() => {
            u("running"), p("recaptcha-loading"), d.Z.loadRecaptchaScript(t, m, p);
        }, [t, m, p]);
    return (
        s.useEffect(() => {
            "uninitialized" === a && _();
        }, [_, a]),
        s.useEffect(
            () => () => {
                p("recaptcha-unloading"),
                    document
                        .querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge')
                        .forEach((e) => e.parentNode?.removeChild(e)),
                    null != window.grecaptcha && delete window.grecaptcha;
            },
            [p],
        ),
        (0, i.jsx)(r.y, {})
    );
}
let p = (e) => {
    let { theme: t, ...n } = e,
        s = (0, a.M)(t) ? "dark" : "light";
    return (0, i.jsx)(l.A, { sitekey: c._Ak, ...n, theme: s });
};
(p.Themes = { LIGHT: "light", DARK: "dark" }),
    (p.Sizes = { COMPACT: "compact", NORMAL: "normal", INVISIBLE: "invisible" });
let h = p;
