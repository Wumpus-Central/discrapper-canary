"use strict";
n.d(t, { h: () => d });
var i = n(627968),
    r = n(64700);
if (21552 == n.j) var l = n(189213);
if (21552 == n.j) var s = n(150934);
if (21552 == n.j) var a = n(192308);
var o = n(827343),
    c = n(985018);
function u(e) {
    let [t, n] = r.useState(!1);
    return (0, i.jsx)(l.Modal, {
        size: "md",
        title: c.intl.string(c.t["zQ1+Jw"]),
        subtitle: c.intl.string(c.t.K1gWXn),
        actions: [
            {
                text: c.intl.string(c.t.BddRzS),
                onClick: () => {
                    t && o.A.setSilenceWarning(!1), e.onClose();
                },
                variant: "primary",
            },
        ],
        actionBarInput: (0, i.jsx)(s.S, {
            checked: t,
            onChange: (e) => n(e),
            label: c.intl.string(c.t.XAiAgD),
            labelType: "secondary",
        }),
        ...e,
    });
}
function d() {
    (0, a.openModal)((e) => (0, i.jsx)(u, { ...e }));
}
