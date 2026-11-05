l.d(t, { default: () => eA });
var n = l(477900),
    a = l(582128),
    s = l(284009),
    i = l.n(s),
    r = l(189213),
    u = l(858899),
    o = l(270003),
    c = l(683071),
    d = l(452027),
    m = l(532446),
    f = l(95477),
    h = l(893007),
    g = l(181658),
    x = l(964486),
    v = l(759886),
    b = l(643374),
    j = l(129230),
    p = l(796774),
    y = l(503698),
    C = l.n(y),
    N = l(939249),
    S = l(29080),
    w = l(782134),
    M = l(834730),
    E = l(927813),
    k = l(904054),
    A = l(462180),
    T = l(882035),
    I = l(121894);
(l(323874), l(14289), l(35956));
var F = l(335416),
    D = l(792996);
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
let _ = (0, T.h)((e) => ({
    audio: null,
    file: null,
    loading: !1,
    loadAudioFromFile: async (t) => {
        if (((0, I.r)(() => e({ file: t, audio: null, loading: null != t })), null == t)) return;
        let l = await (async function (e) {
            if (!F.VM.has(e.type)) throw Error(D.intl.formatToPlainString(D.t["2y3xGU"], { fileType: e.type }));
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
                        (n(), l(Error(D.intl.formatToPlainString(D.t["6w+Dyr"], {}))));
                    }
                    (t.addEventListener("canplaythrough", a), t.addEventListener("error", s), t.load());
                }),
                t
            );
        })(t);
        null != l && (0, I.r)(() => e({ audio: l, loading: !1 }));
    },
    maxVolume: 1,
    setMaxVolume: (t) => {
        (0, I.r)(() => e({ maxVolume: t }));
    },
}));
function G() {
    return _(
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
var J = l(147925),
    U = l(435558),
    V = l(646514),
    z = l(602853),
    B = l(289873),
    H = l(736653),
    Y = l(115560),
    q = l(602674);
let Q = new Worker(new URL("/assets/" + l.u(658777), l.b)),
    W = (0, q.v)(),
    X = { ...F.Jh };
var $ = l(35854);
let K = a.memo(function (e) {
        let { file: t, audio: l, className: s, waveformSettings: i } = e,
            [r, u] = a.useState({ width: 0, height: 0 }),
            o = a.useRef(null),
            c = a.useMemo(() => {
                let e = l?.duration ?? 1;
                return { fineTuning: -1, fineTuningResolution: e / F.Jh.fineTuningScale, duration: e, ...(i ?? {}) };
            }, [l, i]),
            d = (function (e) {
                let [t, l] = a.useState(null),
                    [n, s] = a.useState(null);
                return (
                    a.useEffect(() => {
                        if (null == e) return;
                        let t = (0, F.Ux)(e);
                        t !== n &&
                            (s(t),
                            l(null),
                            (async function (e) {
                                if (null == W) throw Error("Failed to create audio context");
                                let t = await e.arrayBuffer();
                                return (await W.decodeAudioData(t)).getChannelData(0);
                            })(e).then(l));
                    }, [n, e]),
                    t
                );
            })(t),
            m = (function (e, t, l) {
                let [n, s] = a.useState(null),
                    [i, r] = a.useState(null),
                    [u, o] = a.useState(1),
                    { setMaxVolume: c } = G(),
                    d = a.useCallback(
                        (e, t) => {
                            var n;
                            (r(null),
                                ((n = t.offsetWidth),
                                new Promise((t) => {
                                    let a = (0, Y.A)();
                                    (Q?.addEventListener("message", function e(l) {
                                        let {
                                            data: { waveform: n, id: s, normalizedVolumeMultipler: i },
                                        } = l;
                                        (a === s && (t(n), o(i)), Q?.removeEventListener("message", e));
                                    }),
                                        Q?.postMessage({ id: a, options: l, config: X, width: n, rawBufferData: e }));
                                })).then(r));
                        },
                        [l],
                    );
                return (
                    a.useEffect(() => {
                        if (null == e || null == t) return;
                        let a = (0, F.HL)(e, l);
                        n !== a && (s(a), d(e, t));
                    }, [e, d, t, l, n]),
                    a.useEffect(() => {
                        c(u);
                    }, [u, c]),
                    i
                );
            })(d, o.current, c),
            f = (0, H.Ay)(),
            h = (0, z.r)(V.A.colors.ICON_STRONG).hex(),
            g = null == d || null == m,
            x = (0 === r.width || 0 === r.height || g) && null != t,
            v = a.useCallback(() => {
                null != o.current && u({ width: o.current.offsetWidth, height: o.current.offsetHeight });
            }, []);
        return (
            a.useEffect(() => {
                if (null != o.current) {
                    let e = new ResizeObserver((0, U.debounce)(v, 50));
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
                if (0 !== r.width && 0 !== r.height && null != m && m.length > 0) {
                    let e = l / m.length,
                        a = -(e * (F.Jh.waveformBarWidth - 1));
                    (t.clearRect(0, 0, l, n), (t.fillStyle = h));
                    for (let l = 0; l < m.length; l++) {
                        let s = m[l] * n,
                            i = l * e + a,
                            r = n / 2 - s / 2;
                        t.fillRect(i, r, e - a, s);
                    }
                }
            }, [h, r, f, m]),
            (0, n.jsxs)("div", {
                className: C()($.kL, s),
                children: [
                    (0, n.jsx)("canvas", { className: $.s4, ref: o, width: 4 * r.width, height: 4 * r.height }),
                    x &&
                        (0, n.jsx)("div", {
                            className: $.Lq,
                            children: (0, n.jsx)(B.y, { type: B.t.SPINNING_CIRCLE }),
                        }),
                ],
            })
        );
    }),
    Z = a.memo(function (e) {
        let { fineTuning: t, fineTuningResolution: l, duration: a } = e,
            { file: s, audio: i } = G();
        return (0, n.jsx)(K, {
            file: s,
            audio: i,
            waveformSettings: { fineTuning: t, fineTuningResolution: l, duration: a },
        });
    });
var ee = l(518070);
let et = a.memo(function (e) {
    let { playing: t, onPausePlayback: l, onPlaybackChange: s, onChangePosition: i, disabled: r = !1 } = e,
        u = { ...F.Jh },
        { audio: o } = G(),
        c = null != o,
        d = a.useRef(null),
        m = a.useRef(null),
        f = a.useRef(null),
        [h, g] = a.useState(0),
        [x, v] = a.useState(0),
        [b, j] = a.useState(0),
        [p, y] = a.useState(!1),
        [N, S] = a.useState(!1),
        [w, M] = a.useState(!1),
        [k, A] = a.useState(0),
        [T, I] = a.useState(-1),
        D = a.useMemo(() => k / u.fineTuningScale, [u.fineTuningScale, k]);
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
                            y(!0);
                            break;
                        case 1:
                            S(!0);
                            break;
                        case 2:
                            M(!0);
                    }
            },
            [l],
        ),
        U = a.useCallback((e) => {
            switch (e) {
                case 0:
                    y(!1);
                    break;
                case 1:
                    S(!1);
                    break;
                case 2:
                    M(!1);
            }
            I(-1);
        }, []),
        V = a.useCallback(
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
                if (null == o || !w) return;
                let t = parseInt(e.target.value),
                    l = t > h ? t : h;
                (s(O(h)), v(h), j(l));
            },
            [o, s, w, h],
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
                p && h == h && -1 === T ? I(h) : w && b == b && -1 === T ? I(b) : N && x == x && -1 === T && I(x);
            }, u.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [u.fineTuningDelay, w, b, T, N, x, p, h]),
        (0, n.jsxs)("div", {
            className: C()(ee.IO, { [ee.J_]: c }),
            children: [
                (0, n.jsxs)("div", {
                    className: ee.Rn,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ee.Dn,
                            children: [
                                (0, n.jsx)("input", {
                                    ref: d,
                                    className: C()(ee.Os, ee.YT),
                                    type: "range",
                                    min: P(T, D, k),
                                    max: R(T, D, k),
                                    value: h,
                                    onChange: V,
                                    onMouseDown: (e) => _(e, 0),
                                    onMouseUp: () => U(0),
                                    disabled: !c || r,
                                }),
                                (0, n.jsx)("input", {
                                    ref: f,
                                    className: C()(ee.Os, ee.BC),
                                    type: "range",
                                    min: P(T, D, k),
                                    max: R(T, D, k),
                                    value: b,
                                    onChange: B,
                                    onMouseDown: (e) => _(e, 2),
                                    onMouseUp: () => U(2),
                                    disabled: !c || r,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: ee.__invalid_handlePlayheadTrack,
                            children: (0, n.jsx)("input", {
                                ref: m,
                                className: C()(ee.Os, ee.GO),
                                type: "range",
                                min: P(T, D, k),
                                max: R(T, D, k),
                                value: x,
                                onChange: z,
                                onMouseDown: (e) => _(e, 1),
                                onMouseUp: () => U(1),
                                disabled: !c || r,
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: ee.wo,
                    children: [
                        (0, n.jsxs)("div", {
                            className: C()(ee.Wm, { [ee.Em]: p, [ee.z6]: w }),
                            style: {
                                left: `${L(h, T, D, k)}%`,
                                right: `${(T >= 0 && D > 0 ? -((b - (T + (D * (k - T)) / k)) * 100) / D : -(100 * b * 1) / k + 100).toFixed(4)}%`,
                            },
                            children: [
                                (0, n.jsx)("div", {
                                    className: C()(ee.P, ee.RC),
                                    children: (0, n.jsx)("div", {
                                        className: C()(ee.Xd, ee.__invalid_start),
                                        children: (0, n.jsx)(J.A, {
                                            direction: J.A.Directions.RIGHT,
                                            className: ee.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: C()(ee.P, ee.SE),
                                    children: (0, n.jsx)("div", {
                                        className: C()(ee.Xd, ee.__invalid_end),
                                        children: (0, n.jsx)(J.A, {
                                            direction: J.A.Directions.LEFT,
                                            className: ee.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: ee.i0,
                            children: (0, n.jsx)("div", {
                                className: C()(ee.lG, { [ee.cB]: N || p || w || t }),
                                style: { left: `${L(x, T, D, k)}%` },
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: ee.FU,
                    children: (0, n.jsx)(Z, { fineTuning: T, fineTuningResolution: D, duration: k }),
                }),
            ],
        })
    );
});
var el = l(980504),
    en = l(933237);
let ea = { startPositionMs: 0, endPositionMs: 2 * (10 * E.A.Millis.SECOND), playheadPositionMs: 0 },
    es = a.memo(function (e) {
        let { className: t, volume: l, disabled: s = !1, onChange: i } = e,
            { audio: r } = G(),
            [u, o] = a.useState(!1),
            [c, d] = a.useState(ea),
            { playheadPositionMs: m, endPositionMs: f, startPositionMs: h } = c,
            g = null != r,
            x = f - h,
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
                    (m >= f ? (r.currentTime = O(h)) : (r.currentTime = O(m)),
                        (r.volume = (0, k.A)(l)),
                        r.play(),
                        o(!0));
                }
            }, [r, f, b, m, u, h, l]),
            p = a.useCallback(
                (e) => {
                    (d(e), i?.({ startMs: e.startPositionMs, endMs: e.endPositionMs }));
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
            className: C()(en.kL, { [en.J_]: g, [en.r9]: !g || s }, t),
            children: [
                (0, n.jsxs)("div", {
                    className: en.k0,
                    children: [
                        (0, n.jsx)(N.D, {
                            className: en.Rr,
                            onClick: g ? j : void 0,
                            children: u
                                ? (0, n.jsx)(S.StopIcon, { size: "xs", color: "currentColor", className: en.CJ })
                                : (0, n.jsx)(w.PlayIcon, { size: "xs", color: "currentColor", className: en.CJ }),
                        }),
                        (0, n.jsx)("div", {
                            className: en.aq,
                            children: (0, n.jsx)(M.E, {
                                className: en.__invalid_duration,
                                variant: "body-xs/normal",
                                color: v ? "text-feedback-warning" : "text-feedback-positive",
                                children: `${O(x).toFixed(2)}s`,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(et, {
                    playing: u,
                    onPlaybackChange: y,
                    onPausePlayback: b,
                    onChangePosition: p,
                    disabled: s,
                }),
            ],
        });
    });
var ei = l(102597),
    er = l(353672);
let eu = a.memo(function (e) {
    let { sound: t, volume: l, disabled: s } = e,
        [i, r] = a.useState(!1),
        u = a.useRef(null),
        { file: o, audio: c, loadAudioFromFile: d } = G(),
        m = a.useMemo(() => (0, ei.A)(t.soundId), [t]);
    return (
        a.useEffect(() => {
            null == u.current &&
                (u.current = (async function (e, t) {
                    let l = await fetch(e);
                    return new File([await l.blob()], t, { type: "audio/mp3" });
                })(m, t.name).then(d));
        }, [m, d, t.name]),
        (0, n.jsxs)("div", {
            className: er.i1,
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
                    className: er.Rr,
                    "aria-label": i ? D.intl.string(D.t.hHBkuG) : D.intl.string(D.t.RscU7I),
                    children: i
                        ? (0, n.jsx)(S.StopIcon, { size: "xs", color: "currentColor", className: er.uZ })
                        : (0, n.jsx)(w.PlayIcon, { size: "xs", color: "currentColor", className: er.uZ }),
                }),
                (0, n.jsx)("div", {
                    className: er.FU,
                    children: (0, n.jsx)(K, { className: er.ou, file: o, audio: c }),
                }),
            ],
        })
    );
});
var eo = l(735529);
let ec = a.memo(function (e) {
    let { sound: t, volume: l, disabled: a = !1, onChange: s } = e,
        { file: i } = G();
    return (0, n.jsx)(d.D, {
        label: D.intl.string(D.t.CCRKNz),
        children: (0, n.jsxs)("div", {
            className: eo.UV,
            children: [
                null != t && (0, n.jsx)(eu, { sound: t, volume: l, disabled: a }),
                null == t && null != i && (0, n.jsx)(es, { className: eo.lF, volume: l, disabled: a, onChange: s }),
            ],
        }),
    });
});
var ed = l(903259),
    em = l(855986),
    ef = l(444550),
    eh = l(983851),
    eg = l(682163),
    ex = l(931991),
    ev = l(71393),
    eb = l(576705),
    ej = l(711014),
    ep = l(287809),
    ey = l(473145),
    eC = l(811091),
    eN = l(209932),
    eS = l(652215),
    ew = l(19438);
function eM(e) {
    let { availableSlots: t, className: l } = e;
    return (0, n.jsxs)(M.E, {
        className: C()(ew._E, l),
        variant: "body-sm/medium",
        color: "text-strong",
        children: [
            (0, n.jsx)(eh.VoiceNormalIcon, { size: "md", color: "currentColor", className: ew.Xk }),
            D.intl.format(D.t["8Dyg1C"], { slots: t }),
        ],
    });
}
function eE(e) {
    let t,
        { label: l, value: s, className: i, onChange: r } = e,
        u = (0, em.cf)([ej.Ay, eb.A, ep.default, ev.A], () => {
            let e = {};
            for (let t of ej.Ay.getFlattenedGuildIds()) {
                let l = ev.A.getGuild(t);
                null != l && (0, ex.ie)(l, eb.A, ep.default).canCreateExpressions && (e[l.id] = l);
            }
            return e;
        }),
        o = (0, em.cf)(
            [eN.A],
            () => {
                let e = {};
                for (let [t, l] of eC.default.entries(u)) {
                    let n = (0, ey.tO)(l, eN.A.getSoundsForGuild(t) ?? el.pD, l.premiumTier);
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
                    : (0, n.jsx)(eg.Ay, {
                          className: C()(ew.cl, { [ew.QJ]: e.disabled }),
                          guild: u[e.value],
                          size: eg.Ay.Sizes.SMOL,
                          active: !0,
                      }),
            [u],
        ),
        m = a.useCallback(
            (e) => {
                let t = e?.value;
                return null == t || "" === t
                    ? null
                    : (0, n.jsx)(eM, { className: C()({ [ew.QJ]: e?.disabled }), availableSlots: o[t] });
            },
            [o],
        ),
        f = a.useCallback((e) => (0, n.jsx)("div", { className: C()({ [ew.QJ]: e.disabled }), children: e.label }), []),
        h = a.useCallback(
            (e) => {
                o[e] <= 0 || r(e);
            },
            [o, r],
        ),
        g = null == (t = o[s ?? ""]) || t > 0 ? s : void 0;
    return (0, n.jsx)(ef.p, {
        label: l,
        className: i,
        onChange: h,
        value: g,
        multi: !1,
        options: c,
        renderOptionPrefix: d,
        renderOptionSuffix: m,
        renderOptionLabel: f,
        placeholder: 0 === c.length ? D.intl.string(D.t.O3i2gV) : D.intl.string(D.t.CunCMN),
        "data-migration-pending": !0,
    });
}
let ek = [{ name: "audio", extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"] }];
function eA(e) {
    let { guildId: t, sourceFile: l, existingSound: s, onClose: y, transitionState: C, showGuildPicker: N = !1 } = e,
        [S, w] = a.useState(l?.name ?? s?.name ?? ""),
        [M, E] = a.useState(s?.volume ?? 1),
        [k, A] = a.useState(M),
        [T, I] = a.useState(M);
    M !== T && (I(M), A(M));
    let [F, P] = a.useState(s?.emojiId),
        [O, R] = a.useState(s?.emojiName),
        { file: L, loadAudioFromFile: _, maxVolume: J, setMaxVolume: U } = G(),
        [V, z] = a.useState(!1),
        [B, H] = a.useState(null),
        [Y, q] = a.useState(null),
        [Q, W] = a.useState("ready"),
        [X, $] = a.useState(t);
    function K(e) {
        if (e instanceof g.A) H(e);
        else if (e instanceof Error) {
            let t = { status: 500, body: { message: e.message } };
            H(new g.A(t));
        } else H(new g.A(e));
    }
    a.useEffect(() => {
        l?.file != null &&
            (async function (e) {
                try {
                    (await _(e), W("ready"), H(null));
                } catch (e) {
                    K(e);
                }
            })(l.file);
    }, [l?.file, _]);
    let Z = (function (e) {
            switch (e) {
                case "encoding":
                    return D.intl.string(D.t["4IMMdB"]);
                case "encoding-failed":
                    return D.intl.string(D.t.Ka29xq);
                case "uploading":
                    return D.intl.string(D.t.ndr58Q);
            }
            return null;
        })(Q),
        ee = "uploading" === Q || "encoding" === Q,
        et = null != s,
        el =
            S.length >= 2 &&
            (et || null != L) &&
            null != X &&
            (function (e) {
                if (null == e) return !0;
                let t = (e.endMs - e.startMs) / 1e3;
                return t > 0 && t <= 5;
            })(Y),
        en = a.useCallback(async (e, t) => {
            W("encoding");
            try {
                let l = await (0, ed.Yo)(e, t);
                return (W("ready"), l);
            } catch (e) {
                throw (W("encoding-failed"), e);
            }
        }, []),
        ea = a.useCallback(async () => {
            if (null == L) return;
            i()(null != X, "Cannot submit soundboard sound with no guildId");
            let e = L;
            if (null != Y) {
                let t = await en(L, Y);
                if (null == t) return;
                e = t;
            }
            let t = (0, ed.YK)(e);
            W("uploading");
            try {
                (await (0, ed.JX)({ readPromise: t, guildId: X, name: S, volume: M, emojiId: F, emojiName: O }),
                    W("ready"));
            } catch (e) {
                throw new g.A(e);
            }
        }, [L, X, S, en, Y, M, F, O]),
        es = a.useCallback(async () => {
            (i()(null != X, "Cannot submit soundboard sound with no guildId"), z(!0), H(null));
            try {
                (et
                    ? await (0, p.xV)({
                          guildId: X,
                          soundId: s.soundId,
                          name: S,
                          volume: M,
                          emojiId: F ?? null,
                          emojiName: O ?? null,
                      })
                    : (await ea(), (0, u.P0)({ text: D.intl.string(D.t.T7dhBL), variant: "success" })),
                    y());
            } catch (e) {
                K(e);
            } finally {
                (W("ready"), z(!1), E(1), U(1));
            }
        }, [et, y, X, s, S, M, F, O, ea, U]);
    ((0, x.Ay)(() => {
        (_(null), j.default.track(eS.HAw.OPEN_MODAL, { type: "Soundboard Upload Sound", guild_id: X }));
    }),
        a.useEffect(() => {
            E(Math.min(M, J));
        }, [M, E, J]));
    let ei = (0, n.jsx)(v.A, {
            guildId: X,
            emojiId: F,
            emojiName: O,
            setEmojiId: P,
            setEmojiName: R,
            error: B?.getFirstFieldErrorMessage("emoji"),
            isRequiredField: !1,
        }),
        er = a.useMemo(
            () => [
                { variant: "secondary", text: D.intl.string(D.t.Khpixd), onClick: y, disabled: V },
                {
                    text: et ? D.intl.string(D.t.bZY171) : D.intl.string(D.t.RGJbYB),
                    onClick: es,
                    variant: "primary",
                    disabled: !el,
                    loading: V,
                },
            ],
            [es, el, V, et, y],
        );
    return (0, n.jsx)(r.a, {
        onClose: y,
        transitionState: C,
        title: et ? D.intl.string(D.t.HmsZGS) : D.intl.string(D.t["ioD/9I"]),
        actions: er,
        children: (0, n.jsxs)(o.n, {
            children: [
                null != B &&
                    !B.hasFieldErrors() &&
                    (0, n.jsx)(c.w, { type: "critical", message: B.message, role: "alert" }),
                N ? (0, n.jsx)(eE, { label: D.intl.string(D.t.UYt7iQ), value: X, onChange: $ }) : null,
                (et || null != L) && (0, n.jsx)(ec, { sound: s, volume: M, disabled: ee, onChange: q }),
                et || null != l
                    ? null
                    : (0, n.jsx)(d.D, {
                          required: !0,
                          errorMessage: B?.getFirstFieldErrorMessage("sound"),
                          label: D.intl.string(D.t.sSHaG7),
                          children: (0, n.jsx)(b.A, {
                              filename: L?.name ?? "",
                              buttonText: D.intl.string(D.t.zpi3XG),
                              placeholder: D.intl.string(D.t["x+YUL9"]),
                              onFileSelect: async function (e) {
                                  try {
                                      (await _(e ?? null), W("ready"), H(null));
                                  } catch (e) {
                                      K(e);
                                  }
                              },
                              filters: ek,
                          }),
                      }),
                (0, n.jsxs)(m.M, {
                    children: [
                        (0, n.jsx)(f.k, {
                            required: !0,
                            label: D.intl.string(D.t.NpJGaM),
                            placeholder: D.intl.string(D.t.NpJGaM),
                            error: B?.getFirstFieldErrorMessage("name"),
                            value: S,
                            onChange: w,
                            maxLength: 32,
                        }),
                        ei,
                    ],
                }),
                (0, n.jsx)(h.A, {
                    label: D.intl.string(D.t["3CJlb1"]),
                    errorMessage: B?.getFirstFieldErrorMessage("volume"),
                    helperText: null != Z ? Z : void 0,
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
