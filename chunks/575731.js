s.d(e, { A: () => A });
var l = s(17928),
    a = s(427358),
    i = s(153488),
    r = s(287809),
    n = s(607567),
    o = s(652215);
function A(t) {
    let e = (0, l.yK)(
            [n.Ay],
            () =>
                n.Ay.getVoiceStatesForChannelAlt(t.id, t.guild_id).map((t) => {
                    let { user: e } = t;
                    return e.id;
                }),
            [t.id, t.guild_id],
        ),
        s = (0, l.bG)([a.A], () => a.A.getUserAffinitiesMap()),
        A = (0, l.bG)([i.A], () => i.A.hasConsented(o.YAq.PERSONALIZATION));
    return (0, l.yK)(
        [r.default],
        () =>
            (A ? e.sort((t, e) => (s.get(e)?.vcProbability ?? 0) - (s.get(t)?.vcProbability ?? 0)) : e)
                .map((t) => r.default.getUser(t))
                .filter((t) => null != t),
        [A, s, e],
    );
}
