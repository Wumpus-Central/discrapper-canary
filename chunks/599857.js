r.d(t, {
    Z: () => u,
    _: () => l
}),
    r(47120);
var n = r(200651),
    a = r(192379),
    i = r(29978),
    o = r(780384),
    c = r(481060),
    s = r(756148),
    p = r(981631);
function l(e) {
    let { sitekey: t, action: r, onVerify: i } = e,
        [o, p] = a.useState(!1),
        l = a.useCallback(
            (e) => {
                i(e);
            },
            [i]
        ),
        d = a.useCallback(() => {
            var e, n, a;
            null === (a = window) ||
                void 0 === a ||
                null === (n = a.grecaptcha) ||
                void 0 === n ||
                null === (e = n.enterprise) ||
                void 0 === e ||
                e.ready(async () => {
                    var e;
                    l(await (null === (e = window) || void 0 === e ? void 0 : e.grecaptcha).enterprise.execute(t, null != r ? { action: r } : void 0)), p(!1);
                });
        }, [t, r, l]),
        u = a.useCallback(() => {
            p(!0), s.I.loadRecaptchaScript(t, d);
        }, [t, d]);
    return (
        a.useEffect(() => {
            o || u();
        }, [o, u]),
        a.useEffect(
            () => () => {
                document.querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge').forEach((e) => {
                    var t;
                    return null === (t = e.parentNode) || void 0 === t ? void 0 : t.removeChild(e);
                }),
                    null != window.grecaptcha && delete window.grecaptcha;
            },
            []
        ),
        (0, n.jsx)(c.$jN, {})
    );
}
let d = (e) => {
    var t,
        r,
        { theme: a } = e,
        c = (function (e, t) {
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
    let s = (0, o.wj)(a) ? 'dark' : 'light';
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
        })({ sitekey: p.OL7 }, c)),
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
(d.Themes = {
    LIGHT: 'light',
    DARK: 'dark'
}),
    (d.Sizes = {
        COMPACT: 'compact',
        NORMAL: 'normal',
        INVISIBLE: 'invisible'
    });
let u = 12633 == r.j ? d : null;
