"use strict";
n.r(t), n.d(t, { default: () => x }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(580929),
    o = n(17928),
    d = n(876230),
    c = n(231723),
    u = n(717421),
    _ = n(939249),
    E = n(289873),
    A = n(782134),
    h = n(113494),
    I = n(834730),
    f = n(964486),
    p = n(775602),
    T = n(607470),
    m = n(475815),
    g = n(718499),
    S = n(23590),
    N = n(671897),
    C = n(565164),
    O = n(275664),
    R = n(408121),
    L = n(984212),
    D = n(739416),
    y = n(931853),
    v = n(90721),
    b = n(920228),
    M = n(838541),
    P = n(375708),
    U = n(834926);
let w = { tension: 250, friction: 5, clamp: !0 },
    G = { visibility: "hidden" },
    x = r.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: x = "landscape",
                videoUrlOverride: k,
                alt: F,
                src: V,
                poster: B,
                initialActive: H = !0,
                initialTimeSec: j = 0,
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
                onLoadStart: ea,
                onLoadEnd: es,
                onFirstFrame: el,
                onBufferingStart: eo,
                onBufferingEnd: ed,
                onFocusChange: ec,
                onVisibilityChange: eu,
                onSeek: e_,
                renderOverlay: eE,
                renderPersistentOverlay: eA,
                transcriptClassName: eh,
                onHlsInstance: eI,
                onClick: ef,
                preload: ep,
                downloadUrl: eT,
                downloadContentType: em,
                extraButtons: eg,
                hideFullScreenBtn: eS = !1,
                hideSkipButtons: eN,
                compactTimeDisplay: eC = !1,
                hidePlaybackSpeedBtn: eO = !1,
                getPlaybackBlockedMessage: eR,
                progressClassName: eL,
                pauseOnLostVisibility: eD = !1,
                persistTimeline: ey = !1,
                persistPlayhead: ev = !0,
                autoFocus: eb = !1,
                autoHideVolumeSlider: eM = !1,
                timelineIndicatorConfig: eP,
                scrubPreviewVttUrl: eU,
                scrubPreviewImageUrl: ew,
                loadingSpinnerPosition: eG = "top-left",
                crossOrigin: ex = "anonymous",
                withVideoHalo: ek = !1,
                objectFit: eF = "contain",
                minWidth: eV = 240,
                minHeight: eB = 180,
                muxContentMetadata: eH,
                awaitMuxReady: ej = !1,
                playerRef: eW,
            } = e,
            eY = k ?? V,
            eK = eR ?? y.u,
            { focused: e$, focusedChanged: ez } = (0, D.A7)(),
            { visible: eq, visibleChanged: eZ, targetRef: eX } = (0, D.O7)(),
            [eQ, eJ] = r.useState(a ? d.Q6.PLAYING : d.Q6.PAUSED),
            [e0, e1] = r.useState(!1),
            [e2, e3] = r.useState(!1),
            [e6, e4] = r.useState(0),
            [e7, e5] = r.useState(null),
            e8 = r.useCallback((e) => {
                e5(null), e4(e);
            }, []),
            e9 = r.useRef(null),
            [te, tt] = r.useState(!1),
            tn = r.useRef(null),
            [ti, tr] = r.useState(d.h$.LOADING),
            ta = r.useRef(!1),
            ts = r.useRef(null),
            [tl, to] = r.useState([]),
            [td, tc] = r.useState(!1),
            tu = r.useRef(!1),
            t_ = r.useRef(!1),
            tE = r.useRef(!1),
            tA = r.useRef(!1),
            [th, tI] = r.useState(!0),
            tf = r.useRef(!0),
            tp = r.useRef(null),
            tT = r.useRef(null),
            [tm, tg] = r.useState(a || H),
            [tS, tN] = r.useState(et),
            [tC, tO] = r.useState(en),
            [tR, tL] = r.useState(!eM),
            [tD, ty] = r.useState(!1),
            [tv, tb] = r.useState(!1),
            [tM, tP] = r.useState(!1),
            tU = (0, o.bG)([p.Ay], () => p.Ay.useReducedMotion),
            tw = (0, r.useRef)(null),
            tG = (0, r.useRef)(null),
            tx = (0, r.useRef)(null),
            tk = r.useRef(!0),
            [tF, tV] = r.useState(null),
            tB = r.useRef(null),
            tH = (0, C.z5)(tm, tB, eU, ew),
            tj = r.useCallback(() => tw.current?.currentTime ?? null, []);
        (0, v.A)({ videoRef: tw, canvasRef: tG, enabled: tm && ek && !tU, canvasWidth: 32, canvasHeight: 18 });
        let tW = r.useCallback(
                (e, t) => {
                    K?.(e, t);
                },
                [K],
            ),
            { isHlsActive: tY, hls: tK } = (0, g.Ay)(tw, {
                src: eY,
                initialTimeSec: j,
                onError: tW,
                onHlsInstance: eI,
                crossOrigin: ex,
            }),
            { isReady: t$ } = (0, S.A)({ videoRef: tw, hls: tK, contentMetadata: eH, isHls: tY }),
            tz = ej && !t$ && !tY,
            [tq, tZ] = r.useState(null),
            [tX, tQ] = r.useState(0),
            [tJ, t0] = r.useState(!1),
            t1 = $ ?? tw.current?.duration ?? 0,
            [t2, t3] = r.useState(d.oA.MD),
            t6 = { [d.oA.MD]: 56, [d.oA.LG]: 64 };
        (0, f.u5)(() => {
            tk.current && (tk.current = !1);
        });
        let t4 = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tA.current = !0), eJ(e), X?.(e, t), null != tw.current))
                    switch (e) {
                        case d.Q6.PLAYING:
                            tV(null), tg(!0), tw.current.play();
                            break;
                        case d.Q6.PAUSED:
                            (tu.current = !1), tw.current.pause(), (tf.current = !1);
                            break;
                        case d.Q6.ENDED:
                            ty(!1);
                    }
            },
            [X],
        );
        r.useEffect(() => {
            if (!eD) return;
            let e = null != n && (n === c.ip.HIDDEN || n === c.ip.EXITING || n === c.ip.EXITED),
                t = null != n && eZ && !eq,
                i = ez && !e$;
            if ((e || t || i) && null != tw.current && eQ === d.Q6.PLAYING) {
                let n = e || t ? d.KB.VISIBILITY : d.KB.FOCUS;
                tV(n), t4(d.Q6.PAUSED, n);
            }
        }, [eD, n, e$, ez, eq, eZ, eQ, t4]),
            (0, b.A)({
                videoRef: tw,
                enabled: eD,
                onPipPause: () => {
                    tV(d.KB.PICTURE_IN_PICTURE), t4(d.Q6.PAUSED, d.KB.PICTURE_IN_PICTURE);
                },
                onHiddenPause: () => {
                    tV(d.KB.FOCUS), t4(d.Q6.PAUSED, d.KB.FOCUS);
                },
            }),
            r.useEffect(() => {
                ez && ec?.(e$, eQ);
            }, [e$, ez, eQ, ec]),
            r.useEffect(() => {
                eZ && eu?.(eq, eQ);
            }, [eq, eZ, eQ, eu]);
        let [t7, t5] = r.useState(!1),
            t8 = r.useRef(null),
            t9 = r.useRef(0);
        r.useLayoutEffect(() => {
            t9.current = performance.now();
        }, []);
        let ne = r.useCallback(() => {
                switch ((null != t8.current && clearTimeout(t8.current), eQ)) {
                    case d.Q6.PLAYING:
                        t8.current = setTimeout(
                            () => {
                                t5(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - t9.current)),
                        );
                    case d.Q6.PAUSED:
                    case d.Q6.ENDED:
                }
            }, [eQ]),
            nt = r.useCallback(() => {
                t5(!1), (t9.current = performance.now()), ne();
            }, [ne]);
        r.useEffect(() => {
            if (eQ !== d.Q6.PLAYING) {
                t5(!1), null != t8.current && clearTimeout(t8.current);
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
        let nn = !t7 && (e2 || e0 || eQ === d.Q6.ENDED),
            ni = r.useRef(Q);
        ni.current = Q;
        let nr = r.useCallback(() => {
                let e = (0, m.qf)(tw.current?.parentNode, tw.current);
                null == e || (0, m._U)(e) || (e.removeEventListener(m.Wb, nr), tP(!1), ni.current?.(!1), t3(d.oA.MD));
            }, []),
            na = () => {
                null == tw.current ||
                    (nl(Math.max((ts.current ?? tw.current.currentTime) - 10, 0)),
                    eQ === d.Q6.ENDED && t4(d.Q6.PAUSED, d.KB.SEEK));
            },
            ns = () => {
                if (null == tw.current) return;
                let e = Math.min((ts.current ?? tw.current.currentTime) + 10, t1);
                nl(e), eQ !== d.Q6.ENDED && e >= tw.current.duration && t4(d.Q6.ENDED, d.KB.SEEK);
            };
        r.useEffect(() => {
            let e = tw.current;
            return () => {
                let t = (0, m.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(m.Wb, nr);
            };
        }, [nr]);
        let nl = r.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == tw.current) return;
                let n = tw.current.currentTime;
                (ts.current = e),
                    e5((e / (tw.current.duration ?? 1)) * 100),
                    tt(!0),
                    null != tn.current && clearTimeout(tn.current),
                    (tn.current = setTimeout(() => {
                        tt(!1), (tn.current = null);
                    }, 100)),
                    (ta.current = !0),
                    (tw.current.currentTime = e),
                    t && e_?.(n, e);
            },
            [e_],
        );
        function no() {
            if (null != tw.current)
                switch (eQ) {
                    case d.Q6.ENDED:
                        nl(0), t4(d.Q6.PLAYING, d.KB.USER);
                        break;
                    case d.Q6.PLAYING:
                        tV(d.KB.USER), t4(d.Q6.PAUSED, d.KB.USER);
                        break;
                    default:
                        t4(d.Q6.PLAYING, d.KB.USER);
                }
        }
        let nd = (e) => {
                null != ef ? ef(e) : (tg(!0), no());
            },
            nc = r.useCallback(() => {
                if (null == tw.current || 0 === tw.current.textTracks.length) return;
                let e = tw.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, L.C)(n) &&
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
            if (null == tx.current) return;
            let e = tx.current;
            return (
                e.addEventListener("load", nc),
                () => {
                    null != e && e.removeEventListener("load", nc);
                }
            );
        }, [nc]);
        let nu = (e) => {
            if (null != tw.current) {
                if (ti === d.h$.BUFFERING) {
                    let e = null != tT.current ? performance.now() - tT.current : null;
                    ed?.(e);
                } else if (ti === d.h$.LOADING) {
                    let e = null != tp.current ? performance.now() - tp.current : null;
                    es?.(e);
                }
                tr(d.h$.READY), eQ === d.Q6.PLAYING && (tu.current || t4(d.Q6.PLAYING, d.KB.BUFFERING_RECOVERY));
            }
        };
        function n_(e) {
            if ((nl(e), eQ === d.Q6.ENDED && !t_.current)) {
                let t = tw.current?.duration;
                (null == t || Number.isNaN(t) || e < t) && t4(d.Q6.PLAYING, d.KB.USER);
            }
        }
        let [{ controlBarAnimSpring: nE }, nA] = (0, u.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: w,
                onStart: () => {
                    tI(!1);
                },
                onRest: () => {
                    tI(!0);
                },
            })),
            nh = (0, r.useRef)(null),
            [{ captionHeightSpring: nI }, nf] = (0, u.z)(() => ({ from: { captionHeightSpring: 0 }, config: w }));
        r.useEffect(
            () => (
                nf({ captionHeightSpring: tv && null != tq ? (nh.current?.clientHeight ?? 0) : 0, immediate: tU }),
                () => {
                    nI.stop();
                }
            ),
            [tv, nf, tU, tq, nI],
        ),
            r.useEffect(
                () => (
                    nA({ controlBarAnimSpring: nn || td ? 1 : 0, immediate: tU }),
                    () => {
                        nE.stop();
                    }
                ),
                [nn, nA, tU, td, nE],
            );
        let np = eQ === d.Q6.ENDED && null != Z,
            nT = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KB.USER;
                    null != tw.current && (nl(0), t4(d.Q6.PLAYING, e));
                },
                [nl, t4],
            ),
            nm = r.useRef(null),
            ng = r.useCallback(
                (e) => {
                    nt(), nm.current?.(e.nativeEvent);
                },
                [nt],
            );
        return (
            r.useImperativeHandle(
                eW,
                () => ({
                    play: () => {
                        t4(d.Q6.PLAYING, d.KB.USER);
                    },
                    pause: () => {
                        t4(d.Q6.PAUSED, d.KB.USER);
                    },
                    seek: (e) => {
                        nl(e);
                    },
                }),
                [t4, nl],
            ),
            (0, i.jsx)(_.D, {
                className: s()(U.W6, { [U.nZ]: !tm }),
                style: { minWidth: eV, minHeight: eB },
                "data-fullscreen": tM,
                "data-testid": "discord-web-video-player-container",
                tabIndex: tm ? -1 : 0,
                focusProps: tm ? void 0 : { ringTarget: e9 },
                onMouseEnter: function () {
                    e1(!0), t5(!1), (t9.current = performance.now()), null != t8.current && clearTimeout(t8.current);
                },
                onMouseLeave: function () {
                    e1(!1), t5(!1);
                },
                "aria-label": tm ? void 0 : P.intl.string(P.t.RscU7I),
                onClick: tm ? void 0 : nd,
                onMouseMove: nt,
                children: (0, i.jsxs)("div", {
                    className: s()(U.NS, { [U.DO]: "portrait" === x, [U.r7]: "landscape" === x }),
                    tabIndex: -1,
                    onKeyDown: ng,
                    style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                    children: [
                        ek && !tU && (0, i.jsx)("canvas", { ref: tG, className: U.Xm }),
                        np && Z?.({ replay: nT }),
                        (0, i.jsxs)(T.A, {
                            ref: (e) => {
                                (tw.current = e),
                                    (eX.current = e),
                                    "function" == typeof t ? t(e) : null != t && (t.current = e);
                            },
                            autoPlay: a,
                            alt: F,
                            playsInline: !0,
                            mediaLayoutType: tM ? M.dG.STATIC : M.dG.RESPONSIVE,
                            className: s()({ [U.R]: np, [U.IR]: !0, [U.FP]: "cover" === eF && !tM }),
                            controls: !1,
                            poster: B,
                            preload: tm ? ep : "none",
                            disablePictureInPicture: !0,
                            "data-testid": "discord-web-video-player-video",
                            onTimeUpdate: function (e) {
                                null != tw.current &&
                                    (W?.(tw.current.currentTime, tw.current.duration),
                                    ta.current || e8((tw.current.currentTime / tw.current.duration) * 100));
                            },
                            onEnded: function (e) {
                                tr(d.h$.READY), Y?.(), t_.current || t4(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                            },
                            onLoadedData: function (e) {
                                if (ti === d.h$.LOADING) {
                                    let e = null != tp.current ? performance.now() - tp.current : null;
                                    es?.(e), tr(d.h$.READY);
                                }
                            },
                            onLoadedMetadata: function (e) {
                                if (null == tw.current) return;
                                j > 0 && !tY && nl(j, !1);
                                let t = ei?.() ?? tS,
                                    n = er?.() ?? tC;
                                t !== tS && tN(t), n !== tC && tO(n), (tw.current.volume = n ? 0 : t);
                                let i = tw.current.duration;
                                i > 0 && isFinite(i) && tQ(i), t0(!0);
                            },
                            onLoadStart: function () {
                                (tp.current = performance.now()), ea?.();
                            },
                            onPlaying: function () {
                                tf.current && (el?.(performance.now()), (tf.current = !1));
                            },
                            onWaiting: function (e) {
                                (tT.current = performance.now()), eo?.(), tr(d.h$.BUFFERING);
                            },
                            onProgress: function (e) {
                                if (null == tw.current) return;
                                let t = [];
                                for (let e = 0; e < tw.current.buffered.length; e++) {
                                    let n = tw.current.buffered.start(e),
                                        i = tw.current.buffered.end(e);
                                    i - n < 1 ||
                                        t.push({ start: n / tw.current.duration, size: (i - n) / tw.current.duration });
                                }
                                to(t);
                            },
                            onCanPlay: nu,
                            onCanPlayThrough: nu,
                            onSeeked: function () {
                                (ta.current = !1),
                                    (ts.current = null),
                                    null != tw.current && e8((tw.current.currentTime / tw.current.duration) * 100);
                            },
                            onAbort: function () {
                                return tW(d.SB.ABORT);
                            },
                            onError: function () {
                                return tW(d.SB.ERROR);
                            },
                            onEmptied: function () {
                                return tW(d.SB.EMPTIED);
                            },
                            onStalled: function () {
                                return tW(d.SB.STALLED);
                            },
                            onClick: nd,
                            crossOrigin: ex ?? void 0,
                            children: [
                                null != z &&
                                    (0, i.jsx)("track", {
                                        ref: tx,
                                        src: z,
                                        label: "English",
                                        kind: "captions",
                                        srcLang: "en",
                                        default: !0,
                                    }),
                                null != eU && (0, i.jsx)("track", { ref: tB, src: eU, kind: "metadata" }),
                                !tY &&
                                    !tz &&
                                    (0, i.jsx)("source", {
                                        onError: function () {
                                            return tW(d.SB.SOURCE_ERROR);
                                        },
                                        src: eY,
                                    }),
                            ],
                        }),
                        ti !== d.h$.READY &&
                            eQ === d.Q6.PLAYING &&
                            null != eY &&
                            (0, i.jsx)("span", {
                                className: s()(U.S, { [U.F]: "center" === eG }),
                                "data-testid": "discord-web-video-player-loading-spinner",
                                children: (0, i.jsx)(E.y, { type: E.y.Type.WANDERING_CUBES }),
                            }),
                        (0, i.jsx)(y.A, {
                            message: eK({ hasVideoAsset: null != eY, playerState: eQ, pauseReason: tF }),
                            showOverlay: null == eY,
                        }),
                        null != eE &&
                            (0, i.jsx)(l.animated.div, {
                                className: U.MU,
                                style: {
                                    opacity: (0, l.to)([nE.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    visibility: (0, l.to)([nE.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.1 ? "hidden" : "visible",
                                    ),
                                    pointerEvents: (0, l.to)([nE.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                children: eE(),
                            }),
                        tD &&
                            eQ !== d.Q6.ENDED &&
                            null != q &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(_.D, {
                                        onClick: () => {
                                            eQ === d.Q6.PAUSED && t4(d.Q6.PLAYING, d.KB.USER), ty(!1);
                                        },
                                        tabIndex: -1,
                                        children: (0, i.jsx)("div", { className: U.BG }),
                                    }),
                                    (0, i.jsx)(l.animated.div, {
                                        className: s()(U.xr, eh, { [U.MZ]: "portrait" === x }),
                                        "data-testid": "discord-web-video-player-transcript",
                                        style: { marginBottom: (0, l.to)([nE, nI], (e, t) => `${e * t6[t2] + t}px`) },
                                        children: (0, i.jsx)(R.X, {
                                            text: q,
                                            onClose: function () {
                                                ty(!1);
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        tm &&
                            (0, i.jsx)(l.animated.div, {
                                className: U.Jp,
                                style: {
                                    opacity: (0, l.to)([nE.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                },
                            }),
                        (0, i.jsx)(
                            "div",
                            {
                                className: s()(U.yf, {
                                    [U.ZH]: tA.current && eQ === d.Q6.PLAYING,
                                    [U.v7]: tA.current && eQ === d.Q6.PAUSED,
                                }),
                                style: { "--custom-play-pause-pop-ms": "1000ms" },
                                children:
                                    eQ === d.Q6.PLAYING
                                        ? (0, i.jsx)(A.u, { className: U.PK })
                                        : (0, i.jsx)(h.E, { className: U.PK }),
                            },
                            eQ,
                        ),
                        tv &&
                            null != tq &&
                            !np &&
                            (0, i.jsx)(l.animated.div, {
                                className: U.o$,
                                ref: nh,
                                "data-testid": "discord-web-video-player-captions",
                                style: {
                                    translateY: (0, l.to)(
                                        [nE.to({ range: [0, 1], output: [-20, -t6[t2]] })],
                                        (e) => `${e}px`,
                                    ),
                                },
                                children: (0, i.jsx)(I.E, {
                                    variant: "text-lg/semibold",
                                    color: "text-overlay-light",
                                    className: U.qh,
                                    children: tq.text,
                                }),
                            }),
                        tm &&
                            (0, i.jsxs)(l.animated.div, {
                                className: U.r8,
                                style: {
                                    height: (0, l.to)([nE.to({ range: [0, 1], output: [0, t6[t2]] })], (e) => `${e}px`),
                                },
                                children: [
                                    (0, i.jsx)(l.animated.div, {
                                        style: {
                                            transform: (0, l.to)(
                                                [nE.to({ range: [1, 0], output: [0, 1] })],
                                                (e) => `translateY(-${20 * e}px)`,
                                            ),
                                        },
                                        children: (0, i.jsx)("div", {
                                            style: nn || td || ey ? void 0 : G,
                                            children: (0, i.jsx)(O.Ay, {
                                                percent: null != e7 ? e7 : e6,
                                                animate:
                                                    !0 !== tk.current &&
                                                    !te &&
                                                    eQ === d.Q6.PLAYING &&
                                                    tJ &&
                                                    ti === d.h$.READY,
                                                interactionEnabled: th && t1 > 0,
                                                backgroundColor: nn || ey ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                playerState: eQ,
                                                preloadedBuffers: nn ? tl : void 0,
                                                durationSec: tX > 0 ? tX : +!tJ,
                                                isFullyVisible: nn && th,
                                                maxSeekableTime: null != $ && t1 > 0 ? t1 : void 0,
                                                progressClassName: eL,
                                                persistPlayhead: ev,
                                                onClick: n_,
                                                onScrubBack: na,
                                                onScrubForward: ns,
                                                onDragStateChange: function (e) {
                                                    if (((t_.current = e), tc(e), e))
                                                        (tu.current = eQ === d.Q6.PLAYING),
                                                            (tE.current = eQ === d.Q6.ENDED),
                                                            tu.current
                                                                ? tw.current?.pause()
                                                                : tE.current && t4(d.Q6.PAUSED, d.KB.SEEK);
                                                    else {
                                                        let e = tw.current,
                                                            t =
                                                                null != e &&
                                                                !Number.isNaN(e.duration) &&
                                                                e.currentTime >= e.duration;
                                                        tu.current
                                                            ? ((tu.current = !1),
                                                              t ? t4(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE) : e?.play())
                                                            : tE.current
                                                              ? ((tE.current = !1),
                                                                t
                                                                    ? t4(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                    : t4(d.Q6.PLAYING, d.KB.USER))
                                                              : t && t4(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                                                    }
                                                },
                                                indicatorConfig: eP,
                                                scrubPreviewCues: tH,
                                                onIndicatorSeek: n_,
                                                getCurrentTimeSec: tj,
                                                "data-testid": "discord-web-video-player-timeline",
                                            }),
                                        }),
                                    }),
                                    (0, i.jsx)(l.animated.div, {
                                        className: U.uN,
                                        "data-testid": "discord-web-video-player-controls",
                                        style: {
                                            paddingTop: (0, l.to)(
                                                [nE.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e * e * 20}px`,
                                            ),
                                            paddingBottom: (0, l.to)(
                                                [nE.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e * e * 12}px`,
                                            ),
                                            pointerEvents: (0, l.to)([nE.to({ range: [0, 1], output: [0, 1] })], (e) =>
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
                                            videoRef: tw,
                                            playerState: eQ,
                                            animSpring: nE,
                                            visible: nn,
                                            seekForwardEnabled: null == $ || (tw.current?.currentTime ?? 0) + 1 < t1,
                                            hideCaptionBtn: null == z,
                                            hideTranscriptBtn: null == q,
                                            hideFullScreenBtn: eS,
                                            hidePlaybackSpeedBtn: eO,
                                            hideSkipButtons: eN ?? "portrait" === x,
                                            compactTimeDisplay: eC,
                                            size: t2,
                                            downloadUrl: eT,
                                            downloadContentType: em,
                                            extraButtons: eg,
                                            autoFocus: eb,
                                            keyDownHandlerRef: nm,
                                            volume: tS,
                                            muted: tC,
                                            transcriptEnabled: tD,
                                            captionEnabled: tv,
                                            fullScreenEnabled: tM,
                                            handlePlaybackBtnClick: no,
                                            handleTranscriptBtnClick: function () {
                                                ty(!tD);
                                            },
                                            handleCaptionBtnClick: function () {
                                                tb(!tv);
                                            },
                                            handleFullScreenBtnClick: function () {
                                                let e = !tM,
                                                    t = (0, m.qf)(tw.current?.parentNode, tw.current);
                                                e && null != t
                                                    ? ((0, m.tl)(t), t.addEventListener(m.Wb, nr), Q?.(!0), t3(d.oA.LG))
                                                    : e ||
                                                      null == t ||
                                                      (t.removeEventListener(m.Wb, nr),
                                                      Q?.(!1),
                                                      (0, m.sP)(t),
                                                      t3(d.oA.MD)),
                                                    tP(e);
                                            },
                                            handleSeekBackBtnClick: na,
                                            handleSeekForwardBtnClick: ns,
                                            autoHideVolumeSlider: eM,
                                            handleControlBarPendingInteraction: tc,
                                            onVolumeChange: function (e) {
                                                tN(e), J?.(e);
                                            },
                                            onMutedChange: function (e) {
                                                tO(e), ee?.(e);
                                            },
                                            onVolumeExpandedChange: function (e) {
                                                tL(e);
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        null != eA &&
                            (0, i.jsx)("div", {
                                className: U.MU,
                                children: eA({
                                    playerState: eQ,
                                    isControlBarExpanded: nn,
                                    controlBarAnimationSpring: nE,
                                    videoRef: tw,
                                    isActive: tm,
                                    isVolumeExpanded: tR,
                                }),
                            }),
                        !tm &&
                            (0, i.jsx)("div", {
                                className: U.mF,
                                ref: e9,
                                children: (0, i.jsx)(A.u, { size: "xs", color: "currentColor", className: U.z_ }),
                            }),
                    ],
                }),
            })
        );
    });
