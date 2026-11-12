s.d(e, { N8: () => o, gG: () => I, v8: () => d });
var n,
    t = s(145359),
    c = s(773527),
    r = s(350972),
    a = s(211824),
    m = s(792996),
    u = s(701256),
    o = (((n = {})[(n.SIZE_48 = 48)] = "SIZE_48"), (n[(n.SIZE_60 = 60)] = "SIZE_60"), n);
function b() {
    return {
        id: r.LW.DEFAULT,
        iconSource: "/assets/5926a37cee0904ce.webp",
        name: m.intl.string(m.t.ANxkLy),
        isPremium: !1,
    };
}
function d() {
    return [
        b(),
        {
            id: r.Ic.BRAND_DARK,
            iconSource: "/assets/e8396e79419904ca.webp",
            name: m.intl.string(m.t.gZEUBl),
            isPremium: !0,
        },
        { id: r.Ic.MANGA, iconSource: "/assets/2d62663c4b493f8e.webp", isPremium: !0, name: m.intl.string(m.t.hGBbF8) },
        {
            id: r.Ic.MATTE_DARK,
            iconSource: "/assets/28f89b5f78dd6f80.webp",
            isPremium: !0,
            name: m.intl.string(m.t.NkshQt),
        },
        {
            id: r.Ic.MATTE_LIGHT,
            iconSource: "/assets/96f9a2942150ba17.webp",
            name: m.intl.string(m.t.G2W302),
            isPremium: !0,
        },
        {
            id: r.Ic.PASTEL,
            iconSource: "/assets/22bb7108ad1c466f.webp",
            isPremium: !0,
            name: m.intl.string(m.t.mTSkLT),
        },
        {
            id: r.Ic.PIRATE,
            iconSource: "/assets/9af4b996c897420f.webp",
            isPremium: !0,
            name: m.intl.string(m.t["EgWTY+"]),
        },
        { id: r.Ic.CAMO, iconSource: "/assets/9ad8ec824f71bd05.webp", isPremium: !0, name: m.intl.string(m.t.RSKXOK) },
        {
            id: r.Ic.SUNSET,
            iconSource: "/assets/5bf3279039efa66c.webp",
            isPremium: !0,
            name: m.intl.string(m.t.ixdjPB),
        },
        {
            id: r.Ic.GALAXY,
            iconSource: "/assets/3a2d57c0bde9b218.webp",
            isPremium: !0,
            name: m.intl.string(m.t.cb78Ls),
        },
        {
            id: r.Ic.Y2K,
            iconSource: "/assets/181e40b5ea872cdb.webp",
            isPremium: !0,
            name: m.intl.string(m.t["s+KoXO"]),
        },
        {
            id: r.Ic.CHERRY_BLOSSOM,
            iconSource: "/assets/1e208c512641758d.webp",
            isPremium: !0,
            name: m.intl.string(m.t["ta/5RB"]),
        },
        {
            id: r.Ic.BEANIE,
            iconSource: "/assets/e14578cc054054c0.webp",
            isPremium: !0,
            name: m.intl.string(m.t.IoLViw),
        },
        {
            id: r.Ic.GAMING,
            iconSource: "/assets/5e5cc9b058e63987.webp",
            isPremium: !0,
            name: m.intl.string(m.t["2Tf+c4"]),
        },
        {
            id: r.Ic.CIRCUIT,
            iconSource: "/assets/82c7a89d15622af4.webp",
            isPremium: !0,
            name: m.intl.string(m.t.dUpxKb),
        },
        {
            id: r.Ic.HOLO_WAVES,
            iconSource: "/assets/441d164362b711b1.webp",
            isPremium: !0,
            name: m.intl.string(m.t["9mg7g1"]),
        },
        { id: r.Ic.BLUSH, iconSource: "/assets/e5f2a55421a6dc7e.webp", isPremium: !0, name: m.intl.string(m.t.nmd90m) },
        {
            id: r.Ic.ANGRY,
            iconSource: "/assets/9b50f7ba00ee941f.webp",
            isPremium: !0,
            name: m.intl.string(m.t["9PUXpM"]),
        },
        {
            id: r.Ic.CONTROLLER,
            iconSource: "/assets/a629a2a3fe1ccbcc.webp",
            isPremium: !0,
            name: m.intl.string(m.t["4QM2U1"]),
        },
        {
            id: r.Ic.BLURPLE_TWILIGHT,
            iconSource: "/assets/685b2900a9423534.webp",
            isPremium: !0,
            name: m.intl.string(m.t.Mfoe3p),
        },
        {
            id: r.Ic.IN_RAINBOWS,
            iconSource: "/assets/10cd104567438715.webp",
            isPremium: !0,
            name: m.intl.string(m.t.yxJB9E),
        },
        {
            id: r.Ic.MIDNIGHT_PRISM,
            iconSource: "/assets/7ebbc1790864207a.webp",
            isPremium: !0,
            name: m.intl.string(m.t.nshUZZ),
        },
        {
            id: r.Ic.COLOR_WAVE,
            iconSource: "/assets/7ce5a942a5cc7cba.webp",
            isPremium: !0,
            name: m.intl.string(m.t.MWRYqh),
        },
    ];
}
function I(i) {
    let e = (
        (0, c.z9)(i)
            ? (0, t.FL)(a.vB.APP_ICON, "AppIconConstants") === a.S9.HIDDEN
                ? []
                : [
                      {
                          id: r.aS.HEXAGON,
                          iconSource: "/assets/236f9310543771ae.webp",
                          isPremium: (0, c.sD)(a.vB.APP_ICON),
                          expiresAt: a.zv,
                          name: m.intl.string(u.default.JC4Pii),
                      },
                  ]
            : d()
    ).find((e) => e.id === i);
    return null != e ? e : b();
}
