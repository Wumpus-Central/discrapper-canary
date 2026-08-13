a.d(t, { A: () => d });
var l = a(17928),
    n = a(427358),
    i = a(153488),
    s = a(287809),
    r = a(607567),
    o = a(652215);
function d(e) {
    let t = (0, l.yK)(
            [r.Ay],
            () =>
                r.Ay.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
            [e.id, e.guild_id],
        ),
        a = (0, l.bG)([n.A], () => n.A.getUserAffinitiesMap()),
        d = (0, l.bG)([i.A], () => i.A.hasConsented(o.YAq.PERSONALIZATION));
    return (0, l.yK)(
        [s.default],
        () =>
            (d ? t.sort((e, t) => (a.get(t)?.vcProbability ?? 0) - (a.get(e)?.vcProbability ?? 0)) : t)
                .map((e) => s.default.getUser(e))
                .filter((e) => null != e),
        [d, a, t],
    );
}
