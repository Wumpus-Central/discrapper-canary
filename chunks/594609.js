n.d(t, { h: () => _ });
var i = n(627968),
    l = n(64700),
    r = n(158954),
    a = n(397927),
    s = n(827343),
    o = n(985018);
function c(e) {
    let [t, n] = l.useState(!1);
    return (0, i.jsx)(r.Modal, {
        size: "md",
        title: o.intl.string(o.t["zQ1+Jw"]),
        subtitle: o.intl.string(o.t.K1gWXn),
        actions: [
            {
                text: o.intl.string(o.t.BddRzS),
                onClick: () => {
                    t && s.A.setSilenceWarning(!1), e.onClose();
                },
                variant: "primary",
            },
        ],
        actionBarInput: (0, i.jsx)(r.Sc0, {
            checked: t,
            onChange: (e) => n(e),
            label: o.intl.string(o.t.XAiAgD),
            labelType: "secondary",
        }),
        ...e,
    });
}
function _() {
    (0, a.qfG)((e) => (0, i.jsx)(c, { ...e }));
}
