"use strict";
n.d(t, { h: () => c });
var i = n(627968),
    r = n(64700),
    l = n(158954),
    s = n(397927),
    a = n(827343),
    o = n(985018);
function E(e) {
    let [t, n] = r.useState(!1);
    return (0, i.jsx)(l.Modal, {
        size: "md",
        title: o.intl.string(o.t["zQ1+Jw"]),
        subtitle: o.intl.string(o.t.K1gWXn),
        actions: [
            {
                text: o.intl.string(o.t.BddRzS),
                onClick: () => {
                    t && a.A.setSilenceWarning(!1), e.onClose();
                },
                variant: "primary",
            },
        ],
        actionBarInput: (0, i.jsx)(l.Sc0, {
            checked: t,
            onChange: (e) => n(e),
            label: o.intl.string(o.t.XAiAgD),
            labelType: "secondary",
        }),
        ...e,
    });
}
function c() {
    (0, s.qfG)((e) => (0, i.jsx)(E, { ...e }));
}
