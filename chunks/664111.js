n.r(t), n.d(t, { default: () => K }), n(321073);
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
    p = n(939249),
    f = n(289873),
    h = n(782134),
    x = n(113494),
    v = n(834730),
    E = n(964486),
    b = n(775602),
    g = n(607470),
    y = n(475815),
    C = n(718499),
    S = n(23590),
    R = n(671897),
    N = n(275664),
    A = n(408121),
    w = n(984212),
    P = n(739416),
    L = n(931853),
    T = n(90721),
    D = n(920228),
    j = n(652215),
    k = n(838541),
    M = n(375708),
    I = n(834926);
let B = { tension: 250, friction: 5, clamp: !0 },
    F = { visibility: "hidden" },
    U = l.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: c = "landscape",
                videoUrlOverride: j,
                src: M,
                poster: U,
                initialTimeSec: G = 0,
                onProgressUpdate: K,
                onEnded: O,
                onError: _,
                maxSeekableTimeSec: Q,
                captionTrackUrl: $,
                transcriptText: Y,
                renderEndScreen: z,
                onPlayerStateChange: X,
                onFullscreenChange: V,
                onVolumeChange: H,
                onMutedChange: W,
                initialVolume: Z = 0.3,
                initialMuted: J = !1,
                onLoadStart: q,
                onLoadEnd: ee,
                onFirstFrame: et,
                onBufferingStart: en,
                onBufferingEnd: er,
                onFocusChange: el,
                onVisibilityChange: ea,
                onSeek: ei,
                renderOverlay: eu,
                renderPersistentOverlay: es,
                transcriptClassName: eo,
                onHlsInstance: ec,
                onClick: ed,
                preload: em,
                downloadUrl: ep,
                downloadContentType: ef,
                extraButtons: eh,
                hideFullScreenBtn: ex = !1,
                hideSkipButtons: ev,
                compactTimeDisplay: eE = !1,
                hidePlaybackSpeedBtn: eb = !1,
                getPlaybackBlockedMessage: eg,
                progressClassName: ey,
                pauseOnLostVisibility: eC = !1,
                persistTimeline: eS = !1,
                persistPlayhead: eR = !0,
                autoFocus: eN = !1,
                autoHideVolumeSlider: eA = !1,
                timelineIndicatorConfig: ew,
                loadingSpinnerPosition: eP = "top-left",
                crossOrigin: eL = "anonymous",
                withVideoHalo: eT = !1,
                objectFit: eD = "contain",
                muxContentMetadata: ej,
                awaitMuxReady: ek = !1,
            } = e,
            eM = j ?? M,
            eI = eg ?? L.u,
            { focused: eB, focusedChanged: eF } = (0, P.A7)(),
            { visible: eU, visibleChanged: eG, targetRef: eK } = (0, P.O7)(),
            [eO, e_] = l.useState(a ? o.Q6.PLAYING : o.Q6.PAUSED),
            [eQ, e$] = l.useState(!1),
            [eY, ez] = l.useState(!1),
            [eX, eV] = l.useState(0),
            [eH, eW] = l.useState(null),
            eZ = l.useCallback((e) => {
                eW(null), eV(e);
            }, []),
            [eJ, eq] = l.useState(!1),
            e0 = l.useRef(null),
            [e1, e6] = l.useState(o.h$.LOADING),
            e2 = l.useRef(!1),
            e4 = l.useRef(null),
            [e9, e8] = l.useState([]),
            [e7, e3] = l.useState(!1),
            e5 = l.useRef(!1),
            te = l.useRef(!1),
            tt = l.useRef(!1),
            tn = l.useRef(!1),
            [tr, tl] = l.useState(!0),
            ta = l.useRef(!0),
            ti = l.useRef(null),
            tu = l.useRef(null),
            [ts, to] = l.useState(Z),
            [tc, td] = l.useState(J),
            [tm, tp] = l.useState(!1),
            [tf, th] = l.useState(!1),
            [tx, tv] = l.useState(!1),
            tE = (0, s.bG)([b.A], () => b.A.useReducedMotion),
            tb = (0, l.useRef)(null),
            tg = (0, l.useRef)(null),
            ty = (0, l.useRef)(null),
            tC = l.useRef(!0),
            [tS, tR] = l.useState(null),
            tN = l.useCallback(() => tb.current?.currentTime ?? null, []);
        (0, T.A)({ videoRef: tb, canvasRef: tg, enabled: eT && !tE, canvasWidth: 32, canvasHeight: 18 });
        let tA = l.useCallback(
                (e, t) => {
                    _?.(e, t);
                },
                [_],
            ),
            { isHlsActive: tw, hlsRef: tP } = (0, C.Ay)(tb, {
                src: eM,
                initialTimeSec: G,
                onError: tA,
                onHlsInstance: ec,
                crossOrigin: eL,
            }),
            { isReady: tL } = (0, S.A)({ videoRef: tb, hlsRef: tP, contentMetadata: ej, isHls: tw }),
            tT = ek && !tL && !tw,
            [tD, tj] = l.useState(null),
            [tk, tM] = l.useState(0),
            [tI, tB] = l.useState(!1),
            tF = Q ?? tb.current?.duration ?? 0,
            [tU, tG] = l.useState(o.oA.MD),
            tK = { [o.oA.MD]: 56, [o.oA.LG]: 64 };
        (0, E.u5)(() => {
            tC.current && (tC.current = !1);
        });
        let tO = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tn.current = !0), e_(e), X?.(e, t), null != tb.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            tR(null), tb.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (e5.current = !1), tb.current.pause(), (ta.current = !1);
                            break;
                        case o.Q6.ENDED:
                            tp(!1);
                    }
            },
            [X],
        );
        l.useEffect(() => {
            if (!eC) return;
            let e = null != n && (n === d.ip.HIDDEN || n === d.ip.EXITING || n === d.ip.EXITED),
                t = null != n && eG && !eU,
                r = eF && !eB;
            if ((e || t || r) && null != tb.current && eO === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                tR(n), tO(o.Q6.PAUSED, n);
            }
        }, [eC, n, eB, eF, eU, eG, eO, tO]),
            (0, D.A)({
                videoRef: tb,
                enabled: eC,
                onPipPause: () => {
                    tR(o.KB.PICTURE_IN_PICTURE), tO(o.Q6.PAUSED, o.KB.PICTURE_IN_PICTURE);
                },
                onHiddenPause: () => {
                    tR(o.KB.FOCUS), tO(o.Q6.PAUSED, o.KB.FOCUS);
                },
            }),
            l.useEffect(() => {
                eF && el?.(eB, eO);
            }, [eB, eF, eO, el]),
            l.useEffect(() => {
                eG && ea?.(eU, eO);
            }, [eU, eG, eO, ea]);
        let [t_, tQ] = l.useState(!1),
            t$ = l.useRef(null),
            tY = l.useRef(0);
        l.useLayoutEffect(() => {
            tY.current = performance.now();
        }, []);
        let tz = l.useCallback(() => {
                null != t$.current && clearTimeout(t$.current),
                    eO !== o.Q6.PLAYING ||
                        (t$.current = setTimeout(
                            () => {
                                eO === o.Q6.PLAYING && tQ(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tY.current)),
                        ));
            }, [eO]),
            tX = l.useCallback(() => {
                tQ(!1), (tY.current = performance.now()), tz();
            }, [tz]);
        l.useEffect(() => {
            if (eO !== o.Q6.PLAYING) {
                tQ(!1), null != t$.current && clearTimeout(t$.current);
                return;
            }
            return (
                tz(),
                () => {
                    null != t$.current && clearTimeout(t$.current);
                }
            );
        }, [eO, tz]),
            l.useEffect(
                () => () => {
                    null != e0.current && clearTimeout(e0.current);
                },
                [],
            );
        let tV = !t_ && (eY || eQ || eO === o.Q6.ENDED),
            tH = l.useRef(V);
        tH.current = V;
        let tW = l.useCallback(() => {
                let e = (0, y.qf)(tb.current?.parentNode, tb.current);
                null == e || (0, y._U)(e) || (e.removeEventListener(y.Wb, tW), tv(!1), tH.current?.(!1), tG(o.oA.MD));
            }, []),
            tZ = () => {
                null == tb.current ||
                    (tq(Math.max((e4.current ?? tb.current.currentTime) - 10, 0)),
                    eO === o.Q6.ENDED && tO(o.Q6.PAUSED, o.KB.SEEK));
            },
            tJ = () => {
                if (null == tb.current) return;
                let e = Math.min((e4.current ?? tb.current.currentTime) + 10, tF);
                tq(e), eO !== o.Q6.ENDED && e >= tb.current.duration && tO(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = tb.current;
            return () => {
                let t = (0, y.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(y.Wb, tW);
            };
        }, [tW]);
        let tq = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tb.current) return;
                    let n = tb.current.currentTime;
                    (e4.current = e),
                        eW((e / (tb.current.duration ?? 1)) * 100),
                        eq(!0),
                        null != e0.current && clearTimeout(e0.current),
                        (e0.current = setTimeout(() => {
                            eq(!1), (e0.current = null);
                        }, 100)),
                        (e2.current = !0),
                        (tb.current.currentTime = e),
                        t && ei?.(n, e);
                },
                [ei],
            ),
            t0 = () => {
                if (null != tb.current)
                    switch (eO) {
                        case o.Q6.ENDED:
                            tq(0), tO(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            tR(o.KB.USER), tO(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tO(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            t1 = (e) => {
                tj(e);
            },
            t6 = (e) => {
                tj((t) => (t?.id === e.id ? null : t));
            },
            t2 = l.useCallback(() => {
                if (null == tb.current || 0 === tb.current.textTracks.length) return;
                let e = tb.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, w.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => t1(n)), (n.onexit = () => t6(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == ty.current) return;
            let e = ty.current;
            return (
                e.addEventListener("load", t2),
                () => {
                    null != e && e.removeEventListener("load", t2);
                }
            );
        }, [t2]);
        let t4 = (e) => {
                if (null != tb.current) {
                    if (e1 === o.h$.BUFFERING) {
                        let e = null != tu.current ? performance.now() - tu.current : null;
                        er?.(e);
                    } else if (e1 === o.h$.LOADING) {
                        let e = null != ti.current ? performance.now() - ti.current : null;
                        ee?.(e);
                    }
                    e6(o.h$.READY), eO === o.Q6.PLAYING && (e5.current || tO(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            t9 = (e) => {
                if ((tq(e), eO === o.Q6.ENDED && !te.current)) {
                    let t = tb.current?.duration;
                    (null == t || Number.isNaN(t) || e < t) && tO(o.Q6.PLAYING, o.KB.USER);
                }
            },
            [{ controlBarAnimSpring: t8 }, t7] = (0, m.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: B,
                onStart: () => {
                    tl(!1);
                },
                onRest: () => {
                    tl(!0);
                },
            })),
            t3 = (0, l.useRef)(null),
            [{ captionHeightSpring: t5 }, ne] = (0, m.z)(() => ({ from: { captionHeightSpring: 0 }, config: B }));
        l.useEffect(
            () => (
                ne({ captionHeightSpring: tf && null != tD ? (t3.current?.clientHeight ?? 0) : 0, immediate: tE }),
                () => {
                    t5.stop();
                }
            ),
            [tf, ne, tE, tD, t5],
        ),
            l.useEffect(
                () => (
                    t7({ controlBarAnimSpring: tV || e7 ? 1 : 0, immediate: tE }),
                    () => {
                        t8.stop();
                    }
                ),
                [tV, t7, tE, e7, t8],
            );
        let nt = eO === o.Q6.ENDED && null != z,
            nn = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != tb.current && (tq(0), tO(o.Q6.PLAYING, e));
                },
                [tq, tO],
            ),
            nr = l.useRef(null),
            nl = l.useCallback(
                (e) => {
                    tX(), nr.current?.(e.nativeEvent);
                },
                [tX],
            );
        return (0, r.jsx)(p.D, {
            className: I.W6,
            "data-fullscreen": tx,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                e$(!0), tQ(!1), (tY.current = performance.now()), null != t$.current && clearTimeout(t$.current);
            },
            onMouseLeave: () => {
                e$(!1), tQ(!1);
            },
            onMouseMove: tX,
            children: (0, r.jsxs)("div", {
                className: i()(I.NS, { [I.DO]: "portrait" === c, [I.r7]: "landscape" === c }),
                tabIndex: -1,
                onKeyDown: nl,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    eT && !tE && (0, r.jsx)("canvas", { ref: tg, className: I.Xm }),
                    nt && z?.({ replay: nn }),
                    (0, r.jsxs)(g.A, {
                        ref: (e) => {
                            (tb.current = e),
                                (eK.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: a,
                        playsInline: !0,
                        mediaLayoutType: tx ? k.dG.STATIC : k.dG.RESPONSIVE,
                        className: i()({ [I.R]: nt, [I.IR]: !0, [I.FP]: "cover" === eD && !tx }),
                        controls: !1,
                        poster: U,
                        preload: em,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != tb.current &&
                                (K?.(tb.current.currentTime, tb.current.duration),
                                e2.current || eZ((tb.current.currentTime / tb.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            e6(o.h$.READY), O?.(), te.current || tO(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                        },
                        onLoadedData: (e) => {
                            if (e1 === o.h$.LOADING) {
                                let e = null != ti.current ? performance.now() - ti.current : null;
                                ee?.(e), e6(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tb.current) return;
                            G > 0 && !tw && tq(G, !1), tc ? (tb.current.volume = 0) : (tb.current.volume = ts);
                            let t = tb.current.duration;
                            t > 0 && isFinite(t) && tM(t), tB(!0);
                        },
                        onLoadStart: () => {
                            (ti.current = performance.now()), q?.();
                        },
                        onPlaying: () => {
                            ta.current && (et?.(performance.now()), (ta.current = !1));
                        },
                        onWaiting: (e) => {
                            (tu.current = performance.now()), en?.(), e6(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == tb.current) return;
                            let t = [];
                            for (let e = 0; e < tb.current.buffered.length; e++) {
                                let n = tb.current.buffered.start(e),
                                    r = tb.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / tb.current.duration, size: (r - n) / tb.current.duration });
                            }
                            e8(t);
                        },
                        onCanPlay: t4,
                        onCanPlayThrough: t4,
                        onSeeked: () => {
                            (e2.current = !1),
                                (e4.current = null),
                                null != tb.current && eZ((tb.current.currentTime / tb.current.duration) * 100);
                        },
                        onAbort: () => tA(o.SB.ABORT),
                        onError: () => tA(o.SB.ERROR),
                        onEmptied: () => tA(o.SB.EMPTIED),
                        onStalled: () => tA(o.SB.STALLED),
                        onClick: (e) => {
                            null != ed ? ed(e) : t0();
                        },
                        crossOrigin: eL ?? void 0,
                        children: [
                            null != $ &&
                                (0, r.jsx)("track", {
                                    ref: ty,
                                    src: $,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !tw &&
                                !tT &&
                                (0, r.jsx)("source", {
                                    onError: () => tA(o.SB.SOURCE_ERROR),
                                    src: eM,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    e1 !== o.h$.READY &&
                        eO === o.Q6.PLAYING &&
                        null != eM &&
                        (0, r.jsx)("span", {
                            className: i()(I.S, { [I.F]: "center" === eP }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(f.y, { type: f.y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(L.A, {
                        message: eI({ hasVideoAsset: null != eM, playerState: eO, pauseReason: tS }),
                        showOverlay: null == eM,
                    }),
                    null != eu &&
                        (0, r.jsx)(u.animated.div, {
                            className: I.MU,
                            style: {
                                opacity: (0, u.to)([t8.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, u.to)([t8.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, u.to)([t8.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: eu(),
                        }),
                    tm &&
                        eO !== o.Q6.ENDED &&
                        null != Y &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(p.D, {
                                    onClick: () => {
                                        eO === o.Q6.PAUSED && tO(o.Q6.PLAYING, o.KB.USER), tp(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: I.BG }),
                                }),
                                (0, r.jsx)(u.animated.div, {
                                    className: i()(I.xr, eo, { [I.MZ]: "portrait" === c }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, u.to)([t8, t5], (e, t) => `${e * tK[tU] + t}px`) },
                                    children: (0, r.jsx)(A.X, {
                                        text: Y,
                                        onClose: () => {
                                            tp(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(u.animated.div, {
                        className: I.Jp,
                        style: { opacity: (0, u.to)([t8.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(I.yf, {
                                [I.ZH]: tn.current && eO === o.Q6.PLAYING,
                                [I.v7]: tn.current && eO === o.Q6.PAUSED,
                            }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eO === o.Q6.PLAYING
                                    ? (0, r.jsx)(h.u, { className: I.PK })
                                    : (0, r.jsx)(x.E, { className: I.PK }),
                        },
                        eO,
                    ),
                    tf &&
                        null != tD &&
                        !nt &&
                        (0, r.jsx)(u.animated.div, {
                            className: I.o$,
                            ref: t3,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, u.to)(
                                    [t8.to({ range: [0, 1], output: [-20, -tK[tU]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(v.E, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: I.qh,
                                children: tD.text,
                            }),
                        }),
                    (0, r.jsxs)(u.animated.div, {
                        className: I.r8,
                        style: { height: (0, u.to)([t8.to({ range: [0, 1], output: [0, tK[tU]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(u.animated.div, {
                                style: {
                                    transform: (0, u.to)(
                                        [t8.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: tV || e7 || eS ? void 0 : F,
                                    children: (0, r.jsx)(N.Ay, {
                                        percent: null != eH ? eH : eX,
                                        animate:
                                            !0 !== tC.current && !eJ && eO === o.Q6.PLAYING && tI && e1 === o.h$.READY,
                                        interactionEnabled: tr && tF > 0,
                                        backgroundColor: tV || eS ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eO,
                                        preloadedBuffers: tV ? e9 : void 0,
                                        durationSec: tk > 0 ? tk : +!tI,
                                        isFullyVisible: tV && tr,
                                        maxSeekableTime: null != Q && tF > 0 ? tF : void 0,
                                        progressClassName: ey,
                                        persistPlayhead: eR,
                                        onClick: t9,
                                        onScrubBack: tZ,
                                        onScrubForward: tJ,
                                        onDragStateChange: (e) => {
                                            if (((te.current = e), e3(e), e))
                                                (e5.current = eO === o.Q6.PLAYING),
                                                    (tt.current = eO === o.Q6.ENDED),
                                                    e5.current
                                                        ? tb.current?.pause()
                                                        : tt.current && tO(o.Q6.PAUSED, o.KB.SEEK);
                                            else {
                                                let e = tb.current,
                                                    t =
                                                        null != e &&
                                                        !Number.isNaN(e.duration) &&
                                                        e.currentTime >= e.duration;
                                                e5.current
                                                    ? ((e5.current = !1),
                                                      t ? tO(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE) : e?.play())
                                                    : tt.current
                                                      ? ((tt.current = !1),
                                                        t
                                                            ? tO(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE)
                                                            : tO(o.Q6.PLAYING, o.KB.USER))
                                                      : t && tO(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                                            }
                                        },
                                        indicatorConfig: ew,
                                        onIndicatorSeek: t9,
                                        getCurrentTimeSec: tN,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: I.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, u.to)(
                                        [t8.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 20}px`,
                                    ),
                                    paddingBottom: (0, u.to)(
                                        [t8.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, u.to)([t8.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => ez(!0),
                                onBlur: () => ez(!1),
                                children: (0, r.jsx)(R.A, {
                                    videoRef: tb,
                                    playerState: eO,
                                    animSpring: t8,
                                    visible: tV,
                                    seekForwardEnabled: null == Q || (tb.current?.currentTime ?? 0) + 1 < tF,
                                    hideCaptionBtn: null == $,
                                    hideTranscriptBtn: null == Y,
                                    hideFullScreenBtn: ex,
                                    hidePlaybackSpeedBtn: eb,
                                    hideSkipButtons: ev ?? "portrait" === c,
                                    compactTimeDisplay: eE,
                                    size: tU,
                                    downloadUrl: ep,
                                    downloadContentType: ef,
                                    extraButtons: eh,
                                    autoFocus: eN,
                                    keyDownHandlerRef: nr,
                                    volume: ts,
                                    muted: tc,
                                    transcriptEnabled: tm,
                                    captionEnabled: tf,
                                    fullScreenEnabled: tx,
                                    handlePlaybackBtnClick: t0,
                                    handleTranscriptBtnClick: () => {
                                        tp(!tm);
                                    },
                                    handleCaptionBtnClick: () => {
                                        th(!tf);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !tx,
                                            t = (0, y.qf)(tb.current?.parentNode, tb.current);
                                        e && null != t
                                            ? ((0, y.tl)(t), t.addEventListener(y.Wb, tW), V?.(!0), tG(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(y.Wb, tW), V?.(!1), (0, y.sP)(t), tG(o.oA.MD)),
                                            tv(e);
                                    },
                                    handleSeekBackBtnClick: tZ,
                                    handleSeekForwardBtnClick: tJ,
                                    autoHideVolumeSlider: eA,
                                    handleControlBarPendingInteraction: e3,
                                    onVolumeChange: (e) => {
                                        to(e), H?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        td(e), W?.(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                    null != es &&
                        (0, r.jsx)("div", {
                            className: I.MU,
                            children: es({ playerState: eO, isControlBarExpanded: tV, videoRef: tb, isActive: !0 }),
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
              readyState: s ? j.Rv1.READY : j.Rv1.LOADING,
              aspectRatio: "portrait" === i ? 9 / 16 : 16 / 9,
              placeholder: n,
              placeholderVersion: a ?? 1,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              disableSpinner: !0,
              children: (0, r.jsx)("img", { src: t, className: I.zH, style: { objectFit: u }, alt: "", onLoad: d }),
          });
}
let K = l.forwardRef(function (e, t) {
    let { active: n = !0, onClick: a, ...u } = e,
        {
            autoplay: s,
            poster: c,
            orientation: d = "landscape",
            posterPlaceholder: m,
            posterPlaceholderVersion: f,
            renderOverlay: x,
            renderPersistentOverlay: v,
            objectFit: E,
        } = u,
        [b, g] = l.useState(!1),
        y = l.useCallback(
            (e) => {
                null != a ? a(e) : g(!0);
            },
            [a],
        ),
        C = l.useRef(null);
    return n || b
        ? (0, r.jsx)(U, { ...u, onClick: a, autoplay: s || b, ref: t })
        : (0, r.jsx)(p.D, {
              className: i()(I.W6, I.nZ),
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: y,
              "aria-label": M.intl.string(M.t.RscU7I),
              focusProps: { ringTarget: C },
              children: (0, r.jsxs)("div", {
                  className: i()(I.NS, { [I.DO]: "portrait" === d, [I.r7]: "landscape" === d }),
                  children: [
                      (0, r.jsx)(G, {
                          poster: c,
                          posterPlaceholder: m,
                          posterPlaceholderVersion: f,
                          orientation: d,
                          objectFit: E,
                      }),
                      null != x && (0, r.jsx)("div", { className: I.MU, children: x() }),
                      null != v &&
                          (0, r.jsx)("div", {
                              className: I.MU,
                              children: v({ playerState: o.Q6.PAUSED, isControlBarExpanded: !0, isActive: !1 }),
                          }),
                      (0, r.jsx)("div", {
                          className: I.mF,
                          ref: C,
                          children: (0, r.jsx)(h.u, { size: "xs", color: "currentColor", className: I.z_ }),
                      }),
                  ],
              }),
          });
});
