n.d(t, { A: () => N }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(4208),
    o = n(311907),
    u = n(876230),
    c = n(397927),
    d = n(964486),
    m = n(775602),
    p = n(607470),
    E = n(475815),
    f = n(470208),
    h = n(821859),
    v = n(274604),
    x = n(79423),
    g = n(60907),
    S = n(154030),
    A = n(662903),
    b = n(838541),
    _ = n(985018),
    C = n(655833);
let y = { tension: 250, friction: 5, clamp: !0 },
    T = l.forwardRef(function (e, t) {
        let {
                targetTimeSec: n = 1 / 0,
                parentTransitionState: a,
                onOptimisticProgressUpdate: _ = () => {},
                autoplay: T = !1,
                performanceClockStartTime: N = 0,
                orientation: D = "landscape",
                videoUrlOverride: I,
                src: R,
                poster: L,
                initialTimeSec: w = 0,
                onProgressUpdate: M,
                onEnded: k,
                onError: P,
                maxSeekableTimeSec: j,
                seekForwardRestricted: O = !1,
                captionTrackUrl: U,
                transcriptText: B,
                renderEndScreen: Q,
                onPlayerStateChange: V,
                onFullscreenChange: K,
                onVolumeChange: F,
                onLoadStart: $,
                onLoadEnd: Y,
                onFirstFrame: G,
                onBufferingStart: H,
                onBufferingEnd: z,
                onFocusChange: W,
                onVisibilityChange: q,
                onSeek: X,
                renderOverlay: J,
                onHlsInstance: Z,
                preload: ee,
                timelineIndicatorConfig: et,
            } = e,
            en = I ?? R,
            { focused: er, focusedChanged: el } = (0, g.A7)(),
            { visible: ea, visibleChanged: ei, targetRef: es } = (0, g.O7)(),
            [eo, eu] = l.useState(T ? u.Q6.PLAYING : u.Q6.PAUSED),
            [ec, ed] = l.useState(!1),
            [em, ep] = l.useState(!1),
            [eE, ef] = l.useState(0),
            [eh, ev] = l.useState(null),
            ex = l.useCallback((e) => {
                ev(null), ef(e);
            }, []),
            [eg, eS] = l.useState(!1),
            [eA, eb] = l.useState(!0),
            [e_, eC] = l.useState(!1),
            [ey, eT] = l.useState([]),
            [eN, eD] = l.useState(!1),
            [eI, eR] = l.useState(!1),
            eL = l.useRef(!0),
            ew = l.useRef(null),
            eM = l.useRef(null),
            ek = l.useRef(0);
        l.useLayoutEffect(() => {
            ek.current = performance.now();
        }, []);
        let [eP, ej] = l.useState(0.3),
            [eO, eU] = l.useState(!1),
            [eB, eQ] = l.useState(!1),
            [eV, eK] = l.useState(!1),
            [eF, e$] = l.useState(!1),
            eY = (0, o.bG)([m.A], () => m.A.useReducedMotion),
            eG = (0, l.useRef)(null),
            eH = (0, l.useRef)(null),
            ez = l.useRef(!0),
            [eW, eq] = l.useState(null),
            eX = l.useCallback(
                (e, t) => {
                    P?.(e, t);
                },
                [P],
            ),
            { isHlsActive: eJ } = (0, A.Ay)(eG, { src: en, initialTimeSec: w, onError: eX, onHlsInstance: Z }),
            [eZ, e0] = l.useState(!1),
            [e1, e6] = l.useState(null),
            [e2, e4] = l.useState(0),
            e7 = j ?? eG.current?.duration ?? 0,
            [e8, e9] = l.useState(u.oA.MD),
            e3 = { [u.oA.MD]: 50, [u.oA.LG]: 58 };
        (0, d.u5)(() => {
            ez.current && (ez.current = !1);
        });
        let e5 = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((eu(e), V?.(e, t), null != eG.current))
                    switch (e) {
                        case u.Q6.PLAYING:
                            eq(null), eG.current.play();
                            break;
                        case u.Q6.PAUSED:
                            eG.current.pause(), (eL.current = !1);
                            break;
                        case u.Q6.ENDED:
                            eQ(!1);
                    }
            },
            [V],
        );
        l.useEffect(() => {
            let e = null != a && (a === c.ip4.HIDDEN || a === c.ip4.EXITING || a === c.ip4.EXITED),
                t = null != a && ei && !ea,
                n = el && !er;
            if ((e || t || n) && null != eG.current && eo === u.Q6.PLAYING) {
                let n = e || t ? u.KB.VISIBILITY : u.KB.FOCUS;
                eq(n), e5(u.Q6.PAUSED, n);
            }
        }, [a, er, el, ea, ei, eo, e5]),
            l.useEffect(() => {
                el && W?.(er, eo);
            }, [er, el, eo, W]),
            l.useEffect(() => {
                ei && q?.(ea, eo);
            }, [ea, ei, eo, q]);
        let [te, tt] = l.useState(!1),
            tn = l.useRef(null),
            tr = l.useRef(0);
        l.useLayoutEffect(() => {
            tr.current = performance.now();
        }, []);
        let tl = l.useCallback(() => {
                null != tn.current && clearTimeout(tn.current),
                    eo !== u.Q6.PLAYING ||
                        (tn.current = setTimeout(
                            () => {
                                eo === u.Q6.PLAYING && tt(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tr.current)),
                        ));
            }, [eo]),
            ta = () => {
                tt(!1), (tr.current = performance.now()), tl();
            };
        l.useEffect(() => {
            if (eo !== u.Q6.PLAYING) {
                tt(!1), null != tn.current && clearTimeout(tn.current);
                return;
            }
            return (
                tl(),
                () => {
                    null != tn.current && clearTimeout(tn.current);
                }
            );
        }, [eo, tl]);
        let ti = !te && (em || ec || eo === u.Q6.ENDED),
            ts = l.useCallback(() => {
                let e = (0, E.qf)(eG.current?.parentNode, eG.current);
                null == e || (0, E._U)(e) || (e.removeEventListener(E.Wb, ts), e$(!1), K?.(!1), e9(u.oA.MD));
            }, [K]),
            to = () => {
                null == eG.current ||
                    (tc(Math.max(eG.current.currentTime - 10, 0)), eo === u.Q6.ENDED && e5(u.Q6.PAUSED, u.KB.SEEK));
            },
            tu = () => {
                if (null == eG.current || O) return;
                let e = Math.min(eG.current.currentTime + 10, e7);
                tc(e), eo !== u.Q6.ENDED && e >= eG.current.duration && e5(u.Q6.ENDED, u.KB.SEEK);
            };
        l.useEffect(() => {
            let e = eG.current;
            return () => {
                let t = (0, E.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(E.Wb, ts);
            };
        }, [ts]);
        let tc = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == eG.current) return;
                    let n = eG.current.currentTime;
                    ev((e / (eG.current.duration ?? 1)) * 100),
                        eS(!0),
                        e0(!1),
                        (eG.current.currentTime = e),
                        t && X?.(n, e);
                },
                [X],
            ),
            td = () => {
                if (null != eG.current)
                    switch (eo) {
                        case u.Q6.ENDED:
                            tc(0), e5(u.Q6.PLAYING, u.KB.USER);
                            break;
                        case u.Q6.PLAYING:
                            eq(u.KB.USER), e5(u.Q6.PAUSED, u.KB.USER);
                            break;
                        default:
                            e5(u.Q6.PLAYING, u.KB.USER);
                    }
            },
            tm = (e) => {
                e6(e);
            },
            tp = (e) => {
                e6((t) => (t?.id === e.id ? null : t));
            },
            tE = l.useCallback(() => {
                if (null == eG.current || 0 === eG.current.textTracks.length) return;
                let e = eG.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, x.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tm(n)), (n.onexit = () => tp(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == eH.current) return;
            let e = eH.current;
            return (
                e.addEventListener("load", tE),
                () => {
                    null != e && e.removeEventListener("load", tE);
                }
            );
        }, [tE]);
        let tf = (e) => {
            if (null != eG.current && eo === u.Q6.PLAYING) {
                if ((eA && eb(!1), e_)) {
                    let e = null != eM.current ? performance.now() - eM.current : null;
                    z?.(e), eC(!1);
                }
                e5(u.Q6.PLAYING, u.KB.BUFFERING_RECOVERY);
            }
        };
        l.useEffect(() => {
            if (!eg) return;
            let e = setTimeout(() => {
                eS(!1);
            }, 1e3);
            return () => clearTimeout(e);
        }, [eg]);
        let [{ controlBarAnimSpring: th }, tv] = (0, c.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: y,
                onStart: () => {
                    eR(!1);
                },
                onRest: (e) => {
                    1 === e.value && eR(!0);
                },
            })),
            tx = (0, l.useRef)(null),
            [{ captionHeightSpring: tg }, tS] = (0, c.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: y }));
        l.useEffect(
            () => (
                tS({ captionHeightSpring: eV && null != e1 ? (tx.current?.clientHeight ?? 0) : 0, immediate: eY }),
                () => {
                    tg.stop();
                }
            ),
            [eV, tS, eY, e1, tg],
        ),
            l.useEffect(
                () => (
                    tv({ controlBarAnimSpring: ti || eN ? 1 : 0, immediate: eY }),
                    () => {
                        th.stop();
                    }
                ),
                [ti, tv, eY, eN, th],
            );
        let tA = eo === u.Q6.ENDED,
            tb = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.KB.USER;
                    null != eG.current && (tc(0), e5(u.Q6.PLAYING, e));
                },
                [tc, e5],
            );
        return (0, r.jsx)(c.DUT, {
            className: C.W6,
            "data-fullscreen": eF,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                ed(!0), tt(!1), (tr.current = performance.now()), null != tn.current && clearTimeout(tn.current);
            },
            onMouseLeave: () => {
                ed(!1), tt(!1);
            },
            onMouseMove: ta,
            onKeyDown: ta,
            children: (0, r.jsxs)("div", {
                className: i()(C.NS, { [C.DO]: "portrait" === D, [C.r7]: "landscape" === D }),
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    tA && Q?.({ replay: tb }),
                    (0, r.jsxs)(p.A, {
                        ref: (e) => {
                            (eG.current = e),
                                (es.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: T,
                        playsInline: !0,
                        mediaLayoutType: eF ? b.dG.STATIC : b.dG.RESPONSIVE,
                        className: i()({ [C.R]: tA, [C.IR]: !0 }),
                        controls: !1,
                        poster: L,
                        preload: ee,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != eG.current &&
                                (M?.(eG.current.currentTime, eG.current.duration),
                                ex((eG.current.currentTime / eG.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            e5(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE), eC(!1), k?.();
                        },
                        onLoadedData: (e) => {
                            if (eA) {
                                let e = null != ew.current ? performance.now() - ew.current : null;
                                Y?.(e), eb(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == eG.current) return;
                            w > 0 && tc(w, !1), eO ? (eG.current.volume = 0) : (eG.current.volume = eP);
                            let t = eG.current.duration;
                            t > 0 && isFinite(t) && e4(t);
                        },
                        onLoadStart: () => {
                            (ew.current = performance.now()), $?.();
                        },
                        onPlaying: () => {
                            if (!eL.current) return;
                            let e = 0 !== N ? N : ek.current,
                                t = performance.now() - e;
                            G?.(t), (eL.current = !1);
                        },
                        onWaiting: (e) => {
                            (eM.current = performance.now()), H?.(), eC(!0);
                        },
                        onProgress: (e) => {
                            if (null == eG.current) return;
                            let t = [];
                            for (let e = 0; e < eG.current.buffered.length; e++) {
                                let n = eG.current.buffered.start(e),
                                    r = eG.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / eG.current.duration, size: (r - n) / eG.current.duration });
                            }
                            eT(t);
                        },
                        onCanPlay: tf,
                        onCanPlayThrough: tf,
                        onSeeked: () => {
                            e0(!0);
                        },
                        onAbort: () => eX(u.SB.ABORT),
                        onError: () => eX(u.SB.ERROR),
                        onEmptied: () => eX(u.SB.EMPTIED),
                        onStalled: () => eX(u.SB.STALLED),
                        onClick: () => {
                            td();
                        },
                        crossOrigin: "anonymous",
                        children: [
                            null != U &&
                                (0, r.jsx)("track", {
                                    ref: eH,
                                    src: U,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !eJ &&
                                (0, r.jsx)("source", {
                                    onError: () => eX(u.SB.SOURCE_ERROR),
                                    src: en,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    (eA || e_) &&
                        eo === u.Q6.PLAYING &&
                        null != en &&
                        (0, r.jsx)("span", {
                            className: C.S,
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(S.A, {
                        message: (0, S.u)({ hasVideoAsset: null != en, playerState: eo, pauseReason: eW }),
                        showOverlay: null == en,
                    }),
                    null != J &&
                        (0, r.jsx)(s.animated.div, {
                            className: C.R4,
                            style: {
                                opacity: (0, s.to)([th.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, s.to)([th.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, s.to)([th.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: J(),
                        }),
                    eB &&
                        eo !== u.Q6.ENDED &&
                        null != B &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.DUT, {
                                    onClick: () => {
                                        eo === u.Q6.PAUSED && e5(u.Q6.PLAYING, u.KB.USER), eQ(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: C.BG }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: i()(C.xr, { [C.MZ]: "portrait" === D }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, s.to)([th, tg], (e, t) => `${e * e3[e8] + t}px`) },
                                    children: (0, r.jsx)(v.X, {
                                        text: B,
                                        onClose: () => {
                                            eQ(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: C.Jp,
                        style: { opacity: (0, s.to)([th.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(C.yf, { [C.ZH]: eo === u.Q6.PLAYING, [C.v7]: eo === u.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eo === u.Q6.PLAYING
                                    ? (0, r.jsx)(c.udU, { className: C.PK })
                                    : (0, r.jsx)(c.E$n, { className: C.PK }),
                        },
                        eo,
                    ),
                    eV &&
                        null != e1 &&
                        !tA &&
                        (0, r.jsx)(s.animated.div, {
                            className: C.o$,
                            ref: tx,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, s.to)(
                                    [th.to({ range: [0, 1], output: [-20, -e3[e8]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: C.qh,
                                children: e1.text,
                            }),
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: C.r8,
                        style: { height: (0, s.to)([th.to({ range: [0, 1], output: [0, e3[e8]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(s.animated.div, {
                                style: {
                                    transform: (0, s.to)(
                                        [th.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)(h.A, {
                                    percent: null != eh ? eh : eE,
                                    animate: !0 !== ez.current && !eg,
                                    interactionEnabled: !O && eI,
                                    backgroundColor: ti ? void 0 : "rgba(0, 0, 0, 0.0)",
                                    playerState: eo,
                                    preloadedBuffers: ti ? ey : void 0,
                                    durationSec: e2 > 0 ? e2 : 1,
                                    isFullyVisible: ti && eI,
                                    maxSeekableTime: ti && eI ? e7 : void 0,
                                    onClick: (e) => {
                                        tc(e), eo === u.Q6.ENDED && e5(u.Q6.PLAYING, u.KB.USER);
                                    },
                                    onScrubBack: to,
                                    onScrubForward: tu,
                                    indicatorConfig: et,
                                    "data-testid": "discord-web-video-player-timeline",
                                }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: C.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, s.to)(
                                        [th.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [th.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, s.to)([th.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => ep(!0),
                                onBlur: () => ep(!1),
                                children: (0, r.jsx)(f.A, {
                                    videoRef: eG,
                                    playerState: eo,
                                    animSpring: th,
                                    visible: ti,
                                    seekForwardEnabled: !O,
                                    hideCaptionBtn: null == U,
                                    hideTranscriptBtn: null == B,
                                    hideSkipButtons: "portrait" === D,
                                    size: e8,
                                    volume: eP,
                                    muted: eO,
                                    transcriptEnabled: eB,
                                    captionEnabled: eV,
                                    fullScreenEnabled: eF,
                                    handlePlaybackBtnClick: td,
                                    handleTranscriptBtnClick: () => {
                                        eQ(!eB);
                                    },
                                    handleCaptionBtnClick: () => {
                                        eK(!eV);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !eF,
                                            t = (0, E.qf)(eG.current?.parentNode, eG.current);
                                        e && null != t
                                            ? ((0, E.tl)(t), t.addEventListener(E.Wb, ts), K?.(!0), e9(u.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(E.Wb, ts), K?.(!1), (0, E.sP)(t), e9(u.oA.MD)),
                                            e$(e);
                                    },
                                    handleSeekBackBtnClick: to,
                                    handleSeekForwardBtnClick: tu,
                                    handleControlBarPendingInteraction: eD,
                                    onVolumeChange: (e) => {
                                        ej(e), F?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        eU(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    N = l.forwardRef(function (e, t) {
        let { active: n = !0, ...a } = e,
            { autoplay: s, poster: o, orientation: u = "landscape" } = a,
            [d, m] = l.useState(!1),
            p = l.useCallback(() => {
                m(!0);
            }, []),
            E = l.useRef(null);
        return n || d
            ? (0, r.jsx)(T, { ...a, autoplay: s || d, ref: t })
            : (0, r.jsx)(c.DUT, {
                  className: C.W6,
                  "data-testid": "discord-web-video-player-container",
                  tabIndex: 0,
                  onClick: p,
                  "aria-label": _.intl.string(_.t.RscU7I),
                  focusProps: { ringTarget: E },
                  children: (0, r.jsxs)("div", {
                      className: i()(C.NS, { [C.DO]: "portrait" === u, [C.r7]: "landscape" === u }),
                      children: [
                          null != o && (0, r.jsx)("img", { src: o, className: C.zH, alt: "" }),
                          (0, r.jsx)("div", {
                              className: C.mF,
                              ref: E,
                              children: (0, r.jsx)(c.udU, { size: "xs", color: "currentColor", className: C.z_ }),
                          }),
                      ],
                  }),
              });
    });
