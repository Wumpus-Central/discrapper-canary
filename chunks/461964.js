a.d(e, { default: () => m });
var n = a(54381),
    r = a(473749),
    i = a(481060),
    s = a(561716),
    l = a(721383),
    d = a(313201),
    c = a(63063),
    o = a(857595),
    h = a(981631),
    x = a(388032),
    u = a(582914);
function m(t) {
    let { transitionState: e, onClose: a } = t,
        m = (0, d.Dt)();
    return (
        r.useEffect(() => {
            o.r_();
        }, []),
        (0, n.jsxs)(i.Y0X, {
            transitionState: e,
            role: "alertdialog",
            "aria-labelledby": m,
            parentComponent: "KeyboardNavigationModal",
            children: [
                (0, n.jsxs)(i.hzk, {
                    className: u.content,
                    children: [
                        (0, n.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            id: m,
                            className: u.header,
                            children: x.intl.format(x.t.V4fxrp, {
                                tab: (t, e) =>
                                    (0, n.jsx)(
                                        i.M2$,
                                        {
                                            shortcut: "tab",
                                            className: u.headerShortcut,
                                        },
                                        e,
                                    ),
                            }),
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: x.intl.string(x.t["oQA/OB"]),
                        }),
                        (0, n.jsxs)("ul", {
                            className: u.tips,
                            children: [
                                (0, n.jsxs)("li", {
                                    children: [
                                        (0, n.jsx)(i.M2$, { shortcut: l._.binds["0"] }),
                                        (0, n.jsx)(i.Text, {
                                            variant: "text-md/normal",
                                            children: x.intl.string(x.t["43Qn2r"]),
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("li", {
                                    children: [
                                        (0, n.jsx)(i.M2$, { shortcut: s.$.binds["0"] }),
                                        (0, n.jsx)(i.Text, {
                                            variant: "text-md/normal",
                                            children: x.intl.string(x.t.zJg4FY),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: x.intl.format(x.t.EWFVSW, { link: c.Z.getArticleURL(h.BhN.KEYBOARD_NAVIGATION) }),
                        }),
                    ],
                }),
                (0, n.jsx)(i.mzw, {
                    children: (0, n.jsx)(i.Button, {
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
