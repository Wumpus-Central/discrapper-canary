l.d(t, { A: () => eb });
var a = l(477900),
    n = l(582128),
    i = l(621466),
    s = l(231723),
    r = l(939249),
    o = l(793574),
    c = l(688810),
    u = l(256905),
    d = l(635793),
    m = l(530574),
    h = l(675747),
    f = l(584794),
    x = l(362081),
    v = l(22745);
function p() {
    let { clip: e } = (0, x.T)();
    return "" !== e.thumbnail
        ? (0, a.jsx)("img", { className: v.T, src: e.thumbnail, alt: "", "aria-hidden": !0 })
        : null;
}
var g = l(17928),
    j = l(342952),
    b = l(834730),
    C = l(778712),
    y = l(429913),
    w = l(47167),
    N = l(713654),
    E = l(769015),
    k = l(145497),
    A = l(734057),
    L = l(71393),
    R = l(287809),
    I = l(58703),
    M = l(403362),
    T = l(818433),
    D = l(620828);
function S(e) {
    let { icon: t, label: l } = e;
    return (0, a.jsxs)("div", {
        className: D.Ho,
        children: [
            null != t && (0, a.jsx)("div", { className: D.t8, children: t }),
            (0, a.jsx)(b.E, { variant: "text-xs/normal", color: "text-subtle", className: D.Mk, children: l }),
        ],
    });
}
function O() {
    let { clip: e } = (0, x.T)(),
        t = (0, y.h)(e.applicationId),
        l = (0, g.yK)([R.default], () => e.users.map(R.default.getUser).filter(M.Vq)),
        n = (0, g.bG)([L.A], () => (null != e.guildId ? L.A.getGuild(e.guildId) : null)),
        i = (0, g.bG)([A.A], () => (null != e.channelId ? A.A.getChannel(e.channelId) : null)),
        s = (0, w.Ay)(i),
        r = null != i ? (0, N.gU)(i, n) : null,
        o = t?.name ?? e.applicationName,
        c =
            null != i && null != r
                ? (0, a.jsx)(r, { size: "custom", width: 16, height: 16, color: "currentColor" })
                : null;
    return (0, a.jsxs)("div", {
        className: D.wx,
        children: [
            (0, a.jsx)(T.A, { variant: "text-md/medium", className: D.DD }),
            (0, a.jsxs)("div", {
                className: D.KW,
                children: [
                    null != o &&
                        "" !== o &&
                        (0, a.jsx)(S, {
                            icon: null != t ? (0, a.jsx)(E.A, { game: t, size: E.M.XXSMALL }) : void 0,
                            label: o,
                        }),
                    null != n && (0, a.jsx)(S, { icon: (0, a.jsx)(k.Ay, { guild: n, iconSize: 16 }), label: n.name }),
                    null != c && (0, a.jsx)(S, { icon: c, label: s ?? "" }),
                    (0, a.jsx)(S, { label: (0, I.mk)(new Date(e.createdAt)) }),
                    l.length > 0 &&
                        (0, a.jsx)("div", {
                            className: D.Ho,
                            children: (0, a.jsx)(j.A, { users: l, maxUsers: 10, size: C._3.SIZE_16 }),
                        }),
                ],
            }),
        ],
    });
}
var P = l(696016),
    z = l(973177);
let _ = { [P.yz.ORIGINAL]: null, [P.yz.PORTRAIT_9_16]: 9 / 16, [P.yz.LANDSCAPE_16_9]: 16 / 9 };
function $() {
    let { cropPreset: e, videoPlayerRef: t } = (0, x.T)(),
        l = n.useRef(null),
        i = n.useRef(null);
    return (
        n.useEffect(() => {
            let a = l.current;
            if (null == a) return;
            function n() {
                if (null == a) return;
                let l = a.parentElement,
                    n = i.current;
                if (null == l || null == n) return;
                let s = l.getBoundingClientRect(),
                    r = (t.current?.videoElement ?? l).getBoundingClientRect(),
                    o = r.left - s.left,
                    c = r.top - s.top,
                    u = _[e],
                    d = o,
                    m = c,
                    h = r.width,
                    f = r.height;
                (null != u &&
                    ((f = (h = Math.min(r.width, r.height * u)) / u),
                    (d = o + (r.width - h) / 2),
                    (m = c + (r.height - f) / 2)),
                    (n.style.left = `${d}px`),
                    (n.style.top = `${m}px`),
                    (n.style.width = `${h}px`),
                    (n.style.height = `${f}px`));
            }
            n();
            let s = new ResizeObserver(n);
            s.observe(a.parentElement ?? a);
            let r = t.current?.videoElement;
            return (
                null != r && s.observe(r),
                window.addEventListener("resize", n),
                () => {
                    (s.disconnect(), window.removeEventListener("resize", n));
                }
            );
        }, [e, t]),
        (0, a.jsx)("div", { ref: l, className: z.pC, children: (0, a.jsx)("div", { ref: i, className: z.E$ }) })
    );
}
var U = l(503698),
    G = l.n(U),
    H = l(435558),
    B = l(831453),
    X = l(607345);
