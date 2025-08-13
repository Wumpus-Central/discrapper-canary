n.d(t, { default: () => v }), n(388685), n(953529);
var r = n(255367),
    o = n(73800),
    a = n(494497),
    s = n(442837),
    l = n(304789),
    i = n(481060),
    c = n(905128),
    d = n(870246),
    u = n(639777),
    p = n(262212),
    m = n(795338),
    _ = n(845602),
    b = n(603213),
    g = n(606876),
    f = n(535396),
    x = n(93841),
    h = n(388032),
    j = n(804258);
function v(e) {
    var t,
        n,
        { guildId: v, powerup: k } = e,
        C = (function (e, t) {
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
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["guildId", "powerup"]);
    let [y, O] = o.useState(void 0),
        w = o.useMemo(() => {
            switch (k.skuId) {
                case a.IN:
                    return (0, r.jsx)(_.E, { guildId: v });
                case a.If:
                    return (0, r.jsx)(_.Z, {});
                case a.A$:
                    return (0, r.jsx)(g.Z, {});
                default:
                    return;
            }
        }, [k, v]);
    (0, d.$)(v, k, d.w.DETAIL);
    let S = (0, u.Z)(v),
        P = f.Rx[k.skuId],
        I = null != P ? f.Cp[P] : null,
        E = (0, s.e7)([c.Z], () => c.Z.getStateForGuild(v)),
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
                                            null != N &&
                                                (0, r.jsx)(i.Text, {
                                                    className: j.description,
                                                    variant: "text-sm/normal",
                                                    children: h.intl.formatToPlainString(x.default.NAFGkJ, {
                                                        level: N.title,
                                                    }),
                                                }),
                                            (0, r.jsx)(b.q, { powerup: k }),
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
                            null != w &&
                                (0, r.jsx)("div", {
                                    className: j.exampleImage,
                                    children: w,
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
