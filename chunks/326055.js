(n.d(t, { default: () => v }), n(388685), n(953529));
var r = n(255367),
    s = n(73800),
    o = n(494497),
    l = n(442837),
    a = n(304789),
    i = n(481060),
    c = n(905128),
    d = n(870246),
    u = n(639777),
    p = n(262212),
    m = n(795338),
    f = n(845602),
    g = n(603213),
    b = n(606876),
    _ = n(535396),
    h = n(93841),
    x = n(388032),
    j = n(384732);
function v(e) {
    var t,
        n,
        { guildId: v, powerup: C } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                s = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        s = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                    return s;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
            }
            return s;
        })(e, ['guildId', 'powerup']);
    let [k, O] = s.useState(void 0),
        P = s.useMemo(() => {
            switch (C.skuId) {
                case _.IN:
                    return (0, r.jsx)(f.E, { guildId: v });
                case _.If:
                    return (0, r.jsx)(f.Z, {});
                case o.A$:
                    return (0, r.jsx)(b.Z, {});
                default:
                    return;
            }
        }, [C, v]);
    (0, d.$)(v, C, d.w.DETAIL);
    let w = (0, u.Z)(v),
        S = _.Rx[C.skuId],
        I = null != S ? _.Cp[S] : null,
        E = (0, l.e7)([c.Z], () => c.Z.getStateForGuild(v)),
        N = null != I ? (null == E ? void 0 : E.allPowerups[I]) : null;
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
                className: j.modal,
                size: i.CgR.DYNAMIC
            },
            y
        )),
        (n = n =
            {
                parentComponent: 'GuildPowerupPerkModal',
                children: [
                    (0, r.jsxs)(i.hzk, {
                        className: j.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, r.jsxs)('div', {
                                className: j.sidebar,
                                children: [
                                    (0, r.jsx)(a.$, {
                                        className: j.powerupImage,
                                        children: (0, r.jsx)(m.m, { powerup: C })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: j.contentContainer,
                                        children: [
                                            (0, r.jsx)(i.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: C.title
                                            }),
                                            (0, r.jsx)(i.Text, {
                                                className: j.description,
                                                variant: 'text-sm/normal',
                                                children: C.description
                                            }),
                                            null != N &&
                                                (0, r.jsx)(i.Text, {
                                                    className: j.description,
                                                    variant: 'text-sm/normal',
                                                    children: x.intl.formatToPlainString(h.default.NAFGkJ, { level: N.title })
                                                }),
                                            (0, r.jsx)(g.q, { powerup: C }),
                                            null != k &&
                                                (0, r.jsx)(i.Text, {
                                                    className: j.error,
                                                    color: 'status-danger',
                                                    variant: 'text-sm/semibold',
                                                    children: k
                                                }),
                                            w &&
                                                (0, r.jsx)(p.ZP, {
                                                    className: j.footer,
                                                    guildId: v,
                                                    powerup: C,
                                                    onError: O
                                                })
                                        ]
                                    })
                                ]
                            }),
                            null != P &&
                                (0, r.jsx)('div', {
                                    className: j.exampleImage,
                                    children: P
                                })
                        ]
                    }),
                    (0, r.jsx)(i.olH, {
                        className: j.close,
                        onClick: y.onClose
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
