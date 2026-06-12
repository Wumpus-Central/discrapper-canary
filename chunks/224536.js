"use strict";
n.d(t, { A: () => o });
var i = n(976860),
    r = n(71393),
    s = n(379610),
    a = n(652215);
let o = {
    onOpenHubInvite(e) {
        let { guild: t } = e;
        null != t && (null != r.A.getGuild(t.id) ? (0, i.pX)(a.BVt.CHANNEL(t.id)) : (0, s.A)(e.code));
    },
};
