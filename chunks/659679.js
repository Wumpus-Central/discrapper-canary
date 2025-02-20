t.d(n, { Z: () => v });
var i = t(200651),
    r = t(192379),
    a = t(793030),
    o = t(442837),
    s = t(481060),
    c = t(834129),
    l = t(271383),
    d = t(709586),
    u = t(388032),
    x = t(212590);
function v(e) {
    var n;
    let { boost: t } = e,
        { username: v, roleColor: m } = (0, o.cj)(
            [l.ZP],
            () => {
                var e, n, i;
                return {
                    username: null !== (i = l.ZP.getNick(t.guildId, t.userId)) && void 0 !== i ? i : null === (e = t.user) || void 0 === e ? void 0 : e.username,
                    roleColor: null === (n = l.ZP.getMember(t.guildId, t.userId)) || void 0 === n ? void 0 : n.colorString
                };
            },
            [t]
        ),
        p = r.useCallback(
            () =>
                (0, i.jsx)(s.PUh, {
                    name: v,
                    color: null != m ? m : void 0
                }),
            [v, m]
        );
    return (0, i.jsx)(c.Z, {
        className: x.textContainer,
        iconNode: (0, i.jsx)(d.Z, {
            className: x.icon,
            width: 16,
            height: 16
        }),
        iconContainerClassName: x.iconContainer,
        timestamp: null !== (n = t.endsAt) && void 0 !== n ? n : void 0,
        compact: !0,
        children: (0, i.jsx)(a.xv, {
            variant: 'text-md/semibold',
            children: u.NW.format(u.t['57St//'], {
                username: v,
                usernameHook: p
            })
        })
    });
}
