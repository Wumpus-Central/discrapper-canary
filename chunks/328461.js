l.d(t, { A: () => ef });
var n = l(477900),
    a = l(582128),
    i = l(621466),
    s = l(231723),
    r = l(939249),
    c = l(793574),
    o = l(688810),
    u = l(256905),
    d = l(635793),
    m = l(530574),
    f = l(675747),
    h = l(584794),
    x = l(362081),
    v = l(56416);
let p = () => {
    let { clip: e } = (0, x.T)();
    return "" !== e.thumbnail
        ? (0, n.jsx)("img", { className: v.T, src: e.thumbnail, alt: "", "aria-hidden": !0 })
        : null;
};
var g = l(17928),
    j = l(342952),
    C = l(834730),
    b = l(778712),
    y = l(429913),
    E = l(47167),
    N = l(713654),
    k = l(769015),
    w = l(145497),
    A = l(734057),
    L = l(71393),
    R = l(287809),
    T = l(58703),
    I = l(403362),
    M = l(818433),
    D = l(827461);
function S(e) {
    let { icon: t, label: l } = e;
    return (0, n.jsxs)("div", {
        className: D.Ho,
        children: [
            null != t && (0, n.jsx)("div", { className: D.t8, children: t }),
            (0, n.jsx)(C.E, { variant: "text-xs/normal", color: "text-muted", className: D.Mk, children: l }),
        ],
    });
}
function O() {
    let { clip: e } = (0, x.T)(),
        t = (0, y.h)(e.applicationId),
        l = (0, g.yK)([R.default], () => e.users.map(R.default.getUser).filter(I.Vq)),
        a = (0, g.bG)([L.A], () => (null != e.guildId ? L.A.getGuild(e.guildId) : null)),
        i = (0, g.bG)([A.A], () => (null != e.channelId ? A.A.getChannel(e.channelId) : null)),
        s = (0, E.Ay)(i),
        r = null != i ? (0, N.gU)(i, a) : null,
        c = t?.name ?? e.applicationName,
        o =
            null != i && null != r
                ? (0, n.jsx)(r, { size: "custom", width: 16, height: 16, color: "currentColor" })
                : null;
    return (0, n.jsxs)("div", {
        className: D.wx,
        children: [
            (0, n.jsx)(M.A, { variant: "text-md/medium", className: D.DD }),
            (0, n.jsxs)("div", {
                className: D.KW,
                children: [
                    null != c &&
                        "" !== c &&
                        (0, n.jsx)(S, {
                            icon: null != t ? (0, n.jsx)(k.A, { game: t, size: k.M.XXSMALL }) : void 0,
                            label: c,
                        }),
                    null != a && (0, n.jsx)(S, { icon: (0, n.jsx)(w.Ay, { guild: a, iconSize: 16 }), label: a.name }),
                    null != o && (0, n.jsx)(S, { icon: o, label: s ?? "" }),
                    (0, n.jsx)(S, { label: (0, T.mk)(new Date(e.createdAt)) }),
                    l.length > 0 &&
                        (0, n.jsx)("div", {
                            className: D.Ho,
                            children: (0, n.jsx)(j.A, { users: l, maxUsers: 10, size: b._3.SIZE_16 }),
                        }),
                ],
            }),
        ],
    });
}
var P = l(696016),
    _ = l(136826);
