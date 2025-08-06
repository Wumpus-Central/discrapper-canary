n.d(t, { default: () => m }), n(388685), n(953529);
var r = n(255367),
    o = n(73800),
    i = n(505266),
    l = n(442837),
    a = n(481060),
    c = n(607070),
    s = n(530618),
    u = n(372654),
    p = n(262212),
    d = n(795338),
    f = n(535396),
    b = n(93841),
    O = n(388032),
    y = n(548197);
function m(e) {
    var t,
        n,
        { guildId: m, powerup: j } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["guildId", "powerup"]);
    let v = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        x = o.useRef(null),
        P = o.useRef(new i.qA()),
        [w, _] = o.useState(null),
        h = f.uc.has(j.skuId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.O_, {
                ref: _,
                className: y.confettiCanvas,
                environment: P.current,
            }),
            (0, r.jsxs)(
                a.Y0X,
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
                        className: y.modal,
                        size: a.CgR.DYNAMIC,
                    },
                    g,
                )),
                (n = n =
                    {
                        parentComponent: "GuildPowerupActivateModal",
                        children: [
                            (0, r.jsx)(a.hzk, {
                                className: y.modalContentContainer,
                                scrollbarType: "none",
                                children: (0, r.jsxs)("div", {
                                    className: y.container,
                                    ref: x,
                                    children: [
                                        (0, r.jsx)(d.m, {
                                            className: y.image,
                                            powerup: j,
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: y.contentContainer,
                                            children: [
                                                (0, r.jsx)(a.X6q, {
                                                    variant: "heading-xl/extrabold",
                                                    children: O.intl.formatToPlainString(b.default.lFuOFB, {
                                                        perkName: j.title,
                                                    }),
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    tag: "span",
                                                    className: y.description,
                                                    variant: "text-sm/normal",
                                                    children: O.intl.formatToPlainString(b.default.y3wHoq, {
                                                        perkName: j.title,
                                                    }),
                                                }),
                                                h
                                                    ? (0, r.jsx)(p.ms, {
                                                          className: y.button,
                                                          guildId: m,
                                                          powerup: j,
                                                          onClick: g.onClose,
                                                      })
                                                    : (0, r.jsx)("div", {
                                                          "data-button-hoisted-classname-wrapper": !0,
                                                          className: y.button,
                                                          children: (0, r.jsx)(a.zxk, {
                                                              variant: "primary",
                                                              text: O.intl.string(O.t.cpT0Cg),
                                                              onClick: g.onClose,
                                                          }),
                                                      }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)(a.olH, {
                                className: y.close,
                                onClick: g.onClose,
                            }),
                            !v &&
                                (0, r.jsx)(s.Z, {
                                    confettiTarget: x.current,
                                    confettiCanvas: w,
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
