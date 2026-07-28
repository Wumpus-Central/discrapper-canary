l.d(t, { A: () => eh });
var n = l(627968),
    a = l(64700),
    i = l(621466),
    s = l(231723),
    r = l(939249),
    c = l(256905),
    o = l(372684),
    u = l(635793),
    d = l(530574),
    m = l(675747),
    h = l(584794),
    f = l(362081),
    x = l(56416);
let v = () => {
    let { clip: e } = (0, f.T)();
    return "" !== e.thumbnail
        ? (0, n.jsx)("img", { className: x.T, src: e.thumbnail, alt: "", "aria-hidden": !0 })
        : null;
};
var p = l(17928),
    j = l(342952),
    g = l(834730),
    b = l(778712),
    C = l(429913),
    y = l(47167),
    N = l(713654),
    E = l(769015),
    k = l(145497),
    w = l(734057),
    A = l(71393),
    L = l(287809),
    R = l(58703),
    T = l(403362),
    M = l(818433),
    I = l(827461);
function D(e) {
    let { icon: t, label: l } = e;
    return (0, n.jsxs)("div", {
        className: I.Ho,
        children: [
            null != t && (0, n.jsx)("div", { className: I.t8, children: t }),
            (0, n.jsx)(g.E, { variant: "text-xs/normal", color: "text-muted", className: I.Mk, children: l }),
        ],
    });
}
function S() {
    let { clip: e } = (0, f.T)(),
        t = (0, C.h)(e.applicationId),
        l = (0, p.yK)([L.default], () => e.users.map(L.default.getUser).filter(T.Vq)),
        a = (0, p.bG)([A.A], () => (null != e.guildId ? A.A.getGuild(e.guildId) : null)),
        i = (0, p.bG)([w.A], () => (null != e.channelId ? w.A.getChannel(e.channelId) : null)),
        s = (0, y.Ay)(i),
        r = null != i ? (0, N.gU)(i, a) : null,
        c = t?.name ?? e.applicationName,
        o =
            null != i && null != r
                ? (0, n.jsx)(r, { size: "custom", width: 16, height: 16, color: "currentColor" })
                : null;
    return (0, n.jsxs)("div", {
        className: I.wx,
        children: [
            (0, n.jsx)(M.A, { variant: "text-md/medium", className: I.DD }),
            (0, n.jsxs)("div", {
                className: I.KW,
                children: [
                    null != c &&
                        "" !== c &&
                        (0, n.jsx)(D, {
                            icon: null != t ? (0, n.jsx)(E.A, { game: t, size: E.M.XXSMALL }) : void 0,
                            label: c,
                        }),
                    null != a && (0, n.jsx)(D, { icon: (0, n.jsx)(k.Ay, { guild: a, iconSize: 16 }), label: a.name }),
                    null != o && (0, n.jsx)(D, { icon: o, label: s ?? "" }),
                    (0, n.jsx)(D, { label: (0, R.mk)(new Date(e.createdAt)) }),
                    l.length > 0 &&
                        (0, n.jsx)("div", {
                            className: I.Ho,
                            children: (0, n.jsx)(j.A, { users: l, maxUsers: 10, size: b._3.SIZE_16 }),
                        }),
                ],
            }),
        ],
    });
}
var O = l(328820),
    P = l(136826);
let _ = { [o.yz.ORIGINAL]: null, [o.yz.PORTRAIT_9_16]: 9 / 16, [o.yz.LANDSCAPE_16_9]: 16 / 9 };
function z() {
    let { cropPreset: e, videoPlayerRef: t } = (0, f.T)(),
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
                    u = _[e],
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
        (0, n.jsx)("div", { ref: l, className: P.pC, children: (0, n.jsx)("div", { ref: i, className: P.E$ }) })
    );
}
var U = l(503698),
    $ = l.n(U),
    B = l(435558),
    G = l(853073),
    H = l(112961);
