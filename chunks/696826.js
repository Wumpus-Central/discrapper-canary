r.d(n, {
    Dk: function () {
        return N;
    },
    P5: function () {
        return D;
    },
    QF: function () {
        return S;
    },
    Sk: function () {
        return _.Skl;
    },
    W5: function () {
        return L;
    },
    lm: function () {
        return T;
    },
    qb: function () {
        return w;
    },
    rs: function () {
        return x;
    },
    vP: function () {
        return O;
    },
    vj: function () {
        return I;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(642128),
    c = r(780384),
    d = r(481060),
    f = r(44315),
    p = r(686546),
    h = r(540059),
    _ = r(981631),
    m = r(182294),
    g = r(131004);
let E = 8,
    v = {
        tension: 600,
        friction: 70
    };
function y(e) {
    switch (e) {
        case _.Skl.ONLINE:
            return _.Ilk.GREEN_360;
        case _.Skl.IDLE:
            return _.Ilk.YELLOW_300;
        case _.Skl.DND:
            return _.Ilk.RED_400;
        case _.Skl.STREAMING:
            return _.Ilk.TWITCH;
        case _.Skl.INVISIBLE:
        case _.Skl.UNKNOWN:
        case _.Skl.OFFLINE:
        default:
            return _.Ilk.PRIMARY_400;
    }
}
function b(e) {
    switch (e) {
        case _.Skl.ONLINE:
            return _.Ilk.GREEN_NEW_38;
        case _.Skl.IDLE:
            return _.Ilk.YELLOW_NEW_30;
        case _.Skl.DND:
            return _.Ilk.RED_NEW_46;
        case _.Skl.STREAMING:
            return _.Ilk.TWITCH;
        case _.Skl.INVISIBLE:
        case _.Skl.UNKNOWN:
        case _.Skl.OFFLINE:
        default:
            return _.Ilk.NEUTRAL_34;
    }
}
function I(e, n) {
    let r = (0, h.Q3)('useStatusFillColor'),
        i = (0, f.Sl)(r ? b(e) : y(e)).hex,
        a = null != n ? n : i,
        o = (0, f.K3)(a);
    return null != o ? o : void 0;
}
function T(e, n) {
    return n === m.VZ.WHITE && e === _.Skl.IDLE ? m.d_.HIGH : m.d_.LOW;
}
function S(e) {
    return (0, c.wj)(e) ? m.VZ.BLACK : m.VZ.WHITE;
}
function A(e, n, r, i) {
    return 'scale('
        .concat(n, ') translate(')
        .concat(0.5625 * e + i, ' ')
        .concat(0.75 * e + r, ')');
}
function C(e, n, r) {
    return ''.concat(0.5625 * e + r, 'px ').concat(0.75 * e + n, 'px');
}
function N(e) {
    let { size: n, status: r, isMobile: i, isTyping: a, topOffset: o = 0, leftOffset: s = 0 } = e,
        l = (o / E) * n,
        u = (s / E) * n;
    if (a)
        return {
            bgRadius: 0.5 * n,
            bgY: 0.25 * n + l,
            bgX: 0,
            bgHeight: n,
            bgWidth: n * m.D6,
            cutoutX: 0.5 * n + u,
            cutoutY: 0.75 * n + l,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: A(n, 0, l, u),
            polygonOrigin: C(n, l, u),
            dotY: 0.75 * n + l,
            dotX: 0.5 * n + u,
            dotRadius: 0
        };
    switch (r) {
        case _.Skl.ONLINE:
            if (i)
                return {
                    bgRadius: n * m.EW * m.e7,
                    bgY: 0,
                    bgX: u,
                    bgHeight: n * m.EW,
                    bgWidth: n,
                    cutoutX: 0.125 * n + u,
                    cutoutY: 0.25 * n,
                    cutoutWidth: 0.75 * n,
                    cutoutHeight: 0.75 * n,
                    cutoutRadius: 0,
                    polygonScale: A(n, 0, l, u),
                    polygonOrigin: C(n, l, u),
                    dotY: 1.25 * n,
                    dotX: 0.5 * n + u,
                    dotRadius: 0.125 * n
                };
            return {
                bgRadius: 0.5 * n,
                bgY: 0.25 * n + l,
                bgX: u,
                bgHeight: n,
                bgWidth: n,
                cutoutX: 0.5 * n + u,
                cutoutY: 0.75 * n + l,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0,
                polygonScale: A(n, 0, l, u),
                polygonOrigin: C(n, l, u),
                dotY: 0.75 * n + l,
                dotX: 0.5 * n + u,
                dotRadius: 0
            };
        case _.Skl.IDLE:
            return {
                bgRadius: 0.5 * n,
                bgY: 0.25 * n + l,
                bgX: u,
                bgHeight: n,
                bgWidth: n,
                cutoutX: -(0.125 * n) + u,
                cutoutY: 0.125 * n + l,
                cutoutWidth: 0.75 * n,
                cutoutHeight: 0.75 * n,
                cutoutRadius: 0.375 * n,
                polygonScale: A(n, 0, l, u),
                polygonOrigin: C(n, l, u),
                dotY: 0.75 * n + l,
                dotX: 0.5 * n + u,
                dotRadius: 0
            };
        case _.Skl.DND:
            return {
                bgRadius: 0.5 * n,
                bgY: 0.25 * n + l,
                bgX: u,
                bgHeight: n,
                bgWidth: n,
                cutoutX: 0.125 * n + u,
                cutoutY: 0.625 * n + l,
                cutoutWidth: 0.75 * n,
                cutoutHeight: 0.25 * n,
                cutoutRadius: 0.125 * n,
                polygonScale: A(n, 0, l, u),
                polygonOrigin: C(n, l, u),
                dotY: 0.75 * n + l,
                dotX: 0.5 * n + u,
                dotRadius: 0
            };
        case _.Skl.STREAMING:
            return {
                bgRadius: 0.5 * n,
                bgY: 0.25 * n + l,
                bgX: u,
                bgHeight: n,
                bgWidth: n,
                cutoutX: 0.5 * n + u,
                cutoutY: 0.75 * n + l,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0.25 * n,
                polygonScale: A(n, 1, l, u),
                polygonOrigin: C(n, l, u),
                dotY: 0.75 * n + l,
                dotX: 0.5 * n + u,
                dotRadius: 0
            };
        case _.Skl.INVISIBLE:
        case _.Skl.UNKNOWN:
        case _.Skl.OFFLINE:
        default:
            return {
                bgRadius: 0.5 * n,
                bgY: 0.25 * n + l,
                bgX: u,
                bgHeight: n,
                bgWidth: n,
                cutoutX: 0.25 * n + u,
                cutoutY: 0.5 * n + l,
                cutoutWidth: 0.5 * n,
                cutoutHeight: 0.5 * n,
                cutoutRadius: 0.25 * n,
                polygonScale: A(n, 0, l, u),
                polygonOrigin: C(n, l, u),
                dotY: 0.75 * n + l,
                dotX: 0.5 * n + u,
                dotRadius: 0
            };
    }
}
function R(e) {
    return '-'
        .concat(0.216506 * e, ',-')
        .concat(0.25 * e, ' ')
        .concat(0.216506 * e, ',0 -')
        .concat(0.216506 * e, ',')
        .concat(0.25 * e);
}
function O(e, n, r) {
    let { bgRadius: i, bgY: o, bgX: s, bgHeight: l, bgWidth: c, cutoutX: d, cutoutY: f, cutoutWidth: p, cutoutHeight: h, cutoutRadius: _, polygonScale: m, polygonOrigin: g, dotY: E, dotX: v, dotRadius: y } = e;
    return (0, a.jsxs)('mask', {
        id: r,
        children: [
            (0, a.jsx)(u.animated.rect, {
                x: s,
                y: o,
                width: c,
                height: l,
                rx: i,
                ry: i,
                fill: 'white'
            }),
            (0, a.jsx)(u.animated.rect, {
                x: d,
                y: f,
                width: p,
                height: h,
                rx: _,
                ry: _,
                fill: 'black'
            }),
            (0, a.jsx)(u.animated.polygon, {
                points: R(n),
                fill: 'black',
                transform: m,
                style: { transformOrigin: g }
            }),
            (0, a.jsx)(u.animated.circle, {
                fill: 'black',
                cx: v,
                cy: E,
                r: y
            })
        ]
    });
}
function D(e) {
    let { status: n, isMobile: r = !1, size: i = E, color: s, className: c, style: f } = e,
        p = o.useId(),
        h = n === _.Skl.ONLINE && r,
        y = o.useMemo(
            () =>
                N({
                    size: i,
                    status: n,
                    isMobile: h
                }),
            [i, n, h]
        ),
        b = (0, d.useSpring)(
            {
                config: v,
                to: y
            },
            'animate-always'
        ),
        T = I(n, s),
        [{ fill: S }] = (0, d.useSpring)(
            {
                config: v,
                fill: T
            },
            'animate-always',
            [T]
        ),
        A = i,
        C = Math.ceil(i * m.EW);
    return (0, a.jsxs)('svg', {
        width: A,
        height: C,
        viewBox: '0 0 '.concat(A, ' ').concat(C),
        className: l()(g.mask, c),
        style: f,
        children: [
            O(b, i, p),
            (0, a.jsx)(u.animated.rect, {
                x: 0,
                y: 0,
                width: A,
                height: C,
                fill: S,
                mask: 'url(#'.concat(p, ')')
            })
        ]
    });
}
function x(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (r) return p.ZP.Masks.STATUS_TYPING;
    switch (e) {
        case _.Skl.IDLE:
            return p.ZP.Masks.STATUS_IDLE;
        case _.Skl.DND:
            return p.ZP.Masks.STATUS_DND;
        case _.Skl.STREAMING:
            return p.ZP.Masks.STATUS_STREAMING;
        case _.Skl.INVISIBLE:
        case _.Skl.UNKNOWN:
        case _.Skl.OFFLINE:
            return p.ZP.Masks.STATUS_OFFLINE;
        case _.Skl.ONLINE:
        default:
            if (n) return p.ZP.Masks.STATUS_ONLINE_MOBILE;
            return p.ZP.Masks.STATUS_ONLINE;
    }
}
function L(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return n === _.Skl.ONLINE && r && !i
        ? {
              width: e,
              height: e * m.EW
          }
        : {
              width: i ? e * m.D6 : e,
              height: e
          };
}
function w(e) {
    let { status: n, isMobile: r = !1, size: i = E, className: o, style: s, color: u } = e,
        c = n === _.Skl.ONLINE && r,
        d = I(n, u);
    return (0, a.jsx)(p.ZP, {
        mask: x(n, c),
        className: l()(g.mask, o),
        style: s,
        ...L(i, n, c),
        children: (0, a.jsx)('div', {
            style: { backgroundColor: d },
            className: g.status
        })
    });
}
