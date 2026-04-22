n.d(e, { default: () => u });
var a = n(627968),
    i = n(64700),
    r = n(189213),
    o = n(292666),
    l = n(834730),
    s = n(985018),
    c = n(622211);
function u(t) {
    let { onConfirm: e, onClose: n, guildName: u, transitionState: d } = t,
        [m, p] = i.useState(""),
        [x, f] = i.useState(null),
        C = i.useMemo(
            () => [
                { text: s.intl.string(s.t["ETE/oC"]), onClick: n, variant: "secondary" },
                { text: s.intl.string(s.t.l3hWP6), variant: "critical-primary", type: "submit" },
            ],
            [n],
        );
    return (0, a.jsx)("form", {
        onSubmit: function (t) {
            (t.preventDefault(), m.toLowerCase() !== u.toLowerCase()) ? f(s.intl.string(s.t["c2/DS/"])) : (e?.(), n());
        },
        children: (0, a.jsxs)(r.Modal, {
            title: s.intl.formatToPlainString(s.t.us7mC1, { name: u }),
            subtitle: s.intl.format(s.t["Zuo+Vd"], { name: u }),
            actions: C,
            onClose: n,
            transitionState: d,
            children: [
                (0, a.jsx)(o.k, {
                    id: "text-entry-confirm",
                    type: "text",
                    label: s.intl.string(s.t.abprOC),
                    value: m,
                    autoComplete: "off",
                    onChange: p,
                    autoFocus: !0,
                }),
                null != x && "" !== x
                    ? (0, a.jsx)(l.E, {
                          color: "text-feedback-critical",
                          variant: "text-xs/normal",
                          className: c.z,
                          children: x,
                      })
                    : null,
            ],
        }),
    });
}
