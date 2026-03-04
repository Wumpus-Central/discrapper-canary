i.d(t, { I: () => m });
var n = i(792216),
    l = i(505779),
    a = i(311907),
    s = i(587895),
    r = i(524799),
    c = i(223273),
    o = i(760751),
    d = i(240248),
    u = i(652215);
function m(e) {
    return (0, a.bG)([o.A, r.A, s.A], () => {
        if (null == e) return null;
        let t = o.A.getDetectableGame(e),
            i = r.A.getGame(e),
            a = s.A.getApplication(e);
        if (i?.steamReleaseStatus === n.Y.RETIRED_ABANDONED) return null;
        if (a?.linkedGames?.some((e) => e.type === c.Mh.OFFICIAL) === !0) {
            let e = t?.thirdPartySkus?.find((e) => e.distributor === u.d3x.STEAM),
                i = e?.id;
            if (!(0, d.uJ)(i)) return "https://store.steampowered.com/app/{app_id}".replace("{app_id}", i);
            return null;
        }
        if (i?.websites == null) return null;
        let m = i.websites.find((e) => e.category === l.V.STEAM);
        return m?.url ?? null;
    }, [e]);
}
