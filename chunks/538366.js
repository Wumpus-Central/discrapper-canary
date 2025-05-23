n.d(t, { Z: () => g });
var r = n(255367),
    l = n(73800),
    i = n(481060),
    a = n(665906),
    s = n(499033),
    o = n(585483),
    c = n(456269),
    d = n(228392),
    u = n(981631),
    m = n(388032),
    h = n(191059);
function g(e) {
    let { channelName: t, guildId: g, tagFilter: f, channel: x } = e,
        p = (0, c.r_)(x),
        b = (0, a.cD)(x),
        j = x.isMediaChannel(),
        v = l.useCallback(() => {
            (0, d.qz)(),
                (0, i.ZDy)(async () => {
                    let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                    return (t) => {
                        var n, l;
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
                            (l = l = { guildId: g }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            n)
                        );
                    };
                });
        }, [g]),
        C = f.size > 0,
        _ = b || p,
        y = !C && p && !j,
        O = l.useCallback(() => (y ? v() : b ? void o.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE) : (0, u.VqG)()), [v, y, b]);
    return (0, r.jsxs)('div', {
        className: h.container,
        children: [
            (0, r.jsxs)('div', {
                className: h.iconContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: h.icon,
                        children: (0, r.jsx)(i.kBi, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 30,
                            height: 30
                        })
                    }),
                    (0, r.jsx)(s.Z, { className: h.stars })
                ]
            }),
            (0, r.jsx)(i.X6q, {
                className: h.header,
                variant: 'heading-md/semibold',
                children: C ? m.intl.formatToPlainString(m.t.lvPci4, { numTags: f.size }) : m.intl.string(m.t.PwTMGx)
            }),
            (0, r.jsx)(i.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: C ? m.intl.formatToPlainString(m.t.AAeye3, { numTags: f.size }) : m.intl.formatToPlainString(m.t.YtsXFB, { channelName: t })
            }),
            _ &&
                (0, r.jsxs)(i.zxk, {
                    look: i.zxk.Looks.BLANK,
                    size: i.zxk.Sizes.MIN,
                    color: i.zxk.Colors.GREEN,
                    onClick: O,
                    className: h.cta,
                    innerClassName: h.button,
                    children: [
                        y ? m.intl.string(m.t.DgatTU) : m.intl.string(m.t.wOKE8P),
                        (0, r.jsx)(i.Fbu, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 12
                        })
                    ]
                })
        ]
    });
}
