n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120),
    n(724458);
var i = n(442837),
    l = n(853856),
    r = n(592125),
    a = n(938475),
    o = n(823379),
    s = n(136015),
    c = n(709054),
    u = n(565799),
    d = n(501655),
    h = n(981631);
function p(e) {
    let { voiceState: t, userNick: n, user: i } = e,
        l = (0, a.sQ)(t, n);
    return {
        user: i,
        voiceState: t,
        nick: n,
        comparator: l
    };
}
function m(e) {
    let [t] = (0, i.e7)(
        [u.Z, r.Z, l.Z],
        () => {
            let t;
            let n = (t =
                e === h.I_8
                    ? c.default
                          .keys(l.Z.getFavoriteChannels())
                          .map((e) => r.Z.getChannel(e))
                          .filter(o.lm)
                          .filter((e) => e.isGuildStageVoice())
                    : u.Z.getChannels(e)).reduce((e, t) => {
                let n = u.Z.getMutableParticipants(t.id, d.pV.SPEAKER);
                return (e[t.id] = n.filter((e) => e.type === d.Ui.VOICE).map(p)), e;
            }, {});
            return [
                n,
                t.reduce((e, t) => {
                    let { id: n } = t;
                    return e + u.Z.getParticipantsVersion(n);
                }, 0)
            ];
        },
        [e],
        s.Q
    );
    return t;
}
