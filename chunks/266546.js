(n.r(t), n.d(t, { COMPACT_CONTROL_BAR_MAX_WIDTH_PX: () => H, default: () => Y }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(202091),
    o = n(337836),
    s = n(17928),
    c = n(876230),
    d = n(231723),
    m = n(717421),
    f = n(939249),
    p = n(289873),
    h = n(782134),
    x = n(113494),
    v = n(834730),
    E = n(964486),
    g = n(770178),
    b = n(765548),
    y = n(775602),
    S = n(475815),
    C = n(718499),
    P = n(23590),
    A = n(683574),
    R = n(671897),
    N = n(906892),
    w = n(565164),
    L = n(275664),
    T = n(408121),
    k = n(984212),
    M = n(246047),
    j = n(739416),
    D = n(931853),
    I = n(90721),
    B = n(920228),
    F = n(953584),
    _ = n(338659),
    U = n(838541),
    G = n(105292),
    $ = n(862649);
let K = l.lazy(() =>
        Promise.all([n.e("272223"), n.e("919307")])
            .then(n.bind(n, 410694))
            .then((e) => ({ default: e.VideoStatsOverlay })),
    ),
    O = { tension: 250, friction: 5, clamp: !0 },
    Q = { visibility: "hidden" },
    H = 400,
    V = {
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
    };
function Y(e) {
    let {
            parentTransitionState: t,
            autoplay: n = !1,
            orientation: a = "landscape",
            videoUrlOverride: Y,
            alt: z,
            src: X,
            poster: W,
            initialActive: Z = !0,
            initialTimeSec: q = 0,
            onProgressUpdate: J,
            onEnded: ee,
            onError: et,
            maxSeekableTimeSec: en,
            captionTrackUrl: er,
            transcriptText: el,
            renderEndScreen: ea,
            renderVideo: ei = M.v,
            onPlayerStateChange: eu,
            onFullscreenChange: eo,
            onVolumeChange: es,
            onMutedChange: ec,
            initialVolume: ed = 0.3,
            initialMuted: em = !1,
            getInitialVolume: ef,
            getInitialMuted: ep,
            onLoadStart: eh,
            onLoadEnd: ex,
            onFirstFrame: ev,
            onBufferingStart: eE,
            onBufferingEnd: eg,
            onFocusChange: eb,
            onVisibilityChange: ey,
            onSeek: eS,
            renderOverlay: eC,
            renderPersistentOverlay: eP,
            transcriptClassName: eA,
            onHlsInstance: eR,
            onClick: eN,
            preload: ew,
            downloadUrl: eL,
            fileSizeBytes: eT,
            downloadContentType: ek,
            extraButtons: eM,
            hideFullScreenBtn: ej = !1,
            hideSkipButtons: eD,
            compactTimeDisplay: eI = !1,
            hidePlaybackSpeedBtn: eB = !1,
            autoSizeControlBar: eF = !1,
            getPlaybackBlockedMessage: e_,
            progressClassName: eU,
            pauseOnLostVisibility: eG = !1,
            persistTimeline: e$ = !1,
            persistPlayhead: eK = !0,
            autoFocus: eO = !1,
            autoHideVolumeSlider: eQ = !1,
            timelineIndicatorConfig: eH,
            scrubPreviewVttUrl: eV,
            scrubPreviewImageUrl: eY,
            loadingSpinnerPosition: ez = "top-left",
            crossOrigin: eX = "anonymous",
            withVideoHalo: eW = !1,
            objectFit: eZ = "contain",
            minWidth: eq = 240,
            minHeight: eJ = 180,
            muxContentMetadata: e0,
            awaitMuxReady: e1 = !1,
            playerRef: e2,
            ref: e6,
        } = e,
        e4 = Y ?? X,
        e8 = e_ ?? D.u,
        { focused: e9, focusedChanged: e7 } = (0, j.A7)(),
        { visible: e3, visibleChanged: e5, targetRef: te } = (0, j.O7)(),
        [tt, tn] = l.useState(n ? c.Q6.PLAYING : c.Q6.PAUSED),
        [tr, tl] = l.useState(!1),
        [ta, ti] = l.useState(!1),
        [tu, to] = l.useState(0),
        [ts, tc] = l.useState(null),
        td = l.useCallback((e) => {
            (tc(null), to(e));
        }, []),
        tm = l.useRef(null),
        [tf, tp] = l.useState(!1),
        th = l.useRef(null),
        [tx, tv] = l.useState(c.h$.LOADING),
        tE = l.useRef(!1),
        tg = l.useRef(null),
        [tb, ty] = l.useState([]),
        [tS, tC] = l.useState(!1),
        tP = l.useRef(!1),
        tA = l.useRef(!1),
        tR = l.useRef(!1),
        tN = l.useRef(!1),
        [tw, tL] = l.useState(!0),
        tT = l.useRef(!0),
        tk = l.useRef(null),
        tM = l.useRef(null),
        [tj, tD] = l.useState(n || Z),
        [tI, tB] = l.useState(ed),
        [tF, t_] = l.useState(em),
        [tU, tG] = l.useState(!eQ),
        [t$, tK] = l.useState(!1),
        [tO, tQ] = l.useState(!1),
        [tH, tV] = l.useState(!1),
        tY = (0, s.bG)([y.Ay], () => y.Ay.useReducedMotion),
        tz = (0, l.useRef)(null),
        tX = (0, l.useRef)(null),
        tW = (0, l.useRef)(null),
        tZ = (0, l.useRef)(null),
        tq = l.useRef(!0),
        [tJ, t0] = l.useState(null),
        t1 = l.useRef(null),
        t2 = (0, w.z5)(tj, t1, eV, eY),
        t6 = l.useCallback(() => tz.current?.currentTime ?? null, []),
        t4 = l.useMemo(
            () => ({
                get current() {
                    return (0, M.c)(tz.current);
                },
            }),
            [],
        );
    (0, I.A)({ videoRef: t4, canvasRef: tW, enabled: tj && eW && !tY, canvasWidth: 32, canvasHeight: 18 });
    let {
            showStats: t8,
            videoStats: t9,
            onCloseStats: t7,
        } = (function (e) {
            let { videoRef: t, src: n, fileSizeBytes: r } = e,
                a = null != n && "" !== n,
                i = (0, s.bG)([F.Ay], () => !!a && F.Ay.isVideoStatsEnabled(n)),
                [u, o] = l.useState(null);
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
                        l.startTracking(o, { emitInitial: !0 }),
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
                    videoStats: i ? u : null,
                    onCloseStats: l.useCallback(() => {
                        a && (0, F.Vh)(n, !1);
                    }, [n, a]),
                }
            );
        })({ videoRef: tz, src: e4, fileSizeBytes: eT }),
        t3 = l.useCallback(
            (e, t) => {
                et?.(e, t);
            },
            [et],
        ),
        { isHlsActive: t5, hls: ne } = (0, C.Ay)(t4, {
            src: e4,
            initialTimeSec: q,
            onError: t3,
            onHlsInstance: eR,
            crossOrigin: eX,
        }),
        { isReady: nt } = (0, P.A)({ videoRef: t4, hls: ne, contentMetadata: e0, isHls: t5 }),
        nn = e1 && !nt && !t5,
        [nr, nl] = l.useState(null),
        [na, ni] = l.useState(0),
        [nu, no] = l.useState(!1),
        ns = en ?? tz.current?.duration ?? 0,
        [nc, nd] = l.useState(!1),
        nm = (0, b.A)((e) => {
            let t = e.contentRect.width;
            t <= 0 || nd(t < H);
        });
    (0, g.g)(tX, nm, [], { enabled: eF, fireOnMount: eF });
    let nf = tH ? c.oA.LG : eF && nc ? c.oA.SM : c.oA.MD,
        np = V[nf];
    (0, E.u5)(() => {
        tq.current && (tq.current = !1);
    });
    let nh = l.useCallback(
        function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (((tN.current = !0), tn(e), eu?.(e, t), null != tz.current))
                switch (e) {
                    case c.Q6.PLAYING:
                        (t0(null), tD(!0), tz.current.play());
                        break;
                    case c.Q6.PAUSED:
                        ((tP.current = !1), tz.current.pause(), (tT.current = !1));
                        break;
                    case c.Q6.ENDED:
                        tK(!1);
                }
        },
        [eu],
    );
    (l.useEffect(() => {
        if (!eG) return;
        let e = null != t && (t === d.ip.HIDDEN || t === d.ip.EXITING || t === d.ip.EXITED),
            n = null != t && e5 && !e3,
            r = e7 && !e9;
        if ((e || n || r) && null != tz.current && tt === c.Q6.PLAYING) {
            let t = e || n ? c.KB.VISIBILITY : c.KB.FOCUS;
            (t0(t), nh(c.Q6.PAUSED, t));
        }
    }, [eG, t, e9, e7, e3, e5, tt, nh]),
        (0, B.A)({
            videoRef: t4,
            enabled: eG,
            onPipPause: () => {
                (t0(c.KB.PICTURE_IN_PICTURE), nh(c.Q6.PAUSED, c.KB.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (t0(c.KB.FOCUS), nh(c.Q6.PAUSED, c.KB.FOCUS));
            },
        }),
        l.useEffect(() => {
            e7 && eb?.(e9, tt);
        }, [e9, e7, tt, eb]),
        l.useEffect(() => {
            e5 && ey?.(e3, tt);
        }, [e3, e5, tt, ey]));
    let [nx, nv] = l.useState(!1),
        nE = l.useRef(null),
        ng = l.useRef(0);
    l.useLayoutEffect(() => {
        ng.current = performance.now();
    }, []);
    let nb = l.useCallback(() => {
            switch ((null != nE.current && clearTimeout(nE.current), tt)) {
                case c.Q6.PLAYING:
                    nE.current = setTimeout(
                        () => {
                            nv(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - ng.current)),
                    );
                case c.Q6.PAUSED:
                case c.Q6.ENDED:
            }
        }, [tt]),
        ny = l.useCallback(() => {
            (nv(!1), (ng.current = performance.now()), nb());
        }, [nb]);
    (l.useEffect(() => {
        if (tt !== c.Q6.PLAYING) {
            (nv(!1), null != nE.current && clearTimeout(nE.current));
            return;
        }
        return (
            nb(),
            () => {
                null != nE.current && clearTimeout(nE.current);
            }
        );
    }, [tt, nb]),
        l.useEffect(
            () => () => {
                null != th.current && clearTimeout(th.current);
            },
            [],
        ));
    let nS = !nx && (ta || tr || tt === c.Q6.ENDED),
        nC = l.useRef(eo);
    nC.current = eo;
    let nP = l.useCallback(() => {
        let e = (0, S.qf)(tX.current);
        null == e || (0, S._U)(e) || (e.removeEventListener(S.Wb, nP), tV(!1), nC.current?.(!1));
    }, []);
    function nA() {
        null == tz.current ||
            (nN(Math.max((tg.current ?? tz.current.currentTime) - 10, 0)),
            tt === c.Q6.ENDED && nh(c.Q6.PAUSED, c.KB.SEEK));
    }
    function nR() {
        if (null == tz.current) return;
        let e = Math.min((tg.current ?? tz.current.currentTime) + 10, ns);
        (nN(e), tt !== c.Q6.ENDED && e >= tz.current.duration && nh(c.Q6.ENDED, c.KB.SEEK));
    }
    l.useEffect(() => {
        let e = tX.current;
        return () => {
            let t = (0, S.qf)(e);
            null != t && t.removeEventListener(S.Wb, nP);
        };
    }, [nP]);
    let nN = l.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == tz.current) return;
            let n = tz.current.currentTime;
            ((tg.current = e),
                tc((e / (tz.current.duration ?? 1)) * 100),
                tp(!0),
                null != th.current && clearTimeout(th.current),
                (th.current = setTimeout(() => {
                    (tp(!1), (th.current = null));
                }, 100)),
                (tE.current = !0),
                (tz.current.currentTime = e),
                t && eS?.(n, e));
        },
        [eS],
    );
    function nw() {
        if (null != tz.current)
            switch (tt) {
                case c.Q6.ENDED:
                    (nN(0), nh(c.Q6.PLAYING, c.KB.USER));
                    break;
                case c.Q6.PLAYING:
                    (t0(c.KB.USER), nh(c.Q6.PAUSED, c.KB.USER));
                    break;
                default:
                    nh(c.Q6.PLAYING, c.KB.USER);
            }
    }
    function nL(e) {
        null != eN ? eN(e) : (tD(!0), nw());
    }
    let nT = l.useCallback(() => {
        if (null == tz.current || 0 === tz.current.textTracks.length) return;
        let e = tz.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, k.C)(n) &&
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
    function nk(e) {
        if (null != tz.current) {
            if (tx === c.h$.BUFFERING) {
                let e = null != tM.current ? performance.now() - tM.current : null;
                eg?.(e);
            } else if (tx === c.h$.LOADING) {
                let e = null != tk.current ? performance.now() - tk.current : null;
                ex?.(e);
            }
            (tv(c.h$.READY), tt === c.Q6.PLAYING && (tP.current || nh(c.Q6.PLAYING, c.KB.BUFFERING_RECOVERY)));
        }
    }
    function nM(e) {
        if ((nN(e), tt === c.Q6.ENDED && !tA.current)) {
            let t = tz.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && nh(c.Q6.PLAYING, c.KB.USER);
        }
    }
    l.useEffect(() => {
        if (null == tZ.current) return;
        let e = tZ.current;
        return (
            e.addEventListener("load", nT),
            () => {
                null != e && e.removeEventListener("load", nT);
            }
        );
    }, [nT]);
    let [{ controlBarAnimSpring: nj }, nD] = (0, m.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: O,
            onStart: () => {
                tL(!1);
            },
            onRest: () => {
                tL(!0);
            },
        })),
        nI = (0, l.useRef)(null),
        [{ captionHeightSpring: nB }, nF] = (0, m.z)(() => ({ from: { captionHeightSpring: 0 }, config: O }));
    (l.useEffect(
        () => (
            nF({ captionHeightSpring: tO && null != nr ? (nI.current?.clientHeight ?? 0) : 0, immediate: tY }),
            () => {
                nB.stop();
            }
        ),
        [tO, nF, tY, nr, nB],
    ),
        l.useEffect(
            () => (
                nD({ controlBarAnimSpring: nS || tS ? 1 : 0, immediate: tY }),
                () => {
                    nj.stop();
                }
            ),
            [nS, nD, tY, tS, nj],
        ));
    let n_ = tt === c.Q6.ENDED && null != ea,
        nU = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.KB.USER;
                null != tz.current && (nN(0), nh(c.Q6.PLAYING, e));
            },
            [nN, nh],
        ),
        nG = l.useRef(null),
        n$ = l.useCallback(
            (e) => {
                (ny(), nG.current?.(e.nativeEvent));
            },
            [ny],
        );
    l.useImperativeHandle(
        e2,
        () => ({
            play: () => {
                nh(c.Q6.PLAYING, c.KB.USER);
            },
            pause: () => {
                nh(c.Q6.PAUSED, c.KB.USER);
            },
            seek: (e) => {
                nN(e);
            },
        }),
        [nh, nN],
    );
    let nK = {
            ref: l.useCallback(
                (e) => {
                    tz.current = e;
                    let t = (0, M.c)(e);
                    ((te.current = t), "function" == typeof e6 ? e6(t) : null != e6 && (e6.current = t));
                },
                [e6, te],
            ),
            alt: z,
            playsInline: !0,
            mediaLayoutType: tH ? U.dG.STATIC : U.dG.RESPONSIVE,
            className: i()({ [$.R]: n_, [$.IR]: !0, [$.FP]: "cover" === eZ && !tH }),
            controls: !1,
            poster: W,
            preload: tj ? ew : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != tz.current &&
                    (J?.(tz.current.currentTime, tz.current.duration),
                    tE.current || td((tz.current.currentTime / tz.current.duration) * 100));
            },
            onEnded: function (e) {
                (tv(c.h$.READY), ee?.(), tA.current || nh(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (tx === c.h$.LOADING) {
                    let e = null != tk.current ? performance.now() - tk.current : null;
                    (ex?.(e), tv(c.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == tz.current) return;
                q > 0 && !t5 && nN(q, !1);
                let t = ef?.() ?? tI,
                    n = ep?.() ?? tF;
                (t !== tI && tB(t), n !== tF && t_(n), (tz.current.volume = n ? 0 : t));
                let r = tz.current.duration;
                (r > 0 && isFinite(r) && ni(r), no(!0));
            },
            onLoadStart: function () {
                ((tk.current = performance.now()), eh?.());
            },
            onPlaying: function () {
                tT.current && (ev?.(performance.now()), (tT.current = !1));
            },
            onWaiting: function (e) {
                ((tM.current = performance.now()), eE?.(), tv(c.h$.BUFFERING));
            },
            onProgress: function (e) {
                if (null == tz.current) return;
                let t = [];
                for (let e = 0; e < tz.current.buffered.length; e++) {
                    let n = tz.current.buffered.start(e),
                        r = tz.current.buffered.end(e);
                    r - n < 1 || t.push({ start: n / tz.current.duration, size: (r - n) / tz.current.duration });
                }
                ty(t);
            },
            onCanPlay: nk,
            onCanPlayThrough: nk,
            onSeeked: function () {
                ((tE.current = !1),
                    (tg.current = null),
                    null != tz.current && td((tz.current.currentTime / tz.current.duration) * 100));
            },
            onAbort: function () {
                return t3(c.SB.ABORT);
            },
            onError: function () {
                return t3(c.SB.ERROR);
            },
            onEmptied: function () {
                return t3(c.SB.EMPTIED);
            },
            onStalled: function () {
                return t3(c.SB.STALLED);
            },
            onClick: nL,
            crossOrigin: eX ?? void 0,
            src: t5 || nn ? null : (e4 ?? null),
            onSourceError: function () {
                return t3(c.SB.SOURCE_ERROR);
            },
            isScrubbing: tS,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    null != er &&
                        (0, r.jsx)("track", {
                            ref: tZ,
                            src: er,
                            label: "English",
                            kind: "captions",
                            srcLang: "en",
                            default: !0,
                        }),
                    null != eV && (0, r.jsx)("track", { ref: t1, src: eV, kind: "metadata" }),
                ],
            }),
        },
        nO = (0, r.jsx)(N.BK, {
            children: (0, r.jsx)(A.pT, {
                activeLayer: tH ? N.$W : void 0,
                isFullscreen: tH,
                videoRef: tz,
                isActive: tj,
                isControlBarExpanded: nS,
                children: (0, r.jsx)(f.D, {
                    className: i()($.W6, { [$.nZ]: !tj }),
                    style: { minWidth: eq, minHeight: eJ },
                    "data-fullscreen": tH,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tj ? -1 : 0,
                    focusProps: tj ? void 0 : { ringTarget: tm },
                    onMouseEnter: function () {
                        (tl(!0),
                            nv(!1),
                            (ng.current = performance.now()),
                            null != nE.current && clearTimeout(nE.current));
                    },
                    onMouseLeave: function () {
                        (tl(!1), nv(!1));
                    },
                    "aria-label": tj ? void 0 : G.intl.string(G.t.RscU7I),
                    onClick: tj ? void 0 : nL,
                    onMouseMove: ny,
                    children: (0, r.jsxs)("div", {
                        ref: tX,
                        className: i()($.NS, { [$.DO]: "portrait" === a, [$.r7]: "landscape" === a }),
                        tabIndex: -1,
                        onKeyDown: n$,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${np.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": "4px",
                            "--custom-footer-scrim-height": `${np.scrimHeightPx}px`,
                            "--custom-controls-gap": `${np.controlsGapPx}px`,
                            "--custom-controls-end-width":
                                null != np.trailingGroupWidthPx ? `${np.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tj && eW && !tY && (0, r.jsx)("canvas", { ref: tW, className: $.Xm }),
                            n_ && ea?.({ replay: nU }),
                            ei(nK),
                            tx !== c.h$.READY &&
                                tt === c.Q6.PLAYING &&
                                null != e4 &&
                                (0, r.jsx)("span", {
                                    className: i()($.S, { [$.F]: "center" === ez }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(p.y, { type: p.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(D.A, {
                                message: e8({ hasVideoAsset: null != e4, playerState: tt, pauseReason: tJ }),
                                showOverlay: null == e4,
                            }),
                            t8 &&
                                null != t9 &&
                                (0, r.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, r.jsx)(K, { stats: t9, onClose: t7 }),
                                }),
                            null != eC &&
                                (0, r.jsx)(u.animated.div, {
                                    className: $.MU,
                                    style: {
                                        opacity: (0, u.to)([nj.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, u.to)([nj.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, u.to)([nj.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: eC(),
                                }),
                            t$ &&
                                tt !== c.Q6.ENDED &&
                                null != el &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(f.D, {
                                            onClick: () => {
                                                (tt === c.Q6.PAUSED && nh(c.Q6.PLAYING, c.KB.USER), tK(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: $.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: i()($.xr, eA, { [$.MZ]: "portrait" === a }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)(
                                                    [nj, nB],
                                                    (e, t) => `${e * np.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(T.X, {
                                                text: el,
                                                onClose: function () {
                                                    tK(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tj &&
                                (0, r.jsx)(u.animated.div, {
                                    className: $.Jp,
                                    style: {
                                        opacity: (0, u.to)([nj.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: i()($.yf, {
                                        [$.ZH]: tN.current && tt === c.Q6.PLAYING,
                                        [$.v7]: tN.current && tt === c.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        tt === c.Q6.PLAYING
                                            ? (0, r.jsx)(h.PlayIcon, { className: $.PK })
                                            : (0, r.jsx)(x.PauseIcon, { className: $.PK }),
                                },
                                tt,
                            ),
                            tO &&
                                null != nr &&
                                !n_ &&
                                (0, r.jsx)(u.animated.div, {
                                    className: $.o$,
                                    ref: nI,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [nj.to({ range: [0, 1], output: [-20, -np.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(v.E, {
                                        variant: "text-lg/semibold",
                                        color: "text-overlay-light",
                                        className: $.qh,
                                        children: nr.text,
                                    }),
                                }),
                            tj &&
                                (0, r.jsxs)(u.animated.div, {
                                    className: $.r8,
                                    style: {
                                        height: (0, u.to)(
                                            [nj.to({ range: [0, 1], output: [0, np.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: [
                                        (0, r.jsx)(u.animated.div, {
                                            style: {
                                                transform: (0, u.to)(
                                                    [nj.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${20 * e}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)("div", {
                                                style: nS || tS || e$ ? void 0 : Q,
                                                children: (0, r.jsx)(L.Ay, {
                                                    percent: null != ts ? ts : tu,
                                                    animate:
                                                        !0 !== tq.current &&
                                                        !tf &&
                                                        tt === c.Q6.PLAYING &&
                                                        nu &&
                                                        tx === c.h$.READY,
                                                    interactionEnabled: tw && ns > 0,
                                                    backgroundColor: nS || e$ ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                    playerState: tt,
                                                    preloadedBuffers: nS ? tb : void 0,
                                                    durationSec: na > 0 ? na : +!nu,
                                                    isFullyVisible: nS && tw,
                                                    maxSeekableTime: null != en && ns > 0 ? ns : void 0,
                                                    progressClassName: eU,
                                                    persistPlayhead: eK,
                                                    onClick: nM,
                                                    onScrubBack: nA,
                                                    onScrubForward: nR,
                                                    onDragStateChange: function (e) {
                                                        if (((tA.current = e), tC(e), e))
                                                            ((tP.current = tt === c.Q6.PLAYING),
                                                                (tR.current = tt === c.Q6.ENDED),
                                                                tP.current
                                                                    ? tz.current?.pause()
                                                                    : tR.current && nh(c.Q6.PAUSED, c.KB.SEEK));
                                                        else {
                                                            let e = tz.current,
                                                                t =
                                                                    null != e &&
                                                                    !Number.isNaN(e.duration) &&
                                                                    e.currentTime >= e.duration;
                                                            tP.current
                                                                ? ((tP.current = !1),
                                                                  t
                                                                      ? nh(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                                                      : e?.play())
                                                                : tR.current
                                                                  ? ((tR.current = !1),
                                                                    t
                                                                        ? nh(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                                                        : nh(c.Q6.PLAYING, c.KB.USER))
                                                                  : t && nh(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE);
                                                        }
                                                    },
                                                    indicatorConfig: eH,
                                                    scrubPreviewCues: t2,
                                                    onIndicatorSeek: nM,
                                                    getCurrentTimeSec: t6,
                                                    "data-testid": "discord-web-video-player-timeline",
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: $.uN,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, u.to)(
                                                    [nj.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 20}px`,
                                                ),
                                                paddingBottom: (0, u.to)(
                                                    [nj.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 20}px`,
                                                ),
                                                pointerEvents: (0, u.to)(
                                                    [nj.to({ range: [0, 1], output: [0, 1] })],
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
                                                animSpring: nj,
                                                visible: nS,
                                                seekForwardEnabled:
                                                    null == en || (tz.current?.currentTime ?? 0) + 1 < ns,
                                                hideCaptionBtn: null == er,
                                                hideTranscriptBtn: null == el,
                                                hideFullScreenBtn: ej,
                                                hidePlaybackSpeedBtn: eB,
                                                hideSkipButtons: eD ?? "portrait" === a,
                                                compactTimeDisplay: eI,
                                                size: nf,
                                                downloadUrl: eL,
                                                downloadContentType: ek,
                                                extraButtons: eM,
                                                autoFocus: eO,
                                                keyDownHandlerRef: nG,
                                                volume: tI,
                                                muted: tF,
                                                transcriptEnabled: t$,
                                                captionEnabled: tO,
                                                handlePlaybackBtnClick: nw,
                                                handleTranscriptBtnClick: function () {
                                                    tK(!t$);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    tQ(!tO);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !tH,
                                                        t = (0, S.qf)(tX.current);
                                                    (e && null != t
                                                        ? ((0, S.tl)(t), t.addEventListener(S.Wb, nP), eo?.(!0))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(S.Wb, nP), eo?.(!1), (0, S.sP)(t)),
                                                        tV(e));
                                                },
                                                handleSeekBackBtnClick: nA,
                                                handleSeekForwardBtnClick: nR,
                                                autoHideVolumeSlider: eQ,
                                                handleControlBarPendingInteraction: tC,
                                                onVolumeChange: function (e) {
                                                    (tB(e), es?.(e));
                                                },
                                                onMutedChange: function (e) {
                                                    (t_(e), ec?.(e));
                                                },
                                                onVolumeExpandedChange: function (e) {
                                                    tG(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            null != eP &&
                                (0, r.jsx)("div", {
                                    className: $.MU,
                                    children: eP({
                                        playerState: tt,
                                        isControlBarExpanded: nS,
                                        controlBarAnimationSpring: nj,
                                        videoRef: tz,
                                        isActive: tj,
                                        isVolumeExpanded: tU,
                                    }),
                                }),
                            !tj &&
                                (0, r.jsx)("div", {
                                    className: $.mF,
                                    ref: tm,
                                    children: (0, r.jsx)(h.PlayIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: $.z_,
                                    }),
                                }),
                            (0, r.jsx)(N.bW, {}),
                            (0, r.jsx)(o.P, {}),
                        ],
                    }),
                }),
            }),
        });
    return (0, r.jsx)(o.Jh, { enabled: tH, children: nO });
}
