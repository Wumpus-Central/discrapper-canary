(n.r(t), n.d(t, { COMPACT_CONTROL_BAR_MAX_WIDTH_PX: () => G, default: () => W }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(202091),
    u = n(337836),
    o = n(17928),
    c = n(876230),
    d = n(231723),
    m = n(717421),
    h = n(939249),
    f = n(289873),
    p = n(782134),
    v = n(113494),
    g = n(834730),
    x = n(964486),
    E = n(770178),
    b = n(765548),
    S = n(775602),
    C = n(475815),
    y = n(718499),
    w = n(23590),
    A = n(683574),
    R = n(671897),
    P = n(906892),
    T = n(565164),
    N = n(275664),
    M = n(408121),
    I = n(984212),
    k = n(246047),
    L = n(739416),
    j = n(931853),
    D = n(90721),
    B = n(920228),
    F = n(953584),
    _ = n(338659),
    V = n(838541),
    $ = n(375708),
    H = n(862649);
let K = l.lazy(() =>
        Promise.all([n.e("156032"), n.e("919307")])
            .then(n.bind(n, 410694))
            .then((e) => ({ default: e.VideoStatsOverlay })),
    ),
    O = { tension: 250, friction: 5, clamp: !0 },
    U = { visibility: "hidden" },
    G = 400,
    Q = {
        [c.oA.SM]: {
            barHeightPx: 40,
            footerHorizontalPaddingPx: 12,
            scrimHeightPx: 72,
            controlsGapPx: 12,
            trailingGroupWidthPx: null,
        },
        [c.oA.MD]: {
            barHeightPx: 64,
            footerHorizontalPaddingPx: 20,
            scrimHeightPx: 121,
            controlsGapPx: 16,
            trailingGroupWidthPx: 200,
        },
        [c.oA.LG]: {
            barHeightPx: 72,
            footerHorizontalPaddingPx: 20,
            scrimHeightPx: 121,
            controlsGapPx: 16,
            trailingGroupWidthPx: 200,
        },
    },
    W = l.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: W = "landscape",
                videoUrlOverride: z,
                alt: Y,
                src: Z,
                poster: X,
                initialActive: J = !0,
                initialTimeSec: q = 0,
                onProgressUpdate: ee,
                onEnded: et,
                onError: en,
                maxSeekableTimeSec: er,
                captionTrackUrl: el,
                transcriptText: ea,
                renderEndScreen: ei,
                renderVideo: es = k.v,
                onPlayerStateChange: eu,
                onFullscreenChange: eo,
                onVolumeChange: ec,
                onMutedChange: ed,
                initialVolume: em = 0.3,
                initialMuted: eh = !1,
                getInitialVolume: ef,
                getInitialMuted: ep,
                onLoadStart: ev,
                onLoadEnd: eg,
                onFirstFrame: ex,
                onBufferingStart: eE,
                onBufferingEnd: eb,
                onFocusChange: eS,
                onVisibilityChange: eC,
                onSeek: ey,
                renderOverlay: ew,
                renderPersistentOverlay: eA,
                transcriptClassName: eR,
                onHlsInstance: eP,
                onClick: eT,
                preload: eN,
                downloadUrl: eM,
                fileSizeBytes: eI,
                downloadContentType: ek,
                extraButtons: eL,
                hideFullScreenBtn: ej = !1,
                hideSkipButtons: eD,
                compactTimeDisplay: eB = !1,
                hidePlaybackSpeedBtn: eF = !1,
                autoSizeControlBar: e_ = !1,
                getPlaybackBlockedMessage: eV,
                progressClassName: e$,
                pauseOnLostVisibility: eH = !1,
                persistTimeline: eK = !1,
                persistPlayhead: eO = !0,
                autoFocus: eU = !1,
                autoHideVolumeSlider: eG = !1,
                timelineIndicatorConfig: eQ,
                scrubPreviewVttUrl: eW,
                scrubPreviewImageUrl: ez,
                loadingSpinnerPosition: eY = "top-left",
                crossOrigin: eZ = "anonymous",
                withVideoHalo: eX = !1,
                objectFit: eJ = "contain",
                minWidth: eq = 240,
                minHeight: e0 = 180,
                muxContentMetadata: e1,
                awaitMuxReady: e2 = !1,
                playerRef: e6,
            } = e,
            e4 = z ?? Z,
            e8 = eV ?? j.u,
            { focused: e3, focusedChanged: e9 } = (0, L.A7)(),
            { visible: e7, visibleChanged: e5, targetRef: te } = (0, L.O7)(),
            [tt, tn] = l.useState(a ? c.Q6.PLAYING : c.Q6.PAUSED),
            [tr, tl] = l.useState(!1),
            [ta, ti] = l.useState(!1),
            [ts, tu] = l.useState(0),
            [to, tc] = l.useState(null),
            td = l.useCallback((e) => {
                (tc(null), tu(e));
            }, []),
            tm = l.useRef(null),
            [th, tf] = l.useState(!1),
            tp = l.useRef(null),
            [tv, tg] = l.useState(c.h$.LOADING),
            tx = l.useRef(!1),
            tE = l.useRef(null),
            [tb, tS] = l.useState([]),
            [tC, ty] = l.useState(!1),
            tw = l.useRef(!1),
            tA = l.useRef(!1),
            tR = l.useRef(!1),
            tP = l.useRef(!1),
            [tT, tN] = l.useState(!0),
            tM = l.useRef(!0),
            tI = l.useRef(null),
            tk = l.useRef(null),
            [tL, tj] = l.useState(a || J),
            [tD, tB] = l.useState(em),
            [tF, t_] = l.useState(eh),
            [tV, t$] = l.useState(!eG),
            [tH, tK] = l.useState(!1),
            [tO, tU] = l.useState(!1),
            [tG, tQ] = l.useState(!1),
            tW = (0, o.bG)([S.Ay], () => S.Ay.useReducedMotion),
            tz = (0, l.useRef)(null),
            tY = (0, l.useRef)(null),
            tZ = (0, l.useRef)(null),
            tX = (0, l.useRef)(null),
            tJ = l.useRef(!0),
            [tq, t0] = l.useState(null),
            t1 = l.useRef(null),
            t2 = (0, T.z5)(tL, t1, eW, ez),
            t6 = l.useCallback(() => tz.current?.currentTime ?? null, []),
            t4 = l.useMemo(
                () => ({
                    get current() {
                        return (0, k.c)(tz.current);
                    },
                }),
                [],
            );
        (0, D.A)({ videoRef: t4, canvasRef: tZ, enabled: tL && eX && !tW, canvasWidth: 32, canvasHeight: 18 });
        let {
                showStats: t8,
                videoStats: t3,
                onCloseStats: t9,
            } = (function (e) {
                let { videoRef: t, src: n, fileSizeBytes: r } = e,
                    a = null != n && "" !== n,
                    i = (0, o.bG)([F.Ay], () => !!a && F.Ay.isVideoStatsEnabled(n)),
                    [s, u] = l.useState(null);
                return (
                    l.useEffect(() => {
                        if (!i) return;
                        let e = t.current;
                        if (null == e) {
                            a && (0, F.Vh)(n, !1);
                            return;
                        }
                        let l = new _.s(e, r ?? void 0);
                        return (
                            l.startTracking(u, { emitInitial: !0 }),
                            () => {
                                l.destroy();
                            }
                        );
                    }, [i, t, n, a, r]),
                    l.useEffect(
                        () => () => {
                            a && (0, F.ke)(n);
                        },
                        [n, a],
                    ),
                    {
                        showStats: i,
                        videoStats: i ? s : null,
                        onCloseStats: l.useCallback(() => {
                            a && (0, F.Vh)(n, !1);
                        }, [n, a]),
                    }
                );
            })({ videoRef: tz, src: e4, fileSizeBytes: eI }),
            t7 = l.useCallback(
                (e, t) => {
                    en?.(e, t);
                },
                [en],
            ),
            { isHlsActive: t5, hls: ne } = (0, y.Ay)(t4, {
                src: e4,
                initialTimeSec: q,
                onError: t7,
                onHlsInstance: eP,
                crossOrigin: eZ,
            }),
            { isReady: nt } = (0, w.A)({ videoRef: t4, hls: ne, contentMetadata: e1, isHls: t5 }),
            nn = e2 && !nt && !t5,
            [nr, nl] = l.useState(null),
            [na, ni] = l.useState(0),
            [ns, nu] = l.useState(!1),
            no = er ?? tz.current?.duration ?? 0,
            [nc, nd] = l.useState(!1),
            nm = (0, b.A)((e) => {
                let t = e.contentRect.width;
                t <= 0 || nd(t < G);
            });
        (0, E.g)(tY, nm, [], { enabled: e_, fireOnMount: e_ });
        let nh = tG ? c.oA.LG : e_ && nc ? c.oA.SM : c.oA.MD,
            nf = Q[nh];
        (0, x.u5)(() => {
            tJ.current && (tJ.current = !1);
        });
        let np = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tP.current = !0), tn(e), eu?.(e, t), null != tz.current))
                    switch (e) {
                        case c.Q6.PLAYING:
                            (t0(null), tj(!0), tz.current.play());
                            break;
                        case c.Q6.PAUSED:
                            ((tw.current = !1), tz.current.pause(), (tM.current = !1));
                            break;
                        case c.Q6.ENDED:
                            tK(!1);
                    }
            },
            [eu],
        );
        (l.useEffect(() => {
            if (!eH) return;
            let e = null != n && (n === d.ip.HIDDEN || n === d.ip.EXITING || n === d.ip.EXITED),
                t = null != n && e5 && !e7,
                r = e9 && !e3;
            if ((e || t || r) && null != tz.current && tt === c.Q6.PLAYING) {
                let n = e || t ? c.KB.VISIBILITY : c.KB.FOCUS;
                (t0(n), np(c.Q6.PAUSED, n));
            }
        }, [eH, n, e3, e9, e7, e5, tt, np]),
            (0, B.A)({
                videoRef: t4,
                enabled: eH,
                onPipPause: () => {
                    (t0(c.KB.PICTURE_IN_PICTURE), np(c.Q6.PAUSED, c.KB.PICTURE_IN_PICTURE));
                },
                onHiddenPause: () => {
                    (t0(c.KB.FOCUS), np(c.Q6.PAUSED, c.KB.FOCUS));
                },
            }),
            l.useEffect(() => {
                e9 && eS?.(e3, tt);
            }, [e3, e9, tt, eS]),
            l.useEffect(() => {
                e5 && eC?.(e7, tt);
            }, [e7, e5, tt, eC]));
        let [nv, ng] = l.useState(!1),
            nx = l.useRef(null),
            nE = l.useRef(0);
        l.useLayoutEffect(() => {
            nE.current = performance.now();
        }, []);
        let nb = l.useCallback(() => {
                switch ((null != nx.current && clearTimeout(nx.current), tt)) {
                    case c.Q6.PLAYING:
                        nx.current = setTimeout(
                            () => {
                                ng(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - nE.current)),
                        );
                    case c.Q6.PAUSED:
                    case c.Q6.ENDED:
                }
            }, [tt]),
            nS = l.useCallback(() => {
                (ng(!1), (nE.current = performance.now()), nb());
            }, [nb]);
        (l.useEffect(() => {
            if (tt !== c.Q6.PLAYING) {
                (ng(!1), null != nx.current && clearTimeout(nx.current));
                return;
            }
            return (
                nb(),
                () => {
                    null != nx.current && clearTimeout(nx.current);
                }
            );
        }, [tt, nb]),
            l.useEffect(
                () => () => {
                    null != tp.current && clearTimeout(tp.current);
                },
                [],
            ));
        let nC = !nv && (ta || tr || tt === c.Q6.ENDED),
            ny = l.useRef(eo);
        ny.current = eo;
        let nw = l.useCallback(() => {
            let e = (0, C.qf)(tY.current);
            null == e || (0, C._U)(e) || (e.removeEventListener(C.Wb, nw), tQ(!1), ny.current?.(!1));
        }, []);
        function nA() {
            null == tz.current ||
                (nP(Math.max((tE.current ?? tz.current.currentTime) - 10, 0)),
                tt === c.Q6.ENDED && np(c.Q6.PAUSED, c.KB.SEEK));
        }
        function nR() {
            if (null == tz.current) return;
            let e = Math.min((tE.current ?? tz.current.currentTime) + 10, no);
            (nP(e), tt !== c.Q6.ENDED && e >= tz.current.duration && np(c.Q6.ENDED, c.KB.SEEK));
        }
        l.useEffect(() => {
            let e = tY.current;
            return () => {
                let t = (0, C.qf)(e);
                null != t && t.removeEventListener(C.Wb, nw);
            };
        }, [nw]);
        let nP = l.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == tz.current) return;
                let n = tz.current.currentTime;
                ((tE.current = e),
                    tc((e / (tz.current.duration ?? 1)) * 100),
                    tf(!0),
                    null != tp.current && clearTimeout(tp.current),
                    (tp.current = setTimeout(() => {
                        (tf(!1), (tp.current = null));
                    }, 100)),
                    (tx.current = !0),
                    (tz.current.currentTime = e),
                    t && ey?.(n, e));
            },
            [ey],
        );
        function nT() {
            if (null != tz.current)
                switch (tt) {
                    case c.Q6.ENDED:
                        (nP(0), np(c.Q6.PLAYING, c.KB.USER));
                        break;
                    case c.Q6.PLAYING:
                        (t0(c.KB.USER), np(c.Q6.PAUSED, c.KB.USER));
                        break;
                    default:
                        np(c.Q6.PLAYING, c.KB.USER);
                }
        }
        function nN(e) {
            null != eT ? eT(e) : (tj(!0), nT());
        }
        let nM = l.useCallback(() => {
            if (null == tz.current || 0 === tz.current.textTracks.length) return;
            let e = tz.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, I.C)(n) &&
                        ((n.id = `cue-${t}`),
                        (n.onenter = () => {
                            nl(n);
                        }),
                        (n.onexit = () =>
                            (function (e) {
                                nl((t) => (t?.id === e.id ? null : t));
                            })(n)));
                }
        }, []);
        function nI(e) {
            if (null != tz.current) {
                if (tv === c.h$.BUFFERING) {
                    let e = null != tk.current ? performance.now() - tk.current : null;
                    eb?.(e);
                } else if (tv === c.h$.LOADING) {
                    let e = null != tI.current ? performance.now() - tI.current : null;
                    eg?.(e);
                }
                (tg(c.h$.READY), tt === c.Q6.PLAYING && (tw.current || np(c.Q6.PLAYING, c.KB.BUFFERING_RECOVERY)));
            }
        }
        function nk(e) {
            if ((nP(e), tt === c.Q6.ENDED && !tA.current)) {
                let t = tz.current?.duration;
                (null == t || Number.isNaN(t) || e < t) && np(c.Q6.PLAYING, c.KB.USER);
            }
        }
        l.useEffect(() => {
            if (null == tX.current) return;
            let e = tX.current;
            return (
                e.addEventListener("load", nM),
                () => {
                    null != e && e.removeEventListener("load", nM);
                }
            );
        }, [nM]);
        let [{ controlBarAnimSpring: nL }, nj] = (0, m.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: O,
                onStart: () => {
                    tN(!1);
                },
                onRest: () => {
                    tN(!0);
                },
            })),
            nD = (0, l.useRef)(null),
            [{ captionHeightSpring: nB }, nF] = (0, m.z)(() => ({ from: { captionHeightSpring: 0 }, config: O }));
        (l.useEffect(
            () => (
                nF({ captionHeightSpring: tO && null != nr ? (nD.current?.clientHeight ?? 0) : 0, immediate: tW }),
                () => {
                    nB.stop();
                }
            ),
            [tO, nF, tW, nr, nB],
        ),
            l.useEffect(
                () => (
                    nj({ controlBarAnimSpring: nC || tC ? 1 : 0, immediate: tW }),
                    () => {
                        nL.stop();
                    }
                ),
                [nC, nj, tW, tC, nL],
            ));
        let n_ = tt === c.Q6.ENDED && null != ei,
            nV = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.KB.USER;
                    null != tz.current && (nP(0), np(c.Q6.PLAYING, e));
                },
                [nP, np],
            ),
            n$ = l.useRef(null),
            nH = l.useCallback(
                (e) => {
                    (nS(), n$.current?.(e.nativeEvent));
                },
                [nS],
            );
        l.useImperativeHandle(
            e6,
            () => ({
                play: () => {
                    np(c.Q6.PLAYING, c.KB.USER);
                },
                pause: () => {
                    np(c.Q6.PAUSED, c.KB.USER);
                },
                seek: (e) => {
                    nP(e);
                },
            }),
            [np, nP],
        );
        let nK = {
                ref: l.useCallback(
                    (e) => {
                        tz.current = e;
                        let n = (0, k.c)(e);
                        ((te.current = n), "function" == typeof t ? t(n) : null != t && (t.current = n));
                    },
                    [t, te],
                ),
                alt: Y,
                playsInline: !0,
                mediaLayoutType: tG ? V.dG.STATIC : V.dG.RESPONSIVE,
                className: i()({ [H.R]: n_, [H.IR]: !0, [H.FP]: "cover" === eJ && !tG }),
                controls: !1,
                poster: X,
                preload: tL ? eN : "none",
                disablePictureInPicture: !0,
                "data-testid": "discord-web-video-player-video",
                onTimeUpdate: function (e) {
                    null != tz.current &&
                        (ee?.(tz.current.currentTime, tz.current.duration),
                        tx.current || td((tz.current.currentTime / tz.current.duration) * 100));
                },
                onEnded: function (e) {
                    (tg(c.h$.READY), et?.(), tA.current || np(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE));
                },
                onLoadedData: function (e) {
                    if (tv === c.h$.LOADING) {
                        let e = null != tI.current ? performance.now() - tI.current : null;
                        (eg?.(e), tg(c.h$.READY));
                    }
                },
                onLoadedMetadata: function (e) {
                    if (null == tz.current) return;
                    q > 0 && !t5 && nP(q, !1);
                    let t = ef?.() ?? tD,
                        n = ep?.() ?? tF;
                    (t !== tD && tB(t), n !== tF && t_(n), (tz.current.volume = n ? 0 : t));
                    let r = tz.current.duration;
                    (r > 0 && isFinite(r) && ni(r), nu(!0));
                },
                onLoadStart: function () {
                    ((tI.current = performance.now()), ev?.());
                },
                onPlaying: function () {
                    tM.current && (ex?.(performance.now()), (tM.current = !1));
                },
                onWaiting: function (e) {
                    ((tk.current = performance.now()), eE?.(), tg(c.h$.BUFFERING));
                },
                onProgress: function (e) {
                    if (null == tz.current) return;
                    let t = [];
                    for (let e = 0; e < tz.current.buffered.length; e++) {
                        let n = tz.current.buffered.start(e),
                            r = tz.current.buffered.end(e);
                        r - n < 1 || t.push({ start: n / tz.current.duration, size: (r - n) / tz.current.duration });
                    }
                    tS(t);
                },
                onCanPlay: nI,
                onCanPlayThrough: nI,
                onSeeked: function () {
                    ((tx.current = !1),
                        (tE.current = null),
                        null != tz.current && td((tz.current.currentTime / tz.current.duration) * 100));
                },
                onAbort: function () {
                    return t7(c.SB.ABORT);
                },
                onError: function () {
                    return t7(c.SB.ERROR);
                },
                onEmptied: function () {
                    return t7(c.SB.EMPTIED);
                },
                onStalled: function () {
                    return t7(c.SB.STALLED);
                },
                onClick: nN,
                crossOrigin: eZ ?? void 0,
                src: t5 || nn ? null : (e4 ?? null),
                onSourceError: function () {
                    return t7(c.SB.SOURCE_ERROR);
                },
                isScrubbing: tC,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != el &&
                            (0, r.jsx)("track", {
                                ref: tX,
                                src: el,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != eW && (0, r.jsx)("track", { ref: t1, src: eW, kind: "metadata" }),
                    ],
                }),
            },
            nO = (0, r.jsx)(P.BK, {
                children: (0, r.jsx)(A.pT, {
                    activeLayer: tG ? P.$W : void 0,
                    isFullscreen: tG,
                    videoRef: tz,
                    isActive: tL,
                    isControlBarExpanded: nC,
                    children: (0, r.jsx)(h.D, {
                        className: i()(H.W6, { [H.nZ]: !tL }),
                        style: { minWidth: eq, minHeight: e0 },
                        "data-fullscreen": tG,
                        "data-testid": "discord-web-video-player-container",
                        tabIndex: tL ? -1 : 0,
                        focusProps: tL ? void 0 : { ringTarget: tm },
                        onMouseEnter: function () {
                            (tl(!0),
                                ng(!1),
                                (nE.current = performance.now()),
                                null != nx.current && clearTimeout(nx.current));
                        },
                        onMouseLeave: function () {
                            (tl(!1), ng(!1));
                        },
                        "aria-label": tL ? void 0 : $.intl.string($.t.RscU7I),
                        onClick: tL ? void 0 : nN,
                        onMouseMove: nS,
                        children: (0, r.jsxs)("div", {
                            ref: tY,
                            className: i()(H.NS, { [H.DO]: "portrait" === W, [H.r7]: "landscape" === W }),
                            tabIndex: -1,
                            onKeyDown: nH,
                            "data-testid": "discord-web-video-player-frame",
                            style: {
                                "--custom-footer-horizontal-padding": `${nf.footerHorizontalPaddingPx}px`,
                                "--custom-footer-bottom": "4px",
                                "--custom-footer-scrim-height": `${nf.scrimHeightPx}px`,
                                "--custom-controls-gap": `${nf.controlsGapPx}px`,
                                "--custom-controls-end-width":
                                    null != nf.trailingGroupWidthPx ? `${nf.trailingGroupWidthPx}px` : "auto",
                            },
                            children: [
                                tL && eX && !tW && (0, r.jsx)("canvas", { ref: tZ, className: H.Xm }),
                                n_ && ei?.({ replay: nV }),
                                es(nK),
                                tv !== c.h$.READY &&
                                    tt === c.Q6.PLAYING &&
                                    null != e4 &&
                                    (0, r.jsx)("span", {
                                        className: i()(H.S, { [H.F]: "center" === eY }),
                                        "data-testid": "discord-web-video-player-loading-spinner",
                                        children: (0, r.jsx)(f.y, { type: f.y.Type.WANDERING_CUBES }),
                                    }),
                                (0, r.jsx)(j.A, {
                                    message: e8({ hasVideoAsset: null != e4, playerState: tt, pauseReason: tq }),
                                    showOverlay: null == e4,
                                }),
                                t8 &&
                                    null != t3 &&
                                    (0, r.jsx)(l.Suspense, {
                                        fallback: null,
                                        children: (0, r.jsx)(K, { stats: t3, onClose: t9 }),
                                    }),
                                null != ew &&
                                    (0, r.jsx)(s.animated.div, {
                                        className: H.MU,
                                        style: {
                                            opacity: (0, s.to)(
                                                [nL.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e}`,
                                            ),
                                            visibility: (0, s.to)([nL.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                                e < 0.1 ? "hidden" : "visible",
                                            ),
                                            pointerEvents: (0, s.to)([nL.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                                e < 0.3 ? "none" : "auto",
                                            ),
                                        },
                                        children: ew(),
                                    }),
                                tH &&
                                    tt !== c.Q6.ENDED &&
                                    null != ea &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(h.D, {
                                                onClick: () => {
                                                    (tt === c.Q6.PAUSED && np(c.Q6.PLAYING, c.KB.USER), tK(!1));
                                                },
                                                tabIndex: -1,
                                                children: (0, r.jsx)("div", { className: H.BG }),
                                            }),
                                            (0, r.jsx)(s.animated.div, {
                                                className: i()(H.xr, eR, { [H.MZ]: "portrait" === W }),
                                                "data-testid": "discord-web-video-player-transcript",
                                                style: {
                                                    marginBottom: (0, s.to)(
                                                        [nL, nB],
                                                        (e, t) => `${e * nf.barHeightPx + t}px`,
                                                    ),
                                                },
                                                children: (0, r.jsx)(M.X, {
                                                    text: ea,
                                                    onClose: function () {
                                                        tK(!1);
                                                    },
                                                }),
                                            }),
                                        ],
                                    }),
                                tL &&
                                    (0, r.jsx)(s.animated.div, {
                                        className: H.Jp,
                                        style: {
                                            opacity: (0, s.to)(
                                                [nL.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e}`,
                                            ),
                                        },
                                    }),
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: i()(H.yf, {
                                            [H.ZH]: tP.current && tt === c.Q6.PLAYING,
                                            [H.v7]: tP.current && tt === c.Q6.PAUSED,
                                        }),
                                        style: { "--custom-play-pause-pop-ms": "1000ms" },
                                        children:
                                            tt === c.Q6.PLAYING
                                                ? (0, r.jsx)(p.PlayIcon, { className: H.PK })
                                                : (0, r.jsx)(v.PauseIcon, { className: H.PK }),
                                    },
                                    tt,
                                ),
                                tO &&
                                    null != nr &&
                                    !n_ &&
                                    (0, r.jsx)(s.animated.div, {
                                        className: H.o$,
                                        ref: nD,
                                        "data-testid": "discord-web-video-player-captions",
                                        style: {
                                            translateY: (0, s.to)(
                                                [nL.to({ range: [0, 1], output: [-20, -nf.barHeightPx] })],
                                                (e) => `${e}px`,
                                            ),
                                        },
                                        children: (0, r.jsx)(g.E, {
                                            variant: "text-lg/semibold",
                                            color: "text-overlay-light",
                                            className: H.qh,
                                            children: nr.text,
                                        }),
                                    }),
                                tL &&
                                    (0, r.jsxs)(s.animated.div, {
                                        className: H.r8,
                                        style: {
                                            height: (0, s.to)(
                                                [nL.to({ range: [0, 1], output: [0, nf.barHeightPx] })],
                                                (e) => `${e}px`,
                                            ),
                                        },
                                        children: [
                                            (0, r.jsx)(s.animated.div, {
                                                style: {
                                                    transform: (0, s.to)(
                                                        [nL.to({ range: [1, 0], output: [0, 1] })],
                                                        (e) => `translateY(-${20 * e}px)`,
                                                    ),
                                                },
                                                children: (0, r.jsx)("div", {
                                                    style: nC || tC || eK ? void 0 : U,
                                                    children: (0, r.jsx)(N.Ay, {
                                                        percent: null != to ? to : ts,
                                                        animate:
                                                            !0 !== tJ.current &&
                                                            !th &&
                                                            tt === c.Q6.PLAYING &&
                                                            ns &&
                                                            tv === c.h$.READY,
                                                        interactionEnabled: tT && no > 0,
                                                        backgroundColor: nC || eK ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                        playerState: tt,
                                                        preloadedBuffers: nC ? tb : void 0,
                                                        durationSec: na > 0 ? na : +!ns,
                                                        isFullyVisible: nC && tT,
                                                        maxSeekableTime: null != er && no > 0 ? no : void 0,
                                                        progressClassName: e$,
                                                        persistPlayhead: eO,
                                                        onClick: nk,
                                                        onScrubBack: nA,
                                                        onScrubForward: nR,
                                                        onDragStateChange: function (e) {
                                                            if (((tA.current = e), ty(e), e))
                                                                ((tw.current = tt === c.Q6.PLAYING),
                                                                    (tR.current = tt === c.Q6.ENDED),
                                                                    tw.current
                                                                        ? tz.current?.pause()
                                                                        : tR.current && np(c.Q6.PAUSED, c.KB.SEEK));
                                                            else {
                                                                let e = tz.current,
                                                                    t =
                                                                        null != e &&
                                                                        !Number.isNaN(e.duration) &&
                                                                        e.currentTime >= e.duration;
                                                                tw.current
                                                                    ? ((tw.current = !1),
                                                                      t
                                                                          ? np(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                                                          : e?.play())
                                                                    : tR.current
                                                                      ? ((tR.current = !1),
                                                                        t
                                                                            ? np(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                                                            : np(c.Q6.PLAYING, c.KB.USER))
                                                                      : t && np(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE);
                                                            }
                                                        },
                                                        indicatorConfig: eQ,
                                                        scrubPreviewCues: t2,
                                                        onIndicatorSeek: nk,
                                                        getCurrentTimeSec: t6,
                                                        "data-testid": "discord-web-video-player-timeline",
                                                    }),
                                                }),
                                            }),
                                            (0, r.jsx)(s.animated.div, {
                                                className: H.uN,
                                                "data-testid": "discord-web-video-player-controls",
                                                style: {
                                                    paddingTop: (0, s.to)(
                                                        [nL.to({ range: [0, 1], output: [0, 1] })],
                                                        (e) => `${e * e * 20}px`,
                                                    ),
                                                    paddingBottom: (0, s.to)(
                                                        [nL.to({ range: [0, 1], output: [0, 1] })],
                                                        (e) => `${e * e * 20}px`,
                                                    ),
                                                    pointerEvents: (0, s.to)(
                                                        [nL.to({ range: [0, 1], output: [0, 1] })],
                                                        (e) => (e < 0.3 ? "none" : "auto"),
                                                    ),
                                                },
                                                onFocus: function () {
                                                    return ti(!0);
                                                },
                                                onBlur: function () {
                                                    return ti(!1);
                                                },
                                                children: (0, r.jsx)(R.A, {
                                                    playerState: tt,
                                                    animSpring: nL,
                                                    visible: nC,
                                                    seekForwardEnabled:
                                                        null == er || (tz.current?.currentTime ?? 0) + 1 < no,
                                                    hideCaptionBtn: null == el,
                                                    hideTranscriptBtn: null == ea,
                                                    hideFullScreenBtn: ej,
                                                    hidePlaybackSpeedBtn: eF,
                                                    hideSkipButtons: eD ?? "portrait" === W,
                                                    compactTimeDisplay: eB,
                                                    size: nh,
                                                    downloadUrl: eM,
                                                    downloadContentType: ek,
                                                    extraButtons: eL,
                                                    autoFocus: eU,
                                                    keyDownHandlerRef: n$,
                                                    volume: tD,
                                                    muted: tF,
                                                    transcriptEnabled: tH,
                                                    captionEnabled: tO,
                                                    handlePlaybackBtnClick: nT,
                                                    handleTranscriptBtnClick: function () {
                                                        tK(!tH);
                                                    },
                                                    handleCaptionBtnClick: function () {
                                                        tU(!tO);
                                                    },
                                                    handleFullScreenBtnClick: function () {
                                                        let e = !tG,
                                                            t = (0, C.qf)(tY.current);
                                                        (e && null != t
                                                            ? ((0, C.tl)(t), t.addEventListener(C.Wb, nw), eo?.(!0))
                                                            : e ||
                                                              null == t ||
                                                              (t.removeEventListener(C.Wb, nw), eo?.(!1), (0, C.sP)(t)),
                                                            tQ(e));
                                                    },
                                                    handleSeekBackBtnClick: nA,
                                                    handleSeekForwardBtnClick: nR,
                                                    autoHideVolumeSlider: eG,
                                                    handleControlBarPendingInteraction: ty,
                                                    onVolumeChange: function (e) {
                                                        (tB(e), ec?.(e));
                                                    },
                                                    onMutedChange: function (e) {
                                                        (t_(e), ed?.(e));
                                                    },
                                                    onVolumeExpandedChange: function (e) {
                                                        t$(e);
                                                    },
                                                }),
                                            }),
                                        ],
                                    }),
                                null != eA &&
                                    (0, r.jsx)("div", {
                                        className: H.MU,
                                        children: eA({
                                            playerState: tt,
                                            isControlBarExpanded: nC,
                                            controlBarAnimationSpring: nL,
                                            videoRef: tz,
                                            isActive: tL,
                                            isVolumeExpanded: tV,
                                        }),
                                    }),
                                !tL &&
                                    (0, r.jsx)("div", {
                                        className: H.mF,
                                        ref: tm,
                                        children: (0, r.jsx)(p.PlayIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: H.z_,
                                        }),
                                    }),
                                (0, r.jsx)(P.bW, {}),
                                (0, r.jsx)(u.P, {}),
                            ],
                        }),
                    }),
                }),
            });
        return (0, r.jsx)(u.Jh, { enabled: tG, children: nO });
    });
