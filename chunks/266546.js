(n.r(t),
    n.d(t, {
        ATTACHMENT_CONTROL_BAR_CONFIG: () => N.Xq,
        COMPACT_CONTROL_BAR_MAX_WIDTH_PX: () => N.$7,
        default: () => V,
    }),
    n(321073));
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    o = n(941143),
    u = n(621466),
    s = n(337836),
    c = n(17928),
    d = n(876230),
    m = n(231723),
    f = n(717421),
    p = n(939249),
    h = n(289873),
    x = n(782134),
    v = n(113494),
    g = n(834730),
    E = n(964486),
    b = n(770178),
    y = n(765548),
    P = n(775602),
    S = n(475815),
    C = n(718499),
    A = n(23590),
    w = n(683574),
    R = n(671897),
    N = n(530567),
    T = n(906892),
    L = n(565164),
    M = n(275664),
    k = n(408121),
    j = n(984212),
    D = n(246047),
    I = n(739416),
    B = n(931853),
    F = n(90721),
    $ = n(920228),
    G = n(953584),
    H = n(338659),
    _ = n(838541),
    U = n(105292),
    O = n(862649);
let K = l.lazy(() =>
        Promise.all([n.e("999272"), n.e("919307")])
            .then(n.bind(n, 410694))
            .then((e) => ({ default: e.VideoStatsOverlay })),
    ),
    Q = { tension: 250, friction: 5, clamp: !0 },
    z = { visibility: "hidden" };
