r.d(t, { default: () => f }), r(953529), r(388685);
var n = r(951288),
    o = r(647438),
    c = r(238651),
    s = r(442837),
    a = r(481060),
    i = r(607070),
    l = r(530618),
    u = r(372654),
    p = r(477487);
function f(e) {
    var t,
        r,
        { title: f, description: b, image: O, button: d } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++)
                    (r = c[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["title", "description", "image", "button"]);
    let y = (0, s.e7)([i.Z], () => i.Z.useReducedMotion),
        m = o.useRef(null),
        g = o.useRef(new c.qA()),
        [h, v] = o.useState(null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c.O_, {
                ref: v,
                className: p.confettiCanvas,
                environment: g.current,
            }),
            (0, n.jsxs)(
                a.Y0X,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })(
                    {
                        className: p.modal,
                        size: a.CgR.DYNAMIC,
                    },
                    j,
                )),
                (r = r =
                    {
                        parentComponent: "GuildPowerupActivateModal",
                        children: [
                            (0, n.jsx)(a.hzk, {
                                className: p.modalContentContainer,
                                scrollbarType: "none",
                                children: (0, n.jsxs)("div", {
                                    className: p.container,
                                    ref: m,
                                    children: [
                                        O,
                                        (0, n.jsxs)("div", {
                                            className: p.contentContainer,
                                            children: [
                                                (0, n.jsx)(a.X6q, {
                                                    variant: "heading-xl/extrabold",
                                                    children: f,
                                                }),
                                                (0, n.jsx)(a.Text, {
                                                    tag: "span",
                                                    className: p.description,
                                                    variant: "text-sm/normal",
                                                    children: b,
                                                }),
                                                d,
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, n.jsx)(a.olH, {
                                className: p.close,
                                onClick: j.onClose,
                            }),
                            !y &&
                                (0, n.jsx)(l.Z, {
                                    confettiTarget: m.current,
                                    confettiCanvas: h,
                                    sprites: (0, u.vK)(),
                                }),
                        ],
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                t),
            ),
        ],
    });
}
