n.d(t, { A: () => o });
var r = n(311907),
    i = n(21119),
    a = n(153488),
    l = n(287809),
    s = n(607567),
    c = n(652215);
function o(e) {
    let t = (0, r.yK)(
            [s.Ay],
            () =>
                s.Ay.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
            [e.id, e.guild_id],
        ),
        n = (0, r.bG)([i.A], () => i.A.getUserAffinitiesMap()),
        o = (0, r.bG)([a.A], () => a.A.hasConsented(c.YAq.PERSONALIZATION));
    return (0, r.yK)(
        [l.default],
        () =>
            (o ? t.sort((e, t) => (n.get(t)?.vcProbability ?? 0) - (n.get(e)?.vcProbability ?? 0)) : t)
                .map((e) => l.default.getUser(e))
                .filter((e) => null != e),
        [o, n, t],
    );
}
