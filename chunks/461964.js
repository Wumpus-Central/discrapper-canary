a.d(e, { default: () => m });
var n = a(951288),
    i = a(647438),
    r = a(481060),
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
        i.useEffect(() => {
            o.r_();
        }, []),
        (0, n.jsxs)(r.Y0X, {
            transitionState: e,
            role: "alertdialog",
            "aria-labelledby": m,
            parentComponent: "KeyboardNavigationModal",
            children: [
                (0, n.jsxs)(r.hzk, {
                    className: u.content,
                    children: [
                        (0, n.jsx)(r.Heading, {
                            variant: "heading-xl/semibold",
                            id: m,
                            className: u.header,
                            children: x.intl.format(x.t.V4fxrq, {
                                tab: (t, e) =>
                                    (0, n.jsx)(
                                        r.M2$,
                                        {
                                            shortcut: "tab",
                                            className: u.headerShortcut,
                                        },
                                        e,
                                    ),
                            }),
                        }),
                        (0, n.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: x.intl.string(x.t["oQA/OD"]),
                        }),
                        (0, n.jsxs)("ul", {
                            className: u.tips,
                            children: [
                                (0, n.jsxs)("li", {
                                    children: [
                                        (0, n.jsx)(r.M2$, { shortcut: l._.binds["0"] }),
                                        (0, n.jsx)(r.Text, {
                                            variant: "text-md/normal",
                                            children: x.intl.string(x.t["43Qn2t"]),
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("li", {
                                    children: [
                                        (0, n.jsx)(r.M2$, { shortcut: s.$.binds["0"] }),
                                        (0, n.jsx)(r.Text, {
                                            variant: "text-md/normal",
                                            children: x.intl.string(x.t.zJg4FR),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: x.intl.format(x.t.EWFVSU, { link: c.Z.getArticleURL(h.BhN.KEYBOARD_NAVIGATION) }),
                        }),
                    ],
                }),
                (0, n.jsx)(r.mzw, {
                    children: (0, n.jsx)(r.Button, {
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
