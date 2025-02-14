n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(287734),
    a = n(872810),
    s = n(51144),
    o = n(388032);
function d(e) {
    let { applicationStreams: t } = e;
    return t.map((e) => {
        let { stream: t, streamUser: n } = e;
        return (0, i.jsx)(
            l.sNh,
            {
                id: 'spectate-'.concat(t.ownerId),
                action: () => {
                    r.default.selectVoiceChannel(t.channelId), (0, a.iV)(t);
                },
                label: o.intl.formatToPlainString(o.t.m09d0d, { streamerName: s.ZP.getName(n) })
            },
            'spectate-'.concat(t.ownerId)
        );
    });
}
