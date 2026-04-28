i.d(e, { A: () => u });
var a = i(17928),
    d = i(427358),
    r = i(153488),
    s = i(287809),
    l = i(607567),
    n = i(652215);
function u(t) {
    let e = (0, a.yK)(
            [l.Ay],
            () =>
                l.Ay.getVoiceStatesForChannelAlt(t.id, t.guild_id).map((t) => {
                    let { user: e } = t;
                    return e.id;
                }),
            [t.id, t.guild_id],
        ),
        i = (0, a.bG)([d.A], () => d.A.getUserAffinitiesMap()),
        u = (0, a.bG)([r.A], () => r.A.hasConsented(n.YAq.PERSONALIZATION));
    return (0, a.yK)(
        [s.default],
        () =>
            (u ? e.sort((t, e) => (i.get(e)?.vcProbability ?? 0) - (i.get(t)?.vcProbability ?? 0)) : e)
                .map((t) => s.default.getUser(t))
                .filter((t) => null != t),
        [u, i, e],
    );
}
