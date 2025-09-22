a.d(e, { default: () => h }), a(388685), a(953529);
var n = a(951288),
    l = a(647438),
    i = a(481060),
    r = a(479531),
    s = a(600164),
    c = a(99325),
    o = a(75666),
    d = a(388032),
    u = a(960780);
function h(t) {
    var e, a;
    let { transitionState: h, onClose: p, entry: b } = t,
        [m, x] = l.useState(null != (e = b.description) ? e : ""),
        [g, I] = l.useState(null != (a = b.primaryCategoryId) ? a : o.AR.UNCATEGORIZED),
        [j, y] = l.useState(!1),
        [k, C] = l.useState(null),
        _ = async () => {
            if ((C(null), m !== b.description || g !== b.primaryCategoryId)) {
                y(!0);
                try {
                    await (0, c.Dr)(b.channelId, b.guildId, m, g), y(!1), p();
                } catch (t) {
                    y(!1), C(new r.Z(t));
                }
            }
        };
    return (0, n.jsxs)(i.Y0X, {
        transitionState: h,
        "aria-label": d.intl.string(d.t.eQ2bLi),
        parentComponent: "UpdateEntryModal",
        children: [
            (0, n.jsxs)(i.xBx, {
                direction: s.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, n.jsx)(i.X6q, {
                        className: u.title,
                        variant: "heading-xl/semibold",
                        children: d.intl.format(d.t.w9tsNj, { guildName: b.name }),
                    }),
                    (0, n.jsx)(i.Text, {
                        className: u.subtitle,
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: d.intl.string(d.t["vEkX//"]),
                    }),
                    null != p &&
                        (0, n.jsx)(i.olH, {
                            className: u.closeButton,
                            onClick: p,
                        }),
                ],
            }),
            (0, n.jsxs)(i.hzk, {
                className: u.createGuild,
                paddingFix: !1,
                children: [
                    (0, n.jsx)(i.Kx8, {
                        label: d.intl.string(d.t.FFFAGh),
                        value: m,
                        maxLength: 200,
                        placeholder: d.intl.string(d.t.VzuITE),
                        onChange: x,
                        error: null == k ? void 0 : k.getAnyErrorMessage(),
                    }),
                    (0, n.jsx)(i.q4e, {
                        label: d.intl.string(d.t.Olo8FB),
                        placeholder: d.intl.string(d.t.XqMe3N),
                        options: (0, o.b7)(b.channelId),
                        clearable: !1,
                        value: g,
                        onChange: I,
                        maxVisibleItems: 4,
                    }),
                ],
            }),
            (0, n.jsx)(i.mzw, {
                justify: s.Z.Justify.BETWEEN,
                children: (0, n.jsx)(i.zxk, {
                    variant: "primary",
                    text: d.intl.string(d.t.R3BPHx),
                    onClick: _,
                    loading: j,
                }),
            }),
        ],
    });
}
