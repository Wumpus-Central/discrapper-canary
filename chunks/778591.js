"use strict";
n.d(t, { I: () => d, Z: () => c });
var r = n(792216),
    i = n(505779),
    s = n(311907),
    a = n(311043),
    o = n(240248),
    l = n(652215);
let u = "https://store.steampowered.com/app/";
function c(e) {
    return `${u}${encodeURIComponent(e)}`;
}
function d(e) {
    return (0, s.bG)([a.A], () => {
        if (null == e) return null;
        let t = a.A.getGame(e);
        if (null == t || t.steamReleaseStatus === r.Y.RETIRED_ABANDONED) return null;
        let n = t.websites.find((e) => e.category === i.V.STEAM)?.url,
            s = t.thirdPartySkus.filter((e) => e.distributor === l.d3x.STEAM && !(0, o.uJ)(e.id)),
            u = s[0]?.id,
            d = (0, o.uJ)(u) ? null : c(u);
        return s.length > 1 && null != n ? n : null != d ? d : null != n ? n : null;
    }, [e]);
}
