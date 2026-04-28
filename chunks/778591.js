"use strict";
n.d(t, { I: () => u, Z: () => c });
var l = n(792216),
    i = n(505779),
    s = n(17928),
    a = n(311043),
    r = n(240248),
    o = n(652215);
function c(e) {
    return `https://store.steampowered.com/app/${encodeURIComponent(e)}`;
}
function u(e) {
    return (0, s.bG)([a.A], () => {
        if (null == e) return null;
        let t = a.A.getGame(e);
        if (null == t || t.steamReleaseStatus === l.Y.RETIRED_ABANDONED) return null;
        let n = t.websites.find((e) => e.category === i.V.STEAM)?.url,
            s = t.thirdPartySkus.filter((e) => e.distributor === o.d3x.STEAM && !(0, r.uJ)(e.id)),
            u = s[0]?.id,
            d = (0, r.uJ)(u) ? null : c(u);
        return s.length > 1 && null != n ? n : null != d ? d : null != n ? n : null;
    }, [e]);
}
