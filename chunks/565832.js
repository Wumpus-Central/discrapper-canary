n.d(t, {
    A: () => c,
});
var a = n(627968),
    l = n(311907),
    i = n(935154),
    r = n(748319),
    s = n(287809),
    o = n(427262);

function c(e) {
    var t;
    let { nameplate: n } = e,
        c = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
        d = null != (t = o.Ay.useName(c)) ? t : "";
    return (0, a.jsx)(r.g, {
        username: d,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: i.cl.ONLINE,
        currentUser: c,
        activities: [],
        applicationStream: void 0,
        userTag: "",
        hidePrivateData: !1,
        premiumSubscription: void 0,
        speakingWhileMuted: !1,
        speakingWhilePTTInactive: !1,
        occluded: !1,
        dismissibleContents: {
            avatar: [],
            settings: [],
        },
        awaitingRemote: !1,
        isEligibleForPomelo: !1,
        nameplate: n,
        voiceChannel: null,
        voiceActivityStatusEnabled: !1,
        isQuestBarEmpty: !0,
        hasLoadedQuestBar: !0,
        isListenAlongVisible: !1,
    });
}
