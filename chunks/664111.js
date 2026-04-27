n.r(t), n.d(t, { default: () => U }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    u = n(487514),
    s = n(17928),
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
    S = n(718499),
    C = n(801209),
    N = n(671897),
    A = n(275664),
    R = n(408121),
    L = n(984212),
    w = n(739416),
    T = n(931853),
    P = n(90721),
    D = n(652215),
    M = n(838541),
    k = n(985018),
    j = n(834926);
let I = { tension: 250, friction: 5, clamp: !0 },
    B = { visibility: "hidden" },
    F = l.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: c = "landscape",
                videoUrlOverride: D,
                src: k,
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
                onVolumeChange: V,
                onMutedChange: W,
                initialVolume: H = 0.3,
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
                getPlaybackBlockedMessage: eh,
                progressClassName: ep,
                pauseOnLostVisibility: eE = !1,
                persistTimeline: ev = !1,
                persistPlayhead: ex = !0,
                autoFocus: eb = !1,
                autoHideVolumeSlider: eg = !1,
                timelineIndicatorConfig: ey,
                loadingSpinnerPosition: eS = "top-left",
                crossOrigin: eC = "anonymous",
                withVideoHalo: eN = !1,
                objectFit: eA = "contain",
                muxContentMetadata: eR,
                awaitMuxReady: eL = !1,
            } = e,
            ew = D ?? k,
            eT = eh ?? T.u,
            { focused: eP, focusedChanged: eD } = (0, w.A7)(),
            { visible: eM, visibleChanged: ek, targetRef: ej } = (0, w.O7)(),
            [eI, eB] = l.useState(a ? o.Q6.PLAYING : o.Q6.PAUSED),
            [eF, eG] = l.useState(!1),
            [eU, eO] = l.useState(!1),
            [eQ, eK] = l.useState(0),
            [e_, e$] = l.useState(null),
            eY = l.useCallback((e) => {
                e$(null), eK(e);
            }, []),
            [eX, ez] = l.useState(!1),
            eV = l.useRef(null),
            [eW, eH] = l.useState(o.h$.LOADING),
            eZ = l.useRef(!1),
            eJ = l.useRef(null),
            [eq, e0] = l.useState([]),
            [e1, e6] = l.useState(!1),
            e2 = l.useRef(!1),
            e9 = l.useRef(!1),
            e4 = l.useRef(!1),
            e8 = l.useRef(!1),
            [e7, e3] = l.useState(!0),
            e5 = l.useRef(!0),
            te = l.useRef(null),
            tt = l.useRef(null),
            [tn, tr] = l.useState(H),
            [tl, ta] = l.useState(Z),
            [ti, tu] = l.useState(!1),
            [ts, to] = l.useState(!1),
            [tc, td] = l.useState(!1),
            tm = (0, s.bG)([b.A], () => b.A.useReducedMotion),
            tf = (0, l.useRef)(null),
            th = (0, l.useRef)(null),
            tp = (0, l.useRef)(null),
            tE = l.useRef(!0),
            [tv, tx] = l.useState(null),
            tb = l.useCallback(() => tf.current?.currentTime ?? null, []);
        (0, P.A)({ videoRef: tf, canvasRef: th, enabled: eN && !tm, canvasWidth: 32, canvasHeight: 18 });
        let tg = l.useCallback(
                (e, t) => {
                    Q?.(e, t);
                },
                [Q],
            ),
            { isHlsActive: ty, hlsRef: tS } = (0, S.Ay)(tf, {
                src: ew,
                initialTimeSec: G,
                onError: tg,
                onHlsInstance: eo,
                crossOrigin: eC,
            }),
            { isReady: tC } = (0, C.A)({ videoRef: tf, hlsRef: tS, contentMetadata: eR, isHls: ty }),
            tN = eL && !tC && !ty,
            [tA, tR] = l.useState(null),
            [tL, tw] = l.useState(0),
            [tT, tP] = l.useState(!1),
            tD = K ?? tf.current?.duration ?? 0,
            [tM, tk] = l.useState(o.oA.MD),
            tj = { [o.oA.MD]: 56, [o.oA.LG]: 64 };
        (0, x.u5)(() => {
            tE.current && (tE.current = !1);
        });
        let tI = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((e8.current = !0), eB(e), X?.(e, t), null != tf.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            tx(null), tf.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (e2.current = !1), tf.current.pause(), (e5.current = !1);
                            break;
                        case o.Q6.ENDED:
                            tu(!1);
                    }
            },
            [X],
        );
        l.useEffect(() => {
            if (!eE) return;
            let e = null != n && (n === d.ip.HIDDEN || n === d.ip.EXITING || n === d.ip.EXITED),
                t = null != n && ek && !eM,
                r = eD && !eP;
            if ((e || t || r) && null != tf.current && eI === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                tx(n), tI(o.Q6.PAUSED, n);
            }
        }, [eE, n, eP, eD, eM, ek, eI, tI]),
            l.useEffect(() => {
                eD && er?.(eP, eI);
            }, [eP, eD, eI, er]),
            l.useEffect(() => {
                ek && el?.(eM, eI);
            }, [eM, ek, eI, el]);
        let [tB, tF] = l.useState(!1),
            tG = l.useRef(null),
            tU = l.useRef(0);
        l.useLayoutEffect(() => {
            tU.current = performance.now();
        }, []);
        let tO = l.useCallback(() => {
                null != tG.current && clearTimeout(tG.current),
                    eI !== o.Q6.PLAYING ||
                        (tG.current = setTimeout(
                            () => {
                                eI === o.Q6.PLAYING && tF(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tU.current)),
                        ));
            }, [eI]),
            tQ = l.useCallback(() => {
                tF(!1), (tU.current = performance.now()), tO();
            }, [tO]);
        l.useEffect(() => {
            if (eI !== o.Q6.PLAYING) {
                tF(!1), null != tG.current && clearTimeout(tG.current);
                return;
            }
            return (
                tO(),
                () => {
                    null != tG.current && clearTimeout(tG.current);
                }
            );
        }, [eI, tO]),
            l.useEffect(
                () => () => {
                    null != eV.current && clearTimeout(eV.current);
                },
                [],
            );
        let tK = !tB && (eU || eF || eI === o.Q6.ENDED),
            t_ = l.useRef(z);
        t_.current = z;
        let t$ = l.useCallback(() => {
                let e = (0, y.qf)(tf.current?.parentNode, tf.current);
                null == e || (0, y._U)(e) || (e.removeEventListener(y.Wb, t$), td(!1), t_.current?.(!1), tk(o.oA.MD));
            }, []),
            tY = () => {
                null == tf.current ||
                    (tz(Math.max((eJ.current ?? tf.current.currentTime) - 10, 0)),
                    eI === o.Q6.ENDED && tI(o.Q6.PAUSED, o.KB.SEEK));
            },
            tX = () => {
                if (null == tf.current) return;
                let e = Math.min((eJ.current ?? tf.current.currentTime) + 10, tD);
                tz(e), eI !== o.Q6.ENDED && e >= tf.current.duration && tI(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = tf.current;
            return () => {
                let t = (0, y.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(y.Wb, t$);
            };
        }, [t$]);
        let tz = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tf.current) return;
                    let n = tf.current.currentTime;
                    (eJ.current = e),
                        e$((e / (tf.current.duration ?? 1)) * 100),
                        ez(!0),
                        null != eV.current && clearTimeout(eV.current),
                        (eV.current = setTimeout(() => {
                            ez(!1), (eV.current = null);
                        }, 100)),
                        (eZ.current = !0),
                        (tf.current.currentTime = e),
                        t && ea?.(n, e);
                },
                [ea],
            ),
            tV = () => {
                if (null != tf.current)
                    switch (eI) {
                        case o.Q6.ENDED:
                            tz(0), tI(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            tx(o.KB.USER), tI(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tI(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            tW = (e) => {
                tR(e);
            },
            tH = (e) => {
                tR((t) => (t?.id === e.id ? null : t));
            },
            tZ = l.useCallback(() => {
                if (null == tf.current || 0 === tf.current.textTracks.length) return;
                let e = tf.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, L.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tW(n)), (n.onexit = () => tH(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == tp.current) return;
            let e = tp.current;
            return (
                e.addEventListener("load", tZ),
                () => {
                    null != e && e.removeEventListener("load", tZ);
                }
            );
        }, [tZ]);
        let tJ = (e) => {
                if (null != tf.current) {
                    if (eW === o.h$.BUFFERING) {
                        let e = null != tt.current ? performance.now() - tt.current : null;
                        en?.(e);
                    } else if (eW === o.h$.LOADING) {
                        let e = null != te.current ? performance.now() - te.current : null;
                        q?.(e);
                    }
                    eH(o.h$.READY), eI === o.Q6.PLAYING && (e2.current || tI(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            tq = (e) => {
                if ((tz(e), eI === o.Q6.ENDED && !e9.current)) {
                    let t = tf.current?.duration;
                    (null == t || Number.isNaN(t) || e < t) && tI(o.Q6.PLAYING, o.KB.USER);
                }
            },
            [{ controlBarAnimSpring: t0 }, t1] = (0, m.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: I,
                onStart: () => {
                    e3(!1);
                },
                onRest: (e) => {
                    1 === e.value && e3(!0);
                },
            })),
            t6 = (0, l.useRef)(null),
            [{ captionHeightSpring: t2 }, t9] = (0, m.z)(() => ({ from: { captionHeightSpring: 0 }, config: I }));
        l.useEffect(
            () => (
                t9({ captionHeightSpring: ts && null != tA ? (t6.current?.clientHeight ?? 0) : 0, immediate: tm }),
                () => {
                    t2.stop();
                }
            ),
            [ts, t9, tm, tA, t2],
        ),
            l.useEffect(
                () => (
                    t1({ controlBarAnimSpring: tK || e1 ? 1 : 0, immediate: tm }),
                    () => {
                        t0.stop();
                    }
                ),
                [tK, t1, tm, e1, t0],
            );
        let t4 = eI === o.Q6.ENDED && null != Y,
            t8 = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != tf.current && (tz(0), tI(o.Q6.PLAYING, e));
                },
                [tz, tI],
            ),
            t7 = l.useRef(null),
            t3 = l.useCallback(
                (e) => {
                    tQ(), t7.current?.(e.nativeEvent);
                },
                [tQ],
            );
        return (0, r.jsx)(f.D, {
            className: j.W6,
            "data-fullscreen": tc,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eG(!0), tF(!1), (tU.current = performance.now()), null != tG.current && clearTimeout(tG.current);
            },
            onMouseLeave: () => {
                eG(!1), tF(!1);
            },
            onMouseMove: tQ,
            children: (0, r.jsxs)("div", {
                className: i()(j.NS, { [j.DO]: "portrait" === c, [j.r7]: "landscape" === c }),
                tabIndex: -1,
                onKeyDown: t3,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    eN && !tm && (0, r.jsx)("canvas", { ref: th, className: j.Xm }),
                    t4 && Y?.({ replay: t8 }),
                    (0, r.jsxs)(g.A, {
                        ref: (e) => {
                            (tf.current = e),
                                (ej.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: a,
                        playsInline: !0,
                        mediaLayoutType: tc ? M.dG.STATIC : M.dG.RESPONSIVE,
                        className: i()({ [j.R]: t4, [j.IR]: !0, [j.FP]: "cover" === eA && !tc }),
                        controls: !1,
                        poster: F,
                        preload: ed,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != tf.current &&
                                (U?.(tf.current.currentTime, tf.current.duration),
                                eZ.current || eY((tf.current.currentTime / tf.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            eH(o.h$.READY), O?.(), e9.current || tI(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                        },
                        onLoadedData: (e) => {
                            if (eW === o.h$.LOADING) {
                                let e = null != te.current ? performance.now() - te.current : null;
                                q?.(e), eH(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tf.current) return;
                            G > 0 && !ty && tz(G, !1), tl ? (tf.current.volume = 0) : (tf.current.volume = tn);
                            let t = tf.current.duration;
                            t > 0 && isFinite(t) && tw(t), tP(!0);
                        },
                        onLoadStart: () => {
                            (te.current = performance.now()), J?.();
                        },
                        onPlaying: () => {
                            e5.current && (ee?.(performance.now()), (e5.current = !1));
                        },
                        onWaiting: (e) => {
                            (tt.current = performance.now()), et?.(), eH(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == tf.current) return;
                            let t = [];
                            for (let e = 0; e < tf.current.buffered.length; e++) {
                                let n = tf.current.buffered.start(e),
                                    r = tf.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / tf.current.duration, size: (r - n) / tf.current.duration });
                            }
                            e0(t);
                        },
                        onCanPlay: tJ,
                        onCanPlayThrough: tJ,
                        onSeeked: () => {
                            (eZ.current = !1),
                                (eJ.current = null),
                                null != tf.current && eY((tf.current.currentTime / tf.current.duration) * 100);
                        },
                        onAbort: () => tg(o.SB.ABORT),
                        onError: () => tg(o.SB.ERROR),
                        onEmptied: () => tg(o.SB.EMPTIED),
                        onStalled: () => tg(o.SB.STALLED),
                        onClick: (e) => {
                            null != ec ? ec(e) : tV();
                        },
                        crossOrigin: eC ?? void 0,
                        children: [
                            null != _ &&
                                (0, r.jsx)("track", {
                                    ref: tp,
                                    src: _,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !ty &&
                                !tN &&
                                (0, r.jsx)("source", {
                                    onError: () => tg(o.SB.SOURCE_ERROR),
                                    src: ew,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    eW !== o.h$.READY &&
                        eI === o.Q6.PLAYING &&
                        null != ew &&
                        (0, r.jsx)("span", {
                            className: i()(j.S, { [j.F]: "center" === eS }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(T.A, {
                        message: eT({ hasVideoAsset: null != ew, playerState: eI, pauseReason: tv }),
                        showOverlay: null == ew,
                    }),
                    null != ei &&
                        (0, r.jsx)(u.animated.div, {
                            className: j.MU,
                            style: {
                                opacity: (0, u.to)([t0.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, u.to)([t0.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, u.to)([t0.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: ei(),
                        }),
                    null != eu &&
                        (0, r.jsx)("div", {
                            className: j.MU,
                            children: eu({ playerState: eI, isControlBarExpanded: tK }),
                        }),
                    ti &&
                        eI !== o.Q6.ENDED &&
                        null != $ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(f.D, {
                                    onClick: () => {
                                        eI === o.Q6.PAUSED && tI(o.Q6.PLAYING, o.KB.USER), tu(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: j.BG }),
                                }),
                                (0, r.jsx)(u.animated.div, {
                                    className: i()(j.xr, es, { [j.MZ]: "portrait" === c }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, u.to)([t0, t2], (e, t) => `${e * tj[tM] + t}px`) },
                                    children: (0, r.jsx)(R.X, {
                                        text: $,
                                        onClose: () => {
                                            tu(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(u.animated.div, {
                        className: j.Jp,
                        style: { opacity: (0, u.to)([t0.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(j.yf, {
                                [j.ZH]: e8.current && eI === o.Q6.PLAYING,
                                [j.v7]: e8.current && eI === o.Q6.PAUSED,
                            }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eI === o.Q6.PLAYING
                                    ? (0, r.jsx)(p.u, { className: j.PK })
                                    : (0, r.jsx)(E.E, { className: j.PK }),
                        },
                        eI,
                    ),
                    ts &&
                        null != tA &&
                        !t4 &&
                        (0, r.jsx)(u.animated.div, {
                            className: j.o$,
                            ref: t6,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, u.to)(
                                    [t0.to({ range: [0, 1], output: [-20, -tj[tM]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(v.E, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: j.qh,
                                children: tA.text,
                            }),
                        }),
                    (0, r.jsxs)(u.animated.div, {
                        className: j.r8,
                        style: { height: (0, u.to)([t0.to({ range: [0, 1], output: [0, tj[tM]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(u.animated.div, {
                                style: {
                                    transform: (0, u.to)(
                                        [t0.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: tK || e1 || ev ? void 0 : B,
                                    children: (0, r.jsx)(A.Ay, {
                                        percent: null != e_ ? e_ : eQ,
                                        animate:
                                            !0 !== tE.current && !eX && eI === o.Q6.PLAYING && tT && eW === o.h$.READY,
                                        interactionEnabled: e7 && tD > 0,
                                        backgroundColor: tK || ev ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eI,
                                        preloadedBuffers: tK ? eq : void 0,
                                        durationSec: tL > 0 ? tL : +!tT,
                                        isFullyVisible: tK && e7,
                                        maxSeekableTime: null != K && tD > 0 ? tD : void 0,
                                        progressClassName: ep,
                                        persistPlayhead: ex,
                                        onClick: tq,
                                        onScrubBack: tY,
                                        onScrubForward: tX,
                                        onDragStateChange: (e) => {
                                            if (((e9.current = e), e6(e), e))
                                                (e2.current = eI === o.Q6.PLAYING),
                                                    (e4.current = eI === o.Q6.ENDED),
                                                    e2.current
                                                        ? tf.current?.pause()
                                                        : e4.current && tI(o.Q6.PAUSED, o.KB.SEEK);
                                            else {
                                                let e = tf.current,
                                                    t =
                                                        null != e &&
                                                        !Number.isNaN(e.duration) &&
                                                        e.currentTime >= e.duration;
                                                e2.current
                                                    ? ((e2.current = !1),
                                                      t ? tI(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE) : e?.play())
                                                    : e4.current
                                                      ? ((e4.current = !1),
                                                        t
                                                            ? tI(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE)
                                                            : tI(o.Q6.PLAYING, o.KB.USER))
                                                      : t && tI(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                                            }
                                        },
                                        indicatorConfig: ey,
                                        onIndicatorSeek: tq,
                                        getCurrentTimeSec: tb,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: j.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, u.to)(
                                        [t0.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 20}px`,
                                    ),
                                    paddingBottom: (0, u.to)(
                                        [t0.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, u.to)([t0.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => eO(!0),
                                onBlur: () => eO(!1),
                                children: (0, r.jsx)(N.A, {
                                    videoRef: tf,
                                    playerState: eI,
                                    animSpring: t0,
                                    visible: tK,
                                    seekForwardEnabled: null == K || (tf.current?.currentTime ?? 0) + 1 < tD,
                                    hideCaptionBtn: null == _,
                                    hideTranscriptBtn: null == $,
                                    hideSkipButtons: "portrait" === c,
                                    size: tM,
                                    downloadUrl: em,
                                    downloadContentType: ef,
                                    autoFocus: eb,
                                    keyDownHandlerRef: t7,
                                    volume: tn,
                                    muted: tl,
                                    transcriptEnabled: ti,
                                    captionEnabled: ts,
                                    fullScreenEnabled: tc,
                                    handlePlaybackBtnClick: tV,
                                    handleTranscriptBtnClick: () => {
                                        tu(!ti);
                                    },
                                    handleCaptionBtnClick: () => {
                                        to(!ts);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !tc,
                                            t = (0, y.qf)(tf.current?.parentNode, tf.current);
                                        e && null != t
                                            ? ((0, y.tl)(t), t.addEventListener(y.Wb, t$), z?.(!0), tk(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(y.Wb, t$), z?.(!1), (0, y.sP)(t), tk(o.oA.MD)),
                                            td(e);
                                    },
                                    handleSeekBackBtnClick: tY,
                                    handleSeekForwardBtnClick: tX,
                                    autoHideVolumeSlider: eg,
                                    handleControlBarPendingInteraction: e6,
                                    onVolumeChange: (e) => {
                                        tr(e), V?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        ta(e), W?.(e);
                                    },
                                }),
                            }),
                        ],
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
              readyState: s ? D.Rv1.READY : D.Rv1.LOADING,
              aspectRatio: "portrait" === i ? 9 / 16 : 16 / 9,
              placeholder: n,
              placeholderVersion: a ?? 1,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              disableSpinner: !0,
              children: (0, r.jsx)("img", { src: t, className: j.zH, style: { objectFit: u }, alt: "", onLoad: d }),
          });
}
let U = l.forwardRef(function (e, t) {
    let { active: n = !0, onClick: a, ...u } = e,
        {
            autoplay: s,
            poster: c,
            orientation: d = "landscape",
            posterPlaceholder: m,
            posterPlaceholderVersion: h,
            renderOverlay: E,
            renderPersistentOverlay: v,
            objectFit: x,
        } = u,
        [b, g] = l.useState(!1),
        y = l.useCallback(
            (e) => {
                null != a ? a(e) : g(!0);
            },
            [a],
        ),
        S = l.useRef(null);
    return n || b
        ? (0, r.jsx)(F, { ...u, onClick: a, autoplay: s || b, ref: t })
        : (0, r.jsx)(f.D, {
              className: i()(j.W6, j.nZ),
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: y,
              "aria-label": k.intl.string(k.t.RscU7I),
              focusProps: { ringTarget: S },
              children: (0, r.jsxs)("div", {
                  className: i()(j.NS, { [j.DO]: "portrait" === d, [j.r7]: "landscape" === d }),
                  children: [
                      (0, r.jsx)(G, {
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
