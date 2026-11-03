t.d(l, { default: () => eD });
var n = t(477900),
    a = t(582128),
    s = t(284009),
    i = t.n(s),
    r = t(189213),
    u = t(858899),
    o = t(270003),
    d = t(683071),
    c = t(452027),
    f = t(532446),
    m = t(95477),
    h = t(893007),
    g = t(181658),
    x = t(964486),
    v = t(776568),
    b = t(643374),
    j = t(174459),
    p = t(796774),
    y = t(503698),
    C = t.n(y),
    N = t(939249),
    w = t(29080),
    S = t(782134),
    M = t(834730),
    E = t(927813),
    k = t(904054),
    A = t(462180),
    T = t(882035),
    F = t(121894);
(t(323874), t(14289), t(35956));
var D = t(335416),
    I = t(105292);
function P(e, l, t) {
    return -1 === e ? 0 : e - (l * e) / t;
}
function O(e) {
    return e / 1e3;
}
function R(e, l, t) {
    return -1 === e ? t : e + (l * (t - e)) / t;
}
function L(e, l, t, n) {
    return (l >= 0 && t > 0 ? ((e - (l - (t * l) / n)) * 100) / t : (100 * e) / n).toFixed(4);
}
async function _(e) {
    if (!D.VM.has(e.type)) throw Error(I.intl.formatToPlainString(I.t["2y3xGU"], { fileType: e.type }));
    let l = new Audio(URL.createObjectURL(e));
    return (
        await new Promise((e, t) => {
            function n() {
                (l.removeEventListener("canplaythrough", a), l.removeEventListener("error", s));
            }
            function a() {
                (n(), e());
            }
            function s() {
                (n(), t(Error(I.intl.formatToPlainString(I.t["6w+Dyr"], {}))));
            }
            (l.addEventListener("canplaythrough", a), l.addEventListener("error", s), l.load());
        }),
        l
    );
}
async function J(e, l) {
    let t = await fetch(e);
    return new File([await t.blob()], l, { type: "audio/mp3" });
}
let G = (0, T.h)((e) => ({
    audio: null,
    file: null,
    loading: !1,
    loadAudioFromFile: async (l) => {
        if (((0, F.r)(() => e({ file: l, audio: null, loading: null != l })), null == l)) return;
        let t = await _(l);
        null != t && (0, F.r)(() => e({ audio: t, loading: !1 }));
    },
    maxVolume: 1,
    setMaxVolume: (l) => {
        (0, F.r)(() => e({ maxVolume: l }));
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
var V = t(147925),
    z = t(435558),
    B = t(661531),
    H = t(602853),
    q = t(289873),
    Y = t(736653),
    Q = t(132500),
    W = t(602674);
let X = new Worker(new URL("/assets/" + t.u("658777"), t.b)),
    $ = (0, W.v)();
async function K(e) {
    if (null == $) throw Error("Failed to create audio context");
    let l = await e.arrayBuffer();
    return (await $.decodeAudioData(l)).getChannelData(0);
}
let Z = { ...D.Jh };
var ee = t(35854);
let el = a.memo(function (e) {
        let { file: l, audio: t, className: s, waveformSettings: i } = e,
            [r, u] = a.useState({ width: 0, height: 0 }),
            o = a.useRef(null),
            d = a.useMemo(() => {
                let e = t?.duration ?? 1;
                return { fineTuning: -1, fineTuningResolution: e / D.Jh.fineTuningScale, duration: e, ...(i ?? {}) };
            }, [t, i]),
            c = (function (e) {
                let [l, t] = a.useState(null),
                    [n, s] = a.useState(null);
                return (
                    a.useEffect(() => {
                        if (null == e) return;
                        let l = (0, D.Ux)(e);
                        l !== n && (s(l), t(null), K(e).then(t));
                    }, [n, e]),
                    l
                );
            })(l),
            f = (function (e, l, t) {
                let [n, s] = a.useState(null),
                    [i, r] = a.useState(null),
                    [u, o] = a.useState(1),
                    { setMaxVolume: d } = U(),
                    c = a.useCallback(
                        (e, l) => {
                            var n;
                            (r(null),
                                ((n = l.offsetWidth),
                                new Promise((l) => {
                                    let a = (0, Q.A)();
                                    (X?.addEventListener("message", function e(t) {
                                        let {
                                            data: { waveform: n, id: s, normalizedVolumeMultipler: i },
                                        } = t;
                                        (a === s && (l(n), o(i)), X?.removeEventListener("message", e));
                                    }),
                                        X?.postMessage({ id: a, options: t, config: Z, width: n, rawBufferData: e }));
                                })).then(r));
                        },
                        [t],
                    );
                return (
                    a.useEffect(() => {
                        if (null == e || null == l) return;
                        let a = (0, D.HL)(e, t);
                        n !== a && (s(a), c(e, l));
                    }, [e, c, l, t, n]),
                    a.useEffect(() => {
                        d(u);
                    }, [u, d]),
                    i
                );
            })(c, o.current, d),
            m = (0, Y.Ay)(),
            h = (0, H.r)(B.A.colors.ICON_STRONG).hex(),
            g = null == c || null == f,
            x = (0 === r.width || 0 === r.height || g) && null != l,
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
                    l = e.getContext("2d");
                if (null == l) return;
                let { width: t, height: n } = e;
                if (0 !== r.width && 0 !== r.height && null != f && f.length > 0) {
                    let e = t / f.length,
                        a = -(e * (D.Jh.waveformBarWidth - 1));
                    (l.clearRect(0, 0, t, n), (l.fillStyle = h));
                    for (let t = 0; t < f.length; t++) {
                        let s = f[t] * n,
                            i = t * e + a,
                            r = n / 2 - s / 2;
                        l.fillRect(i, r, e - a, s);
                    }
                }
            }, [h, r, m, f]),
            (0, n.jsxs)("div", {
                className: C()(ee.kL, s),
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
    et = a.memo(function (e) {
        let { fineTuning: l, fineTuningResolution: t, duration: a } = e,
            { file: s, audio: i } = U();
        return (0, n.jsx)(el, {
            file: s,
            audio: i,
            waveformSettings: { fineTuning: l, fineTuningResolution: t, duration: a },
        });
    });
var en = t(518070);
let ea = a.memo(function (e) {
    let { playing: l, onPausePlayback: t, onPlaybackChange: s, onChangePosition: i, disabled: r = !1 } = e,
        u = { ...D.Jh },
        { audio: o } = U(),
        d = null != o,
        c = a.useRef(null),
        f = a.useRef(null),
        m = a.useRef(null),
        [h, g] = a.useState(0),
        [x, v] = a.useState(0),
        [b, j] = a.useState(0),
        [p, y] = a.useState(!1),
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
            (e, l) => {
                if ((t(), 0 === e.button))
                    switch (l) {
                        case 0:
                            y(!0);
                            break;
                        case 1:
                            w(!0);
                            break;
                        case 2:
                            M(!0);
                    }
            },
            [t],
        ),
        J = a.useCallback((e) => {
            switch (e) {
                case 0:
                    y(!1);
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
                let l = parseInt(e.target.value),
                    t = l > b ? b : l;
                (s(O(t)), g(t), v(t));
            },
            [o, s, b, p],
        ),
        z = a.useCallback(
            (e) => {
                if (null == o || !N) return;
                let l = parseInt(e.target.value);
                l < h ? (s(O(h)), v(h)) : l > b ? (s(O(b)), v(b)) : (s(O(l)), v(l));
            },
            [o, s, b, N, h],
        ),
        B = a.useCallback(
            (e) => {
                if (null == o || !S) return;
                let l = parseInt(e.target.value),
                    t = l > h ? l : h;
                (s(O(h)), v(h), j(t));
            },
            [o, s, S, h],
        );
    return (
        a.useEffect(() => {
            null != i && d && i({ startPositionMs: h, endPositionMs: b, playheadPositionMs: x });
        }, [h, b, i, d, x]),
        a.useEffect(() => {
            let e;
            if (null != o)
                return (
                    l &&
                        (e = setInterval(() => {
                            o.currentTime < O(b)
                                ? o.currentTime >= O(x) && v(o.currentTime * E.A.Millis.SECOND)
                                : (t(O(h)), v(h));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [o, b, t, x, l, h]),
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
            className: C()(en.IO, { [en.J_]: d }),
            children: [
                (0, n.jsxs)("div", {
                    className: en.Rn,
                    children: [
                        (0, n.jsxs)("div", {
                            className: en.Dn,
                            children: [
                                (0, n.jsx)("input", {
                                    ref: c,
                                    className: C()(en.Os, en.YT),
                                    type: "range",
                                    min: P(T, I, k),
                                    max: R(T, I, k),
                                    value: h,
                                    onChange: G,
                                    onMouseDown: (e) => _(e, 0),
                                    onMouseUp: () => J(0),
                                    disabled: !d || r,
                                }),
                                (0, n.jsx)("input", {
                                    ref: m,
                                    className: C()(en.Os, en.BC),
                                    type: "range",
                                    min: P(T, I, k),
                                    max: R(T, I, k),
                                    value: b,
                                    onChange: B,
                                    onMouseDown: (e) => _(e, 2),
                                    onMouseUp: () => J(2),
                                    disabled: !d || r,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: en.__invalid_handlePlayheadTrack,
                            children: (0, n.jsx)("input", {
                                ref: f,
                                className: C()(en.Os, en.GO),
                                type: "range",
                                min: P(T, I, k),
                                max: R(T, I, k),
                                value: x,
                                onChange: z,
                                onMouseDown: (e) => _(e, 1),
                                onMouseUp: () => J(1),
                                disabled: !d || r,
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: en.wo,
                    children: [
                        (0, n.jsxs)("div", {
                            className: C()(en.Wm, { [en.Em]: p, [en.z6]: S }),
                            style: {
                                left: `${L(h, T, I, k)}%`,
                                right: `${(T >= 0 && I > 0 ? -((b - (T + (I * (k - T)) / k)) * 100) / I : -(100 * b * 1) / k + 100).toFixed(4)}%`,
                            },
                            children: [
                                (0, n.jsx)("div", {
                                    className: C()(en.P, en.RC),
                                    children: (0, n.jsx)("div", {
                                        className: C()(en.Xd, en.__invalid_start),
                                        children: (0, n.jsx)(V.A, {
                                            direction: V.A.Directions.RIGHT,
                                            className: en.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: C()(en.P, en.SE),
                                    children: (0, n.jsx)("div", {
                                        className: C()(en.Xd, en.__invalid_end),
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
                                className: C()(en.lG, { [en.cB]: N || p || S || l }),
                                style: { left: `${L(x, T, I, k)}%` },
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: en.FU,
                    children: (0, n.jsx)(et, { fineTuning: T, fineTuningResolution: I, duration: k }),
                }),
            ],
        })
    );
});
var es = t(980504),
    ei = t(933237);
let er = { startPositionMs: 0, endPositionMs: 2 * (10 * E.A.Millis.SECOND), playheadPositionMs: 0 },
    eu = a.memo(function (e) {
        let { className: l, volume: t, disabled: s = !1, onChange: i } = e,
            { audio: r } = U(),
            [u, o] = a.useState(!1),
            [d, c] = a.useState(er),
            { playheadPositionMs: f, endPositionMs: m, startPositionMs: h } = d,
            g = null != r,
            x = m - h,
            v = x > 5 * E.A.Millis.SECOND;
        a.useEffect(() => {
            if (null != r)
                return (
                    c({ playheadPositionMs: 0, endPositionMs: r.duration * E.A.Millis.SECOND, startPositionMs: 0 }),
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
                        (r.volume = (0, k.A)(t)),
                        r.play(),
                        o(!0));
                }
            }, [r, m, b, f, u, h, t]),
            p = a.useCallback(
                (e) => {
                    (c(e), i?.({ startMs: e.startPositionMs, endMs: e.endPositionMs }));
                },
                [i],
            ),
            y = a.useCallback(
                (e) => {
                    null != r && (r.currentTime = e);
                },
                [r],
            );
        return (0, n.jsxs)("div", {
            className: C()(ei.kL, { [ei.J_]: g, [ei.r9]: !g || s }, l),
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
                                variant: "body-xs/normal",
                                color: v ? "text-feedback-warning" : "text-feedback-positive",
                                children: `${O(x).toFixed(2)}s`,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(ea, {
                    playing: u,
                    onPlaybackChange: y,
                    onPausePlayback: b,
                    onChangePosition: p,
                    disabled: s,
                }),
            ],
        });
    });
var eo = t(102597),
    ed = t(353672);
let ec = a.memo(function (e) {
    let { sound: l, volume: t, disabled: s } = e,
        [i, r] = a.useState(!1),
        u = a.useRef(null),
        { file: o, audio: d, loadAudioFromFile: c } = U(),
        f = a.useMemo(() => (0, eo.A)(l.soundId), [l]);
    return (
        a.useEffect(() => {
            null == u.current && (u.current = J(f, l.name).then(c));
        }, [f, c, l.name]),
        (0, n.jsxs)("div", {
            className: ed.i1,
            children: [
                (0, n.jsx)(N.D, {
                    onClick: s
                        ? void 0
                        : function () {
                              null != d &&
                                  (d.paused
                                      ? ((d.volume = (0, k.A)(t)),
                                        (d.currentTime = 0),
                                        d.play(),
                                        r(!0),
                                        d.addEventListener("ended", () => r(!1), { once: !0 }))
                                      : (d.pause(), r(!1)));
                          },
                    className: ed.Rr,
                    "aria-label": i ? I.intl.string(I.t.hHBkuG) : I.intl.string(I.t.RscU7I),
                    children: i
                        ? (0, n.jsx)(w.w, { size: "xs", color: "currentColor", className: ed.uZ })
                        : (0, n.jsx)(S.PlayIcon, { size: "xs", color: "currentColor", className: ed.uZ }),
                }),
                (0, n.jsx)("div", {
                    className: ed.FU,
                    children: (0, n.jsx)(el, { className: ed.ou, file: o, audio: d }),
                }),
            ],
        })
    );
});
var ef = t(735529);
let em = a.memo(function (e) {
    let { sound: l, volume: t, disabled: a = !1, onChange: s } = e,
        { file: i } = U();
    return (0, n.jsx)(c.D, {
        label: I.intl.string(I.t.CCRKNz),
        children: (0, n.jsxs)("div", {
            className: ef.UV,
            children: [
                null != l && (0, n.jsx)(ec, { sound: l, volume: t, disabled: a }),
                null == l && null != i && (0, n.jsx)(eu, { className: ef.lF, volume: t, disabled: a, onChange: s }),
            ],
        }),
    });
});
var eh = t(983069),
    eg = t(17928),
    ex = t(444550),
    ev = t(983851),
    eb = t(548118),
    ej = t(931991),
    ep = t(71393),
    ey = t(576705),
    eC = t(711014),
    eN = t(287809),
    ew = t(473145),
    eS = t(935208),
    eM = t(209932),
    eE = t(652215),
    ek = t(19438);
function eA(e) {
    let { availableSlots: l, className: t } = e;
    return (0, n.jsxs)(M.E, {
        className: C()(ek._E, t),
        variant: "body-sm/medium",
        color: "text-strong",
        children: [
            (0, n.jsx)(ev.H, { size: "md", color: "currentColor", className: ek.Xk }),
            I.intl.format(I.t["8Dyg1C"], { slots: l }),
        ],
    });
}
function eT(e) {
    let l,
        { label: t, value: s, className: i, onChange: r } = e,
        u = (0, eg.cf)([eC.Ay, ey.A, eN.default, ep.A], () => {
            let e = {};
            for (let l of eC.Ay.getFlattenedGuildIds()) {
                let t = ep.A.getGuild(l);
                null != t && (0, ej.ie)(t, ey.A, eN.default).canCreateExpressions && (e[t.id] = t);
            }
            return e;
        }),
        o = (0, eg.cf)(
            [eM.A],
            () => {
                let e = {};
                for (let [l, t] of eS.default.entries(u)) {
                    let n = (0, ew.tO)(t, eM.A.getSoundsForGuild(l) ?? es.pD, t.premiumTier);
                    e[l] = n;
                }
                return e;
            },
            [u],
        );
    a.useEffect(() => {
        (0, p.E7)();
    }, []);
    let d = a.useMemo(
            () =>
                Object.values(u).map((e) => {
                    let { name: l, id: t } = e;
                    return { label: l, value: t, disabled: o[t] <= 0 };
                }),
            [u, o],
        ),
        c = a.useCallback(
            (e) =>
                null == e || "" === e.value
                    ? null
                    : (0, n.jsx)(eb.Ay, {
                          className: C()(ek.cl, { [ek.QJ]: e.disabled }),
                          guild: u[e.value],
                          size: eb.Ay.Sizes.SMOL,
                          active: !0,
                      }),
            [u],
        ),
        f = a.useCallback(
            (e) => {
                let l = e?.value;
                return null == l || "" === l
                    ? null
                    : (0, n.jsx)(eA, { className: C()({ [ek.QJ]: e?.disabled }), availableSlots: o[l] });
            },
            [o],
        ),
        m = a.useCallback((e) => (0, n.jsx)("div", { className: C()({ [ek.QJ]: e.disabled }), children: e.label }), []),
        h = a.useCallback(
            (e) => {
                o[e] <= 0 || r(e);
            },
            [o, r],
        ),
        g = null == (l = o[s ?? eE.dJq]) || l > 0 ? s : void 0;
    return (0, n.jsx)(ex.p, {
        label: t,
        className: i,
        onChange: h,
        value: g,
        multi: !1,
        options: d,
        renderOptionPrefix: c,
        renderOptionSuffix: f,
        renderOptionLabel: m,
        placeholder: 0 === d.length ? I.intl.string(I.t.O3i2gV) : I.intl.string(I.t.CunCMN),
        "data-migration-pending": !0,
    });
}
let eF = [{ name: "audio", extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"] }];
function eD(e) {
    let { guildId: l, sourceFile: t, existingSound: s, onClose: y, transitionState: C, showGuildPicker: N = !1 } = e,
        [w, S] = a.useState(t?.name ?? s?.name ?? ""),
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
        [X, $] = a.useState(l);
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
            let l = { status: 500, body: { message: e.message } };
            H(new g.A(l));
        } else H(new g.A(e));
    }
    a.useEffect(() => {
        t?.file != null && e(t.file);
        async function e(e) {
            try {
                (await _(e), W("ready"), H(null));
            } catch (e) {
                Z(e);
            }
        }
    }, [t?.file, _]);
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
        el = "uploading" === Q || "encoding" === Q,
        et = null != s,
        en =
            w.length >= 2 &&
            (et || null != L) &&
            null != X &&
            (function (e) {
                if (null == e) return !0;
                let l = (e.endMs - e.startMs) / 1e3;
                return l > 0 && l <= 5;
            })(q),
        ea = a.useCallback(async (e, l) => {
            W("encoding");
            try {
                let t = await (0, eh.Yo)(e, l);
                return (W("ready"), t);
            } catch (e) {
                throw (W("encoding-failed"), e);
            }
        }, []),
        es = a.useCallback(async () => {
            if (null == L) return;
            i()(null != X, "Cannot submit soundboard sound with no guildId");
            let e = L;
            if (null != q) {
                let l = await ea(L, q);
                if (null == l) return;
                e = l;
            }
            let l = (0, eh.YK)(e);
            W("uploading");
            try {
                (await (0, eh.JX)({ readPromise: l, guildId: X, name: w, volume: M, emojiId: D, emojiName: O }),
                    W("ready"));
            } catch (e) {
                throw new g.A(e);
            }
        }, [L, X, w, ea, q, M, D, O]),
        ei = a.useCallback(async () => {
            (i()(null != X, "Cannot submit soundboard sound with no guildId"), z(!0), H(null));
            try {
                (et
                    ? await (0, p.xV)({
                          guildId: X,
                          soundId: s.soundId,
                          name: w,
                          volume: M,
                          emojiId: D ?? null,
                          emojiName: O ?? null,
                      })
                    : (await es(), (0, u.P0)({ text: I.intl.string(I.t.T7dhBL), variant: "success" })),
                    y());
            } catch (e) {
                Z(e);
            } finally {
                (W("ready"), z(!1), E(1), G(1));
            }
        }, [et, y, X, s, w, M, D, O, es, G]);
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
                { variant: "secondary", text: I.intl.string(I.t.Khpixd), onClick: y, disabled: V },
                {
                    text: et ? I.intl.string(I.t.bZY171) : I.intl.string(I.t.RGJbYB),
                    onClick: ei,
                    variant: "primary",
                    disabled: !en,
                    loading: V,
                },
            ],
            [ei, en, V, et, y],
        );
    return (0, n.jsx)(r.a, {
        onClose: y,
        transitionState: C,
        title: et ? I.intl.string(I.t.HmsZGS) : I.intl.string(I.t["ioD/9I"]),
        actions: eu,
        children: (0, n.jsxs)(o.n, {
            children: [
                null != B &&
                    !B.hasFieldErrors() &&
                    (0, n.jsx)(d.w, { type: "critical", message: B.message, role: "alert" }),
                N ? (0, n.jsx)(eT, { label: I.intl.string(I.t.UYt7iQ), value: X, onChange: $ }) : null,
                (et || null != L) && (0, n.jsx)(em, { sound: s, volume: M, disabled: el, onChange: Y }),
                et || null != t
                    ? null
                    : (0, n.jsx)(c.D, {
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
