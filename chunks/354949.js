n.d(t, { A: () => h, d: () => u });
var a = n(627968),
    s = n(64700),
    i = n(3745),
    l = n(582754),
    r = n(397927),
    o = n(954571),
    d = n(966284),
    c = n(652215);
function u(e) {
    let { sitekey: t, action: n, onVerify: i } = e,
        [l, u] = s.useState("uninitialized"),
        m = s.useCallback((e) => {
            o.default.track(c.HAw.RECAPTCHA_MODAL_EVENT, { recaptcha_event_name: e });
        }, []),
        h = s.useCallback(
            (e) => {
                m("handle-verify"), i(e);
            },
            [i, m],
        ),
        x = s.useCallback(() => {
            window?.grecaptcha?.enterprise?.ready(async () => {
                m("recaptcha-ready"),
                    h(await (window?.grecaptcha).enterprise.execute(t, null != n ? { action: n } : void 0)),
                    u("loaded");
            });
        }, [t, n, h, m]),
        p = s.useCallback(() => {
            u("running"), m("recaptcha-loading"), d.Z.loadRecaptchaScript(t, x, m);
        }, [t, x, m]);
    return (
        s.useEffect(() => {
            "uninitialized" === l && p();
        }, [p, l]),
        s.useEffect(
            () => () => {
                m("recaptcha-unloading"),
                    document
                        .querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge')
                        .forEach((e) => e.parentNode?.removeChild(e)),
                    null != window.grecaptcha && delete window.grecaptcha;
            },
            [m],
        ),
        (0, a.jsx)(r.y$y, {})
    );
}
let m = (e) => {
    let { theme: t, ...n } = e,
        s = (0, l.Mw)(t) ? "dark" : "light";
    return (0, a.jsx)(i.A, { sitekey: c._Ak, ...n, theme: s });
};
(m.Themes = { LIGHT: "light", DARK: "dark" }),
    (m.Sizes = { COMPACT: "compact", NORMAL: "normal", INVISIBLE: "invisible" });
let h = m;
