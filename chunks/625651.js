n.d(t, { default: () => j });
var r = n(255367),
    o = n(73800),
    a = n(494497),
    i = n(442837),
    s = n(481060),
    c = n(14263),
    l = n(650774),
    d = n(485386),
    u = n(430824),
    m = n(870246),
    f = n(158638),
    b = n(795338),
    p = n(17622),
    x = n(279604),
    g = n(535396),
    k = n(93841),
    v = n(388032),
    h = n(340114);
function j(e) {
    var t,
        n,
        { guildId: j, powerup: _ } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let { onDeactivate: I, error: C, isLoading: T } = (0, x.ZP)(j, _),
        { onClose: N } = O,
        y = o.useCallback(
            (e) => {
                I(e).then(() => {
                    null == N || N();
                });
            },
            [N, I]
        ),
        E = (function (e, t) {
            let n = (0, i.e7)([l.Z], () => l.Z.getMemberCount(e)),
                m = (0, c.Z)(e),
                b = (0, i.e7)([u.Z], () => {
                    var t;
                    return (null == (t = u.Z.getGuild(e)) ? void 0 : t.vanityURLCode) != null;
                }),
                p = (0, f.g1)(e, 'Powerup Deactivate Modal'),
                x = (0, i.e7)(
                    [d.Z],
                    () =>
                        t.skuId !== g.If || null == m
                            ? 0
                            : Object.values(d.Z.getRoles(e))
                                  .filter((e) => {
                                      var t;
                                      return (null == (t = e.colorStrings) ? void 0 : t.secondaryColor) != null;
                                  })
                                  .reduce((e, t) => {
                                      var n;
                                      return e + (null != (n = m[t.id]) ? n : 0);
                                  }, 0),
                    [e, t.skuId, m]
                );
            return o.useMemo(() => {
                let e;
                switch (t.skuId) {
                    case g.If:
                        e =
                            x > 0
                                ? v.intl.formatToPlainString(k.default['4jSvr6'], {
                                      perk: t.title,
                                      memberCount: x
                                  })
                                : v.intl.formatToPlainString(k.default.cavtEh, { perk: t.title });
                        break;
                    case a.A:
                        e = b
                            ? (0, r.jsx)(s.Text, {
                                  color: 'text-danger',
                                  variant: 'text-sm/semibold',
                                  children: v.intl.string(k.default.hN75yc)
                              })
                            : (0, r.jsx)(s.Text, {
                                  color: 'text-danger',
                                  variant: 'text-sm/semibold',
                                  children: v.intl.string(k.default.Du91RU)
                              });
                        break;
                    default:
                        e = v.intl.formatToPlainString(k.default['4jSvr6'], {
                            perk: t.title,
                            memberCount: n
                        });
                }
                return (
                    b &&
                        t.skuId === g.XW &&
                        (e = (0, r.jsxs)(r.Fragment, {
                            children: [
                                e,
                                (0, r.jsx)(s.Text, {
                                    color: 'text-danger',
                                    variant: 'text-sm/semibold',
                                    children: p ? v.intl.string(k.default.TkNA7e) : v.intl.string(k.default.M4XL5u)
                                })
                            ]
                        })),
                    e
                );
            }, [t, x, n, b, p]);
        })(j, _);
    return (
        (0, m.$)(j, _, m.w.DEACTIVATE),
        (0, r.jsxs)(
            s.Y0X,
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
            })(
                {
                    className: h.modal,
                    size: _.type === g.Us.LEVEL ? s.CgR.MEDIUM : s.CgR.SMALL
                },
                O
            )),
            (n = n =
                {
                    parentComponent: 'GuildPowerupDeactivateModal',
                    children: [
                        (0, r.jsxs)(s.hzk, {
                            className: h.modalContentContainer,
                            scrollbarType: 'none',
                            children: [
                                (0, r.jsxs)('div', {
                                    className: h.headerContainer,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: h.header,
                                            children: [
                                                (0, r.jsx)(s.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    children: v.intl.formatToPlainString(k.default.iEBw1N, { perk: _.title })
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: 'text-sm/medium',
                                                    children: v.intl.formatToPlainString(k.default['7o0K+/'], { perk: _.title })
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(s.olH, { onClick: O.onClose })
                                    ]
                                }),
                                (() => {
                                    switch (_.type) {
                                        case g.Us.LEVEL:
                                            return (0, r.jsx)(p.Z, { powerup: _ });
                                        case g.Us.PERK:
                                            return (0, r.jsx)(b.m, {
                                                className: h.image,
                                                powerup: _
                                            });
                                    }
                                })(),
                                (0, r.jsxs)('div', {
                                    className: h.warningContainer,
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            color: 'text-danger',
                                            variant: 'eyebrow',
                                            children: v.intl.string(k.default.OVt5CA)
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            className: h.warningText,
                                            tag: 'span',
                                            variant: 'text-sm/medium',
                                            children: E
                                        })
                                    ]
                                }),
                                null != C &&
                                    (0, r.jsx)(s.Text, {
                                        className: h.errorText,
                                        color: 'text-danger',
                                        variant: 'text-sm/semibold',
                                        children: C
                                    })
                            ]
                        }),
                        (0, r.jsxs)(s.mzw, {
                            className: h.footer,
                            children: [
                                (0, r.jsx)('div', {
                                    'data-button-hoisted-classname-wrapper': !0,
                                    className: h.button,
                                    children: (0, r.jsx)(s.zxk, {
                                        variant: 'critical-primary',
                                        text: v.intl.string(k.default.PYPdl5),
                                        loading: T,
                                        onClick: y
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    'data-button-hoisted-classname-wrapper': !0,
                                    className: h.button,
                                    children: (0, r.jsx)(s.zxk, {
                                        variant: 'secondary',
                                        text: v.intl.string(v.t['ETE/oK']),
                                        onClick: O.onClose
                                    })
                                })
                            ]
                        })
                    ]
                }),
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
        )
    );
}
