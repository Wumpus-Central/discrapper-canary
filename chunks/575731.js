"use strict";
n.d(t, { A: () => c });
var a = n(311907),
    i = n(21119),
    r = n(153488),
    s = n(287809),
    l = n(607567),
    o = n(652215);
function c(e) {
    let t = (0, a.yK)(
            [l.Ay],
            () =>
                l.Ay.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
            [e.id, e.guild_id],
        ),
        n = (0, a.bG)([i.A], () => i.A.getUserAffinitiesMap()),
        c = (0, a.bG)([r.A], () => r.A.hasConsented(o.YAq.PERSONALIZATION));
    return (0, a.yK)(
        [s.default],
        () =>
            (c ? t.sort((e, t) => (n.get(t)?.vcProbability ?? 0) - (n.get(e)?.vcProbability ?? 0)) : t)
                .map((e) => s.default.getUser(e))
                .filter((e) => null != e),
        [c, n, t],
    );
}
