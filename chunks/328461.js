l.d(t, { A: () => eh });
var n = l(477900),
    a = l(582128),
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
        ? (0, n.jsx)("img", { className: v.T, src: e.thumbnail, alt: "", "aria-hidden": !0 })
        : null;
}
var g = l(17928),
    j = l(342952),
    b = l(834730),
    C = l(778712),
    y = l(429913),
    N = l(47167),
    E = l(713654),
    w = l(769015),
    k = l(145497),
    A = l(734057),
    L = l(71393),
    R = l(287809),
    I = l(58703),
    T = l(403362),
    M = l(818433),
    S = l(620828);
function D(e) {
    let { icon: t, label: l } = e;
    return (0, n.jsxs)("div", {
        className: S.Ho,
        children: [
            null != t && (0, n.jsx)("div", { className: S.t8, children: t }),
            (0, n.jsx)(b.E, { variant: "text-xs/normal", color: "text-subtle", className: S.Mk, children: l }),
        ],
    });
}
function O() {
    let { clip: e } = (0, x.T)(),
        t = (0, y.h)(e.applicationId),
        l = (0, g.yK)([R.default], () => e.users.map(R.default.getUser).filter(T.Vq)),
        a = (0, g.bG)([L.A], () => (null != e.guildId ? L.A.getGuild(e.guildId) : null)),
        i = (0, g.bG)([A.A], () => (null != e.channelId ? A.A.getChannel(e.channelId) : null)),
        s = (0, N.Ay)(i),
        r = null != i ? (0, E.gU)(i, a) : null,
        o = t?.name ?? e.applicationName,
        c =
            null != i && null != r
                ? (0, n.jsx)(r, { size: "custom", width: 16, height: 16, color: "currentColor" })
                : null;
    return (0, n.jsxs)("div", {
        className: S.wx,
        children: [
            (0, n.jsx)(M.A, { variant: "text-md/medium", className: S.DD }),
            (0, n.jsxs)("div", {
                className: S.KW,
                children: [
                    null != o &&
                        "" !== o &&
                        (0, n.jsx)(D, {
                            icon: null != t ? (0, n.jsx)(w.A, { game: t, size: w.M.XXSMALL }) : void 0,
                            label: o,
                        }),
                    null != a && (0, n.jsx)(D, { icon: (0, n.jsx)(k.Ay, { guild: a, iconSize: 16 }), label: a.name }),
                    null != c && (0, n.jsx)(D, { icon: c, label: s ?? "" }),
                    (0, n.jsx)(D, { label: (0, I.mk)(new Date(e.createdAt)) }),
                    l.length > 0 &&
                        (0, n.jsx)("div", {
                            className: S.Ho,
                            children: (0, n.jsx)(j.A, { users: l, maxUsers: 10, size: C._3.SIZE_16 }),
                        }),
                ],
            }),
        ],
    });
}
var P = l(696016),
    _ = l(973177);
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
                    o = r.left - s.left,
                    c = r.top - s.top,
                    u = z[e],
                    d = o,
                    m = c,
                    h = r.width,
                    f = r.height;
                null != u &&
                    ((f = (h = Math.min(r.width, r.height * u)) / u),
                    (d = o + (r.width - h) / 2),
                    (m = c + (r.height - f) / 2)),
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
        (0, n.jsx)("div", { ref: l, className: _.pC, children: (0, n.jsx)("div", { ref: i, className: _.E$ }) })
    );
}
var $ = l(503698),
    B = l.n($),
    G = l(435558),
    H = l(801835),
    V = l(637526);
