n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(477782),
    l = n(956793),
    a = n(401843),
    r = n(427262),
    o = n(985018);
function c(e) {
    let { applicationStreams: t } = e;
    return t.map((e) => {
        let { stream: t, streamUser: n } = e;
        return (0, i.jsx)(
            s.Dr,
            {
                id: `spectate-${t.ownerId}`,
                action: () => {
                    l.default.selectVoiceChannel(t.channelId), (0, a.Nl)(t);
                },
                label: o.intl.formatToPlainString(o.t.m09d0T, { streamerName: r.Ay.getName(n) }),
            },
            `spectate-${t.ownerId}`,
        );
    });
}
