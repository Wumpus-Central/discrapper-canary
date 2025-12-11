n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(846519),
    c = n(481060),
    s = n(458725),
    u = n(906467),
    d = n(63063),
    f = n(618158),
    p = n(981631),
    b = n(388032),
    m = n(71651);
function g(e) {
    let { errorMessage: t, className: n, avError: l } = e,
        g = i.useRef(null),
        v = "",
        { text: h, node: E } = (function (e) {
            var t;
            if (null == e)
                return {
                    text: null,
                    node: null,
                };
            let n = null == (t = (0, s.hp)(e)) ? void 0 : t.errorCode,
                i = b.intl.formatToPlainString(b.t.ejOT95, { errorCode: n }),
                l = b.intl.format(b.t.If5Q0h, {
                    errorCode: n,
                    helpDeskURL: d.Z.getArticleURL(p.BhN.AV_ERROR_CODES),
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
    v = null != h ? "".concat(t, " ").concat(h) : t;
    let [_] = i.useState(new o.V7()),
        [y, S] = i.useState(!1),
        [O, C] = i.useState(!1),
        w = i.useCallback(() => {
            _.start(
                250,
                () => {
                    S(!1);
                },
                !1,
            );
        }, [_, S]),
        I = i.useCallback(() => {
            _.stop(), S(!0);
        }, [_, S]),
        P = i.useCallback(() => {
            C(!0);
        }, []),
        j = i.useCallback(() => {
            C(!1);
        }, []);
    return (0, r.jsx)(c.yRy, {
        renderPopout: () =>
            (0, r.jsx)(f.Z, {
                children: (0, r.jsxs)("div", {
                    className: m.popout,
                    onMouseEnter: I,
                    onMouseLeave: w,
                    children: [
                        t,
                        null != E &&
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                className: m.errorCodeMessage,
                                children: E,
                            }),
                    ],
                }),
            }),
        targetElementRef: g,
        shouldShow: O || y,
        position: "bottom",
        children: (e) => {
            var t, i;
            return (0, r.jsx)(f.Z, {
                children: (0, r.jsx)(c.tEY, {
                    children: (0, r.jsx)(
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
                        })(
                            {
                                ref: g,
                                tabIndex: 0,
                                onMouseEnter: I,
                                onMouseLeave: w,
                                onFocus: P,
                                onBlur: j,
                                className: a()(n, m.root),
                                "aria-label": v,
                            },
                            e,
                        )),
                        (i = i =
                            {
                                children: (0, r.jsx)(c.Mgn, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                    className: m.warningIcon,
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
                    ),
                }),
            });
        },
    });
}
