n.d(t, {
    WW: () => v,
    XO: () => y,
    Yp: () => b,
    hC: () => I,
    o9: () => S,
    zC: () => O,
});
var r = n(692547),
    i = n(481060);
n(15385);
var a = n(123245),
    o = n(981631);
n(474936);
var s = n(388032);
let l = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.Ka2,
        description: s.intl.string(s.t.iGuEFe),
    }),
    c = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
        return {
            color: e,
            icon: i.OUq,
            description: s.intl.string(s.t["94l3Ul"]),
        };
    },
    u = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.Ka2,
        description: s.intl.string(s.t["n/HqCh"]),
    }),
    d = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.OUq,
        description: s.intl.string(s.t.AU0zcQ),
    }),
    f = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: i.lZ8,
        description: s.intl.string(s.t.zZe94m),
    }),
    p = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
        return {
            color: e,
            icon: i.SlE,
            description: s.intl.string(s.t.ZwOSdn),
        };
    },
    _ = function (e) {
        let t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            n = 0,
            a = 0;
        switch (e) {
            case o.Eu4.TIER_1:
                (n = 15), (a = 100);
                break;
            case o.Eu4.TIER_2:
                (n = 30), (a = 150);
                break;
            case o.Eu4.TIER_3:
                (n = 60), (a = 250);
        }
        return {
            color: t,
            icon: i.SlE,
            description: s.intl.formatToPlainString(s.t["12vFYK"], {
                numStickers: n,
                numEmojis: a,
            }),
        };
    },
    m = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: i.r7p,
        description: s.intl.string(s.t["ThRK/u"]),
    }),
    h = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.intl.string(s.t.SQV8g6);
        return {
            color: r.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
            icon: i.EO4,
            description: e,
        };
    },
    g = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
        icon: a.Z,
        description: s.intl.string(s.t.Tm40TZ),
    }),
    E = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
        return {
            color: e,
            icon: i.hGI,
            description: s.intl.string(s.t.oIKhwT),
        };
    };
function b() {
    return [f(), u(), p(), h()];
}
function y() {
    return [f(), _(o.Eu4.TIER_2), E(), h()];
}
function O() {
    return [_(o.Eu4.TIER_3, r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css), g(), m(), h()];
}
function v() {
    return [m(), d(), _(o.Eu4.TIER_3), h()];
}
function S() {
    return [l(), p(), c(), h()];
}
function I() {
    return [p(), h()];
}