function V(e) {
    let {
            parentTransitionState: t,
            autoplay: n = !1,
            orientation: i = "landscape",
            videoUrlOverride: V,
            alt: X,
            src: Y,
            poster: W,
            initialActive: q = !0,
            initialTimeSec: Z = 0,
            onProgressUpdate: J,
            onEnded: ee,
            onError: et,
            maxSeekableTimeSec: en,
            captionTrackUrl: er,
            transcriptText: el,
            renderEndScreen: ei,
            renderVideo: ea = D.v,
            onPlayerStateChange: eo,
            onFullscreenChange: eu,
            onVolumeChange: es,
            onMutedChange: ec,
            initialVolume: ed = 0.3,
            initialMuted: em = !1,
            getInitialVolume: ef,
            getInitialMuted: ep,
            onLoadStart: eh,
            onLoadEnd: ex,
            onFirstFrame: ev,
            onBufferingStart: eg,
            onBufferingEnd: eE,
            onFocusChange: eb,
            onVisibilityChange: ey,
            onSeek: eP,
            onTimelineDragStateChange: eS,
            renderOverlay: eC,
            renderPersistentOverlay: eA,
            transcriptClassName: ew,
            onHlsInstance: eR,
            onClick: eN,
            preload: eT,
            downloadUrl: eL,
            fileSizeBytes: eM,
            downloadContentType: ek,
            extraButtons: ej,
            renderTopStartOverlay: eD,
            hideFullScreenBtn: eI = !1,
            hideSkipButtons: eB,
            compactTimeDisplay: eF = !1,
            hidePlaybackSpeedBtn: e$ = !1,
            autoSizeControlBar: eG = !1,
            controlBarConfig: eH,
            getPlaybackBlockedMessage: e_,
            progressClassName: eU,
            pauseOnLostVisibility: eO = !1,
            persistTimeline: eK = !1,
            persistPlayhead: eQ = !0,
            autoFocus: ez = !1,
            autoHideVolumeSlider: eV = !1,
            floatingVolumeSlider: eX = !1,
            timelineIndicatorConfig: eY,
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
        e3 = V ?? Y,
        e5 = e_ ?? B.u,
        { focused: te, focusedChanged: tt } = (0, I.A7)(),
        { visible: tn, visibleChanged: tr, targetRef: tl } = (0, I.O7)(),
        [ti, ta] = l.useState(n ? d.Q6.PLAYING : d.Q6.PAUSED),
        [to, tu] = l.useState(!1),
        [ts, tc] = l.useState(!1),
        [td, tm] = l.useState(0),
        [tf, tp] = l.useState(null),
        th = l.useCallback((e) => {
            (tp(null), tm(e));
        }, []),
        tx = l.useRef(null),
        [tv, tg] = l.useState(!1),
        tE = l.useRef(null),
        [tb, ty] = l.useState(d.h$.LOADING),
        tP = l.useRef(!1),
        tS = l.useRef(null),
        [tC, tA] = l.useState([]),
        [tw, tR] = l.useState(!1),
        tN = l.useRef(!1),
        tT = l.useRef(!1),
        tL = l.useRef(!1),
        tM = l.useRef(!1),
        [tk, tj] = l.useState(!0),
        tD = l.useRef(!0),
        tI = l.useRef(null),
        tB = l.useRef(null),
        [tF, t$] = l.useState(n || q),
        [tG, tH] = l.useState(ed),
        [t_, tU] = l.useState(em),
        tO = eV || eX,
        [tK, tQ] = l.useState(!tO),
        [tz, tV] = l.useState(!1),
        [tX, tY] = l.useState(!1),
        [tW, tq] = l.useState(!1),
        tZ = (0, c.bG)([P.Ay], () => P.Ay.useReducedMotion),
        tJ = (0, c.bG)([P.Ay], () => P.Ay.keyboardModeEnabled),
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
                    return (0, D.c)(t0.current);
                },
            }),
            [],
        );
    (0, F.A)({ videoRef: ne, canvasRef: t2, enabled: tF && e0 && !tZ, canvasWidth: 32, canvasHeight: 18 });
    let {
            showStats: nt,
            videoStats: nn,
            onCloseStats: nr,
        } = (function (e) {
            let { videoRef: t, src: n, fileSizeBytes: r } = e,
                i = null != n && "" !== n,
                a = (0, c.bG)([G.Ay], () => !!i && G.Ay.isVideoStatsEnabled(n)),
                [o, u] = l.useState(null);
            return (
                l.useEffect(() => {
                    if (!a) return;
                    let e = t.current;
                    if (null == e) {
                        i && (0, G.Vh)(n, !1);
                        return;
                    }
                    let l = new H.s(e, r ?? void 0);
                    return (
                        l.startTracking(u, { emitInitial: !0 }),
                        () => {
                            l.destroy();
                        }
                    );
                }, [a, t, n, i, r]),
                l.useEffect(
                    () => () => {
                        i && (0, G.ke)(n);
                    },
                    [n, i],
                ),
                {
                    showStats: a,
                    videoStats: a ? o : null,
                    onCloseStats: l.useCallback(() => {
                        i && (0, G.Vh)(n, !1);
                    }, [n, i]),
                }
            );
        })({ videoRef: t0, src: e3, fileSizeBytes: eM }),
        nl = l.useCallback(
            (e, t) => {
                et?.(e, t);
            },
            [et],
        ),
        { isHlsActive: ni, hls: na } = (0, C.Ay)(ne, {
            src: e3,
            initialTimeSec: Z,
            onError: nl,
            onHlsInstance: eR,
            crossOrigin: eJ,
        }),
        { isReady: no } = (0, A.A)({ videoRef: ne, hls: na, contentMetadata: e4, isHls: ni }),
        nu = e8 && !no && !ni,
        [ns, nc] = l.useState(null),
        [nd, nm] = l.useState(0),
        [nf, np] = l.useState(!1),
        nh = en ?? t0.current?.duration ?? 0,
        [nx, nv] = l.useState(!1),
        ng = (0, y.A)((e) => {
            let t = e.contentRect.width;
            t <= 0 || nv(t < N.$7);
        });
    (0, b.g)(t1, ng, [], { enabled: eG, fireOnMount: eG });
    let { size: nE, config: nb } = l.useMemo(() => (0, N.ZH)(eG && nx ? d.oA.SM : d.oA.MD, eH, tW), [eG, nx, eH, tW]),
        ny = nb.timelineVerticalPaddingPx;
    (0, E.u5)(() => {
        t4.current && (t4.current = !1);
    });
    let nP = l.useCallback(
        function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (((tM.current = !0), ta(e), eo?.(e, t), null != t0.current))
                switch (e) {
                    case d.Q6.PLAYING:
                        (t9(null), t$(!0), t0.current.play());
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
        if ((e || n || r) && null != t0.current && ti === d.Q6.PLAYING) {
            let t = e || n ? d.KB.VISIBILITY : d.KB.FOCUS;
            (t9(t), nP(d.Q6.PAUSED, t));
        }
    }, [eO, t, te, tt, tn, tr, ti, nP]),
        (0, $.A)({
            videoRef: ne,
            enabled: eO,
            onPipPause: () => {
                (t9(d.KB.PICTURE_IN_PICTURE), nP(d.Q6.PAUSED, d.KB.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (t9(d.KB.FOCUS), nP(d.Q6.PAUSED, d.KB.FOCUS));
            },
        }),
        l.useEffect(() => {
            tt && eb?.(te, ti);
        }, [te, tt, ti, eb]),
        l.useEffect(() => {
            tr && ey?.(tn, ti);
        }, [tn, tr, ti, ey]));
    let [nS, nC] = l.useState(!1),
        nA = l.useRef(null),
        nw = l.useRef(0);
    l.useLayoutEffect(() => {
        nw.current = performance.now();
    }, []);
    let nR = l.useCallback(() => {
            switch ((null != nA.current && clearTimeout(nA.current), ti)) {
                case d.Q6.PLAYING:
                    nA.current = setTimeout(
                        () => {
                            nC(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - nw.current)),
                    );
                case d.Q6.PAUSED:
                case d.Q6.ENDED:
            }
        }, [ti]),
        nN = l.useCallback(() => {
            (nC(!1), (nw.current = performance.now()), nR());
        }, [nR]);
    (l.useEffect(() => {
        if (ti !== d.Q6.PLAYING) {
            (nC(!1), null != nA.current && clearTimeout(nA.current));
            return;
        }
        return (
            nR(),
            () => {
                null != nA.current && clearTimeout(nA.current);
            }
        );
    }, [ti, nR]),
        l.useEffect(
            () => () => {
                null != tE.current && clearTimeout(tE.current);
            },
            [],
        ));
    let nT = ts && tJ,
        nL = ti === d.Q6.ENDED,
        nM = nT || ((ts || to || nL) && !nS);
    function nk() {
        tc(!0);
    }
    function nj(e) {
        ((0, u.vq)(e.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) || tc(!1);
    }
    let nD = l.useRef(!1);
    l.useEffect(() => {
        (nD.current && !nT && nN(), (nD.current = nT));
    }, [nT, nN]);
    let nI = l.useRef(eu);
    nI.current = eu;
    let nB = l.useCallback(() => {
        let e = (0, S.qf)(t1.current);
        null == e || (0, S._U)(e) || (e.removeEventListener(S.Wb, nB), tq(!1), nI.current?.(!1));
    }, []);
    function nF() {
        null == t0.current ||
            (nG(Math.max((tS.current ?? t0.current.currentTime) - 10, 0)),
            ti === d.Q6.ENDED && nP(d.Q6.PAUSED, d.KB.SEEK));
    }
    function n$() {
        if (null == t0.current) return;
        let e = Math.min((tS.current ?? t0.current.currentTime) + 10, nh);
        (nG(e), ti !== d.Q6.ENDED && e >= t0.current.duration && nP(d.Q6.ENDED, d.KB.SEEK));
    }
    l.useEffect(() => {
        let e = t1.current;
        return () => {
            let t = (0, S.qf)(e);
            null != t && t.removeEventListener(S.Wb, nB);
        };
    }, [nB]);
    let nG = l.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == t0.current) return;
            let n = t0.current.currentTime;
            ((tS.current = e),
                tp((e / (t0.current.duration ?? 1)) * 100),
                tg(!0),
                null != tE.current && clearTimeout(tE.current),
                (tE.current = setTimeout(() => {
                    (tg(!1), (tE.current = null));
                }, 100)),
                (tP.current = !0),
                (t0.current.currentTime = e),
                t && eP?.(n, e));
        },
        [eP],
    );
    function nH() {
        if (null != t0.current)
            switch (ti) {
                case d.Q6.ENDED:
                    (nG(0), nP(d.Q6.PLAYING, d.KB.USER));
                    break;
                case d.Q6.PLAYING:
                    (t9(d.KB.USER), nP(d.Q6.PAUSED, d.KB.USER));
                    break;
                default:
                    nP(d.Q6.PLAYING, d.KB.USER);
            }
    }
    function n_(e) {
        null != eN ? eN(e) : (t$(!0), nH());
    }
    let nU = l.useCallback(() => {
        if (null == t0.current || 0 === t0.current.textTracks.length) return;
        let e = t0.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, j.C)(n) &&
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
    function nO(e) {
        if (null != t0.current) {
            if (tb === d.h$.BUFFERING) {
                let e = null != tB.current ? performance.now() - tB.current : null;
                eE?.(e);
            } else if (tb === d.h$.LOADING) {
                let e = null != tI.current ? performance.now() - tI.current : null;
                ex?.(e);
            }
            (ty(d.h$.READY), ti === d.Q6.PLAYING && (tN.current || nP(d.Q6.PLAYING, d.KB.BUFFERING_RECOVERY)));
        }
    }
    function nK(e) {
        if ((nG(e), ti === d.Q6.ENDED && !tT.current)) {
            let t = t0.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && nP(d.Q6.PLAYING, d.KB.USER);
        }
    }
    l.useEffect(() => {
        if (null == t6.current) return;
        let e = t6.current;
        return (
            e.addEventListener("load", nU),
            () => {
                null != e && e.removeEventListener("load", nU);
            }
        );
    }, [nU]);
    let [{ controlBarAnimSpring: nQ }, nz] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: Q,
            onStart: () => {
                tj(!1);
            },
            onRest: () => {
                tj(!0);
            },
        })),
        nV = (0, l.useRef)(null),
        [{ captionHeightSpring: nX }, nY] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: Q }));
    (l.useEffect(
        () => (
            nY({ captionHeightSpring: tX && null != ns ? (nV.current?.clientHeight ?? 0) : 0, immediate: tZ }),
            () => {
                nX.stop();
            }
        ),
        [tX, nY, tZ, ns, nX],
    ),
        l.useEffect(
            () => (
                nz({ controlBarAnimSpring: nM || tw ? 1 : 0, immediate: tZ }),
                () => {
                    nQ.stop();
                }
            ),
            [nM, nz, tZ, tw, nQ],
        ));
    let nW = ti === d.Q6.ENDED && null != ei,
        nq = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KB.USER;
                null != t0.current && (nG(0), nP(d.Q6.PLAYING, e));
            },
            [nG, nP],
        ),
        nZ = l.useRef(null),
        nJ = l.useCallback(
            (e) => {
                (nN(), nZ.current?.(e.nativeEvent));
            },
            [nN],
        );
    l.useImperativeHandle(
        e9,
        () => ({
            play: () => {
                nP(d.Q6.PLAYING, d.KB.USER);
            },
            pause: () => {
                nP(d.Q6.PAUSED, d.KB.USER);
            },
            seek: (e) => {
                nG(e);
            },
        }),
        [nP, nG],
    );
    let n0 = {
            ref: l.useCallback(
                (e) => {
                    t0.current = e;
                    let t = (0, D.c)(e);
                    ((tl.current = t), "function" == typeof e7 ? e7(t) : null != e7 && (e7.current = t));
                },
                [e7, tl],
            ),
            alt: X,
            playsInline: !0,
            mediaLayoutType: tW ? _.dG.STATIC : _.dG.RESPONSIVE,
            className: a()({ [O.R]: nW, [O.IR]: !0, [O.FP]: "cover" === e1 && !tW }),
            controls: !1,
            poster: W,
            preload: tF ? eT : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != t0.current &&
                    (J?.(t0.current.currentTime, t0.current.duration),
                    tP.current || th((t0.current.currentTime / t0.current.duration) * 100));
            },
            onEnded: function (e) {
                (ty(d.h$.READY), ee?.(), tT.current || nP(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (tb === d.h$.LOADING) {
                    let e = null != tI.current ? performance.now() - tI.current : null;
                    (ex?.(e), ty(d.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == t0.current) return;
                Z > 0 && !ni && nG(Z, !1);
                let t = ef?.() ?? tG,
                    n = ep?.() ?? t_;
                (t !== tG && tH(t), n !== t_ && tU(n), (t0.current.volume = n ? 0 : t));
                let r = t0.current.duration;
                (r > 0 && isFinite(r) && nm(r), np(!0));
            },
            onLoadStart: function () {
                ((tI.current = performance.now()), eh?.());
            },
            onPlaying: function () {
                tD.current && (ev?.(performance.now()), (tD.current = !1));
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
                tA(t);
            },
            onCanPlay: nO,
            onCanPlayThrough: nO,
            onSeeked: function () {
                ((tP.current = !1),
                    (tS.current = null),
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
            src: ni || nu ? null : (e3 ?? null),
            onSourceError: function () {
                return nl(d.SB.SOURCE_ERROR);
            },
            isScrubbing: tw,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    null != er &&
                        (0, r.jsx)("track", {
                            ref: t6,
                            src: er,
                            label: "English",
                            kind: "captions",
                            srcLang: "en",
                            default: !0,
                        }),
                    null != eW && (0, r.jsx)("track", { ref: t7, src: eW, kind: "metadata" }),
                ],
            }),
        },
        n1 = (0, r.jsx)(T.BK, {
            children: (0, r.jsx)(w.pT, {
                activeLayer: tW ? T.$W : void 0,
                isFullscreen: tW,
                videoRef: t0,
                isActive: tF,
                controlBarConfig: nb,
                isControlBarExpanded: nM,
                children: (0, r.jsx)(p.D, {
                    className: a()(O.W6, { [O.nZ]: !tF }),
                    style: { minWidth: e2, minHeight: e6 },
                    "data-fullscreen": tW,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tF ? -1 : 0,
                    focusProps: tF ? void 0 : { ringTarget: tx },
                    onMouseEnter: function () {
                        (tu(!0),
                            nC(!1),
                            (nw.current = performance.now()),
                            null != nA.current && clearTimeout(nA.current));
                    },
                    onMouseLeave: function () {
                        (tu(!1), nC(!1));
                    },
                    "aria-label": tF ? void 0 : U.intl.string(U.t.RscU7I),
                    onClick: tF ? void 0 : n_,
                    onMouseMove: nN,
                    children: (0, r.jsxs)("div", {
                        ref: t1,
                        className: a()(O.NS, { [O.DO]: "portrait" === i, [O.r7]: "landscape" === i }),
                        tabIndex: -1,
                        onKeyDown: nJ,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${nb.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": `${nb.footerBottomPx}px`,
                            "--custom-footer-scrim-height": `${nb.scrimHeightPx}px`,
                            "--custom-controls-gap": `${nb.controlsGapPx}px`,
                            "--custom-controls-mid-gap": `${nb.midGroupGapPx}px`,
                            "--custom-duration-margin": `${nb.durationMarginPx}px`,
                            "--custom-playhead-size": `${nb.playheadSizePx}px`,
                            "--custom-timeline-hitbox-offset": `${nb.timelineHitboxOffsetPx}px`,
                            "--custom-volume-slider-margin-start": `${nb.volumeSliderMarginStartPx}px`,
                            "--custom-volume-slider-padding-inline": `${nb.volumeSliderPaddingInlinePx}px`,
                            "--custom-volume-group-margin-end": `${nb.volumeGroupMarginEndPx}px`,
                            "--custom-volume-flex-shrink": nb.volumeFlexShrink,
                            "--custom-controls-end-width":
                                null != nb.trailingGroupWidthPx ? `${nb.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tF && e0 && !tZ && (0, r.jsx)("canvas", { ref: t2, className: O.Xm }),
                            nW && ei?.({ replay: nq }),
                            ea(n0),
                            tb !== d.h$.READY &&
                                ti === d.Q6.PLAYING &&
                                null != e3 &&
                                (0, r.jsx)("span", {
                                    className: a()(O.S, { [O.F]: "center" === eZ }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(B.A, {
                                message: e5({ hasVideoAsset: null != e3, playerState: ti, pauseReason: t8 }),
                                showOverlay: null == e3,
                            }),
                            nt &&
                                null != nn &&
                                (0, r.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, r.jsx)(K, { stats: nn, onClose: nr }),
                                }),
                            null != eC &&
                                (0, r.jsx)(o.animated.div, {
                                    className: O.MU,
                                    style: {
                                        opacity: (0, o.to)([nQ.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, o.to)([nQ.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, o.to)([nQ.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: eC(),
                                }),
                            tF &&
                                null != eD &&
                                (0, r.jsx)("div", {
                                    className: O.Wq,
                                    "data-testid": "discord-web-video-player-top-start-overlay",
                                    onFocus: nk,
                                    onBlur: nj,
                                    children: eD({ visible: nM, animSpring: nQ, size: nE }),
                                }),
                            tz &&
                                ti !== d.Q6.ENDED &&
                                null != el &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (ti === d.Q6.PAUSED && nP(d.Q6.PLAYING, d.KB.USER), tV(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: O.BG }),
                                        }),
                                        (0, r.jsx)(o.animated.div, {
                                            className: a()(O.xr, ew, { [O.MZ]: "portrait" === i }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, o.to)(
                                                    [nQ, nX],
                                                    (e, t) => `${e * nb.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(k.X, {
                                                text: el,
                                                onClose: function () {
                                                    tV(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tF &&
                                (0, r.jsx)(o.animated.div, {
                                    className: O.Jp,
                                    style: {
                                        opacity: (0, o.to)([nQ.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: a()(O.yf, {
                                        [O.ZH]: tM.current && ti === d.Q6.PLAYING,
                                        [O.v7]: tM.current && ti === d.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        ti === d.Q6.PLAYING
                                            ? (0, r.jsx)(x.PlayIcon, { className: O.PK })
                                            : (0, r.jsx)(v.PauseIcon, { className: O.PK }),
                                },
                                ti,
                            ),
                            tX &&
                                null != ns &&
                                !nW &&
                                (0, r.jsx)(o.animated.div, {
                                    className: O.o$,
                                    ref: nV,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, o.to)(
                                            [nQ.to({ range: [0, 1], output: [-ny, -nb.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(g.E, {
                                        variant: "text-lg/semibold",
                                        color: "text-overlay-light",
                                        className: O.qh,
                                        children: ns.text,
                                    }),
                                }),
                            tF &&
                                (0, r.jsxs)(o.animated.div, {
                                    className: O.r8,
                                    style: {
                                        height: (0, o.to)(
                                            [nQ.to({ range: [0, 1], output: [0, nb.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    onFocus: nk,
                                    onBlur: nj,
                                    children: [
                                        (0, r.jsx)(o.animated.div, {
                                            style: {
                                                transform: (0, o.to)(
                                                    [nQ.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${e * ny}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)("div", {
                                                style: nM || tw || eK ? void 0 : z,
                                                children: (0, r.jsx)(M.Ay, {
                                                    percent: null != tf ? tf : td,
                                                    animate:
                                                        !0 !== t4.current &&
                                                        !tv &&
                                                        ti === d.Q6.PLAYING &&
                                                        nf &&
                                                        tb === d.h$.READY,
                                                    interactionEnabled: tk && nh > 0,
                                                    backgroundColor: nM || eK ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                    playerState: ti,
                                                    preloadedBuffers: nM ? tC : void 0,
                                                    durationSec: nd > 0 ? nd : +!nf,
                                                    isFullyVisible: nM && tk,
                                                    maxSeekableTime: null != en && nh > 0 ? nh : void 0,
                                                    progressClassName: eU,
                                                    persistPlayhead: eQ,
                                                    onClick: nK,
                                                    onScrubBack: nF,
                                                    onScrubForward: n$,
                                                    onDragStateChange: function (e) {
                                                        if (((tT.current = e), eS?.(e), tR(e), e))
                                                            ((tN.current = ti === d.Q6.PLAYING),
                                                                (tL.current = ti === d.Q6.ENDED),
                                                                tN.current
                                                                    ? t0.current?.pause()
                                                                    : tL.current && nP(d.Q6.PAUSED, d.KB.SEEK));
                                                        else {
                                                            let e = t0.current,
                                                                t =
                                                                    null != e &&
                                                                    !Number.isNaN(e.duration) &&
                                                                    e.currentTime >= e.duration;
                                                            tN.current
                                                                ? ((tN.current = !1),
                                                                  t
                                                                      ? nP(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                      : e?.play())
                                                                : tL.current
                                                                  ? ((tL.current = !1),
                                                                    t
                                                                        ? nP(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                        : nP(d.Q6.PLAYING, d.KB.USER))
                                                                  : t && nP(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                                                        }
                                                    },
                                                    indicatorConfig: eY,
                                                    scrubPreviewCues: t3,
                                                    onIndicatorSeek: nK,
                                                    getCurrentTimeSec: t5,
                                                    "data-testid": "discord-web-video-player-timeline",
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)(o.animated.div, {
                                            className: O.uN,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, o.to)(
                                                    [nQ.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * ny}px`,
                                                ),
                                                paddingBottom: (0, o.to)(
                                                    [nQ.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * ny}px`,
                                                ),
                                                pointerEvents: (0, o.to)(
                                                    [nQ.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            children: (0, r.jsx)(R.A, {
                                                playerState: ti,
                                                animSpring: nQ,
                                                visible: nM,
                                                seekForwardEnabled:
                                                    null == en || (t0.current?.currentTime ?? 0) + 1 < nh,
                                                hideCaptionBtn: null == er,
                                                hideTranscriptBtn: null == el,
                                                hideFullScreenBtn: eI,
                                                hidePlaybackSpeedBtn: e$,
                                                hideSkipButtons: eB ?? "portrait" === i,
                                                compactTimeDisplay: eF,
                                                size: nE,
                                                downloadUrl: eL,
                                                downloadContentType: ek,
                                                extraButtons: ej,
                                                autoFocus: ez,
                                                keyDownHandlerRef: nZ,
                                                volume: tG,
                                                muted: t_,
                                                transcriptEnabled: tz,
                                                captionEnabled: tX,
                                                handlePlaybackBtnClick: nH,
                                                handleTranscriptBtnClick: function () {
                                                    tV(!tz);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    tY(!tX);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !tW,
                                                        t = (0, S.qf)(t1.current);
                                                    (e && null != t
                                                        ? ((0, S.tl)(t), t.addEventListener(S.Wb, nB), eu?.(!0))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(S.Wb, nB), eu?.(!1), (0, S.sP)(t)),
                                                        tq(e));
                                                },
                                                handleSeekBackBtnClick: nF,
                                                handleSeekForwardBtnClick: n$,
                                                autoHideVolumeSlider: tO,
                                                floatingVolumeSlider: eX,
                                                handleControlBarPendingInteraction: tR,
                                                onVolumeChange: function (e) {
                                                    (tH(e), es?.(e));
                                                },
                                                onMutedChange: function (e) {
                                                    (tU(e), ec?.(e));
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
                                    className: O.MU,
                                    children: eA({
                                        playerState: ti,
                                        isControlBarExpanded: nM,
                                        controlBarAnimationSpring: nQ,
                                        videoRef: t0,
                                        isActive: tF,
                                        isVolumeExpanded: tK,
                                    }),
                                }),
                            !tF &&
                                (0, r.jsx)("div", {
                                    className: O.mF,
                                    ref: tx,
                                    children: (0, r.jsx)(x.PlayIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: O.z_,
                                    }),
                                }),
                            (0, r.jsx)(T.bW, {}),
                            (0, r.jsx)(s.P, {}),
                        ],
                    }),
                }),
            }),
        });
    return (0, r.jsx)(s.Jh, { enabled: tW, children: n1 });
}
