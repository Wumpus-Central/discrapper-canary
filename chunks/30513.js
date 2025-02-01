n.d(t, {
    VF: () => x,
    WW: () => R,
    XO: () => N,
    Yp: () => A,
    hC: () => D,
    o9: () => O,
    zC: () => C
});
var i = n(692547),
    r = n(481060),
    a = n(15385),
    s = n(709586),
    o = n(123245),
    l = n(981631);
n(474936);
var u = n(388032);
let c = () => ({
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: r.Ka2,
        description: u.intl.string(u.t.iGuEFR)
    }),
    d = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
        return {
            color: e,
            icon: r.OUq,
            description: u.intl.string(u.t['94l3Ul'])
        };
    },
    f = () => ({
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: r.Ka2,
        description: u.intl.string(u.t['n/HqCg'])
    }),
    _ = () => ({
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: r.OUq,
        description: u.intl.string(u.t.AU0zcX)
    }),
    p = () => ({
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: r.lZ8,
        description: u.intl.string(u.t.zZe94u)
    }),
    h = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
        return {
            color: e,
            icon: r.SlE,
            description: u.intl.string(u.t.ZwOSdn)
        };
    },
    m = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            n = 0,
            a = 0;
        switch (e) {
            case l.Eu4.TIER_1:
                (n = 15), (a = 100);
                break;
            case l.Eu4.TIER_2:
                (n = 30), (a = 150);
                break;
            case l.Eu4.TIER_3:
                (n = 60), (a = 250);
        }
        return {
            color: t,
            icon: r.SlE,
            description: u.intl.formatToPlainString(u.t['12vFYG'], {
                numStickers: n,
                numEmojis: a
            })
        };
    },
    g = () => ({
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: r.r7p,
        description: u.intl.string(u.t['ThRK/v'])
    }),
    E = () => ({
        icon: a.Z,
        description: u.intl.string(u.t.a7LWeH)
    }),
    v = () => ({
        icon: s.Z,
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_PINK.css,
        description: u.intl.string(u.t.QouJkp)
    }),
    y = () => ({
        icon: r.lZ8,
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
        description: u.intl.string(u.t['3MpIx8'])
    }),
    I = () => ({
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
        icon: r.EO4,
        description: u.intl.string(u.t.gAeHJS)
    }),
    T = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.intl.string(u.t.SQV8g4);
        return {
            color: i.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
            icon: r.EO4,
            description: e
        };
    },
    b = () => ({
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
        icon: o.Z,
        description: u.intl.string(u.t.Tm40TU)
    }),
    S = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
        return {
            color: e,
            icon: r.hGI,
            description: u.intl.string(u.t.oIKhwc)
        };
    };
function A() {
    return [p(), f(), h(), T()];
}
function N() {
    return [p(), m(l.Eu4.TIER_2), S(), T()];
}
function C() {
    return [m(l.Eu4.TIER_3, i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css), b(), g(), T()];
}
function R() {
    return [g(), _(), m(l.Eu4.TIER_3), T()];
}
function O() {
    return [c(), h(), d(), T()];
}
function D() {
    return [h(), T()];
}
function x() {
    return [v(), y(), E(), I()];
}
