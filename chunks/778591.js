"use strict";
n.d(t, { I: () => c, Z: () => u });
var l = n(792216),
    i = n(505779),
    s = n(17928),
    r = n(311043),
    a = n(240248),
    o = n(652215);
function u(e) {
    return `https://store.steampowered.com/app/${encodeURIComponent(e)}`;
}
function c(e) {
    return (0, s.bG)([r.A], () => {
        if (null == e) return null;
        let t = r.A.getGame(e);
        if (null == t || t.steamReleaseStatus === l.Y.RETIRED_ABANDONED) return null;
        let n = t.websites.find((e) => e.category === i.V.STEAM)?.url,
            s = t.thirdPartySkus.filter((e) => e.distributor === o.d3x.STEAM && !(0, a.uJ)(e.id)),
            c = s[0]?.id,
            d = (0, a.uJ)(c) ? null : u(c);
        return s.length > 1 && null != n ? n : null != d ? d : null != n ? n : null;
    }, [e]);
}
