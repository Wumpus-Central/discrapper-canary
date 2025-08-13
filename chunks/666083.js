n.d(t, { default: () => j }), n(388685), n(953529);
var r = n(255367),
    o = n(73800),
    a = n(505266),
    c = n(442837),
    i = n(481060),
    s = n(607070),
    l = n(530618),
    u = n(372654),
    p = n(262212),
    f = n(795338),
    d = n(535396),
    b = n(93841),
    m = n(388032),
    _ = n(726999);
function j(e) {
    var t,
        n,
        { guildId: j, powerup: y } = e,
        O = (function (e, t) {
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
    let g = (0, c.e7)([s.Z], () => s.Z.useReducedMotion),
        C = o.useRef(null),
        x = o.useRef(new a.qA()),
        [v, h] = o.useState(null),
        w = d.uc.has(y.skuId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.O_, {
                ref: h,
                className: _.confettiCanvas,
                environment: x.current,
            }),
            (0, r.jsxs)(
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
                        className: _.modal,
                        size: i.CgR.DYNAMIC,
                    },
                    O,
                )),
                (n = n =
                    {
                        parentComponent: "GuildPowerupActivateModal",
                        children: [
                            (0, r.jsx)(i.hzk, {
                                className: _.modalContentContainer,
                                scrollbarType: "none",
                                children: (0, r.jsxs)("div", {
                                    className: _.container,
                                    ref: C,
                                    children: [
                                        (0, r.jsx)(f.m, {
                                            className: _.image,
                                            powerup: y,
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: _.contentContainer,
                                            children: [
                                                (0, r.jsx)(i.X6q, {
                                                    variant: "heading-xl/extrabold",
                                                    children: m.intl.formatToPlainString(b.default.lFuOFB, {
                                                        perkName: y.title,
                                                    }),
                                                }),
                                                (0, r.jsx)(i.Text, {
                                                    tag: "span",
                                                    className: _.description,
                                                    variant: "text-sm/normal",
                                                    children: m.intl.formatToPlainString(b.default.y3wHoq, {
                                                        perkName: y.title,
                                                    }),
                                                }),
                                                w
                                                    ? (0, r.jsx)(p.ms, {
                                                          className: _.button,
                                                          guildId: j,
                                                          powerup: y,
                                                          onClick: O.onClose,
                                                      })
                                                    : (0, r.jsx)("div", {
                                                          "data-button-hoisted-classname-wrapper": !0,
                                                          className: _.button,
                                                          children: (0, r.jsx)(i.zxk, {
                                                              variant: "primary",
                                                              text: m.intl.string(m.t.cpT0Cg),
                                                              onClick: O.onClose,
                                                          }),
                                                      }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)(i.olH, {
                                className: _.close,
                                onClick: O.onClose,
                            }),
                            !g &&
                                (0, r.jsx)(l.Z, {
                                    confettiTarget: C.current,
                                    confettiCanvas: v,
                                    sprites: (0, u.vK)(),
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
            ),
        ],
    });
}
