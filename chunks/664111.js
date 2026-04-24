n.r(t), n.d(t, { default: () => G }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(419354),
    u = n(17928),
    o = n(876230),
    c = n(966697),
    d = n(231723),
    m = n(717421),
    f = n(939249),
    h = n(289873),
    p = n(782134),
    E = n(113494),
    v = n(834730),
    x = n(964486),
    b = n(775602),
    g = n(607470),
    y = n(475815),
    S = n(662903),
    C = n(671897),
    N = n(275664),
    A = n(408121),
    R = n(984212),
    L = n(739416),
    w = n(931853),
    T = n(90721),
    P = n(652215),
    D = n(838541),
    M = n(985018),
    j = n(834926);
let k = { tension: 250, friction: 5, clamp: !0 },
    I = { visibility: "hidden" },
    B = l.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: c = "landscape",
                videoUrlOverride: P,
                src: M,
                poster: B,
                initialTimeSec: F = 0,
                onProgressUpdate: G,
                onEnded: U,
                onError: O,
                maxSeekableTimeSec: Q,
                captionTrackUrl: _,
                transcriptText: K,
                renderEndScreen: $,
                onPlayerStateChange: Y,
                onFullscreenChange: X,
                onVolumeChange: z,
                onMutedChange: V,
                initialVolume: W = 0.3,
                initialMuted: H = !1,
                onLoadStart: Z,
                onLoadEnd: J,
                onFirstFrame: q,
                onBufferingStart: ee,
                onBufferingEnd: et,
                onFocusChange: en,
                onVisibilityChange: er,
                onSeek: el,
                renderOverlay: ea,
                renderPersistentOverlay: ei,
                transcriptClassName: es,
                onHlsInstance: eu,
                onClick: eo,
                preload: ec,
                downloadUrl: ed,
                downloadContentType: em,
                getPlaybackBlockedMessage: ef,
                progressClassName: eh,
                pauseOnLostVisibility: ep = !1,
                persistTimeline: eE = !1,
                persistPlayhead: ev = !0,
                autoFocus: ex = !1,
                autoHideVolumeSlider: eb = !1,
                timelineIndicatorConfig: eg,
                loadingSpinnerPosition: ey = "top-left",
                crossOrigin: eS = "anonymous",
                withVideoHalo: eC = !1,
                objectFit: eN = "contain",
            } = e,
            eA = P ?? M,
            eR = ef ?? w.u,
            { focused: eL, focusedChanged: ew } = (0, L.A7)(),
            { visible: eT, visibleChanged: eP, targetRef: eD } = (0, L.O7)(),
            [eM, ej] = l.useState(a ? o.Q6.PLAYING : o.Q6.PAUSED),
            [ek, eI] = l.useState(!1),
            [eB, eF] = l.useState(!1),
            [eG, eU] = l.useState(0),
            [eO, eQ] = l.useState(null),
            e_ = l.useCallback((e) => {
                eQ(null), eU(e);
            }, []),
            [eK, e$] = l.useState(!1),
            eY = l.useRef(null),
            [eX, ez] = l.useState(o.h$.LOADING),
            eV = l.useRef(!1),
            eW = l.useRef(null),
            [eH, eZ] = l.useState([]),
            [eJ, eq] = l.useState(!1),
            e0 = l.useRef(!1),
            e1 = l.useRef(!1),
            e6 = l.useRef(!1),
            e2 = l.useRef(!1),
            [e9, e4] = l.useState(!0),
            e8 = l.useRef(!0),
            e7 = l.useRef(null),
            e3 = l.useRef(null),
            [e5, te] = l.useState(W),
            [tt, tn] = l.useState(H),
            [tr, tl] = l.useState(!1),
            [ta, ti] = l.useState(!1),
            [ts, tu] = l.useState(!1),
            to = (0, u.bG)([b.A], () => b.A.useReducedMotion),
            tc = (0, l.useRef)(null),
            td = (0, l.useRef)(null),
            tm = (0, l.useRef)(null),
            tf = l.useRef(!0),
            [th, tp] = l.useState(null),
            tE = l.useCallback(() => tc.current?.currentTime ?? null, []);
        (0, T.A)({ videoRef: tc, canvasRef: td, enabled: eC && !to, canvasWidth: 32, canvasHeight: 18 });
        let tv = l.useCallback(
                (e, t) => {
                    O?.(e, t);
                },
                [O],
            ),
            { isHlsActive: tx } = (0, S.Ay)(tc, { src: eA, initialTimeSec: F, onError: tv, onHlsInstance: eu }),
            [tb, tg] = l.useState(null),
            [ty, tS] = l.useState(0),
            [tC, tN] = l.useState(!1),
            tA = Q ?? tc.current?.duration ?? 0,
            [tR, tL] = l.useState(o.oA.MD),
            tw = { [o.oA.MD]: 56, [o.oA.LG]: 64 };
        (0, x.u5)(() => {
            tf.current && (tf.current = !1);
        });
        let tT = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((e2.current = !0), ej(e), Y?.(e, t), null != tc.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            tp(null), tc.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (e0.current = !1), tc.current.pause(), (e8.current = !1);
                            break;
                        case o.Q6.ENDED:
                            tl(!1);
                    }
            },
            [Y],
        );
        l.useEffect(() => {
            if (!ep) return;
            let e = null != n && (n === d.ip.HIDDEN || n === d.ip.EXITING || n === d.ip.EXITED),
                t = null != n && eP && !eT,
                r = ew && !eL;
            if ((e || t || r) && null != tc.current && eM === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                tp(n), tT(o.Q6.PAUSED, n);
            }
        }, [ep, n, eL, ew, eT, eP, eM, tT]),
            l.useEffect(() => {
                ew && en?.(eL, eM);
            }, [eL, ew, eM, en]),
            l.useEffect(() => {
                eP && er?.(eT, eM);
            }, [eT, eP, eM, er]);
        let [tP, tD] = l.useState(!1),
            tM = l.useRef(null),
            tj = l.useRef(0);
        l.useLayoutEffect(() => {
            tj.current = performance.now();
        }, []);
        let tk = l.useCallback(() => {
                null != tM.current && clearTimeout(tM.current),
                    eM !== o.Q6.PLAYING ||
                        (tM.current = setTimeout(
                            () => {
                                eM === o.Q6.PLAYING && tD(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tj.current)),
                        ));
            }, [eM]),
            tI = l.useCallback(() => {
                tD(!1), (tj.current = performance.now()), tk();
            }, [tk]);
        l.useEffect(() => {
            if (eM !== o.Q6.PLAYING) {
                tD(!1), null != tM.current && clearTimeout(tM.current);
                return;
            }
            return (
                tk(),
                () => {
                    null != tM.current && clearTimeout(tM.current);
                }
            );
        }, [eM, tk]),
            l.useEffect(
                () => () => {
                    null != eY.current && clearTimeout(eY.current);
                },
                [],
            );
        let tB = !tP && (eB || ek || eM === o.Q6.ENDED),
            tF = l.useRef(X);
        tF.current = X;
        let tG = l.useCallback(() => {
                let e = (0, y.qf)(tc.current?.parentNode, tc.current);
                null == e || (0, y._U)(e) || (e.removeEventListener(y.Wb, tG), tu(!1), tF.current?.(!1), tL(o.oA.MD));
            }, []),
            tU = () => {
                null == tc.current ||
                    (tQ(Math.max((eW.current ?? tc.current.currentTime) - 10, 0)),
                    eM === o.Q6.ENDED && tT(o.Q6.PAUSED, o.KB.SEEK));
            },
            tO = () => {
                if (null == tc.current) return;
                let e = Math.min((eW.current ?? tc.current.currentTime) + 10, tA);
                tQ(e), eM !== o.Q6.ENDED && e >= tc.current.duration && tT(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = tc.current;
            return () => {
                let t = (0, y.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(y.Wb, tG);
            };
        }, [tG]);
        let tQ = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tc.current) return;
                    let n = tc.current.currentTime;
                    (eW.current = e),
                        eQ((e / (tc.current.duration ?? 1)) * 100),
                        e$(!0),
                        null != eY.current && clearTimeout(eY.current),
                        (eY.current = setTimeout(() => {
                            e$(!1), (eY.current = null);
                        }, 100)),
                        (eV.current = !0),
                        (tc.current.currentTime = e),
                        t && el?.(n, e);
                },
                [el],
            ),
            t_ = () => {
                if (null != tc.current)
                    switch (eM) {
                        case o.Q6.ENDED:
                            tQ(0), tT(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            tp(o.KB.USER), tT(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tT(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            tK = (e) => {
                tg(e);
            },
            t$ = (e) => {
                tg((t) => (t?.id === e.id ? null : t));
            },
            tY = l.useCallback(() => {
                if (null == tc.current || 0 === tc.current.textTracks.length) return;
                let e = tc.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, R.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tK(n)), (n.onexit = () => t$(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == tm.current) return;
            let e = tm.current;
            return (
                e.addEventListener("load", tY),
                () => {
                    null != e && e.removeEventListener("load", tY);
                }
            );
        }, [tY]);
        let tX = (e) => {
                if (null != tc.current) {
                    if (eX === o.h$.BUFFERING) {
                        let e = null != e3.current ? performance.now() - e3.current : null;
                        et?.(e);
                    } else if (eX === o.h$.LOADING) {
                        let e = null != e7.current ? performance.now() - e7.current : null;
                        J?.(e);
                    }
                    ez(o.h$.READY), eM === o.Q6.PLAYING && (e0.current || tT(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            tz = (e) => {
                if ((tQ(e), eM === o.Q6.ENDED && !e1.current)) {
                    let t = tc.current?.duration;
                    (null == t || Number.isNaN(t) || e < t) && tT(o.Q6.PLAYING, o.KB.USER);
                }
            },
            [{ controlBarAnimSpring: tV }, tW] = (0, m.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: k,
                onStart: () => {
                    e4(!1);
                },
                onRest: (e) => {
                    1 === e.value && e4(!0);
                },
            })),
            tH = (0, l.useRef)(null),
            [{ captionHeightSpring: tZ }, tJ] = (0, m.z)(() => ({ from: { captionHeightSpring: 0 }, config: k }));
        l.useEffect(
            () => (
                tJ({ captionHeightSpring: ta && null != tb ? (tH.current?.clientHeight ?? 0) : 0, immediate: to }),
                () => {
                    tZ.stop();
                }
            ),
            [ta, tJ, to, tb, tZ],
        ),
            l.useEffect(
                () => (
                    tW({ controlBarAnimSpring: tB || eJ ? 1 : 0, immediate: to }),
                    () => {
                        tV.stop();
                    }
                ),
                [tB, tW, to, eJ, tV],
            );
        let tq = eM === o.Q6.ENDED && null != $,
            t0 = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != tc.current && (tQ(0), tT(o.Q6.PLAYING, e));
                },
                [tQ, tT],
            ),
            t1 = l.useRef(null),
            t6 = l.useCallback(
                (e) => {
                    tI(), t1.current?.(e.nativeEvent);
                },
                [tI],
            );
        return (0, r.jsx)(f.D, {
            className: j.W6,
            "data-fullscreen": ts,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eI(!0), tD(!1), (tj.current = performance.now()), null != tM.current && clearTimeout(tM.current);
            },
            onMouseLeave: () => {
                eI(!1), tD(!1);
            },
            onMouseMove: tI,
            children: (0, r.jsxs)("div", {
                className: i()(j.NS, { [j.DO]: "portrait" === c, [j.r7]: "landscape" === c }),
                tabIndex: -1,
                onKeyDown: t6,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    eC && !to && (0, r.jsx)("canvas", { ref: td, className: j.Xm }),
                    tq && $?.({ replay: t0 }),
                    (0, r.jsxs)(g.A, {
                        ref: (e) => {
                            (tc.current = e),
                                (eD.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: a,
                        playsInline: !0,
                        mediaLayoutType: ts ? D.dG.STATIC : D.dG.RESPONSIVE,
                        className: i()({ [j.R]: tq, [j.IR]: !0, [j.FP]: "cover" === eN && !ts }),
                        controls: !1,
                        poster: B,
                        preload: ec,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != tc.current &&
                                (G?.(tc.current.currentTime, tc.current.duration),
                                eV.current || e_((tc.current.currentTime / tc.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            ez(o.h$.READY), U?.(), e1.current || tT(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                        },
                        onLoadedData: (e) => {
                            if (eX === o.h$.LOADING) {
                                let e = null != e7.current ? performance.now() - e7.current : null;
                                J?.(e), ez(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tc.current) return;
                            F > 0 && !tx && tQ(F, !1), tt ? (tc.current.volume = 0) : (tc.current.volume = e5);
                            let t = tc.current.duration;
                            t > 0 && isFinite(t) && tS(t), tN(!0);
                        },
                        onLoadStart: () => {
                            (e7.current = performance.now()), Z?.();
                        },
                        onPlaying: () => {
                            e8.current && (q?.(performance.now()), (e8.current = !1));
                        },
                        onWaiting: (e) => {
                            (e3.current = performance.now()), ee?.(), ez(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == tc.current) return;
                            let t = [];
                            for (let e = 0; e < tc.current.buffered.length; e++) {
                                let n = tc.current.buffered.start(e),
                                    r = tc.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / tc.current.duration, size: (r - n) / tc.current.duration });
                            }
                            eZ(t);
                        },
                        onCanPlay: tX,
                        onCanPlayThrough: tX,
                        onSeeked: () => {
                            (eV.current = !1),
                                (eW.current = null),
                                null != tc.current && e_((tc.current.currentTime / tc.current.duration) * 100);
                        },
                        onAbort: () => tv(o.SB.ABORT),
                        onError: () => tv(o.SB.ERROR),
                        onEmptied: () => tv(o.SB.EMPTIED),
                        onStalled: () => tv(o.SB.STALLED),
                        onClick: (e) => {
                            null != eo ? eo(e) : t_();
                        },
                        crossOrigin: eS ?? void 0,
                        children: [
                            null != _ &&
                                (0, r.jsx)("track", {
                                    ref: tm,
                                    src: _,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !tx &&
                                (0, r.jsx)("source", {
                                    onError: () => tv(o.SB.SOURCE_ERROR),
                                    src: eA,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    eX !== o.h$.READY &&
                        eM === o.Q6.PLAYING &&
                        null != eA &&
                        (0, r.jsx)("span", {
                            className: i()(j.S, { [j.F]: "center" === ey }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(w.A, {
                        message: eR({ hasVideoAsset: null != eA, playerState: eM, pauseReason: th }),
                        showOverlay: null == eA,
                    }),
                    null != ea &&
                        (0, r.jsx)(s.animated.div, {
                            className: j.MU,
                            style: {
                                opacity: (0, s.to)([tV.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, s.to)([tV.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, s.to)([tV.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: ea(),
                        }),
                    null != ei &&
                        (0, r.jsx)("div", {
                            className: j.MU,
                            children: ei({ playerState: eM, isControlBarExpanded: tB }),
                        }),
                    tr &&
                        eM !== o.Q6.ENDED &&
                        null != K &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(f.D, {
                                    onClick: () => {
                                        eM === o.Q6.PAUSED && tT(o.Q6.PLAYING, o.KB.USER), tl(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: j.BG }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: i()(j.xr, es, { [j.MZ]: "portrait" === c }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, s.to)([tV, tZ], (e, t) => `${e * tw[tR] + t}px`) },
                                    children: (0, r.jsx)(A.X, {
                                        text: K,
                                        onClose: () => {
                                            tl(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: j.Jp,
                        style: { opacity: (0, s.to)([tV.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(j.yf, {
                                [j.ZH]: e2.current && eM === o.Q6.PLAYING,
                                [j.v7]: e2.current && eM === o.Q6.PAUSED,
                            }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eM === o.Q6.PLAYING
                                    ? (0, r.jsx)(p.u, { className: j.PK })
                                    : (0, r.jsx)(E.E, { className: j.PK }),
                        },
                        eM,
                    ),
                    ta &&
                        null != tb &&
                        !tq &&
                        (0, r.jsx)(s.animated.div, {
                            className: j.o$,
                            ref: tH,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, s.to)(
                                    [tV.to({ range: [0, 1], output: [-20, -tw[tR]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(v.E, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: j.qh,
                                children: tb.text,
                            }),
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: j.r8,
                        style: { height: (0, s.to)([tV.to({ range: [0, 1], output: [0, tw[tR]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(s.animated.div, {
                                style: {
                                    transform: (0, s.to)(
                                        [tV.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: tB || eJ || eE ? void 0 : I,
                                    children: (0, r.jsx)(N.Ay, {
                                        percent: null != eO ? eO : eG,
                                        animate:
                                            !0 !== tf.current && !eK && eM === o.Q6.PLAYING && tC && eX === o.h$.READY,
                                        interactionEnabled: e9 && tA > 0,
                                        backgroundColor: tB || eE ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eM,
                                        preloadedBuffers: tB ? eH : void 0,
                                        durationSec: ty > 0 ? ty : +!tC,
                                        isFullyVisible: tB && e9,
                                        maxSeekableTime: null != Q && tA > 0 ? tA : void 0,
                                        progressClassName: eh,
                                        persistPlayhead: ev,
                                        onClick: tz,
                                        onScrubBack: tU,
                                        onScrubForward: tO,
                                        onDragStateChange: (e) => {
                                            if (((e1.current = e), eq(e), e))
                                                (e0.current = eM === o.Q6.PLAYING),
                                                    (e6.current = eM === o.Q6.ENDED),
                                                    e0.current
                                                        ? tc.current?.pause()
                                                        : e6.current && tT(o.Q6.PAUSED, o.KB.SEEK);
                                            else {
                                                let e = tc.current,
                                                    t =
                                                        null != e &&
                                                        !Number.isNaN(e.duration) &&
                                                        e.currentTime >= e.duration;
                                                e0.current
                                                    ? ((e0.current = !1),
                                                      t ? tT(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE) : e?.play())
                                                    : e6.current
                                                      ? ((e6.current = !1),
                                                        t
                                                            ? tT(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE)
                                                            : tT(o.Q6.PLAYING, o.KB.USER))
                                                      : t && tT(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                                            }
                                        },
                                        indicatorConfig: eg,
                                        onIndicatorSeek: tz,
                                        getCurrentTimeSec: tE,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: j.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, s.to)(
                                        [tV.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 20}px`,
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [tV.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, s.to)([tV.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => eF(!0),
                                onBlur: () => eF(!1),
                                children: (0, r.jsx)(C.A, {
                                    videoRef: tc,
                                    playerState: eM,
                                    animSpring: tV,
                                    visible: tB,
                                    seekForwardEnabled: null == Q || (tc.current?.currentTime ?? 0) + 1 < tA,
                                    hideCaptionBtn: null == _,
                                    hideTranscriptBtn: null == K,
                                    hideSkipButtons: "portrait" === c,
                                    size: tR,
                                    downloadUrl: ed,
                                    downloadContentType: em,
                                    autoFocus: ex,
                                    keyDownHandlerRef: t1,
                                    volume: e5,
                                    muted: tt,
                                    transcriptEnabled: tr,
                                    captionEnabled: ta,
                                    fullScreenEnabled: ts,
                                    handlePlaybackBtnClick: t_,
                                    handleTranscriptBtnClick: () => {
                                        tl(!tr);
                                    },
                                    handleCaptionBtnClick: () => {
                                        ti(!ta);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !ts,
                                            t = (0, y.qf)(tc.current?.parentNode, tc.current);
                                        e && null != t
                                            ? ((0, y.tl)(t), t.addEventListener(y.Wb, tG), X?.(!0), tL(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(y.Wb, tG), X?.(!1), (0, y.sP)(t), tL(o.oA.MD)),
                                            tu(e);
                                    },
                                    handleSeekBackBtnClick: tU,
                                    handleSeekForwardBtnClick: tO,
                                    autoHideVolumeSlider: eb,
                                    handleControlBarPendingInteraction: eq,
                                    onVolumeChange: (e) => {
                                        te(e), z?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        tn(e), V?.(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
function F(e) {
    let { poster: t, posterPlaceholder: n, posterPlaceholderVersion: a, orientation: i, objectFit: s = "contain" } = e,
        [u, o] = l.useState(!1),
        d = l.useCallback(() => o(!0), []);
    return null == t
        ? null
        : (0, r.jsx)(c.y, {
              readyState: u ? P.Rv1.READY : P.Rv1.LOADING,
              aspectRatio: "portrait" === i ? 9 / 16 : 16 / 9,
              placeholder: n,
              placeholderVersion: a ?? 1,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              disableSpinner: !0,
              children: (0, r.jsx)("img", { src: t, className: j.zH, style: { objectFit: s }, alt: "", onLoad: d }),
          });
}
let G = l.forwardRef(function (e, t) {
    let { active: n = !0, onClick: a, ...s } = e,
        {
            autoplay: u,
            poster: c,
            orientation: d = "landscape",
            posterPlaceholder: m,
            posterPlaceholderVersion: h,
            renderOverlay: E,
            renderPersistentOverlay: v,
            objectFit: x,
        } = s,
        [b, g] = l.useState(!1),
        y = l.useCallback(
            (e) => {
                null != a ? a(e) : g(!0);
            },
            [a],
        ),
        S = l.useRef(null);
    return n || b
        ? (0, r.jsx)(B, { ...s, onClick: a, autoplay: u || b, ref: t })
        : (0, r.jsx)(f.D, {
              className: i()(j.W6, j.nZ),
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: y,
              "aria-label": M.intl.string(M.t.RscU7I),
              focusProps: { ringTarget: S },
              children: (0, r.jsxs)("div", {
                  className: i()(j.NS, { [j.DO]: "portrait" === d, [j.r7]: "landscape" === d }),
                  children: [
                      (0, r.jsx)(F, {
                          poster: c,
                          posterPlaceholder: m,
                          posterPlaceholderVersion: h,
                          orientation: d,
                          objectFit: x,
                      }),
                      null != E && (0, r.jsx)("div", { className: j.MU, children: E() }),
                      null != v &&
                          (0, r.jsx)("div", {
                              className: j.MU,
                              children: v({ playerState: o.Q6.PAUSED, isControlBarExpanded: !0 }),
                          }),
                      (0, r.jsx)("div", {
                          className: j.mF,
                          ref: S,
                          children: (0, r.jsx)(p.u, { size: "xs", color: "currentColor", className: j.z_ }),
                      }),
                  ],
              }),
          });
});
