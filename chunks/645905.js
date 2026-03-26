a.d(e, { default: () => j });
var i = a(627968),
    s = a(64700),
    n = a(397927),
    r = a(675704),
    l = a(512513),
    d = a(915089),
    o = a(975571),
    c = a(955572),
    h = a(652215),
    x = a(985018),
    m = a(937948);
function j(t) {
    let { transitionState: e, onClose: a } = t,
        j = (0, d.GV)();
    return (
        s.useEffect(() => {
            c.Er();
        }, []),
        (0, i.jsxs)(n.EOs, {
            transitionState: e,
            role: "alertdialog",
            "aria-labelledby": j,
            parentComponent: "KeyboardNavigationModal",
            children: [
                (0, i.jsxs)(n.$mQ, {
                    className: m.Qs,
                    children: [
                        (0, i.jsx)(n.Heading, {
                            variant: "heading-xl/semibold",
                            id: j,
                            className: m.wx,
                            children: x.intl.format(x.t.V4fxrp, {
                                tab: (t, e) => (0, i.jsx)(n.e7I, { shortcut: "tab", className: m.Wj }, e),
                            }),
                        }),
                        (0, i.jsx)(n.Text, { variant: "text-md/normal", children: x.intl.string(x.t["oQA/OB"]) }),
                        (0, i.jsxs)("ul", {
                            className: m.Xq,
                            children: [
                                (0, i.jsxs)("li", {
                                    children: [
                                        (0, i.jsx)(n.e7I, { shortcut: l.z.binds["0"] }),
                                        (0, i.jsx)(n.Text, {
                                            variant: "text-md/normal",
                                            children: x.intl.string(x.t["43Qn2r"]),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("li", {
                                    children: [
                                        (0, i.jsx)(n.e7I, { shortcut: r.R.binds["0"] }),
                                        (0, i.jsx)(n.Text, {
                                            variant: "text-md/normal",
                                            children: x.intl.string(x.t.zJg4FY),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(n.Text, {
                            variant: "text-md/normal",
                            children: x.intl.format(x.t.EWFVSW, { link: o.A.getArticleURL(h.MVz.KEYBOARD_NAVIGATION) }),
                        }),
                    ],
                }),
                (0, i.jsx)(n.jlY, {
                    children: (0, i.jsx)(n.Button, {
                        variant: "primary",
                        size: "sm",
                        text: x.intl.string(x.t.BddRzS),
                        onClick: a,
                        autoFocus: !0,
                    }),
                }),
            ],
        })
    );
}
