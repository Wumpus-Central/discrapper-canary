a.d(e, { default: () => u });
var n = a(951288),
    r = a(647438),
    i = a(481060),
    s = a(561716),
    l = a(721383),
    d = a(313201),
    c = a(63063),
    o = a(857595),
    h = a(981631),
    x = a(388032),
    m = a(582914);
function u(t) {
    let { transitionState: e, onClose: a } = t,
        u = (0, d.Dt)();
    return (
        r.useEffect(() => {
            o.r_();
        }, []),
        (0, n.jsxs)(i.Y0X, {
            transitionState: e,
            role: "alertdialog",
            "aria-labelledby": u,
            parentComponent: "KeyboardNavigationModal",
            children: [
                (0, n.jsxs)(i.hzk, {
                    className: m.content,
                    children: [
                        (0, n.jsx)(i.X6q, {
                            variant: "heading-xl/semibold",
                            id: u,
                            className: m.header,
                            children: x.intl.format(x.t.V4fxrq, {
                                tab: (t, e) =>
                                    (0, n.jsx)(
                                        i.M2$,
                                        {
                                            shortcut: "tab",
                                            className: m.headerShortcut,
                                        },
                                        e,
                                    ),
                            }),
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: x.intl.string(x.t["oQA/OD"]),
                        }),
                        (0, n.jsxs)("ul", {
                            className: m.tips,
                            children: [
                                (0, n.jsxs)("li", {
                                    children: [
                                        (0, n.jsx)(i.M2$, { shortcut: l._.binds["0"] }),
                                        (0, n.jsx)(i.Text, {
                                            variant: "text-md/normal",
                                            children: x.intl.string(x.t["43Qn2t"]),
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("li", {
                                    children: [
                                        (0, n.jsx)(i.M2$, { shortcut: s.$.binds["0"] }),
                                        (0, n.jsx)(i.Text, {
                                            variant: "text-md/normal",
                                            children: x.intl.string(x.t.zJg4FR),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: x.intl.format(x.t.EWFVSU, { link: c.Z.getArticleURL(h.BhN.KEYBOARD_NAVIGATION) }),
                        }),
                    ],
                }),
                (0, n.jsx)(i.mzw, {
                    children: (0, n.jsx)(i.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: x.intl.string(x.t.BddRzc),
                        onClick: a,
                        autoFocus: !0,
                    }),
                }),
            ],
        })
    );
}
