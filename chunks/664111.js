n.r(t), n.d(t, { default: () => U }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    u = n(873174),
    s = n(17928),
    o = n(876230),
    c = n(966697),
    d = n(231723),
    m = n(717421),
    f = n(939249),
    p = n(289873),
    h = n(782134),
    x = n(113494),
    E = n(834730),
    v = n(964486),
    g = n(775602),
    b = n(607470),
    y = n(475815),
    S = n(718499),
    C = n(23590),
    N = n(671897),
    A = n(275664),
    R = n(408121),
    w = n(984212),
    P = n(739416),
    T = n(931853),
    D = n(90721),
    L = n(652215),
    M = n(838541),
    j = n(375708),
    k = n(834926);
let I = { tension: 250, friction: 5, clamp: !0 },
    B = { visibility: "hidden" },
    F = l.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: c = "landscape",
                videoUrlOverride: L,
                src: j,
                poster: F,
                initialTimeSec: G = 0,
                onProgressUpdate: U,
                onEnded: O,
                onError: Q,
                maxSeekableTimeSec: K,
                captionTrackUrl: _,
                transcriptText: $,
                renderEndScreen: Y,
                onPlayerStateChange: X,
                onFullscreenChange: z,
                onVolumeChange: W,
                onMutedChange: H,
                initialVolume: V = 0.3,
                initialMuted: Z = !1,
                onLoadStart: J,
                onLoadEnd: q,
                onFirstFrame: ee,
                onBufferingStart: et,
                onBufferingEnd: en,
                onFocusChange: er,
                onVisibilityChange: el,
                onSeek: ea,
                renderOverlay: ei,
                renderPersistentOverlay: eu,
                transcriptClassName: es,
                onHlsInstance: eo,
                onClick: ec,
                preload: ed,
                downloadUrl: em,
                downloadContentType: ef,
                extraButtons: ep,
                hideFullScreenBtn: eh,
                getPlaybackBlockedMessage: ex,
                progressClassName: eE,
                pauseOnLostVisibility: ev = !1,
                persistTimeline: eg = !1,
                persistPlayhead: eb = !0,
                autoFocus: ey = !1,
                autoHideVolumeSlider: eS = !1,
                timelineIndicatorConfig: eC,
                loadingSpinnerPosition: eN = "top-left",
                crossOrigin: eA = "anonymous",
                withVideoHalo: eR = !1,
                objectFit: ew = "contain",
                muxContentMetadata: eP,
                awaitMuxReady: eT = !1,
            } = e,
            eD = L ?? j,
            eL = ex ?? T.u,
            { focused: eM, focusedChanged: ej } = (0, P.A7)(),
            { visible: ek, visibleChanged: eI, targetRef: eB } = (0, P.O7)(),
            [eF, eG] = l.useState(a ? o.Q6.PLAYING : o.Q6.PAUSED),
            [eU, eO] = l.useState(!1),
            [eQ, eK] = l.useState(!1),
            [e_, e$] = l.useState(0),
            [eY, eX] = l.useState(null),
            ez = l.useCallback((e) => {
                eX(null), e$(e);
            }, []),
            [eW, eH] = l.useState(!1),
            eV = l.useRef(null),
            [eZ, eJ] = l.useState(o.h$.LOADING),
            eq = l.useRef(!1),
            e0 = l.useRef(null),
            [e1, e6] = l.useState([]),
            [e2, e4] = l.useState(!1),
            e9 = l.useRef(!1),
            e8 = l.useRef(!1),
            e7 = l.useRef(!1),
            e3 = l.useRef(!1),
            [e5, te] = l.useState(!0),
            tt = l.useRef(!0),
            tn = l.useRef(null),
            tr = l.useRef(null),
            [tl, ta] = l.useState(V),
            [ti, tu] = l.useState(Z),
            [ts, to] = l.useState(!1),
            [tc, td] = l.useState(!1),
            [tm, tf] = l.useState(!1),
            tp = (0, s.bG)([g.A], () => g.A.useReducedMotion),
            th = (0, l.useRef)(null),
            tx = (0, l.useRef)(null),
            tE = (0, l.useRef)(null),
            tv = l.useRef(!0),
            [tg, tb] = l.useState(null),
            ty = l.useCallback(() => th.current?.currentTime ?? null, []);
        (0, D.A)({ videoRef: th, canvasRef: tx, enabled: eR && !tp, canvasWidth: 32, canvasHeight: 18 });
        let tS = l.useCallback(
                (e, t) => {
                    Q?.(e, t);
                },
                [Q],
            ),
            { isHlsActive: tC, hlsRef: tN } = (0, S.Ay)(th, {
                src: eD,
                initialTimeSec: G,
                onError: tS,
                onHlsInstance: eo,
                crossOrigin: eA,
            }),
            { isReady: tA } = (0, C.A)({ videoRef: th, hlsRef: tN, contentMetadata: eP, isHls: tC }),
            tR = eT && !tA && !tC,
            [tw, tP] = l.useState(null),
            [tT, tD] = l.useState(0),
            [tL, tM] = l.useState(!1),
            tj = K ?? th.current?.duration ?? 0,
            [tk, tI] = l.useState(o.oA.MD),
            tB = { [o.oA.MD]: 56, [o.oA.LG]: 64 };
        (0, v.u5)(() => {
            tv.current && (tv.current = !1);
        });
        let tF = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((e3.current = !0), eG(e), X?.(e, t), null != th.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            tb(null), th.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (e9.current = !1), th.current.pause(), (tt.current = !1);
                            break;
                        case o.Q6.ENDED:
                            to(!1);
                    }
            },
            [X],
        );
        l.useEffect(() => {
            if (!ev) return;
            let e = null != n && (n === d.ip.HIDDEN || n === d.ip.EXITING || n === d.ip.EXITED),
                t = null != n && eI && !ek,
                r = ej && !eM;
            if ((e || t || r) && null != th.current && eF === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                tb(n), tF(o.Q6.PAUSED, n);
            }
        }, [ev, n, eM, ej, ek, eI, eF, tF]),
            l.useEffect(() => {
                ej && er?.(eM, eF);
            }, [eM, ej, eF, er]),
            l.useEffect(() => {
                eI && el?.(ek, eF);
            }, [ek, eI, eF, el]);
        let [tG, tU] = l.useState(!1),
            tO = l.useRef(null),
            tQ = l.useRef(0);
        l.useLayoutEffect(() => {
            tQ.current = performance.now();
        }, []);
        let tK = l.useCallback(() => {
                null != tO.current && clearTimeout(tO.current),
                    eF !== o.Q6.PLAYING ||
                        (tO.current = setTimeout(
                            () => {
                                eF === o.Q6.PLAYING && tU(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tQ.current)),
                        ));
            }, [eF]),
            t_ = l.useCallback(() => {
                tU(!1), (tQ.current = performance.now()), tK();
            }, [tK]);
        l.useEffect(() => {
            if (eF !== o.Q6.PLAYING) {
                tU(!1), null != tO.current && clearTimeout(tO.current);
                return;
            }
            return (
                tK(),
                () => {
                    null != tO.current && clearTimeout(tO.current);
                }
            );
        }, [eF, tK]),
            l.useEffect(
                () => () => {
                    null != eV.current && clearTimeout(eV.current);
                },
                [],
            );
        let t$ = !tG && (eQ || eU || eF === o.Q6.ENDED),
            tY = l.useRef(z);
        tY.current = z;
        let tX = l.useCallback(() => {
                let e = (0, y.qf)(th.current?.parentNode, th.current);
                null == e || (0, y._U)(e) || (e.removeEventListener(y.Wb, tX), tf(!1), tY.current?.(!1), tI(o.oA.MD));
            }, []),
            tz = () => {
                null == th.current ||
                    (tH(Math.max((e0.current ?? th.current.currentTime) - 10, 0)),
                    eF === o.Q6.ENDED && tF(o.Q6.PAUSED, o.KB.SEEK));
            },
            tW = () => {
                if (null == th.current) return;
                let e = Math.min((e0.current ?? th.current.currentTime) + 10, tj);
                tH(e), eF !== o.Q6.ENDED && e >= th.current.duration && tF(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = th.current;
            return () => {
                let t = (0, y.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(y.Wb, tX);
            };
        }, [tX]);
        let tH = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == th.current) return;
                    let n = th.current.currentTime;
                    (e0.current = e),
                        eX((e / (th.current.duration ?? 1)) * 100),
                        eH(!0),
                        null != eV.current && clearTimeout(eV.current),
                        (eV.current = setTimeout(() => {
                            eH(!1), (eV.current = null);
                        }, 100)),
                        (eq.current = !0),
                        (th.current.currentTime = e),
                        t && ea?.(n, e);
                },
                [ea],
            ),
            tV = () => {
                if (null != th.current)
                    switch (eF) {
                        case o.Q6.ENDED:
                            tH(0), tF(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            tb(o.KB.USER), tF(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tF(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            tZ = (e) => {
                tP(e);
            },
            tJ = (e) => {
                tP((t) => (t?.id === e.id ? null : t));
            },
            tq = l.useCallback(() => {
                if (null == th.current || 0 === th.current.textTracks.length) return;
                let e = th.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, w.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tZ(n)), (n.onexit = () => tJ(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == tE.current) return;
            let e = tE.current;
            return (
                e.addEventListener("load", tq),
                () => {
                    null != e && e.removeEventListener("load", tq);
                }
            );
        }, [tq]);
        let t0 = (e) => {
                if (null != th.current) {
                    if (eZ === o.h$.BUFFERING) {
                        let e = null != tr.current ? performance.now() - tr.current : null;
                        en?.(e);
                    } else if (eZ === o.h$.LOADING) {
                        let e = null != tn.current ? performance.now() - tn.current : null;
                        q?.(e);
                    }
                    eJ(o.h$.READY), eF === o.Q6.PLAYING && (e9.current || tF(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            t1 = (e) => {
                if ((tH(e), eF === o.Q6.ENDED && !e8.current)) {
                    let t = th.current?.duration;
                    (null == t || Number.isNaN(t) || e < t) && tF(o.Q6.PLAYING, o.KB.USER);
                }
            },
            [{ controlBarAnimSpring: t6 }, t2] = (0, m.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: I,
                onStart: () => {
                    te(!1);
                },
                onRest: () => {
                    te(!0);
                },
            })),
            t4 = (0, l.useRef)(null),
            [{ captionHeightSpring: t9 }, t8] = (0, m.z)(() => ({ from: { captionHeightSpring: 0 }, config: I }));
        l.useEffect(
            () => (
                t8({ captionHeightSpring: tc && null != tw ? (t4.current?.clientHeight ?? 0) : 0, immediate: tp }),
                () => {
                    t9.stop();
                }
            ),
            [tc, t8, tp, tw, t9],
        ),
            l.useEffect(
                () => (
                    t2({ controlBarAnimSpring: t$ || e2 ? 1 : 0, immediate: tp }),
                    () => {
                        t6.stop();
                    }
                ),
                [t$, t2, tp, e2, t6],
            );
        let t7 = eF === o.Q6.ENDED && null != Y,
            t3 = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != th.current && (tH(0), tF(o.Q6.PLAYING, e));
                },
                [tH, tF],
            ),
            t5 = l.useRef(null),
            ne = l.useCallback(
                (e) => {
                    t_(), t5.current?.(e.nativeEvent);
                },
                [t_],
            );
        return (0, r.jsx)(f.D, {
            className: k.W6,
            "data-fullscreen": tm,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eO(!0), tU(!1), (tQ.current = performance.now()), null != tO.current && clearTimeout(tO.current);
            },
            onMouseLeave: () => {
                eO(!1), tU(!1);
            },
            onMouseMove: t_,
            children: (0, r.jsxs)("div", {
                className: i()(k.NS, { [k.DO]: "portrait" === c, [k.r7]: "landscape" === c }),
                tabIndex: -1,
                onKeyDown: ne,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    eR && !tp && (0, r.jsx)("canvas", { ref: tx, className: k.Xm }),
                    t7 && Y?.({ replay: t3 }),
                    (0, r.jsxs)(b.A, {
                        ref: (e) => {
                            (th.current = e),
                                (eB.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: a,
                        playsInline: !0,
                        mediaLayoutType: tm ? M.dG.STATIC : M.dG.RESPONSIVE,
                        className: i()({ [k.R]: t7, [k.IR]: !0, [k.FP]: "cover" === ew && !tm }),
                        controls: !1,
                        poster: F,
                        preload: ed,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != th.current &&
                                (U?.(th.current.currentTime, th.current.duration),
                                eq.current || ez((th.current.currentTime / th.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            eJ(o.h$.READY), O?.(), e8.current || tF(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                        },
                        onLoadedData: (e) => {
                            if (eZ === o.h$.LOADING) {
                                let e = null != tn.current ? performance.now() - tn.current : null;
                                q?.(e), eJ(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == th.current) return;
                            G > 0 && !tC && tH(G, !1), ti ? (th.current.volume = 0) : (th.current.volume = tl);
                            let t = th.current.duration;
                            t > 0 && isFinite(t) && tD(t), tM(!0);
                        },
                        onLoadStart: () => {
                            (tn.current = performance.now()), J?.();
                        },
                        onPlaying: () => {
                            tt.current && (ee?.(performance.now()), (tt.current = !1));
                        },
                        onWaiting: (e) => {
                            (tr.current = performance.now()), et?.(), eJ(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == th.current) return;
                            let t = [];
                            for (let e = 0; e < th.current.buffered.length; e++) {
                                let n = th.current.buffered.start(e),
                                    r = th.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / th.current.duration, size: (r - n) / th.current.duration });
                            }
                            e6(t);
                        },
                        onCanPlay: t0,
                        onCanPlayThrough: t0,
                        onSeeked: () => {
                            (eq.current = !1),
                                (e0.current = null),
                                null != th.current && ez((th.current.currentTime / th.current.duration) * 100);
                        },
                        onAbort: () => tS(o.SB.ABORT),
                        onError: () => tS(o.SB.ERROR),
                        onEmptied: () => tS(o.SB.EMPTIED),
                        onStalled: () => tS(o.SB.STALLED),
                        onClick: (e) => {
                            null != ec ? ec(e) : tV();
                        },
                        crossOrigin: eA ?? void 0,
                        children: [
                            null != _ &&
                                (0, r.jsx)("track", {
                                    ref: tE,
                                    src: _,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !tC &&
                                !tR &&
                                (0, r.jsx)("source", {
                                    onError: () => tS(o.SB.SOURCE_ERROR),
                                    src: eD,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    eZ !== o.h$.READY &&
                        eF === o.Q6.PLAYING &&
                        null != eD &&
                        (0, r.jsx)("span", {
                            className: i()(k.S, { [k.F]: "center" === eN }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(p.y, { type: p.y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(T.A, {
                        message: eL({ hasVideoAsset: null != eD, playerState: eF, pauseReason: tg }),
                        showOverlay: null == eD,
                    }),
                    null != ei &&
                        (0, r.jsx)(u.animated.div, {
                            className: k.MU,
                            style: {
                                opacity: (0, u.to)([t6.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, u.to)([t6.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, u.to)([t6.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: ei(),
                        }),
                    ts &&
                        eF !== o.Q6.ENDED &&
                        null != $ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(f.D, {
                                    onClick: () => {
                                        eF === o.Q6.PAUSED && tF(o.Q6.PLAYING, o.KB.USER), to(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: k.BG }),
                                }),
                                (0, r.jsx)(u.animated.div, {
                                    className: i()(k.xr, es, { [k.MZ]: "portrait" === c }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, u.to)([t6, t9], (e, t) => `${e * tB[tk] + t}px`) },
                                    children: (0, r.jsx)(R.X, {
                                        text: $,
                                        onClose: () => {
                                            to(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(u.animated.div, {
                        className: k.Jp,
                        style: { opacity: (0, u.to)([t6.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(k.yf, {
                                [k.ZH]: e3.current && eF === o.Q6.PLAYING,
                                [k.v7]: e3.current && eF === o.Q6.PAUSED,
                            }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eF === o.Q6.PLAYING
                                    ? (0, r.jsx)(h.u, { className: k.PK })
                                    : (0, r.jsx)(x.E, { className: k.PK }),
                        },
                        eF,
                    ),
                    tc &&
                        null != tw &&
                        !t7 &&
                        (0, r.jsx)(u.animated.div, {
                            className: k.o$,
                            ref: t4,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, u.to)(
                                    [t6.to({ range: [0, 1], output: [-20, -tB[tk]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(E.E, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: k.qh,
                                children: tw.text,
                            }),
                        }),
                    (0, r.jsxs)(u.animated.div, {
                        className: k.r8,
                        style: { height: (0, u.to)([t6.to({ range: [0, 1], output: [0, tB[tk]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(u.animated.div, {
                                style: {
                                    transform: (0, u.to)(
                                        [t6.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: t$ || e2 || eg ? void 0 : B,
                                    children: (0, r.jsx)(A.Ay, {
                                        percent: null != eY ? eY : e_,
                                        animate:
                                            !0 !== tv.current && !eW && eF === o.Q6.PLAYING && tL && eZ === o.h$.READY,
                                        interactionEnabled: e5 && tj > 0,
                                        backgroundColor: t$ || eg ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eF,
                                        preloadedBuffers: t$ ? e1 : void 0,
                                        durationSec: tT > 0 ? tT : +!tL,
                                        isFullyVisible: t$ && e5,
                                        maxSeekableTime: null != K && tj > 0 ? tj : void 0,
                                        progressClassName: eE,
                                        persistPlayhead: eb,
                                        onClick: t1,
                                        onScrubBack: tz,
                                        onScrubForward: tW,
                                        onDragStateChange: (e) => {
                                            if (((e8.current = e), e4(e), e))
                                                (e9.current = eF === o.Q6.PLAYING),
                                                    (e7.current = eF === o.Q6.ENDED),
                                                    e9.current
                                                        ? th.current?.pause()
                                                        : e7.current && tF(o.Q6.PAUSED, o.KB.SEEK);
                                            else {
                                                let e = th.current,
                                                    t =
                                                        null != e &&
                                                        !Number.isNaN(e.duration) &&
                                                        e.currentTime >= e.duration;
                                                e9.current
                                                    ? ((e9.current = !1),
                                                      t ? tF(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE) : e?.play())
                                                    : e7.current
                                                      ? ((e7.current = !1),
                                                        t
                                                            ? tF(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE)
                                                            : tF(o.Q6.PLAYING, o.KB.USER))
                                                      : t && tF(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                                            }
                                        },
                                        indicatorConfig: eC,
                                        onIndicatorSeek: t1,
                                        getCurrentTimeSec: ty,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: k.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, u.to)(
                                        [t6.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 20}px`,
                                    ),
                                    paddingBottom: (0, u.to)(
                                        [t6.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, u.to)([t6.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => eK(!0),
                                onBlur: () => eK(!1),
                                children: (0, r.jsx)(N.A, {
                                    videoRef: th,
                                    playerState: eF,
                                    animSpring: t6,
                                    visible: t$,
                                    seekForwardEnabled: null == K || (th.current?.currentTime ?? 0) + 1 < tj,
                                    hideCaptionBtn: null == _,
                                    hideTranscriptBtn: null == $,
                                    hideFullScreenBtn: eh ?? !1,
                                    hideSkipButtons: "portrait" === c,
                                    size: tk,
                                    downloadUrl: em,
                                    downloadContentType: ef,
                                    extraButtons: ep,
                                    autoFocus: ey,
                                    keyDownHandlerRef: t5,
                                    volume: tl,
                                    muted: ti,
                                    transcriptEnabled: ts,
                                    captionEnabled: tc,
                                    fullScreenEnabled: tm,
                                    handlePlaybackBtnClick: tV,
                                    handleTranscriptBtnClick: () => {
                                        to(!ts);
                                    },
                                    handleCaptionBtnClick: () => {
                                        td(!tc);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !tm,
                                            t = (0, y.qf)(th.current?.parentNode, th.current);
                                        e && null != t
                                            ? ((0, y.tl)(t), t.addEventListener(y.Wb, tX), z?.(!0), tI(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(y.Wb, tX), z?.(!1), (0, y.sP)(t), tI(o.oA.MD)),
                                            tf(e);
                                    },
                                    handleSeekBackBtnClick: tz,
                                    handleSeekForwardBtnClick: tW,
                                    autoHideVolumeSlider: eS,
                                    handleControlBarPendingInteraction: e4,
                                    onVolumeChange: (e) => {
                                        ta(e), W?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        tu(e), H?.(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                    null != eu &&
                        (0, r.jsx)("div", {
                            className: k.MU,
                            children: eu({ playerState: eF, isControlBarExpanded: t$, videoRef: th, isActive: !0 }),
                        }),
                ],
            }),
        });
    });
function G(e) {
    let { poster: t, posterPlaceholder: n, posterPlaceholderVersion: a, orientation: i, objectFit: u = "contain" } = e,
        [s, o] = l.useState(!1),
        d = l.useCallback(() => o(!0), []);
    return null == t
        ? null
        : (0, r.jsx)(c.y, {
              readyState: s ? L.Rv1.READY : L.Rv1.LOADING,
              aspectRatio: "portrait" === i ? 9 / 16 : 16 / 9,
              placeholder: n,
              placeholderVersion: a ?? 1,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              disableSpinner: !0,
              children: (0, r.jsx)("img", { src: t, className: k.zH, style: { objectFit: u }, alt: "", onLoad: d }),
          });
}
let U = l.forwardRef(function (e, t) {
    let { active: n = !0, onClick: a, ...u } = e,
        {
            autoplay: s,
            poster: c,
            orientation: d = "landscape",
            posterPlaceholder: m,
            posterPlaceholderVersion: p,
            renderOverlay: x,
            renderPersistentOverlay: E,
            objectFit: v,
        } = u,
        [g, b] = l.useState(!1),
        y = l.useCallback(
            (e) => {
                null != a ? a(e) : b(!0);
            },
            [a],
        ),
        S = l.useRef(null);
    return n || g
        ? (0, r.jsx)(F, { ...u, onClick: a, autoplay: s || g, ref: t })
        : (0, r.jsx)(f.D, {
              className: i()(k.W6, k.nZ),
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: y,
              "aria-label": j.intl.string(j.t.RscU7I),
              focusProps: { ringTarget: S },
              children: (0, r.jsxs)("div", {
                  className: i()(k.NS, { [k.DO]: "portrait" === d, [k.r7]: "landscape" === d }),
                  children: [
                      (0, r.jsx)(G, {
                          poster: c,
                          posterPlaceholder: m,
                          posterPlaceholderVersion: p,
                          orientation: d,
                          objectFit: v,
                      }),
                      null != x && (0, r.jsx)("div", { className: k.MU, children: x() }),
                      null != E &&
                          (0, r.jsx)("div", {
                              className: k.MU,
                              children: E({ playerState: o.Q6.PAUSED, isControlBarExpanded: !0, isActive: !1 }),
                          }),
                      (0, r.jsx)("div", {
                          className: k.mF,
                          ref: S,
                          children: (0, r.jsx)(h.u, { size: "xs", color: "currentColor", className: k.z_ }),
                      }),
                  ],
              }),
          });
});