let F = [
    { key: "topStart", className: X.On },
    { key: "topEnd", className: X.zI },
    { key: "bottomEnd", className: X.TP },
    { key: "bottomStart", className: X.kb },
];
function V(e) {
    let {
            label: t,
            position: l,
            rotationDeg: i,
            scale: s,
            minScale: o,
            maxScale: c,
            sizing: u,
            aspectRatio: d,
            resizable: m = !0,
            selected: h,
            visible: f,
            onSelect: v,
            onChange: p,
            children: g,
        } = e,
        j = n.useRef(null),
        b = n.useRef(null),
        C = n.useRef(null),
        y = n.useRef(l),
        w = n.useRef(i),
        N = n.useRef(s),
        E = n.useRef(d),
        k = n.useCallback(
            (e) => {
                let t,
                    l = b.current;
                if (null == l) return;
                let { x: a, y: n } = y.current;
                if (
                    ((l.style.left = `${e.left + a * e.width}px`),
                    (l.style.top = `${e.top + n * e.height}px`),
                    (l.style.transform = `translate(-50%, -50%) rotate(${w.current}deg)`),
                    "fixed" === u)
                ) {
                    ((t = N.current * e.width), (l.style.width = `${t}px`));
                    let a = E.current;
                    l.style.height = null != a && a > 0 ? `${t / a}px` : "auto";
                } else ((t = N.current * e.height), (l.style.fontSize = `${t}px`));
                l.style.setProperty("--clip-track-scale", `${t}px`);
            },
            [u],
        ),
        A = (function (e, t) {
            let { videoPlayerRef: l } = (0, x.T)(),
                a = n.useRef(null);
            return (
                n.useEffect(() => {
                    let n = e.current?.parentElement;
                    if (null == n) return;
                    function i() {
                        if (null == n) return;
                        let e = n.getBoundingClientRect(),
                            i = (l.current?.videoElement ?? n).getBoundingClientRect(),
                            s = { left: i.left - e.left, top: i.top - e.top, width: i.width, height: i.height };
                        ((a.current = s), t(s));
                    }
                    i();
                    let s = new ResizeObserver(i);
                    s.observe(n);
                    let r = l.current?.videoElement;
                    return (
                        null != r && s.observe(r),
                        window.addEventListener("resize", i),
                        () => {
                            (s.disconnect(), window.removeEventListener("resize", i));
                        }
                    );
                }, [e, t, l]),
                a
            );
        })(j, k);
    n.useEffect(() => {
        ((y.current = l), (w.current = i), (N.current = s), (E.current = d));
        let e = A.current;
        null != e && k(e);
    }, [l, i, s, d, k, A]);
    let L = n.useCallback(
            (e) => {
                let t = C.current,
                    l = A.current,
                    a = j.current?.getBoundingClientRect();
                if (null != t && null != l && null != a)
                    switch (t.mode) {
                        case "move":
                            p({
                                position: {
                                    x: (0, H.clamp)((e.clientX - a.left - l.left) / l.width - t.grabOffset.x, 0, 1),
                                    y: (0, H.clamp)((e.clientY - a.top - l.top) / l.height - t.grabOffset.y, 0, 1),
                                },
                            });
                            break;
                        case "scale": {
                            if (0 === t.startDistance) return;
                            let l = Math.hypot(e.clientX - t.centerX, e.clientY - t.centerY);
                            p({ scale: (0, H.clamp)((t.baseScale * l) / t.startDistance, o, c) });
                            break;
                        }
                        case "rotate": {
                            let l = K(t.centerX, t.centerY, e.clientX, e.clientY);
                            p({ rotationDeg: (0, P.Ew)(t.baseRotationDeg + l - t.startAngleDeg) });
                        }
                    }
            },
            [p, o, c, A],
        ),
        R = n.useCallback(() => {
            C.current = null;
        }, []);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", L),
            document.addEventListener("mouseup", R),
            () => {
                (document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", R));
            }
        ),
        [L, R],
    );
    let I = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), t.preventDefault(), v(), b.current?.focus({ preventScroll: !0 }));
                let a = A.current,
                    n = j.current?.getBoundingClientRect();
                if (null == a || null == n || 0 === a.width || 0 === a.height) return;
                let r = n.left + a.left + l.x * a.width,
                    o = n.top + a.top + l.y * a.height;
                C.current = {
                    mode: e,
                    centerX: r,
                    centerY: o,
                    baseRotationDeg: i,
                    baseScale: s,
                    grabOffset: {
                        x: (t.clientX - n.left - a.left) / a.width - l.x,
                        y: (t.clientY - n.top - a.top) / a.height - l.y,
                    },
                    startDistance: Math.hypot(t.clientX - r, t.clientY - o),
                    startAngleDeg: K(r, o, t.clientX, t.clientY),
                };
            },
            [v, l, i, s, A],
        ),
        M = n.useCallback(
            (e) => {
                if (e.altKey) {
                    let t = 0;
                    if ("ArrowLeft" === e.key) t = -1;
                    else {
                        if ("ArrowRight" !== e.key) return;
                        t = 1;
                    }
                    (e.preventDefault(), e.stopPropagation(), p({ rotationDeg: (0, P.Ew)(i + t * P.p4) }));
                    return;
                }
                let t = e.shiftKey ? 0.05 : 0.01,
                    a = 0,
                    n = 0;
                switch (e.key) {
                    case "ArrowLeft":
                        a = -t;
                        break;
                    case "ArrowRight":
                        a = t;
                        break;
                    case "ArrowUp":
                        n = -t;
                        break;
                    case "ArrowDown":
                        n = t;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(),
                    e.stopPropagation(),
                    p({ position: { x: (0, H.clamp)(l.x + a, 0, 1), y: (0, H.clamp)(l.y + n, 0, 1) } }));
            },
            [p, l, i],
        );
    return (0, a.jsx)("div", {
        ref: j,
        className: X.DW,
        children: (0, a.jsxs)(r.D, {
            innerRef: b,
            className: G()(X.aP, { [X.$A]: h }),
            style: { display: f ? void 0 : "none" },
            "aria-label": t,
            "aria-keyshortcuts": "Alt+ArrowLeft Alt+ArrowRight",
            onClick: v,
            onMouseDown: I("move"),
            onKeyDown: M,
            children: [
                g,
                h &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", { "aria-hidden": !0, className: X.t$ }),
                            (0, a.jsx)("div", {
                                "aria-hidden": !0,
                                className: X.oT,
                                onMouseDown: I("rotate"),
                                children: (0, a.jsx)(B.H, { size: "xxs", color: "currentColor" }),
                            }),
                            m &&
                                F.map((e) => {
                                    let { key: t, className: l } = e;
                                    return (0, a.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: G()(X.ZV, l), onMouseDown: I("scale") },
                                        t,
                                    );
                                }),
                        ],
                    }),
            ],
        }),
    });
}
function K(e, t, l, a) {
    return (180 * Math.atan2(a - t, l - e)) / Math.PI;
}
var W = l(699269),
    Z = l(268378),
    Y = l(375708),
    J = l(545052);
