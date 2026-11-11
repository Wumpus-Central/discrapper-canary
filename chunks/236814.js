i.d(t, { N8: () => u, gG: () => p, v8: () => l });
var s,
    n = i(145359),
    c = i(773527),
    r = i(350972),
    m = i(211824),
    o = i(792996),
    a = i(701256),
    u = (((s = {})[(s.SIZE_48 = 48)] = "SIZE_48"), (s[(s.SIZE_60 = 60)] = "SIZE_60"), s);
function d() {
    return {
        id: r.LW.DEFAULT,
        iconSource: "/assets/5926a37cee0904ce.webp",
        name: o.intl.string(o.t.ANxkLy),
        isPremium: !1,
    };
}
function l() {
    return [
        d(),
        {
            id: r.Ic.BRAND_DARK,
            iconSource: "/assets/e8396e79419904ca.webp",
            name: o.intl.string(o.t.gZEUBl),
            isPremium: !0,
        },
        { id: r.Ic.MANGA, iconSource: "/assets/2d62663c4b493f8e.webp", isPremium: !0, name: o.intl.string(o.t.hGBbF8) },
        {
            id: r.Ic.MATTE_DARK,
            iconSource: "/assets/28f89b5f78dd6f80.webp",
            isPremium: !0,
            name: o.intl.string(o.t.NkshQt),
        },
        {
            id: r.Ic.MATTE_LIGHT,
            iconSource: "/assets/96f9a2942150ba17.webp",
            name: o.intl.string(o.t.G2W302),
            isPremium: !0,
        },
        {
            id: r.Ic.PASTEL,
            iconSource: "/assets/22bb7108ad1c466f.webp",
            isPremium: !0,
            name: o.intl.string(o.t.mTSkLT),
        },
        {
            id: r.Ic.PIRATE,
            iconSource: "/assets/9af4b996c897420f.webp",
            isPremium: !0,
            name: o.intl.string(o.t["EgWTY+"]),
        },
        { id: r.Ic.CAMO, iconSource: "/assets/9ad8ec824f71bd05.webp", isPremium: !0, name: o.intl.string(o.t.RSKXOK) },
        {
            id: r.Ic.SUNSET,
            iconSource: "/assets/5bf3279039efa66c.webp",
            isPremium: !0,
            name: o.intl.string(o.t.ixdjPB),
        },
        {
            id: r.Ic.GALAXY,
            iconSource: "/assets/3a2d57c0bde9b218.webp",
            isPremium: !0,
            name: o.intl.string(o.t.cb78Ls),
        },
        {
            id: r.Ic.Y2K,
            iconSource: "/assets/181e40b5ea872cdb.webp",
            isPremium: !0,
            name: o.intl.string(o.t["s+KoXO"]),
        },
        {
            id: r.Ic.CHERRY_BLOSSOM,
            iconSource: "/assets/1e208c512641758d.webp",
            isPremium: !0,
            name: o.intl.string(o.t["ta/5RB"]),
        },
        {
            id: r.Ic.BEANIE,
            iconSource: "/assets/e14578cc054054c0.webp",
            isPremium: !0,
            name: o.intl.string(o.t.IoLViw),
        },
        {
            id: r.Ic.GAMING,
            iconSource: "/assets/5e5cc9b058e63987.webp",
            isPremium: !0,
            name: o.intl.string(o.t["2Tf+c4"]),
        },
        {
            id: r.Ic.CIRCUIT,
            iconSource: "/assets/82c7a89d15622af4.webp",
            isPremium: !0,
            name: o.intl.string(o.t.dUpxKb),
        },
        {
            id: r.Ic.HOLO_WAVES,
            iconSource: "/assets/441d164362b711b1.webp",
            isPremium: !0,
            name: o.intl.string(o.t["9mg7g1"]),
        },
        { id: r.Ic.BLUSH, iconSource: "/assets/e5f2a55421a6dc7e.webp", isPremium: !0, name: o.intl.string(o.t.nmd90m) },
        {
            id: r.Ic.ANGRY,
            iconSource: "/assets/9b50f7ba00ee941f.webp",
            isPremium: !0,
            name: o.intl.string(o.t["9PUXpM"]),
        },
        {
            id: r.Ic.CONTROLLER,
            iconSource: "/assets/a629a2a3fe1ccbcc.webp",
            isPremium: !0,
            name: o.intl.string(o.t["4QM2U1"]),
        },
        {
            id: r.Ic.BLURPLE_TWILIGHT,
            iconSource: "/assets/685b2900a9423534.webp",
            isPremium: !0,
            name: o.intl.string(o.t.Mfoe3p),
        },
        {
            id: r.Ic.IN_RAINBOWS,
            iconSource: "/assets/10cd104567438715.webp",
            isPremium: !0,
            name: o.intl.string(o.t.yxJB9E),
        },
        {
            id: r.Ic.MIDNIGHT_PRISM,
            iconSource: "/assets/7ebbc1790864207a.webp",
            isPremium: !0,
            name: o.intl.string(o.t.nshUZZ),
        },
        {
            id: r.Ic.COLOR_WAVE,
            iconSource: "/assets/7ce5a942a5cc7cba.webp",
            isPremium: !0,
            name: o.intl.string(o.t.MWRYqh),
        },
    ];
}
function p(e) {
    let t = (
        (0, c.z9)(e)
            ? (0, n.FL)(m.vB.APP_ICON, "AppIconConstants") === m.S9.HIDDEN
                ? []
                : [
                      {
                          id: r.aS.HEXAGON,
                          iconSource: "/assets/236f9310543771ae.webp",
                          isPremium: (0, c.sD)(m.vB.APP_ICON),
                          expiresAt: m.zv,
                          name: o.intl.string(a.default.JC4Pii),
                      },
                  ]
            : l()
    ).find((t) => t.id === e);
    return null != t ? t : d();
}
