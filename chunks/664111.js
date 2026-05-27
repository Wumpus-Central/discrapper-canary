n.r(t), n.d(t, { default: () => K }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(873174),
    u = n(17928),
    o = n(876230),
    c = n(966697),
    d = n(231723),
    m = n(717421),
    h = n(939249),
    f = n(289873),
    p = n(782134),
    v = n(113494),
    x = n(834730),
    g = n(964486),
    E = n(775602),
    b = n(607470),
    S = n(475815),
    w = n(718499),
    C = n(23590),
    N = n(671897),
    y = n(565164),
    A = n(275664),
    R = n(408121),
    T = n(984212),
    j = n(739416),
    L = n(931853),
    M = n(90721),
    k = n(920228),
    P = n(652215),
    D = n(838541),
    I = n(375708),
    B = n(834926);
let F = { tension: 250, friction: 5, clamp: !0 },
    _ = { visibility: "hidden" },
    U = l.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: c = "landscape",
                videoUrlOverride: P,
                src: I,
                poster: U,
                initialTimeSec: O = 0,
                onProgressUpdate: K,
                onEnded: $,
                onError: Q,
                maxSeekableTimeSec: V,
                captionTrackUrl: G,
                transcriptText: Y,
                renderEndScreen: H,
                onPlayerStateChange: Z,
                onFullscreenChange: z,
                onVolumeChange: X,
                onMutedChange: W,
                initialVolume: J = 0.3,
                initialMuted: q = !1,
                onLoadStart: ee,
                onLoadEnd: et,
                onFirstFrame: en,
                onBufferingStart: er,
                onBufferingEnd: el,
                onFocusChange: ea,
                onVisibilityChange: ei,
                onSeek: es,
                renderOverlay: eu,
                renderPersistentOverlay: eo,
                transcriptClassName: ec,
                onHlsInstance: ed,
                onClick: em,
                preload: eh,
                downloadUrl: ef,
                downloadContentType: ep,
                extraButtons: ev,
                hideFullScreenBtn: ex = !1,
                hideSkipButtons: eg,
                compactTimeDisplay: eE = !1,
                hidePlaybackSpeedBtn: eb = !1,
                getPlaybackBlockedMessage: eS,
                progressClassName: ew,
                pauseOnLostVisibility: eC = !1,
                persistTimeline: eN = !1,
                persistPlayhead: ey = !0,
                autoFocus: eA = !1,
                autoHideVolumeSlider: eR = !1,
                timelineIndicatorConfig: eT,
                scrubPreviewVttUrl: ej,
                scrubPreviewImageUrl: eL,
                loadingSpinnerPosition: eM = "top-left",
                crossOrigin: ek = "anonymous",
                withVideoHalo: eP = !1,
                objectFit: eD = "contain",
                muxContentMetadata: eI,
                awaitMuxReady: eB = !1,
            } = e,
            eF = P ?? I,
            e_ = eS ?? L.u,
            eU = l.useRef(null),
            eO = (0, y.z5)(eU, ej, eL),
            { focused: eK, focusedChanged: e$ } = (0, j.A7)(),
            { visible: eQ, visibleChanged: eV, targetRef: eG } = (0, j.O7)(),
            [eY, eH] = l.useState(a ? o.Q6.PLAYING : o.Q6.PAUSED),
            [eZ, ez] = l.useState(!1),
            [eX, eW] = l.useState(!1),
            [eJ, eq] = l.useState(0),
            [e0, e1] = l.useState(null),
            e2 = l.useCallback((e) => {
                e1(null), eq(e);
            }, []),
            [e6, e4] = l.useState(!1),
            e3 = l.useRef(null),
            [e9, e8] = l.useState(o.h$.LOADING),
            e7 = l.useRef(!1),
            e5 = l.useRef(null),
            [te, tt] = l.useState([]),
            [tn, tr] = l.useState(!1),
            tl = l.useRef(!1),
            ta = l.useRef(!1),
            ti = l.useRef(!1),
            ts = l.useRef(!1),
            [tu, to] = l.useState(!0),
            tc = l.useRef(!0),
            td = l.useRef(null),
            tm = l.useRef(null),
            [th, tf] = l.useState(J),
            [tp, tv] = l.useState(q),
            [tx, tg] = l.useState(!1),
            [tE, tb] = l.useState(!1),
            [tS, tw] = l.useState(!1),
            tC = (0, u.bG)([E.A], () => E.A.useReducedMotion),
            tN = (0, l.useRef)(null),
            ty = (0, l.useRef)(null),
            tA = (0, l.useRef)(null),
            tR = l.useRef(!0),
            [tT, tj] = l.useState(null),
            tL = l.useCallback(() => tN.current?.currentTime ?? null, []);
        (0, M.A)({ videoRef: tN, canvasRef: ty, enabled: eP && !tC, canvasWidth: 32, canvasHeight: 18 });
        let tM = l.useCallback(
                (e, t) => {
                    Q?.(e, t);
                },
                [Q],
            ),
            { isHlsActive: tk, hlsRef: tP } = (0, w.Ay)(tN, {
                src: eF,
                initialTimeSec: O,
                onError: tM,
                onHlsInstance: ed,
                crossOrigin: ek,
            }),
            { isReady: tD } = (0, C.A)({ videoRef: tN, hlsRef: tP, contentMetadata: eI, isHls: tk }),
            tI = eB && !tD && !tk,
            [tB, tF] = l.useState(null),
            [t_, tU] = l.useState(0),
            [tO, tK] = l.useState(!1),
            t$ = V ?? tN.current?.duration ?? 0,
            [tQ, tV] = l.useState(o.oA.MD),
            tG = { [o.oA.MD]: 56, [o.oA.LG]: 64 };
        (0, g.u5)(() => {
            tR.current && (tR.current = !1);
        });
        let tY = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((ts.current = !0), eH(e), Z?.(e, t), null != tN.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            tj(null), tN.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (tl.current = !1), tN.current.pause(), (tc.current = !1);
                            break;
                        case o.Q6.ENDED:
                            tg(!1);
                    }
            },
            [Z],
        );
        l.useEffect(() => {
            if (!eC) return;
            let e = null != n && (n === d.ip.HIDDEN || n === d.ip.EXITING || n === d.ip.EXITED),
                t = null != n && eV && !eQ,
                r = e$ && !eK;
            if ((e || t || r) && null != tN.current && eY === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                tj(n), tY(o.Q6.PAUSED, n);
            }
        }, [eC, n, eK, e$, eQ, eV, eY, tY]),
            (0, k.A)({
                videoRef: tN,
                enabled: eC,
                onPipPause: () => {
                    tj(o.KB.PICTURE_IN_PICTURE), tY(o.Q6.PAUSED, o.KB.PICTURE_IN_PICTURE);
                },
                onHiddenPause: () => {
                    tj(o.KB.FOCUS), tY(o.Q6.PAUSED, o.KB.FOCUS);
                },
            }),
            l.useEffect(() => {
                e$ && ea?.(eK, eY);
            }, [eK, e$, eY, ea]),
            l.useEffect(() => {
                eV && ei?.(eQ, eY);
            }, [eQ, eV, eY, ei]);
        let [tH, tZ] = l.useState(!1),
            tz = l.useRef(null),
            tX = l.useRef(0);
        l.useLayoutEffect(() => {
            tX.current = performance.now();
        }, []);
        let tW = l.useCallback(() => {
                null != tz.current && clearTimeout(tz.current),
                    eY !== o.Q6.PLAYING ||
                        (tz.current = setTimeout(
                            () => {
                                eY === o.Q6.PLAYING && tZ(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tX.current)),
                        ));
            }, [eY]),
            tJ = l.useCallback(() => {
                tZ(!1), (tX.current = performance.now()), tW();
            }, [tW]);
        l.useEffect(() => {
            if (eY !== o.Q6.PLAYING) {
                tZ(!1), null != tz.current && clearTimeout(tz.current);
                return;
            }
            return (
                tW(),
                () => {
                    null != tz.current && clearTimeout(tz.current);
                }
            );
        }, [eY, tW]),
            l.useEffect(
                () => () => {
                    null != e3.current && clearTimeout(e3.current);
                },
                [],
            );
        let tq = !tH && (eX || eZ || eY === o.Q6.ENDED),
            t0 = l.useRef(z);
        t0.current = z;
        let t1 = l.useCallback(() => {
                let e = (0, S.qf)(tN.current?.parentNode, tN.current);
                null == e || (0, S._U)(e) || (e.removeEventListener(S.Wb, t1), tw(!1), t0.current?.(!1), tV(o.oA.MD));
            }, []),
            t2 = () => {
                null == tN.current ||
                    (t4(Math.max((e5.current ?? tN.current.currentTime) - 10, 0)),
                    eY === o.Q6.ENDED && tY(o.Q6.PAUSED, o.KB.SEEK));
            },
            t6 = () => {
                if (null == tN.current) return;
                let e = Math.min((e5.current ?? tN.current.currentTime) + 10, t$);
                t4(e), eY !== o.Q6.ENDED && e >= tN.current.duration && tY(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = tN.current;
            return () => {
                let t = (0, S.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(S.Wb, t1);
            };
        }, [t1]);
        let t4 = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tN.current) return;
                    let n = tN.current.currentTime;
                    (e5.current = e),
                        e1((e / (tN.current.duration ?? 1)) * 100),
                        e4(!0),
                        null != e3.current && clearTimeout(e3.current),
                        (e3.current = setTimeout(() => {
                            e4(!1), (e3.current = null);
                        }, 100)),
                        (e7.current = !0),
                        (tN.current.currentTime = e),
                        t && es?.(n, e);
                },
                [es],
            ),
            t3 = () => {
                if (null != tN.current)
                    switch (eY) {
                        case o.Q6.ENDED:
                            t4(0), tY(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            tj(o.KB.USER), tY(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tY(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            t9 = (e) => {
                tF(e);
            },
            t8 = (e) => {
                tF((t) => (t?.id === e.id ? null : t));
            },
            t7 = l.useCallback(() => {
                if (null == tN.current || 0 === tN.current.textTracks.length) return;
                let e = tN.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, T.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => t9(n)), (n.onexit = () => t8(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == tA.current) return;
            let e = tA.current;
            return (
                e.addEventListener("load", t7),
                () => {
                    null != e && e.removeEventListener("load", t7);
                }
            );
        }, [t7]);
        let t5 = (e) => {
                if (null != tN.current) {
                    if (e9 === o.h$.BUFFERING) {
                        let e = null != tm.current ? performance.now() - tm.current : null;
                        el?.(e);
                    } else if (e9 === o.h$.LOADING) {
                        let e = null != td.current ? performance.now() - td.current : null;
                        et?.(e);
                    }
                    e8(o.h$.READY), eY === o.Q6.PLAYING && (tl.current || tY(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            ne = (e) => {
                if ((t4(e), eY === o.Q6.ENDED && !ta.current)) {
                    let t = tN.current?.duration;
                    (null == t || Number.isNaN(t) || e < t) && tY(o.Q6.PLAYING, o.KB.USER);
                }
            },
            [{ controlBarAnimSpring: nt }, nn] = (0, m.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: F,
                onStart: () => {
                    to(!1);
                },
                onRest: () => {
                    to(!0);
                },
            })),
            nr = (0, l.useRef)(null),
            [{ captionHeightSpring: nl }, na] = (0, m.z)(() => ({ from: { captionHeightSpring: 0 }, config: F }));
        l.useEffect(
            () => (
                na({ captionHeightSpring: tE && null != tB ? (nr.current?.clientHeight ?? 0) : 0, immediate: tC }),
                () => {
                    nl.stop();
                }
            ),
            [tE, na, tC, tB, nl],
        ),
            l.useEffect(
                () => (
                    nn({ controlBarAnimSpring: tq || tn ? 1 : 0, immediate: tC }),
                    () => {
                        nt.stop();
                    }
                ),
                [tq, nn, tC, tn, nt],
            );
        let ni = eY === o.Q6.ENDED && null != H,
            ns = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != tN.current && (t4(0), tY(o.Q6.PLAYING, e));
                },
                [t4, tY],
            ),
            nu = l.useRef(null),
            no = l.useCallback(
                (e) => {
                    tJ(), nu.current?.(e.nativeEvent);
                },
                [tJ],
            );
        return (0, r.jsx)(h.D, {
            className: B.W6,
            "data-fullscreen": tS,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                ez(!0), tZ(!1), (tX.current = performance.now()), null != tz.current && clearTimeout(tz.current);
            },
            onMouseLeave: () => {
                ez(!1), tZ(!1);
            },
            onMouseMove: tJ,
            children: (0, r.jsxs)("div", {
                className: i()(B.NS, { [B.DO]: "portrait" === c, [B.r7]: "landscape" === c }),
                tabIndex: -1,
                onKeyDown: no,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    eP && !tC && (0, r.jsx)("canvas", { ref: ty, className: B.Xm }),
                    ni && H?.({ replay: ns }),
                    (0, r.jsxs)(b.A, {
                        ref: (e) => {
                            (tN.current = e),
                                (eG.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: a,
                        playsInline: !0,
                        mediaLayoutType: tS ? D.dG.STATIC : D.dG.RESPONSIVE,
                        className: i()({ [B.R]: ni, [B.IR]: !0, [B.FP]: "cover" === eD && !tS }),
                        controls: !1,
                        poster: U,
                        preload: eh,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != tN.current &&
                                (K?.(tN.current.currentTime, tN.current.duration),
                                e7.current || e2((tN.current.currentTime / tN.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            e8(o.h$.READY), $?.(), ta.current || tY(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                        },
                        onLoadedData: (e) => {
                            if (e9 === o.h$.LOADING) {
                                let e = null != td.current ? performance.now() - td.current : null;
                                et?.(e), e8(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tN.current) return;
                            O > 0 && !tk && t4(O, !1), tp ? (tN.current.volume = 0) : (tN.current.volume = th);
                            let t = tN.current.duration;
                            t > 0 && isFinite(t) && tU(t), tK(!0);
                        },
                        onLoadStart: () => {
                            (td.current = performance.now()), ee?.();
                        },
                        onPlaying: () => {
                            tc.current && (en?.(performance.now()), (tc.current = !1));
                        },
                        onWaiting: (e) => {
                            (tm.current = performance.now()), er?.(), e8(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == tN.current) return;
                            let t = [];
                            for (let e = 0; e < tN.current.buffered.length; e++) {
                                let n = tN.current.buffered.start(e),
                                    r = tN.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / tN.current.duration, size: (r - n) / tN.current.duration });
                            }
                            tt(t);
                        },
                        onCanPlay: t5,
                        onCanPlayThrough: t5,
                        onSeeked: () => {
                            (e7.current = !1),
                                (e5.current = null),
                                null != tN.current && e2((tN.current.currentTime / tN.current.duration) * 100);
                        },
                        onAbort: () => tM(o.SB.ABORT),
                        onError: () => tM(o.SB.ERROR),
                        onEmptied: () => tM(o.SB.EMPTIED),
                        onStalled: () => tM(o.SB.STALLED),
                        onClick: (e) => {
                            null != em ? em(e) : t3();
                        },
                        crossOrigin: ek ?? void 0,
                        children: [
                            null != G &&
                                (0, r.jsx)("track", {
                                    ref: tA,
                                    src: G,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            null != ej && (0, r.jsx)("track", { ref: eU, src: ej, kind: "metadata" }),
                            !tk &&
                                !tI &&
                                (0, r.jsx)("source", {
                                    onError: () => tM(o.SB.SOURCE_ERROR),
                                    src: eF,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    e9 !== o.h$.READY &&
                        eY === o.Q6.PLAYING &&
                        null != eF &&
                        (0, r.jsx)("span", {
                            className: i()(B.S, { [B.F]: "center" === eM }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(f.y, { type: f.y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(L.A, {
                        message: e_({ hasVideoAsset: null != eF, playerState: eY, pauseReason: tT }),
                        showOverlay: null == eF,
                    }),
                    null != eu &&
                        (0, r.jsx)(s.animated.div, {
                            className: B.MU,
                            style: {
                                opacity: (0, s.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, s.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, s.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: eu(),
                        }),
                    tx &&
                        eY !== o.Q6.ENDED &&
                        null != Y &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h.D, {
                                    onClick: () => {
                                        eY === o.Q6.PAUSED && tY(o.Q6.PLAYING, o.KB.USER), tg(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: B.BG }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: i()(B.xr, ec, { [B.MZ]: "portrait" === c }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, s.to)([nt, nl], (e, t) => `${e * tG[tQ] + t}px`) },
                                    children: (0, r.jsx)(R.X, {
                                        text: Y,
                                        onClose: () => {
                                            tg(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: B.Jp,
                        style: { opacity: (0, s.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(B.yf, {
                                [B.ZH]: ts.current && eY === o.Q6.PLAYING,
                                [B.v7]: ts.current && eY === o.Q6.PAUSED,
                            }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eY === o.Q6.PLAYING
                                    ? (0, r.jsx)(p.u, { className: B.PK })
                                    : (0, r.jsx)(v.E, { className: B.PK }),
                        },
                        eY,
                    ),
                    tE &&
                        null != tB &&
                        !ni &&
                        (0, r.jsx)(s.animated.div, {
                            className: B.o$,
                            ref: nr,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, s.to)(
                                    [nt.to({ range: [0, 1], output: [-20, -tG[tQ]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(x.E, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: B.qh,
                                children: tB.text,
                            }),
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: B.r8,
                        style: { height: (0, s.to)([nt.to({ range: [0, 1], output: [0, tG[tQ]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(s.animated.div, {
                                style: {
                                    transform: (0, s.to)(
                                        [nt.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: tq || tn || eN ? void 0 : _,
                                    children: (0, r.jsx)(A.Ay, {
                                        percent: null != e0 ? e0 : eJ,
                                        animate:
                                            !0 !== tR.current && !e6 && eY === o.Q6.PLAYING && tO && e9 === o.h$.READY,
                                        interactionEnabled: tu && t$ > 0,
                                        backgroundColor: tq || eN ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eY,
                                        preloadedBuffers: tq ? te : void 0,
                                        durationSec: t_ > 0 ? t_ : +!tO,
                                        isFullyVisible: tq && tu,
                                        maxSeekableTime: null != V && t$ > 0 ? t$ : void 0,
                                        progressClassName: ew,
                                        persistPlayhead: ey,
                                        onClick: ne,
                                        onScrubBack: t2,
                                        onScrubForward: t6,
                                        onDragStateChange: (e) => {
                                            if (((ta.current = e), tr(e), e))
                                                (tl.current = eY === o.Q6.PLAYING),
                                                    (ti.current = eY === o.Q6.ENDED),
                                                    tl.current
                                                        ? tN.current?.pause()
                                                        : ti.current && tY(o.Q6.PAUSED, o.KB.SEEK);
                                            else {
                                                let e = tN.current,
                                                    t =
                                                        null != e &&
                                                        !Number.isNaN(e.duration) &&
                                                        e.currentTime >= e.duration;
                                                tl.current
                                                    ? ((tl.current = !1),
                                                      t ? tY(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE) : e?.play())
                                                    : ti.current
                                                      ? ((ti.current = !1),
                                                        t
                                                            ? tY(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE)
                                                            : tY(o.Q6.PLAYING, o.KB.USER))
                                                      : t && tY(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                                            }
                                        },
                                        indicatorConfig: eT,
                                        scrubPreviewCues: eO,
                                        onIndicatorSeek: ne,
                                        getCurrentTimeSec: tL,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: B.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, s.to)(
                                        [nt.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 20}px`,
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [nt.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, s.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => eW(!0),
                                onBlur: () => eW(!1),
                                children: (0, r.jsx)(N.A, {
                                    videoRef: tN,
                                    playerState: eY,
                                    animSpring: nt,
                                    visible: tq,
                                    seekForwardEnabled: null == V || (tN.current?.currentTime ?? 0) + 1 < t$,
                                    hideCaptionBtn: null == G,
                                    hideTranscriptBtn: null == Y,
                                    hideFullScreenBtn: ex,
                                    hidePlaybackSpeedBtn: eb,
                                    hideSkipButtons: eg ?? "portrait" === c,
                                    compactTimeDisplay: eE,
                                    size: tQ,
                                    downloadUrl: ef,
                                    downloadContentType: ep,
                                    extraButtons: ev,
                                    autoFocus: eA,
                                    keyDownHandlerRef: nu,
                                    volume: th,
                                    muted: tp,
                                    transcriptEnabled: tx,
                                    captionEnabled: tE,
                                    fullScreenEnabled: tS,
                                    handlePlaybackBtnClick: t3,
                                    handleTranscriptBtnClick: () => {
                                        tg(!tx);
                                    },
                                    handleCaptionBtnClick: () => {
                                        tb(!tE);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !tS,
                                            t = (0, S.qf)(tN.current?.parentNode, tN.current);
                                        e && null != t
                                            ? ((0, S.tl)(t), t.addEventListener(S.Wb, t1), z?.(!0), tV(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(S.Wb, t1), z?.(!1), (0, S.sP)(t), tV(o.oA.MD)),
                                            tw(e);
                                    },
                                    handleSeekBackBtnClick: t2,
                                    handleSeekForwardBtnClick: t6,
                                    autoHideVolumeSlider: eR,
                                    handleControlBarPendingInteraction: tr,
                                    onVolumeChange: (e) => {
                                        tf(e), X?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        tv(e), W?.(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                    null != eo &&
                        (0, r.jsx)("div", {
                            className: B.MU,
                            children: eo({ playerState: eY, isControlBarExpanded: tq, videoRef: tN, isActive: !0 }),
                        }),
                ],
            }),
        });
    });
function O(e) {
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
              children: (0, r.jsx)("img", { src: t, className: B.zH, style: { objectFit: s }, alt: "", onLoad: d }),
          });
}
let K = l.forwardRef(function (e, t) {
    let { active: n = !0, onClick: a, ...s } = e,
        {
            autoplay: u,
            poster: c,
            orientation: d = "landscape",
            posterPlaceholder: m,
            posterPlaceholderVersion: f,
            renderOverlay: v,
            renderPersistentOverlay: x,
            objectFit: g,
        } = s,
        [E, b] = l.useState(!1),
        S = n || E,
        w = l.useCallback(
            (e) => {
                null != a ? a(e) : b(!0);
            },
            [a],
        ),
        C = l.useRef(null);
    return S
        ? (0, r.jsx)(U, { ...s, onClick: a, autoplay: u || E, ref: t })
        : (0, r.jsx)(h.D, {
              className: i()(B.W6, B.nZ),
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: w,
              "aria-label": I.intl.string(I.t.RscU7I),
              focusProps: { ringTarget: C },
              children: (0, r.jsxs)("div", {
                  className: i()(B.NS, { [B.DO]: "portrait" === d, [B.r7]: "landscape" === d }),
                  children: [
                      (0, r.jsx)(O, {
                          poster: c,
                          posterPlaceholder: m,
                          posterPlaceholderVersion: f,
                          orientation: d,
                          objectFit: g,
                      }),
                      null != v && (0, r.jsx)("div", { className: B.MU, children: v() }),
                      null != x &&
                          (0, r.jsx)("div", {
                              className: B.MU,
                              children: x({ playerState: o.Q6.PAUSED, isControlBarExpanded: !0, isActive: !1 }),
                          }),
                      (0, r.jsx)("div", {
                          className: B.mF,
                          ref: C,
                          children: (0, r.jsx)(p.u, { size: "xs", color: "currentColor", className: B.z_ }),
                      }),
                  ],
              }),
          });
});
