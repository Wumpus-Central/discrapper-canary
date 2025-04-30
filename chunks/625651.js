n.d(t, { default: () => g });
var r = n(200651),
    o = n(192379),
    a = n(442837),
    i = n(481060),
    s = n(14263),
    c = n(650774),
    l = n(430824),
    u = n(870246),
    d = n(795338),
    m = n(17622),
    f = n(279604),
    b = n(535396),
    p = n(680278),
    x = n(388032),
    k = n(340114);
function g(e) {
    var t,
        n,
        { guildId: g, powerup: j } = e,
        _ = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let { onDeactivate: v, error: I, isLoading: O } = (0, f.ZP)(g, j),
        { onClose: h } = _,
        C = o.useCallback(
            (e) => {
                v(e).then(() => {
                    null == h || h();
                });
            },
            [h, v]
        ),
        T = (function (e, t) {
            let n = (0, a.e7)([c.Z], () => c.Z.getMemberCount(e)),
                u = (0, s.Z)(e),
                d = (0, a.e7)([l.Z], () => {
                    var t;
                    return (null == (t = l.Z.getGuild(e)) ? void 0 : t.vanityURLCode) != null;
                }),
                m = (0, a.e7)(
                    [l.Z],
                    () =>
                        t.skuId !== b.If || null == u
                            ? 0
                            : Object.values(l.Z.getRoles(e))
                                  .filter((e) => {
                                      var t;
                                      return (null == (t = e.colorStrings) ? void 0 : t.secondaryColor) != null;
                                  })
                                  .reduce((e, t) => {
                                      var n;
                                      return e + (null != (n = u[t.id]) ? n : 0);
                                  }, 0),
                    [e, t.skuId, u]
                );
            return o.useMemo(() => {
                let e;
                return (
                    (e =
                        t.skuId === b.If
                            ? m > 0
                                ? x.intl.formatToPlainString(p.default['4jSvr6'], {
                                      perk: t.title,
                                      memberCount: m
                                  })
                                : x.intl.formatToPlainString(p.default.cavtEh, { perk: t.title })
                            : x.intl.formatToPlainString(p.default['4jSvr6'], {
                                  perk: t.title,
                                  memberCount: n
                              })),
                    d &&
                        t.skuId === b.XW &&
                        (e = (0, r.jsxs)(r.Fragment, {
                            children: [
                                e,
                                (0, r.jsx)(i.Text, {
                                    color: 'text-danger',
                                    variant: 'text-sm/semibold',
                                    children: x.intl.string(p.default.M4XL5u)
                                })
                            ]
                        })),
                    e
                );
            }, [t, m, n, d]);
        })(g, j);
    return (
        (0, u.$)(g, j, u.w.DEACTIVATE),
        (0, r.jsxs)(
            i.Y0X,
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
            })(
                {
                    className: k.modal,
                    size: j.type === b.Us.LEVEL ? i.CgR.MEDIUM : i.CgR.SMALL
                },
                _
            )),
            (n = n =
                {
                    children: [
                        (0, r.jsxs)(i.hzk, {
                            className: k.modalContentContainer,
                            scrollbarType: 'none',
                            children: [
                                (0, r.jsxs)('div', {
                                    className: k.headerContainer,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: k.header,
                                            children: [
                                                (0, r.jsx)(i.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    children: x.intl.formatToPlainString(p.default.iEBw1N, { perk: j.title })
                                                }),
                                                (0, r.jsx)(i.Text, {
                                                    variant: 'text-sm/medium',
                                                    children: x.intl.formatToPlainString(p.default['7o0K+/'], { perk: j.title })
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(i.olH, { onClick: _.onClose })
                                    ]
                                }),
                                (() => {
                                    switch (j.type) {
                                        case b.Us.LEVEL:
                                            return (0, r.jsx)(m.Z, { powerup: j });
                                        case b.Us.PERK:
                                            return (0, r.jsx)(d.m, {
                                                className: k.image,
                                                powerup: j
                                            });
                                    }
                                })(),
                                (0, r.jsxs)('div', {
                                    className: k.warningContainer,
                                    children: [
                                        (0, r.jsx)(i.Text, {
                                            color: 'text-danger',
                                            variant: 'eyebrow',
                                            children: x.intl.string(p.default.OVt5CA)
                                        }),
                                        (0, r.jsx)(i.Text, {
                                            className: k.warningText,
                                            tag: 'span',
                                            variant: 'text-sm/medium',
                                            children: T
                                        })
                                    ]
                                }),
                                null != I &&
                                    (0, r.jsx)(i.Text, {
                                        className: k.errorText,
                                        color: 'text-danger',
                                        variant: 'text-sm/semibold',
                                        children: I
                                    })
                            ]
                        }),
                        (0, r.jsxs)(i.mzw, {
                            className: k.footer,
                            children: [
                                (0, r.jsx)(i.zxk, {
                                    submitting: O,
                                    color: i.Ttl.RED,
                                    className: k.button,
                                    onClick: C,
                                    children: x.intl.string(p.default.PYPdl5)
                                }),
                                (0, r.jsx)(i.zxk, {
                                    color: i.Ttl.PRIMARY,
                                    className: k.button,
                                    onClick: _.onClose,
                                    children: x.intl.string(x.t['ETE/oK'])
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
