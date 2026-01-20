a.d(e, { default: () => p }), a(388685), a(953529);
var l = a(54381),
    n = a(473749),
    i = a(793030),
    r = a(481060),
    d = a(479531),
    o = a(99325),
    s = a(486527),
    c = a(388032),
    u = a(666863);
function p(t) {
    var e, a;
    let { transitionState: p, onClose: b, entry: g } = t,
        [h, C] = n.useState(null != (e = g.description) ? e : ""),
        [m, x] = n.useState(null != (a = g.primaryCategoryId) ? a : s.AR.UNCATEGORIZED),
        [I, f] = n.useState(!1),
        [v, y] = n.useState(null),
        k = async () => {
            if ((y(null), h !== g.description || m !== g.primaryCategoryId)) {
                f(!0);
                try {
                    await (0, o.Dr)(g.channelId, g.guildId, h, m), f(!1), b();
                } catch (t) {
                    f(!1), y(new d.Z(t));
                }
            }
        };
    return (0, l.jsx)(i.Modal, {
        transitionState: p,
        "aria-label": c.intl.string(c.t.eQ2bLp),
        onClose: b,
        title: c.intl.formatToPlainString(c.t.w9tsNk, { guildName: g.name }),
        subtitle: c.intl.string(c.t["vEkX/8"]),
        actions: [
            {
                variant: "primary",
                text: c.intl.string(c.t["R3BPH+"]),
                onClick: k,
                loading: I,
            },
        ],
        children: (0, l.jsxs)("div", {
            className: u.createGuild,
            children: [
                (0, l.jsx)(r.Kx8, {
                    label: c.intl.string(c.t.FFFAGt),
                    value: h,
                    maxLength: 200,
                    placeholder: c.intl.string(c.t.VzuITC),
                    onChange: C,
                    error: null == v ? void 0 : v.getAnyErrorMessage(),
                }),
                (0, l.jsx)(r.PhF, {
                    selectionMode: "single",
                    label: c.intl.string(c.t.Olo8FB),
                    placeholder: c.intl.string(c.t.XqMe3N),
                    options: (0, s.b7)(g.channelId),
                    clearable: !1,
                    value: m,
                    onSelectionChange: x,
                    maxOptionsVisible: 4,
                }),
            ],
        }),
    });
}
