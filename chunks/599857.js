n.d(t, {
    Z: () => p,
    _: () => u,
}),
    n(388685);
var a = n(951288),
    i = n(647438),
    r = n(240666),
    l = n(780384),
    s = n(481060),
    o = n(626135),
    c = n(756148),
    d = n(981631);
function u(e) {
    let { sitekey: t, action: n, onVerify: r } = e,
        [l, u] = i.useState("uninitialized"),
        m = i.useCallback((e) => {
            o.default.track(d.rMx.RECAPTCHA_MODAL_EVENT, { recaptcha_event_name: e });
        }, []),
        p = i.useCallback(
            (e) => {
                m("handle-verify"), r(e);
            },
            [r, m],
        ),
        h = i.useCallback(() => {
            var e, a, i;
            null == (i = window) ||
                null == (a = i.grecaptcha) ||
                null == (e = a.enterprise) ||
                e.ready(async () => {
                    var e;
                    m("recaptcha-ready"),
                        p(
                            await (null == (e = window) ? void 0 : e.grecaptcha).enterprise.execute(
                                t,
                                null != n ? { action: n } : void 0,
                            ),
                        ),
                        u("loaded");
                });
        }, [t, n, p, m]),
        x = i.useCallback(() => {
            u("running"), m("recaptcha-loading"), c.I.loadRecaptchaScript(t, h, m);
        }, [t, h, m]);
    return (
        i.useEffect(() => {
            "uninitialized" === l && x();
        }, [x, l]),
        i.useEffect(
            () => () => {
                m("recaptcha-unloading"),
                    document
                        .querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge')
                        .forEach((e) => {
                            var t;
                            return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
                        }),
                    null != window.grecaptcha && delete window.grecaptcha;
            },
            [m],
        ),
        (0, a.jsx)(s.$jN, {})
    );
}
let m = (e) => {
    var t,
        n,
        { theme: i } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        i = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (a = 0; a < r.length; a++)
                    (n = r[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["theme"]);
    let o = (0, l.wj)(i) ? "dark" : "light";
    return (0, a.jsx)(
        r.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    a.forEach(function (t) {
                        var a;
                        (a = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: a,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = a);
                    });
            }
            return e;
        })({ sitekey: d.OL7 }, s)),
        (n = n = { theme: o }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
};
(m.Themes = {
    LIGHT: "light",
    DARK: "dark",
}),
    (m.Sizes = {
        COMPACT: "compact",
        NORMAL: "normal",
        INVISIBLE: "invisible",
    });
let p = m;
