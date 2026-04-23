"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    a = n(427358),
    r = n(153488),
    s = n(287809),
    l = n(607567),
    o = n(652215);
function c(e) {
    let t = (0, i.yK)(
            [l.Ay],
            () =>
                l.Ay.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
            [e.id, e.guild_id],
        ),
        n = (0, i.bG)([a.A], () => a.A.getUserAffinitiesMap()),
        c = (0, i.bG)([r.A], () => r.A.hasConsented(o.YAq.PERSONALIZATION));
    return (0, i.yK)(
        [s.default],
        () =>
            (c ? t.sort((e, t) => (n.get(t)?.vcProbability ?? 0) - (n.get(e)?.vcProbability ?? 0)) : t)
                .map((e) => s.default.getUser(e))
                .filter((e) => null != e),
        [c, n, t],
    );
}
