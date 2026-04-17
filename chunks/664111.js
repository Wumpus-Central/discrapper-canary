n.d(t, { A: () => j }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(825638),
    u = n(311907),
    o = n(876230),
    c = n(649658),
    d = n(397927),
    m = n(964486),
    f = n(775602),
    h = n(607470),
    p = n(475815),
    E = n(662903),
    x = n(337953),
    v = n(183494),
    b = n(408121),
    g = n(984212),
    y = n(739416),
    S = n(931853),
    A = n(90721),
    C = n(652215),
    N = n(838541),
    R = n(985018),
    L = n(834926);
let w = { tension: 250, friction: 5, clamp: !0 },
    T = { visibility: "hidden" },
    P = l.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                performanceClockStartTime: c = 0,
                orientation: C = "landscape",
                videoUrlOverride: R,
                src: P,
                poster: D,
                initialTimeSec: j = 0,
                onProgressUpdate: M,
                onEnded: k,
                onError: I,
                maxSeekableTimeSec: B,
                captionTrackUrl: U,
                transcriptText: F,
                renderEndScreen: G,
                onPlayerStateChange: Q,
                onFullscreenChange: $,
                onVolumeChange: O,
                onMutedChange: _,
                initialVolume: K = 0.3,
                initialMuted: Y = !1,
                onLoadStart: X,
                onLoadEnd: z,
                onFirstFrame: V,
                onBufferingStart: W,
                onBufferingEnd: H,
                onFocusChange: Z,
                onVisibilityChange: J,
                onSeek: q,
                renderOverlay: ee,
                renderPersistentOverlay: et,
                transcriptClassName: en,
                onHlsInstance: er,
                onClick: el,
                preload: ea,
                downloadUrl: ei,
                downloadContentType: es,
                getPlaybackBlockedMessage: eu,
                progressClassName: eo,
                pauseOnLostVisibility: ec = !1,
                persistTimeline: ed = !1,
                persistPlayhead: em = !0,
                autoFocus: ef = !1,
                autoHideVolumeSlider: eh = !1,
                timelineIndicatorConfig: ep,
                loadingSpinnerPosition: eE = "top-left",
                crossOrigin: ex = "anonymous",
                withVideoHalo: ev = !1,
                objectFit: eb = "contain",
            } = e,
            eg = R ?? P,
            ey = eu ?? S.u,
            { focused: eS, focusedChanged: eA } = (0, y.A7)(),
            { visible: eC, visibleChanged: eN, targetRef: eR } = (0, y.O7)(),
            [eL, ew] = l.useState(a ? o.Q6.PLAYING : o.Q6.PAUSED),
            [eT, eP] = l.useState(!1),
            [eD, ej] = l.useState(!1),
            [eM, ek] = l.useState(0),
            [eI, eB] = l.useState(null),
            eU = l.useCallback((e) => {
                eB(null), ek(e);
            }, []),
            [eF, eG] = l.useState(!1),
            eQ = l.useRef(null),
            [e$, eO] = l.useState(o.h$.LOADING),
            e_ = l.useRef(!1),
            eK = l.useRef(null),
            [eY, eX] = l.useState([]),
            [ez, eV] = l.useState(!1),
            eW = l.useRef(!1),
            eH = l.useRef(!1),
            eZ = l.useRef(!1),
            eJ = l.useRef(!1),
            [eq, e0] = l.useState(!0),
            e1 = l.useRef(!0),
            e6 = l.useRef(null),
            e2 = l.useRef(null),
            e9 = l.useRef(0);
        l.useLayoutEffect(() => {
            e9.current = performance.now();
        }, []);
        let [e4, e8] = l.useState(K),
            [e7, e3] = l.useState(Y),
            [e5, te] = l.useState(!1),
            [tt, tn] = l.useState(!1),
            [tr, tl] = l.useState(!1),
            ta = (0, u.bG)([f.A], () => f.A.useReducedMotion),
            ti = (0, l.useRef)(null),
            ts = (0, l.useRef)(null),
            tu = (0, l.useRef)(null),
            to = l.useRef(!0),
            [tc, td] = l.useState(null);
        (0, A.A)({ videoRef: ti, canvasRef: ts, enabled: ev && !ta, canvasWidth: 32, canvasHeight: 18 });
        let tm = l.useCallback(
                (e, t) => {
                    I?.(e, t);
                },
                [I],
            ),
            { isHlsActive: tf } = (0, E.Ay)(ti, { src: eg, initialTimeSec: j, onError: tm, onHlsInstance: er }),
            [th, tp] = l.useState(null),
            [tE, tx] = l.useState(0),
            [tv, tb] = l.useState(!1),
            tg = B ?? ti.current?.duration ?? 0,
            [ty, tS] = l.useState(o.oA.MD),
            tA = { [o.oA.MD]: 56, [o.oA.LG]: 64 };
        (0, m.u5)(() => {
            to.current && (to.current = !1);
        });
        let tC = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((eJ.current = !0), ew(e), Q?.(e, t), null != ti.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            td(null), ti.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (eW.current = !1), ti.current.pause(), (e1.current = !1);
                            break;
                        case o.Q6.ENDED:
                            te(!1);
                    }
            },
            [Q],
        );
        l.useEffect(() => {
            if (!ec) return;
            let e = null != n && (n === d.ip4.HIDDEN || n === d.ip4.EXITING || n === d.ip4.EXITED),
                t = null != n && eN && !eC,
                r = eA && !eS;
            if ((e || t || r) && null != ti.current && eL === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                td(n), tC(o.Q6.PAUSED, n);
            }
        }, [ec, n, eS, eA, eC, eN, eL, tC]),
            l.useEffect(() => {
                eA && Z?.(eS, eL);
            }, [eS, eA, eL, Z]),
            l.useEffect(() => {
                eN && J?.(eC, eL);
            }, [eC, eN, eL, J]);
        let [tN, tR] = l.useState(!1),
            tL = l.useRef(null),
            tw = l.useRef(0);
        l.useLayoutEffect(() => {
            tw.current = performance.now();
        }, []);
        let tT = l.useCallback(() => {
                null != tL.current && clearTimeout(tL.current),
                    eL !== o.Q6.PLAYING ||
                        (tL.current = setTimeout(
                            () => {
                                eL === o.Q6.PLAYING && tR(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tw.current)),
                        ));
            }, [eL]),
            tP = l.useCallback(() => {
                tR(!1), (tw.current = performance.now()), tT();
            }, [tT]);
        l.useEffect(() => {
            if (eL !== o.Q6.PLAYING) {
                tR(!1), null != tL.current && clearTimeout(tL.current);
                return;
            }
            return (
                tT(),
                () => {
                    null != tL.current && clearTimeout(tL.current);
                }
            );
        }, [eL, tT]),
            l.useEffect(
                () => () => {
                    null != eQ.current && clearTimeout(eQ.current);
                },
                [],
            );
        let tD = !tN && (eD || eT || eL === o.Q6.ENDED),
            tj = l.useRef($);
        tj.current = $;
        let tM = l.useCallback(() => {
                let e = (0, p.qf)(ti.current?.parentNode, ti.current);
                null == e || (0, p._U)(e) || (e.removeEventListener(p.Wb, tM), tl(!1), tj.current?.(!1), tS(o.oA.MD));
            }, []),
            tk = () => {
                null == ti.current ||
                    (tB(Math.max((eK.current ?? ti.current.currentTime) - 10, 0)),
                    eL === o.Q6.ENDED && tC(o.Q6.PAUSED, o.KB.SEEK));
            },
            tI = () => {
                if (null == ti.current) return;
                let e = Math.min((eK.current ?? ti.current.currentTime) + 10, tg);
                tB(e), eL !== o.Q6.ENDED && e >= ti.current.duration && tC(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = ti.current;
            return () => {
                let t = (0, p.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(p.Wb, tM);
            };
        }, [tM]);
        let tB = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == ti.current) return;
                    let n = ti.current.currentTime;
                    (eK.current = e),
                        eB((e / (ti.current.duration ?? 1)) * 100),
                        eG(!0),
                        null != eQ.current && clearTimeout(eQ.current),
                        (eQ.current = setTimeout(() => {
                            eG(!1), (eQ.current = null);
                        }, 100)),
                        (e_.current = !0),
                        (ti.current.currentTime = e),
                        t && q?.(n, e);
                },
                [q],
            ),
            tU = () => {
                if (null != ti.current)
                    switch (eL) {
                        case o.Q6.ENDED:
                            tB(0), tC(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            td(o.KB.USER), tC(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tC(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            tF = (e) => {
                tp(e);
            },
            tG = (e) => {
                tp((t) => (t?.id === e.id ? null : t));
            },
            tQ = l.useCallback(() => {
                if (null == ti.current || 0 === ti.current.textTracks.length) return;
                let e = ti.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, g.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tF(n)), (n.onexit = () => tG(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == tu.current) return;
            let e = tu.current;
            return (
                e.addEventListener("load", tQ),
                () => {
                    null != e && e.removeEventListener("load", tQ);
                }
            );
        }, [tQ]);
        let t$ = (e) => {
                if (null != ti.current) {
                    if (e$ === o.h$.BUFFERING) {
                        let e = null != e2.current ? performance.now() - e2.current : null;
                        H?.(e);
                    } else if (e$ === o.h$.LOADING) {
                        let e = null != e6.current ? performance.now() - e6.current : null;
                        z?.(e);
                    }
                    eO(o.h$.READY), eL === o.Q6.PLAYING && (eW.current || tC(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            [{ controlBarAnimSpring: tO }, t_] = (0, d.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: w,
                onStart: () => {
                    e0(!1);
                },
                onRest: (e) => {
                    1 === e.value && e0(!0);
                },
            })),
            tK = (0, l.useRef)(null),
            [{ captionHeightSpring: tY }, tX] = (0, d.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: w }));
        l.useEffect(
            () => (
                tX({ captionHeightSpring: tt && null != th ? (tK.current?.clientHeight ?? 0) : 0, immediate: ta }),
                () => {
                    tY.stop();
                }
            ),
            [tt, tX, ta, th, tY],
        ),
            l.useEffect(
                () => (
                    t_({ controlBarAnimSpring: tD || ez ? 1 : 0, immediate: ta }),
                    () => {
                        tO.stop();
                    }
                ),
                [tD, t_, ta, ez, tO],
            );
        let tz = eL === o.Q6.ENDED && null != G,
            tV = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != ti.current && (tB(0), tC(o.Q6.PLAYING, e));
                },
                [tB, tC],
            ),
            tW = l.useRef(null),
            tH = l.useCallback(
                (e) => {
                    tP(), tW.current?.(e.nativeEvent);
                },
                [tP],
            );
        return (0, r.jsx)(d.DUT, {
            className: L.W6,
            "data-fullscreen": tr,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eP(!0), tR(!1), (tw.current = performance.now()), null != tL.current && clearTimeout(tL.current);
            },
            onMouseLeave: () => {
                eP(!1), tR(!1);
            },
            onMouseMove: tP,
            children: (0, r.jsxs)("div", {
                className: i()(L.NS, { [L.DO]: "portrait" === C, [L.r7]: "landscape" === C }),
                tabIndex: -1,
                onKeyDown: tH,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    ev && !ta && (0, r.jsx)("canvas", { ref: ts, className: L.Xm }),
                    tz && G?.({ replay: tV }),
                    (0, r.jsxs)(h.A, {
                        ref: (e) => {
                            (ti.current = e),
                                (eR.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: a,
                        playsInline: !0,
                        mediaLayoutType: tr ? N.dG.STATIC : N.dG.RESPONSIVE,
                        className: i()({ [L.R]: tz, [L.IR]: !0, [L.FP]: "cover" === eb && !tr }),
                        controls: !1,
                        poster: D,
                        preload: ea,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != ti.current &&
                                (M?.(ti.current.currentTime, ti.current.duration),
                                e_.current || eU((ti.current.currentTime / ti.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            eO(o.h$.READY), k?.(), eH.current || tC(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                        },
                        onLoadedData: (e) => {
                            if (e$ === o.h$.LOADING) {
                                let e = null != e6.current ? performance.now() - e6.current : null;
                                z?.(e), eO(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == ti.current) return;
                            j > 0 && !tf && tB(j, !1), e7 ? (ti.current.volume = 0) : (ti.current.volume = e4);
                            let t = ti.current.duration;
                            t > 0 && isFinite(t) && tx(t), tb(!0);
                        },
                        onLoadStart: () => {
                            (e6.current = performance.now()), X?.();
                        },
                        onPlaying: () => {
                            if (!e1.current) return;
                            let e = 0 !== c ? c : e9.current,
                                t = performance.now() - e;
                            V?.(t), (e1.current = !1);
                        },
                        onWaiting: (e) => {
                            (e2.current = performance.now()), W?.(), eO(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == ti.current) return;
                            let t = [];
                            for (let e = 0; e < ti.current.buffered.length; e++) {
                                let n = ti.current.buffered.start(e),
                                    r = ti.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / ti.current.duration, size: (r - n) / ti.current.duration });
                            }
                            eX(t);
                        },
                        onCanPlay: t$,
                        onCanPlayThrough: t$,
                        onSeeked: () => {
                            (e_.current = !1),
                                (eK.current = null),
                                null != ti.current && eU((ti.current.currentTime / ti.current.duration) * 100);
                        },
                        onAbort: () => tm(o.SB.ABORT),
                        onError: () => tm(o.SB.ERROR),
                        onEmptied: () => tm(o.SB.EMPTIED),
                        onStalled: () => tm(o.SB.STALLED),
                        onClick: (e) => {
                            null != el ? el(e) : tU();
                        },
                        crossOrigin: ex ?? void 0,
                        children: [
                            null != U &&
                                (0, r.jsx)("track", {
                                    ref: tu,
                                    src: U,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !tf &&
                                (0, r.jsx)("source", {
                                    onError: () => tm(o.SB.SOURCE_ERROR),
                                    src: eg,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    e$ !== o.h$.READY &&
                        eL === o.Q6.PLAYING &&
                        null != eg &&
                        (0, r.jsx)("span", {
                            className: i()(L.S, { [L.F]: "center" === eE }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(d.y$y, { type: d.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(S.A, {
                        message: ey({ hasVideoAsset: null != eg, playerState: eL, pauseReason: tc }),
                        showOverlay: null == eg,
                    }),
                    null != ee &&
                        (0, r.jsx)(s.animated.div, {
                            className: L.MU,
                            style: {
                                opacity: (0, s.to)([tO.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, s.to)([tO.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, s.to)([tO.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: ee(),
                        }),
                    null != et &&
                        (0, r.jsx)("div", {
                            className: L.MU,
                            children: et({ playerState: eL, isControlBarExpanded: tD }),
                        }),
                    e5 &&
                        eL !== o.Q6.ENDED &&
                        null != F &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.DUT, {
                                    onClick: () => {
                                        eL === o.Q6.PAUSED && tC(o.Q6.PLAYING, o.KB.USER), te(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: L.BG }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: i()(L.xr, en, { [L.MZ]: "portrait" === C }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, s.to)([tO, tY], (e, t) => `${e * tA[ty] + t}px`) },
                                    children: (0, r.jsx)(b.X, {
                                        text: F,
                                        onClose: () => {
                                            te(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: L.Jp,
                        style: { opacity: (0, s.to)([tO.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(L.yf, {
                                [L.ZH]: eJ.current && eL === o.Q6.PLAYING,
                                [L.v7]: eJ.current && eL === o.Q6.PAUSED,
                            }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eL === o.Q6.PLAYING
                                    ? (0, r.jsx)(d.udU, { className: L.PK })
                                    : (0, r.jsx)(d.E$n, { className: L.PK }),
                        },
                        eL,
                    ),
                    tt &&
                        null != th &&
                        !tz &&
                        (0, r.jsx)(s.animated.div, {
                            className: L.o$,
                            ref: tK,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, s.to)(
                                    [tO.to({ range: [0, 1], output: [-20, -tA[ty]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: L.qh,
                                children: th.text,
                            }),
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: L.r8,
                        style: { height: (0, s.to)([tO.to({ range: [0, 1], output: [0, tA[ty]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(s.animated.div, {
                                style: {
                                    transform: (0, s.to)(
                                        [tO.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: tD || ez || ed ? void 0 : T,
                                    children: (0, r.jsx)(v.Ay, {
                                        percent: null != eI ? eI : eM,
                                        animate: !0 !== to.current && !eF && eL === o.Q6.PLAYING && tv,
                                        interactionEnabled: eq && tg > 0,
                                        backgroundColor: tD || ed ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eL,
                                        preloadedBuffers: tD ? eY : void 0,
                                        durationSec: tE > 0 ? tE : +!tv,
                                        isFullyVisible: tD && eq,
                                        maxSeekableTime: null != B && tg > 0 ? tg : void 0,
                                        progressClassName: eo,
                                        persistPlayhead: em,
                                        onClick: (e) => {
                                            if ((tB(e), eL === o.Q6.ENDED && !eH.current)) {
                                                let t = ti.current?.duration;
                                                (null == t || Number.isNaN(t) || e < t) && tC(o.Q6.PLAYING, o.KB.USER);
                                            }
                                        },
                                        onScrubBack: tk,
                                        onScrubForward: tI,
                                        onDragStateChange: (e) => {
                                            if (((eH.current = e), eV(e), e))
                                                (eW.current = eL === o.Q6.PLAYING),
                                                    (eZ.current = eL === o.Q6.ENDED),
                                                    eW.current
                                                        ? ti.current?.pause()
                                                        : eZ.current && tC(o.Q6.PAUSED, o.KB.SEEK);
                                            else {
                                                let e = ti.current,
                                                    t =
                                                        null != e &&
                                                        !Number.isNaN(e.duration) &&
                                                        e.currentTime >= e.duration;
                                                eW.current
                                                    ? ((eW.current = !1),
                                                      t ? tC(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE) : e?.play())
                                                    : eZ.current
                                                      ? ((eZ.current = !1),
                                                        t
                                                            ? tC(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE)
                                                            : tC(o.Q6.PLAYING, o.KB.USER))
                                                      : t && tC(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                                            }
                                        },
                                        indicatorConfig: ep,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: L.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, s.to)(
                                        [tO.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 20}px`,
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [tO.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, s.to)([tO.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => ej(!0),
                                onBlur: () => ej(!1),
                                children: (0, r.jsx)(x.A, {
                                    videoRef: ti,
                                    playerState: eL,
                                    animSpring: tO,
                                    visible: tD,
                                    seekForwardEnabled: null == B || (ti.current?.currentTime ?? 0) + 1 < tg,
                                    hideCaptionBtn: null == U,
                                    hideTranscriptBtn: null == F,
                                    hideSkipButtons: "portrait" === C,
                                    size: ty,
                                    downloadUrl: ei,
                                    downloadContentType: es,
                                    autoFocus: ef,
                                    keyDownHandlerRef: tW,
                                    volume: e4,
                                    muted: e7,
                                    transcriptEnabled: e5,
                                    captionEnabled: tt,
                                    fullScreenEnabled: tr,
                                    handlePlaybackBtnClick: tU,
                                    handleTranscriptBtnClick: () => {
                                        te(!e5);
                                    },
                                    handleCaptionBtnClick: () => {
                                        tn(!tt);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !tr,
                                            t = (0, p.qf)(ti.current?.parentNode, ti.current);
                                        e && null != t
                                            ? ((0, p.tl)(t), t.addEventListener(p.Wb, tM), $?.(!0), tS(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(p.Wb, tM), $?.(!1), (0, p.sP)(t), tS(o.oA.MD)),
                                            tl(e);
                                    },
                                    handleSeekBackBtnClick: tk,
                                    handleSeekForwardBtnClick: tI,
                                    autoHideVolumeSlider: eh,
                                    handleControlBarPendingInteraction: eV,
                                    onVolumeChange: (e) => {
                                        e8(e), O?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        e3(e), _?.(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
function D(e) {
    let { poster: t, posterPlaceholder: n, posterPlaceholderVersion: a, orientation: i, objectFit: s = "contain" } = e,
        [u, o] = l.useState(!1),
        d = l.useCallback(() => o(!0), []);
    return null == t
        ? null
        : (0, r.jsx)(c.y, {
              readyState: u ? C.Rv1.READY : C.Rv1.LOADING,
              aspectRatio: "portrait" === i ? 9 / 16 : 16 / 9,
              placeholder: n,
              placeholderVersion: a ?? 1,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              disableSpinner: !0,
              children: (0, r.jsx)("img", { src: t, className: L.zH, style: { objectFit: s }, alt: "", onLoad: d }),
          });
}
let j = l.forwardRef(function (e, t) {
    let { active: n = !0, onClick: a, ...s } = e,
        {
            autoplay: u,
            poster: c,
            orientation: m = "landscape",
            posterPlaceholder: f,
            posterPlaceholderVersion: h,
            renderOverlay: p,
            renderPersistentOverlay: E,
            objectFit: x,
        } = s,
        [v, b] = l.useState(!1),
        g = l.useCallback(
            (e) => {
                null != a ? a(e) : b(!0);
            },
            [a],
        ),
        y = l.useRef(null);
    return n || v
        ? (0, r.jsx)(P, { ...s, onClick: a, autoplay: u || v, ref: t })
        : (0, r.jsx)(d.DUT, {
              className: i()(L.W6, L.nZ),
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: g,
              "aria-label": R.intl.string(R.t.RscU7I),
              focusProps: { ringTarget: y },
              children: (0, r.jsxs)("div", {
                  className: i()(L.NS, { [L.DO]: "portrait" === m, [L.r7]: "landscape" === m }),
                  children: [
                      (0, r.jsx)(D, {
                          poster: c,
                          posterPlaceholder: f,
                          posterPlaceholderVersion: h,
                          orientation: m,
                          objectFit: x,
                      }),
                      null != p && (0, r.jsx)("div", { className: L.MU, children: p() }),
                      null != E &&
                          (0, r.jsx)("div", {
                              className: L.MU,
                              children: E({ playerState: o.Q6.PAUSED, isControlBarExpanded: !0 }),
                          }),
                      (0, r.jsx)("div", {
                          className: L.mF,
                          ref: y,
                          children: (0, r.jsx)(d.udU, { size: "xs", color: "currentColor", className: L.z_ }),
                      }),
                  ],
              }),
          });
});
