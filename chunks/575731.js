"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(427358),
    a = n(153488),
    s = n(287809),
    l = n(607567),
    o = n(652215);
function d(e) {
    let t = (0, i.yK)(
            [l.Ay],
            () =>
                l.Ay.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
            [e.id, e.guild_id],
        ),
        n = (0, i.bG)([r.A], () => r.A.getUserAffinitiesMap()),
        d = (0, i.bG)([a.A], () => a.A.hasConsented(o.YAq.PERSONALIZATION));
    return (0, i.yK)(
        [s.default],
        () =>
            (d ? t.sort((e, t) => (n.get(t)?.vcProbability ?? 0) - (n.get(e)?.vcProbability ?? 0)) : t)
                .map((e) => s.default.getUser(e))
                .filter((e) => null != e),
        [d, n, t],
    );
}
