"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(110259),
    r = n(834730),
    l = n(123292),
    a = n(139286),
    o = n(854378),
    c = n(970573),
    d = n(985018),
    u = n(364488);
function _(e) {
    let { onDismiss: t } = e;
    return (
        (0, a.A)({ type: s.ImpressionTypes.MODAL, name: s.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, i.jsxs)(o.Ay, {
            className: u.ci,
            children: [
                (0, i.jsx)(o.hE, { children: d.intl.string(d.t.bVbB63) }),
                (0, i.jsx)(r.E, {
                    className: u.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: d.intl.string(d.t["0M5fN7"]),
                }),
                (0, i.jsx)(c.A, {
                    actionText: d.intl.string(d.t["DSN+hw"]),
                    onAction: (e) => {
                        e === c.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, i.jsx)("div", {
                    className: u.o1,
                    children: (0, i.jsx)(l.Q, {
                        variant: "secondary",
                        size: "md",
                        textVariant: "text-sm/medium",
                        text: d.intl.string(d.t["9g2mqT"]),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
}
