n.d(t, { A: () => o });
var r = n(311907),
    l = n(734057),
    i = n(607567),
    a = n(181079),
    s = n(652215);
function o(e) {
    return (0, r.cf)([i.Ay, l.A, a.A], () => {
        if (e !== s.YYv) return i.Ay.getVoiceStates(e);
        let t = a.A.getFavoriteChannels(),
            n = {};
        for (let e in t) {
            let t = l.A.getChannel(e);
            null != t && (n[e] = i.Ay.getVoiceStatesForChannel(t));
        }
        return n;
    }, [e]);
}
