n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    a = n(755721),
    l = n(481060),
    s = n(665906),
    o = n(499033),
    c = n(585483),
    d = n(456269),
    u = n(228392),
    m = n(981631),
    h = n(388032),
    g = n(272219);
function f(e) {
    let { channelName: t, guildId: f, tagFilter: x, channel: p } = e,
        b = (0, d.r_)(p),
        j = (0, s.cD)(p),
        v = p.isMediaChannel(),
        C = i.useCallback(() => {
            ((0, u.qz)(),
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                    return (t) => {
                        var n, i;
                        return (0, r.jsx)(
                            e,
                            ((n = (function (e) {
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
                            })({}, t)),
                            (i = i = { guildId: f }),
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
                }));
        }, [f]),
        _ = x.size > 0,
        y = j || b,
        O = !_ && b && !v,
        w = i.useCallback(() => (O ? C() : j ? void c.S.dispatch(m.CkL.FOCUS_COMPOSER_TITLE) : (0, m.VqG)()), [C, O, j]);
    return (0, r.jsxs)('div', {
        className: g.container,
        children: [
            (0, r.jsxs)('div', {
                className: g.iconContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: g.icon,
                        children: (0, r.jsx)(l.kBi, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 30,
                            height: 30
                        })
                    }),
                    (0, r.jsx)(o.Z, { className: g.stars })
                ]
            }),
            (0, r.jsx)(l.X6q, {
                className: g.header,
                variant: 'heading-md/semibold',
                children: _ ? h.intl.formatToPlainString(h.t.lvPci4, { numTags: x.size }) : h.intl.string(h.t.PwTMGx)
            }),
            (0, r.jsx)(l.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: _ ? h.intl.formatToPlainString(h.t.AAeye3, { numTags: x.size }) : h.intl.formatToPlainString(h.t.YtsXFB, { channelName: t })
            }),
            y &&
                (0, r.jsxs)(a.zx, {
                    look: a.zx.Looks.BLANK,
                    size: a.zx.Sizes.MIN,
                    color: a.zx.Colors.GREEN,
                    onClick: w,
                    className: g.cta,
                    innerClassName: g.button,
                    children: [
                        O ? h.intl.string(h.t.DgatTU) : h.intl.string(h.t.wOKE8P),
                        (0, r.jsx)(l.Fbu, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 12
                        })
                    ]
                })
        ]
    });
}
