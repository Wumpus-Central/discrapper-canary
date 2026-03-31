n.d(t, { A: () => P }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(382222),
    o = n(311907),
    u = n(876230),
    c = n(649658),
    d = n(397927),
    m = n(964486),
    p = n(775602),
    h = n(607470),
    f = n(475815),
    x = n(662903),
    E = n(337953),
    v = n(183494),
    g = n(408121),
    b = n(984212),
    y = n(739416),
    S = n(931853),
    C = n(652215),
    A = n(838541),
    N = n(985018),
    T = n(256181);
let R = { tension: 250, friction: 5, clamp: !0 },
    w = l.forwardRef(function (e, t) {
        let {
                targetTimeSec: n = 1 / 0,
                parentTransitionState: a,
                onOptimisticProgressUpdate: c = () => {},
                autoplay: C = !1,
                performanceClockStartTime: N = 0,
                orientation: w = "landscape",
                videoUrlOverride: j,
                src: P,
                poster: D,
                initialTimeSec: M = 0,
                onProgressUpdate: L,
                onEnded: k,
                onError: I,
                maxSeekableTimeSec: B,
                captionTrackUrl: U,
                transcriptText: O,
                renderEndScreen: K,
                onPlayerStateChange: _,
                onFullscreenChange: G,
                onVolumeChange: Q,
                onLoadStart: $,
                onLoadEnd: F,
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
            } = e,
            es = j ?? P,
            { focused: eo, focusedChanged: eu } = (0, y.A7)(),
            { visible: ec, visibleChanged: ed, targetRef: em } = (0, y.O7)(),
            [ep, eh] = l.useState(C ? u.Q6.PLAYING : u.Q6.PAUSED),
            [ef, ex] = l.useState(!1),
            [eE, ev] = l.useState(!1),
            [eg, eb] = l.useState(0),
            [ey, eS] = l.useState(null),
            eC = l.useCallback((e) => {
                eS(null), eb(e);
            }, []),
            [eA, eN] = l.useState(!1),
            [eT, eR] = l.useState(!0),
            [ew, ej] = l.useState(!1),
            [eP, eD] = l.useState([]),
            [eM, eL] = l.useState(!1),
            [ek, eI] = l.useState(!1),
            eB = l.useRef(!0),
            eU = l.useRef(null),
            eO = l.useRef(null),
            eK = l.useRef(0);
        l.useLayoutEffect(() => {
            eK.current = performance.now();
        }, []);
        let [e_, eG] = l.useState(0.3),
            [eQ, e$] = l.useState(!1),
            [eF, eY] = l.useState(!1),
            [ez, eX] = l.useState(!1),
            [eW, eV] = l.useState(!1),
            eH = (0, o.bG)([p.A], () => p.A.useReducedMotion),
            eJ = (0, l.useRef)(null),
            eZ = (0, l.useRef)(null),
            eq = l.useRef(!0),
            [e0, e1] = l.useState(null),
            e6 = l.useCallback(
                (e, t) => {
                    I?.(e, t);
                },
                [I],
            ),
            { isHlsActive: e2 } = (0, x.Ay)(eJ, { src: es, initialTimeSec: M, onError: e6, onHlsInstance: q }),
            [e4, e8] = l.useState(!1),
            [e9, e7] = l.useState(null),
            [e3, e5] = l.useState(0),
            te = B ?? eJ.current?.duration ?? 0,
            [tt, tn] = l.useState(u.oA.MD),
            tr = { [u.oA.MD]: 50, [u.oA.LG]: 58 };
        (0, m.u5)(() => {
            eq.current && (eq.current = !1);
        });
        let tl = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((eh(e), _?.(e, t), null != eJ.current))
                    switch (e) {
                        case u.Q6.PLAYING:
                            e1(null), eJ.current.play();
                            break;
                        case u.Q6.PAUSED:
                            eJ.current.pause(), (eB.current = !1);
                            break;
                        case u.Q6.ENDED:
                            eY(!1);
                    }
            },
            [_],
        );
        l.useEffect(() => {
            if (!el) return;
            let e = null != a && (a === d.ip4.HIDDEN || a === d.ip4.EXITING || a === d.ip4.EXITED),
                t = null != a && ed && !ec,
                n = eu && !eo;
            if ((e || t || n) && null != eJ.current && ep === u.Q6.PLAYING) {
                let n = e || t ? u.KB.VISIBILITY : u.KB.FOCUS;
                e1(n), tl(u.Q6.PAUSED, n);
            }
        }, [el, a, eo, eu, ec, ed, ep, tl]),
            l.useEffect(() => {
                eu && W?.(eo, ep);
            }, [eo, eu, ep, W]),
            l.useEffect(() => {
                ed && V?.(ec, ep);
            }, [ec, ed, ep, V]);
        let [ta, ti] = l.useState(!1),
            ts = l.useRef(null),
            to = l.useRef(0);
        l.useLayoutEffect(() => {
            to.current = performance.now();
        }, []);
        let tu = l.useCallback(() => {
                null != ts.current && clearTimeout(ts.current),
                    ep !== u.Q6.PLAYING ||
                        (ts.current = setTimeout(
                            () => {
                                ep === u.Q6.PLAYING && ti(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - to.current)),
                        ));
            }, [ep]),
            tc = l.useCallback(() => {
                ti(!1), (to.current = performance.now()), tu();
            }, [tu]);
        l.useEffect(() => {
            if (ep !== u.Q6.PLAYING) {
                ti(!1), null != ts.current && clearTimeout(ts.current);
                return;
            }
            return (
                tu(),
                () => {
                    null != ts.current && clearTimeout(ts.current);
                }
            );
        }, [ep, tu]);
        let td = !ta && (eE || ef || ep === u.Q6.ENDED),
            tm = l.useCallback(() => {
                let e = (0, f.qf)(eJ.current?.parentNode, eJ.current);
                null == e || (0, f._U)(e) || (e.removeEventListener(f.Wb, tm), eV(!1), G?.(!1), tn(u.oA.MD));
            }, [G]),
            tp = () => {
                null == eJ.current ||
                    (tf(Math.max(eJ.current.currentTime - 10, 0)), ep === u.Q6.ENDED && tl(u.Q6.PAUSED, u.KB.SEEK));
            },
            th = () => {
                if (null == eJ.current) return;
                let e = Math.min(eJ.current.currentTime + 10, te);
                tf(e), ep !== u.Q6.ENDED && e >= eJ.current.duration && tl(u.Q6.ENDED, u.KB.SEEK);
            };
        l.useEffect(() => {
            let e = eJ.current;
            return () => {
                let t = (0, f.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(f.Wb, tm);
            };
        }, [tm]);
        let tf = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == eJ.current) return;
                    let n = eJ.current.currentTime;
                    eS((e / (eJ.current.duration ?? 1)) * 100),
                        eN(!0),
                        e8(!1),
                        (eJ.current.currentTime = e),
                        t && H?.(n, e);
                },
                [H],
            ),
            tx = () => {
                if (null != eJ.current)
                    switch (ep) {
                        case u.Q6.ENDED:
                            tf(0), tl(u.Q6.PLAYING, u.KB.USER);
                            break;
                        case u.Q6.PLAYING:
                            e1(u.KB.USER), tl(u.Q6.PAUSED, u.KB.USER);
                            break;
                        default:
                            tl(u.Q6.PLAYING, u.KB.USER);
                    }
            },
            tE = (e) => {
                e7(e);
            },
            tv = (e) => {
                e7((t) => (t?.id === e.id ? null : t));
            },
            tg = l.useCallback(() => {
                if (null == eJ.current || 0 === eJ.current.textTracks.length) return;
                let e = eJ.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, b.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tE(n)), (n.onexit = () => tv(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == eZ.current) return;
            let e = eZ.current;
            return (
                e.addEventListener("load", tg),
                () => {
                    null != e && e.removeEventListener("load", tg);
                }
            );
        }, [tg]);
        let tb = (e) => {
            if (null != eJ.current && ep === u.Q6.PLAYING) {
                if ((eT && eR(!1), ew)) {
                    let e = null != eO.current ? performance.now() - eO.current : null;
                    X?.(e), ej(!1);
                }
                tl(u.Q6.PLAYING, u.KB.BUFFERING_RECOVERY);
            }
        };
        l.useEffect(() => {
            if (!eA) return;
            let e = setTimeout(() => {
                eN(!1);
            }, 1e3);
            return () => clearTimeout(e);
        }, [eA]);
        let [{ controlBarAnimSpring: ty }, tS] = (0, d.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: R,
                onStart: () => {
                    eI(!1);
                },
                onRest: (e) => {
                    1 === e.value && eI(!0);
                },
            })),
            tC = (0, l.useRef)(null),
            [{ captionHeightSpring: tA }, tN] = (0, d.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: R }));
        l.useEffect(
            () => (
                tN({ captionHeightSpring: ez && null != e9 ? (tC.current?.clientHeight ?? 0) : 0, immediate: eH }),
                () => {
                    tA.stop();
                }
            ),
            [ez, tN, eH, e9, tA],
        ),
            l.useEffect(
                () => (
                    tS({ controlBarAnimSpring: td || eM ? 1 : 0, immediate: eH }),
                    () => {
                        ty.stop();
                    }
                ),
                [td, tS, eH, eM, ty],
            );
        let tT = ep === u.Q6.ENDED && null != K,
            tR = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.KB.USER;
                    null != eJ.current && (tf(0), tl(u.Q6.PLAYING, e));
                },
                [tf, tl],
            ),
            tw = l.useRef(null),
            tj = l.useCallback(
                (e) => {
                    tc(), tw.current?.(e.nativeEvent);
                },
                [tc],
            );
        return (0, r.jsx)(d.DUT, {
            className: T.W6,
            "data-fullscreen": eW,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                ex(!0), ti(!1), (to.current = performance.now()), null != ts.current && clearTimeout(ts.current);
            },
            onMouseLeave: () => {
                ex(!1), ti(!1);
            },
            onMouseMove: tc,
            onKeyDown: tj,
            children: (0, r.jsxs)("div", {
                className: i()(T.NS, { [T.DO]: "portrait" === w, [T.r7]: "landscape" === w }),
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    tT && K?.({ replay: tR }),
                    (0, r.jsxs)(h.A, {
                        ref: (e) => {
                            (eJ.current = e),
                                (em.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: C,
                        playsInline: !0,
                        mediaLayoutType: eW ? A.dG.STATIC : A.dG.RESPONSIVE,
                        className: i()({ [T.R]: tT, [T.IR]: !0 }),
                        controls: !1,
                        poster: D,
                        preload: ee,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != eJ.current &&
                                (L?.(eJ.current.currentTime, eJ.current.duration),
                                eC((eJ.current.currentTime / eJ.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            tl(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE), ej(!1), k?.();
                        },
                        onLoadedData: (e) => {
                            if (eT) {
                                let e = null != eU.current ? performance.now() - eU.current : null;
                                F?.(e), eR(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == eJ.current) return;
                            M > 0 && tf(M, !1), eQ ? (eJ.current.volume = 0) : (eJ.current.volume = e_);
                            let t = eJ.current.duration;
                            t > 0 && isFinite(t) && e5(t);
                        },
                        onLoadStart: () => {
                            (eU.current = performance.now()), $?.();
                        },
                        onPlaying: () => {
                            if (!eB.current) return;
                            let e = 0 !== N ? N : eK.current,
                                t = performance.now() - e;
                            Y?.(t), (eB.current = !1);
                        },
                        onWaiting: (e) => {
                            (eO.current = performance.now()), z?.(), ej(!0);
                        },
                        onProgress: (e) => {
                            if (null == eJ.current) return;
                            let t = [];
                            for (let e = 0; e < eJ.current.buffered.length; e++) {
                                let n = eJ.current.buffered.start(e),
                                    r = eJ.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / eJ.current.duration, size: (r - n) / eJ.current.duration });
                            }
                            eD(t);
                        },
                        onCanPlay: tb,
                        onCanPlayThrough: tb,
                        onSeeked: () => {
                            e8(!0);
                        },
                        onAbort: () => e6(u.SB.ABORT),
                        onError: () => e6(u.SB.ERROR),
                        onEmptied: () => e6(u.SB.EMPTIED),
                        onStalled: () => e6(u.SB.STALLED),
                        onClick: () => {
                            tx();
                        },
                        crossOrigin: "anonymous",
                        children: [
                            null != U &&
                                (0, r.jsx)("track", {
                                    ref: eZ,
                                    src: U,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !e2 &&
                                (0, r.jsx)("source", {
                                    onError: () => e6(u.SB.SOURCE_ERROR),
                                    src: es,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    (eT || ew) &&
                        ep === u.Q6.PLAYING &&
                        null != es &&
                        (0, r.jsx)("span", {
                            className: T.S,
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(d.y$y, { type: d.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(S.A, {
                        message: (0, S.u)({ hasVideoAsset: null != es, playerState: ep, pauseReason: e0 }),
                        showOverlay: null == es,
                    }),
                    null != J &&
                        (0, r.jsx)(s.animated.div, {
                            className: T.MU,
                            style: {
                                opacity: (0, s.to)([ty.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, s.to)([ty.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, s.to)([ty.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: J(),
                        }),
                    null != Z &&
                        (0, r.jsx)("div", {
                            className: T.MU,
                            children: Z({ playerState: ep, isControlBarExpanded: td }),
                        }),
                    eF &&
                        ep !== u.Q6.ENDED &&
                        null != O &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.DUT, {
                                    onClick: () => {
                                        ep === u.Q6.PAUSED && tl(u.Q6.PLAYING, u.KB.USER), eY(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: T.BG }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: i()(T.xr, { [T.MZ]: "portrait" === w }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, s.to)([ty, tA], (e, t) => `${e * tr[tt] + t}px`) },
                                    children: (0, r.jsx)(g.X, {
                                        text: O,
                                        onClose: () => {
                                            eY(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: T.Jp,
                        style: { opacity: (0, s.to)([ty.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(T.yf, { [T.ZH]: ep === u.Q6.PLAYING, [T.v7]: ep === u.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ep === u.Q6.PLAYING
                                    ? (0, r.jsx)(d.udU, { className: T.PK })
                                    : (0, r.jsx)(d.E$n, { className: T.PK }),
                        },
                        ep,
                    ),
                    ez &&
                        null != e9 &&
                        !tT &&
                        (0, r.jsx)(s.animated.div, {
                            className: T.o$,
                            ref: tC,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, s.to)(
                                    [ty.to({ range: [0, 1], output: [-20, -tr[tt]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: T.qh,
                                children: e9.text,
                            }),
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: T.r8,
                        style: { height: (0, s.to)([ty.to({ range: [0, 1], output: [0, tr[tt]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(s.animated.div, {
                                style: {
                                    transform: (0, s.to)(
                                        [ty.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)(v.Ay, {
                                    percent: null != ey ? ey : eg,
                                    animate: !0 !== eq.current && !eA,
                                    interactionEnabled: ek && te > 0,
                                    backgroundColor: td ? void 0 : "rgba(0, 0, 0, 0.0)",
                                    playerState: ep,
                                    preloadedBuffers: td ? eP : void 0,
                                    durationSec: e3 > 0 ? e3 : 1,
                                    isFullyVisible: td && ek,
                                    maxSeekableTime: te > 0 ? te : void 0,
                                    progressGlow: er,
                                    onClick: (e) => {
                                        tf(e), ep === u.Q6.ENDED && tl(u.Q6.PLAYING, u.KB.USER);
                                    },
                                    onScrubBack: tp,
                                    onScrubForward: th,
                                    indicatorConfig: ei,
                                    "data-testid": "discord-web-video-player-timeline",
                                }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: T.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, s.to)(
                                        [ty.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [ty.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, s.to)([ty.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => ev(!0),
                                onBlur: () => ev(!1),
                                children: (0, r.jsx)(E.A, {
                                    videoRef: eJ,
                                    playerState: ep,
                                    animSpring: ty,
                                    visible: td,
                                    seekForwardEnabled: null == B || (eJ.current?.currentTime ?? 0) + 1 < te,
                                    hideCaptionBtn: null == U,
                                    hideTranscriptBtn: null == O,
                                    hideSkipButtons: "portrait" === w,
                                    size: tt,
                                    downloadUrl: et,
                                    downloadContentType: en,
                                    autoFocus: ea,
                                    keyDownHandlerRef: tw,
                                    volume: e_,
                                    muted: eQ,
                                    transcriptEnabled: eF,
                                    captionEnabled: ez,
                                    fullScreenEnabled: eW,
                                    handlePlaybackBtnClick: tx,
                                    handleTranscriptBtnClick: () => {
                                        eY(!eF);
                                    },
                                    handleCaptionBtnClick: () => {
                                        eX(!ez);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !eW,
                                            t = (0, f.qf)(eJ.current?.parentNode, eJ.current);
                                        e && null != t
                                            ? ((0, f.tl)(t), t.addEventListener(f.Wb, tm), G?.(!0), tn(u.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(f.Wb, tm), G?.(!1), (0, f.sP)(t), tn(u.oA.MD)),
                                            eV(e);
                                    },
                                    handleSeekBackBtnClick: tp,
                                    handleSeekForwardBtnClick: th,
                                    handleControlBarPendingInteraction: eL,
                                    onVolumeChange: (e) => {
                                        eG(e), Q?.(e);
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
        : (0, r.jsx)(c.y, {
              readyState: s ? C.Rv1.READY : C.Rv1.LOADING,
              aspectRatio: "portrait" === i ? 9 / 16 : 16 / 9,
              placeholder: n,
              placeholderVersion: a ?? 1,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              disableSpinner: !0,
              children: (0, r.jsx)("img", { src: t, className: T.zH, alt: "", onLoad: u }),
          });
}
let P = l.forwardRef(function (e, t) {
    let { active: n = !0, ...a } = e,
        {
            autoplay: s,
            poster: o,
            orientation: c = "landscape",
            posterPlaceholder: m,
            posterPlaceholderVersion: p,
            renderOverlay: h,
            renderPersistentOverlay: f,
        } = a,
        [x, E] = l.useState(!1),
        v = l.useCallback(() => {
            E(!0);
        }, []),
        g = l.useRef(null);
    return n || x
        ? (0, r.jsx)(w, { ...a, autoplay: s || x, ref: t })
        : (0, r.jsx)(d.DUT, {
              className: T.W6,
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: v,
              "aria-label": N.intl.string(N.t.RscU7I),
              focusProps: { ringTarget: g },
              children: (0, r.jsxs)("div", {
                  className: i()(T.NS, { [T.DO]: "portrait" === c, [T.r7]: "landscape" === c }),
                  children: [
                      (0, r.jsx)(j, { poster: o, posterPlaceholder: m, posterPlaceholderVersion: p, orientation: c }),
                      null != h && (0, r.jsx)("div", { className: T.MU, children: h() }),
                      null != f &&
                          (0, r.jsx)("div", {
                              className: T.MU,
                              children: f({ playerState: u.Q6.PAUSED, isControlBarExpanded: !0 }),
                          }),
                      (0, r.jsx)("div", {
                          className: T.mF,
                          ref: g,
                          children: (0, r.jsx)(d.udU, { size: "xs", color: "currentColor", className: T.z_ }),
                      }),
                  ],
              }),
          });
});
