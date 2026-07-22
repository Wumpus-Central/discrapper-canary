a.d(t, { A: () => o, d: () => u });
var c = a(627968),
    r = a(64700),
    i = a(3745),
    l = a(462887),
    n = a(289873),
    s = a(174459);
class d {
    static getSiteKey(e) {
        return null != e
            ? e
            : "production" === window.GLOBAL_ENV.PROJECT_ENV
              ? "6LeYqFcqAAAAAD6iZesmNgVulsO4PkpBdr6NVG6M"
              : "6LdtfVMqAAAAAMurhtf2pDhK0oqD4eLqeQPh025y";
    }
    static loadRecaptchaScript(e, t, a) {
        if (null != document.getElementById(`recaptcha-script-${this.getSiteKey(e)}`)) {
            null != t && (a?.("recaptcha-element-exists-callback"), t());
            return;
        }
        let c = document.createElement("script");
        (c.src = `https://www.google.com/recaptcha/enterprise.js?render=${this.getSiteKey(e)}`),
            (c.id = `recaptcha-script-${this.getSiteKey(e)}`),
            (c.async = !0),
            (c.defer = !0),
            document.body.appendChild(c),
            null != t &&
                (c.onload = () => {
                    a?.("recaptcha-script-onload-callback"), t();
                });
    }
}
var p = a(652215);
function u(e) {
    let { sitekey: t, action: a, onVerify: i } = e,
        [l, u] = r.useState("uninitialized"),
        h = r.useCallback((e) => {
            s.default.track(p.HAw.RECAPTCHA_MODAL_EVENT, { recaptcha_event_name: e });
        }, []),
        o = r.useCallback(
            (e) => {
                h("handle-verify"), i(e);
            },
            [i, h],
        ),
        A = r.useCallback(() => {
            window?.grecaptcha?.enterprise?.ready(async () => {
                h("recaptcha-ready"),
                    o(await (window?.grecaptcha).enterprise.execute(t, null != a ? { action: a } : void 0)),
                    u("loaded");
            });
        }, [t, a, o, h]),
        g = r.useCallback(() => {
            u("running"), h("recaptcha-loading"), d.loadRecaptchaScript(t, A, h);
        }, [t, A, h]);
    return (
        r.useEffect(() => {
            "uninitialized" === l && g();
        }, [g, l]),
        r.useEffect(
            () => () => {
                h("recaptcha-unloading"),
                    document
                        .querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge')
                        .forEach((e) => e.parentNode?.removeChild(e)),
                    null != window.grecaptcha && delete window.grecaptcha;
            },
            [h],
        ),
        (0, c.jsx)(n.y, {})
    );
}
function h(e) {
    let { theme: t, ...a } = e,
        r = (0, l.M)(t) ? "dark" : "light";
    return (0, c.jsx)(i.A, { sitekey: p._Ak, ...a, theme: r });
}
(h.Themes = { LIGHT: "light", DARK: "dark" }),
    (h.Sizes = { COMPACT: "compact", NORMAL: "normal", INVISIBLE: "invisible" });
let o = 88245 != a.j ? h : null;