let z = { [P.yz.ORIGINAL]: null, [P.yz.PORTRAIT_9_16]: 9 / 16, [P.yz.LANDSCAPE_16_9]: 16 / 9 };
function U() {
    let { cropPreset: e, videoPlayerRef: t } = (0, x.T)(),
        l = a.useRef(null),
        i = a.useRef(null);
    return (
        a.useEffect(() => {
            let n = l.current;
            if (null == n) return;
            function a() {
                if (null == n) return;
                let l = n.parentElement,
                    a = i.current;
                if (null == l || null == a) return;
                let s = l.getBoundingClientRect(),
                    r = (t.current?.videoElement ?? l).getBoundingClientRect(),
                    c = r.left - s.left,
                    o = r.top - s.top,
                    u = z[e],
                    d = c,
                    m = o,
                    f = r.width,
                    h = r.height;
                null != u &&
                    ((h = (f = Math.min(r.width, r.height * u)) / u),
                    (d = c + (r.width - f) / 2),
                    (m = o + (r.height - h) / 2)),
                    (a.style.left = `${d}px`),
                    (a.style.top = `${m}px`),
                    (a.style.width = `${f}px`),
                    (a.style.height = `${h}px`);
            }
            a();
            let s = new ResizeObserver(a);
            s.observe(n.parentElement ?? n);
            let r = t.current?.videoElement;
            return (
                null != r && s.observe(r),
                window.addEventListener("resize", a),
                () => {
                    s.disconnect(), window.removeEventListener("resize", a);
                }
            );
        }, [e, t]),
        (0, n.jsx)("div", { ref: l, className: _.pC, children: (0, n.jsx)("div", { ref: i, className: _.E$ }) })
    );
}
var $ = l(503698),
    B = l.n($),
    G = l(435558),
    H = l(801835),
    V = l(112961);
function K(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { videoPlayerRef: s, useCurrentTime: r } = (0, x.T)(),
        { updateTextTrackData: c } = (0, H.fn)(),
        o = r(),
        u = a.useRef(null),
        d = a.useRef(null),
        m = a.useRef(null),
        f = a.useRef(!1),
        h = a.useRef({ x: 0, y: 0 }),
        { position: v } = t.data,
        p = a.useRef(v),
        g = a.useCallback(() => {
            let e = m.current,
                t = d.current;
            if (null == e || null == t) return;
            let { x: l, y: n } = p.current;
            (t.style.left = `${e.left + l * e.width}px`), (t.style.top = `${e.top + n * e.height}px`);
        }, []),
        j = a.useCallback(() => {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = t.getBoundingClientRect(),
                n = (s.current?.videoElement ?? t).getBoundingClientRect();
            (m.current = { left: n.left - l.left, top: n.top - l.top, width: n.width, height: n.height }), g();
        }, [s, g]);
    a.useEffect(() => {
        let e = u.current;
        if (null == e) return;
        j();
        let t = new ResizeObserver(j);
        t.observe(e.parentElement ?? e);
        let l = s.current?.videoElement;
        return (
            null != l && t.observe(l),
            window.addEventListener("resize", j),
            () => {
                t.disconnect(), window.removeEventListener("resize", j);
            }
        );
    }, [j, s]),
        a.useEffect(() => {
            (p.current = v), g();
        }, [v, g]);
    let C = a.useCallback(
            (e) => {
                if (!f.current) return;
                let l = m.current;
                if (null == l) return;
                let n = u.current,
                    a = n?.getBoundingClientRect();
                if (null == a) return;
                let i = (0, G.clamp)((e.clientX - a.left - l.left) / l.width - h.current.x, 0, 1),
                    s = (0, G.clamp)((e.clientY - a.top - l.top) / l.height - h.current.y, 0, 1);
                c(t.id, (e) => ({ ...e, position: { x: i, y: s } }));
            },
            [c, t.id],
        ),
        b = a.useCallback(() => {
            f.current = !1;
        }, []);
    a.useEffect(
        () => (
            document.addEventListener("mousemove", C),
            document.addEventListener("mouseup", b),
            () => {
                document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", b);
            }
        ),
        [C, b],
    );
    let y = a.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), i();
                let t = m.current,
                    l = u.current?.getBoundingClientRect();
                if (null != t && null != l && t.width > 0 && t.height > 0) {
                    let n = (e.clientX - l.left - t.left) / t.width,
                        a = (e.clientY - l.top - t.top) / t.height;
                    h.current = { x: n - v.x, y: a - v.y };
                } else h.current = { x: 0, y: 0 };
                f.current = !0;
            },
            [i, v.x, v.y],
        ),
        E = o >= t.startSec - 0.05 && o <= t.endSec + 0.05,
        { text: N, style: k } = t.data,
        w = P.jH[k.strokeWidth];
    return (0, n.jsx)("div", {
        ref: u,
        className: V.at,
        children: (0, n.jsxs)("div", {
            ref: d,
            className: B()(V.DU, { [V.oy]: l }),
            style: { display: E ? void 0 : "none", fontSize: k.fontSize },
            onMouseDown: y,
            children: [
                w > 0 &&
                    (0, n.jsx)("span", {
                        "aria-hidden": !0,
                        className: V.Cp,
                        style: { color: k.strokeColor, WebkitTextStroke: `${2 * w}px ${k.strokeColor}` },
                        children: N,
                    }),
                (0, n.jsx)("span", { className: V.Lo, style: { color: k.color }, children: N }),
            ],
        }),
    });
}
l(321073);
var F = l(702841),
    X = l(408278),
    Z = l(461150),
    W = l(782134),
    Y = l(113494),
    Q = l(898196),
    J = l(259678),
    q = l(765671),
    ee = l(531685),
    et = l(335494),
    el = l(589049),
    en = l(118925);
