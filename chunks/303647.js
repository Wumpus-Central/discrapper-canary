a.d(e, { default: () => b }), a(388685), a(953529);
var l = a(54381),
    n = a(473749),
    i = a(793030),
    r = a(481060),
    s = a(479531),
    o = a(99325),
    c = a(75666),
    u = a(388032),
    d = a(800268);
function b(t) {
    var e, a;
    let { transitionState: b, onClose: p, entry: g } = t,
        [h, m] = n.useState(null != (e = g.description) ? e : ""),
        [C, I] = n.useState(null != (a = g.primaryCategoryId) ? a : c.AR.UNCATEGORIZED),
        [x, _] = n.useState(!1),
        [f, v] = n.useState(null),
        y = async () => {
            if ((v(null), h !== g.description || C !== g.primaryCategoryId)) {
                _(!0);
                try {
                    await (0, o.Dr)(g.channelId, g.guildId, h, C), _(!1), p();
                } catch (t) {
                    _(!1), v(new s.Z(t));
                }
            }
        };
    return (0, l.jsx)(i.Modal, {
        transitionState: b,
        "aria-label": u.intl.string(u.t.eQ2bLp),
        onClose: p,
        title: u.intl.formatToPlainString(u.t.w9tsNk, { guildName: g.name }),
        subtitle: u.intl.string(u.t["vEkX/8"]),
        actions: [
            {
                variant: "primary",
                text: u.intl.string(u.t["R3BPH+"]),
                onClick: y,
                loading: x,
            },
        ],
        children: (0, l.jsxs)("div", {
            className: d.createGuild,
            children: [
                (0, l.jsx)(r.Kx8, {
                    label: u.intl.string(u.t.FFFAGt),
                    value: h,
                    maxLength: 200,
                    placeholder: u.intl.string(u.t.VzuITC),
                    onChange: m,
                    error: null == f ? void 0 : f.getAnyErrorMessage(),
                }),
                (0, l.jsx)(r.q4e, {
                    label: u.intl.string(u.t.Olo8FB),
                    placeholder: u.intl.string(u.t.XqMe3N),
                    options: (0, c.b7)(g.channelId),
                    clearable: !1,
                    value: C,
                    onChange: I,
                    maxVisibleItems: 4,
                }),
            ],
        }),
    });
}
