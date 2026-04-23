l.d(t, { default: () => eR });
var n = l(627968),
    i = l(64700),
    a = l(284009),
    s = l.n(a),
    r = l(189213),
    u = l(270003),
    o = l(683071),
    d = l(452027),
    c = l(532446),
    m = l(691540),
    f = l(857250),
    h = l(97483),
    g = l(292666),
    x = l(106236),
    v = l(181658),
    j = l(964486),
    p = l(776568),
    C = l(643374),
    N = l(954571),
    b = l(796774),
    y = l(503698),
    w = l.n(y),
    A = l(939249),
    E = l(29080),
    S = l(782134),
    M = l(834730),
    k = l(927813),
    T = l(904054),
    I = l(942381),
    D = l(265690),
    F = l(121894);
l(323874), l(14289), l(35956);
var R = l(335416),
    O = l(985018);
let P = (e, t, l) => (-1 === e ? 0 : e - (t * e) / l);
function _(e) {
    return e / 1e3;
}
let L = (e, t, l) => (-1 === e ? l : e + (t * (l - e)) / l),
    J = (e, t, l, n) => (t >= 0 && l > 0 ? ((e - (t - (l * t) / n)) * 100) / l : (100 * e) / n).toFixed(4);
async function U(e) {
    if (!(e.type.startsWith("audio") || e.type.startsWith("video")) || !R.VM.has(e.type))
        throw Error(O.intl.formatToPlainString(O.t["2y3xGU"], { fileType: e.type }));
    let t = new Audio(URL.createObjectURL(e));
    return (
        await new Promise((e) => {
            let l = () => {
                e(), t.removeEventListener("canplaythrough", l);
            };
            t.addEventListener("canplaythrough", l), t.load();
        }),
        t
    );
}
async function G(e, t) {
    let l = await fetch(e);
    return new File([await l.blob()], t, { type: "audio/mp3" });
}
let B = (0, D.h)((e) => ({
    audio: null,
    file: null,
    loading: !1,
    loadAudioFromFile: async (t) => {
        if (((0, F.r)(() => e({ file: t, audio: null, loading: null != t })), null == t)) return;
        let l = await U(t);
        null != l && (0, F.r)(() => e({ audio: l, loading: !1 }));
    },
    maxVolume: 1,
    setMaxVolume: (t) => {
        (0, F.r)(() => e({ maxVolume: t }));
    },
}));
function V() {
    return B(
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
var z = l(147925),
    q = l(735438),
    Y = l(661531),
    H = l(602853),
    Q = l(289873),
    W = l(736653),
    $ = l(132500),
    K = l(602674);
let X = new Worker(new URL("/assets/" + l.u("58777"), l.b)),
    Z = (0, K.v)();
async function ee(e) {
    if (null == Z) throw Error("Failed to create audio context");
    let t = await e.arrayBuffer();
    return (await Z.decodeAudioData(t)).getChannelData(0);
}
let et = { ...R.Jh };
var el = l(455141);
let en = i.memo(function (e) {
        let { file: t, audio: l, className: a, waveformSettings: s } = e,
            [r, u] = i.useState({ width: 0, height: 0 }),
            o = i.useRef(null),
            d = i.useMemo(() => {
                let e = l?.duration ?? 1;
                return { fineTuning: -1, fineTuningResolution: e / R.Jh.fineTuningScale, duration: e, ...(s ?? {}) };
            }, [l, s]),
            c = (function (e) {
                let [t, l] = i.useState(null),
                    [n, a] = i.useState(null);
                return (
                    i.useEffect(() => {
                        if (null == e) return;
                        let t = (0, R.Ux)(e);
                        t !== n && (a(t), l(null), ee(e).then(l));
                    }, [n, e]),
                    t
                );
            })(t),
            m = (function (e, t, l) {
                let [n, a] = i.useState(null),
                    [s, r] = i.useState(null),
                    [u, o] = i.useState(1),
                    { setMaxVolume: d } = V(),
                    c = i.useCallback(
                        (e, t) => {
                            var n;
                            r(null),
                                ((n = t.offsetWidth),
                                new Promise((t) => {
                                    let i = (0, $.A)(),
                                        a = (e) => {
                                            let {
                                                data: { waveform: l, id: n, normalizedVolumeMultipler: s },
                                            } = e;
                                            i === n && (t(l), o(s)), X?.removeEventListener("message", a);
                                        };
                                    X?.addEventListener("message", a),
                                        X?.postMessage({ id: i, options: l, config: et, width: n, rawBufferData: e });
                                })).then(r);
                        },
                        [l],
                    );
                return (
                    i.useEffect(() => {
                        if (null == e || null == t) return;
                        let i = (0, R.HL)(e, l);
                        n !== i && (a(i), c(e, t));
                    }, [e, c, t, l, n]),
                    i.useEffect(() => {
                        d(u);
                    }, [u, d]),
                    s
                );
            })(c, o.current, d),
            f = (0, W.Ay)(),
            h = (0, H.r)(Y.A.colors.ICON_STRONG).hex(),
            g = null == c || null == m,
            x = (0 === r.width || 0 === r.height || g) && null != t,
            v = i.useCallback(() => {
                null != o.current && u({ width: o.current.offsetWidth, height: o.current.offsetHeight });
            }, []);
        return (
            i.useEffect(() => {
                if (null != o.current) {
                    let e = new ResizeObserver((0, q.debounce)(v, 50));
                    return (
                        e.observe(o.current),
                        () => {
                            e.disconnect();
                        }
                    );
                }
            }, [v]),
            i.useEffect(() => {
                if (null == o.current) return;
                let e = o.current,
                    t = e.getContext("2d");
                if (null == t) return;
                let { width: l, height: n } = e;
                if (0 !== r.width && 0 !== r.height && null != m && m.length > 0) {
                    let e = l / m.length,
                        i = -(e * (R.Jh.waveformBarWidth - 1));
                    t.clearRect(0, 0, l, n), (t.fillStyle = h);
                    for (let l = 0; l < m.length; l++) {
                        let a = m[l] * n,
                            s = l * e + i,
                            r = n / 2 - a / 2;
                        t.fillRect(s, r, e - i, a);
                    }
                }
            }, [h, r, f, m]),
            (0, n.jsxs)("div", {
                className: w()(el.kL, a),
                children: [
                    (0, n.jsx)("canvas", { className: el.s4, ref: o, width: 4 * r.width, height: 4 * r.height }),
                    x &&
                        (0, n.jsx)("div", {
                            className: el.Lq,
                            children: (0, n.jsx)(Q.y, { type: Q.t.SPINNING_CIRCLE }),
                        }),
                ],
            })
        );
    }),
    ei = i.memo(function (e) {
        let { fineTuning: t, fineTuningResolution: l, duration: i } = e,
            { file: a, audio: s } = V();
        return (0, n.jsx)(en, {
            file: a,
            audio: s,
            waveformSettings: { fineTuning: t, fineTuningResolution: l, duration: i },
        });
    });
var ea = l(346973);
let es = i.memo(function (e) {
    let { playing: t, onPausePlayback: l, onPlaybackChange: a, onChangePosition: s, disabled: r = !1 } = e,
        u = { ...R.Jh },
        { audio: o } = V(),
        d = null != o,
        c = i.useRef(null),
        m = i.useRef(null),
        f = i.useRef(null),
        [h, g] = i.useState(0),
        [x, v] = i.useState(0),
        [j, p] = i.useState(0),
        [C, N] = i.useState(!1),
        [b, y] = i.useState(!1),
        [A, E] = i.useState(!1),
        [S, M] = i.useState(0),
        [T, I] = i.useState(-1),
        D = i.useMemo(() => S / u.fineTuningScale, [u.fineTuningScale, S]);
    i.useEffect(() => {
        if (null == o) return;
        let e = o.duration * k.A.Millis.SECOND;
        g(0), v(0), p(e), M(e);
    }, [o]);
    let F = i.useCallback(
            (e, t) => {
                if ((l(), 0 === e.button))
                    switch (t) {
                        case 0:
                            N(!0);
                            break;
                        case 1:
                            y(!0);
                            break;
                        case 2:
                            E(!0);
                    }
            },
            [l],
        ),
        O = i.useCallback((e) => {
            switch (e) {
                case 0:
                    N(!1);
                    break;
                case 1:
                    y(!1);
                    break;
                case 2:
                    E(!1);
            }
            I(-1);
        }, []),
        U = i.useCallback(
            (e) => {
                if (null == o || !C) return;
                let t = parseInt(e.target.value),
                    l = t > j ? j : t;
                a(_(l)), g(l), v(l);
            },
            [o, a, j, C],
        ),
        G = i.useCallback(
            (e) => {
                if (null == o || !b) return;
                let t = parseInt(e.target.value);
                t < h ? (a(_(h)), v(h)) : t > j ? (a(_(j)), v(j)) : (a(_(t)), v(t));
            },
            [o, a, j, b, h],
        ),
        B = i.useCallback(
            (e) => {
                if (null == o || !A) return;
                let t = parseInt(e.target.value),
                    l = t > h ? t : h;
                a(_(h)), v(h), p(l);
            },
            [o, a, A, h],
        );
    return (
        i.useEffect(() => {
            null != s && d && s({ startPositionMs: h, endPositionMs: j, playheadPositionMs: x });
        }, [h, j, s, d, x]),
        i.useEffect(() => {
            let e;
            if (null != o)
                return (
                    t &&
                        (e = setInterval(() => {
                            o.currentTime < _(j)
                                ? o.currentTime >= _(x) && v(o.currentTime * k.A.Millis.SECOND)
                                : (l(_(h)), v(h));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [o, j, l, x, t, h]),
        i.useEffect(() => {
            if (u.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
                C && h == h && -1 === T ? I(h) : A && j == j && -1 === T ? I(j) : b && x == x && -1 === T && I(x);
            }, u.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [u.fineTuningDelay, A, j, T, b, x, C, h]),
        (0, n.jsxs)("div", {
            className: w()(ea.IO, { [ea.J_]: d }),
            children: [
                (0, n.jsxs)("div", {
                    className: ea.Rn,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ea.Dn,
                            children: [
                                (0, n.jsx)("input", {
                                    ref: c,
                                    className: w()(ea.Os, ea.YT),
                                    type: "range",
                                    min: P(T, D, S),
                                    max: L(T, D, S),
                                    value: h,
                                    onChange: U,
                                    onMouseDown: (e) => F(e, 0),
                                    onMouseUp: () => O(0),
                                    disabled: !d || r,
                                }),
                                (0, n.jsx)("input", {
                                    ref: f,
                                    className: w()(ea.Os, ea.BC),
                                    type: "range",
                                    min: P(T, D, S),
                                    max: L(T, D, S),
                                    value: j,
                                    onChange: B,
                                    onMouseDown: (e) => F(e, 2),
                                    onMouseUp: () => O(2),
                                    disabled: !d || r,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: ea.__invalid_handlePlayheadTrack,
                            children: (0, n.jsx)("input", {
                                ref: m,
                                className: w()(ea.Os, ea.GO),
                                type: "range",
                                min: P(T, D, S),
                                max: L(T, D, S),
                                value: x,
                                onChange: G,
                                onMouseDown: (e) => F(e, 1),
                                onMouseUp: () => O(1),
                                disabled: !d || r,
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: ea.wo,
                    children: [
                        (0, n.jsxs)("div", {
                            className: w()(ea.Wm, { [ea.Em]: C, [ea.z6]: A }),
                            style: {
                                left: `${J(h, T, D, S)}%`,
                                right: `${(T >= 0 && D > 0 ? -((j - (T + (D * (S - T)) / S)) * 100) / D : -(100 * j * 1) / S + 100).toFixed(4)}%`,
                            },
                            children: [
                                (0, n.jsx)("div", {
                                    className: w()(ea.P, ea.RC),
                                    children: (0, n.jsx)("div", {
                                        className: w()(ea.Xd, ea.__invalid_start),
                                        children: (0, n.jsx)(z.A, {
                                            direction: z.A.Directions.RIGHT,
                                            className: ea.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: w()(ea.P, ea.SE),
                                    children: (0, n.jsx)("div", {
                                        className: w()(ea.Xd, ea.__invalid_end),
                                        children: (0, n.jsx)(z.A, {
                                            direction: z.A.Directions.LEFT,
                                            className: ea.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: ea.i0,
                            children: (0, n.jsx)("div", {
                                className: w()(ea.lG, { [ea.cB]: b || C || A || t }),
                                style: { left: `${J(x, T, D, S)}%` },
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: ea.FU,
                    children: (0, n.jsx)(ei, { fineTuning: T, fineTuningResolution: D, duration: S }),
                }),
            ],
        })
    );
});
var er = l(980504),
    eu = l(418230);
let eo = { startPositionMs: 0, endPositionMs: 2 * (10 * k.A.Millis.SECOND), playheadPositionMs: 0 },
    ed = i.memo(function (e) {
        let { className: t, volume: l, disabled: a = !1, onChange: s } = e,
            { audio: r } = V(),
            [u, o] = i.useState(!1),
            [d, c] = i.useState(eo),
            { playheadPositionMs: m, endPositionMs: f, startPositionMs: h } = d,
            g = null != r,
            x = f - h,
            v = x > 5 * k.A.Millis.SECOND;
        i.useEffect(() => {
            if (null != r)
                return (
                    c({ playheadPositionMs: 0, endPositionMs: r.duration * k.A.Millis.SECOND, startPositionMs: 0 }),
                    () => {
                        r.pause(), o(!1);
                    }
                );
        }, [r]);
        let j = i.useCallback(
                (e) => {
                    null != r && (r.pause(), null != e && (r.currentTime = e), o(!1));
                },
                [r],
            ),
            p = i.useCallback(() => {
                if (null != r) {
                    if (u) return void j();
                    m >= f ? (r.currentTime = _(h)) : (r.currentTime = _(m)), (r.volume = (0, T.A)(l)), r.play(), o(!0);
                }
            }, [r, f, j, m, u, h, l]),
            C = i.useCallback(
                (e) => {
                    c(e), s?.({ startMs: e.startPositionMs, endMs: e.endPositionMs });
                },
                [s],
            ),
            N = i.useCallback(
                (e) => {
                    null != r && (r.currentTime = e);
                },
                [r],
            );
        return (0, n.jsxs)("div", {
            className: w()(eu.kL, { [eu.J_]: g, [eu.r9]: !g || a }, t),
            children: [
                (0, n.jsxs)("div", {
                    className: eu.k0,
                    children: [
                        (0, n.jsx)(A.D, {
                            className: eu.Rr,
                            onClick: g ? p : void 0,
                            children: u
                                ? (0, n.jsx)(E.w, { size: "xs", color: "currentColor", className: eu.CJ })
                                : (0, n.jsx)(S.u, { size: "xs", color: "currentColor", className: eu.CJ }),
                        }),
                        (0, n.jsx)("div", {
                            className: eu.aq,
                            children: (0, n.jsx)(M.E, {
                                className: eu.__invalid_duration,
                                variant: "text-xs/normal",
                                color: v ? "text-feedback-warning" : "text-feedback-positive",
                                children: `${_(x).toFixed(2)}s`,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(es, {
                    playing: u,
                    onPlaybackChange: N,
                    onPausePlayback: j,
                    onChangePosition: C,
                    disabled: a,
                }),
            ],
        });
    });
var ec = l(102597),
    em = l(919195);
let ef = i.memo(function (e) {
    let { sound: t, volume: l, disabled: a } = e,
        [s, r] = i.useState(!1),
        u = i.useRef(null),
        { file: o, audio: d, loadAudioFromFile: c } = V(),
        m = i.useMemo(() => (0, ec.A)(t.soundId), [t]);
    return (
        i.useEffect(() => {
            null == u.current && (u.current = G(m, t.name).then(c));
        }, [m, c, t.name]),
        (0, n.jsxs)("div", {
            className: em.i1,
            children: [
                (0, n.jsx)(A.D, {
                    onClick: a
                        ? void 0
                        : function () {
                              null != d &&
                                  (d.paused
                                      ? ((d.volume = (0, T.A)(l)),
                                        (d.currentTime = 0),
                                        d.play(),
                                        r(!0),
                                        d.addEventListener("ended", () => r(!1), { once: !0 }))
                                      : (d.pause(), r(!1)));
                          },
                    className: em.Rr,
                    "aria-label": s ? O.intl.string(O.t.hHBkuG) : O.intl.string(O.t.RscU7I),
                    children: s
                        ? (0, n.jsx)(E.w, { size: "xs", color: "currentColor", className: em.uZ })
                        : (0, n.jsx)(S.u, { size: "xs", color: "currentColor", className: em.uZ }),
                }),
                (0, n.jsx)("div", {
                    className: em.FU,
                    children: (0, n.jsx)(en, { className: em.ou, file: o, audio: d }),
                }),
            ],
        })
    );
});
var eh = l(252642);
let eg = i.memo(function (e) {
    let { sound: t, volume: l, disabled: i = !1, onChange: a } = e,
        { file: s } = V();
    return (0, n.jsx)(d.D, {
        label: O.intl.string(O.t.CCRKNz),
        children: (0, n.jsxs)("div", {
            className: eh.UV,
            children: [
                null != t && (0, n.jsx)(ef, { sound: t, volume: l, disabled: i }),
                null == t && null != s && (0, n.jsx)(ed, { className: eh.lF, volume: l, disabled: i, onChange: a }),
            ],
        }),
    });
});
var ex = l(983069),
    ev = l(17928),
    ej = l(444550),
    ep = l(983851),
    eC = l(548118),
    eN = l(931991),
    eb = l(71393),
    ey = l(576705),
    ew = l(711014),
    eA = l(287809),
    eE = l(473145),
    eS = l(935208),
    eM = l(209932),
    ek = l(652215),
    eT = l(103987);
function eI(e) {
    let { availableSlots: t, className: l } = e;
    return (0, n.jsxs)(M.E, {
        className: w()(eT._E, l),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, n.jsx)(ep.H, { size: "md", color: "currentColor", className: eT.Xk }),
            O.intl.format(O.t["8Dyg1C"], { slots: t }),
        ],
    });
}
function eD(e) {
    let t,
        { label: l, value: a, className: s, onChange: r } = e,
        u = (0, ev.cf)([ew.Ay, ey.A, eA.default, eb.A], () => {
            let e = {};
            for (let t of ew.Ay.getFlattenedGuildIds()) {
                let l = eb.A.getGuild(t);
                null != l && (0, eN.ie)(l, ey.A, eA.default).canCreateExpressions && (e[l.id] = l);
            }
            return e;
        }),
        o = (0, ev.cf)([eM.A], () => {
            let e = {};
            for (let [t, l] of eS.default.entries(u)) {
                let n = (0, eE.tO)(l, eM.A.getSoundsForGuild(t) ?? er.pD, l.premiumTier);
                e[t] = n;
            }
            return e;
        }, [u]);
    i.useEffect(() => {
        (0, b.E7)();
    }, []);
    let d = i.useMemo(
            () =>
                Object.values(u).map((e) => {
                    let { name: t, id: l } = e;
                    return { label: t, value: l, disabled: o[l] <= 0 };
                }),
            [u, o],
        ),
        c = i.useCallback(
            (e) =>
                null == e || "" === e.value
                    ? null
                    : (0, n.jsx)(eC.Ay, {
                          className: w()(eT.cl, { [eT.QJ]: e.disabled }),
                          guild: u[e.value],
                          size: eC.Ay.Sizes.SMOL,
                          active: !0,
                      }),
            [u],
        ),
        m = i.useCallback(
            (e) => {
                let t = e?.value;
                return null == t || "" === t
                    ? null
                    : (0, n.jsx)(eI, { className: w()({ [eT.QJ]: e?.disabled }), availableSlots: o[t] });
            },
            [o],
        ),
        f = i.useCallback((e) => (0, n.jsx)("div", { className: w()({ [eT.QJ]: e.disabled }), children: e.label }), []),
        h = i.useCallback(
            (e) => {
                o[e] <= 0 || r(e);
            },
            [o, r],
        ),
        g = null == (t = o[a ?? ek.dJq]) || t > 0 ? a : void 0;
    return (0, n.jsx)(ej.p, {
        label: l,
        className: s,
        onChange: h,
        value: g,
        multi: !1,
        options: d,
        renderOptionPrefix: c,
        renderOptionSuffix: m,
        renderOptionLabel: f,
        placeholder: 0 === d.length ? O.intl.string(O.t.O3i2gV) : O.intl.string(O.t.CunCMN),
        "data-migration-pending": !0,
    });
}
let eF = [{ name: "audio", extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"] }];
function eR(e) {
    let { guildId: t, sourceFile: l, existingSound: a, onClose: y, transitionState: w, showGuildPicker: A = !1 } = e,
        [E, S] = i.useState(l?.name ?? a?.name ?? ""),
        [M, k] = i.useState(a?.volume ?? 1),
        [T, I] = i.useState(a?.emojiId),
        [D, F] = i.useState(a?.emojiName),
        { file: R, loadAudioFromFile: P, maxVolume: _, setMaxVolume: L } = V(),
        [J, U] = i.useState(!1),
        [G, B] = i.useState(null),
        [z, q] = i.useState(null),
        [Y, H] = i.useState("ready"),
        [Q, W] = i.useState(t);
    async function $(e) {
        try {
            await P(e ?? null), H("ready"), B(null);
        } catch (e) {
            K(e);
        }
    }
    function K(e) {
        if (e instanceof v.A) B(e);
        else if (e instanceof Error) {
            let t = { status: 500, body: { message: e.message } };
            B(new v.A(t));
        } else B(new v.A(e));
    }
    i.useEffect(() => {
        l?.file != null && e(l.file);
        async function e(e) {
            try {
                await P(e), H("ready"), B(null);
            } catch (e) {
                K(e);
            }
        }
    }, [l?.file, P]);
    let X = (function (e) {
            switch (e) {
                case "encoding":
                    return O.intl.string(O.t["4IMMdB"]);
                case "encoding-failed":
                    return O.intl.string(O.t.Ka29xq);
                case "uploading":
                    return O.intl.string(O.t.ndr58Q);
            }
            return null;
        })(Y),
        Z = "uploading" === Y || "encoding" === Y,
        ee = null != a,
        et =
            E.length >= 2 &&
            (ee || null != R) &&
            null != Q &&
            (function (e) {
                if (null == e) return !0;
                let t = (e.endMs - e.startMs) / 1e3;
                return t > 0 && t <= 5;
            })(z),
        el = i.useCallback(async (e, t) => {
            H("encoding");
            try {
                let l = await (0, ex.Yo)(e, t);
                return H("ready"), l;
            } catch (e) {
                throw (H("encoding-failed"), e);
            }
        }, []),
        en = i.useCallback(async () => {
            if (null == R) return;
            s()(null != Q, "Cannot submit soundboard sound with no guildId");
            let e = R;
            if (null != z) {
                let t = await el(R, z);
                if (null == t) return;
                e = t;
            }
            let t = (0, ex.YK)(e);
            H("uploading");
            try {
                await (0, ex.JX)({ readPromise: t, guildId: Q, name: E, volume: M, emojiId: T, emojiName: D }),
                    H("ready");
            } catch (e) {
                throw new v.A(e);
            }
        }, [R, Q, E, el, z, M, T, D]),
        ei = i.useCallback(async () => {
            s()(null != Q, "Cannot submit soundboard sound with no guildId"), U(!0), B(null);
            try {
                ee
                    ? await (0, b.xV)({ guildId: Q, soundId: a.soundId, name: E, volume: M, emojiId: T, emojiName: D })
                    : (await en(), (0, m.P0)((0, f.o)(O.intl.string(O.t.T7dhBL), h.Ck.SUCCESS))),
                    y();
            } catch (e) {
                K(e);
            } finally {
                H("ready"), U(!1), k(1), L(1);
            }
        }, [ee, y, Q, a, E, M, T, D, en, L]);
    (0, j.Ay)(() => {
        P(null), N.default.track(ek.HAw.OPEN_MODAL, { type: "Soundboard Upload Sound", guild_id: Q });
    }),
        i.useEffect(() => {
            k(Math.min(M, _));
        }, [M, k, _]);
    let ea = (0, n.jsx)(p.A, {
            guildId: Q,
            emojiId: T,
            emojiName: D,
            setEmojiId: I,
            setEmojiName: F,
            error: G?.getFirstFieldErrorMessage("emoji"),
            isRequiredField: !1,
        }),
        es = i.useMemo(
            () => [
                { variant: "secondary", text: O.intl.string(O.t.Khpixd), onClick: y, disabled: J },
                {
                    text: ee ? O.intl.string(O.t.bZY171) : O.intl.string(O.t.RGJbYB),
                    onClick: ei,
                    variant: "primary",
                    disabled: !et,
                    loading: J,
                },
            ],
            [ei, et, J, ee, y],
        );
    return (0, n.jsx)(r.Modal, {
        onClose: y,
        transitionState: w,
        title: ee ? O.intl.string(O.t.HmsZGS) : O.intl.string(O.t["ioD/9I"]),
        actions: es,
        children: (0, n.jsxs)(u.n, {
            children: [
                null != G && !G.hasFieldErrors() && (0, n.jsx)(o.w, { type: "critical", children: G.message }),
                A ? (0, n.jsx)(eD, { label: O.intl.string(O.t.UYt7iQ), value: Q, onChange: W }) : null,
                (ee || null != R) && (0, n.jsx)(eg, { sound: a, volume: M, disabled: Z, onChange: q }),
                ee || null != l
                    ? null
                    : (0, n.jsx)(d.D, {
                          required: !0,
                          errorMessage: G?.getFirstFieldErrorMessage("sound"),
                          label: O.intl.string(O.t.sSHaG7),
                          children: (0, n.jsx)(C.A, {
                              filename: R?.name ?? "",
                              buttonText: O.intl.string(O.t.zpi3XG),
                              placeholder: O.intl.string(O.t["x+YUL9"]),
                              onFileSelect: $,
                              filters: eF,
                          }),
                      }),
                (0, n.jsxs)(c.M, {
                    children: [
                        (0, n.jsx)(g.k, {
                            required: !0,
                            label: O.intl.string(O.t.NpJGaM),
                            placeholder: O.intl.string(O.t.NpJGaM),
                            error: G?.getFirstFieldErrorMessage("name"),
                            value: E,
                            onChange: S,
                            maxLength: 32,
                        }),
                        ea,
                    ],
                }),
                (0, n.jsx)(x.A, {
                    label: O.intl.string(O.t["3CJlb1"]),
                    errorMessage: G?.getFirstFieldErrorMessage("volume"),
                    helperText: null != X ? X : void 0,
                    initialValue: M,
                    onValueChange: (e) => k(e),
                    minValue: 0,
                    maxValue: _,
                }),
            ],
        }),
    });
}
