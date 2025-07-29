n.d(t, {
    VF: () => P,
    WW: () => N,
    XO: () => S,
    Yp: () => T,
    hC: () => R,
    o9: () => C,
    zC: () => A
});
var r = n(692547),
    i = n(481060),
    a = n(15385),
    o = n(123245),
    s = n(981631);
n(474936);
var l = n(388032);
let c = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.Ka2,
        description: l.intl.string(l.t.iGuEFR)
    }),
    u = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
        return {
            color: e,
            icon: i.OUq,
            description: l.intl.string(l.t['94l3Ul'])
        };
    },
    d = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.Ka2,
        description: l.intl.string(l.t['n/HqCg'])
    }),
    _ = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.OUq,
        description: l.intl.string(l.t.AU0zcX)
    }),
    f = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: i.lZ8,
        description: l.intl.string(l.t.zZe94u)
    }),
    p = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
        return {
            color: e,
            icon: i.SlE,
            description: l.intl.string(l.t.ZwOSdn)
        };
    },
    h = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            n = 0,
            a = 0;
        switch (e) {
            case s.Eu4.TIER_1:
                ((n = 15), (a = 100));
                break;
            case s.Eu4.TIER_2:
                ((n = 30), (a = 150));
                break;
            case s.Eu4.TIER_3:
                ((n = 60), (a = 250));
        }
        return {
            color: t,
            icon: i.SlE,
            description: l.intl.formatToPlainString(l.t['12vFYG'], {
                numStickers: n,
                numEmojis: a
            })
        };
    },
    m = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: i.r7p,
        description: l.intl.string(l.t['ThRK/v'])
    }),
    g = () => ({
        icon: a.Z,
        description: l.intl.string(l.t.a7LWeH)
    }),
    E = () => ({
        icon: i.$Eu,
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_PINK.css,
        description: l.intl.string(l.t.QouJkp)
    }),
    b = () => ({
        icon: i.lZ8,
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
        description: l.intl.string(l.t['3MpIx8'])
    }),
    y = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
        icon: i.EO4,
        description: l.intl.string(l.t.gAeHJS)
    }),
    O = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.intl.string(l.t.SQV8g4);
        return {
            color: r.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
            icon: i.EO4,
            description: e
        };
    },
    v = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
        icon: o.Z,
        description: l.intl.string(l.t.Tm40TU)
    }),
    I = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
        return {
            color: e,
            icon: i.hGI,
            description: l.intl.string(l.t.oIKhwc)
        };
    };
function T() {
    return [f(), d(), p(), O()];
}
function S() {
    return [f(), h(s.Eu4.TIER_2), I(), O()];
}
function A() {
    return [h(s.Eu4.TIER_3, r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css), v(), m(), O()];
}
function N() {
    return [m(), _(), h(s.Eu4.TIER_3), O()];
}
function C() {
    return [c(), p(), u(), O()];
}
function R() {
    return [p(), O()];
}
function P() {
    return [E(), b(), g(), y()];
}
