(n.d(t, { default: () => j }), n(388685), n(953529));
var r = n(255367),
    a = n(73800),
    o = n(494497),
    l = n(442837),
    s = n(304789),
    i = n(481060),
    c = n(905128),
    d = n(870246),
    u = n(639777),
    p = n(262212),
    m = n(795338),
    f = n(845602),
    g = n(606876),
    b = n(535396),
    _ = n(93841),
    h = n(388032),
    x = n(384732);
function j(e) {
    var t,
        n,
        { guildId: j, powerup: v } = e,
        C = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
            }
            return a;
        })(e, ['guildId', 'powerup']);
    let [y, k] = a.useState(void 0),
        O = a.useMemo(() => {
            switch (v.skuId) {
                case b.IN:
                    return (0, r.jsx)(f.E, { guildId: j });
                case b.If:
                    return (0, r.jsx)(f.Z, {});
                case o.A$:
                    return (0, r.jsx)(g.Z, {});
                default:
                    return;
            }
        }, [v, j]);
    (0, d.$)(j, v, d.w.DETAIL);
    let P = (0, u.Z)(j),
        w = b.Rx[v.skuId],
        S = null != w ? b.Cp[w] : null,
        I = (0, l.e7)([c.Z], () => c.Z.getStateForGuild(j)),
        E = null != S ? (null == I ? void 0 : I.allPowerups[S]) : null;
    return (0, r.jsxs)(
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
                className: x.modal,
                size: i.CgR.DYNAMIC
            },
            C
        )),
        (n = n =
            {
                parentComponent: 'GuildPowerupPerkModal',
                children: [
                    (0, r.jsxs)(i.hzk, {
                        className: x.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, r.jsxs)('div', {
                                className: x.sidebar,
                                children: [
                                    (0, r.jsx)(s.$, {
                                        className: x.powerupImage,
                                        children: (0, r.jsx)(m.m, { powerup: v })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: x.contentContainer,
                                        children: [
                                            (0, r.jsx)(i.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: v.title
                                            }),
                                            (0, r.jsx)(i.Text, {
                                                className: x.description,
                                                variant: 'text-sm/normal',
                                                children: v.description
                                            }),
                                            null != E &&
                                                (0, r.jsx)(i.Text, {
                                                    className: x.description,
                                                    variant: 'text-sm/normal',
                                                    children: h.intl.formatToPlainString(_.default.NAFGkJ, { level: E.title })
                                                }),
                                            null != y &&
                                                (0, r.jsx)(i.Text, {
                                                    className: x.error,
                                                    color: 'status-danger',
                                                    variant: 'text-sm/semibold',
                                                    children: y
                                                }),
                                            P &&
                                                (0, r.jsx)(p.ZP, {
                                                    className: x.footer,
                                                    guildId: j,
                                                    powerup: v,
                                                    onError: k
                                                })
                                        ]
                                    })
                                ]
                            }),
                            null != O &&
                                (0, r.jsx)('div', {
                                    className: x.exampleImage,
                                    children: O
                                })
                        ]
                    }),
                    (0, r.jsx)(i.olH, {
                        className: x.close,
                        onClick: C.onClose
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
