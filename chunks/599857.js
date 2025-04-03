r.d(t, {
    Z: () => d,
    _: () => l
}),
    r(47120);
var n = r(200651),
    a = r(192379),
    i = r(29978),
    c = r(780384),
    o = r(481060),
    s = r(756148),
    p = r(981631);
function l(e) {
    let { sitekey: t, action: r, onVerify: i } = e,
        [c, p] = a.useState(!1),
        l = a.useCallback(
            (e) => {
                i(e);
            },
            [i]
        ),
        u = a.useCallback(() => {
            var e, n, a;
            null == (a = window) ||
                null == (n = a.grecaptcha) ||
                null == (e = n.enterprise) ||
                e.ready(async () => {
                    var e;
                    l(await (null == (e = window) ? void 0 : e.grecaptcha).enterprise.execute(t, null != r ? { action: r } : void 0)), p(!1);
                });
        }, [t, r, l]),
        d = a.useCallback(() => {
            p(!0), s.I.loadRecaptchaScript(t, u);
        }, [t, u]);
    return (
        a.useEffect(() => {
            c || d();
        }, [c, d]),
        a.useEffect(
            () => () => {
                document.querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge').forEach((e) => {
                    var t;
                    return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
                }),
                    null != window.grecaptcha && delete window.grecaptcha;
            },
            []
        ),
        (0, n.jsx)(o.$jN, {})
    );
}
let u = (e) => {
    var t,
        r,
        { theme: a } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            }
            return a;
        })(e, ['theme']);
    let s = (0, c.wj)(a) ? 'dark' : 'light';
    return (0, n.jsx)(
        i.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({ sitekey: p.OL7 }, o)),
        (r = r = { theme: s }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
};
(u.Themes = {
    LIGHT: 'light',
    DARK: 'dark'
}),
    (u.Sizes = {
        COMPACT: 'compact',
        NORMAL: 'normal',
        INVISIBLE: 'invisible'
    });
let d = 12633 == r.j ? u : null;