function Q(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: s } = (0, x.T)(),
        { updateImageTrackData: r } = (0, W.fn)(),
        o = s(),
        { src: c, position: u, rotationDeg: d, widthFraction: m, naturalWidth: h, naturalHeight: f } = t.data,
        v = t.data.shadow ?? P.xy,
        p = t.data.shadowColor ?? P.pk,
        g = n.useCallback(
            (e) => {
                let { position: l, rotationDeg: a, scale: n } = e;
                r(t.id, (e) => ({
                    ...e,
                    position: l ?? e.position,
                    rotationDeg: a ?? e.rotationDeg,
                    widthFraction: n ?? e.widthFraction,
                }));
            },
            [r, t.id],
        ),
        j = o >= t.startSec - 0.05 && o <= t.endSec + 0.05,
        b = P.EC[v],
        C =
            b > 0
                ? `drop-shadow(0 calc(${b * P.HA} * var(--clip-track-scale)) calc(${b} * var(--clip-track-scale)) ${p})`
                : void 0;
    return (0, a.jsx)(V, {
        label: Y.intl.formatToPlainString(Z.default.lZuIri, { fileName: t.data.fileName }),
        position: u,
        rotationDeg: d,
        scale: m,
        minScale: P.DX,
        maxScale: P.nS,
        sizing: "fixed",
        aspectRatio: h / f,
        selected: l,
        visible: j,
        onSelect: i,
        onChange: g,
        children: (0, a.jsx)("img", {
            className: J.S,
            src: c,
            alt: "",
            "aria-hidden": !0,
            draggable: !1,
            style: { filter: C },
        }),
    });
}
var q = l(637526);
function ee(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: s } = (0, x.T)(),
        { updateTextTrackData: r } = (0, W.fn)(),
        o = s(),
        { text: c, position: u, style: d } = t.data,
        m = t.data.rotationDeg ?? P.ad,
        h = n.useCallback(
            (e) => {
                let { position: l, rotationDeg: a, scale: n } = e;
                r(t.id, (e) => ({
                    ...e,
                    position: l ?? e.position,
                    rotationDeg: a ?? e.rotationDeg,
                    style: null != n ? { ...e.style, fontSize: n } : e.style,
                }));
            },
            [r, t.id],
        ),
        f = o >= t.startSec - 0.05 && o <= t.endSec + 0.05,
        v = P.mO[d.strokeWidth];
    return (0, a.jsxs)(V, {
        label: Y.intl.formatToPlainString(Z.default.EDmwVf, { text: c }),
        position: u,
        rotationDeg: m,
        scale: d.fontSize,
        minScale: P.z2,
        maxScale: P.T7,
        sizing: "content",
        resizable: !1,
        selected: l,
        visible: f,
        onSelect: i,
        onChange: h,
        children: [
            v > 0 &&
                (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    className: q.C,
                    style: {
                        color: d.strokeColor,
                        WebkitTextStrokeColor: d.strokeColor,
                        WebkitTextStrokeWidth: `${v}em`,
                    },
                    children: c,
                }),
            (0, a.jsx)("span", { className: q.L, style: { color: d.color }, children: c }),
        ],
    });
}
l(321073);
var et = l(702841),
    el = l(408278),
    ea = l(461150),
    en = l(782134),
    ei = l(113494),
    es = l(898196),
    er = l(559106),
    eo = l(765671),
    ec = l(531685),
    eu = l(335494),
    ed = l(589049),
    em = l(591246);
