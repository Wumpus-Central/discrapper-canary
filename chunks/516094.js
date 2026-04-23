l.d(t, { A: () => Q }), l(321073);
var a = l(627968),
    n = l(64700),
    s = l(503698),
    i = l.n(s),
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
    V = l(696016),
    _ = l(985018),
    z = l(445563),
    H = l(474847);
function $(e) {
    let { eventType: t, importance: l, style: s, title: i, description: r } = e,
        d = n.useMemo(() => (0 === l ? 16 : 0.5 === l ? 20 : 1 === l ? 24 : 16), [l]),
        C = n.useMemo(() => {
            switch (t) {
                case O.rb.KILL:
                    return (0, a.jsx)(u.g, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.MULTIKILL:
                    return (0, a.jsx)(h.G, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.DEATH:
                    return (0, a.jsx)(p.V, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.ASSIST:
                    return (0, a.jsx)(f.E, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.ITEM:
                    return (0, a.jsx)(h.G, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.VICTORY:
                    return (0, a.jsx)(v.O, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.DEFEAT:
                    return (0, a.jsx)(g.i, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.LEVEL_UP:
                    return (0, a.jsx)(x.T, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.TREASURE:
                    return (0, a.jsx)(j.B, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                case O.rb.OBJECTIVE_KILL:
                    return (0, a.jsx)(b.w, { size: "custom", width: d, height: d, color: m.A.colors.ICON_STRONG });
                default:
                    return null;
            }
        }, [t, d]);
    if (null == C) return null;
    let y = (0, a.jsx)("div", { className: H.HS, style: s, children: C });
    return null != i || null != r
        ? null == i || null == r
            ? (0, a.jsx)(c.m, { text: i ?? r, position: "top", children: y })
            : (0, a.jsx)(o.u, { title: i, body: r ?? "", position: "top", children: y })
        : y;
}
function F(e) {
    let { videoLength: t, clip: l, onMouseDown: s } = e,
        { timeNotches: i, subNotches: r } = n.useMemo(() => {
            let e;
            if (null == t || t <= 0) return { timeNotches: [], subNotches: [] };
            let l = [],
                a = t / 6;
            e =
                a <= 1
                    ? 1
                    : a <= 2
                      ? 2
                      : a <= 5
                        ? 5
                        : a <= 10
                          ? 10
                          : a <= 15
                            ? 15
                            : a <= 20
                              ? 20
                              : a <= 30
                                ? 30
                                : 10 * Math.round(a / 10);
            for (let a = 0; a <= t; a += e) {
                let e = (a / t) * 100;
                l.push({ time: a, position: e });
            }
            (0 === l.length || l[l.length - 1].time < t - 2) && l.push({ time: t, position: 100 });
            let n = [],
                s = e / 5;
            for (let e = s; e < t; e += s)
                if (!l.some((t) => 0.01 > Math.abs(t.time - e))) {
                    let l = (e / t) * 100;
                    n.push({ position: l });
                }
            return { timeNotches: l, subNotches: n };
        }, [t]);
    return (0, a.jsx)("div", {
        className: H.ZX,
        onMouseDown: s,
        children: (0, a.jsxs)("div", {
            className: H.QY,
            children: [
                r.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: H.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, a.jsx)("div", { className: H.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                i.map((e, t) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: H.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, a.jsx)("div", { className: H.d9 }),
                                (0, a.jsxs)(C.E, {
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
                (0, a.jsx)(B, { clip: l, videoLength: t }),
                (0, a.jsx)(K, { clip: l, videoLength: t }),
                (0, a.jsx)(Z, { clip: l, videoLength: t }),
            ],
        }),
    });
}
function B(e) {
    let { clip: t, videoLength: l } = e,
        s = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === O.Gy.GAME_EVENT),
            [t.timeline, t.decision?.timestamp],
        ),
        i = n.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, a.jsx)(a.Fragment, {
        children: s.map((e, t) => {
            let l = i(e.timestamp);
            return null == l
                ? null
                : (0, a.jsx)(
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
        s = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === O.Gy.SOUNDBOARD && !0 === e.signal.playing),
            [t.timeline, t.decision?.timestamp],
        ),
        i = n.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, a.jsx)(a.Fragment, {
        children: s.map((e, t) => {
            let l = i(e.timestamp);
            if (null == l || (null == e.signal.emojiId && null == e.signal.emojiName)) return null;
            let n = R.default.getUser(e.signal.userId),
                s = (0, D.mG)(n);
            return (0, a.jsx)(
                o.u,
                {
                    title: e.signal.name,
                    body: s ?? "",
                    position: "top",
                    children: (0, a.jsx)("div", {
                        className: H.HS,
                        style: { left: `${l}%` },
                        children: (0, a.jsx)(S.A, {
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
        s = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === O.Gy.PHRASE),
            [t.timeline, t.decision?.timestamp],
        ),
        i = n.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, a.jsx)(a.Fragment, {
        children: s.map((e, t) => {
            let l = i(e.timestamp);
            return null == l
                ? null
                : (0, a.jsx)(
                      o.u,
                      {
                          title: _.intl.string(_.t.mIkeS2),
                          body: e.signal.text,
                          position: "top",
                          children: (0, a.jsx)("div", {
                              className: H.HS,
                              style: { left: `${l}%` },
                              children: (0, a.jsx)(y.o, {
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
    let { sourceURL: t, clip: l, voiceAudioTracks: s, transitionState: o } = e,
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
        R = n.useRef(null),
        [D, O] = n.useState(!1),
        [$, B] = n.useState(null),
        K = n.useRef(null),
        Z = n.useRef(null),
        [Q, q] = n.useState(!1),
        [W, J] = n.useState(null);
    n.useEffect(
        () =>
            b({
                onPlay: () => {
                    B(null), q(!1);
                },
            }),
        [b],
    );
    let { ref: ee, width: et = 0, height: el = 0 } = (0, L.Ay)(),
        ea = (0, d.bG)([T.A], () => T.A.windowSize());
    n.useMemo(() => {
        ea.width, ea.height;
        let e = ee.current;
        null != e && J(e.getBoundingClientRect());
    }, [ea.width, ea.height, et, ee, o]);
    let en = n.useRef(null),
        es = n.useRef({}),
        ei = n.useCallback(
            (e, t) => {
                if (null == u) return;
                if (null == W) return null;
                let l = (((0, r.clamp)(e, W.left, W.right) - W.left) / W.width) * u,
                    a = (0, r.clamp)(l, 0, u),
                    n = $;
                null == n && t && ((n = a <= h ? "start" : a >= p ? "end" : "playhead"), m && (j(), q(!0)), B(n)),
                    "start" === n ? v(a) : "end" === n ? g(a) : "playhead" === n && y((0, r.clamp)(a, h, p));
            },
            [u, W, $, h, p, m, j, v, g, y],
        ),
        er = n.useCallback(
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
        ed = n.useCallback(
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
        eo = n.useCallback(
            (e) => {
                ei(e.clientX, !0);
            },
            [ei],
        ),
        ec = n.useCallback(
            (e) => {
                ei(e.clientX, !1);
            },
            [ei],
        ),
        eu = n.useCallback(() => {
            Q && x(), q(!1), B(null);
        }, [Q, x]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", ec),
            document.addEventListener("mouseup", eu),
            () => {
                document.removeEventListener("mousemove", ec), document.removeEventListener("mouseup", eu);
            }
        ),
        [ec, eu],
    ),
        n.useEffect(() => {
            !(async function () {
                let e = ee.current,
                    t = R.current;
                if (null == e || null == t || !D) return;
                (e.height = el), (e.width = et);
                let l = e.getContext("2d");
                if (null == l) return;
                (l.fillStyle = "transparent"), l.fillRect(0, 0, et, el);
                let a = Math.ceil(el * (t.videoWidth / t.videoHeight)),
                    n = Math.ceil(et / a),
                    s = en.current;
                if (null == s) return;
                (s.width = a), (s.height = el);
                let i = s?.getContext("2d", { willReadFrequently: !0 });
                if (null == i) return;
                let r = es.current;
                if (r[n]?.length === n) {
                    for (let e = 0; e < n; e++) l.putImageData(r[n][e], a * e, 0);
                    return;
                }
                for (let e = 0; e < n; e++)
                    await new Promise((s) => {
                        (t.onseeked = () => {
                            l.drawImage(t, a * e, 0, a, el), i.drawImage(t, 0, 0, a, el);
                            let d = i.getImageData(0, 0, a, el);
                            null == r[n] && (r[n] = []), (r[n][e] = d), s();
                        }),
                            (t.currentTime = (a / et) * u * e);
                    });
            })();
        }, [et, el, ee, u, en, D]);
    let em = S - h,
        eh = n.useCallback(() => {
            y(Math.max(h, S - 10));
        }, [h, S, y]),
        ep = n.useCallback(() => {
            y(Math.min(p, S + 10));
        }, [p, S, y]),
        ef = n.useCallback(() => {
            m ? j() : x();
        }, [m, x, j]),
        ev = n.useCallback(() => O(!0), []),
        eg = (h / u) * 100,
        ex = (1 - (u - p) / u) * 100,
        ej = {
            background: `linear-gradient(to right, var(--black-500) ${eg}%, transparent ${eg}%, transparent ${ex}%, var(--black-500) ${ex}%)`,
        };
    return (0, a.jsx)("div", {
        className: H.f4,
        children: (0, a.jsxs)("div", {
            className: H.fL,
            children: [
                (0, a.jsxs)("div", {
                    className: H.lx,
                    children: [
                        (0, a.jsx)("div", {
                            className: H.k2,
                            children: (0, a.jsx)("div", {
                                ref: Z,
                                className: H.re,
                                children: (0, a.jsxs)(C.E, {
                                    variant: "text-sm/normal",
                                    className: H.g7,
                                    color: "text-muted",
                                    children: [X(em), (0, a.jsx)("span", { className: H.xW, children: " / " }), X(f)],
                                }),
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: H.s2,
                            children: [
                                (0, a.jsx)(A.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: N.q,
                                    onClick: eh,
                                    "aria-label": _.intl.string(z.default["dRVF+Z"]),
                                }),
                                (0, a.jsx)(A.K, {
                                    size: "md",
                                    icon: m ? w.E : E.u,
                                    onClick: ef,
                                    "aria-label": _.intl.string(m ? _.t.ZcgDJX : _.t.RscU7I),
                                }),
                                (0, a.jsx)(A.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: k.i,
                                    onClick: ep,
                                    "aria-label": _.intl.string(z.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(P.A, { onMouseDown: eo, voiceAudioTracks: s, clipId: l.id, className: H.ou }),
                (0, a.jsx)(F, { onMouseDown: eo, videoLength: u, clip: l }),
                (0, a.jsx)("div", {
                    className: H.PH,
                    children: (0, a.jsxs)("div", {
                        className: i()(H.IO, { [H.Dg]: null != $ }),
                        onMouseDown: eo,
                        children: [
                            (0, a.jsx)("canvas", { className: H.zj, ref: en }),
                            (0, a.jsx)("canvas", { className: H.Ay, ref: ee }),
                            (0, a.jsx)(I.vN, { children: (0, a.jsx)("div", { tabIndex: 0, ref: K, className: H.lG }) }),
                            (0, a.jsx)(M.A, {
                                preload: "auto",
                                className: H.Fi,
                                ref: R,
                                src: t,
                                muted: !0,
                                onLoadedMetadata: ev,
                            }),
                            (0, a.jsx)("div", { className: H.QT, style: ej }),
                            (0, a.jsxs)("div", {
                                className: H.Ws,
                                style: {
                                    left: null != u ? `${(h / u) * 100}%` : "0",
                                    right: null != u ? `${((u - p) / u) * 100}%` : "0",
                                },
                                children: [
                                    (0, a.jsx)(I.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: i()(H.uI, { [H.cB]: "start" === $ }),
                                            onMouseDown: eo,
                                            onKeyDown: er,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": h,
                                            "aria-valuetext": Y(h),
                                            "aria-valuemax": p - V.zj,
                                            "aria-label": _.intl.string(_.t["+BTvw8"]),
                                            children: (0, a.jsx)("div", { className: H.FV }),
                                        }),
                                    }),
                                    (0, a.jsx)(I.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: i()(H.H1, { [H.cB]: "end" === $ }),
                                            onMouseDown: eo,
                                            onKeyDown: ed,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": h + V.zj,
                                            "aria-valuenow": p,
                                            "aria-valuetext": Y(p),
                                            "aria-valuemax": u,
                                            "aria-label": _.intl.string(_.t.bBgBYo),
                                            children: (0, a.jsx)("div", { className: H.kn }),
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
        a = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`;
}
function Y(e) {
    let t = Math.floor(e / 60),
        l = _.intl.formatToPlainString(_.t.iXLF9W, { minutes: t }),
        a = _.intl.formatToPlainString(_.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
