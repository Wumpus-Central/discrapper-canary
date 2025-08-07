n.d(t, { Z: () => f }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(585483),
    c = n(981631),
    u = n(388032),
    d = n(900365);
function f() {
    let [e, t] = i.useState(!1),
        [n] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = null;
            function n() {
                t(!0), (e = setTimeout(() => t(!1), 500));
            }
            return (
                l.S.subscribe(c.CkL.EMPHASIZE_NOTICE, n),
                () => {
                    l.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, n), null !== e && clearTimeout(e);
                }
            );
        }, []),
        (0, r.jsx)("div", {
            className: a()(d.container, { [d.visible]: n }),
            role: "status",
            children: (0, r.jsxs)("div", {
                className: a()(d.content, { [d.emphasized]: e }),
                children: [
                    (0, r.jsx)("div", {
                        className: d.message,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "text-primary",
                            children: u.intl.string(u.t["/lQiX1"]),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: d.actions,
                        children: [
                            (0, r.jsx)(s.zxk, {
                                size: "sm",
                                variant: "secondary",
                                text: u.intl.string(u.t.yBZMsb),
                                onClick: () => {},
                            }),
                            (0, r.jsx)(s.zxk, {
                                size: "sm",
                                variant: "primary",
                                text: u.intl.string(u.t.R3BPHx),
                                onClick: () => {},
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
