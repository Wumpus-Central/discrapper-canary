n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    a = n(481060),
    l = n(665906),
    s = n(499033),
    o = n(585483),
    c = n(456269),
    d = n(228392),
    u = n(981631),
    m = n(388032),
    h = n(272219);
function g(e) {
    let { channelName: t, guildId: g, tagFilter: f, channel: x } = e,
        p = (0, c.r_)(x),
        b = (0, l.cD)(x),
        j = x.isMediaChannel(),
        v = i.useCallback(() => {
            (0, d.qz)(),
                (0, a.ZDy)(async () => {
                    let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                    return (t) => {
                        var n, i;
                        return (0, r.jsx)(
                            e,
                            ((n = (function (e) {
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
                            })({}, t)),
                            (i = i = { guildId: g }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            n)
                        );
                    };
                });
        }, [g]),
        _ = f.size > 0,
        C = b || p,
        y = !_ && p && !j,
        O = i.useCallback(() => (y ? v() : b ? void o.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE) : (0, u.VqG)()), [v, y, b]);
    return (0, r.jsxs)('div', {
        className: h.container,
        children: [
            (0, r.jsxs)('div', {
                className: h.iconContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: h.icon,
                        children: (0, r.jsx)(a.kBi, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 30,
                            height: 30
                        })
                    }),
                    (0, r.jsx)(s.Z, { className: h.stars })
                ]
            }),
            (0, r.jsx)(a.X6q, {
                className: h.header,
                variant: 'heading-md/semibold',
                children: _ ? m.intl.formatToPlainString(m.t.lvPci4, { numTags: f.size }) : m.intl.string(m.t.PwTMGx)
            }),
            (0, r.jsx)(a.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: _ ? m.intl.formatToPlainString(m.t.AAeye3, { numTags: f.size }) : m.intl.formatToPlainString(m.t.YtsXFB, { channelName: t })
            }),
            C &&
                (0, r.jsxs)(a.zxk, {
                    look: a.zxk.Looks.BLANK,
                    size: a.zxk.Sizes.MIN,
                    color: a.zxk.Colors.GREEN,
                    onClick: O,
                    className: h.cta,
                    innerClassName: h.button,
                    children: [
                        y ? m.intl.string(m.t.DgatTU) : m.intl.string(m.t.wOKE8P),
                        (0, r.jsx)(a.Fbu, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 12
                        })
                    ]
                })
        ]
    });
}
