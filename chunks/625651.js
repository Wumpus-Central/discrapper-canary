n.d(t, { default: () => g });
var r = n(255367),
    o = n(73800),
    a = n(442837),
    i = n(481060),
    s = n(14263),
    c = n(650774),
    l = n(485386),
    u = n(430824),
    d = n(870246),
    m = n(795338),
    f = n(17622),
    b = n(279604),
    p = n(535396),
    x = n(93841),
    k = n(388032),
    v = n(340114);
function g(e) {
    var t,
        n,
        { guildId: g, powerup: j } = e,
        h = (function (e, t) {
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
    let { onDeactivate: _, error: O, isLoading: I } = (0, b.ZP)(g, j),
        { onClose: C } = h,
        T = o.useCallback(
            (e) => {
                _(e).then(() => {
                    null == C || C();
                });
            },
            [C, _]
        ),
        E = (function (e, t) {
            let n = (0, a.e7)([c.Z], () => c.Z.getMemberCount(e)),
                d = (0, s.Z)(e),
                m = (0, a.e7)([u.Z], () => {
                    var t;
                    return (null == (t = u.Z.getGuild(e)) ? void 0 : t.vanityURLCode) != null;
                }),
                f = (0, a.e7)(
                    [l.Z],
                    () =>
                        t.skuId !== p.If || null == d
                            ? 0
                            : Object.values(l.Z.getRoles(e))
                                  .filter((e) => {
                                      var t;
                                      return (null == (t = e.colorStrings) ? void 0 : t.secondaryColor) != null;
                                  })
                                  .reduce((e, t) => {
                                      var n;
                                      return e + (null != (n = d[t.id]) ? n : 0);
                                  }, 0),
                    [e, t.skuId, d]
                );
            return o.useMemo(() => {
                let e;
                return (
                    (e =
                        t.skuId === p.If
                            ? f > 0
                                ? k.intl.formatToPlainString(x.default['4jSvr6'], {
                                      perk: t.title,
                                      memberCount: f
                                  })
                                : k.intl.formatToPlainString(x.default.cavtEh, { perk: t.title })
                            : k.intl.formatToPlainString(x.default['4jSvr6'], {
                                  perk: t.title,
                                  memberCount: n
                              })),
                    m &&
                        t.skuId === p.XW &&
                        (e = (0, r.jsxs)(r.Fragment, {
                            children: [
                                e,
                                (0, r.jsx)(i.Text, {
                                    color: 'text-danger',
                                    variant: 'text-sm/semibold',
                                    children: k.intl.string(x.default.M4XL5u)
                                })
                            ]
                        })),
                    e
                );
            }, [t, f, n, m]);
        })(g, j);
    return (
        (0, d.$)(g, j, d.w.DEACTIVATE),
        (0, r.jsxs)(
            i.Y0X,
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
                    className: v.modal,
                    size: j.type === p.Us.LEVEL ? i.CgR.MEDIUM : i.CgR.SMALL
                },
                h
            )),
            (n = n =
                {
                    parentComponent: 'GuildPowerupDeactivateModal',
                    children: [
                        (0, r.jsxs)(i.hzk, {
                            className: v.modalContentContainer,
                            scrollbarType: 'none',
                            children: [
                                (0, r.jsxs)('div', {
                                    className: v.headerContainer,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: v.header,
                                            children: [
                                                (0, r.jsx)(i.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    children: k.intl.formatToPlainString(x.default.iEBw1N, { perk: j.title })
                                                }),
                                                (0, r.jsx)(i.Text, {
                                                    variant: 'text-sm/medium',
                                                    children: k.intl.formatToPlainString(x.default['7o0K+/'], { perk: j.title })
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(i.olH, { onClick: h.onClose })
                                    ]
                                }),
                                (() => {
                                    switch (j.type) {
                                        case p.Us.LEVEL:
                                            return (0, r.jsx)(f.Z, { powerup: j });
                                        case p.Us.PERK:
                                            return (0, r.jsx)(m.m, {
                                                className: v.image,
                                                powerup: j
                                            });
                                    }
                                })(),
                                (0, r.jsxs)('div', {
                                    className: v.warningContainer,
                                    children: [
                                        (0, r.jsx)(i.Text, {
                                            color: 'text-danger',
                                            variant: 'eyebrow',
                                            children: k.intl.string(x.default.OVt5CA)
                                        }),
                                        (0, r.jsx)(i.Text, {
                                            className: v.warningText,
                                            tag: 'span',
                                            variant: 'text-sm/medium',
                                            children: E
                                        })
                                    ]
                                }),
                                null != O &&
                                    (0, r.jsx)(i.Text, {
                                        className: v.errorText,
                                        color: 'text-danger',
                                        variant: 'text-sm/semibold',
                                        children: O
                                    })
                            ]
                        }),
                        (0, r.jsxs)(i.mzw, {
                            className: v.footer,
                            children: [
                                (0, r.jsx)('div', {
                                    'data-button-hoisted-classname-wrapper': !0,
                                    className: v.button,
                                    children: (0, r.jsx)(i.zxk, {
                                        variant: 'critical-primary',
                                        text: k.intl.string(x.default.PYPdl5),
                                        loading: I,
                                        onClick: T
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    'data-button-hoisted-classname-wrapper': !0,
                                    className: v.button,
                                    children: (0, r.jsx)(i.zxk, {
                                        variant: 'secondary',
                                        text: k.intl.string(k.t['ETE/oK']),
                                        onClick: h.onClose
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
