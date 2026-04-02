a.d(t, { A: () => T }), a(321073);
var l = a(627968),
    n = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(735438),
    o = a(417597),
    u = a(459192),
    d = a(990078),
    c = a(397927),
    m = a(565645),
    h = a(765671),
    p = a(607470),
    f = a(287809),
    g = a(531685),
    v = a(427262),
    x = a(372684),
    b = a(335494),
    j = a(584794),
    _ = a(429364),
    C = a(696016),
    k = a(985018),
    y = a(961432),
    N = a(236911);
function E(e) {
    let { eventType: t, importance: a, style: i, title: s, description: r } = e,
        o = n.useMemo(() => (0 === a ? 16 : 0.5 === a ? 20 : 1 === a ? 24 : 16), [a]),
        m = n.useMemo(() => {
            switch (t) {
                case x.rb.KILL:
                    return (0, l.jsx)(c.gXB, { size: "custom", width: o, height: o, color: c.LU0.colors.ICON_STRONG });
                case x.rb.MULTIKILL:
                    return (0, l.jsx)(c.Gg5, { size: "custom", width: o, height: o, color: c.LU0.colors.ICON_STRONG });
                case x.rb.DEATH:
                    return (0, l.jsx)(c.VPb, { size: "custom", width: o, height: o, color: c.LU0.colors.ICON_STRONG });
                case x.rb.ASSIST:
                    return (0, l.jsx)(c.E7M, { size: "custom", width: o, height: o, color: c.LU0.colors.ICON_STRONG });
                case x.rb.ITEM:
                    return (0, l.jsx)(c.Gg5, { size: "custom", width: o, height: o, color: c.LU0.colors.ICON_STRONG });
                case x.rb.VICTORY:
                    return (0, l.jsx)(c.OR, { size: "custom", width: o, height: o, color: c.LU0.colors.ICON_STRONG });
                case x.rb.DEFEAT:
                    return (0, l.jsx)(c.iFK, { size: "custom", width: o, height: o, color: c.LU0.colors.ICON_STRONG });
                case x.rb.LEVEL_UP:
                    return (0, l.jsx)(c.TIR, { size: "custom", width: o, height: o, color: c.LU0.colors.ICON_STRONG });
                case x.rb.TREASURE:
                    return (0, l.jsx)(c.BZI, { size: "custom", width: o, height: o, color: c.LU0.colors.ICON_STRONG });
                case x.rb.OBJECTIVE_KILL:
                    return (0, l.jsx)(c.wI0, { size: "custom", width: o, height: o, color: c.LU0.colors.ICON_STRONG });
                default:
                    return null;
            }
        }, [t, o]);
    if (null == m) return null;
    let h = (0, l.jsx)("div", { className: N.HS, style: i, children: m });
    return null != s || null != r
        ? null == s || null == r
            ? (0, l.jsx)(d.m, { text: s ?? r, position: "top", children: h })
            : (0, l.jsx)(u.u, { title: s, body: r ?? "", position: "top", children: h })
        : h;
}
function A(e) {
    let { videoLength: t, clip: a, onMouseDown: i } = e,
        { timeNotches: s, subNotches: r } = n.useMemo(() => {
            let e;
            if (null == t || t <= 0) return { timeNotches: [], subNotches: [] };
            let a = [],
                l = t / 6;
            e =
                l <= 1
                    ? 1
                    : l <= 2
                      ? 2
                      : l <= 5
                        ? 5
                        : l <= 10
                          ? 10
                          : l <= 15
                            ? 15
                            : l <= 20
                              ? 20
                              : l <= 30
                                ? 30
                                : 10 * Math.round(l / 10);
            for (let l = 0; l <= t; l += e) {
                let e = (l / t) * 100;
                a.push({ time: l, position: e });
            }
            (0 === a.length || a[a.length - 1].time < t - 2) && a.push({ time: t, position: 100 });
            let n = [],
                i = e / 5;
            for (let e = i; e < t; e += i)
                if (!a.some((t) => 0.01 > Math.abs(t.time - e))) {
                    let a = (e / t) * 100;
                    n.push({ position: a });
                }
            return { timeNotches: a, subNotches: n };
        }, [t]);
    return (0, l.jsx)("div", {
        className: N.ZX,
        onMouseDown: i,
        children: (0, l.jsxs)("div", {
            className: N.QY,
            children: [
                r.map((e, t) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: N.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, l.jsx)("div", { className: N.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                s.map((e, t) =>
                    (0, l.jsxs)(
                        "div",
                        {
                            className: N.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, l.jsx)("div", { className: N.d9 }),
                                (0, l.jsxs)(c.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: N.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, l.jsx)(S, { clip: a, videoLength: t }),
                (0, l.jsx)(w, { clip: a, videoLength: t }),
                (0, l.jsx)(I, { clip: a, videoLength: t }),
            ],
        }),
    });
}
function S(e) {
    let { clip: t, videoLength: a } = e,
        i = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === x.Gy.GAME_EVENT),
            [t.timeline, t.decision?.timestamp],
        ),
        s = n.useCallback(
            (e) => {
                if (null == a || a <= 0 || t.decision?.timestamp == null) return null;
                let l = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return l < 0 || l > a ? null : (l / a) * 100;
            },
            [a, t.decision?.timestamp, t.length],
        );
    return (0, l.jsx)(l.Fragment, {
        children: i.map((e, t) => {
            let a = s(e.timestamp);
            return null == a
                ? null
                : (0, l.jsx)(
                      E,
                      {
                          eventType: e.signal.eventType,
                          importance: e.signal.importance ?? 0,
                          title: e.signal.title,
                          description: e.signal.description,
                          style: { left: `${a}%` },
                      },
                      `${e.timestamp}-${t}`,
                  );
        }),
    });
}
function w(e) {
    let { clip: t, videoLength: a } = e,
        i = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === x.Gy.SOUNDBOARD && !0 === e.signal.playing),
            [t.timeline, t.decision?.timestamp],
        ),
        s = n.useCallback(
            (e) => {
                if (null == a || a <= 0 || t.decision?.timestamp == null) return null;
                let l = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return l < 0 || l > a ? null : (l / a) * 100;
            },
            [a, t.decision?.timestamp, t.length],
        );
    return (0, l.jsx)(l.Fragment, {
        children: i.map((e, t) => {
            let a = s(e.timestamp);
            if (null == a || (null == e.signal.emojiId && null == e.signal.emojiName)) return null;
            let n = f.default.getUser(e.signal.userId),
                i = (0, v.mG)(n);
            return (0, l.jsx)(
                u.u,
                {
                    title: e.signal.name,
                    body: i ?? "",
                    position: "top",
                    children: (0, l.jsx)("div", {
                        className: N.HS,
                        style: { left: `${a}%` },
                        children: (0, l.jsx)(m.A, {
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
function I(e) {
    let { clip: t, videoLength: a } = e,
        i = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === x.Gy.PHRASE),
            [t.timeline, t.decision?.timestamp],
        ),
        s = n.useCallback(
            (e) => {
                if (null == a || a <= 0 || t.decision?.timestamp == null) return null;
                let l = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return l < 0 || l > a ? null : (l / a) * 100;
            },
            [a, t.decision?.timestamp, t.length],
        );
    return (0, l.jsx)(l.Fragment, {
        children: i.map((e, t) => {
            let a = s(e.timestamp);
            return null == a
                ? null
                : (0, l.jsx)(
                      u.u,
                      {
                          title: k.intl.string(k.t.mIkeS2),
                          body: e.signal.text,
                          position: "top",
                          children: (0, l.jsx)("div", {
                              className: N.HS,
                              style: { left: `${a}%` },
                              children: (0, l.jsx)(c.oyn, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: c.LU0.colors.ICON_STRONG,
                              }),
                          }),
                      },
                      `${e.timestamp}-${t}`,
                  );
        }),
    });
}
let T = function (e) {
    let { sourceURL: t, clip: a, voiceAudioTracks: i } = e,
        {
            useCurrentTime: u,
            duration: d,
            isPlaying: m,
            cropStart: f,
            cropEnd: v,
            cropDuration: x,
            setCropStart: E,
            setCropEnd: S,
            play: w,
            pause: I,
            subscribe: T,
            seek: M,
        } = (0, _.T)(),
        O = u(),
        U = n.useRef(null),
        [D, P] = n.useState(!1),
        [$, z] = n.useState(null),
        G = n.useRef(null),
        B = n.useRef(null),
        [V, F] = n.useState(!1),
        [K, H] = n.useState(null);
    n.useEffect(
        () =>
            T({
                onPlay: () => {
                    z(null), F(!1);
                },
            }),
        [T],
    );
    let { ref: W, width: J = 0, height: X = 0 } = (0, h.Ay)(),
        q = (0, o.bG)([g.A], () => g.A.windowSize());
    n.useMemo(() => {
        q.width, q.height;
        let e = W.current;
        null != e && H(e.getBoundingClientRect());
    }, [q.width, q.height, J, W]);
    let Q = n.useRef(null),
        Y = n.useRef({}),
        Z = n.useCallback(
            (e, t) => {
                if (null == d) return;
                if (null == K) return null;
                let a = (((0, r.clamp)(e, K.left, K.right) - K.left) / K.width) * d,
                    l = (0, r.clamp)(a, 0, d),
                    n = $;
                null == n && t && ((n = l <= f ? "start" : l >= v ? "end" : "playhead"), m && (I(), F(!0)), z(n)),
                    "start" === n ? E(l) : "end" === n ? S(l) : "playhead" === n && M((0, r.clamp)(l, f, v));
            },
            [d, K, $, f, v, m, I, E, S, M],
        ),
        ee = n.useCallback(
            (e) => {
                if (null == d) return;
                let t = (0, j.A)(d, e.shiftKey),
                    a = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (a = !0), E(f - t);
                        break;
                    case "ArrowRight":
                        (a = !0), E(f + t);
                }
                a && (e.stopPropagation(), e.preventDefault());
            },
            [d, E, f],
        ),
        et = n.useCallback(
            (e) => {
                if (null == d) return;
                let t = (0, j.A)(d, e.shiftKey),
                    a = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (a = !0), S(v - t);
                        break;
                    case "ArrowRight":
                        (a = !0), S(v + t);
                }
                a && (e.stopPropagation(), e.preventDefault());
            },
            [d, S, v],
        ),
        ea = n.useCallback(
            (e) => {
                Z(e.clientX, !0);
            },
            [Z],
        ),
        el = n.useCallback(
            (e) => {
                Z(e.clientX, !1);
            },
            [Z],
        ),
        en = n.useCallback(() => {
            V && w(), F(!1), z(null);
        }, [V, w]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", el),
            document.addEventListener("mouseup", en),
            () => {
                document.removeEventListener("mousemove", el), document.removeEventListener("mouseup", en);
            }
        ),
        [el, en],
    ),
        n.useEffect(() => {
            !(async function () {
                let e = W.current,
                    t = U.current;
                if (null == e || null == t || !D) return;
                (e.height = X), (e.width = J);
                let a = e.getContext("2d");
                if (null == a) return;
                (a.fillStyle = "#000"), a.fillRect(0, 0, J, X);
                let l = Math.ceil(X * (t.videoWidth / t.videoHeight)),
                    n = Math.ceil(J / l),
                    i = Q.current;
                if (null == i) return;
                (i.width = l), (i.height = X);
                let s = i?.getContext("2d", { willReadFrequently: !0 });
                if (null == s) return;
                let r = Y.current;
                if (r[n]?.length === n) {
                    for (let e = 0; e < n; e++) a.putImageData(r[n][e], l * e, 0);
                    return;
                }
                for (let e = 0; e < n; e++)
                    await new Promise((i) => {
                        (t.onseeked = () => {
                            a.drawImage(t, l * e, 0, l, X), s.drawImage(t, 0, 0, l, X);
                            let o = s.getImageData(0, 0, l, X);
                            null == r[n] && (r[n] = []), (r[n][e] = o), i();
                        }),
                            (t.currentTime = (l / J) * d * e);
                    });
            })();
        }, [J, X, W, d, Q, D]);
    let ei = O - f,
        es = n.useCallback(() => {
            M(Math.max(f, O - 10));
        }, [f, O, M]),
        er = n.useCallback(() => {
            M(Math.min(v, O + 10));
        }, [v, O, M]),
        eo = n.useCallback(() => {
            m ? I() : w();
        }, [m, w, I]),
        eu = n.useCallback(() => P(!0), []);
    return (0, l.jsx)("div", {
        className: N.f4,
        children: (0, l.jsxs)("div", {
            className: N.fL,
            children: [
                (0, l.jsxs)("div", {
                    className: N.lx,
                    children: [
                        (0, l.jsx)("div", {
                            className: N.k2,
                            children: (0, l.jsx)("div", {
                                ref: B,
                                className: N.re,
                                children: (0, l.jsxs)(c.Text, {
                                    variant: "text-sm/normal",
                                    className: N.g7,
                                    color: "text-muted",
                                    children: [L(ei), (0, l.jsx)("span", { className: N.xW, children: " / " }), L(x)],
                                }),
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: N.s2,
                            children: [
                                (0, l.jsx)(c.K0, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: c.qN$,
                                    onClick: es,
                                    "aria-label": k.intl.string(y.default["dRVF+Z"]),
                                }),
                                (0, l.jsx)(c.K0, {
                                    size: "md",
                                    icon: m ? c.E$n : c.udU,
                                    onClick: eo,
                                    "aria-label": k.intl.string(m ? k.t.ZcgDJX : k.t.RscU7I),
                                }),
                                (0, l.jsx)(c.K0, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: c.i76,
                                    onClick: er,
                                    "aria-label": k.intl.string(y.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)(b.A, { onMouseDown: ea, voiceAudioTracks: i, clipId: a.id, className: N.ou }),
                (0, l.jsx)(A, { onMouseDown: ea, videoLength: d, clip: a }),
                (0, l.jsx)("div", {
                    className: N.PH,
                    children: (0, l.jsxs)("div", {
                        className: s()(N.IO, { [N.Dg]: null != $ }),
                        onMouseDown: ea,
                        children: [
                            (0, l.jsx)("canvas", { className: N.zj, ref: Q }),
                            (0, l.jsx)("canvas", { className: N.Ay, ref: W }),
                            (0, l.jsx)(c.vN3, {
                                children: (0, l.jsx)("div", {
                                    tabIndex: 0,
                                    ref: G,
                                    className: N.lG,
                                    style: { left: null != d && d > 0 ? `${(O / d) * 100}%` : 0 },
                                }),
                            }),
                            (0, l.jsx)(p.A, {
                                preload: "auto",
                                className: N.Fi,
                                ref: U,
                                src: t,
                                muted: !0,
                                onLoadedMetadata: eu,
                            }),
                            (0, l.jsxs)("div", {
                                className: N.Ws,
                                style: {
                                    left: null != d ? `${(f / d) * 100}%` : "0",
                                    right: null != d ? `${((d - v) / d) * 100}%` : "0",
                                },
                                children: [
                                    (0, l.jsx)(c.vN3, {
                                        children: (0, l.jsx)("button", {
                                            className: s()(N.uI, { [N.cB]: "start" === $ }),
                                            onMouseDown: ea,
                                            onKeyDown: ee,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": f,
                                            "aria-valuetext": R(f),
                                            "aria-valuemax": v - C.zj,
                                            "aria-label": k.intl.string(k.t["+BTvw8"]),
                                            children: (0, l.jsx)("div", { className: N.FV }),
                                        }),
                                    }),
                                    (0, l.jsx)(c.vN3, {
                                        children: (0, l.jsx)("button", {
                                            className: s()(N.H1, { [N.cB]: "end" === $ }),
                                            onMouseDown: ea,
                                            onKeyDown: et,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": f + C.zj,
                                            "aria-valuenow": v,
                                            "aria-valuetext": R(v),
                                            "aria-valuemax": d,
                                            "aria-label": k.intl.string(k.t.bBgBYo),
                                            children: (0, l.jsx)("div", { className: N.kn }),
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
function L(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        a = Math.floor(e % 60),
        l = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (a = a < 10 ? "0" + a : a), (l = l < 10 ? "0" + l : l), `${t}:${a}.${l}`;
}
function R(e) {
    let t = Math.floor(e / 60),
        a = k.intl.formatToPlainString(k.t.iXLF9W, { minutes: t }),
        l = k.intl.formatToPlainString(k.t.geSp4K, { seconds: e % 60 });
    return `${a} ${l}`;
}
