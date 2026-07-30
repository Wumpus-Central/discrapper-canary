l.d(t, { A: () => ex });
var n = l(477900),
    a = l(582128),
    i = l(621466),
    s = l(231723),
    r = l(939249),
    c = l(793574),
    o = l(688810),
    u = l(256905),
    d = l(372684),
    m = l(635793),
    h = l(530574),
    f = l(675747),
    x = l(584794),
    v = l(362081),
    p = l(56416);
let j = () => {
    let { clip: e } = (0, v.T)();
    return "" !== e.thumbnail
        ? (0, n.jsx)("img", { className: p.T, src: e.thumbnail, alt: "", "aria-hidden": !0 })
        : null;
};
var g = l(17928),
    b = l(342952),
    C = l(834730),
    y = l(778712),
    E = l(429913),
    N = l(47167),
    k = l(713654),
    w = l(769015),
    A = l(145497),
    L = l(734057),
    R = l(71393),
    T = l(287809),
    I = l(58703),
    M = l(403362),
    D = l(818433),
    S = l(827461);
function O(e) {
    let { icon: t, label: l } = e;
    return (0, n.jsxs)("div", {
        className: S.Ho,
        children: [
            null != t && (0, n.jsx)("div", { className: S.t8, children: t }),
            (0, n.jsx)(C.E, { variant: "text-xs/normal", color: "text-muted", className: S.Mk, children: l }),
        ],
    });
}
function P() {
    let { clip: e } = (0, v.T)(),
        t = (0, E.h)(e.applicationId),
        l = (0, g.yK)([T.default], () => e.users.map(T.default.getUser).filter(M.Vq)),
        a = (0, g.bG)([R.A], () => (null != e.guildId ? R.A.getGuild(e.guildId) : null)),
        i = (0, g.bG)([L.A], () => (null != e.channelId ? L.A.getChannel(e.channelId) : null)),
        s = (0, N.Ay)(i),
        r = null != i ? (0, k.gU)(i, a) : null,
        c = t?.name ?? e.applicationName,
        o =
            null != i && null != r
                ? (0, n.jsx)(r, { size: "custom", width: 16, height: 16, color: "currentColor" })
                : null;
    return (0, n.jsxs)("div", {
        className: S.wx,
        children: [
            (0, n.jsx)(D.A, { variant: "text-md/medium", className: S.DD }),
            (0, n.jsxs)("div", {
                className: S.KW,
                children: [
                    null != c &&
                        "" !== c &&
                        (0, n.jsx)(O, {
                            icon: null != t ? (0, n.jsx)(w.A, { game: t, size: w.M.XXSMALL }) : void 0,
                            label: c,
                        }),
                    null != a && (0, n.jsx)(O, { icon: (0, n.jsx)(A.Ay, { guild: a, iconSize: 16 }), label: a.name }),
                    null != o && (0, n.jsx)(O, { icon: o, label: s ?? "" }),
                    (0, n.jsx)(O, { label: (0, I.mk)(new Date(e.createdAt)) }),
                    l.length > 0 &&
                        (0, n.jsx)("div", {
                            className: S.Ho,
                            children: (0, n.jsx)(b.A, { users: l, maxUsers: 10, size: y._3.SIZE_16 }),
                        }),
                ],
            }),
        ],
    });
}
var _ = l(328820),
    z = l(136826);
let U = { [d.yz.ORIGINAL]: null, [d.yz.PORTRAIT_9_16]: 9 / 16, [d.yz.LANDSCAPE_16_9]: 16 / 9 };
function $() {
    let { cropPreset: e, videoPlayerRef: t } = (0, v.T)(),
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
                    u = U[e],
                    d = c,
                    m = o,
                    h = r.width,
                    f = r.height;
                null != u &&
                    ((f = (h = Math.min(r.width, r.height * u)) / u),
                    (d = c + (r.width - h) / 2),
                    (m = o + (r.height - f) / 2)),
                    (a.style.left = `${d}px`),
                    (a.style.top = `${m}px`),
                    (a.style.width = `${h}px`),
                    (a.style.height = `${f}px`);
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
        (0, n.jsx)("div", { ref: l, className: z.pC, children: (0, n.jsx)("div", { ref: i, className: z.E$ }) })
    );
}
var B = l(503698),
    G = l.n(B),
    H = l(435558),
    F = l(853073),
    K = l(112961);
