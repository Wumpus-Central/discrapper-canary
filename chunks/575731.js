a.d(e, { A: () => A });
var r = a(17928),
    i = a(427358),
    n = a(153488),
    l = a(287809),
    s = a(607567),
    o = a(652215);
function A(t) {
    let e = (0, r.yK)(
            [s.Ay],
            () =>
                s.Ay.getVoiceStatesForChannelAlt(t.id, t.guild_id).map((t) => {
                    let { user: e } = t;
                    return e.id;
                }),
            [t.id, t.guild_id],
        ),
        a = (0, r.bG)([i.A], () => i.A.getUserAffinitiesMap()),
        A = (0, r.bG)([n.A], () => n.A.hasConsented(o.YAq.PERSONALIZATION));
    return (0, r.yK)(
        [l.default],
        () =>
            (A ? e.sort((t, e) => (a.get(e)?.vcProbability ?? 0) - (a.get(t)?.vcProbability ?? 0)) : e)
                .map((t) => l.default.getUser(t))
                .filter((t) => null != t),
        [A, a, e],
    );
}
