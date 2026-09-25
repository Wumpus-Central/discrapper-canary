t.d(l, { default: () => eO });
var n = t(477900),
    a = t(582128),
    i = t(284009),
    s = t.n(i),
    r = t(189213),
    u = t(270003),
    o = t(683071),
    d = t(452027),
    c = t(532446),
    f = t(691540),
    m = t(857250),
    h = t(97483),
    g = t(95477),
    x = t(299163),
    v = t(181658),
    b = t(964486),
    j = t(776568),
    p = t(643374),
    C = t(174459),
    w = t(796774),
    y = t(503698),
    N = t.n(y),
    S = t(939249),
    E = t(29080),
    M = t(782134),
    k = t(834730),
    A = t(927813),
    T = t(904054),
    I = t(462180),
    D = t(882035),
    F = t(121894);
(t(323874), t(14289), t(35956));
var O = t(335416),
    P = t(375708);
function R(e, l, t) {
    return -1 === e ? 0 : e - (l * e) / t;
}
function L(e) {
    return e / 1e3;
}
function _(e, l, t) {
    return -1 === e ? t : e + (l * (t - e)) / t;
}
function J(e, l, t, n) {
    return (l >= 0 && t > 0 ? ((e - (l - (t * l) / n)) * 100) / t : (100 * e) / n).toFixed(4);
}
async function U(e) {
    if (!O.VM.has(e.type)) throw Error(P.intl.formatToPlainString(P.t["2y3xGU"], { fileType: e.type }));
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
                (n(), t(Error(P.intl.formatToPlainString(P.t["6w+Dyr"], {}))));
            }
            (l.addEventListener("canplaythrough", a), l.addEventListener("error", i), l.load());
        }),
        l
    );
}
async function G(e, l) {
    let t = await fetch(e);
    return new File([await t.blob()], l, { type: "audio/mp3" });
}
let V = (0, D.h)((e) => ({
    audio: null,
    file: null,
    loading: !1,
    loadAudioFromFile: async (l) => {
        if (((0, F.r)(() => e({ file: l, audio: null, loading: null != l })), null == l)) return;
        let t = await U(l);
        null != t && (0, F.r)(() => e({ audio: t, loading: !1 }));
    },
    maxVolume: 1,
    setMaxVolume: (l) => {
        (0, F.r)(() => e({ maxVolume: l }));
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
        I.x,
    );
}
var B = t(147925),
    H = t(435558),
    q = t(661531),
    Y = t(602853),
    Q = t(289873),
    W = t(736653),
    X = t(132500),
    K = t(602674);
let Z = new Worker(new URL("/assets/" + t.u("658777"), t.b)),
    $ = (0, K.v)();
async function ee(e) {
    if (null == $) throw Error("Failed to create audio context");
    let l = await e.arrayBuffer();
    return (await $.decodeAudioData(l)).getChannelData(0);
}
let el = { ...O.Jh };
var et = t(35854);
let en = a.memo(function (e) {
        let { file: l, audio: t, className: i, waveformSettings: s } = e,
            [r, u] = a.useState({ width: 0, height: 0 }),
            o = a.useRef(null),
            d = a.useMemo(() => {
                let e = t?.duration ?? 1;
                return { fineTuning: -1, fineTuningResolution: e / O.Jh.fineTuningScale, duration: e, ...(s ?? {}) };
            }, [t, s]),
            c = (function (e) {
                let [l, t] = a.useState(null),
                    [n, i] = a.useState(null);
                return (
                    a.useEffect(() => {
                        if (null == e) return;
                        let l = (0, O.Ux)(e);
                        l !== n && (i(l), t(null), ee(e).then(t));
                    }, [n, e]),
                    l
                );
            })(l),
            f = (function (e, l, t) {
                let [n, i] = a.useState(null),
                    [s, r] = a.useState(null),
                    [u, o] = a.useState(1),
                    { setMaxVolume: d } = z(),
                    c = a.useCallback(
                        (e, l) => {
                            var n;
                            (r(null),
                                ((n = l.offsetWidth),
                                new Promise((l) => {
                                    let a = (0, X.A)();
                                    (Z?.addEventListener("message", function e(t) {
                                        let {
                                            data: { waveform: n, id: i, normalizedVolumeMultipler: s },
                                        } = t;
                                        (a === i && (l(n), o(s)), Z?.removeEventListener("message", e));
                                    }),
                                        Z?.postMessage({ id: a, options: t, config: el, width: n, rawBufferData: e }));
                                })).then(r));
                        },
                        [t],
                    );
                return (
                    a.useEffect(() => {
                        if (null == e || null == l) return;
                        let a = (0, O.HL)(e, t);
                        n !== a && (i(a), c(e, l));
                    }, [e, c, l, t, n]),
                    a.useEffect(() => {
                        d(u);
                    }, [u, d]),
                    s
                );
            })(c, o.current, d),
            m = (0, W.Ay)(),
            h = (0, Y.r)(q.A.colors.ICON_STRONG).hex(),
            g = null == c || null == f,
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
                if (0 !== r.width && 0 !== r.height && null != f && f.length > 0) {
                    let e = t / f.length,
                        a = -(e * (O.Jh.waveformBarWidth - 1));
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
                className: N()(et.kL, i),
                children: [
                    (0, n.jsx)("canvas", { className: et.s4, ref: o, width: 4 * r.width, height: 4 * r.height }),
                    x &&
                        (0, n.jsx)("div", {
                            className: et.Lq,
                            children: (0, n.jsx)(Q.y, { type: Q.t.SPINNING_CIRCLE }),
                        }),
                ],
            })
        );
    }),
    ea = a.memo(function (e) {
        let { fineTuning: l, fineTuningResolution: t, duration: a } = e,
            { file: i, audio: s } = z();
        return (0, n.jsx)(en, {
            file: i,
            audio: s,
            waveformSettings: { fineTuning: l, fineTuningResolution: t, duration: a },
        });
    });
