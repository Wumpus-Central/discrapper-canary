l.d(t, { default: () => eD });
var n = l(477900),
    a = l(582128),
    i = l(284009),
    s = l.n(i),
    r = l(189213),
    u = l(858899),
    o = l(270003),
    c = l(683071),
    d = l(452027),
    f = l(532446),
    m = l(95477),
    h = l(205513),
    g = l(181658),
    x = l(964486),
    v = l(776568),
    b = l(643374),
    j = l(174459),
    p = l(796774),
    w = l(503698),
    y = l.n(w),
    C = l(939249),
    N = l(29080),
    S = l(782134),
    E = l(834730),
    M = l(927813),
    k = l(904054),
    A = l(462180),
    T = l(882035),
    I = l(121894);
(l(323874), l(14289), l(35956));
var D = l(335416),
    F = l(105292);
function O(e, t, l) {
    return -1 === e ? 0 : e - (t * e) / l;
}
function P(e) {
    return e / 1e3;
}
function R(e, t, l) {
    return -1 === e ? l : e + (t * (l - e)) / l;
}
function L(e, t, l, n) {
    return (t >= 0 && l > 0 ? ((e - (t - (l * t) / n)) * 100) / l : (100 * e) / n).toFixed(4);
}
async function _(e) {
    if (!D.VM.has(e.type)) throw Error(F.intl.formatToPlainString(F.t["2y3xGU"], { fileType: e.type }));
    let t = new Audio(URL.createObjectURL(e));
    return (
        await new Promise((e, l) => {
            function n() {
                (t.removeEventListener("canplaythrough", a), t.removeEventListener("error", i));
            }
            function a() {
                (n(), e());
            }
            function i() {
                (n(), l(Error(F.intl.formatToPlainString(F.t["6w+Dyr"], {}))));
            }
            (t.addEventListener("canplaythrough", a), t.addEventListener("error", i), t.load());
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
        if (((0, I.r)(() => e({ file: t, audio: null, loading: null != t })), null == t)) return;
        let l = await _(t);
        null != l && (0, I.r)(() => e({ audio: l, loading: !1 }));
    },
    maxVolume: 1,
    setMaxVolume: (t) => {
        (0, I.r)(() => e({ maxVolume: t }));
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
    K = (0, W.v)();
async function Z(e) {
    if (null == K) throw Error("Failed to create audio context");
    let t = await e.arrayBuffer();
    return (await K.decodeAudioData(t)).getChannelData(0);
}
let $ = { ...D.Jh };
var ee = l(35854);
let et = a.memo(function (e) {
        let { file: t, audio: l, className: i, waveformSettings: s } = e,
            [r, u] = a.useState({ width: 0, height: 0 }),
            o = a.useRef(null),
            c = a.useMemo(() => {
                let e = l?.duration ?? 1;
                return { fineTuning: -1, fineTuningResolution: e / D.Jh.fineTuningScale, duration: e, ...(s ?? {}) };
            }, [l, s]),
            d = (function (e) {
                let [t, l] = a.useState(null),
                    [n, i] = a.useState(null);
                return (
                    a.useEffect(() => {
                        if (null == e) return;
                        let t = (0, D.Ux)(e);
                        t !== n && (i(t), l(null), Z(e).then(l));
                    }, [n, e]),
                    t
                );
            })(t),
            f = (function (e, t, l) {
                let [n, i] = a.useState(null),
                    [s, r] = a.useState(null),
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
                                            data: { waveform: n, id: i, normalizedVolumeMultipler: s },
                                        } = l;
                                        (a === i && (t(n), o(s)), X?.removeEventListener("message", e));
                                    }),
                                        X?.postMessage({ id: a, options: l, config: $, width: n, rawBufferData: e }));
                                })).then(r));
                        },
                        [l],
                    );
                return (
                    a.useEffect(() => {
                        if (null == e || null == t) return;
                        let a = (0, D.HL)(e, l);
                        n !== a && (i(a), d(e, t));
                    }, [e, d, t, l, n]),
                    a.useEffect(() => {
                        c(u);
                    }, [u, c]),
                    s
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
                        let i = f[l] * n,
                            s = l * e + a,
                            r = n / 2 - i / 2;
                        t.fillRect(s, r, e - a, i);
                    }
                }
            }, [h, r, m, f]),
            (0, n.jsxs)("div", {
                className: y()(ee.kL, i),
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
            { file: i, audio: s } = U();
        return (0, n.jsx)(et, {
            file: i,
            audio: s,
            waveformSettings: { fineTuning: t, fineTuningResolution: l, duration: a },
        });
    });
