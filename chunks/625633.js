i.d(n, { DU: () => I, QR: () => w, q5: () => U, $_: () => g, Lp: () => L, Pf: () => T });
var r = i(661531),
    s = i(477262),
    l = i(391242),
    o = i(957485),
    c = i(797285),
    e = i(27232),
    a = i(460905),
    f = i(183623),
    u = i(116891);
i(358431);
var d = i(477900);
i(582128);
var _ = i(953727);
function E(t) {
    let { width: n = 40, height: i = 40, color: r = "currentColor", ...s } = t;
    return (0, d.jsx)("svg", {
        ...(0, _.A)(s),
        width: n,
        height: i,
        viewBox: "0 0 20 21",
        fill: r,
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, d.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.2139 1.00082L0.271335 12.3825C-0.0698739 12.8168 0.00557122 13.4454 0.439846 13.7866C0.616031 13.9251 0.833599 14.0003 1.05766 14.0003H5.00022V20.0003C5.00022 20.5526 5.44794 21.0003 6.00022 21.0003H14.0002C14.5525 21.0003 15.0002 20.5526 15.0002 20.0003V14.0003H18.9428C19.495 14.0003 19.9428 13.5526 19.9428 13.0003C19.9428 12.7763 19.8675 12.5587 19.7291 12.3825L10.7865 1.00082C10.4453 0.566546 9.81669 0.4911 9.38241 0.832308C9.31972 0.881561 9.26315 0.938133 9.2139 1.00082Z",
            fill: r,
        }),
    });
}
var h = i(652215),
    R = i(202541),
    P = i(375708);
function v() {
    return { color: r.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css, icon: o.i, description: P.intl.string(P.t.zZe94m) };
}
function A() {
    let t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
    return { color: t, icon: c.t, description: P.intl.string(P.t.ZwOSdn) };
}
function p(t) {
    let n =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
        i = 0,
        s = 0;
    switch (t) {
        case h.TVA.TIER_1:
            (i = 15), (s = 100);
            break;
        case h.TVA.TIER_2:
            (i = 30), (s = 150);
            break;
        case h.TVA.TIER_3:
            (i = 60), (s = 250);
    }
    return {
        color: n,
        icon: c.t,
        description: P.intl.formatToPlainString(P.t["12vFYK"], { numStickers: i, numEmojis: s }),
    };
}
function M() {
    return {
        color: r.A.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: e.StarIcon,
        description: P.intl.string(P.t["ThRK/u"]),
    };
}
function C() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P.intl.string(P.t.SQV8g6);
    return { color: r.A.unsafe_rawColors.PREMIUM_PERK_BLUE.css, icon: a.n, description: t };
}
function g() {
    return [
        v(),
        { color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: s.s, description: P.intl.string(P.t["n/HqCh"]) },
        A(),
        C(),
    ];
}
function w() {
    return [
        v(),
        p(h.TVA.TIER_2),
        (function () {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                n = (0, u.eT)("GuildBoostingConstants"),
                i =
                    n === u.fj
                        ? P.intl.string(P.t.oIKhwT)
                        : P.intl.formatToPlainString(P.t["7y2ina"], {
                              resolution: n,
                              framerate: R.TG[h.TVA.TIER_2].limits.screenShareQualityFramerate,
                          });
            return { color: t, icon: f.F, description: i };
        })(),
        C(),
    ];
}
function T() {
    return [
        p(h.TVA.TIER_3, r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css),
        { color: r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css, icon: E, description: P.intl.string(P.t.Tm40TZ) },
        M(),
        C(),
    ];
}
function I() {
    return [
        M(),
        { color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: l.O, description: P.intl.string(P.t.AU0zcQ) },
        p(h.TVA.TIER_3),
        C(),
    ];
}
function L() {
    return [
        { color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: s.s, description: P.intl.string(P.t.iGuEFe) },
        A(),
        (function () {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : r.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
            return { color: t, icon: l.O, description: P.intl.string(P.t["94l3Ul"]) };
        })(),
        C(),
    ];
}
function U() {
    return [A(), C()];
}
