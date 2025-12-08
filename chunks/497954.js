n.d(t, { Z: () => g });
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(194359),
    s = n(367907),
    o = n(138201),
    d = n(592125),
    c = n(699516),
    u = n(5192),
    m = n(981631),
    p = n(388032);
let g = (e) => {
    let { user: t, channelId: n, reportId: g } = e,
        { isIgnored: _, isBlocked: x } = (0, i.cj)(
            [c.Z],
            () => ({
                isIgnored: c.Z.isIgnored(t.id),
                isBlocked: c.Z.isBlocked(t.id),
            }),
            [t],
        ),
        h = (0, i.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        b = l.useMemo(() => u.ZP.getName(null == h ? void 0 : h.guild_id, null == h ? void 0 : h.id, t), [h, t]),
        f = l.useCallback(() => {
            s.ZP.trackWithMetadata(m.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: g,
            }),
                a.Z.ignoreUser(t.id, "web_iar_ignore_user_element", n);
        }, [t, g, n]),
        v = l.useMemo(() => _ || x, [_, x]);
    return (0, r.jsx)(o.JZ, {
        title: p.intl.formatToPlainString(p.t.U3yyFs, { username: b }),
        description: p.intl.string(p.t.naWE6W),
        buttonText: v ? p.intl.string(p.t.nDdxOG) : p.intl.string(p.t.ICYEfY),
        buttonDisabled: v,
        onButtonPress: f,
    });
};
