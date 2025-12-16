n.d(t, { Z: () => f }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var r = n(54381),
    l = n(473749),
    i = n(481060),
    a = n(454585),
    s = n(273744),
    o = n(388032),
    c = n(647889),
    d = n(478411);
let u = ["cdn.discord.com", "cdn.discordapp.com", "media.discordapp.net"],
    m = /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;
function b(e) {
    try {
        return new URL(e), !0;
    } catch (e) {
        return !1;
    }
}
function p(e) {
    return (
        "" !== e &&
        !!b(e) &&
        !(function (e) {
            try {
                let t = new URL(e);
                return u.some((e) => t.hostname === e);
            } catch (e) {
                return !1;
            }
        })(e)
    );
}
let g = (e) => {
        let {
                data: { title: t, subtitle: n, placeholder: u, message_link_title: g, message_link_placeholder: f },
                onChange: x,
                initialContentUrl: h,
                initialMessageUrl: v,
                isRequired: j,
            } = e,
            _ = l.useMemo(() => {
                var e, t;
                return a.Z.reactParserFor(
                    ((e = (function (e) {
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
                    })({}, a.Z.defaultRules)),
                    (t = t = { link: s.s }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          }),
                    e),
                );
            }, []),
            [y, O] = l.useState(""),
            [Z, C] = l.useState(""),
            [I, S] = l.useState(null),
            [N, P] = l.useState(null),
            [T, k] = l.useState(!1);
        l.useEffect(() => {
            var e, t;
            O(null != (e = null == h ? void 0 : h.value) ? e : ""),
                C(null != (t = null == v ? void 0 : v.value) ? t : ""),
                (null == h ? void 0 : h.value) != null && "" !== h.value && k(p(h.value));
        }, [h, v]);
        let E = l.useCallback(
                (e) => {
                    if ((O(e), "" === e)) {
                        S(null),
                            k(!1),
                            C(""),
                            P(null),
                            x({
                                value: e,
                                isValid: !1,
                            });
                        return;
                    }
                    if (!b(e)) {
                        S(o.intl.string(o.t["24xrGb"])),
                            k(!1),
                            C(""),
                            P(null),
                            x({
                                value: e,
                                isValid: !1,
                            });
                        return;
                    }
                    let t = p(e);
                    k(t),
                        S(null),
                        t
                            ? "" === Z
                                ? x({
                                      value: e,
                                      isValid: !1,
                                  })
                                : m.test(Z)
                                  ? x(
                                        {
                                            value: e,
                                            isValid: !0,
                                        },
                                        {
                                            value: Z,
                                            isValid: !0,
                                        },
                                    )
                                  : x(
                                        {
                                            value: e,
                                            isValid: !1,
                                        },
                                        {
                                            value: Z,
                                            isValid: !1,
                                        },
                                    )
                            : (C(""),
                              P(null),
                              x({
                                  value: e,
                                  isValid: !0,
                              }));
                },
                [x, Z],
            ),
            w = l.useCallback(
                (e) => {
                    if ((C(e), "" === e || !m.test(e))) {
                        P(o.intl.string(o.t["24xrGb"])),
                            x(
                                {
                                    value: y,
                                    isValid: !1,
                                },
                                {
                                    value: e,
                                    isValid: !1,
                                },
                            );
                        return;
                    }
                    P(null),
                        x(
                            {
                                value: y,
                                isValid: !0,
                            },
                            {
                                value: e,
                                isValid: !0,
                            },
                        );
                },
                [x, y],
            );
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(i.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsxs)("div", {
                            className: d.marginBottom8,
                            children: [
                                null != t &&
                                    (0, r.jsx)("div", {
                                        className: d.marginBottom8,
                                        children: (0, r.jsxs)(i.Text, {
                                            variant: "text-sm/bold",
                                            children: [
                                                t,
                                                j &&
                                                    (0, r.jsx)("span", {
                                                        className: c.required,
                                                        children: "*",
                                                    }),
                                            ],
                                        }),
                                    }),
                                (0, r.jsx)(i.oil, {
                                    onChange: E,
                                    value: y,
                                    error: I,
                                    placeholder: u,
                                    autoFocus: !0,
                                }),
                            ],
                        }),
                        T &&
                            null != g &&
                            (0, r.jsxs)("div", {
                                className: d.marginBottom8,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: d.marginBottom8,
                                        children: (0, r.jsxs)(i.Text, {
                                            variant: "text-sm/bold",
                                            children: [
                                                g,
                                                j &&
                                                    (0, r.jsx)("span", {
                                                        className: c.required,
                                                        children: "*",
                                                    }),
                                            ],
                                        }),
                                    }),
                                    (0, r.jsx)(i.oil, {
                                        onChange: w,
                                        value: Z,
                                        error: N,
                                        placeholder: f,
                                    }),
                                ],
                            }),
                    ],
                }),
                null != n &&
                    (0, r.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        children: _(n),
                    }),
            ],
        });
    },
    f = (e) => {
        let { element: t, onChange: n, state: i } = e,
            a = t.name,
            s = "".concat(t.name, "_message_link"),
            o = l.useCallback(
                (e, t) => {
                    null != t ? n(a, e.value, e.isValid && t.isValid, s, t.value) : n(a, e.value, e.isValid, s, void 0);
                },
                [n, a, s],
            );
        return (0, r.jsx)(g, {
            data: t.data,
            onChange: o,
            initialContentUrl: null == i ? void 0 : i[a],
            initialMessageUrl: null == i ? void 0 : i[s],
            isRequired: t.should_submit_data,
        });
    };
