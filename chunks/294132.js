n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(956793),
    l = n(401843),
    s = n(427262),
    o = n(985018);
function d(e) {
    let { applicationStreams: t } = e;
    return t.map((e) => {
        let { stream: t, streamUser: n } = e;
        return (0, i.jsx)(
            r.Drp,
            {
                id: `spectate-${t.ownerId}`,
                action: () => {
                    a.default.selectVoiceChannel(t.channelId), (0, l.Nl)(t);
                },
                label: o.intl.formatToPlainString(o.t.m09d0T, { streamerName: s.Ay.getName(n) }),
            },
            `spectate-${t.ownerId}`,
        );
    });
}
