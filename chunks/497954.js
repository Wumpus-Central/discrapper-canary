var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(194359),
    l = r(367907),
    u = r(138201),
    c = r(592125),
    d = r(699516),
    f = r(5192),
    p = r(981631),
    h = r(388032);
let _ = (e) => {
    let { user: n, channelId: r, reportId: _ } = e,
        { isIgnored: m, isBlocked: g } = (0, o.cj)(
            [d.Z],
            () => ({
                isIgnored: d.Z.isIgnored(n.id),
                isBlocked: d.Z.isBlocked(n.id)
            }),
            [n]
        ),
        E = (0, o.e7)([c.Z], () => c.Z.getChannel(r), [r]),
        v = a.useMemo(() => f.ZP.getName(null == E ? void 0 : E.guild_id, null == E ? void 0 : E.id, n), [E, n]),
        y = a.useCallback(() => {
            l.ZP.trackWithMetadata(p.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
                other_user_id: n.id,
                report_id: _
            }),
                s.Z.ignoreUser(n.id, 'web_iar_ignore_user_element', r);
        }, [n, _, r]),
        b = a.useMemo(() => m || g, [m, g]);
    return (0, i.jsx)(u.ZP, {
        title: h.intl.formatToPlainString(h.t.U3yyFh, { username: v }),
        description: h.intl.string(h.t.naWE6e),
        buttonText: b ? h.intl.string(h.t.nDdxOD) : h.intl.string(h.t.ICYEfX),
        buttonDisabled: b,
        onButtonPress: y
    });
};
n.Z = _;
