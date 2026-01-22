n.d(t, { A: () => g }), n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(554146),
    s = n(366999),
    o = n(160761),
    c = n(953727),
    u = n(795269),
    d = n(248201);
function p(e) {
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
}
let f = "premium_tier_gradient",
    h = "smaller_sparkle_gradient";
function A(e) {
    var t, n;
    let { width: i = 14, height: l = 15, color: a = "white", foreground: s } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["width", "height", "color", "foreground"]);
    return (0, r.jsxs)(
        "svg",
        ((t = p({}, (0, c.A)(p({}, o)))),
        (n = n =
            {
                preserveAspectRatio: "none",
                width: i,
                height: l,
                viewBox: "0 0 14 15",
                className: s,
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, r.jsx)("defs", {
                        children: (0, r.jsxs)("linearGradient", {
                            id: f,
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                (0, r.jsx)("stop", {
                                    offset: "0%",
                                    stopColor: "#8547C6",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: "50%",
                                    stopColor: "#B845C1",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: "100%",
                                    stopColor: "#AB5D8A",
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("linearGradient", {
                        id: h,
                        x1: "-4.95474",
                        y1: "5.44067",
                        x2: "11.2384",
                        y2: "8.58386",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            (0, r.jsx)("stop", { stopColor: "#8547C6" }),
                            (0, r.jsx)("stop", {
                                offset: "0.52899",
                                stopColor: "#B845C1",
                            }),
                            (0, r.jsx)("stop", {
                                offset: "1",
                                stopColor: "#AB5D8A",
                            }),
                        ],
                    }),
                    (0, r.jsx)("path", {
                        d: "M8.59403 1.52779C8.04647 0.0480288 5.95353 0.0480288 5.40597 1.52779L4.56476 3.8011C4.36219 4.34854 3.93057 4.78016 3.38313 4.98273L1.10982 5.82394C-0.36994 6.3715 -0.36994 8.46444 1.10982 9.012L3.38313 9.8532C3.93057 10.0558 4.36219 10.4874 4.56476 11.0348L5.40597 13.3081C5.95353 14.7879 8.04647 14.7879 8.59403 13.3081L9.43524 11.0348C9.63781 10.4874 10.0694 10.0558 10.6169 9.8532L12.8902 9.012C14.3699 8.46444 14.3699 6.3715 12.8902 5.82394L10.6169 4.98273C10.0694 4.78016 9.63781 4.34854 9.43524 3.8011L8.59403 1.52779Z",
                        fill: a,
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
function g(e) {
    let { className: t, startsAt: n, endsAt: i, messageStyle: c, upperCase: p, showSparkles: g } = e,
        [m] = (0, o.Bo)(a.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL, {
            showAfterTimestamp: n.valueOf(),
            cooldownDurationMs: 0,
        }),
        b = (0, s.Ay)(i, c);
    return "" === b
        ? null
        : (p && (b = b.toUpperCase()),
          (0, r.jsxs)("div", {
              className: l()(t, d.Iv),
              children: [
                  g
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(A, {
                                    foreground: d.QX,
                                    color: "url(#".concat(h, ")"),
                                }),
                                (0, r.jsx)(A, {
                                    foreground: d.J0,
                                    color: "url(#".concat(f, ")"),
                                }),
                            ],
                        })
                      : null,
                  (0, r.jsx)(u.R, {
                      text: b,
                      colorOptions:
                          m === a.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL
                              ? u.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                              : u.at.PREMIUM_TIER_2_GREY_FILL,
                  }),
              ],
          }));
}
