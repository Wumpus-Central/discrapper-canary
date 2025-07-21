(r.d(t, { default: () => y }), r(388685), r(953529));
var n = r(255367),
    o = r(73800),
    a = r(494497),
    s = r(442837),
    i = r(304789),
    l = r(481060),
    c = r(905128),
    u = r(870246),
    d = r(639777),
    p = r(262212),
    m = r(795338),
    f = r(845602),
    _ = r(606876),
    b = r(535396),
    g = r(93841),
    j = r(388032),
    x = r(384732);
function y(e) {
    var t,
        r,
        { guildId: y, powerup: v } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) ((r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let [C, O] = o.useState(void 0),
        k = o.useMemo(() => {
            switch (v.skuId) {
                case b.IN:
                    return (0, n.jsx)(f.E, { guildId: y });
                case b.If:
                    return (0, n.jsx)(f.Z, {});
                case a.A$:
                    return (0, n.jsx)(_.Z, {});
                default:
                    return;
            }
        }, [v, y]);
    (0, u.$)(y, v, u.w.DETAIL);
    let P = (0, d.Z)(y),
        w = b.Rx[v.skuId],
        S = null != w ? b.Cp[w] : null,
        E = (0, s.e7)([c.Z], () => c.Z.getStateForGuild(y)),
        I = null != S ? (null == E ? void 0 : E.allPowerups[S]) : null;
    return (0, n.jsxs)(
        l.Y0X,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        ((n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n));
                    }));
            }
            return e;
        })(
            {
                className: x.modal,
                size: l.CgR.DYNAMIC
            },
            h
        )),
        (r = r =
            {
                parentComponent: 'GuildPowerupPerkModal',
                children: [
                    (0, n.jsxs)(l.hzk, {
                        className: x.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, n.jsxs)('div', {
                                className: x.sidebar,
                                children: [
                                    (0, n.jsx)(i.$, {
                                        className: x.powerupImage,
                                        children: (0, n.jsx)(m.m, { powerup: v })
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: x.contentContainer,
                                        children: [
                                            (0, n.jsx)(l.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: v.title
                                            }),
                                            (0, n.jsx)(l.Text, {
                                                className: x.description,
                                                variant: 'text-sm/normal',
                                                children: v.description
                                            }),
                                            null != I &&
                                                (0, n.jsx)(l.Text, {
                                                    className: x.description,
                                                    variant: 'text-sm/normal',
                                                    children: j.intl.formatToPlainString(g.default.NAFGkJ, { level: I.title })
                                                }),
                                            null != C &&
                                                (0, n.jsx)(l.Text, {
                                                    className: x.error,
                                                    color: 'status-danger',
                                                    variant: 'text-sm/semibold',
                                                    children: C
                                                }),
                                            P &&
                                                (0, n.jsx)(p.ZP, {
                                                    className: x.footer,
                                                    guildId: y,
                                                    powerup: v,
                                                    onError: O
                                                })
                                        ]
                                    })
                                ]
                            }),
                            null != k &&
                                (0, n.jsx)('div', {
                                    className: x.exampleImage,
                                    children: k
                                })
                        ]
                    }),
                    (0, n.jsx)(l.olH, {
                        className: x.close,
                        onClick: h.onClose
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
