i.d(s, { default: () => g });
var r = i(477900),
    a = i(582128),
    n = i(935462),
    e = i(297264),
    l = i(475358),
    d = i(834730),
    c = i(821609),
    o = i(675704),
    x = i(28647),
    h = i(915089),
    m = i(975571),
    j = i(955572),
    u = i(652215),
    b = i(375708),
    p = i(44571);
function g(t) {
    let { transitionState: s, onClose: i } = t,
        g = (0, h.GV)();
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
                        (0, r.jsx)(e.D, {
                            variant: "heading-xl/semibold",
                            id: g,
                            className: p.wx,
                            children: b.intl.format(b.t.V4fxrp, {
                                tab: (t, s) => (0, r.jsx)(l.e, { shortcut: "tab", className: p.Wj }, s),
                            }),
                        }),
                        (0, r.jsx)(d.E, { variant: "text-md/normal", children: b.intl.string(b.t["oQA/OB"]) }),
                        (0, r.jsxs)("ul", {
                            className: p.Xq,
                            children: [
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsx)(l.e, { shortcut: x.z.binds["0"] }),
                                        (0, r.jsx)(d.E, {
                                            variant: "text-md/normal",
                                            children: b.intl.string(b.t["43Qn2r"]),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsx)(l.e, { shortcut: o.R.binds["0"] }),
                                        (0, r.jsx)(d.E, {
                                            variant: "text-md/normal",
                                            children: b.intl.string(b.t.zJg4FY),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(d.E, {
                            variant: "text-md/normal",
                            children: b.intl.format(b.t.EWFVSW, { link: m.A.getArticleURL(u.MVz.KEYBOARD_NAVIGATION) }),
                        }),
                    ],
                }),
                (0, r.jsx)(n.jl, {
                    children: (0, r.jsx)(c.$, {
                        variant: "primary",
                        size: "sm",
                        text: b.intl.string(b.t.BddRzS),
                        onClick: i,
                        autoFocus: !0,
                    }),
                }),
            ],
        })
    );
}
