i.d(e, { Z: () => p });
var t = i(200651),
    a = i(192379),
    r = i(793030),
    o = i(442837),
    s = i(481060),
    c = i(834129),
    l = i(271383),
    d = i(709586),
    u = i(388032),
    x = i(494248);
function p(n) {
    var e;
    let { boost: i } = n,
        { username: p, roleColor: v } = (0, o.cj)(
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
        m = a.useCallback(
            () =>
                (0, t.jsx)(s.PUh, {
                    name: p,
                    color: null != v ? v : void 0
                }),
            [p, v]
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
        children: (0, t.jsx)(r.xv, {
            variant: 'text-md/semibold',
            children: u.intl.format(u.t['57St//'], {
                username: p,
                usernameHook: m
            })
        })
    });
}
