n.d(t, { A: () => _ });
var i = n(311907),
    l = n(181079),
    s = n(734057),
    a = n(607567),
    r = n(403362),
    o = n(996439),
    c = n(661191),
    d = n(63995),
    u = n(69407),
    h = n(652215);
function A(e) {
    let { voiceState: t, userNick: n, user: i } = e,
        l = (0, a.hz)(t, n);
    return { user: i, voiceState: t, nick: n, comparator: l };
}
function _(e) {
    let [t] = (0, i.bG)(
        [d.A, s.A, l.A],
        () => {
            let t;
            return [
                (t =
                    e === h.YYv
                        ? c.default
                              .keys(l.A.getFavoriteChannels())
                              .map((e) => s.A.getChannel(e))
                              .filter(r.Vq)
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
