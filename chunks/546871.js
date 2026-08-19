n.d(t, { A: () => d });
var i = n(477900);
n(582128);
var l = n(17928),
    a = n(267102),
    s = n(447404),
    r = n(198052),
    o = n(525788),
    c = n(652215);
function d(e) {
    let { focusedParticipant: t, channel: n } = e,
        d = (0, a.Us)(),
        u = (0, l.bG)([r.A], () => r.A.getLayout(n.id, d));
    return (0, i.jsx)(s.A, {
        children: (0, i.jsx)(o.A, {
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: d === c.BRT.POPOUT || u === c.DUB.FULL_SCREEN,
        }),
    });
}
