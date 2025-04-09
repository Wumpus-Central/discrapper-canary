n.d(t, {
    I9: () => m,
    ZP: () => p
});
var r = n(200651),
    i = n(192379),
    s = n(692547),
    a = n(481060),
    l = n(496675),
    o = n(484455),
    c = n(981631),
    d = n(388032),
    u = n(664305);
function m(e) {
    switch (e) {
        case c.sFg.LOW:
            return d.NW.string(d.t.SsCK8P);
        case c.sFg.MEDIUM:
            return d.NW.string(d.t.WwNoR0);
        case c.sFg.HIGH:
            return d.NW.string(d.t.I2jMUF);
        case c.sFg.VERY_HIGH:
            return d.NW.string(d.t.cJY8w8);
        default:
            return '';
    }
}
let g = {
        [c.sFg.NONE]: '',
        [c.sFg.LOW]: s.Z.unsafe_rawColors.GREEN_360.css,
        [c.sFg.MEDIUM]: s.Z.unsafe_rawColors.YELLOW_300.css,
        [c.sFg.HIGH]: s.Z.unsafe_rawColors.ORANGE_345.css,
        [c.sFg.VERY_HIGH]: s.Z.unsafe_rawColors.RED_400.css
    },
    p = function (e) {
        let { guild: t } = e,
            s = l.Z.can(c.Plq.MANAGE_GUILD, t),
            p = t.verificationLevel,
            f = p === c.sFg.VERY_HIGH ? a.AtH : a._XJ,
            h = i.useMemo(() => m(p), [p]),
            b = g[p],
            x = (0, r.jsx)('div', {
                className: u.verificationLevelTitle,
                children: d.NW.format(d.t.OpV87e, {
                    verificationLevelHook: function () {
                        return (0, r.jsx)(
                            a.Text,
                            {
                                className: u.verificationLevelHook,
                                style: { color: b },
                                variant: 'text-sm/semibold',
                                children: h
                            },
                            'hook'
                        );
                    }
                })
            }),
            j = p === c.sFg.VERY_HIGH ? d.NW.string(d.t.IlXyd3) : d.NW.string(d.t.JlzMPj);
        return (0, r.jsx)(o.Z, {
            title: x,
            children: (0, r.jsxs)('div', {
                className: u.verificationContainer,
                children: [
                    (0, r.jsx)(f, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20,
                        height: 20,
                        className: u.icon
                    }),
                    (0, r.jsx)(a.Text, {
                        className: u.guildVerificationText,
                        variant: 'text-sm/normal',
                        children: j
                    }),
                    s &&
                        (0, r.jsx)(a.P3F, {
                            className: u.iconInteractiveContainer,
                            onClick: () =>
                                (0, a.ZDy)(async () => {
                                    let { default: e } = await n.e('72458').then(n.bind(n, 694278));
                                    return (n) => {
                                        var i, s;
                                        return (0, r.jsx)(
                                            e,
                                            ((i = (function (e) {
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
                                            })({}, n)),
                                            (s = s = { guild: t }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var r = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, r);
                                                      }
                                                      return n;
                                                  })(Object(s)).forEach(function (e) {
                                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                                  }),
                                            i)
                                        );
                                    };
                                }),
                            children: (0, r.jsx)(a.vdY, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: u.iconInteractive
                            })
                        })
                ]
            })
        });
    };
