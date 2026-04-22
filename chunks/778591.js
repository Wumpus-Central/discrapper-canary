"use strict";
n.d(t, { I: () => u, Z: () => c });
var i = n(792216),
    l = n(505779),
    s = n(311907),
    r = n(311043),
    a = n(240248),
    o = n(652215);
function c(e) {
    return `https://store.steampowered.com/app/${encodeURIComponent(e)}`;
}
function u(e) {
    return (0, s.bG)([r.A], () => {
        if (null == e) return null;
        let t = r.A.getGame(e);
        if (null == t || t.steamReleaseStatus === i.Y.RETIRED_ABANDONED) return null;
        let n = t.websites.find((e) => e.category === l.V.STEAM)?.url,
            s = t.thirdPartySkus.filter((e) => e.distributor === o.d3x.STEAM && !(0, a.uJ)(e.id)),
            u = s[0]?.id,
            d = (0, a.uJ)(u) ? null : c(u);
        return s.length > 1 && null != n ? n : null != d ? d : null != n ? n : null;
    }, [e]);
}
