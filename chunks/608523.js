n.d(t, {
    A: () => m,
}),
    n(896048),
    n(591487),
    n(727858),
    n(747238);
var l = n(627968),
    r = n(64700),
    a = n(397927),
    i = n(46054),
    s = n(861662),
    o = n(985018),
    c = n(322367),
    d = n(473169);
let u = (e) => {
        let {
                data: {
                    title: t,
                    subtitle: n,
                    description: u,
                    placeholder: m,
                    rows: b,
                    character_limit: p,
                    pattern: x,
                },
                onChange: g,
                initialText: f,
                isRequired: v,
            } = e,
            h = r.useMemo(() => {
                var e, t;
                return i.A.reactParserFor(
                    ((e = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                l = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (l = l.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                l.forEach(function (t) {
                                    var l;
                                    (l = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: l,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = l);
                                });
                        }
                        return e;
                    })({}, i.A.defaultRules)),
                    (t = t =
                        {
                            link: s.B,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, l);
                              }
                              return n;
                          })(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          }),
                    e),
                );
            }, []),
            [j, _] = r.useState(""),
            [A, y] = r.useState(null);
        r.useEffect(() => {
            var e;
            _(null != (e = null == f ? void 0 : f.value) ? e : "");
        }, [f]);
        let O = r.useCallback(
            (e) => {
                let t = null != x ? new RegExp(x) : null;
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
            [g, x],
        );
        return (0, l.jsxs)("div", {
            className: d.QB,
            children: [
                (0, l.jsxs)("div", {
                    className: d.QB,
                    children: [
                        null != t &&
                            (0, l.jsxs)(a.Text, {
                                variant: "text-sm/bold",
                                children: [
                                    t,
                                    v &&
                                        (0, l.jsx)("span", {
                                            className: c.m,
                                            children: "*",
                                        }),
                                ],
                            }),
                        null != u &&
                            (0, l.jsx)("div", {
                                className: d.a5,
                                children: (0, l.jsx)(a.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: u,
                                }),
                            }),
                    ],
                }),
                1 === b
                    ? (0, l.jsx)(a.ksK, {
                          maxLength: p,
                          onChange: O,
                          value: j,
                          error: A,
                          placeholder: m,
                          autoFocus: !0,
                      })
                    : (0, l.jsx)(a.fs1, {
                          maxLength: p,
                          onChange: O,
                          value: j,
                          error: A,
                          rows: b,
                          placeholder: m,
                          autoFocus: !0,
                      }),
                null != n &&
                    (0, l.jsx)("div", {
                        className: d.a5,
                        children: (0, l.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: h(n),
                        }),
                    }),
            ],
        });
    },
    m = (e) => {
        let { elements: t, onChange: n, state: r } = e,
            a = t.map((e) => {
                var t;
                let a = e.name;
                return (0, l.jsx)(
                    u,
                    {
                        data: e.data,
                        onChange: (e) => n(a, e.value, e.isValid),
                        initialText: null != (t = null == r ? void 0 : r[a]) ? t : void 0,
                        isRequired: e.should_submit_data,
                    },
                    a,
                );
            });
        return (0, l.jsx)("div", {
            children: a,
        });
    };
