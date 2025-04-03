n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(287734),
    a = n(872810),
    o = n(51144),
    s = n(388032);
function c(e) {
    let { applicationStreams: t } = e;
    return t.map((e) => {
        let { stream: t, streamUser: n } = e;
        return (0, r.jsx)(
            i.sNh,
            {
                id: 'spectate-'.concat(t.ownerId),
                action: () => {
                    l.default.selectVoiceChannel(t.channelId), (0, a.iV)(t);
                },
                label: s.NW.formatToPlainString(s.t.m09d0d, { streamerName: o.ZP.getName(n) })
            },
            'spectate-'.concat(t.ownerId)
        );
    });
}
