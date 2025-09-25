n.d(t, { default: () => j }), n(388685), n(953529);
var r = n(951288),
    o = n(647438),
    a = n(494497),
    s = n(442837),
    l = n(481060),
    i = n(905128),
    c = n(870246),
    d = n(639777),
    u = n(262212),
    p = n(795338),
    m = n(845602),
    g = n(603213),
    _ = n(606876),
    b = n(535396),
    f = n(258640),
    C = n(388032),
    h = n(825268);
function j(e) {
    var t,
        n,
        { guildId: j, powerup: v } = e,
        x = (function (e, t) {
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
    let [k, y] = o.useState(void 0),
        O = o.useMemo(() => {
            switch (v.skuId) {
                case a.IN:
                    return (0, r.jsx)(m.E, { guildId: j });
                case a.If:
                    return (0, r.jsx)(m.Z, {});
                case a.A$:
                    return (0, r.jsx)(_.Z, {});
                default:
                    return;
            }
        }, [v, j]);
    (0, c.$)(j, v, c.w.DETAIL);
    let w = (0, d.Z)(j),
        S = b.Rx[v.skuId],
        P = null != S ? b.Cp[S] : null,
        E = (0, s.e7)([i.Z], () => i.Z.getStateForGuild(j)),
        N = null != P ? (null == E ? void 0 : E.allPowerups[P]) : null;
    return (0, r.jsxs)(
        l.Y0X,
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
                className: h.modal,
                size: l.CgR.DYNAMIC,
            },
            x,
        )),
        (n = n =
            {
                parentComponent: "GuildPowerupPerkModal",
                children: [
                    (0, r.jsxs)(l.hzk, {
                        "data-migration-pending": !0,
                        className: h.modalContentContainer,
                        scrollbarType: "none",
                        children: [
                            (0, r.jsxs)("div", {
                                className: h.sidebar,
                                children: [
                                    (0, r.jsx)(l.$1m, {
                                        className: h.powerupImage,
                                        children: (0, r.jsx)(p.m, { powerup: v }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: h.contentContainer,
                                        children: [
                                            (0, r.jsx)(l.X6q, {
                                                variant: "heading-xl/extrabold",
                                                children: v.title,
                                            }),
                                            (0, r.jsx)(l.Text, {
                                                className: h.description,
                                                variant: "text-sm/normal",
                                                children: v.description,
                                            }),
                                            null != N &&
                                                (0, r.jsx)(l.Text, {
                                                    className: h.description,
                                                    variant: "text-sm/normal",
                                                    children: C.intl.formatToPlainString(f.default.NAFGkJ, {
                                                        level: N.title,
                                                    }),
                                                }),
                                            (0, r.jsx)(g.q, { powerup: v }),
                                            null != k &&
                                                (0, r.jsx)(l.Text, {
                                                    className: h.error,
                                                    color: "status-danger",
                                                    variant: "text-sm/semibold",
                                                    children: k,
                                                }),
                                            w &&
                                                (0, r.jsx)(u.ZP, {
                                                    className: h.footer,
                                                    guildId: j,
                                                    powerup: v,
                                                    onError: y,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            null != O &&
                                (0, r.jsx)("div", {
                                    className: h.exampleImage,
                                    children: O,
                                }),
                        ],
                    }),
                    (0, r.jsx)(l.olH, {
                        "data-migration-pending": !0,
                        className: h.close,
                        onClick: x.onClose,
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
