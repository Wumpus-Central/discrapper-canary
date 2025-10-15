a.d(e, { default: () => b }), a(388685), a(953529);
var l = a(951288),
    i = a(647438),
    n = a(793030),
    r = a(481060),
    s = a(479531),
    o = a(99325),
    c = a(75666),
    u = a(388032),
    d = a(960780);
function b(t) {
    var e, a;
    let { transitionState: b, onClose: g, entry: h } = t,
        [p, m] = i.useState(null != (e = h.description) ? e : ""),
        [x, I] = i.useState(null != (a = h.primaryCategoryId) ? a : c.AR.UNCATEGORIZED),
        [C, _] = i.useState(!1),
        [f, v] = i.useState(null),
        y = async () => {
            if ((v(null), p !== h.description || x !== h.primaryCategoryId)) {
                _(!0);
                try {
                    await (0, o.Dr)(h.channelId, h.guildId, p, x), _(!1), g();
                } catch (t) {
                    _(!1), v(new s.Z(t));
                }
            }
        };
    return (0, l.jsx)(n.Modal, {
        transitionState: b,
        "aria-label": u.intl.string(u.t.eQ2bLi),
        onClose: g,
        title: u.intl.formatToPlainString(u.t.w9tsNj, { guildName: h.name }),
        subtitle: u.intl.string(u.t["vEkX//"]),
        actions: [
            {
                variant: "primary",
                text: u.intl.string(u.t.R3BPHx),
                onClick: y,
                loading: C,
            },
        ],
        children: (0, l.jsxs)("div", {
            className: d.createGuild,
            children: [
                (0, l.jsx)(r.Kx8, {
                    label: u.intl.string(u.t.FFFAGh),
                    value: p,
                    maxLength: 200,
                    placeholder: u.intl.string(u.t.VzuITE),
                    onChange: m,
                    error: null == f ? void 0 : f.getAnyErrorMessage(),
                }),
                (0, l.jsx)(r.q4e, {
                    label: u.intl.string(u.t.Olo8FB),
                    placeholder: u.intl.string(u.t.XqMe3N),
                    options: (0, c.b7)(h.channelId),
                    clearable: !1,
                    value: x,
                    onChange: I,
                    maxVisibleItems: 4,
                }),
            ],
        }),
    });
}
