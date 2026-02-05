n.d(t, { A: () => a });
var i = n(51082),
    l = n(806931);
function a(e, t) {
    let n = null,
        a = null,
        s = null,
        r = !1,
        o = !1,
        c = !1;
    switch (e.type) {
        case l.lp.ACTIVITY:
            break;
        case l.lp.USER:
            (n = e.streamId), (s = e.voiceState), (r = e.speaking), (o = e.latched), (c = e.ringing);
            break;
        case l.lp.STREAM:
            (n = e.streamId), (a = e.stream);
    }
    return {
        streamId: n,
        stream: a,
        speaking: r,
        latched: o,
        ringing: c,
        muted: s?.isVoiceMuted() ?? !1,
        deafen: s?.isVoiceDeafened() ?? !1,
        mirror: e.type === l.lp.USER && e.user.id === t,
        hasVideo: (0, i.Ay)(e),
    };
}
