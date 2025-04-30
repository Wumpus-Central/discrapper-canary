n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    l = n(447543),
    a = n(100527),
    o = n(906732),
    s = n(792766),
    c = n(955415);
let u = (e) => {
    let { invite: t, stageInstance: n, guild: u, message: d, isMember: p, onTransitionToInviteChannel: m, onAcceptInstantInvite: f } = e,
        { analyticsLocations: h } = (0, o.ZP)(a.Z.INVITE_EMBED),
        g = i.useCallback(() => {
            let e = 'noop';
            p ? (m(), (e = 'transition')) : (f(), (e = 'accept')),
                (0, l.r$)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: d.author.id,
                        invite_message_id: d.id
                    },
                    h
                );
        }, [t, d, h, p, m, f]);
    return (0, r.jsx)(c.Z, {
        children: (0, r.jsx)(s.Z, {
            isEmbed: !0,
            stageInstance: n,
            guild: u,
            onClick: g
        })
    });
};
