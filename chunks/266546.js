(n.r(t), n.d(t, { COMPACT_CONTROL_BAR_MAX_WIDTH_PX: () => Y, default: () => z }), n(321073));
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
function z(e) {
    let {
            parentTransitionState: t,
            autoplay: n = !1,
            orientation: a = "landscape",
            videoUrlOverride: z,
            alt: X,
            src: W,
            poster: q,
            initialActive: Z = !0,
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
            renderTopStartOverlay: eI,
            hideFullScreenBtn: eB = !1,
            hideSkipButtons: eF,
            compactTimeDisplay: eU = !1,
            hidePlaybackSpeedBtn: eG = !1,
            autoSizeControlBar: e_ = !1,
            getPlaybackBlockedMessage: eK,
            progressClassName: e$,
            pauseOnLostVisibility: eO = !1,
            persistTimeline: eQ = !1,
            persistPlayhead: eH = !0,
            autoFocus: eY = !1,
            autoHideVolumeSlider: eV = !1,
            floatingVolumeSlider: ez = !1,
            timelineIndicatorConfig: eX,
            scrubPreviewVttUrl: eW,
            scrubPreviewImageUrl: eq,
            loadingSpinnerPosition: eZ = "top-left",
            crossOrigin: eJ = "anonymous",
            withVideoHalo: e0 = !1,
            objectFit: e1 = "contain",
            minWidth: e2 = 240,
            minHeight: e6 = 180,
            muxContentMetadata: e4,
            awaitMuxReady: e8 = !1,
            playerRef: e9,
            ref: e7,
        } = e,
        e3 = z ?? W,
        e5 = eK ?? I.u,
        { focused: te, focusedChanged: tt } = (0, D.A7)(),
        { visible: tn, visibleChanged: tr, targetRef: tl } = (0, D.O7)(),
        [ta, ti] = l.useState(n ? d.Q6.PLAYING : d.Q6.PAUSED),
        [tu, to] = l.useState(!1),
        [ts, tc] = l.useState(!1),
        [td, tm] = l.useState(0),
        [tf, tp] = l.useState(null),
        th = l.useCallback((e) => {
            (tp(null), tm(e));
        }, []),
        tv = l.useRef(null),
        [tx, tE] = l.useState(!1),
        tg = l.useRef(null),
        [tb, ty] = l.useState(d.h$.LOADING),
        tS = l.useRef(!1),
        tC = l.useRef(null),
        [tP, tw] = l.useState([]),
        [tA, tR] = l.useState(!1),
        tN = l.useRef(!1),
        tL = l.useRef(!1),
        tT = l.useRef(!1),
        tk = l.useRef(!1),
        [tM, tj] = l.useState(!0),
        tD = l.useRef(!0),
        tI = l.useRef(null),
        tB = l.useRef(null),
        [tF, tU] = l.useState(n || Z),
        [tG, t_] = l.useState(em),
        [tK, t$] = l.useState(ef),
        tO = eV || ez,
        [tQ, tH] = l.useState(!tO),
        [tY, tV] = l.useState(!1),
        [tz, tX] = l.useState(!1),
        [tW, tq] = l.useState(!1),
        tZ = (0, c.bG)([S.Ay], () => S.Ay.useReducedMotion),
        tJ = (0, c.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        t0 = (0, l.useRef)(null),
        t1 = (0, l.useRef)(null),
        t2 = (0, l.useRef)(null),
        t6 = (0, l.useRef)(null),
        t4 = l.useRef(!0),
        [t8, t9] = l.useState(null),
        t7 = l.useRef(null),
        t3 = (0, L.z5)(tF, t7, eW, eq),
        t5 = l.useCallback(() => t0.current?.currentTime ?? null, []),
        ne = l.useMemo(
            () => ({
                get current() {
                    return (0, j.c)(t0.current);
                },
            }),
            [],
        );
    (0, B.A)({ videoRef: ne, canvasRef: t2, enabled: tF && e0 && !tZ, canvasWidth: 32, canvasHeight: 18 });
    let {
            showStats: nt,
            videoStats: nn,
            onCloseStats: nr,
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
        })({ videoRef: t0, src: e3, fileSizeBytes: eM }),
        nl = l.useCallback(
            (e, t) => {
                en?.(e, t);
            },
            [en],
        ),
        { isHlsActive: na, hls: ni } = (0, P.Ay)(ne, {
            src: e3,
            initialTimeSec: J,
            onError: nl,
            onHlsInstance: eN,
            crossOrigin: eJ,
        }),
        { isReady: nu } = (0, w.A)({ videoRef: ne, hls: ni, contentMetadata: e4, isHls: na }),
        no = e8 && !nu && !na,
        [ns, nc] = l.useState(null),
        [nd, nm] = l.useState(0),
        [nf, np] = l.useState(!1),
        nh = er ?? t0.current?.duration ?? 0,
        [nv, nx] = l.useState(!1),
        nE = (0, y.A)((e) => {
            let t = e.contentRect.width;
            t <= 0 || nx(t < Y);
        });
    (0, b.g)(t1, nE, [], { enabled: e_, fireOnMount: e_ });
    let ng = tW ? d.oA.LG : e_ && nv ? d.oA.SM : d.oA.MD,
        nb = V[ng];
    (0, g.u5)(() => {
        t4.current && (t4.current = !1);
    });
    let ny = l.useCallback(
        function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (((tk.current = !0), ti(e), eo?.(e, t), null != t0.current))
                switch (e) {
                    case d.Q6.PLAYING:
                        (t9(null), tU(!0), t0.current.play());
                        break;
                    case d.Q6.PAUSED:
                        ((tN.current = !1), t0.current.pause(), (tD.current = !1));
                        break;
                    case d.Q6.ENDED:
                        tV(!1);
                }
        },
        [eo],
    );
    (l.useEffect(() => {
        if (!eO) return;
        let e = null != t && (t === m.ip.HIDDEN || t === m.ip.EXITING || t === m.ip.EXITED),
            n = null != t && tr && !tn,
            r = tt && !te;
        if ((e || n || r) && null != t0.current && ta === d.Q6.PLAYING) {
            let t = e || n ? d.KB.VISIBILITY : d.KB.FOCUS;
            (t9(t), ny(d.Q6.PAUSED, t));
        }
    }, [eO, t, te, tt, tn, tr, ta, ny]),
        (0, F.A)({
            videoRef: ne,
            enabled: eO,
            onPipPause: () => {
                (t9(d.KB.PICTURE_IN_PICTURE), ny(d.Q6.PAUSED, d.KB.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (t9(d.KB.FOCUS), ny(d.Q6.PAUSED, d.KB.FOCUS));
            },
        }),
        l.useEffect(() => {
            tt && ey?.(te, ta);
        }, [te, tt, ta, ey]),
        l.useEffect(() => {
            tr && eS?.(tn, ta);
        }, [tn, tr, ta, eS]));
    let [nS, nC] = l.useState(!1),
        nP = l.useRef(null),
        nw = l.useRef(0);
    l.useLayoutEffect(() => {
        nw.current = performance.now();
    }, []);
    let nA = l.useCallback(() => {
            switch ((null != nP.current && clearTimeout(nP.current), ta)) {
                case d.Q6.PLAYING:
                    nP.current = setTimeout(
                        () => {
                            nC(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - nw.current)),
                    );
                case d.Q6.PAUSED:
                case d.Q6.ENDED:
            }
        }, [ta]),
        nR = l.useCallback(() => {
            (nC(!1), (nw.current = performance.now()), nA());
        }, [nA]);
    (l.useEffect(() => {
        if (ta !== d.Q6.PLAYING) {
            (nC(!1), null != nP.current && clearTimeout(nP.current));
            return;
        }
        return (
            nA(),
            () => {
                null != nP.current && clearTimeout(nP.current);
            }
        );
    }, [ta, nA]),
        l.useEffect(
            () => () => {
                null != tg.current && clearTimeout(tg.current);
            },
            [],
        ));
    let nN = ts && tJ,
        nL = ta === d.Q6.ENDED,
        nT = nN || ((ts || tu || nL) && !nS);
    function nk() {
        tc(!0);
    }
    function nM(e) {
        ((0, o.vq)(e.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) || tc(!1);
    }
    let nj = l.useRef(!1);
    l.useEffect(() => {
        (nj.current && !nN && nR(), (nj.current = nN));
    }, [nN, nR]);
    let nD = l.useRef(es);
    nD.current = es;
    let nI = l.useCallback(() => {
        let e = (0, C.qf)(t1.current);
        null == e || (0, C._U)(e) || (e.removeEventListener(C.Wb, nI), tq(!1), nD.current?.(!1));
    }, []);
    function nB() {
        null == t0.current ||
            (nU(Math.max((tC.current ?? t0.current.currentTime) - 10, 0)),
            ta === d.Q6.ENDED && ny(d.Q6.PAUSED, d.KB.SEEK));
    }
    function nF() {
        if (null == t0.current) return;
        let e = Math.min((tC.current ?? t0.current.currentTime) + 10, nh);
        (nU(e), ta !== d.Q6.ENDED && e >= t0.current.duration && ny(d.Q6.ENDED, d.KB.SEEK));
    }
    l.useEffect(() => {
        let e = t1.current;
        return () => {
            let t = (0, C.qf)(e);
            null != t && t.removeEventListener(C.Wb, nI);
        };
    }, [nI]);
    let nU = l.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == t0.current) return;
            let n = t0.current.currentTime;
            ((tC.current = e),
                tp((e / (t0.current.duration ?? 1)) * 100),
                tE(!0),
                null != tg.current && clearTimeout(tg.current),
                (tg.current = setTimeout(() => {
                    (tE(!1), (tg.current = null));
                }, 100)),
                (tS.current = !0),
                (t0.current.currentTime = e),
                t && eC?.(n, e));
        },
        [eC],
    );
    function nG() {
        if (null != t0.current)
            switch (ta) {
                case d.Q6.ENDED:
                    (nU(0), ny(d.Q6.PLAYING, d.KB.USER));
                    break;
                case d.Q6.PLAYING:
                    (t9(d.KB.USER), ny(d.Q6.PAUSED, d.KB.USER));
                    break;
                default:
                    ny(d.Q6.PLAYING, d.KB.USER);
            }
    }
    function n_(e) {
        null != eL ? eL(e) : (tU(!0), nG());
    }
    let nK = l.useCallback(() => {
        if (null == t0.current || 0 === t0.current.textTracks.length) return;
        let e = t0.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, M.C)(n) &&
                    ((n.id = `cue-${t}`),
                    (n.onenter = () => {
                        nc(n);
                    }),
                    (n.onexit = () =>
                        (function (e) {
                            nc((t) => (t?.id === e.id ? null : t));
                        })(n)));
            }
    }, []);
    function n$(e) {
        if (null != t0.current) {
            if (tb === d.h$.BUFFERING) {
                let e = null != tB.current ? performance.now() - tB.current : null;
                eb?.(e);
            } else if (tb === d.h$.LOADING) {
                let e = null != tI.current ? performance.now() - tI.current : null;
                ex?.(e);
            }
            (ty(d.h$.READY), ta === d.Q6.PLAYING && (tN.current || ny(d.Q6.PLAYING, d.KB.BUFFERING_RECOVERY)));
        }
    }
    function nO(e) {
        if ((nU(e), ta === d.Q6.ENDED && !tL.current)) {
            let t = t0.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && ny(d.Q6.PLAYING, d.KB.USER);
        }
    }
    l.useEffect(() => {
        if (null == t6.current) return;
        let e = t6.current;
        return (
            e.addEventListener("load", nK),
            () => {
                null != e && e.removeEventListener("load", nK);
            }
        );
    }, [nK]);
    let [{ controlBarAnimSpring: nQ }, nH] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: Q,
            onStart: () => {
                tj(!1);
            },
            onRest: () => {
                tj(!0);
            },
        })),
        nY = (0, l.useRef)(null),
        [{ captionHeightSpring: nV }, nz] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: Q }));
    (l.useEffect(
        () => (
            nz({ captionHeightSpring: tz && null != ns ? (nY.current?.clientHeight ?? 0) : 0, immediate: tZ }),
            () => {
                nV.stop();
            }
        ),
        [tz, nz, tZ, ns, nV],
    ),
        l.useEffect(
            () => (
                nH({ controlBarAnimSpring: nT || tA ? 1 : 0, immediate: tZ }),
                () => {
                    nQ.stop();
                }
            ),
            [nT, nH, tZ, tA, nQ],
        ));
    let nX = ta === d.Q6.ENDED && null != ei,
        nW = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KB.USER;
                null != t0.current && (nU(0), ny(d.Q6.PLAYING, e));
            },
            [nU, ny],
        ),
        nq = l.useRef(null),
        nZ = l.useCallback(
            (e) => {
                (nR(), nq.current?.(e.nativeEvent));
            },
            [nR],
        );
    l.useImperativeHandle(
        e9,
        () => ({
            play: () => {
                ny(d.Q6.PLAYING, d.KB.USER);
            },
            pause: () => {
                ny(d.Q6.PAUSED, d.KB.USER);
            },
            seek: (e) => {
                nU(e);
            },
        }),
        [ny, nU],
    );
    let nJ = {
            ref: l.useCallback(
                (e) => {
                    t0.current = e;
                    let t = (0, j.c)(e);
                    ((tl.current = t), "function" == typeof e7 ? e7(t) : null != e7 && (e7.current = t));
                },
                [e7, tl],
            ),
            alt: X,
            playsInline: !0,
            mediaLayoutType: tW ? _.dG.STATIC : _.dG.RESPONSIVE,
            className: i()({ [$.R]: nX, [$.IR]: !0, [$.FP]: "cover" === e1 && !tW }),
            controls: !1,
            poster: q,
            preload: tF ? eT : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != t0.current &&
                    (ee?.(t0.current.currentTime, t0.current.duration),
                    tS.current || th((t0.current.currentTime / t0.current.duration) * 100));
            },
            onEnded: function (e) {
                (ty(d.h$.READY), et?.(), tL.current || ny(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (tb === d.h$.LOADING) {
                    let e = null != tI.current ? performance.now() - tI.current : null;
                    (ex?.(e), ty(d.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == t0.current) return;
                J > 0 && !na && nU(J, !1);
                let t = ep?.() ?? tG,
                    n = eh?.() ?? tK;
                (t !== tG && t_(t), n !== tK && t$(n), (t0.current.volume = n ? 0 : t));
                let r = t0.current.duration;
                (r > 0 && isFinite(r) && nm(r), np(!0));
            },
            onLoadStart: function () {
                ((tI.current = performance.now()), ev?.());
            },
            onPlaying: function () {
                tD.current && (eE?.(performance.now()), (tD.current = !1));
            },
            onWaiting: function (e) {
                ((tB.current = performance.now()), eg?.(), ty(d.h$.BUFFERING));
            },
            onProgress: function (e) {
                if (null == t0.current) return;
                let t = [];
                for (let e = 0; e < t0.current.buffered.length; e++) {
                    let n = t0.current.buffered.start(e),
                        r = t0.current.buffered.end(e);
                    r - n < 1 || t.push({ start: n / t0.current.duration, size: (r - n) / t0.current.duration });
                }
                tw(t);
            },
            onCanPlay: n$,
            onCanPlayThrough: n$,
            onSeeked: function () {
                ((tS.current = !1),
                    (tC.current = null),
                    null != t0.current && th((t0.current.currentTime / t0.current.duration) * 100));
            },
            onAbort: function () {
                return nl(d.SB.ABORT);
            },
            onError: function () {
                return nl(d.SB.ERROR);
            },
            onEmptied: function () {
                return nl(d.SB.EMPTIED);
            },
            onStalled: function () {
                return nl(d.SB.STALLED);
            },
            onClick: n_,
            crossOrigin: eJ ?? void 0,
            src: na || no ? null : (e3 ?? null),
            onSourceError: function () {
                return nl(d.SB.SOURCE_ERROR);
            },
            isScrubbing: tA,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    null != el &&
                        (0, r.jsx)("track", {
                            ref: t6,
                            src: el,
                            label: "English",
                            kind: "captions",
                            srcLang: "en",
                            default: !0,
                        }),
                    null != eW && (0, r.jsx)("track", { ref: t7, src: eW, kind: "metadata" }),
                ],
            }),
        },
        n0 = (0, r.jsx)(N.BK, {
            children: (0, r.jsx)(A.pT, {
                activeLayer: tW ? N.$W : void 0,
                isFullscreen: tW,
                videoRef: t0,
                isActive: tF,
                isControlBarExpanded: nT,
                children: (0, r.jsx)(p.D, {
                    className: i()($.W6, { [$.nZ]: !tF }),
                    style: { minWidth: e2, minHeight: e6 },
                    "data-fullscreen": tW,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tF ? -1 : 0,
                    focusProps: tF ? void 0 : { ringTarget: tv },
                    onMouseEnter: function () {
                        (to(!0),
                            nC(!1),
                            (nw.current = performance.now()),
                            null != nP.current && clearTimeout(nP.current));
                    },
                    onMouseLeave: function () {
                        (to(!1), nC(!1));
                    },
                    "aria-label": tF ? void 0 : K.intl.string(K.t.RscU7I),
                    onClick: tF ? void 0 : n_,
                    onMouseMove: nR,
                    children: (0, r.jsxs)("div", {
                        ref: t1,
                        className: i()($.NS, { [$.DO]: "portrait" === a, [$.r7]: "landscape" === a }),
                        tabIndex: -1,
                        onKeyDown: nZ,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${nb.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": "4px",
                            "--custom-footer-scrim-height": `${nb.scrimHeightPx}px`,
                            "--custom-controls-gap": `${nb.controlsGapPx}px`,
                            "--custom-controls-end-width":
                                null != nb.trailingGroupWidthPx ? `${nb.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tF && e0 && !tZ && (0, r.jsx)("canvas", { ref: t2, className: $.Xm }),
                            nX && ei?.({ replay: nW }),
                            eu(nJ),
                            tb !== d.h$.READY &&
                                ta === d.Q6.PLAYING &&
                                null != e3 &&
                                (0, r.jsx)("span", {
                                    className: i()($.S, { [$.F]: "center" === eZ }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(I.A, {
                                message: e5({ hasVideoAsset: null != e3, playerState: ta, pauseReason: t8 }),
                                showOverlay: null == e3,
                            }),
                            nt &&
                                null != nn &&
                                (0, r.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, r.jsx)(O, { stats: nn, onClose: nr }),
                                }),
                            null != ew &&
                                (0, r.jsx)(u.animated.div, {
                                    className: $.MU,
                                    style: {
                                        opacity: (0, u.to)([nQ.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, u.to)([nQ.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, u.to)([nQ.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: ew(),
                                }),
                            tF &&
                                null != eI &&
                                (0, r.jsx)("div", {
                                    className: $.Wq,
                                    "data-testid": "discord-web-video-player-top-start-overlay",
                                    onFocus: nk,
                                    onBlur: nM,
                                    children: eI({ visible: nT, animSpring: nQ, size: ng }),
                                }),
                            tY &&
                                ta !== d.Q6.ENDED &&
                                null != ea &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (ta === d.Q6.PAUSED && ny(d.Q6.PLAYING, d.KB.USER), tV(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: $.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: i()($.xr, eR, { [$.MZ]: "portrait" === a }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)(
                                                    [nQ, nV],
                                                    (e, t) => `${e * nb.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(k.X, {
                                                text: ea,
                                                onClose: function () {
                                                    tV(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tF &&
                                (0, r.jsx)(u.animated.div, {
                                    className: $.Jp,
                                    style: {
                                        opacity: (0, u.to)([nQ.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: i()($.yf, {
                                        [$.ZH]: tk.current && ta === d.Q6.PLAYING,
                                        [$.v7]: tk.current && ta === d.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        ta === d.Q6.PLAYING
                                            ? (0, r.jsx)(v.PlayIcon, { className: $.PK })
                                            : (0, r.jsx)(x.PauseIcon, { className: $.PK }),
                                },
                                ta,
                            ),
                            tz &&
                                null != ns &&
                                !nX &&
                                (0, r.jsx)(u.animated.div, {
                                    className: $.o$,
                                    ref: nY,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [nQ.to({ range: [0, 1], output: [-20, -nb.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(E.E, {
                                        variant: "text-lg/semibold",
                                        color: "text-overlay-light",
                                        className: $.qh,
                                        children: ns.text,
                                    }),
                                }),
                            tF &&
                                (0, r.jsxs)(u.animated.div, {
                                    className: $.r8,
                                    style: {
                                        height: (0, u.to)(
                                            [nQ.to({ range: [0, 1], output: [0, nb.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    onFocus: nk,
                                    onBlur: nM,
                                    children: [
                                        (0, r.jsx)(u.animated.div, {
                                            style: {
                                                transform: (0, u.to)(
                                                    [nQ.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${20 * e}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)("div", {
                                                style: nT || tA || eQ ? void 0 : H,
                                                children: (0, r.jsx)(T.Ay, {
                                                    percent: null != tf ? tf : td,
                                                    animate:
                                                        !0 !== t4.current &&
                                                        !tx &&
                                                        ta === d.Q6.PLAYING &&
                                                        nf &&
                                                        tb === d.h$.READY,
                                                    interactionEnabled: tM && nh > 0,
                                                    backgroundColor: nT || eQ ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                    playerState: ta,
                                                    preloadedBuffers: nT ? tP : void 0,
                                                    durationSec: nd > 0 ? nd : +!nf,
                                                    isFullyVisible: nT && tM,
                                                    maxSeekableTime: null != er && nh > 0 ? nh : void 0,
                                                    progressClassName: e$,
                                                    persistPlayhead: eH,
                                                    onClick: nO,
                                                    onScrubBack: nB,
                                                    onScrubForward: nF,
                                                    onDragStateChange: function (e) {
                                                        if (((tL.current = e), eP?.(e), tR(e), e))
                                                            ((tN.current = ta === d.Q6.PLAYING),
                                                                (tT.current = ta === d.Q6.ENDED),
                                                                tN.current
                                                                    ? t0.current?.pause()
                                                                    : tT.current && ny(d.Q6.PAUSED, d.KB.SEEK));
                                                        else {
                                                            let e = t0.current,
                                                                t =
                                                                    null != e &&
                                                                    !Number.isNaN(e.duration) &&
                                                                    e.currentTime >= e.duration;
                                                            tN.current
                                                                ? ((tN.current = !1),
                                                                  t
                                                                      ? ny(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                      : e?.play())
                                                                : tT.current
                                                                  ? ((tT.current = !1),
                                                                    t
                                                                        ? ny(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                        : ny(d.Q6.PLAYING, d.KB.USER))
                                                                  : t && ny(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                                                        }
                                                    },
                                                    indicatorConfig: eX,
                                                    scrubPreviewCues: t3,
                                                    onIndicatorSeek: nO,
                                                    getCurrentTimeSec: t5,
                                                    "data-testid": "discord-web-video-player-timeline",
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: $.uN,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, u.to)(
                                                    [nQ.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 20}px`,
                                                ),
                                                paddingBottom: (0, u.to)(
                                                    [nQ.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 20}px`,
                                                ),
                                                pointerEvents: (0, u.to)(
                                                    [nQ.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            children: (0, r.jsx)(R.A, {
                                                playerState: ta,
                                                animSpring: nQ,
                                                visible: nT,
                                                seekForwardEnabled:
                                                    null == er || (t0.current?.currentTime ?? 0) + 1 < nh,
                                                hideCaptionBtn: null == el,
                                                hideTranscriptBtn: null == ea,
                                                hideFullScreenBtn: eB,
                                                hidePlaybackSpeedBtn: eG,
                                                hideSkipButtons: eF ?? "portrait" === a,
                                                compactTimeDisplay: eU,
                                                size: ng,
                                                downloadUrl: ek,
                                                downloadContentType: ej,
                                                extraButtons: eD,
                                                autoFocus: eY,
                                                keyDownHandlerRef: nq,
                                                volume: tG,
                                                muted: tK,
                                                transcriptEnabled: tY,
                                                captionEnabled: tz,
                                                handlePlaybackBtnClick: nG,
                                                handleTranscriptBtnClick: function () {
                                                    tV(!tY);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    tX(!tz);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !tW,
                                                        t = (0, C.qf)(t1.current);
                                                    (e && null != t
                                                        ? ((0, C.tl)(t), t.addEventListener(C.Wb, nI), es?.(!0))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(C.Wb, nI), es?.(!1), (0, C.sP)(t)),
                                                        tq(e));
                                                },
                                                handleSeekBackBtnClick: nB,
                                                handleSeekForwardBtnClick: nF,
                                                autoHideVolumeSlider: tO,
                                                floatingVolumeSlider: ez,
                                                handleControlBarPendingInteraction: tR,
                                                onVolumeChange: function (e) {
                                                    (t_(e), ec?.(e));
                                                },
                                                onMutedChange: function (e) {
                                                    (t$(e), ed?.(e));
                                                },
                                                onVolumeExpandedChange: function (e) {
                                                    tH(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            null != eA &&
                                (0, r.jsx)("div", {
                                    className: $.MU,
                                    children: eA({
                                        playerState: ta,
                                        isControlBarExpanded: nT,
                                        controlBarAnimationSpring: nQ,
                                        videoRef: t0,
                                        isActive: tF,
                                        isVolumeExpanded: tQ,
                                    }),
                                }),
                            !tF &&
                                (0, r.jsx)("div", {
                                    className: $.mF,
                                    ref: tv,
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
    return (0, r.jsx)(s.Jh, { enabled: tW, children: n0 });
}
