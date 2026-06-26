i.d(e, { default: () => p });
var n = i(627968),
    a = i(64700),
    l = i(189213),
    r = i(260598),
    s = i(691885),
    o = i(181658),
    c = i(208882),
    d = i(946116),
    u = i(375708),
    g = i(907891);
function p(t) {
    let { transitionState: e, onClose: i, entry: p } = t,
        [h, m] = a.useState(p.description ?? ""),
        [C, b] = a.useState(p.primaryCategoryId ?? d.mU.UNCATEGORIZED),
        [y, f] = a.useState(!1),
        [k, x] = a.useState(null);
    async function I() {
        if ((x(null), h !== p.description || C !== p.primaryCategoryId)) {
            f(!0);
            try {
                await (0, c.FA)(p.channelId, p.guildId, h, C), f(!1), i();
            } catch (t) {
                f(!1), x(new o.A(t));
            }
        }
    }
    return (0, n.jsx)(l.Modal, {
        transitionState: e,
        "aria-label": u.intl.string(u.t.eQ2bLp),
        onClose: i,
        title: u.intl.formatToPlainString(u.t.w9tsNk, { guildName: p.name }),
        subtitle: u.intl.string(u.t["vEkX/8"]),
        actions: [{ variant: "primary", text: u.intl.string(u.t["R3BPH+"]), onClick: I, loading: y }],
        children: (0, n.jsxs)("div", {
            className: g.iW,
            children: [
                (0, n.jsx)(r.f, {
                    label: u.intl.string(u.t.FFFAGt),
                    value: h,
                    maxLength: 200,
                    placeholder: u.intl.string(u.t.VzuITC),
                    onChange: m,
                    error: k?.getAnyErrorMessage(),
                }),
                (0, n.jsx)(s.l, {
                    selectionMode: "single",
                    label: u.intl.string(u.t.Olo8FB),
                    placeholder: u.intl.string(u.t.XqMe3N),
                    options: (0, d.g2)(p.channelId),
                    clearable: !1,
                    value: C,
                    onSelectionChange: b,
                    maxOptionsVisible: 4,
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
