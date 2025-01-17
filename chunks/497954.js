var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(194359),
    l = r(367907),
    u = r(138201),
    c = r(592125),
    d = r(699516),
    f = r(5192),
    _ = r(981631),
    h = r(388032);
let p = (e) => {
    let { user: n, channelId: r, reportId: p } = e,
        { isIgnored: m, isBlocked: g } = (0, s.cj)(
            [d.Z],
            () => ({
                isIgnored: d.Z.isIgnored(n.id),
                isBlocked: d.Z.isBlocked(n.id)
            }),
            [n]
        ),
        E = (0, s.e7)([c.Z], () => c.Z.getChannel(r), [r]),
        v = a.useMemo(() => f.ZP.getName(null == E ? void 0 : E.guild_id, null == E ? void 0 : E.id, n), [E, n]),
        I = a.useCallback(() => {
            l.ZP.trackWithMetadata(_.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
                other_user_id: n.id,
                report_id: p
            }),
                o.Z.ignoreUser(n.id, 'web_iar_ignore_user_element', r);
        }, [n, p, r]),
        T = a.useMemo(() => m || g, [m, g]);
    return (0, i.jsx)(u.ZP, {
        title: h.intl.formatToPlainString(h.t.U3yyFh, { username: v }),
        description: h.intl.string(h.t.naWE6e),
        buttonText: T ? h.intl.string(h.t.nDdxOD) : h.intl.string(h.t.ICYEfX),
        buttonDisabled: T,
        onButtonPress: I
    });
};
n.Z = p;
