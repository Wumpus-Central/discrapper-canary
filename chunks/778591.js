"use strict";
n.d(t, { I: () => u });
var a = n(792216),
    l = n(505779),
    i = n(311907),
    r = n(587895),
    s = n(223273),
    c = n(136086),
    o = n(240248),
    d = n(652215);
function u(e) {
    return (0, i.bG)([c.A, r.A], () => {
        if (null == e) return null;
        let t = c.A.getGame(e),
            n = t?.supplementalData,
            i = r.A.getApplication(e);
        if (n?.steamReleaseStatus === a.Y.RETIRED_ABANDONED) return null;
        if (i?.linkedGames?.some((e) => e.type === s.Mh.OFFICIAL)) {
            let e = t?.thirdPartySkus?.find((e) => e.distributor === d.d3x.STEAM),
                n = e?.id;
            if (!(0, o.uJ)(n)) return `https://store.steampowered.com/app/${encodeURIComponent(n)}`;
            return null;
        }
        if (n?.websites == null) return null;
        let u = n.websites.find((e) => e.category === l.V.STEAM);
        return u?.url ?? null;
    }, [e]);
}
