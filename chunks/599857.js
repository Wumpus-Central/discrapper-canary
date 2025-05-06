n.d(t, {
    Z: () => h,
    _: () => d
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(15155),
    a = n(780384),
    o = n(481060),
    s = n(626135),
    c = n(756148),
    u = n(981631);
function d(e) {
    let { sitekey: t, action: n, onVerify: l } = e,
        [a, d] = i.useState('uninitialized'),
        p = i.useCallback((e) => {
            s.default.track(u.rMx.RECAPTCHA_MODAL_EVENT, { recaptcha_event_name: e });
        }, []),
        h = i.useCallback(
            (e) => {
                p('handle-verify'), l(e);
            },
            [l, p]
        ),
        f = i.useCallback(() => {
            var e, r, i;
            null == (i = window) ||
                null == (r = i.grecaptcha) ||
                null == (e = r.enterprise) ||
                e.ready(async () => {
                    var e;
                    p('recaptcha-ready'), h(await (null == (e = window) ? void 0 : e.grecaptcha).enterprise.execute(t, null != n ? { action: n } : void 0)), d('loaded');
                });
        }, [t, n, h, p]),
        g = i.useCallback(() => {
            d('running'), p('recaptcha-loading'), c.I.loadRecaptchaScript(t, f, p);
        }, [t, f, p]);
    return (
        i.useEffect(() => {
            'uninitialized' === a && g();
        }, [g, a]),
        i.useEffect(
            () => () => {
                p('recaptcha-unloading'),
                    document.querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge').forEach((e) => {
                        var t;
                        return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
                    }),
                    null != window.grecaptcha && delete window.grecaptcha;
            },
            [p]
        ),
        (0, r.jsx)(o.$jN, {})
    );
}
let p = (e) => {
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
        })({ sitekey: u.OL7 }, o)),
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
(p.Themes = {
    LIGHT: 'light',
    DARK: 'dark'
}),
    (p.Sizes = {
        COMPACT: 'compact',
        NORMAL: 'normal',
        INVISIBLE: 'invisible'
    });
let h = p;
