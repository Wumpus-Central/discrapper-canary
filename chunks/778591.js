"use strict";
n.d(t, { I: () => f, Z: () => _ });
var r = n(792216),
    i = n(505779),
    s = n(311907),
    a = n(587895),
    o = n(223273),
    l = n(136086),
    u = n(240248),
    c = n(652215);
let d = "https://store.steampowered.com/app/";
function _(e) {
    return `${d}${encodeURIComponent(e)}`;
}
function f(e) {
    return (0, s.bG)([l.A, a.A], () => {
        if (null == e) return null;
        let t = l.A.getGame(e),
            n = t?.supplementalData,
            s = a.A.getApplication(e);
        if (n?.steamReleaseStatus === r.Y.RETIRED_ABANDONED) return null;
        if (s?.linkedGames?.some((e) => e.type === o.Mh.OFFICIAL)) {
            let e = t?.thirdPartySkus?.find((e) => e.distributor === c.d3x.STEAM),
                n = e?.id;
            return (0, u.uJ)(n) ? null : _(n);
        }
        if (n?.websites == null) return null;
        let d = n.websites.find((e) => e.category === i.V.STEAM);
        return d?.url ?? null;
    }, [e]);
}
