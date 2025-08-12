n.d(t, { default: () => v }), n(388685), n(953529);
var r = n(255367),
    o = n(73800),
    l = n(494497),
    a = n(442837),
    s = n(304789),
    i = n(481060),
    c = n(905128),
    u = n(870246),
    d = n(639777),
    p = n(262212),
    f = n(795338),
    m = n(845602),
    b = n(603213),
    g = n(606876),
    h = n(535396),
    _ = n(93841),
    j = n(388032),
    x = n(804258);
function v(e) {
    var t,
        n,
        { guildId: v, powerup: y } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["guildId", "powerup"]);
    let [k, C] = o.useState(void 0),
        P = o.useMemo(() => {
            switch (y.skuId) {
                case l.IN:
                    return (0, r.jsx)(m.E, { guildId: v });
                case l.If:
                    return (0, r.jsx)(m.Z, {});
                case l.A$:
                    return (0, r.jsx)(g.Z, {});
                default:
                    return;
            }
        }, [y, v]);
    (0, u.$)(v, y, u.w.DETAIL);
    let w = (0, d.Z)(v),
        S = h.Rx[y.skuId],
        I = null != S ? h.Cp[S] : null,
        E = (0, a.e7)([c.Z], () => c.Z.getStateForGuild(v)),
        N = null != I ? (null == E ? void 0 : E.allPowerups[I]) : null;
    return (0, r.jsxs)(
        i.Y0X,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                className: x.modal,
                size: i.CgR.DYNAMIC,
            },
            O,
        )),
        (n = n =
            {
                parentComponent: "GuildPowerupPerkModal",
                children: [
                    (0, r.jsxs)(i.hzk, {
                        className: x.modalContentContainer,
                        scrollbarType: "none",
                        children: [
                            (0, r.jsxs)("div", {
                                className: x.sidebar,
                                children: [
                                    (0, r.jsx)(s.$, {
                                        className: x.powerupImage,
                                        children: (0, r.jsx)(f.m, { powerup: y }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: x.contentContainer,
                                        children: [
                                            (0, r.jsx)(i.X6q, {
                                                variant: "heading-xl/extrabold",
                                                children: y.title,
                                            }),
                                            (0, r.jsx)(i.Text, {
                                                className: x.description,
                                                variant: "text-sm/normal",
                                                children: y.description,
                                            }),
                                            null != N &&
                                                (0, r.jsx)(i.Text, {
                                                    className: x.description,
                                                    variant: "text-sm/normal",
                                                    children: j.intl.formatToPlainString(_.default.NAFGkJ, {
                                                        level: N.title,
                                                    }),
                                                }),
                                            (0, r.jsx)(b.q, { powerup: y }),
                                            null != k &&
                                                (0, r.jsx)(i.Text, {
                                                    className: x.error,
                                                    color: "status-danger",
                                                    variant: "text-sm/semibold",
                                                    children: k,
                                                }),
                                            w &&
                                                (0, r.jsx)(p.ZP, {
                                                    className: x.footer,
                                                    guildId: v,
                                                    powerup: y,
                                                    onError: C,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            null != P &&
                                (0, r.jsx)("div", {
                                    className: x.exampleImage,
                                    children: P,
                                }),
                        ],
                    }),
                    (0, r.jsx)(i.olH, {
                        className: x.close,
                        onClick: O.onClose,
                    }),
                ],
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
        t),
    );
}
