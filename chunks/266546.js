(n.r(t), n.d(t, { COMPACT_CONTROL_BAR_MAX_WIDTH_PX: () => Y, default: () => X }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(399513),
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
            renderOverlay: eP,
            renderPersistentOverlay: ew,
            transcriptClassName: eA,
            onHlsInstance: eR,
            onClick: eN,
            preload: eL,
            downloadUrl: eT,
            fileSizeBytes: ek,
            downloadContentType: eM,
            extraButtons: ej,
            hideFullScreenBtn: eD = !1,
            hideSkipButtons: eI,
            compactTimeDisplay: eB = !1,
            hidePlaybackSpeedBtn: eF = !1,
            autoSizeControlBar: eU = !1,
            getPlaybackBlockedMessage: eG,
            progressClassName: e_,
            pauseOnLostVisibility: eK = !1,
            persistTimeline: e$ = !1,
            persistPlayhead: eO = !0,
            autoFocus: eQ = !1,
            autoHideVolumeSlider: eH = !1,
            floatingVolumeSlider: eY = !1,
            timelineIndicatorConfig: eV,
            scrubPreviewVttUrl: eX,
            scrubPreviewImageUrl: ez,
            loadingSpinnerPosition: eW = "top-left",
            crossOrigin: eZ = "anonymous",
            withVideoHalo: eq = !1,
            objectFit: eJ = "contain",
            minWidth: e0 = 240,
            minHeight: e1 = 180,
            muxContentMetadata: e2,
            awaitMuxReady: e6 = !1,
            playerRef: e4,
            ref: e8,
        } = e,
        e9 = X ?? W,
        e7 = eG ?? I.u,
        { focused: e3, focusedChanged: e5 } = (0, D.A7)(),
        { visible: te, visibleChanged: tt, targetRef: tn } = (0, D.O7)(),
        [tr, tl] = l.useState(n ? d.Q6.PLAYING : d.Q6.PAUSED),
        [ta, ti] = l.useState(!1),
        [tu, to] = l.useState(!1),
        [ts, tc] = l.useState(0),
        [td, tm] = l.useState(null),
        tf = l.useCallback((e) => {
            (tm(null), tc(e));
        }, []),
        tp = l.useRef(null),
        [th, tv] = l.useState(!1),
        tx = l.useRef(null),
        [tE, tg] = l.useState(d.h$.LOADING),
        tb = l.useRef(!1),
        ty = l.useRef(null),
        [tS, tC] = l.useState([]),
        [tP, tw] = l.useState(!1),
        tA = l.useRef(!1),
        tR = l.useRef(!1),
        tN = l.useRef(!1),
        tL = l.useRef(!1),
        [tT, tk] = l.useState(!0),
        tM = l.useRef(!0),
        tj = l.useRef(null),
        tD = l.useRef(null),
        [tI, tB] = l.useState(n || q),
        [tF, tU] = l.useState(em),
        [tG, t_] = l.useState(ef),
        tK = eH || eY,
        [t$, tO] = l.useState(!tK),
        [tQ, tH] = l.useState(!1),
        [tY, tV] = l.useState(!1),
        [tX, tz] = l.useState(!1),
        tW = (0, c.bG)([S.Ay], () => S.Ay.useReducedMotion),
        tZ = (0, c.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        tq = (0, l.useRef)(null),
        tJ = (0, l.useRef)(null),
        t0 = (0, l.useRef)(null),
        t1 = (0, l.useRef)(null),
        t2 = l.useRef(!0),
        [t6, t4] = l.useState(null),
        t8 = l.useRef(null),
        t9 = (0, L.z5)(tI, t8, eX, ez),
        t7 = l.useCallback(() => tq.current?.currentTime ?? null, []),
        t3 = l.useMemo(
            () => ({
                get current() {
                    return (0, j.c)(tq.current);
                },
            }),
            [],
        );
    (0, B.A)({ videoRef: t3, canvasRef: t0, enabled: tI && eq && !tW, canvasWidth: 32, canvasHeight: 18 });
    let {
            showStats: t5,
            videoStats: ne,
            onCloseStats: nt,
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
        })({ videoRef: tq, src: e9, fileSizeBytes: ek }),
        nn = l.useCallback(
            (e, t) => {
                en?.(e, t);
            },
            [en],
        ),
        { isHlsActive: nr, hls: nl } = (0, P.Ay)(t3, {
            src: e9,
            initialTimeSec: J,
            onError: nn,
            onHlsInstance: eR,
            crossOrigin: eZ,
        }),
        { isReady: na } = (0, w.A)({ videoRef: t3, hls: nl, contentMetadata: e2, isHls: nr }),
        ni = e6 && !na && !nr,
        [nu, no] = l.useState(null),
        [ns, nc] = l.useState(0),
        [nd, nm] = l.useState(!1),
        nf = er ?? tq.current?.duration ?? 0,
        [np, nh] = l.useState(!1),
        nv = (0, y.A)((e) => {
            let t = e.contentRect.width;
            t <= 0 || nh(t < Y);
        });
    (0, b.g)(tJ, nv, [], { enabled: eU, fireOnMount: eU });
    let nx = tX ? d.oA.LG : eU && np ? d.oA.SM : d.oA.MD,
        nE = V[nx];
    (0, g.u5)(() => {
        t2.current && (t2.current = !1);
    });
    let ng = l.useCallback(
        function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (((tL.current = !0), tl(e), eo?.(e, t), null != tq.current))
                switch (e) {
                    case d.Q6.PLAYING:
                        (t4(null), tB(!0), tq.current.play());
                        break;
                    case d.Q6.PAUSED:
                        ((tA.current = !1), tq.current.pause(), (tM.current = !1));
                        break;
                    case d.Q6.ENDED:
                        tH(!1);
                }
        },
        [eo],
    );
    (l.useEffect(() => {
        if (!eK) return;
        let e = null != t && (t === m.ip.HIDDEN || t === m.ip.EXITING || t === m.ip.EXITED),
            n = null != t && tt && !te,
            r = e5 && !e3;
        if ((e || n || r) && null != tq.current && tr === d.Q6.PLAYING) {
            let t = e || n ? d.KB.VISIBILITY : d.KB.FOCUS;
            (t4(t), ng(d.Q6.PAUSED, t));
        }
    }, [eK, t, e3, e5, te, tt, tr, ng]),
        (0, F.A)({
            videoRef: t3,
            enabled: eK,
            onPipPause: () => {
                (t4(d.KB.PICTURE_IN_PICTURE), ng(d.Q6.PAUSED, d.KB.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (t4(d.KB.FOCUS), ng(d.Q6.PAUSED, d.KB.FOCUS));
            },
        }),
        l.useEffect(() => {
            e5 && ey?.(e3, tr);
        }, [e3, e5, tr, ey]),
        l.useEffect(() => {
            tt && eS?.(te, tr);
        }, [te, tt, tr, eS]));
    let [nb, ny] = l.useState(!1),
        nS = l.useRef(null),
        nC = l.useRef(0);
    l.useLayoutEffect(() => {
        nC.current = performance.now();
    }, []);
    let nP = l.useCallback(() => {
            switch ((null != nS.current && clearTimeout(nS.current), tr)) {
                case d.Q6.PLAYING:
                    nS.current = setTimeout(
                        () => {
                            ny(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - nC.current)),
                    );
                case d.Q6.PAUSED:
                case d.Q6.ENDED:
            }
        }, [tr]),
        nw = l.useCallback(() => {
            (ny(!1), (nC.current = performance.now()), nP());
        }, [nP]);
    (l.useEffect(() => {
        if (tr !== d.Q6.PLAYING) {
            (ny(!1), null != nS.current && clearTimeout(nS.current));
            return;
        }
        return (
            nP(),
            () => {
                null != nS.current && clearTimeout(nS.current);
            }
        );
    }, [tr, nP]),
        l.useEffect(
            () => () => {
                null != tx.current && clearTimeout(tx.current);
            },
            [],
        ));
    let nA = tu && tZ,
        nR = tr === d.Q6.ENDED,
        nN = nA || ((tu || ta || nR) && !nb),
        nL = l.useRef(!1);
    l.useEffect(() => {
        (nL.current && !nA && nw(), (nL.current = nA));
    }, [nA, nw]);
    let nT = l.useRef(es);
    nT.current = es;
    let nk = l.useCallback(() => {
        let e = (0, C.qf)(tJ.current);
        null == e || (0, C._U)(e) || (e.removeEventListener(C.Wb, nk), tz(!1), nT.current?.(!1));
    }, []);
    function nM() {
        null == tq.current ||
            (nD(Math.max((ty.current ?? tq.current.currentTime) - 10, 0)),
            tr === d.Q6.ENDED && ng(d.Q6.PAUSED, d.KB.SEEK));
    }
    function nj() {
        if (null == tq.current) return;
        let e = Math.min((ty.current ?? tq.current.currentTime) + 10, nf);
        (nD(e), tr !== d.Q6.ENDED && e >= tq.current.duration && ng(d.Q6.ENDED, d.KB.SEEK));
    }
    l.useEffect(() => {
        let e = tJ.current;
        return () => {
            let t = (0, C.qf)(e);
            null != t && t.removeEventListener(C.Wb, nk);
        };
    }, [nk]);
    let nD = l.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == tq.current) return;
            let n = tq.current.currentTime;
            ((ty.current = e),
                tm((e / (tq.current.duration ?? 1)) * 100),
                tv(!0),
                null != tx.current && clearTimeout(tx.current),
                (tx.current = setTimeout(() => {
                    (tv(!1), (tx.current = null));
                }, 100)),
                (tb.current = !0),
                (tq.current.currentTime = e),
                t && eC?.(n, e));
        },
        [eC],
    );
    function nI() {
        if (null != tq.current)
            switch (tr) {
                case d.Q6.ENDED:
                    (nD(0), ng(d.Q6.PLAYING, d.KB.USER));
                    break;
                case d.Q6.PLAYING:
                    (t4(d.KB.USER), ng(d.Q6.PAUSED, d.KB.USER));
                    break;
                default:
                    ng(d.Q6.PLAYING, d.KB.USER);
            }
    }
    function nB(e) {
        null != eN ? eN(e) : (tB(!0), nI());
    }
    let nF = l.useCallback(() => {
        if (null == tq.current || 0 === tq.current.textTracks.length) return;
        let e = tq.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, M.C)(n) &&
                    ((n.id = `cue-${t}`),
                    (n.onenter = () => {
                        no(n);
                    }),
                    (n.onexit = () =>
                        (function (e) {
                            no((t) => (t?.id === e.id ? null : t));
                        })(n)));
            }
    }, []);
    function nU(e) {
        if (null != tq.current) {
            if (tE === d.h$.BUFFERING) {
                let e = null != tD.current ? performance.now() - tD.current : null;
                eb?.(e);
            } else if (tE === d.h$.LOADING) {
                let e = null != tj.current ? performance.now() - tj.current : null;
                ex?.(e);
            }
            (tg(d.h$.READY), tr === d.Q6.PLAYING && (tA.current || ng(d.Q6.PLAYING, d.KB.BUFFERING_RECOVERY)));
        }
    }
    function nG(e) {
        if ((nD(e), tr === d.Q6.ENDED && !tR.current)) {
            let t = tq.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && ng(d.Q6.PLAYING, d.KB.USER);
        }
    }
    l.useEffect(() => {
        if (null == t1.current) return;
        let e = t1.current;
        return (
            e.addEventListener("load", nF),
            () => {
                null != e && e.removeEventListener("load", nF);
            }
        );
    }, [nF]);
    let [{ controlBarAnimSpring: n_ }, nK] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: Q,
            onStart: () => {
                tk(!1);
            },
            onRest: () => {
                tk(!0);
            },
        })),
        n$ = (0, l.useRef)(null),
        [{ captionHeightSpring: nO }, nQ] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: Q }));
    (l.useEffect(
        () => (
            nQ({ captionHeightSpring: tY && null != nu ? (n$.current?.clientHeight ?? 0) : 0, immediate: tW }),
            () => {
                nO.stop();
            }
        ),
        [tY, nQ, tW, nu, nO],
    ),
        l.useEffect(
            () => (
                nK({ controlBarAnimSpring: nN || tP ? 1 : 0, immediate: tW }),
                () => {
                    n_.stop();
                }
            ),
            [nN, nK, tW, tP, n_],
        ));
    let nH = tr === d.Q6.ENDED && null != ei,
        nY = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KB.USER;
                null != tq.current && (nD(0), ng(d.Q6.PLAYING, e));
            },
            [nD, ng],
        ),
        nV = l.useRef(null),
        nX = l.useCallback(
            (e) => {
                (nw(), nV.current?.(e.nativeEvent));
            },
            [nw],
        );
    l.useImperativeHandle(
        e4,
        () => ({
            play: () => {
                ng(d.Q6.PLAYING, d.KB.USER);
            },
            pause: () => {
                ng(d.Q6.PAUSED, d.KB.USER);
            },
            seek: (e) => {
                nD(e);
            },
        }),
        [ng, nD],
    );
    let nz = {
            ref: l.useCallback(
                (e) => {
                    tq.current = e;
                    let t = (0, j.c)(e);
                    ((tn.current = t), "function" == typeof e8 ? e8(t) : null != e8 && (e8.current = t));
                },
                [e8, tn],
            ),
            alt: z,
            playsInline: !0,
            mediaLayoutType: tX ? _.dG.STATIC : _.dG.RESPONSIVE,
            className: i()({ [$.R]: nH, [$.IR]: !0, [$.FP]: "cover" === eJ && !tX }),
            controls: !1,
            poster: Z,
            preload: tI ? eL : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != tq.current &&
                    (ee?.(tq.current.currentTime, tq.current.duration),
                    tb.current || tf((tq.current.currentTime / tq.current.duration) * 100));
            },
            onEnded: function (e) {
                (tg(d.h$.READY), et?.(), tR.current || ng(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (tE === d.h$.LOADING) {
                    let e = null != tj.current ? performance.now() - tj.current : null;
                    (ex?.(e), tg(d.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == tq.current) return;
                J > 0 && !nr && nD(J, !1);
                let t = ep?.() ?? tF,
                    n = eh?.() ?? tG;
                (t !== tF && tU(t), n !== tG && t_(n), (tq.current.volume = n ? 0 : t));
                let r = tq.current.duration;
                (r > 0 && isFinite(r) && nc(r), nm(!0));
            },
            onLoadStart: function () {
                ((tj.current = performance.now()), ev?.());
            },
            onPlaying: function () {
                tM.current && (eE?.(performance.now()), (tM.current = !1));
            },
            onWaiting: function (e) {
                ((tD.current = performance.now()), eg?.(), tg(d.h$.BUFFERING));
            },
            onProgress: function (e) {
                if (null == tq.current) return;
                let t = [];
                for (let e = 0; e < tq.current.buffered.length; e++) {
                    let n = tq.current.buffered.start(e),
                        r = tq.current.buffered.end(e);
                    r - n < 1 || t.push({ start: n / tq.current.duration, size: (r - n) / tq.current.duration });
                }
                tC(t);
            },
            onCanPlay: nU,
            onCanPlayThrough: nU,
            onSeeked: function () {
                ((tb.current = !1),
                    (ty.current = null),
                    null != tq.current && tf((tq.current.currentTime / tq.current.duration) * 100));
            },
            onAbort: function () {
                return nn(d.SB.ABORT);
            },
            onError: function () {
                return nn(d.SB.ERROR);
            },
            onEmptied: function () {
                return nn(d.SB.EMPTIED);
            },
            onStalled: function () {
                return nn(d.SB.STALLED);
            },
            onClick: nB,
            crossOrigin: eZ ?? void 0,
            src: nr || ni ? null : (e9 ?? null),
            onSourceError: function () {
                return nn(d.SB.SOURCE_ERROR);
            },
            isScrubbing: tP,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    null != el &&
                        (0, r.jsx)("track", {
                            ref: t1,
                            src: el,
                            label: "English",
                            kind: "captions",
                            srcLang: "en",
                            default: !0,
                        }),
                    null != eX && (0, r.jsx)("track", { ref: t8, src: eX, kind: "metadata" }),
                ],
            }),
        },
        nW = (0, r.jsx)(N.BK, {
            children: (0, r.jsx)(A.pT, {
                activeLayer: tX ? N.$W : void 0,
                isFullscreen: tX,
                videoRef: tq,
                isActive: tI,
                isControlBarExpanded: nN,
                children: (0, r.jsx)(p.D, {
                    className: i()($.W6, { [$.nZ]: !tI }),
                    style: { minWidth: e0, minHeight: e1 },
                    "data-fullscreen": tX,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tI ? -1 : 0,
                    focusProps: tI ? void 0 : { ringTarget: tp },
                    onMouseEnter: function () {
                        (ti(!0),
                            ny(!1),
                            (nC.current = performance.now()),
                            null != nS.current && clearTimeout(nS.current));
                    },
                    onMouseLeave: function () {
                        (ti(!1), ny(!1));
                    },
                    "aria-label": tI ? void 0 : K.intl.string(K.t.RscU7I),
                    onClick: tI ? void 0 : nB,
                    onMouseMove: nw,
                    children: (0, r.jsxs)("div", {
                        ref: tJ,
                        className: i()($.NS, { [$.DO]: "portrait" === a, [$.r7]: "landscape" === a }),
                        tabIndex: -1,
                        onKeyDown: nX,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${nE.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": "4px",
                            "--custom-footer-scrim-height": `${nE.scrimHeightPx}px`,
                            "--custom-controls-gap": `${nE.controlsGapPx}px`,
                            "--custom-controls-end-width":
                                null != nE.trailingGroupWidthPx ? `${nE.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tI && eq && !tW && (0, r.jsx)("canvas", { ref: t0, className: $.Xm }),
                            nH && ei?.({ replay: nY }),
                            eu(nz),
                            tE !== d.h$.READY &&
                                tr === d.Q6.PLAYING &&
                                null != e9 &&
                                (0, r.jsx)("span", {
                                    className: i()($.S, { [$.F]: "center" === eW }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(I.A, {
                                message: e7({ hasVideoAsset: null != e9, playerState: tr, pauseReason: t6 }),
                                showOverlay: null == e9,
                            }),
                            t5 &&
                                null != ne &&
                                (0, r.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, r.jsx)(O, { stats: ne, onClose: nt }),
                                }),
                            null != eP &&
                                (0, r.jsx)(u.animated.div, {
                                    className: $.MU,
                                    style: {
                                        opacity: (0, u.to)([n_.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, u.to)([n_.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, u.to)([n_.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: eP(),
                                }),
                            tQ &&
                                tr !== d.Q6.ENDED &&
                                null != ea &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (tr === d.Q6.PAUSED && ng(d.Q6.PLAYING, d.KB.USER), tH(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: $.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: i()($.xr, eA, { [$.MZ]: "portrait" === a }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)(
                                                    [n_, nO],
                                                    (e, t) => `${e * nE.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(k.X, {
                                                text: ea,
                                                onClose: function () {
                                                    tH(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tI &&
                                (0, r.jsx)(u.animated.div, {
                                    className: $.Jp,
                                    style: {
                                        opacity: (0, u.to)([n_.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: i()($.yf, {
                                        [$.ZH]: tL.current && tr === d.Q6.PLAYING,
                                        [$.v7]: tL.current && tr === d.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        tr === d.Q6.PLAYING
                                            ? (0, r.jsx)(v.PlayIcon, { className: $.PK })
                                            : (0, r.jsx)(x.PauseIcon, { className: $.PK }),
                                },
                                tr,
                            ),
                            tY &&
                                null != nu &&
                                !nH &&
                                (0, r.jsx)(u.animated.div, {
                                    className: $.o$,
                                    ref: n$,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [n_.to({ range: [0, 1], output: [-20, -nE.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(E.E, {
                                        variant: "text-lg/semibold",
                                        color: "text-overlay-light",
                                        className: $.qh,
                                        children: nu.text,
                                    }),
                                }),
                            tI &&
                                (0, r.jsxs)(u.animated.div, {
                                    className: $.r8,
                                    style: {
                                        height: (0, u.to)(
                                            [n_.to({ range: [0, 1], output: [0, nE.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    onFocus: function () {
                                        to(!0);
                                    },
                                    onBlur: function (e) {
                                        ((0, o.vq)(e.relatedTarget, Node) &&
                                            e.currentTarget.contains(e.relatedTarget)) ||
                                            to(!1);
                                    },
                                    children: [
                                        (0, r.jsx)(u.animated.div, {
                                            style: {
                                                transform: (0, u.to)(
                                                    [n_.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${20 * e}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)("div", {
                                                style: nN || tP || e$ ? void 0 : H,
                                                children: (0, r.jsx)(T.Ay, {
                                                    percent: null != td ? td : ts,
                                                    animate:
                                                        !0 !== t2.current &&
                                                        !th &&
                                                        tr === d.Q6.PLAYING &&
                                                        nd &&
                                                        tE === d.h$.READY,
                                                    interactionEnabled: tT && nf > 0,
                                                    backgroundColor: nN || e$ ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                    playerState: tr,
                                                    preloadedBuffers: nN ? tS : void 0,
                                                    durationSec: ns > 0 ? ns : +!nd,
                                                    isFullyVisible: nN && tT,
                                                    maxSeekableTime: null != er && nf > 0 ? nf : void 0,
                                                    progressClassName: e_,
                                                    persistPlayhead: eO,
                                                    onClick: nG,
                                                    onScrubBack: nM,
                                                    onScrubForward: nj,
                                                    onDragStateChange: function (e) {
                                                        if (((tR.current = e), tw(e), e))
                                                            ((tA.current = tr === d.Q6.PLAYING),
                                                                (tN.current = tr === d.Q6.ENDED),
                                                                tA.current
                                                                    ? tq.current?.pause()
                                                                    : tN.current && ng(d.Q6.PAUSED, d.KB.SEEK));
                                                        else {
                                                            let e = tq.current,
                                                                t =
                                                                    null != e &&
                                                                    !Number.isNaN(e.duration) &&
                                                                    e.currentTime >= e.duration;
                                                            tA.current
                                                                ? ((tA.current = !1),
                                                                  t
                                                                      ? ng(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                      : e?.play())
                                                                : tN.current
                                                                  ? ((tN.current = !1),
                                                                    t
                                                                        ? ng(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                        : ng(d.Q6.PLAYING, d.KB.USER))
                                                                  : t && ng(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                                                        }
                                                    },
                                                    indicatorConfig: eV,
                                                    scrubPreviewCues: t9,
                                                    onIndicatorSeek: nG,
                                                    getCurrentTimeSec: t7,
                                                    "data-testid": "discord-web-video-player-timeline",
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: $.uN,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, u.to)(
                                                    [n_.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 20}px`,
                                                ),
                                                paddingBottom: (0, u.to)(
                                                    [n_.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 20}px`,
                                                ),
                                                pointerEvents: (0, u.to)(
                                                    [n_.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            children: (0, r.jsx)(R.A, {
                                                playerState: tr,
                                                animSpring: n_,
                                                visible: nN,
                                                seekForwardEnabled:
                                                    null == er || (tq.current?.currentTime ?? 0) + 1 < nf,
                                                hideCaptionBtn: null == el,
                                                hideTranscriptBtn: null == ea,
                                                hideFullScreenBtn: eD,
                                                hidePlaybackSpeedBtn: eF,
                                                hideSkipButtons: eI ?? "portrait" === a,
                                                compactTimeDisplay: eB,
                                                size: nx,
                                                downloadUrl: eT,
                                                downloadContentType: eM,
                                                extraButtons: ej,
                                                autoFocus: eQ,
                                                keyDownHandlerRef: nV,
                                                volume: tF,
                                                muted: tG,
                                                transcriptEnabled: tQ,
                                                captionEnabled: tY,
                                                handlePlaybackBtnClick: nI,
                                                handleTranscriptBtnClick: function () {
                                                    tH(!tQ);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    tV(!tY);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !tX,
                                                        t = (0, C.qf)(tJ.current);
                                                    (e && null != t
                                                        ? ((0, C.tl)(t), t.addEventListener(C.Wb, nk), es?.(!0))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(C.Wb, nk), es?.(!1), (0, C.sP)(t)),
                                                        tz(e));
                                                },
                                                handleSeekBackBtnClick: nM,
                                                handleSeekForwardBtnClick: nj,
                                                autoHideVolumeSlider: tK,
                                                floatingVolumeSlider: eY,
                                                handleControlBarPendingInteraction: tw,
                                                onVolumeChange: function (e) {
                                                    (tU(e), ec?.(e));
                                                },
                                                onMutedChange: function (e) {
                                                    (t_(e), ed?.(e));
                                                },
                                                onVolumeExpandedChange: function (e) {
                                                    tO(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            null != ew &&
                                (0, r.jsx)("div", {
                                    className: $.MU,
                                    children: ew({
                                        playerState: tr,
                                        isControlBarExpanded: nN,
                                        controlBarAnimationSpring: n_,
                                        videoRef: tq,
                                        isActive: tI,
                                        isVolumeExpanded: t$,
                                    }),
                                }),
                            !tI &&
                                (0, r.jsx)("div", {
                                    className: $.mF,
                                    ref: tp,
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
    return (0, r.jsx)(s.Jh, { enabled: tX, children: nW });
}
