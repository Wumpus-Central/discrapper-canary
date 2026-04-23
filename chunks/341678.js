n.d(t, { A: () => r });
var i = n(311907),
    l = n(346542),
    a = n(21119),
    s = n(616356);
function r(e) {
    let { invite: t, message: n, voiceStates: r, guildId: o, channelId: d } = e;
    return (0, i.bG)([s.A, a.A], () => {
        if ((0, l.G4)(t) && null != t.target_user) {
            let e = s.A.getStreamForUser(t.target_user.id, o);
            if (null != e && e.channelId === d) return e;
        }
        let e = n.author.id;
        if (r.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
            let t = s.A.getStreamForUser(e, o);
            if (null != t && t.channelId === d) return t;
        }
        let i = r.filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e).map((e) => e.voiceState.userId);
        if (0 === i.length) return null;
        for (let e of [...i].sort((e, t) => {
            let n = a.A.getUserAffinity(e)?.vcProbability ?? 0;
            return (a.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
        })) {
            let t = s.A.getStreamForUser(e, o);
            if (null != t && t.channelId === d) return t;
        }
        return null;
    }, [t, n, r, o, d]);
}
