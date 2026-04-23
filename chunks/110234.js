n.d(t, { A: () => a });
var i = n(51082),
    l = n(806931);
function a(e, t) {
    let n = null,
        a = null,
        r = null,
        s = !1,
        o = !1;
    switch (e.type) {
        case l.lp.ACTIVITY:
            break;
        case l.lp.USER:
            (n = e.streamId), (r = e.voiceState), (s = e.speaking), (o = e.ringing);
            break;
        case l.lp.STREAM:
            (n = e.streamId), (a = e.stream);
    }
    return {
        streamId: n,
        stream: a,
        speaking: s,
        ringing: o,
        muted: r?.isVoiceMuted() ?? !1,
        deafen: r?.isVoiceDeafened() ?? !1,
        mirror: e.type === l.lp.USER && e.user.id === t,
        hasVideo: (0, i.Ay)(e),
    };
}
