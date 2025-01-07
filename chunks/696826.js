r.d(n, {
    Dk: function () {
        return C;
    },
    P5: function () {
        return D;
    },
    QF: function () {
        return S;
    },
    Sk: function () {
        return p.Skl;
    },
    W5: function () {
        return x;
    },
    lm: function () {
        return y;
    },
    qb: function () {
        return w;
    },
    rs: function () {
        return L;
    },
    vP: function () {
        return O;
    },
    vj: function () {
        return b;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(666912),
    c = r(780384),
    d = r(481060),
    f = r(44315),
    _ = r(686546),
    h = r(540059),
    p = r(981631),
    m = r(182294),
    g = r(131004);
let E = 8,
    v = {
        tension: 600,
        friction: 70
    };
function I(e) {
    switch (e) {
        case p.Skl.ONLINE:
            return p.Ilk.GREEN_360;
        case p.Skl.IDLE:
            return p.Ilk.YELLOW_300;
        case p.Skl.DND:
            return p.Ilk.RED_400;
        case p.Skl.STREAMING:
            return p.Ilk.TWITCH;
        case p.Skl.INVISIBLE:
        case p.Skl.UNKNOWN:
        case p.Skl.OFFLINE:
        default:
            return p.Ilk.PRIMARY_400;
    }
}
function T(e) {
    switch (e) {
        case p.Skl.ONLINE:
            return p.Ilk.GREEN_NEW_38;
        case p.Skl.IDLE:
            return p.Ilk.YELLOW_NEW_30;
        case p.Skl.DND:
            return p.Ilk.RED_NEW_46;
        case p.Skl.STREAMING:
            return p.Ilk.TWITCH;
        case p.Skl.INVISIBLE:
        case p.Skl.UNKNOWN:
        case p.Skl.OFFLINE:
        default:
            return p.Ilk.NEUTRAL_34;
    }
}
function b(e, n) {
    let r = (0, h.Q3)('useStatusFillColor'),
        i = (0, f.Sl)(r ? T(e) : I(e)).hex,
        a = null != n ? n : i,
        s = (0, f.K3)(a);
    return null != s ? s : void 0;
}
function y(e, n) {
    return n === m.VZ.WHITE && e === p.Skl.IDLE ? m.d_.HIGH : m.d_.LOW;
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
function N(e, n, r) {
    return ''.concat(0.5625 * e + r, 'px ').concat(0.75 * e + n, 'px');
}
function C(e) {
    let { size: n, status: r, isMobile: i, isTyping: a, topOffset: s = 0, leftOffset: o = 0 } = e,
        l = (s / E) * n,
        u = (o / E) * n;
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
            polygonOrigin: N(n, l, u),
            dotY: 0.75 * n + l,
            dotX: 0.5 * n + u,
            dotRadius: 0
        };
    switch (r) {
        case p.Skl.ONLINE:
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
                    polygonOrigin: N(n, l, u),
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
                polygonOrigin: N(n, l, u),
                dotY: 0.75 * n + l,
                dotX: 0.5 * n + u,
                dotRadius: 0
            };
        case p.Skl.IDLE:
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
                polygonOrigin: N(n, l, u),
                dotY: 0.75 * n + l,
                dotX: 0.5 * n + u,
                dotRadius: 0
            };
        case p.Skl.DND:
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
                polygonOrigin: N(n, l, u),
                dotY: 0.75 * n + l,
                dotX: 0.5 * n + u,
                dotRadius: 0
            };
        case p.Skl.STREAMING:
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
                polygonOrigin: N(n, l, u),
                dotY: 0.75 * n + l,
                dotX: 0.5 * n + u,
                dotRadius: 0
            };
        case p.Skl.INVISIBLE:
        case p.Skl.UNKNOWN:
        case p.Skl.OFFLINE:
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
                polygonOrigin: N(n, l, u),
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
    let { bgRadius: i, bgY: s, bgX: o, bgHeight: l, bgWidth: c, cutoutX: d, cutoutY: f, cutoutWidth: _, cutoutHeight: h, cutoutRadius: p, polygonScale: m, polygonOrigin: g, dotY: E, dotX: v, dotRadius: I } = e;
    return (0, a.jsxs)('mask', {
        id: r,
        children: [
            (0, a.jsx)(u.animated.rect, {
                x: o,
                y: s,
                width: c,
                height: l,
                rx: i,
                ry: i,
                fill: 'white'
            }),
            (0, a.jsx)(u.animated.rect, {
                x: d,
                y: f,
                width: _,
                height: h,
                rx: p,
                ry: p,
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
                r: I
            })
        ]
    });
}
function D(e) {
    let { status: n, isMobile: r = !1, size: i = E, color: o, className: c, style: f } = e,
        _ = s.useId(),
        h = n === p.Skl.ONLINE && r,
        I = s.useMemo(
            () =>
                C({
                    size: i,
                    status: n,
                    isMobile: h
                }),
            [i, n, h]
        ),
        T = (0, d.useSpring)(
            {
                config: v,
                to: I
            },
            'animate-always'
        ),
        y = b(n, o),
        [{ fill: S }] = (0, d.useSpring)(
            {
                config: v,
                fill: y
            },
            'animate-always',
            [y]
        ),
        A = i,
        N = Math.ceil(i * m.EW);
    return (0, a.jsxs)('svg', {
        width: A,
        height: N,
        viewBox: '0 0 '.concat(A, ' ').concat(N),
        className: l()(g.mask, c),
        style: f,
        children: [
            O(T, i, _),
            (0, a.jsx)(u.animated.rect, {
                x: 0,
                y: 0,
                width: A,
                height: N,
                fill: S,
                mask: 'url(#'.concat(_, ')')
            })
        ]
    });
}
function L(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (r) return _.ZP.Masks.STATUS_TYPING;
    switch (e) {
        case p.Skl.IDLE:
            return _.ZP.Masks.STATUS_IDLE;
        case p.Skl.DND:
            return _.ZP.Masks.STATUS_DND;
        case p.Skl.STREAMING:
            return _.ZP.Masks.STATUS_STREAMING;
        case p.Skl.INVISIBLE:
        case p.Skl.UNKNOWN:
        case p.Skl.OFFLINE:
            return _.ZP.Masks.STATUS_OFFLINE;
        case p.Skl.ONLINE:
        default:
            if (n) return _.ZP.Masks.STATUS_ONLINE_MOBILE;
            return _.ZP.Masks.STATUS_ONLINE;
    }
}
function x(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return n === p.Skl.ONLINE && r && !i
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
    let { status: n, isMobile: r = !1, size: i = E, className: s, style: o, color: u } = e,
        c = n === p.Skl.ONLINE && r,
        d = b(n, u);
    return (0, a.jsx)(_.ZP, {
        mask: L(n, c),
        className: l()(g.mask, s),
        style: o,
        ...x(i, n, c),
        children: (0, a.jsx)('div', {
            style: { backgroundColor: d },
            className: g.status
        })
    });
}
