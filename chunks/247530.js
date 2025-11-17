n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(287734),
    a = n(872810),
    s = n(51144),
    o = n(388032);
function c(e) {
    let { applicationStreams: t } = e;
    return t.map((e) => {
        let { stream: t, streamUser: n } = e;
        return (0, r.jsx)(
            i.sNh,
            {
                id: "spectate-".concat(t.ownerId),
                action: () => {
                    l.default.selectVoiceChannel(t.channelId), (0, a.iV)(t);
                },
                label: o.intl.formatToPlainString(o.t.m09d0T, { streamerName: s.ZP.getName(n) }),
            },
            "spectate-".concat(t.ownerId),
        );
    });
}
