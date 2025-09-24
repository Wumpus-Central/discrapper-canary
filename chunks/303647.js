a.d(e, { default: () => b }), a(388685), a(953529);
var i = a(951288),
    l = a(647438),
    n = a(82659),
    r = a(481060),
    s = a(479531),
    o = a(99325),
    c = a(75666),
    u = a(388032),
    d = a(960780);
function b(t) {
    var e, a;
    let { transitionState: b, onClose: g, entry: p } = t,
        [h, m] = l.useState(null != (e = p.description) ? e : ""),
        [I, _] = l.useState(null != (a = p.primaryCategoryId) ? a : c.AR.UNCATEGORIZED),
        [f, x] = l.useState(!1),
        [C, v] = l.useState(null),
        y = async () => {
            if ((v(null), h !== p.description || I !== p.primaryCategoryId)) {
                x(!0);
                try {
                    await (0, o.Dr)(p.channelId, p.guildId, h, I), x(!1), g();
                } catch (t) {
                    x(!1), v(new s.Z(t));
                }
            }
        };
    return (0, i.jsx)(n.Modal, {
        transitionState: b,
        "aria-label": u.intl.string(u.t.eQ2bLi),
        onClose: g,
        title: u.intl.formatToPlainString(u.t.w9tsNj, { guildName: p.name }),
        subtitle: u.intl.string(u.t["vEkX//"]),
        actions: [
            {
                variant: "primary",
                text: u.intl.string(u.t.R3BPHx),
                onClick: y,
                loading: f,
            },
        ],
        children: (0, i.jsxs)("div", {
            className: d.createGuild,
            children: [
                (0, i.jsx)(r.Kx8, {
                    label: u.intl.string(u.t.FFFAGh),
                    value: h,
                    maxLength: 200,
                    placeholder: u.intl.string(u.t.VzuITE),
                    onChange: m,
                    error: null == C ? void 0 : C.getAnyErrorMessage(),
                }),
                (0, i.jsx)(r.q4e, {
                    label: u.intl.string(u.t.Olo8FB),
                    placeholder: u.intl.string(u.t.XqMe3N),
                    options: (0, c.b7)(p.channelId),
                    clearable: !1,
                    value: I,
                    onChange: _,
                    maxVisibleItems: 4,
                }),
            ],
        }),
    });
}
