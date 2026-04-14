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
                onClick: el,
                preload: ea,
                downloadUrl: ei,
                downloadContentType: es,
                getPlaybackBlockedMessage: eu,
                progressGlow: eo,
                progressFillClassName: ec,
                glowClassName: ed,
                pauseOnLostVisibility: em = !1,
                persistTimeline: ef = !1,
                persistGrabber: eh = !0,
                autoFocus: ep = !1,
                timelineIndicatorConfig: ex,
                loadingSpinnerPosition: eE = "top-left",
                crossOrigin: eb = "anonymous",
            } = e,
            ev = j ?? P,
            eg = eu ?? S.u,
            { focused: ey, focusedChanged: eS } = (0, y.A7)(),
            { visible: eC, visibleChanged: eA, targetRef: eN } = (0, y.O7)(),
            [eR, ew] = l.useState(C ? o.Q6.PLAYING : o.Q6.PAUSED),
            [eT, eL] = l.useState(!1),
            [ej, eP] = l.useState(!1),
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
            eW = l.useRef(!1),
            [eV, eH] = l.useState(!1),
            eJ = l.useRef(!0),
            eZ = l.useRef(null),
            eq = l.useRef(null),
            e0 = l.useRef(0);
        l.useLayoutEffect(() => {
            e0.current = performance.now();
        }, []);
        let [e1, e6] = l.useState(K),
            [e2, e9] = l.useState(X),
            [e4, e8] = l.useState(!1),
            [e7, e3] = l.useState(!1),
            [e5, te] = l.useState(!1),
            tt = (0, u.bG)([f.A], () => f.A.useReducedMotion),
            tn = (0, l.useRef)(null),
            tr = (0, l.useRef)(null),
            tl = l.useRef(!0),
            [ta, ti] = l.useState(null),
            ts = l.useCallback(
                (e, t) => {
                    B?.(e, t);
                },
                [B],
            ),
            { isHlsActive: tu } = (0, x.Ay)(tn, { src: ev, initialTimeSec: M, onError: ts, onHlsInstance: er }),
            [to, tc] = l.useState(null),
            [td, tm] = l.useState(0),
            tf = U ?? tn.current?.duration ?? 0,
            [th, tp] = l.useState(o.oA.MD),
            tx = { [o.oA.MD]: 50, [o.oA.LG]: 58 };
        (0, m.u5)(() => {
            tl.current && (tl.current = !1);
        });
        let tE = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((ew(e), Q?.(e, t), null != tn.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            ti(null), tn.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (eW.current = !1), tn.current.pause(), (eJ.current = !1);
                            break;
                        case o.Q6.ENDED:
                            e8(!1);
                    }
            },
            [Q],
        );
        l.useEffect(() => {
            if (!em) return;
            let e = null != a && (a === d.ip4.HIDDEN || a === d.ip4.EXITING || a === d.ip4.EXITED),
                t = null != a && eA && !eC,
                n = eS && !ey;
            if ((e || t || n) && null != tn.current && eR === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                ti(n), tE(o.Q6.PAUSED, n);
            }
        }, [em, a, ey, eS, eC, eA, eR, tE]),
            l.useEffect(() => {
                eS && Z?.(ey, eR);
            }, [ey, eS, eR, Z]),
            l.useEffect(() => {
                eA && q?.(eC, eR);
            }, [eC, eA, eR, q]);
        let [tb, tv] = l.useState(!1),
            tg = l.useRef(null),
            ty = l.useRef(0);
        l.useLayoutEffect(() => {
            ty.current = performance.now();
        }, []);
        let tS = l.useCallback(() => {
                null != tg.current && clearTimeout(tg.current),
                    eR !== o.Q6.PLAYING ||
                        (tg.current = setTimeout(
                            () => {
                                eR === o.Q6.PLAYING && tv(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - ty.current)),
                        ));
            }, [eR]),
            tC = l.useCallback(() => {
                tv(!1), (ty.current = performance.now()), tS();
            }, [tS]);
        l.useEffect(() => {
            if (eR !== o.Q6.PLAYING) {
                tv(!1), null != tg.current && clearTimeout(tg.current);
                return;
            }
            return (
                tS(),
                () => {
                    null != tg.current && clearTimeout(tg.current);
                }
            );
        }, [eR, tS]),
            l.useEffect(
                () => () => {
                    null != e$.current && clearTimeout(e$.current);
                },
                [],
            );
        let tA = !tb && (ej || eT || eR === o.Q6.ENDED),
            tN = l.useRef(F);
        tN.current = F;
        let tR = l.useCallback(() => {
                let e = (0, p.qf)(tn.current?.parentNode, tn.current);
                null == e || (0, p._U)(e) || (e.removeEventListener(p.Wb, tR), te(!1), tN.current?.(!1), tp(o.oA.MD));
            }, []),
            tw = () => {
                null == tn.current ||
                    (tL(Math.max((e_.current ?? tn.current.currentTime) - 10, 0)),
                    eR === o.Q6.ENDED && tE(o.Q6.PAUSED, o.KB.SEEK));
            },
            tT = () => {
                if (null == tn.current) return;
                let e = Math.min((e_.current ?? tn.current.currentTime) + 10, tf);
                tL(e), eR !== o.Q6.ENDED && e >= tn.current.duration && tE(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = tn.current;
            return () => {
                let t = (0, p.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(p.Wb, tR);
            };
        }, [tR]);
        let tL = l.useCallback(
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
            tj = () => {
                if (null != tn.current)
                    switch (eR) {
                        case o.Q6.ENDED:
                            tL(0), tE(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            ti(o.KB.USER), tE(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tE(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            tP = (e) => {
                tc(e);
            },
            tD = (e) => {
                tc((t) => (t?.id === e.id ? null : t));
            },
            tM = l.useCallback(() => {
                if (null == tn.current || 0 === tn.current.textTracks.length) return;
                let e = tn.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, g.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tP(n)), (n.onexit = () => tD(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == tr.current) return;
            let e = tr.current;
            return (
                e.addEventListener("load", tM),
                () => {
                    null != e && e.removeEventListener("load", tM);
                }
            );
        }, [tM]);
        let tk = (e) => {
                if (null != tn.current) {
                    if (eO === o.h$.BUFFERING) {
                        let e = null != eq.current ? performance.now() - eq.current : null;
                        J?.(e);
                    } else if (eO === o.h$.LOADING) {
                        let e = null != eZ.current ? performance.now() - eZ.current : null;
                        W?.(e);
                    }
                    eQ(o.h$.READY), eR === o.Q6.PLAYING && (eW.current || tE(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            [{ controlBarAnimSpring: tI }, tB] = (0, d.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: w,
                onStart: () => {
                    eH(!1);
                },
                onRest: (e) => {
                    1 === e.value && eH(!0);
                },
            })),
            tU = (0, l.useRef)(null),
            [{ captionHeightSpring: tG }, t$] = (0, d.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: w }));
        l.useEffect(
            () => (
                t$({ captionHeightSpring: e7 && null != to ? (tU.current?.clientHeight ?? 0) : 0, immediate: tt }),
                () => {
                    tG.stop();
                }
            ),
            [e7, t$, tt, to, tG],
        ),
            l.useEffect(
                () => (
                    tB({ controlBarAnimSpring: tA || eX ? 1 : 0, immediate: tt }),
                    () => {
                        tI.stop();
                    }
                ),
                [tA, tB, tt, eX, tI],
            );
        let tO = eR === o.Q6.ENDED && null != O,
            tQ = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != tn.current && (tL(0), tE(o.Q6.PLAYING, e));
                },
                [tL, tE],
            ),
            tF = l.useRef(null),
            t_ = l.useCallback(
                (e) => {
                    tC(), tF.current?.(e.nativeEvent);
                },
                [tC],
            );
        return (0, r.jsx)(d.DUT, {
            className: R.W6,
            "data-fullscreen": e5,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eL(!0), tv(!1), (ty.current = performance.now()), null != tg.current && clearTimeout(tg.current);
            },
            onMouseLeave: () => {
                eL(!1), tv(!1);
            },
            onMouseMove: tC,
            children: (0, r.jsxs)("div", {
                className: i()(R.NS, { [R.DO]: "portrait" === L, [R.r7]: "landscape" === L }),
                tabIndex: -1,
                onKeyDown: t_,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    tO && O?.({ replay: tQ }),
                    (0, r.jsxs)(h.A, {
                        ref: (e) => {
                            (tn.current = e),
                                (eN.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: C,
                        playsInline: !0,
                        mediaLayoutType: e5 ? A.dG.STATIC : A.dG.RESPONSIVE,
                        className: i()({ [R.R]: tO, [R.IR]: !0 }),
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
                            tE(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE), eQ(o.h$.READY), I?.();
                        },
                        onLoadedData: (e) => {
                            if (eO === o.h$.LOADING) {
                                let e = null != eZ.current ? performance.now() - eZ.current : null;
                                W?.(e), eQ(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tn.current) return;
                            M > 0 && tL(M, !1), e2 ? (tn.current.volume = 0) : (tn.current.volume = e1);
                            let t = tn.current.duration;
                            t > 0 && isFinite(t) && tm(t);
                        },
                        onLoadStart: () => {
                            (eZ.current = performance.now()), z?.();
                        },
                        onPlaying: () => {
                            if (!eJ.current) return;
                            let e = 0 !== N ? N : e0.current,
                                t = performance.now() - e;
                            V?.(t), (eJ.current = !1);
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
                        onCanPlay: tk,
                        onCanPlayThrough: tk,
                        onSeeked: () => {
                            (eF.current = !1),
                                (e_.current = null),
                                null != tn.current && eB((tn.current.currentTime / tn.current.duration) * 100);
                        },
                        onAbort: () => ts(o.SB.ABORT),
                        onError: () => ts(o.SB.ERROR),
                        onEmptied: () => ts(o.SB.EMPTIED),
                        onStalled: () => ts(o.SB.STALLED),
                        onClick: (e) => {
                            null != el ? el(e) : tj();
                        },
                        crossOrigin: eb ?? void 0,
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
                            !tu &&
                                (0, r.jsx)("source", {
                                    onError: () => ts(o.SB.SOURCE_ERROR),
                                    src: ev,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    eO !== o.h$.READY &&
                        eR === o.Q6.PLAYING &&
                        null != ev &&
                        (0, r.jsx)("span", {
                            className: i()(R.S, { [R.F]: "center" === eE }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(d.y$y, { type: d.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(S.A, {
                        message: eg({ hasVideoAsset: null != ev, playerState: eR, pauseReason: ta }),
                        showOverlay: null == ev,
                    }),
                    null != et &&
                        (0, r.jsx)(s.animated.div, {
                            className: R.MU,
                            style: {
                                opacity: (0, s.to)([tI.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, s.to)([tI.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, s.to)([tI.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: et(),
                        }),
                    null != en &&
                        (0, r.jsx)("div", {
                            className: R.MU,
                            children: en({ playerState: eR, isControlBarExpanded: tA }),
                        }),
                    e4 &&
                        eR !== o.Q6.ENDED &&
                        null != $ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.DUT, {
                                    onClick: () => {
                                        eR === o.Q6.PAUSED && tE(o.Q6.PLAYING, o.KB.USER), e8(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: R.BG }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: i()(R.xr, { [R.MZ]: "portrait" === L }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, s.to)([tI, tG], (e, t) => `${e * tx[th] + t}px`) },
                                    children: (0, r.jsx)(v.X, {
                                        text: $,
                                        onClose: () => {
                                            e8(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: R.Jp,
                        style: { opacity: (0, s.to)([tI.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
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
                        !tO &&
                        (0, r.jsx)(s.animated.div, {
                            className: R.o$,
                            ref: tU,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, s.to)(
                                    [tI.to({ range: [0, 1], output: [-20, -tx[th]] })],
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
                    (0, r.jsxs)(s.animated.div, {
                        className: R.r8,
                        style: { height: (0, s.to)([tI.to({ range: [0, 1], output: [0, tx[th]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(s.animated.div, {
                                style: {
                                    transform: (0, s.to)(
                                        [tI.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: tA || ef ? void 0 : T,
                                    children: (0, r.jsx)(b.Ay, {
                                        percent: null != ek ? ek : eD,
                                        animate: !0 !== tl.current && !eU && eR === o.Q6.PLAYING,
                                        interactionEnabled: eV && tf > 0,
                                        backgroundColor: tA ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eR,
                                        preloadedBuffers: tA ? eY : void 0,
                                        durationSec: td > 0 ? td : 1,
                                        isFullyVisible: tA && eV,
                                        maxSeekableTime: null != U && tf > 0 ? tf : void 0,
                                        progressGlow: eo,
                                        progressFillClassName: ec,
                                        glowClassName: ed,
                                        persistGrabber: eh,
                                        onClick: (e) => {
                                            tL(e), eR === o.Q6.ENDED && tE(o.Q6.PLAYING, o.KB.USER);
                                        },
                                        onScrubBack: tw,
                                        onScrubForward: tT,
                                        onDragStateChange: (e) => {
                                            ez(e),
                                                e
                                                    ? ((eW.current = eR === o.Q6.PLAYING),
                                                      eW.current && tn.current?.pause())
                                                    : eW.current && (tn.current?.play(), (eW.current = !1));
                                        },
                                        indicatorConfig: ex,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: R.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, s.to)(
                                        [tI.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [tI.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, s.to)([tI.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => eP(!0),
                                onBlur: () => eP(!1),
                                children: (0, r.jsx)(E.A, {
                                    videoRef: tn,
                                    playerState: eR,
                                    animSpring: tI,
                                    visible: tA,
                                    seekForwardEnabled: null == U || (tn.current?.currentTime ?? 0) + 1 < tf,
                                    hideCaptionBtn: null == G,
                                    hideTranscriptBtn: null == $,
                                    hideSkipButtons: "portrait" === L,
                                    size: th,
                                    downloadUrl: ei,
                                    downloadContentType: es,
                                    autoFocus: ep,
                                    keyDownHandlerRef: tF,
                                    volume: e1,
                                    muted: e2,
                                    transcriptEnabled: e4,
                                    captionEnabled: e7,
                                    fullScreenEnabled: e5,
                                    handlePlaybackBtnClick: tj,
                                    handleTranscriptBtnClick: () => {
                                        e8(!e4);
                                    },
                                    handleCaptionBtnClick: () => {
                                        e3(!e7);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !e5,
                                            t = (0, p.qf)(tn.current?.parentNode, tn.current);
                                        e && null != t
                                            ? ((0, p.tl)(t), t.addEventListener(p.Wb, tR), F?.(!0), tp(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(p.Wb, tR), F?.(!1), (0, p.sP)(t), tp(o.oA.MD)),
                                            te(e);
                                    },
                                    handleSeekBackBtnClick: tw,
                                    handleSeekForwardBtnClick: tT,
                                    handleControlBarPendingInteraction: ez,
                                    onVolumeChange: (e) => {
                                        e6(e), _?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        e9(e), Y?.(e);
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