function eh(e) {
    let {
            label: t,
            text: l,
            color: i,
            startSec: s,
            endSec: o,
            totalDurationSec: c,
            selected: u,
            onSelect: d,
            onChangeRange: m,
        } = e,
        h = n.useRef(null),
        f = n.useRef(null),
        [x, v] = n.useState(null),
        p = n.useCallback(() => {
            let e = h.current;
            if (null == e) return 0;
            let t = e.getBoundingClientRect();
            return 0 === t.width ? 0 : c / t.width;
        }, [c]),
        g = n.useCallback(
            (e) => {
                let t = f.current;
                if (null == t) return;
                let l = (e.clientX - t.clientX) * p();
                if ("start" === t.mode) m((0, H.clamp)(t.initialStart + l, 0, t.initialEnd - P.Cx), t.initialEnd);
                else if ("end" === t.mode) {
                    let e = (0, H.clamp)(t.initialEnd + l, t.initialStart + P.Cx, c);
                    m(t.initialStart, e);
                } else {
                    let e = t.initialEnd - t.initialStart,
                        a = (0, H.clamp)(t.initialStart + l, 0, c - e);
                    m(a, a + e);
                }
            },
            [p, m, c],
        ),
        j = n.useCallback(() => {
            ((f.current = null), v(null));
        }, []);
    n.useEffect(() => {
        if (null != x)
            return (
                document.addEventListener("mousemove", g),
                document.addEventListener("mouseup", j),
                () => {
                    (document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", j));
                }
            );
    }, [x, g, j]);
    let C = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(),
                    d(),
                    (f.current = { mode: e, clientX: t.clientX, initialStart: s, initialEnd: o }),
                    v(e));
            },
            [d, s, o],
        ),
        y = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = o - s,
                    a = !1,
                    n = s;
                ("ArrowLeft" === e.key
                    ? ((a = !0), (n = (0, H.clamp)(s - t, 0, c - l)))
                    : "ArrowRight" === e.key && ((a = !0), (n = (0, H.clamp)(s + t, 0, c - l))),
                    a && (e.preventDefault(), e.stopPropagation(), m(n, n + l)));
            },
            [s, o, c, m],
        ),
        w = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    a = s;
                ("ArrowLeft" === e.key
                    ? ((l = !0), (a = (0, H.clamp)(s - t, 0, o - P.Cx)))
                    : "ArrowRight" === e.key && ((l = !0), (a = (0, H.clamp)(s + t, 0, o - P.Cx))),
                    l && (e.preventDefault(), e.stopPropagation(), m(a, o)));
            },
            [s, o, m],
        ),
        N = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    a = o;
                ("ArrowLeft" === e.key
                    ? ((l = !0), (a = (0, H.clamp)(o - t, s + P.Cx, c)))
                    : "ArrowRight" === e.key && ((l = !0), (a = (0, H.clamp)(o + t, s + P.Cx, c))),
                    l && (e.preventDefault(), e.stopPropagation(), m(s, a)));
            },
            [s, o, c, m],
        ),
        E = 0 === c ? 0 : (s / c) * 100,
        k = 0 === c ? 0 : ((o - s) / c) * 100;
    return (0, a.jsx)("div", {
        className: em.nM,
        children: (0, a.jsxs)("div", {
            ref: h,
            className: em.hz,
            children: [
                (0, a.jsx)(er.vN, {
                    children: (0, a.jsx)(r.D, {
                        className: G()(em.u4, { [em.jX]: u }),
                        style: { left: `${E}%`, width: `${k}%`, backgroundColor: i },
                        onMouseDown: C("move"),
                        onKeyDown: y,
                        "aria-label": t,
                        children: (0, a.jsx)("div", {
                            className: em.Kq,
                            children: (0, a.jsx)(b.E, {
                                variant: "text-sm/medium",
                                color: "none",
                                className: em.Vd,
                                children: l,
                            }),
                        }),
                    }),
                }),
                (0, a.jsx)(er.vN, {
                    children: (0, a.jsx)("button", {
                        className: em.YQ,
                        style: { left: `${E}%` },
                        onMouseDown: C("start"),
                        onKeyDown: w,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": 0,
                        "aria-valuenow": s,
                        "aria-valuemax": o - P.Cx,
                        "aria-label": t,
                        children: (0, a.jsx)("div", { className: em.gt }),
                    }),
                }),
                (0, a.jsx)(er.vN, {
                    children: (0, a.jsx)("button", {
                        className: em.JZ,
                        style: { left: `${E + k}%` },
                        onMouseDown: C("end"),
                        onKeyDown: N,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": s + P.Cx,
                        "aria-valuenow": o,
                        "aria-valuemax": c,
                        "aria-label": t,
                        children: (0, a.jsx)("div", { className: em.gt }),
                    }),
                }),
            ],
        }),
    });
}
var ef = l(711127),
    ex = l(503535);
