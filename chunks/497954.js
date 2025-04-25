n.d(t, { Z: () => x });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(194359),
    o = n(367907),
    s = n(138201),
    c = n(592125),
    d = n(699516),
    u = n(5192),
    m = n(981631),
    p = n(388032);
let x = (e) => {
    let { user: t, channelId: n, reportId: x } = e,
        { isIgnored: b, isBlocked: _ } = (0, i.cj)(
            [d.Z],
            () => ({
                isIgnored: d.Z.isIgnored(t.id),
                isBlocked: d.Z.isBlocked(t.id)
            }),
            [t]
        ),
        h = (0, i.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        f = l.useMemo(() => u.ZP.getName(null == h ? void 0 : h.guild_id, null == h ? void 0 : h.id, t), [h, t]),
        g = l.useCallback(() => {
            o.ZP.trackWithMetadata(m.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: x
            }),
                a.Z.ignoreUser(t.id, 'web_iar_ignore_user_element', n);
        }, [t, x, n]),
        v = l.useMemo(() => b || _, [b, _]);
    return (0, r.jsx)(s.ZP, {
        title: p.intl.formatToPlainString(p.t.U3yyFh, { username: f }),
        description: p.intl.string(p.t.naWE6e),
        buttonText: v ? p.intl.string(p.t.nDdxOD) : p.intl.string(p.t.ICYEfX),
        buttonDisabled: v,
        onButtonPress: g
    });
};
