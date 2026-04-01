n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(267102),
    a = n(447404),
    r = n(313961),
    o = n(525788),
    d = n(652215);
function c(e) {
    let { focusedParticipant: t, channel: n } = e,
        c = (0, s.Us)(),
        u = (0, l.bG)([r.A], () => r.A.getLayout(n.id, c));
    return (0, i.jsx)(a.A, {
        children: (0, i.jsx)(o.A, {
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: c === d.BRT.POPOUT || u === d.DUB.FULL_SCREEN,
        }),
    });
}
