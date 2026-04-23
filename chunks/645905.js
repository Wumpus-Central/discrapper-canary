e.d(a, { default: () => E });
var s = e(627968),
    i = e(64700),
    n = e(935462),
    r = e(534514),
    l = e(475358),
    d = e(834730),
    o = e(821609),
    c = e(675704),
    h = e(28647),
    m = e(915089),
    x = e(975571),
    j = e(955572),
    p = e(652215),
    b = e(985018),
    u = e(262476);
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
                    className: u.Qs,
                    children: [
                        (0, s.jsx)(r.D, {
                            variant: "heading-xl/semibold",
                            id: E,
                            className: u.wx,
                            children: b.intl.format(b.t.V4fxrp, {
                                tab: (t, a) => (0, s.jsx)(l.e, { shortcut: "tab", className: u.Wj }, a),
                            }),
                        }),
                        (0, s.jsx)(d.E, { variant: "text-md/normal", children: b.intl.string(b.t["oQA/OB"]) }),
                        (0, s.jsxs)("ul", {
                            className: u.Xq,
                            children: [
                                (0, s.jsxs)("li", {
                                    children: [
                                        (0, s.jsx)(l.e, { shortcut: h.z.binds["0"] }),
                                        (0, s.jsx)(d.E, {
                                            variant: "text-md/normal",
                                            children: b.intl.string(b.t["43Qn2r"]),
                                        }),
                                    ],
                                }),
                                (0, s.jsxs)("li", {
                                    children: [
                                        (0, s.jsx)(l.e, { shortcut: c.R.binds["0"] }),
                                        (0, s.jsx)(d.E, {
                                            variant: "text-md/normal",
                                            children: b.intl.string(b.t.zJg4FY),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)(d.E, {
                            variant: "text-md/normal",
                            children: b.intl.format(b.t.EWFVSW, { link: x.A.getArticleURL(p.MVz.KEYBOARD_NAVIGATION) }),
                        }),
                    ],
                }),
                (0, s.jsx)(n.jl, {
                    children: (0, s.jsx)(o.$, {
                        variant: "primary",
                        size: "sm",
                        text: b.intl.string(b.t.BddRzS),
                        onClick: e,
                        autoFocus: !0,
                    }),
                }),
            ],
        })
    );
}
