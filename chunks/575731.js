var l = n(855986),
    i = n(812020),
    a = n(153488),
    r = n(287809),
    s = n(607567),
    o = n(652215);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, l.yK)(
                    [s.Ay],
                    () =>
                        s.Ay.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
                            let { user: t } = e;
                            return t.id;
                        }),
                    [e.id, e.guild_id],
                ),
                n = (0, l.bG)([i.A], () => i.A.getUserAffinitiesMap()),
                u = (0, l.bG)([a.A], () => a.A.hasConsented(o.YAq.PERSONALIZATION));
            return (0, l.yK)(
                [r.default],
                () =>
                    (u ? t.sort((e, t) => (n.get(t)?.vcProbability ?? 0) - (n.get(e)?.vcProbability ?? 0)) : t)
                        .map((e) => r.default.getUser(e))
                        .filter((e) => null != e),
                [u, n, t],
            );
        },
    },
);