function F(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { videoPlayerRef: s, useCurrentTime: r } = (0, f.T)(),
        { updateTextTrackData: c } = (0, G.j)(),
        o = r(),
        u = a.useRef(null),
        d = a.useRef(null),
        m = a.useRef(null),
        h = a.useRef(!1),
        x = a.useRef({ x: 0, y: 0 }),
        { position: v } = t.data,
        p = a.useRef(v),
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
            (p.current = v), j();
        }, [v, j]);
    let b = a.useCallback(
            (e) => {
                if (!h.current) return;
                let l = m.current;
                if (null == l) return;
                let n = u.current,
                    a = n?.getBoundingClientRect();
                if (null == a) return;
                let i = (0, B.clamp)((e.clientX - a.left - l.left) / l.width - x.current.x, 0, 1),
                    s = (0, B.clamp)((e.clientY - a.top - l.top) / l.height - x.current.y, 0, 1);
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
                    x.current = { x: n - v.x, y: a - v.y };
                } else x.current = { x: 0, y: 0 };
                h.current = !0;
            },
            [i, v.x, v.y],
        ),
        N = o >= t.startSec - 0.05 && o <= t.endSec + 0.05,
        { text: E, style: k } = t.data,
        w = O.jH[k.strokeWidth];
    return (0, n.jsx)("div", {
        ref: u,
        className: H.at,
        children: (0, n.jsxs)("div", {
            ref: d,
            className: $()(H.DU, { [H.oy]: l }),
            style: { display: N ? void 0 : "none", fontSize: k.fontSize },
            onMouseDown: y,
            children: [
                w > 0 &&
                    (0, n.jsx)("span", {
                        "aria-hidden": !0,
                        className: H.Cp,
                        style: { color: k.strokeColor, WebkitTextStroke: `${2 * w}px ${k.strokeColor}` },
                        children: E,
                    }),
                (0, n.jsx)("span", { className: H.Lo, style: { color: k.color }, children: E }),
            ],
        }),
    });
}
l(321073);
var K = l(702841),
    V = l(408278),
    X = l(461150),
    Z = l(782134),
    W = l(113494),
    Y = l(898196),
    Q = l(187322),
    J = l(765671),
    q = l(531685),
    ee = l(335494),
    et = l(589049),
    el = l(118925);
