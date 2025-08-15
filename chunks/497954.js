n.d(t, { Z: () => _ });
var r = n(255367),
    a = n(73800),
    i = n(442837),
    l = n(194359),
    o = n(367907),
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
                isBlocked: d.Z.isBlocked(t.id),
            }),
            [t],
        ),
        h = (0, i.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        x = a.useMemo(() => u.ZP.getName(null == h ? void 0 : h.guild_id, null == h ? void 0 : h.id, t), [h, t]),
        f = a.useCallback(() => {
            o.ZP.trackWithMetadata(m.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: _,
            }),
                l.Z.ignoreUser(t.id, "web_iar_ignore_user_element", n);
        }, [t, _, n]),
        v = a.useMemo(() => g || b, [g, b]);
    return (0, r.jsx)(s.JZ, {
        title: p.intl.formatToPlainString(p.t.U3yyFh, { username: x }),
        description: p.intl.string(p.t.naWE6e),
        buttonText: v ? p.intl.string(p.t.nDdxOD) : p.intl.string(p.t.ICYEfX),
        buttonDisabled: v,
        onButtonPress: f,
    });
};
