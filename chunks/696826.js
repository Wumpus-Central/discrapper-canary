(n.d(t, {
    Dk: () => T,
    QF: () => O,
    Sk: () => u.Skl,
    W5: () => C,
    lm: () => y,
    qb: () => R,
    rs: () => N,
    vP: () => A,
    vj: () => b
}),
    n(388685));
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(564854),
    s = n(780384);
n(481060);
var l = n(44315),
    c = n(686546),
    u = n(981631),
    d = n(182294),
    _ = n(121061);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            }));
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = 8;
function E(e) {
    switch (e) {
        case u.Skl.ONLINE:
            return u.Ilk.GREEN_NEW_38;
        case u.Skl.IDLE:
            return u.Ilk.YELLOW_NEW_30;
        case u.Skl.DND:
            return u.Ilk.RED_NEW_46;
        case u.Skl.STREAMING:
            return u.Ilk.TWITCH;
        case u.Skl.INVISIBLE:
        case u.Skl.UNKNOWN:
        case u.Skl.OFFLINE:
        default:
            return u.Ilk.NEUTRAL_34;
    }
}
function b(e, t) {
    let n = (0, l.Sl)(E(e)).hex,
        r = null != t ? t : n,
        i = (0, l.K3)(r);
    return null != i ? i : void 0;
}
function y(e, t) {
    return t === d.VZ.WHITE && e === u.Skl.IDLE ? d.d_.HIGH : d.d_.LOW;
}
function O(e) {
    return (0, s.wj)(e) ? d.VZ.BLACK : d.VZ.WHITE;
}
function v(e, t, n, r) {
    return 'scale('
        .concat(t, ') translate(')
        .concat(0.5625 * e + r, ' ')
        .concat(0.75 * e + n, ')');
}
function I(e, t, n) {
    return ''.concat(0.5625 * e + n, 'px ').concat(0.75 * e + t, 'px');
}
function T(e) {
    let { size: t, status: n, isMobile: r, isTyping: i, topOffset: a = 0, leftOffset: o = 0 } = e,
        s = (a / g) * t,
        l = (o / g) * t;
    if (i)
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + s,
            bgX: 0,
            bgHeight: t,
            bgWidth: t * d.D6,
            cutoutX: 0.5 * t + l,
            cutoutY: 0.75 * t + s,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: v(t, 0, s, l),
            polygonOrigin: I(t, s, l),
            dotY: 0.75 * t + s,
            dotX: 0.5 * t + l,
            dotRadius: 0
        };
    switch (n) {
        case u.Skl.ONLINE:
            if (r)
                return {
                    bgRadius: t * d.EW * d.e7,
                    bgY: 0,
                    bgX: l,
                    bgHeight: t * d.EW,
                    bgWidth: t,
                    cutoutX: 0.125 * t + l,
                    cutoutY: 0.25 * t,
                    cutoutWidth: 0.75 * t,
                    cutoutHeight: 0.75 * t,
                    cutoutRadius: 0,
                    polygonScale: v(t, 0, s, l),
                    polygonOrigin: I(t, s, l),
                    dotY: 1.25 * t,
                    dotX: 0.5 * t + l,
                    dotRadius: 0.125 * t
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
                polygonScale: v(t, 0, s, l),
                polygonOrigin: I(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case u.Skl.IDLE:
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
                polygonScale: v(t, 0, s, l),
                polygonOrigin: I(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case u.Skl.DND:
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
                polygonScale: v(t, 0, s, l),
                polygonOrigin: I(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case u.Skl.STREAMING:
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
                polygonScale: v(t, 1, s, l),
                polygonOrigin: I(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case u.Skl.INVISIBLE:
        case u.Skl.UNKNOWN:
        case u.Skl.OFFLINE:
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
                polygonScale: v(t, 0, s, l),
                polygonOrigin: I(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
    }
}
function S(e) {
    return '-'
        .concat(0.216506 * e, ',-')
        .concat(0.25 * e, ' ')
        .concat(0.216506 * e, ',0 -')
        .concat(0.216506 * e, ',')
        .concat(0.25 * e);
}
function A(e, t, n) {
    let { bgRadius: i, bgY: a, bgX: s, bgHeight: l, bgWidth: c, cutoutX: u, cutoutY: d, cutoutWidth: _, cutoutHeight: f, cutoutRadius: p, polygonScale: h, polygonOrigin: m, dotY: g, dotX: E, dotRadius: b } = e;
    return (0, r.jsxs)('mask', {
        id: n,
        children: [
            (0, r.jsx)(o.animated.rect, {
                x: s,
                y: a,
                width: c,
                height: l,
                rx: i,
                ry: i,
                fill: 'white'
            }),
            (0, r.jsx)(o.animated.rect, {
                x: u,
                y: d,
                width: _,
                height: f,
                rx: p,
                ry: p,
                fill: 'black'
            }),
            (0, r.jsx)(o.animated.polygon, {
                points: S(t),
                fill: 'black',
                transform: h,
                style: { transformOrigin: m }
            }),
            (0, r.jsx)(o.animated.circle, {
                fill: 'black',
                cx: E,
                cy: g,
                r: b
            })
        ]
    });
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (n) return c.ZP.Masks.STATUS_TYPING;
    switch (e) {
        case u.Skl.IDLE:
            return c.ZP.Masks.STATUS_IDLE;
        case u.Skl.DND:
            return c.ZP.Masks.STATUS_DND;
        case u.Skl.STREAMING:
            return c.ZP.Masks.STATUS_STREAMING;
        case u.Skl.INVISIBLE:
        case u.Skl.UNKNOWN:
        case u.Skl.OFFLINE:
            return c.ZP.Masks.STATUS_OFFLINE;
        case u.Skl.ONLINE:
        default:
            if (t) return c.ZP.Masks.STATUS_ONLINE_MOBILE;
            return c.ZP.Masks.STATUS_ONLINE;
    }
}
function C(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return t === u.Skl.ONLINE && n && !r
        ? {
              width: e,
              height: e * d.EW
          }
        : {
              width: r ? e * d.D6 : e,
              height: e
          };
}
function R(e) {
    let { status: t, isMobile: n = !1, size: i = g, className: o, style: s, color: l } = e,
        d = t === u.Skl.ONLINE && n,
        f = b(t, l);
    return (0, r.jsx)(
        c.ZP,
        m(
            p(
                {
                    mask: N(t, d),
                    className: a()(_.mask, o),
                    style: s
                },
                C(i, t, d)
            ),
            {
                children: (0, r.jsx)('div', {
                    style: { backgroundColor: f },
                    className: _.status
                })
            }
        )
    );
}
