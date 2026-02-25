"use strict";
n.d(t, { N8: () => R, gG: () => w, v8: () => L });
var r = n(350972),
    i = n(985018),
    s = n(564355),
    a = n(5201),
    o = n(943184),
    l = n(899194),
    u = n(926468),
    c = n(764447),
    d = n(956764),
    _ = n(746528),
    f = n(657673),
    p = n(754820),
    h = n(465036),
    m = n(858228),
    E = n(950005),
    g = n(640756),
    A = n(707420),
    I = n(438798),
    T = n(529603),
    S = n(213187),
    y = n(738403),
    v = n(853681),
    N = n(540837),
    C = n(652002),
    b = n(629078),
    R = (function (e) {
        return (e[(e.SIZE_48 = 48)] = "SIZE_48"), (e[(e.SIZE_60 = 60)] = "SIZE_60"), e;
    })({});
function O() {
    return { id: r.LW.DEFAULT, iconSource: a, name: i.intl.string(i.t.ANxkLy), isPremium: !1 };
}
function D() {
    return [
        { id: r.Ic.BRAND_DARK, iconSource: c, name: i.intl.string(i.t.gZEUBl), isPremium: !0 },
        { id: r.Ic.MANGA, iconSource: I, isPremium: !0, name: i.intl.string(i.t.hGBbF8) },
        { id: r.Ic.MATTE_DARK, iconSource: T, isPremium: !0, name: i.intl.string(i.t.NkshQt) },
        { id: r.Ic.MATTE_LIGHT, iconSource: S, name: i.intl.string(i.t.G2W302), isPremium: !0 },
        { id: r.Ic.PASTEL, iconSource: v, isPremium: !0, name: i.intl.string(i.t.mTSkLT) },
        { id: r.Ic.PIRATE, iconSource: N, isPremium: !0, name: i.intl.string(i.t["EgWTY+"]) },
        { id: r.Ic.CAMO, iconSource: d, isPremium: !0, name: i.intl.string(i.t.RSKXOK) },
        { id: r.Ic.SUNSET, iconSource: C, isPremium: !0, name: i.intl.string(i.t.ixdjPB) },
        { id: r.Ic.GALAXY, iconSource: m, isPremium: !0, name: i.intl.string(i.t.cb78Ls) },
        { id: r.Ic.Y2K, iconSource: b, isPremium: !0, name: i.intl.string(i.t["s+KoXO"]) },
        { id: r.Ic.CHERRY_BLOSSOM, iconSource: _, isPremium: !0, name: i.intl.string(i.t["ta/5RB"]) },
        { id: r.Ic.BEANIE, iconSource: o, isPremium: !0, name: i.intl.string(i.t.IoLViw) },
        { id: r.Ic.GAMING, iconSource: E, isPremium: !0, name: i.intl.string(i.t["2Tf+c4"]) },
        { id: r.Ic.CIRCUIT, iconSource: f, isPremium: !0, name: i.intl.string(i.t.dUpxKb) },
        { id: r.Ic.HOLO_WAVES, iconSource: g, isPremium: !0, name: i.intl.string(i.t["9mg7g1"]) },
        { id: r.Ic.BLUSH, iconSource: u, isPremium: !0, name: i.intl.string(i.t.nmd90m) },
        { id: r.Ic.ANGRY, iconSource: s, isPremium: !0, name: i.intl.string(i.t["9PUXpM"]) },
        { id: r.Ic.CONTROLLER, iconSource: h, isPremium: !0, name: i.intl.string(i.t["4QM2U1"]) },
        { id: r.Ic.BLURPLE_TWILIGHT, iconSource: l, isPremium: !0, name: i.intl.string(i.t.Mfoe3p) },
        { id: r.Ic.IN_RAINBOWS, iconSource: A, isPremium: !0, name: i.intl.string(i.t.yxJB9E) },
        { id: r.Ic.MIDNIGHT_PRISM, iconSource: y, isPremium: !0, name: i.intl.string(i.t.nshUZZ) },
        { id: r.Ic.COLOR_WAVE, iconSource: p, isPremium: !0, name: i.intl.string(i.t.MWRYqh) },
    ];
}
function L() {
    return [O(), ...D()];
}
function w(e) {
    let t = L().find((t) => t.id === e);
    return null != t ? t : O();
}
