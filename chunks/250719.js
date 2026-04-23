n.d(t, { A: () => o });
var i = n(17928),
    l = n(734057),
    s = n(607567),
    r = n(181079),
    a = n(652215);
function o(e) {
    return (0, i.cf)([s.Ay, l.A, r.A], () => {
        if (e !== a.YYv) return s.Ay.getVoiceStates(e);
        let t = r.A.getFavoriteChannels(),
            n = {};
        for (let e in t) {
            let t = l.A.getChannel(e);
            null != t && (n[e] = s.Ay.getVoiceStatesForChannel(t));
        }
        return n;
    }, [e]);
}