function ea(e) {
    let {
            label: t,
            text: l,
            color: i,
            startSec: s,
            endSec: c,
            totalDurationSec: o,
            selected: u,
            onSelect: d,
            onChangeRange: m,
        } = e,
        f = a.useRef(null),
        h = a.useRef(null),
        [x, v] = a.useState(null),
        p = a.useCallback(() => {
            let e = f.current;
            if (null == e) return 0;
            let t = e.getBoundingClientRect();
            return 0 === t.width ? 0 : o / t.width;
        }, [o]),
        g = a.useCallback(
            (e) => {
                let t = h.current;
                if (null == t) return;
                let l = (e.clientX - t.clientX) * p();
                if ("start" === t.mode) m((0, G.clamp)(t.initialStart + l, 0, t.initialEnd - P.Cx), t.initialEnd);
                else if ("end" === t.mode) {
                    let e = (0, G.clamp)(t.initialEnd + l, t.initialStart + P.Cx, o);
                    m(t.initialStart, e);
                } else {
                    let e = t.initialEnd - t.initialStart,
                        n = (0, G.clamp)(t.initialStart + l, 0, o - e);
                    m(n, n + e);
                }
            },
            [p, m, o],
        ),
        j = a.useCallback(() => {
            (h.current = null), v(null);
        }, []);
    a.useEffect(() => {
        if (null != x)
            return (
                document.addEventListener("mousemove", g),
                document.addEventListener("mouseup", j),
                () => {
                    document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", j);
                }
            );
    }, [x, g, j]);
    let b = a.useCallback(
            (e) => (t) => {
                t.stopPropagation(),
                    d(),
                    (h.current = { mode: e, clientX: t.clientX, initialStart: s, initialEnd: c }),
                    v(e);
            },
            [d, s, c],
        ),
        y = a.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = c - s,
                    n = !1,
                    a = s;
                "ArrowLeft" === e.key
                    ? ((n = !0), (a = (0, G.clamp)(s - t, 0, o - l)))
                    : "ArrowRight" === e.key && ((n = !0), (a = (0, G.clamp)(s + t, 0, o - l))),
                    n && (e.preventDefault(), e.stopPropagation(), m(a, a + l));
            },
            [s, c, o, m],
        ),
        E = a.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    n = s;
                "ArrowLeft" === e.key
                    ? ((l = !0), (n = (0, G.clamp)(s - t, 0, c - P.Cx)))
                    : "ArrowRight" === e.key && ((l = !0), (n = (0, G.clamp)(s + t, 0, c - P.Cx))),
                    l && (e.preventDefault(), e.stopPropagation(), m(n, c));
            },
            [s, c, m],
        ),
        N = a.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    n = c;
                "ArrowLeft" === e.key
                    ? ((l = !0), (n = (0, G.clamp)(c - t, s + P.Cx, o)))
                    : "ArrowRight" === e.key && ((l = !0), (n = (0, G.clamp)(c + t, s + P.Cx, o))),
                    l && (e.preventDefault(), e.stopPropagation(), m(s, n));
            },
            [s, c, o, m],
        ),
        k = 0 === o ? 0 : (s / o) * 100,
        w = 0 === o ? 0 : ((c - s) / o) * 100;
    return (0, n.jsx)("div", {
        className: en.nM,
        children: (0, n.jsxs)("div", {
            ref: f,
            className: en.hz,
            children: [
                (0, n.jsx)(J.vN, {
                    children: (0, n.jsx)(r.D, {
                        className: B()(en.u4, { [en.jX]: u }),
                        style: { left: `${k}%`, width: `${w}%`, backgroundColor: i },
                        onMouseDown: b("move"),
                        onKeyDown: y,
                        "aria-label": t,
                        children: (0, n.jsx)("div", {
                            className: en.Kq,
                            children: (0, n.jsx)(C.E, {
                                variant: "text-sm/medium",
                                color: "none",
                                className: en.Vd,
                                children: l,
                            }),
                        }),
                    }),
                }),
                (0, n.jsx)(J.vN, {
                    children: (0, n.jsx)("button", {
                        className: en.YQ,
                        style: { left: `${k}%` },
                        onMouseDown: b("start"),
                        onKeyDown: E,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": 0,
                        "aria-valuenow": s,
                        "aria-valuemax": c - P.Cx,
                        "aria-label": t,
                        children: (0, n.jsx)("div", { className: en.gt }),
                    }),
                }),
                (0, n.jsx)(J.vN, {
                    children: (0, n.jsx)("button", {
                        className: en.JZ,
                        style: { left: `${k + w}%` },
                        onMouseDown: b("end"),
                        onKeyDown: N,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": s + P.Cx,
                        "aria-valuenow": c,
                        "aria-valuemax": o,
                        "aria-label": t,
                        children: (0, n.jsx)("div", { className: en.gt }),
                    }),
                }),
            ],
        }),
    });
}
var ei = l(16590),
    es = l(375708),
    er = l(445563),
    ec = l(891470);
