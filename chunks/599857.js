n.d(t, {
    Z: () => p,
    _: () => u
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(29978),
    a = n(780384),
    o = n(481060),
    s = n(756148),
    c = n(981631);
function u(e) {
    let { sitekey: t, action: n, onVerify: l } = e,
        [a, c] = i.useState(!1),
        u = i.useCallback(
            (e) => {
                l(e);
            },
            [l]
        ),
        d = i.useCallback(() => {
            var e, r, i;
            null == (i = window) ||
                null == (r = i.grecaptcha) ||
                null == (e = r.enterprise) ||
                e.ready(async () => {
                    var e;
                    u(await (null == (e = window) ? void 0 : e.grecaptcha).enterprise.execute(t, null != n ? { action: n } : void 0)), c(!1);
                });
        }, [t, n, u]),
        p = i.useCallback(() => {
            c(!0), s.I.loadRecaptchaScript(t, d);
        }, [t, d]);
    return (
        i.useEffect(() => {
            a || p();
        }, [a, p]),
        i.useEffect(
            () => () => {
                document.querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge').forEach((e) => {
                    var t;
                    return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
                }),
                    null != window.grecaptcha && delete window.grecaptcha;
            },
            []
        ),
        (0, r.jsx)(o.$jN, {})
    );
}
let d = (e) => {
    var t,
        n,
        { theme: i } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['theme']);
    let s = (0, a.wj)(i) ? 'dark' : 'light';
    return (0, r.jsx)(
        l.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({ sitekey: c.OL7 }, o)),
        (n = n = { theme: s }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
};
(d.Themes = {
    LIGHT: 'light',
    DARK: 'dark'
}),
    (d.Sizes = {
        COMPACT: 'compact',
        NORMAL: 'normal',
        INVISIBLE: 'invisible'
    });
let p = d;
