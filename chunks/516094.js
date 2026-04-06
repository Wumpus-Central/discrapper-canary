l.d(t, { A: () => M }), l(321073);
var a = l(627968),
    n = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(735438),
    o = l(417597),
    d = l(459192),
    c = l(990078),
    u = l(397927),
    m = l(565645),
    h = l(765671),
    p = l(607470),
    x = l(287809),
    f = l(531685),
    g = l(427262),
    v = l(372684),
    j = l(335494),
    b = l(584794),
    C = l(429364),
    y = l(696016),
    N = l(985018),
    A = l(961432),
    E = l(236911);
function k(e) {
    let { eventType: t, importance: l, style: i, title: s, description: r } = e,
        o = n.useMemo(() => (0 === l ? 16 : 0.5 === l ? 20 : 1 === l ? 24 : 16), [l]),
        m = n.useMemo(() => {
            switch (t) {
                case v.rb.KILL:
                    return (0, a.jsx)(u.gXB, { size: "custom", width: o, height: o, color: u.LU0.colors.ICON_STRONG });
                case v.rb.MULTIKILL:
                    return (0, a.jsx)(u.Gg5, { size: "custom", width: o, height: o, color: u.LU0.colors.ICON_STRONG });
                case v.rb.DEATH:
                    return (0, a.jsx)(u.VPb, { size: "custom", width: o, height: o, color: u.LU0.colors.ICON_STRONG });
                case v.rb.ASSIST:
                    return (0, a.jsx)(u.E7M, { size: "custom", width: o, height: o, color: u.LU0.colors.ICON_STRONG });
                case v.rb.ITEM:
                    return (0, a.jsx)(u.Gg5, { size: "custom", width: o, height: o, color: u.LU0.colors.ICON_STRONG });
                case v.rb.VICTORY:
                    return (0, a.jsx)(u.OR, { size: "custom", width: o, height: o, color: u.LU0.colors.ICON_STRONG });
                case v.rb.DEFEAT:
                    return (0, a.jsx)(u.iFK, { size: "custom", width: o, height: o, color: u.LU0.colors.ICON_STRONG });
                case v.rb.LEVEL_UP:
                    return (0, a.jsx)(u.TIR, { size: "custom", width: o, height: o, color: u.LU0.colors.ICON_STRONG });
                case v.rb.TREASURE:
                    return (0, a.jsx)(u.BZI, { size: "custom", width: o, height: o, color: u.LU0.colors.ICON_STRONG });
                case v.rb.OBJECTIVE_KILL:
                    return (0, a.jsx)(u.wI0, { size: "custom", width: o, height: o, color: u.LU0.colors.ICON_STRONG });
                default:
                    return null;
            }
        }, [t, o]);
    if (null == m) return null;
    let h = (0, a.jsx)("div", { className: E.HS, style: i, children: m });
    return null != s || null != r
        ? null == s || null == r
            ? (0, a.jsx)(c.m, { text: s ?? r, position: "top", children: h })
            : (0, a.jsx)(d.u, { title: s, body: r ?? "", position: "top", children: h })
        : h;
}
function I(e) {
    let { videoLength: t, clip: l, onMouseDown: i } = e,
        { timeNotches: s, subNotches: r } = n.useMemo(() => {
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
                i = e / 5;
            for (let e = i; e < t; e += i)
                if (!l.some((t) => 0.01 > Math.abs(t.time - e))) {
                    let l = (e / t) * 100;
                    n.push({ position: l });
                }
            return { timeNotches: l, subNotches: n };
        }, [t]);
    return (0, a.jsx)("div", {
        className: E.ZX,
        onMouseDown: i,
        children: (0, a.jsxs)("div", {
            className: E.QY,
            children: [
                r.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: E.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, a.jsx)("div", { className: E.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                s.map((e, t) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: E.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, a.jsx)("div", { className: E.d9 }),
                                (0, a.jsxs)(u.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: E.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, a.jsx)(S, { clip: l, videoLength: t }),
                (0, a.jsx)(w, { clip: l, videoLength: t }),
                (0, a.jsx)(L, { clip: l, videoLength: t }),
            ],
        }),
    });
}
function S(e) {
    let { clip: t, videoLength: l } = e,
        i = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === v.Gy.GAME_EVENT),
            [t.timeline, t.decision?.timestamp],
        ),
        s = n.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, a.jsx)(a.Fragment, {
        children: i.map((e, t) => {
            let l = s(e.timestamp);
            return null == l
                ? null
                : (0, a.jsx)(
                      k,
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
function w(e) {
    let { clip: t, videoLength: l } = e,
        i = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === v.Gy.SOUNDBOARD && !0 === e.signal.playing),
            [t.timeline, t.decision?.timestamp],
        ),
        s = n.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, a.jsx)(a.Fragment, {
        children: i.map((e, t) => {
            let l = s(e.timestamp);
            if (null == l || (null == e.signal.emojiId && null == e.signal.emojiName)) return null;
            let n = x.default.getUser(e.signal.userId),
                i = (0, g.mG)(n);
            return (0, a.jsx)(
                d.u,
                {
                    title: e.signal.name,
                    body: i ?? "",
                    position: "top",
                    children: (0, a.jsx)("div", {
                        className: E.HS,
                        style: { left: `${l}%` },
                        children: (0, a.jsx)(m.A, {
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
function L(e) {
    let { clip: t, videoLength: l } = e,
        i = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === v.Gy.PHRASE),
            [t.timeline, t.decision?.timestamp],
        ),
        s = n.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, a.jsx)(a.Fragment, {
        children: i.map((e, t) => {
            let l = s(e.timestamp);
            return null == l
                ? null
                : (0, a.jsx)(
                      d.u,
                      {
                          title: N.intl.string(N.t.mIkeS2),
                          body: e.signal.text,
                          position: "top",
                          children: (0, a.jsx)("div", {
                              className: E.HS,
                              style: { left: `${l}%` },
                              children: (0, a.jsx)(u.oyn, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: u.LU0.colors.ICON_STRONG,
                              }),
                          }),
                      },
                      `${e.timestamp}-${t}`,
                  );
        }),
    });
}
let M = function (e) {
    let { sourceURL: t, clip: l, voiceAudioTracks: i, transitionState: d } = e,
        {
            useCurrentTime: c,
            duration: m,
            isPlaying: x,
            cropStart: g,
            cropEnd: v,
            cropDuration: k,
            setCropStart: S,
            setCropEnd: w,
            play: L,
            pause: M,
            subscribe: D,
            seek: O,
        } = (0, C.T)(),
        P = c(),
        U = n.useRef(null),
        [G, V] = n.useState(!1),
        [H, $] = n.useState(null),
        z = n.useRef(null),
        _ = n.useRef(null),
        [K, F] = n.useState(!1),
        [B, Y] = n.useState(null);
    n.useEffect(
        () =>
            D({
                onPlay: () => {
                    $(null), F(!1);
                },
            }),
        [D],
    );
    let { ref: X, width: Q = 0, height: q = 0 } = (0, h.Ay)(),
        Z = (0, o.bG)([f.A], () => f.A.windowSize());
    n.useMemo(() => {
        Z.width, Z.height;
        let e = X.current;
        null != e && Y(e.getBoundingClientRect());
    }, [Z.width, Z.height, Q, X, d]);
    let W = n.useRef(null),
        J = n.useRef({}),
        ee = n.useCallback(
            (e, t) => {
                if (null == m) return;
                if (null == B) return null;
                let l = (((0, r.clamp)(e, B.left, B.right) - B.left) / B.width) * m,
                    a = (0, r.clamp)(l, 0, m),
                    n = H;
                null == n && t && ((n = a <= g ? "start" : a >= v ? "end" : "playhead"), x && (M(), F(!0)), $(n)),
                    "start" === n ? S(a) : "end" === n ? w(a) : "playhead" === n && O((0, r.clamp)(a, g, v));
            },
            [m, B, H, g, v, x, M, S, w, O],
        ),
        et = n.useCallback(
            (e) => {
                if (null == m) return;
                let t = (0, b.A)(m, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), S(g - t);
                        break;
                    case "ArrowRight":
                        (l = !0), S(g + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [m, S, g],
        ),
        el = n.useCallback(
            (e) => {
                if (null == m) return;
                let t = (0, b.A)(m, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), w(v - t);
                        break;
                    case "ArrowRight":
                        (l = !0), w(v + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [m, w, v],
        ),
        ea = n.useCallback(
            (e) => {
                ee(e.clientX, !0);
            },
            [ee],
        ),
        en = n.useCallback(
            (e) => {
                ee(e.clientX, !1);
            },
            [ee],
        ),
        ei = n.useCallback(() => {
            K && L(), F(!1), $(null);
        }, [K, L]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", en),
            document.addEventListener("mouseup", ei),
            () => {
                document.removeEventListener("mousemove", en), document.removeEventListener("mouseup", ei);
            }
        ),
        [en, ei],
    ),
        n.useEffect(() => {
            !(async function () {
                let e = X.current,
                    t = U.current;
                if (null == e || null == t || !G) return;
                (e.height = q), (e.width = Q);
                let l = e.getContext("2d");
                if (null == l) return;
                (l.fillStyle = "transparent"), l.fillRect(0, 0, Q, q);
                let a = Math.ceil(q * (t.videoWidth / t.videoHeight)),
                    n = Math.ceil(Q / a),
                    i = W.current;
                if (null == i) return;
                (i.width = a), (i.height = q);
                let s = i?.getContext("2d", { willReadFrequently: !0 });
                if (null == s) return;
                let r = J.current;
                if (r[n]?.length === n) {
                    for (let e = 0; e < n; e++) l.putImageData(r[n][e], a * e, 0);
                    return;
                }
                for (let e = 0; e < n; e++)
                    await new Promise((i) => {
                        (t.onseeked = () => {
                            l.drawImage(t, a * e, 0, a, q), s.drawImage(t, 0, 0, a, q);
                            let o = s.getImageData(0, 0, a, q);
                            null == r[n] && (r[n] = []), (r[n][e] = o), i();
                        }),
                            (t.currentTime = (a / Q) * m * e);
                    });
            })();
        }, [Q, q, X, m, W, G]);
    let es = P - g,
        er = n.useCallback(() => {
            O(Math.max(g, P - 10));
        }, [g, P, O]),
        eo = n.useCallback(() => {
            O(Math.min(v, P + 10));
        }, [v, P, O]),
        ed = n.useCallback(() => {
            x ? M() : L();
        }, [x, L, M]),
        ec = n.useCallback(() => V(!0), []),
        eu = (g / m) * 100,
        em = (1 - (m - v) / m) * 100,
        eh = {
            background: `linear-gradient(to right, var(--black-500) ${eu}%, transparent ${eu}%, transparent ${em}%, var(--black-500) ${em}%)`,
        };
    return (0, a.jsx)("div", {
        className: E.f4,
        children: (0, a.jsxs)("div", {
            className: E.fL,
            children: [
                (0, a.jsxs)("div", {
                    className: E.lx,
                    children: [
                        (0, a.jsx)("div", {
                            className: E.k2,
                            children: (0, a.jsx)("div", {
                                ref: _,
                                className: E.re,
                                children: (0, a.jsxs)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: E.g7,
                                    color: "text-muted",
                                    children: [T(es), (0, a.jsx)("span", { className: E.xW, children: " / " }), T(k)],
                                }),
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: E.s2,
                            children: [
                                (0, a.jsx)(u.K0, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: u.qN$,
                                    onClick: er,
                                    "aria-label": N.intl.string(A.default["dRVF+Z"]),
                                }),
                                (0, a.jsx)(u.K0, {
                                    size: "md",
                                    icon: x ? u.E$n : u.udU,
                                    onClick: ed,
                                    "aria-label": N.intl.string(x ? N.t.ZcgDJX : N.t.RscU7I),
                                }),
                                (0, a.jsx)(u.K0, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: u.i76,
                                    onClick: eo,
                                    "aria-label": N.intl.string(A.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(j.A, { onMouseDown: ea, voiceAudioTracks: i, clipId: l.id, className: E.ou }),
                (0, a.jsx)(I, { onMouseDown: ea, videoLength: m, clip: l }),
                (0, a.jsx)("div", {
                    className: E.PH,
                    children: (0, a.jsxs)("div", {
                        className: s()(E.IO, { [E.Dg]: null != H }),
                        onMouseDown: ea,
                        children: [
                            (0, a.jsx)("canvas", { className: E.zj, ref: W }),
                            (0, a.jsx)("canvas", { className: E.Ay, ref: X }),
                            (0, a.jsx)(u.vN3, {
                                children: (0, a.jsx)("div", { tabIndex: 0, ref: z, className: E.lG }),
                            }),
                            (0, a.jsx)(p.A, {
                                preload: "auto",
                                className: E.Fi,
                                ref: U,
                                src: t,
                                muted: !0,
                                onLoadedMetadata: ec,
                            }),
                            (0, a.jsx)("div", { className: E.QT, style: eh }),
                            (0, a.jsxs)("div", {
                                className: E.Ws,
                                style: {
                                    left: null != m ? `${(g / m) * 100}%` : "0",
                                    right: null != m ? `${((m - v) / m) * 100}%` : "0",
                                },
                                children: [
                                    (0, a.jsx)(u.vN3, {
                                        children: (0, a.jsx)("button", {
                                            className: s()(E.uI, { [E.cB]: "start" === H }),
                                            onMouseDown: ea,
                                            onKeyDown: et,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": g,
                                            "aria-valuetext": R(g),
                                            "aria-valuemax": v - y.zj,
                                            "aria-label": N.intl.string(N.t["+BTvw8"]),
                                            children: (0, a.jsx)("div", { className: E.FV }),
                                        }),
                                    }),
                                    (0, a.jsx)(u.vN3, {
                                        children: (0, a.jsx)("button", {
                                            className: s()(E.H1, { [E.cB]: "end" === H }),
                                            onMouseDown: ea,
                                            onKeyDown: el,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": g + y.zj,
                                            "aria-valuenow": v,
                                            "aria-valuetext": R(v),
                                            "aria-valuemax": m,
                                            "aria-label": N.intl.string(N.t.bBgBYo),
                                            children: (0, a.jsx)("div", { className: E.kn }),
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
function T(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`;
}
function R(e) {
    let t = Math.floor(e / 60),
        l = N.intl.formatToPlainString(N.t.iXLF9W, { minutes: t }),
        a = N.intl.formatToPlainString(N.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
