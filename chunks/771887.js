"use strict";
n.d(t, { $: () => d, A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(696208),
    a = n(534514),
    o = n(834730),
    l = n(349288),
    u = n(985018),
    c = n(94204);
let d = (e) => {
        let { className: t, isEmailResent: n, resendEmail: i } = e;
        return (0, r.jsx)("div", {
            className: t,
            children: (0, r.jsxs)("div", {
                className: c.a,
                children: [
                    (0, r.jsx)(a.D, { variant: "heading-xl/bold", children: u.intl.string(u.t.Q03WWV) }),
                    (0, r.jsxs)("p", {
                        children: [
                            (0, r.jsx)(o.E, { variant: "text-md/normal", children: u.intl.string(u.t.BxPxhI) }),
                            (0, r.jsx)("br", {}),
                            (0, r.jsx)(o.E, { variant: "text-md/normal", children: u.intl.string(u.t.Y3fdOp) }),
                            (0, r.jsx)("br", {}),
                            (0, r.jsxs)(o.E, {
                                variant: "text-md/normal",
                                children: [
                                    u.intl.string(u.t.Paa4v4),
                                    "\xa0",
                                    n
                                        ? u.intl.string(u.t.StGVvC)
                                        : (0, r.jsx)(l.Anchor, { onClick: i, children: u.intl.string(u.t.Ex7sk9) }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    _ = () => {
        let e = i.useMemo(() => [{ variant: "primary", text: u.intl.string(u.t.g8vPzy), disabled: !0 }], []);
        return (0, r.jsx)(s.H, { actions: e });
    };
