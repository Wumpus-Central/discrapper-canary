n.d(t, { A: () => f });
var i = n(477900),
    a = n(582128),
    r = n(325652),
    l = n(829617),
    s = n(565088),
    o = n(712620),
    d = n(19107),
    c = n(658825),
    u = n(105292),
    m = n(635088);
function f() {
    let e = (0, s.A)("useThirdPartyPartnerPerkCards");
    return (0, a.useMemo)(() => {
        if (e === l.b.NONE) return null;
        let t = {
            id: o.nj,
            title: u.intl.string(c.default.ugfqKp),
            caption: (0, i.jsx)("img", { src: m.A, alt: "Call of Duty: MW4" }),
            backgroundAssetUrl:
                "https://cdn.discordapp.com/assets/content/b9b6d13755093a92031a3d24faea0c821340391971f9f5a82347d2507df39961.png",
        };
        return e === l.b.ALMOST_HERE
            ? {
                  ...t,
                  description: u.intl.formatToPlainString(c.default["Y/4agX"], { date: o.kX }),
                  pillText: u.intl.string(c.default.UvhjEc),
              }
            : {
                  ...t,
                  description: u.intl.formatToPlainString(c.default.D3CWUF, { date: o.kX }),
                  pillText: u.intl.string(d.default.OejyCi),
                  phase: r.L.TEASER,
                  teaserEndsAt: o.kX,
              };
    }, [e]);
}
