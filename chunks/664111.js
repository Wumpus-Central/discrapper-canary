"use strict";
n.d(t, { A: () => G }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(445887),
    l = n(311907),
    u = n(876230),
    c = n(649658),
    d = n(397927),
    _ = n(964486),
    f = n(775602),
    h = n(607470),
    p = n(475815),
    m = n(662903),
    E = n(337953),
    g = n(183494),
    A = n(408121),
    I = n(984212),
    T = n(739416),
    S = n(931853),
    y = n(652215),
    v = n(838541),
    C = n(985018),
    N = n(246878);
let R = 20,
    b = 20,
    O = 50,
    D = 58,
    L = 10,
    w = { tension: 250, friction: 5, clamp: !0 },
    M = 3e3,
    x = 1e3,
    P = { visibility: "hidden" },
    k = i.forwardRef(function (e, t) {
        let {
                targetTimeSec: n = 1 / 0,
                parentTransitionState: s,
                onOptimisticProgressUpdate: c = () => {},
                autoplay: y = !1,
                performanceClockStartTime: C = 0,
                orientation: k = "landscape",
                videoUrlOverride: U,
                src: G,
                poster: F,
                initialTimeSec: B = 0,
                onProgressUpdate: V,
                onEnded: H,
                onError: j,
                maxSeekableTimeSec: Y,
                captionTrackUrl: W,
                transcriptText: K,
                renderEndScreen: $,
                onPlayerStateChange: z,
                onFullscreenChange: q,
                onVolumeChange: Z,
                onMutedChange: X,
                initialVolume: Q = 0.3,
                initialMuted: J = !1,
                onLoadStart: ee,
                onLoadEnd: et,
                onFirstFrame: en,
                onBufferingStart: er,
                onBufferingEnd: ei,
                onFocusChange: es,
                onVisibilityChange: ea,
                onSeek: eo,
                renderOverlay: el,
                renderPersistentOverlay: eu,
                onHlsInstance: ec,
                onClick: ed,
                preload: e_,
                downloadUrl: ef,
                downloadContentType: eh,
                getPlaybackBlockedMessage: ep,
                progressGlow: em,
                progressFillClassName: eE,
                glowClassName: eg,
                pauseOnLostVisibility: eA = !1,
                persistTimeline: eI = !1,
                persistGrabber: eT = !0,
                autoFocus: eS = !1,
                timelineIndicatorConfig: ey,
                loadingSpinnerPosition: ev = "top-left",
                crossOrigin: eC = "anonymous",
            } = e,
            eN = U ?? G,
            eR = ep ?? S.u,
            { focused: eb, focusedChanged: eO } = (0, T.A7)(),
            { visible: eD, visibleChanged: eL, targetRef: ew } = (0, T.O7)(),
            [eM, ex] = i.useState(y ? u.Q6.PLAYING : u.Q6.PAUSED),
            [eP, ek] = i.useState(!1),
            [eU, eG] = i.useState(!1),
            [eF, eB] = i.useState(0),
            [eV, eH] = i.useState(null),
            ej = i.useCallback((e) => {
                eH(null), eB(e);
            }, []),
            [eY, eW] = i.useState(!1),
            eK = i.useRef(null),
            [e$, ez] = i.useState(u.h$.LOADING),
            eq = i.useRef(!1),
            eZ = i.useRef(null),
            [eX, eQ] = i.useState([]),
            [eJ, e0] = i.useState(!1),
            e1 = i.useRef(!1),
            [e2, e3] = i.useState(!1),
            e6 = i.useRef(!0),
            e4 = i.useRef(null),
            e5 = i.useRef(null),
            e7 = i.useRef(0);
        i.useLayoutEffect(() => {
            e7.current = performance.now();
        }, []);
        let [e8, e9] = i.useState(Q),
            [te, tt] = i.useState(J),
            [tn, tr] = i.useState(!1),
            [ti, ts] = i.useState(!1),
            [ta, to] = i.useState(!1),
            tl = (0, l.bG)([f.A], () => f.A.useReducedMotion),
            tu = (0, i.useRef)(null),
            tc = (0, i.useRef)(null),
            td = i.useRef(!0),
            [t_, tf] = i.useState(null),
            th = i.useCallback(
                (e, t) => {
                    j?.(e, t);
                },
                [j],
            ),
            { isHlsActive: tp } = (0, m.Ay)(tu, { src: eN, initialTimeSec: B, onError: th, onHlsInstance: ec }),
            [tm, tE] = i.useState(null),
            [tg, tA] = i.useState(0),
            tI = Y ?? tu.current?.duration ?? 0,
            [tT, tS] = i.useState(u.oA.MD),
            ty = { [u.oA.MD]: O, [u.oA.LG]: D };
        (0, _.u5)(() => {
            td.current && (td.current = !1);
        });
        let tv = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((ex(e), z?.(e, t), null != tu.current))
                    switch (e) {
                        case u.Q6.PLAYING:
                            tf(null), tu.current.play();
                            break;
                        case u.Q6.PAUSED:
                            (e1.current = !1), tu.current.pause(), (e6.current = !1);
                            break;
                        case u.Q6.ENDED:
                            tr(!1);
                    }
            },
            [z],
        );
        i.useEffect(() => {
            if (!eA) return;
            let e = null != s && (s === d.ip4.HIDDEN || s === d.ip4.EXITING || s === d.ip4.EXITED),
                t = null != s && eL && !eD,
                n = eO && !eb;
            if ((e || t || n) && null != tu.current && eM === u.Q6.PLAYING) {
                let n = e || t ? u.KB.VISIBILITY : u.KB.FOCUS;
                tf(n), tv(u.Q6.PAUSED, n);
            }
        }, [eA, s, eb, eO, eD, eL, eM, tv]),
            i.useEffect(() => {
                eO && es?.(eb, eM);
            }, [eb, eO, eM, es]),
            i.useEffect(() => {
                eL && ea?.(eD, eM);
            }, [eD, eL, eM, ea]);
        let [tC, tN] = i.useState(!1),
            tR = i.useRef(null),
            tb = i.useRef(0);
        i.useLayoutEffect(() => {
            tb.current = performance.now();
        }, []);
        let tO = i.useCallback(() => {
                null != tR.current && clearTimeout(tR.current),
                    eM !== u.Q6.PLAYING ||
                        (tR.current = setTimeout(
                            () => {
                                eM === u.Q6.PLAYING && tN(!0);
                            },
                            Math.max(0, M - (performance.now() - tb.current)),
                        ));
            }, [eM]),
            tD = () => {
                ek(!0), tN(!1), (tb.current = performance.now()), null != tR.current && clearTimeout(tR.current);
            },
            tL = () => {
                ek(!1), tN(!1);
            },
            tw = i.useCallback(() => {
                tN(!1), (tb.current = performance.now()), tO();
            }, [tO]);
        i.useEffect(() => {
            if (eM !== u.Q6.PLAYING) {
                tN(!1), null != tR.current && clearTimeout(tR.current);
                return;
            }
            return (
                tO(),
                () => {
                    null != tR.current && clearTimeout(tR.current);
                }
            );
        }, [eM, tO]),
            i.useEffect(
                () => () => {
                    null != eK.current && clearTimeout(eK.current);
                },
                [],
            );
        let tM = !tC && (eU || eP || eM === u.Q6.ENDED),
            tx = () => eG(!0),
            tP = () => eG(!1),
            tk = () => {
                tr(!tn);
            },
            tU = () => {
                ts(!ti);
            },
            tG = () => {
                tr(!1);
            },
            tF = i.useRef(q);
        tF.current = q;
        let tB = i.useCallback(() => {
                let e = (0, p.qf)(tu.current?.parentNode, tu.current);
                null == e || (0, p._U)(e) || (e.removeEventListener(p.Wb, tB), to(!1), tF.current?.(!1), tS(u.oA.MD));
            }, []),
            tV = () => {
                let e = !ta,
                    t = (0, p.qf)(tu.current?.parentNode, tu.current);
                e && null != t
                    ? ((0, p.tl)(t), t.addEventListener(p.Wb, tB), q?.(!0), tS(u.oA.LG))
                    : e || null == t || (t.removeEventListener(p.Wb, tB), q?.(!1), (0, p.sP)(t), tS(u.oA.MD)),
                    to(e);
            },
            tH = () => {
                null == tu.current ||
                    (tY(Math.max((eZ.current ?? tu.current.currentTime) - L, 0)),
                    eM === u.Q6.ENDED && tv(u.Q6.PAUSED, u.KB.SEEK));
            },
            tj = () => {
                if (null == tu.current) return;
                let e = Math.min((eZ.current ?? tu.current.currentTime) + L, tI);
                tY(e), eM !== u.Q6.ENDED && e >= tu.current.duration && tv(u.Q6.ENDED, u.KB.SEEK);
            };
        i.useEffect(() => {
            let e = tu.current;
            return () => {
                let t = (0, p.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(p.Wb, tB);
            };
        }, [tB]);
        let tY = i.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tu.current) return;
                    let n = tu.current.currentTime;
                    (eZ.current = e),
                        eH((e / (tu.current.duration ?? 1)) * 100),
                        eW(!0),
                        null != eK.current && clearTimeout(eK.current),
                        (eK.current = setTimeout(() => {
                            eW(!1), (eK.current = null);
                        }, 100)),
                        (eq.current = !0),
                        (tu.current.currentTime = e),
                        t && eo?.(n, e);
                },
                [eo],
            ),
            tW = () => {
                (eq.current = !1),
                    (eZ.current = null),
                    null != tu.current && ej((tu.current.currentTime / tu.current.duration) * 100);
            },
            tK = () => {
                if (null != tu.current)
                    switch (eM) {
                        case u.Q6.ENDED:
                            tY(0), tv(u.Q6.PLAYING, u.KB.USER);
                            break;
                        case u.Q6.PLAYING:
                            tf(u.KB.USER), tv(u.Q6.PAUSED, u.KB.USER);
                            break;
                        default:
                            tv(u.Q6.PLAYING, u.KB.USER);
                    }
            },
            t$ = (e) => {
                null != ed ? ed(e) : tK();
            },
            tz = (e) => {
                tE(e);
            },
            tq = (e) => {
                tE((t) => (t?.id === e.id ? null : t));
            },
            tZ = () => {
                (e4.current = performance.now()), ee?.();
            },
            tX = () => {
                if (!e6.current) return;
                let e = 0 !== C ? C : e7.current,
                    t = performance.now() - e;
                en?.(t), (e6.current = !1);
            },
            tQ = (e) => {
                if (null == tu.current) return;
                B > 0 && tY(B, !1), te ? (tu.current.volume = 0) : (tu.current.volume = e8);
                let t = tu.current.duration;
                t > 0 && isFinite(t) && tA(t);
            },
            tJ = i.useCallback(() => {
                if (null == tu.current || 0 === tu.current.textTracks.length) return;
                let e = tu.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, I.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tz(n)), (n.onexit = () => tq(n)));
                    }
            }, []);
        i.useEffect(() => {
            if (null == tc.current) return;
            let e = tc.current;
            return (
                e.addEventListener("load", tJ),
                () => {
                    null != e && e.removeEventListener("load", tJ);
                }
            );
        }, [tJ]);
        let t0 = (e) => {
                if (e$ === u.h$.LOADING) {
                    let e = null != e4.current ? performance.now() - e4.current : null;
                    et?.(e), ez(u.h$.READY);
                }
            },
            t1 = (e) => {
                (e5.current = performance.now()), er?.(), ez(u.h$.BUFFERING);
            },
            t2 = (e) => {
                null != tu.current &&
                    (V?.(tu.current.currentTime, tu.current.duration),
                    eq.current || ej((tu.current.currentTime / tu.current.duration) * 100));
            },
            t3 = (e) => {
                tv(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE), ez(u.h$.READY), H?.();
            },
            t6 = (e) => {
                if (null == tu.current) return;
                let t = [];
                for (let e = 0; e < tu.current.buffered.length; e++) {
                    let n = tu.current.buffered.start(e),
                        r = tu.current.buffered.end(e);
                    r - n < 1 || t.push({ start: n / tu.current.duration, size: (r - n) / tu.current.duration });
                }
                eQ(t);
            },
            t4 = () => th(u.SB.ABORT),
            t5 = () => th(u.SB.ERROR),
            t7 = () => th(u.SB.SOURCE_ERROR),
            t8 = () => th(u.SB.EMPTIED),
            t9 = () => th(u.SB.STALLED),
            ne = (e) => {
                if (null != tu.current) {
                    if (e$ === u.h$.BUFFERING) {
                        let e = null != e5.current ? performance.now() - e5.current : null;
                        ei?.(e);
                    } else if (e$ === u.h$.LOADING) {
                        let e = null != e4.current ? performance.now() - e4.current : null;
                        et?.(e);
                    }
                    ez(u.h$.READY), eM === u.Q6.PLAYING && (e1.current || tv(u.Q6.PLAYING, u.KB.BUFFERING_RECOVERY));
                }
            },
            nt = (e) => {
                tY(e), eM === u.Q6.ENDED && tv(u.Q6.PLAYING, u.KB.USER);
            },
            nn = (e) => {
                e0(e),
                    e
                        ? ((e1.current = eM === u.Q6.PLAYING), e1.current && tu.current?.pause())
                        : e1.current && (tu.current?.play(), (e1.current = !1));
            },
            [{ controlBarAnimSpring: nr }, ni] = (0, d.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: w,
                onStart: () => {
                    e3(!1);
                },
                onRest: (e) => {
                    1 === e.value && e3(!0);
                },
            })),
            ns = (0, i.useRef)(null),
            [{ captionHeightSpring: na }, no] = (0, d.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: w }));
        i.useEffect(
            () => (
                no({ captionHeightSpring: ti && null != tm ? (ns.current?.clientHeight ?? 0) : 0, immediate: tl }),
                () => {
                    na.stop();
                }
            ),
            [ti, no, tl, tm, na],
        ),
            i.useEffect(
                () => (
                    ni({ controlBarAnimSpring: tM || eJ ? 1 : 0, immediate: tl }),
                    () => {
                        nr.stop();
                    }
                ),
                [tM, ni, tl, eJ, nr],
            );
        let nl = eM === u.Q6.ENDED && null != $,
            nu = i.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.KB.USER;
                    null != tu.current && (tY(0), tv(u.Q6.PLAYING, e));
                },
                [tY, tv],
            ),
            nc = (e) => {
                e9(e), Z?.(e);
            },
            nd = (e) => {
                tt(e), X?.(e);
            },
            n_ = i.useRef(null),
            nf = i.useCallback(
                (e) => {
                    tw(), n_.current?.(e.nativeEvent);
                },
                [tw],
            );
        return (0, r.jsx)(d.DUT, {
            className: N.W6,
            "data-fullscreen": ta,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: tD,
            onMouseLeave: tL,
            onMouseMove: tw,
            children: (0, r.jsxs)("div", {
                className: a()(N.NS, { [N.DO]: "portrait" === k, [N.r7]: "landscape" === k }),
                tabIndex: -1,
                onKeyDown: nf,
                style: { "--custom-footer-horizontal-padding": `${R}px`, "--custom-footer-bottom": "4px" },
                children: [
                    nl && $?.({ replay: nu }),
                    (0, r.jsxs)(h.A, {
                        ref: (e) => {
                            (tu.current = e),
                                (ew.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: y,
                        playsInline: !0,
                        mediaLayoutType: ta ? v.dG.STATIC : v.dG.RESPONSIVE,
                        className: a()({ [N.R]: nl, [N.IR]: !0 }),
                        controls: !1,
                        poster: F,
                        preload: e_,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: t2,
                        onEnded: t3,
                        onLoadedData: t0,
                        onLoadedMetadata: tQ,
                        onLoadStart: tZ,
                        onPlaying: tX,
                        onWaiting: t1,
                        onProgress: t6,
                        onCanPlay: ne,
                        onCanPlayThrough: ne,
                        onSeeked: tW,
                        onAbort: t4,
                        onError: t5,
                        onEmptied: t8,
                        onStalled: t9,
                        onClick: t$,
                        crossOrigin: eC ?? void 0,
                        children: [
                            null != W &&
                                (0, r.jsx)("track", {
                                    ref: tc,
                                    src: W,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !tp && (0, r.jsx)("source", { onError: t7, src: eN, type: "video/mp4" }),
                        ],
                    }),
                    e$ !== u.h$.READY &&
                        eM === u.Q6.PLAYING &&
                        null != eN &&
                        (0, r.jsx)("span", {
                            className: a()(N.S, { [N.F]: "center" === ev }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(d.y$y, { type: d.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(S.A, {
                        message: eR({ hasVideoAsset: null != eN, playerState: eM, pauseReason: t_ }),
                        showOverlay: null == eN,
                    }),
                    null != el &&
                        (0, r.jsx)(o.animated.div, {
                            className: N.MU,
                            style: {
                                opacity: (0, o.to)([nr.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, o.to)([nr.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, o.to)([nr.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: el(),
                        }),
                    null != eu &&
                        (0, r.jsx)("div", {
                            className: N.MU,
                            children: eu({ playerState: eM, isControlBarExpanded: tM }),
                        }),
                    tn &&
                        eM !== u.Q6.ENDED &&
                        null != K &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.DUT, {
                                    onClick: () => {
                                        eM === u.Q6.PAUSED && tv(u.Q6.PLAYING, u.KB.USER), tr(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: N.BG }),
                                }),
                                (0, r.jsx)(o.animated.div, {
                                    className: a()(N.xr, { [N.MZ]: "portrait" === k }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, o.to)([nr, na], (e, t) => `${e * ty[tT] + t}px`) },
                                    children: (0, r.jsx)(A.X, { text: K, onClose: tG }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(o.animated.div, {
                        className: N.Jp,
                        style: { opacity: (0, o.to)([nr.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: a()(N.yf, { [N.ZH]: eM === u.Q6.PLAYING, [N.v7]: eM === u.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": `${x}ms` },
                            children:
                                eM === u.Q6.PLAYING
                                    ? (0, r.jsx)(d.udU, { className: N.PK })
                                    : (0, r.jsx)(d.E$n, { className: N.PK }),
                        },
                        eM,
                    ),
                    ti &&
                        null != tm &&
                        !nl &&
                        (0, r.jsx)(o.animated.div, {
                            className: N.o$,
                            ref: ns,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, o.to)(
                                    [nr.to({ range: [0, 1], output: [-b, -ty[tT]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: N.qh,
                                children: tm.text,
                            }),
                        }),
                    (0, r.jsxs)(o.animated.div, {
                        className: N.r8,
                        style: { height: (0, o.to)([nr.to({ range: [0, 1], output: [0, ty[tT]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(o.animated.div, {
                                style: {
                                    transform: (0, o.to)(
                                        [nr.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${e * b}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: tM || eI ? void 0 : P,
                                    children: (0, r.jsx)(g.Ay, {
                                        percent: null != eV ? eV : eF,
                                        animate: !0 !== td.current && !eY && eM === u.Q6.PLAYING,
                                        interactionEnabled: e2 && tI > 0,
                                        backgroundColor: tM ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eM,
                                        preloadedBuffers: tM ? eX : void 0,
                                        durationSec: tg > 0 ? tg : 1,
                                        isFullyVisible: tM && e2,
                                        maxSeekableTime: null != Y && tI > 0 ? tI : void 0,
                                        progressGlow: em,
                                        progressFillClassName: eE,
                                        glowClassName: eg,
                                        persistGrabber: eT,
                                        onClick: nt,
                                        onScrubBack: tH,
                                        onScrubForward: tj,
                                        onDragStateChange: nn,
                                        indicatorConfig: ey,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(o.animated.div, {
                                className: N.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, o.to)(
                                        [nr.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    paddingBottom: (0, o.to)(
                                        [nr.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, o.to)([nr.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: tx,
                                onBlur: tP,
                                children: (0, r.jsx)(E.A, {
                                    videoRef: tu,
                                    playerState: eM,
                                    animSpring: nr,
                                    visible: tM,
                                    seekForwardEnabled: null == Y || (tu.current?.currentTime ?? 0) + 1 < tI,
                                    hideCaptionBtn: null == W,
                                    hideTranscriptBtn: null == K,
                                    hideSkipButtons: "portrait" === k,
                                    size: tT,
                                    downloadUrl: ef,
                                    downloadContentType: eh,
                                    autoFocus: eS,
                                    keyDownHandlerRef: n_,
                                    volume: e8,
                                    muted: te,
                                    transcriptEnabled: tn,
                                    captionEnabled: ti,
                                    fullScreenEnabled: ta,
                                    handlePlaybackBtnClick: tK,
                                    handleTranscriptBtnClick: tk,
                                    handleCaptionBtnClick: tU,
                                    handleFullScreenBtnClick: tV,
                                    handleSeekBackBtnClick: tH,
                                    handleSeekForwardBtnClick: tj,
                                    handleControlBarPendingInteraction: e0,
                                    onVolumeChange: nc,
                                    onMutedChange: nd,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
function U(e) {
    let { poster: t, posterPlaceholder: n, posterPlaceholderVersion: s, orientation: a } = e,
        [o, l] = i.useState(!1),
        u = i.useCallback(() => l(!0), []);
    return null == t
        ? null
        : (0, r.jsx)(c.y, {
              readyState: o ? y.Rv1.READY : y.Rv1.LOADING,
              aspectRatio: "portrait" === a ? 9 / 16 : 16 / 9,
              placeholder: n,
              placeholderVersion: s ?? 1,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              disableSpinner: !0,
              children: (0, r.jsx)("img", { src: t, className: N.zH, alt: "", onLoad: u }),
          });
}
let G = i.forwardRef(function (e, t) {
    let { active: n = !0, onClick: s, ...o } = e,
        {
            autoplay: l,
            poster: c,
            orientation: _ = "landscape",
            posterPlaceholder: f,
            posterPlaceholderVersion: h,
            renderOverlay: p,
            renderPersistentOverlay: m,
        } = o,
        [E, g] = i.useState(!1),
        A = i.useCallback(
            (e) => {
                null != s ? s(e) : g(!0);
            },
            [s],
        ),
        I = i.useRef(null);
    return n || E
        ? (0, r.jsx)(k, { ...o, onClick: s, autoplay: l || E, ref: t })
        : (0, r.jsx)(d.DUT, {
              className: a()(N.W6, N.nZ),
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: A,
              "aria-label": C.intl.string(C.t.RscU7I),
              focusProps: { ringTarget: I },
              children: (0, r.jsxs)("div", {
                  className: a()(N.NS, { [N.DO]: "portrait" === _, [N.r7]: "landscape" === _ }),
                  children: [
                      (0, r.jsx)(U, { poster: c, posterPlaceholder: f, posterPlaceholderVersion: h, orientation: _ }),
                      null != p && (0, r.jsx)("div", { className: N.MU, children: p() }),
                      null != m &&
                          (0, r.jsx)("div", {
                              className: N.MU,
                              children: m({ playerState: u.Q6.PAUSED, isControlBarExpanded: !0 }),
                          }),
                      (0, r.jsx)("div", {
                          className: N.mF,
                          ref: I,
                          children: (0, r.jsx)(d.udU, { size: "xs", color: "currentColor", className: N.z_ }),
                      }),
                  ],
              }),
          });
});
