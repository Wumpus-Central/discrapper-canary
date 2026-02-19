"use strict";
n.d(t, { A: () => o });
var i = n(311907),
    s = n(734057),
    l = n(607567),
    r = n(181079),
    a = n(652215);
function o(e) {
    return (0, i.cf)([l.Ay, s.A, r.A], () => {
        if (e !== a.YYv) return l.Ay.getVoiceStates(e);
        let t = r.A.getFavoriteChannels(),
            n = {};
        for (let e in t) {
            let t = s.A.getChannel(e);
            null != t && (n[e] = l.Ay.getVoiceStatesForChannel(t));
        }
        return n;
    }, [e]);
}
