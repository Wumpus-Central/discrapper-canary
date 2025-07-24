(n.d(t, { default: () => x }), n(388685), n(953529));
var r = n(255367),
    o = n(73800),
    a = n(494497),
    s = n(442837),
    i = n(304789),
    l = n(481060),
    c = n(905128),
    u = n(870246),
    d = n(639777),
    p = n(262212),
    f = n(795338),
    m = n(845602),
    g = n(606876),
    b = n(535396),
    _ = n(93841),
    h = n(388032),
    j = n(384732);
function x(e) {
    var t,
        n,
        { guildId: x, powerup: v } = e,
        y = (function (e, t) {
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
    let [C, k] = o.useState(void 0),
        O = o.useMemo(() => {
            switch (v.skuId) {
                case b.IN:
                    return (0, r.jsx)(m.E, { guildId: x });
                case b.If:
                    return (0, r.jsx)(m.Z, {});
                case a.A$:
                    return (0, r.jsx)(g.Z, {});
                default:
                    return;
            }
        }, [v, x]);
    (0, u.$)(x, v, u.w.DETAIL);
    let P = (0, d.Z)(x),
        S = b.Rx[v.skuId],
        I = null != S ? b.Cp[S] : null,
        E = (0, s.e7)([c.Z], () => c.Z.getStateForGuild(x)),
        w = null != I ? (null == E ? void 0 : E.allPowerups[I]) : null;
    return (0, r.jsxs)(
        l.Y0X,
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
                size: l.CgR.DYNAMIC
            },
            y
        )),
        (n = n =
            {
                parentComponent: 'GuildPowerupPerkModal',
                children: [
                    (0, r.jsxs)(l.hzk, {
                        className: j.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, r.jsxs)('div', {
                                className: j.sidebar,
                                children: [
                                    (0, r.jsx)(i.$, {
                                        className: j.powerupImage,
                                        children: (0, r.jsx)(f.m, { powerup: v })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: j.contentContainer,
                                        children: [
                                            (0, r.jsx)(l.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: v.title
                                            }),
                                            (0, r.jsx)(l.Text, {
                                                className: j.description,
                                                variant: 'text-sm/normal',
                                                children: v.description
                                            }),
                                            null != w &&
                                                (0, r.jsx)(l.Text, {
                                                    className: j.description,
                                                    variant: 'text-sm/normal',
                                                    children: h.intl.formatToPlainString(_.default.NAFGkJ, { level: w.title })
                                                }),
                                            null != C &&
                                                (0, r.jsx)(l.Text, {
                                                    className: j.error,
                                                    color: 'status-danger',
                                                    variant: 'text-sm/semibold',
                                                    children: C
                                                }),
                                            P &&
                                                (0, r.jsx)(p.ZP, {
                                                    className: j.footer,
                                                    guildId: x,
                                                    powerup: v,
                                                    onError: k
                                                })
                                        ]
                                    })
                                ]
                            }),
                            null != O &&
                                (0, r.jsx)('div', {
                                    className: j.exampleImage,
                                    children: O
                                })
                        ]
                    }),
                    (0, r.jsx)(l.olH, {
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
