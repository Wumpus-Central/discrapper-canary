i.d(e, { Z: () => m });
var t = i(200651),
    r = i(192379),
    a = i(793030),
    s = i(442837),
    o = i(481060),
    c = i(834129),
    l = i(271383),
    d = i(709586),
    u = i(388032),
    x = i(427092);
function m(n) {
    var e;
    let { boost: i } = n,
        { username: m, roleColor: v } = (0, s.cj)(
            [l.ZP],
            () => {
                var n, e, t;
                return {
                    username: null !== (t = l.ZP.getNick(i.guildId, i.userId)) && void 0 !== t ? t : null === (n = i.user) || void 0 === n ? void 0 : n.username,
                    roleColor: null === (e = l.ZP.getMember(i.guildId, i.userId)) || void 0 === e ? void 0 : e.colorString
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
        timestamp: null !== (e = i.endsAt) && void 0 !== e ? e : void 0,
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
