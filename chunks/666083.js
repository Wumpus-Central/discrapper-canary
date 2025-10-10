n.d(t, { default: () => p }), n(953529), n(388685);
var r = n(951288),
    a = n(647438),
    o = n(238651),
    i = n(442837),
    c = n(481060),
    l = n(607070),
    s = n(530618),
    u = n(372654),
    f = n(477487);
function p(e) {
    var t,
        n,
        { title: p, description: d, image: b, button: m } = e,
        g = (function (e, t) {
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
        })(e, ["title", "description", "image", "button"]);
    let O = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
        y = a.useRef(null),
        j = a.useRef(new o.qA()),
        [v, h] = a.useState(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.O_, {
                ref: h,
                className: f.confettiCanvas,
                environment: j.current,
            }),
            (0, r.jsxs)(
                c.Y0X,
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
                        className: f.modal,
                        size: c.CgR.DYNAMIC,
                    },
                    g,
                )),
                (n = n =
                    {
                        parentComponent: "GuildPowerupActivateModal",
                        children: [
                            (0, r.jsx)(c.hzk, {
                                "data-migration-pending": !0,
                                className: f.modalContentContainer,
                                scrollbarType: "none",
                                children: (0, r.jsxs)("div", {
                                    className: f.container,
                                    ref: y,
                                    children: [
                                        b,
                                        (0, r.jsxs)("div", {
                                            className: f.contentContainer,
                                            children: [
                                                (0, r.jsx)(c.X6q, {
                                                    variant: "heading-xl/extrabold",
                                                    children: p,
                                                }),
                                                (0, r.jsx)(c.Text, {
                                                    tag: "span",
                                                    className: f.description,
                                                    variant: "text-sm/normal",
                                                    children: d,
                                                }),
                                                m,
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)(c.olH, {
                                "data-migration-pending": !0,
                                className: f.close,
                                onClick: g.onClose,
                            }),
                            !O &&
                                (0, r.jsx)(s.Z, {
                                    confettiTarget: y.current,
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
