l.d(t, { A: () => T }), l(321073);
var a = l(627968),
    n = l(64700),
    s = l(503698),
    i = l.n(s),
    r = l(735438),
    o = l(417597),
    u = l(459192),
    c = l(990078),
    d = l(397927),
    m = l(565645),
    h = l(765671),
    p = l(607470),
    f = l(287809),
    g = l(531685),
    v = l(427262),
    x = l(372684),
    b = l(335494),
    j = l(584794),
    C = l(429364),
    N = l(696016),
    k = l(985018),
    y = l(938504);
function E(e) {
    let { eventType: t, importance: l, style: s, title: i, description: r } = e,
        o = n.useMemo(() => (0 === l ? 16 : 0.5 === l ? 20 : 1 === l ? 24 : 16), [l]),
        m = n.useMemo(() => {
            switch (t) {
                case x.rb.KILL:
                    return (0, a.jsx)(d.gXB, { size: "custom", width: o, height: o, color: d.LU0.colors.ICON_STRONG });
                case x.rb.MULTIKILL:
                    return (0, a.jsx)(d.Gg5, { size: "custom", width: o, height: o, color: d.LU0.colors.ICON_STRONG });
                case x.rb.DEATH:
                    return (0, a.jsx)(d.VPb, { size: "custom", width: o, height: o, color: d.LU0.colors.ICON_STRONG });
                case x.rb.ASSIST:
                    return (0, a.jsx)(d.E7M, { size: "custom", width: o, height: o, color: d.LU0.colors.ICON_STRONG });
                case x.rb.ITEM:
                    return (0, a.jsx)(d.Gg5, { size: "custom", width: o, height: o, color: d.LU0.colors.ICON_STRONG });
                case x.rb.VICTORY:
                    return (0, a.jsx)(d.OR, { size: "custom", width: o, height: o, color: d.LU0.colors.ICON_STRONG });
                case x.rb.DEFEAT:
                    return (0, a.jsx)(d.iFK, { size: "custom", width: o, height: o, color: d.LU0.colors.ICON_STRONG });
                case x.rb.LEVEL_UP:
                    return (0, a.jsx)(d.TIR, { size: "custom", width: o, height: o, color: d.LU0.colors.ICON_STRONG });
                case x.rb.TREASURE:
                    return (0, a.jsx)(d.BZI, { size: "custom", width: o, height: o, color: d.LU0.colors.ICON_STRONG });
                case x.rb.OBJECTIVE_KILL:
                    return (0, a.jsx)(d.wI0, { size: "custom", width: o, height: o, color: d.LU0.colors.ICON_STRONG });
                default:
                    return null;
            }
        }, [t, o]);
    if (null == m) return null;
    let h = (0, a.jsx)("div", { className: y.HS, style: s, children: m });
    return null != i || null != r
        ? null == i || null == r
            ? (0, a.jsx)(c.m, { text: i ?? r, position: "top", children: h })
            : (0, a.jsx)(u.u, { title: i, body: r ?? "", position: "top", children: h })
        : h;
}
function A(e) {
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
        className: y.ZX,
        onMouseDown: s,
        children: (0, a.jsxs)("div", {
            className: y.QY,
            children: [
                r.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: y.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, a.jsx)("div", { className: y.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                i.map((e, t) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: y.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, a.jsx)("div", { className: y.d9 }),
                                (0, a.jsxs)(d.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: y.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, a.jsx)(S, { clip: l, videoLength: t }),
                (0, a.jsx)(I, { clip: l, videoLength: t }),
                (0, a.jsx)(w, { clip: l, videoLength: t }),
            ],
        }),
    });
}
function S(e) {
    let { clip: t, videoLength: l } = e,
        s = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === x.Gy.GAME_EVENT),
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
                      E,
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
function I(e) {
    let { clip: t, videoLength: l } = e,
        s = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === x.Gy.SOUNDBOARD && !0 === e.signal.playing),
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
            let n = f.default.getUser(e.signal.userId),
                s = (0, v.mG)(n);
            return (0, a.jsx)(
                u.u,
                {
                    title: e.signal.name,
                    body: s ?? "",
                    position: "top",
                    children: (0, a.jsx)("div", {
                        className: y.HS,
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
function w(e) {
    let { clip: t, videoLength: l } = e,
        s = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === x.Gy.PHRASE),
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
                      u.u,
                      {
                          title: k.intl.string(k.t.mIkeS2),
                          body: e.signal.text,
                          position: "top",
                          children: (0, a.jsx)("div", {
                              className: y.HS,
                              style: { left: `${l}%` },
                              children: (0, a.jsx)(d.oyn, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: d.LU0.colors.ICON_STRONG,
                              }),
                          }),
                      },
                      `${e.timestamp}-${t}`,
                  );
        }),
    });
}
let T = function (e) {
    let { sourceURL: t, clip: l, voiceAudioTracks: s } = e,
        {
            useCurrentTime: u,
            duration: c,
            isPlaying: m,
            cropStart: f,
            cropEnd: v,
            cropDuration: x,
            setCropStart: E,
            setCropEnd: S,
            play: I,
            pause: w,
            subscribe: T,
            seek: M,
        } = (0, C.T)(),
        O = u(),
        U = n.useRef(null),
        [D, $] = n.useState(!1),
        [P, z] = n.useState(null),
        G = n.useRef(null),
        B = n.useRef(null),
        [_, K] = n.useState(!1),
        [V, F] = n.useState(null);
    n.useEffect(
        () =>
            T({
                onPlay: () => {
                    z(null), K(!1);
                },
            }),
        [T],
    );
    let { ref: W, width: H = 0, height: J = 0 } = (0, h.Ay)(),
        X = (0, o.bG)([g.A], () => g.A.windowSize());
    n.useMemo(() => {
        X.width, X.height;
        let e = W.current;
        null != e && F(e.getBoundingClientRect());
    }, [X.width, X.height, H, W]);
    let q = n.useRef(null),
        Q = n.useRef({}),
        Y = n.useCallback(
            (e, t) => {
                if (null == c) return;
                if (null == V) return null;
                let l = (((0, r.clamp)(e, V.left, V.right) - V.left) / V.width) * c,
                    a = (0, r.clamp)(l, 0, c),
                    n = P;
                null == n && t && ((n = a <= f ? "start" : a >= v ? "end" : "playhead"), m && (w(), K(!0)), z(n)),
                    "start" === n ? E(a) : "end" === n ? S(a) : "playhead" === n && M((0, r.clamp)(a, f, v));
            },
            [c, V, P, f, v, m, w, E, S, M],
        ),
        Z = n.useCallback(
            (e) => {
                if (null == c) return;
                let t = (0, j.A)(c, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), E(f - t);
                        break;
                    case "ArrowRight":
                        (l = !0), E(f + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [c, E, f],
        ),
        ee = n.useCallback(
            (e) => {
                if (null == c) return;
                let t = (0, j.A)(c, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), S(v - t);
                        break;
                    case "ArrowRight":
                        (l = !0), S(v + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [c, S, v],
        ),
        et = n.useCallback(
            (e) => {
                Y(e.clientX, !0);
            },
            [Y],
        ),
        el = n.useCallback(
            (e) => {
                Y(e.clientX, !1);
            },
            [Y],
        ),
        ea = n.useCallback(() => {
            _ && I(), K(!1), z(null);
        }, [_, I]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", el),
            document.addEventListener("mouseup", ea),
            () => {
                document.removeEventListener("mousemove", el), document.removeEventListener("mouseup", ea);
            }
        ),
        [el, ea],
    ),
        n.useEffect(() => {
            !(async function () {
                let e = W.current,
                    t = U.current;
                if (null == e || null == t || !D) return;
                (e.height = J), (e.width = H);
                let l = e.getContext("2d");
                if (null == l) return;
                (l.fillStyle = "#000"), l.fillRect(0, 0, H, J);
                let a = Math.ceil(J * (t.videoWidth / t.videoHeight)),
                    n = Math.ceil(H / a),
                    s = q.current;
                if (null == s) return;
                (s.width = a), (s.height = J);
                let i = s?.getContext("2d", { willReadFrequently: !0 });
                if (null == i) return;
                let r = Q.current;
                if (r[n]?.length === n) {
                    for (let e = 0; e < n; e++) l.putImageData(r[n][e], a * e, 0);
                    return;
                }
                for (let e = 0; e < n; e++)
                    await new Promise((s) => {
                        (t.onseeked = () => {
                            l.drawImage(t, a * e, 0, a, J), i.drawImage(t, 0, 0, a, J);
                            let o = i.getImageData(0, 0, a, J);
                            null == r[n] && (r[n] = []), (r[n][e] = o), s();
                        }),
                            (t.currentTime = (a / H) * c * e);
                    });
            })();
        }, [H, J, W, c, q, D]);
    let en = O - f,
        es = n.useCallback(() => {
            M(Math.max(f, O - 10));
        }, [f, O, M]),
        ei = n.useCallback(() => {
            M(Math.min(v, O + 10));
        }, [v, O, M]),
        er = n.useCallback(() => {
            m ? w() : I();
        }, [m, I, w]),
        eo = n.useCallback(() => $(!0), []);
    return (0, a.jsx)("div", {
        className: y.f4,
        children: (0, a.jsxs)("div", {
            className: y.fL,
            children: [
                (0, a.jsxs)("div", {
                    className: y.lx,
                    children: [
                        (0, a.jsx)("div", {
                            className: y.k2,
                            children: (0, a.jsx)("div", {
                                ref: B,
                                className: y.re,
                                children: (0, a.jsxs)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: y.g7,
                                    color: "text-muted",
                                    children: [L(en), (0, a.jsx)("span", { className: y.xW, children: " / " }), L(x)],
                                }),
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: y.s2,
                            children: [
                                (0, a.jsx)(d.K0, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: d.qN$,
                                    onClick: es,
                                    "aria-label": k.intl.string(k.t.r9s3Uv),
                                }),
                                (0, a.jsx)(d.K0, {
                                    size: "md",
                                    icon: m ? d.E$n : d.udU,
                                    onClick: er,
                                    "aria-label": k.intl.string(m ? k.t.ZcgDJX : k.t.RscU7I),
                                }),
                                (0, a.jsx)(d.K0, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: d.i76,
                                    onClick: ei,
                                    "aria-label": k.intl.string(k.t.zWDcNP),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(b.A, { onMouseDown: et, voiceAudioTracks: s, clipId: l.id, className: y.ou }),
                (0, a.jsx)(A, { onMouseDown: et, videoLength: c, clip: l }),
                (0, a.jsx)("div", {
                    className: y.PH,
                    children: (0, a.jsxs)("div", {
                        className: i()(y.IO, { [y.Dg]: null != P }),
                        onMouseDown: et,
                        children: [
                            (0, a.jsx)("canvas", { className: y.zj, ref: q }),
                            (0, a.jsx)("canvas", { className: y.Ay, ref: W }),
                            (0, a.jsx)(d.vN3, {
                                children: (0, a.jsx)("div", {
                                    tabIndex: 0,
                                    ref: G,
                                    className: y.lG,
                                    style: { left: null != c && c > 0 ? `${(O / c) * 100}%` : 0 },
                                }),
                            }),
                            (0, a.jsx)(p.A, {
                                preload: "auto",
                                className: y.Fi,
                                ref: U,
                                src: t,
                                muted: !0,
                                onLoadedMetadata: eo,
                            }),
                            (0, a.jsxs)("div", {
                                className: y.Ws,
                                style: {
                                    left: null != c ? `${(f / c) * 100}%` : "0",
                                    right: null != c ? `${((c - v) / c) * 100}%` : "0",
                                },
                                children: [
                                    (0, a.jsx)(d.vN3, {
                                        children: (0, a.jsx)("button", {
                                            className: i()(y.uI, { [y.cB]: "start" === P }),
                                            onMouseDown: et,
                                            onKeyDown: Z,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": f,
                                            "aria-valuetext": R(f),
                                            "aria-valuemax": v - N.zj,
                                            "aria-label": k.intl.string(k.t["+BTvw8"]),
                                            children: (0, a.jsx)("div", { className: y.FV }),
                                        }),
                                    }),
                                    (0, a.jsx)(d.vN3, {
                                        children: (0, a.jsx)("button", {
                                            className: i()(y.H1, { [y.cB]: "end" === P }),
                                            onMouseDown: et,
                                            onKeyDown: ee,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": f + N.zj,
                                            "aria-valuenow": v,
                                            "aria-valuetext": R(v),
                                            "aria-valuemax": c,
                                            "aria-label": k.intl.string(k.t.bBgBYo),
                                            children: (0, a.jsx)("div", { className: y.kn }),
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
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`;
}
function R(e) {
    let t = Math.floor(e / 60),
        l = k.intl.formatToPlainString(k.t.iXLF9W, { minutes: t }),
        a = k.intl.formatToPlainString(k.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
