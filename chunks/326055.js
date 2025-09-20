n.d(t, { default: () => v }), n(388685), n(953529);
var r = n(951288),
    o = n(647438),
    a = n(494497),
    s = n(442837),
    l = n(304789),
    i = n(481060),
    c = n(905128),
    d = n(870246),
    u = n(639777),
    p = n(262212),
    m = n(795338),
    g = n(845602),
    _ = n(603213),
    b = n(606876),
    f = n(535396),
    C = n(989308),
    h = n(388032),
    j = n(802795);
function v(e) {
    var t,
        n,
        { guildId: v, powerup: x } = e,
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
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["guildId", "powerup"]);
    let [y, O] = o.useState(void 0),
        w = o.useMemo(() => {
            switch (x.skuId) {
                case a.IN:
                    return (0, r.jsx)(g.E, { guildId: v });
                case a.If:
                    return (0, r.jsx)(g.Z, {});
                case a.A$:
                    return (0, r.jsx)(b.Z, {});
                default:
                    return;
            }
        }, [x, v]);
    (0, d.$)(v, x, d.w.DETAIL);
    let S = (0, u.Z)(v),
        P = f.Rx[x.skuId],
        E = null != P ? f.Cp[P] : null,
        N = (0, s.e7)([c.Z], () => c.Z.getStateForGuild(v)),
        I = null != E ? (null == N ? void 0 : N.allPowerups[E]) : null;
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
                "data-migration-pending": !0,
                className: j.modal,
                size: i.CgR.DYNAMIC,
            },
            k,
        )),
        (n = n =
            {
                parentComponent: "GuildPowerupPerkModal",
                children: [
                    (0, r.jsxs)(i.hzk, {
                        "data-migration-pending": !0,
                        className: j.modalContentContainer,
                        scrollbarType: "none",
                        children: [
                            (0, r.jsxs)("div", {
                                className: j.sidebar,
                                children: [
                                    (0, r.jsx)(l.$, {
                                        className: j.powerupImage,
                                        children: (0, r.jsx)(m.m, { powerup: x }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: j.contentContainer,
                                        children: [
                                            (0, r.jsx)(i.X6q, {
                                                variant: "heading-xl/extrabold",
                                                children: x.title,
                                            }),
                                            (0, r.jsx)(i.Text, {
                                                className: j.description,
                                                variant: "text-sm/normal",
                                                children: x.description,
                                            }),
                                            null != I &&
                                                (0, r.jsx)(i.Text, {
                                                    className: j.description,
                                                    variant: "text-sm/normal",
                                                    children: h.intl.formatToPlainString(C.default.NAFGkJ, {
                                                        level: I.title,
                                                    }),
                                                }),
                                            (0, r.jsx)(_.q, { powerup: x }),
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
                                                    powerup: x,
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
                        "data-migration-pending": !0,
                        className: j.close,
                        onClick: k.onClose,
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
