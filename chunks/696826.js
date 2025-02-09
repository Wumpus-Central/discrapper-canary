n.d(t, {
    Dk: () => T,
    QF: () => v,
    Sk: () => d.Skl,
    W5: () => N,
    lm: () => E,
    qb: () => C,
    rs: () => A,
    vP: () => S,
    vj: () => g
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(642128),
    o = n(780384);
n(481060);
var l = n(44315),
    u = n(686546),
    c = n(540059),
    d = n(981631),
    f = n(182294),
    _ = n(572066);
let p = 8;
function h(e) {
    switch (e) {
        case d.Skl.ONLINE:
            return d.Ilk.GREEN_360;
        case d.Skl.IDLE:
            return d.Ilk.YELLOW_300;
        case d.Skl.DND:
            return d.Ilk.RED_400;
        case d.Skl.STREAMING:
            return d.Ilk.TWITCH;
        case d.Skl.INVISIBLE:
        case d.Skl.UNKNOWN:
        case d.Skl.OFFLINE:
        default:
            return d.Ilk.PRIMARY_400;
    }
}
function m(e) {
    switch (e) {
        case d.Skl.ONLINE:
            return d.Ilk.GREEN_NEW_38;
        case d.Skl.IDLE:
            return d.Ilk.YELLOW_NEW_30;
        case d.Skl.DND:
            return d.Ilk.RED_NEW_46;
        case d.Skl.STREAMING:
            return d.Ilk.TWITCH;
        case d.Skl.INVISIBLE:
        case d.Skl.UNKNOWN:
        case d.Skl.OFFLINE:
        default:
            return d.Ilk.NEUTRAL_34;
    }
}
function g(e, t) {
    let n = (0, c.Q3)('useStatusFillColor'),
        i = (0, l.Sl)(n ? m(e) : h(e)).hex,
        r = null != t ? t : i,
        a = (0, l.K3)(r);
    return null != a ? a : void 0;
}
function E(e, t) {
    return t === f.VZ.WHITE && e === d.Skl.IDLE ? f.d_.HIGH : f.d_.LOW;
}
function v(e) {
    return (0, o.wj)(e) ? f.VZ.BLACK : f.VZ.WHITE;
}
function y(e, t, n, i) {
    return 'scale('
        .concat(t, ') translate(')
        .concat(0.5625 * e + i, ' ')
        .concat(0.75 * e + n, ')');
}
function I(e, t, n) {
    return ''.concat(0.5625 * e + n, 'px ').concat(0.75 * e + t, 'px');
}
function T(e) {
    let { size: t, status: n, isMobile: i, isTyping: r, topOffset: a = 0, leftOffset: s = 0 } = e,
        o = (a / p) * t,
        l = (s / p) * t;
    if (r)
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + o,
            bgX: 0,
            bgHeight: t,
            bgWidth: t * f.D6,
            cutoutX: 0.5 * t + l,
            cutoutY: 0.75 * t + o,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: y(t, 0, o, l),
            polygonOrigin: I(t, o, l),
            dotY: 0.75 * t + o,
            dotX: 0.5 * t + l,
            dotRadius: 0
        };
    switch (n) {
        case d.Skl.ONLINE:
            if (i)
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
                    polygonScale: y(t, 0, o, l),
                    polygonOrigin: I(t, o, l),
                    dotY: 1.25 * t,
                    dotX: 0.5 * t + l,
                    dotRadius: 0.125 * t
                };
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + o,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + l,
                cutoutY: 0.75 * t + o,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0,
                polygonScale: y(t, 0, o, l),
                polygonOrigin: I(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case d.Skl.IDLE:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + o,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: -(0.125 * t) + l,
                cutoutY: 0.125 * t + o,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.75 * t,
                cutoutRadius: 0.375 * t,
                polygonScale: y(t, 0, o, l),
                polygonOrigin: I(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case d.Skl.DND:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + o,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.125 * t + l,
                cutoutY: 0.625 * t + o,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.25 * t,
                cutoutRadius: 0.125 * t,
                polygonScale: y(t, 0, o, l),
                polygonOrigin: I(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case d.Skl.STREAMING:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + o,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + l,
                cutoutY: 0.75 * t + o,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0.25 * t,
                polygonScale: y(t, 1, o, l),
                polygonOrigin: I(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case d.Skl.INVISIBLE:
        case d.Skl.UNKNOWN:
        case d.Skl.OFFLINE:
        default:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + o,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.25 * t + l,
                cutoutY: 0.5 * t + o,
                cutoutWidth: 0.5 * t,
                cutoutHeight: 0.5 * t,
                cutoutRadius: 0.25 * t,
                polygonScale: y(t, 0, o, l),
                polygonOrigin: I(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
    }
}
function b(e) {
    return '-'
        .concat(0.216506 * e, ',-')
        .concat(0.25 * e, ' ')
        .concat(0.216506 * e, ',0 -')
        .concat(0.216506 * e, ',')
        .concat(0.25 * e);
}
function S(e, t, n) {
    let { bgRadius: r, bgY: a, bgX: o, bgHeight: l, bgWidth: u, cutoutX: c, cutoutY: d, cutoutWidth: f, cutoutHeight: _, cutoutRadius: p, polygonScale: h, polygonOrigin: m, dotY: g, dotX: E, dotRadius: v } = e;
    return (0, i.jsxs)('mask', {
        id: n,
        children: [
            (0, i.jsx)(s.animated.rect, {
                x: o,
                y: a,
                width: u,
                height: l,
                rx: r,
                ry: r,
                fill: 'white'
            }),
            (0, i.jsx)(s.animated.rect, {
                x: c,
                y: d,
                width: f,
                height: _,
                rx: p,
                ry: p,
                fill: 'black'
            }),
            (0, i.jsx)(s.animated.polygon, {
                points: b(t),
                fill: 'black',
                transform: h,
                style: { transformOrigin: m }
            }),
            (0, i.jsx)(s.animated.circle, {
                fill: 'black',
                cx: E,
                cy: g,
                r: v
            })
        ]
    });
}
function A(e, t) {
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
function N(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return t === d.Skl.ONLINE && n && !i
        ? {
              width: e,
              height: e * f.EW
          }
        : {
              width: i ? e * f.D6 : e,
              height: e
          };
}
function C(e) {
    let { status: t, isMobile: n = !1, size: r = p, className: s, style: o, color: l } = e,
        c = t === d.Skl.ONLINE && n,
        f = g(t, l);
    return (0, i.jsx)(u.ZP, {
        mask: A(t, c),
        className: a()(_.mask, s),
        style: o,
        ...N(r, t, c),
        children: (0, i.jsx)('div', {
            style: { backgroundColor: f },
            className: _.status
        })
    });
}
