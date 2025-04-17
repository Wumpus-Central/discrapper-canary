n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    l = n(447543),
    a = n(100527),
    o = n(906732),
    s = n(792766),
    c = n(955415);
let u = (e) => {
    let { invite: t, stageInstance: n, guild: u, isMember: d, onTransitionToInviteChannel: p, onAcceptInstantInvite: m } = e,
        { analyticsLocations: f } = (0, o.ZP)(a.Z.INVITE_EMBED),
        h = i.useCallback(() => {
            let e = 'noop';
            d ? (p(), (e = 'transition')) : (m(), (e = 'accept')), (0, l.r$)(t, e, f);
        }, [t, f, d, p, m]);
    return (0, r.jsx)(c.Z, {
        children: (0, r.jsx)(s.Z, {
            isEmbed: !0,
            stageInstance: n,
            guild: u,
            onClick: h
        })
    });
};
