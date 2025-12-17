n.d(t, { Z: () => p });
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(194359),
    s = n(367907),
    o = n(138201),
    c = n(592125),
    d = n(699516),
    u = n(5192),
    m = n(981631),
    b = n(388032);
let p = (e) => {
    let { user: t, channelId: n, reportId: p } = e,
        { isIgnored: g, isBlocked: f } = (0, i.cj)(
            [d.Z],
            () => ({
                isIgnored: d.Z.isIgnored(t.id),
                isBlocked: d.Z.isBlocked(t.id),
            }),
            [t],
        ),
        x = (0, i.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        h = l.useMemo(() => u.ZP.getName(null == x ? void 0 : x.guild_id, null == x ? void 0 : x.id, t), [x, t]),
        v = l.useCallback(() => {
            s.ZP.trackWithMetadata(m.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: p,
            }),
                a.Z.ignoreUser(t.id, "web_iar_ignore_user_element", n);
        }, [t, p, n]),
        j = l.useMemo(() => g || f, [g, f]);
    return (0, r.jsx)(o.JZ, {
        title: b.intl.formatToPlainString(b.t.U3yyFs, { username: h }),
        description: b.intl.string(b.t.naWE6W),
        buttonText: j ? b.intl.string(b.t.nDdxOG) : b.intl.string(b.t.ICYEfY),
        buttonDisabled: j,
        onButtonPress: v,
    });
};
