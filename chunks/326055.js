n.d(t, { default: () => v }), n(388685), n(953529);
var r = n(54381),
    a = n(473749),
    s = n(494497),
    o = n(442837),
    l = n(481060),
    i = n(905128),
    c = n(870246),
    d = n(639777),
    u = n(262212),
    g = n(795338),
    m = n(845602),
    f = n(603213),
    b = n(606876),
    p = n(535396),
    x = n(556970),
    j = n(388032),
    h = n(98834);
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
    let [O, y] = a.useState(void 0),
        _ = a.useMemo(() => {
            switch (k.skuId) {
                case s.IN:
                    return (0, r.jsx)(m.E, { guildId: v });
                case s.If:
                    return (0, r.jsx)(m.Z, {});
                case s.A$:
                    return (0, r.jsx)(b.Z, {});
                default:
                    return;
            }
        }, [k, v]);
    (0, c.$)(v, k, c.w.DETAIL);
    let S = (0, d.Z)(v),
        P = p.Rx[k.skuId],
        w = null != P ? p.Cp[P] : null,
        N = (0, o.e7)([i.Z], () => i.Z.getStateForGuild(v)),
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
                className: h.modal,
                size: l.CgR.DYNAMIC,
            },
            C,
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
                                        children: (0, r.jsx)(g.m, { powerup: k }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: h.contentContainer,
                                        children: [
                                            (0, r.jsx)(l.Heading, {
                                                variant: "heading-xl/extrabold",
                                                children: k.title,
                                            }),
                                            (0, r.jsx)(l.Text, {
                                                className: h.description,
                                                variant: "text-sm/normal",
                                                children: k.description,
                                            }),
                                            null != E &&
                                                (0, r.jsx)(l.Text, {
                                                    className: h.description,
                                                    variant: "text-sm/normal",
                                                    children: j.intl.formatToPlainString(x.default.NAFGkH, {
                                                        level: E.title,
                                                    }),
                                                }),
                                            (0, r.jsx)(f.q, { powerup: k }),
                                            null != O &&
                                                (0, r.jsx)(l.Text, {
                                                    className: h.error,
                                                    color: "status-danger",
                                                    variant: "text-sm/semibold",
                                                    children: O,
                                                }),
                                            S &&
                                                (0, r.jsx)(u.ZP, {
                                                    className: h.footer,
                                                    guildId: v,
                                                    powerup: k,
                                                    onError: y,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            null != _ &&
                                (0, r.jsx)("div", {
                                    className: h.exampleImage,
                                    children: _,
                                }),
                        ],
                    }),
                    (0, r.jsx)(l.olH, {
                        "data-migration-pending": !0,
                        className: h.close,
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
