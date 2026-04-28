n.r(t), n.d(t, { default: () => U }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    u = n(519244),
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
    C = n(801209),
    N = n(671897),
    A = n(275664),
    R = n(408121),
    w = n(984212),
    P = n(739416),
    T = n(931853),
    D = n(90721),
    L = n(652215),
    M = n(838541),
    j = n(985018),
    k = n(834926);
let I = { tension: 250, friction: 5, clamp: !0 },
    B = { visibility: "hidden" },
    G = l.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: c = "landscape",
                videoUrlOverride: L,
                src: j,
                poster: G,
                initialTimeSec: F = 0,
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
                onMutedChange: V,
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
                extraButtons: ep,
                getPlaybackBlockedMessage: eh,
                progressClassName: ex,
                pauseOnLostVisibility: eE = !1,
                persistTimeline: ev = !1,
                persistPlayhead: eg = !0,
                autoFocus: eb = !1,
                autoHideVolumeSlider: ey = !1,
                timelineIndicatorConfig: eS,
                loadingSpinnerPosition: eC = "top-left",
                crossOrigin: eN = "anonymous",
                withVideoHalo: eA = !1,
                objectFit: eR = "contain",
                muxContentMetadata: ew,
                awaitMuxReady: eP = !1,
            } = e,
            eT = L ?? j,
            eD = eh ?? T.u,
            { focused: eL, focusedChanged: eM } = (0, P.A7)(),
            { visible: ej, visibleChanged: ek, targetRef: eI } = (0, P.O7)(),
            [eB, eG] = l.useState(a ? o.Q6.PLAYING : o.Q6.PAUSED),
            [eF, eU] = l.useState(!1),
            [eO, eQ] = l.useState(!1),
            [eK, e_] = l.useState(0),
            [e$, eY] = l.useState(null),
            eX = l.useCallback((e) => {
                eY(null), e_(e);
            }, []),
            [ez, eW] = l.useState(!1),
            eV = l.useRef(null),
            [eH, eZ] = l.useState(o.h$.LOADING),
            eJ = l.useRef(!1),
            eq = l.useRef(null),
            [e0, e1] = l.useState([]),
            [e6, e2] = l.useState(!1),
            e4 = l.useRef(!1),
            e9 = l.useRef(!1),
            e8 = l.useRef(!1),
            e7 = l.useRef(!1),
            [e3, e5] = l.useState(!0),
            te = l.useRef(!0),
            tt = l.useRef(null),
            tn = l.useRef(null),
            [tr, tl] = l.useState(H),
            [ta, ti] = l.useState(Z),
            [tu, ts] = l.useState(!1),
            [to, tc] = l.useState(!1),
            [td, tm] = l.useState(!1),
            tf = (0, s.bG)([g.A], () => g.A.useReducedMotion),
            tp = (0, l.useRef)(null),
            th = (0, l.useRef)(null),
            tx = (0, l.useRef)(null),
            tE = l.useRef(!0),
            [tv, tg] = l.useState(null),
            tb = l.useCallback(() => tp.current?.currentTime ?? null, []);
        (0, D.A)({ videoRef: tp, canvasRef: th, enabled: eA && !tf, canvasWidth: 32, canvasHeight: 18 });
        let ty = l.useCallback(
                (e, t) => {
                    Q?.(e, t);
                },
                [Q],
            ),
            { isHlsActive: tS, hlsRef: tC } = (0, S.Ay)(tp, {
                src: eT,
                initialTimeSec: F,
                onError: ty,
                onHlsInstance: eo,
                crossOrigin: eN,
            }),
            { isReady: tN } = (0, C.A)({ videoRef: tp, hlsRef: tC, contentMetadata: ew, isHls: tS }),
            tA = eP && !tN && !tS,
            [tR, tw] = l.useState(null),
            [tP, tT] = l.useState(0),
            [tD, tL] = l.useState(!1),
            tM = K ?? tp.current?.duration ?? 0,
            [tj, tk] = l.useState(o.oA.MD),
            tI = { [o.oA.MD]: 56, [o.oA.LG]: 64 };
        (0, v.u5)(() => {
            tE.current && (tE.current = !1);
        });
        let tB = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((e7.current = !0), eG(e), X?.(e, t), null != tp.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            tg(null), tp.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (e4.current = !1), tp.current.pause(), (te.current = !1);
                            break;
                        case o.Q6.ENDED:
                            ts(!1);
                    }
            },
            [X],
        );
        l.useEffect(() => {
            if (!eE) return;
            let e = null != n && (n === d.ip.HIDDEN || n === d.ip.EXITING || n === d.ip.EXITED),
                t = null != n && ek && !ej,
                r = eM && !eL;
            if ((e || t || r) && null != tp.current && eB === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                tg(n), tB(o.Q6.PAUSED, n);
            }
        }, [eE, n, eL, eM, ej, ek, eB, tB]),
            l.useEffect(() => {
                eM && er?.(eL, eB);
            }, [eL, eM, eB, er]),
            l.useEffect(() => {
                ek && el?.(ej, eB);
            }, [ej, ek, eB, el]);
        let [tG, tF] = l.useState(!1),
            tU = l.useRef(null),
            tO = l.useRef(0);
        l.useLayoutEffect(() => {
            tO.current = performance.now();
        }, []);
        let tQ = l.useCallback(() => {
                null != tU.current && clearTimeout(tU.current),
                    eB !== o.Q6.PLAYING ||
                        (tU.current = setTimeout(
                            () => {
                                eB === o.Q6.PLAYING && tF(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tO.current)),
                        ));
            }, [eB]),
            tK = l.useCallback(() => {
                tF(!1), (tO.current = performance.now()), tQ();
            }, [tQ]);
        l.useEffect(() => {
            if (eB !== o.Q6.PLAYING) {
                tF(!1), null != tU.current && clearTimeout(tU.current);
                return;
            }
            return (
                tQ(),
                () => {
                    null != tU.current && clearTimeout(tU.current);
                }
            );
        }, [eB, tQ]),
            l.useEffect(
                () => () => {
                    null != eV.current && clearTimeout(eV.current);
                },
                [],
            );
        let t_ = !tG && (eO || eF || eB === o.Q6.ENDED),
            t$ = l.useRef(z);
        t$.current = z;
        let tY = l.useCallback(() => {
                let e = (0, y.qf)(tp.current?.parentNode, tp.current);
                null == e || (0, y._U)(e) || (e.removeEventListener(y.Wb, tY), tm(!1), t$.current?.(!1), tk(o.oA.MD));
            }, []),
            tX = () => {
                null == tp.current ||
                    (tW(Math.max((eq.current ?? tp.current.currentTime) - 10, 0)),
                    eB === o.Q6.ENDED && tB(o.Q6.PAUSED, o.KB.SEEK));
            },
            tz = () => {
                if (null == tp.current) return;
                let e = Math.min((eq.current ?? tp.current.currentTime) + 10, tM);
                tW(e), eB !== o.Q6.ENDED && e >= tp.current.duration && tB(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = tp.current;
            return () => {
                let t = (0, y.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(y.Wb, tY);
            };
        }, [tY]);
        let tW = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tp.current) return;
                    let n = tp.current.currentTime;
                    (eq.current = e),
                        eY((e / (tp.current.duration ?? 1)) * 100),
                        eW(!0),
                        null != eV.current && clearTimeout(eV.current),
                        (eV.current = setTimeout(() => {
                            eW(!1), (eV.current = null);
                        }, 100)),
                        (eJ.current = !0),
                        (tp.current.currentTime = e),
                        t && ea?.(n, e);
                },
                [ea],
            ),
            tV = () => {
                if (null != tp.current)
                    switch (eB) {
                        case o.Q6.ENDED:
                            tW(0), tB(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            tg(o.KB.USER), tB(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tB(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            tH = (e) => {
                tw(e);
            },
            tZ = (e) => {
                tw((t) => (t?.id === e.id ? null : t));
            },
            tJ = l.useCallback(() => {
                if (null == tp.current || 0 === tp.current.textTracks.length) return;
                let e = tp.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, w.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tH(n)), (n.onexit = () => tZ(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == tx.current) return;
            let e = tx.current;
            return (
                e.addEventListener("load", tJ),
                () => {
                    null != e && e.removeEventListener("load", tJ);
                }
            );
        }, [tJ]);
        let tq = (e) => {
                if (null != tp.current) {
                    if (eH === o.h$.BUFFERING) {
                        let e = null != tn.current ? performance.now() - tn.current : null;
                        en?.(e);
                    } else if (eH === o.h$.LOADING) {
                        let e = null != tt.current ? performance.now() - tt.current : null;
                        q?.(e);
                    }
                    eZ(o.h$.READY), eB === o.Q6.PLAYING && (e4.current || tB(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            t0 = (e) => {
                if ((tW(e), eB === o.Q6.ENDED && !e9.current)) {
                    let t = tp.current?.duration;
                    (null == t || Number.isNaN(t) || e < t) && tB(o.Q6.PLAYING, o.KB.USER);
                }
            },
            [{ controlBarAnimSpring: t1 }, t6] = (0, m.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: I,
                onStart: () => {
                    e5(!1);
                },
                onRest: (e) => {
                    1 === e.value && e5(!0);
                },
            })),
            t2 = (0, l.useRef)(null),
            [{ captionHeightSpring: t4 }, t9] = (0, m.z)(() => ({ from: { captionHeightSpring: 0 }, config: I }));
        l.useEffect(
            () => (
                t9({ captionHeightSpring: to && null != tR ? (t2.current?.clientHeight ?? 0) : 0, immediate: tf }),
                () => {
                    t4.stop();
                }
            ),
            [to, t9, tf, tR, t4],
        ),
            l.useEffect(
                () => (
                    t6({ controlBarAnimSpring: t_ || e6 ? 1 : 0, immediate: tf }),
                    () => {
                        t1.stop();
                    }
                ),
                [t_, t6, tf, e6, t1],
            );
        let t8 = eB === o.Q6.ENDED && null != Y,
            t7 = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != tp.current && (tW(0), tB(o.Q6.PLAYING, e));
                },
                [tW, tB],
            ),
            t3 = l.useRef(null),
            t5 = l.useCallback(
                (e) => {
                    tK(), t3.current?.(e.nativeEvent);
                },
                [tK],
            );
        return (0, r.jsx)(f.D, {
            className: k.W6,
            "data-fullscreen": td,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eU(!0), tF(!1), (tO.current = performance.now()), null != tU.current && clearTimeout(tU.current);
            },
            onMouseLeave: () => {
                eU(!1), tF(!1);
            },
            onMouseMove: tK,
            children: (0, r.jsxs)("div", {
                className: i()(k.NS, { [k.DO]: "portrait" === c, [k.r7]: "landscape" === c }),
                tabIndex: -1,
                onKeyDown: t5,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    eA && !tf && (0, r.jsx)("canvas", { ref: th, className: k.Xm }),
                    t8 && Y?.({ replay: t7 }),
                    (0, r.jsxs)(b.A, {
                        ref: (e) => {
                            (tp.current = e),
                                (eI.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: a,
                        playsInline: !0,
                        mediaLayoutType: td ? M.dG.STATIC : M.dG.RESPONSIVE,
                        className: i()({ [k.R]: t8, [k.IR]: !0, [k.FP]: "cover" === eR && !td }),
                        controls: !1,
                        poster: G,
                        preload: ed,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != tp.current &&
                                (U?.(tp.current.currentTime, tp.current.duration),
                                eJ.current || eX((tp.current.currentTime / tp.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            eZ(o.h$.READY), O?.(), e9.current || tB(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                        },
                        onLoadedData: (e) => {
                            if (eH === o.h$.LOADING) {
                                let e = null != tt.current ? performance.now() - tt.current : null;
                                q?.(e), eZ(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tp.current) return;
                            F > 0 && !tS && tW(F, !1), ta ? (tp.current.volume = 0) : (tp.current.volume = tr);
                            let t = tp.current.duration;
                            t > 0 && isFinite(t) && tT(t), tL(!0);
                        },
                        onLoadStart: () => {
                            (tt.current = performance.now()), J?.();
                        },
                        onPlaying: () => {
                            te.current && (ee?.(performance.now()), (te.current = !1));
                        },
                        onWaiting: (e) => {
                            (tn.current = performance.now()), et?.(), eZ(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == tp.current) return;
                            let t = [];
                            for (let e = 0; e < tp.current.buffered.length; e++) {
                                let n = tp.current.buffered.start(e),
                                    r = tp.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / tp.current.duration, size: (r - n) / tp.current.duration });
                            }
                            e1(t);
                        },
                        onCanPlay: tq,
                        onCanPlayThrough: tq,
                        onSeeked: () => {
                            (eJ.current = !1),
                                (eq.current = null),
                                null != tp.current && eX((tp.current.currentTime / tp.current.duration) * 100);
                        },
                        onAbort: () => ty(o.SB.ABORT),
                        onError: () => ty(o.SB.ERROR),
                        onEmptied: () => ty(o.SB.EMPTIED),
                        onStalled: () => ty(o.SB.STALLED),
                        onClick: (e) => {
                            null != ec ? ec(e) : tV();
                        },
                        crossOrigin: eN ?? void 0,
                        children: [
                            null != _ &&
                                (0, r.jsx)("track", {
                                    ref: tx,
                                    src: _,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !tS &&
                                !tA &&
                                (0, r.jsx)("source", {
                                    onError: () => ty(o.SB.SOURCE_ERROR),
                                    src: eT,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    eH !== o.h$.READY &&
                        eB === o.Q6.PLAYING &&
                        null != eT &&
                        (0, r.jsx)("span", {
                            className: i()(k.S, { [k.F]: "center" === eC }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(p.y, { type: p.y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(T.A, {
                        message: eD({ hasVideoAsset: null != eT, playerState: eB, pauseReason: tv }),
                        showOverlay: null == eT,
                    }),
                    null != ei &&
                        (0, r.jsx)(u.animated.div, {
                            className: k.MU,
                            style: {
                                opacity: (0, u.to)([t1.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, u.to)([t1.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, u.to)([t1.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: ei(),
                        }),
                    tu &&
                        eB !== o.Q6.ENDED &&
                        null != $ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(f.D, {
                                    onClick: () => {
                                        eB === o.Q6.PAUSED && tB(o.Q6.PLAYING, o.KB.USER), ts(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: k.BG }),
                                }),
                                (0, r.jsx)(u.animated.div, {
                                    className: i()(k.xr, es, { [k.MZ]: "portrait" === c }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, u.to)([t1, t4], (e, t) => `${e * tI[tj] + t}px`) },
                                    children: (0, r.jsx)(R.X, {
                                        text: $,
                                        onClose: () => {
                                            ts(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(u.animated.div, {
                        className: k.Jp,
                        style: { opacity: (0, u.to)([t1.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(k.yf, {
                                [k.ZH]: e7.current && eB === o.Q6.PLAYING,
                                [k.v7]: e7.current && eB === o.Q6.PAUSED,
                            }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eB === o.Q6.PLAYING
                                    ? (0, r.jsx)(h.u, { className: k.PK })
                                    : (0, r.jsx)(x.E, { className: k.PK }),
                        },
                        eB,
                    ),
                    to &&
                        null != tR &&
                        !t8 &&
                        (0, r.jsx)(u.animated.div, {
                            className: k.o$,
                            ref: t2,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, u.to)(
                                    [t1.to({ range: [0, 1], output: [-20, -tI[tj]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(E.E, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: k.qh,
                                children: tR.text,
                            }),
                        }),
                    (0, r.jsxs)(u.animated.div, {
                        className: k.r8,
                        style: { height: (0, u.to)([t1.to({ range: [0, 1], output: [0, tI[tj]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(u.animated.div, {
                                style: {
                                    transform: (0, u.to)(
                                        [t1.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: t_ || e6 || ev ? void 0 : B,
                                    children: (0, r.jsx)(A.Ay, {
                                        percent: null != e$ ? e$ : eK,
                                        animate:
                                            !0 !== tE.current && !ez && eB === o.Q6.PLAYING && tD && eH === o.h$.READY,
                                        interactionEnabled: e3 && tM > 0,
                                        backgroundColor: t_ || ev ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eB,
                                        preloadedBuffers: t_ ? e0 : void 0,
                                        durationSec: tP > 0 ? tP : +!tD,
                                        isFullyVisible: t_ && e3,
                                        maxSeekableTime: null != K && tM > 0 ? tM : void 0,
                                        progressClassName: ex,
                                        persistPlayhead: eg,
                                        onClick: t0,
                                        onScrubBack: tX,
                                        onScrubForward: tz,
                                        onDragStateChange: (e) => {
                                            if (((e9.current = e), e2(e), e))
                                                (e4.current = eB === o.Q6.PLAYING),
                                                    (e8.current = eB === o.Q6.ENDED),
                                                    e4.current
                                                        ? tp.current?.pause()
                                                        : e8.current && tB(o.Q6.PAUSED, o.KB.SEEK);
                                            else {
                                                let e = tp.current,
                                                    t =
                                                        null != e &&
                                                        !Number.isNaN(e.duration) &&
                                                        e.currentTime >= e.duration;
                                                e4.current
                                                    ? ((e4.current = !1),
                                                      t ? tB(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE) : e?.play())
                                                    : e8.current
                                                      ? ((e8.current = !1),
                                                        t
                                                            ? tB(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE)
                                                            : tB(o.Q6.PLAYING, o.KB.USER))
                                                      : t && tB(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                                            }
                                        },
                                        indicatorConfig: eS,
                                        onIndicatorSeek: t0,
                                        getCurrentTimeSec: tb,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: k.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, u.to)(
                                        [t1.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 20}px`,
                                    ),
                                    paddingBottom: (0, u.to)(
                                        [t1.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, u.to)([t1.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => eQ(!0),
                                onBlur: () => eQ(!1),
                                children: (0, r.jsx)(N.A, {
                                    videoRef: tp,
                                    playerState: eB,
                                    animSpring: t1,
                                    visible: t_,
                                    seekForwardEnabled: null == K || (tp.current?.currentTime ?? 0) + 1 < tM,
                                    hideCaptionBtn: null == _,
                                    hideTranscriptBtn: null == $,
                                    hideSkipButtons: "portrait" === c,
                                    size: tj,
                                    downloadUrl: em,
                                    downloadContentType: ef,
                                    extraButtons: ep,
                                    autoFocus: eb,
                                    keyDownHandlerRef: t3,
                                    volume: tr,
                                    muted: ta,
                                    transcriptEnabled: tu,
                                    captionEnabled: to,
                                    fullScreenEnabled: td,
                                    handlePlaybackBtnClick: tV,
                                    handleTranscriptBtnClick: () => {
                                        ts(!tu);
                                    },
                                    handleCaptionBtnClick: () => {
                                        tc(!to);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !td,
                                            t = (0, y.qf)(tp.current?.parentNode, tp.current);
                                        e && null != t
                                            ? ((0, y.tl)(t), t.addEventListener(y.Wb, tY), z?.(!0), tk(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(y.Wb, tY), z?.(!1), (0, y.sP)(t), tk(o.oA.MD)),
                                            tm(e);
                                    },
                                    handleSeekBackBtnClick: tX,
                                    handleSeekForwardBtnClick: tz,
                                    autoHideVolumeSlider: ey,
                                    handleControlBarPendingInteraction: e2,
                                    onVolumeChange: (e) => {
                                        tl(e), W?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        ti(e), V?.(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                    null != eu &&
                        (0, r.jsx)("div", {
                            className: k.MU,
                            children: eu({ playerState: eB, isControlBarExpanded: t_, videoRef: tp }),
                        }),
                ],
            }),
        });
    });
function F(e) {
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
        ? (0, r.jsx)(G, { ...u, onClick: a, autoplay: s || g, ref: t })
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
                      (0, r.jsx)(F, {
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
                              children: E({ playerState: o.Q6.PAUSED, isControlBarExpanded: !0 }),
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
