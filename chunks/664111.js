n.d(t, { A: () => j }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    u = n(407045),
    s = n(311907),
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
    R = n(834926);
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
                videoUrlOverride: P,
                src: j,
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
                downloadContentType: eu,
                getPlaybackBlockedMessage: es,
                progressClassName: eo,
                pauseOnLostVisibility: ec = !1,
                persistTimeline: ed = !1,
                persistGrabber: em = !0,
                autoFocus: ef = !1,
                autoHideVolumeSlider: eh = !1,
                timelineIndicatorConfig: ep,
                loadingSpinnerPosition: ex = "top-left",
                crossOrigin: eE = "anonymous",
                objectFit: eb = "contain",
            } = e,
            ev = P ?? j,
            eg = es ?? S.u,
            { focused: ey, focusedChanged: eS } = (0, y.A7)(),
            { visible: eC, visibleChanged: eA, targetRef: eN } = (0, y.O7)(),
            [eR, ew] = l.useState(C ? o.Q6.PLAYING : o.Q6.PAUSED),
            [eT, eL] = l.useState(!1),
            [eP, ej] = l.useState(!1),
            [eD, eM] = l.useState(0),
            [ek, eI] = l.useState(null),
            eB = l.useCallback((e) => {
                eI(null), eM(e);
            }, []),
            [eU, eG] = l.useState(!1),
            e$ = l.useRef(null),
            [eO, eQ] = l.useState(o.h$.LOADING),
            eF = l.useRef(!1),
            e_ = l.useRef(null),
            [eY, eK] = l.useState([]),
            [eX, ez] = l.useState(!1),
            eV = l.useRef(!1),
            [eW, eH] = l.useState(!1),
            eJ = l.useRef(!0),
            eZ = l.useRef(null),
            eq = l.useRef(null),
            e0 = l.useRef(0);
        l.useLayoutEffect(() => {
            e0.current = performance.now();
        }, []);
        let [e1, e6] = l.useState(K),
            [e2, e4] = l.useState(X),
            [e9, e8] = l.useState(!1),
            [e7, e3] = l.useState(!1),
            [e5, te] = l.useState(!1),
            tt = (0, s.bG)([f.A], () => f.A.useReducedMotion),
            tn = (0, l.useRef)(null),
            tr = (0, l.useRef)(null),
            tl = l.useRef(!0),
            [ta, ti] = l.useState(null),
            tu = l.useCallback(
                (e, t) => {
                    B?.(e, t);
                },
                [B],
            ),
            { isHlsActive: ts } = (0, x.Ay)(tn, { src: ev, initialTimeSec: M, onError: tu, onHlsInstance: er }),
            [to, tc] = l.useState(null),
            [td, tm] = l.useState(0),
            [tf, th] = l.useState(!1),
            tp = U ?? tn.current?.duration ?? 0,
            [tx, tE] = l.useState(o.oA.MD),
            tb = { [o.oA.MD]: 56, [o.oA.LG]: 64 };
        (0, m.u5)(() => {
            tl.current && (tl.current = !1);
        });
        let tv = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((ew(e), Q?.(e, t), null != tn.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            ti(null), tn.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (eV.current = !1), tn.current.pause(), (eJ.current = !1);
                            break;
                        case o.Q6.ENDED:
                            e8(!1);
                    }
            },
            [Q],
        );
        l.useEffect(() => {
            if (!ec) return;
            let e = null != a && (a === d.ip4.HIDDEN || a === d.ip4.EXITING || a === d.ip4.EXITED),
                t = null != a && eA && !eC,
                n = eS && !ey;
            if ((e || t || n) && null != tn.current && eR === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                ti(n), tv(o.Q6.PAUSED, n);
            }
        }, [ec, a, ey, eS, eC, eA, eR, tv]),
            l.useEffect(() => {
                eS && Z?.(ey, eR);
            }, [ey, eS, eR, Z]),
            l.useEffect(() => {
                eA && q?.(eC, eR);
            }, [eC, eA, eR, q]);
        let [tg, ty] = l.useState(!1),
            tS = l.useRef(null),
            tC = l.useRef(0);
        l.useLayoutEffect(() => {
            tC.current = performance.now();
        }, []);
        let tA = l.useCallback(() => {
                null != tS.current && clearTimeout(tS.current),
                    eR !== o.Q6.PLAYING ||
                        (tS.current = setTimeout(
                            () => {
                                eR === o.Q6.PLAYING && ty(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tC.current)),
                        ));
            }, [eR]),
            tN = l.useCallback(() => {
                ty(!1), (tC.current = performance.now()), tA();
            }, [tA]);
        l.useEffect(() => {
            if (eR !== o.Q6.PLAYING) {
                ty(!1), null != tS.current && clearTimeout(tS.current);
                return;
            }
            return (
                tA(),
                () => {
                    null != tS.current && clearTimeout(tS.current);
                }
            );
        }, [eR, tA]),
            l.useEffect(
                () => () => {
                    null != e$.current && clearTimeout(e$.current);
                },
                [],
            );
        let tR = !tg && (eP || eT || eR === o.Q6.ENDED),
            tw = l.useRef(F);
        tw.current = F;
        let tT = l.useCallback(() => {
                let e = (0, p.qf)(tn.current?.parentNode, tn.current);
                null == e || (0, p._U)(e) || (e.removeEventListener(p.Wb, tT), te(!1), tw.current?.(!1), tE(o.oA.MD));
            }, []),
            tL = () => {
                null == tn.current ||
                    (tj(Math.max((e_.current ?? tn.current.currentTime) - 10, 0)),
                    eR === o.Q6.ENDED && tv(o.Q6.PAUSED, o.KB.SEEK));
            },
            tP = () => {
                if (null == tn.current) return;
                let e = Math.min((e_.current ?? tn.current.currentTime) + 10, tp);
                tj(e), eR !== o.Q6.ENDED && e >= tn.current.duration && tv(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = tn.current;
            return () => {
                let t = (0, p.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(p.Wb, tT);
            };
        }, [tT]);
        let tj = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tn.current) return;
                    let n = tn.current.currentTime;
                    (e_.current = e),
                        eI((e / (tn.current.duration ?? 1)) * 100),
                        eG(!0),
                        null != e$.current && clearTimeout(e$.current),
                        (e$.current = setTimeout(() => {
                            eG(!1), (e$.current = null);
                        }, 100)),
                        (eF.current = !0),
                        (tn.current.currentTime = e),
                        t && ee?.(n, e);
                },
                [ee],
            ),
            tD = () => {
                if (null != tn.current)
                    switch (eR) {
                        case o.Q6.ENDED:
                            tj(0), tv(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            ti(o.KB.USER), tv(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tv(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            tM = (e) => {
                tc(e);
            },
            tk = (e) => {
                tc((t) => (t?.id === e.id ? null : t));
            },
            tI = l.useCallback(() => {
                if (null == tn.current || 0 === tn.current.textTracks.length) return;
                let e = tn.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, g.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tM(n)), (n.onexit = () => tk(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == tr.current) return;
            let e = tr.current;
            return (
                e.addEventListener("load", tI),
                () => {
                    null != e && e.removeEventListener("load", tI);
                }
            );
        }, [tI]);
        let tB = (e) => {
                if (null != tn.current) {
                    if (eO === o.h$.BUFFERING) {
                        let e = null != eq.current ? performance.now() - eq.current : null;
                        J?.(e);
                    } else if (eO === o.h$.LOADING) {
                        let e = null != eZ.current ? performance.now() - eZ.current : null;
                        V?.(e);
                    }
                    eQ(o.h$.READY), eR === o.Q6.PLAYING && (eV.current || tv(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            [{ controlBarAnimSpring: tU }, tG] = (0, d.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: w,
                onStart: () => {
                    eH(!1);
                },
                onRest: (e) => {
                    1 === e.value && eH(!0);
                },
            })),
            t$ = (0, l.useRef)(null),
            [{ captionHeightSpring: tO }, tQ] = (0, d.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: w }));
        l.useEffect(
            () => (
                tQ({ captionHeightSpring: e7 && null != to ? (t$.current?.clientHeight ?? 0) : 0, immediate: tt }),
                () => {
                    tO.stop();
                }
            ),
            [e7, tQ, tt, to, tO],
        ),
            l.useEffect(
                () => (
                    tG({ controlBarAnimSpring: tR || eX ? 1 : 0, immediate: tt }),
                    () => {
                        tU.stop();
                    }
                ),
                [tR, tG, tt, eX, tU],
            );
        let tF = eR === o.Q6.ENDED && null != O,
            t_ = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != tn.current && (tj(0), tv(o.Q6.PLAYING, e));
                },
                [tj, tv],
            ),
            tY = l.useRef(null),
            tK = l.useCallback(
                (e) => {
                    tN(), tY.current?.(e.nativeEvent);
                },
                [tN],
            );
        return (0, r.jsx)(d.DUT, {
            className: R.W6,
            "data-fullscreen": e5,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eL(!0), ty(!1), (tC.current = performance.now()), null != tS.current && clearTimeout(tS.current);
            },
            onMouseLeave: () => {
                eL(!1), ty(!1);
            },
            onMouseMove: tN,
            children: (0, r.jsxs)("div", {
                className: i()(R.NS, { [R.DO]: "portrait" === L, [R.r7]: "landscape" === L }),
                tabIndex: -1,
                onKeyDown: tK,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    tF && O?.({ replay: t_ }),
                    (0, r.jsxs)(h.A, {
                        ref: (e) => {
                            (tn.current = e),
                                (eN.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: C,
                        playsInline: !0,
                        mediaLayoutType: e5 ? A.dG.STATIC : A.dG.RESPONSIVE,
                        className: i()({ [R.R]: tF, [R.IR]: !0, [R.FP]: "cover" === eb && !e5 }),
                        controls: !1,
                        poster: D,
                        preload: ea,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != tn.current &&
                                (k?.(tn.current.currentTime, tn.current.duration),
                                eF.current || eB((tn.current.currentTime / tn.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            tv(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE), eQ(o.h$.READY), I?.();
                        },
                        onLoadedData: (e) => {
                            if (eO === o.h$.LOADING) {
                                let e = null != eZ.current ? performance.now() - eZ.current : null;
                                V?.(e), eQ(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tn.current) return;
                            M > 0 && !ts && tj(M, !1), e2 ? (tn.current.volume = 0) : (tn.current.volume = e1);
                            let t = tn.current.duration;
                            t > 0 && isFinite(t) && tm(t), th(!0);
                        },
                        onLoadStart: () => {
                            (eZ.current = performance.now()), z?.();
                        },
                        onPlaying: () => {
                            if (!eJ.current) return;
                            let e = 0 !== N ? N : e0.current,
                                t = performance.now() - e;
                            W?.(t), (eJ.current = !1);
                        },
                        onWaiting: (e) => {
                            (eq.current = performance.now()), H?.(), eQ(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == tn.current) return;
                            let t = [];
                            for (let e = 0; e < tn.current.buffered.length; e++) {
                                let n = tn.current.buffered.start(e),
                                    r = tn.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / tn.current.duration, size: (r - n) / tn.current.duration });
                            }
                            eK(t);
                        },
                        onCanPlay: tB,
                        onCanPlayThrough: tB,
                        onSeeked: () => {
                            (eF.current = !1),
                                (e_.current = null),
                                null != tn.current && eB((tn.current.currentTime / tn.current.duration) * 100);
                        },
                        onAbort: () => tu(o.SB.ABORT),
                        onError: () => tu(o.SB.ERROR),
                        onEmptied: () => tu(o.SB.EMPTIED),
                        onStalled: () => tu(o.SB.STALLED),
                        onClick: (e) => {
                            null != el ? el(e) : tD();
                        },
                        crossOrigin: eE ?? void 0,
                        children: [
                            null != G &&
                                (0, r.jsx)("track", {
                                    ref: tr,
                                    src: G,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !ts &&
                                (0, r.jsx)("source", {
                                    onError: () => tu(o.SB.SOURCE_ERROR),
                                    src: ev,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    eO !== o.h$.READY &&
                        eR === o.Q6.PLAYING &&
                        null != ev &&
                        (0, r.jsx)("span", {
                            className: i()(R.S, { [R.F]: "center" === ex }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(d.y$y, { type: d.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(S.A, {
                        message: eg({ hasVideoAsset: null != ev, playerState: eR, pauseReason: ta }),
                        showOverlay: null == ev,
                    }),
                    null != et &&
                        (0, r.jsx)(u.animated.div, {
                            className: R.MU,
                            style: {
                                opacity: (0, u.to)([tU.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, u.to)([tU.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, u.to)([tU.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: et(),
                        }),
                    null != en &&
                        (0, r.jsx)("div", {
                            className: R.MU,
                            children: en({ playerState: eR, isControlBarExpanded: tR }),
                        }),
                    e9 &&
                        eR !== o.Q6.ENDED &&
                        null != $ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.DUT, {
                                    onClick: () => {
                                        eR === o.Q6.PAUSED && tv(o.Q6.PLAYING, o.KB.USER), e8(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: R.BG }),
                                }),
                                (0, r.jsx)(u.animated.div, {
                                    className: i()(R.xr, { [R.MZ]: "portrait" === L }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, u.to)([tU, tO], (e, t) => `${e * tb[tx] + t}px`) },
                                    children: (0, r.jsx)(v.X, {
                                        text: $,
                                        onClose: () => {
                                            e8(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(u.animated.div, {
                        className: R.Jp,
                        style: { opacity: (0, u.to)([tU.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(R.yf, { [R.ZH]: eR === o.Q6.PLAYING, [R.v7]: eR === o.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eR === o.Q6.PLAYING
                                    ? (0, r.jsx)(d.udU, { className: R.PK })
                                    : (0, r.jsx)(d.E$n, { className: R.PK }),
                        },
                        eR,
                    ),
                    e7 &&
                        null != to &&
                        !tF &&
                        (0, r.jsx)(u.animated.div, {
                            className: R.o$,
                            ref: t$,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, u.to)(
                                    [tU.to({ range: [0, 1], output: [-20, -tb[tx]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: R.qh,
                                children: to.text,
                            }),
                        }),
                    (0, r.jsxs)(u.animated.div, {
                        className: R.r8,
                        style: { height: (0, u.to)([tU.to({ range: [0, 1], output: [0, tb[tx]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(u.animated.div, {
                                style: {
                                    transform: (0, u.to)(
                                        [tU.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: tR || eX || ed ? void 0 : T,
                                    children: (0, r.jsx)(b.Ay, {
                                        percent: null != ek ? ek : eD,
                                        animate: !0 !== tl.current && !eU && eR === o.Q6.PLAYING && tf,
                                        interactionEnabled: eW && tp > 0,
                                        backgroundColor: tR || ed ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eR,
                                        preloadedBuffers: tR ? eY : void 0,
                                        durationSec: td > 0 ? td : +!tf,
                                        isFullyVisible: tR && eW,
                                        maxSeekableTime: null != U && tp > 0 ? tp : void 0,
                                        progressClassName: eo,
                                        persistGrabber: em,
                                        onClick: (e) => {
                                            if ((tj(e), eR === o.Q6.ENDED)) {
                                                let t = tn.current?.duration;
                                                (null == t || Number.isNaN(t) || e < t) && tv(o.Q6.PLAYING, o.KB.USER);
                                            }
                                        },
                                        onScrubBack: tL,
                                        onScrubForward: tP,
                                        onDragStateChange: (e) => {
                                            if ((ez(e), e))
                                                (eV.current = eR === o.Q6.PLAYING), eV.current && tn.current?.pause();
                                            else if (eV.current) {
                                                eV.current = !1;
                                                let e = tn.current;
                                                null != e && !Number.isNaN(e.duration) && e.currentTime >= e.duration
                                                    ? tv(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE)
                                                    : e?.play();
                                            }
                                        },
                                        indicatorConfig: ep,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: R.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, u.to)(
                                        [tU.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 20}px`,
                                    ),
                                    paddingBottom: (0, u.to)(
                                        [tU.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, u.to)([tU.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => ej(!0),
                                onBlur: () => ej(!1),
                                children: (0, r.jsx)(E.A, {
                                    videoRef: tn,
                                    playerState: eR,
                                    animSpring: tU,
                                    visible: tR,
                                    seekForwardEnabled: null == U || (tn.current?.currentTime ?? 0) + 1 < tp,
                                    hideCaptionBtn: null == G,
                                    hideTranscriptBtn: null == $,
                                    hideSkipButtons: "portrait" === L,
                                    size: tx,
                                    downloadUrl: ei,
                                    downloadContentType: eu,
                                    autoFocus: ef,
                                    keyDownHandlerRef: tY,
                                    volume: e1,
                                    muted: e2,
                                    transcriptEnabled: e9,
                                    captionEnabled: e7,
                                    fullScreenEnabled: e5,
                                    handlePlaybackBtnClick: tD,
                                    handleTranscriptBtnClick: () => {
                                        e8(!e9);
                                    },
                                    handleCaptionBtnClick: () => {
                                        e3(!e7);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !e5,
                                            t = (0, p.qf)(tn.current?.parentNode, tn.current);
                                        e && null != t
                                            ? ((0, p.tl)(t), t.addEventListener(p.Wb, tT), F?.(!0), tE(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(p.Wb, tT), F?.(!1), (0, p.sP)(t), tE(o.oA.MD)),
                                            te(e);
                                    },
                                    handleSeekBackBtnClick: tL,
                                    handleSeekForwardBtnClick: tP,
                                    autoHideVolumeSlider: eh,
                                    handleControlBarPendingInteraction: ez,
                                    onVolumeChange: (e) => {
                                        e6(e), _?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        e4(e), Y?.(e);
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
    let { poster: t, posterPlaceholder: n, posterPlaceholderVersion: a, orientation: i, objectFit: u = "contain" } = e,
        [s, o] = l.useState(!1),
        d = l.useCallback(() => o(!0), []);
    return null == t
        ? null
        : (0, r.jsx)(c.y, {
              readyState: s ? C.Rv1.READY : C.Rv1.LOADING,
              aspectRatio: "portrait" === i ? 9 / 16 : 16 / 9,
              placeholder: n,
              placeholderVersion: a ?? 1,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              disableSpinner: !0,
              children: (0, r.jsx)("img", { src: t, className: R.zH, style: { objectFit: u }, alt: "", onLoad: d }),
          });
}
let j = l.forwardRef(function (e, t) {
    let { active: n = !0, onClick: a, ...u } = e,
        {
            autoplay: s,
            poster: c,
            orientation: m = "landscape",
            posterPlaceholder: f,
            posterPlaceholderVersion: h,
            renderOverlay: p,
            renderPersistentOverlay: x,
            objectFit: E,
        } = u,
        [b, v] = l.useState(!1),
        g = l.useCallback(
            (e) => {
                null != a ? a(e) : v(!0);
            },
            [a],
        ),
        y = l.useRef(null);
    return n || b
        ? (0, r.jsx)(L, { ...u, onClick: a, autoplay: s || b, ref: t })
        : (0, r.jsx)(d.DUT, {
              className: i()(R.W6, R.nZ),
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: g,
              "aria-label": N.intl.string(N.t.RscU7I),
              focusProps: { ringTarget: y },
              children: (0, r.jsxs)("div", {
                  className: i()(R.NS, { [R.DO]: "portrait" === m, [R.r7]: "landscape" === m }),
                  children: [
                      (0, r.jsx)(P, {
                          poster: c,
                          posterPlaceholder: f,
                          posterPlaceholderVersion: h,
                          orientation: m,
                          objectFit: E,
                      }),
                      null != p && (0, r.jsx)("div", { className: R.MU, children: p() }),
                      null != x &&
                          (0, r.jsx)("div", {
                              className: R.MU,
                              children: x({ playerState: o.Q6.PAUSED, isControlBarExpanded: !0 }),
                          }),
                      (0, r.jsx)("div", {
                          className: R.mF,
                          ref: y,
                          children: (0, r.jsx)(d.udU, { size: "xs", color: "currentColor", className: R.z_ }),
                      }),
                  ],
              }),
          });
});
