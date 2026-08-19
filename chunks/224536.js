"use strict";
n.d(t, { A: () => l });
var i = n(976860),
    r = n(71393),
    a = n(379610),
    s = n(652215);
let l = {
    onOpenHubInvite(e) {
        let { guild: t } = e;
        null != t && (null != r.A.getGuild(t.id) ? (0, i.pX)(s.BVt.CHANNEL(t.id)) : (0, a.A)(e.code));
    },
};
