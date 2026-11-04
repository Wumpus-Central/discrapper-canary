n.d(t, { A: () => f });
var i = n(477900),
    a = n(582128),
    r = n(325652),
    l = n(829617),
    o = n(436046),
    s = n(712620),
    d = n(116716),
    c = n(326524),
    u = n(792996),
    m = n(635088);
function f() {
    let e = (0, o.A)("useThirdPartyPartnerPerkCards");
    return (0, a.useMemo)(() => {
        if (e === l.b.NONE) return null;
        let t = {
            id: s.nj,
            title: u.intl.string(c.default.ugfqKp),
            caption: (0, i.jsx)("img", { src: m.A, alt: "Call of Duty: MW4" }),
            backgroundAssetUrl:
                "https://cdn.discordapp.com/assets/content/b9b6d13755093a92031a3d24faea0c821340391971f9f5a82347d2507df39961.png",
        };
        return e === l.b.ALMOST_HERE
            ? {
                  ...t,
                  description: u.intl.formatToPlainString(c.default["Y/4agX"], { date: s.kX }),
                  pillText: u.intl.string(c.default.UvhjEc),
              }
            : {
                  ...t,
                  description: u.intl.formatToPlainString(c.default.D3CWUF, { date: s.kX }),
                  pillText: u.intl.string(d.default.OejyCi),
                  phase: r.L.TEASER,
                  teaserEndsAt: s.kX,
              };
    }, [e]);
}
