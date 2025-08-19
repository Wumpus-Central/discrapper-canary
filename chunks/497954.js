n.d(t, { Z: () => p });
var r = n(951288),
    a = n(647438),
    i = n(442837),
    o = n(194359),
    l = n(367907),
    s = n(138201),
    c = n(592125),
    d = n(699516),
    u = n(5192),
    _ = n(981631),
    m = n(388032);
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
        b = (0, i.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        h = a.useMemo(() => u.ZP.getName(null == b ? void 0 : b.guild_id, null == b ? void 0 : b.id, t), [b, t]),
        x = a.useCallback(() => {
            l.ZP.trackWithMetadata(_.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: p,
            }),
                o.Z.ignoreUser(t.id, "web_iar_ignore_user_element", n);
        }, [t, p, n]),
        v = a.useMemo(() => g || f, [g, f]);
    return (0, r.jsx)(s.JZ, {
        title: m.intl.formatToPlainString(m.t.U3yyFh, { username: h }),
        description: m.intl.string(m.t.naWE6e),
        buttonText: v ? m.intl.string(m.t.nDdxOD) : m.intl.string(m.t.ICYEfX),
        buttonDisabled: v,
        onButtonPress: x,
    });
};
