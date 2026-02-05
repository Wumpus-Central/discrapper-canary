"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(21119),
    a = n(153488),
    s = n(287809),
    o = n(607567),
    l = n(652215);
function u(e) {
    let t = (0, r.yK)(
            [o.Ay],
            () =>
                o.Ay.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
            [e.id, e.guild_id],
        ),
        n = (0, r.bG)([i.A], () => i.A.getUserAffinitiesMap()),
        u = (0, r.bG)([a.A], () => a.A.hasConsented(l.YAq.PERSONALIZATION));
    return (0, r.yK)(
        [s.default],
        () =>
            (u ? t.sort((e, t) => (n.get(t)?.vcProbability ?? 0) - (n.get(e)?.vcProbability ?? 0)) : t)
                .map((e) => s.default.getUser(e))
                .filter((e) => null != e),
        [u, n, t],
    );
}
