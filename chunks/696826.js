n.d(t, {
    Dk: () => T,
    QF: () => v,
    Sk: () => d.Skl,
    W5: () => P,
    lm: () => O,
    qb: () => w,
    rs: () => N,
    vP: () => A,
    vj: () => y,
}),
    n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(81239),
    s = n(692547),
    l = n(780384);
n(481060);
var c = n(44315),
    u = n(686546),
    d = n(981631),
    f = n(268685),
    p = n(926374);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = 8;
function b(e) {
    switch (e) {
        case d.Skl.ONLINE:
            return s.Z.unsafe_rawColors.GREEN_NEW_38;
        case d.Skl.IDLE:
            return s.Z.unsafe_rawColors.YELLOW_NEW_30;
        case d.Skl.DND:
            return s.Z.unsafe_rawColors.RED_NEW_46;
        case d.Skl.STREAMING:
            return s.Z.unsafe_rawColors.TWITCH;
        case d.Skl.INVISIBLE:
        case d.Skl.UNKNOWN:
        case d.Skl.OFFLINE:
        default:
            return s.Z.unsafe_rawColors.NEUTRAL_34;
    }
}
function y(e, t) {
    let n = b(e).resolve({ saturation: 1 }).hex(),
        r = null != t ? t : n,
        i = (0, c.K)(r);
    return null != i ? i : void 0;
}
function O(e, t) {
    return t === f.VZ.WHITE && e === d.Skl.IDLE ? f.d_.HIGH : f.d_.LOW;
}
function v(e) {
    return (0, l.wj)(e) ? f.VZ.BLACK : f.VZ.WHITE;
}
function S(e, t, n, r) {
    return "scale("
        .concat(t, ") translate(")
        .concat(0.5625 * e + r, " ")
        .concat(0.75 * e + n, ")");
}
function I(e, t, n) {
    return "".concat(0.5625 * e + n, "px ").concat(0.75 * e + t, "px");
}
function T(e) {
    let { size: t, status: n, isMobile: r, isTyping: i, topOffset: a = 0, leftOffset: o = 0 } = e,
        s = (a / E) * t,
        l = (o / E) * t;
    if (i)
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + s,
            bgX: 0,
            bgHeight: t,
            bgWidth: t * f.D6,
            cutoutX: 0.5 * t + l,
            cutoutY: 0.75 * t + s,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: S(t, 0, s, l),
            polygonOrigin: I(t, s, l),
            dotY: 0.75 * t + s,
            dotX: 0.5 * t + l,
            dotRadius: 0,
        };
    switch (n) {
        case d.Skl.ONLINE:
            if (r)
                return {
                    bgRadius: t * f.EW * f.e7,
                    bgY: 0,
                    bgX: l,
                    bgHeight: t * f.EW,
                    bgWidth: t,
                    cutoutX: 0.125 * t + l,
                    cutoutY: 0.25 * t,
                    cutoutWidth: 0.75 * t,
                    cutoutHeight: 0.75 * t,
                    cutoutRadius: 0,
                    polygonScale: S(t, 0, s, l),
                    polygonOrigin: I(t, s, l),
                    dotY: 1.25 * t,
                    dotX: 0.5 * t + l,
                    dotRadius: 0.125 * t,
                };
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + s,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + l,
                cutoutY: 0.75 * t + s,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0,
                polygonScale: S(t, 0, s, l),
                polygonOrigin: I(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case d.Skl.IDLE:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + s,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: -(0.125 * t) + l,
                cutoutY: 0.125 * t + s,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.75 * t,
                cutoutRadius: 0.375 * t,
                polygonScale: S(t, 0, s, l),
                polygonOrigin: I(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case d.Skl.DND:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + s,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.125 * t + l,
                cutoutY: 0.625 * t + s,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.25 * t,
                cutoutRadius: 0.125 * t,
                polygonScale: S(t, 0, s, l),
                polygonOrigin: I(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case d.Skl.STREAMING:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + s,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + l,
                cutoutY: 0.75 * t + s,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0.25 * t,
                polygonScale: S(t, 1, s, l),
                polygonOrigin: I(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case d.Skl.INVISIBLE:
        case d.Skl.UNKNOWN:
        case d.Skl.OFFLINE:
        default:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + s,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.25 * t + l,
                cutoutY: 0.5 * t + s,
                cutoutWidth: 0.5 * t,
                cutoutHeight: 0.5 * t,
                cutoutRadius: 0.25 * t,
                polygonScale: S(t, 0, s, l),
                polygonOrigin: I(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
    }
}
function C(e) {
    return "-"
        .concat(0.216506 * e, ",-")
        .concat(0.25 * e, " ")
        .concat(0.216506 * e, ",0 -")
        .concat(0.216506 * e, ",")
        .concat(0.25 * e);
}
function A(e, t, n) {
    let {
        bgRadius: i,
        bgY: a,
        bgX: s,
        bgHeight: l,
        bgWidth: c,
        cutoutX: u,
        cutoutY: d,
        cutoutWidth: f,
        cutoutHeight: p,
        cutoutRadius: _,
        polygonScale: h,
        polygonOrigin: m,
        dotY: g,
        dotX: E,
        dotRadius: b,
    } = e;
    return (0, r.jsxs)("mask", {
        id: n,
        children: [
            (0, r.jsx)(o.animated.rect, {
                x: s,
                y: a,
                width: c,
                height: l,
                rx: i,
                ry: i,
                fill: "white",
            }),
            (0, r.jsx)(o.animated.rect, {
                x: u,
                y: d,
                width: f,
                height: p,
                rx: _,
                ry: _,
                fill: "black",
            }),
            (0, r.jsx)(o.animated.polygon, {
                points: C(t),
                fill: "black",
                transform: h,
                style: { transformOrigin: m },
            }),
            (0, r.jsx)(o.animated.circle, {
                fill: "black",
                cx: E,
                cy: g,
                r: b,
            }),
        ],
    });
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (n) return u.ZP.Masks.STATUS_TYPING;
    switch (e) {
        case d.Skl.IDLE:
            return u.ZP.Masks.STATUS_IDLE;
        case d.Skl.DND:
            return u.ZP.Masks.STATUS_DND;
        case d.Skl.STREAMING:
            return u.ZP.Masks.STATUS_STREAMING;
        case d.Skl.INVISIBLE:
        case d.Skl.UNKNOWN:
        case d.Skl.OFFLINE:
            return u.ZP.Masks.STATUS_OFFLINE;
        case d.Skl.ONLINE:
        default:
            if (t) return u.ZP.Masks.STATUS_ONLINE_MOBILE;
            return u.ZP.Masks.STATUS_ONLINE;
    }
}
function P(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return t === d.Skl.ONLINE && n && !r
        ? {
              width: e,
              height: e * f.EW,
          }
        : {
              width: r ? e * f.D6 : e,
              height: e,
          };
}
function w(e) {
    let { status: t, isMobile: n = !1, size: i = E, className: o, style: s, color: l } = e,
        c = t === d.Skl.ONLINE && n,
        f = y(t, l);
    return (0, r.jsx)(
        u.ZP,
        g(
            h(
                {
                    mask: N(t, c),
                    className: a()(p.mask, o),
                    style: s,
                },
                P(i, t, c),
            ),
            {
                children: (0, r.jsx)("div", {
                    style: { backgroundColor: f },
                    className: p.status,
                }),
            },
        ),
    );
}
