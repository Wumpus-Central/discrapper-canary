s.d(e, { A: () => o });
var a = s(17928),
    l = s(427358),
    i = s(153488),
    r = s(287809),
    n = s(607567),
    A = s(652215);
function o(t) {
    let e = (0, a.yK)(
            [n.Ay],
            () =>
                n.Ay.getVoiceStatesForChannelAlt(t.id, t.guild_id).map((t) => {
                    let { user: e } = t;
                    return e.id;
                }),
            [t.id, t.guild_id],
        ),
        s = (0, a.bG)([l.A], () => l.A.getUserAffinitiesMap()),
        o = (0, a.bG)([i.A], () => i.A.hasConsented(A.YAq.PERSONALIZATION));
    return (0, a.yK)(
        [r.default],
        () =>
            (o ? e.sort((t, e) => (s.get(e)?.vcProbability ?? 0) - (s.get(t)?.vcProbability ?? 0)) : e)
                .map((t) => r.default.getUser(t))
                .filter((t) => null != t),
        [o, s, e],
    );
}
