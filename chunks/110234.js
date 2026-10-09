n.d(t, { A: () => s });
var i = n(51082),
    l = n(806931);
function s(e, t) {
    let n = null,
        s = null,
        r = null,
        a = !1,
        o = !1;
    switch (e.type) {
        case l.lp.ACTIVITY:
            break;
        case l.lp.USER:
            ((n = e.streamId), (r = e.voiceState), (a = e.speaking), (o = e.ringing));
            break;
        case l.lp.STREAM:
            ((n = e.streamId), (s = e.stream));
    }
    return {
        streamId: n,
        stream: s,
        speaking: a,
        ringing: o,
        muted: r?.isVoiceMuted() ?? !1,
        deafen: r?.isVoiceDeafened() ?? !1,
        mirror: e.type === l.lp.USER && e.user.id === t,
        hasVideo: (0, i.Ay)(e),
    };
}