function K(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { videoPlayerRef: s, useCurrentTime: r } = (0, x.T)(),
        { updateTextTrackData: o } = (0, H.fn)(),
        c = r(),
        u = a.useRef(null),
        d = a.useRef(null),
        m = a.useRef(null),
        h = a.useRef(null),
        f = a.useRef(!1),
        v = a.useRef({ x: 0, y: 0 }),
        { position: p, style: g } = t.data,
        j = a.useRef(p),
        b = a.useRef(g.fontSize),
        C = a.useRef(g.strokeWidth),
        y = a.useCallback(() => {
            let e = h.current,
                t = d.current;
            if (null == e || null == t) return;
            let { x: l, y: n } = j.current;
            (t.style.left = `${e.left + l * e.width}px`), (t.style.top = `${e.top + n * e.height}px`);
            let a = b.current * e.height;
            t.style.fontSize = `${a}px`;
            let i = m.current;
            if (null != i) {
                let e = P.mO[C.current] * a;
                i.style.webkitTextStrokeWidth = `${e}px`;
            }
        }, []),
        N = a.useCallback(() => {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = t.getBoundingClientRect(),
                n = (s.current?.videoElement ?? t).getBoundingClientRect();
            (h.current = { left: n.left - l.left, top: n.top - l.top, width: n.width, height: n.height }), y();
        }, [s, y]);
    a.useEffect(() => {
        let e = u.current;
        if (null == e) return;
        N();
        let t = new ResizeObserver(N);
        t.observe(e.parentElement ?? e);
        let l = s.current?.videoElement;
        return (
            null != l && t.observe(l),
            window.addEventListener("resize", N),
            () => {
                t.disconnect(), window.removeEventListener("resize", N);
            }
        );
    }, [N, s]),
        a.useEffect(() => {
            (j.current = p), (b.current = g.fontSize), (C.current = g.strokeWidth), y();
        }, [p, g.fontSize, g.strokeWidth, y]);
    let E = a.useCallback(
            (e) => {
                if (!f.current) return;
                let l = h.current;
                if (null == l) return;
                let n = u.current,
                    a = n?.getBoundingClientRect();
                if (null == a) return;
                let i = (0, G.clamp)((e.clientX - a.left - l.left) / l.width - v.current.x, 0, 1),
                    s = (0, G.clamp)((e.clientY - a.top - l.top) / l.height - v.current.y, 0, 1);
                o(t.id, (e) => ({ ...e, position: { x: i, y: s } }));
            },
            [o, t.id],
        ),
        w = a.useCallback(() => {
            f.current = !1;
        }, []);
    a.useEffect(
        () => (
            document.addEventListener("mousemove", E),
            document.addEventListener("mouseup", w),
            () => {
                document.removeEventListener("mousemove", E), document.removeEventListener("mouseup", w);
            }
        ),
        [E, w],
    );
    let k = a.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), i();
                let t = h.current,
                    l = u.current?.getBoundingClientRect();
                if (null != t && null != l && t.width > 0 && t.height > 0) {
                    let n = (e.clientX - l.left - t.left) / t.width,
                        a = (e.clientY - l.top - t.top) / t.height;
                    v.current = { x: n - p.x, y: a - p.y };
                } else v.current = { x: 0, y: 0 };
                f.current = !0;
            },
            [i, p.x, p.y],
        ),
        A = c >= t.startSec - 0.05 && c <= t.endSec + 0.05,
        { text: L } = t.data,
        R = P.mO[g.strokeWidth] > 0;
    return (0, n.jsx)("div", {
        ref: u,
        className: V.at,
        children: (0, n.jsxs)("div", {
            ref: d,
            className: B()(V.DU, { [V.oy]: l }),
            style: { display: A ? void 0 : "none" },
            onMouseDown: k,
            children: [
                R &&
                    (0, n.jsx)("span", {
                        ref: m,
                        "aria-hidden": !0,
                        className: V.Cp,
                        style: { color: g.strokeColor, WebkitTextStrokeColor: g.strokeColor },
                        children: L,
                    }),
                (0, n.jsx)("span", { className: V.Lo, style: { color: g.color }, children: L }),
            ],
        }),
    });
}
l(321073);
var F = l(702841),
    Z = l(408278),
    W = l(461150),
    X = l(782134),
    Y = l(113494),
    J = l(898196),
    Q = l(259678),
    q = l(765671),
    ee = l(531685),
    et = l(335494),
    el = l(589049),
    en = l(591246);
