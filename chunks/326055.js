n.d(t, { default: () => v }), n(388685), n(953529);
var r = n(255367),
    a = n(73800),
    o = n(494497),
    s = n(442837),
    l = n(304789),
    i = n(481060),
    c = n(905128),
    d = n(870246),
    u = n(639777),
    p = n(262212),
    m = n(795338),
    g = n(845602),
    f = n(603213),
    b = n(606876),
    _ = n(535396),
    h = n(93841),
    x = n(388032),
    j = n(804258);
function v(e) {
    var t,
        n,
        { guildId: v, powerup: k } = e,
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
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ["guildId", "powerup"]);
    let [y, O] = a.useState(void 0),
        P = a.useMemo(() => {
            switch (k.skuId) {
                case o.IN:
                    return (0, r.jsx)(g.E, { guildId: v });
                case o.If:
                    return (0, r.jsx)(g.Z, {});
                case o.A$:
                    return (0, r.jsx)(b.Z, {});
                default:
                    return;
            }
        }, [k, v]);
    (0, d.$)(v, k, d.w.DETAIL);
    let S = (0, u.Z)(v),
        w = _.Rx[k.skuId],
        I = null != w ? _.Cp[w] : null,
        N = (0, s.e7)([c.Z], () => c.Z.getStateForGuild(v)),
        E = null != I ? (null == N ? void 0 : N.allPowerups[I]) : null;
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
                className: j.modal,
                size: i.CgR.DYNAMIC,
            },
            C,
        )),
        (n = n =
            {
                parentComponent: "GuildPowerupPerkModal",
                children: [
                    (0, r.jsxs)(i.hzk, {
                        className: j.modalContentContainer,
                        scrollbarType: "none",
                        children: [
                            (0, r.jsxs)("div", {
                                className: j.sidebar,
                                children: [
                                    (0, r.jsx)(l.$, {
                                        className: j.powerupImage,
                                        children: (0, r.jsx)(m.m, { powerup: k }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: j.contentContainer,
                                        children: [
                                            (0, r.jsx)(i.X6q, {
                                                variant: "heading-xl/extrabold",
                                                children: k.title,
                                            }),
                                            (0, r.jsx)(i.Text, {
                                                className: j.description,
                                                variant: "text-sm/normal",
                                                children: k.description,
                                            }),
                                            null != E &&
                                                (0, r.jsx)(i.Text, {
                                                    className: j.description,
                                                    variant: "text-sm/normal",
                                                    children: x.intl.formatToPlainString(h.default.NAFGkJ, {
                                                        level: E.title,
                                                    }),
                                                }),
                                            (0, r.jsx)(f.q, { powerup: k }),
                                            null != y &&
                                                (0, r.jsx)(i.Text, {
                                                    className: j.error,
                                                    color: "status-danger",
                                                    variant: "text-sm/semibold",
                                                    children: y,
                                                }),
                                            S &&
                                                (0, r.jsx)(p.ZP, {
                                                    className: j.footer,
                                                    guildId: v,
                                                    powerup: k,
                                                    onError: O,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            null != P &&
                                (0, r.jsx)("div", {
                                    className: j.exampleImage,
                                    children: P,
                                }),
                        ],
                    }),
                    (0, r.jsx)(i.olH, {
                        className: j.close,
                        onClick: C.onClose,
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
