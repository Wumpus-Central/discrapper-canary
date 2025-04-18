n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    a = n(447543),
    l = n(100527),
    o = n(906732),
    s = n(792766),
    c = n(955415);
let u = (e) => {
    let { invite: t, stageInstance: n, guild: u, inviterId: d, isMember: p, onTransitionToInviteChannel: m, onAcceptInstantInvite: f } = e,
        { analyticsLocations: h } = (0, o.ZP)(l.Z.INVITE_EMBED),
        g = i.useCallback(() => {
            let e = 'noop';
            p ? (m(), (e = 'transition')) : (f(), (e = 'accept')),
                (0, a.r$)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: d
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
