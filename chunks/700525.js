"use strict";
n.d(t, { A: () => E, d: () => u });
var i = n(627968),
    r = n(64700),
    a = n(3745),
    s = n(462887),
    l = n(289873),
    o = n(174459);
class d {
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
var c = n(652215);
function u(e) {
    let { sitekey: t, action: n, onVerify: a } = e,
        [s, u] = r.useState("uninitialized"),
        _ = r.useCallback((e) => {
            o.default.track(c.HAw.RECAPTCHA_MODAL_EVENT, { recaptcha_event_name: e });
        }, []),
        E = r.useCallback(
            (e) => {
                _("handle-verify"), a(e);
            },
            [a, _],
        ),
        A = r.useCallback(() => {
            window?.grecaptcha?.enterprise?.ready(async () => {
                _("recaptcha-ready"),
                    E(await (window?.grecaptcha).enterprise.execute(t, null != n ? { action: n } : void 0)),
                    u("loaded");
            });
        }, [t, n, E, _]),
        h = r.useCallback(() => {
            u("running"), _("recaptcha-loading"), d.loadRecaptchaScript(t, A, _);
        }, [t, A, _]);
    return (
        r.useEffect(() => {
            "uninitialized" === s && h();
        }, [h, s]),
        r.useEffect(
            () => () => {
                _("recaptcha-unloading"),
                    document
                        .querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge')
                        .forEach((e) => e.parentNode?.removeChild(e)),
                    null != window.grecaptcha && delete window.grecaptcha;
            },
            [_],
        ),
        (0, i.jsx)(l.y, {})
    );
}
function _(e) {
    let { theme: t, ...n } = e,
        r = (0, s.M)(t) ? "dark" : "light";
    return (0, i.jsx)(a.A, { sitekey: c._Ak, ...n, theme: r });
}
(_.Themes = { LIGHT: "light", DARK: "dark" }),
    (_.Sizes = { COMPACT: "compact", NORMAL: "normal", INVISIBLE: "invisible" });
let E = _;
