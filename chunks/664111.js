n.r(t), n.d(t, { COMPACT_CONTROL_BAR_MAX_WIDTH_PX: () => $, default: () => G }), n(321073);
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(74445),
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
    C = n(607470),
    y = n(475815),
    w = n(718499),
    A = n(23590),
    N = n(683574),
    P = n(671897),
    R = n(906892),
    T = n(565164),
    M = n(275664),
    L = n(408121),
    j = n(984212),
    D = n(739416),
    k = n(931853),
    I = n(90721),
    B = n(920228),
    F = n(838541),
    _ = n(375708),
    U = n(862649);
let K = { tension: 250, friction: 5, clamp: !0 },
    O = { visibility: "hidden" },
    $ = 400,
    H = {
        [c.oA.SM]: {
            barHeightPx: 40,
            footerHorizontalPaddingPx: 12,
            scrimHeightPx: 72,
            controlsGapPx: 12,
            trailingGroupWidthPx: null,
        },
        [c.oA.MD]: {
            barHeightPx: 56,
            footerHorizontalPaddingPx: 20,
            scrimHeightPx: 113,
            controlsGapPx: 16,
            trailingGroupWidthPx: 200,
        },
        [c.oA.LG]: {
            barHeightPx: 64,
            footerHorizontalPaddingPx: 20,
            scrimHeightPx: 113,
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
                onPlayerStateChange: el,
                onFullscreenChange: ea,
                onVolumeChange: ei,
                onMutedChange: eu,
                initialVolume: es = 0.3,
                initialMuted: eo = !1,
                getInitialVolume: ec,
                getInitialMuted: ed,
                onLoadStart: em,
                onLoadEnd: ef,
                onFirstFrame: eh,
                onBufferingStart: ep,
                onBufferingEnd: ev,
                onFocusChange: ex,
                onVisibilityChange: eg,
                onSeek: eE,
                renderOverlay: eb,
                renderPersistentOverlay: eS,
                transcriptClassName: eC,
                onHlsInstance: ey,
                onClick: ew,
                preload: eA,
                downloadUrl: eN,
                downloadContentType: eP,
                extraButtons: eR,
                hideFullScreenBtn: eT = !1,
                hideSkipButtons: eM,
                compactTimeDisplay: eL = !1,
                hidePlaybackSpeedBtn: ej = !1,
                autoSizeControlBar: eD = !1,
                getPlaybackBlockedMessage: ek,
                progressClassName: eI,
                pauseOnLostVisibility: eB = !1,
                persistTimeline: eF = !1,
                persistPlayhead: e_ = !0,
                autoFocus: eU = !1,
                autoHideVolumeSlider: eK = !1,
                timelineIndicatorConfig: eO,
                scrubPreviewVttUrl: e$,
                scrubPreviewImageUrl: eH,
                loadingSpinnerPosition: eG = "top-left",
                crossOrigin: eQ = "anonymous",
                withVideoHalo: eV = !1,
                objectFit: eY = "contain",
                minWidth: ez = 240,
                minHeight: eZ = 180,
                muxContentMetadata: eX,
                awaitMuxReady: eW = !1,
                playerRef: eJ,
            } = e,
            eq = Q ?? Y,
            e0 = ek ?? k.u,
            { focused: e1, focusedChanged: e2 } = (0, D.A7)(),
            { visible: e6, visibleChanged: e4, targetRef: e8 } = (0, D.O7)(),
            [e3, e9] = l.useState(a ? c.Q6.PLAYING : c.Q6.PAUSED),
            [e7, e5] = l.useState(!1),
            [te, tt] = l.useState(!1),
            [tn, tr] = l.useState(0),
            [tl, ta] = l.useState(null),
            ti = l.useCallback((e) => {
                ta(null), tr(e);
            }, []),
            tu = l.useRef(null),
            [ts, to] = l.useState(!1),
            tc = l.useRef(null),
            [td, tm] = l.useState(c.h$.LOADING),
            tf = l.useRef(!1),
            th = l.useRef(null),
            [tp, tv] = l.useState([]),
            [tx, tg] = l.useState(!1),
            tE = l.useRef(!1),
            tb = l.useRef(!1),
            tS = l.useRef(!1),
            tC = l.useRef(!1),
            [ty, tw] = l.useState(!0),
            tA = l.useRef(!0),
            tN = l.useRef(null),
            tP = l.useRef(null),
            [tR, tT] = l.useState(a || Z),
            [tM, tL] = l.useState(es),
            [tj, tD] = l.useState(eo),
            [tk, tI] = l.useState(!eK),
            [tB, tF] = l.useState(!1),
            [t_, tU] = l.useState(!1),
            [tK, tO] = l.useState(!1),
            t$ = (0, o.bG)([S.Ay], () => S.Ay.useReducedMotion),
            tH = (0, l.useRef)(null),
            tG = (0, l.useRef)(null),
            tQ = (0, l.useRef)(null),
            tV = (0, l.useRef)(null),
            tY = l.useRef(!0),
            [tz, tZ] = l.useState(null),
            tX = l.useRef(null),
            tW = (0, T.z5)(tR, tX, e$, eH),
            tJ = l.useCallback(() => tH.current?.currentTime ?? null, []);
        (0, I.A)({ videoRef: tH, canvasRef: tQ, enabled: tR && eV && !t$, canvasWidth: 32, canvasHeight: 18 });
        let tq = l.useCallback(
                (e, t) => {
                    q?.(e, t);
                },
                [q],
            ),
            { isHlsActive: t0, hls: t1 } = (0, w.Ay)(tH, {
                src: eq,
                initialTimeSec: X,
                onError: tq,
                onHlsInstance: ey,
                crossOrigin: eQ,
            }),
            { isReady: t2 } = (0, A.A)({ videoRef: tH, hls: t1, contentMetadata: eX, isHls: t0 }),
            t6 = eW && !t2 && !t0,
            [t4, t8] = l.useState(null),
            [t3, t9] = l.useState(0),
            [t7, t5] = l.useState(!1),
            ne = ee ?? tH.current?.duration ?? 0,
            [nt, nn] = l.useState(!1),
            nr = (0, b.A)((e) => {
                let t = e.contentRect.width;
                t <= 0 || nn(t < $);
            });
        (0, E.g)(tG, nr, [], { enabled: eD, fireOnMount: eD });
        let nl = tK ? c.oA.LG : eD && nt ? c.oA.SM : c.oA.MD,
            na = H[nl];
        (0, g.u5)(() => {
            tY.current && (tY.current = !1);
        });
        let ni = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tC.current = !0), e9(e), el?.(e, t), null != tH.current))
                    switch (e) {
                        case c.Q6.PLAYING:
                            tZ(null), tT(!0), tH.current.play();
                            break;
                        case c.Q6.PAUSED:
                            (tE.current = !1), tH.current.pause(), (tA.current = !1);
                            break;
                        case c.Q6.ENDED:
                            tF(!1);
                    }
            },
            [el],
        );
        l.useEffect(() => {
            if (!eB) return;
            let e = null != n && (n === d.ip.HIDDEN || n === d.ip.EXITING || n === d.ip.EXITED),
                t = null != n && e4 && !e6,
                r = e2 && !e1;
            if ((e || t || r) && null != tH.current && e3 === c.Q6.PLAYING) {
                let n = e || t ? c.KB.VISIBILITY : c.KB.FOCUS;
                tZ(n), ni(c.Q6.PAUSED, n);
            }
        }, [eB, n, e1, e2, e6, e4, e3, ni]),
            (0, B.A)({
                videoRef: tH,
                enabled: eB,
                onPipPause: () => {
                    tZ(c.KB.PICTURE_IN_PICTURE), ni(c.Q6.PAUSED, c.KB.PICTURE_IN_PICTURE);
                },
                onHiddenPause: () => {
                    tZ(c.KB.FOCUS), ni(c.Q6.PAUSED, c.KB.FOCUS);
                },
            }),
            l.useEffect(() => {
                e2 && ex?.(e1, e3);
            }, [e1, e2, e3, ex]),
            l.useEffect(() => {
                e4 && eg?.(e6, e3);
            }, [e6, e4, e3, eg]);
        let [nu, ns] = l.useState(!1),
            no = l.useRef(null),
            nc = l.useRef(0);
        l.useLayoutEffect(() => {
            nc.current = performance.now();
        }, []);
        let nd = l.useCallback(() => {
                switch ((null != no.current && clearTimeout(no.current), e3)) {
                    case c.Q6.PLAYING:
                        no.current = setTimeout(
                            () => {
                                ns(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - nc.current)),
                        );
                    case c.Q6.PAUSED:
                    case c.Q6.ENDED:
                }
            }, [e3]),
            nm = l.useCallback(() => {
                ns(!1), (nc.current = performance.now()), nd();
            }, [nd]);
        l.useEffect(() => {
            if (e3 !== c.Q6.PLAYING) {
                ns(!1), null != no.current && clearTimeout(no.current);
                return;
            }
            return (
                nd(),
                () => {
                    null != no.current && clearTimeout(no.current);
                }
            );
        }, [e3, nd]),
            l.useEffect(
                () => () => {
                    null != tc.current && clearTimeout(tc.current);
                },
                [],
            );
        let nf = !nu && (te || e7 || e3 === c.Q6.ENDED),
            nh = l.useRef(ea);
        nh.current = ea;
        let np = l.useCallback(() => {
            let e = (0, y.qf)(tH.current?.parentNode, tH.current);
            null == e || (0, y._U)(e) || (e.removeEventListener(y.Wb, np), tO(!1), nh.current?.(!1));
        }, []);
        function nv() {
            null == tH.current ||
                (ng(Math.max((th.current ?? tH.current.currentTime) - 10, 0)),
                e3 === c.Q6.ENDED && ni(c.Q6.PAUSED, c.KB.SEEK));
        }
        function nx() {
            if (null == tH.current) return;
            let e = Math.min((th.current ?? tH.current.currentTime) + 10, ne);
            ng(e), e3 !== c.Q6.ENDED && e >= tH.current.duration && ni(c.Q6.ENDED, c.KB.SEEK);
        }
        l.useEffect(() => {
            let e = tH.current;
            return () => {
                let t = (0, y.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(y.Wb, np);
            };
        }, [np]);
        let ng = l.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == tH.current) return;
                let n = tH.current.currentTime;
                (th.current = e),
                    ta((e / (tH.current.duration ?? 1)) * 100),
                    to(!0),
                    null != tc.current && clearTimeout(tc.current),
                    (tc.current = setTimeout(() => {
                        to(!1), (tc.current = null);
                    }, 100)),
                    (tf.current = !0),
                    (tH.current.currentTime = e),
                    t && eE?.(n, e);
            },
            [eE],
        );
        function nE() {
            if (null != tH.current)
                switch (e3) {
                    case c.Q6.ENDED:
                        ng(0), ni(c.Q6.PLAYING, c.KB.USER);
                        break;
                    case c.Q6.PLAYING:
                        tZ(c.KB.USER), ni(c.Q6.PAUSED, c.KB.USER);
                        break;
                    default:
                        ni(c.Q6.PLAYING, c.KB.USER);
                }
        }
        function nb(e) {
            null != ew ? ew(e) : (tT(!0), nE());
        }
        let nS = l.useCallback(() => {
            if (null == tH.current || 0 === tH.current.textTracks.length) return;
            let e = tH.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, j.C)(n) &&
                        ((n.id = `cue-${t}`),
                        (n.onenter = () => {
                            t8(n);
                        }),
                        (n.onexit = () =>
                            (function (e) {
                                t8((t) => (t?.id === e.id ? null : t));
                            })(n)));
                }
        }, []);
        function nC(e) {
            if (null != tH.current) {
                if (td === c.h$.BUFFERING) {
                    let e = null != tP.current ? performance.now() - tP.current : null;
                    ev?.(e);
                } else if (td === c.h$.LOADING) {
                    let e = null != tN.current ? performance.now() - tN.current : null;
                    ef?.(e);
                }
                tm(c.h$.READY), e3 === c.Q6.PLAYING && (tE.current || ni(c.Q6.PLAYING, c.KB.BUFFERING_RECOVERY));
            }
        }
        function ny(e) {
            if ((ng(e), e3 === c.Q6.ENDED && !tb.current)) {
                let t = tH.current?.duration;
                (null == t || Number.isNaN(t) || e < t) && ni(c.Q6.PLAYING, c.KB.USER);
            }
        }
        l.useEffect(() => {
            if (null == tV.current) return;
            let e = tV.current;
            return (
                e.addEventListener("load", nS),
                () => {
                    null != e && e.removeEventListener("load", nS);
                }
            );
        }, [nS]);
        let [{ controlBarAnimSpring: nw }, nA] = (0, m.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: K,
                onStart: () => {
                    tw(!1);
                },
                onRest: () => {
                    tw(!0);
                },
            })),
            nN = (0, l.useRef)(null),
            [{ captionHeightSpring: nP }, nR] = (0, m.z)(() => ({ from: { captionHeightSpring: 0 }, config: K }));
        l.useEffect(
            () => (
                nR({ captionHeightSpring: t_ && null != t4 ? (nN.current?.clientHeight ?? 0) : 0, immediate: t$ }),
                () => {
                    nP.stop();
                }
            ),
            [t_, nR, t$, t4, nP],
        ),
            l.useEffect(
                () => (
                    nA({ controlBarAnimSpring: nf || tx ? 1 : 0, immediate: t$ }),
                    () => {
                        nw.stop();
                    }
                ),
                [nf, nA, t$, tx, nw],
            );
        let nT = e3 === c.Q6.ENDED && null != er,
            nM = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.KB.USER;
                    null != tH.current && (ng(0), ni(c.Q6.PLAYING, e));
                },
                [ng, ni],
            ),
            nL = l.useRef(null),
            nj = l.useCallback(
                (e) => {
                    nm(), nL.current?.(e.nativeEvent);
                },
                [nm],
            );
        l.useImperativeHandle(
            eJ,
            () => ({
                play: () => {
                    ni(c.Q6.PLAYING, c.KB.USER);
                },
                pause: () => {
                    ni(c.Q6.PAUSED, c.KB.USER);
                },
                seek: (e) => {
                    ng(e);
                },
            }),
            [ni, ng],
        );
        let nD = (0, r.jsx)(R.BK, {
            children: (0, r.jsx)(N.pT, {
                activeLayer: tK ? R.$W : void 0,
                isFullscreen: tK,
                videoRef: tH,
                isActive: tR,
                isControlBarExpanded: nf,
                children: (0, r.jsx)(f.D, {
                    className: i()(U.W6, { [U.nZ]: !tR }),
                    style: { minWidth: ez, minHeight: eZ },
                    "data-fullscreen": tK,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tR ? -1 : 0,
                    focusProps: tR ? void 0 : { ringTarget: tu },
                    onMouseEnter: function () {
                        e5(!0),
                            ns(!1),
                            (nc.current = performance.now()),
                            null != no.current && clearTimeout(no.current);
                    },
                    onMouseLeave: function () {
                        e5(!1), ns(!1);
                    },
                    "aria-label": tR ? void 0 : _.intl.string(_.t.RscU7I),
                    onClick: tR ? void 0 : nb,
                    onMouseMove: nm,
                    children: (0, r.jsxs)("div", {
                        ref: tG,
                        className: i()(U.NS, { [U.DO]: "portrait" === G, [U.r7]: "landscape" === G }),
                        tabIndex: -1,
                        onKeyDown: nj,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${na.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": "4px",
                            "--custom-footer-scrim-height": `${na.scrimHeightPx}px`,
                            "--custom-controls-gap": `${na.controlsGapPx}px`,
                            "--custom-controls-end-width":
                                null != na.trailingGroupWidthPx ? `${na.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            eV && !t$ && (0, r.jsx)("canvas", { ref: tQ, className: U.Xm }),
                            nT && er?.({ replay: nM }),
                            (0, r.jsxs)(C.A, {
                                ref: (e) => {
                                    (tH.current = e),
                                        (e8.current = e),
                                        "function" == typeof t ? t(e) : null != t && (t.current = e);
                                },
                                autoPlay: a,
                                alt: V,
                                playsInline: !0,
                                mediaLayoutType: tK ? F.dG.STATIC : F.dG.RESPONSIVE,
                                className: i()({ [U.R]: nT, [U.IR]: !0, [U.FP]: "cover" === eY && !tK }),
                                controls: !1,
                                poster: z,
                                preload: tR ? eA : "none",
                                disablePictureInPicture: !0,
                                "data-testid": "discord-web-video-player-video",
                                onTimeUpdate: function (e) {
                                    null != tH.current &&
                                        (W?.(tH.current.currentTime, tH.current.duration),
                                        tf.current || ti((tH.current.currentTime / tH.current.duration) * 100));
                                },
                                onEnded: function (e) {
                                    tm(c.h$.READY), J?.(), tb.current || ni(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE);
                                },
                                onLoadedData: function (e) {
                                    if (td === c.h$.LOADING) {
                                        let e = null != tN.current ? performance.now() - tN.current : null;
                                        ef?.(e), tm(c.h$.READY);
                                    }
                                },
                                onLoadedMetadata: function (e) {
                                    if (null == tH.current) return;
                                    X > 0 && !t0 && ng(X, !1);
                                    let t = ec?.() ?? tM,
                                        n = ed?.() ?? tj;
                                    t !== tM && tL(t), n !== tj && tD(n), (tH.current.volume = n ? 0 : t);
                                    let r = tH.current.duration;
                                    r > 0 && isFinite(r) && t9(r), t5(!0);
                                },
                                onLoadStart: function () {
                                    (tN.current = performance.now()), em?.();
                                },
                                onPlaying: function () {
                                    tA.current && (eh?.(performance.now()), (tA.current = !1));
                                },
                                onWaiting: function (e) {
                                    (tP.current = performance.now()), ep?.(), tm(c.h$.BUFFERING);
                                },
                                onProgress: function (e) {
                                    if (null == tH.current) return;
                                    let t = [];
                                    for (let e = 0; e < tH.current.buffered.length; e++) {
                                        let n = tH.current.buffered.start(e),
                                            r = tH.current.buffered.end(e);
                                        r - n < 1 ||
                                            t.push({
                                                start: n / tH.current.duration,
                                                size: (r - n) / tH.current.duration,
                                            });
                                    }
                                    tv(t);
                                },
                                onCanPlay: nC,
                                onCanPlayThrough: nC,
                                onSeeked: function () {
                                    (tf.current = !1),
                                        (th.current = null),
                                        null != tH.current && ti((tH.current.currentTime / tH.current.duration) * 100);
                                },
                                onAbort: function () {
                                    return tq(c.SB.ABORT);
                                },
                                onError: function () {
                                    return tq(c.SB.ERROR);
                                },
                                onEmptied: function () {
                                    return tq(c.SB.EMPTIED);
                                },
                                onStalled: function () {
                                    return tq(c.SB.STALLED);
                                },
                                onClick: nb,
                                crossOrigin: eQ ?? void 0,
                                children: [
                                    null != et &&
                                        (0, r.jsx)("track", {
                                            ref: tV,
                                            src: et,
                                            label: "English",
                                            kind: "captions",
                                            srcLang: "en",
                                            default: !0,
                                        }),
                                    null != e$ && (0, r.jsx)("track", { ref: tX, src: e$, kind: "metadata" }),
                                    !t0 &&
                                        !t6 &&
                                        (0, r.jsx)("source", {
                                            onError: function () {
                                                return tq(c.SB.SOURCE_ERROR);
                                            },
                                            src: eq,
                                        }),
                                ],
                            }),
                            td !== c.h$.READY &&
                                e3 === c.Q6.PLAYING &&
                                null != eq &&
                                (0, r.jsx)("span", {
                                    className: i()(U.S, { [U.F]: "center" === eG }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(k.A, {
                                message: e0({ hasVideoAsset: null != eq, playerState: e3, pauseReason: tz }),
                                showOverlay: null == eq,
                            }),
                            null != eb &&
                                (0, r.jsx)(u.animated.div, {
                                    className: U.MU,
                                    style: {
                                        opacity: (0, u.to)([nw.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, u.to)([nw.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, u.to)([nw.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: eb(),
                                }),
                            tB &&
                                e3 !== c.Q6.ENDED &&
                                null != en &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(f.D, {
                                            onClick: () => {
                                                e3 === c.Q6.PAUSED && ni(c.Q6.PLAYING, c.KB.USER), tF(!1);
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: U.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: i()(U.xr, eC, { [U.MZ]: "portrait" === G }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)(
                                                    [nw, nP],
                                                    (e, t) => `${e * na.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(L.X, {
                                                text: en,
                                                onClose: function () {
                                                    tF(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tR &&
                                (0, r.jsx)(u.animated.div, {
                                    className: U.Jp,
                                    style: {
                                        opacity: (0, u.to)([nw.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: i()(U.yf, {
                                        [U.ZH]: tC.current && e3 === c.Q6.PLAYING,
                                        [U.v7]: tC.current && e3 === c.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        e3 === c.Q6.PLAYING
                                            ? (0, r.jsx)(p.PlayIcon, { className: U.PK })
                                            : (0, r.jsx)(v.PauseIcon, { className: U.PK }),
                                },
                                e3,
                            ),
                            t_ &&
                                null != t4 &&
                                !nT &&
                                (0, r.jsx)(u.animated.div, {
                                    className: U.o$,
                                    ref: nN,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [nw.to({ range: [0, 1], output: [-20, -na.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(x.E, {
                                        variant: "text-lg/semibold",
                                        color: "text-overlay-light",
                                        className: U.qh,
                                        children: t4.text,
                                    }),
                                }),
                            tR &&
                                (0, r.jsxs)(u.animated.div, {
                                    className: U.r8,
                                    style: {
                                        height: (0, u.to)(
                                            [nw.to({ range: [0, 1], output: [0, na.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: [
                                        (0, r.jsx)(u.animated.div, {
                                            style: {
                                                transform: (0, u.to)(
                                                    [nw.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${20 * e}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)("div", {
                                                style: nf || tx || eF ? void 0 : O,
                                                children: (0, r.jsx)(M.Ay, {
                                                    percent: null != tl ? tl : tn,
                                                    animate:
                                                        !0 !== tY.current &&
                                                        !ts &&
                                                        e3 === c.Q6.PLAYING &&
                                                        t7 &&
                                                        td === c.h$.READY,
                                                    interactionEnabled: ty && ne > 0,
                                                    backgroundColor: nf || eF ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                    playerState: e3,
                                                    preloadedBuffers: nf ? tp : void 0,
                                                    durationSec: t3 > 0 ? t3 : +!t7,
                                                    isFullyVisible: nf && ty,
                                                    maxSeekableTime: null != ee && ne > 0 ? ne : void 0,
                                                    progressClassName: eI,
                                                    persistPlayhead: e_,
                                                    onClick: ny,
                                                    onScrubBack: nv,
                                                    onScrubForward: nx,
                                                    onDragStateChange: function (e) {
                                                        if (((tb.current = e), tg(e), e))
                                                            (tE.current = e3 === c.Q6.PLAYING),
                                                                (tS.current = e3 === c.Q6.ENDED),
                                                                tE.current
                                                                    ? tH.current?.pause()
                                                                    : tS.current && ni(c.Q6.PAUSED, c.KB.SEEK);
                                                        else {
                                                            let e = tH.current,
                                                                t =
                                                                    null != e &&
                                                                    !Number.isNaN(e.duration) &&
                                                                    e.currentTime >= e.duration;
                                                            tE.current
                                                                ? ((tE.current = !1),
                                                                  t
                                                                      ? ni(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                                                      : e?.play())
                                                                : tS.current
                                                                  ? ((tS.current = !1),
                                                                    t
                                                                        ? ni(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                                                        : ni(c.Q6.PLAYING, c.KB.USER))
                                                                  : t && ni(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE);
                                                        }
                                                    },
                                                    indicatorConfig: eO,
                                                    scrubPreviewCues: tW,
                                                    onIndicatorSeek: ny,
                                                    getCurrentTimeSec: tJ,
                                                    "data-testid": "discord-web-video-player-timeline",
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: U.uN,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, u.to)(
                                                    [nw.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 20}px`,
                                                ),
                                                paddingBottom: (0, u.to)(
                                                    [nw.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 12}px`,
                                                ),
                                                pointerEvents: (0, u.to)(
                                                    [nw.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            onFocus: function () {
                                                return tt(!0);
                                            },
                                            onBlur: function () {
                                                return tt(!1);
                                            },
                                            children: (0, r.jsx)(P.A, {
                                                playerState: e3,
                                                animSpring: nw,
                                                visible: nf,
                                                seekForwardEnabled:
                                                    null == ee || (tH.current?.currentTime ?? 0) + 1 < ne,
                                                hideCaptionBtn: null == et,
                                                hideTranscriptBtn: null == en,
                                                hideFullScreenBtn: eT,
                                                hidePlaybackSpeedBtn: ej,
                                                hideSkipButtons: eM ?? "portrait" === G,
                                                compactTimeDisplay: eL,
                                                size: nl,
                                                downloadUrl: eN,
                                                downloadContentType: eP,
                                                extraButtons: eR,
                                                autoFocus: eU,
                                                keyDownHandlerRef: nL,
                                                volume: tM,
                                                muted: tj,
                                                transcriptEnabled: tB,
                                                captionEnabled: t_,
                                                handlePlaybackBtnClick: nE,
                                                handleTranscriptBtnClick: function () {
                                                    tF(!tB);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    tU(!t_);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !tK,
                                                        t = (0, y.qf)(tH.current?.parentNode, tH.current);
                                                    e && null != t
                                                        ? ((0, y.tl)(t), t.addEventListener(y.Wb, np), ea?.(!0))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(y.Wb, np), ea?.(!1), (0, y.sP)(t)),
                                                        tO(e);
                                                },
                                                handleSeekBackBtnClick: nv,
                                                handleSeekForwardBtnClick: nx,
                                                autoHideVolumeSlider: eK,
                                                handleControlBarPendingInteraction: tg,
                                                onVolumeChange: function (e) {
                                                    tL(e), ei?.(e);
                                                },
                                                onMutedChange: function (e) {
                                                    tD(e), eu?.(e);
                                                },
                                                onVolumeExpandedChange: function (e) {
                                                    tI(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            null != eS &&
                                (0, r.jsx)("div", {
                                    className: U.MU,
                                    children: eS({
                                        playerState: e3,
                                        isControlBarExpanded: nf,
                                        controlBarAnimationSpring: nw,
                                        videoRef: tH,
                                        isActive: tR,
                                        isVolumeExpanded: tk,
                                    }),
                                }),
                            !tR &&
                                (0, r.jsx)("div", {
                                    className: U.mF,
                                    ref: tu,
                                    children: (0, r.jsx)(p.PlayIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: U.z_,
                                    }),
                                }),
                            (0, r.jsx)(R.bW, {}),
                            (0, r.jsx)(s.P, {}),
                        ],
                    }),
                }),
            }),
        });
        return (0, r.jsx)(s.Jh, { enabled: tK, children: nD });
    });
