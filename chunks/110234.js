n.d(t, { A: () => s });
var i = n(51082),
    l = n(806931);
function s(e, t) {
    let n = null,
        s = null,
        a = null,
        r = !1,
        o = !1;
    switch (e.type) {
        case l.lp.ACTIVITY:
            break;
        case l.lp.USER:
            (n = e.streamId), (a = e.voiceState), (r = e.speaking), (o = e.ringing);
            break;
        case l.lp.STREAM:
            (n = e.streamId), (s = e.stream);
    }
    return {
        streamId: n,
        stream: s,
        speaking: r,
        ringing: o,
        muted: a?.isVoiceMuted() ?? !1,
        deafen: a?.isVoiceDeafened() ?? !1,
        mirror: e.type === l.lp.USER && e.user.id === t,
        hasVideo: (0, i.Ay)(e),
    };
}
