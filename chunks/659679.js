i.d(n, { Z: () => p });
var t = i(200651),
    a = i(192379),
    r = i(793030),
    o = i(442837),
    s = i(481060),
    c = i(834129),
    l = i(271383),
    d = i(709586),
    u = i(388032),
    m = i(808524);
function p(e) {
    var n;
    let { boost: i } = e,
        { username: p, roleColor: x } = (0, o.cj)(
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
        v = a.useCallback(
            () =>
                (0, t.jsx)(s.PUh, {
                    name: p,
                    color: null != x ? x : void 0
                }),
            [p, x]
        );
    return (0, t.jsx)(c.Z, {
        className: m.textContainer,
        iconNode: (0, t.jsx)(d.Z, {
            className: m.icon,
            width: 16,
            height: 16
        }),
        iconContainerClassName: m.iconContainer,
        timestamp: null !== (n = i.endsAt) && void 0 !== n ? n : void 0,
        compact: !0,
        children: (0, t.jsx)(r.xv, {
            variant: 'text-md/semibold',
            children: u.intl.format(u.t['57St//'], {
                username: p,
                usernameHook: v
            })
        })
    });
}
