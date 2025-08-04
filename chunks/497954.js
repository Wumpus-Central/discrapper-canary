n.d(t, { Z: () => _ });
var r = n(255367),
    a = n(73800),
    i = n(442837),
    o = n(194359),
    l = n(367907),
    s = n(138201),
    c = n(592125),
    d = n(699516),
    u = n(5192),
    m = n(981631),
    p = n(388032);
let _ = (e) => {
    let { user: t, channelId: n, reportId: _ } = e,
        { isIgnored: g, isBlocked: b } = (0, i.cj)(
            [d.Z],
            () => ({
                isIgnored: d.Z.isIgnored(t.id),
                isBlocked: d.Z.isBlocked(t.id)
            }),
            [t]
        ),
        x = (0, i.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        h = a.useMemo(() => u.ZP.getName(null == x ? void 0 : x.guild_id, null == x ? void 0 : x.id, t), [x, t]),
        f = a.useCallback(() => {
            (l.ZP.trackWithMetadata(m.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: _
            }),
                o.Z.ignoreUser(t.id, 'web_iar_ignore_user_element', n));
        }, [t, _, n]),
        v = a.useMemo(() => g || b, [g, b]);
    return (0, r.jsx)(s.ZP, {
        title: p.intl.formatToPlainString(p.t.U3yyFh, { username: h }),
        description: p.intl.string(p.t.naWE6e),
        buttonText: v ? p.intl.string(p.t.nDdxOD) : p.intl.string(p.t.ICYEfX),
        buttonDisabled: v,
        onButtonPress: f
    });
};
