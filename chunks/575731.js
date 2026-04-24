n.d(t, { A: () => c });
var r = n(17928),
    a = n(427358),
    i = n(153488),
    l = n(287809),
    s = n(607567),
    o = n(652215);
function c(e) {
    let t = (0, r.yK)(
            [s.Ay],
            () =>
                s.Ay.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
            [e.id, e.guild_id],
        ),
        n = (0, r.bG)([a.A], () => a.A.getUserAffinitiesMap()),
        c = (0, r.bG)([i.A], () => i.A.hasConsented(o.YAq.PERSONALIZATION));
    return (0, r.yK)(
        [l.default],
        () =>
            (c ? t.sort((e, t) => (n.get(t)?.vcProbability ?? 0) - (n.get(e)?.vcProbability ?? 0)) : t)
                .map((e) => l.default.getUser(e))
                .filter((e) => null != e),
        [c, n, t],
    );
}
