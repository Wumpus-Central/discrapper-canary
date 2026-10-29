l.d(t, { default: () => eD });
var n = l(477900),
    a = l(582128),
    s = l(284009),
    i = l.n(s),
    r = l(189213),
    u = l(858899),
    o = l(270003),
    c = l(683071),
    d = l(452027),
    f = l(532446),
    m = l(95477),
    h = l(893007),
    g = l(181658),
    x = l(964486),
    v = l(776568),
    b = l(643374),
    j = l(174459),
    p = l(796774),
    C = l(503698),
    y = l.n(C),
    N = l(939249),
    w = l(29080),
    S = l(782134),
    M = l(834730),
    E = l(927813),
    k = l(904054),
    A = l(462180),
    T = l(882035),
    F = l(121894);
(l(323874), l(14289), l(35956));
var D = l(335416),
    I = l(105292);
function P(e, t, l) {
    return -1 === e ? 0 : e - (t * e) / l;
}
function O(e) {
    return e / 1e3;
}
function R(e, t, l) {
    return -1 === e ? l : e + (t * (l - e)) / l;
}
function L(e, t, l, n) {
    return (t >= 0 && l > 0 ? ((e - (t - (l * t) / n)) * 100) / l : (100 * e) / n).toFixed(4);
}
async function _(e) {
    if (!D.VM.has(e.type)) throw Error(I.intl.formatToPlainString(I.t["2y3xGU"], { fileType: e.type }));
    let t = new Audio(URL.createObjectURL(e));
    return (
        await new Promise((e, l) => {
            function n() {
                (t.removeEventListener("canplaythrough", a), t.removeEventListener("error", s));
            }
            function a() {
                (n(), e());
            }
            function s() {
                (n(), l(Error(I.intl.formatToPlainString(I.t["6w+Dyr"], {}))));
            }
            (t.addEventListener("canplaythrough", a), t.addEventListener("error", s), t.load());
        }),
        t
    );
}
async function J(e, t) {
    let l = await fetch(e);
    return new File([await l.blob()], t, { type: "audio/mp3" });
}
let G = (0, T.h)((e) => ({
    audio: null,
    file: null,
    loading: !1,
    loadAudioFromFile: async (t) => {
        if (((0, F.r)(() => e({ file: t, audio: null, loading: null != t })), null == t)) return;
        let l = await _(t);
        null != l && (0, F.r)(() => e({ audio: l, loading: !1 }));
    },
    maxVolume: 1,
    setMaxVolume: (t) => {
        (0, F.r)(() => e({ maxVolume: t }));
    },
}));
function U() {
    return G(
        (e) => ({
            audio: e.audio,
            file: e.file,
            loading: e.loading,
            loadAudioFromFile: e.loadAudioFromFile,
            maxVolume: e.maxVolume,
            setMaxVolume: e.setMaxVolume,
        }),
        A.x,
    );
}
var V = l(147925),
    z = l(435558),
    B = l(661531),
    H = l(602853),
    q = l(289873),
    Y = l(736653),
    Q = l(132500),
    W = l(602674);
let X = new Worker(new URL("/assets/" + l.u("658777"), l.b)),
    $ = (0, W.v)();
