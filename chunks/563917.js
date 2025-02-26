n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    a = n(447543),
    o = n(100527),
    l = n(906732),
    s = n(792766),
    c = n(955415);
let d = (e) => {
    let { invite: t, stageInstance: n, guild: d, isMember: u, onTransitionToInviteChannel: p, onAcceptInstantInvite: m } = e,
        { analyticsLocations: f } = (0, l.ZP)(o.Z.INVITE_EMBED),
        h = i.useCallback(() => {
            let e = 'noop';
            u ? (p(), (e = 'transition')) : (m(), (e = 'accept')), (0, a.r$)(t, e, f);
        }, [t, f, u, p, m]);
    return (0, r.jsx)(c.Z, {
        children: (0, r.jsx)(s.Z, {
            isEmbed: !0,
            stageInstance: n,
            guild: d,
            onClick: h
        })
    });
};
