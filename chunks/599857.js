(n.d(t, {
    Z: () => h,
    _: () => d
}),
    n(388685));
var r = n(255367),
    a = n(73800),
    i = n(15155),
    o = n(780384),
    c = n(481060),
    s = n(626135),
    l = n(756148),
    p = n(981631);
function d(e) {
    let { sitekey: t, action: n, onVerify: i } = e,
        [o, d] = a.useState('uninitialized'),
        u = a.useCallback((e) => {
            s.default.track(p.rMx.RECAPTCHA_MODAL_EVENT, { recaptcha_event_name: e });
        }, []),
        h = a.useCallback(
            (e) => {
                (u('handle-verify'), i(e));
            },
            [i, u]
        ),
        f = a.useCallback(() => {
            var e, r, a;
            null == (a = window) ||
                null == (r = a.grecaptcha) ||
                null == (e = r.enterprise) ||
                e.ready(async () => {
                    var e;
                    (u('recaptcha-ready'), h(await (null == (e = window) ? void 0 : e.grecaptcha).enterprise.execute(t, null != n ? { action: n } : void 0)), d('loaded'));
                });
        }, [t, n, h, u]),
        y = a.useCallback(() => {
            (d('running'), u('recaptcha-loading'), l.I.loadRecaptchaScript(t, f, u));
        }, [t, f, u]);
    return (
        a.useEffect(() => {
            'uninitialized' === o && y();
        }, [y, o]),
        a.useEffect(
            () => () => {
                (u('recaptcha-unloading'),
                    document.querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge').forEach((e) => {
                        var t;
                        return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
                    }),
                    null != window.grecaptcha && delete window.grecaptcha);
            },
            [u]
        ),
        (0, r.jsx)(c.$jN, {})
    );
}
let u = (e) => {
    var t,
        n,
        { theme: a } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
            }
            return a;
        })(e, ['theme']);
    let s = (0, o.wj)(a) ? 'dark' : 'light';
    return (0, r.jsx)(
        i.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        ((r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r));
                    }));
            }
            return e;
        })({ sitekey: p.OL7 }, c)),
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
((u.Themes = {
    LIGHT: 'light',
    DARK: 'dark'
}),
    (u.Sizes = {
        COMPACT: 'compact',
        NORMAL: 'normal',
        INVISIBLE: 'invisible'
    }));
let h = u;
