s.d(e, {
    default: () => j,
});
var a = s(627968),
    i = s(64700),
    n = s(397927),
    r = s(675704),
    l = s(512513),
    d = s(915089),
    c = s(975571),
    x = s(955572),
    o = s(652215),
    h = s(985018),
    m = s(51057);

function j(t) {
    let { transitionState: e, onClose: s } = t,
        j = (0, d.GV)();
    return (
        i.useEffect(() => {
            x.Er();
        }, []),
        (0, a.jsxs)(n.EOs, {
            transitionState: e,
            role: "alertdialog",
            "aria-labelledby": j,
            parentComponent: "KeyboardNavigationModal",
            children: [
                (0, a.jsxs)(n.$mQ, {
                    className: m.Qs,
                    children: [
                        (0, a.jsx)(n.Heading, {
                            variant: "heading-xl/semibold",
                            id: j,
                            className: m.wx,
                            children: h.intl.format(h.t.V4fxrp, {
                                tab: (t, e) =>
                                    (0, a.jsx)(
                                        n.e7I,
                                        {
                                            shortcut: "tab",
                                            className: m.Wj,
                                        },
                                        e,
                                    ),
                            }),
                        }),
                        (0, a.jsx)(n.Text, {
                            variant: "text-md/normal",
                            children: h.intl.string(h.t["oQA/OB"]),
                        }),
                        (0, a.jsxs)("ul", {
                            className: m.Xq,
                            children: [
                                (0, a.jsxs)("li", {
                                    children: [
                                        (0, a.jsx)(n.e7I, {
                                            shortcut: l.z.binds["0"],
                                        }),
                                        (0, a.jsx)(n.Text, {
                                            variant: "text-md/normal",
                                            children: h.intl.string(h.t["43Qn2r"]),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("li", {
                                    children: [
                                        (0, a.jsx)(n.e7I, {
                                            shortcut: r.R.binds["0"],
                                        }),
                                        (0, a.jsx)(n.Text, {
                                            variant: "text-md/normal",
                                            children: h.intl.string(h.t.zJg4FY),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(n.Text, {
                            variant: "text-md/normal",
                            children: h.intl.format(h.t.EWFVSW, {
                                link: c.A.getArticleURL(o.MVz.KEYBOARD_NAVIGATION),
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)(n.jlY, {
                    children: (0, a.jsx)(n.Button, {
                        variant: "primary",
                        size: "sm",
                        text: h.intl.string(h.t.BddRzS),
                        onClick: s,
                        autoFocus: !0,
                    }),
                }),
            ],
        })
    );
}
