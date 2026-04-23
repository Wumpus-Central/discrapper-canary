n.d(t, { A: () => h, d: () => d });
var i = n(627968),
    s = n(64700),
    l = n(3745),
    a = n(462887),
    r = n(289873),
    o = n(954571);
class c {
    static getSiteKey(e) {
        return null != e
            ? e
            : "production" === window.GLOBAL_ENV.PROJECT_ENV
              ? "6LeYqFcqAAAAAD6iZesmNgVulsO4PkpBdr6NVG6M"
              : "6LdtfVMqAAAAAMurhtf2pDhK0oqD4eLqeQPh025y";
    }
    static loadRecaptchaScript(e, t, n) {
        if (null != document.getElementById(`recaptcha-script-${this.getSiteKey(e)}`)) {
            null != t && (n?.("recaptcha-element-exists-callback"), t());
            return;
        }
        let i = document.createElement("script");
        (i.src = `https://www.google.com/recaptcha/enterprise.js?render=${this.getSiteKey(e)}`),
            (i.id = `recaptcha-script-${this.getSiteKey(e)}`),
            (i.async = !0),
            (i.defer = !0),
            document.body.appendChild(i),
            null != t &&
                (i.onload = () => {
                    n?.("recaptcha-script-onload-callback"), t();
                });
    }
}
var u = n(652215);
function d(e) {
    let { sitekey: t, action: n, onVerify: l } = e,
        [a, d] = s.useState("uninitialized"),
        p = s.useCallback((e) => {
            o.default.track(u.HAw.RECAPTCHA_MODAL_EVENT, { recaptcha_event_name: e });
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
                    d("loaded");
            });
        }, [t, n, h, p]),
        _ = s.useCallback(() => {
            d("running"), p("recaptcha-loading"), c.loadRecaptchaScript(t, m, p);
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
    return (0, i.jsx)(l.A, { sitekey: u._Ak, ...n, theme: s });
};
(p.Themes = { LIGHT: "light", DARK: "dark" }),
    (p.Sizes = { COMPACT: "compact", NORMAL: "normal", INVISIBLE: "invisible" });
let h = p;