async function K(e) {
    if (null == $) throw Error("Failed to create audio context");
    let t = await e.arrayBuffer();
    return (await $.decodeAudioData(t)).getChannelData(0);
}
let Z = { ...D.Jh };
var ee = l(35854);
let et = a.memo(function (e) {
        let { file: t, audio: l, className: s, waveformSettings: i } = e,
            [r, u] = a.useState({ width: 0, height: 0 }),
            o = a.useRef(null),
            c = a.useMemo(() => {
                let e = l?.duration ?? 1;
                return { fineTuning: -1, fineTuningResolution: e / D.Jh.fineTuningScale, duration: e, ...(i ?? {}) };
            }, [l, i]),
            d = (function (e) {
                let [t, l] = a.useState(null),
                    [n, s] = a.useState(null);
                return (
                    a.useEffect(() => {
                        if (null == e) return;
                        let t = (0, D.Ux)(e);
                        t !== n && (s(t), l(null), K(e).then(l));
                    }, [n, e]),
                    t
                );
            })(t),
            f = (function (e, t, l) {
                let [n, s] = a.useState(null),
                    [i, r] = a.useState(null),
                    [u, o] = a.useState(1),
                    { setMaxVolume: c } = U(),
                    d = a.useCallback(
                        (e, t) => {
                            var n;
                            (r(null),
                                ((n = t.offsetWidth),
                                new Promise((t) => {
                                    let a = (0, Q.A)();
                                    (X?.addEventListener("message", function e(l) {
                                        let {
                                            data: { waveform: n, id: s, normalizedVolumeMultipler: i },
                                        } = l;
                                        (a === s && (t(n), o(i)), X?.removeEventListener("message", e));
                                    }),
                                        X?.postMessage({ id: a, options: l, config: Z, width: n, rawBufferData: e }));
                                })).then(r));
                        },
                        [l],
                    );
                return (
                    a.useEffect(() => {
                        if (null == e || null == t) return;
                        let a = (0, D.HL)(e, l);
                        n !== a && (s(a), d(e, t));
                    }, [e, d, t, l, n]),
                    a.useEffect(() => {
                        c(u);
                    }, [u, c]),
                    i
                );
            })(d, o.current, c),
            m = (0, Y.Ay)(),
            h = (0, H.r)(B.A.colors.ICON_STRONG).hex(),
            g = null == d || null == f,
            x = (0 === r.width || 0 === r.height || g) && null != t,
            v = a.useCallback(() => {
                null != o.current && u({ width: o.current.offsetWidth, height: o.current.offsetHeight });
            }, []);
        return (
            a.useEffect(() => {
                if (null != o.current) {
                    let e = new ResizeObserver((0, z.debounce)(v, 50));
                    return (
                        e.observe(o.current),
                        () => {
                            e.disconnect();
                        }
                    );
                }
            }, [v]),
            a.useEffect(() => {
                if (null == o.current) return;
                let e = o.current,
                    t = e.getContext("2d");
                if (null == t) return;
                let { width: l, height: n } = e;
                if (0 !== r.width && 0 !== r.height && null != f && f.length > 0) {
                    let e = l / f.length,
                        a = -(e * (D.Jh.waveformBarWidth - 1));
                    (t.clearRect(0, 0, l, n), (t.fillStyle = h));
                    for (let l = 0; l < f.length; l++) {
                        let s = f[l] * n,
                            i = l * e + a,
                            r = n / 2 - s / 2;
                        t.fillRect(i, r, e - a, s);
                    }
                }
            }, [h, r, m, f]),
            (0, n.jsxs)("div", {
                className: y()(ee.kL, s),
                children: [
                    (0, n.jsx)("canvas", { className: ee.s4, ref: o, width: 4 * r.width, height: 4 * r.height }),
                    x &&
                        (0, n.jsx)("div", {
                            className: ee.Lq,
                            children: (0, n.jsx)(q.y, { type: q.t.SPINNING_CIRCLE }),
                        }),
                ],
            })
        );
    }),
    el = a.memo(function (e) {
        let { fineTuning: t, fineTuningResolution: l, duration: a } = e,
            { file: s, audio: i } = U();
        return (0, n.jsx)(et, {
            file: s,
            audio: i,
            waveformSettings: { fineTuning: t, fineTuningResolution: l, duration: a },
        });
    });
