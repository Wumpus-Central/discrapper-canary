n.d(t, { I: () => c, Z: () => u });
var l = n(792216),
    r = n(505779),
    o = n(17928),
    a = n(311043),
    i = n(240248),
    s = n(652215);
function u(e) {
    return `https://store.steampowered.com/app/${encodeURIComponent(e)}`;
}
function c(e) {
    return (0, o.bG)(
        [a.A],
        () => {
            if (null == e) return null;
            let t = a.A.getGame(e);
            if (null == t || t.steamReleaseStatus === l.Y.RETIRED_ABANDONED) return null;
            let n = t.websites.find((e) => e.category === r.V.STEAM)?.url,
                o = t.thirdPartySkus.filter((e) => e.distributor === s.d3x.STEAM && !(0, i.uJ)(e.id)),
                c = o[0]?.id,
                d = (0, i.uJ)(c) ? null : u(c);
            return o.length > 1 && null != n ? n : null != d ? d : null != n ? n : null;
        },
        [e],
    );
}
