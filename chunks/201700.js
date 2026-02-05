a.d(e, { default: () => g });
var i = a(627968),
    n = a(64700),
    l = a(158954),
    r = a(397927),
    s = a(181658),
    o = a(208882),
    c = a(946116),
    d = a(985018),
    u = a(550886);
function g(t) {
    let { transitionState: e, onClose: a, entry: g } = t,
        [p, b] = n.useState(g.description ?? ""),
        [h, m] = n.useState(g.primaryCategoryId ?? c.mU.UNCATEGORIZED),
        [C, x] = n.useState(!1),
        [_, y] = n.useState(null),
        I = async () => {
            if ((y(null), p !== g.description || h !== g.primaryCategoryId)) {
                x(!0);
                try {
                    await (0, o.FA)(g.channelId, g.guildId, p, h), x(!1), a();
                } catch (t) {
                    x(!1), y(new s.A(t));
                }
            }
        };
    return (0, i.jsx)(l.Modal, {
        transitionState: e,
        "aria-label": d.intl.string(d.t.eQ2bLp),
        onClose: a,
        title: d.intl.formatToPlainString(d.t.w9tsNk, { guildName: g.name }),
        subtitle: d.intl.string(d.t["vEkX/8"]),
        actions: [{ variant: "primary", text: d.intl.string(d.t["R3BPH+"]), onClick: I, loading: C }],
        children: (0, i.jsxs)("div", {
            className: u.iW,
            children: [
                (0, i.jsx)(r.fs1, {
                    label: d.intl.string(d.t.FFFAGt),
                    value: p,
                    maxLength: 200,
                    placeholder: d.intl.string(d.t.VzuITC),
                    onChange: b,
                    error: _?.getAnyErrorMessage(),
                }),
                (0, i.jsx)(r.l6P, {
                    selectionMode: "single",
                    label: d.intl.string(d.t.Olo8FB),
                    placeholder: d.intl.string(d.t.XqMe3N),
                    options: (0, c.g2)(g.channelId),
                    clearable: !1,
                    value: h,
                    onSelectionChange: m,
                    maxOptionsVisible: 4,
                }),
            ],
        }),
    });
}
