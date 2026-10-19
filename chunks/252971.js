n.d(t, { A: () => E });
var i = n(477900),
    l = n(582128),
    r = n(325652),
    s = n(829617),
    a = n(565088),
    o = n(712620),
    d = n(416927),
    c = n(411749),
    u = n(105292),
    A = n(635088);
function E() {
    let e = (0, a.A)("useThirdPartyPartnerPerkCards");
    return (0, l.useMemo)(() => {
        if (e === s.b.NONE) return null;
        let t = {
            id: o.n,
            title: u.intl.string(c.default.ugfqKp),
            caption: (0, i.jsx)("img", { src: A.A, alt: "Call of Duty: MW4" }),
            backgroundAssetUrl:
                "https://cdn.discordapp.com/assets/content/b9b6d13755093a92031a3d24faea0c821340391971f9f5a82347d2507df39961.png",
        };
        return e === s.b.ALMOST_HERE
            ? {
                  ...t,
                  description: u.intl.formatToPlainString(c.default["Y/4agX"], { date: o.k }),
                  pillText: u.intl.string(c.default.UvhjEc),
              }
            : {
                  ...t,
                  description: u.intl.formatToPlainString(c.default.D3CWUF, { date: o.k }),
                  pillText: u.intl.string(d.default.OejyCi),
                  phase: r.L.TEASER,
                  teaserEndsAt: o.k,
              };
    }, [e]);
}
