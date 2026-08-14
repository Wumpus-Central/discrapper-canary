n.d(t, { DU: () => L, QR: () => w, q5: () => U, $_: () => g, Lp: () => I, Pf: () => T });
var i = n(661531),
    r = n(477262),
    s = n(391242),
    l = n(957485),
    o = n(797285),
    c = n(27232),
    a = n(460905),
    f = n(183623),
    u = n(116891);
n(358431);
var d = n(477900);
n(582128);
var _ = n(953727);
function E(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...r } = e;
    return (0, d.jsx)("svg", {
        ...(0, _.A)(r),
        width: t,
        height: n,
        viewBox: "0 0 20 21",
        fill: i,
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, d.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.2139 1.00082L0.271335 12.3825C-0.0698739 12.8168 0.00557122 13.4454 0.439846 13.7866C0.616031 13.9251 0.833599 14.0003 1.05766 14.0003H5.00022V20.0003C5.00022 20.5526 5.44794 21.0003 6.00022 21.0003H14.0002C14.5525 21.0003 15.0002 20.5526 15.0002 20.0003V14.0003H18.9428C19.495 14.0003 19.9428 13.5526 19.9428 13.0003C19.9428 12.7763 19.8675 12.5587 19.7291 12.3825L10.7865 1.00082C10.4453 0.566546 9.81669 0.4911 9.38241 0.832308C9.31972 0.881561 9.26315 0.938133 9.2139 1.00082Z",
            fill: i,
        }),
    });
}
var h = n(652215),
    R = n(202541),
    P = n(375708);
function v() {
    return { color: i.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css, icon: l.i, description: P.intl.string(P.t.zZe94m) };
}
function A() {
    let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
    return { color: e, icon: o.t, description: P.intl.string(P.t.ZwOSdn) };
}
function p(e) {
    let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : i.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
        n = 0,
        r = 0;
    switch (e) {
        case h.TVA.TIER_1:
            (n = 15), (r = 100);
            break;
        case h.TVA.TIER_2:
            (n = 30), (r = 150);
            break;
        case h.TVA.TIER_3:
            (n = 60), (r = 250);
    }
    return {
        color: t,
        icon: o.t,
        description: P.intl.formatToPlainString(P.t["12vFYK"], { numStickers: n, numEmojis: r }),
    };
}
function M() {
    return { color: i.A.unsafe_rawColors.PREMIUM_PERK_GOLD.css, icon: c.G, description: P.intl.string(P.t["ThRK/u"]) };
}
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P.intl.string(P.t.SQV8g6);
    return { color: i.A.unsafe_rawColors.PREMIUM_PERK_BLUE.css, icon: a.n, description: e };
}
function g() {
    return [
        v(),
        { color: i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: r.s, description: P.intl.string(P.t["n/HqCh"]) },
        A(),
        C(),
    ];
}
function w() {
    return [
        v(),
        p(h.TVA.TIER_2),
        (function () {
            let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                t = (0, u.eT)("GuildBoostingConstants"),
                n =
                    t === u.fj
                        ? P.intl.string(P.t.oIKhwT)
                        : P.intl.formatToPlainString(P.t["7y2ina"], {
                              resolution: t,
                              framerate: R.TG[h.TVA.TIER_2].limits.screenShareQualityFramerate,
                          });
            return { color: e, icon: f.F, description: n };
        })(),
        C(),
    ];
}
function T() {
    return [
        p(h.TVA.TIER_3, i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css),
        { color: i.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css, icon: E, description: P.intl.string(P.t.Tm40TZ) },
        M(),
        C(),
    ];
}
function L() {
    return [
        M(),
        { color: i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: s.O, description: P.intl.string(P.t.AU0zcQ) },
        p(h.TVA.TIER_3),
        C(),
    ];
}
function I() {
    return [
        { color: i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: r.s, description: P.intl.string(P.t.iGuEFe) },
        A(),
        (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : i.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
            return { color: e, icon: s.O, description: P.intl.string(P.t["94l3Ul"]) };
        })(),
        C(),
    ];
}
function U() {
    return [A(), C()];
}
