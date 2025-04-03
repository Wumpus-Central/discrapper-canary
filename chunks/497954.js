n.d(t, { Z: () => p });
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
    x = n(388032);
let p = (e) => {
    let { user: t, channelId: n, reportId: p } = e,
        { isIgnored: f, isBlocked: b } = (0, i.cj)(
            [d.Z],
            () => ({
                isIgnored: d.Z.isIgnored(t.id),
                isBlocked: d.Z.isBlocked(t.id)
            }),
            [t]
        ),
        h = (0, i.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        _ = l.useMemo(() => u.ZP.getName(null == h ? void 0 : h.guild_id, null == h ? void 0 : h.id, t), [h, t]),
        g = l.useCallback(() => {
            o.ZP.trackWithMetadata(m.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: p
            }),
                a.Z.ignoreUser(t.id, 'web_iar_ignore_user_element', n);
        }, [t, p, n]),
        v = l.useMemo(() => f || b, [f, b]);
    return (0, r.jsx)(s.ZP, {
        title: x.NW.formatToPlainString(x.t.U3yyFh, { username: _ }),
        description: x.NW.string(x.t.naWE6e),
        buttonText: v ? x.NW.string(x.t.nDdxOD) : x.NW.string(x.t.ICYEfX),
        buttonDisabled: v,
        onButtonPress: g
    });
};
