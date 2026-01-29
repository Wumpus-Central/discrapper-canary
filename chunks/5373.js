n.d(t, {
    i: () => h,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(460890),
    l = n(830149);

function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}

function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var p = (function (e) {
    return (e.XXSMALL = "xxsmall"), (e.XSMALL = "xsmall"), (e.SMALL = "small"), (e.LARGE = "large"), e;
})(p || {});
let _ = "indeterminate";

function h(e) {
    let t,
        {
            className: n,
            percent: a,
            size: c = "small",
            foregroundColor: d = "var(--progressbar-indicator-background)",
            backgroundColor: p = "var(--progressbar-track-background)",
            foregroundGradientColor: h,
            animate: m = !0,
            stepNumber: g,
            stepCount: E,
        } = e,
        { i18n: y } = (0, s.G9)(),
        b = null != a ? a : null != g && null != E ? (g / (E + 1)) * 100 : 0;
    t =
        null != h
            ? {
                  background: "linear-gradient(to right, ".concat(h[0], ", ").concat(h[1], ")"),
              }
            : {
                  backgroundColor: d,
              };
    let O = i.useMemo(() => {
        let e = {
            role: "progressbar",
            "aria-label": "Progress Bar",
        };
        return (
            null != g && null != E
                ? ((e["aria-valuenow"] = g),
                  (e["aria-valuemin"] = 1),
                  (e["aria-valuemax"] = E),
                  (e["aria-label"] = y.STEP_INDICATOR(g, E)))
                : null != a &&
                  "number" == typeof a &&
                  ((e["aria-valuenow"] = a),
                  (e["aria-valuemin"] = 0),
                  (e["aria-valuemax"] = 100),
                  (e["aria-label"] = y.PERCENT_COMPLETE(Math.round(a)))),
            e
        );
    }, [g, E, a, y]);
    return (0, r.jsx)(
        "div",
        f(
            u(
                {
                    className: o()(n, l.progress, l[c]),
                    style: {
                        backgroundColor: p,
                    },
                },
                O,
            ),
            {
                children:
                    b !== _ && "number" == typeof b
                        ? (0, r.jsx)("div", {
                              className: o()(l.progressBar, l[c], {
                                  [l.animating]: m,
                              }),
                              style: u(
                                  {
                                      transform: "translate3d(".concat(Math.min(Math.max(0, b), 100) - 100, "%, 0, 0)"),
                                  },
                                  t,
                              ),
                          })
                        : (0, r.jsxs)(i.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: o()(l.indeterminateBar1, l[c], {
                                          [l.animating]: m,
                                      }),
                                      style: t,
                                  }),
                                  (0, r.jsx)("div", {
                                      className: o()(l.indeterminateBar2, l[c], {
                                          [l.animating]: m,
                                      }),
                                      style: t,
                                  }),
                              ],
                          }),
            },
        ),
    );
}
(h.Sizes = p), (h.INDETERMINATE = _);
