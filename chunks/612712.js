"use strict";
n.d(t, { A: () => r });
var i = n(311907),
    s = n(71393),
    l = n(652215);
function r(e) {
    return (0, i.bG)([s.A], () => {
        if (null == e) return !1;
        let t = s.A.getGuild(e);
        return t?.features.has(l.GuildFeatures.HUB) ?? !1;
    }, [e]);
}