function eo(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        n = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (n = n < 10 ? "0" + n : n), `${t}:${l}.${n}`;
}
function eu(e) {
    let t = Math.floor(e / 60),
        l = es.intl.formatToPlainString(es.t.iXLF9W, { minutes: t }),
        n = es.intl.formatToPlainString(es.t.geSp4K, { seconds: e % 60 });
    return `${l} ${n}`;
}
function ed(e) {
    let { voiceAudioTracks: t, transitionState: l } = e,
        {
            useCurrentTime: i,
            duration: s,
            isPlaying: r,
            cropStart: c,
            cropEnd: o,
            cropDuration: u,
            setCropStart: d,
            setCropEnd: m,
            play: f,
            pause: v,
            subscribe: g,
            seek: j,
            clip: b,
            generateThumbnails: y,
            videoDimensions: E,
        } = (0, x.T)(),
        { tracks: N, selectedTrackId: k, setSelectedTrackId: w, updateTrackRange: A } = (0, H.fn)(),
        L = i(),
        [R, T] = a.useState(null),
        I = a.useRef(null),
        M = a.useRef(null),
        [D, S] = a.useState(!1),
        [O, _] = a.useState(null);
    a.useEffect(
        () =>
            g({
                onPlay: () => {
                    T(null), S(!1);
                },
            }),
        [g],
    );
    let { ref: z, width: U = 0, height: $ = 0 } = (0, q.Ay)(),
        V = (0, F.bG)([ee.A], () => ee.A.windowSize()),
        K = a.useRef(null),
        en = a.useCallback(() => {
            let e = z.current;
            null != e && _(e.getBoundingClientRect());
        }, [z]);
    a.useMemo(() => {
        V.width, V.height, en();
    }, [V.width, V.height, U, l, en]),
        a.useEffect(() => {
            let e = K.current;
            if (null != e) return e.addEventListener("scroll", en), () => e.removeEventListener("scroll", en);
        }, [en]);
    let ed = a.useCallback(
            (e, t) => {
                if (null == s || null == O) return;
                let l = (((0, G.clamp)(e, O.left, O.right) - O.left) / O.width) * s,
                    n = (0, G.clamp)(l, 0, s),
                    a = R;
                null == a && t && ((a = "playhead"), r && (v(), S(!0)), T(a)),
                    "start" === a ? d(n) : "end" === a ? m(n) : "playhead" === a && j((0, G.clamp)(n, c, o));
            },
            [s, O, R, c, o, r, v, d, m, j],
        ),
        em = a.useCallback(
            (e) => {
                if (null == s) return;
                let t = (0, h.A)(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), d(c - t);
                        break;
                    case "ArrowRight":
                        (l = !0), d(c + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, d, c],
        ),
        ef = a.useCallback(
            (e) => {
                if (null == s) return;
                let t = (0, h.A)(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), m(o - t);
                        break;
                    case "ArrowRight":
                        (l = !0), m(o + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, m, o],
        ),
        eh = a.useCallback(
            (e) => {
                ed(e.clientX, !0);
            },
            [ed],
        ),
        ex = a.useCallback(
            (e) => (t) => {
                t.stopPropagation(), r && (v(), S(!0)), T(e);
            },
            [r, v],
        ),
        ev = a.useCallback(
            (e) => {
                ed(e.clientX, !1);
            },
            [ed],
        ),
        ep = a.useCallback(() => {
            D && f(), S(!1), T(null);
        }, [D, f]);
    a.useEffect(
        () => (
            document.addEventListener("mousemove", ev),
            document.addEventListener("mouseup", ep),
            () => {
                document.removeEventListener("mousemove", ev), document.removeEventListener("mouseup", ep);
            }
        ),
        [ev, ep],
    );
    let { numberOfPreviews: eg, timelinePreviewWidth: ej } = a.useMemo(() => {
        if (null == E) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil($ * (E.width / E.height));
        return { numberOfPreviews: Math.ceil(U / e), timelinePreviewWidth: e };
    }, [$, U, E]);
    a.useEffect(() => {
        if (0 === eg || 0 === ej) return;
        let e = z.current;
        if (null == e) return;
        (e.height = $), (e.width = U);
        let t = e.getContext("2d");
        if (null == t) return;
        (t.fillStyle = "transparent"), t.fillRect(0, 0, U, $);
        let l = [];
        for (let e = 0; e < eg; e++) l.push((ej / U) * s * e);
        return y(l, ej, $, (e) => {
            for (let l = 0; l < e.length; l++) t.drawImage(e[l], ej * l, 0, ej, $), e[l].close();
        });
    }, [$, z, s, eg, ej, y, U]);
    let eC = L - c,
        eb = a.useCallback(() => {
            j(Math.max(c, L - 10));
        }, [c, L, j]),
        ey = a.useCallback(() => {
            j(Math.min(o, L + 10));
        }, [o, L, j]),
        eE = a.useCallback(() => {
            r ? v() : f();
        }, [r, f, v]),
        eN = (c / s) * 100,
        ek = (1 - (s - o) / s) * 100,
        ew = {
            background: `linear-gradient(to right, var(--black-500) ${eN}%, transparent ${eN}%, transparent ${ek}%, var(--black-500) ${ek}%)`,
        };
    return (0, n.jsxs)("div", {
        className: ec.f4,
        children: [
            (0, n.jsx)("div", { className: ec.qs }),
            (0, n.jsxs)("div", {
                className: ec.lx,
                children: [
                    (0, n.jsx)(p, {}),
                    (0, n.jsx)("div", {
                        className: ec.k2,
                        children: (0, n.jsx)("div", {
                            ref: M,
                            className: ec.re,
                            children: (0, n.jsxs)(C.E, {
                                variant: "text-xs/medium",
                                className: ec.g7,
                                color: "text-muted",
                                children: [
                                    (0, n.jsx)("span", { className: ec.$k, children: eo(eC) }),
                                    (0, n.jsx)("span", { className: ec.xW, children: " / " }),
                                    eo(u),
                                ],
                            }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: ec.s2,
                        children: [
                            (0, n.jsx)(X.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: Z.q,
                                onClick: eb,
                                "aria-label": es.intl.string(er.default["dRVF+Z"]),
                            }),
                            (0, n.jsx)(X.K, {
                                size: "sm",
                                icon: r ? Y.E : W.u,
                                onClick: eE,
                                "aria-label": es.intl.string(r ? es.t.ZcgDJX : es.t.RscU7I),
                                variant: "icon-only",
                            }),
                            (0, n.jsx)(X.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: Q.i,
                                onClick: ey,
                                "aria-label": es.intl.string(er.default.yV2FLL),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: ec.fL,
                ref: K,
                children: [
                    (0, n.jsx)(el.A, { onMouseDown: eh, videoLength: s, clip: b, noBottomMargin: !0, compact: !0 }),
                    (0, n.jsx)(et.A, {
                        onMouseDown: eh,
                        voiceAudioTracks: t,
                        clipId: b.id,
                        className: ec.ou,
                        alwaysRenderContainer: !0,
                    }),
                    (0, n.jsx)("div", {
                        className: ec.iI,
                        children: (0, n.jsxs)("div", {
                            className: ec.Qp,
                            children: [
                                (0, n.jsx)(p, {}),
                                (0, n.jsx)("div", { className: ec.bd }),
                                (0, n.jsx)("div", {
                                    className: ec.PH,
                                    children: (0, n.jsxs)("div", {
                                        className: B()(ec.IO, { [ec.Dg]: null != R }),
                                        onMouseDown: eh,
                                        children: [
                                            (0, n.jsx)("canvas", { className: ec.Ay, ref: z }),
                                            (0, n.jsx)(J.vN, {
                                                children: (0, n.jsx)("div", {
                                                    tabIndex: 0,
                                                    ref: I,
                                                    className: ec.lG,
                                                    children: (0, n.jsx)("svg", {
                                                        className: ec.$6,
                                                        width: "10",
                                                        height: "7.5",
                                                        viewBox: "0 0 8 6",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, n.jsx)("path", {
                                                            d: "M0 0.999999C0 0.447714 0.447715 0 1 0H7C7.55228 0 8 0.447715 8 1V2.5998C8 2.9209 7.8458 3.22248 7.58549 3.41048L4.58549 5.57715C4.23598 5.82957 3.76402 5.82957 3.41451 5.57715L0.41451 3.41048C0.154198 3.22248 0 2.9209 0 2.5998V0.999999Z",
                                                            fill: "currentColor",
                                                        }),
                                                    }),
                                                }),
                                            }),
                                            (0, n.jsx)("div", { className: ec.QT, style: ew }),
                                            (0, n.jsxs)("div", {
                                                className: ec.Ws,
                                                style: {
                                                    left: null != s ? `${(c / s) * 100}%` : "0",
                                                    right: null != s ? `${((s - o) / s) * 100}%` : "0",
                                                },
                                                children: [
                                                    (0, n.jsx)(J.vN, {
                                                        children: (0, n.jsx)("button", {
                                                            className: ec.uI,
                                                            onMouseDown: ex("start"),
                                                            onKeyDown: em,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": 0,
                                                            "aria-valuenow": c,
                                                            "aria-valuetext": eu(c),
                                                            "aria-valuemax": o - P.zj,
                                                            "aria-label": es.intl.string(es.t["+BTvw8"]),
                                                            children: (0, n.jsx)("div", { className: ec.FV }),
                                                        }),
                                                    }),
                                                    (0, n.jsx)(J.vN, {
                                                        children: (0, n.jsx)("button", {
                                                            className: ec.H1,
                                                            onMouseDown: ex("end"),
                                                            onKeyDown: ef,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": c + P.zj,
                                                            "aria-valuenow": o,
                                                            "aria-valuetext": eu(o),
                                                            "aria-valuemax": s,
                                                            "aria-label": es.intl.string(es.t.bBgBYo),
                                                            children: (0, n.jsx)("div", { className: ec.kn }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                N.map((e) =>
                                    (0, n.jsx)(
                                        ea,
                                        {
                                            label: e.type === P.Me.TEXT ? es.intl.string(ei.default.WvkbtB) : "",
                                            text: e.data.text,
                                            color: P.mY[e.type],
                                            startSec: e.startSec,
                                            endSec: e.endSec,
                                            totalDurationSec: s,
                                            selected: k === e.id,
                                            onSelect: () => w(e.id),
                                            onChangeRange: (t, l) => A(e.id, t, l),
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
var em = l(884003);
function ef(e) {
    let { transitionState: t } = e,
        {
            cropStart: l,
            cropEnd: v,
            videoPlayerRef: g,
            videoURL: j,
            audioTracks: C,
            clip: b,
            activeTool: y,
            cropPreset: E,
            videoDimensions: N,
        } = (0, x.T)(),
        { analyticsLocations: k } = (0, o.Ay)(c.A.CLIPS_EDITOR),
        { tracks: w, selectedTrackId: A, setSelectedTrackId: L } = (0, H.fn)(),
        R = b.type === P.nQ.SCREENSHOT;
    a.useEffect(() => {
        if (!R) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            let t = g.current;
            if (null == t) return;
            let n = g.current?.videoElement;
            if (null == n) return;
            let a = (0, h.A)(n.duration, e.shiftKey),
                s = !1;
            switch (e.key) {
                case " ":
                    (s = !0), n.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (s = !0), t.seek(Math.max(l, n.currentTime - a));
                    break;
                case "ArrowRight":
                    (s = !0), t.seek(Math.min(v, n.currentTime + a));
            }
            s && (e.stopPropagation(), e.preventDefault());
        }
    }, [g, R, b.type, l, v]);
    let T = a.useMemo(() => C.filter((e) => e.trackName.includes(":voice")), [C]),
        I = a.useCallback(() => {
            (0, u.R)(
                {
                    items: [{ type: "IMAGE", url: b.thumbnail, proxyUrl: b.thumbnail, alt: b.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [b.thumbnail, b.name]);
    if (R)
        return (0, n.jsxs)("div", {
            className: _.OJ,
            children: [
                (0, n.jsx)(p, {}),
                t !== s.ip.ENTERED
                    ? (0, n.jsx)(m.A, {})
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(O, {}),
                              (0, n.jsx)("div", {
                                  className: em.zT,
                                  children: (0, n.jsx)(r.D, {
                                      className: em.xS,
                                      onClick: I,
                                      children: (0, n.jsx)("img", {
                                          className: em.V_,
                                          src: b.thumbnail,
                                          alt: b.name ?? "",
                                      }),
                                  }),
                              }),
                          ],
                      }),
            ],
        });
    let M = null == j || t !== s.ip.ENTERED,
        D = b.type === P.nQ.VOICE_CLIP,
        S = y === d.Y.CROP,
        z = null != N ? N.width / N.height : null,
        $ = S
            ? z
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
              })(E, z),
        B = null;
    return (
        (B =
            S && !D
                ? (0, n.jsx)(U, {})
                : w.map((e) =>
                      e.type === P.Me.TEXT
                          ? (0, n.jsx)(K, { track: e, selected: e.id === A, onSelect: () => L(e.id) }, e.id)
                          : (e.type, null),
                  )),
        (0, n.jsx)(o.f5, {
            value: k,
            children: (0, n.jsxs)("div", {
                className: _.OJ,
                children: [
                    (0, n.jsx)(p, {}),
                    (0, n.jsx)("div", {
                        className: _.zT,
                        children: M
                            ? (0, n.jsx)(m.A, {})
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(O, {}),
                                      (0, n.jsx)("div", {
                                          className: _.x3,
                                          children: (0, n.jsx)(f.A, {
                                              ref: g,
                                              cropFraming: !D,
                                              frameAspectRatio: $,
                                              overlay: B,
                                              loop: !1,
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: _.fL,
                                          children: (0, n.jsx)(ed, { transitionState: t, voiceAudioTracks: T }),
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
        })
    );
}
