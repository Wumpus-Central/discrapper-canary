"use strict";
n.r(t), n.d(t, { default: () => B }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(873174),
    l = n(17928),
    u = n(876230),
    c = n(966697),
    d = n(231723),
    _ = n(717421),
    h = n(939249),
    f = n(289873),
    p = n(782134),
    E = n(113494),
    m = n(834730),
    g = n(964486),
    A = n(775602),
    I = n(607470),
    T = n(475815),
    S = n(718499),
    y = n(23590),
    N = n(671897),
    v = n(565164),
    C = n(275664),
    R = n(408121),
    O = n(984212),
    b = n(739416),
    D = n(931853),
    L = n(90721),
    w = n(920228),
    M = n(652215),
    P = n(838541),
    x = n(375708),
    k = n(834926);
let U = { tension: 250, friction: 5, clamp: !0 },
    G = { visibility: "hidden" },
    F = r.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: s = !1,
                orientation: c = "landscape",
                videoUrlOverride: M,
                src: x,
                poster: F,
                initialTimeSec: V = 0,
                onProgressUpdate: B,
                onEnded: H,
                onError: j,
                maxSeekableTimeSec: Y,
                captionTrackUrl: W,
                transcriptText: K,
                renderEndScreen: $,
                onPlayerStateChange: z,
                onFullscreenChange: q,
                onVolumeChange: X,
                onMutedChange: Z,
                initialVolume: Q = 0.3,
                initialMuted: J = !1,
                onLoadStart: ee,
                onLoadEnd: et,
                onFirstFrame: en,
                onBufferingStart: ei,
                onBufferingEnd: er,
                onFocusChange: es,
                onVisibilityChange: ea,
                onSeek: eo,
                renderOverlay: el,
                renderPersistentOverlay: eu,
                transcriptClassName: ec,
                onHlsInstance: ed,
                onClick: e_,
                preload: eh,
                downloadUrl: ef,
                downloadContentType: ep,
                extraButtons: eE,
                hideFullScreenBtn: em = !1,
                hideSkipButtons: eg,
                compactTimeDisplay: eA = !1,
                hidePlaybackSpeedBtn: eI = !1,
                getPlaybackBlockedMessage: eT,
                progressClassName: eS,
                pauseOnLostVisibility: ey = !1,
                persistTimeline: eN = !1,
                persistPlayhead: ev = !0,
                autoFocus: eC = !1,
                autoHideVolumeSlider: eR = !1,
                timelineIndicatorConfig: eO,
                scrubPreviewVttUrl: eb,
                scrubPreviewImageUrl: eD,
                loadingSpinnerPosition: eL = "top-left",
                crossOrigin: ew = "anonymous",
                withVideoHalo: eM = !1,
                objectFit: eP = "contain",
                muxContentMetadata: ex,
                awaitMuxReady: ek = !1,
            } = e,
            eU = M ?? x,
            eG = eT ?? D.u,
            eF = r.useRef(null),
            eV = (0, v.z5)(eF, eb, eD),
            { focused: eB, focusedChanged: eH } = (0, b.A7)(),
            { visible: ej, visibleChanged: eY, targetRef: eW } = (0, b.O7)(),
            [eK, e$] = r.useState(s ? u.Q6.PLAYING : u.Q6.PAUSED),
            [ez, eq] = r.useState(!1),
            [eX, eZ] = r.useState(!1),
            [eQ, eJ] = r.useState(0),
            [e0, e1] = r.useState(null),
            e2 = r.useCallback((e) => {
                e1(null), eJ(e);
            }, []),
            [e3, e6] = r.useState(!1),
            e4 = r.useRef(null),
            [e5, e7] = r.useState(u.h$.LOADING),
            e8 = r.useRef(!1),
            e9 = r.useRef(null),
            [te, tt] = r.useState([]),
            [tn, ti] = r.useState(!1),
            tr = r.useRef(!1),
            ts = r.useRef(!1),
            ta = r.useRef(!1),
            to = r.useRef(!1),
            [tl, tu] = r.useState(!0),
            tc = r.useRef(!0),
            td = r.useRef(null),
            t_ = r.useRef(null),
            [th, tf] = r.useState(Q),
            [tp, tE] = r.useState(J),
            [tm, tg] = r.useState(!1),
            [tA, tI] = r.useState(!1),
            [tT, tS] = r.useState(!1),
            ty = (0, l.bG)([A.A], () => A.A.useReducedMotion),
            tN = (0, r.useRef)(null),
            tv = (0, r.useRef)(null),
            tC = (0, r.useRef)(null),
            tR = r.useRef(!0),
            [tO, tb] = r.useState(null),
            tD = r.useCallback(() => tN.current?.currentTime ?? null, []);
        (0, L.A)({ videoRef: tN, canvasRef: tv, enabled: eM && !ty, canvasWidth: 32, canvasHeight: 18 });
        let tL = r.useCallback(
                (e, t) => {
                    j?.(e, t);
                },
                [j],
            ),
            { isHlsActive: tw, hlsRef: tM } = (0, S.Ay)(tN, {
                src: eU,
                initialTimeSec: V,
                onError: tL,
                onHlsInstance: ed,
                crossOrigin: ew,
            }),
            { isReady: tP } = (0, y.A)({ videoRef: tN, hlsRef: tM, contentMetadata: ex, isHls: tw }),
            tx = ek && !tP && !tw,
            [tk, tU] = r.useState(null),
            [tG, tF] = r.useState(0),
            [tV, tB] = r.useState(!1),
            tH = Y ?? tN.current?.duration ?? 0,
            [tj, tY] = r.useState(u.oA.MD),
            tW = { [u.oA.MD]: 56, [u.oA.LG]: 64 };
        (0, g.u5)(() => {
            tR.current && (tR.current = !1);
        });
        let tK = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((to.current = !0), e$(e), z?.(e, t), null != tN.current))
                    switch (e) {
                        case u.Q6.PLAYING:
                            tb(null), tN.current.play();
                            break;
                        case u.Q6.PAUSED:
                            (tr.current = !1), tN.current.pause(), (tc.current = !1);
                            break;
                        case u.Q6.ENDED:
                            tg(!1);
                    }
            },
            [z],
        );
        r.useEffect(() => {
            if (!ey) return;
            let e = null != n && (n === d.ip.HIDDEN || n === d.ip.EXITING || n === d.ip.EXITED),
                t = null != n && eY && !ej,
                i = eH && !eB;
            if ((e || t || i) && null != tN.current && eK === u.Q6.PLAYING) {
                let n = e || t ? u.KB.VISIBILITY : u.KB.FOCUS;
                tb(n), tK(u.Q6.PAUSED, n);
            }
        }, [ey, n, eB, eH, ej, eY, eK, tK]),
            (0, w.A)({
                videoRef: tN,
                enabled: ey,
                onPipPause: () => {
                    tb(u.KB.PICTURE_IN_PICTURE), tK(u.Q6.PAUSED, u.KB.PICTURE_IN_PICTURE);
                },
                onHiddenPause: () => {
                    tb(u.KB.FOCUS), tK(u.Q6.PAUSED, u.KB.FOCUS);
                },
            }),
            r.useEffect(() => {
                eH && es?.(eB, eK);
            }, [eB, eH, eK, es]),
            r.useEffect(() => {
                eY && ea?.(ej, eK);
            }, [ej, eY, eK, ea]);
        let [t$, tz] = r.useState(!1),
            tq = r.useRef(null),
            tX = r.useRef(0);
        r.useLayoutEffect(() => {
            tX.current = performance.now();
        }, []);
        let tZ = r.useCallback(() => {
                null != tq.current && clearTimeout(tq.current),
                    eK !== u.Q6.PLAYING ||
                        (tq.current = setTimeout(
                            () => {
                                eK === u.Q6.PLAYING && tz(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tX.current)),
                        ));
            }, [eK]),
            tQ = r.useCallback(() => {
                tz(!1), (tX.current = performance.now()), tZ();
            }, [tZ]);
        r.useEffect(() => {
            if (eK !== u.Q6.PLAYING) {
                tz(!1), null != tq.current && clearTimeout(tq.current);
                return;
            }
            return (
                tZ(),
                () => {
                    null != tq.current && clearTimeout(tq.current);
                }
            );
        }, [eK, tZ]),
            r.useEffect(
                () => () => {
                    null != e4.current && clearTimeout(e4.current);
                },
                [],
            );
        let tJ = !t$ && (eX || ez || eK === u.Q6.ENDED),
            t0 = r.useRef(q);
        t0.current = q;
        let t1 = r.useCallback(() => {
                let e = (0, T.qf)(tN.current?.parentNode, tN.current);
                null == e || (0, T._U)(e) || (e.removeEventListener(T.Wb, t1), tS(!1), t0.current?.(!1), tY(u.oA.MD));
            }, []),
            t2 = () => {
                null == tN.current ||
                    (t6(Math.max((e9.current ?? tN.current.currentTime) - 10, 0)),
                    eK === u.Q6.ENDED && tK(u.Q6.PAUSED, u.KB.SEEK));
            },
            t3 = () => {
                if (null == tN.current) return;
                let e = Math.min((e9.current ?? tN.current.currentTime) + 10, tH);
                t6(e), eK !== u.Q6.ENDED && e >= tN.current.duration && tK(u.Q6.ENDED, u.KB.SEEK);
            };
        r.useEffect(() => {
            let e = tN.current;
            return () => {
                let t = (0, T.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(T.Wb, t1);
            };
        }, [t1]);
        let t6 = r.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tN.current) return;
                    let n = tN.current.currentTime;
                    (e9.current = e),
                        e1((e / (tN.current.duration ?? 1)) * 100),
                        e6(!0),
                        null != e4.current && clearTimeout(e4.current),
                        (e4.current = setTimeout(() => {
                            e6(!1), (e4.current = null);
                        }, 100)),
                        (e8.current = !0),
                        (tN.current.currentTime = e),
                        t && eo?.(n, e);
                },
                [eo],
            ),
            t4 = () => {
                if (null != tN.current)
                    switch (eK) {
                        case u.Q6.ENDED:
                            t6(0), tK(u.Q6.PLAYING, u.KB.USER);
                            break;
                        case u.Q6.PLAYING:
                            tb(u.KB.USER), tK(u.Q6.PAUSED, u.KB.USER);
                            break;
                        default:
                            tK(u.Q6.PLAYING, u.KB.USER);
                    }
            },
            t5 = (e) => {
                tU(e);
            },
            t7 = (e) => {
                tU((t) => (t?.id === e.id ? null : t));
            },
            t8 = r.useCallback(() => {
                if (null == tN.current || 0 === tN.current.textTracks.length) return;
                let e = tN.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, O.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => t5(n)), (n.onexit = () => t7(n)));
                    }
            }, []);
        r.useEffect(() => {
            if (null == tC.current) return;
            let e = tC.current;
            return (
                e.addEventListener("load", t8),
                () => {
                    null != e && e.removeEventListener("load", t8);
                }
            );
        }, [t8]);
        let t9 = (e) => {
                if (null != tN.current) {
                    if (e5 === u.h$.BUFFERING) {
                        let e = null != t_.current ? performance.now() - t_.current : null;
                        er?.(e);
                    } else if (e5 === u.h$.LOADING) {
                        let e = null != td.current ? performance.now() - td.current : null;
                        et?.(e);
                    }
                    e7(u.h$.READY), eK === u.Q6.PLAYING && (tr.current || tK(u.Q6.PLAYING, u.KB.BUFFERING_RECOVERY));
                }
            },
            ne = (e) => {
                if ((t6(e), eK === u.Q6.ENDED && !ts.current)) {
                    let t = tN.current?.duration;
                    (null == t || Number.isNaN(t) || e < t) && tK(u.Q6.PLAYING, u.KB.USER);
                }
            },
            [{ controlBarAnimSpring: nt }, nn] = (0, _.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: U,
                onStart: () => {
                    tu(!1);
                },
                onRest: () => {
                    tu(!0);
                },
            })),
            ni = (0, r.useRef)(null),
            [{ captionHeightSpring: nr }, ns] = (0, _.z)(() => ({ from: { captionHeightSpring: 0 }, config: U }));
        r.useEffect(
            () => (
                ns({ captionHeightSpring: tA && null != tk ? (ni.current?.clientHeight ?? 0) : 0, immediate: ty }),
                () => {
                    nr.stop();
                }
            ),
            [tA, ns, ty, tk, nr],
        ),
            r.useEffect(
                () => (
                    nn({ controlBarAnimSpring: tJ || tn ? 1 : 0, immediate: ty }),
                    () => {
                        nt.stop();
                    }
                ),
                [tJ, nn, ty, tn, nt],
            );
        let na = eK === u.Q6.ENDED && null != $,
            no = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.KB.USER;
                    null != tN.current && (t6(0), tK(u.Q6.PLAYING, e));
                },
                [t6, tK],
            ),
            nl = r.useRef(null),
            nu = r.useCallback(
                (e) => {
                    tQ(), nl.current?.(e.nativeEvent);
                },
                [tQ],
            );
        return (0, i.jsx)(h.D, {
            className: k.W6,
            "data-fullscreen": tT,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eq(!0), tz(!1), (tX.current = performance.now()), null != tq.current && clearTimeout(tq.current);
            },
            onMouseLeave: () => {
                eq(!1), tz(!1);
            },
            onMouseMove: tQ,
            children: (0, i.jsxs)("div", {
                className: a()(k.NS, { [k.DO]: "portrait" === c, [k.r7]: "landscape" === c }),
                tabIndex: -1,
                onKeyDown: nu,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    eM && !ty && (0, i.jsx)("canvas", { ref: tv, className: k.Xm }),
                    na && $?.({ replay: no }),
                    (0, i.jsxs)(I.A, {
                        ref: (e) => {
                            (tN.current = e),
                                (eW.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: s,
                        playsInline: !0,
                        mediaLayoutType: tT ? P.dG.STATIC : P.dG.RESPONSIVE,
                        className: a()({ [k.R]: na, [k.IR]: !0, [k.FP]: "cover" === eP && !tT }),
                        controls: !1,
                        poster: F,
                        preload: eh,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != tN.current &&
                                (B?.(tN.current.currentTime, tN.current.duration),
                                e8.current || e2((tN.current.currentTime / tN.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            e7(u.h$.READY), H?.(), ts.current || tK(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE);
                        },
                        onLoadedData: (e) => {
                            if (e5 === u.h$.LOADING) {
                                let e = null != td.current ? performance.now() - td.current : null;
                                et?.(e), e7(u.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tN.current) return;
                            V > 0 && !tw && t6(V, !1), tp ? (tN.current.volume = 0) : (tN.current.volume = th);
                            let t = tN.current.duration;
                            t > 0 && isFinite(t) && tF(t), tB(!0);
                        },
                        onLoadStart: () => {
                            (td.current = performance.now()), ee?.();
                        },
                        onPlaying: () => {
                            tc.current && (en?.(performance.now()), (tc.current = !1));
                        },
                        onWaiting: (e) => {
                            (t_.current = performance.now()), ei?.(), e7(u.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == tN.current) return;
                            let t = [];
                            for (let e = 0; e < tN.current.buffered.length; e++) {
                                let n = tN.current.buffered.start(e),
                                    i = tN.current.buffered.end(e);
                                i - n < 1 ||
                                    t.push({ start: n / tN.current.duration, size: (i - n) / tN.current.duration });
                            }
                            tt(t);
                        },
                        onCanPlay: t9,
                        onCanPlayThrough: t9,
                        onSeeked: () => {
                            (e8.current = !1),
                                (e9.current = null),
                                null != tN.current && e2((tN.current.currentTime / tN.current.duration) * 100);
                        },
                        onAbort: () => tL(u.SB.ABORT),
                        onError: () => tL(u.SB.ERROR),
                        onEmptied: () => tL(u.SB.EMPTIED),
                        onStalled: () => tL(u.SB.STALLED),
                        onClick: (e) => {
                            null != e_ ? e_(e) : t4();
                        },
                        crossOrigin: ew ?? void 0,
                        children: [
                            null != W &&
                                (0, i.jsx)("track", {
                                    ref: tC,
                                    src: W,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            null != eb && (0, i.jsx)("track", { ref: eF, src: eb, kind: "metadata" }),
                            !tw &&
                                !tx &&
                                (0, i.jsx)("source", {
                                    onError: () => tL(u.SB.SOURCE_ERROR),
                                    src: eU,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    e5 !== u.h$.READY &&
                        eK === u.Q6.PLAYING &&
                        null != eU &&
                        (0, i.jsx)("span", {
                            className: a()(k.S, { [k.F]: "center" === eL }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, i.jsx)(f.y, { type: f.y.Type.WANDERING_CUBES }),
                        }),
                    (0, i.jsx)(D.A, {
                        message: eG({ hasVideoAsset: null != eU, playerState: eK, pauseReason: tO }),
                        showOverlay: null == eU,
                    }),
                    null != el &&
                        (0, i.jsx)(o.animated.div, {
                            className: k.MU,
                            style: {
                                opacity: (0, o.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, o.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, o.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: el(),
                        }),
                    tm &&
                        eK !== u.Q6.ENDED &&
                        null != K &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(h.D, {
                                    onClick: () => {
                                        eK === u.Q6.PAUSED && tK(u.Q6.PLAYING, u.KB.USER), tg(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, i.jsx)("div", { className: k.BG }),
                                }),
                                (0, i.jsx)(o.animated.div, {
                                    className: a()(k.xr, ec, { [k.MZ]: "portrait" === c }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, o.to)([nt, nr], (e, t) => `${e * tW[tj] + t}px`) },
                                    children: (0, i.jsx)(R.X, {
                                        text: K,
                                        onClose: () => {
                                            tg(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, i.jsx)(o.animated.div, {
                        className: k.Jp,
                        style: { opacity: (0, o.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, i.jsx)(
                        "div",
                        {
                            className: a()(k.yf, {
                                [k.ZH]: to.current && eK === u.Q6.PLAYING,
                                [k.v7]: to.current && eK === u.Q6.PAUSED,
                            }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eK === u.Q6.PLAYING
                                    ? (0, i.jsx)(p.u, { className: k.PK })
                                    : (0, i.jsx)(E.E, { className: k.PK }),
                        },
                        eK,
                    ),
                    tA &&
                        null != tk &&
                        !na &&
                        (0, i.jsx)(o.animated.div, {
                            className: k.o$,
                            ref: ni,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, o.to)(
                                    [nt.to({ range: [0, 1], output: [-20, -tW[tj]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, i.jsx)(m.E, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: k.qh,
                                children: tk.text,
                            }),
                        }),
                    (0, i.jsxs)(o.animated.div, {
                        className: k.r8,
                        style: { height: (0, o.to)([nt.to({ range: [0, 1], output: [0, tW[tj]] })], (e) => `${e}px`) },
                        children: [
                            (0, i.jsx)(o.animated.div, {
                                style: {
                                    transform: (0, o.to)(
                                        [nt.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, i.jsx)("div", {
                                    style: tJ || tn || eN ? void 0 : G,
                                    children: (0, i.jsx)(C.Ay, {
                                        percent: null != e0 ? e0 : eQ,
                                        animate:
                                            !0 !== tR.current && !e3 && eK === u.Q6.PLAYING && tV && e5 === u.h$.READY,
                                        interactionEnabled: tl && tH > 0,
                                        backgroundColor: tJ || eN ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eK,
                                        preloadedBuffers: tJ ? te : void 0,
                                        durationSec: tG > 0 ? tG : +!tV,
                                        isFullyVisible: tJ && tl,
                                        maxSeekableTime: null != Y && tH > 0 ? tH : void 0,
                                        progressClassName: eS,
                                        persistPlayhead: ev,
                                        onClick: ne,
                                        onScrubBack: t2,
                                        onScrubForward: t3,
                                        onDragStateChange: (e) => {
                                            if (((ts.current = e), ti(e), e))
                                                (tr.current = eK === u.Q6.PLAYING),
                                                    (ta.current = eK === u.Q6.ENDED),
                                                    tr.current
                                                        ? tN.current?.pause()
                                                        : ta.current && tK(u.Q6.PAUSED, u.KB.SEEK);
                                            else {
                                                let e = tN.current,
                                                    t =
                                                        null != e &&
                                                        !Number.isNaN(e.duration) &&
                                                        e.currentTime >= e.duration;
                                                tr.current
                                                    ? ((tr.current = !1),
                                                      t ? tK(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE) : e?.play())
                                                    : ta.current
                                                      ? ((ta.current = !1),
                                                        t
                                                            ? tK(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE)
                                                            : tK(u.Q6.PLAYING, u.KB.USER))
                                                      : t && tK(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE);
                                            }
                                        },
                                        indicatorConfig: eO,
                                        scrubPreviewCues: eV,
                                        onIndicatorSeek: ne,
                                        getCurrentTimeSec: tD,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, i.jsx)(o.animated.div, {
                                className: k.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, o.to)(
                                        [nt.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 20}px`,
                                    ),
                                    paddingBottom: (0, o.to)(
                                        [nt.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, o.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => eZ(!0),
                                onBlur: () => eZ(!1),
                                children: (0, i.jsx)(N.A, {
                                    videoRef: tN,
                                    playerState: eK,
                                    animSpring: nt,
                                    visible: tJ,
                                    seekForwardEnabled: null == Y || (tN.current?.currentTime ?? 0) + 1 < tH,
                                    hideCaptionBtn: null == W,
                                    hideTranscriptBtn: null == K,
                                    hideFullScreenBtn: em,
                                    hidePlaybackSpeedBtn: eI,
                                    hideSkipButtons: eg ?? "portrait" === c,
                                    compactTimeDisplay: eA,
                                    size: tj,
                                    downloadUrl: ef,
                                    downloadContentType: ep,
                                    extraButtons: eE,
                                    autoFocus: eC,
                                    keyDownHandlerRef: nl,
                                    volume: th,
                                    muted: tp,
                                    transcriptEnabled: tm,
                                    captionEnabled: tA,
                                    fullScreenEnabled: tT,
                                    handlePlaybackBtnClick: t4,
                                    handleTranscriptBtnClick: () => {
                                        tg(!tm);
                                    },
                                    handleCaptionBtnClick: () => {
                                        tI(!tA);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !tT,
                                            t = (0, T.qf)(tN.current?.parentNode, tN.current);
                                        e && null != t
                                            ? ((0, T.tl)(t), t.addEventListener(T.Wb, t1), q?.(!0), tY(u.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(T.Wb, t1), q?.(!1), (0, T.sP)(t), tY(u.oA.MD)),
                                            tS(e);
                                    },
                                    handleSeekBackBtnClick: t2,
                                    handleSeekForwardBtnClick: t3,
                                    autoHideVolumeSlider: eR,
                                    handleControlBarPendingInteraction: ti,
                                    onVolumeChange: (e) => {
                                        tf(e), X?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        tE(e), Z?.(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                    null != eu &&
                        (0, i.jsx)("div", {
                            className: k.MU,
                            children: eu({ playerState: eK, isControlBarExpanded: tJ, videoRef: tN, isActive: !0 }),
                        }),
                ],
            }),
        });
    });
function V(e) {
    let { poster: t, posterPlaceholder: n, posterPlaceholderVersion: s, orientation: a, objectFit: o = "contain" } = e,
        [l, u] = r.useState(!1),
        d = r.useCallback(() => u(!0), []);
    return null == t
        ? null
        : (0, i.jsx)(c.y, {
              readyState: l ? M.Rv1.READY : M.Rv1.LOADING,
              aspectRatio: "portrait" === a ? 9 / 16 : 16 / 9,
              placeholder: n,
              placeholderVersion: s ?? 1,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              disableSpinner: !0,
              children: (0, i.jsx)("img", { src: t, className: k.zH, style: { objectFit: o }, alt: "", onLoad: d }),
          });
}
let B = r.forwardRef(function (e, t) {
    let { active: n = !0, onClick: s, ...o } = e,
        {
            autoplay: l,
            poster: c,
            orientation: d = "landscape",
            posterPlaceholder: _,
            posterPlaceholderVersion: f,
            renderOverlay: E,
            renderPersistentOverlay: m,
            objectFit: g,
        } = o,
        [A, I] = r.useState(!1),
        T = n || A,
        S = r.useCallback(
            (e) => {
                null != s ? s(e) : I(!0);
            },
            [s],
        ),
        y = r.useRef(null);
    return T
        ? (0, i.jsx)(F, { ...o, onClick: s, autoplay: l || A, ref: t })
        : (0, i.jsx)(h.D, {
              className: a()(k.W6, k.nZ),
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: S,
              "aria-label": x.intl.string(x.t.RscU7I),
              focusProps: { ringTarget: y },
              children: (0, i.jsxs)("div", {
                  className: a()(k.NS, { [k.DO]: "portrait" === d, [k.r7]: "landscape" === d }),
                  children: [
                      (0, i.jsx)(V, {
                          poster: c,
                          posterPlaceholder: _,
                          posterPlaceholderVersion: f,
                          orientation: d,
                          objectFit: g,
                      }),
                      null != E && (0, i.jsx)("div", { className: k.MU, children: E() }),
                      null != m &&
                          (0, i.jsx)("div", {
                              className: k.MU,
                              children: m({ playerState: u.Q6.PAUSED, isControlBarExpanded: !0, isActive: !1 }),
                          }),
                      (0, i.jsx)("div", {
                          className: k.mF,
                          ref: y,
                          children: (0, i.jsx)(p.u, { size: "xs", color: "currentColor", className: k.z_ }),
                      }),
                  ],
              }),
          });
});
