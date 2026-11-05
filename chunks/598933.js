i.d(t, { Pf: () => w, $_: () => g, QR: () => C, q5: () => m, Lp: () => U, DU: () => T });
var o = i(646514),
    r = i(477262),
    c = i(391242),
    s = i(957485),
    e = i(797285),
    l = i(27232),
    a = i(460905),
    f = i(183623),
    u = i(116891);
i(358431);
var d = i(477900);
i(582128);
var _ = i(953727);
function E(n) {
    let { width: t = 40, height: i = 40, color: o = "currentColor", ...r } = n;
    return (0, d.jsx)("svg", {
        ...(0, _.A)(r),
        width: t,
        height: i,
        viewBox: "0 0 20 21",
        fill: o,
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, d.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.2139 1.00082L0.271335 12.3825C-0.0698739 12.8168 0.00557122 13.4454 0.439846 13.7866C0.616031 13.9251 0.833599 14.0003 1.05766 14.0003H5.00022V20.0003C5.00022 20.5526 5.44794 21.0003 6.00022 21.0003H14.0002C14.5525 21.0003 15.0002 20.5526 15.0002 20.0003V14.0003H18.9428C19.495 14.0003 19.9428 13.5526 19.9428 13.0003C19.9428 12.7763 19.8675 12.5587 19.7291 12.3825L10.7865 1.00082C10.4453 0.566546 9.81669 0.4911 9.38241 0.832308C9.31972 0.881561 9.26315 0.938133 9.2139 1.00082Z",
            fill: o,
        }),
    });
}
var h = i(652215),
    R = i(682901),
    P = i(792996);
function v() {
    return {
        color: o.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: s.ShieldUserIcon,
        description: P.intl.string(P.t.zZe94m),
    };
}
function A() {
    let n =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
    return { color: n, icon: e.StickerIcon, description: P.intl.string(P.t.ZwOSdn) };
}
function p(n) {
    let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : o.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
        i = 0,
        r = 0;
    switch (n) {
        case h.TVA.TIER_1:
            ((i = 15), (r = 100));
            break;
        case h.TVA.TIER_2:
            ((i = 30), (r = 150));
            break;
        case h.TVA.TIER_3:
            ((i = 60), (r = 250));
    }
    return {
        color: t,
        icon: e.StickerIcon,
        description: P.intl.formatToPlainString(P.t["12vFYK"], { numStickers: i, numEmojis: r }),
    };
}
function I() {
    return {
        color: o.A.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: l.StarIcon,
        description: P.intl.string(P.t["ThRK/u"]),
    };
}
function M() {
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P.intl.string(P.t.SQV8g6);
    return { color: o.A.unsafe_rawColors.PREMIUM_PERK_BLUE.css, icon: a.ReactionIcon, description: n };
}
function g() {
    return [
        v(),
        {
            color: o.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            icon: r.ImagesIcon,
            description: P.intl.string(P.t["n/HqCh"]),
        },
        A(),
        M(),
    ];
}
function C() {
    return [
        v(),
        p(h.TVA.TIER_2),
        (function () {
            let n =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : o.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                t = (0, u.e)("GuildBoostingConstants"),
                i =
                    "1080p" === t
                        ? P.intl.string(P.t.oIKhwT)
                        : P.intl.formatToPlainString(P.t["7y2ina"], {
                              resolution: t,
                              framerate: R.TG[h.TVA.TIER_2].limits.screenShareQualityFramerate,
                          });
            return { color: n, icon: f.ScreenArrowIcon, description: i };
        })(),
        M(),
    ];
}
function w() {
    return [
        p(h.TVA.TIER_3, o.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css),
        { color: o.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css, icon: E, description: P.intl.string(P.t.Tm40TZ) },
        I(),
        M(),
    ];
}
function T() {
    return [
        I(),
        { color: o.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: c.GifIcon, description: P.intl.string(P.t.AU0zcQ) },
        p(h.TVA.TIER_3),
        M(),
    ];
}
function U() {
    return [
        {
            color: o.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            icon: r.ImagesIcon,
            description: P.intl.string(P.t.iGuEFe),
        },
        A(),
        (function () {
            let n =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : o.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
            return { color: n, icon: c.GifIcon, description: P.intl.string(P.t["94l3Ul"]) };
        })(),
        M(),
    ];
}
function m() {
    return [A(), M()];
}
