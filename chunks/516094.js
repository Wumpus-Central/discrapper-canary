l.d(t, { A: () => Q }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(735438),
    d = l(417597),
    o = l(459192),
    c = l(990078),
    u = l(768622),
    m = l(827734),
    h = l(27232),
    p = l(918715),
    f = l(297152),
    v = l(369606),
    g = l(138134),
    x = l(499373),
    j = l(175841),
    b = l(215026),
    C = l(834730),
    y = l(534890),
    A = l(408278),
    N = l(461150),
    E = l(782134),
    w = l(113494),
    k = l(898196),
    I = l(187322),
    S = l(565645),
    L = l(765671),
    M = l(607470),
    R = l(287809),
    T = l(531685),
    D = l(427262),
    O = l(372684),
    P = l(335494),
    U = l(584794),
    G = l(429364),
    z = l(696016),
    V = l(985018),
    _ = l(445563),
    H = l(474847);
function $(e) {
    let { eventType: t, importance: l, style: i, title: s, description: r } = e,
        d = a.useMemo(() => (0 === l ? 16 : 0.5 === l ? 20 : 1 === l ? 24 : 16), [l]),
        C = a.useMemo(() => {
            switch (t) {
                case O.rb.KILL:
                    return (0, n.jsx)(u.g, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.MULTIKILL:
                    return (0, n.jsx)(h.G, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.DEATH:
                    return (0, n.jsx)(p.V, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.ASSIST:
                    return (0, n.jsx)(f.E, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.ITEM:
                    return (0, n.jsx)(h.G, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.VICTORY:
                    return (0, n.jsx)(v.O, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.DEFEAT:
                    return (0, n.jsx)(g.i, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.LEVEL_UP:
                    return (0, n.jsx)(x.T, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.TREASURE:
                    return (0, n.jsx)(j.B, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.OBJECTIVE_KILL:
                    return (0, n.jsx)(b.w, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                default:
                    return null;
            }
        }, [t, d]);
    if (null == C) return null;
    let y = (0, n.jsx)("div", { className: H.HS, style: i, children: C });
    return null != s || null != r
        ? null == s || null == r
            ? (0, n.jsx)(c.m, { text: s ?? r, position: "top", children: y })
            : (0, n.jsx)(o.u, { title: s, body: r ?? "", position: "top", children: y })
        : y;
}
function B(e) {
    let { videoLength: t, clip: l, onMouseDown: i } = e,
        { timeNotches: s, subNotches: r } = a.useMemo(() => {
            let e;
            if (null == t || t <= 0) return { timeNotches: [], subNotches: [] };
            let l = [],
                n = t / 6;
            e =
                n <= 1
                    ? 1
                    : n <= 2
                      ? 2
                      : n <= 5
                        ? 5
                        : n <= 10
                          ? 10
                          : n <= 15
                            ? 15
                            : n <= 20
                              ? 20
                              : n <= 30
                                ? 30
                                : 10 * Math.round(n / 10);
            for (let n = 0; n <= t; n += e) {
                let e = (n / t) * 100;
                l.push({ time: n, position: e });
            }
            (0 === l.length || l[l.length - 1].time < t - 2) && l.push({ time: t, position: 100 });
            let a = [],
                i = e / 5;
            for (let e = i; e < t; e += i)
                if (!l.some((t) => 0.01 > Math.abs(t.time - e))) {
                    let l = (e / t) * 100;
                    a.push({ position: l });
                }
            return { timeNotches: l, subNotches: a };
        }, [t]);
    return (0, n.jsx)("div", {
        className: H.ZX,
        onMouseDown: i,
        children: (0, n.jsxs)("div", {
            className: H.QY,
            children: [
                r.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: H.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, n.jsx)("div", { className: H.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                s.map((e, t) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: H.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, n.jsx)("div", { className: H.d9 }),
                                (0, n.jsxs)(C.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: H.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, n.jsx)(F, { clip: l, videoLength: t }),
                (0, n.jsx)(K, { clip: l, videoLength: t }),
                (0, n.jsx)(Z, { clip: l, videoLength: t }),
            ],
        }),
    });
}
function F(e) {
    let { clip: t, videoLength: l } = e,
        i = a.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === O.Gy.GAME_EVENT),
            [t.timeline, t.decision?.timestamp],
        ),
        s = a.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let n = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return n < 0 || n > l ? null : (n / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, n.jsx)(n.Fragment, {
        children: i.map((e, t) => {
            let l = s(e.timestamp);
            return null == l
                ? null
                : (0, n.jsx)(
                      $,
                      {
                          eventType: e.signal.eventType,
                          importance: e.signal.importance ?? 0,
                          title: e.signal.title,
                          description: e.signal.description,
                          style: { left: `${l}%` },
                      },
                      `${e.timestamp}-${t}`,
                  );
        }),
    });
}
function K(e) {
    let { clip: t, videoLength: l } = e,
        i = a.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === O.Gy.SOUNDBOARD && !0 === e.signal.playing),
            [t.timeline, t.decision?.timestamp],
        ),
        s = a.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let n = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return n < 0 || n > l ? null : (n / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, n.jsx)(n.Fragment, {
        children: i.map((e, t) => {
            let l = s(e.timestamp);
            if (null == l || (null == e.signal.emojiId && null == e.signal.emojiName)) return null;
            let a = R.default.getUser(e.signal.userId),
                i = (0, D.mG)(a);
            return (0, n.jsx)(
                o.u,
                {
                    title: e.signal.name,
                    body: i ?? "",
                    position: "top",
                    children: (0, n.jsx)("div", {
                        className: H.HS,
                        style: { left: `${l}%` },
                        children: (0, n.jsx)(S.A, {
                            emojiId: e.signal.emojiId ?? null,
                            emojiName: e.signal.emojiName ?? null,
                            animated: e.signal.emojiAnimated,
                            size: "reaction",
                        }),
                    }),
                },
                `${e.timestamp}-${t}`,
            );
        }),
    });
}
function Z(e) {
    let { clip: t, videoLength: l } = e,
        i = a.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === O.Gy.PHRASE),
            [t.timeline, t.decision?.timestamp],
        ),
        s = a.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let n = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return n < 0 || n > l ? null : (n / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, n.jsx)(n.Fragment, {
        children: i.map((e, t) => {
            let l = s(e.timestamp);
            return null == l
                ? null
                : (0, n.jsx)(
                      o.u,
                      {
                          title: V.intl.string(V.t.mIkeS2),
                          body: e.signal.text,
                          position: "top",
                          children: (0, n.jsx)("div", {
                              className: H.HS,
                              style: { left: `${l}%` },
                              children: (0, n.jsx)(y.o, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: m.A.colors.ICON_STRONG,
                              }),
                          }),
                      },
                      `${e.timestamp}-${t}`,
                  );
        }),
    });
}
let Q = function (e) {
    let { sourceURL: t, clip: l, voiceAudioTracks: i, transitionState: o } = e,
        {
            useCurrentTime: c,
            duration: u,
            isPlaying: m,
            cropStart: h,
            cropEnd: p,
            cropDuration: f,
            setCropStart: v,
            setCropEnd: g,
            play: x,
            pause: j,
            subscribe: b,
            seek: y,
        } = (0, G.T)(),
        S = c(),
        R = a.useRef(null),
        [D, O] = a.useState(!1),
        [$, F] = a.useState(null),
        K = a.useRef(null),
        Z = a.useRef(null),
        [Q, q] = a.useState(!1),
        [W, J] = a.useState(null);
    a.useEffect(
        () =>
            b({
                onPlay: () => {
                    F(null), q(!1);
                },
            }),
        [b],
    );
    let { ref: ee, width: et = 0, height: el = 0 } = (0, L.Ay)(),
        en = (0, d.bG)([T.A], () => T.A.windowSize());
    a.useMemo(() => {
        en.width, en.height;
        let e = ee.current;
        null != e && J(e.getBoundingClientRect());
    }, [en.width, en.height, et, ee, o]);
    let ea = a.useRef(null),
        ei = a.useRef({}),
        es = a.useCallback(
            (e, t) => {
                if (null == u) return;
                if (null == W) return null;
                let l = (((0, r.clamp)(e, W.left, W.right) - W.left) / W.width) * u,
                    n = (0, r.clamp)(l, 0, u),
                    a = $;
                null == a && t && ((a = n <= h ? "start" : n >= p ? "end" : "playhead"), m && (j(), q(!0)), F(a)),
                    "start" === a ? v(n) : "end" === a ? g(n) : "playhead" === a && y((0, r.clamp)(n, h, p));
            },
            [u, W, $, h, p, m, j, v, g, y],
        ),
        er = a.useCallback(
            (e) => {
                if (null == u) return;
                let t = (0, U.A)(u, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), v(h - t);
                        break;
                    case "ArrowRight":
                        (l = !0), v(h + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [u, v, h],
        ),
        ed = a.useCallback(
            (e) => {
                if (null == u) return;
                let t = (0, U.A)(u, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), g(p - t);
                        break;
                    case "ArrowRight":
                        (l = !0), g(p + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [u, g, p],
        ),
        eo = a.useCallback(
            (e) => {
                es(e.clientX, !0);
            },
            [es],
        ),
        ec = a.useCallback(
            (e) => {
                es(e.clientX, !1);
            },
            [es],
        ),
        eu = a.useCallback(() => {
            Q && x(), q(!1), F(null);
        }, [Q, x]);
    a.useEffect(
        () => (
            document.addEventListener("mousemove", ec),
            document.addEventListener("mouseup", eu),
            () => {
                document.removeEventListener("mousemove", ec), document.removeEventListener("mouseup", eu);
            }
        ),
        [ec, eu],
    ),
        a.useEffect(() => {
            !(async function () {
                let e = ee.current,
                    t = R.current;
                if (null == e || null == t || !D) return;
                (e.height = el), (e.width = et);
                let l = e.getContext("2d");
                if (null == l) return;
                (l.fillStyle = "transparent"), l.fillRect(0, 0, et, el);
                let n = Math.ceil(el * (t.videoWidth / t.videoHeight)),
                    a = Math.ceil(et / n),
                    i = ea.current;
                if (null == i) return;
                (i.width = n), (i.height = el);
                let s = i?.getContext("2d", { willReadFrequently: !0 });
                if (null == s) return;
                let r = ei.current;
                if (r[a]?.length === a) {
                    for (let e = 0; e < a; e++) l.putImageData(r[a][e], n * e, 0);
                    return;
                }
                for (let e = 0; e < a; e++)
                    await new Promise((i) => {
                        (t.onseeked = () => {
                            l.drawImage(t, n * e, 0, n, el), s.drawImage(t, 0, 0, n, el);
                            let d = s.getImageData(0, 0, n, el);
                            null == r[a] && (r[a] = []), (r[a][e] = d), i();
                        }),
                            (t.currentTime = (n / et) * u * e);
                    });
            })();
        }, [et, el, ee, u, ea, D]);
    let em = S - h,
        eh = a.useCallback(() => {
            y(Math.max(h, S - 10));
        }, [h, S, y]),
        ep = a.useCallback(() => {
            y(Math.min(p, S + 10));
        }, [p, S, y]),
        ef = a.useCallback(() => {
            m ? j() : x();
        }, [m, x, j]),
        ev = a.useCallback(() => O(!0), []),
        eg = (h / u) * 100,
        ex = (1 - (u - p) / u) * 100,
        ej = {
            background: `linear-gradient(to right, var(--black-500) ${eg}%, transparent ${eg}%, transparent ${ex}%, var(--black-500) ${ex}%)`,
        };
    return (0, n.jsx)("div", {
        className: H.f4,
        children: (0, n.jsxs)("div", {
            className: H.fL,
            children: [
                (0, n.jsxs)("div", {
                    className: H.lx,
                    children: [
                        (0, n.jsx)("div", {
                            className: H.k2,
                            children: (0, n.jsx)("div", {
                                ref: Z,
                                className: H.re,
                                children: (0, n.jsxs)(C.E, {
                                    variant: "text-sm/normal",
                                    className: H.g7,
                                    color: "text-muted",
                                    children: [X(em), (0, n.jsx)("span", { className: H.xW, children: " / " }), X(f)],
                                }),
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: H.s2,
                            children: [
                                (0, n.jsx)(A.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: N.q,
                                    onClick: eh,
                                    "aria-label": V.intl.string(_.default["dRVF+Z"]),
                                }),
                                (0, n.jsx)(A.K, {
                                    size: "md",
                                    icon: m ? w.E : E.u,
                                    onClick: ef,
                                    "aria-label": V.intl.string(m ? V.t.ZcgDJX : V.t.RscU7I),
                                }),
                                (0, n.jsx)(A.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: k.i,
                                    onClick: ep,
                                    "aria-label": V.intl.string(_.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(P.A, { onMouseDown: eo, voiceAudioTracks: i, clipId: l.id, className: H.ou }),
                (0, n.jsx)(B, { onMouseDown: eo, videoLength: u, clip: l }),
                (0, n.jsx)("div", {
                    className: H.PH,
                    children: (0, n.jsxs)("div", {
                        className: s()(H.IO, { [H.Dg]: null != $ }),
                        onMouseDown: eo,
                        children: [
                            (0, n.jsx)("canvas", { className: H.zj, ref: ea }),
                            (0, n.jsx)("canvas", { className: H.Ay, ref: ee }),
                            (0, n.jsx)(I.vN, { children: (0, n.jsx)("div", { tabIndex: 0, ref: K, className: H.lG }) }),
                            (0, n.jsx)(M.A, {
                                preload: "auto",
                                className: H.Fi,
                                ref: R,
                                src: t,
                                muted: !0,
                                onLoadedMetadata: ev,
                            }),
                            (0, n.jsx)("div", { className: H.QT, style: ej }),
                            (0, n.jsxs)("div", {
                                className: H.Ws,
                                style: {
                                    left: null != u ? `${(h / u) * 100}%` : "0",
                                    right: null != u ? `${((u - p) / u) * 100}%` : "0",
                                },
                                children: [
                                    (0, n.jsx)(I.vN, {
                                        children: (0, n.jsx)("button", {
                                            className: s()(H.uI, { [H.cB]: "start" === $ }),
                                            onMouseDown: eo,
                                            onKeyDown: er,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": h,
                                            "aria-valuetext": Y(h),
                                            "aria-valuemax": p - z.zj,
                                            "aria-label": V.intl.string(V.t["+BTvw8"]),
                                            children: (0, n.jsx)("div", { className: H.FV }),
                                        }),
                                    }),
                                    (0, n.jsx)(I.vN, {
                                        children: (0, n.jsx)("button", {
                                            className: s()(H.H1, { [H.cB]: "end" === $ }),
                                            onMouseDown: eo,
                                            onKeyDown: ed,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": h + z.zj,
                                            "aria-valuenow": p,
                                            "aria-valuetext": Y(p),
                                            "aria-valuemax": u,
                                            "aria-label": V.intl.string(V.t.bBgBYo),
                                            children: (0, n.jsx)("div", { className: H.kn }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
};
function X(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        n = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (n = n < 10 ? "0" + n : n), `${t}:${l}.${n}`;
}
function Y(e) {
    let t = Math.floor(e / 60),
        l = V.intl.formatToPlainString(V.t.iXLF9W, { minutes: t }),
        n = V.intl.formatToPlainString(V.t.geSp4K, { seconds: e % 60 });
    return `${l} ${n}`;
}
