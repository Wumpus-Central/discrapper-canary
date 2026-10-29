(n.r(t), n.d(t, { COMPACT_CONTROL_BAR_MAX_WIDTH_PX: () => Y, default: () => X }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(941143),
    o = n(621466),
    s = n(337836),
    c = n(17928),
    d = n(876230),
    m = n(231723),
    f = n(717421),
    p = n(939249),
    h = n(289873),
    v = n(782134),
    x = n(113494),
    E = n(834730),
    g = n(964486),
    b = n(770178),
    y = n(765548),
    S = n(775602),
    C = n(475815),
    P = n(718499),
    w = n(23590),
    A = n(683574),
    R = n(671897),
    N = n(906892),
    L = n(565164),
    T = n(275664),
    k = n(408121),
    M = n(984212),
    j = n(246047),
    D = n(739416),
    I = n(931853),
    B = n(90721),
    F = n(920228),
    U = n(953584),
    G = n(338659),
    _ = n(838541),
    K = n(105292),
    $ = n(862649);
let O = l.lazy(() =>
        Promise.all([n.e("999272"), n.e("919307")])
            .then(n.bind(n, 410694))
            .then((e) => ({ default: e.VideoStatsOverlay })),
    ),
    Q = { tension: 250, friction: 5, clamp: !0 },
    H = { visibility: "hidden" },
    Y = 400,
    V = {
        [d.oA.SM]: {
            barHeightPx: 40,
            footerHorizontalPaddingPx: 12,
            scrimHeightPx: 72,
            controlsGapPx: 12,
            trailingGroupWidthPx: null,
        },
        [d.oA.MD]: {
            barHeightPx: 64,
            footerHorizontalPaddingPx: 20,
            scrimHeightPx: 121,
            controlsGapPx: 16,
            trailingGroupWidthPx: 200,
        },
        [d.oA.LG]: {
            barHeightPx: 72,
            footerHorizontalPaddingPx: 20,
            scrimHeightPx: 121,
            controlsGapPx: 16,
            trailingGroupWidthPx: 200,
        },
    };
function X(e) {
    let {
            parentTransitionState: t,
            autoplay: n = !1,
            orientation: a = "landscape",
            videoUrlOverride: X,
            alt: z,
            src: W,
            poster: Z,
            initialActive: q = !0,
            initialTimeSec: J = 0,
            onProgressUpdate: ee,
            onEnded: et,
            onError: en,
            maxSeekableTimeSec: er,
            captionTrackUrl: el,
            transcriptText: ea,
            renderEndScreen: ei,
            renderVideo: eu = j.v,
            onPlayerStateChange: eo,
            onFullscreenChange: es,
            onVolumeChange: ec,
            onMutedChange: ed,
            initialVolume: em = 0.3,
            initialMuted: ef = !1,
            getInitialVolume: ep,
            getInitialMuted: eh,
            onLoadStart: ev,
            onLoadEnd: ex,
            onFirstFrame: eE,
            onBufferingStart: eg,
            onBufferingEnd: eb,
            onFocusChange: ey,
            onVisibilityChange: eS,
            onSeek: eC,
            onTimelineDragStateChange: eP,
            renderOverlay: ew,
            renderPersistentOverlay: eA,
            transcriptClassName: eR,
            onHlsInstance: eN,
            onClick: eL,
            preload: eT,
            downloadUrl: ek,
            fileSizeBytes: eM,
            downloadContentType: ej,
            extraButtons: eD,
            hideFullScreenBtn: eI = !1,
            hideSkipButtons: eB,
            compactTimeDisplay: eF = !1,
            hidePlaybackSpeedBtn: eU = !1,
            autoSizeControlBar: eG = !1,
            getPlaybackBlockedMessage: e_,
            progressClassName: eK,
            pauseOnLostVisibility: e$ = !1,
            persistTimeline: eO = !1,
            persistPlayhead: eQ = !0,
            autoFocus: eH = !1,
            autoHideVolumeSlider: eY = !1,
            floatingVolumeSlider: eV = !1,
            timelineIndicatorConfig: eX,
            scrubPreviewVttUrl: ez,
            scrubPreviewImageUrl: eW,
            loadingSpinnerPosition: eZ = "top-left",
            crossOrigin: eq = "anonymous",
            withVideoHalo: eJ = !1,
            objectFit: e0 = "contain",
            minWidth: e1 = 240,
            minHeight: e2 = 180,
            muxContentMetadata: e6,
            awaitMuxReady: e4 = !1,
            playerRef: e8,
            ref: e9,
        } = e,
        e7 = X ?? W,
        e3 = e_ ?? I.u,
        { focused: e5, focusedChanged: te } = (0, D.A7)(),
        { visible: tt, visibleChanged: tn, targetRef: tr } = (0, D.O7)(),
        [tl, ta] = l.useState(n ? d.Q6.PLAYING : d.Q6.PAUSED),
        [ti, tu] = l.useState(!1),
        [to, ts] = l.useState(!1),
        [tc, td] = l.useState(0),
        [tm, tf] = l.useState(null),
        tp = l.useCallback((e) => {
            (tf(null), td(e));
        }, []),
        th = l.useRef(null),
        [tv, tx] = l.useState(!1),
        tE = l.useRef(null),
        [tg, tb] = l.useState(d.h$.LOADING),
        ty = l.useRef(!1),
        tS = l.useRef(null),
        [tC, tP] = l.useState([]),
        [tw, tA] = l.useState(!1),
        tR = l.useRef(!1),
        tN = l.useRef(!1),
        tL = l.useRef(!1),
        tT = l.useRef(!1),
        [tk, tM] = l.useState(!0),
        tj = l.useRef(!0),
        tD = l.useRef(null),
        tI = l.useRef(null),
        [tB, tF] = l.useState(n || q),
        [tU, tG] = l.useState(em),
        [t_, tK] = l.useState(ef),
        t$ = eY || eV,
        [tO, tQ] = l.useState(!t$),
        [tH, tY] = l.useState(!1),
        [tV, tX] = l.useState(!1),
        [tz, tW] = l.useState(!1),
        tZ = (0, c.bG)([S.Ay], () => S.Ay.useReducedMotion),
        tq = (0, c.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        tJ = (0, l.useRef)(null),
        t0 = (0, l.useRef)(null),
        t1 = (0, l.useRef)(null),
        t2 = (0, l.useRef)(null),
        t6 = l.useRef(!0),
        [t4, t8] = l.useState(null),
        t9 = l.useRef(null),
        t7 = (0, L.z5)(tB, t9, ez, eW),
        t3 = l.useCallback(() => tJ.current?.currentTime ?? null, []),
        t5 = l.useMemo(
            () => ({
                get current() {
                    return (0, j.c)(tJ.current);
                },
            }),
            [],
        );
    (0, B.A)({ videoRef: t5, canvasRef: t1, enabled: tB && eJ && !tZ, canvasWidth: 32, canvasHeight: 18 });
    let {
            showStats: ne,
            videoStats: nt,
            onCloseStats: nn,
        } = (function (e) {
            let { videoRef: t, src: n, fileSizeBytes: r } = e,
                a = null != n && "" !== n,
                i = (0, c.bG)([U.Ay], () => !!a && U.Ay.isVideoStatsEnabled(n)),
                [u, o] = l.useState(null);
            return (
                l.useEffect(() => {
                    if (!i) return;
                    let e = t.current;
                    if (null == e) {
                        a && (0, U.Vh)(n, !1);
                        return;
                    }
                    let l = new G.s(e, r ?? void 0);
                    return (
                        l.startTracking(o, { emitInitial: !0 }),
                        () => {
                            l.destroy();
                        }
                    );
                }, [i, t, n, a, r]),
                l.useEffect(
                    () => () => {
                        a && (0, U.ke)(n);
                    },
                    [n, a],
                ),
                {
                    showStats: i,
                    videoStats: i ? u : null,
                    onCloseStats: l.useCallback(() => {
                        a && (0, U.Vh)(n, !1);
                    }, [n, a]),
                }
            );
        })({ videoRef: tJ, src: e7, fileSizeBytes: eM }),
        nr = l.useCallback(
            (e, t) => {
                en?.(e, t);
            },
            [en],
        ),
        { isHlsActive: nl, hls: na } = (0, P.Ay)(t5, {
            src: e7,
            initialTimeSec: J,
            onError: nr,
            onHlsInstance: eN,
            crossOrigin: eq,
        }),
        { isReady: ni } = (0, w.A)({ videoRef: t5, hls: na, contentMetadata: e6, isHls: nl }),
        nu = e4 && !ni && !nl,
        [no, ns] = l.useState(null),
        [nc, nd] = l.useState(0),
        [nm, nf] = l.useState(!1),
        np = er ?? tJ.current?.duration ?? 0,
        [nh, nv] = l.useState(!1),
        nx = (0, y.A)((e) => {
            let t = e.contentRect.width;
            t <= 0 || nv(t < Y);
        });
    (0, b.g)(t0, nx, [], { enabled: eG, fireOnMount: eG });
    let nE = tz ? d.oA.LG : eG && nh ? d.oA.SM : d.oA.MD,
        ng = V[nE];
    (0, g.u5)(() => {
        t6.current && (t6.current = !1);
    });
    let nb = l.useCallback(
        function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (((tT.current = !0), ta(e), eo?.(e, t), null != tJ.current))
                switch (e) {
                    case d.Q6.PLAYING:
                        (t8(null), tF(!0), tJ.current.play());
                        break;
                    case d.Q6.PAUSED:
                        ((tR.current = !1), tJ.current.pause(), (tj.current = !1));
                        break;
                    case d.Q6.ENDED:
                        tY(!1);
                }
        },
        [eo],
    );
    (l.useEffect(() => {
        if (!e$) return;
        let e = null != t && (t === m.ip.HIDDEN || t === m.ip.EXITING || t === m.ip.EXITED),
            n = null != t && tn && !tt,
            r = te && !e5;
        if ((e || n || r) && null != tJ.current && tl === d.Q6.PLAYING) {
            let t = e || n ? d.KB.VISIBILITY : d.KB.FOCUS;
            (t8(t), nb(d.Q6.PAUSED, t));
        }
    }, [e$, t, e5, te, tt, tn, tl, nb]),
        (0, F.A)({
            videoRef: t5,
            enabled: e$,
            onPipPause: () => {
                (t8(d.KB.PICTURE_IN_PICTURE), nb(d.Q6.PAUSED, d.KB.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (t8(d.KB.FOCUS), nb(d.Q6.PAUSED, d.KB.FOCUS));
            },
        }),
        l.useEffect(() => {
            te && ey?.(e5, tl);
        }, [e5, te, tl, ey]),
        l.useEffect(() => {
            tn && eS?.(tt, tl);
        }, [tt, tn, tl, eS]));
    let [ny, nS] = l.useState(!1),
        nC = l.useRef(null),
        nP = l.useRef(0);
    l.useLayoutEffect(() => {
        nP.current = performance.now();
    }, []);
    let nw = l.useCallback(() => {
            switch ((null != nC.current && clearTimeout(nC.current), tl)) {
                case d.Q6.PLAYING:
                    nC.current = setTimeout(
                        () => {
                            nS(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - nP.current)),
                    );
                case d.Q6.PAUSED:
                case d.Q6.ENDED:
            }
        }, [tl]),
        nA = l.useCallback(() => {
            (nS(!1), (nP.current = performance.now()), nw());
        }, [nw]);
    (l.useEffect(() => {
        if (tl !== d.Q6.PLAYING) {
            (nS(!1), null != nC.current && clearTimeout(nC.current));
            return;
        }
        return (
            nw(),
            () => {
                null != nC.current && clearTimeout(nC.current);
            }
        );
    }, [tl, nw]),
        l.useEffect(
            () => () => {
                null != tE.current && clearTimeout(tE.current);
            },
            [],
        ));
    let nR = to && tq,
        nN = tl === d.Q6.ENDED,
        nL = nR || ((to || ti || nN) && !ny),
        nT = l.useRef(!1);
    l.useEffect(() => {
        (nT.current && !nR && nA(), (nT.current = nR));
    }, [nR, nA]);
    let nk = l.useRef(es);
    nk.current = es;
    let nM = l.useCallback(() => {
        let e = (0, C.qf)(t0.current);
        null == e || (0, C._U)(e) || (e.removeEventListener(C.Wb, nM), tW(!1), nk.current?.(!1));
    }, []);
    function nj() {
        null == tJ.current ||
            (nI(Math.max((tS.current ?? tJ.current.currentTime) - 10, 0)),
            tl === d.Q6.ENDED && nb(d.Q6.PAUSED, d.KB.SEEK));
    }
    function nD() {
        if (null == tJ.current) return;
        let e = Math.min((tS.current ?? tJ.current.currentTime) + 10, np);
        (nI(e), tl !== d.Q6.ENDED && e >= tJ.current.duration && nb(d.Q6.ENDED, d.KB.SEEK));
    }
    l.useEffect(() => {
        let e = t0.current;
        return () => {
            let t = (0, C.qf)(e);
            null != t && t.removeEventListener(C.Wb, nM);
        };
    }, [nM]);
    let nI = l.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == tJ.current) return;
            let n = tJ.current.currentTime;
            ((tS.current = e),
                tf((e / (tJ.current.duration ?? 1)) * 100),
                tx(!0),
                null != tE.current && clearTimeout(tE.current),
                (tE.current = setTimeout(() => {
                    (tx(!1), (tE.current = null));
                }, 100)),
                (ty.current = !0),
                (tJ.current.currentTime = e),
                t && eC?.(n, e));
        },
        [eC],
    );
    function nB() {
        if (null != tJ.current)
            switch (tl) {
                case d.Q6.ENDED:
                    (nI(0), nb(d.Q6.PLAYING, d.KB.USER));
                    break;
                case d.Q6.PLAYING:
                    (t8(d.KB.USER), nb(d.Q6.PAUSED, d.KB.USER));
                    break;
                default:
                    nb(d.Q6.PLAYING, d.KB.USER);
            }
    }
    function nF(e) {
        null != eL ? eL(e) : (tF(!0), nB());
    }
    let nU = l.useCallback(() => {
        if (null == tJ.current || 0 === tJ.current.textTracks.length) return;
        let e = tJ.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, M.C)(n) &&
                    ((n.id = `cue-${t}`),
                    (n.onenter = () => {
                        ns(n);
                    }),
                    (n.onexit = () =>
                        (function (e) {
                            ns((t) => (t?.id === e.id ? null : t));
                        })(n)));
            }
    }, []);
    function nG(e) {
        if (null != tJ.current) {
            if (tg === d.h$.BUFFERING) {
                let e = null != tI.current ? performance.now() - tI.current : null;
                eb?.(e);
            } else if (tg === d.h$.LOADING) {
                let e = null != tD.current ? performance.now() - tD.current : null;
                ex?.(e);
            }
            (tb(d.h$.READY), tl === d.Q6.PLAYING && (tR.current || nb(d.Q6.PLAYING, d.KB.BUFFERING_RECOVERY)));
        }
    }
    function n_(e) {
        if ((nI(e), tl === d.Q6.ENDED && !tN.current)) {
            let t = tJ.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && nb(d.Q6.PLAYING, d.KB.USER);
        }
    }
    l.useEffect(() => {
        if (null == t2.current) return;
        let e = t2.current;
        return (
            e.addEventListener("load", nU),
            () => {
                null != e && e.removeEventListener("load", nU);
            }
        );
    }, [nU]);
    let [{ controlBarAnimSpring: nK }, n$] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: Q,
            onStart: () => {
                tM(!1);
            },
            onRest: () => {
                tM(!0);
            },
        })),
        nO = (0, l.useRef)(null),
        [{ captionHeightSpring: nQ }, nH] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: Q }));
    (l.useEffect(
        () => (
            nH({ captionHeightSpring: tV && null != no ? (nO.current?.clientHeight ?? 0) : 0, immediate: tZ }),
            () => {
                nQ.stop();
            }
        ),
        [tV, nH, tZ, no, nQ],
    ),
        l.useEffect(
            () => (
                n$({ controlBarAnimSpring: nL || tw ? 1 : 0, immediate: tZ }),
                () => {
                    nK.stop();
                }
            ),
            [nL, n$, tZ, tw, nK],
        ));
    let nY = tl === d.Q6.ENDED && null != ei,
        nV = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KB.USER;
                null != tJ.current && (nI(0), nb(d.Q6.PLAYING, e));
            },
            [nI, nb],
        ),
        nX = l.useRef(null),
        nz = l.useCallback(
            (e) => {
                (nA(), nX.current?.(e.nativeEvent));
            },
            [nA],
        );
    l.useImperativeHandle(
        e8,
        () => ({
            play: () => {
                nb(d.Q6.PLAYING, d.KB.USER);
            },
            pause: () => {
                nb(d.Q6.PAUSED, d.KB.USER);
            },
            seek: (e) => {
                nI(e);
            },
        }),
        [nb, nI],
    );
    let nW = {
            ref: l.useCallback(
                (e) => {
                    tJ.current = e;
                    let t = (0, j.c)(e);
                    ((tr.current = t), "function" == typeof e9 ? e9(t) : null != e9 && (e9.current = t));
                },
                [e9, tr],
            ),
            alt: z,
            playsInline: !0,
            mediaLayoutType: tz ? _.dG.STATIC : _.dG.RESPONSIVE,
            className: i()({ [$.R]: nY, [$.IR]: !0, [$.FP]: "cover" === e0 && !tz }),
            controls: !1,
            poster: Z,
            preload: tB ? eT : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != tJ.current &&
                    (ee?.(tJ.current.currentTime, tJ.current.duration),
                    ty.current || tp((tJ.current.currentTime / tJ.current.duration) * 100));
            },
            onEnded: function (e) {
                (tb(d.h$.READY), et?.(), tN.current || nb(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (tg === d.h$.LOADING) {
                    let e = null != tD.current ? performance.now() - tD.current : null;
                    (ex?.(e), tb(d.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == tJ.current) return;
                J > 0 && !nl && nI(J, !1);
                let t = ep?.() ?? tU,
                    n = eh?.() ?? t_;
                (t !== tU && tG(t), n !== t_ && tK(n), (tJ.current.volume = n ? 0 : t));
                let r = tJ.current.duration;
                (r > 0 && isFinite(r) && nd(r), nf(!0));
            },
            onLoadStart: function () {
                ((tD.current = performance.now()), ev?.());
            },
            onPlaying: function () {
                tj.current && (eE?.(performance.now()), (tj.current = !1));
            },
            onWaiting: function (e) {
                ((tI.current = performance.now()), eg?.(), tb(d.h$.BUFFERING));
            },
            onProgress: function (e) {
                if (null == tJ.current) return;
                let t = [];
                for (let e = 0; e < tJ.current.buffered.length; e++) {
                    let n = tJ.current.buffered.start(e),
                        r = tJ.current.buffered.end(e);
                    r - n < 1 || t.push({ start: n / tJ.current.duration, size: (r - n) / tJ.current.duration });
                }
                tP(t);
            },
            onCanPlay: nG,
            onCanPlayThrough: nG,
            onSeeked: function () {
                ((ty.current = !1),
                    (tS.current = null),
                    null != tJ.current && tp((tJ.current.currentTime / tJ.current.duration) * 100));
            },
            onAbort: function () {
                return nr(d.SB.ABORT);
            },
            onError: function () {
                return nr(d.SB.ERROR);
            },
            onEmptied: function () {
                return nr(d.SB.EMPTIED);
            },
            onStalled: function () {
                return nr(d.SB.STALLED);
            },
            onClick: nF,
            crossOrigin: eq ?? void 0,
            src: nl || nu ? null : (e7 ?? null),
            onSourceError: function () {
                return nr(d.SB.SOURCE_ERROR);
            },
            isScrubbing: tw,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    null != el &&
                        (0, r.jsx)("track", {
                            ref: t2,
                            src: el,
                            label: "English",
                            kind: "captions",
                            srcLang: "en",
                            default: !0,
                        }),
                    null != ez && (0, r.jsx)("track", { ref: t9, src: ez, kind: "metadata" }),
                ],
            }),
        },
        nZ = (0, r.jsx)(N.BK, {
            children: (0, r.jsx)(A.pT, {
                activeLayer: tz ? N.$W : void 0,
                isFullscreen: tz,
                videoRef: tJ,
                isActive: tB,
                isControlBarExpanded: nL,
                children: (0, r.jsx)(p.D, {
                    className: i()($.W6, { [$.nZ]: !tB }),
                    style: { minWidth: e1, minHeight: e2 },
                    "data-fullscreen": tz,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tB ? -1 : 0,
                    focusProps: tB ? void 0 : { ringTarget: th },
                    onMouseEnter: function () {
                        (tu(!0),
                            nS(!1),
                            (nP.current = performance.now()),
                            null != nC.current && clearTimeout(nC.current));
                    },
                    onMouseLeave: function () {
                        (tu(!1), nS(!1));
                    },
                    "aria-label": tB ? void 0 : K.intl.string(K.t.RscU7I),
                    onClick: tB ? void 0 : nF,
                    onMouseMove: nA,
                    children: (0, r.jsxs)("div", {
                        ref: t0,
                        className: i()($.NS, { [$.DO]: "portrait" === a, [$.r7]: "landscape" === a }),
                        tabIndex: -1,
                        onKeyDown: nz,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${ng.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": "4px",
                            "--custom-footer-scrim-height": `${ng.scrimHeightPx}px`,
                            "--custom-controls-gap": `${ng.controlsGapPx}px`,
                            "--custom-controls-end-width":
                                null != ng.trailingGroupWidthPx ? `${ng.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tB && eJ && !tZ && (0, r.jsx)("canvas", { ref: t1, className: $.Xm }),
                            nY && ei?.({ replay: nV }),
                            eu(nW),
                            tg !== d.h$.READY &&
                                tl === d.Q6.PLAYING &&
                                null != e7 &&
                                (0, r.jsx)("span", {
                                    className: i()($.S, { [$.F]: "center" === eZ }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(I.A, {
                                message: e3({ hasVideoAsset: null != e7, playerState: tl, pauseReason: t4 }),
                                showOverlay: null == e7,
                            }),
                            ne &&
                                null != nt &&
                                (0, r.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, r.jsx)(O, { stats: nt, onClose: nn }),
                                }),
                            null != ew &&
                                (0, r.jsx)(u.animated.div, {
                                    className: $.MU,
                                    style: {
                                        opacity: (0, u.to)([nK.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, u.to)([nK.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, u.to)([nK.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: ew(),
                                }),
                            tH &&
                                tl !== d.Q6.ENDED &&
                                null != ea &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (tl === d.Q6.PAUSED && nb(d.Q6.PLAYING, d.KB.USER), tY(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: $.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: i()($.xr, eR, { [$.MZ]: "portrait" === a }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)(
                                                    [nK, nQ],
                                                    (e, t) => `${e * ng.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(k.X, {
                                                text: ea,
                                                onClose: function () {
                                                    tY(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tB &&
                                (0, r.jsx)(u.animated.div, {
                                    className: $.Jp,
                                    style: {
                                        opacity: (0, u.to)([nK.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: i()($.yf, {
                                        [$.ZH]: tT.current && tl === d.Q6.PLAYING,
                                        [$.v7]: tT.current && tl === d.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        tl === d.Q6.PLAYING
                                            ? (0, r.jsx)(v.PlayIcon, { className: $.PK })
                                            : (0, r.jsx)(x.PauseIcon, { className: $.PK }),
                                },
                                tl,
                            ),
                            tV &&
                                null != no &&
                                !nY &&
                                (0, r.jsx)(u.animated.div, {
                                    className: $.o$,
                                    ref: nO,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [nK.to({ range: [0, 1], output: [-20, -ng.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(E.E, {
                                        variant: "text-lg/semibold",
                                        color: "text-overlay-light",
                                        className: $.qh,
                                        children: no.text,
                                    }),
                                }),
                            tB &&
                                (0, r.jsxs)(u.animated.div, {
                                    className: $.r8,
                                    style: {
                                        height: (0, u.to)(
                                            [nK.to({ range: [0, 1], output: [0, ng.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    onFocus: function () {
                                        ts(!0);
                                    },
                                    onBlur: function (e) {
                                        ((0, o.vq)(e.relatedTarget, Node) &&
                                            e.currentTarget.contains(e.relatedTarget)) ||
                                            ts(!1);
                                    },
                                    children: [
                                        (0, r.jsx)(u.animated.div, {
                                            style: {
                                                transform: (0, u.to)(
                                                    [nK.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${20 * e}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)("div", {
                                                style: nL || tw || eO ? void 0 : H,
                                                children: (0, r.jsx)(T.Ay, {
                                                    percent: null != tm ? tm : tc,
                                                    animate:
                                                        !0 !== t6.current &&
                                                        !tv &&
                                                        tl === d.Q6.PLAYING &&
                                                        nm &&
                                                        tg === d.h$.READY,
                                                    interactionEnabled: tk && np > 0,
                                                    backgroundColor: nL || eO ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                    playerState: tl,
                                                    preloadedBuffers: nL ? tC : void 0,
                                                    durationSec: nc > 0 ? nc : +!nm,
                                                    isFullyVisible: nL && tk,
                                                    maxSeekableTime: null != er && np > 0 ? np : void 0,
                                                    progressClassName: eK,
                                                    persistPlayhead: eQ,
                                                    onClick: n_,
                                                    onScrubBack: nj,
                                                    onScrubForward: nD,
                                                    onDragStateChange: function (e) {
                                                        if (((tN.current = e), eP?.(e), tA(e), e))
                                                            ((tR.current = tl === d.Q6.PLAYING),
                                                                (tL.current = tl === d.Q6.ENDED),
                                                                tR.current
                                                                    ? tJ.current?.pause()
                                                                    : tL.current && nb(d.Q6.PAUSED, d.KB.SEEK));
                                                        else {
                                                            let e = tJ.current,
                                                                t =
                                                                    null != e &&
                                                                    !Number.isNaN(e.duration) &&
                                                                    e.currentTime >= e.duration;
                                                            tR.current
                                                                ? ((tR.current = !1),
                                                                  t
                                                                      ? nb(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                      : e?.play())
                                                                : tL.current
                                                                  ? ((tL.current = !1),
                                                                    t
                                                                        ? nb(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                        : nb(d.Q6.PLAYING, d.KB.USER))
                                                                  : t && nb(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                                                        }
                                                    },
                                                    indicatorConfig: eX,
                                                    scrubPreviewCues: t7,
                                                    onIndicatorSeek: n_,
                                                    getCurrentTimeSec: t3,
                                                    "data-testid": "discord-web-video-player-timeline",
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: $.uN,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, u.to)(
                                                    [nK.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 20}px`,
                                                ),
                                                paddingBottom: (0, u.to)(
                                                    [nK.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 20}px`,
                                                ),
                                                pointerEvents: (0, u.to)(
                                                    [nK.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            children: (0, r.jsx)(R.A, {
                                                playerState: tl,
                                                animSpring: nK,
                                                visible: nL,
                                                seekForwardEnabled:
                                                    null == er || (tJ.current?.currentTime ?? 0) + 1 < np,
                                                hideCaptionBtn: null == el,
                                                hideTranscriptBtn: null == ea,
                                                hideFullScreenBtn: eI,
                                                hidePlaybackSpeedBtn: eU,
                                                hideSkipButtons: eB ?? "portrait" === a,
                                                compactTimeDisplay: eF,
                                                size: nE,
                                                downloadUrl: ek,
                                                downloadContentType: ej,
                                                extraButtons: eD,
                                                autoFocus: eH,
                                                keyDownHandlerRef: nX,
                                                volume: tU,
                                                muted: t_,
                                                transcriptEnabled: tH,
                                                captionEnabled: tV,
                                                handlePlaybackBtnClick: nB,
                                                handleTranscriptBtnClick: function () {
                                                    tY(!tH);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    tX(!tV);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !tz,
                                                        t = (0, C.qf)(t0.current);
                                                    (e && null != t
                                                        ? ((0, C.tl)(t), t.addEventListener(C.Wb, nM), es?.(!0))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(C.Wb, nM), es?.(!1), (0, C.sP)(t)),
                                                        tW(e));
                                                },
                                                handleSeekBackBtnClick: nj,
                                                handleSeekForwardBtnClick: nD,
                                                autoHideVolumeSlider: t$,
                                                floatingVolumeSlider: eV,
                                                handleControlBarPendingInteraction: tA,
                                                onVolumeChange: function (e) {
                                                    (tG(e), ec?.(e));
                                                },
                                                onMutedChange: function (e) {
                                                    (tK(e), ed?.(e));
                                                },
                                                onVolumeExpandedChange: function (e) {
                                                    tQ(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            null != eA &&
                                (0, r.jsx)("div", {
                                    className: $.MU,
                                    children: eA({
                                        playerState: tl,
                                        isControlBarExpanded: nL,
                                        controlBarAnimationSpring: nK,
                                        videoRef: tJ,
                                        isActive: tB,
                                        isVolumeExpanded: tO,
                                    }),
                                }),
                            !tB &&
                                (0, r.jsx)("div", {
                                    className: $.mF,
                                    ref: th,
                                    children: (0, r.jsx)(v.PlayIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: $.z_,
                                    }),
                                }),
                            (0, r.jsx)(N.bW, {}),
                            (0, r.jsx)(s.P, {}),
                        ],
                    }),
                }),
            }),
        });
    return (0, r.jsx)(s.Jh, { enabled: tz, children: nZ });
}
