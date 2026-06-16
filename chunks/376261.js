"use strict";
n.d(t, { T: () => a });
var i = n(17928),
    r = n(498642);
n(424994);
var s = n(652215);
function a(e) {
    return (0, i.bG)([r.A], () => {
        if (null == e) return;
        let t = r.A.getMemberCount(e.id),
            n = e.features.has(s.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
            i = e.features.has(s.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER);
        return n || i ? n : null != t && t < 1e4;
    });
}
