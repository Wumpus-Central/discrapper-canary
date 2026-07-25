n.d(t, { A: () => o });
var l = n(17928),
    i = n(734057),
    s = n(607567),
    r = n(181079),
    a = n(5180);
function o(e) {
    return (0, l.cf)([s.Ay, i.A, r.A], () => {
        if (!(0, a.ai)(e)) return s.Ay.getVoiceStates(e);
        let t = r.A.getFavoriteChannels(),
            n = {};
        for (let e in t) {
            let t = i.A.getChannel(e);
            null != t && (n[e] = s.Ay.getVoiceStatesForChannel(t));
        }
        return n;
    }, [e]);
}
