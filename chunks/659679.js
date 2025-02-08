i.d(n, { Z: () => m });
var t = i(200651),
    r = i(192379),
    a = i(793030),
    s = i(442837),
    o = i(481060),
    c = i(834129),
    l = i(271383),
    d = i(709586),
    u = i(388032),
    x = i(808524);
function m(e) {
    var n;
    let { boost: i } = e,
        { username: m, roleColor: v } = (0, s.cj)(
            [l.ZP],
            () => {
                var e, n, t;
                return {
                    username: null !== (t = l.ZP.getNick(i.guildId, i.userId)) && void 0 !== t ? t : null === (e = i.user) || void 0 === e ? void 0 : e.username,
                    roleColor: null === (n = l.ZP.getMember(i.guildId, i.userId)) || void 0 === n ? void 0 : n.colorString
                };
            },
            [i]
        ),
        p = r.useCallback(
            () =>
                (0, t.jsx)(o.PUh, {
                    name: m,
                    color: null != v ? v : void 0
                }),
            [m, v]
        );
    return (0, t.jsx)(c.Z, {
        className: x.textContainer,
        iconNode: (0, t.jsx)(d.Z, {
            className: x.icon,
            width: 16,
            height: 16
        }),
        iconContainerClassName: x.iconContainer,
        timestamp: null !== (n = i.endsAt) && void 0 !== n ? n : void 0,
        compact: !0,
        children: (0, t.jsx)(a.xv, {
            variant: 'text-md/semibold',
            children: u.intl.format(u.t['57St//'], {
                username: m,
                usernameHook: p
            })
        })
    });
}
