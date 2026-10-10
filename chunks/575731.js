s.d(t, { A: () => o });
var l = s(17928),
    a = s(427358),
    i = s(153488),
    r = s(287809),
    A = s(607567),
    n = s(652215);
function o(e) {
    let t = (0, l.yK)(
            [A.Ay],
            () =>
                A.Ay.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
            [e.id, e.guild_id],
        ),
        s = (0, l.bG)([a.A], () => a.A.getUserAffinitiesMap()),
        o = (0, l.bG)([i.A], () => i.A.hasConsented(n.YAq.PERSONALIZATION));
    return (0, l.yK)(
        [r.default],
        () =>
            (o ? t.sort((e, t) => (s.get(t)?.vcProbability ?? 0) - (s.get(e)?.vcProbability ?? 0)) : t)
                .map((e) => r.default.getUser(e))
                .filter((e) => null != e),
        [o, s, t],
    );
}
