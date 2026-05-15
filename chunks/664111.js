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
    v = n(834730),
    E = n(964486),
    g = n(775602),
    b = n(607470),
    y = n(475815),
    S = n(718499),
    C = n(23590),
    N = n(671897),
    A = n(275664),
    R = n(408121),
    w = n(984212),
    L = n(739416),
    P = n(931853),
    T = n(90721),
    D = n(652215),
    j = n(838541),
    M = n(375708),
    k = n(834926);
let I = { tension: 250, friction: 5, clamp: !0 },
    B = { visibility: "hidden" },
    F = l.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: c = "landscape",
                videoUrlOverride: D,
                src: M,
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
                hideSkipButtons: ex,
                compactDurationTime: ev = !1,
                getPlaybackBlockedMessage: eE,
                progressClassName: eg,
                pauseOnLostVisibility: eb = !1,
                persistTimeline: ey = !1,
                persistPlayhead: eS = !0,
                autoFocus: eC = !1,
                autoHideVolumeSlider: eN = !1,
                timelineIndicatorConfig: eA,
                loadingSpinnerPosition: eR = "top-left",
                crossOrigin: ew = "anonymous",
                withVideoHalo: eL = !1,
                objectFit: eP = "contain",
                muxContentMetadata: eT,
                awaitMuxReady: eD = !1,
            } = e,
            ej = D ?? M,
            eM = eE ?? P.u,
            { focused: ek, focusedChanged: eI } = (0, L.A7)(),
            { visible: eB, visibleChanged: eF, targetRef: eG } = (0, L.O7)(),
            [eU, eO] = l.useState(a ? o.Q6.PLAYING : o.Q6.PAUSED),
            [eQ, eK] = l.useState(!1),
            [e_, e$] = l.useState(!1),
            [eY, eX] = l.useState(0),
            [ez, eW] = l.useState(null),
            eH = l.useCallback((e) => {
                eW(null), eX(e);
            }, []),
            [eV, eZ] = l.useState(!1),
            eJ = l.useRef(null),
            [eq, e0] = l.useState(o.h$.LOADING),
            e1 = l.useRef(!1),
            e6 = l.useRef(null),
            [e2, e4] = l.useState([]),
            [e9, e8] = l.useState(!1),
            e7 = l.useRef(!1),
            e3 = l.useRef(!1),
            e5 = l.useRef(!1),
            te = l.useRef(!1),
            [tt, tn] = l.useState(!0),
            tr = l.useRef(!0),
            tl = l.useRef(null),
            ta = l.useRef(null),
            [ti, tu] = l.useState(V),
            [ts, to] = l.useState(Z),
            [tc, td] = l.useState(!1),
            [tm, tf] = l.useState(!1),
            [tp, th] = l.useState(!1),
            tx = (0, s.bG)([g.A], () => g.A.useReducedMotion),
            tv = (0, l.useRef)(null),
            tE = (0, l.useRef)(null),
            tg = (0, l.useRef)(null),
            tb = l.useRef(!0),
            [ty, tS] = l.useState(null),
            tC = l.useCallback(() => tv.current?.currentTime ?? null, []);
        (0, T.A)({ videoRef: tv, canvasRef: tE, enabled: eL && !tx, canvasWidth: 32, canvasHeight: 18 });
        let tN = l.useCallback(
                (e, t) => {
                    Q?.(e, t);
                },
                [Q],
            ),
            { isHlsActive: tA, hlsRef: tR } = (0, S.Ay)(tv, {
                src: ej,
                initialTimeSec: G,
                onError: tN,
                onHlsInstance: eo,
                crossOrigin: ew,
            }),
            { isReady: tw } = (0, C.A)({ videoRef: tv, hlsRef: tR, contentMetadata: eT, isHls: tA }),
            tL = eD && !tw && !tA,
            [tP, tT] = l.useState(null),
            [tD, tj] = l.useState(0),
            [tM, tk] = l.useState(!1),
            tI = K ?? tv.current?.duration ?? 0,
            [tB, tF] = l.useState(o.oA.MD),
            tG = { [o.oA.MD]: 56, [o.oA.LG]: 64 };
        (0, E.u5)(() => {
            tb.current && (tb.current = !1);
        });
        let tU = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((te.current = !0), eO(e), X?.(e, t), null != tv.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            tS(null), tv.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (e7.current = !1), tv.current.pause(), (tr.current = !1);
                            break;
                        case o.Q6.ENDED:
                            td(!1);
                    }
            },
            [X],
        );
        l.useEffect(() => {
            if (!eb) return;
            let e = null != n && (n === d.ip.HIDDEN || n === d.ip.EXITING || n === d.ip.EXITED),
                t = null != n && eF && !eB,
                r = eI && !ek;
            if ((e || t || r) && null != tv.current && eU === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                tS(n), tU(o.Q6.PAUSED, n);
            }
        }, [eb, n, ek, eI, eB, eF, eU, tU]),
            l.useEffect(() => {
                eI && er?.(ek, eU);
            }, [ek, eI, eU, er]),
            l.useEffect(() => {
                eF && el?.(eB, eU);
            }, [eB, eF, eU, el]);
        let [tO, tQ] = l.useState(!1),
            tK = l.useRef(null),
            t_ = l.useRef(0);
        l.useLayoutEffect(() => {
            t_.current = performance.now();
        }, []);
        let t$ = l.useCallback(() => {
                null != tK.current && clearTimeout(tK.current),
                    eU !== o.Q6.PLAYING ||
                        (tK.current = setTimeout(
                            () => {
                                eU === o.Q6.PLAYING && tQ(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - t_.current)),
                        ));
            }, [eU]),
            tY = l.useCallback(() => {
                tQ(!1), (t_.current = performance.now()), t$();
            }, [t$]);
        l.useEffect(() => {
            if (eU !== o.Q6.PLAYING) {
                tQ(!1), null != tK.current && clearTimeout(tK.current);
                return;
            }
            return (
                t$(),
                () => {
                    null != tK.current && clearTimeout(tK.current);
                }
            );
        }, [eU, t$]),
            l.useEffect(
                () => () => {
                    null != eJ.current && clearTimeout(eJ.current);
                },
                [],
            );
        let tX = !tO && (e_ || eQ || eU === o.Q6.ENDED),
            tz = l.useRef(z);
        tz.current = z;
        let tW = l.useCallback(() => {
                let e = (0, y.qf)(tv.current?.parentNode, tv.current);
                null == e || (0, y._U)(e) || (e.removeEventListener(y.Wb, tW), th(!1), tz.current?.(!1), tF(o.oA.MD));
            }, []),
            tH = () => {
                null == tv.current ||
                    (tZ(Math.max((e6.current ?? tv.current.currentTime) - 10, 0)),
                    eU === o.Q6.ENDED && tU(o.Q6.PAUSED, o.KB.SEEK));
            },
            tV = () => {
                if (null == tv.current) return;
                let e = Math.min((e6.current ?? tv.current.currentTime) + 10, tI);
                tZ(e), eU !== o.Q6.ENDED && e >= tv.current.duration && tU(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = tv.current;
            return () => {
                let t = (0, y.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(y.Wb, tW);
            };
        }, [tW]);
        let tZ = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tv.current) return;
                    let n = tv.current.currentTime;
                    (e6.current = e),
                        eW((e / (tv.current.duration ?? 1)) * 100),
                        eZ(!0),
                        null != eJ.current && clearTimeout(eJ.current),
                        (eJ.current = setTimeout(() => {
                            eZ(!1), (eJ.current = null);
                        }, 100)),
                        (e1.current = !0),
                        (tv.current.currentTime = e),
                        t && ea?.(n, e);
                },
                [ea],
            ),
            tJ = () => {
                if (null != tv.current)
                    switch (eU) {
                        case o.Q6.ENDED:
                            tZ(0), tU(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            tS(o.KB.USER), tU(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tU(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            tq = (e) => {
                tT(e);
            },
            t0 = (e) => {
                tT((t) => (t?.id === e.id ? null : t));
            },
            t1 = l.useCallback(() => {
                if (null == tv.current || 0 === tv.current.textTracks.length) return;
                let e = tv.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, w.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tq(n)), (n.onexit = () => t0(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == tg.current) return;
            let e = tg.current;
            return (
                e.addEventListener("load", t1),
                () => {
                    null != e && e.removeEventListener("load", t1);
                }
            );
        }, [t1]);
        let t6 = (e) => {
                if (null != tv.current) {
                    if (eq === o.h$.BUFFERING) {
                        let e = null != ta.current ? performance.now() - ta.current : null;
                        en?.(e);
                    } else if (eq === o.h$.LOADING) {
                        let e = null != tl.current ? performance.now() - tl.current : null;
                        q?.(e);
                    }
                    e0(o.h$.READY), eU === o.Q6.PLAYING && (e7.current || tU(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            t2 = (e) => {
                if ((tZ(e), eU === o.Q6.ENDED && !e3.current)) {
                    let t = tv.current?.duration;
                    (null == t || Number.isNaN(t) || e < t) && tU(o.Q6.PLAYING, o.KB.USER);
                }
            },
            [{ controlBarAnimSpring: t4 }, t9] = (0, m.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: I,
                onStart: () => {
                    tn(!1);
                },
                onRest: () => {
                    tn(!0);
                },
            })),
            t8 = (0, l.useRef)(null),
            [{ captionHeightSpring: t7 }, t3] = (0, m.z)(() => ({ from: { captionHeightSpring: 0 }, config: I }));
        l.useEffect(
            () => (
                t3({ captionHeightSpring: tm && null != tP ? (t8.current?.clientHeight ?? 0) : 0, immediate: tx }),
                () => {
                    t7.stop();
                }
            ),
            [tm, t3, tx, tP, t7],
        ),
            l.useEffect(
                () => (
                    t9({ controlBarAnimSpring: tX || e9 ? 1 : 0, immediate: tx }),
                    () => {
                        t4.stop();
                    }
                ),
                [tX, t9, tx, e9, t4],
            );
        let t5 = eU === o.Q6.ENDED && null != Y,
            ne = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != tv.current && (tZ(0), tU(o.Q6.PLAYING, e));
                },
                [tZ, tU],
            ),
            nt = l.useRef(null),
            nn = l.useCallback(
                (e) => {
                    tY(), nt.current?.(e.nativeEvent);
                },
                [tY],
            );
        return (0, r.jsx)(f.D, {
            className: k.W6,
            "data-fullscreen": tp,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eK(!0), tQ(!1), (t_.current = performance.now()), null != tK.current && clearTimeout(tK.current);
            },
            onMouseLeave: () => {
                eK(!1), tQ(!1);
            },
            onMouseMove: tY,
            children: (0, r.jsxs)("div", {
                className: i()(k.NS, { [k.DO]: "portrait" === c, [k.r7]: "landscape" === c }),
                tabIndex: -1,
                onKeyDown: nn,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    eL && !tx && (0, r.jsx)("canvas", { ref: tE, className: k.Xm }),
                    t5 && Y?.({ replay: ne }),
                    (0, r.jsxs)(b.A, {
                        ref: (e) => {
                            (tv.current = e),
                                (eG.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: a,
                        playsInline: !0,
                        mediaLayoutType: tp ? j.dG.STATIC : j.dG.RESPONSIVE,
                        className: i()({ [k.R]: t5, [k.IR]: !0, [k.FP]: "cover" === eP && !tp }),
                        controls: !1,
                        poster: F,
                        preload: ed,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != tv.current &&
                                (U?.(tv.current.currentTime, tv.current.duration),
                                e1.current || eH((tv.current.currentTime / tv.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            e0(o.h$.READY), O?.(), e3.current || tU(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                        },
                        onLoadedData: (e) => {
                            if (eq === o.h$.LOADING) {
                                let e = null != tl.current ? performance.now() - tl.current : null;
                                q?.(e), e0(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tv.current) return;
                            G > 0 && !tA && tZ(G, !1), ts ? (tv.current.volume = 0) : (tv.current.volume = ti);
                            let t = tv.current.duration;
                            t > 0 && isFinite(t) && tj(t), tk(!0);
                        },
                        onLoadStart: () => {
                            (tl.current = performance.now()), J?.();
                        },
                        onPlaying: () => {
                            tr.current && (ee?.(performance.now()), (tr.current = !1));
                        },
                        onWaiting: (e) => {
                            (ta.current = performance.now()), et?.(), e0(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == tv.current) return;
                            let t = [];
                            for (let e = 0; e < tv.current.buffered.length; e++) {
                                let n = tv.current.buffered.start(e),
                                    r = tv.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / tv.current.duration, size: (r - n) / tv.current.duration });
                            }
                            e4(t);
                        },
                        onCanPlay: t6,
                        onCanPlayThrough: t6,
                        onSeeked: () => {
                            (e1.current = !1),
                                (e6.current = null),
                                null != tv.current && eH((tv.current.currentTime / tv.current.duration) * 100);
                        },
                        onAbort: () => tN(o.SB.ABORT),
                        onError: () => tN(o.SB.ERROR),
                        onEmptied: () => tN(o.SB.EMPTIED),
                        onStalled: () => tN(o.SB.STALLED),
                        onClick: (e) => {
                            null != ec ? ec(e) : tJ();
                        },
                        crossOrigin: ew ?? void 0,
                        children: [
                            null != _ &&
                                (0, r.jsx)("track", {
                                    ref: tg,
                                    src: _,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !tA &&
                                !tL &&
                                (0, r.jsx)("source", {
                                    onError: () => tN(o.SB.SOURCE_ERROR),
                                    src: ej,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    eq !== o.h$.READY &&
                        eU === o.Q6.PLAYING &&
                        null != ej &&
                        (0, r.jsx)("span", {
                            className: i()(k.S, { [k.F]: "center" === eR }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(p.y, { type: p.y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(P.A, {
                        message: eM({ hasVideoAsset: null != ej, playerState: eU, pauseReason: ty }),
                        showOverlay: null == ej,
                    }),
                    null != ei &&
                        (0, r.jsx)(u.animated.div, {
                            className: k.MU,
                            style: {
                                opacity: (0, u.to)([t4.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, u.to)([t4.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, u.to)([t4.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: ei(),
                        }),
                    tc &&
                        eU !== o.Q6.ENDED &&
                        null != $ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(f.D, {
                                    onClick: () => {
                                        eU === o.Q6.PAUSED && tU(o.Q6.PLAYING, o.KB.USER), td(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: k.BG }),
                                }),
                                (0, r.jsx)(u.animated.div, {
                                    className: i()(k.xr, es, { [k.MZ]: "portrait" === c }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, u.to)([t4, t7], (e, t) => `${e * tG[tB] + t}px`) },
                                    children: (0, r.jsx)(R.X, {
                                        text: $,
                                        onClose: () => {
                                            td(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(u.animated.div, {
                        className: k.Jp,
                        style: { opacity: (0, u.to)([t4.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(k.yf, {
                                [k.ZH]: te.current && eU === o.Q6.PLAYING,
                                [k.v7]: te.current && eU === o.Q6.PAUSED,
                            }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eU === o.Q6.PLAYING
                                    ? (0, r.jsx)(h.u, { className: k.PK })
                                    : (0, r.jsx)(x.E, { className: k.PK }),
                        },
                        eU,
                    ),
                    tm &&
                        null != tP &&
                        !t5 &&
                        (0, r.jsx)(u.animated.div, {
                            className: k.o$,
                            ref: t8,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, u.to)(
                                    [t4.to({ range: [0, 1], output: [-20, -tG[tB]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(v.E, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: k.qh,
                                children: tP.text,
                            }),
                        }),
                    (0, r.jsxs)(u.animated.div, {
                        className: k.r8,
                        style: { height: (0, u.to)([t4.to({ range: [0, 1], output: [0, tG[tB]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(u.animated.div, {
                                style: {
                                    transform: (0, u.to)(
                                        [t4.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: tX || e9 || ey ? void 0 : B,
                                    children: (0, r.jsx)(A.Ay, {
                                        percent: null != ez ? ez : eY,
                                        animate:
                                            !0 !== tb.current && !eV && eU === o.Q6.PLAYING && tM && eq === o.h$.READY,
                                        interactionEnabled: tt && tI > 0,
                                        backgroundColor: tX || ey ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eU,
                                        preloadedBuffers: tX ? e2 : void 0,
                                        durationSec: tD > 0 ? tD : +!tM,
                                        isFullyVisible: tX && tt,
                                        maxSeekableTime: null != K && tI > 0 ? tI : void 0,
                                        progressClassName: eg,
                                        persistPlayhead: eS,
                                        onClick: t2,
                                        onScrubBack: tH,
                                        onScrubForward: tV,
                                        onDragStateChange: (e) => {
                                            if (((e3.current = e), e8(e), e))
                                                (e7.current = eU === o.Q6.PLAYING),
                                                    (e5.current = eU === o.Q6.ENDED),
                                                    e7.current
                                                        ? tv.current?.pause()
                                                        : e5.current && tU(o.Q6.PAUSED, o.KB.SEEK);
                                            else {
                                                let e = tv.current,
                                                    t =
                                                        null != e &&
                                                        !Number.isNaN(e.duration) &&
                                                        e.currentTime >= e.duration;
                                                e7.current
                                                    ? ((e7.current = !1),
                                                      t ? tU(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE) : e?.play())
                                                    : e5.current
                                                      ? ((e5.current = !1),
                                                        t
                                                            ? tU(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE)
                                                            : tU(o.Q6.PLAYING, o.KB.USER))
                                                      : t && tU(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                                            }
                                        },
                                        indicatorConfig: eA,
                                        onIndicatorSeek: t2,
                                        getCurrentTimeSec: tC,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: k.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, u.to)(
                                        [t4.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 20}px`,
                                    ),
                                    paddingBottom: (0, u.to)(
                                        [t4.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, u.to)([t4.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => e$(!0),
                                onBlur: () => e$(!1),
                                children: (0, r.jsx)(N.A, {
                                    videoRef: tv,
                                    playerState: eU,
                                    animSpring: t4,
                                    visible: tX,
                                    seekForwardEnabled: null == K || (tv.current?.currentTime ?? 0) + 1 < tI,
                                    hideCaptionBtn: null == _,
                                    hideTranscriptBtn: null == $,
                                    hideFullScreenBtn: eh ?? !1,
                                    hideSkipButtons: ex ?? "portrait" === c,
                                    compactDurationTime: ev,
                                    size: tB,
                                    downloadUrl: em,
                                    downloadContentType: ef,
                                    extraButtons: ep,
                                    autoFocus: eC,
                                    keyDownHandlerRef: nt,
                                    volume: ti,
                                    muted: ts,
                                    transcriptEnabled: tc,
                                    captionEnabled: tm,
                                    fullScreenEnabled: tp,
                                    handlePlaybackBtnClick: tJ,
                                    handleTranscriptBtnClick: () => {
                                        td(!tc);
                                    },
                                    handleCaptionBtnClick: () => {
                                        tf(!tm);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !tp,
                                            t = (0, y.qf)(tv.current?.parentNode, tv.current);
                                        e && null != t
                                            ? ((0, y.tl)(t), t.addEventListener(y.Wb, tW), z?.(!0), tF(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(y.Wb, tW), z?.(!1), (0, y.sP)(t), tF(o.oA.MD)),
                                            th(e);
                                    },
                                    handleSeekBackBtnClick: tH,
                                    handleSeekForwardBtnClick: tV,
                                    autoHideVolumeSlider: eN,
                                    handleControlBarPendingInteraction: e8,
                                    onVolumeChange: (e) => {
                                        tu(e), W?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        to(e), H?.(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                    null != eu &&
                        (0, r.jsx)("div", {
                            className: k.MU,
                            children: eu({ playerState: eU, isControlBarExpanded: tX, videoRef: tv, isActive: !0 }),
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
            renderPersistentOverlay: v,
            objectFit: E,
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
              "aria-label": M.intl.string(M.t.RscU7I),
              focusProps: { ringTarget: S },
              children: (0, r.jsxs)("div", {
                  className: i()(k.NS, { [k.DO]: "portrait" === d, [k.r7]: "landscape" === d }),
                  children: [
                      (0, r.jsx)(G, {
                          poster: c,
                          posterPlaceholder: m,
                          posterPlaceholderVersion: p,
                          orientation: d,
                          objectFit: E,
                      }),
                      null != x && (0, r.jsx)("div", { className: k.MU, children: x() }),
                      null != v &&
                          (0, r.jsx)("div", {
                              className: k.MU,
                              children: v({ playerState: o.Q6.PAUSED, isControlBarExpanded: !0, isActive: !1 }),
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
