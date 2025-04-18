n.d(t, { default: () => g });
var r = n(200651),
    o = n(192379),
    a = n(442837),
    c = n(481060),
    i = n(14263),
    s = n(650774),
    l = n(430824),
    u = n(795338),
    d = n(17622),
    m = n(279604),
    b = n(535396),
    p = n(696672),
    f = n(388032),
    x = n(730672);
function g(e) {
    var t,
        n,
        { guildId: g, powerup: j } = e,
        k = (function (e, t) {
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
    let { onDeactivate: v, error: O, isLoading: _ } = (0, m.ZP)(g, j),
        { onClose: h } = k,
        N = o.useCallback(
            (e) => {
                v(e).then(() => {
                    null == h || h();
                });
            },
            [h, v]
        ),
        I = (function (e, t) {
            let n = (0, a.e7)([s.Z], () => s.Z.getMemberCount(e)),
                u = (0, i.Z)(e),
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
                                ? f.NW.formatToPlainString(p.Z['4jSvr6'], {
                                      perk: t.title,
                                      memberCount: m
                                  })
                                : f.NW.formatToPlainString(p.Z.cavtEh, { perk: t.title })
                            : f.NW.formatToPlainString(p.Z['4jSvr6'], {
                                  perk: t.title,
                                  memberCount: n
                              })),
                    d &&
                        t.skuId === b.XW &&
                        (e = (0, r.jsxs)(r.Fragment, {
                            children: [
                                e,
                                (0, r.jsx)(c.Text, {
                                    color: 'text-danger',
                                    variant: 'text-sm/semibold',
                                    children: f.NW.string(p.Z.M4XL5u)
                                })
                            ]
                        })),
                    e
                );
            }, [t, m, n, d]);
        })(g, j);
    return (0, r.jsxs)(
        c.Y0X,
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
                className: x.modal,
                size: j.type === b.Us.LEVEL ? c.CgR.MEDIUM : c.CgR.SMALL
            },
            k
        )),
        (n = n =
            {
                children: [
                    (0, r.jsxs)(c.hzk, {
                        className: x.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, r.jsxs)('div', {
                                className: x.headerContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: x.header,
                                        children: [
                                            (0, r.jsx)(c.X6q, {
                                                variant: 'heading-md/semibold',
                                                children: f.NW.formatToPlainString(p.Z.iEBw1N, { perk: j.title })
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-sm/medium',
                                                children: f.NW.formatToPlainString(p.Z['7o0K+/'], { perk: j.title })
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(c.olH, { onClick: k.onClose })
                                ]
                            }),
                            (() => {
                                switch (j.type) {
                                    case b.Us.LEVEL:
                                        return (0, r.jsx)(d.Z, { powerup: j });
                                    case b.Us.PERK:
                                        return (0, r.jsx)(u.m, {
                                            className: x.image,
                                            powerup: j
                                        });
                                }
                            })(),
                            (0, r.jsxs)('div', {
                                className: x.warningContainer,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        color: 'text-danger',
                                        variant: 'eyebrow',
                                        children: f.NW.string(p.Z.OVt5CA)
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        className: x.warningText,
                                        tag: 'span',
                                        variant: 'text-sm/medium',
                                        children: I
                                    })
                                ]
                            }),
                            null != O &&
                                (0, r.jsx)(c.Text, {
                                    className: x.errorText,
                                    color: 'text-danger',
                                    variant: 'text-sm/semibold',
                                    children: O
                                })
                        ]
                    }),
                    (0, r.jsxs)(c.mzw, {
                        className: x.footer,
                        children: [
                            (0, r.jsx)(c.zxk, {
                                submitting: _,
                                color: c.Ttl.RED,
                                className: x.button,
                                onClick: N,
                                children: f.NW.string(p.Z.PYPdl5)
                            }),
                            (0, r.jsx)(c.zxk, {
                                color: c.Ttl.PRIMARY,
                                className: x.button,
                                onClick: k.onClose,
                                children: f.NW.string(f.t['ETE/oK'])
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
    );
}
