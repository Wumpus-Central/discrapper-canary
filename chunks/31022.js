n.d(t, { Z: () => f }), n(388685);
var r = n(442837),
    i = n(853856),
    l = n(592125),
    o = n(938475),
    s = n(823379),
    a = n(136015),
    c = n(709054),
    u = n(565799),
    d = n(501655),
    h = n(981631);
function p(e) {
    let { voiceState: t, userNick: n, user: r } = e,
        i = (0, o.sQ)(t, n);
    return {
        user: r,
        voiceState: t,
        nick: n,
        comparator: i
    };
}
function f(e) {
    let [t] = (0, r.e7)(
        [u.Z, l.Z, i.Z],
        () => {
            let t;
            return [
                (t =
                    e === h.I_8
                        ? c.default
                              .keys(i.Z.getFavoriteChannels())
                              .map((e) => l.Z.getChannel(e))
                              .filter(s.lm)
                              .filter((e) => e.isGuildStageVoice())
                        : u.Z.getChannels(e)).reduce((e, t) => {
                    let n = u.Z.getMutableParticipants(t.id, d.pV.SPEAKER);
                    return (e[t.id] = n.filter((e) => e.type === d.Ui.VOICE).map(p)), e;
                }, {}),
                t.reduce((e, t) => {
                    let { id: n } = t;
                    return e + u.Z.getParticipantsVersion(n);
                }, 0)
            ];
        },
        [e],
        a.Q
    );
    return t;
}
