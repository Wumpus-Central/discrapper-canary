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
                muxContentMetadata: eV,
                awaitMuxReady: eB = !1,
                playerRef: ej,
            } = e,
            eH = G ?? V,
            eY = ev ?? b.u,
            { focused: eW, focusedChanged: eK } = (0, O.A7)(),
            { visible: e$, visibleChanged: ez, targetRef: eq } = (0, O.O7)(),
            [eZ, eX] = r.useState(s ? u.Q6.PLAYING : u.Q6.PAUSED),
            [eQ, eJ] = r.useState(!1),
            [e0, e1] = r.useState(!1),
            [e2, e3] = r.useState(0),
            [e6, e4] = r.useState(null),
            e5 = r.useCallback((e) => {
                e4(null), e3(e);
            }, []),
            e7 = r.useRef(null),
            [e8, e9] = r.useState(!1),
            te = r.useRef(null),
            [tt, tn] = r.useState(u.h$.LOADING),
            ti = r.useRef(!1),
            tr = r.useRef(null),
            [ts, ta] = r.useState([]),
            [to, tl] = r.useState(!1),
            tu = r.useRef(!1),
            tc = r.useRef(!1),
            td = r.useRef(!1),
            t_ = r.useRef(!1),
            [th, tf] = r.useState(!0),
            tp = r.useRef(!0),
            tE = r.useRef(null),
            tm = r.useRef(null),
            [tg, tA] = r.useState(s || j),
            [tI, tT] = r.useState(et),
            [tS, ty] = r.useState(en),
            [tC, tN] = r.useState(!ew),
            [tv, tR] = r.useState(!1),
            [tO, tb] = r.useState(!1),
            [tD, tL] = r.useState(!1),
            tw = (0, l.bG)([g.Ay], () => g.Ay.useReducedMotion),
            tM = (0, r.useRef)(null),
            tP = (0, r.useRef)(null),
            tx = (0, r.useRef)(null),
            tk = r.useRef(!0),
            [tU, tG] = r.useState(null),
            tF = r.useRef(null),
            tV = (0, C.z5)(tg, tF, eP, ex),
            tB = r.useCallback(() => tM.current?.currentTime ?? null, []);
        (0, D.A)({ videoRef: tM, canvasRef: tP, enabled: tg && eG && !tw, canvasWidth: 32, canvasHeight: 18 });
        let tj = r.useCallback(
                (e, t) => {
                    K?.(e, t);
                },
                [K],
            ),
            { isHlsActive: tH, hlsRef: tY } = (0, T.Ay)(tM, {
                src: eH,
                initialTimeSec: H,
                onError: tj,
                onHlsInstance: eE,
                crossOrigin: eU,
            }),
            { isReady: tW } = (0, S.A)({ videoRef: tM, hlsRef: tY, contentMetadata: eV, isHls: tH }),
            tK = eB && !tW && !tH,
            [t$, tz] = r.useState(null),
            [tq, tZ] = r.useState(0),
            [tX, tQ] = r.useState(!1),
            tJ = $ ?? tM.current?.duration ?? 0,
            [t0, t1] = r.useState(u.oA.MD),
            t2 = { [u.oA.MD]: 56, [u.oA.LG]: 64 };
        (0, m.u5)(() => {
            tk.current && (tk.current = !1);
        });
        let t3 = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((t_.current = !0), eX(e), X?.(e, t), null != tM.current))
                    switch (e) {
                        case u.Q6.PLAYING:
                            tG(null), tA(!0), tM.current.play();
                            break;
                        case u.Q6.PAUSED:
                            (tu.current = !1), tM.current.pause(), (tp.current = !1);
                            break;
                        case u.Q6.ENDED:
                            tR(!1);
                    }
            },
            [X],
        );
        r.useEffect(() => {
            if (!eO) return;
            let e = null != n && (n === c.ip.HIDDEN || n === c.ip.EXITING || n === c.ip.EXITED),
                t = null != n && ez && !e$,
                i = eK && !eW;
            if ((e || t || i) && null != tM.current && eZ === u.Q6.PLAYING) {
                let n = e || t ? u.KB.VISIBILITY : u.KB.FOCUS;
                tG(n), t3(u.Q6.PAUSED, n);
            }
        }, [eO, n, eW, eK, e$, ez, eZ, t3]),
            (0, L.A)({
                videoRef: tM,
                enabled: eO,
                onPipPause: () => {
                    tG(u.KB.PICTURE_IN_PICTURE), t3(u.Q6.PAUSED, u.KB.PICTURE_IN_PICTURE);
                },
                onHiddenPause: () => {
                    tG(u.KB.FOCUS), t3(u.Q6.PAUSED, u.KB.FOCUS);
                },
            }),
            r.useEffect(() => {
                eK && ec?.(eW, eZ);
            }, [eW, eK, eZ, ec]),
            r.useEffect(() => {
                ez && ed?.(e$, eZ);
            }, [e$, ez, eZ, ed]);
        let [t6, t4] = r.useState(!1),
            t5 = r.useRef(null),
            t7 = r.useRef(0);
        r.useLayoutEffect(() => {
            t7.current = performance.now();
        }, []);
        let t8 = r.useCallback(() => {
                null != t5.current && clearTimeout(t5.current),
                    eZ !== u.Q6.PLAYING ||
                        (t5.current = setTimeout(
                            () => {
                                eZ === u.Q6.PLAYING && t4(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - t7.current)),
                        ));
            }, [eZ]),
            t9 = r.useCallback(() => {
                t4(!1), (t7.current = performance.now()), t8();
            }, [t8]);
        r.useEffect(() => {
            if (eZ !== u.Q6.PLAYING) {
                t4(!1), null != t5.current && clearTimeout(t5.current);
                return;
            }
            return (
                t8(),
                () => {
                    null != t5.current && clearTimeout(t5.current);
                }
            );
        }, [eZ, t8]),
            r.useEffect(
                () => () => {
                    null != te.current && clearTimeout(te.current);
                },
                [],
            );
        let ne = !t6 && (e0 || eQ || eZ === u.Q6.ENDED),
            nt = r.useRef(Q);
        nt.current = Q;
        let nn = r.useCallback(() => {
                let e = (0, I.qf)(tM.current?.parentNode, tM.current);
                null == e || (0, I._U)(e) || (e.removeEventListener(I.Wb, nn), tL(!1), nt.current?.(!1), t1(u.oA.MD));
            }, []),
            ni = () => {
                null == tM.current ||
                    (ns(Math.max((tr.current ?? tM.current.currentTime) - 10, 0)),
                    eZ === u.Q6.ENDED && t3(u.Q6.PAUSED, u.KB.SEEK));
            },
            nr = () => {
                if (null == tM.current) return;
                let e = Math.min((tr.current ?? tM.current.currentTime) + 10, tJ);
                ns(e), eZ !== u.Q6.ENDED && e >= tM.current.duration && t3(u.Q6.ENDED, u.KB.SEEK);
            };
        r.useEffect(() => {
            let e = tM.current;
            return () => {
                let t = (0, I.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(I.Wb, nn);
            };
        }, [nn]);
        let ns = r.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tM.current) return;
                    let n = tM.current.currentTime;
                    (tr.current = e),
                        e4((e / (tM.current.duration ?? 1)) * 100),
                        e9(!0),
                        null != te.current && clearTimeout(te.current),
                        (te.current = setTimeout(() => {
                            e9(!1), (te.current = null);
                        }, 100)),
                        (ti.current = !0),
                        (tM.current.currentTime = e),
                        t && e_?.(n, e);
                },
                [e_],
            ),
            na = () => {
                if (null != tM.current)
                    switch (eZ) {
                        case u.Q6.ENDED:
                            ns(0), t3(u.Q6.PLAYING, u.KB.USER);
                            break;
                        case u.Q6.PLAYING:
                            tG(u.KB.USER), t3(u.Q6.PAUSED, u.KB.USER);
                            break;
                        default:
                            t3(u.Q6.PLAYING, u.KB.USER);
                    }
            },
            no = (e) => {
                null != em ? em(e) : (tA(!0), na());
            },
            nl = (e) => {
                tz(e);
            },
            nu = (e) => {
                tz((t) => (t?.id === e.id ? null : t));
            },
            nc = r.useCallback(() => {
                if (null == tM.current || 0 === tM.current.textTracks.length) return;
                let e = tM.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, R.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => nl(n)), (n.onexit = () => nu(n)));
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
        let nd = (e) => {
                if (null != tM.current) {
                    if (tt === u.h$.BUFFERING) {
                        let e = null != tm.current ? performance.now() - tm.current : null;
                        eu?.(e);
                    } else if (tt === u.h$.LOADING) {
                        let e = null != tE.current ? performance.now() - tE.current : null;
                        ea?.(e);
                    }
                    tn(u.h$.READY), eZ === u.Q6.PLAYING && (tu.current || t3(u.Q6.PLAYING, u.KB.BUFFERING_RECOVERY));
                }
            },
            n_ = (e) => {
                if ((ns(e), eZ === u.Q6.ENDED && !tc.current)) {
                    let t = tM.current?.duration;
                    (null == t || Number.isNaN(t) || e < t) && t3(u.Q6.PLAYING, u.KB.USER);
                }
            },
            [{ controlBarAnimSpring: nh }, nf] = (0, d.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: x,
                onStart: () => {
                    tf(!1);
                },
                onRest: () => {
                    tf(!0);
                },
            })),
            np = (0, r.useRef)(null),
            [{ captionHeightSpring: nE }, nm] = (0, d.z)(() => ({ from: { captionHeightSpring: 0 }, config: x }));
        r.useEffect(
            () => (
                nm({ captionHeightSpring: tO && null != t$ ? (np.current?.clientHeight ?? 0) : 0, immediate: tw }),
                () => {
                    nE.stop();
                }
            ),
            [tO, nm, tw, t$, nE],
        ),
            r.useEffect(
                () => (
                    nf({ controlBarAnimSpring: ne || to ? 1 : 0, immediate: tw }),
                    () => {
                        nh.stop();
                    }
                ),
                [ne, nf, tw, to, nh],
            );
        let ng = eZ === u.Q6.ENDED && null != Z,
            nA = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.KB.USER;
                    null != tM.current && (ns(0), t3(u.Q6.PLAYING, e));
                },
                [ns, t3],
            ),
            nI = r.useRef(null),
            nT = r.useCallback(
                (e) => {
                    t9(), nI.current?.(e.nativeEvent);
                },
                [t9],
            );
        return (
            r.useImperativeHandle(
                ej,
                () => ({
                    play: () => {
                        t3(u.Q6.PLAYING, u.KB.USER);
                    },
                    pause: () => {
                        t3(u.Q6.PAUSED, u.KB.USER);
                    },
                    seek: (e) => {
                        ns(e);
                    },
                }),
                [t3, ns],
            ),
            (0, i.jsx)(_.D, {
                className: a()(P.W6, { [P.nZ]: !tg }),
                "data-fullscreen": tD,
                "data-testid": "discord-web-video-player-container",
                tabIndex: tg ? -1 : 0,
                focusProps: tg ? void 0 : { ringTarget: e7 },
                onMouseEnter: () => {
                    eJ(!0), t4(!1), (t7.current = performance.now()), null != t5.current && clearTimeout(t5.current);
                },
                onMouseLeave: () => {
                    eJ(!1), t4(!1);
                },
                "aria-label": tg ? void 0 : M.intl.string(M.t.RscU7I),
                onClick: tg ? void 0 : no,
                onMouseMove: t9,
                children: (0, i.jsxs)("div", {
                    className: a()(P.NS, { [P.DO]: "portrait" === U, [P.r7]: "landscape" === U }),
                    tabIndex: -1,
                    onKeyDown: nT,
                    style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                    children: [
                        eG && !tw && (0, i.jsx)("canvas", { ref: tP, className: P.Xm }),
                        ng && Z?.({ replay: nA }),
                        (0, i.jsxs)(A.A, {
                            ref: (e) => {
                                (tM.current = e),
                                    (eq.current = e),
                                    "function" == typeof t ? t(e) : null != t && (t.current = e);
                            },
                            autoPlay: s,
                            alt: F,
                            playsInline: !0,
                            mediaLayoutType: tD ? w.dG.STATIC : w.dG.RESPONSIVE,
                            className: a()({ [P.R]: ng, [P.IR]: !0, [P.FP]: "cover" === eF && !tD }),
                            controls: !1,
                            poster: B,
                            preload: tg ? eg : "none",
                            disablePictureInPicture: !0,
                            "data-testid": "discord-web-video-player-video",
                            onTimeUpdate: (e) => {
                                null != tM.current &&
                                    (Y?.(tM.current.currentTime, tM.current.duration),
                                    ti.current || e5((tM.current.currentTime / tM.current.duration) * 100));
                            },
                            onEnded: (e) => {
                                tn(u.h$.READY), W?.(), tc.current || t3(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE);
                            },
                            onLoadedData: (e) => {
                                if (tt === u.h$.LOADING) {
                                    let e = null != tE.current ? performance.now() - tE.current : null;
                                    ea?.(e), tn(u.h$.READY);
                                }
                            },
                            onLoadedMetadata: (e) => {
                                if (null == tM.current) return;
                                H > 0 && !tH && ns(H, !1);
                                let t = ei?.() ?? tI,
                                    n = er?.() ?? tS;
                                t !== tI && tT(t), n !== tS && ty(n), (tM.current.volume = n ? 0 : t);
                                let i = tM.current.duration;
                                i > 0 && isFinite(i) && tZ(i), tQ(!0);
                            },
                            onLoadStart: () => {
                                (tE.current = performance.now()), es?.();
                            },
                            onPlaying: () => {
                                tp.current && (eo?.(performance.now()), (tp.current = !1));
                            },
                            onWaiting: (e) => {
                                (tm.current = performance.now()), el?.(), tn(u.h$.BUFFERING);
                            },
                            onProgress: (e) => {
                                if (null == tM.current) return;
                                let t = [];
                                for (let e = 0; e < tM.current.buffered.length; e++) {
                                    let n = tM.current.buffered.start(e),
                                        i = tM.current.buffered.end(e);
                                    i - n < 1 ||
                                        t.push({ start: n / tM.current.duration, size: (i - n) / tM.current.duration });
                                }
                                ta(t);
                            },
                            onCanPlay: nd,
                            onCanPlayThrough: nd,
                            onSeeked: () => {
                                (ti.current = !1),
                                    (tr.current = null),
                                    null != tM.current && e5((tM.current.currentTime / tM.current.duration) * 100);
                            },
                            onAbort: () => tj(u.SB.ABORT),
                            onError: () => tj(u.SB.ERROR),
                            onEmptied: () => tj(u.SB.EMPTIED),
                            onStalled: () => tj(u.SB.STALLED),
                            onClick: no,
                            crossOrigin: eU ?? void 0,
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
                                null != eP && (0, i.jsx)("track", { ref: tF, src: eP, kind: "metadata" }),
                                !tH && !tK && (0, i.jsx)("source", { onError: () => tj(u.SB.SOURCE_ERROR), src: eH }),
                            ],
                        }),
                        tt !== u.h$.READY &&
                            eZ === u.Q6.PLAYING &&
                            null != eH &&
                            (0, i.jsx)("span", {
                                className: a()(P.S, { [P.F]: "center" === ek }),
                                "data-testid": "discord-web-video-player-loading-spinner",
                                children: (0, i.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                            }),
                        (0, i.jsx)(b.A, {
                            message: eY({ hasVideoAsset: null != eH, playerState: eZ, pauseReason: tU }),
                            showOverlay: null == eH,
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
                        tv &&
                            eZ !== u.Q6.ENDED &&
                            null != q &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(_.D, {
                                        onClick: () => {
                                            eZ === u.Q6.PAUSED && t3(u.Q6.PLAYING, u.KB.USER), tR(!1);
                                        },
                                        tabIndex: -1,
                                        children: (0, i.jsx)("div", { className: P.BG }),
                                    }),
                                    (0, i.jsx)(o.animated.div, {
                                        className: a()(P.xr, ep, { [P.MZ]: "portrait" === U }),
                                        "data-testid": "discord-web-video-player-transcript",
                                        style: { marginBottom: (0, o.to)([nh, nE], (e, t) => `${e * t2[t0] + t}px`) },
                                        children: (0, i.jsx)(v.X, {
                                            text: q,
                                            onClose: () => {
                                                tR(!1);
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        tg &&
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
                                    [P.ZH]: t_.current && eZ === u.Q6.PLAYING,
                                    [P.v7]: t_.current && eZ === u.Q6.PAUSED,
                                }),
                                style: { "--custom-play-pause-pop-ms": "1000ms" },
                                children:
                                    eZ === u.Q6.PLAYING
                                        ? (0, i.jsx)(f.u, { className: P.PK })
                                        : (0, i.jsx)(p.E, { className: P.PK }),
                            },
                            eZ,
                        ),
                        tO &&
                            null != t$ &&
                            !ng &&
                            (0, i.jsx)(o.animated.div, {
                                className: P.o$,
                                ref: np,
                                "data-testid": "discord-web-video-player-captions",
                                style: {
                                    translateY: (0, o.to)(
                                        [nh.to({ range: [0, 1], output: [-20, -t2[t0]] })],
                                        (e) => `${e}px`,
                                    ),
                                },
                                children: (0, i.jsx)(E.E, {
                                    variant: "text-lg/semibold",
                                    color: "always-white",
                                    className: P.qh,
                                    children: t$.text,
                                }),
                            }),
                        tg &&
                            (0, i.jsxs)(o.animated.div, {
                                className: P.r8,
                                style: {
                                    height: (0, o.to)([nh.to({ range: [0, 1], output: [0, t2[t0]] })], (e) => `${e}px`),
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
                                            style: ne || to || eb ? void 0 : k,
                                            children: (0, i.jsx)(N.Ay, {
                                                percent: null != e6 ? e6 : e2,
                                                animate:
                                                    !0 !== tk.current &&
                                                    !e8 &&
                                                    eZ === u.Q6.PLAYING &&
                                                    tX &&
                                                    tt === u.h$.READY,
                                                interactionEnabled: th && tJ > 0,
                                                backgroundColor: ne || eb ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                playerState: eZ,
                                                preloadedBuffers: ne ? ts : void 0,
                                                durationSec: tq > 0 ? tq : +!tX,
                                                isFullyVisible: ne && th,
                                                maxSeekableTime: null != $ && tJ > 0 ? tJ : void 0,
                                                progressClassName: eR,
                                                persistPlayhead: eD,
                                                onClick: n_,
                                                onScrubBack: ni,
                                                onScrubForward: nr,
                                                onDragStateChange: (e) => {
                                                    if (((tc.current = e), tl(e), e))
                                                        (tu.current = eZ === u.Q6.PLAYING),
                                                            (td.current = eZ === u.Q6.ENDED),
                                                            tu.current
                                                                ? tM.current?.pause()
                                                                : td.current && t3(u.Q6.PAUSED, u.KB.SEEK);
                                                    else {
                                                        let e = tM.current,
                                                            t =
                                                                null != e &&
                                                                !Number.isNaN(e.duration) &&
                                                                e.currentTime >= e.duration;
                                                        tu.current
                                                            ? ((tu.current = !1),
                                                              t ? t3(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE) : e?.play())
                                                            : td.current
                                                              ? ((td.current = !1),
                                                                t
                                                                    ? t3(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE)
                                                                    : t3(u.Q6.PLAYING, u.KB.USER))
                                                              : t && t3(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE);
                                                    }
                                                },
                                                indicatorConfig: eM,
                                                scrubPreviewCues: tV,
                                                onIndicatorSeek: n_,
                                                getCurrentTimeSec: tB,
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
                                        onFocus: () => e1(!0),
                                        onBlur: () => e1(!1),
                                        children: (0, i.jsx)(y.A, {
                                            videoRef: tM,
                                            playerState: eZ,
                                            animSpring: nh,
                                            visible: ne,
                                            seekForwardEnabled: null == $ || (tM.current?.currentTime ?? 0) + 1 < tJ,
                                            hideCaptionBtn: null == z,
                                            hideTranscriptBtn: null == q,
                                            hideFullScreenBtn: eS,
                                            hidePlaybackSpeedBtn: eN,
                                            hideSkipButtons: ey ?? "portrait" === U,
                                            compactTimeDisplay: eC,
                                            size: t0,
                                            downloadUrl: eA,
                                            downloadContentType: eI,
                                            extraButtons: eT,
                                            autoFocus: eL,
                                            keyDownHandlerRef: nI,
                                            volume: tI,
                                            muted: tS,
                                            transcriptEnabled: tv,
                                            captionEnabled: tO,
                                            fullScreenEnabled: tD,
                                            handlePlaybackBtnClick: na,
                                            handleTranscriptBtnClick: () => {
                                                tR(!tv);
                                            },
                                            handleCaptionBtnClick: () => {
                                                tb(!tO);
                                            },
                                            handleFullScreenBtnClick: () => {
                                                let e = !tD,
                                                    t = (0, I.qf)(tM.current?.parentNode, tM.current);
                                                e && null != t
                                                    ? ((0, I.tl)(t), t.addEventListener(I.Wb, nn), Q?.(!0), t1(u.oA.LG))
                                                    : e ||
                                                      null == t ||
                                                      (t.removeEventListener(I.Wb, nn),
                                                      Q?.(!1),
                                                      (0, I.sP)(t),
                                                      t1(u.oA.MD)),
                                                    tL(e);
                                            },
                                            handleSeekBackBtnClick: ni,
                                            handleSeekForwardBtnClick: nr,
                                            autoHideVolumeSlider: ew,
                                            handleControlBarPendingInteraction: tl,
                                            onVolumeChange: (e) => {
                                                tT(e), J?.(e);
                                            },
                                            onMutedChange: (e) => {
                                                ty(e), ee?.(e);
                                            },
                                            onVolumeExpandedChange: (e) => {
                                                tN(e);
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        null != ef &&
                            (0, i.jsx)("div", {
                                className: P.MU,
                                children: ef({
                                    playerState: eZ,
                                    isControlBarExpanded: ne,
                                    controlBarAnimationSpring: nh,
                                    videoRef: tM,
                                    isActive: tg,
                                    isVolumeExpanded: tC,
                                }),
                            }),
                        !tg &&
                            (0, i.jsx)("div", {
                                className: P.mF,
                                ref: e7,
                                children: (0, i.jsx)(f.u, { size: "xs", color: "currentColor", className: P.z_ }),
                            }),
                    ],
                }),
            })
        );
    });
