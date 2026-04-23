"use strict";
n.d(t, { I: () => _, Z: () => d });
var i = n(792216),
    r = n(505779),
    s = n(17928),
    a = n(311043),
    o = n(240248),
    l = n(652215);
function d(e) {
    return `https://store.steampowered.com/app/${encodeURIComponent(e)}`;
}
function _(e) {
    return (0, s.bG)([a.A], () => {
        if (null == e) return null;
        let t = a.A.getGame(e);
        if (null == t || t.steamReleaseStatus === i.Y.RETIRED_ABANDONED) return null;
        let n = t.websites.find((e) => e.category === r.V.STEAM)?.url,
            s = t.thirdPartySkus.filter((e) => e.distributor === l.d3x.STEAM && !(0, o.uJ)(e.id)),
            _ = s[0]?.id,
            u = (0, o.uJ)(_) ? null : d(_);
        return s.length > 1 && null != n ? n : null != u ? u : null != n ? n : null;
    }, [e]);
}
