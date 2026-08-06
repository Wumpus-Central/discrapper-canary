n.d(t, { A: () => d });
var a = n(17928),
    i = n(427358),
    l = n(153488),
    r = n(287809),
    o = n(607567),
    s = n(652215);
function d(e) {
    let t = (0, a.yK)(
            [o.Ay],
            () =>
                o.Ay.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
            [e.id, e.guild_id],
        ),
        n = (0, a.bG)([i.A], () => i.A.getUserAffinitiesMap()),
        d = (0, a.bG)([l.A], () => l.A.hasConsented(s.YAq.PERSONALIZATION));
    return (0, a.yK)(
        [r.default],
        () =>
            (d ? t.sort((e, t) => (n.get(t)?.vcProbability ?? 0) - (n.get(e)?.vcProbability ?? 0)) : t)
                .map((e) => r.default.getUser(e))
                .filter((e) => null != e),
        [d, n, t],
    );
}
