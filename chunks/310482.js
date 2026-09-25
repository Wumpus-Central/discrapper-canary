n.d(e, { default: () => c });
var a = n(477900),
    i = n(582128),
    r = n(189213),
    l = n(95477),
    o = n(834730),
    s = n(375708),
    u = n(721158);
function c(t) {
    let { onConfirm: e, onClose: n, guildName: c, transitionState: m } = t,
        [d, p] = i.useState(""),
        [f, x] = i.useState(null),
        C = i.useMemo(
            () => [
                { text: s.intl.string(s.t["ETE/oC"]), onClick: n, variant: "secondary" },
                { text: s.intl.string(s.t.l3hWP6), variant: "critical-primary", type: "submit" },
            ],
            [n],
        );
    return (0, a.jsx)("form", {
        onSubmit: function (t) {
            (t.preventDefault(), d.toLowerCase() !== c.toLowerCase()) ? x(s.intl.string(s.t["c2/DS/"])) : (e?.(), n());
        },
        children: (0, a.jsxs)(r.a, {
            title: s.intl.formatToPlainString(s.t.us7mC1, { name: c }),
            subtitle: s.intl.format(s.t["Zuo+Vd"], { name: c }),
            actions: C,
            onClose: n,
            transitionState: m,
            children: [
                (0, a.jsx)(l.k, {
                    id: "text-entry-confirm",
                    type: "text",
                    label: s.intl.string(s.t.abprOC),
                    value: d,
                    autoComplete: "off",
                    onChange: p,
                    autoFocus: !0,
                }),
                null != f && "" !== f
                    ? (0, a.jsx)(o.E, {
                          color: "text-feedback-critical",
                          variant: "text-xs/normal",
                          className: u.z,
                          children: f,
                      })
                    : null,
            ],
        }),
    });
}
