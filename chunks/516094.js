l.d(t, {
    A: () => I,
}),
    l(228524),
    l(321073),
    l(896048);
var n = l(627968),
    a = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(735438),
    o = l(417597),
    u = l(459192),
    c = l(990078),
    d = l(397927),
    m = l(565645),
    h = l(765671),
    p = l(607470),
    v = l(287809),
    f = l(531685),
    b = l(427262),
    g = l(372684),
    j = l(335494),
    x = l(584794),
    y = l(429364),
    C = l(696016),
    k = l(985018),
    N = l(938504);

function E(e) {
    let { eventType: t, importance: l, style: r, title: i, description: s } = e,
        o = a.useMemo(() => (0 === l ? 16 : 0.5 === l ? 20 : 1 === l ? 24 : 16), [l]),
        m = a.useMemo(() => {
            switch (t) {
                case g.rb.KILL:
                    return (0, n.jsx)(d.gXB, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.LU0.colors.ICON_STRONG,
                    });
                case g.rb.MULTIKILL:
                    return (0, n.jsx)(d.Gg5, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.LU0.colors.ICON_STRONG,
                    });
                case g.rb.DEATH:
                    return (0, n.jsx)(d.VPb, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.LU0.colors.ICON_STRONG,
                    });
                case g.rb.ASSIST:
                    return (0, n.jsx)(d.E7M, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.LU0.colors.ICON_STRONG,
                    });
                case g.rb.ITEM:
                    return (0, n.jsx)(d.Gg5, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.LU0.colors.ICON_STRONG,
                    });
                case g.rb.VICTORY:
                    return (0, n.jsx)(d.OR, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.LU0.colors.ICON_STRONG,
                    });
                case g.rb.DEFEAT:
                    return (0, n.jsx)(d.iFK, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.LU0.colors.ICON_STRONG,
                    });
                case g.rb.LEVEL_UP:
                    return (0, n.jsx)(d.TIR, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.LU0.colors.ICON_STRONG,
                    });
                case g.rb.TREASURE:
                    return (0, n.jsx)(d.BZI, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.LU0.colors.ICON_STRONG,
                    });
                case g.rb.OBJECTIVE_KILL:
                    return (0, n.jsx)(d.wI0, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.LU0.colors.ICON_STRONG,
                    });
                default:
                    return null;
            }
        }, [t, o]);
    if (null == m) return null;
    let h = (0, n.jsx)("div", {
        className: N.HS,
        style: r,
        children: m,
    });
    return null != i || null != s
        ? null == i || null == s
            ? (0, n.jsx)(c.m, {
                  text: null != i ? i : s,
                  position: "top",
                  children: h,
              })
            : (0, n.jsx)(u.u, {
                  title: i,
                  body: null != s ? s : "",
                  position: "top",
                  children: h,
              })
        : h;
}

function S(e) {
    let { videoLength: t, clip: l, onMouseDown: r } = e,
        { timeNotches: i, subNotches: s } = a.useMemo(() => {
            let e;
            if (null == t || t <= 0)
                return {
                    timeNotches: [],
                    subNotches: [],
                };
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
                l.push({
                    time: n,
                    position: e,
                });
            }
            (0 === l.length || l[l.length - 1].time < t - 2) &&
                l.push({
                    time: t,
                    position: 100,
                });
            let a = [],
                r = e / 5;
            for (let e = r; e < t; e += r)
                if (!l.some((t) => 0.01 > Math.abs(t.time - e))) {
                    let l = (e / t) * 100;
                    a.push({
                        position: l,
                    });
                }
            return {
                timeNotches: l,
                subNotches: a,
            };
        }, [t]);
    return (0, n.jsx)("div", {
        className: N.ZX,
        onMouseDown: r,
        children: (0, n.jsxs)("div", {
            className: N.QY,
            children: [
                s.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: N.MJ,
                            style: {
                                left: "".concat(e.position, "%"),
                            },
                            children: (0, n.jsx)("div", {
                                className: N.p,
                            }),
                        },
                        "sub-".concat(t),
                    ),
                ),
                i.map((e, t) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: N.Cv,
                            style: {
                                left: "".concat(e.position, "%"),
                            },
                            children: [
                                (0, n.jsx)("div", {
                                    className: N.d9,
                                }),
                                (0, n.jsxs)(d.Text, {
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
                (0, n.jsx)(w, {
                    clip: l,
                    videoLength: t,
                }),
                (0, n.jsx)(O, {
                    clip: l,
                    videoLength: t,
                }),
                (0, n.jsx)(A, {
                    clip: l,
                    videoLength: t,
                }),
            ],
        }),
    });
}

