t.d(l, { default: () => eD });
var n = t(477900),
    a = t(582128),
    i = t(284009),
    s = t.n(i),
    r = t(189213),
    u = t(376357),
    o = t(270003),
    c = t(683071),
    d = t(452027),
    f = t(532446),
    m = t(95477),
    h = t(299163),
    g = t(181658),
    x = t(964486),
    v = t(776568),
    b = t(643374),
    j = t(174459),
    p = t(796774),
    C = t(503698),
    w = t.n(C),
    y = t(939249),
    N = t(29080),
    S = t(782134),
    E = t(834730),
    M = t(927813),
    k = t(904054),
    A = t(462180),
    T = t(882035),
    I = t(121894);
(t(323874), t(14289), t(35956));
var D = t(335416),
    F = t(660183);
function O(e, l, t) {
    return -1 === e ? 0 : e - (l * e) / t;
}
function P(e) {
    return e / 1e3;
}
function R(e, l, t) {
    return -1 === e ? t : e + (l * (t - e)) / t;
}
function L(e, l, t, n) {
    return (l >= 0 && t > 0 ? ((e - (l - (t * l) / n)) * 100) / t : (100 * e) / n).toFixed(4);
}
async function _(e) {
    if (!D.VM.has(e.type)) throw Error(F.intl.formatToPlainString(F.t["2y3xGU"], { fileType: e.type }));
    let l = new Audio(URL.createObjectURL(e));
    return (
        await new Promise((e, t) => {
            function n() {
                (l.removeEventListener("canplaythrough", a), l.removeEventListener("error", i));
            }
            function a() {
                (n(), e());
            }
            function i() {
                (n(), t(Error(F.intl.formatToPlainString(F.t["6w+Dyr"], {}))));
            }
            (l.addEventListener("canplaythrough", a), l.addEventListener("error", i), l.load());
        }),
        l
    );
}
async function J(e, l) {
    let t = await fetch(e);
    return new File([await t.blob()], l, { type: "audio/mp3" });
}
let U = (0, T.h)((e) => ({
    audio: null,
    file: null,
    loading: !1,
    loadAudioFromFile: async (l) => {
        if (((0, I.r)(() => e({ file: l, audio: null, loading: null != l })), null == l)) return;
        let t = await _(l);
        null != t && (0, I.r)(() => e({ audio: t, loading: !1 }));
    },
    maxVolume: 1,
    setMaxVolume: (l) => {
        (0, I.r)(() => e({ maxVolume: l }));
    },
}));
function G() {
    return U(
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
    K = (0, W.v)();
async function Z(e) {
    if (null == K) throw Error("Failed to create audio context");
    let l = await e.arrayBuffer();
    return (await K.decodeAudioData(l)).getChannelData(0);
}
let $ = { ...D.Jh };
var ee = t(35854);
let el = a.memo(function (e) {
        let { file: l, audio: t, className: i, waveformSettings: s } = e,
            [r, u] = a.useState({ width: 0, height: 0 }),
            o = a.useRef(null),
            c = a.useMemo(() => {
                let e = t?.duration ?? 1;
                return { fineTuning: -1, fineTuningResolution: e / D.Jh.fineTuningScale, duration: e, ...(s ?? {}) };
            }, [t, s]),
            d = (function (e) {
                let [l, t] = a.useState(null),
                    [n, i] = a.useState(null);
                return (
                    a.useEffect(() => {
                        if (null == e) return;
                        let l = (0, D.Ux)(e);
                        l !== n && (i(l), t(null), Z(e).then(t));
                    }, [n, e]),
                    l
                );
            })(l),
            f = (function (e, l, t) {
                let [n, i] = a.useState(null),
                    [s, r] = a.useState(null),
                    [u, o] = a.useState(1),
                    { setMaxVolume: c } = G(),
                    d = a.useCallback(
                        (e, l) => {
                            var n;
                            (r(null),
                                ((n = l.offsetWidth),
                                new Promise((l) => {
                                    let a = (0, Q.A)();
                                    (X?.addEventListener("message", function e(t) {
                                        let {
                                            data: { waveform: n, id: i, normalizedVolumeMultipler: s },
                                        } = t;
                                        (a === i && (l(n), o(s)), X?.removeEventListener("message", e));
                                    }),
                                        X?.postMessage({ id: a, options: t, config: $, width: n, rawBufferData: e }));
                                })).then(r));
                        },
                        [t],
                    );
                return (
                    a.useEffect(() => {
                        if (null == e || null == l) return;
                        let a = (0, D.HL)(e, t);
                        n !== a && (i(a), d(e, l));
                    }, [e, d, l, t, n]),
                    a.useEffect(() => {
                        c(u);
                    }, [u, c]),
                    s
                );
            })(d, o.current, c),
            m = (0, Y.Ay)(),
            h = (0, H.r)(B.A.colors.ICON_STRONG).hex(),
            g = null == d || null == f,
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
                        let i = f[t] * n,
                            s = t * e + a,
                            r = n / 2 - i / 2;
                        l.fillRect(s, r, e - a, i);
                    }
                }
            }, [h, r, m, f]),
            (0, n.jsxs)("div", {
                className: w()(ee.kL, i),
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
            { file: i, audio: s } = G();
        return (0, n.jsx)(el, {
            file: i,
            audio: s,
            waveformSettings: { fineTuning: l, fineTuningResolution: t, duration: a },
        });
    });
