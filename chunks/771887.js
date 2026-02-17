"use strict";
n.d(t, { $: () => u, A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927),
    o = n(985018),
    l = n(678863);
let u = (e) => {
        let { className: t, isEmailResent: n, resendEmail: i } = e;
        return (0, r.jsx)("div", {
            className: t,
            children: (0, r.jsxs)("div", {
                className: l.a,
                children: [
                    (0, r.jsx)(s.Heading, { variant: "heading-xl/bold", children: o.intl.string(o.t.Q03WWV) }),
                    (0, r.jsxs)("p", {
                        children: [
                            (0, r.jsx)(s.Text, { variant: "text-md/normal", children: o.intl.string(o.t.BxPxhI) }),
                            (0, r.jsx)("br", {}),
                            (0, r.jsx)(s.Text, { variant: "text-md/normal", children: o.intl.string(o.t.Y3fdOp) }),
                            (0, r.jsx)("br", {}),
                            (0, r.jsxs)(s.Text, {
                                variant: "text-md/normal",
                                children: [
                                    o.intl.string(o.t.Paa4v4),
                                    "\xa0",
                                    n
                                        ? o.intl.string(o.t.StGVvC)
                                        : (0, r.jsx)(s.MzZ, { onClick: i, children: o.intl.string(o.t.Ex7sk9) }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    c = () => {
        let e = i.useMemo(() => [{ variant: "primary", text: o.intl.string(o.t.g8vPzy), disabled: !0 }], []);
        return (0, r.jsx)(a.H7u, { actions: e });
    };
