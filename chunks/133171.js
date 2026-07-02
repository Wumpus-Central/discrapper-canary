"use strict";
n.d(t, { C$: () => I, p8: () => y, yi: () => A, v: () => N, S3: () => g, pF: () => C, nW: () => R, i0: () => v });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(580929),
    l = n(661531),
    u = n(462887),
    d = n(310784),
    c = n.n(d),
    _ = n(702841),
    h = n(775602),
    f = n(573435),
    E = n(652215),
    p = n(778712),
    m = n(107965);
function g(e, t) {
    var n;
    let i,
        s = (function (e) {
            switch (e) {
                case E.clD.ONLINE:
                    return l.A.unsafe_rawColors.GREEN_NEW_38;
                case E.clD.IDLE:
                    return l.A.unsafe_rawColors.YELLOW_NEW_30;
                case E.clD.DND:
                    return l.A.unsafe_rawColors.RED_NEW_46;
                case E.clD.STREAMING:
                    return l.A.unsafe_rawColors.PLATFORM_TWITCH;
                case E.clD.INVISIBLE:
                case E.clD.UNKNOWN:
                case E.clD.OFFLINE:
                default:
                    return l.A.unsafe_rawColors.NEUTRAL_34;
            }
        })(e)
            .resolve({ saturation: 1 })
            .hex();
    return (
        (n = t ?? s),
        (i = (0, _.bG)([h.Ay], () => h.Ay.saturation)),
        r.useMemo(() => {
            if (null == n) return null;
            if ("currentColor" === n || n.startsWith("var(")) return n;
            let e = c()(n);
            return e.set("hsl.s", e.get("hsl.s") * i).hex();
        }, [n, i]) ?? void 0
    );
}
function A(e, t) {
    return t === p.F_.WHITE && e === E.clD.IDLE ? p.Iq.HIGH : p.Iq.LOW;
}
function I(e) {
    return (0, u.M)(e) ? p.F_.BLACK : p.F_.WHITE;
}
function T(e, t, n, i) {
    return `scale(${t}) translate(${0.5625 * e + i} ${0.75 * e + n})`;
}
function S(e, t, n) {
    return `${0.5625 * e + n}px ${0.75 * e + t}px`;
}
function N(e) {
    let { size: t, status: n, isMobile: i, isTyping: r, topOffset: s = 0, leftOffset: a = 0 } = e,
        o = (s / 8) * t,
        l = (a / 8) * t;
    if (r)
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + o,
            bgX: 0,
            bgHeight: t,
            bgWidth: 2.5 * t,
            cutoutX: 0.5 * t + l,
            cutoutY: 0.75 * t + o,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: T(t, 0, o, l),
            polygonOrigin: S(t, o, l),
            dotY: 0.75 * t + o,
            dotX: 0.5 * t + l,
            dotRadius: 0,
        };
    switch (n) {
        case E.clD.ONLINE:
            if (i)
                return {
                    bgRadius: 1.5 * t * 0.125,
                    bgY: 0,
                    bgX: l,
                    bgHeight: 1.5 * t,
                    bgWidth: t,
                    cutoutX: 0.125 * t + l,
                    cutoutY: 0.25 * t,
                    cutoutWidth: 0.75 * t,
                    cutoutHeight: 0.75 * t,
                    cutoutRadius: 0,
                    polygonScale: T(t, 0, o, l),
                    polygonOrigin: S(t, o, l),
                    dotY: 1.25 * t,
                    dotX: 0.5 * t + l,
                    dotRadius: 0.125 * t,
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
                polygonScale: T(t, 0, o, l),
                polygonOrigin: S(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case E.clD.IDLE:
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
                polygonScale: T(t, 0, o, l),
                polygonOrigin: S(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case E.clD.DND:
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
                polygonScale: T(t, 0, o, l),
                polygonOrigin: S(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case E.clD.STREAMING:
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
                polygonScale: T(t, 1, o, l),
                polygonOrigin: S(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case E.clD.INVISIBLE:
        case E.clD.UNKNOWN:
        case E.clD.OFFLINE:
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
                polygonScale: T(t, 0, o, l),
                polygonOrigin: S(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
    }
}
function C(e, t, n) {
    let {
        bgRadius: r,
        bgY: s,
        bgX: a,
        bgHeight: l,
        bgWidth: u,
        cutoutX: d,
        cutoutY: c,
        cutoutWidth: _,
        cutoutHeight: h,
        cutoutRadius: f,
        polygonScale: E,
        polygonOrigin: p,
        dotY: m,
        dotX: g,
        dotRadius: A,
    } = e;
    return (0, i.jsxs)("mask", {
        id: n,
        children: [
            (0, i.jsx)(o.animated.rect, { x: a, y: s, width: u, height: l, rx: r, ry: r, fill: "white" }),
            (0, i.jsx)(o.animated.rect, { x: d, y: c, width: _, height: h, rx: f, ry: f, fill: "black" }),
            (0, i.jsx)(o.animated.polygon, {
                points: `-${0.216506 * t},-${0.25 * t} ${0.216506 * t},0 -${0.216506 * t},${0.25 * t}`,
                fill: "black",
                transform: E,
                style: { transformOrigin: p },
            }),
            (0, i.jsx)(o.animated.circle, { fill: "black", cx: g, cy: m, r: A }),
        ],
    });
}
function y(e, t) {
    let { isMobile: n, isTyping: i, isVR: r } = t;
    if (i) return f.Ay.Masks.STATUS_TYPING;
    switch (e) {
        case E.clD.IDLE:
            return f.Ay.Masks.STATUS_IDLE;
        case E.clD.DND:
            return f.Ay.Masks.STATUS_DND;
        case E.clD.STREAMING:
            return f.Ay.Masks.STATUS_STREAMING;
        case E.clD.INVISIBLE:
        case E.clD.UNKNOWN:
        case E.clD.OFFLINE:
            return f.Ay.Masks.STATUS_OFFLINE;
        case E.clD.ONLINE:
        default:
            if (r) return f.Ay.Masks.STATUS_ONLINE_VR;
            if (n) return f.Ay.Masks.STATUS_ONLINE_MOBILE;
            return f.Ay.Masks.STATUS_ONLINE;
    }
}
function v(e, t, n) {
    let { isMobile: i, isTyping: r, isVR: s } = n;
    if (r) return { width: 2.5 * e, height: e };
    if (t === E.clD.ONLINE && s) {
        let t = +e;
        return { width: 1.5 * t, height: t };
    }
    return t === E.clD.ONLINE && i && !s ? { width: e, height: 1.5 * e } : { width: e, height: e };
}
function R(e) {
    let { status: t, isMobile: n = !1, isVR: r = !1, size: s = 8, className: o, style: l, color: u } = e,
        d = t === E.clD.ONLINE && n,
        c = t === E.clD.ONLINE && r,
        _ = g(t, u);
    return (0, i.jsx)(f.Ay, {
        mask: y(t, { isMobile: d, isTyping: !1, isVR: c }),
        className: a()(m.d, o),
        style: l,
        ...v(s, t, { isMobile: d, isTyping: !1, isVR: c }),
        children: (0, i.jsx)("div", { style: { backgroundColor: _ }, className: m.h }),
    });
}
