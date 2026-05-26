i.d(e, { default: () => p });
var n = i(627968),
    a = i(64700),
    l = i(189213),
    r = i(260598),
    s = i(691885),
    o = i(181658),
    c = i(208882),
    d = i(946116),
    g = i(375708),
    u = i(94899);
function p(t) {
    let { transitionState: e, onClose: i, entry: p } = t,
        [h, m] = a.useState(p.description ?? ""),
        [C, b] = a.useState(p.primaryCategoryId ?? d.mU.UNCATEGORIZED),
        [y, k] = a.useState(!1),
        [x, I] = a.useState(null),
        S = async () => {
            if ((I(null), h !== p.description || C !== p.primaryCategoryId)) {
                k(!0);
                try {
                    await (0, c.FA)(p.channelId, p.guildId, h, C), k(!1), i();
                } catch (t) {
                    k(!1), I(new o.A(t));
                }
            }
        };
    return (0, n.jsx)(l.Modal, {
        transitionState: e,
        "aria-label": g.intl.string(g.t.eQ2bLp),
        onClose: i,
        title: g.intl.formatToPlainString(g.t.w9tsNk, { guildName: p.name }),
        subtitle: g.intl.string(g.t["vEkX/8"]),
        actions: [{ variant: "primary", text: g.intl.string(g.t["R3BPH+"]), onClick: S, loading: y }],
        children: (0, n.jsxs)("div", {
            className: u.iW,
            children: [
                (0, n.jsx)(r.f, {
                    label: g.intl.string(g.t.FFFAGt),
                    value: h,
                    maxLength: 200,
                    placeholder: g.intl.string(g.t.VzuITC),
                    onChange: m,
                    error: x?.getAnyErrorMessage(),
                }),
                (0, n.jsx)(s.l, {
                    selectionMode: "single",
                    label: g.intl.string(g.t.Olo8FB),
                    placeholder: g.intl.string(g.t.XqMe3N),
                    options: (0, d.g2)(p.channelId),
                    clearable: !1,
                    value: C,
                    onSelectionChange: b,
                    maxOptionsVisible: 4,
                }),
            ],
        }),
    });
}
