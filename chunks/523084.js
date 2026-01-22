r.d(t, {
    default: () => f,
}),
    r(228524),
    r(896048);
var n = r(627968),
    o = r(64700),
    l = r(106778),
    a = r(311907),
    i = r(397927),
    c = r(775602),
    s = r(524246),
    u = r(14368),
    p = r(413526);

function f(e) {
    var t, r;
    let { title: f, description: b, image: d, button: y } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.getOwnPropertyNames(e);
                    for (n = 0; n < l.length; n++)
                        (r = l[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, ["title", "description", "image", "button"]),
        m = (0, a.bG)([c.A], () => c.A.useReducedMotion),
        g = o.useRef(null),
        j = o.useRef(new l.OH()),
        [v, h] = o.useState(null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(l.Fk, {
                ref: h,
                className: p.Lb,
                environment: j.current,
            }),
            (0, n.jsxs)(
                i.EOs,
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
                        "data-migration-pending": !0,
                        className: p.yl,
                        size: i.rIJ.DYNAMIC,
                    },
                    O,
                )),
                (r = r =
                    {
                        parentComponent: "GuildPowerupActivateModal",
                        children: [
                            (0, n.jsx)(i.$mQ, {
                                "data-migration-pending": !0,
                                className: p._F,
                                scrollbarType: "none",
                                children: (0, n.jsxs)("div", {
                                    className: p.kL,
                                    ref: g,
                                    children: [
                                        d,
                                        (0, n.jsxs)("div", {
                                            className: p.hQ,
                                            children: [
                                                (0, n.jsx)(i.Heading, {
                                                    variant: "heading-xl/extrabold",
                                                    children: f,
                                                }),
                                                (0, n.jsx)(i.Text, {
                                                    tag: "span",
                                                    className: p.h_,
                                                    variant: "text-sm/normal",
                                                    children: b,
                                                }),
                                                y,
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, n.jsx)(i.s_y, {
                                "data-migration-pending": !0,
                                className: p.VN,
                                onClick: O.onClose,
                            }),
                            !m &&
                                (0, n.jsx)(s.A, {
                                    confettiTarget: g.current,
                                    confettiCanvas: v,
                                    sprites: (0, u.rA)(),
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
