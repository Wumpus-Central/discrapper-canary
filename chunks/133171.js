"use strict";
n.d(t, { C$: () => I, p8: () => R, yi: () => A, v: () => N, S3: () => p, pF: () => C, nW: () => y, i0: () => O });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(661531),
    d = n(462887),
    _ = n(310784),
    u = n.n(_),
    c = n(702841),
    E = n(775602),
    h = n(573435),
    m = n(652215),
    f = n(778712),
    g = n(107965);
function p(e, t) {
    var n;
    let i,
        s = (function (e) {
            switch (e) {
                case m.clD.ONLINE:
                    return l.A.unsafe_rawColors.GREEN_NEW_38;
                case m.clD.IDLE:
                    return l.A.unsafe_rawColors.YELLOW_NEW_30;
                case m.clD.DND:
                    return l.A.unsafe_rawColors.RED_NEW_46;
                case m.clD.STREAMING:
                    return l.A.unsafe_rawColors.PLATFORM_TWITCH;
                case m.clD.INVISIBLE:
                case m.clD.UNKNOWN:
                case m.clD.OFFLINE:
                default:
                    return l.A.unsafe_rawColors.NEUTRAL_34;
            }
        })(e)
            .resolve({ saturation: 1 })
            .hex();
    return (
        (n = t ?? s),
        (i = (0, c.bG)([E.A], () => E.A.saturation)),
        r.useMemo(() => {
            if (null == n) return null;
            if ("currentColor" === n || n.startsWith("var(")) return n;
            let e = u()(n);
            return e.set("hsl.s", e.get("hsl.s") * i).hex();
        }, [n, i]) ?? void 0
    );
}
function A(e, t) {
    return t === f.F_.WHITE && e === m.clD.IDLE ? f.Iq.HIGH : f.Iq.LOW;
}
function I(e) {
    return (0, d.M)(e) ? f.F_.BLACK : f.F_.WHITE;
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
        case m.clD.ONLINE:
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
        case m.clD.IDLE:
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
        case m.clD.DND:
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
        case m.clD.STREAMING:
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
        case m.clD.INVISIBLE:
        case m.clD.UNKNOWN:
        case m.clD.OFFLINE:
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
        bgWidth: d,
        cutoutX: _,
        cutoutY: u,
        cutoutWidth: c,
        cutoutHeight: E,
        cutoutRadius: h,
        polygonScale: m,
        polygonOrigin: f,
        dotY: g,
        dotX: p,
        dotRadius: A,
    } = e;
    return (0, i.jsxs)("mask", {
        id: n,
        children: [
            (0, i.jsx)(o.animated.rect, { x: a, y: s, width: d, height: l, rx: r, ry: r, fill: "white" }),
            (0, i.jsx)(o.animated.rect, { x: _, y: u, width: c, height: E, rx: h, ry: h, fill: "black" }),
            (0, i.jsx)(o.animated.polygon, {
                points: `-${0.216506 * t},-${0.25 * t} ${0.216506 * t},0 -${0.216506 * t},${0.25 * t}`,
                fill: "black",
                transform: m,
                style: { transformOrigin: f },
            }),
            (0, i.jsx)(o.animated.circle, { fill: "black", cx: p, cy: g, r: A }),
        ],
    });
}
function R(e, t) {
    let { isMobile: n, isTyping: i, isVR: r } = t;
    if (i) return h.Ay.Masks.STATUS_TYPING;
    switch (e) {
        case m.clD.IDLE:
            return h.Ay.Masks.STATUS_IDLE;
        case m.clD.DND:
            return h.Ay.Masks.STATUS_DND;
        case m.clD.STREAMING:
            return h.Ay.Masks.STATUS_STREAMING;
        case m.clD.INVISIBLE:
        case m.clD.UNKNOWN:
        case m.clD.OFFLINE:
            return h.Ay.Masks.STATUS_OFFLINE;
        case m.clD.ONLINE:
        default:
            if (r) return h.Ay.Masks.STATUS_ONLINE_VR;
            if (n) return h.Ay.Masks.STATUS_ONLINE_MOBILE;
            return h.Ay.Masks.STATUS_ONLINE;
    }
}
function O(e, t, n) {
    let { isMobile: i, isTyping: r, isVR: s } = n;
    return r
        ? { width: 2.5 * e, height: e }
        : t === m.clD.ONLINE && i && !s
          ? { width: e, height: 1.5 * e }
          : { width: e, height: e };
}
function y(e) {
    let { status: t, isMobile: n = !1, isVR: r = !1, size: s = 8, className: o, style: l, color: d } = e,
        _ = t === m.clD.ONLINE && n,
        u = t === m.clD.ONLINE && r,
        c = p(t, d);
    return (0, i.jsx)(h.Ay, {
        mask: R(t, { isMobile: _, isTyping: !1, isVR: u }),
        className: a()(g.d, o),
        style: l,
        ...O(s, t, { isMobile: _, isTyping: !1, isVR: u }),
        children: (0, i.jsx)("div", { style: { backgroundColor: c }, className: g.h }),
    });
}
