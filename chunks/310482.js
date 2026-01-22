n.d(e, { default: () => u }), n(896048);
var a = n(627968),
    i = n(64700),
    l = n(732955),
    r = n(397927),
    s = n(985018),
    o = n(945280);
function u(t) {
    let { onConfirm: e, onClose: n, guildName: u, transitionState: c } = t,
        [d, m] = i.useState(""),
        [p, x] = i.useState(null),
        f = i.useMemo(
            () => [
                {
                    text: s.intl.string(s.t["ETE/oC"]),
                    onClick: n,
                    variant: "secondary",
                },
                {
                    text: s.intl.string(s.t.l3hWP6),
                    variant: "critical-primary",
                    type: "submit",
                },
            ],
            [n],
        );
    return (0, a.jsx)("form", {
        onSubmit: function (t) {
            (t.preventDefault(), d.toLowerCase() !== u.toLowerCase())
                ? x(s.intl.string(s.t["c2/DS/"]))
                : (null == e || e(), n());
        },
        children: (0, a.jsxs)(l.aFV, {
            title: s.intl.formatToPlainString(s.t.us7mC1, { name: u }),
            subtitle: s.intl.format(s.t["Zuo+Vd"], { name: u }),
            actions: f,
            onClose: n,
            transitionState: c,
            children: [
                (0, a.jsx)(r.ksK, {
                    id: "text-entry-confirm",
                    type: "text",
                    label: s.intl.string(s.t.abprOC),
                    value: d,
                    autoComplete: "off",
                    onChange: m,
                    autoFocus: !0,
                }),
                null != p && "" !== p
                    ? (0, a.jsx)(r.Text, {
                          color: "text-feedback-critical",
                          variant: "text-xs/normal",
                          className: o.z,
                          children: p,
                      })
                    : null,
            ],
        }),
    });
}
