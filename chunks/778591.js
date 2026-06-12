"use strict";
n.d(t, { I: () => c, Z: () => u });
var i = n(792216),
    r = n(505779),
    s = n(17928),
    a = n(311043),
    o = n(240248),
    l = n(652215);
function u(e) {
    return `https://store.steampowered.com/app/${encodeURIComponent(e)}`;
}
function c(e) {
    return (0, s.bG)([a.A], () => {
        if (null == e) return null;
        let t = a.A.getGame(e);
        if (null == t || t.steamReleaseStatus === i.Y.RETIRED_ABANDONED) return null;
        let n = t.websites.find((e) => e.category === r.V.STEAM)?.url,
            s = t.thirdPartySkus.filter((e) => e.distributor === l.d3x.STEAM && !(0, o.uJ)(e.id)),
            c = s[0]?.id,
            d = (0, o.uJ)(c) ? null : u(c);
        return s.length > 1 && null != n ? n : null != d ? d : null != n ? n : null;
    }, [e]);
}
