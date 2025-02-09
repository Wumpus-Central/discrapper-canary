n.d(t, { Z: () => _ });
var l = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(194359),
    s = n(367907),
    o = n(138201),
    d = n(592125),
    c = n(699516),
    u = n(5192),
    m = n(981631),
    x = n(388032);
let _ = (e) => {
    let { user: t, channelId: n, reportId: _ } = e,
        { isIgnored: h, isBlocked: v } = (0, r.cj)(
            [c.Z],
            () => ({
                isIgnored: c.Z.isIgnored(t.id),
                isBlocked: c.Z.isBlocked(t.id)
            }),
            [t]
        ),
        g = (0, r.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        p = i.useMemo(() => u.ZP.getName(null == g ? void 0 : g.guild_id, null == g ? void 0 : g.id, t), [g, t]),
        f = i.useCallback(() => {
            s.ZP.trackWithMetadata(m.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: _
            }),
                a.Z.ignoreUser(t.id, 'web_iar_ignore_user_element', n);
        }, [t, _, n]),
        b = i.useMemo(() => h || v, [h, v]);
    return (0, l.jsx)(o.ZP, {
        title: x.intl.formatToPlainString(x.t.U3yyFh, { username: p }),
        description: x.intl.string(x.t.naWE6e),
        buttonText: b ? x.intl.string(x.t.nDdxOD) : x.intl.string(x.t.ICYEfX),
        buttonDisabled: b,
        onButtonPress: f
    });
};
