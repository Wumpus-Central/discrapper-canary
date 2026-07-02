"use strict";
n.r(t), n.d(t, { default: () => k }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(580929),
    l = n(17928),
    u = n(876230),
    d = n(231723),
    c = n(717421),
    _ = n(939249),
    h = n(289873),
    f = n(782134),
    E = n(113494),
    p = n(834730),
    m = n(964486),
    g = n(775602),
    A = n(607470),
    I = n(475815),
    T = n(718499),
    S = n(23590),
    N = n(671897),
    C = n(565164),
    y = n(275664),
    v = n(408121),
    R = n(984212),
    O = n(739416),
    b = n(931853),
    L = n(90721),
    D = n(920228),
    P = n(838541),
    w = n(375708),
    M = n(834926);
let x = { tension: 250, friction: 5, clamp: !0 },
    U = { visibility: "hidden" },
    k = r.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: s = !1,
                orientation: k = "landscape",
                videoUrlOverride: G,
                alt: V,
                src: F,
                poster: B,
                initialActive: j = !0,
                initialTimeSec: H = 0,
                onProgressUpdate: W,
                onEnded: Y,
                onError: K,
                maxSeekableTimeSec: $,
                captionTrackUrl: z,
                transcriptText: q,
                renderEndScreen: Z,
                onPlayerStateChange: X,
                onFullscreenChange: Q,
                onVolumeChange: J,
                onMutedChange: ee,
                initialVolume: et = 0.3,
                initialMuted: en = !1,
                getInitialVolume: ei,
                getInitialMuted: er,
                onLoadStart: es,
                onLoadEnd: ea,
                onFirstFrame: eo,
                onBufferingStart: el,
                onBufferingEnd: eu,
                onFocusChange: ed,
                onVisibilityChange: ec,
                onSeek: e_,
                renderOverlay: eh,
                renderPersistentOverlay: ef,
                transcriptClassName: eE,
                onHlsInstance: ep,
                onClick: em,
                preload: eg,
                downloadUrl: eA,
                downloadContentType: eI,
                extraButtons: eT,
                hideFullScreenBtn: eS = !1,
                hideSkipButtons: eN,
                compactTimeDisplay: eC = !1,
                hidePlaybackSpeedBtn: ey = !1,
                getPlaybackBlockedMessage: ev,
                progressClassName: eR,
                pauseOnLostVisibility: eO = !1,
                persistTimeline: eb = !1,
                persistPlayhead: eL = !0,
                autoFocus: eD = !1,
                autoHideVolumeSlider: eP = !1,
                timelineIndicatorConfig: ew,
                scrubPreviewVttUrl: eM,
                scrubPreviewImageUrl: ex,
                loadingSpinnerPosition: eU = "top-left",
                crossOrigin: ek = "anonymous",
                withVideoHalo: eG = !1,
                objectFit: eV = "contain",
                minWidth: eF = 240,
                minHeight: eB = 180,
                muxContentMetadata: ej,
                awaitMuxReady: eH = !1,
                playerRef: eW,
            } = e,
            eY = G ?? F,
            eK = ev ?? b.u,
            { focused: e$, focusedChanged: ez } = (0, O.A7)(),
            { visible: eq, visibleChanged: eZ, targetRef: eX } = (0, O.O7)(),
            [eQ, eJ] = r.useState(s ? u.Q6.PLAYING : u.Q6.PAUSED),
            [e0, e1] = r.useState(!1),
            [e2, e3] = r.useState(!1),
            [e6, e4] = r.useState(0),
            [e5, e7] = r.useState(null),
            e8 = r.useCallback((e) => {
                e7(null), e4(e);
            }, []),
            e9 = r.useRef(null),
            [te, tt] = r.useState(!1),
            tn = r.useRef(null),
            [ti, tr] = r.useState(u.h$.LOADING),
            ts = r.useRef(!1),
            ta = r.useRef(null),
            [to, tl] = r.useState([]),
            [tu, td] = r.useState(!1),
            tc = r.useRef(!1),
            t_ = r.useRef(!1),
            th = r.useRef(!1),
            tf = r.useRef(!1),
            [tE, tp] = r.useState(!0),
            tm = r.useRef(!0),
            tg = r.useRef(null),
            tA = r.useRef(null),
            [tI, tT] = r.useState(s || j),
            [tS, tN] = r.useState(et),
            [tC, ty] = r.useState(en),
            [tv, tR] = r.useState(!eP),
            [tO, tb] = r.useState(!1),
            [tL, tD] = r.useState(!1),
            [tP, tw] = r.useState(!1),
            tM = (0, l.bG)([g.Ay], () => g.Ay.useReducedMotion),
            tx = (0, r.useRef)(null),
            tU = (0, r.useRef)(null),
            tk = (0, r.useRef)(null),
            tG = r.useRef(!0),
            [tV, tF] = r.useState(null),
            tB = r.useRef(null),
            tj = (0, C.z5)(tI, tB, eM, ex),
            tH = r.useCallback(() => tx.current?.currentTime ?? null, []);
        (0, L.A)({ videoRef: tx, canvasRef: tU, enabled: tI && eG && !tM, canvasWidth: 32, canvasHeight: 18 });
        let tW = r.useCallback(
                (e, t) => {
                    K?.(e, t);
                },
                [K],
            ),
            { isHlsActive: tY, hlsRef: tK } = (0, T.Ay)(tx, {
                src: eY,
                initialTimeSec: H,
                onError: tW,
                onHlsInstance: ep,
                crossOrigin: ek,
            }),
            { isReady: t$ } = (0, S.A)({ videoRef: tx, hlsRef: tK, contentMetadata: ej, isHls: tY }),
            tz = eH && !t$ && !tY,
            [tq, tZ] = r.useState(null),
            [tX, tQ] = r.useState(0),
            [tJ, t0] = r.useState(!1),
            t1 = $ ?? tx.current?.duration ?? 0,
            [t2, t3] = r.useState(u.oA.MD),
            t6 = { [u.oA.MD]: 56, [u.oA.LG]: 64 };
        (0, m.u5)(() => {
            tG.current && (tG.current = !1);
        });
        let t4 = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tf.current = !0), eJ(e), X?.(e, t), null != tx.current))
                    switch (e) {
                        case u.Q6.PLAYING:
                            tF(null), tT(!0), tx.current.play();
                            break;
                        case u.Q6.PAUSED:
                            (tc.current = !1), tx.current.pause(), (tm.current = !1);
                            break;
                        case u.Q6.ENDED:
                            tb(!1);
                    }
            },
            [X],
        );
        r.useEffect(() => {
            if (!eO) return;
            let e = null != n && (n === d.ip.HIDDEN || n === d.ip.EXITING || n === d.ip.EXITED),
                t = null != n && eZ && !eq,
                i = ez && !e$;
            if ((e || t || i) && null != tx.current && eQ === u.Q6.PLAYING) {
                let n = e || t ? u.KB.VISIBILITY : u.KB.FOCUS;
                tF(n), t4(u.Q6.PAUSED, n);
            }
        }, [eO, n, e$, ez, eq, eZ, eQ, t4]),
            (0, D.A)({
                videoRef: tx,
                enabled: eO,
                onPipPause: () => {
                    tF(u.KB.PICTURE_IN_PICTURE), t4(u.Q6.PAUSED, u.KB.PICTURE_IN_PICTURE);
                },
                onHiddenPause: () => {
                    tF(u.KB.FOCUS), t4(u.Q6.PAUSED, u.KB.FOCUS);
                },
            }),
            r.useEffect(() => {
                ez && ed?.(e$, eQ);
            }, [e$, ez, eQ, ed]),
            r.useEffect(() => {
                eZ && ec?.(eq, eQ);
            }, [eq, eZ, eQ, ec]);
        let [t5, t7] = r.useState(!1),
            t8 = r.useRef(null),
            t9 = r.useRef(0);
        r.useLayoutEffect(() => {
            t9.current = performance.now();
        }, []);
        let ne = r.useCallback(() => {
                null != t8.current && clearTimeout(t8.current),
                    eQ !== u.Q6.PLAYING ||
                        (t8.current = setTimeout(
                            () => {
                                eQ === u.Q6.PLAYING && t7(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - t9.current)),
                        ));
            }, [eQ]),
            nt = r.useCallback(() => {
                t7(!1), (t9.current = performance.now()), ne();
            }, [ne]);
        r.useEffect(() => {
            if (eQ !== u.Q6.PLAYING) {
                t7(!1), null != t8.current && clearTimeout(t8.current);
                return;
            }
            return (
                ne(),
                () => {
                    null != t8.current && clearTimeout(t8.current);
                }
            );
        }, [eQ, ne]),
            r.useEffect(
                () => () => {
                    null != tn.current && clearTimeout(tn.current);
                },
                [],
            );
        let nn = !t5 && (e2 || e0 || eQ === u.Q6.ENDED),
            ni = r.useRef(Q);
        ni.current = Q;
        let nr = r.useCallback(() => {
                let e = (0, I.qf)(tx.current?.parentNode, tx.current);
                null == e || (0, I._U)(e) || (e.removeEventListener(I.Wb, nr), tw(!1), ni.current?.(!1), t3(u.oA.MD));
            }, []),
            ns = () => {
                null == tx.current ||
                    (no(Math.max((ta.current ?? tx.current.currentTime) - 10, 0)),
                    eQ === u.Q6.ENDED && t4(u.Q6.PAUSED, u.KB.SEEK));
            },
            na = () => {
                if (null == tx.current) return;
                let e = Math.min((ta.current ?? tx.current.currentTime) + 10, t1);
                no(e), eQ !== u.Q6.ENDED && e >= tx.current.duration && t4(u.Q6.ENDED, u.KB.SEEK);
            };
        r.useEffect(() => {
            let e = tx.current;
            return () => {
                let t = (0, I.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(I.Wb, nr);
            };
        }, [nr]);
        let no = r.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == tx.current) return;
                let n = tx.current.currentTime;
                (ta.current = e),
                    e7((e / (tx.current.duration ?? 1)) * 100),
                    tt(!0),
                    null != tn.current && clearTimeout(tn.current),
                    (tn.current = setTimeout(() => {
                        tt(!1), (tn.current = null);
                    }, 100)),
                    (ts.current = !0),
                    (tx.current.currentTime = e),
                    t && e_?.(n, e);
            },
            [e_],
        );
        function nl() {
            if (null != tx.current)
                switch (eQ) {
                    case u.Q6.ENDED:
                        no(0), t4(u.Q6.PLAYING, u.KB.USER);
                        break;
                    case u.Q6.PLAYING:
                        tF(u.KB.USER), t4(u.Q6.PAUSED, u.KB.USER);
                        break;
                    default:
                        t4(u.Q6.PLAYING, u.KB.USER);
                }
        }
        let nu = (e) => {
                null != em ? em(e) : (tT(!0), nl());
            },
            nd = r.useCallback(() => {
                if (null == tx.current || 0 === tx.current.textTracks.length) return;
                let e = tx.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, R.C)(n) &&
                            ((n.id = `cue-${t}`),
                            (n.onenter = () => {
                                tZ(n);
                            }),
                            (n.onexit = () =>
                                (function (e) {
                                    tZ((t) => (t?.id === e.id ? null : t));
                                })(n)));
                    }
            }, []);
        r.useEffect(() => {
            if (null == tk.current) return;
            let e = tk.current;
            return (
                e.addEventListener("load", nd),
                () => {
                    null != e && e.removeEventListener("load", nd);
                }
            );
        }, [nd]);
        let nc = (e) => {
            if (null != tx.current) {
                if (ti === u.h$.BUFFERING) {
                    let e = null != tA.current ? performance.now() - tA.current : null;
                    eu?.(e);
                } else if (ti === u.h$.LOADING) {
                    let e = null != tg.current ? performance.now() - tg.current : null;
                    ea?.(e);
                }
                tr(u.h$.READY), eQ === u.Q6.PLAYING && (tc.current || t4(u.Q6.PLAYING, u.KB.BUFFERING_RECOVERY));
            }
        };
        function n_(e) {
            if ((no(e), eQ === u.Q6.ENDED && !t_.current)) {
                let t = tx.current?.duration;
                (null == t || Number.isNaN(t) || e < t) && t4(u.Q6.PLAYING, u.KB.USER);
            }
        }
        let [{ controlBarAnimSpring: nh }, nf] = (0, c.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: x,
                onStart: () => {
                    tp(!1);
                },
                onRest: () => {
                    tp(!0);
                },
            })),
            nE = (0, r.useRef)(null),
            [{ captionHeightSpring: np }, nm] = (0, c.z)(() => ({ from: { captionHeightSpring: 0 }, config: x }));
        r.useEffect(
            () => (
                nm({ captionHeightSpring: tL && null != tq ? (nE.current?.clientHeight ?? 0) : 0, immediate: tM }),
                () => {
                    np.stop();
                }
            ),
            [tL, nm, tM, tq, np],
        ),
            r.useEffect(
                () => (
                    nf({ controlBarAnimSpring: nn || tu ? 1 : 0, immediate: tM }),
                    () => {
                        nh.stop();
                    }
                ),
                [nn, nf, tM, tu, nh],
            );
        let ng = eQ === u.Q6.ENDED && null != Z,
            nA = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.KB.USER;
                    null != tx.current && (no(0), t4(u.Q6.PLAYING, e));
                },
                [no, t4],
            ),
            nI = r.useRef(null),
            nT = r.useCallback(
                (e) => {
                    nt(), nI.current?.(e.nativeEvent);
                },
                [nt],
            );
        return (
            r.useImperativeHandle(
                eW,
                () => ({
                    play: () => {
                        t4(u.Q6.PLAYING, u.KB.USER);
                    },
                    pause: () => {
                        t4(u.Q6.PAUSED, u.KB.USER);
                    },
                    seek: (e) => {
                        no(e);
                    },
                }),
                [t4, no],
            ),
            (0, i.jsx)(_.D, {
                className: a()(M.W6, { [M.nZ]: !tI }),
                style: { minWidth: eF, minHeight: eB },
                "data-fullscreen": tP,
                "data-testid": "discord-web-video-player-container",
                tabIndex: tI ? -1 : 0,
                focusProps: tI ? void 0 : { ringTarget: e9 },
                onMouseEnter: function () {
                    e1(!0), t7(!1), (t9.current = performance.now()), null != t8.current && clearTimeout(t8.current);
                },
                onMouseLeave: function () {
                    e1(!1), t7(!1);
                },
                "aria-label": tI ? void 0 : w.intl.string(w.t.RscU7I),
                onClick: tI ? void 0 : nu,
                onMouseMove: nt,
                children: (0, i.jsxs)("div", {
                    className: a()(M.NS, { [M.DO]: "portrait" === k, [M.r7]: "landscape" === k }),
                    tabIndex: -1,
                    onKeyDown: nT,
                    style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                    children: [
                        eG && !tM && (0, i.jsx)("canvas", { ref: tU, className: M.Xm }),
                        ng && Z?.({ replay: nA }),
                        (0, i.jsxs)(A.A, {
                            ref: (e) => {
                                (tx.current = e),
                                    (eX.current = e),
                                    "function" == typeof t ? t(e) : null != t && (t.current = e);
                            },
                            autoPlay: s,
                            alt: V,
                            playsInline: !0,
                            mediaLayoutType: tP ? P.dG.STATIC : P.dG.RESPONSIVE,
                            className: a()({ [M.R]: ng, [M.IR]: !0, [M.FP]: "cover" === eV && !tP }),
                            controls: !1,
                            poster: B,
                            preload: tI ? eg : "none",
                            disablePictureInPicture: !0,
                            "data-testid": "discord-web-video-player-video",
                            onTimeUpdate: function (e) {
                                null != tx.current &&
                                    (W?.(tx.current.currentTime, tx.current.duration),
                                    ts.current || e8((tx.current.currentTime / tx.current.duration) * 100));
                            },
                            onEnded: function (e) {
                                tr(u.h$.READY), Y?.(), t_.current || t4(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE);
                            },
                            onLoadedData: function (e) {
                                if (ti === u.h$.LOADING) {
                                    let e = null != tg.current ? performance.now() - tg.current : null;
                                    ea?.(e), tr(u.h$.READY);
                                }
                            },
                            onLoadedMetadata: function (e) {
                                if (null == tx.current) return;
                                H > 0 && !tY && no(H, !1);
                                let t = ei?.() ?? tS,
                                    n = er?.() ?? tC;
                                t !== tS && tN(t), n !== tC && ty(n), (tx.current.volume = n ? 0 : t);
                                let i = tx.current.duration;
                                i > 0 && isFinite(i) && tQ(i), t0(!0);
                            },
                            onLoadStart: function () {
                                (tg.current = performance.now()), es?.();
                            },
                            onPlaying: function () {
                                tm.current && (eo?.(performance.now()), (tm.current = !1));
                            },
                            onWaiting: function (e) {
                                (tA.current = performance.now()), el?.(), tr(u.h$.BUFFERING);
                            },
                            onProgress: function (e) {
                                if (null == tx.current) return;
                                let t = [];
                                for (let e = 0; e < tx.current.buffered.length; e++) {
                                    let n = tx.current.buffered.start(e),
                                        i = tx.current.buffered.end(e);
                                    i - n < 1 ||
                                        t.push({ start: n / tx.current.duration, size: (i - n) / tx.current.duration });
                                }
                                tl(t);
                            },
                            onCanPlay: nc,
                            onCanPlayThrough: nc,
                            onSeeked: function () {
                                (ts.current = !1),
                                    (ta.current = null),
                                    null != tx.current && e8((tx.current.currentTime / tx.current.duration) * 100);
                            },
                            onAbort: function () {
                                return tW(u.SB.ABORT);
                            },
                            onError: function () {
                                return tW(u.SB.ERROR);
                            },
                            onEmptied: function () {
                                return tW(u.SB.EMPTIED);
                            },
                            onStalled: function () {
                                return tW(u.SB.STALLED);
                            },
                            onClick: nu,
                            crossOrigin: ek ?? void 0,
                            children: [
                                null != z &&
                                    (0, i.jsx)("track", {
                                        ref: tk,
                                        src: z,
                                        label: "English",
                                        kind: "captions",
                                        srcLang: "en",
                                        default: !0,
                                    }),
                                null != eM && (0, i.jsx)("track", { ref: tB, src: eM, kind: "metadata" }),
                                !tY &&
                                    !tz &&
                                    (0, i.jsx)("source", {
                                        onError: function () {
                                            return tW(u.SB.SOURCE_ERROR);
                                        },
                                        src: eY,
                                    }),
                            ],
                        }),
                        ti !== u.h$.READY &&
                            eQ === u.Q6.PLAYING &&
                            null != eY &&
                            (0, i.jsx)("span", {
                                className: a()(M.S, { [M.F]: "center" === eU }),
                                "data-testid": "discord-web-video-player-loading-spinner",
                                children: (0, i.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                            }),
                        (0, i.jsx)(b.A, {
                            message: eK({ hasVideoAsset: null != eY, playerState: eQ, pauseReason: tV }),
                            showOverlay: null == eY,
                        }),
                        null != eh &&
                            (0, i.jsx)(o.animated.div, {
                                className: M.MU,
                                style: {
                                    opacity: (0, o.to)([nh.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    visibility: (0, o.to)([nh.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.1 ? "hidden" : "visible",
                                    ),
                                    pointerEvents: (0, o.to)([nh.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                children: eh(),
                            }),
                        tO &&
                            eQ !== u.Q6.ENDED &&
                            null != q &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(_.D, {
                                        onClick: () => {
                                            eQ === u.Q6.PAUSED && t4(u.Q6.PLAYING, u.KB.USER), tb(!1);
                                        },
                                        tabIndex: -1,
                                        children: (0, i.jsx)("div", { className: M.BG }),
                                    }),
                                    (0, i.jsx)(o.animated.div, {
                                        className: a()(M.xr, eE, { [M.MZ]: "portrait" === k }),
                                        "data-testid": "discord-web-video-player-transcript",
                                        style: { marginBottom: (0, o.to)([nh, np], (e, t) => `${e * t6[t2] + t}px`) },
                                        children: (0, i.jsx)(v.X, {
                                            text: q,
                                            onClose: function () {
                                                tb(!1);
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        tI &&
                            (0, i.jsx)(o.animated.div, {
                                className: M.Jp,
                                style: {
                                    opacity: (0, o.to)([nh.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                },
                            }),
                        (0, i.jsx)(
                            "div",
                            {
                                className: a()(M.yf, {
                                    [M.ZH]: tf.current && eQ === u.Q6.PLAYING,
                                    [M.v7]: tf.current && eQ === u.Q6.PAUSED,
                                }),
                                style: { "--custom-play-pause-pop-ms": "1000ms" },
                                children:
                                    eQ === u.Q6.PLAYING
                                        ? (0, i.jsx)(f.u, { className: M.PK })
                                        : (0, i.jsx)(E.E, { className: M.PK }),
                            },
                            eQ,
                        ),
                        tL &&
                            null != tq &&
                            !ng &&
                            (0, i.jsx)(o.animated.div, {
                                className: M.o$,
                                ref: nE,
                                "data-testid": "discord-web-video-player-captions",
                                style: {
                                    translateY: (0, o.to)(
                                        [nh.to({ range: [0, 1], output: [-20, -t6[t2]] })],
                                        (e) => `${e}px`,
                                    ),
                                },
                                children: (0, i.jsx)(p.E, {
                                    variant: "text-lg/semibold",
                                    color: "always-white",
                                    className: M.qh,
                                    children: tq.text,
                                }),
                            }),
                        tI &&
                            (0, i.jsxs)(o.animated.div, {
                                className: M.r8,
                                style: {
                                    height: (0, o.to)([nh.to({ range: [0, 1], output: [0, t6[t2]] })], (e) => `${e}px`),
                                },
                                children: [
                                    (0, i.jsx)(o.animated.div, {
                                        style: {
                                            transform: (0, o.to)(
                                                [nh.to({ range: [1, 0], output: [0, 1] })],
                                                (e) => `translateY(-${20 * e}px)`,
                                            ),
                                        },
                                        children: (0, i.jsx)("div", {
                                            style: nn || tu || eb ? void 0 : U,
                                            children: (0, i.jsx)(y.Ay, {
                                                percent: null != e5 ? e5 : e6,
                                                animate:
                                                    !0 !== tG.current &&
                                                    !te &&
                                                    eQ === u.Q6.PLAYING &&
                                                    tJ &&
                                                    ti === u.h$.READY,
                                                interactionEnabled: tE && t1 > 0,
                                                backgroundColor: nn || eb ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                playerState: eQ,
                                                preloadedBuffers: nn ? to : void 0,
                                                durationSec: tX > 0 ? tX : +!tJ,
                                                isFullyVisible: nn && tE,
                                                maxSeekableTime: null != $ && t1 > 0 ? t1 : void 0,
                                                progressClassName: eR,
                                                persistPlayhead: eL,
                                                onClick: n_,
                                                onScrubBack: ns,
                                                onScrubForward: na,
                                                onDragStateChange: function (e) {
                                                    if (((t_.current = e), td(e), e))
                                                        (tc.current = eQ === u.Q6.PLAYING),
                                                            (th.current = eQ === u.Q6.ENDED),
                                                            tc.current
                                                                ? tx.current?.pause()
                                                                : th.current && t4(u.Q6.PAUSED, u.KB.SEEK);
                                                    else {
                                                        let e = tx.current,
                                                            t =
                                                                null != e &&
                                                                !Number.isNaN(e.duration) &&
                                                                e.currentTime >= e.duration;
                                                        tc.current
                                                            ? ((tc.current = !1),
                                                              t ? t4(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE) : e?.play())
                                                            : th.current
                                                              ? ((th.current = !1),
                                                                t
                                                                    ? t4(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE)
                                                                    : t4(u.Q6.PLAYING, u.KB.USER))
                                                              : t && t4(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE);
                                                    }
                                                },
                                                indicatorConfig: ew,
                                                scrubPreviewCues: tj,
                                                onIndicatorSeek: n_,
                                                getCurrentTimeSec: tH,
                                                "data-testid": "discord-web-video-player-timeline",
                                            }),
                                        }),
                                    }),
                                    (0, i.jsx)(o.animated.div, {
                                        className: M.uN,
                                        "data-testid": "discord-web-video-player-controls",
                                        style: {
                                            paddingTop: (0, o.to)(
                                                [nh.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e * e * 20}px`,
                                            ),
                                            paddingBottom: (0, o.to)(
                                                [nh.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e * e * 12}px`,
                                            ),
                                            pointerEvents: (0, o.to)([nh.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                                e < 0.3 ? "none" : "auto",
                                            ),
                                        },
                                        onFocus: function () {
                                            return e3(!0);
                                        },
                                        onBlur: function () {
                                            return e3(!1);
                                        },
                                        children: (0, i.jsx)(N.A, {
                                            videoRef: tx,
                                            playerState: eQ,
                                            animSpring: nh,
                                            visible: nn,
                                            seekForwardEnabled: null == $ || (tx.current?.currentTime ?? 0) + 1 < t1,
                                            hideCaptionBtn: null == z,
                                            hideTranscriptBtn: null == q,
                                            hideFullScreenBtn: eS,
                                            hidePlaybackSpeedBtn: ey,
                                            hideSkipButtons: eN ?? "portrait" === k,
                                            compactTimeDisplay: eC,
                                            size: t2,
                                            downloadUrl: eA,
                                            downloadContentType: eI,
                                            extraButtons: eT,
                                            autoFocus: eD,
                                            keyDownHandlerRef: nI,
                                            volume: tS,
                                            muted: tC,
                                            transcriptEnabled: tO,
                                            captionEnabled: tL,
                                            fullScreenEnabled: tP,
                                            handlePlaybackBtnClick: nl,
                                            handleTranscriptBtnClick: function () {
                                                tb(!tO);
                                            },
                                            handleCaptionBtnClick: function () {
                                                tD(!tL);
                                            },
                                            handleFullScreenBtnClick: function () {
                                                let e = !tP,
                                                    t = (0, I.qf)(tx.current?.parentNode, tx.current);
                                                e && null != t
                                                    ? ((0, I.tl)(t), t.addEventListener(I.Wb, nr), Q?.(!0), t3(u.oA.LG))
                                                    : e ||
                                                      null == t ||
                                                      (t.removeEventListener(I.Wb, nr),
                                                      Q?.(!1),
                                                      (0, I.sP)(t),
                                                      t3(u.oA.MD)),
                                                    tw(e);
                                            },
                                            handleSeekBackBtnClick: ns,
                                            handleSeekForwardBtnClick: na,
                                            autoHideVolumeSlider: eP,
                                            handleControlBarPendingInteraction: td,
                                            onVolumeChange: function (e) {
                                                tN(e), J?.(e);
                                            },
                                            onMutedChange: function (e) {
                                                ty(e), ee?.(e);
                                            },
                                            onVolumeExpandedChange: function (e) {
                                                tR(e);
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        null != ef &&
                            (0, i.jsx)("div", {
                                className: M.MU,
                                children: ef({
                                    playerState: eQ,
                                    isControlBarExpanded: nn,
                                    controlBarAnimationSpring: nh,
                                    videoRef: tx,
                                    isActive: tI,
                                    isVolumeExpanded: tv,
                                }),
                            }),
                        !tI &&
                            (0, i.jsx)("div", {
                                className: M.mF,
                                ref: e9,
                                children: (0, i.jsx)(f.u, { size: "xs", color: "currentColor", className: M.z_ }),
                            }),
                    ],
                }),
            })
        );
    });