function V(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { videoPlayerRef: s, useCurrentTime: r } = (0, v.T)(),
        { updateTextTrackData: c } = (0, F.j)(),
        o = r(),
        u = a.useRef(null),
        d = a.useRef(null),
        m = a.useRef(null),
        h = a.useRef(!1),
        f = a.useRef({ x: 0, y: 0 }),
        { position: x } = t.data,
        p = a.useRef(x),
        j = a.useCallback(() => {
            let e = m.current,
                t = d.current;
            if (null == e || null == t) return;
            let { x: l, y: n } = p.current;
            (t.style.left = `${e.left + l * e.width}px`), (t.style.top = `${e.top + n * e.height}px`);
        }, []),
        g = a.useCallback(() => {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = t.getBoundingClientRect(),
                n = (s.current?.videoElement ?? t).getBoundingClientRect();
            (m.current = { left: n.left - l.left, top: n.top - l.top, width: n.width, height: n.height }), j();
        }, [s, j]);
    a.useEffect(() => {
        let e = u.current;
        if (null == e) return;
        g();
        let t = new ResizeObserver(g);
        t.observe(e.parentElement ?? e);
        let l = s.current?.videoElement;
        return (
            null != l && t.observe(l),
            window.addEventListener("resize", g),
            () => {
                t.disconnect(), window.removeEventListener("resize", g);
            }
        );
    }, [g, s]),
        a.useEffect(() => {
            (p.current = x), j();
        }, [x, j]);
    let b = a.useCallback(
            (e) => {
                if (!h.current) return;
                let l = m.current;
                if (null == l) return;
                let n = u.current,
                    a = n?.getBoundingClientRect();
                if (null == a) return;
                let i = (0, H.clamp)((e.clientX - a.left - l.left) / l.width - f.current.x, 0, 1),
                    s = (0, H.clamp)((e.clientY - a.top - l.top) / l.height - f.current.y, 0, 1);
                c(t.id, (e) => ({ ...e, position: { x: i, y: s } }));
            },
            [c, t.id],
        ),
        C = a.useCallback(() => {
            h.current = !1;
        }, []);
    a.useEffect(
        () => (
            document.addEventListener("mousemove", b),
            document.addEventListener("mouseup", C),
            () => {
                document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", C);
            }
        ),
        [b, C],
    );
    let y = a.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), i();
                let t = m.current,
                    l = u.current?.getBoundingClientRect();
                if (null != t && null != l && t.width > 0 && t.height > 0) {
                    let n = (e.clientX - l.left - t.left) / t.width,
                        a = (e.clientY - l.top - t.top) / t.height;
                    f.current = { x: n - x.x, y: a - x.y };
                } else f.current = { x: 0, y: 0 };
                h.current = !0;
            },
            [i, x.x, x.y],
        ),
        E = o >= t.startSec - 0.05 && o <= t.endSec + 0.05,
        { text: N, style: k } = t.data,
        w = _.jH[k.strokeWidth];
    return (0, n.jsx)("div", {
        ref: u,
        className: K.at,
        children: (0, n.jsxs)("div", {
            ref: d,
            className: G()(K.DU, { [K.oy]: l }),
            style: { display: E ? void 0 : "none", fontSize: k.fontSize },
            onMouseDown: y,
            children: [
                w > 0 &&
                    (0, n.jsx)("span", {
                        "aria-hidden": !0,
                        className: K.Cp,
                        style: { color: k.strokeColor, WebkitTextStroke: `${2 * w}px ${k.strokeColor}` },
                        children: N,
                    }),
                (0, n.jsx)("span", { className: K.Lo, style: { color: k.color }, children: N }),
            ],
        }),
    });
}
l(321073);
var X = l(702841),
    Z = l(408278),
    W = l(461150),
    Y = l(782134),
    Q = l(113494),
    J = l(898196),
    q = l(259678),
    ee = l(765671),
    et = l(531685),
    el = l(335494),
    en = l(589049),
    ea = l(118925);
