t.d(l, { default: () => eO });
var n = t(627968),
    a = t(64700),
    s = t(284009),
    i = t.n(s),
    r = t(189213),
    u = t(270003),
    o = t(683071),
    d = t(452027),
    c = t(532446),
    m = t(691540),
    f = t(857250),
    h = t(97483),
    g = t(292666),
    x = t(106236),
    v = t(181658),
    j = t(964486),
    b = t(776568),
    p = t(643374),
    C = t(174459),
    w = t(796774),
    y = t(503698),
    N = t.n(y),
    S = t(939249),
    M = t(29080),
    E = t(782134),
    k = t(834730),
    A = t(927813),
    T = t(904054),
    F = t(942381),
    I = t(265690),
    D = t(121894);
t(323874), t(14289), t(35956);
var O = t(335416),
    R = t(375708);
let P = (e, l, t) => (-1 === e ? 0 : e - (l * e) / t);
function _(e) {
    return e / 1e3;
}
let L = (e, l, t) => (-1 === e ? t : e + (l * (t - e)) / t),
    J = (e, l, t, n) => (l >= 0 && t > 0 ? ((e - (l - (t * l) / n)) * 100) / t : (100 * e) / n).toFixed(4);
async function U(e) {
    if (!(e.type.startsWith("audio") || e.type.startsWith("video")) || !O.VM.has(e.type))
        throw Error(R.intl.formatToPlainString(R.t["2y3xGU"], { fileType: e.type }));
    let l = new Audio(URL.createObjectURL(e));
    return (
        await new Promise((e) => {
            let t = () => {
                e(), l.removeEventListener("canplaythrough", t);
            };
            l.addEventListener("canplaythrough", t), l.load();
        }),
        l
    );
}
async function G(e, l) {
    let t = await fetch(e);
    return new File([await t.blob()], l, { type: "audio/mp3" });
}
let V = (0, I.h)((e) => ({
    audio: null,
    file: null,
    loading: !1,
    loadAudioFromFile: async (l) => {
        if (((0, D.r)(() => e({ file: l, audio: null, loading: null != l })), null == l)) return;
        let t = await U(l);
        null != t && (0, D.r)(() => e({ audio: t, loading: !1 }));
    },
    maxVolume: 1,
    setMaxVolume: (l) => {
        (0, D.r)(() => e({ maxVolume: l }));
    },
}));
function z() {
    return V(
        (e) => ({
            audio: e.audio,
            file: e.file,
            loading: e.loading,
            loadAudioFromFile: e.loadAudioFromFile,
            maxVolume: e.maxVolume,
            setMaxVolume: e.setMaxVolume,
        }),
        F.x,
    );
}
var B = t(147925),
    H = t(735438),
    q = t(661531),
    W = t(602853),
    Y = t(289873),
    Q = t(736653),
    X = t(835245),
    K = t(602674);
let Z = new Worker(new URL("/assets/" + t.u("58777"), t.b)),
    $ = (0, K.v)();