function ea(e) {
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
        h = a.useRef(null),
        f = a.useRef(null),
        [x, v] = a.useState(null),
        p = a.useCallback(() => {
            let e = h.current;
            if (null == e) return 0;
            let t = e.getBoundingClientRect();
            return 0 === t.width ? 0 : c / t.width;
        }, [c]),
        g = a.useCallback(
            (e) => {
                let t = f.current;
                if (null == t) return;
                let l = (e.clientX - t.clientX) * p();
                if ("start" === t.mode) m((0, G.clamp)(t.initialStart + l, 0, t.initialEnd - P.Cx), t.initialEnd);
                else if ("end" === t.mode) {
                    let e = (0, G.clamp)(t.initialEnd + l, t.initialStart + P.Cx, c);
                    m(t.initialStart, e);
                } else {
                    let e = t.initialEnd - t.initialStart,
                        n = (0, G.clamp)(t.initialStart + l, 0, c - e);
                    m(n, n + e);
                }
            },
            [p, m, c],
        ),
        j = a.useCallback(() => {
            (f.current = null), v(null);
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
    let C = a.useCallback(
            (e) => (t) => {
                t.stopPropagation(),
                    d(),
                    (f.current = { mode: e, clientX: t.clientX, initialStart: s, initialEnd: o }),
                    v(e);
            },
            [d, s, o],
        ),
        y = a.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = o - s,
                    n = !1,
                    a = s;
                "ArrowLeft" === e.key
                    ? ((n = !0), (a = (0, G.clamp)(s - t, 0, c - l)))
                    : "ArrowRight" === e.key && ((n = !0), (a = (0, G.clamp)(s + t, 0, c - l))),
                    n && (e.preventDefault(), e.stopPropagation(), m(a, a + l));
            },
            [s, o, c, m],
        ),
        N = a.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    n = s;
                "ArrowLeft" === e.key
                    ? ((l = !0), (n = (0, G.clamp)(s - t, 0, o - P.Cx)))
                    : "ArrowRight" === e.key && ((l = !0), (n = (0, G.clamp)(s + t, 0, o - P.Cx))),
                    l && (e.preventDefault(), e.stopPropagation(), m(n, o));
            },
            [s, o, m],
        ),
        E = a.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    n = o;
                "ArrowLeft" === e.key
                    ? ((l = !0), (n = (0, G.clamp)(o - t, s + P.Cx, c)))
                    : "ArrowRight" === e.key && ((l = !0), (n = (0, G.clamp)(o + t, s + P.Cx, c))),
                    l && (e.preventDefault(), e.stopPropagation(), m(s, n));
            },
            [s, o, c, m],
        ),
        w = 0 === c ? 0 : (s / c) * 100,
        k = 0 === c ? 0 : ((o - s) / c) * 100;
    return (0, n.jsx)("div", {
        className: en.nM,
        children: (0, n.jsxs)("div", {
            ref: h,
            className: en.hz,
            children: [
                (0, n.jsx)(Q.vN, {
                    children: (0, n.jsx)(r.D, {
                        className: B()(en.u4, { [en.jX]: u }),
                        style: { left: `${w}%`, width: `${k}%`, backgroundColor: i },
                        onMouseDown: C("move"),
                        onKeyDown: y,
                        "aria-label": t,
                        children: (0, n.jsx)("div", {
                            className: en.Kq,
                            children: (0, n.jsx)(b.E, {
                                variant: "text-sm/medium",
                                color: "none",
                                className: en.Vd,
                                children: l,
                            }),
                        }),
                    }),
                }),
                (0, n.jsx)(Q.vN, {
                    children: (0, n.jsx)("button", {
                        className: en.YQ,
                        style: { left: `${w}%` },
                        onMouseDown: C("start"),
                        onKeyDown: N,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": 0,
                        "aria-valuenow": s,
                        "aria-valuemax": o - P.Cx,
                        "aria-label": t,
                        children: (0, n.jsx)("div", { className: en.gt }),
                    }),
                }),
                (0, n.jsx)(Q.vN, {
                    children: (0, n.jsx)("button", {
                        className: en.JZ,
                        style: { left: `${w + k}%` },
                        onMouseDown: C("end"),
                        onKeyDown: E,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": s + P.Cx,
                        "aria-valuenow": o,
                        "aria-valuemax": c,
                        "aria-label": t,
                        children: (0, n.jsx)("div", { className: en.gt }),
                    }),
                }),
            ],
        }),
    });
}
var ei = l(711918),
    es = l(375708),
    er = l(652699),
    eo = l(503535);
