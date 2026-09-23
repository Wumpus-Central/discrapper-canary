(n.r(t), n.d(t, { COMPACT_CONTROL_BAR_MAX_WIDTH_PX: () => O, default: () => G }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(498516),
    s = n(337836),
    o = n(17928),
    c = n(876230),
    d = n(231723),
    m = n(717421),
    f = n(939249),
    h = n(289873),
    p = n(782134),
    v = n(113494),
    x = n(834730),
    g = n(964486),
    E = n(770178),
    b = n(765548),
    S = n(775602),
    C = n(475815),
    y = n(718499),
    w = n(23590),
    A = n(683574),
    N = n(671897),
    P = n(906892),
    R = n(565164),
    T = n(275664),
    M = n(408121),
    L = n(984212),
    j = n(246047),
    D = n(739416),
    k = n(931853),
    I = n(90721),
    B = n(920228),
    F = n(838541),
    _ = n(375708),
    U = n(862649);
let $ = { tension: 250, friction: 5, clamp: !0 },
    K = { visibility: "hidden" },
    O = 400,
    H = {
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
    G = l.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: G = "landscape",
                videoUrlOverride: Q,
                alt: V,
                src: Y,
                poster: z,
                initialActive: Z = !0,
                initialTimeSec: X = 0,
                onProgressUpdate: W,
                onEnded: J,
                onError: q,
                maxSeekableTimeSec: ee,
                captionTrackUrl: et,
                transcriptText: en,
                renderEndScreen: er,
                renderVideo: el = j.v,
                onPlayerStateChange: ea,
                onFullscreenChange: ei,
                onVolumeChange: eu,
                onMutedChange: es,
                initialVolume: eo = 0.3,
                initialMuted: ec = !1,
                getInitialVolume: ed,
                getInitialMuted: em,
                onLoadStart: ef,
                onLoadEnd: eh,
                onFirstFrame: ep,
                onBufferingStart: ev,
                onBufferingEnd: ex,
                onFocusChange: eg,
                onVisibilityChange: eE,
                onSeek: eb,
                renderOverlay: eS,
                renderPersistentOverlay: eC,
                transcriptClassName: ey,
                onHlsInstance: ew,
                onClick: eA,
                preload: eN,
                downloadUrl: eP,
                downloadContentType: eR,
                extraButtons: eT,
                hideFullScreenBtn: eM = !1,
                hideSkipButtons: eL,
                compactTimeDisplay: ej = !1,
                hidePlaybackSpeedBtn: eD = !1,
                autoSizeControlBar: ek = !1,
                getPlaybackBlockedMessage: eI,
                progressClassName: eB,
                pauseOnLostVisibility: eF = !1,
                persistTimeline: e_ = !1,
                persistPlayhead: eU = !0,
                autoFocus: e$ = !1,
                autoHideVolumeSlider: eK = !1,
                timelineIndicatorConfig: eO,
                scrubPreviewVttUrl: eH,
                scrubPreviewImageUrl: eG,
                loadingSpinnerPosition: eQ = "top-left",
                crossOrigin: eV = "anonymous",
                withVideoHalo: eY = !1,
                objectFit: ez = "contain",
                minWidth: eZ = 240,
                minHeight: eX = 180,
                muxContentMetadata: eW,
                awaitMuxReady: eJ = !1,
                playerRef: eq,
            } = e,
            e0 = Q ?? Y,
            e1 = eI ?? k.u,
            { focused: e2, focusedChanged: e6 } = (0, D.A7)(),
            { visible: e4, visibleChanged: e8, targetRef: e3 } = (0, D.O7)(),
            [e9, e7] = l.useState(a ? c.Q6.PLAYING : c.Q6.PAUSED),
            [e5, te] = l.useState(!1),
            [tt, tn] = l.useState(!1),
            [tr, tl] = l.useState(0),
            [ta, ti] = l.useState(null),
            tu = l.useCallback((e) => {
                (ti(null), tl(e));
            }, []),
            ts = l.useRef(null),
            [to, tc] = l.useState(!1),
            td = l.useRef(null),
            [tm, tf] = l.useState(c.h$.LOADING),
            th = l.useRef(!1),
            tp = l.useRef(null),
            [tv, tx] = l.useState([]),
            [tg, tE] = l.useState(!1),
            tb = l.useRef(!1),
            tS = l.useRef(!1),
            tC = l.useRef(!1),
            ty = l.useRef(!1),
            [tw, tA] = l.useState(!0),
            tN = l.useRef(!0),
            tP = l.useRef(null),
            tR = l.useRef(null),
            [tT, tM] = l.useState(a || Z),
            [tL, tj] = l.useState(eo),
            [tD, tk] = l.useState(ec),
            [tI, tB] = l.useState(!eK),
            [tF, t_] = l.useState(!1),
            [tU, t$] = l.useState(!1),
            [tK, tO] = l.useState(!1),
            tH = (0, o.bG)([S.Ay], () => S.Ay.useReducedMotion),
            tG = (0, l.useRef)(null),
            tQ = (0, l.useRef)(null),
            tV = (0, l.useRef)(null),
            tY = (0, l.useRef)(null),
            tz = l.useRef(!0),
            [tZ, tX] = l.useState(null),
            tW = l.useRef(null),
            tJ = (0, R.z5)(tT, tW, eH, eG),
            tq = l.useCallback(() => tG.current?.currentTime ?? null, []),
            t0 = l.useMemo(
                () => ({
                    get current() {
                        return (0, j.c)(tG.current);
                    },
                }),
                [],
            );
        (0, I.A)({ videoRef: t0, canvasRef: tV, enabled: tT && eY && !tH, canvasWidth: 32, canvasHeight: 18 });
        let t1 = l.useCallback(
                (e, t) => {
                    q?.(e, t);
                },
                [q],
            ),
            { isHlsActive: t2, hls: t6 } = (0, y.Ay)(t0, {
                src: e0,
                initialTimeSec: X,
                onError: t1,
                onHlsInstance: ew,
                crossOrigin: eV,
            }),
            { isReady: t4 } = (0, w.A)({ videoRef: t0, hls: t6, contentMetadata: eW, isHls: t2 }),
            t8 = eJ && !t4 && !t2,
            [t3, t9] = l.useState(null),
            [t7, t5] = l.useState(0),
            [ne, nt] = l.useState(!1),
            nn = ee ?? tG.current?.duration ?? 0,
            [nr, nl] = l.useState(!1),
            na = (0, b.A)((e) => {
                let t = e.contentRect.width;
                t <= 0 || nl(t < O);
            });
        (0, E.g)(tQ, na, [], { enabled: ek, fireOnMount: ek });
        let ni = tK ? c.oA.LG : ek && nr ? c.oA.SM : c.oA.MD,
            nu = H[ni];
        (0, g.u5)(() => {
            tz.current && (tz.current = !1);
        });
        let ns = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((ty.current = !0), e7(e), ea?.(e, t), null != tG.current))
                    switch (e) {
                        case c.Q6.PLAYING:
                            (tX(null), tM(!0), tG.current.play());
                            break;
                        case c.Q6.PAUSED:
                            ((tb.current = !1), tG.current.pause(), (tN.current = !1));
                            break;
                        case c.Q6.ENDED:
                            t_(!1);
                    }
            },
            [ea],
        );
        (l.useEffect(() => {
            if (!eF) return;
            let e = null != n && (n === d.ip.HIDDEN || n === d.ip.EXITING || n === d.ip.EXITED),
                t = null != n && e8 && !e4,
                r = e6 && !e2;
            if ((e || t || r) && null != tG.current && e9 === c.Q6.PLAYING) {
                let n = e || t ? c.KB.VISIBILITY : c.KB.FOCUS;
                (tX(n), ns(c.Q6.PAUSED, n));
            }
        }, [eF, n, e2, e6, e4, e8, e9, ns]),
            (0, B.A)({
                videoRef: t0,
                enabled: eF,
                onPipPause: () => {
                    (tX(c.KB.PICTURE_IN_PICTURE), ns(c.Q6.PAUSED, c.KB.PICTURE_IN_PICTURE));
                },
                onHiddenPause: () => {
                    (tX(c.KB.FOCUS), ns(c.Q6.PAUSED, c.KB.FOCUS));
                },
            }),
            l.useEffect(() => {
                e6 && eg?.(e2, e9);
            }, [e2, e6, e9, eg]),
            l.useEffect(() => {
                e8 && eE?.(e4, e9);
            }, [e4, e8, e9, eE]));
        let [no, nc] = l.useState(!1),
            nd = l.useRef(null),
            nm = l.useRef(0);
        l.useLayoutEffect(() => {
            nm.current = performance.now();
        }, []);
        let nf = l.useCallback(() => {
                switch ((null != nd.current && clearTimeout(nd.current), e9)) {
                    case c.Q6.PLAYING:
                        nd.current = setTimeout(
                            () => {
                                nc(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - nm.current)),
                        );
                    case c.Q6.PAUSED:
                    case c.Q6.ENDED:
                }
            }, [e9]),
            nh = l.useCallback(() => {
                (nc(!1), (nm.current = performance.now()), nf());
            }, [nf]);
        (l.useEffect(() => {
            if (e9 !== c.Q6.PLAYING) {
                (nc(!1), null != nd.current && clearTimeout(nd.current));
                return;
            }
            return (
                nf(),
                () => {
                    null != nd.current && clearTimeout(nd.current);
                }
            );
        }, [e9, nf]),
            l.useEffect(
                () => () => {
                    null != td.current && clearTimeout(td.current);
                },
                [],
            ));
        let np = !no && (tt || e5 || e9 === c.Q6.ENDED),
            nv = l.useRef(ei);
        nv.current = ei;
        let nx = l.useCallback(() => {
            let e = (0, C.qf)(tQ.current);
            null == e || (0, C._U)(e) || (e.removeEventListener(C.Wb, nx), tO(!1), nv.current?.(!1));
        }, []);
        function ng() {
            null == tG.current ||
                (nb(Math.max((tp.current ?? tG.current.currentTime) - 10, 0)),
                e9 === c.Q6.ENDED && ns(c.Q6.PAUSED, c.KB.SEEK));
        }
        function nE() {
            if (null == tG.current) return;
            let e = Math.min((tp.current ?? tG.current.currentTime) + 10, nn);
            (nb(e), e9 !== c.Q6.ENDED && e >= tG.current.duration && ns(c.Q6.ENDED, c.KB.SEEK));
        }
        l.useEffect(() => {
            let e = tQ.current;
            return () => {
                let t = (0, C.qf)(e);
                null != t && t.removeEventListener(C.Wb, nx);
            };
        }, [nx]);
        let nb = l.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == tG.current) return;
                let n = tG.current.currentTime;
                ((tp.current = e),
                    ti((e / (tG.current.duration ?? 1)) * 100),
                    tc(!0),
                    null != td.current && clearTimeout(td.current),
                    (td.current = setTimeout(() => {
                        (tc(!1), (td.current = null));
                    }, 100)),
                    (th.current = !0),
                    (tG.current.currentTime = e),
                    t && eb?.(n, e));
            },
            [eb],
        );
        function nS() {
            if (null != tG.current)
                switch (e9) {
                    case c.Q6.ENDED:
                        (nb(0), ns(c.Q6.PLAYING, c.KB.USER));
                        break;
                    case c.Q6.PLAYING:
                        (tX(c.KB.USER), ns(c.Q6.PAUSED, c.KB.USER));
                        break;
                    default:
                        ns(c.Q6.PLAYING, c.KB.USER);
                }
        }
        function nC(e) {
            null != eA ? eA(e) : (tM(!0), nS());
        }
        let ny = l.useCallback(() => {
            if (null == tG.current || 0 === tG.current.textTracks.length) return;
            let e = tG.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, L.C)(n) &&
                        ((n.id = `cue-${t}`),
                        (n.onenter = () => {
                            t9(n);
                        }),
                        (n.onexit = () =>
                            (function (e) {
                                t9((t) => (t?.id === e.id ? null : t));
                            })(n)));
                }
        }, []);
        function nw(e) {
            if (null != tG.current) {
                if (tm === c.h$.BUFFERING) {
                    let e = null != tR.current ? performance.now() - tR.current : null;
                    ex?.(e);
                } else if (tm === c.h$.LOADING) {
                    let e = null != tP.current ? performance.now() - tP.current : null;
                    eh?.(e);
                }
                (tf(c.h$.READY), e9 === c.Q6.PLAYING && (tb.current || ns(c.Q6.PLAYING, c.KB.BUFFERING_RECOVERY)));
            }
        }
        function nA(e) {
            if ((nb(e), e9 === c.Q6.ENDED && !tS.current)) {
                let t = tG.current?.duration;
                (null == t || Number.isNaN(t) || e < t) && ns(c.Q6.PLAYING, c.KB.USER);
            }
        }
        l.useEffect(() => {
            if (null == tY.current) return;
            let e = tY.current;
            return (
                e.addEventListener("load", ny),
                () => {
                    null != e && e.removeEventListener("load", ny);
                }
            );
        }, [ny]);
        let [{ controlBarAnimSpring: nN }, nP] = (0, m.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: $,
                onStart: () => {
                    tA(!1);
                },
                onRest: () => {
                    tA(!0);
                },
            })),
            nR = (0, l.useRef)(null),
            [{ captionHeightSpring: nT }, nM] = (0, m.z)(() => ({ from: { captionHeightSpring: 0 }, config: $ }));
        (l.useEffect(
            () => (
                nM({ captionHeightSpring: tU && null != t3 ? (nR.current?.clientHeight ?? 0) : 0, immediate: tH }),
                () => {
                    nT.stop();
                }
            ),
            [tU, nM, tH, t3, nT],
        ),
            l.useEffect(
                () => (
                    nP({ controlBarAnimSpring: np || tg ? 1 : 0, immediate: tH }),
                    () => {
                        nN.stop();
                    }
                ),
                [np, nP, tH, tg, nN],
            ));
        let nL = e9 === c.Q6.ENDED && null != er,
            nj = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.KB.USER;
                    null != tG.current && (nb(0), ns(c.Q6.PLAYING, e));
                },
                [nb, ns],
            ),
            nD = l.useRef(null),
            nk = l.useCallback(
                (e) => {
                    (nh(), nD.current?.(e.nativeEvent));
                },
                [nh],
            );
        l.useImperativeHandle(
            eq,
            () => ({
                play: () => {
                    ns(c.Q6.PLAYING, c.KB.USER);
                },
                pause: () => {
                    ns(c.Q6.PAUSED, c.KB.USER);
                },
                seek: (e) => {
                    nb(e);
                },
            }),
            [ns, nb],
        );
        let nI = {
                ref: l.useCallback(
                    (e) => {
                        tG.current = e;
                        let n = (0, j.c)(e);
                        ((e3.current = n), "function" == typeof t ? t(n) : null != t && (t.current = n));
                    },
                    [t, e3],
                ),
                alt: V,
                playsInline: !0,
                mediaLayoutType: tK ? F.dG.STATIC : F.dG.RESPONSIVE,
                className: i()({ [U.R]: nL, [U.IR]: !0, [U.FP]: "cover" === ez && !tK }),
                controls: !1,
                poster: z,
                preload: tT ? eN : "none",
                disablePictureInPicture: !0,
                "data-testid": "discord-web-video-player-video",
                onTimeUpdate: function (e) {
                    null != tG.current &&
                        (W?.(tG.current.currentTime, tG.current.duration),
                        th.current || tu((tG.current.currentTime / tG.current.duration) * 100));
                },
                onEnded: function (e) {
                    (tf(c.h$.READY), J?.(), tS.current || ns(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE));
                },
                onLoadedData: function (e) {
                    if (tm === c.h$.LOADING) {
                        let e = null != tP.current ? performance.now() - tP.current : null;
                        (eh?.(e), tf(c.h$.READY));
                    }
                },
                onLoadedMetadata: function (e) {
                    if (null == tG.current) return;
                    X > 0 && !t2 && nb(X, !1);
                    let t = ed?.() ?? tL,
                        n = em?.() ?? tD;
                    (t !== tL && tj(t), n !== tD && tk(n), (tG.current.volume = n ? 0 : t));
                    let r = tG.current.duration;
                    (r > 0 && isFinite(r) && t5(r), nt(!0));
                },
                onLoadStart: function () {
                    ((tP.current = performance.now()), ef?.());
                },
                onPlaying: function () {
                    tN.current && (ep?.(performance.now()), (tN.current = !1));
                },
                onWaiting: function (e) {
                    ((tR.current = performance.now()), ev?.(), tf(c.h$.BUFFERING));
                },
                onProgress: function (e) {
                    if (null == tG.current) return;
                    let t = [];
                    for (let e = 0; e < tG.current.buffered.length; e++) {
                        let n = tG.current.buffered.start(e),
                            r = tG.current.buffered.end(e);
                        r - n < 1 || t.push({ start: n / tG.current.duration, size: (r - n) / tG.current.duration });
                    }
                    tx(t);
                },
                onCanPlay: nw,
                onCanPlayThrough: nw,
                onSeeked: function () {
                    ((th.current = !1),
                        (tp.current = null),
                        null != tG.current && tu((tG.current.currentTime / tG.current.duration) * 100));
                },
                onAbort: function () {
                    return t1(c.SB.ABORT);
                },
                onError: function () {
                    return t1(c.SB.ERROR);
                },
                onEmptied: function () {
                    return t1(c.SB.EMPTIED);
                },
                onStalled: function () {
                    return t1(c.SB.STALLED);
                },
                onClick: nC,
                crossOrigin: eV ?? void 0,
                src: t2 || t8 ? null : (e0 ?? null),
                onSourceError: function () {
                    return t1(c.SB.SOURCE_ERROR);
                },
                isScrubbing: tg,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != et &&
                            (0, r.jsx)("track", {
                                ref: tY,
                                src: et,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != eH && (0, r.jsx)("track", { ref: tW, src: eH, kind: "metadata" }),
                    ],
                }),
            },
            nB = (0, r.jsx)(P.BK, {
                children: (0, r.jsx)(A.pT, {
                    activeLayer: tK ? P.$W : void 0,
                    isFullscreen: tK,
                    videoRef: tG,
                    isActive: tT,
                    isControlBarExpanded: np,
                    children: (0, r.jsx)(f.D, {
                        className: i()(U.W6, { [U.nZ]: !tT }),
                        style: { minWidth: eZ, minHeight: eX },
                        "data-fullscreen": tK,
                        "data-testid": "discord-web-video-player-container",
                        tabIndex: tT ? -1 : 0,
                        focusProps: tT ? void 0 : { ringTarget: ts },
                        onMouseEnter: function () {
                            (te(!0),
                                nc(!1),
                                (nm.current = performance.now()),
                                null != nd.current && clearTimeout(nd.current));
                        },
                        onMouseLeave: function () {
                            (te(!1), nc(!1));
                        },
                        "aria-label": tT ? void 0 : _.intl.string(_.t.RscU7I),
                        onClick: tT ? void 0 : nC,
                        onMouseMove: nh,
                        children: (0, r.jsxs)("div", {
                            ref: tQ,
                            className: i()(U.NS, { [U.DO]: "portrait" === G, [U.r7]: "landscape" === G }),
                            tabIndex: -1,
                            onKeyDown: nk,
                            "data-testid": "discord-web-video-player-frame",
                            style: {
                                "--custom-footer-horizontal-padding": `${nu.footerHorizontalPaddingPx}px`,
                                "--custom-footer-bottom": "4px",
                                "--custom-footer-scrim-height": `${nu.scrimHeightPx}px`,
                                "--custom-controls-gap": `${nu.controlsGapPx}px`,
                                "--custom-controls-end-width":
                                    null != nu.trailingGroupWidthPx ? `${nu.trailingGroupWidthPx}px` : "auto",
                            },
                            children: [
                                eY && !tH && (0, r.jsx)("canvas", { ref: tV, className: U.Xm }),
                                nL && er?.({ replay: nj }),
                                el(nI),
                                tm !== c.h$.READY &&
                                    e9 === c.Q6.PLAYING &&
                                    null != e0 &&
                                    (0, r.jsx)("span", {
                                        className: i()(U.S, { [U.F]: "center" === eQ }),
                                        "data-testid": "discord-web-video-player-loading-spinner",
                                        children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                    }),
                                (0, r.jsx)(k.A, {
                                    message: e1({ hasVideoAsset: null != e0, playerState: e9, pauseReason: tZ }),
                                    showOverlay: null == e0,
                                }),
                                null != eS &&
                                    (0, r.jsx)(u.animated.div, {
                                        className: U.MU,
                                        style: {
                                            opacity: (0, u.to)(
                                                [nN.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e}`,
                                            ),
                                            visibility: (0, u.to)([nN.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                                e < 0.1 ? "hidden" : "visible",
                                            ),
                                            pointerEvents: (0, u.to)([nN.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                                e < 0.3 ? "none" : "auto",
                                            ),
                                        },
                                        children: eS(),
                                    }),
                                tF &&
                                    e9 !== c.Q6.ENDED &&
                                    null != en &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(f.D, {
                                                onClick: () => {
                                                    (e9 === c.Q6.PAUSED && ns(c.Q6.PLAYING, c.KB.USER), t_(!1));
                                                },
                                                tabIndex: -1,
                                                children: (0, r.jsx)("div", { className: U.BG }),
                                            }),
                                            (0, r.jsx)(u.animated.div, {
                                                className: i()(U.xr, ey, { [U.MZ]: "portrait" === G }),
                                                "data-testid": "discord-web-video-player-transcript",
                                                style: {
                                                    marginBottom: (0, u.to)(
                                                        [nN, nT],
                                                        (e, t) => `${e * nu.barHeightPx + t}px`,
                                                    ),
                                                },
                                                children: (0, r.jsx)(M.X, {
                                                    text: en,
                                                    onClose: function () {
                                                        t_(!1);
                                                    },
                                                }),
                                            }),
                                        ],
                                    }),
                                tT &&
                                    (0, r.jsx)(u.animated.div, {
                                        className: U.Jp,
                                        style: {
                                            opacity: (0, u.to)(
                                                [nN.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e}`,
                                            ),
                                        },
                                    }),
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: i()(U.yf, {
                                            [U.ZH]: ty.current && e9 === c.Q6.PLAYING,
                                            [U.v7]: ty.current && e9 === c.Q6.PAUSED,
                                        }),
                                        style: { "--custom-play-pause-pop-ms": "1000ms" },
                                        children:
                                            e9 === c.Q6.PLAYING
                                                ? (0, r.jsx)(p.PlayIcon, { className: U.PK })
                                                : (0, r.jsx)(v.PauseIcon, { className: U.PK }),
                                    },
                                    e9,
                                ),
                                tU &&
                                    null != t3 &&
                                    !nL &&
                                    (0, r.jsx)(u.animated.div, {
                                        className: U.o$,
                                        ref: nR,
                                        "data-testid": "discord-web-video-player-captions",
                                        style: {
                                            translateY: (0, u.to)(
                                                [nN.to({ range: [0, 1], output: [-20, -nu.barHeightPx] })],
                                                (e) => `${e}px`,
                                            ),
                                        },
                                        children: (0, r.jsx)(x.E, {
                                            variant: "text-lg/semibold",
                                            color: "text-overlay-light",
                                            className: U.qh,
                                            children: t3.text,
                                        }),
                                    }),
                                tT &&
                                    (0, r.jsxs)(u.animated.div, {
                                        className: U.r8,
                                        style: {
                                            height: (0, u.to)(
                                                [nN.to({ range: [0, 1], output: [0, nu.barHeightPx] })],
                                                (e) => `${e}px`,
                                            ),
                                        },
                                        children: [
                                            (0, r.jsx)(u.animated.div, {
                                                style: {
                                                    transform: (0, u.to)(
                                                        [nN.to({ range: [1, 0], output: [0, 1] })],
                                                        (e) => `translateY(-${20 * e}px)`,
                                                    ),
                                                },
                                                children: (0, r.jsx)("div", {
                                                    style: np || tg || e_ ? void 0 : K,
                                                    children: (0, r.jsx)(T.Ay, {
                                                        percent: null != ta ? ta : tr,
                                                        animate:
                                                            !0 !== tz.current &&
                                                            !to &&
                                                            e9 === c.Q6.PLAYING &&
                                                            ne &&
                                                            tm === c.h$.READY,
                                                        interactionEnabled: tw && nn > 0,
                                                        backgroundColor: np || e_ ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                        playerState: e9,
                                                        preloadedBuffers: np ? tv : void 0,
                                                        durationSec: t7 > 0 ? t7 : +!ne,
                                                        isFullyVisible: np && tw,
                                                        maxSeekableTime: null != ee && nn > 0 ? nn : void 0,
                                                        progressClassName: eB,
                                                        persistPlayhead: eU,
                                                        onClick: nA,
                                                        onScrubBack: ng,
                                                        onScrubForward: nE,
                                                        onDragStateChange: function (e) {
                                                            if (((tS.current = e), tE(e), e))
                                                                ((tb.current = e9 === c.Q6.PLAYING),
                                                                    (tC.current = e9 === c.Q6.ENDED),
                                                                    tb.current
                                                                        ? tG.current?.pause()
                                                                        : tC.current && ns(c.Q6.PAUSED, c.KB.SEEK));
                                                            else {
                                                                let e = tG.current,
                                                                    t =
                                                                        null != e &&
                                                                        !Number.isNaN(e.duration) &&
                                                                        e.currentTime >= e.duration;
                                                                tb.current
                                                                    ? ((tb.current = !1),
                                                                      t
                                                                          ? ns(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                                                          : e?.play())
                                                                    : tC.current
                                                                      ? ((tC.current = !1),
                                                                        t
                                                                            ? ns(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                                                            : ns(c.Q6.PLAYING, c.KB.USER))
                                                                      : t && ns(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE);
                                                            }
                                                        },
                                                        indicatorConfig: eO,
                                                        scrubPreviewCues: tJ,
                                                        onIndicatorSeek: nA,
                                                        getCurrentTimeSec: tq,
                                                        "data-testid": "discord-web-video-player-timeline",
                                                    }),
                                                }),
                                            }),
                                            (0, r.jsx)(u.animated.div, {
                                                className: U.uN,
                                                "data-testid": "discord-web-video-player-controls",
                                                style: {
                                                    paddingTop: (0, u.to)(
                                                        [nN.to({ range: [0, 1], output: [0, 1] })],
                                                        (e) => `${e * e * 20}px`,
                                                    ),
                                                    paddingBottom: (0, u.to)(
                                                        [nN.to({ range: [0, 1], output: [0, 1] })],
                                                        (e) => `${e * e * 20}px`,
                                                    ),
                                                    pointerEvents: (0, u.to)(
                                                        [nN.to({ range: [0, 1], output: [0, 1] })],
                                                        (e) => (e < 0.3 ? "none" : "auto"),
                                                    ),
                                                },
                                                onFocus: function () {
                                                    return tn(!0);
                                                },
                                                onBlur: function () {
                                                    return tn(!1);
                                                },
                                                children: (0, r.jsx)(N.A, {
                                                    playerState: e9,
                                                    animSpring: nN,
                                                    visible: np,
                                                    seekForwardEnabled:
                                                        null == ee || (tG.current?.currentTime ?? 0) + 1 < nn,
                                                    hideCaptionBtn: null == et,
                                                    hideTranscriptBtn: null == en,
                                                    hideFullScreenBtn: eM,
                                                    hidePlaybackSpeedBtn: eD,
                                                    hideSkipButtons: eL ?? "portrait" === G,
                                                    compactTimeDisplay: ej,
                                                    size: ni,
                                                    downloadUrl: eP,
                                                    downloadContentType: eR,
                                                    extraButtons: eT,
                                                    autoFocus: e$,
                                                    keyDownHandlerRef: nD,
                                                    volume: tL,
                                                    muted: tD,
                                                    transcriptEnabled: tF,
                                                    captionEnabled: tU,
                                                    handlePlaybackBtnClick: nS,
                                                    handleTranscriptBtnClick: function () {
                                                        t_(!tF);
                                                    },
                                                    handleCaptionBtnClick: function () {
                                                        t$(!tU);
                                                    },
                                                    handleFullScreenBtnClick: function () {
                                                        let e = !tK,
                                                            t = (0, C.qf)(tQ.current);
                                                        (e && null != t
                                                            ? ((0, C.tl)(t), t.addEventListener(C.Wb, nx), ei?.(!0))
                                                            : e ||
                                                              null == t ||
                                                              (t.removeEventListener(C.Wb, nx), ei?.(!1), (0, C.sP)(t)),
                                                            tO(e));
                                                    },
                                                    handleSeekBackBtnClick: ng,
                                                    handleSeekForwardBtnClick: nE,
                                                    autoHideVolumeSlider: eK,
                                                    handleControlBarPendingInteraction: tE,
                                                    onVolumeChange: function (e) {
                                                        (tj(e), eu?.(e));
                                                    },
                                                    onMutedChange: function (e) {
                                                        (tk(e), es?.(e));
                                                    },
                                                    onVolumeExpandedChange: function (e) {
                                                        tB(e);
                                                    },
                                                }),
                                            }),
                                        ],
                                    }),
                                null != eC &&
                                    (0, r.jsx)("div", {
                                        className: U.MU,
                                        children: eC({
                                            playerState: e9,
                                            isControlBarExpanded: np,
                                            controlBarAnimationSpring: nN,
                                            videoRef: tG,
                                            isActive: tT,
                                            isVolumeExpanded: tI,
                                        }),
                                    }),
                                !tT &&
                                    (0, r.jsx)("div", {
                                        className: U.mF,
                                        ref: ts,
                                        children: (0, r.jsx)(p.PlayIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: U.z_,
                                        }),
                                    }),
                                (0, r.jsx)(P.bW, {}),
                                (0, r.jsx)(s.P, {}),
                            ],
                        }),
                    }),
                }),
            });
        return (0, r.jsx)(s.Jh, { enabled: tK, children: nB });
    });
