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
        if (t?.steamReleaseStatus === r.Y.RETIRED_ABANDONED) return null;
        let n = t?.thirdPartySkus?.find((e) => e.distributor === l.d3x.STEAM),
            s = n?.id;
        if (!(0, o.uJ)(s)) return c(s);
        if (t?.websites != null) {
            let e = t.websites.find((e) => e.category === i.V.STEAM);
            if (e?.url != null) return e.url;
        }
        return null;
    }, [e]);
}
