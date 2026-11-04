var l = s(855986),
    a = s(812020),
    i = s(153488),
    r = s(287809),
    o = s(607567),
    n = s(652215);
s.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, l.yK)(
                    [o.Ay],
                    () =>
                        o.Ay.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
                            let { user: t } = e;
                            return t.id;
                        }),
                    [e.id, e.guild_id],
                ),
                s = (0, l.bG)([a.A], () => a.A.getUserAffinitiesMap()),
                A = (0, l.bG)([i.A], () => i.A.hasConsented(n.YAq.PERSONALIZATION));
            return (0, l.yK)(
                [r.default],
                () =>
                    (A ? t.sort((e, t) => (s.get(t)?.vcProbability ?? 0) - (s.get(e)?.vcProbability ?? 0)) : t)
                        .map((e) => r.default.getUser(e))
                        .filter((e) => null != e),
                [A, s, t],
            );
        },
    },
);
