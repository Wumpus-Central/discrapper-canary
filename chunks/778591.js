var l = n(792216),
    i = n(505779),
    a = n(855986),
    r = n(311043),
    s = n(240248),
    o = n(652215);
function u(e) {
    return `https://store.steampowered.com/app/${encodeURIComponent(e)}`;
}
n.d(
    t,
    {},
    {
        I: function (e) {
            return (0, a.bG)(
                [r.A],
                () => {
                    if (null == e) return null;
                    let t = r.A.getGame(e);
                    if (null == t || t.steamReleaseStatus === l.Y.RETIRED_ABANDONED) return null;
                    let n = t.websites.find((e) => e.category === i.V1.STEAM)?.url,
                        a = t.thirdPartySkus.filter((e) => e.distributor === o.d3x.STEAM && !(0, s.uJ)(e.id)),
                        c = a[0]?.id,
                        d = (0, s.uJ)(c) ? null : u(c);
                    return a.length > 1 && null != n ? n : null != d ? d : null != n ? n : null;
                },
                [e],
            );
        },
        Z: u,
    },
);