async function ee(e) {
    if (null == $) throw Error("Failed to create audio context");
    let l = await e.arrayBuffer();
    return (await $.decodeAudioData(l)).getChannelData(0);
}
let el = { ...O.Jh };
var et = t(455141);
let en = a.memo(function (e) {
        let { file: l, audio: t, className: s, waveformSettings: i } = e,
            [r, u] = a.useState({ width: 0, height: 0 }),
            o = a.useRef(null),
            d = a.useMemo(() => {
                let e = t?.duration ?? 1;
                return { fineTuning: -1, fineTuningResolution: e / O.Jh.fineTuningScale, duration: e, ...(i ?? {}) };
            }, [t, i]),
            c = (function (e) {
                let [l, t] = a.useState(null),
                    [n, s] = a.useState(null);
                return (
                    a.useEffect(() => {
                        if (null == e) return;
                        let l = (0, O.Ux)(e);
                        l !== n && (s(l), t(null), ee(e).then(t));
                    }, [n, e]),
                    l
                );
            })(l),
            m = (function (e, l, t) {
                let [n, s] = a.useState(null),
                    [i, r] = a.useState(null),
                    [u, o] = a.useState(1),
                    { setMaxVolume: d } = z(),
                    c = a.useCallback(
                        (e, l) => {
                            var n;
                            r(null),
                                ((n = l.offsetWidth),
                                new Promise((l) => {
                                    let a = (0, X.A)(),
                                        s = (e) => {
                                            let {
                                                data: { waveform: t, id: n, normalizedVolumeMultipler: i },
                                            } = e;
                                            a === n && (l(t), o(i)), Z?.removeEventListener("message", s);
                                        };
                                    Z?.addEventListener("message", s),
                                        Z?.postMessage({ id: a, options: t, config: el, width: n, rawBufferData: e });
                                })).then(r);
                        },
                        [t],
                    );
                return (
                    a.useEffect(() => {
                        if (null == e || null == l) return;
                        let a = (0, O.HL)(e, t);
                        n !== a && (s(a), c(e, l));
                    }, [e, c, l, t, n]),
                    a.useEffect(() => {
                        d(u);
                    }, [u, d]),
                    i
                );
            })(c, o.current, d),
            f = (0, Q.Ay)(),
            h = (0, W.r)(q.A.colors.ICON_STRONG).hex(),
            g = null == c || null == m,
            x = (0 === r.width || 0 === r.height || g) && null != l,
            v = a.useCallback(() => {
                null != o.current && u({ width: o.current.offsetWidth, height: o.current.offsetHeight });
            }, []);
        return (
            a.useEffect(() => {
                if (null != o.current) {
                    let e = new ResizeObserver((0, H.debounce)(v, 50));
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
                if (0 !== r.width && 0 !== r.height && null != m && m.length > 0) {
                    let e = t / m.length,
                        a = -(e * (O.Jh.waveformBarWidth - 1));
                    l.clearRect(0, 0, t, n), (l.fillStyle = h);
                    for (let t = 0; t < m.length; t++) {
                        let s = m[t] * n,
                            i = t * e + a,
                            r = n / 2 - s / 2;
                        l.fillRect(i, r, e - a, s);
                    }
                }
            }, [h, r, f, m]),
            (0, n.jsxs)("div", {
                className: N()(et.kL, s),
                children: [
                    (0, n.jsx)("canvas", { className: et.s4, ref: o, width: 4 * r.width, height: 4 * r.height }),
                    x &&
                        (0, n.jsx)("div", {
                            className: et.Lq,
                            children: (0, n.jsx)(Y.y, { type: Y.t.SPINNING_CIRCLE }),
                        }),
                ],
            })
        );
    }),
    ea = a.memo(function (e) {
        let { fineTuning: l, fineTuningResolution: t, duration: a } = e,
            { file: s, audio: i } = z();
        return (0, n.jsx)(en, {
            file: s,
            audio: i,
            waveformSettings: { fineTuning: l, fineTuningResolution: t, duration: a },
        });
    });
var es = t(346973);
let ei = a.memo(function (e) {
    let { playing: l, onPausePlayback: t, onPlaybackChange: s, onChangePosition: i, disabled: r = !1 } = e,
        u = { ...O.Jh },
        { audio: o } = z(),
        d = null != o,
        c = a.useRef(null),
        m = a.useRef(null),
        f = a.useRef(null),
        [h, g] = a.useState(0),
        [x, v] = a.useState(0),
        [j, b] = a.useState(0),
        [p, C] = a.useState(!1),
        [w, y] = a.useState(!1),
        [S, M] = a.useState(!1),
        [E, k] = a.useState(0),
        [T, F] = a.useState(-1),
        I = a.useMemo(() => E / u.fineTuningScale, [u.fineTuningScale, E]);
    a.useEffect(() => {
        if (null == o) return;
        let e = o.duration * A.A.Millis.SECOND;
        g(0), v(0), b(e), k(e);
    }, [o]);
    let D = a.useCallback(
            (e, l) => {
                if ((t(), 0 === e.button))
                    switch (l) {
                        case 0:
                            C(!0);
                            break;
                        case 1:
                            y(!0);
                            break;
                        case 2:
                            M(!0);
                    }
            },
            [t],
        ),
        R = a.useCallback((e) => {
            switch (e) {
                case 0:
                    C(!1);
                    break;
                case 1:
                    y(!1);
                    break;
                case 2:
                    M(!1);
            }
            F(-1);
        }, []),
        U = a.useCallback(
            (e) => {
                if (null == o || !p) return;
                let l = parseInt(e.target.value),
                    t = l > j ? j : l;
                s(_(t)), g(t), v(t);
            },
            [o, s, j, p],
        ),
        G = a.useCallback(
            (e) => {
                if (null == o || !w) return;
                let l = parseInt(e.target.value);
                l < h ? (s(_(h)), v(h)) : l > j ? (s(_(j)), v(j)) : (s(_(l)), v(l));
            },
            [o, s, j, w, h],
        ),
        V = a.useCallback(
            (e) => {
                if (null == o || !S) return;
                let l = parseInt(e.target.value),
                    t = l > h ? l : h;
                s(_(h)), v(h), b(t);
            },
            [o, s, S, h],
        );
    return (
        a.useEffect(() => {
            null != i && d && i({ startPositionMs: h, endPositionMs: j, playheadPositionMs: x });
        }, [h, j, i, d, x]),
        a.useEffect(() => {
            let e;
            if (null != o)
                return (
                    l &&
                        (e = setInterval(() => {
                            o.currentTime < _(j)
                                ? o.currentTime >= _(x) && v(o.currentTime * A.A.Millis.SECOND)
                                : (t(_(h)), v(h));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [o, j, t, x, l, h]),
        a.useEffect(() => {
            if (u.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
                p && h == h && -1 === T ? F(h) : S && j == j && -1 === T ? F(j) : w && x == x && -1 === T && F(x);
            }, u.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [u.fineTuningDelay, S, j, T, w, x, p, h]),
        (0, n.jsxs)("div", {
            className: N()(es.IO, { [es.J_]: d }),
            children: [
                (0, n.jsxs)("div", {
                    className: es.Rn,
                    children: [
                        (0, n.jsxs)("div", {
                            className: es.Dn,
                            children: [
                                (0, n.jsx)("input", {
                                    ref: c,
                                    className: N()(es.Os, es.YT),
                                    type: "range",
                                    min: P(T, I, E),
                                    max: L(T, I, E),
                                    value: h,
                                    onChange: U,
                                    onMouseDown: (e) => D(e, 0),
                                    onMouseUp: () => R(0),
                                    disabled: !d || r,
                                }),
                                (0, n.jsx)("input", {
                                    ref: f,
                                    className: N()(es.Os, es.BC),
                                    type: "range",
                                    min: P(T, I, E),
                                    max: L(T, I, E),
                                    value: j,
                                    onChange: V,
                                    onMouseDown: (e) => D(e, 2),
                                    onMouseUp: () => R(2),
                                    disabled: !d || r,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: es.__invalid_handlePlayheadTrack,
                            children: (0, n.jsx)("input", {
                                ref: m,
                                className: N()(es.Os, es.GO),
                                type: "range",
                                min: P(T, I, E),
                                max: L(T, I, E),
                                value: x,
                                onChange: G,
                                onMouseDown: (e) => D(e, 1),
                                onMouseUp: () => R(1),
                                disabled: !d || r,
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: es.wo,
                    children: [
                        (0, n.jsxs)("div", {
                            className: N()(es.Wm, { [es.Em]: p, [es.z6]: S }),
                            style: {
                                left: `${J(h, T, I, E)}%`,
                                right: `${(T >= 0 && I > 0 ? -((j - (T + (I * (E - T)) / E)) * 100) / I : -(100 * j * 1) / E + 100).toFixed(4)}%`,
                            },
                            children: [
                                (0, n.jsx)("div", {
                                    className: N()(es.P, es.RC),
                                    children: (0, n.jsx)("div", {
                                        className: N()(es.Xd, es.__invalid_start),
                                        children: (0, n.jsx)(B.A, {
                                            direction: B.A.Directions.RIGHT,
                                            className: es.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: N()(es.P, es.SE),
                                    children: (0, n.jsx)("div", {
                                        className: N()(es.Xd, es.__invalid_end),
                                        children: (0, n.jsx)(B.A, {
                                            direction: B.A.Directions.LEFT,
                                            className: es.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: es.i0,
                            children: (0, n.jsx)("div", {
                                className: N()(es.lG, { [es.cB]: w || p || S || l }),
                                style: { left: `${J(x, T, I, E)}%` },
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: es.FU,
                    children: (0, n.jsx)(ea, { fineTuning: T, fineTuningResolution: I, duration: E }),
                }),
            ],
        })
    );
});
var er = t(980504),
    eu = t(418230);
let eo = { startPositionMs: 0, endPositionMs: 2 * (10 * A.A.Millis.SECOND), playheadPositionMs: 0 },
    ed = a.memo(function (e) {
        let { className: l, volume: t, disabled: s = !1, onChange: i } = e,
            { audio: r } = z(),
            [u, o] = a.useState(!1),
            [d, c] = a.useState(eo),
            { playheadPositionMs: m, endPositionMs: f, startPositionMs: h } = d,
            g = null != r,
            x = f - h,
            v = x > 5 * A.A.Millis.SECOND;
        a.useEffect(() => {
            if (null != r)
                return (
                    c({ playheadPositionMs: 0, endPositionMs: r.duration * A.A.Millis.SECOND, startPositionMs: 0 }),
                    () => {
                        r.pause(), o(!1);
                    }
                );
        }, [r]);
        let j = a.useCallback(
                (e) => {
                    null != r && (r.pause(), null != e && (r.currentTime = e), o(!1));
                },
                [r],
            ),
            b = a.useCallback(() => {
                if (null != r) {
                    if (u) return void j();
                    m >= f ? (r.currentTime = _(h)) : (r.currentTime = _(m)), (r.volume = (0, T.A)(t)), r.play(), o(!0);
                }
            }, [r, f, j, m, u, h, t]),
            p = a.useCallback(
                (e) => {
                    c(e), i?.({ startMs: e.startPositionMs, endMs: e.endPositionMs });
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
            className: N()(eu.kL, { [eu.J_]: g, [eu.r9]: !g || s }, l),
            children: [
                (0, n.jsxs)("div", {
                    className: eu.k0,
                    children: [
                        (0, n.jsx)(S.D, {
                            className: eu.Rr,
                            onClick: g ? b : void 0,
                            children: u
                                ? (0, n.jsx)(M.w, { size: "xs", color: "currentColor", className: eu.CJ })
                                : (0, n.jsx)(E.u, { size: "xs", color: "currentColor", className: eu.CJ }),
                        }),
                        (0, n.jsx)("div", {
                            className: eu.aq,
                            children: (0, n.jsx)(k.E, {
                                className: eu.__invalid_duration,
                                variant: "text-xs/normal",
                                color: v ? "text-feedback-warning" : "text-feedback-positive",
                                children: `${_(x).toFixed(2)}s`,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(ei, {
                    playing: u,
                    onPlaybackChange: C,
                    onPausePlayback: j,
                    onChangePosition: p,
                    disabled: s,
                }),
            ],
        });
    });
var ec = t(102597),
    em = t(919195);
let ef = a.memo(function (e) {
    let { sound: l, volume: t, disabled: s } = e,
        [i, r] = a.useState(!1),
        u = a.useRef(null),
        { file: o, audio: d, loadAudioFromFile: c } = z(),
        m = a.useMemo(() => (0, ec.A)(l.soundId), [l]);
    return (
        a.useEffect(() => {
            null == u.current && (u.current = G(m, l.name).then(c));
        }, [m, c, l.name]),
        (0, n.jsxs)("div", {
            className: em.i1,
            children: [
                (0, n.jsx)(S.D, {
                    onClick: s
                        ? void 0
                        : function () {
                              null != d &&
                                  (d.paused
                                      ? ((d.volume = (0, T.A)(t)),
                                        (d.currentTime = 0),
                                        d.play(),
                                        r(!0),
                                        d.addEventListener("ended", () => r(!1), { once: !0 }))
                                      : (d.pause(), r(!1)));
                          },
                    className: em.Rr,
                    "aria-label": i ? R.intl.string(R.t.hHBkuG) : R.intl.string(R.t.RscU7I),
                    children: i
                        ? (0, n.jsx)(M.w, { size: "xs", color: "currentColor", className: em.uZ })
                        : (0, n.jsx)(E.u, { size: "xs", color: "currentColor", className: em.uZ }),
                }),
                (0, n.jsx)("div", {
                    className: em.FU,
                    children: (0, n.jsx)(en, { className: em.ou, file: o, audio: d }),
                }),
            ],
        })
    );
});
var eh = t(252642);
let eg = a.memo(function (e) {
    let { sound: l, volume: t, disabled: a = !1, onChange: s } = e,
        { file: i } = z();
    return (0, n.jsx)(d.D, {
        label: R.intl.string(R.t.CCRKNz),
        children: (0, n.jsxs)("div", {
            className: eh.UV,
            children: [
                null != l && (0, n.jsx)(ef, { sound: l, volume: t, disabled: a }),
                null == l && null != i && (0, n.jsx)(ed, { className: eh.lF, volume: t, disabled: a, onChange: s }),
            ],
        }),
    });
});
var ex = t(983069),
    ev = t(17928),
    ej = t(444550),
    eb = t(983851),
    ep = t(548118),
    eC = t(931991),
    ew = t(71393),
    ey = t(576705),
    eN = t(711014),
    eS = t(287809),
    eM = t(473145),
    eE = t(935208),
    ek = t(209932),
    eA = t(652215),
    eT = t(103987);
function eF(e) {
    let { availableSlots: l, className: t } = e;
    return (0, n.jsxs)(k.E, {
        className: N()(eT._E, t),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, n.jsx)(eb.H, { size: "md", color: "currentColor", className: eT.Xk }),
            R.intl.format(R.t["8Dyg1C"], { slots: l }),
        ],
    });
}
function eI(e) {
    let l,
        { label: t, value: s, className: i, onChange: r } = e,
        u = (0, ev.cf)([eN.Ay, ey.A, eS.default, ew.A], () => {
            let e = {};
            for (let l of eN.Ay.getFlattenedGuildIds()) {
                let t = ew.A.getGuild(l);
                null != t && (0, eC.ie)(t, ey.A, eS.default).canCreateExpressions && (e[t.id] = t);
            }
            return e;
        }),
        o = (0, ev.cf)([ek.A], () => {
            let e = {};
            for (let [l, t] of eE.default.entries(u)) {
                let n = (0, eM.tO)(t, ek.A.getSoundsForGuild(l) ?? er.pD, t.premiumTier);
                e[l] = n;
            }
            return e;
        }, [u]);
    a.useEffect(() => {
        (0, w.E7)();
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
                    : (0, n.jsx)(ep.Ay, {
                          className: N()(eT.cl, { [eT.QJ]: e.disabled }),
                          guild: u[e.value],
                          size: ep.Ay.Sizes.SMOL,
                          active: !0,
                      }),
            [u],
        ),
        m = a.useCallback(
            (e) => {
                let l = e?.value;
                return null == l || "" === l
                    ? null
                    : (0, n.jsx)(eF, { className: N()({ [eT.QJ]: e?.disabled }), availableSlots: o[l] });
            },
            [o],
        ),
        f = a.useCallback((e) => (0, n.jsx)("div", { className: N()({ [eT.QJ]: e.disabled }), children: e.label }), []),
        h = a.useCallback(
            (e) => {
                o[e] <= 0 || r(e);
            },
            [o, r],
        ),
        g = null == (l = o[s ?? eA.dJq]) || l > 0 ? s : void 0;
    return (0, n.jsx)(ej.p, {
        label: t,
        className: i,
        onChange: h,
        value: g,
        multi: !1,
        options: d,
        renderOptionPrefix: c,
        renderOptionSuffix: m,
        renderOptionLabel: f,
        placeholder: 0 === d.length ? R.intl.string(R.t.O3i2gV) : R.intl.string(R.t.CunCMN),
        "data-migration-pending": !0,
    });
}
let eD = [{ name: "audio", extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"] }];
function eO(e) {
    let { guildId: l, sourceFile: t, existingSound: s, onClose: y, transitionState: N, showGuildPicker: S = !1 } = e,
        [M, E] = a.useState(t?.name ?? s?.name ?? ""),
        [k, A] = a.useState(s?.volume ?? 1),
        [T, F] = a.useState(s?.emojiId),
        [I, D] = a.useState(s?.emojiName),
        { file: O, loadAudioFromFile: P, maxVolume: _, setMaxVolume: L } = z(),
        [J, U] = a.useState(!1),
        [G, V] = a.useState(null),
        [B, H] = a.useState(null),
        [q, W] = a.useState("ready"),
        [Y, Q] = a.useState(l);
    async function X(e) {
        try {
            await P(e ?? null), W("ready"), V(null);
        } catch (e) {
            K(e);
        }
    }
    function K(e) {
        if (e instanceof v.A) V(e);
        else if (e instanceof Error) {
            let l = { status: 500, body: { message: e.message } };
            V(new v.A(l));
        } else V(new v.A(e));
    }
    a.useEffect(() => {
        t?.file != null && e(t.file);
        async function e(e) {
            try {
                await P(e), W("ready"), V(null);
            } catch (e) {
                K(e);
            }
        }
    }, [t?.file, P]);
    let Z = (function (e) {
            switch (e) {
                case "encoding":
                    return R.intl.string(R.t["4IMMdB"]);
                case "encoding-failed":
                    return R.intl.string(R.t.Ka29xq);
                case "uploading":
                    return R.intl.string(R.t.ndr58Q);
            }
            return null;
        })(q),
        $ = "uploading" === q || "encoding" === q,
        ee = null != s,
        el =
            M.length >= 2 &&
            (ee || null != O) &&
            null != Y &&
            (function (e) {
                if (null == e) return !0;
                let l = (e.endMs - e.startMs) / 1e3;
                return l > 0 && l <= 5;
            })(B),
        et = a.useCallback(async (e, l) => {
            W("encoding");
            try {
                let t = await (0, ex.Yo)(e, l);
                return W("ready"), t;
            } catch (e) {
                throw (W("encoding-failed"), e);
            }
        }, []),
        en = a.useCallback(async () => {
            if (null == O) return;
            i()(null != Y, "Cannot submit soundboard sound with no guildId");
            let e = O;
            if (null != B) {
                let l = await et(O, B);
                if (null == l) return;
                e = l;
            }
            let l = (0, ex.YK)(e);
            W("uploading");
            try {
                await (0, ex.JX)({ readPromise: l, guildId: Y, name: M, volume: k, emojiId: T, emojiName: I }),
                    W("ready");
            } catch (e) {
                throw new v.A(e);
            }
        }, [O, Y, M, et, B, k, T, I]),
        ea = a.useCallback(async () => {
            i()(null != Y, "Cannot submit soundboard sound with no guildId"), U(!0), V(null);
            try {
                ee
                    ? await (0, w.xV)({
                          guildId: Y,
                          soundId: s.soundId,
                          name: M,
                          volume: k,
                          emojiId: T ?? null,
                          emojiName: I ?? null,
                      })
                    : (await en(), (0, m.P0)((0, f.o)(R.intl.string(R.t.T7dhBL), h.Ck.SUCCESS))),
                    y();
            } catch (e) {
                K(e);
            } finally {
                W("ready"), U(!1), A(1), L(1);
            }
        }, [ee, y, Y, s, M, k, T, I, en, L]);
    (0, j.Ay)(() => {
        P(null), C.default.track(eA.HAw.OPEN_MODAL, { type: "Soundboard Upload Sound", guild_id: Y });
    }),
        a.useEffect(() => {
            A(Math.min(k, _));
        }, [k, A, _]);
    let es = (0, n.jsx)(b.A, {
            guildId: Y,
            emojiId: T,
            emojiName: I,
            setEmojiId: F,
            setEmojiName: D,
            error: G?.getFirstFieldErrorMessage("emoji"),
            isRequiredField: !1,
        }),
        ei = a.useMemo(
            () => [
                { variant: "secondary", text: R.intl.string(R.t.Khpixd), onClick: y, disabled: J },
                {
                    text: ee ? R.intl.string(R.t.bZY171) : R.intl.string(R.t.RGJbYB),
                    onClick: ea,
                    variant: "primary",
                    disabled: !el,
                    loading: J,
                },
            ],
            [ea, el, J, ee, y],
        );
    return (0, n.jsx)(r.Modal, {
        onClose: y,
        transitionState: N,
        title: ee ? R.intl.string(R.t.HmsZGS) : R.intl.string(R.t["ioD/9I"]),
        actions: ei,
        children: (0, n.jsxs)(u.n, {
            children: [
                null != G && !G.hasFieldErrors() && (0, n.jsx)(o.w, { type: "critical", children: G.message }),
                S ? (0, n.jsx)(eI, { label: R.intl.string(R.t.UYt7iQ), value: Y, onChange: Q }) : null,
                (ee || null != O) && (0, n.jsx)(eg, { sound: s, volume: k, disabled: $, onChange: H }),
                ee || null != t
                    ? null
                    : (0, n.jsx)(d.D, {
                          required: !0,
                          errorMessage: G?.getFirstFieldErrorMessage("sound"),
                          label: R.intl.string(R.t.sSHaG7),
                          children: (0, n.jsx)(p.A, {
                              filename: O?.name ?? "",
                              buttonText: R.intl.string(R.t.zpi3XG),
                              placeholder: R.intl.string(R.t["x+YUL9"]),
                              onFileSelect: X,
                              filters: eD,
                          }),
                      }),
                (0, n.jsxs)(c.M, {
                    children: [
                        (0, n.jsx)(g.k, {
                            required: !0,
                            label: R.intl.string(R.t.NpJGaM),
                            placeholder: R.intl.string(R.t.NpJGaM),
                            error: G?.getFirstFieldErrorMessage("name"),
                            value: M,
                            onChange: E,
                            maxLength: 32,
                        }),
                        es,
                    ],
                }),
                (0, n.jsx)(x.A, {
                    label: R.intl.string(R.t["3CJlb1"]),
                    errorMessage: G?.getFirstFieldErrorMessage("volume"),
                    helperText: null != Z ? Z : void 0,
                    initialValue: k,
                    onValueChange: (e) => A(e),
                    minValue: 0,
                    maxValue: _,
                }),
            ],
        }),
    });
}
