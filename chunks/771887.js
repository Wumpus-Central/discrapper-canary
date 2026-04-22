n.d(t, { $: () => d, A: () => p });
var l = n(627968),
    i = n(64700),
    a = n(696208),
    r = n(534514),
    s = n(834730),
    o = n(349288),
    u = n(985018),
    c = n(236540);
let d = (e) => {
        let { className: t, isEmailResent: n, resendEmail: i } = e;
        return (0, l.jsx)("div", {
            className: t,
            children: (0, l.jsxs)("div", {
                className: c.a,
                children: [
                    (0, l.jsx)(r.D, { variant: "heading-xl/bold", children: u.intl.string(u.t.Q03WWV) }),
                    (0, l.jsxs)("p", {
                        children: [
                            (0, l.jsx)(s.E, { variant: "text-md/normal", children: u.intl.string(u.t.BxPxhI) }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)(s.E, { variant: "text-md/normal", children: u.intl.string(u.t.Y3fdOp) }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsxs)(s.E, {
                                variant: "text-md/normal",
                                children: [
                                    u.intl.string(u.t.Paa4v4),
                                    "\xa0",
                                    n
                                        ? u.intl.string(u.t.StGVvC)
                                        : (0, l.jsx)(o.Anchor, { onClick: i, children: u.intl.string(u.t.Ex7sk9) }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    p = () => {
        let e = i.useMemo(() => [{ variant: "primary", text: u.intl.string(u.t.g8vPzy), disabled: !0 }], []);
        return (0, l.jsx)(a.H, { actions: e });
    };
