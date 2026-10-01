s.d(e, { A: () => d });
var i = s(17928),
    l = s(427358),
    r = s(153488),
    a = s(287809),
    A = s(607567),
    n = s(652215);
function d(t) {
    let e = (0, i.yK)(
            [A.Ay],
            () =>
                A.Ay.getVoiceStatesForChannelAlt(t.id, t.guild_id).map((t) => {
                    let { user: e } = t;
                    return e.id;
                }),
            [t.id, t.guild_id],
        ),
        s = (0, i.bG)([l.A], () => l.A.getUserAffinitiesMap()),
        d = (0, i.bG)([r.A], () => r.A.hasConsented(n.YAq.PERSONALIZATION));
    return (0, i.yK)(
        [a.default],
        () =>
            (d ? e.sort((t, e) => (s.get(e)?.vcProbability ?? 0) - (s.get(t)?.vcProbability ?? 0)) : e)
                .map((t) => a.default.getUser(t))
                .filter((t) => null != t),
        [d, s, e],
    );
}
