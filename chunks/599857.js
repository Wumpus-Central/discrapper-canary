(n.d(t, {
    Z: () => p,
    _: () => d
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(15155),
    l = n(780384),
    o = n(481060),
    c = n(626135),
    s = n(756148),
    u = n(981631);
function d(e) {
    let { sitekey: t, action: n, onVerify: a } = e,
        [l, d] = i.useState('uninitialized'),
        f = i.useCallback((e) => {
            c.default.track(u.rMx.RECAPTCHA_MODAL_EVENT, { recaptcha_event_name: e });
        }, []),
        p = i.useCallback(
            (e) => {
                (f('handle-verify'), a(e));
            },
            [a, f]
        ),
        m = i.useCallback(() => {
            var e, r, i;
            null == (i = window) ||
                null == (r = i.grecaptcha) ||
                null == (e = r.enterprise) ||
                e.ready(async () => {
                    var e;
                    (f('recaptcha-ready'), p(await (null == (e = window) ? void 0 : e.grecaptcha).enterprise.execute(t, null != n ? { action: n } : void 0)), d('loaded'));
                });
        }, [t, n, p, f]),
        y = i.useCallback(() => {
            (d('running'), f('recaptcha-loading'), s.I.loadRecaptchaScript(t, m, f));
        }, [t, m, f]);
    return (
        i.useEffect(() => {
            'uninitialized' === l && y();
        }, [y, l]),
        i.useEffect(
            () => () => {
                (f('recaptcha-unloading'),
                    document.querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge').forEach((e) => {
                        var t;
                        return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
                    }),
                    null != window.grecaptcha && delete window.grecaptcha);
            },
            [f]
        ),
        (0, r.jsx)(o.$jN, {})
    );
}
let f = (e) => {
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
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['theme']);
    let c = (0, l.wj)(i) ? 'dark' : 'light';
    return (0, r.jsx)(
        a.Z,
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
        })({ sitekey: u.OL7 }, o)),
        (n = n = { theme: c }),
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
((f.Themes = {
    LIGHT: 'light',
    DARK: 'dark'
}),
    (f.Sizes = {
        COMPACT: 'compact',
        NORMAL: 'normal',
        INVISIBLE: 'invisible'
    }));
let p = f;
