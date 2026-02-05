n.d(t, { A: () => m });
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(46054),
    s = n(861662),
    d = n(985018),
    o = n(322367),
    u = n(473169);
let c = (e) => {
        let {
                data: {
                    title: t,
                    subtitle: n,
                    description: c,
                    placeholder: m,
                    rows: _,
                    character_limit: x,
                    pattern: g,
                },
                onChange: h,
                initialText: p,
                isRequired: A,
            } = e,
            b = a.useMemo(() => r.A.reactParserFor({ ...r.A.defaultRules, link: s.B }), []),
            [v, f] = a.useState(""),
            [j, T] = a.useState(null);
        a.useEffect(() => {
            f(p?.value ?? "");
        }, [p]);
        let N = a.useCallback(
            (e) => {
                let t = null != g ? new RegExp(g) : null;
                null == t || t.test(e)
                    ? null != e && (T(null), f(e), h({ value: e, isValid: !0 }))
                    : (T(d.intl.string(d.t["24xrGb"])), h({ value: e, isValid: !1 }));
            },
            [h, g],
        );
        return (0, l.jsxs)("div", {
            className: u.QB,
            children: [
                (0, l.jsxs)("div", {
                    className: u.QB,
                    children: [
                        null != t &&
                            (0, l.jsxs)(i.Text, {
                                variant: "text-sm/bold",
                                children: [t, A && (0, l.jsx)("span", { className: o.m, children: "*" })],
                            }),
                        null != c &&
                            (0, l.jsx)("div", {
                                className: u.a5,
                                children: (0, l.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: c,
                                }),
                            }),
                    ],
                }),
                1 === _
                    ? (0, l.jsx)(i.ksK, {
                          maxLength: x,
                          onChange: N,
                          value: v,
                          error: j,
                          placeholder: m,
                          autoFocus: !0,
                      })
                    : (0, l.jsx)(i.fs1, {
                          maxLength: x,
                          onChange: N,
                          value: v,
                          error: j,
                          rows: _,
                          placeholder: m,
                          autoFocus: !0,
                      }),
                null != n &&
                    (0, l.jsx)("div", {
                        className: u.a5,
                        children: (0, l.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: b(n),
                        }),
                    }),
            ],
        });
    },
    m = (e) => {
        let { elements: t, onChange: n, state: a } = e,
            i = t.map((e) => {
                let t = e.name;
                return (0, l.jsx)(
                    c,
                    {
                        data: e.data,
                        onChange: (e) => n(t, e.value, e.isValid),
                        initialText: a?.[t] ?? void 0,
                        isRequired: e.should_submit_data,
                    },
                    t,
                );
            });
        return (0, l.jsx)("div", { children: i });
    };