function ei(e) {
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
        h = a.useRef(null),
        f = a.useRef(null),
        [x, v] = a.useState(null),
        p = a.useCallback(() => {
            let e = h.current;
            if (null == e) return 0;
            let t = e.getBoundingClientRect();
            return 0 === t.width ? 0 : o / t.width;
        }, [o]),
        j = a.useCallback(
            (e) => {
                let t = f.current;
                if (null == t) return;
                let l = (e.clientX - t.clientX) * p();
                if ("start" === t.mode) m((0, H.clamp)(t.initialStart + l, 0, t.initialEnd - 1), t.initialEnd);
                else if ("end" === t.mode) {
                    let e = (0, H.clamp)(t.initialEnd + l, t.initialStart + 1, o);
                    m(t.initialStart, e);
                } else {
                    let e = t.initialEnd - t.initialStart,
                        n = (0, H.clamp)(t.initialStart + l, 0, o - e);
                    m(n, n + e);
                }
            },
            [p, m, o],
        ),
        g = a.useCallback(() => {
            (f.current = null), v(null);
        }, []);
    a.useEffect(() => {
        if (null != x)
            return (
                document.addEventListener("mousemove", j),
                document.addEventListener("mouseup", g),
                () => {
                    document.removeEventListener("mousemove", j), document.removeEventListener("mouseup", g);
                }
            );
    }, [x, j, g]);
    let b = a.useCallback(
            (e) => (t) => {
                t.stopPropagation(),
                    d(),
                    (f.current = { mode: e, clientX: t.clientX, initialStart: s, initialEnd: c }),
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
                    ? ((n = !0), (a = (0, H.clamp)(s - t, 0, o - l)))
                    : "ArrowRight" === e.key && ((n = !0), (a = (0, H.clamp)(s + t, 0, o - l))),
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
                    ? ((l = !0), (n = (0, H.clamp)(s - t, 0, c - 1)))
                    : "ArrowRight" === e.key && ((l = !0), (n = (0, H.clamp)(s + t, 0, c - 1))),
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
                    ? ((l = !0), (n = (0, H.clamp)(c - t, s + 1, o)))
                    : "ArrowRight" === e.key && ((l = !0), (n = (0, H.clamp)(c + t, s + 1, o))),
                    l && (e.preventDefault(), e.stopPropagation(), m(s, n));
            },
            [s, c, o, m],
        ),
        k = 0 === o ? 0 : (s / o) * 100,
        w = 0 === o ? 0 : ((c - s) / o) * 100;
    return (0, n.jsx)("div", {
        className: ea.nM,
        children: (0, n.jsxs)("div", {
            ref: h,
            className: ea.hz,
            children: [
                (0, n.jsx)(q.vN, {
                    children: (0, n.jsx)(r.D, {
                        className: G()(ea.u4, { [ea.jX]: u }),
                        style: { left: `${k}%`, width: `${w}%`, backgroundColor: i },
                        onMouseDown: b("move"),
                        onKeyDown: y,
                        "aria-label": t,
                        children: (0, n.jsx)("div", {
                            className: ea.Kq,
                            children: (0, n.jsx)(C.E, {
                                variant: "text-sm/medium",
                                color: "none",
                                className: ea.Vd,
                                children: l,
                            }),
                        }),
                    }),
                }),
                (0, n.jsx)(q.vN, {
                    children: (0, n.jsx)("button", {
                        className: ea.YQ,
                        style: { left: `${k}%` },
                        onMouseDown: b("start"),
                        onKeyDown: E,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": 0,
                        "aria-valuenow": s,
                        "aria-valuemax": c - 1,
                        "aria-label": t,
                        children: (0, n.jsx)("div", { className: ea.gt }),
                    }),
                }),
                (0, n.jsx)(q.vN, {
                    children: (0, n.jsx)("button", {
                        className: ea.JZ,
                        style: { left: `${k + w}%` },
                        onMouseDown: b("end"),
                        onKeyDown: N,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": s + 1,
                        "aria-valuenow": c,
                        "aria-valuemax": o,
                        "aria-label": t,
                        children: (0, n.jsx)("div", { className: ea.gt }),
                    }),
                }),
            ],
        }),
    });
}
var es = l(696016),
    er = l(16590),
    ec = l(375708),
    eo = l(445563),
    eu = l(891470);