function en(e) {
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
                if ("start" === t.mode) m((0, B.clamp)(t.initialStart + l, 0, t.initialEnd - 1), t.initialEnd);
                else if ("end" === t.mode) {
                    let e = (0, B.clamp)(t.initialEnd + l, t.initialStart + 1, o);
                    m(t.initialStart, e);
                } else {
                    let e = t.initialEnd - t.initialStart,
                        n = (0, B.clamp)(t.initialStart + l, 0, o - e);
                    m(n, n + e);
                }
            },
            [p, m, o],
        ),
        b = a.useCallback(() => {
            (f.current = null), v(null);
        }, []);
    a.useEffect(() => {
        if (null != x)
            return (
                document.addEventListener("mousemove", j),
                document.addEventListener("mouseup", b),
                () => {
                    document.removeEventListener("mousemove", j), document.removeEventListener("mouseup", b);
                }
            );
    }, [x, j, b]);
    let C = a.useCallback(
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
                    ? ((n = !0), (a = (0, B.clamp)(s - t, 0, o - l)))
                    : "ArrowRight" === e.key && ((n = !0), (a = (0, B.clamp)(s + t, 0, o - l))),
                    n && (e.preventDefault(), e.stopPropagation(), m(a, a + l));
            },
            [s, c, o, m],
        ),
        N = a.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    n = s;
                "ArrowLeft" === e.key
                    ? ((l = !0), (n = (0, B.clamp)(s - t, 0, c - 1)))
                    : "ArrowRight" === e.key && ((l = !0), (n = (0, B.clamp)(s + t, 0, c - 1))),
                    l && (e.preventDefault(), e.stopPropagation(), m(n, c));
            },
            [s, c, m],
        ),
        E = a.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    n = c;
                "ArrowLeft" === e.key
                    ? ((l = !0), (n = (0, B.clamp)(c - t, s + 1, o)))
                    : "ArrowRight" === e.key && ((l = !0), (n = (0, B.clamp)(c + t, s + 1, o))),
                    l && (e.preventDefault(), e.stopPropagation(), m(s, n));
            },
            [s, c, o, m],
        ),
        k = 0 === o ? 0 : (s / o) * 100,
        w = 0 === o ? 0 : ((c - s) / o) * 100;
    return (0, n.jsx)("div", {
        className: el.nM,
        children: (0, n.jsxs)("div", {
            ref: h,
            className: el.hz,
            children: [
                (0, n.jsx)(Q.vN, {
                    children: (0, n.jsx)(r.D, {
                        className: $()(el.u4, { [el.jX]: u }),
                        style: { left: `${k}%`, width: `${w}%`, backgroundColor: i },
                        onMouseDown: C("move"),
                        onKeyDown: y,
                        "aria-label": t,
                        children: (0, n.jsx)("div", {
                            className: el.Kq,
                            children: (0, n.jsx)(g.E, {
                                variant: "text-sm/medium",
                                color: "none",
                                className: el.Vd,
                                children: l,
                            }),
                        }),
                    }),
                }),
                (0, n.jsx)(Q.vN, {
                    children: (0, n.jsx)("button", {
                        className: el.YQ,
                        style: { left: `${k}%` },
                        onMouseDown: C("start"),
                        onKeyDown: N,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": 0,
                        "aria-valuenow": s,
                        "aria-valuemax": c - 1,
                        "aria-label": t,
                        children: (0, n.jsx)("div", { className: el.gt }),
                    }),
                }),
                (0, n.jsx)(Q.vN, {
                    children: (0, n.jsx)("button", {
                        className: el.JZ,
                        style: { left: `${k + w}%` },
                        onMouseDown: C("end"),
                        onKeyDown: E,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": s + 1,
                        "aria-valuenow": c,
                        "aria-valuemax": o,
                        "aria-label": t,
                        children: (0, n.jsx)("div", { className: el.gt }),
                    }),
                }),
            ],
        }),
    });
}
var ea = l(696016),
    ei = l(16590),
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
            play: x,
            pause: p,
            subscribe: j,
            seek: b,
            clip: C,
            generateThumbnails: y,
            videoDimensions: N,
        } = (0, f.T)(),
        { tracks: E, selectedTrackId: k, setSelectedTrackId: w, updateTrackRange: A } = (0, G.j)(),
        L = i(),
        [R, T] = a.useState(null),
        M = a.useRef(null),
        I = a.useRef(null),
        [D, S] = a.useState(!1),
        [P, _] = a.useState(null);
    a.useEffect(
        () =>
            j({
                onPlay: () => {
                    T(null), S(!1);
                },
            }),
        [j],
    );
    let { ref: z, width: U = 0, height: H = 0 } = (0, J.Ay)(),
        F = (0, K.bG)([q.A], () => q.A.windowSize()),
        el = a.useRef(null),
        ed = a.useCallback(() => {
            let e = z.current;
            null != e && _(e.getBoundingClientRect());
        }, [z]);
    a.useMemo(() => {
        F.width, F.height, ed();
    }, [F.width, F.height, U, l, ed]),
        a.useEffect(() => {
            let e = el.current;
            if (null != e) return e.addEventListener("scroll", ed), () => e.removeEventListener("scroll", ed);
        }, [ed]);
    let em = a.useCallback(
            (e, t) => {
                if (null == s || null == P) return;
                let l = (((0, B.clamp)(e, P.left, P.right) - P.left) / P.width) * s,
                    n = (0, B.clamp)(l, 0, s),
                    a = R;
                null == a && t && ((a = "playhead"), r && (p(), S(!0)), T(a)),
                    "start" === a ? d(n) : "end" === a ? m(n) : "playhead" === a && b((0, B.clamp)(n, c, o));
            },
            [s, P, R, c, o, r, p, d, m, b],
        ),
        eh = a.useCallback(
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
        ex = a.useCallback(
            (e) => {
                em(e.clientX, !0);
            },
            [em],
        ),
        ev = a.useCallback(
            (e) => (t) => {
                t.stopPropagation(), r && (p(), S(!0)), T(e);
            },
            [r, p],
        ),
        ep = a.useCallback(
            (e) => {
                em(e.clientX, !1);
            },
            [em],
        ),
        ej = a.useCallback(() => {
            D && x(), S(!1), T(null);
        }, [D, x]);
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
        if (null == N) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil(H * (N.width / N.height));
        return { numberOfPreviews: Math.ceil(U / e), timelinePreviewWidth: e };
    }, [H, U, N]);
    a.useEffect(() => {
        if (0 === eg || 0 === eb) return;
        let e = z.current;
        if (null == e) return;
        (e.height = H), (e.width = U);
        let t = e.getContext("2d");
        if (null == t) return;
        (t.fillStyle = "transparent"), t.fillRect(0, 0, U, H);
        let l = [];
        for (let e = 0; e < eg; e++) l.push((eb / U) * s * e);
        return y(l, eb, H, (e) => {
            for (let l = 0; l < e.length; l++) t.drawImage(e[l], eb * l, 0, eb, H), e[l].close();
        });
    }, [H, z, s, eg, eb, y, U]);
    let eC = L - c,
        ey = a.useCallback(() => {
            b(Math.max(c, L - 10));
        }, [c, L, b]),
        eN = a.useCallback(() => {
            b(Math.min(o, L + 10));
        }, [o, L, b]),
        eE = a.useCallback(() => {
            r ? p() : x();
        }, [r, x, p]),
        ek = (c / s) * 100,
        ew = (1 - (s - o) / s) * 100,
        eA = {
            background: `linear-gradient(to right, var(--black-500) ${ek}%, transparent ${ek}%, transparent ${ew}%, var(--black-500) ${ew}%)`,
        };
    return (0, n.jsxs)("div", {
        className: ec.f4,
        children: [
            (0, n.jsx)("div", { className: ec.qs }),
            (0, n.jsxs)("div", {
                className: ec.lx,
                children: [
                    (0, n.jsx)(v, {}),
                    (0, n.jsx)("div", {
                        className: ec.k2,
                        children: (0, n.jsx)("div", {
                            ref: I,
                            className: ec.re,
                            children: (0, n.jsxs)(g.E, {
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
                            (0, n.jsx)(V.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: X.q,
                                onClick: ey,
                                "aria-label": es.intl.string(er.default["dRVF+Z"]),
                            }),
                            (0, n.jsx)(V.K, {
                                size: "sm",
                                icon: r ? W.E : Z.u,
                                onClick: eE,
                                "aria-label": es.intl.string(r ? es.t.ZcgDJX : es.t.RscU7I),
                                variant: "icon-only",
                            }),
                            (0, n.jsx)(V.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: Y.i,
                                onClick: eN,
                                "aria-label": es.intl.string(er.default.yV2FLL),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: ec.fL,
                ref: el,
                children: [
                    (0, n.jsx)(et.A, { onMouseDown: ex, videoLength: s, clip: C, noBottomMargin: !0, compact: !0 }),
                    (0, n.jsx)(ee.A, {
                        onMouseDown: ex,
                        voiceAudioTracks: t,
                        clipId: C.id,
                        className: ec.ou,
                        alwaysRenderContainer: !0,
                    }),
                    (0, n.jsx)("div", {
                        className: ec.iI,
                        children: (0, n.jsxs)("div", {
                            className: ec.Qp,
                            children: [
                                (0, n.jsx)(v, {}),
                                (0, n.jsx)("div", { className: ec.bd }),
                                (0, n.jsx)("div", {
                                    className: ec.PH,
                                    children: (0, n.jsxs)("div", {
                                        className: $()(ec.IO, { [ec.Dg]: null != R }),
                                        onMouseDown: ex,
                                        children: [
                                            (0, n.jsx)("canvas", { className: ec.Ay, ref: z }),
                                            (0, n.jsx)(Q.vN, {
                                                children: (0, n.jsx)("div", {
                                                    tabIndex: 0,
                                                    ref: M,
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
                                            (0, n.jsx)("div", { className: ec.QT, style: eA }),
                                            (0, n.jsxs)("div", {
                                                className: ec.Ws,
                                                style: {
                                                    left: null != s ? `${(c / s) * 100}%` : "0",
                                                    right: null != s ? `${((s - o) / s) * 100}%` : "0",
                                                },
                                                children: [
                                                    (0, n.jsx)(Q.vN, {
                                                        children: (0, n.jsx)("button", {
                                                            className: ec.uI,
                                                            onMouseDown: ev("start"),
                                                            onKeyDown: eh,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": 0,
                                                            "aria-valuenow": c,
                                                            "aria-valuetext": eu(c),
                                                            "aria-valuemax": o - ea.zj,
                                                            "aria-label": es.intl.string(es.t["+BTvw8"]),
                                                            children: (0, n.jsx)("div", { className: ec.FV }),
                                                        }),
                                                    }),
                                                    (0, n.jsx)(Q.vN, {
                                                        children: (0, n.jsx)("button", {
                                                            className: ec.H1,
                                                            onMouseDown: ev("end"),
                                                            onKeyDown: ef,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": c + ea.zj,
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
                                E.map((e) =>
                                    (0, n.jsx)(
                                        en,
                                        {
                                            label: e.type === O.Me.TEXT ? es.intl.string(ei.default.WvkbtB) : "",
                                            text: e.data.text,
                                            color: O.mY[e.type],
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
function eh(e) {
    let { transitionState: t } = e,
        {
            cropStart: l,
            cropEnd: x,
            videoPlayerRef: p,
            videoURL: j,
            audioTracks: g,
            clip: b,
            activeTool: C,
            cropPreset: y,
            videoDimensions: N,
        } = (0, f.T)(),
        { tracks: E, selectedTrackId: k, setSelectedTrackId: w } = (0, G.j)(),
        A = b.type === o.nQ.SCREENSHOT;
    a.useEffect(() => {
        if (!A) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            let t = p.current;
            if (null == t) return;
            let n = p.current?.videoElement;
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
                    (s = !0), t.seek(Math.min(x, n.currentTime + a));
            }
            s && (e.stopPropagation(), e.preventDefault());
        }
    }, [p, A, b.type, l, x]);
    let L = a.useMemo(() => g.filter((e) => e.trackName.includes(":voice")), [g]),
        R = a.useCallback(() => {
            (0, c.R)(
                {
                    items: [{ type: "IMAGE", url: b.thumbnail, proxyUrl: b.thumbnail, alt: b.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [b.thumbnail, b.name]);
    if (A)
        return (0, n.jsxs)("div", {
            className: P.OJ,
            children: [
                (0, n.jsx)(v, {}),
                t !== s.ip.ENTERED
                    ? (0, n.jsx)(d.A, {})
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(S, {}),
                              (0, n.jsx)("div", {
                                  className: em.zT,
                                  children: (0, n.jsx)(r.D, {
                                      className: em.xS,
                                      onClick: R,
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
    let T = null == j || t !== s.ip.ENTERED,
        M = b.type === o.nQ.VOICE_CLIP,
        I = C === u.Y.CROP,
        D = null != N ? N.width / N.height : null,
        _ = I
            ? D
            : (function (e, t) {
                  switch (e) {
                      case o.yz.PORTRAIT_9_16:
                          return 9 / 16;
                      case o.yz.LANDSCAPE_16_9:
                          return 16 / 9;
                      case o.yz.ORIGINAL:
                      default:
                          return t;
                  }
              })(y, D),
        U = null;
    return (
        (U =
            I && !M
                ? (0, n.jsx)(z, {})
                : E.map((e) =>
                      e.type === O.Me.TEXT
                          ? (0, n.jsx)(F, { track: e, selected: e.id === k, onSelect: () => w(e.id) }, e.id)
                          : (e.type, null),
                  )),
        (0, n.jsxs)("div", {
            className: P.OJ,
            children: [
                (0, n.jsx)(v, {}),
                (0, n.jsx)("div", {
                    className: P.zT,
                    children: T
                        ? (0, n.jsx)(d.A, {})
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(S, {}),
                                  (0, n.jsx)("div", {
                                      className: P.x3,
                                      children: (0, n.jsx)(m.A, {
                                          ref: p,
                                          cropFraming: !M,
                                          frameAspectRatio: _,
                                          overlay: U,
                                          loop: !1,
                                      }),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: P.fL,
                                      children: (0, n.jsx)(ed, { transitionState: t, voiceAudioTracks: L }),
                                  }),
                              ],
                          }),
                }),
            ],
        })
    );
}
