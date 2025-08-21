n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(194359),
    o = n(367907),
    s = n(138201),
    c = n(592125),
    d = n(699516),
    u = n(5192),
    m = n(981631),
    _ = n(388032);
let p = (e) => {
    let { user: t, channelId: n, reportId: p } = e,
        { isIgnored: x, isBlocked: g } = (0, l.cj)(
            [d.Z],
            () => ({
                isIgnored: d.Z.isIgnored(t.id),
                isBlocked: d.Z.isBlocked(t.id),
            }),
            [t],
        ),
        f = (0, l.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        b = i.useMemo(() => u.ZP.getName(null == f ? void 0 : f.guild_id, null == f ? void 0 : f.id, t), [f, t]),
        h = i.useCallback(() => {
            o.ZP.trackWithMetadata(m.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: p,
            }),
                a.Z.ignoreUser(t.id, "web_iar_ignore_user_element", n);
        }, [t, p, n]),
        v = i.useMemo(() => x || g, [x, g]);
    return (0, r.jsx)(s.JZ, {
        title: _.intl.formatToPlainString(_.t.U3yyFh, { username: b }),
        description: _.intl.string(_.t.naWE6e),
        buttonText: v ? _.intl.string(_.t.nDdxOD) : _.intl.string(_.t.ICYEfX),
        buttonDisabled: v,
        onButtonPress: h,
    });
};
