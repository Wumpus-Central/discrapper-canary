n.d(t, { A: () => s });
var l = n(51082),
    i = n(806931);
function s(e, t) {
    let n = null,
        s = null,
        r = null,
        a = !1,
        o = !1;
    switch (e.type) {
        case i.lp.ACTIVITY:
            break;
        case i.lp.USER:
            (n = e.streamId), (r = e.voiceState), (a = e.speaking), (o = e.ringing);
            break;
        case i.lp.STREAM:
            (n = e.streamId), (s = e.stream);
    }
    return {
        streamId: n,
        stream: s,
        speaking: a,
        ringing: o,
        muted: r?.isVoiceMuted() ?? !1,
        deafen: r?.isVoiceDeafened() ?? !1,
        mirror: e.type === i.lp.USER && e.user.id === t,
        hasVideo: (0, l.Ay)(e),
    };
}
