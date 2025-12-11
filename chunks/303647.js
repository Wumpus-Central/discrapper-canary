e.d(a, { default: () => p }), e(388685), e(953529);
var l = e(54381),
    n = e(473749),
    i = e(793030),
    r = e(199849),
    d = e(481060),
    s = e(479531),
    o = e(99325),
    c = e(486527),
    u = e(388032),
    b = e(666863);
function p(t) {
    var a, e;
    let { transitionState: p, onClose: g, entry: h } = t,
        [m, C] = n.useState(null != (a = h.description) ? a : ""),
        [I, x] = n.useState(null != (e = h.primaryCategoryId) ? e : c.AR.UNCATEGORIZED),
        [y, f] = n.useState(!1),
        [v, k] = n.useState(null),
        S = async () => {
            if ((k(null), m !== h.description || I !== h.primaryCategoryId)) {
                f(!0);
                try {
                    await (0, o.Dr)(h.channelId, h.guildId, m, I), f(!1), g();
                } catch (t) {
                    f(!1), k(new s.Z(t));
                }
            }
        };
    return (0, l.jsx)(i.Modal, {
        transitionState: p,
        "aria-label": u.intl.string(u.t.eQ2bLp),
        onClose: g,
        title: u.intl.formatToPlainString(u.t.w9tsNk, { guildName: h.name }),
        subtitle: u.intl.string(u.t["vEkX/8"]),
        actions: [
            {
                variant: "primary",
                text: u.intl.string(u.t["R3BPH+"]),
                onClick: S,
                loading: y,
            },
        ],
        children: (0, l.jsxs)("div", {
            className: b.createGuild,
            children: [
                (0, l.jsx)(d.Kx8, {
                    label: u.intl.string(u.t.FFFAGt),
                    value: m,
                    maxLength: 200,
                    placeholder: u.intl.string(u.t.VzuITC),
                    onChange: C,
                    error: null == v ? void 0 : v.getAnyErrorMessage(),
                }),
                (0, l.jsx)(r.y6, {
                    label: u.intl.string(u.t.Olo8FB),
                    placeholder: u.intl.string(u.t.XqMe3N),
                    options: (0, c.b7)(h.channelId),
                    clearable: !1,
                    value: I,
                    onChange: x,
                    maxVisibleItems: 4,
                }),
            ],
        }),
    });
}
