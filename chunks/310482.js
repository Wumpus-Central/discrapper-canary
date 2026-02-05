n.d(e, { default: () => c });
var a = n(627968),
    i = n(64700),
    r = n(732955),
    o = n(397927),
    s = n(985018),
    l = n(945280);
function c(t) {
    let { onConfirm: e, onClose: n, guildName: c, transitionState: u } = t,
        [m, p] = i.useState(""),
        [d, x] = i.useState(null),
        f = i.useMemo(
            () => [
                { text: s.intl.string(s.t["ETE/oC"]), onClick: n, variant: "secondary" },
                { text: s.intl.string(s.t.l3hWP6), variant: "critical-primary", type: "submit" },
            ],
            [n],
        );
    return (0, a.jsx)("form", {
        onSubmit: function (t) {
            (t.preventDefault(), m.toLowerCase() !== c.toLowerCase()) ? x(s.intl.string(s.t["c2/DS/"])) : (e?.(), n());
        },
        children: (0, a.jsxs)(r.aFV, {
            title: s.intl.formatToPlainString(s.t.us7mC1, { name: c }),
            subtitle: s.intl.format(s.t["Zuo+Vd"], { name: c }),
            actions: f,
            onClose: n,
            transitionState: u,
            children: [
                (0, a.jsx)(o.ksK, {
                    id: "text-entry-confirm",
                    type: "text",
                    label: s.intl.string(s.t.abprOC),
                    value: m,
                    autoComplete: "off",
                    onChange: p,
                    autoFocus: !0,
                }),
                null != d && "" !== d
                    ? (0, a.jsx)(o.Text, {
                          color: "text-feedback-critical",
                          variant: "text-xs/normal",
                          className: l.z,
                          children: d,
                      })
                    : null,
            ],
        }),
    });
}
