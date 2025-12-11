n.d(t, { Z: () => m }), n(388685), n(413496), n(433524), n(35282);
var r = n(54381),
    l = n(473749),
    i = n(481060),
    a = n(454585),
    s = n(273744),
    o = n(388032),
    d = n(647889),
    c = n(478411);
let u = (e) => {
        let {
                data: { title: t, subtitle: n, placeholder: u, rows: m, character_limit: b, pattern: p },
                onChange: g,
                initialText: f,
                isRequired: h,
            } = e,
            x = l.useMemo(() => {
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
            [v, _] = l.useState(""),
            [j, y] = l.useState(null);
        l.useEffect(() => {
            var e;
            _(null != (e = null == f ? void 0 : f.value) ? e : "");
        }, [f]);
        let O = l.useCallback(
            (e) => {
                let t = null != p ? new RegExp(p) : null;
                null == t || t.test(e)
                    ? null != e &&
                      (y(null),
                      _(e),
                      g({
                          value: e,
                          isValid: !0,
                      }))
                    : (y(o.intl.string(o.t["24xrGb"])),
                      g({
                          value: e,
                          isValid: !1,
                      }));
            },
            [g, p],
        );
        return (0, r.jsxs)("div", {
            className: c.marginBottom8,
            children: [
                null != t &&
                    (0, r.jsx)("div", {
                        className: c.marginBottom8,
                        children: (0, r.jsxs)(i.Text, {
                            variant: "text-sm/bold",
                            children: [
                                t,
                                h &&
                                    (0, r.jsx)("span", {
                                        className: d.required,
                                        children: "*",
                                    }),
                            ],
                        }),
                    }),
                1 === m
                    ? (0, r.jsx)(i.oil, {
                          maxLength: b,
                          onChange: O,
                          value: v,
                          error: j,
                          placeholder: u,
                          autoFocus: !0,
                      })
                    : (0, r.jsx)(i.Kx8, {
                          maxLength: b,
                          onChange: O,
                          value: v,
                          error: j,
                          rows: m,
                          placeholder: u,
                          autoFocus: !0,
                      }),
                null != n &&
                    (0, r.jsx)("div", {
                        className: c.marginTop4,
                        children: (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: x(n),
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
