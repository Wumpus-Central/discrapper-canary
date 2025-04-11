r.d(t, { default: () => k });
var n = r(200651),
    o = r(192379),
    a = r(442837),
    c = r(481060),
    i = r(14263),
    s = r(650774),
    l = r(430824),
    u = r(795338),
    d = r(17622),
    m = r(279604),
    b = r(535396),
    p = r(680278),
    f = r(388032),
    j = r(340114);
function k(e) {
    var t,
        r,
        { guildId: k, powerup: x } = e,
        O = (function (e, t) {
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
    let { onDeactivate: _, error: h, isLoading: v } = (0, m.ZP)(k, x),
        { onClose: N } = O,
        g = o.useCallback(
            (e) => {
                _(e).then(() => {
                    null == N || N();
                });
            },
            [N, _]
        ),
        I = (function (e, t) {
            let r = (0, a.e7)([s.Z], () => s.Z.getMemberCount(e)),
                n = (0, i.Z)(e),
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
        })(k, x);
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
                className: j.modal,
                size: c.CgR.SMALL
            },
            O
        )),
        (r = r =
            {
                children: [
                    (0, n.jsxs)(c.hzk, {
                        className: j.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, n.jsxs)('div', {
                                className: j.headerContainer,
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: j.header,
                                        children: [
                                            (0, n.jsx)(c.X6q, {
                                                variant: 'heading-md/semibold',
                                                children: f.NW.formatToPlainString(p.Z.iEBw1N, { perk: x.title })
                                            }),
                                            (0, n.jsx)(c.Text, {
                                                variant: 'text-sm/medium',
                                                children: f.NW.formatToPlainString(p.Z['7o0K+/'], { perk: x.title })
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(c.olH, { onClick: O.onClose })
                                ]
                            }),
                            (() => {
                                switch (x.type) {
                                    case b.Us.LEVEL:
                                        return (0, n.jsx)(d.Z, { powerup: x });
                                    case b.Us.PERK:
                                        return (0, n.jsx)(u.m, {
                                            className: j.image,
                                            powerup: x
                                        });
                                }
                            })(),
                            (0, n.jsxs)('div', {
                                className: j.warningContainer,
                                children: [
                                    (0, n.jsx)(c.Text, {
                                        color: 'text-danger',
                                        variant: 'eyebrow',
                                        children: f.NW.string(p.Z.OVt5CA)
                                    }),
                                    (0, n.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        children: I
                                    })
                                ]
                            }),
                            null != h &&
                                (0, n.jsx)(c.Text, {
                                    className: j.errorText,
                                    color: 'text-danger',
                                    variant: 'text-sm/semibold',
                                    children: h
                                })
                        ]
                    }),
                    (0, n.jsxs)(c.mzw, {
                        className: j.footer,
                        children: [
                            (0, n.jsx)(c.zxk, {
                                submitting: v,
                                color: c.Ttl.RED,
                                className: j.button,
                                onClick: g,
                                children: f.NW.string(p.Z.PYPdl5)
                            }),
                            (0, n.jsx)(c.zxk, {
                                color: c.Ttl.PRIMARY,
                                className: j.button,
                                onClick: O.onClose,
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