function w(e) {
    var t, l;
    let { clip: r, videoLength: i } = e,
        s = a.useMemo(() => {
            var e;
            return null == r.timeline || (null == (e = r.decision) ? void 0 : e.timestamp) == null
                ? []
                : r.timeline.filter((e) => e.signal.type === g.Gy.GAME_EVENT);
        }, [r.timeline, null == (t = r.decision) ? void 0 : t.timestamp]),
        o = a.useCallback(
            (e) => {
                var t, l;
                if (null == i || i <= 0 || (null == (t = r.decision) ? void 0 : t.timestamp) == null) return null;
                let n = (e - ((null == (l = r.decision) ? void 0 : l.timestamp) - r.length)) / 1e3;
                return n < 0 || n > i ? null : (n / i) * 100;
            },
            [i, null == (l = r.decision) ? void 0 : l.timestamp, r.length],
        );
    return (0, n.jsx)(n.Fragment, {
        children: s.map((e, t) => {
            var l;
            let a = o(e.timestamp);
            return null == a
                ? null
                : (0, n.jsx)(
                      E,
                      {
                          eventType: e.signal.eventType,
                          importance: null != (l = e.signal.importance) ? l : 0,
                          title: e.signal.title,
                          description: e.signal.description,
                          style: {
                              left: "".concat(a, "%"),
                          },
                      },
                      "".concat(e.timestamp, "-").concat(t),
                  );
        }),
    });
}

function O(e) {
    var t, l;
    let { clip: r, videoLength: i } = e,
        s = a.useMemo(() => {
            var e;
            return null == r.timeline || (null == (e = r.decision) ? void 0 : e.timestamp) == null
                ? []
                : r.timeline.filter((e) => e.signal.type === g.Gy.SOUNDBOARD && !0 === e.signal.playing);
        }, [r.timeline, null == (t = r.decision) ? void 0 : t.timestamp]),
        o = a.useCallback(
            (e) => {
                var t, l;
                if (null == i || i <= 0 || (null == (t = r.decision) ? void 0 : t.timestamp) == null) return null;
                let n = (e - ((null == (l = r.decision) ? void 0 : l.timestamp) - r.length)) / 1e3;
                return n < 0 || n > i ? null : (n / i) * 100;
            },
            [i, null == (l = r.decision) ? void 0 : l.timestamp, r.length],
        );
    return (0, n.jsx)(n.Fragment, {
        children: s.map((e, t) => {
            var l, a;
            let r = o(e.timestamp);
            if (null == r || (null == e.signal.emojiId && null == e.signal.emojiName)) return null;
            let i = v.default.getUser(e.signal.userId),
                s = (0, b.mG)(i);
            return (0, n.jsx)(
                u.u,
                {
                    title: e.signal.name,
                    body: null != s ? s : "",
                    position: "top",
                    children: (0, n.jsx)("div", {
                        className: N.HS,
                        style: {
                            left: "".concat(r, "%"),
                        },
                        children: (0, n.jsx)(m.A, {
                            emojiId: null != (l = e.signal.emojiId) ? l : null,
                            emojiName: null != (a = e.signal.emojiName) ? a : null,
                            animated: e.signal.emojiAnimated,
                            size: "reaction",
                        }),
                    }),
                },
                "".concat(e.timestamp, "-").concat(t),
            );
        }),
    });
}

