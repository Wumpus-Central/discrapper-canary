n.d(t, { default: () => h }), n(388685), n(953529);
var r = n(951288),
    a = n(647438),
    s = n(494497),
    o = n(442837),
    l = n(481060),
    i = n(905128),
    c = n(870246),
    d = n(639777),
    u = n(262212),
    g = n(795338),
    m = n(845602),
    p = n(603213),
    b = n(606876),
    f = n(535396),
    _ = n(18853),
    x = n(388032),
    j = n(802795);
function h(e) {
    var t,
        n,
        { guildId: h, powerup: v } = e,
        k = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++)
                    (n = s[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ["guildId", "powerup"]);
    let [C, O] = a.useState(void 0),
        y = a.useMemo(() => {
            switch (v.skuId) {
                case s.IN:
                    return (0, r.jsx)(m.E, { guildId: h });
                case s.If:
                    return (0, r.jsx)(m.Z, {});
                case s.A$:
                    return (0, r.jsx)(b.Z, {});
                default:
                    return;
            }
        }, [v, h]);
    (0, c.$)(h, v, c.w.DETAIL);
    let S = (0, d.Z)(h),
        P = f.Rx[v.skuId],
        w = null != P ? f.Cp[P] : null,
        N = (0, o.e7)([i.Z], () => i.Z.getStateForGuild(h)),
        E = null != w ? (null == N ? void 0 : N.allPowerups[w]) : null;
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
                className: j.modal,
                size: l.CgR.DYNAMIC,
            },
            k,
        )),
        (n = n =
            {
                parentComponent: "GuildPowerupPerkModal",
                children: [
                    (0, r.jsxs)(l.hzk, {
                        "data-migration-pending": !0,
                        className: j.modalContentContainer,
                        scrollbarType: "none",
                        children: [
                            (0, r.jsxs)("div", {
                                className: j.sidebar,
                                children: [
                                    (0, r.jsx)(l.$1m, {
                                        className: j.powerupImage,
                                        children: (0, r.jsx)(g.m, { powerup: v }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: j.contentContainer,
                                        children: [
                                            (0, r.jsx)(l.Heading, {
                                                variant: "heading-xl/extrabold",
                                                children: v.title,
                                            }),
                                            (0, r.jsx)(l.Text, {
                                                className: j.description,
                                                variant: "text-sm/normal",
                                                children: v.description,
                                            }),
                                            null != E &&
                                                (0, r.jsx)(l.Text, {
                                                    className: j.description,
                                                    variant: "text-sm/normal",
                                                    children: x.intl.formatToPlainString(_.default.NAFGkH, {
                                                        level: E.title,
                                                    }),
                                                }),
                                            (0, r.jsx)(p.q, { powerup: v }),
                                            null != C &&
                                                (0, r.jsx)(l.Text, {
                                                    className: j.error,
                                                    color: "status-danger",
                                                    variant: "text-sm/semibold",
                                                    children: C,
                                                }),
                                            S &&
                                                (0, r.jsx)(u.ZP, {
                                                    className: j.footer,
                                                    guildId: h,
                                                    powerup: v,
                                                    onError: O,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            null != y &&
                                (0, r.jsx)("div", {
                                    className: j.exampleImage,
                                    children: y,
                                }),
                        ],
                    }),
                    (0, r.jsx)(l.olH, {
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
