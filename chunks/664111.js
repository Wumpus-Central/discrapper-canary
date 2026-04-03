n.d(t, { A: () => L }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(687498),
    o = n(311907),
    u = n(876230),
    d = n(649658),
    c = n(397927),
    m = n(964486),
    h = n(775602),
    p = n(607470),
    f = n(475815),
    x = n(662903),
    b = n(337953),
    E = n(183494),
    v = n(408121),
    g = n(984212),
    y = n(739416),
    S = n(931853),
    C = n(652215),
    A = n(838541),
    N = n(985018),
    R = n(246878);
let T = { tension: 250, friction: 5, clamp: !0 },
    w = l.forwardRef(function (e, t) {
        let {
                targetTimeSec: n = 1 / 0,
                parentTransitionState: a,
                onOptimisticProgressUpdate: d = () => {},
                autoplay: C = !1,
                performanceClockStartTime: N = 0,
                orientation: w = "landscape",
                videoUrlOverride: j,
                src: L,
                poster: P,
                initialTimeSec: D = 0,
                onProgressUpdate: M,
                onEnded: k,
                onError: I,
                maxSeekableTimeSec: B,
                captionTrackUrl: U,
                transcriptText: G,
                renderEndScreen: O,
                onPlayerStateChange: _,
                onFullscreenChange: Q,
                onVolumeChange: F,
                onLoadStart: K,
                onLoadEnd: $,
                onFirstFrame: Y,
                onBufferingStart: z,
                onBufferingEnd: X,
                onFocusChange: W,
                onVisibilityChange: V,
                onSeek: H,
                renderOverlay: J,
                renderPersistentOverlay: Z,
                onHlsInstance: q,
                preload: ee,
                downloadUrl: et,
                downloadContentType: en,
                progressGlow: er,
                pauseOnLostVisibility: el = !1,
                autoFocus: ea = !1,
                timelineIndicatorConfig: ei,
                loadingSpinnerPosition: es = "top-left",
            } = e,
            eo = j ?? L,
            { focused: eu, focusedChanged: ed } = (0, y.A7)(),
            { visible: ec, visibleChanged: em, targetRef: eh } = (0, y.O7)(),
            [ep, ef] = l.useState(C ? u.Q6.PLAYING : u.Q6.PAUSED),
            [ex, eb] = l.useState(!1),
            [eE, ev] = l.useState(!1),
            [eg, ey] = l.useState(0),
            [eS, eC] = l.useState(null),
            eA = l.useCallback((e) => {
                eC(null), ey(e);
            }, []),
            [eN, eR] = l.useState(!1),
            [eT, ew] = l.useState(!0),
            [ej, eL] = l.useState(!1),
            [eP, eD] = l.useState([]),
            [eM, ek] = l.useState(!1),
            [eI, eB] = l.useState(!1),
            eU = l.useRef(!0),
            eG = l.useRef(null),
            eO = l.useRef(null),
            e_ = l.useRef(0);
        l.useLayoutEffect(() => {
            e_.current = performance.now();
        }, []);
        let [eQ, eF] = l.useState(0.3),
            [eK, e$] = l.useState(!1),
            [eY, ez] = l.useState(!1),
            [eX, eW] = l.useState(!1),
            [eV, eH] = l.useState(!1),
            eJ = (0, o.bG)([h.A], () => h.A.useReducedMotion),
            eZ = (0, l.useRef)(null),
            eq = (0, l.useRef)(null),
            e0 = l.useRef(!0),
            [e1, e6] = l.useState(null),
            e2 = l.useCallback(
                (e, t) => {
                    I?.(e, t);
                },
                [I],
            ),
            { isHlsActive: e9 } = (0, x.Ay)(eZ, { src: eo, initialTimeSec: D, onError: e2, onHlsInstance: q }),
            [e4, e8] = l.useState(!1),
            [e7, e3] = l.useState(null),
            [e5, te] = l.useState(0),
            tt = B ?? eZ.current?.duration ?? 0,
            [tn, tr] = l.useState(u.oA.MD),
            tl = { [u.oA.MD]: 50, [u.oA.LG]: 58 };
        (0, m.u5)(() => {
            e0.current && (e0.current = !1);
        });
        let ta = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((ef(e), _?.(e, t), null != eZ.current))
                    switch (e) {
                        case u.Q6.PLAYING:
                            e6(null), eZ.current.play();
                            break;
                        case u.Q6.PAUSED:
                            eZ.current.pause(), (eU.current = !1);
                            break;
                        case u.Q6.ENDED:
                            ez(!1);
                    }
            },
            [_],
        );
        l.useEffect(() => {
            if (!el) return;
            let e = null != a && (a === c.ip4.HIDDEN || a === c.ip4.EXITING || a === c.ip4.EXITED),
                t = null != a && em && !ec,
                n = ed && !eu;
            if ((e || t || n) && null != eZ.current && ep === u.Q6.PLAYING) {
                let n = e || t ? u.KB.VISIBILITY : u.KB.FOCUS;
                e6(n), ta(u.Q6.PAUSED, n);
            }
        }, [el, a, eu, ed, ec, em, ep, ta]),
            l.useEffect(() => {
                ed && W?.(eu, ep);
            }, [eu, ed, ep, W]),
            l.useEffect(() => {
                em && V?.(ec, ep);
            }, [ec, em, ep, V]);
        let [ti, ts] = l.useState(!1),
            to = l.useRef(null),
            tu = l.useRef(0);
        l.useLayoutEffect(() => {
            tu.current = performance.now();
        }, []);
        let td = l.useCallback(() => {
                null != to.current && clearTimeout(to.current),
                    ep !== u.Q6.PLAYING ||
                        (to.current = setTimeout(
                            () => {
                                ep === u.Q6.PLAYING && ts(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tu.current)),
                        ));
            }, [ep]),
            tc = l.useCallback(() => {
                ts(!1), (tu.current = performance.now()), td();
            }, [td]);
        l.useEffect(() => {
            if (ep !== u.Q6.PLAYING) {
                ts(!1), null != to.current && clearTimeout(to.current);
                return;
            }
            return (
                td(),
                () => {
                    null != to.current && clearTimeout(to.current);
                }
            );
        }, [ep, td]);
        let tm = !ti && (eE || ex || ep === u.Q6.ENDED),
            th = l.useCallback(() => {
                let e = (0, f.qf)(eZ.current?.parentNode, eZ.current);
                null == e || (0, f._U)(e) || (e.removeEventListener(f.Wb, th), eH(!1), Q?.(!1), tr(u.oA.MD));
            }, [Q]),
            tp = () => {
                null == eZ.current ||
                    (tx(Math.max(eZ.current.currentTime - 10, 0)), ep === u.Q6.ENDED && ta(u.Q6.PAUSED, u.KB.SEEK));
            },
            tf = () => {
                if (null == eZ.current) return;
                let e = Math.min(eZ.current.currentTime + 10, tt);
                tx(e), ep !== u.Q6.ENDED && e >= eZ.current.duration && ta(u.Q6.ENDED, u.KB.SEEK);
            };
        l.useEffect(() => {
            let e = eZ.current;
            return () => {
                let t = (0, f.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(f.Wb, th);
            };
        }, [th]);
        let tx = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == eZ.current) return;
                    let n = eZ.current.currentTime;
                    eC((e / (eZ.current.duration ?? 1)) * 100),
                        eR(!0),
                        e8(!1),
                        (eZ.current.currentTime = e),
                        t && H?.(n, e);
                },
                [H],
            ),
            tb = () => {
                if (null != eZ.current)
                    switch (ep) {
                        case u.Q6.ENDED:
                            tx(0), ta(u.Q6.PLAYING, u.KB.USER);
                            break;
                        case u.Q6.PLAYING:
                            e6(u.KB.USER), ta(u.Q6.PAUSED, u.KB.USER);
                            break;
                        default:
                            ta(u.Q6.PLAYING, u.KB.USER);
                    }
            },
            tE = (e) => {
                e3(e);
            },
            tv = (e) => {
                e3((t) => (t?.id === e.id ? null : t));
            },
            tg = l.useCallback(() => {
                if (null == eZ.current || 0 === eZ.current.textTracks.length) return;
                let e = eZ.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, g.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tE(n)), (n.onexit = () => tv(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == eq.current) return;
            let e = eq.current;
            return (
                e.addEventListener("load", tg),
                () => {
                    null != e && e.removeEventListener("load", tg);
                }
            );
        }, [tg]);
        let ty = (e) => {
            if (null != eZ.current && ep === u.Q6.PLAYING) {
                if ((eT && ew(!1), ej)) {
                    let e = null != eO.current ? performance.now() - eO.current : null;
                    X?.(e), eL(!1);
                }
                ta(u.Q6.PLAYING, u.KB.BUFFERING_RECOVERY);
            }
        };
        l.useEffect(() => {
            if (!eN) return;
            let e = setTimeout(() => {
                eR(!1);
            }, 1e3);
            return () => clearTimeout(e);
        }, [eN]);
        let [{ controlBarAnimSpring: tS }, tC] = (0, c.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: T,
                onStart: () => {
                    eB(!1);
                },
                onRest: (e) => {
                    1 === e.value && eB(!0);
                },
            })),
            tA = (0, l.useRef)(null),
            [{ captionHeightSpring: tN }, tR] = (0, c.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: T }));
        l.useEffect(
            () => (
                tR({ captionHeightSpring: eX && null != e7 ? (tA.current?.clientHeight ?? 0) : 0, immediate: eJ }),
                () => {
                    tN.stop();
                }
            ),
            [eX, tR, eJ, e7, tN],
        ),
            l.useEffect(
                () => (
                    tC({ controlBarAnimSpring: tm || eM ? 1 : 0, immediate: eJ }),
                    () => {
                        tS.stop();
                    }
                ),
                [tm, tC, eJ, eM, tS],
            );
        let tT = ep === u.Q6.ENDED && null != O,
            tw = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.KB.USER;
                    null != eZ.current && (tx(0), ta(u.Q6.PLAYING, e));
                },
                [tx, ta],
            ),
            tj = l.useRef(null),
            tL = l.useCallback(
                (e) => {
                    tc(), tj.current?.(e.nativeEvent);
                },
                [tc],
            );
        return (0, r.jsx)(c.DUT, {
            className: R.W6,
            "data-fullscreen": eV,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eb(!0), ts(!1), (tu.current = performance.now()), null != to.current && clearTimeout(to.current);
            },
            onMouseLeave: () => {
                eb(!1), ts(!1);
            },
            onMouseMove: tc,
            onKeyDown: tL,
            children: (0, r.jsxs)("div", {
                className: i()(R.NS, { [R.DO]: "portrait" === w, [R.r7]: "landscape" === w }),
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    tT && O?.({ replay: tw }),
                    (0, r.jsxs)(p.A, {
                        ref: (e) => {
                            (eZ.current = e),
                                (eh.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: C,
                        playsInline: !0,
                        mediaLayoutType: eV ? A.dG.STATIC : A.dG.RESPONSIVE,
                        className: i()({ [R.R]: tT, [R.IR]: !0 }),
                        controls: !1,
                        poster: P,
                        preload: ee,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != eZ.current &&
                                (M?.(eZ.current.currentTime, eZ.current.duration),
                                eA((eZ.current.currentTime / eZ.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            ta(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE), eL(!1), k?.();
                        },
                        onLoadedData: (e) => {
                            if (eT) {
                                let e = null != eG.current ? performance.now() - eG.current : null;
                                $?.(e), ew(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == eZ.current) return;
                            D > 0 && tx(D, !1), eK ? (eZ.current.volume = 0) : (eZ.current.volume = eQ);
                            let t = eZ.current.duration;
                            t > 0 && isFinite(t) && te(t);
                        },
                        onLoadStart: () => {
                            (eG.current = performance.now()), K?.();
                        },
                        onPlaying: () => {
                            if (!eU.current) return;
                            let e = 0 !== N ? N : e_.current,
                                t = performance.now() - e;
                            Y?.(t), (eU.current = !1);
                        },
                        onWaiting: (e) => {
                            (eO.current = performance.now()), z?.(), eL(!0);
                        },
                        onProgress: (e) => {
                            if (null == eZ.current) return;
                            let t = [];
                            for (let e = 0; e < eZ.current.buffered.length; e++) {
                                let n = eZ.current.buffered.start(e),
                                    r = eZ.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / eZ.current.duration, size: (r - n) / eZ.current.duration });
                            }
                            eD(t);
                        },
                        onCanPlay: ty,
                        onCanPlayThrough: ty,
                        onSeeked: () => {
                            e8(!0);
                        },
                        onAbort: () => e2(u.SB.ABORT),
                        onError: () => e2(u.SB.ERROR),
                        onEmptied: () => e2(u.SB.EMPTIED),
                        onStalled: () => e2(u.SB.STALLED),
                        onClick: () => {
                            tb();
                        },
                        crossOrigin: "anonymous",
                        children: [
                            null != U &&
                                (0, r.jsx)("track", {
                                    ref: eq,
                                    src: U,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !e9 &&
                                (0, r.jsx)("source", {
                                    onError: () => e2(u.SB.SOURCE_ERROR),
                                    src: eo,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    (eT || ej) &&
                        ep === u.Q6.PLAYING &&
                        null != eo &&
                        (0, r.jsx)("span", {
                            className: i()(R.S, { [R.F]: "center" === es }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(S.A, {
                        message: (0, S.u)({ hasVideoAsset: null != eo, playerState: ep, pauseReason: e1 }),
                        showOverlay: null == eo,
                    }),
                    null != J &&
                        (0, r.jsx)(s.animated.div, {
                            className: R.MU,
                            style: {
                                opacity: (0, s.to)([tS.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, s.to)([tS.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, s.to)([tS.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: J(),
                        }),
                    null != Z &&
                        (0, r.jsx)("div", {
                            className: R.MU,
                            children: Z({ playerState: ep, isControlBarExpanded: tm }),
                        }),
                    eY &&
                        ep !== u.Q6.ENDED &&
                        null != G &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.DUT, {
                                    onClick: () => {
                                        ep === u.Q6.PAUSED && ta(u.Q6.PLAYING, u.KB.USER), ez(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: R.BG }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: i()(R.xr, { [R.MZ]: "portrait" === w }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, s.to)([tS, tN], (e, t) => `${e * tl[tn] + t}px`) },
                                    children: (0, r.jsx)(v.X, {
                                        text: G,
                                        onClose: () => {
                                            ez(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: R.Jp,
                        style: { opacity: (0, s.to)([tS.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(R.yf, { [R.ZH]: ep === u.Q6.PLAYING, [R.v7]: ep === u.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ep === u.Q6.PLAYING
                                    ? (0, r.jsx)(c.udU, { className: R.PK })
                                    : (0, r.jsx)(c.E$n, { className: R.PK }),
                        },
                        ep,
                    ),
                    eX &&
                        null != e7 &&
                        !tT &&
                        (0, r.jsx)(s.animated.div, {
                            className: R.o$,
                            ref: tA,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, s.to)(
                                    [tS.to({ range: [0, 1], output: [-20, -tl[tn]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: R.qh,
                                children: e7.text,
                            }),
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: R.r8,
                        style: { height: (0, s.to)([tS.to({ range: [0, 1], output: [0, tl[tn]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(s.animated.div, {
                                style: {
                                    transform: (0, s.to)(
                                        [tS.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)(E.Ay, {
                                    percent: null != eS ? eS : eg,
                                    animate: !0 !== e0.current && !eN,
                                    interactionEnabled: eI && tt > 0,
                                    backgroundColor: tm ? void 0 : "rgba(0, 0, 0, 0.0)",
                                    playerState: ep,
                                    preloadedBuffers: tm ? eP : void 0,
                                    durationSec: e5 > 0 ? e5 : 1,
                                    isFullyVisible: tm && eI,
                                    maxSeekableTime: tt > 0 ? tt : void 0,
                                    progressGlow: er,
                                    onClick: (e) => {
                                        tx(e), ep === u.Q6.ENDED && ta(u.Q6.PLAYING, u.KB.USER);
                                    },
                                    onScrubBack: tp,
                                    onScrubForward: tf,
                                    indicatorConfig: ei,
                                    "data-testid": "discord-web-video-player-timeline",
                                }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: R.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, s.to)(
                                        [tS.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [tS.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, s.to)([tS.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => ev(!0),
                                onBlur: () => ev(!1),
                                children: (0, r.jsx)(b.A, {
                                    videoRef: eZ,
                                    playerState: ep,
                                    animSpring: tS,
                                    visible: tm,
                                    seekForwardEnabled: null == B || (eZ.current?.currentTime ?? 0) + 1 < tt,
                                    hideCaptionBtn: null == U,
                                    hideTranscriptBtn: null == G,
                                    hideSkipButtons: "portrait" === w,
                                    size: tn,
                                    downloadUrl: et,
                                    downloadContentType: en,
                                    autoFocus: ea,
                                    keyDownHandlerRef: tj,
                                    volume: eQ,
                                    muted: eK,
                                    transcriptEnabled: eY,
                                    captionEnabled: eX,
                                    fullScreenEnabled: eV,
                                    handlePlaybackBtnClick: tb,
                                    handleTranscriptBtnClick: () => {
                                        ez(!eY);
                                    },
                                    handleCaptionBtnClick: () => {
                                        eW(!eX);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !eV,
                                            t = (0, f.qf)(eZ.current?.parentNode, eZ.current);
                                        e && null != t
                                            ? ((0, f.tl)(t), t.addEventListener(f.Wb, th), Q?.(!0), tr(u.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(f.Wb, th), Q?.(!1), (0, f.sP)(t), tr(u.oA.MD)),
                                            eH(e);
                                    },
                                    handleSeekBackBtnClick: tp,
                                    handleSeekForwardBtnClick: tf,
                                    handleControlBarPendingInteraction: ek,
                                    onVolumeChange: (e) => {
                                        eF(e), F?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        e$(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
function j(e) {
    let { poster: t, posterPlaceholder: n, posterPlaceholderVersion: a, orientation: i } = e,
        [s, o] = l.useState(!1),
        u = l.useCallback(() => o(!0), []);
    return null == t
        ? null
        : (0, r.jsx)(d.y, {
              readyState: s ? C.Rv1.READY : C.Rv1.LOADING,
              aspectRatio: "portrait" === i ? 9 / 16 : 16 / 9,
              placeholder: n,
              placeholderVersion: a ?? 1,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              disableSpinner: !0,
              children: (0, r.jsx)("img", { src: t, className: R.zH, alt: "", onLoad: u }),
          });
}
let L = l.forwardRef(function (e, t) {
    let { active: n = !0, ...a } = e,
        {
            autoplay: s,
            poster: o,
            orientation: d = "landscape",
            posterPlaceholder: m,
            posterPlaceholderVersion: h,
            renderOverlay: p,
            renderPersistentOverlay: f,
        } = a,
        [x, b] = l.useState(!1),
        E = l.useCallback(() => {
            b(!0);
        }, []),
        v = l.useRef(null);
    return n || x
        ? (0, r.jsx)(w, { ...a, autoplay: s || x, ref: t })
        : (0, r.jsx)(c.DUT, {
              className: R.W6,
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: E,
              "aria-label": N.intl.string(N.t.RscU7I),
              focusProps: { ringTarget: v },
              children: (0, r.jsxs)("div", {
                  className: i()(R.NS, { [R.DO]: "portrait" === d, [R.r7]: "landscape" === d }),
                  children: [
                      (0, r.jsx)(j, { poster: o, posterPlaceholder: m, posterPlaceholderVersion: h, orientation: d }),
                      null != p && (0, r.jsx)("div", { className: R.MU, children: p() }),
                      null != f &&
                          (0, r.jsx)("div", {
                              className: R.MU,
                              children: f({ playerState: u.Q6.PAUSED, isControlBarExpanded: !0 }),
                          }),
                      (0, r.jsx)("div", {
                          className: R.mF,
                          ref: v,
                          children: (0, r.jsx)(c.udU, { size: "xs", color: "currentColor", className: R.z_ }),
                      }),
                  ],
              }),
          });
});
