a.d(e, { default: () => p });
var i = a(627968),
    n = a(64700),
    l = a(189213),
    r = a(260598),
    s = a(691885),
    o = a(181658),
    c = a(208882),
    d = a(946116),
    u = a(985018),
    g = a(907891);
function p(t) {
    let { transitionState: e, onClose: a, entry: p } = t,
        [b, h] = n.useState(p.description ?? ""),
        [m, C] = n.useState(p.primaryCategoryId ?? d.mU.UNCATEGORIZED),
        [x, _] = n.useState(!1),
        [y, I] = n.useState(null),
        k = async () => {
            if ((I(null), b !== p.description || m !== p.primaryCategoryId)) {
                _(!0);
                try {
                    await (0, c.FA)(p.channelId, p.guildId, b, m), _(!1), a();
                } catch (t) {
                    _(!1), I(new o.A(t));
                }
            }
        };
    return (0, i.jsx)(l.Modal, {
        transitionState: e,
        "aria-label": u.intl.string(u.t.eQ2bLp),
        onClose: a,
        title: u.intl.formatToPlainString(u.t.w9tsNk, { guildName: p.name }),
        subtitle: u.intl.string(u.t["vEkX/8"]),
        actions: [{ variant: "primary", text: u.intl.string(u.t["R3BPH+"]), onClick: k, loading: x }],
        children: (0, i.jsxs)("div", {
            className: g.iW,
            children: [
                (0, i.jsx)(r.f, {
                    label: u.intl.string(u.t.FFFAGt),
                    value: b,
                    maxLength: 200,
                    placeholder: u.intl.string(u.t.VzuITC),
                    onChange: h,
                    error: y?.getAnyErrorMessage(),
                }),
                (0, i.jsx)(s.l, {
                    selectionMode: "single",
                    label: u.intl.string(u.t.Olo8FB),
                    placeholder: u.intl.string(u.t.XqMe3N),
                    options: (0, d.g2)(p.channelId),
                    clearable: !1,
                    value: m,
                    onSelectionChange: C,
                    maxOptionsVisible: 4,
                }),
            ],
        }),
    });
}
