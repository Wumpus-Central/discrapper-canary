n.d(t, { A: () => c });
var i = n(477900);
n(582128);
var l = n(17928),
    a = n(267102),
    s = n(447404),
    r = n(198052),
    o = n(525788),
    d = n(652215);
function c(e) {
    let { focusedParticipant: t, channel: n } = e,
        c = (0, a.Us)(),
        u = (0, l.bG)([r.A], () => r.A.getLayout(n.id, c));
    return (0, i.jsx)(s.A, {
        children: (0, i.jsx)(o.A, {
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: c === d.BRT.POPOUT || u === d.DUB.FULL_SCREEN,
        }),
    });
}
