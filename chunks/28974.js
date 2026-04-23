a.d(t, { A: () => d });
var n = a(627968),
    l = a(311907),
    i = a(652215),
    s = a(748319),
    r = a(287809),
    o = a(427262);
function d(e) {
    let { nameplate: t } = e,
        a = (0, l.bG)([r.default], () => r.default.getCurrentUser()),
        d = o.Ay.useName(a) ?? "";
    return (0, n.jsx)(s.g, {
        username: d,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: i.clD.ONLINE,
        currentUser: a,
        activities: [],
        applicationStream: void 0,
        userTag: "",
        speakingWhileMuted: !1,
        speakingWhilePTTInactive: !1,
        occluded: !1,
        dismissibleContents: { avatar: [], settings: [] },
        awaitingRemote: !1,
        nameplate: t,
        voiceChannel: null,
        isQuestBarEmpty: !0,
        isListenAlongVisible: !1,
    });
}
