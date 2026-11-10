n.d(t, { N8: () => u, gG: () => h, v8: () => m });
var i,
    s = n(576254),
    r = n(773527),
    l = n(350972),
    a = n(211824),
    c = n(792996),
    o = n(701256),
    u = (((i = {})[(i.SIZE_48 = 48)] = "SIZE_48"), (i[(i.SIZE_60 = 60)] = "SIZE_60"), i);
function d() {
    return {
        id: l.LW.DEFAULT,
        iconSource: "/assets/5926a37cee0904ce.webp",
        name: c.intl.string(c.t.ANxkLy),
        isPremium: !1,
    };
}
function m() {
    return [
        d(),
        {
            id: l.Ic.BRAND_DARK,
            iconSource: "/assets/e8396e79419904ca.webp",
            name: c.intl.string(c.t.gZEUBl),
            isPremium: !0,
        },
        { id: l.Ic.MANGA, iconSource: "/assets/2d62663c4b493f8e.webp", isPremium: !0, name: c.intl.string(c.t.hGBbF8) },
        {
            id: l.Ic.MATTE_DARK,
            iconSource: "/assets/28f89b5f78dd6f80.webp",
            isPremium: !0,
            name: c.intl.string(c.t.NkshQt),
        },
        {
            id: l.Ic.MATTE_LIGHT,
            iconSource: "/assets/96f9a2942150ba17.webp",
            name: c.intl.string(c.t.G2W302),
            isPremium: !0,
        },
        {
            id: l.Ic.PASTEL,
            iconSource: "/assets/22bb7108ad1c466f.webp",
            isPremium: !0,
            name: c.intl.string(c.t.mTSkLT),
        },
        {
            id: l.Ic.PIRATE,
            iconSource: "/assets/9af4b996c897420f.webp",
            isPremium: !0,
            name: c.intl.string(c.t["EgWTY+"]),
        },
        { id: l.Ic.CAMO, iconSource: "/assets/9ad8ec824f71bd05.webp", isPremium: !0, name: c.intl.string(c.t.RSKXOK) },
        {
            id: l.Ic.SUNSET,
            iconSource: "/assets/5bf3279039efa66c.webp",
            isPremium: !0,
            name: c.intl.string(c.t.ixdjPB),
        },
        {
            id: l.Ic.GALAXY,
            iconSource: "/assets/3a2d57c0bde9b218.webp",
            isPremium: !0,
            name: c.intl.string(c.t.cb78Ls),
        },
        {
            id: l.Ic.Y2K,
            iconSource: "/assets/181e40b5ea872cdb.webp",
            isPremium: !0,
            name: c.intl.string(c.t["s+KoXO"]),
        },
        {
            id: l.Ic.CHERRY_BLOSSOM,
            iconSource: "/assets/1e208c512641758d.webp",
            isPremium: !0,
            name: c.intl.string(c.t["ta/5RB"]),
        },
        {
            id: l.Ic.BEANIE,
            iconSource: "/assets/e14578cc054054c0.webp",
            isPremium: !0,
            name: c.intl.string(c.t.IoLViw),
        },
        {
            id: l.Ic.GAMING,
            iconSource: "/assets/5e5cc9b058e63987.webp",
            isPremium: !0,
            name: c.intl.string(c.t["2Tf+c4"]),
        },
        {
            id: l.Ic.CIRCUIT,
            iconSource: "/assets/82c7a89d15622af4.webp",
            isPremium: !0,
            name: c.intl.string(c.t.dUpxKb),
        },
        {
            id: l.Ic.HOLO_WAVES,
            iconSource: "/assets/441d164362b711b1.webp",
            isPremium: !0,
            name: c.intl.string(c.t["9mg7g1"]),
        },
        { id: l.Ic.BLUSH, iconSource: "/assets/e5f2a55421a6dc7e.webp", isPremium: !0, name: c.intl.string(c.t.nmd90m) },
        {
            id: l.Ic.ANGRY,
            iconSource: "/assets/9b50f7ba00ee941f.webp",
            isPremium: !0,
            name: c.intl.string(c.t["9PUXpM"]),
        },
        {
            id: l.Ic.CONTROLLER,
            iconSource: "/assets/a629a2a3fe1ccbcc.webp",
            isPremium: !0,
            name: c.intl.string(c.t["4QM2U1"]),
        },
        {
            id: l.Ic.BLURPLE_TWILIGHT,
            iconSource: "/assets/685b2900a9423534.webp",
            isPremium: !0,
            name: c.intl.string(c.t.Mfoe3p),
        },
        {
            id: l.Ic.IN_RAINBOWS,
            iconSource: "/assets/10cd104567438715.webp",
            isPremium: !0,
            name: c.intl.string(c.t.yxJB9E),
        },
        {
            id: l.Ic.MIDNIGHT_PRISM,
            iconSource: "/assets/7ebbc1790864207a.webp",
            isPremium: !0,
            name: c.intl.string(c.t.nshUZZ),
        },
        {
            id: l.Ic.COLOR_WAVE,
            iconSource: "/assets/7ce5a942a5cc7cba.webp",
            isPremium: !0,
            name: c.intl.string(c.t.MWRYqh),
        },
    ];
}
function h(e) {
    let t = (
        (0, r.z9)(e)
            ? (0, s.FL)(a.vB.APP_ICON, "AppIconConstants") === a.S9.HIDDEN
                ? []
                : [
                      {
                          id: l.aS.HEXAGON,
                          iconSource: "/assets/236f9310543771ae.webp",
                          isPremium: (0, r.sD)(a.vB.APP_ICON),
                          expiresAt: a.zv,
                          name: c.intl.string(o.default.JC4Pii),
                      },
                  ]
            : m()
    ).find((t) => t.id === e);
    return null != t ? t : d();
}
