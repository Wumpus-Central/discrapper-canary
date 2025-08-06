n.d(t, { default: () => p });
var l = n(255367),
    a = n(73800),
    i = n(481060),
    c = n(561716),
    r = n(721383),
    s = n(313201),
    o = n(63063),
    u = n(857595),
    d = n(981631),
    _ = n(388032),
    h = n(961686);
function p(e) {
    let { transitionState: t, onClose: n } = e,
        p = (0, s.Dt)();
    return (
        a.useEffect(() => {
            u.r_();
        }, []),
        (0, l.jsxs)(i.Y0X, {
            transitionState: t,
            role: "alertdialog",
            "aria-labelledby": p,
            parentComponent: "KeyboardNavigationModal",
            children: [
                (0, l.jsxs)(i.hzk, {
                    className: h.content,
                    children: [
                        (0, l.jsx)(i.X6q, {
                            variant: "heading-xl/semibold",
                            id: p,
                            className: h.header,
                            children: _.intl.format(_.t.V4fxrq, {
                                tab: (e, t) =>
                                    (0, l.jsx)(
                                        i.M2$,
                                        {
                                            shortcut: "tab",
                                            className: h.headerShortcut,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, l.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: _.intl.string(_.t["oQA/OD"]),
                        }),
                        (0, l.jsxs)("ul", {
                            className: h.tips,
                            children: [
                                (0, l.jsxs)("li", {
                                    children: [
                                        (0, l.jsx)(i.M2$, { shortcut: r._.binds["0"] }),
                                        (0, l.jsx)(i.Text, {
                                            variant: "text-md/normal",
                                            children: _.intl.string(_.t["43Qn2t"]),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("li", {
                                    children: [
                                        (0, l.jsx)(i.M2$, { shortcut: c.$.binds["0"] }),
                                        (0, l.jsx)(i.Text, {
                                            variant: "text-md/normal",
                                            children: _.intl.string(_.t.zJg4FR),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: _.intl.format(_.t.EWFVSU, { link: o.Z.getArticleURL(d.BhN.KEYBOARD_NAVIGATION) }),
                        }),
                    ],
                }),
                (0, l.jsx)(i.mzw, {
                    children: (0, l.jsx)(i.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: _.intl.string(_.t.BddRzc),
                        onClick: n,
                        autoFocus: !0,
                    }),
                }),
            ],
        })
    );
}