var en = t(518070);
let ea = a.memo(function (e) {
    let { playing: l, onPausePlayback: t, onPlaybackChange: i, onChangePosition: s, disabled: r = !1 } = e,
        u = { ...D.Jh },
        { audio: o } = G(),
        c = null != o,
        d = a.useRef(null),
        f = a.useRef(null),
        m = a.useRef(null),
        [h, g] = a.useState(0),
        [x, v] = a.useState(0),
        [b, j] = a.useState(0),
        [p, C] = a.useState(!1),
        [y, N] = a.useState(!1),
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
            (e, l) => {
                if ((t(), 0 === e.button))
                    switch (l) {
                        case 0:
                            C(!0);
                            break;
                        case 1:
                            N(!0);
                            break;
                        case 2:
                            E(!0);
                    }
            },
            [t],
        ),
        J = a.useCallback((e) => {
            switch (e) {
                case 0:
                    C(!1);
                    break;
                case 1:
                    N(!1);
                    break;
                case 2:
                    E(!1);
            }
            I(-1);
        }, []),
        U = a.useCallback(
            (e) => {
                if (null == o || !p) return;
                let l = parseInt(e.target.value),
                    t = l > b ? b : l;
                (i(P(t)), g(t), v(t));
            },
            [o, i, b, p],
        ),
        z = a.useCallback(
            (e) => {
                if (null == o || !y) return;
                let l = parseInt(e.target.value);
                l < h ? (i(P(h)), v(h)) : l > b ? (i(P(b)), v(b)) : (i(P(l)), v(l));
            },
            [o, i, b, y, h],
        ),
        B = a.useCallback(
            (e) => {
                if (null == o || !S) return;
                let l = parseInt(e.target.value),
                    t = l > h ? l : h;
                (i(P(h)), v(h), j(t));
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
                    l &&
                        (e = setInterval(() => {
                            o.currentTime < P(b)
                                ? o.currentTime >= P(x) && v(o.currentTime * M.A.Millis.SECOND)
                                : (t(P(h)), v(h));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [o, b, t, x, l, h]),
        a.useEffect(() => {
            if (u.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
                p && h == h && -1 === T ? I(h) : S && b == b && -1 === T ? I(b) : y && x == x && -1 === T && I(x);
            }, u.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [u.fineTuningDelay, S, b, T, y, x, p, h]),
        (0, n.jsxs)("div", {
            className: w()(en.IO, { [en.J_]: c }),
            children: [
                (0, n.jsxs)("div", {
                    className: en.Rn,
                    children: [
                        (0, n.jsxs)("div", {
                            className: en.Dn,
                            children: [
                                (0, n.jsx)("input", {
                                    ref: d,
                                    className: w()(en.Os, en.YT),
                                    type: "range",
                                    min: O(T, F, k),
                                    max: R(T, F, k),
                                    value: h,
                                    onChange: U,
                                    onMouseDown: (e) => _(e, 0),
                                    onMouseUp: () => J(0),
                                    disabled: !c || r,
                                }),
                                (0, n.jsx)("input", {
                                    ref: m,
                                    className: w()(en.Os, en.BC),
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
                                className: w()(en.Os, en.GO),
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
                            className: w()(en.Wm, { [en.Em]: p, [en.z6]: S }),
                            style: {
                                left: `${L(h, T, F, k)}%`,
                                right: `${(T >= 0 && F > 0 ? -((b - (T + (F * (k - T)) / k)) * 100) / F : -(100 * b * 1) / k + 100).toFixed(4)}%`,
                            },
                            children: [
                                (0, n.jsx)("div", {
                                    className: w()(en.P, en.RC),
                                    children: (0, n.jsx)("div", {
                                        className: w()(en.Xd, en.__invalid_start),
                                        children: (0, n.jsx)(V.A, {
                                            direction: V.A.Directions.RIGHT,
                                            className: en.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: w()(en.P, en.SE),
                                    children: (0, n.jsx)("div", {
                                        className: w()(en.Xd, en.__invalid_end),
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
                                className: w()(en.lG, { [en.cB]: y || p || S || l }),
                                style: { left: `${L(x, T, F, k)}%` },
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: en.FU,
                    children: (0, n.jsx)(et, { fineTuning: T, fineTuningResolution: F, duration: k }),
                }),
            ],
        })
    );
});
var ei = t(980504),
    es = t(933237);
let er = { startPositionMs: 0, endPositionMs: 2 * (10 * M.A.Millis.SECOND), playheadPositionMs: 0 },
    eu = a.memo(function (e) {
        let { className: l, volume: t, disabled: i = !1, onChange: s } = e,
            { audio: r } = G(),
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
                        (r.volume = (0, k.A)(t)),
                        r.play(),
                        o(!0));
                }
            }, [r, m, b, f, u, h, t]),
            p = a.useCallback(
                (e) => {
                    (d(e), s?.({ startMs: e.startPositionMs, endMs: e.endPositionMs }));
                },
                [s],
            ),
            C = a.useCallback(
                (e) => {
                    null != r && (r.currentTime = e);
                },
                [r],
            );
        return (0, n.jsxs)("div", {
            className: w()(es.kL, { [es.J_]: g, [es.r9]: !g || i }, l),
            children: [
                (0, n.jsxs)("div", {
                    className: es.k0,
                    children: [
                        (0, n.jsx)(y.D, {
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
                    onPlaybackChange: C,
                    onPausePlayback: b,
                    onChangePosition: p,
                    disabled: i,
                }),
            ],
        });
    });
var eo = t(102597),
    ec = t(353672);
let ed = a.memo(function (e) {
    let { sound: l, volume: t, disabled: i } = e,
        [s, r] = a.useState(!1),
        u = a.useRef(null),
        { file: o, audio: c, loadAudioFromFile: d } = G(),
        f = a.useMemo(() => (0, eo.A)(l.soundId), [l]);
    return (
        a.useEffect(() => {
            null == u.current && (u.current = J(f, l.name).then(d));
        }, [f, d, l.name]),
        (0, n.jsxs)("div", {
            className: ec.i1,
            children: [
                (0, n.jsx)(y.D, {
                    onClick: i
                        ? void 0
                        : function () {
                              null != c &&
                                  (c.paused
                                      ? ((c.volume = (0, k.A)(t)),
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
                    children: (0, n.jsx)(el, { className: ec.ou, file: o, audio: c }),
                }),
            ],
        })
    );
});
var ef = t(735529);
let em = a.memo(function (e) {
    let { sound: l, volume: t, disabled: a = !1, onChange: i } = e,
        { file: s } = G();
    return (0, n.jsx)(d.D, {
        label: F.intl.string(F.t.CCRKNz),
        children: (0, n.jsxs)("div", {
            className: ef.UV,
            children: [
                null != l && (0, n.jsx)(ed, { sound: l, volume: t, disabled: a }),
                null == l && null != s && (0, n.jsx)(eu, { className: ef.lF, volume: t, disabled: a, onChange: i }),
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
    eC = t(576705),
    ew = t(711014),
    ey = t(287809),
    eN = t(473145),
    eS = t(935208),
    eE = t(209932),
    eM = t(652215),
    ek = t(19438);
function eA(e) {
    let { availableSlots: l, className: t } = e;
    return (0, n.jsxs)(E.E, {
        className: w()(ek._E, t),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, n.jsx)(ev.H, { size: "md", color: "currentColor", className: ek.Xk }),
            F.intl.format(F.t["8Dyg1C"], { slots: l }),
        ],
    });
}
function eT(e) {
    let l,
        { label: t, value: i, className: s, onChange: r } = e,
        u = (0, eg.cf)([ew.Ay, eC.A, ey.default, ep.A], () => {
            let e = {};
            for (let l of ew.Ay.getFlattenedGuildIds()) {
                let t = ep.A.getGuild(l);
                null != t && (0, ej.ie)(t, eC.A, ey.default).canCreateExpressions && (e[t.id] = t);
            }
            return e;
        }),
        o = (0, eg.cf)(
            [eE.A],
            () => {
                let e = {};
                for (let [l, t] of eS.default.entries(u)) {
                    let n = (0, eN.tO)(t, eE.A.getSoundsForGuild(l) ?? ei.pD, t.premiumTier);
                    e[l] = n;
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
                    let { name: l, id: t } = e;
                    return { label: l, value: t, disabled: o[t] <= 0 };
                }),
            [u, o],
        ),
        d = a.useCallback(
            (e) =>
                null == e || "" === e.value
                    ? null
                    : (0, n.jsx)(eb.Ay, {
                          className: w()(ek.cl, { [ek.QJ]: e.disabled }),
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
                    : (0, n.jsx)(eA, { className: w()({ [ek.QJ]: e?.disabled }), availableSlots: o[l] });
            },
            [o],
        ),
        m = a.useCallback((e) => (0, n.jsx)("div", { className: w()({ [ek.QJ]: e.disabled }), children: e.label }), []),
        h = a.useCallback(
            (e) => {
                o[e] <= 0 || r(e);
            },
            [o, r],
        ),
        g = null == (l = o[i ?? eM.dJq]) || l > 0 ? i : void 0;
    return (0, n.jsx)(ex.p, {
        label: t,
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
    let { guildId: l, sourceFile: t, existingSound: i, onClose: C, transitionState: w, showGuildPicker: y = !1 } = e,
        [N, S] = a.useState(t?.name ?? i?.name ?? ""),
        [E, M] = a.useState(i?.volume ?? 1),
        [k, A] = a.useState(i?.emojiId),
        [T, I] = a.useState(i?.emojiName),
        { file: D, loadAudioFromFile: O, maxVolume: P, setMaxVolume: R } = G(),
        [L, _] = a.useState(!1),
        [J, U] = a.useState(null),
        [V, z] = a.useState(null),
        [B, H] = a.useState("ready"),
        [q, Y] = a.useState(l);
    async function Q(e) {
        try {
            (await O(e ?? null), H("ready"), U(null));
        } catch (e) {
            W(e);
        }
    }
    function W(e) {
        if (e instanceof g.A) U(e);
        else if (e instanceof Error) {
            let l = { status: 500, body: { message: e.message } };
            U(new g.A(l));
        } else U(new g.A(e));
    }
    a.useEffect(() => {
        t?.file != null && e(t.file);
        async function e(e) {
            try {
                (await O(e), H("ready"), U(null));
            } catch (e) {
                W(e);
            }
        }
    }, [t?.file, O]);
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
                let l = (e.endMs - e.startMs) / 1e3;
                return l > 0 && l <= 5;
            })(V),
        ee = a.useCallback(async (e, l) => {
            H("encoding");
            try {
                let t = await (0, eh.Yo)(e, l);
                return (H("ready"), t);
            } catch (e) {
                throw (H("encoding-failed"), e);
            }
        }, []),
        el = a.useCallback(async () => {
            if (null == D) return;
            s()(null != q, "Cannot submit soundboard sound with no guildId");
            let e = D;
            if (null != V) {
                let l = await ee(D, V);
                if (null == l) return;
                e = l;
            }
            let l = (0, eh.YK)(e);
            H("uploading");
            try {
                (await (0, eh.JX)({ readPromise: l, guildId: q, name: N, volume: E, emojiId: k, emojiName: T }),
                    H("ready"));
            } catch (e) {
                throw new g.A(e);
            }
        }, [D, q, N, ee, V, E, k, T]),
        et = a.useCallback(async () => {
            (s()(null != q, "Cannot submit soundboard sound with no guildId"), _(!0), U(null));
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
                    : (await el(), (0, u.P0)((0, u.ox)(F.intl.string(F.t.T7dhBL), u.Ck.SUCCESS))),
                    C());
            } catch (e) {
                W(e);
            } finally {
                (H("ready"), _(!1), M(1), R(1));
            }
        }, [Z, C, q, i, N, E, k, T, el, R]);
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
                { variant: "secondary", text: F.intl.string(F.t.Khpixd), onClick: C, disabled: L },
                {
                    text: Z ? F.intl.string(F.t.bZY171) : F.intl.string(F.t.RGJbYB),
                    onClick: et,
                    variant: "primary",
                    disabled: !$,
                    loading: L,
                },
            ],
            [et, $, L, Z, C],
        );
    return (0, n.jsx)(r.a, {
        onClose: C,
        transitionState: w,
        title: Z ? F.intl.string(F.t.HmsZGS) : F.intl.string(F.t["ioD/9I"]),
        actions: ea,
        children: (0, n.jsxs)(o.n, {
            children: [
                null != J &&
                    !J.hasFieldErrors() &&
                    (0, n.jsx)(c.w, { type: "critical", message: J.message, role: "alert" }),
                y ? (0, n.jsx)(eT, { label: F.intl.string(F.t.UYt7iQ), value: q, onChange: Y }) : null,
                (Z || null != D) && (0, n.jsx)(em, { sound: i, volume: E, disabled: K, onChange: z }),
                Z || null != t
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
                (0, n.jsx)(h.A, {
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