var ei = t(518070);
let es = a.memo(function (e) {
    let { playing: l, onPausePlayback: t, onPlaybackChange: i, onChangePosition: s, disabled: r = !1 } = e,
        u = { ...O.Jh },
        { audio: o } = z(),
        d = null != o,
        c = a.useRef(null),
        f = a.useRef(null),
        m = a.useRef(null),
        [h, g] = a.useState(0),
        [x, v] = a.useState(0),
        [b, j] = a.useState(0),
        [p, C] = a.useState(!1),
        [w, y] = a.useState(!1),
        [S, E] = a.useState(!1),
        [M, k] = a.useState(0),
        [T, I] = a.useState(-1),
        D = a.useMemo(() => M / u.fineTuningScale, [u.fineTuningScale, M]);
    a.useEffect(() => {
        if (null == o) return;
        let e = o.duration * A.A.Millis.SECOND;
        (g(0), v(0), j(e), k(e));
    }, [o]);
    let F = a.useCallback(
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
                            E(!0);
                    }
            },
            [t],
        ),
        P = a.useCallback((e) => {
            switch (e) {
                case 0:
                    C(!1);
                    break;
                case 1:
                    y(!1);
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
                (i(L(t)), g(t), v(t));
            },
            [o, i, b, p],
        ),
        G = a.useCallback(
            (e) => {
                if (null == o || !w) return;
                let l = parseInt(e.target.value);
                l < h ? (i(L(h)), v(h)) : l > b ? (i(L(b)), v(b)) : (i(L(l)), v(l));
            },
            [o, i, b, w, h],
        ),
        V = a.useCallback(
            (e) => {
                if (null == o || !S) return;
                let l = parseInt(e.target.value),
                    t = l > h ? l : h;
                (i(L(h)), v(h), j(t));
            },
            [o, i, S, h],
        );
    return (
        a.useEffect(() => {
            null != s && d && s({ startPositionMs: h, endPositionMs: b, playheadPositionMs: x });
        }, [h, b, s, d, x]),
        a.useEffect(() => {
            let e;
            if (null != o)
                return (
                    l &&
                        (e = setInterval(() => {
                            o.currentTime < L(b)
                                ? o.currentTime >= L(x) && v(o.currentTime * A.A.Millis.SECOND)
                                : (t(L(h)), v(h));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [o, b, t, x, l, h]),
        a.useEffect(() => {
            if (u.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
                p && h == h && -1 === T ? I(h) : S && b == b && -1 === T ? I(b) : w && x == x && -1 === T && I(x);
            }, u.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [u.fineTuningDelay, S, b, T, w, x, p, h]),
        (0, n.jsxs)("div", {
            className: N()(ei.IO, { [ei.J_]: d }),
            children: [
                (0, n.jsxs)("div", {
                    className: ei.Rn,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ei.Dn,
                            children: [
                                (0, n.jsx)("input", {
                                    ref: c,
                                    className: N()(ei.Os, ei.YT),
                                    type: "range",
                                    min: R(T, D, M),
                                    max: _(T, D, M),
                                    value: h,
                                    onChange: U,
                                    onMouseDown: (e) => F(e, 0),
                                    onMouseUp: () => P(0),
                                    disabled: !d || r,
                                }),
                                (0, n.jsx)("input", {
                                    ref: m,
                                    className: N()(ei.Os, ei.BC),
                                    type: "range",
                                    min: R(T, D, M),
                                    max: _(T, D, M),
                                    value: b,
                                    onChange: V,
                                    onMouseDown: (e) => F(e, 2),
                                    onMouseUp: () => P(2),
                                    disabled: !d || r,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: ei.__invalid_handlePlayheadTrack,
                            children: (0, n.jsx)("input", {
                                ref: f,
                                className: N()(ei.Os, ei.GO),
                                type: "range",
                                min: R(T, D, M),
                                max: _(T, D, M),
                                value: x,
                                onChange: G,
                                onMouseDown: (e) => F(e, 1),
                                onMouseUp: () => P(1),
                                disabled: !d || r,
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: ei.wo,
                    children: [
                        (0, n.jsxs)("div", {
                            className: N()(ei.Wm, { [ei.Em]: p, [ei.z6]: S }),
                            style: {
                                left: `${J(h, T, D, M)}%`,
                                right: `${(T >= 0 && D > 0 ? -((b - (T + (D * (M - T)) / M)) * 100) / D : -(100 * b * 1) / M + 100).toFixed(4)}%`,
                            },
                            children: [
                                (0, n.jsx)("div", {
                                    className: N()(ei.P, ei.RC),
                                    children: (0, n.jsx)("div", {
                                        className: N()(ei.Xd, ei.__invalid_start),
                                        children: (0, n.jsx)(B.A, {
                                            direction: B.A.Directions.RIGHT,
                                            className: ei.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: N()(ei.P, ei.SE),
                                    children: (0, n.jsx)("div", {
                                        className: N()(ei.Xd, ei.__invalid_end),
                                        children: (0, n.jsx)(B.A, {
                                            direction: B.A.Directions.LEFT,
                                            className: ei.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: ei.i0,
                            children: (0, n.jsx)("div", {
                                className: N()(ei.lG, { [ei.cB]: w || p || S || l }),
                                style: { left: `${J(x, T, D, M)}%` },
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: ei.FU,
                    children: (0, n.jsx)(ea, { fineTuning: T, fineTuningResolution: D, duration: M }),
                }),
            ],
        })
    );
});
var er = t(980504),
    eu = t(933237);
let eo = { startPositionMs: 0, endPositionMs: 2 * (10 * A.A.Millis.SECOND), playheadPositionMs: 0 },
    ed = a.memo(function (e) {
        let { className: l, volume: t, disabled: i = !1, onChange: s } = e,
            { audio: r } = z(),
            [u, o] = a.useState(!1),
            [d, c] = a.useState(eo),
            { playheadPositionMs: f, endPositionMs: m, startPositionMs: h } = d,
            g = null != r,
            x = m - h,
            v = x > 5 * A.A.Millis.SECOND;
        a.useEffect(() => {
            if (null != r)
                return (
                    c({ playheadPositionMs: 0, endPositionMs: r.duration * A.A.Millis.SECOND, startPositionMs: 0 }),
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
                    (f >= m ? (r.currentTime = L(h)) : (r.currentTime = L(f)),
                        (r.volume = (0, T.A)(t)),
                        r.play(),
                        o(!0));
                }
            }, [r, m, b, f, u, h, t]),
            p = a.useCallback(
                (e) => {
                    (c(e), s?.({ startMs: e.startPositionMs, endMs: e.endPositionMs }));
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
            className: N()(eu.kL, { [eu.J_]: g, [eu.r9]: !g || i }, l),
            children: [
                (0, n.jsxs)("div", {
                    className: eu.k0,
                    children: [
                        (0, n.jsx)(S.D, {
                            className: eu.Rr,
                            onClick: g ? j : void 0,
                            children: u
                                ? (0, n.jsx)(E.w, { size: "xs", color: "currentColor", className: eu.CJ })
                                : (0, n.jsx)(M.PlayIcon, { size: "xs", color: "currentColor", className: eu.CJ }),
                        }),
                        (0, n.jsx)("div", {
                            className: eu.aq,
                            children: (0, n.jsx)(k.E, {
                                className: eu.__invalid_duration,
                                variant: "text-xs/normal",
                                color: v ? "text-feedback-warning" : "text-feedback-positive",
                                children: `${L(x).toFixed(2)}s`,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(es, {
                    playing: u,
                    onPlaybackChange: C,
                    onPausePlayback: b,
                    onChangePosition: p,
                    disabled: i,
                }),
            ],
        });
    });
var ec = t(102597),
    ef = t(353672);
let em = a.memo(function (e) {
    let { sound: l, volume: t, disabled: i } = e,
        [s, r] = a.useState(!1),
        u = a.useRef(null),
        { file: o, audio: d, loadAudioFromFile: c } = z(),
        f = a.useMemo(() => (0, ec.A)(l.soundId), [l]);
    return (
        a.useEffect(() => {
            null == u.current && (u.current = G(f, l.name).then(c));
        }, [f, c, l.name]),
        (0, n.jsxs)("div", {
            className: ef.i1,
            children: [
                (0, n.jsx)(S.D, {
                    onClick: i
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
                    className: ef.Rr,
                    "aria-label": s ? P.intl.string(P.t.hHBkuG) : P.intl.string(P.t.RscU7I),
                    children: s
                        ? (0, n.jsx)(E.w, { size: "xs", color: "currentColor", className: ef.uZ })
                        : (0, n.jsx)(M.PlayIcon, { size: "xs", color: "currentColor", className: ef.uZ }),
                }),
                (0, n.jsx)("div", {
                    className: ef.FU,
                    children: (0, n.jsx)(en, { className: ef.ou, file: o, audio: d }),
                }),
            ],
        })
    );
});
var eh = t(735529);
let eg = a.memo(function (e) {
    let { sound: l, volume: t, disabled: a = !1, onChange: i } = e,
        { file: s } = z();
    return (0, n.jsx)(d.D, {
        label: P.intl.string(P.t.CCRKNz),
        children: (0, n.jsxs)("div", {
            className: eh.UV,
            children: [
                null != l && (0, n.jsx)(em, { sound: l, volume: t, disabled: a }),
                null == l && null != s && (0, n.jsx)(ed, { className: eh.lF, volume: t, disabled: a, onChange: i }),
            ],
        }),
    });
});
var ex = t(983069),
    ev = t(17928),
    eb = t(444550),
    ej = t(983851),
    ep = t(548118),
    eC = t(931991),
    ew = t(71393),
    ey = t(576705),
    eN = t(711014),
    eS = t(287809),
    eE = t(473145),
    eM = t(935208),
    ek = t(209932),
    eA = t(652215),
    eT = t(19438);
function eI(e) {
    let { availableSlots: l, className: t } = e;
    return (0, n.jsxs)(k.E, {
        className: N()(eT._E, t),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, n.jsx)(ej.H, { size: "md", color: "currentColor", className: eT.Xk }),
            P.intl.format(P.t["8Dyg1C"], { slots: l }),
        ],
    });
}
function eD(e) {
    let l,
        { label: t, value: i, className: s, onChange: r } = e,
        u = (0, ev.cf)([eN.Ay, ey.A, eS.default, ew.A], () => {
            let e = {};
            for (let l of eN.Ay.getFlattenedGuildIds()) {
                let t = ew.A.getGuild(l);
                null != t && (0, eC.ie)(t, ey.A, eS.default).canCreateExpressions && (e[t.id] = t);
            }
            return e;
        }),
        o = (0, ev.cf)(
            [ek.A],
            () => {
                let e = {};
                for (let [l, t] of eM.default.entries(u)) {
                    let n = (0, eE.tO)(t, ek.A.getSoundsForGuild(l) ?? er.pD, t.premiumTier);
                    e[l] = n;
                }
                return e;
            },
            [u],
        );
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
        f = a.useCallback(
            (e) => {
                let l = e?.value;
                return null == l || "" === l
                    ? null
                    : (0, n.jsx)(eI, { className: N()({ [eT.QJ]: e?.disabled }), availableSlots: o[l] });
            },
            [o],
        ),
        m = a.useCallback((e) => (0, n.jsx)("div", { className: N()({ [eT.QJ]: e.disabled }), children: e.label }), []),
        h = a.useCallback(
            (e) => {
                o[e] <= 0 || r(e);
            },
            [o, r],
        ),
        g = null == (l = o[i ?? eA.dJq]) || l > 0 ? i : void 0;
    return (0, n.jsx)(eb.p, {
        label: t,
        className: s,
        onChange: h,
        value: g,
        multi: !1,
        options: d,
        renderOptionPrefix: c,
        renderOptionSuffix: f,
        renderOptionLabel: m,
        placeholder: 0 === d.length ? P.intl.string(P.t.O3i2gV) : P.intl.string(P.t.CunCMN),
        "data-migration-pending": !0,
    });
}
let eF = [{ name: "audio", extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"] }];
function eO(e) {
    let { guildId: l, sourceFile: t, existingSound: i, onClose: y, transitionState: N, showGuildPicker: S = !1 } = e,
        [E, M] = a.useState(t?.name ?? i?.name ?? ""),
        [k, A] = a.useState(i?.volume ?? 1),
        [T, I] = a.useState(i?.emojiId),
        [D, F] = a.useState(i?.emojiName),
        { file: O, loadAudioFromFile: R, maxVolume: L, setMaxVolume: _ } = z(),
        [J, U] = a.useState(!1),
        [G, V] = a.useState(null),
        [B, H] = a.useState(null),
        [q, Y] = a.useState("ready"),
        [Q, W] = a.useState(l);
    async function X(e) {
        try {
            (await R(e ?? null), Y("ready"), V(null));
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
                (await R(e), Y("ready"), V(null));
            } catch (e) {
                K(e);
            }
        }
    }, [t?.file, R]);
    let Z = (function (e) {
            switch (e) {
                case "encoding":
                    return P.intl.string(P.t["4IMMdB"]);
                case "encoding-failed":
                    return P.intl.string(P.t.Ka29xq);
                case "uploading":
                    return P.intl.string(P.t.ndr58Q);
            }
            return null;
        })(q),
        $ = "uploading" === q || "encoding" === q,
        ee = null != i,
        el =
            E.length >= 2 &&
            (ee || null != O) &&
            null != Q &&
            (function (e) {
                if (null == e) return !0;
                let l = (e.endMs - e.startMs) / 1e3;
                return l > 0 && l <= 5;
            })(B),
        et = a.useCallback(async (e, l) => {
            Y("encoding");
            try {
                let t = await (0, ex.Yo)(e, l);
                return (Y("ready"), t);
            } catch (e) {
                throw (Y("encoding-failed"), e);
            }
        }, []),
        en = a.useCallback(async () => {
            if (null == O) return;
            s()(null != Q, "Cannot submit soundboard sound with no guildId");
            let e = O;
            if (null != B) {
                let l = await et(O, B);
                if (null == l) return;
                e = l;
            }
            let l = (0, ex.YK)(e);
            Y("uploading");
            try {
                (await (0, ex.JX)({ readPromise: l, guildId: Q, name: E, volume: k, emojiId: T, emojiName: D }),
                    Y("ready"));
            } catch (e) {
                throw new v.A(e);
            }
        }, [O, Q, E, et, B, k, T, D]),
        ea = a.useCallback(async () => {
            (s()(null != Q, "Cannot submit soundboard sound with no guildId"), U(!0), V(null));
            try {
                (ee
                    ? await (0, w.xV)({
                          guildId: Q,
                          soundId: i.soundId,
                          name: E,
                          volume: k,
                          emojiId: T ?? null,
                          emojiName: D ?? null,
                      })
                    : (await en(), (0, f.P0)((0, m.o)(P.intl.string(P.t.T7dhBL), h.Ck.SUCCESS))),
                    y());
            } catch (e) {
                K(e);
            } finally {
                (Y("ready"), U(!1), A(1), _(1));
            }
        }, [ee, y, Q, i, E, k, T, D, en, _]);
    ((0, b.Ay)(() => {
        (R(null), C.default.track(eA.HAw.OPEN_MODAL, { type: "Soundboard Upload Sound", guild_id: Q }));
    }),
        a.useEffect(() => {
            A(Math.min(k, L));
        }, [k, A, L]));
    let ei = (0, n.jsx)(j.A, {
            guildId: Q,
            emojiId: T,
            emojiName: D,
            setEmojiId: I,
            setEmojiName: F,
            error: G?.getFirstFieldErrorMessage("emoji"),
            isRequiredField: !1,
        }),
        es = a.useMemo(
            () => [
                { variant: "secondary", text: P.intl.string(P.t.Khpixd), onClick: y, disabled: J },
                {
                    text: ee ? P.intl.string(P.t.bZY171) : P.intl.string(P.t.RGJbYB),
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
        title: ee ? P.intl.string(P.t.HmsZGS) : P.intl.string(P.t["ioD/9I"]),
        actions: es,
        children: (0, n.jsxs)(u.n, {
            children: [
                null != G && !G.hasFieldErrors() && (0, n.jsx)(o.w, { type: "critical", children: G.message }),
                S ? (0, n.jsx)(eD, { label: P.intl.string(P.t.UYt7iQ), value: Q, onChange: W }) : null,
                (ee || null != O) && (0, n.jsx)(eg, { sound: i, volume: k, disabled: $, onChange: H }),
                ee || null != t
                    ? null
                    : (0, n.jsx)(d.D, {
                          required: !0,
                          errorMessage: G?.getFirstFieldErrorMessage("sound"),
                          label: P.intl.string(P.t.sSHaG7),
                          children: (0, n.jsx)(p.A, {
                              filename: O?.name ?? "",
                              buttonText: P.intl.string(P.t.zpi3XG),
                              placeholder: P.intl.string(P.t["x+YUL9"]),
                              onFileSelect: X,
                              filters: eF,
                          }),
                      }),
                (0, n.jsxs)(c.M, {
                    children: [
                        (0, n.jsx)(g.k, {
                            required: !0,
                            label: P.intl.string(P.t.NpJGaM),
                            placeholder: P.intl.string(P.t.NpJGaM),
                            error: G?.getFirstFieldErrorMessage("name"),
                            value: E,
                            onChange: M,
                            maxLength: 32,
                        }),
                        ei,
                    ],
                }),
                (0, n.jsx)(x.A, {
                    label: P.intl.string(P.t["3CJlb1"]),
                    errorMessage: G?.getFirstFieldErrorMessage("volume"),
                    helperText: null != Z ? Z : void 0,
                    initialValue: k,
                    onValueChange: (e) => A(Math.round(100 * e) / 100),
                    minValue: 0,
                    maxValue: L,
                    keyboardStep: 0.05,
                }),
            ],
        }),
    });
}
