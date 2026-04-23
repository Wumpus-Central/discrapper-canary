e.d(a, { default: () => E });
var s = e(627968),
    i = e(64700),
    n = e(935462),
    r = e(534514),
    l = e(475358),
    d = e(834730),
    o = e(821609),
    c = e(675704),
    h = e(512513),
    m = e(915089),
    x = e(975571),
    j = e(955572),
    p = e(652215),
    u = e(985018),
    b = e(262476);
function E(t) {
    let { transitionState: a, onClose: e } = t,
        E = (0, m.GV)();
    return (
        i.useEffect(() => {
            j.Er();
        }, []),
        (0, s.jsxs)(n.EO, {
            transitionState: a,
            role: "alertdialog",
            "aria-labelledby": E,
            parentComponent: "KeyboardNavigationModal",
            children: [
                (0, s.jsxs)(n.$m, {
                    className: b.Qs,
                    children: [
                        (0, s.jsx)(r.D, {
                            variant: "heading-xl/semibold",
                            id: E,
                            className: b.wx,
                            children: u.intl.format(u.t.V4fxrp, {
                                tab: (t, a) => (0, s.jsx)(l.e, { shortcut: "tab", className: b.Wj }, a),
                            }),
                        }),
                        (0, s.jsx)(d.E, { variant: "text-md/normal", children: u.intl.string(u.t["oQA/OB"]) }),
                        (0, s.jsxs)("ul", {
                            className: b.Xq,
                            children: [
                                (0, s.jsxs)("li", {
                                    children: [
                                        (0, s.jsx)(l.e, { shortcut: h.z.binds["0"] }),
                                        (0, s.jsx)(d.E, {
                                            variant: "text-md/normal",
                                            children: u.intl.string(u.t["43Qn2r"]),
                                        }),
                                    ],
                                }),
                                (0, s.jsxs)("li", {
                                    children: [
                                        (0, s.jsx)(l.e, { shortcut: c.R.binds["0"] }),
                                        (0, s.jsx)(d.E, {
                                            variant: "text-md/normal",
                                            children: u.intl.string(u.t.zJg4FY),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)(d.E, {
                            variant: "text-md/normal",
                            children: u.intl.format(u.t.EWFVSW, { link: x.A.getArticleURL(p.MVz.KEYBOARD_NAVIGATION) }),
                        }),
                    ],
                }),
                (0, s.jsx)(n.jl, {
                    children: (0, s.jsx)(o.$, {
                        variant: "primary",
                        size: "sm",
                        text: u.intl.string(u.t.BddRzS),
                        onClick: e,
                        autoFocus: !0,
                    }),
                }),
            ],
        })
    );
}
