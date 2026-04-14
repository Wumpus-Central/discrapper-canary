n.d(t, { A: () => P }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(445887),
    u = n(311907),
    o = n(876230),
    c = n(649658),
    d = n(397927),
    m = n(964486),
    f = n(775602),
    h = n(607470),
    p = n(475815),
    x = n(662903),
    E = n(337953),
    b = n(183494),
    v = n(408121),
    g = n(984212),
    y = n(739416),
    S = n(931853),
    C = n(652215),
    A = n(838541),
    N = n(985018),
    R = n(246878);
let w = { tension: 250, friction: 5, clamp: !0 },
    T = { visibility: "hidden" },
    L = l.forwardRef(function (e, t) {
        let {
                targetTimeSec: n = 1 / 0,
                parentTransitionState: a,
                onOptimisticProgressUpdate: c = () => {},
                autoplay: C = !1,
                performanceClockStartTime: N = 0,
                orientation: L = "landscape",
                videoUrlOverride: j,
                src: P,
                poster: D,
                initialTimeSec: M = 0,
                onProgressUpdate: k,
                onEnded: I,
                onError: B,
                maxSeekableTimeSec: U,
                captionTrackUrl: G,
                transcriptText: $,
                renderEndScreen: O,
                onPlayerStateChange: Q,
                onFullscreenChange: _,
                onVolumeChange: F,
                onMutedChange: Y,
                initialVolume: K = 0.3,
                initialMuted: X = !1,
                onLoadStart: z,
                onLoadEnd: V,
                onFirstFrame: W,
                onBufferingStart: H,
                onBufferingEnd: J,
                onFocusChange: Z,
                onVisibilityChange: q,
                onSeek: ee,
                renderOverlay: et,
                renderPersistentOverlay: en,
                onHlsInstance: er,
                onClick: el,
                preload: ea,
                downloadUrl: ei,
                downloadContentType: es,
                getPlaybackBlockedMessage: eu,
                progressClassName: eo,
                pauseOnLostVisibility: ec = !1,
                persistTimeline: ed = !1,
                persistGrabber: em = !0,
                autoFocus: ef = !1,
                autoHideVolumeSlider: eh = !1,
                timelineIndicatorConfig: ep,
                loadingSpinnerPosition: ex = "top-left",
                crossOrigin: eE = "anonymous",
            } = e,
            eb = j ?? P,
            ev = eu ?? S.u,
            { focused: eg, focusedChanged: ey } = (0, y.A7)(),
            { visible: eS, visibleChanged: eC, targetRef: eA } = (0, y.O7)(),
            [eN, eR] = l.useState(C ? o.Q6.PLAYING : o.Q6.PAUSED),
            [ew, eT] = l.useState(!1),
            [eL, ej] = l.useState(!1),
            [eP, eD] = l.useState(0),
            [eM, ek] = l.useState(null),
            eI = l.useCallback((e) => {
                ek(null), eD(e);
            }, []),
            [eB, eU] = l.useState(!1),
            eG = l.useRef(null),
            [e$, eO] = l.useState(o.h$.LOADING),
            eQ = l.useRef(!1),
            e_ = l.useRef(null),
            [eF, eY] = l.useState([]),
            [eK, eX] = l.useState(!1),
            ez = l.useRef(!1),
            [eV, eW] = l.useState(!1),
            eH = l.useRef(!0),
            eJ = l.useRef(null),
            eZ = l.useRef(null),
            eq = l.useRef(0);
        l.useLayoutEffect(() => {
            eq.current = performance.now();
        }, []);
        let [e0, e1] = l.useState(K),
            [e6, e2] = l.useState(X),
            [e9, e4] = l.useState(!1),
            [e8, e7] = l.useState(!1),
            [e3, e5] = l.useState(!1),
            te = (0, u.bG)([f.A], () => f.A.useReducedMotion),
            tt = (0, l.useRef)(null),
            tn = (0, l.useRef)(null),
            tr = l.useRef(!0),
            [tl, ta] = l.useState(null),
            ti = l.useCallback(
                (e, t) => {
                    B?.(e, t);
                },
                [B],
            ),
            { isHlsActive: ts } = (0, x.Ay)(tt, { src: eb, initialTimeSec: M, onError: ti, onHlsInstance: er }),
            [tu, to] = l.useState(null),
            [tc, td] = l.useState(0),
            tm = U ?? tt.current?.duration ?? 0,
            [tf, th] = l.useState(o.oA.MD),
            tp = { [o.oA.MD]: 56, [o.oA.LG]: 64 };
        (0, m.u5)(() => {
            tr.current && (tr.current = !1);
        });
        let tx = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((eR(e), Q?.(e, t), null != tt.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            ta(null), tt.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (ez.current = !1), tt.current.pause(), (eH.current = !1);
                            break;
                        case o.Q6.ENDED:
                            e4(!1);
                    }
            },
            [Q],
        );
        l.useEffect(() => {
            if (!ec) return;
            let e = null != a && (a === d.ip4.HIDDEN || a === d.ip4.EXITING || a === d.ip4.EXITED),
                t = null != a && eC && !eS,
                n = ey && !eg;
            if ((e || t || n) && null != tt.current && eN === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                ta(n), tx(o.Q6.PAUSED, n);
            }
        }, [ec, a, eg, ey, eS, eC, eN, tx]),
            l.useEffect(() => {
                ey && Z?.(eg, eN);
            }, [eg, ey, eN, Z]),
            l.useEffect(() => {
                eC && q?.(eS, eN);
            }, [eS, eC, eN, q]);
        let [tE, tb] = l.useState(!1),
            tv = l.useRef(null),
            tg = l.useRef(0);
        l.useLayoutEffect(() => {
            tg.current = performance.now();
        }, []);
        let ty = l.useCallback(() => {
                null != tv.current && clearTimeout(tv.current),
                    eN !== o.Q6.PLAYING ||
                        (tv.current = setTimeout(
                            () => {
                                eN === o.Q6.PLAYING && tb(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tg.current)),
                        ));
            }, [eN]),
            tS = l.useCallback(() => {
                tb(!1), (tg.current = performance.now()), ty();
            }, [ty]);
        l.useEffect(() => {
            if (eN !== o.Q6.PLAYING) {
                tb(!1), null != tv.current && clearTimeout(tv.current);
                return;
            }
            return (
                ty(),
                () => {
                    null != tv.current && clearTimeout(tv.current);
                }
            );
        }, [eN, ty]),
            l.useEffect(
                () => () => {
                    null != eG.current && clearTimeout(eG.current);
                },
                [],
            );
        let tC = !tE && (eL || ew || eN === o.Q6.ENDED),
            tA = l.useRef(_);
        tA.current = _;
        let tN = l.useCallback(() => {
                let e = (0, p.qf)(tt.current?.parentNode, tt.current);
                null == e || (0, p._U)(e) || (e.removeEventListener(p.Wb, tN), e5(!1), tA.current?.(!1), th(o.oA.MD));
            }, []),
            tR = () => {
                null == tt.current ||
                    (tT(Math.max((e_.current ?? tt.current.currentTime) - 10, 0)),
                    eN === o.Q6.ENDED && tx(o.Q6.PAUSED, o.KB.SEEK));
            },
            tw = () => {
                if (null == tt.current) return;
                let e = Math.min((e_.current ?? tt.current.currentTime) + 10, tm);
                tT(e), eN !== o.Q6.ENDED && e >= tt.current.duration && tx(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = tt.current;
            return () => {
                let t = (0, p.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(p.Wb, tN);
            };
        }, [tN]);
        let tT = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tt.current) return;
                    let n = tt.current.currentTime;
                    (e_.current = e),
                        ek((e / (tt.current.duration ?? 1)) * 100),
                        eU(!0),
                        null != eG.current && clearTimeout(eG.current),
                        (eG.current = setTimeout(() => {
                            eU(!1), (eG.current = null);
                        }, 100)),
                        (eQ.current = !0),
                        (tt.current.currentTime = e),
                        t && ee?.(n, e);
                },
                [ee],
            ),
            tL = () => {
                if (null != tt.current)
                    switch (eN) {
                        case o.Q6.ENDED:
                            tT(0), tx(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            ta(o.KB.USER), tx(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tx(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            tj = (e) => {
                to(e);
            },
            tP = (e) => {
                to((t) => (t?.id === e.id ? null : t));
            },
            tD = l.useCallback(() => {
                if (null == tt.current || 0 === tt.current.textTracks.length) return;
                let e = tt.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, g.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tj(n)), (n.onexit = () => tP(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == tn.current) return;
            let e = tn.current;
            return (
                e.addEventListener("load", tD),
                () => {
                    null != e && e.removeEventListener("load", tD);
                }
            );
        }, [tD]);
        let tM = (e) => {
                if (null != tt.current) {
                    if (e$ === o.h$.BUFFERING) {
                        let e = null != eZ.current ? performance.now() - eZ.current : null;
                        J?.(e);
                    } else if (e$ === o.h$.LOADING) {
                        let e = null != eJ.current ? performance.now() - eJ.current : null;
                        V?.(e);
                    }
                    eO(o.h$.READY), eN === o.Q6.PLAYING && (ez.current || tx(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            [{ controlBarAnimSpring: tk }, tI] = (0, d.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: w,
                onStart: () => {
                    eW(!1);
                },
                onRest: (e) => {
                    1 === e.value && eW(!0);
                },
            })),
            tB = (0, l.useRef)(null),
            [{ captionHeightSpring: tU }, tG] = (0, d.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: w }));
        l.useEffect(
            () => (
                tG({ captionHeightSpring: e8 && null != tu ? (tB.current?.clientHeight ?? 0) : 0, immediate: te }),
                () => {
                    tU.stop();
                }
            ),
            [e8, tG, te, tu, tU],
        ),
            l.useEffect(
                () => (
                    tI({ controlBarAnimSpring: tC || eK ? 1 : 0, immediate: te }),
                    () => {
                        tk.stop();
                    }
                ),
                [tC, tI, te, eK, tk],
            );
        let t$ = eN === o.Q6.ENDED && null != O,
            tO = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != tt.current && (tT(0), tx(o.Q6.PLAYING, e));
                },
                [tT, tx],
            ),
            tQ = l.useRef(null),
            t_ = l.useCallback(
                (e) => {
                    tS(), tQ.current?.(e.nativeEvent);
                },
                [tS],
            );
        return (0, r.jsx)(d.DUT, {
            className: R.W6,
            "data-fullscreen": e3,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eT(!0), tb(!1), (tg.current = performance.now()), null != tv.current && clearTimeout(tv.current);
            },
            onMouseLeave: () => {
                eT(!1), tb(!1);
            },
            onMouseMove: tS,
            children: (0, r.jsxs)("div", {
                className: i()(R.NS, { [R.DO]: "portrait" === L, [R.r7]: "landscape" === L }),
                tabIndex: -1,
                onKeyDown: t_,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    t$ && O?.({ replay: tO }),
                    (0, r.jsxs)(h.A, {
                        ref: (e) => {
                            (tt.current = e),
                                (eA.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: C,
                        playsInline: !0,
                        mediaLayoutType: e3 ? A.dG.STATIC : A.dG.RESPONSIVE,
                        className: i()({ [R.R]: t$, [R.IR]: !0 }),
                        controls: !1,
                        poster: D,
                        preload: ea,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != tt.current &&
                                (k?.(tt.current.currentTime, tt.current.duration),
                                eQ.current || eI((tt.current.currentTime / tt.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            tx(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE), eO(o.h$.READY), I?.();
                        },
                        onLoadedData: (e) => {
                            if (e$ === o.h$.LOADING) {
                                let e = null != eJ.current ? performance.now() - eJ.current : null;
                                V?.(e), eO(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tt.current) return;
                            M > 0 && !ts && tT(M, !1), e6 ? (tt.current.volume = 0) : (tt.current.volume = e0);
                            let t = tt.current.duration;
                            t > 0 && isFinite(t) && td(t);
                        },
                        onLoadStart: () => {
                            (eJ.current = performance.now()), z?.();
                        },
                        onPlaying: () => {
                            if (!eH.current) return;
                            let e = 0 !== N ? N : eq.current,
                                t = performance.now() - e;
                            W?.(t), (eH.current = !1);
                        },
                        onWaiting: (e) => {
                            (eZ.current = performance.now()), H?.(), eO(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == tt.current) return;
                            let t = [];
                            for (let e = 0; e < tt.current.buffered.length; e++) {
                                let n = tt.current.buffered.start(e),
                                    r = tt.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / tt.current.duration, size: (r - n) / tt.current.duration });
                            }
                            eY(t);
                        },
                        onCanPlay: tM,
                        onCanPlayThrough: tM,
                        onSeeked: () => {
                            (eQ.current = !1),
                                (e_.current = null),
                                null != tt.current && eI((tt.current.currentTime / tt.current.duration) * 100);
                        },
                        onAbort: () => ti(o.SB.ABORT),
                        onError: () => ti(o.SB.ERROR),
                        onEmptied: () => ti(o.SB.EMPTIED),
                        onStalled: () => ti(o.SB.STALLED),
                        onClick: (e) => {
                            null != el ? el(e) : tL();
                        },
                        crossOrigin: eE ?? void 0,
                        children: [
                            null != G &&
                                (0, r.jsx)("track", {
                                    ref: tn,
                                    src: G,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !ts &&
                                (0, r.jsx)("source", {
                                    onError: () => ti(o.SB.SOURCE_ERROR),
                                    src: eb,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    e$ !== o.h$.READY &&
                        eN === o.Q6.PLAYING &&
                        null != eb &&
                        (0, r.jsx)("span", {
                            className: i()(R.S, { [R.F]: "center" === ex }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(d.y$y, { type: d.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(S.A, {
                        message: ev({ hasVideoAsset: null != eb, playerState: eN, pauseReason: tl }),
                        showOverlay: null == eb,
                    }),
                    null != et &&
                        (0, r.jsx)(s.animated.div, {
                            className: R.MU,
                            style: {
                                opacity: (0, s.to)([tk.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, s.to)([tk.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, s.to)([tk.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: et(),
                        }),
                    null != en &&
                        (0, r.jsx)("div", {
                            className: R.MU,
                            children: en({ playerState: eN, isControlBarExpanded: tC }),
                        }),
                    e9 &&
                        eN !== o.Q6.ENDED &&
                        null != $ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.DUT, {
                                    onClick: () => {
                                        eN === o.Q6.PAUSED && tx(o.Q6.PLAYING, o.KB.USER), e4(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: R.BG }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: i()(R.xr, { [R.MZ]: "portrait" === L }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, s.to)([tk, tU], (e, t) => `${e * tp[tf] + t}px`) },
                                    children: (0, r.jsx)(v.X, {
                                        text: $,
                                        onClose: () => {
                                            e4(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: R.Jp,
                        style: { opacity: (0, s.to)([tk.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(R.yf, { [R.ZH]: eN === o.Q6.PLAYING, [R.v7]: eN === o.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eN === o.Q6.PLAYING
                                    ? (0, r.jsx)(d.udU, { className: R.PK })
                                    : (0, r.jsx)(d.E$n, { className: R.PK }),
                        },
                        eN,
                    ),
                    e8 &&
                        null != tu &&
                        !t$ &&
                        (0, r.jsx)(s.animated.div, {
                            className: R.o$,
                            ref: tB,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, s.to)(
                                    [tk.to({ range: [0, 1], output: [-20, -tp[tf]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: R.qh,
                                children: tu.text,
                            }),
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: R.r8,
                        style: { height: (0, s.to)([tk.to({ range: [0, 1], output: [0, tp[tf]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(s.animated.div, {
                                style: {
                                    transform: (0, s.to)(
                                        [tk.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: tC || ed ? void 0 : T,
                                    children: (0, r.jsx)(b.Ay, {
                                        percent: null != eM ? eM : eP,
                                        animate: !0 !== tr.current && !eB && eN === o.Q6.PLAYING,
                                        interactionEnabled: eV && tm > 0,
                                        backgroundColor: tC ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eN,
                                        preloadedBuffers: tC ? eF : void 0,
                                        durationSec: tc > 0 ? tc : 1,
                                        isFullyVisible: tC && eV,
                                        maxSeekableTime: null != U && tm > 0 ? tm : void 0,
                                        progressClassName: eo,
                                        persistGrabber: em,
                                        onClick: (e) => {
                                            tT(e), eN === o.Q6.ENDED && tx(o.Q6.PLAYING, o.KB.USER);
                                        },
                                        onScrubBack: tR,
                                        onScrubForward: tw,
                                        onDragStateChange: (e) => {
                                            eX(e),
                                                e
                                                    ? ((ez.current = eN === o.Q6.PLAYING),
                                                      ez.current && tt.current?.pause())
                                                    : ez.current && (tt.current?.play(), (ez.current = !1));
                                        },
                                        indicatorConfig: ep,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: R.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, s.to)(
                                        [tk.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 20}px`,
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [tk.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, s.to)([tk.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => ej(!0),
                                onBlur: () => ej(!1),
                                children: (0, r.jsx)(E.A, {
                                    videoRef: tt,
                                    playerState: eN,
                                    animSpring: tk,
                                    visible: tC,
                                    seekForwardEnabled: null == U || (tt.current?.currentTime ?? 0) + 1 < tm,
                                    hideCaptionBtn: null == G,
                                    hideTranscriptBtn: null == $,
                                    hideSkipButtons: "portrait" === L,
                                    size: tf,
                                    downloadUrl: ei,
                                    downloadContentType: es,
                                    autoFocus: ef,
                                    keyDownHandlerRef: tQ,
                                    volume: e0,
                                    muted: e6,
                                    transcriptEnabled: e9,
                                    captionEnabled: e8,
                                    fullScreenEnabled: e3,
                                    handlePlaybackBtnClick: tL,
                                    handleTranscriptBtnClick: () => {
                                        e4(!e9);
                                    },
                                    handleCaptionBtnClick: () => {
                                        e7(!e8);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !e3,
                                            t = (0, p.qf)(tt.current?.parentNode, tt.current);
                                        e && null != t
                                            ? ((0, p.tl)(t), t.addEventListener(p.Wb, tN), _?.(!0), th(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(p.Wb, tN), _?.(!1), (0, p.sP)(t), th(o.oA.MD)),
                                            e5(e);
                                    },
                                    handleSeekBackBtnClick: tR,
                                    handleSeekForwardBtnClick: tw,
                                    autoHideVolumeSlider: eh,
                                    handleControlBarPendingInteraction: eX,
                                    onVolumeChange: (e) => {
                                        e1(e), F?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        e2(e), Y?.(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
function j(e) {
    let { poster: t, posterPlaceholder: n, posterPlaceholderVersion: a, orientation: i } = e,
        [s, u] = l.useState(!1),
        o = l.useCallback(() => u(!0), []);
    return null == t
        ? null
        : (0, r.jsx)(c.y, {
              readyState: s ? C.Rv1.READY : C.Rv1.LOADING,
              aspectRatio: "portrait" === i ? 9 / 16 : 16 / 9,
              placeholder: n,
              placeholderVersion: a ?? 1,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              disableSpinner: !0,
              children: (0, r.jsx)("img", { src: t, className: R.zH, alt: "", onLoad: o }),
          });
}
let P = l.forwardRef(function (e, t) {
    let { active: n = !0, onClick: a, ...s } = e,
        {
            autoplay: u,
            poster: c,
            orientation: m = "landscape",
            posterPlaceholder: f,
            posterPlaceholderVersion: h,
            renderOverlay: p,
            renderPersistentOverlay: x,
        } = s,
        [E, b] = l.useState(!1),
        v = l.useCallback(
            (e) => {
                null != a ? a(e) : b(!0);
            },
            [a],
        ),
        g = l.useRef(null);
    return n || E
        ? (0, r.jsx)(L, { ...s, onClick: a, autoplay: u || E, ref: t })
        : (0, r.jsx)(d.DUT, {
              className: i()(R.W6, R.nZ),
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: v,
              "aria-label": N.intl.string(N.t.RscU7I),
              focusProps: { ringTarget: g },
              children: (0, r.jsxs)("div", {
                  className: i()(R.NS, { [R.DO]: "portrait" === m, [R.r7]: "landscape" === m }),
                  children: [
                      (0, r.jsx)(j, { poster: c, posterPlaceholder: f, posterPlaceholderVersion: h, orientation: m }),
                      null != p && (0, r.jsx)("div", { className: R.MU, children: p() }),
                      null != x &&
                          (0, r.jsx)("div", {
                              className: R.MU,
                              children: x({ playerState: o.Q6.PAUSED, isControlBarExpanded: !0 }),
                          }),
                      (0, r.jsx)("div", {
                          className: R.mF,
                          ref: g,
                          children: (0, r.jsx)(d.udU, { size: "xs", color: "currentColor", className: R.z_ }),
                      }),
                  ],
              }),
          });
});
