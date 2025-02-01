n.d(t, { Z: () => p });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(194359),
    o = n(367907),
    l = n(138201),
    u = n(592125),
    c = n(699516),
    d = n(5192),
    f = n(981631),
    _ = n(388032);
let p = (e) => {
    let { user: t, channelId: n, reportId: p } = e,
        { isIgnored: h, isBlocked: m } = (0, a.cj)(
            [c.Z],
            () => ({
                isIgnored: c.Z.isIgnored(t.id),
                isBlocked: c.Z.isBlocked(t.id)
            }),
            [t]
        ),
        g = (0, a.e7)([u.Z], () => u.Z.getChannel(n), [n]),
        E = r.useMemo(() => d.ZP.getName(null == g ? void 0 : g.guild_id, null == g ? void 0 : g.id, t), [g, t]),
        v = r.useCallback(() => {
            o.ZP.trackWithMetadata(f.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: p
            }),
                s.Z.ignoreUser(t.id, 'web_iar_ignore_user_element', n);
        }, [t, p, n]),
        y = r.useMemo(() => h || m, [h, m]);
    return (0, i.jsx)(l.ZP, {
        title: _.intl.formatToPlainString(_.t.U3yyFh, { username: E }),
        description: _.intl.string(_.t.naWE6e),
        buttonText: y ? _.intl.string(_.t.nDdxOD) : _.intl.string(_.t.ICYEfX),
        buttonDisabled: y,
        onButtonPress: v
    });
};
