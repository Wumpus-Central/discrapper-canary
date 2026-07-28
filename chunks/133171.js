"use strict";
n.d(t, { C$: () => m, p8: () => O, yi: () => T, v: () => N, S3: () => p, pF: () => C, nW: () => L, i0: () => R });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(4798),
    o = n(661531),
    d = n(462887),
    c = n(310784),
    u = n.n(c),
    _ = n(702841),
    E = n(775602),
    A = n(573435),
    h = n(652215),
    I = n(778712),
    f = n(169861);
function p(e, t) {
    var n;
    let i,
        a = (function (e) {
            switch (e) {
                case h.clD.ONLINE:
                    return o.A.unsafe_rawColors.GREEN_NEW_38;
                case h.clD.IDLE:
                    return o.A.unsafe_rawColors.YELLOW_NEW_30;
                case h.clD.DND:
                    return o.A.unsafe_rawColors.RED_NEW_46;
                case h.clD.STREAMING:
                    return o.A.unsafe_rawColors.PLATFORM_TWITCH;
                case h.clD.INVISIBLE:
                case h.clD.UNKNOWN:
                case h.clD.OFFLINE:
                default:
                    return o.A.unsafe_rawColors.NEUTRAL_34;
            }
        })(e)
            .resolve({ saturation: 1 })
            .hex();
    return (
        (n = t ?? a),
        (i = (0, _.bG)([E.Ay], () => E.Ay.saturation)),
        r.useMemo(() => {
            if (null == n) return null;
            if ("currentColor" === n || n.startsWith("var(")) return n;
            let e = u()(n);
            return e.set("hsl.s", e.get("hsl.s") * i).hex();
        }, [n, i]) ?? void 0
    );
}
function T(e, t) {
    return t === I.F_.WHITE && e === h.clD.IDLE ? I.Iq.HIGH : I.Iq.LOW;
}
function m(e) {
    return (0, d.M)(e) ? I.F_.BLACK : I.F_.WHITE;
}
function g(e, t, n, i) {
    return `scale(${t}) translate(${0.5625 * e + i} ${0.75 * e + n})`;
}
function S(e, t, n) {
    return `${0.5625 * e + n}px ${0.75 * e + t}px`;
}
function N(e) {
    let { size: t, status: n, isMobile: i, isTyping: r, topOffset: a = 0, leftOffset: s = 0 } = e,
        l = (a / 8) * t,
        o = (s / 8) * t;
    if (r)
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + l,
            bgX: 0,
            bgHeight: t,
            bgWidth: 2.5 * t,
            cutoutX: 0.5 * t + o,
            cutoutY: 0.75 * t + l,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: g(t, 0, l, o),
            polygonOrigin: S(t, l, o),
            dotY: 0.75 * t + l,
            dotX: 0.5 * t + o,
            dotRadius: 0,
        };
    switch (n) {
        case h.clD.ONLINE:
            if (i)
                return {
                    bgRadius: 1.5 * t * 0.125,
                    bgY: 0,
                    bgX: o,
                    bgHeight: 1.5 * t,
                    bgWidth: t,
                    cutoutX: 0.125 * t + o,
                    cutoutY: 0.25 * t,
                    cutoutWidth: 0.75 * t,
                    cutoutHeight: 0.75 * t,
                    cutoutRadius: 0,
                    polygonScale: g(t, 0, l, o),
                    polygonOrigin: S(t, l, o),
                    dotY: 1.25 * t,
                    dotX: 0.5 * t + o,
                    dotRadius: 0.125 * t,
                };
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + l,
                bgX: o,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + o,
                cutoutY: 0.75 * t + l,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0,
                polygonScale: g(t, 0, l, o),
                polygonOrigin: S(t, l, o),
                dotY: 0.75 * t + l,
                dotX: 0.5 * t + o,
                dotRadius: 0,
            };
        case h.clD.IDLE:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + l,
                bgX: o,
                bgHeight: t,
                bgWidth: t,
                cutoutX: -(0.125 * t) + o,
                cutoutY: 0.125 * t + l,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.75 * t,
                cutoutRadius: 0.375 * t,
                polygonScale: g(t, 0, l, o),
                polygonOrigin: S(t, l, o),
                dotY: 0.75 * t + l,
                dotX: 0.5 * t + o,
                dotRadius: 0,
            };
        case h.clD.DND:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + l,
                bgX: o,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.125 * t + o,
                cutoutY: 0.625 * t + l,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.25 * t,
                cutoutRadius: 0.125 * t,
                polygonScale: g(t, 0, l, o),
                polygonOrigin: S(t, l, o),
                dotY: 0.75 * t + l,
                dotX: 0.5 * t + o,
                dotRadius: 0,
            };
        case h.clD.STREAMING:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + l,
                bgX: o,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + o,
                cutoutY: 0.75 * t + l,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0.25 * t,
                polygonScale: g(t, 1, l, o),
                polygonOrigin: S(t, l, o),
                dotY: 0.75 * t + l,
                dotX: 0.5 * t + o,
                dotRadius: 0,
            };
        case h.clD.INVISIBLE:
        case h.clD.UNKNOWN:
        case h.clD.OFFLINE:
        default:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + l,
                bgX: o,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.25 * t + o,
                cutoutY: 0.5 * t + l,
                cutoutWidth: 0.5 * t,
                cutoutHeight: 0.5 * t,
                cutoutRadius: 0.25 * t,
                polygonScale: g(t, 0, l, o),
                polygonOrigin: S(t, l, o),
                dotY: 0.75 * t + l,
                dotX: 0.5 * t + o,
                dotRadius: 0,
            };
    }
}
function C(e, t, n) {
    let {
        bgRadius: r,
        bgY: a,
        bgX: s,
        bgHeight: o,
        bgWidth: d,
        cutoutX: c,
        cutoutY: u,
        cutoutWidth: _,
        cutoutHeight: E,
        cutoutRadius: A,
        polygonScale: h,
        polygonOrigin: I,
        dotY: f,
        dotX: p,
        dotRadius: T,
    } = e;
    return (0, i.jsxs)("mask", {
        id: n,
        children: [
            (0, i.jsx)(l.animated.rect, { x: s, y: a, width: d, height: o, rx: r, ry: r, fill: "white" }),
            (0, i.jsx)(l.animated.rect, { x: c, y: u, width: _, height: E, rx: A, ry: A, fill: "black" }),
            (0, i.jsx)(l.animated.polygon, {
                points: `-${0.216506 * t},-${0.25 * t} ${0.216506 * t},0 -${0.216506 * t},${0.25 * t}`,
                fill: "black",
                transform: h,
                style: { transformOrigin: I },
            }),
            (0, i.jsx)(l.animated.circle, { fill: "black", cx: p, cy: f, r: T }),
        ],
    });
}
function O(e, t) {
    let { isMobile: n, isTyping: i, isVR: r } = t;
    if (i) return A.Ay.Masks.STATUS_TYPING;
    switch (e) {
        case h.clD.IDLE:
            return A.Ay.Masks.STATUS_IDLE;
        case h.clD.DND:
            return A.Ay.Masks.STATUS_DND;
        case h.clD.STREAMING:
            return A.Ay.Masks.STATUS_STREAMING;
        case h.clD.INVISIBLE:
        case h.clD.UNKNOWN:
        case h.clD.OFFLINE:
            return A.Ay.Masks.STATUS_OFFLINE;
        case h.clD.ONLINE:
        default:
            if (r) return A.Ay.Masks.STATUS_ONLINE_VR;
            if (n) return A.Ay.Masks.STATUS_ONLINE_MOBILE;
            return A.Ay.Masks.STATUS_ONLINE;
    }
}
function R(e, t, n) {
    let { isMobile: i, isTyping: r, isVR: a } = n;
    if (r) return { width: 2.5 * e, height: e };
    if (t === h.clD.ONLINE && a) {
        let t = +e;
        return { width: 1.5 * t, height: t };
    }
    return t === h.clD.ONLINE && i && !a ? { width: e, height: 1.5 * e } : { width: e, height: e };
}
function L(e) {
    let { status: t, isMobile: n = !1, isVR: r = !1, size: a = 8, className: l, style: o, color: d } = e,
        c = t === h.clD.ONLINE && n,
        u = t === h.clD.ONLINE && r,
        _ = p(t, d);
    return (0, i.jsx)(A.Ay, {
        mask: O(t, { isMobile: c, isTyping: !1, isVR: u }),
        className: s()(f.d, l),
        style: o,
        ...R(a, t, { isMobile: c, isTyping: !1, isVR: u }),
        children: (0, i.jsx)("div", { style: { backgroundColor: _ }, className: f.h }),
    });
}