var en = l(518070);
let ea = a.memo(function (e) {
    let { playing: t, onPausePlayback: l, onPlaybackChange: i, onChangePosition: s, disabled: r = !1 } = e,
        u = { ...D.Jh },
        { audio: o } = U(),
        c = null != o,
        d = a.useRef(null),
        f = a.useRef(null),
        m = a.useRef(null),
        [h, g] = a.useState(0),
        [x, v] = a.useState(0),
        [b, j] = a.useState(0),
        [p, w] = a.useState(!1),
        [C, N] = a.useState(!1),
        [S, E] = a.useState(!1),
        [k, A] = a.useState(0),
        [T, I] = a.useState(-1),
        F = a.useMemo(() => k / u.fineTuningScale, [u.fineTuningScale, k]);
    a.useEffect(() => {
        if (null == o) return;
        let e = o.duration * M.A.Millis.SECOND;
        (g(0), v(0), j(e), A(e));
    }, [o]);
    let _ = a.useCallback(
            (e, t) => {
                if ((l(), 0 === e.button))
                    switch (t) {
                        case 0:
                            w(!0);
                            break;
                        case 1:
                            N(!0);
                            break;
                        case 2:
                            E(!0);
                    }
            },
            [l],
        ),
        J = a.useCallback((e) => {
            switch (e) {
                case 0:
                    w(!1);
                    break;
                case 1:
                    N(!1);
                    break;
                case 2:
                    E(!1);
            }
            I(-1);
        }, []),
        G = a.useCallback(
            (e) => {
                if (null == o || !p) return;
                let t = parseInt(e.target.value),
                    l = t > b ? b : t;
                (i(P(l)), g(l), v(l));
            },
            [o, i, b, p],
        ),
        z = a.useCallback(
            (e) => {
                if (null == o || !C) return;
                let t = parseInt(e.target.value);
                t < h ? (i(P(h)), v(h)) : t > b ? (i(P(b)), v(b)) : (i(P(t)), v(t));
            },
            [o, i, b, C, h],
        ),
        B = a.useCallback(
            (e) => {
                if (null == o || !S) return;
                let t = parseInt(e.target.value),
                    l = t > h ? t : h;
                (i(P(h)), v(h), j(l));
            },
            [o, i, S, h],
        );
    return (
        a.useEffect(() => {
            null != s && c && s({ startPositionMs: h, endPositionMs: b, playheadPositionMs: x });
        }, [h, b, s, c, x]),
        a.useEffect(() => {
            let e;
            if (null != o)
                return (
                    t &&
                        (e = setInterval(() => {
                            o.currentTime < P(b)
                                ? o.currentTime >= P(x) && v(o.currentTime * M.A.Millis.SECOND)
                                : (l(P(h)), v(h));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [o, b, l, x, t, h]),
        a.useEffect(() => {
            if (u.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
                p && h == h && -1 === T ? I(h) : S && b == b && -1 === T ? I(b) : C && x == x && -1 === T && I(x);
            }, u.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [u.fineTuningDelay, S, b, T, C, x, p, h]),
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
                                    min: O(T, F, k),
                                    max: R(T, F, k),
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
                                    min: O(T, F, k),
                                    max: R(T, F, k),
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
                                min: O(T, F, k),
                                max: R(T, F, k),
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
                                left: `${L(h, T, F, k)}%`,
                                right: `${(T >= 0 && F > 0 ? -((b - (T + (F * (k - T)) / k)) * 100) / F : -(100 * b * 1) / k + 100).toFixed(4)}%`,
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
                                className: y()(en.lG, { [en.cB]: C || p || S || t }),
                                style: { left: `${L(x, T, F, k)}%` },
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: en.FU,
                    children: (0, n.jsx)(el, { fineTuning: T, fineTuningResolution: F, duration: k }),
                }),
            ],
        })
    );
});
var ei = l(980504),
    es = l(933237);
let er = { startPositionMs: 0, endPositionMs: 2 * (10 * M.A.Millis.SECOND), playheadPositionMs: 0 },
    eu = a.memo(function (e) {
        let { className: t, volume: l, disabled: i = !1, onChange: s } = e,
            { audio: r } = U(),
            [u, o] = a.useState(!1),
            [c, d] = a.useState(er),
            { playheadPositionMs: f, endPositionMs: m, startPositionMs: h } = c,
            g = null != r,
            x = m - h,
            v = x > 5 * M.A.Millis.SECOND;
        a.useEffect(() => {
            if (null != r)
                return (
                    d({ playheadPositionMs: 0, endPositionMs: r.duration * M.A.Millis.SECOND, startPositionMs: 0 }),
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
                    (f >= m ? (r.currentTime = P(h)) : (r.currentTime = P(f)),
                        (r.volume = (0, k.A)(l)),
                        r.play(),
                        o(!0));
                }
            }, [r, m, b, f, u, h, l]),
            p = a.useCallback(
                (e) => {
                    (d(e), s?.({ startMs: e.startPositionMs, endMs: e.endPositionMs }));
                },
                [s],
            ),
            w = a.useCallback(
                (e) => {
                    null != r && (r.currentTime = e);
                },
                [r],
            );
        return (0, n.jsxs)("div", {
            className: y()(es.kL, { [es.J_]: g, [es.r9]: !g || i }, t),
            children: [
                (0, n.jsxs)("div", {
                    className: es.k0,
                    children: [
                        (0, n.jsx)(C.D, {
                            className: es.Rr,
                            onClick: g ? j : void 0,
                            children: u
                                ? (0, n.jsx)(N.w, { size: "xs", color: "currentColor", className: es.CJ })
                                : (0, n.jsx)(S.PlayIcon, { size: "xs", color: "currentColor", className: es.CJ }),
                        }),
                        (0, n.jsx)("div", {
                            className: es.aq,
                            children: (0, n.jsx)(E.E, {
                                className: es.__invalid_duration,
                                variant: "text-xs/normal",
                                color: v ? "text-feedback-warning" : "text-feedback-positive",
                                children: `${P(x).toFixed(2)}s`,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(ea, {
                    playing: u,
                    onPlaybackChange: w,
                    onPausePlayback: b,
                    onChangePosition: p,
                    disabled: i,
                }),
            ],
        });
    });
var eo = l(102597),
    ec = l(353672);
let ed = a.memo(function (e) {
    let { sound: t, volume: l, disabled: i } = e,
        [s, r] = a.useState(!1),
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
                (0, n.jsx)(C.D, {
                    onClick: i
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
                    "aria-label": s ? F.intl.string(F.t.hHBkuG) : F.intl.string(F.t.RscU7I),
                    children: s
                        ? (0, n.jsx)(N.w, { size: "xs", color: "currentColor", className: ec.uZ })
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
    let { sound: t, volume: l, disabled: a = !1, onChange: i } = e,
        { file: s } = U();
    return (0, n.jsx)(d.D, {
        label: F.intl.string(F.t.CCRKNz),
        children: (0, n.jsxs)("div", {
            className: ef.UV,
            children: [
                null != t && (0, n.jsx)(ed, { sound: t, volume: l, disabled: a }),
                null == t && null != s && (0, n.jsx)(eu, { className: ef.lF, volume: l, disabled: a, onChange: i }),
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
    ew = l(576705),
    ey = l(711014),
    eC = l(287809),
    eN = l(473145),
    eS = l(935208),
    eE = l(209932),
    eM = l(652215),
    ek = l(19438);
function eA(e) {
    let { availableSlots: t, className: l } = e;
    return (0, n.jsxs)(E.E, {
        className: y()(ek._E, l),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, n.jsx)(ev.H, { size: "md", color: "currentColor", className: ek.Xk }),
            F.intl.format(F.t["8Dyg1C"], { slots: t }),
        ],
    });
}
function eT(e) {
    let t,
        { label: l, value: i, className: s, onChange: r } = e,
        u = (0, eg.cf)([ey.Ay, ew.A, eC.default, ep.A], () => {
            let e = {};
            for (let t of ey.Ay.getFlattenedGuildIds()) {
                let l = ep.A.getGuild(t);
                null != l && (0, ej.ie)(l, ew.A, eC.default).canCreateExpressions && (e[l.id] = l);
            }
            return e;
        }),
        o = (0, eg.cf)(
            [eE.A],
            () => {
                let e = {};
                for (let [t, l] of eS.default.entries(u)) {
                    let n = (0, eN.tO)(l, eE.A.getSoundsForGuild(t) ?? ei.pD, l.premiumTier);
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
        g = null == (t = o[i ?? eM.dJq]) || t > 0 ? i : void 0;
    return (0, n.jsx)(ex.p, {
        label: l,
        className: s,
        onChange: h,
        value: g,
        multi: !1,
        options: c,
        renderOptionPrefix: d,
        renderOptionSuffix: f,
        renderOptionLabel: m,
        placeholder: 0 === c.length ? F.intl.string(F.t.O3i2gV) : F.intl.string(F.t.CunCMN),
        "data-migration-pending": !0,
    });
}
let eI = [{ name: "audio", extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"] }];
function eD(e) {
    let { guildId: t, sourceFile: l, existingSound: i, onClose: w, transitionState: y, showGuildPicker: C = !1 } = e,
        [N, S] = a.useState(l?.name ?? i?.name ?? ""),
        [E, M] = a.useState(i?.volume ?? 1),
        [k, A] = a.useState(i?.emojiId),
        [T, I] = a.useState(i?.emojiName),
        { file: D, loadAudioFromFile: O, maxVolume: P, setMaxVolume: R } = U(),
        [L, _] = a.useState(!1),
        [J, G] = a.useState(null),
        [V, z] = a.useState(null),
        [B, H] = a.useState("ready"),
        [q, Y] = a.useState(t);
    async function Q(e) {
        try {
            (await O(e ?? null), H("ready"), G(null));
        } catch (e) {
            W(e);
        }
    }
    function W(e) {
        if (e instanceof g.A) G(e);
        else if (e instanceof Error) {
            let t = { status: 500, body: { message: e.message } };
            G(new g.A(t));
        } else G(new g.A(e));
    }
    a.useEffect(() => {
        l?.file != null && e(l.file);
        async function e(e) {
            try {
                (await O(e), H("ready"), G(null));
            } catch (e) {
                W(e);
            }
        }
    }, [l?.file, O]);
    let X = (function (e) {
            switch (e) {
                case "encoding":
                    return F.intl.string(F.t["4IMMdB"]);
                case "encoding-failed":
                    return F.intl.string(F.t.Ka29xq);
                case "uploading":
                    return F.intl.string(F.t.ndr58Q);
            }
            return null;
        })(B),
        K = "uploading" === B || "encoding" === B,
        Z = null != i,
        $ =
            N.length >= 2 &&
            (Z || null != D) &&
            null != q &&
            (function (e) {
                if (null == e) return !0;
                let t = (e.endMs - e.startMs) / 1e3;
                return t > 0 && t <= 5;
            })(V),
        ee = a.useCallback(async (e, t) => {
            H("encoding");
            try {
                let l = await (0, eh.Yo)(e, t);
                return (H("ready"), l);
            } catch (e) {
                throw (H("encoding-failed"), e);
            }
        }, []),
        et = a.useCallback(async () => {
            if (null == D) return;
            s()(null != q, "Cannot submit soundboard sound with no guildId");
            let e = D;
            if (null != V) {
                let t = await ee(D, V);
                if (null == t) return;
                e = t;
            }
            let t = (0, eh.YK)(e);
            H("uploading");
            try {
                (await (0, eh.JX)({ readPromise: t, guildId: q, name: N, volume: E, emojiId: k, emojiName: T }),
                    H("ready"));
            } catch (e) {
                throw new g.A(e);
            }
        }, [D, q, N, ee, V, E, k, T]),
        el = a.useCallback(async () => {
            (s()(null != q, "Cannot submit soundboard sound with no guildId"), _(!0), G(null));
            try {
                (Z
                    ? await (0, p.xV)({
                          guildId: q,
                          soundId: i.soundId,
                          name: N,
                          volume: E,
                          emojiId: k ?? null,
                          emojiName: T ?? null,
                      })
                    : (await et(), (0, u.P0)({ text: F.intl.string(F.t.T7dhBL), variant: "success" })),
                    w());
            } catch (e) {
                W(e);
            } finally {
                (H("ready"), _(!1), M(1), R(1));
            }
        }, [Z, w, q, i, N, E, k, T, et, R]);
    ((0, x.Ay)(() => {
        (O(null), j.default.track(eM.HAw.OPEN_MODAL, { type: "Soundboard Upload Sound", guild_id: q }));
    }),
        a.useEffect(() => {
            M(Math.min(E, P));
        }, [E, M, P]));
    let en = (0, n.jsx)(v.A, {
            guildId: q,
            emojiId: k,
            emojiName: T,
            setEmojiId: A,
            setEmojiName: I,
            error: J?.getFirstFieldErrorMessage("emoji"),
            isRequiredField: !1,
        }),
        ea = a.useMemo(
            () => [
                { variant: "secondary", text: F.intl.string(F.t.Khpixd), onClick: w, disabled: L },
                {
                    text: Z ? F.intl.string(F.t.bZY171) : F.intl.string(F.t.RGJbYB),
                    onClick: el,
                    variant: "primary",
                    disabled: !$,
                    loading: L,
                },
            ],
            [el, $, L, Z, w],
        );
    return (0, n.jsx)(r.a, {
        onClose: w,
        transitionState: y,
        title: Z ? F.intl.string(F.t.HmsZGS) : F.intl.string(F.t["ioD/9I"]),
        actions: ea,
        children: (0, n.jsxs)(o.n, {
            children: [
                null != J &&
                    !J.hasFieldErrors() &&
                    (0, n.jsx)(c.w, { type: "critical", message: J.message, role: "alert" }),
                C ? (0, n.jsx)(eT, { label: F.intl.string(F.t.UYt7iQ), value: q, onChange: Y }) : null,
                (Z || null != D) && (0, n.jsx)(em, { sound: i, volume: E, disabled: K, onChange: z }),
                Z || null != l
                    ? null
                    : (0, n.jsx)(d.D, {
                          required: !0,
                          errorMessage: J?.getFirstFieldErrorMessage("sound"),
                          label: F.intl.string(F.t.sSHaG7),
                          children: (0, n.jsx)(b.A, {
                              filename: D?.name ?? "",
                              buttonText: F.intl.string(F.t.zpi3XG),
                              placeholder: F.intl.string(F.t["x+YUL9"]),
                              onFileSelect: Q,
                              filters: eI,
                          }),
                      }),
                (0, n.jsxs)(f.M, {
                    children: [
                        (0, n.jsx)(m.k, {
                            required: !0,
                            label: F.intl.string(F.t.NpJGaM),
                            placeholder: F.intl.string(F.t.NpJGaM),
                            error: J?.getFirstFieldErrorMessage("name"),
                            value: N,
                            onChange: S,
                            maxLength: 32,
                        }),
                        en,
                    ],
                }),
                (0, n.jsx)(h.G, {
                    label: F.intl.string(F.t["3CJlb1"]),
                    errorMessage: J?.getFirstFieldErrorMessage("volume"),
                    helperText: null != X ? X : void 0,
                    initialValue: E,
                    onValueChange: (e) => M(Math.round(100 * e) / 100),
                    minValue: 0,
                    maxValue: P,
                    keyboardStep: 0.05,
                }),
            ],
        }),
    });
}
