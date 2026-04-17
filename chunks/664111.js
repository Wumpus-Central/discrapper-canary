n.d(t, { A: () => k }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(825638),
    u = n(311907),
    o = n(876230),
    c = n(649658),
    d = n(397927),
    m = n(964486),
    f = n(775602),
    p = n(607470),
    h = n(475815),
    x = n(662903),
    v = n(337953),
    E = n(183494),
    b = n(408121),
    g = n(984212),
    y = n(739416),
    S = n(931853),
    C = n(90721),
    A = n(652215),
    N = n(838541),
    R = n(985018),
    L = n(834926);
let w = { tension: 250, friction: 5, clamp: !0 },
    T = { visibility: "hidden" },
    j = l.forwardRef(function (e, t) {
        let {
                targetTimeSec: n = 1 / 0,
                parentTransitionState: a,
                onOptimisticProgressUpdate: c = () => {},
                autoplay: A = !1,
                performanceClockStartTime: R = 0,
                orientation: j = "landscape",
                videoUrlOverride: P,
                src: k,
                poster: D,
                initialTimeSec: M = 0,
                onProgressUpdate: I,
                onEnded: B,
                onError: U,
                maxSeekableTimeSec: F,
                captionTrackUrl: G,
                transcriptText: $,
                renderEndScreen: O,
                onPlayerStateChange: Q,
                onFullscreenChange: _,
                onVolumeChange: Y,
                onMutedChange: K,
                initialVolume: X = 0.3,
                initialMuted: z = !1,
                onLoadStart: V,
                onLoadEnd: W,
                onFirstFrame: H,
                onBufferingStart: J,
                onBufferingEnd: Z,
                onFocusChange: q,
                onVisibilityChange: ee,
                onSeek: et,
                renderOverlay: en,
                renderPersistentOverlay: er,
                onHlsInstance: el,
                onClick: ea,
                preload: ei,
                downloadUrl: es,
                downloadContentType: eu,
                getPlaybackBlockedMessage: eo,
                progressClassName: ec,
                pauseOnLostVisibility: ed = !1,
                persistTimeline: em = !1,
                persistGrabber: ef = !0,
                autoFocus: ep = !1,
                autoHideVolumeSlider: eh = !1,
                timelineIndicatorConfig: ex,
                loadingSpinnerPosition: ev = "top-left",
                crossOrigin: eE = "anonymous",
                withVideoHalo: eb = !1,
                objectFit: eg = "contain",
            } = e,
            ey = P ?? k,
            eS = eo ?? S.u,
            { focused: eC, focusedChanged: eA } = (0, y.A7)(),
            { visible: eN, visibleChanged: eR, targetRef: eL } = (0, y.O7)(),
            [ew, eT] = l.useState(A ? o.Q6.PLAYING : o.Q6.PAUSED),
            [ej, eP] = l.useState(!1),
            [ek, eD] = l.useState(!1),
            [eM, eI] = l.useState(0),
            [eB, eU] = l.useState(null),
            eF = l.useCallback((e) => {
                eU(null), eI(e);
            }, []),
            [eG, e$] = l.useState(!1),
            eO = l.useRef(null),
            [eQ, e_] = l.useState(o.h$.LOADING),
            eY = l.useRef(!1),
            eK = l.useRef(null),
            [eX, ez] = l.useState([]),
            [eV, eW] = l.useState(!1),
            eH = l.useRef(!1),
            [eJ, eZ] = l.useState(!1),
            eq = l.useRef(!0),
            e0 = l.useRef(null),
            e1 = l.useRef(null),
            e6 = l.useRef(0);
        l.useLayoutEffect(() => {
            e6.current = performance.now();
        }, []);
        let [e2, e9] = l.useState(X),
            [e4, e8] = l.useState(z),
            [e7, e3] = l.useState(!1),
            [e5, te] = l.useState(!1),
            [tt, tn] = l.useState(!1),
            tr = (0, u.bG)([f.A], () => f.A.useReducedMotion),
            tl = (0, l.useRef)(null),
            ta = (0, l.useRef)(null),
            ti = (0, l.useRef)(null),
            ts = l.useRef(!0),
            [tu, to] = l.useState(null);
        (0, C.A)({ videoRef: tl, canvasRef: ta, enabled: eb && !tr, canvasWidth: 32, canvasHeight: 18 });
        let tc = l.useCallback(
                (e, t) => {
                    U?.(e, t);
                },
                [U],
            ),
            { isHlsActive: td } = (0, x.Ay)(tl, { src: ey, initialTimeSec: M, onError: tc, onHlsInstance: el }),
            [tm, tf] = l.useState(null),
            [tp, th] = l.useState(0),
            [tx, tv] = l.useState(!1),
            tE = F ?? tl.current?.duration ?? 0,
            [tb, tg] = l.useState(o.oA.MD),
            ty = { [o.oA.MD]: 56, [o.oA.LG]: 64 };
        (0, m.u5)(() => {
            ts.current && (ts.current = !1);
        });
        let tS = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((eT(e), Q?.(e, t), null != tl.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            to(null), tl.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (eH.current = !1), tl.current.pause(), (eq.current = !1);
                            break;
                        case o.Q6.ENDED:
                            e3(!1);
                    }
            },
            [Q],
        );
        l.useEffect(() => {
            if (!ed) return;
            let e = null != a && (a === d.ip4.HIDDEN || a === d.ip4.EXITING || a === d.ip4.EXITED),
                t = null != a && eR && !eN,
                n = eA && !eC;
            if ((e || t || n) && null != tl.current && ew === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                to(n), tS(o.Q6.PAUSED, n);
            }
        }, [ed, a, eC, eA, eN, eR, ew, tS]),
            l.useEffect(() => {
                eA && q?.(eC, ew);
            }, [eC, eA, ew, q]),
            l.useEffect(() => {
                eR && ee?.(eN, ew);
            }, [eN, eR, ew, ee]);
        let [tC, tA] = l.useState(!1),
            tN = l.useRef(null),
            tR = l.useRef(0);
        l.useLayoutEffect(() => {
            tR.current = performance.now();
        }, []);
        let tL = l.useCallback(() => {
                null != tN.current && clearTimeout(tN.current),
                    ew !== o.Q6.PLAYING ||
                        (tN.current = setTimeout(
                            () => {
                                ew === o.Q6.PLAYING && tA(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tR.current)),
                        ));
            }, [ew]),
            tw = l.useCallback(() => {
                tA(!1), (tR.current = performance.now()), tL();
            }, [tL]);
        l.useEffect(() => {
            if (ew !== o.Q6.PLAYING) {
                tA(!1), null != tN.current && clearTimeout(tN.current);
                return;
            }
            return (
                tL(),
                () => {
                    null != tN.current && clearTimeout(tN.current);
                }
            );
        }, [ew, tL]),
            l.useEffect(
                () => () => {
                    null != eO.current && clearTimeout(eO.current);
                },
                [],
            );
        let tT = !tC && (ek || ej || ew === o.Q6.ENDED),
            tj = l.useRef(_);
        tj.current = _;
        let tP = l.useCallback(() => {
                let e = (0, h.qf)(tl.current?.parentNode, tl.current);
                null == e || (0, h._U)(e) || (e.removeEventListener(h.Wb, tP), tn(!1), tj.current?.(!1), tg(o.oA.MD));
            }, []),
            tk = () => {
                null == tl.current ||
                    (tM(Math.max((eK.current ?? tl.current.currentTime) - 10, 0)),
                    ew === o.Q6.ENDED && tS(o.Q6.PAUSED, o.KB.SEEK));
            },
            tD = () => {
                if (null == tl.current) return;
                let e = Math.min((eK.current ?? tl.current.currentTime) + 10, tE);
                tM(e), ew !== o.Q6.ENDED && e >= tl.current.duration && tS(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = tl.current;
            return () => {
                let t = (0, h.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(h.Wb, tP);
            };
        }, [tP]);
        let tM = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tl.current) return;
                    let n = tl.current.currentTime;
                    (eK.current = e),
                        eU((e / (tl.current.duration ?? 1)) * 100),
                        e$(!0),
                        null != eO.current && clearTimeout(eO.current),
                        (eO.current = setTimeout(() => {
                            e$(!1), (eO.current = null);
                        }, 100)),
                        (eY.current = !0),
                        (tl.current.currentTime = e),
                        t && et?.(n, e);
                },
                [et],
            ),
            tI = () => {
                if (null != tl.current)
                    switch (ew) {
                        case o.Q6.ENDED:
                            tM(0), tS(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            to(o.KB.USER), tS(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tS(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            tB = (e) => {
                tf(e);
            },
            tU = (e) => {
                tf((t) => (t?.id === e.id ? null : t));
            },
            tF = l.useCallback(() => {
                if (null == tl.current || 0 === tl.current.textTracks.length) return;
                let e = tl.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, g.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tB(n)), (n.onexit = () => tU(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == ti.current) return;
            let e = ti.current;
            return (
                e.addEventListener("load", tF),
                () => {
                    null != e && e.removeEventListener("load", tF);
                }
            );
        }, [tF]);
        let tG = (e) => {
                if (null != tl.current) {
                    if (eQ === o.h$.BUFFERING) {
                        let e = null != e1.current ? performance.now() - e1.current : null;
                        Z?.(e);
                    } else if (eQ === o.h$.LOADING) {
                        let e = null != e0.current ? performance.now() - e0.current : null;
                        W?.(e);
                    }
                    e_(o.h$.READY), ew === o.Q6.PLAYING && (eH.current || tS(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            [{ controlBarAnimSpring: t$ }, tO] = (0, d.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: w,
                onStart: () => {
                    eZ(!1);
                },
                onRest: (e) => {
                    1 === e.value && eZ(!0);
                },
            })),
            tQ = (0, l.useRef)(null),
            [{ captionHeightSpring: t_ }, tY] = (0, d.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: w }));
        l.useEffect(
            () => (
                tY({ captionHeightSpring: e5 && null != tm ? (tQ.current?.clientHeight ?? 0) : 0, immediate: tr }),
                () => {
                    t_.stop();
                }
            ),
            [e5, tY, tr, tm, t_],
        ),
            l.useEffect(
                () => (
                    tO({ controlBarAnimSpring: tT || eV ? 1 : 0, immediate: tr }),
                    () => {
                        t$.stop();
                    }
                ),
                [tT, tO, tr, eV, t$],
            );
        let tK = ew === o.Q6.ENDED && null != O,
            tX = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != tl.current && (tM(0), tS(o.Q6.PLAYING, e));
                },
                [tM, tS],
            ),
            tz = l.useRef(null),
            tV = l.useCallback(
                (e) => {
                    tw(), tz.current?.(e.nativeEvent);
                },
                [tw],
            );
        return (0, r.jsx)(d.DUT, {
            className: L.W6,
            "data-fullscreen": tt,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eP(!0), tA(!1), (tR.current = performance.now()), null != tN.current && clearTimeout(tN.current);
            },
            onMouseLeave: () => {
                eP(!1), tA(!1);
            },
            onMouseMove: tw,
            children: (0, r.jsxs)("div", {
                className: i()(L.NS, { [L.DO]: "portrait" === j, [L.r7]: "landscape" === j }),
                tabIndex: -1,
                onKeyDown: tV,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    eb && !tr && (0, r.jsx)("canvas", { ref: ta, className: L.Xm }),
                    tK && O?.({ replay: tX }),
                    (0, r.jsxs)(p.A, {
                        ref: (e) => {
                            (tl.current = e),
                                (eL.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: A,
                        playsInline: !0,
                        mediaLayoutType: tt ? N.dG.STATIC : N.dG.RESPONSIVE,
                        className: i()({ [L.R]: tK, [L.IR]: !0, [L.FP]: "cover" === eg && !tt }),
                        controls: !1,
                        poster: D,
                        preload: ei,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != tl.current &&
                                (I?.(tl.current.currentTime, tl.current.duration),
                                eY.current || eF((tl.current.currentTime / tl.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            tS(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE), e_(o.h$.READY), B?.();
                        },
                        onLoadedData: (e) => {
                            if (eQ === o.h$.LOADING) {
                                let e = null != e0.current ? performance.now() - e0.current : null;
                                W?.(e), e_(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tl.current) return;
                            M > 0 && !td && tM(M, !1), e4 ? (tl.current.volume = 0) : (tl.current.volume = e2);
                            let t = tl.current.duration;
                            t > 0 && isFinite(t) && th(t), tv(!0);
                        },
                        onLoadStart: () => {
                            (e0.current = performance.now()), V?.();
                        },
                        onPlaying: () => {
                            if (!eq.current) return;
                            let e = 0 !== R ? R : e6.current,
                                t = performance.now() - e;
                            H?.(t), (eq.current = !1);
                        },
                        onWaiting: (e) => {
                            (e1.current = performance.now()), J?.(), e_(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == tl.current) return;
                            let t = [];
                            for (let e = 0; e < tl.current.buffered.length; e++) {
                                let n = tl.current.buffered.start(e),
                                    r = tl.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / tl.current.duration, size: (r - n) / tl.current.duration });
                            }
                            ez(t);
                        },
                        onCanPlay: tG,
                        onCanPlayThrough: tG,
                        onSeeked: () => {
                            (eY.current = !1),
                                (eK.current = null),
                                null != tl.current && eF((tl.current.currentTime / tl.current.duration) * 100);
                        },
                        onAbort: () => tc(o.SB.ABORT),
                        onError: () => tc(o.SB.ERROR),
                        onEmptied: () => tc(o.SB.EMPTIED),
                        onStalled: () => tc(o.SB.STALLED),
                        onClick: (e) => {
                            null != ea ? ea(e) : tI();
                        },
                        crossOrigin: eE ?? void 0,
                        children: [
                            null != G &&
                                (0, r.jsx)("track", {
                                    ref: ti,
                                    src: G,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !td &&
                                (0, r.jsx)("source", {
                                    onError: () => tc(o.SB.SOURCE_ERROR),
                                    src: ey,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    eQ !== o.h$.READY &&
                        ew === o.Q6.PLAYING &&
                        null != ey &&
                        (0, r.jsx)("span", {
                            className: i()(L.S, { [L.F]: "center" === ev }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(d.y$y, { type: d.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(S.A, {
                        message: eS({ hasVideoAsset: null != ey, playerState: ew, pauseReason: tu }),
                        showOverlay: null == ey,
                    }),
                    null != en &&
                        (0, r.jsx)(s.animated.div, {
                            className: L.MU,
                            style: {
                                opacity: (0, s.to)([t$.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, s.to)([t$.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, s.to)([t$.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: en(),
                        }),
                    null != er &&
                        (0, r.jsx)("div", {
                            className: L.MU,
                            children: er({ playerState: ew, isControlBarExpanded: tT }),
                        }),
                    e7 &&
                        ew !== o.Q6.ENDED &&
                        null != $ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.DUT, {
                                    onClick: () => {
                                        ew === o.Q6.PAUSED && tS(o.Q6.PLAYING, o.KB.USER), e3(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: L.BG }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: i()(L.xr, { [L.MZ]: "portrait" === j }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, s.to)([t$, t_], (e, t) => `${e * ty[tb] + t}px`) },
                                    children: (0, r.jsx)(b.X, {
                                        text: $,
                                        onClose: () => {
                                            e3(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: L.Jp,
                        style: { opacity: (0, s.to)([t$.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(L.yf, { [L.ZH]: ew === o.Q6.PLAYING, [L.v7]: ew === o.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ew === o.Q6.PLAYING
                                    ? (0, r.jsx)(d.udU, { className: L.PK })
                                    : (0, r.jsx)(d.E$n, { className: L.PK }),
                        },
                        ew,
                    ),
                    e5 &&
                        null != tm &&
                        !tK &&
                        (0, r.jsx)(s.animated.div, {
                            className: L.o$,
                            ref: tQ,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, s.to)(
                                    [t$.to({ range: [0, 1], output: [-20, -ty[tb]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: L.qh,
                                children: tm.text,
                            }),
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: L.r8,
                        style: { height: (0, s.to)([t$.to({ range: [0, 1], output: [0, ty[tb]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(s.animated.div, {
                                style: {
                                    transform: (0, s.to)(
                                        [t$.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: tT || eV || em ? void 0 : T,
                                    children: (0, r.jsx)(E.Ay, {
                                        percent: null != eB ? eB : eM,
                                        animate: !0 !== ts.current && !eG && ew === o.Q6.PLAYING && tx,
                                        interactionEnabled: eJ && tE > 0,
                                        backgroundColor: tT || em ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: ew,
                                        preloadedBuffers: tT ? eX : void 0,
                                        durationSec: tp > 0 ? tp : +!tx,
                                        isFullyVisible: tT && eJ,
                                        maxSeekableTime: null != F && tE > 0 ? tE : void 0,
                                        progressClassName: ec,
                                        persistGrabber: ef,
                                        onClick: (e) => {
                                            if ((tM(e), ew === o.Q6.ENDED)) {
                                                let t = tl.current?.duration;
                                                (null == t || Number.isNaN(t) || e < t) && tS(o.Q6.PLAYING, o.KB.USER);
                                            }
                                        },
                                        onScrubBack: tk,
                                        onScrubForward: tD,
                                        onDragStateChange: (e) => {
                                            if ((eW(e), e))
                                                (eH.current = ew === o.Q6.PLAYING), eH.current && tl.current?.pause();
                                            else if (eH.current) {
                                                eH.current = !1;
                                                let e = tl.current;
                                                null != e && !Number.isNaN(e.duration) && e.currentTime >= e.duration
                                                    ? tS(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE)
                                                    : e?.play();
                                            }
                                        },
                                        indicatorConfig: ex,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: L.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, s.to)(
                                        [t$.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 20}px`,
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [t$.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, s.to)([t$.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => eD(!0),
                                onBlur: () => eD(!1),
                                children: (0, r.jsx)(v.A, {
                                    videoRef: tl,
                                    playerState: ew,
                                    animSpring: t$,
                                    visible: tT,
                                    seekForwardEnabled: null == F || (tl.current?.currentTime ?? 0) + 1 < tE,
                                    hideCaptionBtn: null == G,
                                    hideTranscriptBtn: null == $,
                                    hideSkipButtons: "portrait" === j,
                                    size: tb,
                                    downloadUrl: es,
                                    downloadContentType: eu,
                                    autoFocus: ep,
                                    keyDownHandlerRef: tz,
                                    volume: e2,
                                    muted: e4,
                                    transcriptEnabled: e7,
                                    captionEnabled: e5,
                                    fullScreenEnabled: tt,
                                    handlePlaybackBtnClick: tI,
                                    handleTranscriptBtnClick: () => {
                                        e3(!e7);
                                    },
                                    handleCaptionBtnClick: () => {
                                        te(!e5);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !tt,
                                            t = (0, h.qf)(tl.current?.parentNode, tl.current);
                                        e && null != t
                                            ? ((0, h.tl)(t), t.addEventListener(h.Wb, tP), _?.(!0), tg(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(h.Wb, tP), _?.(!1), (0, h.sP)(t), tg(o.oA.MD)),
                                            tn(e);
                                    },
                                    handleSeekBackBtnClick: tk,
                                    handleSeekForwardBtnClick: tD,
                                    autoHideVolumeSlider: eh,
                                    handleControlBarPendingInteraction: eW,
                                    onVolumeChange: (e) => {
                                        e9(e), Y?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        e8(e), K?.(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
function P(e) {
    let { poster: t, posterPlaceholder: n, posterPlaceholderVersion: a, orientation: i, objectFit: s = "contain" } = e,
        [u, o] = l.useState(!1),
        d = l.useCallback(() => o(!0), []);
    return null == t
        ? null
        : (0, r.jsx)(c.y, {
              readyState: u ? A.Rv1.READY : A.Rv1.LOADING,
              aspectRatio: "portrait" === i ? 9 / 16 : 16 / 9,
              placeholder: n,
              placeholderVersion: a ?? 1,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              disableSpinner: !0,
              children: (0, r.jsx)("img", { src: t, className: L.zH, style: { objectFit: s }, alt: "", onLoad: d }),
          });
}
let k = l.forwardRef(function (e, t) {
    let { active: n = !0, onClick: a, ...s } = e,
        {
            autoplay: u,
            poster: c,
            orientation: m = "landscape",
            posterPlaceholder: f,
            posterPlaceholderVersion: p,
            renderOverlay: h,
            renderPersistentOverlay: x,
            objectFit: v,
        } = s,
        [E, b] = l.useState(!1),
        g = l.useCallback(
            (e) => {
                null != a ? a(e) : b(!0);
            },
            [a],
        ),
        y = l.useRef(null);
    return n || E
        ? (0, r.jsx)(j, { ...s, onClick: a, autoplay: u || E, ref: t })
        : (0, r.jsx)(d.DUT, {
              className: i()(L.W6, L.nZ),
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: g,
              "aria-label": R.intl.string(R.t.RscU7I),
              focusProps: { ringTarget: y },
              children: (0, r.jsxs)("div", {
                  className: i()(L.NS, { [L.DO]: "portrait" === m, [L.r7]: "landscape" === m }),
                  children: [
                      (0, r.jsx)(P, {
                          poster: c,
                          posterPlaceholder: f,
                          posterPlaceholderVersion: p,
                          orientation: m,
                          objectFit: v,
                      }),
                      null != h && (0, r.jsx)("div", { className: L.MU, children: h() }),
                      null != x &&
                          (0, r.jsx)("div", {
                              className: L.MU,
                              children: x({ playerState: o.Q6.PAUSED, isControlBarExpanded: !0 }),
                          }),
                      (0, r.jsx)("div", {
                          className: L.mF,
                          ref: y,
                          children: (0, r.jsx)(d.udU, { size: "xs", color: "currentColor", className: L.z_ }),
                      }),
                  ],
              }),
          });
});
