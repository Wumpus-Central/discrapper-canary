"use strict";
n.d(t, { T: () => a });
var r = n(311907),
    i = n(498642);
n(424994);
var s = n(652215);
function a(e) {
    return (0, r.bG)([i.A], () => {
        if (null == e) return;
        let t = i.A.getMemberCount(e.id),
            n = e.features.has(s.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
            r = e.features.has(s.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER);
        return n || r ? n : null != t && t < 1e4;
    });
}
