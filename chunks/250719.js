n.d(t, { A: () => o });
var i = n(311907),
    l = n(734057),
    s = n(607567),
    a = n(181079),
    r = n(652215);
function o(e) {
    return (0, i.cf)([s.Ay, l.A, a.A], () => {
        if (e !== r.YYv) return s.Ay.getVoiceStates(e);
        let t = a.A.getFavoriteChannels(),
            n = {};
        for (let e in t) {
            let t = l.A.getChannel(e);
            null != t && (n[e] = s.Ay.getVoiceStatesForChannel(t));
        }
        return n;
    }, [e]);
}
