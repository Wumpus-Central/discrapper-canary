(n.r(t), n.d(t, { COMPACT_CONTROL_BAR_MAX_WIDTH_PX: () => H, default: () => Y }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(941143),
    o = n(337836),
    s = n(17928),
    c = n(876230),
    d = n(231723),
    m = n(717421),
    f = n(939249),
    p = n(289873),
    h = n(782134),
    v = n(113494),
    x = n(834730),
    E = n(964486),
    g = n(770178),
    b = n(765548),
    y = n(775602),
    S = n(475815),
    C = n(718499),
    P = n(23590),
    w = n(683574),
    A = n(671897),
    R = n(906892),
    N = n(565164),
    L = n(275664),
    T = n(408121),
    k = n(984212),
    M = n(246047),
    j = n(739416),
    D = n(931853),
    I = n(90721),
    B = n(920228),
    F = n(953584),
    U = n(338659),
    G = n(838541),
    _ = n(105292),
    $ = n(862649);
let K = l.lazy(() =>
        Promise.all([n.e("999272"), n.e("919307")])
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
            onLoadEnd: ev,
            onFirstFrame: ex,
            onBufferingStart: eE,
            onBufferingEnd: eg,
            onFocusChange: eb,
            onVisibilityChange: ey,
            onSeek: eS,
            renderOverlay: eC,
            renderPersistentOverlay: eP,
            transcriptClassName: ew,
            onHlsInstance: eA,
            onClick: eR,
            preload: eN,
            downloadUrl: eL,
            fileSizeBytes: eT,
            downloadContentType: ek,
            extraButtons: eM,
            hideFullScreenBtn: ej = !1,
            hideSkipButtons: eD,
            compactTimeDisplay: eI = !1,
            hidePlaybackSpeedBtn: eB = !1,
            autoSizeControlBar: eF = !1,
            getPlaybackBlockedMessage: eU,
            progressClassName: eG,
            pauseOnLostVisibility: e_ = !1,
            persistTimeline: e$ = !1,
            persistPlayhead: eK = !0,
            autoFocus: eO = !1,
            autoHideVolumeSlider: eQ = !1,
            floatingVolumeSlider: eH = !1,
            timelineIndicatorConfig: eV,
            scrubPreviewVttUrl: eY,
            scrubPreviewImageUrl: ez,
            loadingSpinnerPosition: eX = "top-left",
            crossOrigin: eW = "anonymous",
            withVideoHalo: eZ = !1,
            objectFit: eq = "contain",
            minWidth: eJ = 240,
            minHeight: e0 = 180,
            muxContentMetadata: e1,
            awaitMuxReady: e2 = !1,
            playerRef: e6,
            ref: e4,
        } = e,
        e8 = Y ?? X,
        e9 = eU ?? D.u,
        { focused: e7, focusedChanged: e3 } = (0, j.A7)(),
        { visible: e5, visibleChanged: te, targetRef: tt } = (0, j.O7)(),
        [tn, tr] = l.useState(n ? c.Q6.PLAYING : c.Q6.PAUSED),
        [tl, ta] = l.useState(!1),
        [ti, tu] = l.useState(!1),
        [to, ts] = l.useState(0),
        [tc, td] = l.useState(null),
        tm = l.useCallback((e) => {
            (td(null), ts(e));
        }, []),
        tf = l.useRef(null),
        [tp, th] = l.useState(!1),
        tv = l.useRef(null),
        [tx, tE] = l.useState(c.h$.LOADING),
        tg = l.useRef(!1),
        tb = l.useRef(null),
        [ty, tS] = l.useState([]),
        [tC, tP] = l.useState(!1),
        tw = l.useRef(!1),
        tA = l.useRef(!1),
        tR = l.useRef(!1),
        tN = l.useRef(!1),
        [tL, tT] = l.useState(!0),
        tk = l.useRef(!0),
        tM = l.useRef(null),
        tj = l.useRef(null),
        [tD, tI] = l.useState(n || Z),
        [tB, tF] = l.useState(ed),
        [tU, tG] = l.useState(em),
        t_ = eQ || eH,
        [t$, tK] = l.useState(!t_),
        [tO, tQ] = l.useState(!1),
        [tH, tV] = l.useState(!1),
        [tY, tz] = l.useState(!1),
        tX = (0, s.bG)([y.Ay], () => y.Ay.useReducedMotion),
        tW = (0, l.useRef)(null),
        tZ = (0, l.useRef)(null),
        tq = (0, l.useRef)(null),
        tJ = (0, l.useRef)(null),
        t0 = l.useRef(!0),
        [t1, t2] = l.useState(null),
        t6 = l.useRef(null),
        t4 = (0, N.z5)(tD, t6, eY, ez),
        t8 = l.useCallback(() => tW.current?.currentTime ?? null, []),
        t9 = l.useMemo(
            () => ({
                get current() {
                    return (0, M.c)(tW.current);
                },
            }),
            [],
        );
    (0, I.A)({ videoRef: t9, canvasRef: tq, enabled: tD && eZ && !tX, canvasWidth: 32, canvasHeight: 18 });
    let {
            showStats: t7,
            videoStats: t3,
            onCloseStats: t5,
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
                    let l = new U.s(e, r ?? void 0);
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
        })({ videoRef: tW, src: e8, fileSizeBytes: eT }),
        ne = l.useCallback(
            (e, t) => {
                et?.(e, t);
            },
            [et],
        ),
        { isHlsActive: nt, hls: nn } = (0, C.Ay)(t9, {
            src: e8,
            initialTimeSec: q,
            onError: ne,
            onHlsInstance: eA,
            crossOrigin: eW,
        }),
        { isReady: nr } = (0, P.A)({ videoRef: t9, hls: nn, contentMetadata: e1, isHls: nt }),
        nl = e2 && !nr && !nt,
        [na, ni] = l.useState(null),
        [nu, no] = l.useState(0),
        [ns, nc] = l.useState(!1),
        nd = en ?? tW.current?.duration ?? 0,
        [nm, nf] = l.useState(!1),
        np = (0, b.A)((e) => {
            let t = e.contentRect.width;
            t <= 0 || nf(t < H);
        });
    (0, g.g)(tZ, np, [], { enabled: eF, fireOnMount: eF });
    let nh = tY ? c.oA.LG : eF && nm ? c.oA.SM : c.oA.MD,
        nv = V[nh];
    (0, E.u5)(() => {
        t0.current && (t0.current = !1);
    });
    let nx = l.useCallback(
        function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (((tN.current = !0), tr(e), eu?.(e, t), null != tW.current))
                switch (e) {
                    case c.Q6.PLAYING:
                        (t2(null), tI(!0), tW.current.play());
                        break;
                    case c.Q6.PAUSED:
                        ((tw.current = !1), tW.current.pause(), (tk.current = !1));
                        break;
                    case c.Q6.ENDED:
                        tQ(!1);
                }
        },
        [eu],
    );
    (l.useEffect(() => {
        if (!e_) return;
        let e = null != t && (t === d.ip.HIDDEN || t === d.ip.EXITING || t === d.ip.EXITED),
            n = null != t && te && !e5,
            r = e3 && !e7;
        if ((e || n || r) && null != tW.current && tn === c.Q6.PLAYING) {
            let t = e || n ? c.KB.VISIBILITY : c.KB.FOCUS;
            (t2(t), nx(c.Q6.PAUSED, t));
        }
    }, [e_, t, e7, e3, e5, te, tn, nx]),
        (0, B.A)({
            videoRef: t9,
            enabled: e_,
            onPipPause: () => {
                (t2(c.KB.PICTURE_IN_PICTURE), nx(c.Q6.PAUSED, c.KB.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (t2(c.KB.FOCUS), nx(c.Q6.PAUSED, c.KB.FOCUS));
            },
        }),
        l.useEffect(() => {
            e3 && eb?.(e7, tn);
        }, [e7, e3, tn, eb]),
        l.useEffect(() => {
            te && ey?.(e5, tn);
        }, [e5, te, tn, ey]));
    let [nE, ng] = l.useState(!1),
        nb = l.useRef(null),
        ny = l.useRef(0);
    l.useLayoutEffect(() => {
        ny.current = performance.now();
    }, []);
    let nS = l.useCallback(() => {
            switch ((null != nb.current && clearTimeout(nb.current), tn)) {
                case c.Q6.PLAYING:
                    nb.current = setTimeout(
                        () => {
                            ng(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - ny.current)),
                    );
                case c.Q6.PAUSED:
                case c.Q6.ENDED:
            }
        }, [tn]),
        nC = l.useCallback(() => {
            (ng(!1), (ny.current = performance.now()), nS());
        }, [nS]);
    (l.useEffect(() => {
        if (tn !== c.Q6.PLAYING) {
            (ng(!1), null != nb.current && clearTimeout(nb.current));
            return;
        }
        return (
            nS(),
            () => {
                null != nb.current && clearTimeout(nb.current);
            }
        );
    }, [tn, nS]),
        l.useEffect(
            () => () => {
                null != tv.current && clearTimeout(tv.current);
            },
            [],
        ));
    let nP = !nE && (ti || tl || tn === c.Q6.ENDED),
        nw = l.useRef(eo);
    nw.current = eo;
    let nA = l.useCallback(() => {
        let e = (0, S.qf)(tZ.current);
        null == e || (0, S._U)(e) || (e.removeEventListener(S.Wb, nA), tz(!1), nw.current?.(!1));
    }, []);
    function nR() {
        null == tW.current ||
            (nL(Math.max((tb.current ?? tW.current.currentTime) - 10, 0)),
            tn === c.Q6.ENDED && nx(c.Q6.PAUSED, c.KB.SEEK));
    }
    function nN() {
        if (null == tW.current) return;
        let e = Math.min((tb.current ?? tW.current.currentTime) + 10, nd);
        (nL(e), tn !== c.Q6.ENDED && e >= tW.current.duration && nx(c.Q6.ENDED, c.KB.SEEK));
    }
    l.useEffect(() => {
        let e = tZ.current;
        return () => {
            let t = (0, S.qf)(e);
            null != t && t.removeEventListener(S.Wb, nA);
        };
    }, [nA]);
    let nL = l.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == tW.current) return;
            let n = tW.current.currentTime;
            ((tb.current = e),
                td((e / (tW.current.duration ?? 1)) * 100),
                th(!0),
                null != tv.current && clearTimeout(tv.current),
                (tv.current = setTimeout(() => {
                    (th(!1), (tv.current = null));
                }, 100)),
                (tg.current = !0),
                (tW.current.currentTime = e),
                t && eS?.(n, e));
        },
        [eS],
    );
    function nT() {
        if (null != tW.current)
            switch (tn) {
                case c.Q6.ENDED:
                    (nL(0), nx(c.Q6.PLAYING, c.KB.USER));
                    break;
                case c.Q6.PLAYING:
                    (t2(c.KB.USER), nx(c.Q6.PAUSED, c.KB.USER));
                    break;
                default:
                    nx(c.Q6.PLAYING, c.KB.USER);
            }
    }
    function nk(e) {
        null != eR ? eR(e) : (tI(!0), nT());
    }
    let nM = l.useCallback(() => {
        if (null == tW.current || 0 === tW.current.textTracks.length) return;
        let e = tW.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, k.C)(n) &&
                    ((n.id = `cue-${t}`),
                    (n.onenter = () => {
                        ni(n);
                    }),
                    (n.onexit = () =>
                        (function (e) {
                            ni((t) => (t?.id === e.id ? null : t));
                        })(n)));
            }
    }, []);
    function nj(e) {
        if (null != tW.current) {
            if (tx === c.h$.BUFFERING) {
                let e = null != tj.current ? performance.now() - tj.current : null;
                eg?.(e);
            } else if (tx === c.h$.LOADING) {
                let e = null != tM.current ? performance.now() - tM.current : null;
                ev?.(e);
            }
            (tE(c.h$.READY), tn === c.Q6.PLAYING && (tw.current || nx(c.Q6.PLAYING, c.KB.BUFFERING_RECOVERY)));
        }
    }
    function nD(e) {
        if ((nL(e), tn === c.Q6.ENDED && !tA.current)) {
            let t = tW.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && nx(c.Q6.PLAYING, c.KB.USER);
        }
    }
    l.useEffect(() => {
        if (null == tJ.current) return;
        let e = tJ.current;
        return (
            e.addEventListener("load", nM),
            () => {
                null != e && e.removeEventListener("load", nM);
            }
        );
    }, [nM]);
    let [{ controlBarAnimSpring: nI }, nB] = (0, m.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: O,
            onStart: () => {
                tT(!1);
            },
            onRest: () => {
                tT(!0);
            },
        })),
        nF = (0, l.useRef)(null),
        [{ captionHeightSpring: nU }, nG] = (0, m.z)(() => ({ from: { captionHeightSpring: 0 }, config: O }));
    (l.useEffect(
        () => (
            nG({ captionHeightSpring: tH && null != na ? (nF.current?.clientHeight ?? 0) : 0, immediate: tX }),
            () => {
                nU.stop();
            }
        ),
        [tH, nG, tX, na, nU],
    ),
        l.useEffect(
            () => (
                nB({ controlBarAnimSpring: nP || tC ? 1 : 0, immediate: tX }),
                () => {
                    nI.stop();
                }
            ),
            [nP, nB, tX, tC, nI],
        ));
    let n_ = tn === c.Q6.ENDED && null != ea,
        n$ = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.KB.USER;
                null != tW.current && (nL(0), nx(c.Q6.PLAYING, e));
            },
            [nL, nx],
        ),
        nK = l.useRef(null),
        nO = l.useCallback(
            (e) => {
                (nC(), nK.current?.(e.nativeEvent));
            },
            [nC],
        );
    l.useImperativeHandle(
        e6,
        () => ({
            play: () => {
                nx(c.Q6.PLAYING, c.KB.USER);
            },
            pause: () => {
                nx(c.Q6.PAUSED, c.KB.USER);
            },
            seek: (e) => {
                nL(e);
            },
        }),
        [nx, nL],
    );
    let nQ = {
            ref: l.useCallback(
                (e) => {
                    tW.current = e;
                    let t = (0, M.c)(e);
                    ((tt.current = t), "function" == typeof e4 ? e4(t) : null != e4 && (e4.current = t));
                },
                [e4, tt],
            ),
            alt: z,
            playsInline: !0,
            mediaLayoutType: tY ? G.dG.STATIC : G.dG.RESPONSIVE,
            className: i()({ [$.R]: n_, [$.IR]: !0, [$.FP]: "cover" === eq && !tY }),
            controls: !1,
            poster: W,
            preload: tD ? eN : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != tW.current &&
                    (J?.(tW.current.currentTime, tW.current.duration),
                    tg.current || tm((tW.current.currentTime / tW.current.duration) * 100));
            },
            onEnded: function (e) {
                (tE(c.h$.READY), ee?.(), tA.current || nx(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (tx === c.h$.LOADING) {
                    let e = null != tM.current ? performance.now() - tM.current : null;
                    (ev?.(e), tE(c.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == tW.current) return;
                q > 0 && !nt && nL(q, !1);
                let t = ef?.() ?? tB,
                    n = ep?.() ?? tU;
                (t !== tB && tF(t), n !== tU && tG(n), (tW.current.volume = n ? 0 : t));
                let r = tW.current.duration;
                (r > 0 && isFinite(r) && no(r), nc(!0));
            },
            onLoadStart: function () {
                ((tM.current = performance.now()), eh?.());
            },
            onPlaying: function () {
                tk.current && (ex?.(performance.now()), (tk.current = !1));
            },
            onWaiting: function (e) {
                ((tj.current = performance.now()), eE?.(), tE(c.h$.BUFFERING));
            },
            onProgress: function (e) {
                if (null == tW.current) return;
                let t = [];
                for (let e = 0; e < tW.current.buffered.length; e++) {
                    let n = tW.current.buffered.start(e),
                        r = tW.current.buffered.end(e);
                    r - n < 1 || t.push({ start: n / tW.current.duration, size: (r - n) / tW.current.duration });
                }
                tS(t);
            },
            onCanPlay: nj,
            onCanPlayThrough: nj,
            onSeeked: function () {
                ((tg.current = !1),
                    (tb.current = null),
                    null != tW.current && tm((tW.current.currentTime / tW.current.duration) * 100));
            },
            onAbort: function () {
                return ne(c.SB.ABORT);
            },
            onError: function () {
                return ne(c.SB.ERROR);
            },
            onEmptied: function () {
                return ne(c.SB.EMPTIED);
            },
            onStalled: function () {
                return ne(c.SB.STALLED);
            },
            onClick: nk,
            crossOrigin: eW ?? void 0,
            src: nt || nl ? null : (e8 ?? null),
            onSourceError: function () {
                return ne(c.SB.SOURCE_ERROR);
            },
            isScrubbing: tC,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    null != er &&
                        (0, r.jsx)("track", {
                            ref: tJ,
                            src: er,
                            label: "English",
                            kind: "captions",
                            srcLang: "en",
                            default: !0,
                        }),
                    null != eY && (0, r.jsx)("track", { ref: t6, src: eY, kind: "metadata" }),
                ],
            }),
        },
        nH = (0, r.jsx)(R.BK, {
            children: (0, r.jsx)(w.pT, {
                activeLayer: tY ? R.$W : void 0,
                isFullscreen: tY,
                videoRef: tW,
                isActive: tD,
                isControlBarExpanded: nP,
                children: (0, r.jsx)(f.D, {
                    className: i()($.W6, { [$.nZ]: !tD }),
                    style: { minWidth: eJ, minHeight: e0 },
                    "data-fullscreen": tY,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tD ? -1 : 0,
                    focusProps: tD ? void 0 : { ringTarget: tf },
                    onMouseEnter: function () {
                        (ta(!0),
                            ng(!1),
                            (ny.current = performance.now()),
                            null != nb.current && clearTimeout(nb.current));
                    },
                    onMouseLeave: function () {
                        (ta(!1), ng(!1));
                    },
                    "aria-label": tD ? void 0 : _.intl.string(_.t.RscU7I),
                    onClick: tD ? void 0 : nk,
                    onMouseMove: nC,
                    children: (0, r.jsxs)("div", {
                        ref: tZ,
                        className: i()($.NS, { [$.DO]: "portrait" === a, [$.r7]: "landscape" === a }),
                        tabIndex: -1,
                        onKeyDown: nO,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${nv.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": "4px",
                            "--custom-footer-scrim-height": `${nv.scrimHeightPx}px`,
                            "--custom-controls-gap": `${nv.controlsGapPx}px`,
                            "--custom-controls-end-width":
                                null != nv.trailingGroupWidthPx ? `${nv.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tD && eZ && !tX && (0, r.jsx)("canvas", { ref: tq, className: $.Xm }),
                            n_ && ea?.({ replay: n$ }),
                            ei(nQ),
                            tx !== c.h$.READY &&
                                tn === c.Q6.PLAYING &&
                                null != e8 &&
                                (0, r.jsx)("span", {
                                    className: i()($.S, { [$.F]: "center" === eX }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(p.y, { type: p.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(D.A, {
                                message: e9({ hasVideoAsset: null != e8, playerState: tn, pauseReason: t1 }),
                                showOverlay: null == e8,
                            }),
                            t7 &&
                                null != t3 &&
                                (0, r.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, r.jsx)(K, { stats: t3, onClose: t5 }),
                                }),
                            null != eC &&
                                (0, r.jsx)(u.animated.div, {
                                    className: $.MU,
                                    style: {
                                        opacity: (0, u.to)([nI.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, u.to)([nI.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, u.to)([nI.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: eC(),
                                }),
                            tO &&
                                tn !== c.Q6.ENDED &&
                                null != el &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(f.D, {
                                            onClick: () => {
                                                (tn === c.Q6.PAUSED && nx(c.Q6.PLAYING, c.KB.USER), tQ(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: $.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: i()($.xr, ew, { [$.MZ]: "portrait" === a }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)(
                                                    [nI, nU],
                                                    (e, t) => `${e * nv.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(T.X, {
                                                text: el,
                                                onClose: function () {
                                                    tQ(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tD &&
                                (0, r.jsx)(u.animated.div, {
                                    className: $.Jp,
                                    style: {
                                        opacity: (0, u.to)([nI.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: i()($.yf, {
                                        [$.ZH]: tN.current && tn === c.Q6.PLAYING,
                                        [$.v7]: tN.current && tn === c.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        tn === c.Q6.PLAYING
                                            ? (0, r.jsx)(h.PlayIcon, { className: $.PK })
                                            : (0, r.jsx)(v.PauseIcon, { className: $.PK }),
                                },
                                tn,
                            ),
                            tH &&
                                null != na &&
                                !n_ &&
                                (0, r.jsx)(u.animated.div, {
                                    className: $.o$,
                                    ref: nF,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [nI.to({ range: [0, 1], output: [-20, -nv.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(x.E, {
                                        variant: "text-lg/semibold",
                                        color: "text-overlay-light",
                                        className: $.qh,
                                        children: na.text,
                                    }),
                                }),
                            tD &&
                                (0, r.jsxs)(u.animated.div, {
                                    className: $.r8,
                                    style: {
                                        height: (0, u.to)(
                                            [nI.to({ range: [0, 1], output: [0, nv.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: [
                                        (0, r.jsx)(u.animated.div, {
                                            style: {
                                                transform: (0, u.to)(
                                                    [nI.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${20 * e}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)("div", {
                                                style: nP || tC || e$ ? void 0 : Q,
                                                children: (0, r.jsx)(L.Ay, {
                                                    percent: null != tc ? tc : to,
                                                    animate:
                                                        !0 !== t0.current &&
                                                        !tp &&
                                                        tn === c.Q6.PLAYING &&
                                                        ns &&
                                                        tx === c.h$.READY,
                                                    interactionEnabled: tL && nd > 0,
                                                    backgroundColor: nP || e$ ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                    playerState: tn,
                                                    preloadedBuffers: nP ? ty : void 0,
                                                    durationSec: nu > 0 ? nu : +!ns,
                                                    isFullyVisible: nP && tL,
                                                    maxSeekableTime: null != en && nd > 0 ? nd : void 0,
                                                    progressClassName: eG,
                                                    persistPlayhead: eK,
                                                    onClick: nD,
                                                    onScrubBack: nR,
                                                    onScrubForward: nN,
                                                    onDragStateChange: function (e) {
                                                        if (((tA.current = e), tP(e), e))
                                                            ((tw.current = tn === c.Q6.PLAYING),
                                                                (tR.current = tn === c.Q6.ENDED),
                                                                tw.current
                                                                    ? tW.current?.pause()
                                                                    : tR.current && nx(c.Q6.PAUSED, c.KB.SEEK));
                                                        else {
                                                            let e = tW.current,
                                                                t =
                                                                    null != e &&
                                                                    !Number.isNaN(e.duration) &&
                                                                    e.currentTime >= e.duration;
                                                            tw.current
                                                                ? ((tw.current = !1),
                                                                  t
                                                                      ? nx(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                                                      : e?.play())
                                                                : tR.current
                                                                  ? ((tR.current = !1),
                                                                    t
                                                                        ? nx(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                                                        : nx(c.Q6.PLAYING, c.KB.USER))
                                                                  : t && nx(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE);
                                                        }
                                                    },
                                                    indicatorConfig: eV,
                                                    scrubPreviewCues: t4,
                                                    onIndicatorSeek: nD,
                                                    getCurrentTimeSec: t8,
                                                    "data-testid": "discord-web-video-player-timeline",
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: $.uN,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, u.to)(
                                                    [nI.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 20}px`,
                                                ),
                                                paddingBottom: (0, u.to)(
                                                    [nI.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 20}px`,
                                                ),
                                                pointerEvents: (0, u.to)(
                                                    [nI.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            onFocus: function () {
                                                return tu(!0);
                                            },
                                            onBlur: function () {
                                                return tu(!1);
                                            },
                                            children: (0, r.jsx)(A.A, {
                                                playerState: tn,
                                                animSpring: nI,
                                                visible: nP,
                                                seekForwardEnabled:
                                                    null == en || (tW.current?.currentTime ?? 0) + 1 < nd,
                                                hideCaptionBtn: null == er,
                                                hideTranscriptBtn: null == el,
                                                hideFullScreenBtn: ej,
                                                hidePlaybackSpeedBtn: eB,
                                                hideSkipButtons: eD ?? "portrait" === a,
                                                compactTimeDisplay: eI,
                                                size: nh,
                                                downloadUrl: eL,
                                                downloadContentType: ek,
                                                extraButtons: eM,
                                                autoFocus: eO,
                                                keyDownHandlerRef: nK,
                                                volume: tB,
                                                muted: tU,
                                                transcriptEnabled: tO,
                                                captionEnabled: tH,
                                                handlePlaybackBtnClick: nT,
                                                handleTranscriptBtnClick: function () {
                                                    tQ(!tO);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    tV(!tH);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !tY,
                                                        t = (0, S.qf)(tZ.current);
                                                    (e && null != t
                                                        ? ((0, S.tl)(t), t.addEventListener(S.Wb, nA), eo?.(!0))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(S.Wb, nA), eo?.(!1), (0, S.sP)(t)),
                                                        tz(e));
                                                },
                                                handleSeekBackBtnClick: nR,
                                                handleSeekForwardBtnClick: nN,
                                                autoHideVolumeSlider: t_,
                                                floatingVolumeSlider: eH,
                                                handleControlBarPendingInteraction: tP,
                                                onVolumeChange: function (e) {
                                                    (tF(e), es?.(e));
                                                },
                                                onMutedChange: function (e) {
                                                    (tG(e), ec?.(e));
                                                },
                                                onVolumeExpandedChange: function (e) {
                                                    tK(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            null != eP &&
                                (0, r.jsx)("div", {
                                    className: $.MU,
                                    children: eP({
                                        playerState: tn,
                                        isControlBarExpanded: nP,
                                        controlBarAnimationSpring: nI,
                                        videoRef: tW,
                                        isActive: tD,
                                        isVolumeExpanded: t$,
                                    }),
                                }),
                            !tD &&
                                (0, r.jsx)("div", {
                                    className: $.mF,
                                    ref: tf,
                                    children: (0, r.jsx)(h.PlayIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: $.z_,
                                    }),
                                }),
                            (0, r.jsx)(R.bW, {}),
                            (0, r.jsx)(o.P, {}),
                        ],
                    }),
                }),
            }),
        });
    return (0, r.jsx)(o.Jh, { enabled: tY, children: nH });
}