function ec(e) {
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
        { tracks: N, selectedTrackId: E, setSelectedTrackId: w, updateTrackRange: k } = (0, H.fn)(),
        A = i(),
        [L, R] = a.useState(null),
        I = a.useRef(null),
        T = a.useRef(null),
        [M, S] = a.useState(!1),
        [D, O] = a.useState(null);
    a.useEffect(
        () =>
            p({
                onPlay: () => {
                    R(null), S(!1);
                },
            }),
        [p],
    );
    let { ref: _, width: z = 0, height: U = 0 } = (0, q.Ay)(),
        $ = (0, F.bG)([ee.A], () => ee.A.windowSize()),
        V = a.useRef(null),
        K = a.useCallback(() => {
            let e = _.current;
            null != e && O(e.getBoundingClientRect());
        }, [_]);
    a.useMemo(() => {
        $.width, $.height, K();
    }, [$.width, $.height, z, l, K]),
        a.useEffect(() => {
            let e = V.current;
            if (null != e) return e.addEventListener("scroll", K), () => e.removeEventListener("scroll", K);
        }, [K]);
    let en = a.useCallback(
            (e, t) => {
                if (null == s || null == D) return;
                let l = (((0, G.clamp)(e, D.left, D.right) - D.left) / D.width) * s,
                    n = (0, G.clamp)(l, 0, s),
                    a = L;
                null == a && t && ((a = "playhead"), r && (v(), S(!0)), R(a)),
                    "start" === a ? d(n) : "end" === a ? m(n) : "playhead" === a && g((0, G.clamp)(n, o, c));
            },
            [s, D, L, o, c, r, v, d, m, g],
        ),
        ed = a.useCallback(
            (e) => {
                if (null == s) return;
                let t = (0, f.A)(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), d(o - t);
                        break;
                    case "ArrowRight":
                        (l = !0), d(o + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, d, o],
        ),
        em = a.useCallback(
            (e) => {
                if (null == s) return;
                let t = (0, f.A)(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), m(c - t);
                        break;
                    case "ArrowRight":
                        (l = !0), m(c + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, m, c],
        ),
        eh = a.useCallback(
            (e) => {
                en(e.clientX, !0);
            },
            [en],
        ),
        ef = a.useCallback(
            (e) => (t) => {
                t.stopPropagation(), r && (v(), S(!0)), R(e);
            },
            [r, v],
        ),
        ex = a.useCallback(
            (e) => {
                en(e.clientX, !1);
            },
            [en],
        ),
        ev = a.useCallback(() => {
            M && h(), S(!1), R(null);
        }, [M, h]);
    a.useEffect(
        () => (
            document.addEventListener("mousemove", ex),
            document.addEventListener("mouseup", ev),
            () => {
                document.removeEventListener("mousemove", ex), document.removeEventListener("mouseup", ev);
            }
        ),
        [ex, ev],
    );
    let { numberOfPreviews: ep, timelinePreviewWidth: eg } = a.useMemo(() => {
        if (null == y) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil(U * (y.width / y.height));
        return { numberOfPreviews: Math.ceil(z / e), timelinePreviewWidth: e };
    }, [U, z, y]);
    a.useEffect(() => {
        if (0 === ep || 0 === eg) return;
        let e = _.current;
        if (null == e) return;
        (e.height = U), (e.width = z);
        let t = e.getContext("2d");
        if (null == t) return;
        (t.fillStyle = "transparent"), t.fillRect(0, 0, z, U);
        let l = [];
        for (let e = 0; e < ep; e++) l.push((eg / z) * s * e);
        return C(l, eg, U, (e) => {
            for (let l = 0; l < e.length; l++) t.drawImage(e[l], eg * l, 0, eg, U), e[l].close();
        });
    }, [U, _, s, ep, eg, C, z]);
    let ej = A - o,
        eb = a.useCallback(() => {
            g(Math.max(o, A - 10));
        }, [o, A, g]),
        eC = a.useCallback(() => {
            g(Math.min(c, A + 10));
        }, [c, A, g]),
        ey = a.useCallback(() => {
            r ? v() : h();
        }, [r, h, v]),
        eN = (o / s) * 100,
        eE = (1 - (s - c) / s) * 100,
        ew = {
            background: `linear-gradient(to right, var(--black-500) ${eN}%, transparent ${eN}%, transparent ${eE}%, var(--black-500) ${eE}%)`,
        };
    return (0, n.jsxs)("div", {
        className: eo.f4,
        children: [
            (0, n.jsx)("div", { className: eo.qs }),
            (0, n.jsxs)("div", {
                className: eo.lx,
                children: [
                    (0, n.jsx)("div", {
                        className: eo.k2,
                        children: (0, n.jsx)("div", {
                            ref: T,
                            className: eo.re,
                            children: (0, n.jsxs)(b.E, {
                                variant: "text-xs/medium",
                                className: eo.g7,
                                color: "text-muted",
                                children: [
                                    (0, n.jsx)("span", { className: eo.$k, children: ec(ej) }),
                                    (0, n.jsx)("span", { className: eo.xW, children: " / " }),
                                    ec(u),
                                ],
                            }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: eo.s2,
                        children: [
                            (0, n.jsx)(Z.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: W.q,
                                onClick: eb,
                                "aria-label": es.intl.string(er.default["dRVF+Z"]),
                            }),
                            (0, n.jsx)(Z.K, {
                                size: "sm",
                                icon: r ? Y.PauseIcon : X.PlayIcon,
                                onClick: ey,
                                "aria-label": es.intl.string(r ? es.t.ZcgDJX : es.t.RscU7I),
                                variant: "icon-only",
                            }),
                            (0, n.jsx)(Z.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: J.i,
                                onClick: eC,
                                "aria-label": es.intl.string(er.default.yV2FLL),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: eo.fL,
                ref: V,
                children: [
                    (0, n.jsx)(el.A, { onMouseDown: eh, videoLength: s, clip: j, noBottomMargin: !0, compact: !0 }),
                    (0, n.jsx)(et.A, {
                        onMouseDown: eh,
                        voiceAudioTracks: t,
                        clipId: j.id,
                        className: eo.ou,
                        alwaysRenderContainer: !0,
                    }),
                    (0, n.jsx)("div", {
                        className: eo.iI,
                        children: (0, n.jsxs)("div", {
                            className: eo.Qp,
                            children: [
                                (0, n.jsx)("div", { className: eo.bd }),
                                (0, n.jsx)("div", {
                                    className: eo.PH,
                                    children: (0, n.jsxs)("div", {
                                        className: B()(eo.IO, { [eo.Dg]: null != L }),
                                        onMouseDown: eh,
                                        children: [
                                            (0, n.jsx)("canvas", { className: eo.Ay, ref: _ }),
                                            (0, n.jsx)(Q.vN, {
                                                children: (0, n.jsx)("div", {
                                                    tabIndex: 0,
                                                    ref: I,
                                                    className: eo.lG,
                                                    children: (0, n.jsx)("svg", {
                                                        className: eo.$6,
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
                                            (0, n.jsx)("div", { className: eo.QT, style: ew }),
                                            (0, n.jsxs)("div", {
                                                className: eo.Ws,
                                                style: {
                                                    left: null != s ? `${(o / s) * 100}%` : "0",
                                                    right: null != s ? `${((s - c) / s) * 100}%` : "0",
                                                },
                                                children: [
                                                    (0, n.jsx)(Q.vN, {
                                                        children: (0, n.jsxs)("button", {
                                                            className: eo.uI,
                                                            onMouseDown: ef("start"),
                                                            onKeyDown: ed,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": 0,
                                                            "aria-valuenow": o,
                                                            "aria-valuetext": eu(o),
                                                            "aria-valuemax": c - P.zj,
                                                            "aria-label": es.intl.string(es.t["+BTvw8"]),
                                                            children: [
                                                                (0, n.jsx)("div", { className: eo.FV }),
                                                                (0, n.jsxs)("svg", {
                                                                    className: eo.lm,
                                                                    width: "8",
                                                                    height: "56",
                                                                    viewBox: "0 0 8 56",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    "aria-hidden": !0,
                                                                    children: [
                                                                        (0, n.jsx)("path", {
                                                                            d: "M0 48C1.93283e-07 52.4183 3.58172 56 8 56H0V48Z",
                                                                        }),
                                                                        (0, n.jsx)("path", {
                                                                            d: "M8 0C3.58172 0 0 3.58172 0 8V0H8Z",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, n.jsx)(Q.vN, {
                                                        children: (0, n.jsxs)("button", {
                                                            className: eo.H1,
                                                            onMouseDown: ef("end"),
                                                            onKeyDown: em,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": o + P.zj,
                                                            "aria-valuenow": c,
                                                            "aria-valuetext": eu(c),
                                                            "aria-valuemax": s,
                                                            "aria-label": es.intl.string(es.t.bBgBYo),
                                                            children: [
                                                                (0, n.jsx)("div", { className: eo.kn }),
                                                                (0, n.jsxs)("svg", {
                                                                    className: eo.mN,
                                                                    width: "8",
                                                                    height: "56",
                                                                    viewBox: "0 0 8 56",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    "aria-hidden": !0,
                                                                    children: [
                                                                        (0, n.jsx)("path", {
                                                                            d: "M8 48C8 52.4183 4.41828 56 0 56H8V48Z",
                                                                        }),
                                                                        (0, n.jsx)("path", {
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
                                            selected: E === e.id,
                                            onSelect: () => w(e.id),
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
var em = l(933092);
function eh(e) {
    let { transitionState: t } = e,
        {
            cropStart: l,
            cropEnd: v,
            videoPlayerRef: g,
            videoURL: j,
            audioTracks: b,
            clip: C,
            activeTool: y,
            cropPreset: N,
            videoDimensions: E,
        } = (0, x.T)(),
        { analyticsLocations: w } = (0, c.Ay)(o.A.CLIPS_EDITOR),
        { tracks: k, selectedTrackId: A, setSelectedTrackId: L } = (0, H.fn)(),
        R = C.type === P.nQ.SCREENSHOT;
    a.useEffect(() => {
        if (!R) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            let t = g.current;
            if (null == t) return;
            let n = g.current?.videoElement;
            if (null == n) return;
            let a = (0, f.A)(n.duration, e.shiftKey),
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
    }, [g, R, C.type, l, v]);
    let I = a.useMemo(() => b.filter((e) => e.trackName.includes(":voice")), [b]),
        T = a.useCallback(() => {
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
                                      onClick: T,
                                      children: (0, n.jsx)("img", {
                                          className: em.V_,
                                          src: C.thumbnail,
                                          alt: C.name ?? "",
                                      }),
                                  }),
                              }),
                          ],
                      }),
            ],
        });
    let M = null == j || t !== s.ip.ENTERED,
        S = C.type === P.nQ.VOICE_CLIP,
        D = y === d.Y.CROP,
        z = null != E ? E.width / E.height : null,
        $ = D
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
              })(N, z),
        B = null;
    return (
        (B =
            D && !S
                ? (0, n.jsx)(U, {})
                : k.map((e) =>
                      e.type === P.Me.TEXT
                          ? (0, n.jsx)(K, { track: e, selected: e.id === A, onSelect: () => L(e.id) }, e.id)
                          : (e.type, null),
                  )),
        (0, n.jsx)(c.f5, {
            value: w,
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
                                          children: (0, n.jsx)(h.A, {
                                              ref: g,
                                              cropFraming: !S,
                                              frameAspectRatio: $,
                                              overlay: B,
                                              loop: !1,
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: _.fL,
                                          children: (0, n.jsx)(ed, { transitionState: t, voiceAudioTracks: I }),
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
        })
    );
}
