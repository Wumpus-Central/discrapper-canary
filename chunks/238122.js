n.d(t, { Z: () => m }), n(388685), n(413496), n(433524), n(35282);
var r = n(54381),
    l = n(473749),
    i = n(481060),
    a = n(454585),
    s = n(273744),
    o = n(388032),
    c = n(124252),
    d = n(197571);
let u = (e) => {
        let {
                data: {
                    title: t,
                    subtitle: n,
                    description: u,
                    placeholder: m,
                    rows: p,
                    character_limit: g,
                    pattern: _,
                },
                onChange: x,
                initialText: b,
                isRequired: h,
            } = e,
            f = l.useMemo(() => {
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
            [v, j] = l.useState(""),
            [y, O] = l.useState(null);
        l.useEffect(() => {
            var e;
            j(null != (e = null == b ? void 0 : b.value) ? e : "");
        }, [b]);
        let Z = l.useCallback(
            (e) => {
                let t = null != _ ? new RegExp(_) : null;
                null == t || t.test(e)
                    ? null != e &&
                      (O(null),
                      j(e),
                      x({
                          value: e,
                          isValid: !0,
                      }))
                    : (O(o.intl.string(o.t["24xrGb"])),
                      x({
                          value: e,
                          isValid: !1,
                      }));
            },
            [x, _],
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
                1 === p
                    ? (0, r.jsx)(i.oil, {
                          maxLength: g,
                          onChange: Z,
                          value: v,
                          error: y,
                          placeholder: m,
                          autoFocus: !0,
                      })
                    : (0, r.jsx)(i.Kx8, {
                          maxLength: g,
                          onChange: Z,
                          value: v,
                          error: y,
                          rows: p,
                          placeholder: m,
                          autoFocus: !0,
                      }),
                null != n &&
                    (0, r.jsx)("div", {
                        className: d.marginTop4,
                        children: (0, r.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: f(n),
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
