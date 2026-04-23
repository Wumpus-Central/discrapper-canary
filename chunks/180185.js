n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(972213),
    l = n(695366),
    s = n(408278),
    a = n(834730),
    o = n(827734),
    d = n(49999),
    u = n(985018),
    c = n(689568);
function _(e) {
    let { notificationConfig: t, markAsDismissed: n } = e;
    return (0, r.jsxs)("div", {
        className: c.kL,
        children: [
            (0, r.jsx)("div", {
                className: c.VN,
                children: (0, r.jsx)(s.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": u.intl.string(u.t.cpT0Cq),
                    onClick: () => {
                        n(d.i.USER_DISMISS);
                    },
                    icon: i.d,
                }),
            }),
            (0, r.jsx)(l.E, { color: o.A.colors.TEXT_FEEDBACK_WARNING, className: c.Kk }),
            (0, r.jsx)(a.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: t.title }),
            (0, r.jsx)(a.E, { variant: "text-sm/medium", children: t.description }),
        ],
    });
}
