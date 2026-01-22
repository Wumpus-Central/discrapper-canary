n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(110259),
    s = n(397927),
    l = n(139286),
    a = n(854378),
    o = n(970573),
    c = n(985018),
    u = n(777409);

function d(e) {
    let { onDismiss: t } = e;
    return (
        (0, l.A)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING,
        }),
        (0, r.jsxs)(a.Ay, {
            className: u.ci,
            children: [
                (0, r.jsx)(a.hE, {
                    children: c.intl.string(c.t.bVbB63),
                }),
                (0, r.jsx)(s.Text, {
                    className: u.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: c.intl.string(c.t["0M5fN7"]),
                }),
                (0, r.jsx)(o.A, {
                    actionText: c.intl.string(c.t["DSN+hw"]),
                    onAction: (e) => {
                        e === o.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, r.jsx)("div", {
                    className: u.o1,
                    children: (0, r.jsx)(s.QWc, {
                        variant: "secondary",
                        size: "md",
                        textVariant: "text-sm/medium",
                        text: c.intl.string(c.t["9g2mqT"]),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
}
