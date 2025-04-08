r.d(t, { default: () => k });
var n = r(200651),
    o = r(192379),
    a = r(442837),
    c = r(481060),
    s = r(14263),
    i = r(650774),
    l = r(430824),
    u = r(795338),
    d = r(17622),
    m = r(279604),
    b = r(535396),
    p = r(680278),
    f = r(388032),
    g = r(340114);
function k(e) {
    var t,
        r,
        { guildId: k, powerup: j } = e,
        x = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let { onDeactivate: _, error: I, isLoading: O } = (0, m.ZP)(k, j),
        { onClose: h } = x,
        v = o.useCallback(
            (e) => {
                _(e).then(() => {
                    null == h || h();
                });
            },
            [h, _]
        ),
        N = (function (e, t) {
            let r = (0, a.e7)([i.Z], () => i.Z.getMemberCount(e)),
                n = (0, s.Z)(e),
                c = (0, a.e7)(
                    [l.Z],
                    () =>
                        t.skuId !== b.If || null == n
                            ? 0
                            : Object.values(l.Z.getRoles(e))
                                  .filter((e) => {
                                      var t;
                                      return (null == (t = e.colorStrings) ? void 0 : t.secondaryColor) != null;
                                  })
                                  .reduce((e, t) => {
                                      var r;
                                      return e + (null != (r = n[t.id]) ? r : 0);
                                  }, 0),
                    [e, t.skuId, n]
                );
            return o.useMemo(
                () =>
                    t.skuId === b.If
                        ? c > 0
                            ? f.NW.formatToPlainString(p.Z['4jSvr6'], {
                                  perk: t.title,
                                  memberCount: c
                              })
                            : f.NW.formatToPlainString(p.Z.cavtEh, { perk: t.title })
                        : f.NW.formatToPlainString(p.Z['4jSvr6'], {
                              perk: t.title,
                              memberCount: r
                          }),
                [t, c, r]
            );
        })(k, j);
    return (0, n.jsxs)(
        c.Y0X,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                className: g.modal,
                size: c.CgR.SMALL
            },
            x
        )),
        (r = r =
            {
                children: [
                    (0, n.jsxs)(c.hzk, {
                        className: g.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, n.jsxs)('div', {
                                className: g.headerContainer,
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: g.header,
                                        children: [
                                            (0, n.jsx)(c.X6q, {
                                                variant: 'heading-md/semibold',
                                                children: f.NW.formatToPlainString(p.Z.iEBw1N, { perk: j.title })
                                            }),
                                            (0, n.jsx)(c.Text, {
                                                variant: 'text-sm/medium',
                                                children: f.NW.formatToPlainString(p.Z['7o0K+/'], { perk: j.title })
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(c.olH, { onClick: x.onClose })
                                ]
                            }),
                            (() => {
                                switch (j.type) {
                                    case b.Us.LEVEL:
                                        return (0, n.jsx)(d.Z, { powerup: j });
                                    case b.Us.PERK:
                                        return (0, n.jsx)(u.m, {
                                            className: g.image,
                                            powerup: j
                                        });
                                }
                            })(),
                            (0, n.jsxs)('div', {
                                className: g.warningContainer,
                                children: [
                                    (0, n.jsx)(c.Text, {
                                        color: 'text-danger',
                                        variant: 'eyebrow',
                                        children: f.NW.string(p.Z.OVt5CA)
                                    }),
                                    (0, n.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        children: N
                                    })
                                ]
                            }),
                            null != I &&
                                (0, n.jsx)(c.Text, {
                                    className: g.errorText,
                                    color: 'text-danger',
                                    variant: 'text-sm/semibold',
                                    children: I
                                })
                        ]
                    }),
                    (0, n.jsxs)(c.mzw, {
                        className: g.footer,
                        children: [
                            (0, n.jsx)(c.zxk, {
                                submitting: O,
                                color: c.Ttl.RED,
                                className: g.button,
                                onClick: v,
                                children: f.NW.string(p.Z.PYPdl5)
                            }),
                            (0, n.jsx)(c.zxk, {
                                color: c.Ttl.PRIMARY,
                                className: g.button,
                                onClick: x.onClose,
                                children: f.NW.string(f.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
}
