var r = i(477900),
    a = i(582128),
    n = i(935462),
    l = i(534514),
    e = i(475358),
    d = i(834730),
    o = i(821609),
    c = i(675704),
    h = i(552992),
    m = i(915089),
    x = i(975571),
    j = i(955572),
    b = i(652215),
    u = i(792996),
    p = i(44571);
i.d(
    s,
    {},
    {
        default: function (t) {
            let { transitionState: s, onClose: i } = t,
                g = (0, m.GV)();
            return (
                a.useEffect(() => {
                    j.Er();
                }, []),
                (0, r.jsxs)(n.EO, {
                    transitionState: s,
                    role: "alertdialog",
                    "aria-labelledby": g,
                    parentComponent: "KeyboardNavigationModal",
                    children: [
                        (0, r.jsxs)(n.$m, {
                            className: p.Qs,
                            scrollbarGutter: !1,
                            children: [
                                (0, r.jsx)(l.D, {
                                    variant: "heading-xl/semibold",
                                    id: g,
                                    className: p.wx,
                                    children: u.intl.format(u.t.V4fxrp, {
                                        tab: (t, s) => (0, r.jsx)(e.e, { shortcut: "tab", className: p.Wj }, s),
                                    }),
                                }),
                                (0, r.jsx)(d.E, { variant: "body-md/normal", children: u.intl.string(u.t["oQA/OB"]) }),
                                (0, r.jsxs)("ul", {
                                    className: p.Xq,
                                    children: [
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(e.e, { shortcut: h.z.binds["0"] }),
                                                (0, r.jsx)(d.E, {
                                                    variant: "body-md/normal",
                                                    children: u.intl.string(u.t["43Qn2r"]),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(e.e, { shortcut: c.R.binds["0"] }),
                                                (0, r.jsx)(d.E, {
                                                    variant: "body-md/normal",
                                                    children: u.intl.string(u.t.zJg4FY),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(d.E, {
                                    variant: "body-md/normal",
                                    children: u.intl.format(u.t.EWFVSW, {
                                        link: x.A.getArticleURL(b.MVz.KEYBOARD_NAVIGATION),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(n.jl, {
                            children: (0, r.jsx)(o.$, {
                                variant: "primary",
                                size: "sm",
                                text: u.intl.string(u.t.BddRzS),
                                onClick: i,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                })
            );
        },
    },
);
