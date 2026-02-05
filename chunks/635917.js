"use strict";
n.d(t, { Kl: () => R, gG: () => w, v8: () => L });
var r = n(350972),
    i = n(985018),
    a = n(564355),
    s = n(5201),
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
    g = n(950005),
    E = n(640756),
    A = n(707420),
    I = n(438798),
    T = n(529603),
    y = n(213187),
    S = n(738403),
    v = n(853681),
    C = n(540837),
    b = n(652002),
    N = n(629078);
let R = 60;
function O() {
    return { id: r.LW.DEFAULT, iconSource: s, name: i.intl.string(i.t.ANxkLy), isPremium: !1 };
}
function D() {
    return [
        { id: r.Ic.BRAND_DARK, iconSource: c, name: i.intl.string(i.t.gZEUBl), isPremium: !0 },
        { id: r.Ic.MANGA, iconSource: I, isPremium: !0, name: i.intl.string(i.t.hGBbF8) },
        { id: r.Ic.MATTE_DARK, iconSource: T, isPremium: !0, name: i.intl.string(i.t.NkshQt) },
        { id: r.Ic.MATTE_LIGHT, iconSource: y, name: i.intl.string(i.t.G2W302), isPremium: !0 },
        { id: r.Ic.PASTEL, iconSource: v, isPremium: !0, name: i.intl.string(i.t.mTSkLT) },
        { id: r.Ic.PIRATE, iconSource: C, isPremium: !0, name: i.intl.string(i.t["EgWTY+"]) },
        { id: r.Ic.CAMO, iconSource: d, isPremium: !0, name: i.intl.string(i.t.RSKXOK) },
        { id: r.Ic.SUNSET, iconSource: b, isPremium: !0, name: i.intl.string(i.t.ixdjPB) },
        { id: r.Ic.GALAXY, iconSource: m, isPremium: !0, name: i.intl.string(i.t.cb78Ls) },
        { id: r.Ic.Y2K, iconSource: N, isPremium: !0, name: i.intl.string(i.t["s+KoXO"]) },
        { id: r.Ic.CHERRY_BLOSSOM, iconSource: _, isPremium: !0, name: i.intl.string(i.t["ta/5RB"]) },
        { id: r.Ic.BEANIE, iconSource: o, isPremium: !0, name: i.intl.string(i.t.IoLViw) },
        { id: r.Ic.GAMING, iconSource: g, isPremium: !0, name: i.intl.string(i.t["2Tf+c4"]) },
        { id: r.Ic.CIRCUIT, iconSource: f, isPremium: !0, name: i.intl.string(i.t.dUpxKb) },
        { id: r.Ic.HOLO_WAVES, iconSource: E, isPremium: !0, name: i.intl.string(i.t["9mg7g1"]) },
        { id: r.Ic.BLUSH, iconSource: u, isPremium: !0, name: i.intl.string(i.t.nmd90m) },
        { id: r.Ic.ANGRY, iconSource: a, isPremium: !0, name: i.intl.string(i.t["9PUXpM"]) },
        { id: r.Ic.CONTROLLER, iconSource: h, isPremium: !0, name: i.intl.string(i.t["4QM2U1"]) },
        { id: r.Ic.BLURPLE_TWILIGHT, iconSource: l, isPremium: !0, name: i.intl.string(i.t.Mfoe3p) },
        { id: r.Ic.IN_RAINBOWS, iconSource: A, isPremium: !0, name: i.intl.string(i.t.yxJB9E) },
        { id: r.Ic.MIDNIGHT_PRISM, iconSource: S, isPremium: !0, name: i.intl.string(i.t.nshUZZ) },
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
