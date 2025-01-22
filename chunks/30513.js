r.d(n, {
    VF: function () {
        return P;
    },
    WW: function () {
        return x;
    },
    XO: function () {
        return O;
    },
    Yp: function () {
        return R;
    },
    hC: function () {
        return w;
    },
    o9: function () {
        return L;
    },
    zC: function () {
        return D;
    }
});
var i = r(692547),
    a = r(481060),
    o = r(15385),
    s = r(709586),
    l = r(123245),
    u = r(981631);
r(474936);
var c = r(388032);
let d = () => ({
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: a.ImagesIcon,
        description: c.intl.string(c.t.iGuEFR)
    }),
    f = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
        return {
            color: e,
            icon: a.GifIcon,
            description: c.intl.string(c.t['94l3Ul'])
        };
    },
    p = () => ({
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: a.ImagesIcon,
        description: c.intl.string(c.t['n/HqCg'])
    }),
    h = () => ({
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: a.GifIcon,
        description: c.intl.string(c.t.AU0zcX)
    }),
    _ = () => ({
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: a.ShieldUserIcon,
        description: c.intl.string(c.t.zZe94u)
    }),
    m = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
        return {
            color: e,
            icon: a.StickerIcon,
            description: c.intl.string(c.t.ZwOSdn)
        };
    },
    g = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tokens.unsafe_rawColors.PREMIUM_PERK_YELLOW.css;
        return {
            color: e,
            icon: StickerIcon,
            description: intl.formatToPlainString(t.z3VJGB, { numStickers: TotalStickerCountsByTier[BoostedGuildTiers.TIER_1] })
        };
    },
    E = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            r = 0,
            o = 0;
        switch (e) {
            case u.Eu4.TIER_1:
                (r = 15), (o = 100);
                break;
            case u.Eu4.TIER_2:
                (r = 30), (o = 150);
                break;
            case u.Eu4.TIER_3:
                (r = 60), (o = 250);
        }
        return {
            color: n,
            icon: a.StickerIcon,
            description: c.intl.formatToPlainString(c.t['12vFYG'], {
                numStickers: r,
                numEmojis: o
            })
        };
    },
    v = () => ({
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: a.StarIcon,
        description: c.intl.string(c.t['ThRK/v'])
    }),
    y = () => ({
        icon: o.Z,
        description: c.intl.string(c.t.a7LWeH)
    }),
    b = () => ({
        icon: s.Z,
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_PINK.css,
        description: c.intl.string(c.t.QouJkp)
    }),
    I = () => ({
        icon: a.ShieldUserIcon,
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
        description: c.intl.string(c.t['3MpIx8'])
    }),
    T = () => ({
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
        icon: a.ReactionIcon,
        description: c.intl.string(c.t.gAeHJS)
    }),
    S = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.intl.string(c.t.SQV8g4);
        return {
            color: i.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
            icon: a.ReactionIcon,
            description: e
        };
    },
    A = () => ({
        color: i.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
        icon: l.Z,
        description: c.intl.string(c.t.Tm40TU)
    }),
    C = () => ({
        color: tokens.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
        icon: ScreenArrowIcon,
        description: intl.string(t.AQWug4)
    }),
    N = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
        return {
            color: e,
            icon: a.ScreenArrowIcon,
            description: c.intl.string(c.t.oIKhwc)
        };
    };
function R() {
    return [_(), p(), m(), S()];
}
function O() {
    return [_(), E(u.Eu4.TIER_2), N(), S()];
}
function D() {
    return [E(u.Eu4.TIER_3, i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css), A(), v(), S()];
}
function x() {
    return [v(), h(), E(u.Eu4.TIER_3), S()];
}
function L() {
    return [d(), m(), f(), S()];
}
function w() {
    return [m(), S()];
}
function P() {
    return [b(), I(), y(), T()];
}
