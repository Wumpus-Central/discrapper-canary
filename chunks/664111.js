"use strict";
n.r(t), n.d(t, { default: () => U }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(18005),
    l = n(17928),
    u = n(876230),
    c = n(231723),
    d = n(717421),
    _ = n(939249),
    h = n(289873),
    f = n(782134),
    p = n(113494),
    E = n(834730),
    m = n(964486),
    g = n(775602),
    A = n(607470),
    I = n(475815),
    T = n(718499),
    S = n(23590),
    y = n(671897),
    C = n(565164),
    N = n(275664),
    v = n(408121),
    R = n(984212),
    O = n(739416),
    b = n(931853),
    D = n(90721),
    L = n(920228),
    w = n(838541),
    M = n(375708),
    P = n(834926);
let x = { tension: 250, friction: 5, clamp: !0 },
    k = { visibility: "hidden" },
    U = r.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: s = !1,
                orientation: U = "landscape",
                videoUrlOverride: G,
                alt: F,
                src: V,
                poster: B,
                initialActive: j = !0,
                initialTimeSec: H = 0,
                onProgressUpdate: Y,
                onEnded: W,
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
                onFocusChange: ec,
                onVisibilityChange: ed,
                onSeek: e_,
                renderOverlay: eh,
                renderPersistentOverlay: ef,
                transcriptClassName: ep,
                onHlsInstance: eE,
                onClick: em,
                preload: eg,
                downloadUrl: eA,
                downloadContentType: eI,
                extraButtons: eT,
                hideFullScreenBtn: eS = !1,
                hideSkipButtons: ey,
                compactTimeDisplay: eC = !1,
                hidePlaybackSpeedBtn: eN = !1,
                getPlaybackBlockedMessage: ev,
                progressClassName: eR,
                pauseOnLostVisibility: eO = !1,
                persistTimeline: eb = !1,
                persistPlayhead: eD = !0,
                autoFocus: eL = !1,
                autoHideVolumeSlider: ew = !1,
                timelineIndicatorConfig: eM,
                scrubPreviewVttUrl: eP,
                scrubPreviewImageUrl: ex,
                loadingSpinnerPosition: ek = "top-left",
                crossOrigin: eU = "anonymous",
                withVideoHalo: eG = !1,
                objectFit: eF = "contain",
                minWidth: eV = 240,
                minHeight: eB = 180,
                muxContentMetadata: ej,
                awaitMuxReady: eH = !1,
                playerRef: eY,
            } = e,
            eW = G ?? V,
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
            [tu, tc] = r.useState(!1),
            td = r.useRef(!1),
            t_ = r.useRef(!1),
            th = r.useRef(!1),
            tf = r.useRef(!1),
            [tp, tE] = r.useState(!0),
            tm = r.useRef(!0),
            tg = r.useRef(null),
            tA = r.useRef(null),
            [tI, tT] = r.useState(s || j),
            [tS, ty] = r.useState(et),
            [tC, tN] = r.useState(en),
            [tv, tR] = r.useState(!ew),
            [tO, tb] = r.useState(!1),
            [tD, tL] = r.useState(!1),
            [tw, tM] = r.useState(!1),
            tP = (0, l.bG)([g.Ay], () => g.Ay.useReducedMotion),
            tx = (0, r.useRef)(null),
            tk = (0, r.useRef)(null),
            tU = (0, r.useRef)(null),
            tG = r.useRef(!0),
            [tF, tV] = r.useState(null),
            tB = r.useRef(null),
            tj = (0, C.z5)(tI, tB, eP, ex),
            tH = r.useCallback(() => tx.current?.currentTime ?? null, []);
        (0, D.A)({ videoRef: tx, canvasRef: tk, enabled: tI && eG && !tP, canvasWidth: 32, canvasHeight: 18 });
        let tY = r.useCallback(
                (e, t) => {
                    K?.(e, t);
                },
                [K],
            ),
            { isHlsActive: tW, hlsRef: tK } = (0, T.Ay)(tx, {
                src: eW,
                initialTimeSec: H,
                onError: tY,
                onHlsInstance: eE,
                crossOrigin: eU,
            }),
            { isReady: t$ } = (0, S.A)({ videoRef: tx, hlsRef: tK, contentMetadata: ej, isHls: tW }),
            tz = eH && !t$ && !tW,
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
                            tV(null), tT(!0), tx.current.play();
                            break;
                        case u.Q6.PAUSED:
                            (td.current = !1), tx.current.pause(), (tm.current = !1);
                            break;
                        case u.Q6.ENDED:
                            tb(!1);
                    }
            },
            [X],
        );
        r.useEffect(() => {
            if (!eO) return;
            let e = null != n && (n === c.ip.HIDDEN || n === c.ip.EXITING || n === c.ip.EXITED),
                t = null != n && eZ && !eq,
                i = ez && !e$;
            if ((e || t || i) && null != tx.current && eQ === u.Q6.PLAYING) {
                let n = e || t ? u.KB.VISIBILITY : u.KB.FOCUS;
                tV(n), t4(u.Q6.PAUSED, n);
            }
        }, [eO, n, e$, ez, eq, eZ, eQ, t4]),
            (0, L.A)({
                videoRef: tx,
                enabled: eO,
                onPipPause: () => {
                    tV(u.KB.PICTURE_IN_PICTURE), t4(u.Q6.PAUSED, u.KB.PICTURE_IN_PICTURE);
                },
                onHiddenPause: () => {
                    tV(u.KB.FOCUS), t4(u.Q6.PAUSED, u.KB.FOCUS);
                },
            }),
            r.useEffect(() => {
                ez && ec?.(e$, eQ);
            }, [e$, ez, eQ, ec]),
            r.useEffect(() => {
                eZ && ed?.(eq, eQ);
            }, [eq, eZ, eQ, ed]);
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
                null == e || (0, I._U)(e) || (e.removeEventListener(I.Wb, nr), tM(!1), ni.current?.(!1), t3(u.oA.MD));
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
                        tV(u.KB.USER), t4(u.Q6.PAUSED, u.KB.USER);
                        break;
                    default:
                        t4(u.Q6.PLAYING, u.KB.USER);
                }
        }
        let nu = (e) => {
                null != em ? em(e) : (tT(!0), nl());
            },
            nc = r.useCallback(() => {
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
            if (null == tU.current) return;
            let e = tU.current;
            return (
                e.addEventListener("load", nc),
                () => {
                    null != e && e.removeEventListener("load", nc);
                }
            );
        }, [nc]);
        let nd = (e) => {
            if (null != tx.current) {
                if (ti === u.h$.BUFFERING) {
                    let e = null != tA.current ? performance.now() - tA.current : null;
                    eu?.(e);
                } else if (ti === u.h$.LOADING) {
                    let e = null != tg.current ? performance.now() - tg.current : null;
                    ea?.(e);
                }
                tr(u.h$.READY), eQ === u.Q6.PLAYING && (td.current || t4(u.Q6.PLAYING, u.KB.BUFFERING_RECOVERY));
            }
        };
        function n_(e) {
            if ((no(e), eQ === u.Q6.ENDED && !t_.current)) {
                let t = tx.current?.duration;
                (null == t || Number.isNaN(t) || e < t) && t4(u.Q6.PLAYING, u.KB.USER);
            }
        }
        let [{ controlBarAnimSpring: nh }, nf] = (0, d.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: x,
                onStart: () => {
                    tE(!1);
                },
                onRest: () => {
                    tE(!0);
                },
            })),
            np = (0, r.useRef)(null),
            [{ captionHeightSpring: nE }, nm] = (0, d.z)(() => ({ from: { captionHeightSpring: 0 }, config: x }));
        r.useEffect(
            () => (
                nm({ captionHeightSpring: tD && null != tq ? (np.current?.clientHeight ?? 0) : 0, immediate: tP }),
                () => {
                    nE.stop();
                }
            ),
            [tD, nm, tP, tq, nE],
        ),
            r.useEffect(
                () => (
                    nf({ controlBarAnimSpring: nn || tu ? 1 : 0, immediate: tP }),
                    () => {
                        nh.stop();
                    }
                ),
                [nn, nf, tP, tu, nh],
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
                eY,
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
                className: a()(P.W6, { [P.nZ]: !tI }),
                style: { minWidth: eV, minHeight: eB },
                "data-fullscreen": tw,
                "data-testid": "discord-web-video-player-container",
                tabIndex: tI ? -1 : 0,
                focusProps: tI ? void 0 : { ringTarget: e9 },
                onMouseEnter: function () {
                    e1(!0), t7(!1), (t9.current = performance.now()), null != t8.current && clearTimeout(t8.current);
                },
                onMouseLeave: function () {
                    e1(!1), t7(!1);
                },
                "aria-label": tI ? void 0 : M.intl.string(M.t.RscU7I),
                onClick: tI ? void 0 : nu,
                onMouseMove: nt,
                children: (0, i.jsxs)("div", {
                    className: a()(P.NS, { [P.DO]: "portrait" === U, [P.r7]: "landscape" === U }),
                    tabIndex: -1,
                    onKeyDown: nT,
                    style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                    children: [
                        eG && !tP && (0, i.jsx)("canvas", { ref: tk, className: P.Xm }),
                        ng && Z?.({ replay: nA }),
                        (0, i.jsxs)(A.A, {
                            ref: (e) => {
                                (tx.current = e),
                                    (eX.current = e),
                                    "function" == typeof t ? t(e) : null != t && (t.current = e);
                            },
                            autoPlay: s,
                            alt: F,
                            playsInline: !0,
                            mediaLayoutType: tw ? w.dG.STATIC : w.dG.RESPONSIVE,
                            className: a()({ [P.R]: ng, [P.IR]: !0, [P.FP]: "cover" === eF && !tw }),
                            controls: !1,
                            poster: B,
                            preload: tI ? eg : "none",
                            disablePictureInPicture: !0,
                            "data-testid": "discord-web-video-player-video",
                            onTimeUpdate: function (e) {
                                null != tx.current &&
                                    (Y?.(tx.current.currentTime, tx.current.duration),
                                    ts.current || e8((tx.current.currentTime / tx.current.duration) * 100));
                            },
                            onEnded: function (e) {
                                tr(u.h$.READY), W?.(), t_.current || t4(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE);
                            },
                            onLoadedData: function (e) {
                                if (ti === u.h$.LOADING) {
                                    let e = null != tg.current ? performance.now() - tg.current : null;
                                    ea?.(e), tr(u.h$.READY);
                                }
                            },
                            onLoadedMetadata: function (e) {
                                if (null == tx.current) return;
                                H > 0 && !tW && no(H, !1);
                                let t = ei?.() ?? tS,
                                    n = er?.() ?? tC;
                                t !== tS && ty(t), n !== tC && tN(n), (tx.current.volume = n ? 0 : t);
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
                            onCanPlay: nd,
                            onCanPlayThrough: nd,
                            onSeeked: function () {
                                (ts.current = !1),
                                    (ta.current = null),
                                    null != tx.current && e8((tx.current.currentTime / tx.current.duration) * 100);
                            },
                            onAbort: function () {
                                return tY(u.SB.ABORT);
                            },
                            onError: function () {
                                return tY(u.SB.ERROR);
                            },
                            onEmptied: function () {
                                return tY(u.SB.EMPTIED);
                            },
                            onStalled: function () {
                                return tY(u.SB.STALLED);
                            },
                            onClick: nu,
                            crossOrigin: eU ?? void 0,
                            children: [
                                null != z &&
                                    (0, i.jsx)("track", {
                                        ref: tU,
                                        src: z,
                                        label: "English",
                                        kind: "captions",
                                        srcLang: "en",
                                        default: !0,
                                    }),
                                null != eP && (0, i.jsx)("track", { ref: tB, src: eP, kind: "metadata" }),
                                !tW &&
                                    !tz &&
                                    (0, i.jsx)("source", {
                                        onError: function () {
                                            return tY(u.SB.SOURCE_ERROR);
                                        },
                                        src: eW,
                                    }),
                            ],
                        }),
                        ti !== u.h$.READY &&
                            eQ === u.Q6.PLAYING &&
                            null != eW &&
                            (0, i.jsx)("span", {
                                className: a()(P.S, { [P.F]: "center" === ek }),
                                "data-testid": "discord-web-video-player-loading-spinner",
                                children: (0, i.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                            }),
                        (0, i.jsx)(b.A, {
                            message: eK({ hasVideoAsset: null != eW, playerState: eQ, pauseReason: tF }),
                            showOverlay: null == eW,
                        }),
                        null != eh &&
                            (0, i.jsx)(o.animated.div, {
                                className: P.MU,
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
                                        children: (0, i.jsx)("div", { className: P.BG }),
                                    }),
                                    (0, i.jsx)(o.animated.div, {
                                        className: a()(P.xr, ep, { [P.MZ]: "portrait" === U }),
                                        "data-testid": "discord-web-video-player-transcript",
                                        style: { marginBottom: (0, o.to)([nh, nE], (e, t) => `${e * t6[t2] + t}px`) },
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
                                className: P.Jp,
                                style: {
                                    opacity: (0, o.to)([nh.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                },
                            }),
                        (0, i.jsx)(
                            "div",
                            {
                                className: a()(P.yf, {
                                    [P.ZH]: tf.current && eQ === u.Q6.PLAYING,
                                    [P.v7]: tf.current && eQ === u.Q6.PAUSED,
                                }),
                                style: { "--custom-play-pause-pop-ms": "1000ms" },
                                children:
                                    eQ === u.Q6.PLAYING
                                        ? (0, i.jsx)(f.u, { className: P.PK })
                                        : (0, i.jsx)(p.E, { className: P.PK }),
                            },
                            eQ,
                        ),
                        tD &&
                            null != tq &&
                            !ng &&
                            (0, i.jsx)(o.animated.div, {
                                className: P.o$,
                                ref: np,
                                "data-testid": "discord-web-video-player-captions",
                                style: {
                                    translateY: (0, o.to)(
                                        [nh.to({ range: [0, 1], output: [-20, -t6[t2]] })],
                                        (e) => `${e}px`,
                                    ),
                                },
                                children: (0, i.jsx)(E.E, {
                                    variant: "text-lg/semibold",
                                    color: "always-white",
                                    className: P.qh,
                                    children: tq.text,
                                }),
                            }),
                        tI &&
                            (0, i.jsxs)(o.animated.div, {
                                className: P.r8,
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
                                            style: nn || tu || eb ? void 0 : k,
                                            children: (0, i.jsx)(N.Ay, {
                                                percent: null != e5 ? e5 : e6,
                                                animate:
                                                    !0 !== tG.current &&
                                                    !te &&
                                                    eQ === u.Q6.PLAYING &&
                                                    tJ &&
                                                    ti === u.h$.READY,
                                                interactionEnabled: tp && t1 > 0,
                                                backgroundColor: nn || eb ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                playerState: eQ,
                                                preloadedBuffers: nn ? to : void 0,
                                                durationSec: tX > 0 ? tX : +!tJ,
                                                isFullyVisible: nn && tp,
                                                maxSeekableTime: null != $ && t1 > 0 ? t1 : void 0,
                                                progressClassName: eR,
                                                persistPlayhead: eD,
                                                onClick: n_,
                                                onScrubBack: ns,
                                                onScrubForward: na,
                                                onDragStateChange: function (e) {
                                                    if (((t_.current = e), tc(e), e))
                                                        (td.current = eQ === u.Q6.PLAYING),
                                                            (th.current = eQ === u.Q6.ENDED),
                                                            td.current
                                                                ? tx.current?.pause()
                                                                : th.current && t4(u.Q6.PAUSED, u.KB.SEEK);
                                                    else {
                                                        let e = tx.current,
                                                            t =
                                                                null != e &&
                                                                !Number.isNaN(e.duration) &&
                                                                e.currentTime >= e.duration;
                                                        td.current
                                                            ? ((td.current = !1),
                                                              t ? t4(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE) : e?.play())
                                                            : th.current
                                                              ? ((th.current = !1),
                                                                t
                                                                    ? t4(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE)
                                                                    : t4(u.Q6.PLAYING, u.KB.USER))
                                                              : t && t4(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE);
                                                    }
                                                },
                                                indicatorConfig: eM,
                                                scrubPreviewCues: tj,
                                                onIndicatorSeek: n_,
                                                getCurrentTimeSec: tH,
                                                "data-testid": "discord-web-video-player-timeline",
                                            }),
                                        }),
                                    }),
                                    (0, i.jsx)(o.animated.div, {
                                        className: P.uN,
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
                                        children: (0, i.jsx)(y.A, {
                                            videoRef: tx,
                                            playerState: eQ,
                                            animSpring: nh,
                                            visible: nn,
                                            seekForwardEnabled: null == $ || (tx.current?.currentTime ?? 0) + 1 < t1,
                                            hideCaptionBtn: null == z,
                                            hideTranscriptBtn: null == q,
                                            hideFullScreenBtn: eS,
                                            hidePlaybackSpeedBtn: eN,
                                            hideSkipButtons: ey ?? "portrait" === U,
                                            compactTimeDisplay: eC,
                                            size: t2,
                                            downloadUrl: eA,
                                            downloadContentType: eI,
                                            extraButtons: eT,
                                            autoFocus: eL,
                                            keyDownHandlerRef: nI,
                                            volume: tS,
                                            muted: tC,
                                            transcriptEnabled: tO,
                                            captionEnabled: tD,
                                            fullScreenEnabled: tw,
                                            handlePlaybackBtnClick: nl,
                                            handleTranscriptBtnClick: function () {
                                                tb(!tO);
                                            },
                                            handleCaptionBtnClick: function () {
                                                tL(!tD);
                                            },
                                            handleFullScreenBtnClick: function () {
                                                let e = !tw,
                                                    t = (0, I.qf)(tx.current?.parentNode, tx.current);
                                                e && null != t
                                                    ? ((0, I.tl)(t), t.addEventListener(I.Wb, nr), Q?.(!0), t3(u.oA.LG))
                                                    : e ||
                                                      null == t ||
                                                      (t.removeEventListener(I.Wb, nr),
                                                      Q?.(!1),
                                                      (0, I.sP)(t),
                                                      t3(u.oA.MD)),
                                                    tM(e);
                                            },
                                            handleSeekBackBtnClick: ns,
                                            handleSeekForwardBtnClick: na,
                                            autoHideVolumeSlider: ew,
                                            handleControlBarPendingInteraction: tc,
                                            onVolumeChange: function (e) {
                                                ty(e), J?.(e);
                                            },
                                            onMutedChange: function (e) {
                                                tN(e), ee?.(e);
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
                                className: P.MU,
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
                                className: P.mF,
                                ref: e9,
                                children: (0, i.jsx)(f.u, { size: "xs", color: "currentColor", className: P.z_ }),
                            }),
                    ],
                }),
            })
        );
    });
