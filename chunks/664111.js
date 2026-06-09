"use strict";
n.r(t), n.d(t, { default: () => U }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(922139),
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
    N = n(565164),
    v = n(275664),
    C = n(408121),
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
                src: F,
                poster: V,
                initialActive: B = !0,
                initialTimeSec: H = 0,
                onProgressUpdate: j,
                onEnded: Y,
                onError: W,
                maxSeekableTimeSec: K,
                captionTrackUrl: $,
                transcriptText: z,
                renderEndScreen: q,
                onPlayerStateChange: X,
                onFullscreenChange: Z,
                onVolumeChange: Q,
                onMutedChange: J,
                initialVolume: ee = 0.3,
                initialMuted: et = !1,
                onLoadStart: en,
                onLoadEnd: ei,
                onFirstFrame: er,
                onBufferingStart: es,
                onBufferingEnd: ea,
                onFocusChange: eo,
                onVisibilityChange: el,
                onSeek: eu,
                renderOverlay: ec,
                renderPersistentOverlay: ed,
                transcriptClassName: e_,
                onHlsInstance: eh,
                onClick: ef,
                preload: ep,
                downloadUrl: eE,
                downloadContentType: em,
                extraButtons: eg,
                hideFullScreenBtn: eA = !1,
                hideSkipButtons: eI,
                compactTimeDisplay: eT = !1,
                hidePlaybackSpeedBtn: eS = !1,
                getPlaybackBlockedMessage: ey,
                progressClassName: eN,
                pauseOnLostVisibility: ev = !1,
                persistTimeline: eC = !1,
                persistPlayhead: eR = !0,
                autoFocus: eO = !1,
                autoHideVolumeSlider: eb = !1,
                timelineIndicatorConfig: eD,
                scrubPreviewVttUrl: eL,
                scrubPreviewImageUrl: ew,
                loadingSpinnerPosition: eM = "top-left",
                crossOrigin: eP = "anonymous",
                withVideoHalo: ex = !1,
                objectFit: ek = "contain",
                muxContentMetadata: eU,
                awaitMuxReady: eG = !1,
            } = e,
            eF = G ?? F,
            eV = ey ?? b.u,
            { focused: eB, focusedChanged: eH } = (0, O.A7)(),
            { visible: ej, visibleChanged: eY, targetRef: eW } = (0, O.O7)(),
            [eK, e$] = r.useState(s ? u.Q6.PLAYING : u.Q6.PAUSED),
            [ez, eq] = r.useState(!1),
            [eX, eZ] = r.useState(!1),
            [eQ, eJ] = r.useState(0),
            [e0, e1] = r.useState(null),
            e2 = r.useCallback((e) => {
                e1(null), eJ(e);
            }, []),
            e3 = r.useRef(null),
            [e6, e4] = r.useState(!1),
            e5 = r.useRef(null),
            [e7, e8] = r.useState(u.h$.LOADING),
            e9 = r.useRef(!1),
            te = r.useRef(null),
            [tt, tn] = r.useState([]),
            [ti, tr] = r.useState(!1),
            ts = r.useRef(!1),
            ta = r.useRef(!1),
            to = r.useRef(!1),
            tl = r.useRef(!1),
            [tu, tc] = r.useState(!0),
            td = r.useRef(!0),
            t_ = r.useRef(null),
            th = r.useRef(null),
            [tf, tp] = r.useState(s || B),
            [tE, tm] = r.useState(ee),
            [tg, tA] = r.useState(et),
            [tI, tT] = r.useState(!eb),
            [tS, ty] = r.useState(!1),
            [tN, tv] = r.useState(!1),
            [tC, tR] = r.useState(!1),
            tO = (0, l.bG)([g.A], () => g.A.useReducedMotion),
            tb = (0, r.useRef)(null),
            tD = (0, r.useRef)(null),
            tL = (0, r.useRef)(null),
            tw = r.useRef(!0),
            [tM, tP] = r.useState(null),
            tx = r.useRef(null),
            tk = (0, N.z5)(tf, tx, eL, ew),
            tU = r.useCallback(() => tb.current?.currentTime ?? null, []);
        (0, D.A)({ videoRef: tb, canvasRef: tD, enabled: tf && ex && !tO, canvasWidth: 32, canvasHeight: 18 });
        let tG = r.useCallback(
                (e, t) => {
                    W?.(e, t);
                },
                [W],
            ),
            { isHlsActive: tF, hlsRef: tV } = (0, T.Ay)(tb, {
                src: eF,
                initialTimeSec: H,
                onError: tG,
                onHlsInstance: eh,
                crossOrigin: eP,
            }),
            { isReady: tB } = (0, S.A)({ videoRef: tb, hlsRef: tV, contentMetadata: eU, isHls: tF }),
            tH = eG && !tB && !tF,
            [tj, tY] = r.useState(null),
            [tW, tK] = r.useState(0),
            [t$, tz] = r.useState(!1),
            tq = K ?? tb.current?.duration ?? 0,
            [tX, tZ] = r.useState(u.oA.MD),
            tQ = { [u.oA.MD]: 56, [u.oA.LG]: 64 };
        (0, m.u5)(() => {
            tw.current && (tw.current = !1);
        });
        let tJ = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tl.current = !0), e$(e), X?.(e, t), null != tb.current))
                    switch (e) {
                        case u.Q6.PLAYING:
                            tP(null), tb.current.play();
                            break;
                        case u.Q6.PAUSED:
                            (ts.current = !1), tb.current.pause(), (td.current = !1);
                            break;
                        case u.Q6.ENDED:
                            ty(!1);
                    }
            },
            [X],
        );
        r.useEffect(() => {
            if (!ev) return;
            let e = null != n && (n === c.ip.HIDDEN || n === c.ip.EXITING || n === c.ip.EXITED),
                t = null != n && eY && !ej,
                i = eH && !eB;
            if ((e || t || i) && null != tb.current && eK === u.Q6.PLAYING) {
                let n = e || t ? u.KB.VISIBILITY : u.KB.FOCUS;
                tP(n), tJ(u.Q6.PAUSED, n);
            }
        }, [ev, n, eB, eH, ej, eY, eK, tJ]),
            (0, L.A)({
                videoRef: tb,
                enabled: ev,
                onPipPause: () => {
                    tP(u.KB.PICTURE_IN_PICTURE), tJ(u.Q6.PAUSED, u.KB.PICTURE_IN_PICTURE);
                },
                onHiddenPause: () => {
                    tP(u.KB.FOCUS), tJ(u.Q6.PAUSED, u.KB.FOCUS);
                },
            }),
            r.useEffect(() => {
                eH && eo?.(eB, eK);
            }, [eB, eH, eK, eo]),
            r.useEffect(() => {
                eY && el?.(ej, eK);
            }, [ej, eY, eK, el]);
        let [t0, t1] = r.useState(!1),
            t2 = r.useRef(null),
            t3 = r.useRef(0);
        r.useLayoutEffect(() => {
            t3.current = performance.now();
        }, []);
        let t6 = r.useCallback(() => {
                null != t2.current && clearTimeout(t2.current),
                    eK !== u.Q6.PLAYING ||
                        (t2.current = setTimeout(
                            () => {
                                eK === u.Q6.PLAYING && t1(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - t3.current)),
                        ));
            }, [eK]),
            t4 = r.useCallback(() => {
                t1(!1), (t3.current = performance.now()), t6();
            }, [t6]);
        r.useEffect(() => {
            if (eK !== u.Q6.PLAYING) {
                t1(!1), null != t2.current && clearTimeout(t2.current);
                return;
            }
            return (
                t6(),
                () => {
                    null != t2.current && clearTimeout(t2.current);
                }
            );
        }, [eK, t6]),
            r.useEffect(
                () => () => {
                    null != e5.current && clearTimeout(e5.current);
                },
                [],
            );
        let t5 = !t0 && (eX || ez || eK === u.Q6.ENDED),
            t7 = r.useRef(Z);
        t7.current = Z;
        let t8 = r.useCallback(() => {
                let e = (0, I.qf)(tb.current?.parentNode, tb.current);
                null == e || (0, I._U)(e) || (e.removeEventListener(I.Wb, t8), tR(!1), t7.current?.(!1), tZ(u.oA.MD));
            }, []),
            t9 = () => {
                null == tb.current ||
                    (nt(Math.max((te.current ?? tb.current.currentTime) - 10, 0)),
                    eK === u.Q6.ENDED && tJ(u.Q6.PAUSED, u.KB.SEEK));
            },
            ne = () => {
                if (null == tb.current) return;
                let e = Math.min((te.current ?? tb.current.currentTime) + 10, tq);
                nt(e), eK !== u.Q6.ENDED && e >= tb.current.duration && tJ(u.Q6.ENDED, u.KB.SEEK);
            };
        r.useEffect(() => {
            let e = tb.current;
            return () => {
                let t = (0, I.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(I.Wb, t8);
            };
        }, [t8]);
        let nt = r.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tb.current) return;
                    let n = tb.current.currentTime;
                    (te.current = e),
                        e1((e / (tb.current.duration ?? 1)) * 100),
                        e4(!0),
                        null != e5.current && clearTimeout(e5.current),
                        (e5.current = setTimeout(() => {
                            e4(!1), (e5.current = null);
                        }, 100)),
                        (e9.current = !0),
                        (tb.current.currentTime = e),
                        t && eu?.(n, e);
                },
                [eu],
            ),
            nn = () => {
                if (null != tb.current)
                    switch (eK) {
                        case u.Q6.ENDED:
                            nt(0), tJ(u.Q6.PLAYING, u.KB.USER);
                            break;
                        case u.Q6.PLAYING:
                            tP(u.KB.USER), tJ(u.Q6.PAUSED, u.KB.USER);
                            break;
                        default:
                            tJ(u.Q6.PLAYING, u.KB.USER);
                    }
            },
            ni = (e) => {
                null != ef ? ef(e) : (tp(!0), nn());
            },
            nr = (e) => {
                tY(e);
            },
            ns = (e) => {
                tY((t) => (t?.id === e.id ? null : t));
            },
            na = r.useCallback(() => {
                if (null == tb.current || 0 === tb.current.textTracks.length) return;
                let e = tb.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, R.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => nr(n)), (n.onexit = () => ns(n)));
                    }
            }, []);
        r.useEffect(() => {
            if (null == tL.current) return;
            let e = tL.current;
            return (
                e.addEventListener("load", na),
                () => {
                    null != e && e.removeEventListener("load", na);
                }
            );
        }, [na]);
        let no = (e) => {
                if (null != tb.current) {
                    if (e7 === u.h$.BUFFERING) {
                        let e = null != th.current ? performance.now() - th.current : null;
                        ea?.(e);
                    } else if (e7 === u.h$.LOADING) {
                        let e = null != t_.current ? performance.now() - t_.current : null;
                        ei?.(e);
                    }
                    e8(u.h$.READY), eK === u.Q6.PLAYING && (ts.current || tJ(u.Q6.PLAYING, u.KB.BUFFERING_RECOVERY));
                }
            },
            nl = (e) => {
                if ((nt(e), eK === u.Q6.ENDED && !ta.current)) {
                    let t = tb.current?.duration;
                    (null == t || Number.isNaN(t) || e < t) && tJ(u.Q6.PLAYING, u.KB.USER);
                }
            },
            [{ controlBarAnimSpring: nu }, nc] = (0, d.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: x,
                onStart: () => {
                    tc(!1);
                },
                onRest: () => {
                    tc(!0);
                },
            })),
            nd = (0, r.useRef)(null),
            [{ captionHeightSpring: n_ }, nh] = (0, d.z)(() => ({ from: { captionHeightSpring: 0 }, config: x }));
        r.useEffect(
            () => (
                nh({ captionHeightSpring: tN && null != tj ? (nd.current?.clientHeight ?? 0) : 0, immediate: tO }),
                () => {
                    n_.stop();
                }
            ),
            [tN, nh, tO, tj, n_],
        ),
            r.useEffect(
                () => (
                    nc({ controlBarAnimSpring: t5 || ti ? 1 : 0, immediate: tO }),
                    () => {
                        nu.stop();
                    }
                ),
                [t5, nc, tO, ti, nu],
            );
        let nf = eK === u.Q6.ENDED && null != q,
            np = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.KB.USER;
                    null != tb.current && (nt(0), tJ(u.Q6.PLAYING, e));
                },
                [nt, tJ],
            ),
            nE = r.useRef(null),
            nm = r.useCallback(
                (e) => {
                    t4(), nE.current?.(e.nativeEvent);
                },
                [t4],
            );
        return (0, i.jsx)(_.D, {
            className: a()(P.W6, { [P.nZ]: !tf }),
            "data-fullscreen": tC,
            "data-testid": "discord-web-video-player-container",
            tabIndex: tf ? -1 : 0,
            focusProps: tf ? void 0 : { ringTarget: e3 },
            onMouseEnter: () => {
                eq(!0), t1(!1), (t3.current = performance.now()), null != t2.current && clearTimeout(t2.current);
            },
            onMouseLeave: () => {
                eq(!1), t1(!1);
            },
            "aria-label": tf ? void 0 : M.intl.string(M.t.RscU7I),
            onClick: tf ? void 0 : ni,
            onMouseMove: t4,
            children: (0, i.jsxs)("div", {
                className: a()(P.NS, { [P.DO]: "portrait" === U, [P.r7]: "landscape" === U }),
                tabIndex: -1,
                onKeyDown: nm,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    ex && !tO && (0, i.jsx)("canvas", { ref: tD, className: P.Xm }),
                    nf && q?.({ replay: np }),
                    (0, i.jsxs)(A.A, {
                        ref: (e) => {
                            (tb.current = e),
                                (eW.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: s,
                        playsInline: !0,
                        mediaLayoutType: tC ? w.dG.STATIC : w.dG.RESPONSIVE,
                        className: a()({ [P.R]: nf, [P.IR]: !0, [P.FP]: "cover" === ek && !tC }),
                        controls: !1,
                        poster: V,
                        preload: tf ? ep : "none",
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != tb.current &&
                                (j?.(tb.current.currentTime, tb.current.duration),
                                e9.current || e2((tb.current.currentTime / tb.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            e8(u.h$.READY), Y?.(), ta.current || tJ(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE);
                        },
                        onLoadedData: (e) => {
                            if (e7 === u.h$.LOADING) {
                                let e = null != t_.current ? performance.now() - t_.current : null;
                                ei?.(e), e8(u.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tb.current) return;
                            H > 0 && !tF && nt(H, !1), tg ? (tb.current.volume = 0) : (tb.current.volume = tE);
                            let t = tb.current.duration;
                            t > 0 && isFinite(t) && tK(t), tz(!0);
                        },
                        onLoadStart: () => {
                            (t_.current = performance.now()), en?.();
                        },
                        onPlaying: () => {
                            td.current && (er?.(performance.now()), (td.current = !1));
                        },
                        onWaiting: (e) => {
                            (th.current = performance.now()), es?.(), e8(u.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == tb.current) return;
                            let t = [];
                            for (let e = 0; e < tb.current.buffered.length; e++) {
                                let n = tb.current.buffered.start(e),
                                    i = tb.current.buffered.end(e);
                                i - n < 1 ||
                                    t.push({ start: n / tb.current.duration, size: (i - n) / tb.current.duration });
                            }
                            tn(t);
                        },
                        onCanPlay: no,
                        onCanPlayThrough: no,
                        onSeeked: () => {
                            (e9.current = !1),
                                (te.current = null),
                                null != tb.current && e2((tb.current.currentTime / tb.current.duration) * 100);
                        },
                        onAbort: () => tG(u.SB.ABORT),
                        onError: () => tG(u.SB.ERROR),
                        onEmptied: () => tG(u.SB.EMPTIED),
                        onStalled: () => tG(u.SB.STALLED),
                        onClick: ni,
                        crossOrigin: eP ?? void 0,
                        children: [
                            null != $ &&
                                (0, i.jsx)("track", {
                                    ref: tL,
                                    src: $,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            null != eL && (0, i.jsx)("track", { ref: tx, src: eL, kind: "metadata" }),
                            !tF &&
                                !tH &&
                                (0, i.jsx)("source", {
                                    onError: () => tG(u.SB.SOURCE_ERROR),
                                    src: eF,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    e7 !== u.h$.READY &&
                        eK === u.Q6.PLAYING &&
                        null != eF &&
                        (0, i.jsx)("span", {
                            className: a()(P.S, { [P.F]: "center" === eM }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, i.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                        }),
                    (0, i.jsx)(b.A, {
                        message: eV({ hasVideoAsset: null != eF, playerState: eK, pauseReason: tM }),
                        showOverlay: null == eF,
                    }),
                    null != ec &&
                        (0, i.jsx)(o.animated.div, {
                            className: P.MU,
                            style: {
                                opacity: (0, o.to)([nu.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, o.to)([nu.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, o.to)([nu.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: ec(),
                        }),
                    tS &&
                        eK !== u.Q6.ENDED &&
                        null != z &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(_.D, {
                                    onClick: () => {
                                        eK === u.Q6.PAUSED && tJ(u.Q6.PLAYING, u.KB.USER), ty(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, i.jsx)("div", { className: P.BG }),
                                }),
                                (0, i.jsx)(o.animated.div, {
                                    className: a()(P.xr, e_, { [P.MZ]: "portrait" === U }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, o.to)([nu, n_], (e, t) => `${e * tQ[tX] + t}px`) },
                                    children: (0, i.jsx)(C.X, {
                                        text: z,
                                        onClose: () => {
                                            ty(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    tf &&
                        (0, i.jsx)(o.animated.div, {
                            className: P.Jp,
                            style: { opacity: (0, o.to)([nu.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                        }),
                    (0, i.jsx)(
                        "div",
                        {
                            className: a()(P.yf, {
                                [P.ZH]: tl.current && eK === u.Q6.PLAYING,
                                [P.v7]: tl.current && eK === u.Q6.PAUSED,
                            }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eK === u.Q6.PLAYING
                                    ? (0, i.jsx)(f.u, { className: P.PK })
                                    : (0, i.jsx)(p.E, { className: P.PK }),
                        },
                        eK,
                    ),
                    tN &&
                        null != tj &&
                        !nf &&
                        (0, i.jsx)(o.animated.div, {
                            className: P.o$,
                            ref: nd,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, o.to)(
                                    [nu.to({ range: [0, 1], output: [-20, -tQ[tX]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, i.jsx)(E.E, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: P.qh,
                                children: tj.text,
                            }),
                        }),
                    tf &&
                        (0, i.jsxs)(o.animated.div, {
                            className: P.r8,
                            style: {
                                height: (0, o.to)([nu.to({ range: [0, 1], output: [0, tQ[tX]] })], (e) => `${e}px`),
                            },
                            children: [
                                (0, i.jsx)(o.animated.div, {
                                    style: {
                                        transform: (0, o.to)(
                                            [nu.to({ range: [1, 0], output: [0, 1] })],
                                            (e) => `translateY(-${20 * e}px)`,
                                        ),
                                    },
                                    children: (0, i.jsx)("div", {
                                        style: t5 || ti || eC ? void 0 : k,
                                        children: (0, i.jsx)(v.Ay, {
                                            percent: null != e0 ? e0 : eQ,
                                            animate:
                                                !0 !== tw.current &&
                                                !e6 &&
                                                eK === u.Q6.PLAYING &&
                                                t$ &&
                                                e7 === u.h$.READY,
                                            interactionEnabled: tu && tq > 0,
                                            backgroundColor: t5 || eC ? void 0 : "rgba(0, 0, 0, 0.0)",
                                            playerState: eK,
                                            preloadedBuffers: t5 ? tt : void 0,
                                            durationSec: tW > 0 ? tW : +!t$,
                                            isFullyVisible: t5 && tu,
                                            maxSeekableTime: null != K && tq > 0 ? tq : void 0,
                                            progressClassName: eN,
                                            persistPlayhead: eR,
                                            onClick: nl,
                                            onScrubBack: t9,
                                            onScrubForward: ne,
                                            onDragStateChange: (e) => {
                                                if (((ta.current = e), tr(e), e))
                                                    (ts.current = eK === u.Q6.PLAYING),
                                                        (to.current = eK === u.Q6.ENDED),
                                                        ts.current
                                                            ? tb.current?.pause()
                                                            : to.current && tJ(u.Q6.PAUSED, u.KB.SEEK);
                                                else {
                                                    let e = tb.current,
                                                        t =
                                                            null != e &&
                                                            !Number.isNaN(e.duration) &&
                                                            e.currentTime >= e.duration;
                                                    ts.current
                                                        ? ((ts.current = !1),
                                                          t ? tJ(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE) : e?.play())
                                                        : to.current
                                                          ? ((to.current = !1),
                                                            t
                                                                ? tJ(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE)
                                                                : tJ(u.Q6.PLAYING, u.KB.USER))
                                                          : t && tJ(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE);
                                                }
                                            },
                                            indicatorConfig: eD,
                                            scrubPreviewCues: tk,
                                            onIndicatorSeek: nl,
                                            getCurrentTimeSec: tU,
                                            "data-testid": "discord-web-video-player-timeline",
                                        }),
                                    }),
                                }),
                                (0, i.jsx)(o.animated.div, {
                                    className: P.uN,
                                    "data-testid": "discord-web-video-player-controls",
                                    style: {
                                        paddingTop: (0, o.to)(
                                            [nu.to({ range: [0, 1], output: [0, 1] })],
                                            (e) => `${e * e * 20}px`,
                                        ),
                                        paddingBottom: (0, o.to)(
                                            [nu.to({ range: [0, 1], output: [0, 1] })],
                                            (e) => `${e * e * 12}px`,
                                        ),
                                        pointerEvents: (0, o.to)([nu.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    onFocus: () => eZ(!0),
                                    onBlur: () => eZ(!1),
                                    children: (0, i.jsx)(y.A, {
                                        videoRef: tb,
                                        playerState: eK,
                                        animSpring: nu,
                                        visible: t5,
                                        seekForwardEnabled: null == K || (tb.current?.currentTime ?? 0) + 1 < tq,
                                        hideCaptionBtn: null == $,
                                        hideTranscriptBtn: null == z,
                                        hideFullScreenBtn: eA,
                                        hidePlaybackSpeedBtn: eS,
                                        hideSkipButtons: eI ?? "portrait" === U,
                                        compactTimeDisplay: eT,
                                        size: tX,
                                        downloadUrl: eE,
                                        downloadContentType: em,
                                        extraButtons: eg,
                                        autoFocus: eO,
                                        keyDownHandlerRef: nE,
                                        volume: tE,
                                        muted: tg,
                                        transcriptEnabled: tS,
                                        captionEnabled: tN,
                                        fullScreenEnabled: tC,
                                        handlePlaybackBtnClick: nn,
                                        handleTranscriptBtnClick: () => {
                                            ty(!tS);
                                        },
                                        handleCaptionBtnClick: () => {
                                            tv(!tN);
                                        },
                                        handleFullScreenBtnClick: () => {
                                            let e = !tC,
                                                t = (0, I.qf)(tb.current?.parentNode, tb.current);
                                            e && null != t
                                                ? ((0, I.tl)(t), t.addEventListener(I.Wb, t8), Z?.(!0), tZ(u.oA.LG))
                                                : e ||
                                                  null == t ||
                                                  (t.removeEventListener(I.Wb, t8), Z?.(!1), (0, I.sP)(t), tZ(u.oA.MD)),
                                                tR(e);
                                        },
                                        handleSeekBackBtnClick: t9,
                                        handleSeekForwardBtnClick: ne,
                                        autoHideVolumeSlider: eb,
                                        handleControlBarPendingInteraction: tr,
                                        onVolumeChange: (e) => {
                                            tm(e), Q?.(e);
                                        },
                                        onMutedChange: (e) => {
                                            tA(e), J?.(e);
                                        },
                                        onVolumeExpandedChange: (e) => {
                                            tT(e);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    null != ed &&
                        (0, i.jsx)("div", {
                            className: P.MU,
                            children: ed({
                                playerState: eK,
                                isControlBarExpanded: t5,
                                videoRef: tb,
                                isActive: tf,
                                isVolumeExpanded: tI,
                            }),
                        }),
                    !tf &&
                        (0, i.jsx)("div", {
                            className: P.mF,
                            ref: e3,
                            children: (0, i.jsx)(f.u, { size: "xs", color: "currentColor", className: P.z_ }),
                        }),
                ],
            }),
        });
    });
