n.d(t, { A: () => h });
var l = n(627968),
    a = n(64700),
    i = n(834730),
    r = n(292666),
    s = n(260598),
    d = n(46054),
    o = n(861662),
    c = n(985018),
    u = n(775923),
    _ = n(818050);
let m = (e) => {
        let {
                data: {
                    title: t,
                    subtitle: n,
                    description: m,
                    placeholder: h,
                    rows: g,
                    character_limit: p,
                    pattern: x,
                },
                onChange: A,
                initialText: f,
                isRequired: v,
            } = e,
            b = a.useMemo(() => d.A.reactParserFor({ ...d.A.defaultRules, link: o.B }), []),
            [N, E] = a.useState(""),
            [S, T] = a.useState(null);
        a.useEffect(() => {
            E(f?.value ?? "");
        }, [f]);
        let j = a.useCallback(
            (e) => {
                let t = null != x ? new RegExp(x) : null;
                null == t || t.test(e)
                    ? null != e && (T(null), E(e), A({ value: e, isValid: !0 }))
                    : (T(c.intl.string(c.t["24xrGb"])), A({ value: e, isValid: !1 }));
            },
            [A, x],
        );
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsxs)("div", {
                    className: _.QB,
                    children: [
                        null != t &&
                            (0, l.jsxs)(i.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: [t, v && (0, l.jsx)("span", { className: u.m, children: "*" })],
                            }),
                        null != m &&
                            (0, l.jsx)("div", {
                                className: _.a5,
                                children: (0, l.jsx)(i.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: m,
                                }),
                            }),
                    ],
                }),
                1 === g
                    ? (0, l.jsx)(r.k, { maxLength: p, onChange: j, value: N, error: S, placeholder: h })
                    : (0, l.jsx)(s.f, { maxLength: p, onChange: j, value: N, error: S, rows: g, placeholder: h }),
                null != n &&
                    (0, l.jsx)("div", {
                        className: _.a5,
                        children: (0, l.jsx)(i.E, { variant: "text-xs/normal", color: "text-muted", children: b(n) }),
                    }),
            ],
        });
    },
    h = (e) => {
        let { elements: t, onChange: n, state: a } = e,
            i = t.map((e) => {
                let t = e.name;
                return (0, l.jsx)(
                    m,
                    {
                        data: e.data,
                        onChange: (e) => n(t, e.value, e.isValid),
                        initialText: a?.[t] ?? void 0,
                        isRequired: e.should_submit_data,
                    },
                    t,
                );
            });
        return (0, l.jsx)("div", { className: u.k, children: i });
    };
