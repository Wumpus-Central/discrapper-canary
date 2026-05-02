i.d(n, { DU: () => U, QR: () => L, q5: () => x, $_: () => T, Lp: () => m, Pf: () => I });
var s = i(661531),
    l = i(477262),
    e = i(391242),
    r = i(179866),
    o = i(797285),
    c = i(27232),
    a = i(460905),
    f = i(183623),
    u = i(116891);
i(358431);
var d = i(627968);
i(64700);
var _ = i(953727);
function E(t) {
    let { width: n = 40, height: i = 40, color: s = "currentColor", ...l } = t;
    return (0, d.jsx)("svg", {
        ...(0, _.A)(l),
        width: n,
        height: i,
        viewBox: "0 0 20 21",
        fill: s,
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, d.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.2139 1.00082L0.271335 12.3825C-0.0698739 12.8168 0.00557122 13.4454 0.439846 13.7866C0.616031 13.9251 0.833599 14.0003 1.05766 14.0003H5.00022V20.0003C5.00022 20.5526 5.44794 21.0003 6.00022 21.0003H14.0002C14.5525 21.0003 15.0002 20.5526 15.0002 20.0003V14.0003H18.9428C19.495 14.0003 19.9428 13.5526 19.9428 13.0003C19.9428 12.7763 19.8675 12.5587 19.7291 12.3825L10.7865 1.00082C10.4453 0.566546 9.81669 0.4911 9.38241 0.832308C9.31972 0.881561 9.26315 0.938133 9.2139 1.00082Z",
            fill: s,
        }),
    });
}
var h = i(652215),
    R = i(788868),
    P = i(375708);
let v = function () {
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : s.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
        return { color: t, icon: e.O, description: P.intl.string(P.t["94l3Ul"]) };
    },
    A = () => ({
        color: s.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: r.i,
        description: P.intl.string(P.t.zZe94m),
    }),
    p = function () {
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : s.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
        return { color: t, icon: o.t, description: P.intl.string(P.t.ZwOSdn) };
    },
    M = function (t) {
        let n =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : s.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            i = 0,
            l = 0;
        switch (t) {
            case h.TVA.TIER_1:
                (i = 15), (l = 100);
                break;
            case h.TVA.TIER_2:
                (i = 30), (l = 150);
                break;
            case h.TVA.TIER_3:
                (i = 60), (l = 250);
        }
        return {
            color: n,
            icon: o.t,
            description: P.intl.formatToPlainString(P.t["12vFYK"], { numStickers: i, numEmojis: l }),
        };
    },
    C = () => ({
        color: s.A.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: c.G,
        description: P.intl.string(P.t["ThRK/u"]),
    }),
    g = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P.intl.string(P.t.SQV8g6);
        return { color: s.A.unsafe_rawColors.PREMIUM_PERK_BLUE.css, icon: a.n, description: t };
    },
    w = function () {
        let t =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : s.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            n = (0, u.eT)("GuildBoostingConstants"),
            i =
                n === u.fj
                    ? P.intl.string(P.t.oIKhwT)
                    : P.intl.formatToPlainString(P.t["7y2ina"], {
                          resolution: n,
                          framerate: R.TG[h.TVA.TIER_2].limits.screenShareQualityFramerate,
                      });
        return { color: t, icon: f.F, description: i };
    };
function T() {
    return [
        A(),
        { color: s.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: l.s, description: P.intl.string(P.t["n/HqCh"]) },
        p(),
        g(),
    ];
}
function L() {
    return [A(), M(h.TVA.TIER_2), w(), g()];
}
function I() {
    return [
        M(h.TVA.TIER_3, s.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css),
        { color: s.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css, icon: E, description: P.intl.string(P.t.Tm40TZ) },
        C(),
        g(),
    ];
}
function U() {
    return [
        C(),
        { color: s.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: e.O, description: P.intl.string(P.t.AU0zcQ) },
        M(h.TVA.TIER_3),
        g(),
    ];
}
function m() {
    return [
        { color: s.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: l.s, description: P.intl.string(P.t.iGuEFe) },
        p(),
        v(),
        g(),
    ];
}
function x() {
    return [p(), g()];
}