function ev(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return ((t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`);
}
function ep(e) {
    let t = Math.floor(e / 60),
        l = Y.intl.formatToPlainString(Y.t.iXLF9W, { minutes: t }),
        a = Y.intl.formatToPlainString(Y.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
function eg(e) {
    let { voiceAudioTracks: t, transitionState: l } = e,
        {
            useCurrentTime: i,
            duration: s,
            isPlaying: r,
            cropStart: o,
            cropEnd: c,
            cropDuration: u,
            setCropStart: d,
            setCropEnd: m,
            play: h,
            pause: v,
            subscribe: p,
            seek: g,
            clip: j,
            generateThumbnails: C,
            videoDimensions: y,
        } = (0, x.T)(),
        { tracks: w, selectedTrackId: N, setSelectedTrackId: E, updateTrackRange: k } = (0, W.fn)(),
        A = i(),
        [L, R] = n.useState(null),
        I = n.useRef(null),
        M = n.useRef(null),
        [T, D] = n.useState(!1),
        [S, O] = n.useState(null);
    n.useEffect(
        () =>
            p({
                onPlay: () => {
                    (R(null), D(!1));
                },
            }),
        [p],
    );
    let { ref: z, width: _ = 0, height: $ = 0 } = (0, eo.Ay)(),
        U = (0, et.bG)([ec.A], () => ec.A.windowSize()),
        B = n.useRef(null),
        X = n.useCallback(() => {
            let e = z.current;
            null != e && O(e.getBoundingClientRect());
        }, [z]);
    (n.useMemo(() => {
        (U.width, U.height, X());
    }, [U.width, U.height, _, l, X]),
        n.useEffect(() => {
            let e = B.current;
            if (null != e) return (e.addEventListener("scroll", X), () => e.removeEventListener("scroll", X));
        }, [X]));
    let F = n.useCallback(
            (e, t) => {
                if (null == s || null == S) return;
                let l = (((0, H.clamp)(e, S.left, S.right) - S.left) / S.width) * s,
                    a = (0, H.clamp)(l, 0, s),
                    n = L;
                (null == n && t && ((n = "playhead"), r && (v(), D(!0)), R(n)),
                    "start" === n ? d(a) : "end" === n ? m(a) : "playhead" === n && g((0, H.clamp)(a, o, c)));
            },
            [s, S, L, o, c, r, v, d, m, g],
        ),
        V = n.useCallback(
            (e) => {
                if (null == s) return;
                let t = (0, f.A)(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        ((l = !0), d(o - t));
                        break;
                    case "ArrowRight":
                        ((l = !0), d(o + t));
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, d, o],
        ),
        K = n.useCallback(
            (e) => {
                if (null == s) return;
                let t = (0, f.A)(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        ((l = !0), m(c - t));
                        break;
                    case "ArrowRight":
                        ((l = !0), m(c + t));
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, m, c],
        ),
        J = n.useCallback(
            (e) => {
                F(e.clientX, !0);
            },
            [F],
        ),
        Q = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), r && (v(), D(!0)), R(e));
            },
            [r, v],
        ),
        q = n.useCallback(
            (e) => {
                F(e.clientX, !1);
            },
            [F],
        ),
        ee = n.useCallback(() => {
            (T && h(), D(!1), R(null));
        }, [T, h]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", q),
            document.addEventListener("mouseup", ee),
            () => {
                (document.removeEventListener("mousemove", q), document.removeEventListener("mouseup", ee));
            }
        ),
        [q, ee],
    );
    let { numberOfPreviews: em, timelinePreviewWidth: eg } = n.useMemo(() => {
        if (null == y) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil($ * (y.width / y.height));
        return { numberOfPreviews: Math.ceil(_ / e), timelinePreviewWidth: e };
    }, [$, _, y]);
    n.useEffect(() => {
        if (0 === em || 0 === eg) return;
        let e = z.current;
        if (null == e) return;
        ((e.height = $), (e.width = _));
        let t = e.getContext("2d");
        if (null == t) return;
        ((t.fillStyle = "transparent"), t.fillRect(0, 0, _, $));
        let l = [];
        for (let e = 0; e < em; e++) l.push((eg / _) * s * e);
        return C(l, eg, $, (e) => {
            for (let l = 0; l < e.length; l++) (t.drawImage(e[l], eg * l, 0, eg, $), e[l].close());
        });
    }, [$, z, s, em, eg, C, _]);
    let ej = A - o,
        eb = n.useCallback(() => {
            g(Math.max(o, A - 10));
        }, [o, A, g]),
        eC = n.useCallback(() => {
            g(Math.min(c, A + 10));
        }, [c, A, g]),
        ey = n.useCallback(() => {
            r ? v() : h();
        }, [r, h, v]),
        ew = (o / s) * 100,
        eN = (1 - (s - c) / s) * 100,
        eE = {
            background: `linear-gradient(to right, var(--black-500) ${ew}%, transparent ${ew}%, transparent ${eN}%, var(--black-500) ${eN}%)`,
        };
    return (0, a.jsxs)("div", {
        className: ex.f4,
        children: [
            (0, a.jsx)("div", { className: ex.qs }),
            (0, a.jsxs)("div", {
                className: ex.lx,
                children: [
                    (0, a.jsx)("div", {
                        className: ex.k2,
                        children: (0, a.jsx)("div", {
                            ref: M,
                            className: ex.re,
                            children: (0, a.jsxs)(b.E, {
                                variant: "text-xs/medium",
                                className: ex.g7,
                                color: "text-muted",
                                children: [
                                    (0, a.jsx)("span", { className: ex.$k, children: ev(ej) }),
                                    (0, a.jsx)("span", { className: ex.xW, children: " / " }),
                                    ev(u),
                                ],
                            }),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: ex.s2,
                        children: [
                            (0, a.jsx)(el.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: ea.q,
                                onClick: eb,
                                "aria-label": Y.intl.string(ef.default["dRVF+Z"]),
                            }),
                            (0, a.jsx)(el.K, {
                                size: "sm",
                                icon: r ? ei.PauseIcon : en.PlayIcon,
                                onClick: ey,
                                "aria-label": Y.intl.string(r ? Y.t.ZcgDJX : Y.t.RscU7I),
                                variant: "icon-only",
                            }),
                            (0, a.jsx)(el.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: es.i,
                                onClick: eC,
                                "aria-label": Y.intl.string(ef.default.yV2FLL),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ex.fL,
                ref: B,
                children: [
                    (0, a.jsx)(ed.A, { onMouseDown: J, videoLength: s, clip: j, noBottomMargin: !0, compact: !0 }),
                    (0, a.jsx)(eu.A, {
                        onMouseDown: J,
                        voiceAudioTracks: t,
                        clipId: j.id,
                        className: ex.ou,
                        alwaysRenderContainer: !0,
                    }),
                    (0, a.jsx)("div", {
                        className: ex.iI,
                        children: (0, a.jsxs)("div", {
                            className: ex.Qp,
                            children: [
                                (0, a.jsx)("div", { className: ex.bd }),
                                (0, a.jsx)("div", {
                                    className: ex.PH,
                                    children: (0, a.jsxs)("div", {
                                        className: G()(ex.IO, { [ex.Dg]: null != L }),
                                        onMouseDown: J,
                                        children: [
                                            (0, a.jsx)("canvas", { className: ex.Ay, ref: z }),
                                            (0, a.jsx)(er.vN, {
                                                children: (0, a.jsx)("div", {
                                                    tabIndex: 0,
                                                    ref: I,
                                                    className: ex.lG,
                                                    children: (0, a.jsx)("svg", {
                                                        className: ex.$6,
                                                        width: "10",
                                                        height: "7.5",
                                                        viewBox: "0 0 8 6",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, a.jsx)("path", {
                                                            d: "M0 0.999999C0 0.447714 0.447715 0 1 0H7C7.55228 0 8 0.447715 8 1V2.5998C8 2.9209 7.8458 3.22248 7.58549 3.41048L4.58549 5.57715C4.23598 5.82957 3.76402 5.82957 3.41451 5.57715L0.41451 3.41048C0.154198 3.22248 0 2.9209 0 2.5998V0.999999Z",
                                                            fill: "currentColor",
                                                        }),
                                                    }),
                                                }),
                                            }),
                                            (0, a.jsx)("div", { className: ex.QT, style: eE }),
                                            (0, a.jsxs)("div", {
                                                className: ex.Ws,
                                                style: {
                                                    left: null != s ? `${(o / s) * 100}%` : "0",
                                                    right: null != s ? `${((s - c) / s) * 100}%` : "0",
                                                },
                                                children: [
                                                    (0, a.jsx)(er.vN, {
                                                        children: (0, a.jsxs)("button", {
                                                            className: ex.uI,
                                                            onMouseDown: Q("start"),
                                                            onKeyDown: V,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": 0,
                                                            "aria-valuenow": o,
                                                            "aria-valuetext": ep(o),
                                                            "aria-valuemax": c - P.zj,
                                                            "aria-label": Y.intl.string(Y.t["+BTvw8"]),
                                                            children: [
                                                                (0, a.jsx)("div", { className: ex.FV }),
                                                                (0, a.jsxs)("svg", {
                                                                    className: ex.lm,
                                                                    width: "8",
                                                                    height: "56",
                                                                    viewBox: "0 0 8 56",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    "aria-hidden": !0,
                                                                    children: [
                                                                        (0, a.jsx)("path", {
                                                                            d: "M0 48C1.93283e-07 52.4183 3.58172 56 8 56H0V48Z",
                                                                        }),
                                                                        (0, a.jsx)("path", {
                                                                            d: "M8 0C3.58172 0 0 3.58172 0 8V0H8Z",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, a.jsx)(er.vN, {
                                                        children: (0, a.jsxs)("button", {
                                                            className: ex.H1,
                                                            onMouseDown: Q("end"),
                                                            onKeyDown: K,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": o + P.zj,
                                                            "aria-valuenow": c,
                                                            "aria-valuetext": ep(c),
                                                            "aria-valuemax": s,
                                                            "aria-label": Y.intl.string(Y.t.bBgBYo),
                                                            children: [
                                                                (0, a.jsx)("div", { className: ex.kn }),
                                                                (0, a.jsxs)("svg", {
                                                                    className: ex.mN,
                                                                    width: "8",
                                                                    height: "56",
                                                                    viewBox: "0 0 8 56",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    "aria-hidden": !0,
                                                                    children: [
                                                                        (0, a.jsx)("path", {
                                                                            d: "M8 48C8 52.4183 4.41828 56 0 56H8V48Z",
                                                                        }),
                                                                        (0, a.jsx)("path", {
                                                                            d: "M0 0C4.41828 0 8 3.58172 8 8V0H0Z",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                w.map((e) =>
                                    (0, a.jsx)(
                                        eh,
                                        {
                                            label: (function (e) {
                                                switch (e) {
                                                    case P.Me.TEXT:
                                                        return Y.intl.string(Z.default.WvkbtB);
                                                    case P.Me.IMAGE:
                                                        return Y.intl.string(Z.default.heHHUW);
                                                    default:
                                                        return "";
                                                }
                                            })(e.type),
                                            text: (function (e) {
                                                switch (e.type) {
                                                    case P.Me.TEXT:
                                                        return e.data.text;
                                                    case P.Me.IMAGE:
                                                        return e.data.fileName;
                                                    default:
                                                        return "";
                                                }
                                            })(e),
                                            color: P.mY[e.type],
                                            startSec: e.startSec,
                                            endSec: e.endSec,
                                            totalDurationSec: s,
                                            selected: N === e.id,
                                            onSelect: () => E(e.id),
                                            onChangeRange: (t, l) => k(e.id, t, l),
                                        },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ej = l(933092);
function eb(e) {
    let { transitionState: t } = e,
        {
            cropStart: l,
            cropEnd: v,
            videoPlayerRef: g,
            videoURL: j,
            audioTracks: b,
            clip: C,
            activeTool: y,
            cropPreset: w,
            videoDimensions: N,
        } = (0, x.T)(),
        { analyticsLocations: E } = (0, c.Ay)(o.A.CLIPS_EDITOR),
        { tracks: k, selectedTrackId: A, setSelectedTrackId: L } = (0, W.fn)(),
        R = C.type === P.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!R) return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            let t = g.current;
            if (null == t) return;
            let a = g.current?.videoElement;
            if (null == a) return;
            let n = (0, f.A)(a.duration, e.shiftKey),
                s = !1;
            switch (e.key) {
                case " ":
                    ((s = !0), a.paused ? t.play() : t.pause());
                    break;
                case "ArrowLeft":
                    ((s = !0), t.seek(Math.max(l, a.currentTime - n)));
                    break;
                case "ArrowRight":
                    ((s = !0), t.seek(Math.min(v, a.currentTime + n)));
            }
            s && (e.stopPropagation(), e.preventDefault());
        }
    }, [g, R, C.type, l, v]);
    let I = n.useMemo(() => b.filter((e) => e.trackName.includes(":voice")), [b]),
        M = n.useCallback(() => {
            (0, u.R)(
                {
                    items: [{ type: "IMAGE", url: C.thumbnail, proxyUrl: C.thumbnail, alt: C.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [C.thumbnail, C.name]);
    if (R)
        return (0, a.jsxs)("div", {
            className: z.OJ,
            children: [
                (0, a.jsx)(p, {}),
                t !== s.ip.ENTERED
                    ? (0, a.jsx)(m.A, {})
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(O, {}),
                              (0, a.jsx)("div", {
                                  className: ej.zT,
                                  children: (0, a.jsx)(r.D, {
                                      className: ej.xS,
                                      onClick: M,
                                      children: (0, a.jsx)("img", {
                                          className: ej.V_,
                                          src: C.thumbnail,
                                          alt: C.name ?? "",
                                      }),
                                  }),
                              }),
                          ],
                      }),
            ],
        });
    let T = null == j || t !== s.ip.ENTERED,
        D = C.type === P.nQ.VOICE_CLIP,
        S = y === d.Y.CROP,
        _ = null != N ? N.width / N.height : null,
        U = S
            ? _
            : (function (e, t) {
                  switch (e) {
                      case P.yz.PORTRAIT_9_16:
                          return 9 / 16;
                      case P.yz.LANDSCAPE_16_9:
                          return 16 / 9;
                      case P.yz.ORIGINAL:
                      default:
                          return t;
                  }
              })(w, _),
        G = null;
    return (
        (G =
            S && !D
                ? (0, a.jsx)($, {})
                : k.map((e) => {
                      switch (e.type) {
                          case P.Me.TEXT:
                              return (0, a.jsx)(ee, { track: e, selected: e.id === A, onSelect: () => L(e.id) }, e.id);
                          case P.Me.IMAGE:
                              return (0, a.jsx)(Q, { track: e, selected: e.id === A, onSelect: () => L(e.id) }, e.id);
                          default:
                              return null;
                      }
                  })),
        (0, a.jsx)(c.f5, {
            value: E,
            children: (0, a.jsxs)("div", {
                className: z.OJ,
                children: [
                    (0, a.jsx)(p, {}),
                    (0, a.jsx)("div", {
                        className: z.zT,
                        children: T
                            ? (0, a.jsx)(m.A, {})
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(O, {}),
                                      (0, a.jsx)("div", {
                                          className: z.x3,
                                          children: (0, a.jsx)(h.A, {
                                              ref: g,
                                              cropFraming: !D,
                                              frameAspectRatio: U,
                                              overlay: G,
                                              loop: !1,
                                          }),
                                      }),
                                      (0, a.jsx)("div", {
                                          className: z.fL,
                                          children: (0, a.jsx)(eg, { transitionState: t, voiceAudioTracks: I }),
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
        })
    );
}
