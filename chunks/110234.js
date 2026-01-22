n.d(t, {
    A: () => i,
});
var l = n(51082),
    r = n(806931);

function i(e, t) {
    var n, i;
    let a = null,
        s = null,
        o = null,
        c = !1,
        u = !1,
        d = !1;
    switch (e.type) {
        case r.lp.ACTIVITY:
            break;
        case r.lp.USER:
            (a = e.streamId), (o = e.voiceState), (c = e.speaking), (u = e.latched), (d = e.ringing);
            break;
        case r.lp.STREAM:
            (a = e.streamId), (s = e.stream);
    }
    return {
        streamId: a,
        stream: s,
        speaking: c,
        latched: u,
        ringing: d,
        muted: null != (n = null == o ? void 0 : o.isVoiceMuted()) && n,
        deafen: null != (i = null == o ? void 0 : o.isVoiceDeafened()) && i,
        mirror: e.type === r.lp.USER && e.user.id === t,
        hasVideo: (0, l.Ay)(e),
    };
}
