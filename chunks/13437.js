"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(110259),
    r = n(397927),
    l = n(139286),
    a = n(854378),
    o = n(970573),
    c = n(985018),
    d = n(777409);
function u(e) {
    let { onDismiss: t } = e;
    return (
        (0, l.A)({ type: s.ImpressionTypes.MODAL, name: s.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, i.jsxs)(a.Ay, {
            className: d.ci,
            children: [
                (0, i.jsx)(a.hE, { children: c.intl.string(c.t.bVbB63) }),
                (0, i.jsx)(r.Text, {
                    className: d.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: c.intl.string(c.t["0M5fN7"]),
                }),
                (0, i.jsx)(o.A, {
                    actionText: c.intl.string(c.t["DSN+hw"]),
                    onAction: (e) => {
                        e === o.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, i.jsx)("div", {
                    className: d.o1,
                    children: (0, i.jsx)(r.QWc, {
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