var en = l(518070);
let ea = a.memo(function (e) {
    let { playing: t, onPausePlayback: l, onPlaybackChange: s, onChangePosition: i, disabled: r = !1 } = e,
        u = { ...D.Jh },
        { audio: o } = U(),
        c = null != o,
        d = a.useRef(null),
        f = a.useRef(null),
        m = a.useRef(null),
        [h, g] = a.useState(0),
        [x, v] = a.useState(0),
        [b, j] = a.useState(0),
        [p, C] = a.useState(!1),
        [N, w] = a.useState(!1),
        [S, M] = a.useState(!1),
        [k, A] = a.useState(0),
        [T, F] = a.useState(-1),
        I = a.useMemo(() => k / u.fineTuningScale, [u.fineTuningScale, k]);
    a.useEffect(() => {
        if (null == o) return;
        let e = o.duration * E.A.Millis.SECOND;
        (g(0), v(0), j(e), A(e));
    }, [o]);
    let _ = a.useCallback(
            (e, t) => {
                if ((l(), 0 === e.button))
                    switch (t) {
                        case 0:
                            C(!0);
                            break;
                        case 1:
                            w(!0);
                            break;
                        case 2:
                            M(!0);
                    }
            },
            [l],
        ),
        J = a.useCallback((e) => {
            switch (e) {
                case 0:
                    C(!1);
                    break;
                case 1:
                    w(!1);
                    break;
                case 2:
                    M(!1);
            }
            F(-1);
        }, []),
        G = a.useCallback(
            (e) => {
                if (null == o || !p) return;
                let t = parseInt(e.target.value),
                    l = t > b ? b : t;
                (s(O(l)), g(l), v(l));
            },
            [o, s, b, p],
        ),
        z = a.useCallback(
            (e) => {
                if (null == o || !N) return;
                let t = parseInt(e.target.value);
                t < h ? (s(O(h)), v(h)) : t > b ? (s(O(b)), v(b)) : (s(O(t)), v(t));
            },
            [o, s, b, N, h],
        ),
        B = a.useCallback(
            (e) => {
                if (null == o || !S) return;
                let t = parseInt(e.target.value),
                    l = t > h ? t : h;
                (s(O(h)), v(h), j(l));
            },
            [o, s, S, h],
        );
    return (
        a.useEffect(() => {
            null != i && c && i({ startPositionMs: h, endPositionMs: b, playheadPositionMs: x });
        }, [h, b, i, c, x]),
        a.useEffect(() => {
            let e;
            if (null != o)
                return (
                    t &&
                        (e = setInterval(() => {
                            o.currentTime < O(b)
                                ? o.currentTime >= O(x) && v(o.currentTime * E.A.Millis.SECOND)
                                : (l(O(h)), v(h));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [o, b, l, x, t, h]),
        a.useEffect(() => {
            if (u.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
                p && h == h && -1 === T ? F(h) : S && b == b && -1 === T ? F(b) : N && x == x && -1 === T && F(x);
            }, u.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [u.fineTuningDelay, S, b, T, N, x, p, h]),
        (0, n.jsxs)("div", {
            className: y()(en.IO, { [en.J_]: c }),
            children: [
                (0, n.jsxs)("div", {
                    className: en.Rn,
                    children: [
                        (0, n.jsxs)("div", {
                            className: en.Dn,
                            children: [
                                (0, n.jsx)("input", {
                                    ref: d,
                                    className: y()(en.Os, en.YT),
                                    type: "range",
                                    min: P(T, I, k),
                                    max: R(T, I, k),
                                    value: h,
                                    onChange: G,
                                    onMouseDown: (e) => _(e, 0),
                                    onMouseUp: () => J(0),
                                    disabled: !c || r,
                                }),
                                (0, n.jsx)("input", {
                                    ref: m,
                                    className: y()(en.Os, en.BC),
                                    type: "range",
                                    min: P(T, I, k),
                                    max: R(T, I, k),
                                    value: b,
                                    onChange: B,
                                    onMouseDown: (e) => _(e, 2),
                                    onMouseUp: () => J(2),
                                    disabled: !c || r,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: en.__invalid_handlePlayheadTrack,
                            children: (0, n.jsx)("input", {
                                ref: f,
                                className: y()(en.Os, en.GO),
                                type: "range",
                                min: P(T, I, k),
                                max: R(T, I, k),
                                value: x,
                                onChange: z,
                                onMouseDown: (e) => _(e, 1),
                                onMouseUp: () => J(1),
                                disabled: !c || r,
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: en.wo,
                    children: [
                        (0, n.jsxs)("div", {
                            className: y()(en.Wm, { [en.Em]: p, [en.z6]: S }),
                            style: {
                                left: `${L(h, T, I, k)}%`,
                                right: `${(T >= 0 && I > 0 ? -((b - (T + (I * (k - T)) / k)) * 100) / I : -(100 * b * 1) / k + 100).toFixed(4)}%`,
                            },
                            children: [
                                (0, n.jsx)("div", {
                                    className: y()(en.P, en.RC),
                                    children: (0, n.jsx)("div", {
                                        className: y()(en.Xd, en.__invalid_start),
                                        children: (0, n.jsx)(V.A, {
                                            direction: V.A.Directions.RIGHT,
                                            className: en.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: y()(en.P, en.SE),
                                    children: (0, n.jsx)("div", {
                                        className: y()(en.Xd, en.__invalid_end),
                                        children: (0, n.jsx)(V.A, {
                                            direction: V.A.Directions.LEFT,
                                            className: en.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: en.i0,
                            children: (0, n.jsx)("div", {
                                className: y()(en.lG, { [en.cB]: N || p || S || t }),
                                style: { left: `${L(x, T, I, k)}%` },
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: en.FU,
                    children: (0, n.jsx)(el, { fineTuning: T, fineTuningResolution: I, duration: k }),
                }),
            ],
        })
    );
});
var es = l(980504),
    ei = l(933237);
let er = { startPositionMs: 0, endPositionMs: 2 * (10 * E.A.Millis.SECOND), playheadPositionMs: 0 },
    eu = a.memo(function (e) {
        let { className: t, volume: l, disabled: s = !1, onChange: i } = e,
            { audio: r } = U(),
            [u, o] = a.useState(!1),
            [c, d] = a.useState(er),
            { playheadPositionMs: f, endPositionMs: m, startPositionMs: h } = c,
            g = null != r,
            x = m - h,
            v = x > 5 * E.A.Millis.SECOND;
        a.useEffect(() => {
            if (null != r)
                return (
                    d({ playheadPositionMs: 0, endPositionMs: r.duration * E.A.Millis.SECOND, startPositionMs: 0 }),
                    () => {
                        (r.pause(), o(!1));
                    }
                );
        }, [r]);
        let b = a.useCallback(
                (e) => {
                    null != r && (r.pause(), null != e && (r.currentTime = e), o(!1));
                },
                [r],
            ),
            j = a.useCallback(() => {
                if (null != r) {
                    if (u) return void b();
                    (f >= m ? (r.currentTime = O(h)) : (r.currentTime = O(f)),
                        (r.volume = (0, k.A)(l)),
                        r.play(),
                        o(!0));
                }
            }, [r, m, b, f, u, h, l]),
            p = a.useCallback(
                (e) => {
                    (d(e), i?.({ startMs: e.startPositionMs, endMs: e.endPositionMs }));
                },
                [i],
            ),
            C = a.useCallback(
                (e) => {
                    null != r && (r.currentTime = e);
                },
                [r],
            );
        return (0, n.jsxs)("div", {
            className: y()(ei.kL, { [ei.J_]: g, [ei.r9]: !g || s }, t),
            children: [
                (0, n.jsxs)("div", {
                    className: ei.k0,
                    children: [
                        (0, n.jsx)(N.D, {
                            className: ei.Rr,
                            onClick: g ? j : void 0,
                            children: u
                                ? (0, n.jsx)(w.w, { size: "xs", color: "currentColor", className: ei.CJ })
                                : (0, n.jsx)(S.PlayIcon, { size: "xs", color: "currentColor", className: ei.CJ }),
                        }),
                        (0, n.jsx)("div", {
                            className: ei.aq,
                            children: (0, n.jsx)(M.E, {
                                className: ei.__invalid_duration,
                                variant: "text-xs/normal",
                                color: v ? "text-feedback-warning" : "text-feedback-positive",
                                children: `${O(x).toFixed(2)}s`,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(ea, {
                    playing: u,
                    onPlaybackChange: C,
                    onPausePlayback: b,
                    onChangePosition: p,
                    disabled: s,
                }),
            ],
        });
    });
var eo = l(102597),
    ec = l(353672);
let ed = a.memo(function (e) {
    let { sound: t, volume: l, disabled: s } = e,
        [i, r] = a.useState(!1),
        u = a.useRef(null),
        { file: o, audio: c, loadAudioFromFile: d } = U(),
        f = a.useMemo(() => (0, eo.A)(t.soundId), [t]);
    return (
        a.useEffect(() => {
            null == u.current && (u.current = J(f, t.name).then(d));
        }, [f, d, t.name]),
        (0, n.jsxs)("div", {
            className: ec.i1,
            children: [
                (0, n.jsx)(N.D, {
                    onClick: s
                        ? void 0
                        : function () {
                              null != c &&
                                  (c.paused
                                      ? ((c.volume = (0, k.A)(l)),
                                        (c.currentTime = 0),
                                        c.play(),
                                        r(!0),
                                        c.addEventListener("ended", () => r(!1), { once: !0 }))
                                      : (c.pause(), r(!1)));
                          },
                    className: ec.Rr,
                    "aria-label": i ? I.intl.string(I.t.hHBkuG) : I.intl.string(I.t.RscU7I),
                    children: i
                        ? (0, n.jsx)(w.w, { size: "xs", color: "currentColor", className: ec.uZ })
                        : (0, n.jsx)(S.PlayIcon, { size: "xs", color: "currentColor", className: ec.uZ }),
                }),
                (0, n.jsx)("div", {
                    className: ec.FU,
                    children: (0, n.jsx)(et, { className: ec.ou, file: o, audio: c }),
                }),
            ],
        })
    );
});
var ef = l(735529);
let em = a.memo(function (e) {
    let { sound: t, volume: l, disabled: a = !1, onChange: s } = e,
        { file: i } = U();
    return (0, n.jsx)(d.D, {
        label: I.intl.string(I.t.CCRKNz),
        children: (0, n.jsxs)("div", {
            className: ef.UV,
            children: [
                null != t && (0, n.jsx)(ed, { sound: t, volume: l, disabled: a }),
                null == t && null != i && (0, n.jsx)(eu, { className: ef.lF, volume: l, disabled: a, onChange: s }),
            ],
        }),
    });
});
var eh = l(983069),
    eg = l(17928),
    ex = l(444550),
    ev = l(983851),
    eb = l(548118),
    ej = l(931991),
    ep = l(71393),
    eC = l(576705),
    ey = l(711014),
    eN = l(287809),
    ew = l(473145),
    eS = l(935208),
    eM = l(209932),
    eE = l(652215),
    ek = l(19438);
function eA(e) {
    let { availableSlots: t, className: l } = e;
    return (0, n.jsxs)(M.E, {
        className: y()(ek._E, l),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, n.jsx)(ev.H, { size: "md", color: "currentColor", className: ek.Xk }),
            I.intl.format(I.t["8Dyg1C"], { slots: t }),
        ],
    });
}
function eT(e) {
    let t,
        { label: l, value: s, className: i, onChange: r } = e,
        u = (0, eg.cf)([ey.Ay, eC.A, eN.default, ep.A], () => {
            let e = {};
            for (let t of ey.Ay.getFlattenedGuildIds()) {
                let l = ep.A.getGuild(t);
                null != l && (0, ej.ie)(l, eC.A, eN.default).canCreateExpressions && (e[l.id] = l);
            }
            return e;
        }),
        o = (0, eg.cf)(
            [eM.A],
            () => {
                let e = {};
                for (let [t, l] of eS.default.entries(u)) {
                    let n = (0, ew.tO)(l, eM.A.getSoundsForGuild(t) ?? es.pD, l.premiumTier);
                    e[t] = n;
                }
                return e;
            },
            [u],
        );
    a.useEffect(() => {
        (0, p.E7)();
    }, []);
    let c = a.useMemo(
            () =>
                Object.values(u).map((e) => {
                    let { name: t, id: l } = e;
                    return { label: t, value: l, disabled: o[l] <= 0 };
                }),
            [u, o],
        ),
        d = a.useCallback(
            (e) =>
                null == e || "" === e.value
                    ? null
                    : (0, n.jsx)(eb.Ay, {
                          className: y()(ek.cl, { [ek.QJ]: e.disabled }),
                          guild: u[e.value],
                          size: eb.Ay.Sizes.SMOL,
                          active: !0,
                      }),
            [u],
        ),
        f = a.useCallback(
            (e) => {
                let t = e?.value;
                return null == t || "" === t
                    ? null
                    : (0, n.jsx)(eA, { className: y()({ [ek.QJ]: e?.disabled }), availableSlots: o[t] });
            },
            [o],
        ),
        m = a.useCallback((e) => (0, n.jsx)("div", { className: y()({ [ek.QJ]: e.disabled }), children: e.label }), []),
        h = a.useCallback(
            (e) => {
                o[e] <= 0 || r(e);
            },
            [o, r],
        ),
        g = null == (t = o[s ?? eE.dJq]) || t > 0 ? s : void 0;
    return (0, n.jsx)(ex.p, {
        label: l,
        className: i,
        onChange: h,
        value: g,
        multi: !1,
        options: c,
        renderOptionPrefix: d,
        renderOptionSuffix: f,
        renderOptionLabel: m,
        placeholder: 0 === c.length ? I.intl.string(I.t.O3i2gV) : I.intl.string(I.t.CunCMN),
        "data-migration-pending": !0,
    });
}
let eF = [{ name: "audio", extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"] }];
function eD(e) {
    let { guildId: t, sourceFile: l, existingSound: s, onClose: C, transitionState: y, showGuildPicker: N = !1 } = e,
        [w, S] = a.useState(l?.name ?? s?.name ?? ""),
        [M, E] = a.useState(s?.volume ?? 1),
        [k, A] = a.useState(M),
        [T, F] = a.useState(M);
    M !== T && (F(M), A(M));
    let [D, P] = a.useState(s?.emojiId),
        [O, R] = a.useState(s?.emojiName),
        { file: L, loadAudioFromFile: _, maxVolume: J, setMaxVolume: G } = U(),
        [V, z] = a.useState(!1),
        [B, H] = a.useState(null),
        [q, Y] = a.useState(null),
        [Q, W] = a.useState("ready"),
        [X, $] = a.useState(t);
    async function K(e) {
        try {
            (await _(e ?? null), W("ready"), H(null));
        } catch (e) {
            Z(e);
        }
    }
    function Z(e) {
        if (e instanceof g.A) H(e);
        else if (e instanceof Error) {
            let t = { status: 500, body: { message: e.message } };
            H(new g.A(t));
        } else H(new g.A(e));
    }
    a.useEffect(() => {
        l?.file != null && e(l.file);
        async function e(e) {
            try {
                (await _(e), W("ready"), H(null));
            } catch (e) {
                Z(e);
            }
        }
    }, [l?.file, _]);
    let ee = (function (e) {
            switch (e) {
                case "encoding":
                    return I.intl.string(I.t["4IMMdB"]);
                case "encoding-failed":
                    return I.intl.string(I.t.Ka29xq);
                case "uploading":
                    return I.intl.string(I.t.ndr58Q);
            }
            return null;
        })(Q),
        et = "uploading" === Q || "encoding" === Q,
        el = null != s,
        en =
            w.length >= 2 &&
            (el || null != L) &&
            null != X &&
            (function (e) {
                if (null == e) return !0;
                let t = (e.endMs - e.startMs) / 1e3;
                return t > 0 && t <= 5;
            })(q),
        ea = a.useCallback(async (e, t) => {
            W("encoding");
            try {
                let l = await (0, eh.Yo)(e, t);
                return (W("ready"), l);
            } catch (e) {
                throw (W("encoding-failed"), e);
            }
        }, []),
        es = a.useCallback(async () => {
            if (null == L) return;
            i()(null != X, "Cannot submit soundboard sound with no guildId");
            let e = L;
            if (null != q) {
                let t = await ea(L, q);
                if (null == t) return;
                e = t;
            }
            let t = (0, eh.YK)(e);
            W("uploading");
            try {
                (await (0, eh.JX)({ readPromise: t, guildId: X, name: w, volume: M, emojiId: D, emojiName: O }),
                    W("ready"));
            } catch (e) {
                throw new g.A(e);
            }
        }, [L, X, w, ea, q, M, D, O]),
        ei = a.useCallback(async () => {
            (i()(null != X, "Cannot submit soundboard sound with no guildId"), z(!0), H(null));
            try {
                (el
                    ? await (0, p.xV)({
                          guildId: X,
                          soundId: s.soundId,
                          name: w,
                          volume: M,
                          emojiId: D ?? null,
                          emojiName: O ?? null,
                      })
                    : (await es(), (0, u.P0)({ text: I.intl.string(I.t.T7dhBL), variant: "success" })),
                    C());
            } catch (e) {
                Z(e);
            } finally {
                (W("ready"), z(!1), E(1), G(1));
            }
        }, [el, C, X, s, w, M, D, O, es, G]);
    ((0, x.Ay)(() => {
        (_(null), j.default.track(eE.HAw.OPEN_MODAL, { type: "Soundboard Upload Sound", guild_id: X }));
    }),
        a.useEffect(() => {
            E(Math.min(M, J));
        }, [M, E, J]));
    let er = (0, n.jsx)(v.A, {
            guildId: X,
            emojiId: D,
            emojiName: O,
            setEmojiId: P,
            setEmojiName: R,
            error: B?.getFirstFieldErrorMessage("emoji"),
            isRequiredField: !1,
        }),
        eu = a.useMemo(
            () => [
                { variant: "secondary", text: I.intl.string(I.t.Khpixd), onClick: C, disabled: V },
                {
                    text: el ? I.intl.string(I.t.bZY171) : I.intl.string(I.t.RGJbYB),
                    onClick: ei,
                    variant: "primary",
                    disabled: !en,
                    loading: V,
                },
            ],
            [ei, en, V, el, C],
        );
    return (0, n.jsx)(r.a, {
        onClose: C,
        transitionState: y,
        title: el ? I.intl.string(I.t.HmsZGS) : I.intl.string(I.t["ioD/9I"]),
        actions: eu,
        children: (0, n.jsxs)(o.n, {
            children: [
                null != B &&
                    !B.hasFieldErrors() &&
                    (0, n.jsx)(c.w, { type: "critical", message: B.message, role: "alert" }),
                N ? (0, n.jsx)(eT, { label: I.intl.string(I.t.UYt7iQ), value: X, onChange: $ }) : null,
                (el || null != L) && (0, n.jsx)(em, { sound: s, volume: M, disabled: et, onChange: Y }),
                el || null != l
                    ? null
                    : (0, n.jsx)(d.D, {
                          required: !0,
                          errorMessage: B?.getFirstFieldErrorMessage("sound"),
                          label: I.intl.string(I.t.sSHaG7),
                          children: (0, n.jsx)(b.A, {
                              filename: L?.name ?? "",
                              buttonText: I.intl.string(I.t.zpi3XG),
                              placeholder: I.intl.string(I.t["x+YUL9"]),
                              onFileSelect: K,
                              filters: eF,
                          }),
                      }),
                (0, n.jsxs)(f.M, {
                    children: [
                        (0, n.jsx)(m.k, {
                            required: !0,
                            label: I.intl.string(I.t.NpJGaM),
                            placeholder: I.intl.string(I.t.NpJGaM),
                            error: B?.getFirstFieldErrorMessage("name"),
                            value: w,
                            onChange: S,
                            maxLength: 32,
                        }),
                        er,
                    ],
                }),
                (0, n.jsx)(h.A, {
                    label: I.intl.string(I.t["3CJlb1"]),
                    errorMessage: B?.getFirstFieldErrorMessage("volume"),
                    helperText: null != ee ? ee : void 0,
                    value: k,
                    onChange: A,
                    onChangeEnd: (e) => E(Math.round(100 * e) / 100),
                    minValue: 0,
                    maxValue: J,
                    step: 0.01,
                    formatValue: (e) => `${((100 * e) / J).toFixed(0)}%`,
                }),
            ],
        }),
    });
}
