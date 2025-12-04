a.d(e, { default: () => p }), a(388685), a(953529);
var l = a(54381),
    n = a(473749),
    i = a(793030),
    r = a(199849),
    s = a(481060),
    o = a(479531),
    c = a(99325),
    u = a(75666),
    d = a(388032),
    b = a(960780);
function p(t) {
    var e, a;
    let { transitionState: p, onClose: g, entry: h } = t,
        [m, C] = n.useState(null != (e = h.description) ? e : ""),
        [I, x] = n.useState(null != (a = h.primaryCategoryId) ? a : u.AR.UNCATEGORIZED),
        [y, _] = n.useState(!1),
        [f, v] = n.useState(null),
        k = async () => {
            if ((v(null), m !== h.description || I !== h.primaryCategoryId)) {
                _(!0);
                try {
                    await (0, c.Dr)(h.channelId, h.guildId, m, I), _(!1), g();
                } catch (t) {
                    _(!1), v(new o.Z(t));
                }
            }
        };
    return (0, l.jsx)(i.Modal, {
        transitionState: p,
        "aria-label": d.intl.string(d.t.eQ2bLp),
        onClose: g,
        title: d.intl.formatToPlainString(d.t.w9tsNk, { guildName: h.name }),
        subtitle: d.intl.string(d.t["vEkX/8"]),
        actions: [
            {
                variant: "primary",
                text: d.intl.string(d.t["R3BPH+"]),
                onClick: k,
                loading: y,
            },
        ],
        children: (0, l.jsxs)("div", {
            className: b.createGuild,
            children: [
                (0, l.jsx)(s.Kx8, {
                    label: d.intl.string(d.t.FFFAGt),
                    value: m,
                    maxLength: 200,
                    placeholder: d.intl.string(d.t.VzuITC),
                    onChange: C,
                    error: null == f ? void 0 : f.getAnyErrorMessage(),
                }),
                (0, l.jsx)(r.y6, {
                    label: d.intl.string(d.t.Olo8FB),
                    placeholder: d.intl.string(d.t.XqMe3N),
                    options: (0, u.b7)(h.channelId),
                    clearable: !1,
                    value: I,
                    onChange: x,
                    maxVisibleItems: 4,
                }),
            ],
        }),
    });
}