function A(e) {
    var t, l;
    let { clip: r, videoLength: i } = e,
        s = a.useMemo(() => {
            var e;
            return null == r.timeline || (null == (e = r.decision) ? void 0 : e.timestamp) == null
                ? []
                : r.timeline.filter((e) => e.signal.type === g.Gy.PHRASE);
        }, [r.timeline, null == (t = r.decision) ? void 0 : t.timestamp]),
        o = a.useCallback(
            (e) => {
                var t, l;
                if (null == i || i <= 0 || (null == (t = r.decision) ? void 0 : t.timestamp) == null) return null;
                let n = (e - ((null == (l = r.decision) ? void 0 : l.timestamp) - r.length)) / 1e3;
                return n < 0 || n > i ? null : (n / i) * 100;
            },
            [i, null == (l = r.decision) ? void 0 : l.timestamp, r.length],
        );
    return (0, n.jsx)(n.Fragment, {
        children: s.map((e, t) => {
            let l = o(e.timestamp);
            return null == l
                ? null
                : (0, n.jsx)(
                      u.u,
                      {
                          title: k.intl.string(k.t.mIkeS2),
                          body: e.signal.text,
                          position: "top",
                          children: (0, n.jsx)("div", {
                              className: N.HS,
                              style: {
                                  left: "".concat(l, "%"),
                              },
                              children: (0, n.jsx)(d.oyn, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: d.LU0.colors.ICON_STRONG,
                              }),
                          }),
                      },
                      "".concat(e.timestamp, "-").concat(t),
                  );
        }),
    });
}
let I = function (e) {
    let { sourceURL: t, clip: l, voiceAudioTracks: r } = e,
        {
            useCurrentTime: u,
            duration: c,
            isPlaying: m,
            cropStart: v,
            cropEnd: b,
            cropDuration: g,
            setCropStart: E,
            setCropEnd: w,
            play: O,
            pause: A,
            subscribe: I,
            seek: R,
        } = (0, y.T)(),
        M = u(),
        P = a.useRef(null),
        [U, D] = a.useState(!1),
        [z, G] = a.useState(null),
        B = a.useRef(null),
        _ = a.useRef(null),
        [K, V] = a.useState(!1),
        [F, W] = a.useState(null);
    a.useEffect(
        () =>
            I({
                onPlay: () => {
                    G(null), V(!1);
                },
            }),
        [I],
    );
    let { ref: H, width: J = 0, height: X = 0 } = (0, h.Ay)(),
        $ = (0, o.bG)([f.A], () => f.A.windowSize());
    a.useMemo(() => {
        $.width, $.height;
        let e = H.current;
        null != e && W(e.getBoundingClientRect());
    }, [$.width, $.height, J, H]);
    let q = a.useRef(null),
        Q = a.useRef({}),
        Y = a.useCallback(
            (e, t) => {
                if (null == c) return;
                if (null == F) return null;
                let l = (((0, s.clamp)(e, F.left, F.right) - F.left) / F.width) * c,
                    n = (0, s.clamp)(l, 0, c),
                    a = z;
                null == a && t && ((a = n <= v ? "start" : n >= b ? "end" : "playhead"), m && (A(), V(!0)), G(a)),
                    "start" === a ? E(n) : "end" === a ? w(n) : "playhead" === a && R((0, s.clamp)(n, v, b));
            },
            [c, F, z, v, b, m, A, E, w, R],
        ),
        Z = a.useCallback(
            (e) => {
                if (null == c) return;
                let t = (0, x.A)(c, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), E(v - t);
                        break;
                    case "ArrowRight":
                        (l = !0), E(v + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [c, E, v],
        ),
        ee = a.useCallback(
            (e) => {
                if (null == c) return;
                let t = (0, x.A)(c, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), w(b - t);
                        break;
                    case "ArrowRight":
                        (l = !0), w(b + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [c, w, b],
        ),
        et = a.useCallback(
            (e) => {
                Y(e.clientX, !0);
            },
            [Y],
        ),
        el = a.useCallback(
            (e) => {
                Y(e.clientX, !1);
            },
            [Y],
        ),
        en = a.useCallback(() => {
            K && O(), V(!1), G(null);
        }, [K, O]);
    a.useEffect(
        () => (
            document.addEventListener("mousemove", el),
            document.addEventListener("mouseup", en),
            () => {
                document.removeEventListener("mousemove", el), document.removeEventListener("mouseup", en);
            }
        ),
        [el, en],
    ),
        a.useEffect(() => {
            !(async function () {
                var e;
                let t = H.current,
                    l = P.current;
                if (null == t || null == l || !U) return;
                (t.height = X), (t.width = J);
                let n = t.getContext("2d");
                if (null == n) return;
                (n.fillStyle = "#000"), n.fillRect(0, 0, J, X);
                let a = Math.ceil(X * (l.videoWidth / l.videoHeight)),
                    r = Math.ceil(J / a),
                    i = q.current;
                if (null == i) return;
                (i.width = a), (i.height = X);
                let s =
                    null == i
                        ? void 0
                        : i.getContext("2d", {
                              willReadFrequently: !0,
                          });
                if (null == s) return;
                let o = Q.current;
                if ((null == (e = o[r]) ? void 0 : e.length) === r) {
                    for (let e = 0; e < r; e++) n.putImageData(o[r][e], a * e, 0);
                    return;
                }
                for (let e = 0; e < r; e++)
                    await new Promise((t) => {
                        (l.onseeked = () => {
                            n.drawImage(l, a * e, 0, a, X), s.drawImage(l, 0, 0, a, X);
                            let i = s.getImageData(0, 0, a, X);
                            null == o[r] && (o[r] = []), (o[r][e] = i), t();
                        }),
                            (l.currentTime = (a / J) * c * e);
                    });
            })();
        }, [J, X, H, c, q, U]);
    let ea = M - v,
        er = a.useCallback(() => {
            R(Math.max(v, M - 10));
        }, [v, M, R]),
        ei = a.useCallback(() => {
            R(Math.min(b, M + 10));
        }, [b, M, R]),
        es = a.useCallback(() => {
            m ? A() : O();
        }, [m, O, A]),
        eo = a.useCallback(() => D(!0), []);
    return (0, n.jsx)("div", {
        className: N.f4,
        children: (0, n.jsxs)("div", {
            className: N.fL,
            children: [
                (0, n.jsxs)("div", {
                    className: N.lx,
                    children: [
                        (0, n.jsx)("div", {
                            className: N.k2,
                            children: (0, n.jsx)("div", {
                                ref: _,
                                className: N.re,
                                children: (0, n.jsxs)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: N.g7,
                                    color: "text-muted",
                                    children: [
                                        T(ea),
                                        (0, n.jsx)("span", {
                                            className: N.xW,
                                            children: " / ",
                                        }),
                                        T(g),
                                    ],
                                }),
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: N.s2,
                            children: [
                                (0, n.jsx)(d.K0, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: d.qN$,
                                    onClick: er,
                                    "aria-label": k.intl.string(k.t.r9s3Uv),
                                }),
                                (0, n.jsx)(d.K0, {
                                    size: "md",
                                    icon: m ? d.E$n : d.udU,
                                    onClick: es,
                                    "aria-label": k.intl.string(m ? k.t.ZcgDJX : k.t.RscU7I),
                                }),
                                (0, n.jsx)(d.K0, {
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
                (0, n.jsx)(j.A, {
                    onMouseDown: et,
                    voiceAudioTracks: r,
                    clipId: l.id,
                    className: N.ou,
                }),
                (0, n.jsx)(S, {
                    onMouseDown: et,
                    videoLength: c,
                    clip: l,
                }),
                (0, n.jsx)("div", {
                    className: N.PH,
                    children: (0, n.jsxs)("div", {
                        className: i()(N.IO, {
                            [N.Dg]: null != z,
                        }),
                        onMouseDown: et,
                        children: [
                            (0, n.jsx)("canvas", {
                                className: N.zj,
                                ref: q,
                            }),
                            (0, n.jsx)("canvas", {
                                className: N.Ay,
                                ref: H,
                            }),
                            (0, n.jsx)(d.vN3, {
                                children: (0, n.jsx)("div", {
                                    tabIndex: 0,
                                    ref: B,
                                    className: N.lG,
                                    style: {
                                        left: null != c && c > 0 ? "".concat((M / c) * 100, "%") : 0,
                                    },
                                }),
                            }),
                            (0, n.jsx)(p.A, {
                                preload: "auto",
                                className: N.Fi,
                                ref: P,
                                src: t,
                                muted: !0,
                                onLoadedMetadata: eo,
                            }),
                            (0, n.jsxs)("div", {
                                className: N.Ws,
                                style: {
                                    left: null != c ? "".concat((v / c) * 100, "%") : "0",
                                    right: null != c ? "".concat(((c - b) / c) * 100, "%") : "0",
                                },
                                children: [
                                    (0, n.jsx)(d.vN3, {
                                        children: (0, n.jsx)("button", {
                                            className: i()(N.uI, {
                                                [N.cB]: "start" === z,
                                            }),
                                            onMouseDown: et,
                                            onKeyDown: Z,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": v,
                                            "aria-valuetext": L(v),
                                            "aria-valuemax": b - C.zj,
                                            "aria-label": k.intl.string(k.t["+BTvw8"]),
                                            children: (0, n.jsx)("div", {
                                                className: N.FV,
                                            }),
                                        }),
                                    }),
                                    (0, n.jsx)(d.vN3, {
                                        children: (0, n.jsx)("button", {
                                            className: i()(N.H1, {
                                                [N.cB]: "end" === z,
                                            }),
                                            onMouseDown: et,
                                            onKeyDown: ee,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": v + C.zj,
                                            "aria-valuenow": b,
                                            "aria-valuetext": L(b),
                                            "aria-valuemax": c,
                                            "aria-label": k.intl.string(k.t.bBgBYo),
                                            children: (0, n.jsx)("div", {
                                                className: N.kn,
                                            }),
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
        n = Math.floor((e % 1) * 100);
    return (
        (t = t < 10 ? "0" + t : t),
        (l = l < 10 ? "0" + l : l),
        (n = n < 10 ? "0" + n : n),
        "".concat(t, ":").concat(l, ".").concat(n)
    );
}

function L(e) {
    let t = Math.floor(e / 60),
        l = k.intl.formatToPlainString(k.t.iXLF9W, {
            minutes: t,
        }),
        n = k.intl.formatToPlainString(k.t.geSp4K, {
            seconds: e % 60,
        });
    return "".concat(l, " ").concat(n);
}
