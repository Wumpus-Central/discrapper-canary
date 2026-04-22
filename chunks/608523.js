"use strict";
n.d(t, { A: () => p });
var a = n(627968),
    i = n(64700),
    r = n(834730),
    l = n(292666),
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
                    placeholder: p,
                    rows: h,
                    character_limit: g,
                    pattern: f,
                },
                onChange: b,
                initialText: A,
                isRequired: x,
            } = e,
            v = i.useMemo(() => d.A.reactParserFor({ ...d.A.defaultRules, link: o.B }), []),
            [E, I] = i.useState(""),
            [T, S] = i.useState(null);
        i.useEffect(() => {
            I(A?.value ?? "");
        }, [A]);
        let N = i.useCallback(
            (e) => {
                let t = null != f ? new RegExp(f) : null;
                null == t || t.test(e)
                    ? null != e && (S(null), I(e), b({ value: e, isValid: !0 }))
                    : (S(c.intl.string(c.t["24xrGb"])), b({ value: e, isValid: !1 }));
            },
            [b, f],
        );
        return (0, a.jsxs)("div", {
            children: [
                (0, a.jsxs)("div", {
                    className: _.QB,
                    children: [
                        null != t &&
                            (0, a.jsxs)(r.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: [t, x && (0, a.jsx)("span", { className: u.m, children: "*" })],
                            }),
                        null != m &&
                            (0, a.jsx)("div", {
                                className: _.a5,
                                children: (0, a.jsx)(r.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: m,
                                }),
                            }),
                    ],
                }),
                1 === h
                    ? (0, a.jsx)(l.k, { maxLength: g, onChange: N, value: E, error: T, placeholder: p })
                    : (0, a.jsx)(s.f, { maxLength: g, onChange: N, value: E, error: T, rows: h, placeholder: p }),
                null != n &&
                    (0, a.jsx)("div", {
                        className: _.a5,
                        children: (0, a.jsx)(r.E, { variant: "text-xs/normal", color: "text-muted", children: v(n) }),
                    }),
            ],
        });
    },
    p = (e) => {
        let { elements: t, onChange: n, state: i } = e,
            r = t.map((e) => {
                let t = e.name;
                return (0, a.jsx)(
                    m,
                    {
                        data: e.data,
                        onChange: (e) => n(t, e.value, e.isValid),
                        initialText: i?.[t] ?? void 0,
                        isRequired: e.should_submit_data,
                    },
                    t,
                );
            });
        return (0, a.jsx)("div", { className: u.k, children: r });
    };