function ed(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        n = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (n = n < 10 ? "0" + n : n), `${t}:${l}.${n}`;
}
function em(e) {
    let t = Math.floor(e / 60),
        l = ec.intl.formatToPlainString(ec.t.iXLF9W, { minutes: t }),
        n = ec.intl.formatToPlainString(ec.t.geSp4K, { seconds: e % 60 });
    return `${l} ${n}`;
}
function eh(e) {
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
            play: h,
            pause: f,
            subscribe: p,
            seek: g,
            clip: b,
            generateThumbnails: y,
            videoDimensions: E,
        } = (0, v.T)(),
        { tracks: N, selectedTrackId: k, setSelectedTrackId: w, updateTrackRange: A } = (0, F.j)(),
        L = i(),
        [R, T] = a.useState(null),
        I = a.useRef(null),
        M = a.useRef(null),
        [D, S] = a.useState(!1),
        [O, P] = a.useState(null);
    a.useEffect(
        () =>
            p({
                onPlay: () => {
                    T(null), S(!1);
                },
            }),
        [p],
    );
    let { ref: z, width: U = 0, height: $ = 0 } = (0, ee.Ay)(),
        B = (0, X.bG)([et.A], () => et.A.windowSize()),
        K = a.useRef(null),
        V = a.useCallback(() => {
            let e = z.current;
            null != e && P(e.getBoundingClientRect());
        }, [z]);
    a.useMemo(() => {
        B.width, B.height, V();
    }, [B.width, B.height, U, l, V]),
        a.useEffect(() => {
            let e = K.current;
            if (null != e) return e.addEventListener("scroll", V), () => e.removeEventListener("scroll", V);
        }, [V]);
    let ea = a.useCallback(
            (e, t) => {
                if (null == s || null == O) return;
                let l = (((0, H.clamp)(e, O.left, O.right) - O.left) / O.width) * s,
                    n = (0, H.clamp)(l, 0, s),
                    a = R;
                null == a && t && ((a = "playhead"), r && (f(), S(!0)), T(a)),
                    "start" === a ? d(n) : "end" === a ? m(n) : "playhead" === a && g((0, H.clamp)(n, c, o));
            },
            [s, O, R, c, o, r, f, d, m, g],
        ),
        eh = a.useCallback(
            (e) => {
                if (null == s) return;
                let t = (0, x.A)(s, e.shiftKey),
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
                let t = (0, x.A)(s, e.shiftKey),
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
        ex = a.useCallback(
            (e) => {
                ea(e.clientX, !0);
            },
            [ea],
        ),
        ev = a.useCallback(
            (e) => (t) => {
                t.stopPropagation(), r && (f(), S(!0)), T(e);
            },
            [r, f],
        ),
        ep = a.useCallback(
            (e) => {
                ea(e.clientX, !1);
            },
            [ea],
        ),
        ej = a.useCallback(() => {
            D && h(), S(!1), T(null);
        }, [D, h]);
    a.useEffect(
        () => (
            document.addEventListener("mousemove", ep),
            document.addEventListener("mouseup", ej),
            () => {
                document.removeEventListener("mousemove", ep), document.removeEventListener("mouseup", ej);
            }
        ),
        [ep, ej],
    );
    let { numberOfPreviews: eg, timelinePreviewWidth: eb } = a.useMemo(() => {
        if (null == E) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil($ * (E.width / E.height));
        return { numberOfPreviews: Math.ceil(U / e), timelinePreviewWidth: e };
    }, [$, U, E]);
    a.useEffect(() => {
        if (0 === eg || 0 === eb) return;
        let e = z.current;
        if (null == e) return;
        (e.height = $), (e.width = U);
        let t = e.getContext("2d");
        if (null == t) return;
        (t.fillStyle = "transparent"), t.fillRect(0, 0, U, $);
        let l = [];
        for (let e = 0; e < eg; e++) l.push((eb / U) * s * e);
        return y(l, eb, $, (e) => {
            for (let l = 0; l < e.length; l++) t.drawImage(e[l], eb * l, 0, eb, $), e[l].close();
        });
    }, [$, z, s, eg, eb, y, U]);
    let eC = L - c,
        ey = a.useCallback(() => {
            g(Math.max(c, L - 10));
        }, [c, L, g]),
        eE = a.useCallback(() => {
            g(Math.min(o, L + 10));
        }, [o, L, g]),
        eN = a.useCallback(() => {
            r ? f() : h();
        }, [r, h, f]),
        ek = (c / s) * 100,
        ew = (1 - (s - o) / s) * 100,
        eA = {
            background: `linear-gradient(to right, var(--black-500) ${ek}%, transparent ${ek}%, transparent ${ew}%, var(--black-500) ${ew}%)`,
        };
    return (0, n.jsxs)("div", {
        className: eu.f4,
        children: [
            (0, n.jsx)("div", { className: eu.qs }),
            (0, n.jsxs)("div", {
                className: eu.lx,
                children: [
                    (0, n.jsx)(j, {}),
                    (0, n.jsx)("div", {
                        className: eu.k2,
                        children: (0, n.jsx)("div", {
                            ref: M,
                            className: eu.re,
                            children: (0, n.jsxs)(C.E, {
                                variant: "text-xs/medium",
                                className: eu.g7,
                                color: "text-muted",
                                children: [
                                    (0, n.jsx)("span", { className: eu.$k, children: ed(eC) }),
                                    (0, n.jsx)("span", { className: eu.xW, children: " / " }),
                                    ed(u),
                                ],
                            }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: eu.s2,
                        children: [
                            (0, n.jsx)(Z.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: W.q,
                                onClick: ey,
                                "aria-label": ec.intl.string(eo.default["dRVF+Z"]),
                            }),
                            (0, n.jsx)(Z.K, {
                                size: "sm",
                                icon: r ? Q.E : Y.u,
                                onClick: eN,
                                "aria-label": ec.intl.string(r ? ec.t.ZcgDJX : ec.t.RscU7I),
                                variant: "icon-only",
                            }),
                            (0, n.jsx)(Z.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: J.i,
                                onClick: eE,
                                "aria-label": ec.intl.string(eo.default.yV2FLL),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: eu.fL,
                ref: K,
                children: [
                    (0, n.jsx)(en.A, { onMouseDown: ex, videoLength: s, clip: b, noBottomMargin: !0, compact: !0 }),
                    (0, n.jsx)(el.A, {
                        onMouseDown: ex,
                        voiceAudioTracks: t,
                        clipId: b.id,
                        className: eu.ou,
                        alwaysRenderContainer: !0,
                    }),
                    (0, n.jsx)("div", {
                        className: eu.iI,
                        children: (0, n.jsxs)("div", {
                            className: eu.Qp,
                            children: [
                                (0, n.jsx)(j, {}),
                                (0, n.jsx)("div", { className: eu.bd }),
                                (0, n.jsx)("div", {
                                    className: eu.PH,
                                    children: (0, n.jsxs)("div", {
                                        className: G()(eu.IO, { [eu.Dg]: null != R }),
                                        onMouseDown: ex,
                                        children: [
                                            (0, n.jsx)("canvas", { className: eu.Ay, ref: z }),
                                            (0, n.jsx)(q.vN, {
                                                children: (0, n.jsx)("div", {
                                                    tabIndex: 0,
                                                    ref: I,
                                                    className: eu.lG,
                                                    children: (0, n.jsx)("svg", {
                                                        className: eu.$6,
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
                                            (0, n.jsx)("div", { className: eu.QT, style: eA }),
                                            (0, n.jsxs)("div", {
                                                className: eu.Ws,
                                                style: {
                                                    left: null != s ? `${(c / s) * 100}%` : "0",
                                                    right: null != s ? `${((s - o) / s) * 100}%` : "0",
                                                },
                                                children: [
                                                    (0, n.jsx)(q.vN, {
                                                        children: (0, n.jsx)("button", {
                                                            className: eu.uI,
                                                            onMouseDown: ev("start"),
                                                            onKeyDown: eh,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": 0,
                                                            "aria-valuenow": c,
                                                            "aria-valuetext": em(c),
                                                            "aria-valuemax": o - es.zj,
                                                            "aria-label": ec.intl.string(ec.t["+BTvw8"]),
                                                            children: (0, n.jsx)("div", { className: eu.FV }),
                                                        }),
                                                    }),
                                                    (0, n.jsx)(q.vN, {
                                                        children: (0, n.jsx)("button", {
                                                            className: eu.H1,
                                                            onMouseDown: ev("end"),
                                                            onKeyDown: ef,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": c + es.zj,
                                                            "aria-valuenow": o,
                                                            "aria-valuetext": em(o),
                                                            "aria-valuemax": s,
                                                            "aria-label": ec.intl.string(ec.t.bBgBYo),
                                                            children: (0, n.jsx)("div", { className: eu.kn }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                N.map((e) =>
                                    (0, n.jsx)(
                                        ei,
                                        {
                                            label: e.type === _.Me.TEXT ? ec.intl.string(er.default.WvkbtB) : "",
                                            text: e.data.text,
                                            color: _.mY[e.type],
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
var ef = l(884003);
function ex(e) {
    let { transitionState: t } = e,
        {
            cropStart: l,
            cropEnd: p,
            videoPlayerRef: g,
            videoURL: b,
            audioTracks: C,
            clip: y,
            activeTool: E,
            cropPreset: N,
            videoDimensions: k,
        } = (0, v.T)(),
        { analyticsLocations: w } = (0, o.Ay)(c.A.CLIPS_EDITOR),
        { tracks: A, selectedTrackId: L, setSelectedTrackId: R } = (0, F.j)(),
        T = y.type === d.nQ.SCREENSHOT;
    a.useEffect(() => {
        if (!T) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            let t = g.current;
            if (null == t) return;
            let n = g.current?.videoElement;
            if (null == n) return;
            let a = (0, x.A)(n.duration, e.shiftKey),
                s = !1;
            switch (e.key) {
                case " ":
                    (s = !0), n.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (s = !0), t.seek(Math.max(l, n.currentTime - a));
                    break;
                case "ArrowRight":
                    (s = !0), t.seek(Math.min(p, n.currentTime + a));
            }
            s && (e.stopPropagation(), e.preventDefault());
        }
    }, [g, T, y.type, l, p]);
    let I = a.useMemo(() => C.filter((e) => e.trackName.includes(":voice")), [C]),
        M = a.useCallback(() => {
            (0, u.R)(
                {
                    items: [{ type: "IMAGE", url: y.thumbnail, proxyUrl: y.thumbnail, alt: y.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [y.thumbnail, y.name]);
    if (T)
        return (0, n.jsxs)("div", {
            className: z.OJ,
            children: [
                (0, n.jsx)(j, {}),
                t !== s.ip.ENTERED
                    ? (0, n.jsx)(h.A, {})
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(P, {}),
                              (0, n.jsx)("div", {
                                  className: ef.zT,
                                  children: (0, n.jsx)(r.D, {
                                      className: ef.xS,
                                      onClick: M,
                                      children: (0, n.jsx)("img", {
                                          className: ef.V_,
                                          src: y.thumbnail,
                                          alt: y.name ?? "",
                                      }),
                                  }),
                              }),
                          ],
                      }),
            ],
        });
    let D = null == b || t !== s.ip.ENTERED,
        S = y.type === d.nQ.VOICE_CLIP,
        O = E === m.Y.CROP,
        U = null != k ? k.width / k.height : null,
        B = O
            ? U
            : (function (e, t) {
                  switch (e) {
                      case d.yz.PORTRAIT_9_16:
                          return 9 / 16;
                      case d.yz.LANDSCAPE_16_9:
                          return 16 / 9;
                      case d.yz.ORIGINAL:
                      default:
                          return t;
                  }
              })(N, U),
        G = null;
    return (
        (G =
            O && !S
                ? (0, n.jsx)($, {})
                : A.map((e) =>
                      e.type === _.Me.TEXT
                          ? (0, n.jsx)(V, { track: e, selected: e.id === L, onSelect: () => R(e.id) }, e.id)
                          : (e.type, null),
                  )),
        (0, n.jsx)(o.f5, {
            value: w,
            children: (0, n.jsxs)("div", {
                className: z.OJ,
                children: [
                    (0, n.jsx)(j, {}),
                    (0, n.jsx)("div", {
                        className: z.zT,
                        children: D
                            ? (0, n.jsx)(h.A, {})
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(P, {}),
                                      (0, n.jsx)("div", {
                                          className: z.x3,
                                          children: (0, n.jsx)(f.A, {
                                              ref: g,
                                              cropFraming: !S,
                                              frameAspectRatio: B,
                                              overlay: G,
                                              loop: !1,
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: z.fL,
                                          children: (0, n.jsx)(eh, { transitionState: t, voiceAudioTracks: I }),
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
        })
    );
}
