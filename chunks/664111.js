n.d(t, { A: () => P }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(687498),
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
    g = n(408121),
    v = n(984212),
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
                onFullscreenChange: F,
                onVolumeChange: _,
                onMutedChange: Y,
                initialVolume: K = 0.3,
                initialMuted: X = !1,
                onLoadStart: z,
                onLoadEnd: W,
                onFirstFrame: V,
                onBufferingStart: H,
                onBufferingEnd: J,
                onFocusChange: Z,
                onVisibilityChange: q,
                onSeek: ee,
                renderOverlay: et,
                renderPersistentOverlay: en,
                onHlsInstance: er,
                preload: el,
                downloadUrl: ea,
                downloadContentType: ei,
                getPlaybackBlockedMessage: es,
                progressGlow: eu,
                progressFillClassName: eo,
                glowClassName: ec,
                pauseOnLostVisibility: ed = !1,
                persistTimeline: em = !1,
                persistGrabber: ef = !0,
                autoFocus: eh = !1,
                timelineIndicatorConfig: ep,
                loadingSpinnerPosition: ex = "top-left",
            } = e,
            eE = j ?? P,
            eb = es ?? S.u,
            { focused: eg, focusedChanged: ev } = (0, y.A7)(),
            { visible: ey, visibleChanged: eS, targetRef: eC } = (0, y.O7)(),
            [eA, eN] = l.useState(C ? o.Q6.PLAYING : o.Q6.PAUSED),
            [eR, ew] = l.useState(!1),
            [eT, eL] = l.useState(!1),
            [ej, eP] = l.useState(0),
            [eD, eM] = l.useState(null),
            ek = l.useCallback((e) => {
                eM(null), eP(e);
            }, []),
            [eI, eB] = l.useState(!1),
            eU = l.useRef(null),
            [eG, e$] = l.useState(o.h$.LOADING),
            eO = l.useRef(!1),
            eQ = l.useRef(null),
            [eF, e_] = l.useState([]),
            [eY, eK] = l.useState(!1),
            eX = l.useRef(!1),
            [ez, eW] = l.useState(!1),
            eV = l.useRef(!0),
            eH = l.useRef(null),
            eJ = l.useRef(null),
            eZ = l.useRef(0);
        l.useLayoutEffect(() => {
            eZ.current = performance.now();
        }, []);
        let [eq, e0] = l.useState(K),
            [e1, e6] = l.useState(X),
            [e2, e9] = l.useState(!1),
            [e4, e8] = l.useState(!1),
            [e7, e3] = l.useState(!1),
            e5 = (0, u.bG)([f.A], () => f.A.useReducedMotion),
            te = (0, l.useRef)(null),
            tt = (0, l.useRef)(null),
            tn = l.useRef(!0),
            [tr, tl] = l.useState(null),
            ta = l.useCallback(
                (e, t) => {
                    B?.(e, t);
                },
                [B],
            ),
            { isHlsActive: ti } = (0, x.Ay)(te, { src: eE, initialTimeSec: M, onError: ta, onHlsInstance: er }),
            [ts, tu] = l.useState(null),
            [to, tc] = l.useState(0),
            td = U ?? te.current?.duration ?? 0,
            [tm, tf] = l.useState(o.oA.MD),
            th = { [o.oA.MD]: 50, [o.oA.LG]: 58 };
        (0, m.u5)(() => {
            tn.current && (tn.current = !1);
        });
        let tp = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((eN(e), Q?.(e, t), null != te.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            tl(null), te.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (eX.current = !1), te.current.pause(), (eV.current = !1);
                            break;
                        case o.Q6.ENDED:
                            e9(!1);
                    }
            },
            [Q],
        );
        l.useEffect(() => {
            if (!ed) return;
            let e = null != a && (a === d.ip4.HIDDEN || a === d.ip4.EXITING || a === d.ip4.EXITED),
                t = null != a && eS && !ey,
                n = ev && !eg;
            if ((e || t || n) && null != te.current && eA === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                tl(n), tp(o.Q6.PAUSED, n);
            }
        }, [ed, a, eg, ev, ey, eS, eA, tp]),
            l.useEffect(() => {
                ev && Z?.(eg, eA);
            }, [eg, ev, eA, Z]),
            l.useEffect(() => {
                eS && q?.(ey, eA);
            }, [ey, eS, eA, q]);
        let [tx, tE] = l.useState(!1),
            tb = l.useRef(null),
            tg = l.useRef(0);
        l.useLayoutEffect(() => {
            tg.current = performance.now();
        }, []);
        let tv = l.useCallback(() => {
                null != tb.current && clearTimeout(tb.current),
                    eA !== o.Q6.PLAYING ||
                        (tb.current = setTimeout(
                            () => {
                                eA === o.Q6.PLAYING && tE(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tg.current)),
                        ));
            }, [eA]),
            ty = l.useCallback(() => {
                tE(!1), (tg.current = performance.now()), tv();
            }, [tv]);
        l.useEffect(() => {
            if (eA !== o.Q6.PLAYING) {
                tE(!1), null != tb.current && clearTimeout(tb.current);
                return;
            }
            return (
                tv(),
                () => {
                    null != tb.current && clearTimeout(tb.current);
                }
            );
        }, [eA, tv]),
            l.useEffect(
                () => () => {
                    null != eU.current && clearTimeout(eU.current);
                },
                [],
            );
        let tS = !tx && (eT || eR || eA === o.Q6.ENDED),
            tC = l.useRef(F);
        tC.current = F;
        let tA = l.useCallback(() => {
                let e = (0, p.qf)(te.current?.parentNode, te.current);
                null == e || (0, p._U)(e) || (e.removeEventListener(p.Wb, tA), e3(!1), tC.current?.(!1), tf(o.oA.MD));
            }, []),
            tN = () => {
                null == te.current ||
                    (tw(Math.max((eQ.current ?? te.current.currentTime) - 10, 0)),
                    eA === o.Q6.ENDED && tp(o.Q6.PAUSED, o.KB.SEEK));
            },
            tR = () => {
                if (null == te.current) return;
                let e = Math.min((eQ.current ?? te.current.currentTime) + 10, td);
                tw(e), eA !== o.Q6.ENDED && e >= te.current.duration && tp(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = te.current;
            return () => {
                let t = (0, p.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(p.Wb, tA);
            };
        }, [tA]);
        let tw = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == te.current) return;
                    let n = te.current.currentTime;
                    (eQ.current = e),
                        eM((e / (te.current.duration ?? 1)) * 100),
                        eB(!0),
                        null != eU.current && clearTimeout(eU.current),
                        (eU.current = setTimeout(() => {
                            eB(!1), (eU.current = null);
                        }, 100)),
                        (eO.current = !0),
                        (te.current.currentTime = e),
                        t && ee?.(n, e);
                },
                [ee],
            ),
            tT = () => {
                if (null != te.current)
                    switch (eA) {
                        case o.Q6.ENDED:
                            tw(0), tp(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            tl(o.KB.USER), tp(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tp(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            tL = (e) => {
                tu(e);
            },
            tj = (e) => {
                tu((t) => (t?.id === e.id ? null : t));
            },
            tP = l.useCallback(() => {
                if (null == te.current || 0 === te.current.textTracks.length) return;
                let e = te.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, v.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tL(n)), (n.onexit = () => tj(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == tt.current) return;
            let e = tt.current;
            return (
                e.addEventListener("load", tP),
                () => {
                    null != e && e.removeEventListener("load", tP);
                }
            );
        }, [tP]);
        let tD = (e) => {
                if (null != te.current) {
                    if (eG === o.h$.BUFFERING) {
                        let e = null != eJ.current ? performance.now() - eJ.current : null;
                        J?.(e);
                    } else if (eG === o.h$.LOADING) {
                        let e = null != eH.current ? performance.now() - eH.current : null;
                        W?.(e);
                    }
                    e$(o.h$.READY), eA === o.Q6.PLAYING && (eX.current || tp(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            [{ controlBarAnimSpring: tM }, tk] = (0, d.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: w,
                onStart: () => {
                    eW(!1);
                },
                onRest: (e) => {
                    1 === e.value && eW(!0);
                },
            })),
            tI = (0, l.useRef)(null),
            [{ captionHeightSpring: tB }, tU] = (0, d.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: w }));
        l.useEffect(
            () => (
                tU({ captionHeightSpring: e4 && null != ts ? (tI.current?.clientHeight ?? 0) : 0, immediate: e5 }),
                () => {
                    tB.stop();
                }
            ),
            [e4, tU, e5, ts, tB],
        ),
            l.useEffect(
                () => (
                    tk({ controlBarAnimSpring: tS || eY ? 1 : 0, immediate: e5 }),
                    () => {
                        tM.stop();
                    }
                ),
                [tS, tk, e5, eY, tM],
            );
        let tG = eA === o.Q6.ENDED && null != O,
            t$ = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != te.current && (tw(0), tp(o.Q6.PLAYING, e));
                },
                [tw, tp],
            ),
            tO = l.useRef(null),
            tQ = l.useCallback(
                (e) => {
                    ty(), tO.current?.(e.nativeEvent);
                },
                [ty],
            );
        return (0, r.jsx)(d.DUT, {
            className: R.W6,
            "data-fullscreen": e7,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                ew(!0), tE(!1), (tg.current = performance.now()), null != tb.current && clearTimeout(tb.current);
            },
            onMouseLeave: () => {
                ew(!1), tE(!1);
            },
            onMouseMove: ty,
            children: (0, r.jsxs)("div", {
                className: i()(R.NS, { [R.DO]: "portrait" === L, [R.r7]: "landscape" === L }),
                tabIndex: -1,
                onKeyDown: tQ,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    tG && O?.({ replay: t$ }),
                    (0, r.jsxs)(h.A, {
                        ref: (e) => {
                            (te.current = e),
                                (eC.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: C,
                        playsInline: !0,
                        mediaLayoutType: e7 ? A.dG.STATIC : A.dG.RESPONSIVE,
                        className: i()({ [R.R]: tG, [R.IR]: !0 }),
                        controls: !1,
                        poster: D,
                        preload: el,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != te.current &&
                                (k?.(te.current.currentTime, te.current.duration),
                                eO.current || ek((te.current.currentTime / te.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            tp(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE), e$(o.h$.READY), I?.();
                        },
                        onLoadedData: (e) => {
                            if (eG === o.h$.LOADING) {
                                let e = null != eH.current ? performance.now() - eH.current : null;
                                W?.(e), e$(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == te.current) return;
                            M > 0 && tw(M, !1), e1 ? (te.current.volume = 0) : (te.current.volume = eq);
                            let t = te.current.duration;
                            t > 0 && isFinite(t) && tc(t);
                        },
                        onLoadStart: () => {
                            (eH.current = performance.now()), z?.();
                        },
                        onPlaying: () => {
                            if (!eV.current) return;
                            let e = 0 !== N ? N : eZ.current,
                                t = performance.now() - e;
                            V?.(t), (eV.current = !1);
                        },
                        onWaiting: (e) => {
                            (eJ.current = performance.now()), H?.(), e$(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == te.current) return;
                            let t = [];
                            for (let e = 0; e < te.current.buffered.length; e++) {
                                let n = te.current.buffered.start(e),
                                    r = te.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / te.current.duration, size: (r - n) / te.current.duration });
                            }
                            e_(t);
                        },
                        onCanPlay: tD,
                        onCanPlayThrough: tD,
                        onSeeked: () => {
                            (eO.current = !1),
                                (eQ.current = null),
                                null != te.current && ek((te.current.currentTime / te.current.duration) * 100);
                        },
                        onAbort: () => ta(o.SB.ABORT),
                        onError: () => ta(o.SB.ERROR),
                        onEmptied: () => ta(o.SB.EMPTIED),
                        onStalled: () => ta(o.SB.STALLED),
                        onClick: () => {
                            tT();
                        },
                        crossOrigin: "anonymous",
                        children: [
                            null != G &&
                                (0, r.jsx)("track", {
                                    ref: tt,
                                    src: G,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !ti &&
                                (0, r.jsx)("source", {
                                    onError: () => ta(o.SB.SOURCE_ERROR),
                                    src: eE,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    eG !== o.h$.READY &&
                        eA === o.Q6.PLAYING &&
                        null != eE &&
                        (0, r.jsx)("span", {
                            className: i()(R.S, { [R.F]: "center" === ex }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(d.y$y, { type: d.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(S.A, {
                        message: eb({ hasVideoAsset: null != eE, playerState: eA, pauseReason: tr }),
                        showOverlay: null == eE,
                    }),
                    null != et &&
                        (0, r.jsx)(s.animated.div, {
                            className: R.MU,
                            style: {
                                opacity: (0, s.to)([tM.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, s.to)([tM.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, s.to)([tM.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: et(),
                        }),
                    null != en &&
                        (0, r.jsx)("div", {
                            className: R.MU,
                            children: en({ playerState: eA, isControlBarExpanded: tS }),
                        }),
                    e2 &&
                        eA !== o.Q6.ENDED &&
                        null != $ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.DUT, {
                                    onClick: () => {
                                        eA === o.Q6.PAUSED && tp(o.Q6.PLAYING, o.KB.USER), e9(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: R.BG }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: i()(R.xr, { [R.MZ]: "portrait" === L }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, s.to)([tM, tB], (e, t) => `${e * th[tm] + t}px`) },
                                    children: (0, r.jsx)(g.X, {
                                        text: $,
                                        onClose: () => {
                                            e9(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: R.Jp,
                        style: { opacity: (0, s.to)([tM.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(R.yf, { [R.ZH]: eA === o.Q6.PLAYING, [R.v7]: eA === o.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eA === o.Q6.PLAYING
                                    ? (0, r.jsx)(d.udU, { className: R.PK })
                                    : (0, r.jsx)(d.E$n, { className: R.PK }),
                        },
                        eA,
                    ),
                    e4 &&
                        null != ts &&
                        !tG &&
                        (0, r.jsx)(s.animated.div, {
                            className: R.o$,
                            ref: tI,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, s.to)(
                                    [tM.to({ range: [0, 1], output: [-20, -th[tm]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: R.qh,
                                children: ts.text,
                            }),
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: R.r8,
                        style: { height: (0, s.to)([tM.to({ range: [0, 1], output: [0, th[tm]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(s.animated.div, {
                                style: {
                                    transform: (0, s.to)(
                                        [tM.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: tS || em ? void 0 : T,
                                    children: (0, r.jsx)(b.Ay, {
                                        percent: null != eD ? eD : ej,
                                        animate: !0 !== tn.current && !eI && eA === o.Q6.PLAYING,
                                        interactionEnabled: ez && td > 0,
                                        backgroundColor: tS ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eA,
                                        preloadedBuffers: tS ? eF : void 0,
                                        durationSec: to > 0 ? to : 1,
                                        isFullyVisible: tS && ez,
                                        maxSeekableTime: null != U && td > 0 ? td : void 0,
                                        progressGlow: eu,
                                        progressFillClassName: eo,
                                        glowClassName: ec,
                                        persistGrabber: ef,
                                        onClick: (e) => {
                                            tw(e), eA === o.Q6.ENDED && tp(o.Q6.PLAYING, o.KB.USER);
                                        },
                                        onScrubBack: tN,
                                        onScrubForward: tR,
                                        onDragStateChange: (e) => {
                                            eK(e),
                                                e
                                                    ? ((eX.current = eA === o.Q6.PLAYING),
                                                      eX.current && te.current?.pause())
                                                    : eX.current && (te.current?.play(), (eX.current = !1));
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
                                        [tM.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [tM.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, s.to)([tM.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => eL(!0),
                                onBlur: () => eL(!1),
                                children: (0, r.jsx)(E.A, {
                                    videoRef: te,
                                    playerState: eA,
                                    animSpring: tM,
                                    visible: tS,
                                    seekForwardEnabled: null == U || (te.current?.currentTime ?? 0) + 1 < td,
                                    hideCaptionBtn: null == G,
                                    hideTranscriptBtn: null == $,
                                    hideSkipButtons: "portrait" === L,
                                    size: tm,
                                    downloadUrl: ea,
                                    downloadContentType: ei,
                                    autoFocus: eh,
                                    keyDownHandlerRef: tO,
                                    volume: eq,
                                    muted: e1,
                                    transcriptEnabled: e2,
                                    captionEnabled: e4,
                                    fullScreenEnabled: e7,
                                    handlePlaybackBtnClick: tT,
                                    handleTranscriptBtnClick: () => {
                                        e9(!e2);
                                    },
                                    handleCaptionBtnClick: () => {
                                        e8(!e4);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !e7,
                                            t = (0, p.qf)(te.current?.parentNode, te.current);
                                        e && null != t
                                            ? ((0, p.tl)(t), t.addEventListener(p.Wb, tA), F?.(!0), tf(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(p.Wb, tA), F?.(!1), (0, p.sP)(t), tf(o.oA.MD)),
                                            e3(e);
                                    },
                                    handleSeekBackBtnClick: tN,
                                    handleSeekForwardBtnClick: tR,
                                    handleControlBarPendingInteraction: eK,
                                    onVolumeChange: (e) => {
                                        e0(e), _?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        e6(e), Y?.(e);
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
    let { active: n = !0, ...a } = e,
        {
            autoplay: s,
            poster: u,
            orientation: c = "landscape",
            posterPlaceholder: m,
            posterPlaceholderVersion: f,
            renderOverlay: h,
            renderPersistentOverlay: p,
        } = a,
        [x, E] = l.useState(!1),
        b = l.useCallback(() => {
            E(!0);
        }, []),
        g = l.useRef(null);
    return n || x
        ? (0, r.jsx)(L, { ...a, autoplay: s || x, ref: t })
        : (0, r.jsx)(d.DUT, {
              className: R.W6,
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: b,
              "aria-label": N.intl.string(N.t.RscU7I),
              focusProps: { ringTarget: g },
              children: (0, r.jsxs)("div", {
                  className: i()(R.NS, { [R.DO]: "portrait" === c, [R.r7]: "landscape" === c }),
                  children: [
                      (0, r.jsx)(j, { poster: u, posterPlaceholder: m, posterPlaceholderVersion: f, orientation: c }),
                      null != h && (0, r.jsx)("div", { className: R.MU, children: h() }),
                      null != p &&
                          (0, r.jsx)("div", {
                              className: R.MU,
                              children: p({ playerState: o.Q6.PAUSED, isControlBarExpanded: !0 }),
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
