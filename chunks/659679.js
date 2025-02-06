n.d(i, { Z: () => m });
var t = n(200651),
    a = n(192379),
    r = n(793030),
    o = n(442837),
    s = n(481060),
    c = n(834129),
    l = n(271383),
    d = n(709586),
    u = n(388032),
    p = n(808524);
function m(e) {
    var i;
    let { boost: n } = e,
        { username: m, roleColor: x } = (0, o.cj)(
            [l.ZP],
            () => {
                var e, i, t;
                return {
                    username: null !== (t = l.ZP.getNick(n.guildId, n.userId)) && void 0 !== t ? t : null === (e = n.user) || void 0 === e ? void 0 : e.username,
                    roleColor: null === (i = l.ZP.getMember(n.guildId, n.userId)) || void 0 === i ? void 0 : i.colorString
                };
            },
            [n]
        ),
        v = a.useCallback(
            () =>
                (0, t.jsx)(s.PUh, {
                    name: m,
                    color: null != x ? x : void 0
                }),
            [m, x]
        );
    return (0, t.jsx)(c.Z, {
        className: p.textContainer,
        iconNode: (0, t.jsx)(d.Z, {
            className: p.icon,
            width: 16,
            height: 16
        }),
        iconContainerClassName: p.iconContainer,
        timestamp: null !== (i = n.endsAt) && void 0 !== i ? i : void 0,
        compact: !0,
        children: (0, t.jsx)(r.xv, {
            variant: 'text-md/semibold',
            children: u.intl.format(u.t['57St//'], {
                username: m,
                usernameHook: v
            })
        })
    });
}
