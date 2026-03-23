n.d(t, { A: () => N }), n(321073);
var r = n(627968),
    l = n(64700),
    s = n(503698),
    i = n.n(s),
    a = n(497766),
    o = n(311907),
    u = n(876230),
    c = n(397927),
    d = n(964486),
    m = n(775602),
    p = n(607470),
    f = n(475815),
    E = n(470208),
    h = n(821859),
    v = n(274604),
    x = n(79423),
    g = n(60907),
    S = n(267956),
    A = n(662903),
    C = n(838541),
    _ = n(985018),
    b = n(681636);
let y = { tension: 250, friction: 5, clamp: !0 },
    T = l.forwardRef(function (e, t) {
        let {
                targetTimeSec: n = 1 / 0,
                parentTransitionState: s,
                onOptimisticProgressUpdate: _ = () => {},
                autoplay: T = !1,
                performanceClockStartTime: N = 0,
                orientation: D = "landscape",
                videoUrlOverride: R,
                src: j,
                poster: L,
                initialTimeSec: M = 0,
                onProgressUpdate: I,
                onEnded: w,
                onError: k,
                maxSeekableTimeSec: O,
                seekForwardRestricted: P = !1,
                captionTrackUrl: Q,
                transcriptText: U,
                renderEndScreen: V,
                onPlayerStateChange: B,
                onFullscreenChange: F,
                onVolumeChange: G,
                onLoadStart: K,
                onLoadEnd: $,
                onFirstFrame: Y,
                onBufferingStart: H,
                onBufferingEnd: z,
                onFocusChange: W,
                onVisibilityChange: q,
                onSeek: X,
                renderOverlay: J,
                onHlsInstance: Z,
                preload: ee,
            } = e,
            et = R ?? j,
            { focused: en, focusedChanged: er } = (0, g.A7)(),
            { visible: el, visibleChanged: es, targetRef: ei } = (0, g.O7)(),
            [ea, eo] = l.useState(T ? u.Q6.PLAYING : u.Q6.PAUSED),
            [eu, ec] = l.useState(!1),
            [ed, em] = l.useState(!1),
            [ep, ef] = l.useState(0),
            [eE, eh] = l.useState(null),
            ev = l.useCallback((e) => {
                eh(null), ef(e);
            }, []),
            [ex, eg] = l.useState(!1),
            [eS, eA] = l.useState(!0),
            [eC, e_] = l.useState(!1),
            [eb, ey] = l.useState([]),
            [eT, eN] = l.useState(!1),
            [eD, eR] = l.useState(!1),
            ej = l.useRef(!0),
            eL = l.useRef(null),
            eM = l.useRef(null),
            eI = l.useRef(0);
        l.useLayoutEffect(() => {
            eI.current = performance.now();
        }, []);
        let [ew, ek] = l.useState(0.3),
            [eO, eP] = l.useState(!1),
            [eQ, eU] = l.useState(!1),
            [eV, eB] = l.useState(!1),
            [eF, eG] = l.useState(!1),
            eK = (0, o.bG)([m.A], () => m.A.useReducedMotion),
            e$ = (0, l.useRef)(null),
            eY = (0, l.useRef)(null),
            eH = l.useRef(!0),
            [ez, eW] = l.useState(null),
            eq = l.useCallback(
                (e, t) => {
                    k?.(e, t);
                },
                [k],
            ),
            { isHlsActive: eX } = (0, A.Ay)(e$, { src: et, initialTimeSec: M, onError: eq, onHlsInstance: Z }),
            [eJ, eZ] = l.useState(!1),
            [e0, e1] = l.useState(null),
            e6 = O ?? e$.current?.duration ?? 0,
            [e2, e7] = l.useState(u.oA.MD),
            e9 = { [u.oA.MD]: 50, [u.oA.LG]: 58 };
        (0, d.u5)(() => {
            eH.current && (eH.current = !1);
        });
        let e4 = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((eo(e), B?.(e, t), null != e$.current))
                    switch (e) {
                        case u.Q6.PLAYING:
                            eW(null), e$.current.play();
                            break;
                        case u.Q6.PAUSED:
                            e$.current.pause(), (ej.current = !1);
                            break;
                        case u.Q6.ENDED:
                            eU(!1);
                    }
            },
            [B],
        );
        l.useEffect(() => {
            let e = null != s && (s === c.ip4.HIDDEN || s === c.ip4.EXITING || s === c.ip4.EXITED),
                t = null != s && es && !el,
                n = er && !en;
            if ((e || t || n) && null != e$.current && ea === u.Q6.PLAYING) {
                let n = e || t ? "visibility" : "focus";
                eW(n), e4(u.Q6.PAUSED, n);
            }
        }, [s, en, er, el, es, ea, e4]),
            l.useEffect(() => {
                er && W?.(en, ea);
            }, [en, er, ea, W]),
            l.useEffect(() => {
                es && q?.(el, ea);
            }, [el, es, ea, q]);
        let [e8, e3] = l.useState(!1),
            e5 = l.useRef(null),
            te = l.useRef(0);
        l.useLayoutEffect(() => {
            te.current = performance.now();
        }, []);
        let tt = l.useCallback(() => {
                null != e5.current && clearTimeout(e5.current),
                    ea !== u.Q6.PLAYING ||
                        (e5.current = setTimeout(
                            () => {
                                ea === u.Q6.PLAYING && e3(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - te.current)),
                        ));
            }, [ea]),
            tn = () => {
                e3(!1), (te.current = performance.now()), tt();
            };
        l.useEffect(() => {
            if (ea !== u.Q6.PLAYING) {
                e3(!1), null != e5.current && clearTimeout(e5.current);
                return;
            }
            return (
                tt(),
                () => {
                    null != e5.current && clearTimeout(e5.current);
                }
            );
        }, [ea, tt]);
        let tr = !e8 && (ed || eu || ea === u.Q6.ENDED),
            tl = l.useCallback(() => {
                let e = (0, f.qf)(e$.current?.parentNode, e$.current);
                null == e || (0, f._U)(e) || (e.removeEventListener(f.Wb, tl), eG(!1), F?.(!1), e7(u.oA.MD));
            }, [F]),
            ts = () => {
                null == e$.current ||
                    (ta(Math.max(e$.current.currentTime - 10, 0)), ea === u.Q6.ENDED && e4(u.Q6.PAUSED, "seek"));
            },
            ti = () => {
                if (null == e$.current || P) return;
                let e = Math.min(e$.current.currentTime + 10, e6);
                ta(e), ea !== u.Q6.ENDED && e >= e$.current.duration && e4(u.Q6.ENDED, "seek");
            };
        l.useEffect(() => {
            let e = e$.current;
            return () => {
                let t = (0, f.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(f.Wb, tl);
            };
        }, [tl]);
        let ta = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == e$.current) return;
                    let n = e$.current.currentTime;
                    eh((e / (e$.current.duration ?? 1)) * 100),
                        eg(!0),
                        eZ(!1),
                        (e$.current.currentTime = e),
                        t && X?.(n, e);
                },
                [X],
            ),
            to = () => {
                if (null != e$.current)
                    switch (ea) {
                        case u.Q6.ENDED:
                            ta(0), e4(u.Q6.PLAYING, "user");
                            break;
                        case u.Q6.PLAYING:
                            eW("user"), e4(u.Q6.PAUSED, "user");
                            break;
                        default:
                            e4(u.Q6.PLAYING, "user");
                    }
            },
            tu = (e) => {
                e1(e);
            },
            tc = (e) => {
                e1((t) => (t?.id === e.id ? null : t));
            },
            td = l.useCallback(() => {
                if (null == e$.current || 0 === e$.current.textTracks.length) return;
                let e = e$.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, x.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tu(n)), (n.onexit = () => tc(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == eY.current) return;
            let e = eY.current;
            return (
                e.addEventListener("load", td),
                () => {
                    null != e && e.removeEventListener("load", td);
                }
            );
        }, [td]);
        let tm = (e) => {
            if (null != e$.current && ea === u.Q6.PLAYING) {
                if ((eS && eA(!1), eC)) {
                    let e = null != eM.current ? performance.now() - eM.current : null;
                    z?.(e), e_(!1);
                }
                e4(u.Q6.PLAYING, "buffering_recovery");
            }
        };
        l.useEffect(() => {
            if (!ex) return;
            let e = setTimeout(() => {
                eg(!1);
            }, 1e3);
            return () => clearTimeout(e);
        }, [ex]);
        let [{ controlBarAnimSpring: tp }, tf] = (0, c.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: y,
                onStart: () => {
                    eR(!1);
                },
                onRest: (e) => {
                    1 === e.value && eR(!0);
                },
            })),
            tE = (0, l.useRef)(null),
            [{ captionHeightSpring: th }, tv] = (0, c.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: y }));
        l.useEffect(
            () => (
                tv({ captionHeightSpring: eV && null != e0 ? (tE.current?.clientHeight ?? 0) : 0, immediate: eK }),
                () => {
                    th.stop();
                }
            ),
            [eV, tv, eK, e0, th],
        ),
            l.useEffect(
                () => (
                    tf({ controlBarAnimSpring: tr || eT ? 1 : 0, immediate: eK }),
                    () => {
                        tp.stop();
                    }
                ),
                [tr, tf, eK, eT, tp],
            );
        let tx = ea === u.Q6.ENDED,
            tg = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "user";
                    null != e$.current && (ta(0), e4(u.Q6.PLAYING, e));
                },
                [ta, e4],
            );
        return (0, r.jsx)(c.DUT, {
            className: b.W6,
            "data-fullscreen": eF,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                ec(!0), e3(!1), (te.current = performance.now()), null != e5.current && clearTimeout(e5.current);
            },
            onMouseLeave: () => {
                ec(!1), e3(!1);
            },
            onMouseMove: tn,
            onKeyDown: tn,
            children: (0, r.jsxs)("div", {
                className: i()(b.NS, { [b.DO]: "portrait" === D, [b.r7]: "landscape" === D }),
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    tx && V?.({ replay: tg }),
                    (0, r.jsxs)(p.A, {
                        ref: (e) => {
                            (e$.current = e),
                                (ei.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: T,
                        playsInline: !0,
                        mediaLayoutType: eF ? C.dG.STATIC : C.dG.RESPONSIVE,
                        className: i()({ [b.R]: tx, [b.IR]: !0 }),
                        controls: !1,
                        poster: L,
                        preload: ee,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != e$.current &&
                                (I?.(e$.current.currentTime, e$.current.duration),
                                ev((e$.current.currentTime / e$.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            e4(u.Q6.ENDED, "playback_complete"), e_(!1), w?.();
                        },
                        onLoadedData: (e) => {
                            if (eS) {
                                let e = null != eL.current ? performance.now() - eL.current : null;
                                $?.(e), eA(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            null != e$.current &&
                                (M > 0 && ta(M, !1), eO ? (e$.current.volume = 0) : (e$.current.volume = ew));
                        },
                        onLoadStart: () => {
                            (eL.current = performance.now()), K?.();
                        },
                        onPlaying: () => {
                            if (!ej.current) return;
                            let e = 0 !== N ? N : eI.current,
                                t = performance.now() - e;
                            Y?.(t), (ej.current = !1);
                        },
                        onWaiting: (e) => {
                            (eM.current = performance.now()), H?.(), e_(!0);
                        },
                        onProgress: (e) => {
                            if (null == e$.current) return;
                            let t = [];
                            for (let e = 0; e < e$.current.buffered.length; e++) {
                                let n = e$.current.buffered.start(e),
                                    r = e$.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / e$.current.duration, size: (r - n) / e$.current.duration });
                            }
                            ey(t);
                        },
                        onCanPlay: tm,
                        onCanPlayThrough: tm,
                        onSeeked: () => {
                            eZ(!0);
                        },
                        onAbort: () => eq(u.SB.ABORT),
                        onError: () => eq(u.SB.ERROR),
                        onEmptied: () => eq(u.SB.EMPTIED),
                        onStalled: () => eq(u.SB.STALLED),
                        onClick: () => {
                            to();
                        },
                        crossOrigin: "anonymous",
                        children: [
                            null != Q &&
                                (0, r.jsx)("track", {
                                    ref: eY,
                                    src: Q,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !eX &&
                                (0, r.jsx)("source", {
                                    onError: () => eq(u.SB.SOURCE_ERROR),
                                    src: et,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    (eS || eC) &&
                        ea === u.Q6.PLAYING &&
                        null != et &&
                        (0, r.jsx)("span", {
                            className: b.S,
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(S.A, { hasVideoAsset: null != et, playerState: ea, pauseReason: ez }),
                    null != J &&
                        (0, r.jsx)(a.animated.div, {
                            className: b.R4,
                            style: {
                                opacity: (0, a.to)([tp.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, a.to)([tp.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, a.to)([tp.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: J(),
                        }),
                    eQ &&
                        ea !== u.Q6.ENDED &&
                        null != U &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.DUT, {
                                    onClick: () => {
                                        ea === u.Q6.PAUSED && e4(u.Q6.PLAYING, "user"), eU(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: b.BG }),
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: i()(b.xr, { [b.MZ]: "portrait" === D }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, a.to)([tp, th], (e, t) => `${e * e9[e2] + t}px`) },
                                    children: (0, r.jsx)(v.X, {
                                        text: U,
                                        onClose: () => {
                                            eU(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(a.animated.div, {
                        className: b.Jp,
                        style: { opacity: (0, a.to)([tp.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(b.yf, { [b.ZH]: ea === u.Q6.PLAYING, [b.v7]: ea === u.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ea === u.Q6.PLAYING
                                    ? (0, r.jsx)(c.udU, { className: b.PK })
                                    : (0, r.jsx)(c.E$n, { className: b.PK }),
                        },
                        ea,
                    ),
                    eV &&
                        null != e0 &&
                        !tx &&
                        (0, r.jsx)(a.animated.div, {
                            className: b.o$,
                            ref: tE,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, a.to)(
                                    [tp.to({ range: [0, 1], output: [-20, -e9[e2]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: b.qh,
                                children: e0.text,
                            }),
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: b.r8,
                        style: { height: (0, a.to)([tp.to({ range: [0, 1], output: [0, e9[e2]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(a.animated.div, {
                                style: {
                                    transform: (0, a.to)(
                                        [tp.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)(h.A, {
                                    percent: null != eE ? eE : ep,
                                    animate: !0 !== eH.current && !ex,
                                    interactionEnabled: !P && eD,
                                    backgroundColor: tr ? void 0 : "rgba(0, 0, 0, 0.0)",
                                    playerState: ea,
                                    preloadedBuffers: tr ? eb : void 0,
                                    duration: e$.current?.duration ?? 1,
                                    isFullyVisible: tr && eD,
                                    maxSeekableTime: tr && eD ? e6 : void 0,
                                    onClick: (e) => {
                                        ta(e), ea === u.Q6.ENDED && e4(u.Q6.PLAYING, "user");
                                    },
                                    onScrubBack: ts,
                                    onScrubForward: ti,
                                    "data-testid": "discord-web-video-player-timeline",
                                }),
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: b.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, a.to)(
                                        [tp.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    paddingBottom: (0, a.to)(
                                        [tp.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, a.to)([tp.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => em(!0),
                                onBlur: () => em(!1),
                                children: (0, r.jsx)(E.A, {
                                    videoRef: e$,
                                    playerState: ea,
                                    animSpring: tp,
                                    visible: tr,
                                    seekForwardEnabled: !P,
                                    hideCaptionBtn: null == Q,
                                    hideTranscriptBtn: null == U,
                                    hideSkipButtons: "portrait" === D,
                                    size: e2,
                                    volume: ew,
                                    muted: eO,
                                    transcriptEnabled: eQ,
                                    captionEnabled: eV,
                                    fullScreenEnabled: eF,
                                    handlePlaybackBtnClick: to,
                                    handleTranscriptBtnClick: () => {
                                        eU(!eQ);
                                    },
                                    handleCaptionBtnClick: () => {
                                        eB(!eV);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !eF,
                                            t = (0, f.qf)(e$.current?.parentNode, e$.current);
                                        e && null != t
                                            ? ((0, f.tl)(t), t.addEventListener(f.Wb, tl), F?.(!0), e7(u.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(f.Wb, tl), F?.(!1), (0, f.sP)(t), e7(u.oA.MD)),
                                            eG(e);
                                    },
                                    handleSeekBackBtnClick: ts,
                                    handleSeekForwardBtnClick: ti,
                                    handleControlBarPendingInteraction: eN,
                                    onVolumeChange: (e) => {
                                        ek(e), G?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        eP(e);
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
        let { active: n = !0, ...s } = e,
            { autoplay: a, poster: o, orientation: u = "landscape" } = s,
            [d, m] = l.useState(!1),
            p = l.useCallback(() => {
                m(!0);
            }, []),
            f = l.useRef(null);
        return n || d
            ? (0, r.jsx)(T, { ...s, autoplay: a || d, ref: t })
            : (0, r.jsx)(c.DUT, {
                  className: b.W6,
                  "data-testid": "discord-web-video-player-container",
                  tabIndex: 0,
                  onClick: p,
                  "aria-label": _.intl.string(_.t.RscU7I),
                  focusProps: { ringTarget: f },
                  children: (0, r.jsxs)("div", {
                      className: i()(b.NS, { [b.DO]: "portrait" === u, [b.r7]: "landscape" === u }),
                      children: [
                          null != o && (0, r.jsx)("img", { src: o, className: b.zH, alt: "" }),
                          (0, r.jsx)("div", {
                              className: b.mF,
                              ref: f,
                              children: (0, r.jsx)(c.udU, { size: "xs", color: "currentColor", className: b.z_ }),
                          }),
                      ],
                  }),
              });
    });
