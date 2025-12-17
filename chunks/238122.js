n.d(t, { Z: () => m }), n(388685), n(413496), n(433524), n(35282);
var r = n(54381),
    l = n(473749),
    i = n(481060),
    a = n(454585),
    s = n(273744),
    o = n(388032),
    c = n(647889),
    d = n(478411);
let u = (e) => {
        let {
                data: {
                    title: t,
                    subtitle: n,
                    description: u,
                    placeholder: m,
                    rows: b,
                    character_limit: p,
                    pattern: g,
                },
                onChange: f,
                initialText: x,
                isRequired: h,
            } = e,
            v = l.useMemo(() => {
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
            [j, _] = l.useState(""),
            [y, O] = l.useState(null);
        l.useEffect(() => {
            var e;
            _(null != (e = null == x ? void 0 : x.value) ? e : "");
        }, [x]);
        let Z = l.useCallback(
            (e) => {
                let t = null != g ? new RegExp(g) : null;
                null == t || t.test(e)
                    ? null != e &&
                      (O(null),
                      _(e),
                      f({
                          value: e,
                          isValid: !0,
                      }))
                    : (O(o.intl.string(o.t["24xrGb"])),
                      f({
                          value: e,
                          isValid: !1,
                      }));
            },
            [f, g],
        );
        return (0, r.jsxs)("div", {
            className: d.marginBottom8,
            children: [
                (0, r.jsxs)("div", {
                    className: d.marginBottom8,
                    children: [
                        null != t &&
                            (0, r.jsxs)(i.Text, {
                                variant: "text-sm/bold",
                                children: [
                                    t,
                                    h &&
                                        (0, r.jsx)("span", {
                                            className: c.required,
                                            children: "*",
                                        }),
                                ],
                            }),
                        null != u &&
                            (0, r.jsx)("div", {
                                className: d.marginTop4,
                                children: (0, r.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: u,
                                }),
                            }),
                    ],
                }),
                1 === b
                    ? (0, r.jsx)(i.oil, {
                          maxLength: p,
                          onChange: Z,
                          value: j,
                          error: y,
                          placeholder: m,
                          autoFocus: !0,
                      })
                    : (0, r.jsx)(i.Kx8, {
                          maxLength: p,
                          onChange: Z,
                          value: j,
                          error: y,
                          rows: b,
                          placeholder: m,
                          autoFocus: !0,
                      }),
                null != n &&
                    (0, r.jsx)("div", {
                        className: d.marginTop4,
                        children: (0, r.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: v(n),
                        }),
                    }),
            ],
        });
    },
    m = (e) => {
        let { elements: t, onChange: n, state: l } = e,
            i = t.map((e) => {
                var t;
                let i = e.name;
                return (0, r.jsx)(
                    u,
                    {
                        data: e.data,
                        onChange: (e) => n(i, e.value, e.isValid),
                        initialText: null != (t = null == l ? void 0 : l[i]) ? t : void 0,
                        isRequired: e.should_submit_data,
                    },
                    i,
                );
            });
        return (0, r.jsx)("div", { children: i });
    };
