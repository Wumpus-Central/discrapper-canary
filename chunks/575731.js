"use strict";
n.d(t, { A: () => u });
var i = n(17928),
    r = n(427358),
    s = n(153488),
    a = n(287809),
    o = n(607567),
    l = n(652215);
function u(e) {
    let t = (0, i.yK)(
            [o.Ay],
            () =>
                o.Ay.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
            [e.id, e.guild_id],
        ),
        n = (0, i.bG)([r.A], () => r.A.getUserAffinitiesMap()),
        u = (0, i.bG)([s.A], () => s.A.hasConsented(l.YAq.PERSONALIZATION));
    return (0, i.yK)(
        [a.default],
        () =>
            (u ? t.sort((e, t) => (n.get(t)?.vcProbability ?? 0) - (n.get(e)?.vcProbability ?? 0)) : t)
                .map((e) => a.default.getUser(e))
                .filter((e) => null != e),
        [u, n, t],
    );
}
