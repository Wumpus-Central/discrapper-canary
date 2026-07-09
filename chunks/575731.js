n.d(e, { A: () => u });
var i = n(17928),
    r = n(427358),
    a = n(153488),
    o = n(287809),
    l = n(607567),
    s = n(652215);
function u(t) {
    let e = (0, i.yK)(
            [l.Ay],
            () =>
                l.Ay.getVoiceStatesForChannelAlt(t.id, t.guild_id).map((t) => {
                    let { user: e } = t;
                    return e.id;
                }),
            [t.id, t.guild_id],
        ),
        n = (0, i.bG)([r.A], () => r.A.getUserAffinitiesMap()),
        u = (0, i.bG)([a.A], () => a.A.hasConsented(s.YAq.PERSONALIZATION));
    return (0, i.yK)(
        [o.default],
        () =>
            (u ? e.sort((t, e) => (n.get(e)?.vcProbability ?? 0) - (n.get(t)?.vcProbability ?? 0)) : e)
                .map((t) => o.default.getUser(t))
                .filter((t) => null != t),
        [u, n, e],
    );
}
