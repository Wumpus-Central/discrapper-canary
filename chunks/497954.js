n.d(t, { Z: () => g });
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(194359),
    s = n(367907),
    o = n(138201),
    c = n(592125),
    d = n(699516),
    u = n(5192),
    m = n(981631),
    p = n(388032);
let g = (e) => {
    let { user: t, channelId: n, reportId: g } = e,
        { isIgnored: x, isBlocked: _ } = (0, i.cj)(
            [d.Z],
            () => ({
                isIgnored: d.Z.isIgnored(t.id),
                isBlocked: d.Z.isBlocked(t.id),
            }),
            [t],
        ),
        b = (0, i.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        h = l.useMemo(() => u.ZP.getName(null == b ? void 0 : b.guild_id, null == b ? void 0 : b.id, t), [b, t]),
        f = l.useCallback(() => {
            s.ZP.trackWithMetadata(m.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: g,
            }),
                a.Z.ignoreUser(t.id, "web_iar_ignore_user_element", n);
        }, [t, g, n]),
        v = l.useMemo(() => x || _, [x, _]);
    return (0, r.jsx)(o.ZP, {
        title: p.intl.formatToPlainString(p.t.U3yyFh, { username: h }),
        description: p.intl.string(p.t.naWE6e),
        buttonText: v ? p.intl.string(p.t.nDdxOD) : p.intl.string(p.t.ICYEfX),
        buttonDisabled: v,
        onButtonPress: f,
    });
};
