n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(846519),
    s = n(481060),
    c = n(458725),
    u = n(906467),
    d = n(63063),
    p = n(618158),
    f = n(981631),
    h = n(388032),
    m = n(606630);
function g(e) {
    let { errorMessage: t, className: n, avError: l } = e,
        g = "",
        { text: b, node: _ } = (function (e) {
            var t;
            if (null == e)
                return {
                    text: null,
                    node: null,
                };
            let n = null == (t = (0, c.hp)(e)) ? void 0 : t.errorCode,
                i = h.intl.formatToPlainString(h.t.ejOT95, { errorCode: n }),
                l = h.intl.format(h.t.If5Q0h, {
                    errorCode: n,
                    helpDeskURL: d.Z.getArticleURL(f.BhN.AV_ERROR_CODES),
                }),
                a = u.Z.isDeveloper;
            return {
                text: a ? "".concat(i, " (").concat(e, ")") : i,
                node: a
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [l, " (", e, ")"],
                      })
                    : l,
            };
        })(l);
    null != t && null != b ? (g = "".concat(t, " ").concat(b)) : null != t && (g = t);
    let [y] = i.useState(new o.V7()),
        [C, v] = i.useState(!1);
    function O() {
        y.start(250, () => {
            v(!1);
        });
    }
    function x() {
        y.stop(), v(!0);
    }
    return (0, r.jsx)(s.aML, {
        forceOpen: C,
        disableTooltipPointerEvents: !1,
        text: (0, r.jsx)(p.Z, {
            children: (0, r.jsxs)("div", {
                onMouseEnter: x,
                onMouseLeave: O,
                children: [
                    t,
                    null != _ &&
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/semibold",
                            color: "text-muted",
                            className: m.errorCodeMessage,
                            children: _,
                        }),
                ],
            }),
        }),
        position: "bottom",
        color: s.r6K.GREY,
        "aria-label": g,
        children: (e) => {
            var t, i;
            return (0, r.jsx)(
                "div",
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
                })({}, e)),
                (i = i =
                    {
                        onMouseEnter: x,
                        onMouseLeave: O,
                        className: a()(n, m.root),
                        children: (0, r.jsx)(p.Z, {
                            children: (0, r.jsx)(s.Mgn, {
                                onMouseEnter: x,
                                onMouseLeave: O,
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: "currentColor",
                                "aria-label": g,
                                className: m.warningIcon,
                            }),
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                t),
            );
        },
    });
}
