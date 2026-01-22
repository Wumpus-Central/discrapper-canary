a.d(e, { default: () => g }), a(896048), a(228524);
var i = a(627968),
    n = a(64700),
    l = a(158954),
    r = a(397927),
    s = a(181658),
    d = a(208882),
    o = a(946116),
    c = a(985018),
    u = a(550886);
function g(t) {
    var e, a;
    let { transitionState: g, onClose: b, entry: p } = t,
        [h, f] = n.useState(null != (e = p.description) ? e : ""),
        [m, C] = n.useState(null != (a = p.primaryCategoryId) ? a : o.mU.UNCATEGORIZED),
        [x, v] = n.useState(!1),
        [y, k] = n.useState(null),
        I = async () => {
            if ((k(null), h !== p.description || m !== p.primaryCategoryId)) {
                v(!0);
                try {
                    await (0, d.FA)(p.channelId, p.guildId, h, m), v(!1), b();
                } catch (t) {
                    v(!1), k(new s.A(t));
                }
            }
        };
    return (0, i.jsx)(l.Modal, {
        transitionState: g,
        "aria-label": c.intl.string(c.t.eQ2bLp),
        onClose: b,
        title: c.intl.formatToPlainString(c.t.w9tsNk, { guildName: p.name }),
        subtitle: c.intl.string(c.t["vEkX/8"]),
        actions: [
            {
                variant: "primary",
                text: c.intl.string(c.t["R3BPH+"]),
                onClick: I,
                loading: x,
            },
        ],
        children: (0, i.jsxs)("div", {
            className: u.iW,
            children: [
                (0, i.jsx)(r.fs1, {
                    label: c.intl.string(c.t.FFFAGt),
                    value: h,
                    maxLength: 200,
                    placeholder: c.intl.string(c.t.VzuITC),
                    onChange: f,
                    error: null == y ? void 0 : y.getAnyErrorMessage(),
                }),
                (0, i.jsx)(r.l6P, {
                    selectionMode: "single",
                    label: c.intl.string(c.t.Olo8FB),
                    placeholder: c.intl.string(c.t.XqMe3N),
                    options: (0, o.g2)(p.channelId),
                    clearable: !1,
                    value: m,
                    onSelectionChange: C,
                    maxOptionsVisible: 4,
                }),
            ],
        }),
    });
}
