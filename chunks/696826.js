n.d(t, {
    Dk: () => N,
    QF: () => I,
    Sk: () => d.Skl,
    W5: () => P,
    lm: () => O,
    qb: () => w,
    rs: () => R,
    vP: () => C,
    vj: () => v
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(642128),
    s = n(780384);
n(481060);
var l = n(44315),
    c = n(686546),
    u = n(540059),
    d = n(981631),
    f = n(182294),
    _ = n(121061);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
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
function y(e) {
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
function v(e, t) {
    let n = (0, u.Q3)('useStatusFillColor'),
        r = (0, l.Sl)(n ? y(e) : b(e)).hex,
        i = null != t ? t : r,
        o = (0, l.K3)(i);
    return null != o ? o : void 0;
}
function O(e, t) {
    return t === f.VZ.WHITE && e === d.Skl.IDLE ? f.d_.HIGH : f.d_.LOW;
}
function I(e) {
    return (0, s.wj)(e) ? f.VZ.BLACK : f.VZ.WHITE;
}
function S(e, t, n, r) {
    return 'scale('
        .concat(t, ') translate(')
        .concat(0.5625 * e + r, ' ')
        .concat(0.75 * e + n, ')');
}
function T(e, t, n) {
    return ''.concat(0.5625 * e + n, 'px ').concat(0.75 * e + t, 'px');
}
function N(e) {
    let { size: t, status: n, isMobile: r, isTyping: i, topOffset: o = 0, leftOffset: a = 0 } = e,
        s = (o / E) * t,
        l = (a / E) * t;
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
            polygonOrigin: T(t, s, l),
            dotY: 0.75 * t + s,
            dotX: 0.5 * t + l,
            dotRadius: 0
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
                    polygonOrigin: T(t, s, l),
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
                polygonScale: S(t, 0, s, l),
                polygonOrigin: T(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0
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
                polygonOrigin: T(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0
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
                polygonOrigin: T(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0
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
                polygonOrigin: T(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0
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
                polygonOrigin: T(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
    }
}
function A(e) {
    return '-'
        .concat(0.216506 * e, ',-')
        .concat(0.25 * e, ' ')
        .concat(0.216506 * e, ',0 -')
        .concat(0.216506 * e, ',')
        .concat(0.25 * e);
}
function C(e, t, n) {
    let { bgRadius: i, bgY: o, bgX: s, bgHeight: l, bgWidth: c, cutoutX: u, cutoutY: d, cutoutWidth: f, cutoutHeight: _, cutoutRadius: p, polygonScale: h, polygonOrigin: m, dotY: g, dotX: E, dotRadius: b } = e;
    return (0, r.jsxs)('mask', {
        id: n,
        children: [
            (0, r.jsx)(a.animated.rect, {
                x: s,
                y: o,
                width: c,
                height: l,
                rx: i,
                ry: i,
                fill: 'white'
            }),
            (0, r.jsx)(a.animated.rect, {
                x: u,
                y: d,
                width: f,
                height: _,
                rx: p,
                ry: p,
                fill: 'black'
            }),
            (0, r.jsx)(a.animated.polygon, {
                points: A(t),
                fill: 'black',
                transform: h,
                style: { transformOrigin: m }
            }),
            (0, r.jsx)(a.animated.circle, {
                fill: 'black',
                cx: E,
                cy: g,
                r: b
            })
        ]
    });
}
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (n) return c.ZP.Masks.STATUS_TYPING;
    switch (e) {
        case d.Skl.IDLE:
            return c.ZP.Masks.STATUS_IDLE;
        case d.Skl.DND:
            return c.ZP.Masks.STATUS_DND;
        case d.Skl.STREAMING:
            return c.ZP.Masks.STATUS_STREAMING;
        case d.Skl.INVISIBLE:
        case d.Skl.UNKNOWN:
        case d.Skl.OFFLINE:
            return c.ZP.Masks.STATUS_OFFLINE;
        case d.Skl.ONLINE:
        default:
            if (t) return c.ZP.Masks.STATUS_ONLINE_MOBILE;
            return c.ZP.Masks.STATUS_ONLINE;
    }
}
function P(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return t === d.Skl.ONLINE && n && !r
        ? {
              width: e,
              height: e * f.EW
          }
        : {
              width: r ? e * f.D6 : e,
              height: e
          };
}
function w(e) {
    let { status: t, isMobile: n = !1, size: i = E, className: a, style: s, color: l } = e,
        u = t === d.Skl.ONLINE && n,
        f = v(t, l);
    return (0, r.jsx)(
        c.ZP,
        g(
            h(
                {
                    mask: R(t, u),
                    className: o()(_.mask, a),
                    style: s
                },
                P(i, t, u)
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
