"use strict";
n.d(t, { A: () => f, d: () => d });
var i = n(627968),
    r = n(64700),
    s = n(3745),
    a = n(462887),
    o = n(289873),
    l = n(174459);
class u {
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
function d(e) {
    let { sitekey: t, action: n, onVerify: s } = e,
        [a, d] = r.useState("uninitialized"),
        _ = r.useCallback((e) => {
            l.default.track(c.HAw.RECAPTCHA_MODAL_EVENT, { recaptcha_event_name: e });
        }, []),
        f = r.useCallback(
            (e) => {
                _("handle-verify"), s(e);
            },
            [s, _],
        ),
        h = r.useCallback(() => {
            window?.grecaptcha?.enterprise?.ready(async () => {
                _("recaptcha-ready"),
                    f(await (window?.grecaptcha).enterprise.execute(t, null != n ? { action: n } : void 0)),
                    d("loaded");
            });
        }, [t, n, f, _]),
        p = r.useCallback(() => {
            d("running"), _("recaptcha-loading"), u.loadRecaptchaScript(t, h, _);
        }, [t, h, _]);
    return (
        r.useEffect(() => {
            "uninitialized" === a && p();
        }, [p, a]),
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
        (0, i.jsx)(o.y, {})
    );
}
let _ = (e) => {
    let { theme: t, ...n } = e,
        r = (0, a.M)(t) ? "dark" : "light";
    return (0, i.jsx)(s.A, { sitekey: c._Ak, ...n, theme: r });
};
(_.Themes = { LIGHT: "light", DARK: "dark" }),
    (_.Sizes = { COMPACT: "compact", NORMAL: "normal", INVISIBLE: "invisible" });
let f = _;
