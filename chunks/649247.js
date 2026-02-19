"use strict";
n.d(t, { A: () => p });
var i = n(311907),
    s = n(181079),
    l = n(734057),
    r = n(607567),
    a = n(403362),
    o = n(996439),
    c = n(661191),
    d = n(63995),
    u = n(69407),
    h = n(652215);
function A(e) {
    let { voiceState: t, userNick: n, user: i } = e,
        s = (0, r.hz)(t, n);
    return { user: i, voiceState: t, nick: n, comparator: s };
}
function p(e) {
    let [t] = (0, i.bG)(
        [d.A, l.A, s.A],
        () => {
            let t;
            return [
                (t =
                    e === h.YYv
                        ? c.default
                              .keys(s.A.getFavoriteChannels())
                              .map((e) => l.A.getChannel(e))
                              .filter(a.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : d.A.getChannels(e)).reduce((e, t) => {
                    let n = d.A.getMutableParticipants(t.id, u.ip.SPEAKER);
                    return (e[t.id] = n.filter((e) => e.type === u.wY.VOICE).map(A)), e;
                }, {}),
                t.reduce((e, t) => {
                    let { id: n } = t;
                    return e + d.A.getParticipantsVersion(n);
                }, 0),
            ];
        },
        [e],
        o.D,
    );
    return t;
}
