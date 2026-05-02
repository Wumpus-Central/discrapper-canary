"use strict";
n.d(t, { DU: () => R, QR: () => v, q5: () => D, $_: () => C, Lp: () => b, Pf: () => O });
var i = n(661531),
    r = n(477262),
    s = n(391242),
    a = n(179866),
    o = n(797285),
    l = n(27232),
    u = n(460905),
    c = n(183623),
    d = n(116891);
n(358431);
var _ = n(627968);
n(64700);
var f = n(953727);
function h(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...r } = e;
    return (0, _.jsx)("svg", {
        ...(0, f.A)(r),
        width: t,
        height: n,
        viewBox: "0 0 20 21",
        fill: i,
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, _.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.2139 1.00082L0.271335 12.3825C-0.0698739 12.8168 0.00557122 13.4454 0.439846 13.7866C0.616031 13.9251 0.833599 14.0003 1.05766 14.0003H5.00022V20.0003C5.00022 20.5526 5.44794 21.0003 6.00022 21.0003H14.0002C14.5525 21.0003 15.0002 20.5526 15.0002 20.0003V14.0003H18.9428C19.495 14.0003 19.9428 13.5526 19.9428 13.0003C19.9428 12.7763 19.8675 12.5587 19.7291 12.3825L10.7865 1.00082C10.4453 0.566546 9.81669 0.4911 9.38241 0.832308C9.31972 0.881561 9.26315 0.938133 9.2139 1.00082Z",
            fill: i,
        }),
    });
}
var p = n(652215),
    E = n(788868),
    m = n(375708);
let g = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : i.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
        return { color: e, icon: s.O, description: m.intl.string(m.t["94l3Ul"]) };
    },
    A = () => ({
        color: i.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: a.i,
        description: m.intl.string(m.t.zZe94m),
    }),
    I = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : i.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
        return { color: e, icon: o.t, description: m.intl.string(m.t.ZwOSdn) };
    },
    T = function (e) {
        let t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : i.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            n = 0,
            r = 0;
        switch (e) {
            case p.TVA.TIER_1:
                (n = 15), (r = 100);
                break;
            case p.TVA.TIER_2:
                (n = 30), (r = 150);
                break;
            case p.TVA.TIER_3:
                (n = 60), (r = 250);
        }
        return {
            color: t,
            icon: o.t,
            description: m.intl.formatToPlainString(m.t["12vFYK"], { numStickers: n, numEmojis: r }),
        };
    },
    S = () => ({
        color: i.A.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: l.G,
        description: m.intl.string(m.t["ThRK/u"]),
    }),
    N = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.intl.string(m.t.SQV8g6);
        return { color: i.A.unsafe_rawColors.PREMIUM_PERK_BLUE.css, icon: u.n, description: e };
    },
    y = function () {
        let e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            t = (0, d.eT)("GuildBoostingConstants"),
            n =
                t === d.fj
                    ? m.intl.string(m.t.oIKhwT)
                    : m.intl.formatToPlainString(m.t["7y2ina"], {
                          resolution: t,
                          framerate: E.TG[p.TVA.TIER_2].limits.screenShareQualityFramerate,
                      });
        return { color: e, icon: c.F, description: n };
    };
function C() {
    return [
        A(),
        { color: i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: r.s, description: m.intl.string(m.t["n/HqCh"]) },
        I(),
        N(),
    ];
}
function v() {
    return [A(), T(p.TVA.TIER_2), y(), N()];
}
function O() {
    return [
        T(p.TVA.TIER_3, i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css),
        { color: i.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css, icon: h, description: m.intl.string(m.t.Tm40TZ) },
        S(),
        N(),
    ];
}
function R() {
    return [
        S(),
        { color: i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: s.O, description: m.intl.string(m.t.AU0zcQ) },
        T(p.TVA.TIER_3),
        N(),
    ];
}
function b() {
    return [
        { color: i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: r.s, description: m.intl.string(m.t.iGuEFe) },
        I(),
        g(),
        N(),
    ];
}
function D() {
    return [I(), N()];
}
