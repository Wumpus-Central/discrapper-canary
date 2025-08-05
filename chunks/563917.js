n.d(t, { Z: () => u });
var r = n(255367),
    i = n(73800),
    a = n(447543),
    o = n(100527),
    s = n(906732),
    l = n(792766),
    c = n(955415);
let u = (e) => {
    let { invite: t, stageInstance: n, guild: u, message: d, isMember: f, onTransitionToInviteChannel: _, onAcceptInstantInvite: p } = e,
        { analyticsLocations: h } = (0, s.ZP)(o.Z.INVITE_EMBED),
        m = i.useCallback(() => {
            let e = 'noop';
            (f ? (_(), (e = 'transition')) : (p(), (e = 'accept')),
                (0, a.r$)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: d.author.id,
                        invite_message_id: d.id
                    },
                    h
                ));
        }, [t, d, h, f, _, p]);
    return (0, r.jsx)(c.Z, {
        children: (0, r.jsx)(l.Z, {
            isEmbed: !0,
            stageInstance: n,
            guild: u,
            onClick: m
        })
    });
};
