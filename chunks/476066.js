n.d(t, { A: () => _ }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(442215),
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
    A = n(838541),
    C = n(221190);
let b = { tension: 250, friction: 5, clamp: !0 },
    _ = l.forwardRef(function (e, t) {
        let {
                targetTimeSec: n = 1 / 0,
                parentTransitionState: i,
                onOptimisticProgressUpdate: _ = () => {},
                autoplay: y = !1,
                performanceClockStartTime: T = 0,
                orientation: N = "landscape",
                videoUrlOverride: D,
                src: I,
                poster: L,
                initialTimeSec: j = 0,
                onProgressUpdate: M,
                onEnded: w,
                onError: k,
                maxSeekableTimeSec: R,
                seekForwardRestricted: P = !1,
                captionTrackUrl: O,
                transcriptText: Q,
                renderEndScreen: V,
                onPlayerStateChange: U,
                onFullscreenChange: B,
                onVolumeChange: F,
                onLoadStart: G,
                onLoadEnd: $,
                onFirstFrame: Y,
                onBufferingStart: K,
                onBufferingEnd: H,
                onFocusChange: q,
                onVisibilityChange: W,
                onSeek: z,
                renderOverlay: X,
            } = e,
            J = D ?? I,
            { focused: Z, focusedChanged: ee } = (0, g.A7)(),
            { visible: et, visibleChanged: en, targetRef: er } = (0, g.O7)(),
            [el, ei] = l.useState(y ? u.Q6.PLAYING : u.Q6.PAUSED),
            [ea, es] = l.useState(!1),
            [eo, eu] = l.useState(!1),
            [ec, ed] = l.useState(0),
            [em, ep] = l.useState(null),
            ef = l.useCallback((e) => {
                ep(null), ed(e);
            }, []),
            [eE, eh] = l.useState(!1),
            [ev, ex] = l.useState(!0),
            [eg, eS] = l.useState(!1),
            [eA, eC] = l.useState([]),
            [eb, e_] = l.useState(!1),
            [ey, eT] = l.useState(!1),
            eN = l.useRef(!0),
            eD = l.useRef(null),
            eI = l.useRef(null),
            eL = l.useRef(0);
        l.useLayoutEffect(() => {
            eL.current = performance.now();
        }, []);
        let [ej, eM] = l.useState(0.3),
            [ew, ek] = l.useState(!1),
            [eR, eP] = l.useState(!1),
            [eO, eQ] = l.useState(!1),
            [eV, eU] = l.useState(!1),
            eB = (0, o.bG)([m.A], () => m.A.useReducedMotion),
            eF = (0, l.useRef)(null),
            eG = (0, l.useRef)(null),
            e$ = l.useRef(!0),
            [eY, eK] = l.useState(null),
            [eH, eq] = l.useState(!1),
            [eW, ez] = l.useState(null),
            eX = R ?? eF.current?.duration ?? 0,
            [eJ, eZ] = l.useState(u.oA.MD),
            e0 = { [u.oA.MD]: 50, [u.oA.LG]: 58 };
        (0, d.u5)(() => {
            e$.current && (e$.current = !1);
        });
        let e1 = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((ei(e), U?.(e, t), null != eF.current))
                    switch (e) {
                        case u.Q6.PLAYING:
                            eK(null), eF.current.play();
                            break;
                        case u.Q6.PAUSED:
                            eF.current.pause(), (eN.current = !1);
                            break;
                        case u.Q6.ENDED:
                            eP(!1);
                    }
            },
            [U],
        );
        l.useEffect(() => {
            let e = null != i && (i === c.ip4.HIDDEN || i === c.ip4.EXITING || i === c.ip4.EXITED),
                t = null != i && en && !et,
                n = ee && !Z;
            if ((e || t || n) && null != eF.current && el === u.Q6.PLAYING) {
                let n = e || t ? "visibility" : "focus";
                eK(n), e1(u.Q6.PAUSED, n);
            }
        }, [i, Z, ee, et, en, el, e1]),
            l.useEffect(() => {
                ee && q?.(Z, el);
            }, [Z, ee, el, q]),
            l.useEffect(() => {
                en && W?.(et, el);
            }, [et, en, el, W]);
        let [e2, e6] = l.useState(!1),
            e4 = l.useRef(null),
            e7 = l.useRef(0);
        l.useLayoutEffect(() => {
            e7.current = performance.now();
        }, []);
        let e9 = l.useCallback(() => {
                null != e4.current && clearTimeout(e4.current),
                    el !== u.Q6.PLAYING ||
                        (e4.current = setTimeout(
                            () => {
                                el === u.Q6.PLAYING && e6(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - e7.current)),
                        ));
            }, [el]),
            e8 = () => {
                e6(!1), (e7.current = performance.now()), e9();
            };
        l.useEffect(() => {
            if (el !== u.Q6.PLAYING) {
                e6(!1), null != e4.current && clearTimeout(e4.current);
                return;
            }
            return (
                e9(),
                () => {
                    null != e4.current && clearTimeout(e4.current);
                }
            );
        }, [el, e9]);
        let e3 = !e2 && (eo || ea || el === u.Q6.ENDED),
            e5 = l.useCallback(() => {
                let e = (0, f.qf)(eF.current?.parentNode, eF.current);
                null == e || (0, f._U)(e) || (e.removeEventListener(f.Wb, e5), eU(!1), B?.(!1), eZ(u.oA.MD));
            }, [B]),
            te = () => {
                null == eF.current ||
                    (tn(Math.max(eF.current.currentTime - 10, 0)), el === u.Q6.ENDED && e1(u.Q6.PAUSED, "seek"));
            },
            tt = () => {
                if (null == eF.current || P) return;
                let e = Math.min(eF.current.currentTime + 10, eX);
                tn(e), el !== u.Q6.ENDED && e >= eF.current.duration && e1(u.Q6.ENDED, "seek");
            };
        l.useEffect(() => {
            let e = eF.current;
            return () => {
                let t = (0, f.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(f.Wb, e5);
            };
        }, [e5]);
        let tn = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == eF.current) return;
                    let n = eF.current.currentTime;
                    ep((e / (eF.current.duration ?? 1)) * 100),
                        eh(!0),
                        eq(!1),
                        (eF.current.currentTime = e),
                        t && z?.(n, e);
                },
                [z],
            ),
            tr = () => {
                if (null != eF.current)
                    switch (el) {
                        case u.Q6.ENDED:
                            tn(0), e1(u.Q6.PLAYING, "user");
                            break;
                        case u.Q6.PLAYING:
                            eK("user"), e1(u.Q6.PAUSED, "user");
                            break;
                        default:
                            e1(u.Q6.PLAYING, "user");
                    }
            },
            tl = (e) => {
                ez(e);
            },
            ti = (e) => {
                ez((t) => (t?.id === e.id ? null : t));
            },
            ta = l.useCallback(() => {
                if (null == eF.current || 0 === eF.current.textTracks.length) return;
                let e = eF.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, x.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tl(n)), (n.onexit = () => ti(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == eG.current) return;
            let e = eG.current;
            return (
                e.addEventListener("load", ta),
                () => {
                    null != e && e.removeEventListener("load", ta);
                }
            );
        }, [ta]);
        let ts = l.useCallback(
                (e) => {
                    k?.(e);
                },
                [k],
            ),
            to = (e) => {
                if (null != eF.current && el === u.Q6.PLAYING) {
                    if ((ev && ex(!1), eg)) {
                        let e = null != eI.current ? performance.now() - eI.current : null;
                        H?.(e), eS(!1);
                    }
                    e1(u.Q6.PLAYING, "buffering_recovery");
                }
            };
        l.useEffect(() => {
            if (!eE) return;
            let e = setTimeout(() => {
                eh(!1);
            }, 1e3);
            return () => clearTimeout(e);
        }, [eE]);
        let [{ controlBarAnimSpring: tu }, tc] = (0, c.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: b,
                onStart: () => {
                    eT(!1);
                },
                onRest: (e) => {
                    1 === e.value && eT(!0);
                },
            })),
            td = (0, l.useRef)(null),
            [{ captionHeightSpring: tm }, tp] = (0, c.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: b }));
        l.useEffect(
            () => (
                tp({ captionHeightSpring: eO && null != eW ? (td.current?.clientHeight ?? 0) : 0, immediate: eB }),
                () => {
                    tm.stop();
                }
            ),
            [eO, tp, eB, eW, tm],
        ),
            l.useEffect(
                () => (
                    tc({ controlBarAnimSpring: e3 || eb ? 1 : 0, immediate: eB }),
                    () => {
                        tu.stop();
                    }
                ),
                [e3, tc, eB, eb, tu],
            );
        let tf = el === u.Q6.ENDED;
        return (0, r.jsx)(c.DUT, {
            className: C.W6,
            "data-fullscreen": eV,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                es(!0), e6(!1), (e7.current = performance.now()), null != e4.current && clearTimeout(e4.current);
            },
            onMouseLeave: () => {
                es(!1), e6(!1);
            },
            onMouseMove: e8,
            onKeyDown: e8,
            children: (0, r.jsxs)("div", {
                className: a()(C.NS, { [C.DO]: "portrait" === N, [C.r7]: "landscape" === N }),
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    tf && V?.(),
                    (0, r.jsxs)(p.A, {
                        ref: (e) => {
                            (eF.current = e),
                                (er.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: y,
                        playsInline: !0,
                        mediaLayoutType: eV ? A.dG.STATIC : A.dG.RESPONSIVE,
                        className: a()({ [C.R]: tf, [C.IR]: !0 }),
                        controls: !1,
                        poster: L,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != eF.current &&
                                (M?.(eF.current.currentTime, eF.current.duration),
                                ef((eF.current.currentTime / eF.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            e1(u.Q6.ENDED, "playback_complete"), eS(!1), w?.();
                        },
                        onLoadedData: (e) => {
                            if (ev) {
                                let e = null != eD.current ? performance.now() - eD.current : null;
                                $?.(e), ex(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            null != eF.current &&
                                (j > 0 && tn(j, !1), ew ? (eF.current.volume = 0) : (eF.current.volume = ej));
                        },
                        onLoadStart: () => {
                            (eD.current = performance.now()), G?.();
                        },
                        onPlaying: () => {
                            if (!eN.current) return;
                            let e = 0 !== T ? T : eL.current,
                                t = performance.now() - e;
                            Y?.(t), (eN.current = !1);
                        },
                        onWaiting: (e) => {
                            (eI.current = performance.now()), K?.(), eS(!0);
                        },
                        onProgress: (e) => {
                            if (null == eF.current) return;
                            let t = [];
                            for (let e = 0; e < eF.current.buffered.length; e++) {
                                let n = eF.current.buffered.start(e),
                                    r = eF.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / eF.current.duration, size: (r - n) / eF.current.duration });
                            }
                            eC(t);
                        },
                        onCanPlay: to,
                        onCanPlayThrough: to,
                        onSeeked: () => {
                            eq(!0);
                        },
                        onAbort: () => ts(u.SB.ABORT),
                        onError: () => ts(u.SB.ERROR),
                        onEmptied: () => ts(u.SB.EMPTIED),
                        onStalled: () => ts(u.SB.STALLED),
                        onClick: () => {
                            tr();
                        },
                        crossOrigin: "anonymous",
                        children: [
                            null != O &&
                                (0, r.jsx)("track", {
                                    ref: eG,
                                    src: O,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            (0, r.jsx)("source", { onError: () => ts(u.SB.SOURCE_ERROR), src: J, type: "video/mp4" }),
                        ],
                    }),
                    (ev || eg) &&
                        el === u.Q6.PLAYING &&
                        null != J &&
                        (0, r.jsx)("span", {
                            className: C.S,
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(S.A, { hasVideoAsset: null != J, playerState: el, pauseReason: eY }),
                    null != X &&
                        (0, r.jsx)(s.animated.div, {
                            className: C.R4,
                            style: {
                                opacity: (0, s.to)([tu.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, s.to)([tu.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, s.to)([tu.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: X(),
                        }),
                    eR &&
                        el !== u.Q6.ENDED &&
                        null != Q &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.DUT, {
                                    onClick: () => {
                                        el === u.Q6.PAUSED && e1(u.Q6.PLAYING, "user"), eP(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: C.BG }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: a()(C.xr, { [C.MZ]: "portrait" === N }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, s.to)([tu, tm], (e, t) => `${e * e0[eJ] + t}px`) },
                                    children: (0, r.jsx)(v.X, {
                                        text: Q,
                                        onClose: () => {
                                            eP(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: C.Jp,
                        style: { opacity: (0, s.to)([tu.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: a()(C.yf, { [C.ZH]: el === u.Q6.PLAYING, [C.v7]: el === u.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                el === u.Q6.PLAYING
                                    ? (0, r.jsx)(c.udU, { className: C.PK })
                                    : (0, r.jsx)(c.E$n, { className: C.PK }),
                        },
                        el,
                    ),
                    eO &&
                        null != eW &&
                        !tf &&
                        (0, r.jsx)(s.animated.div, {
                            className: C.o$,
                            ref: td,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, s.to)(
                                    [tu.to({ range: [0, 1], output: [-20, -e0[eJ]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: C.qh,
                                children: eW.text,
                            }),
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: C.r8,
                        style: { height: (0, s.to)([tu.to({ range: [0, 1], output: [0, e0[eJ]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(s.animated.div, {
                                style: {
                                    transform: (0, s.to)(
                                        [tu.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)(h.A, {
                                    percent: null != em ? em : ec,
                                    animate: !0 !== e$.current && !eE,
                                    interactionEnabled: !P && ey,
                                    backgroundColor: e3 ? void 0 : "rgba(0, 0, 0, 0.0)",
                                    playerState: el,
                                    preloadedBuffers: e3 ? eA : void 0,
                                    duration: eF.current?.duration ?? 1,
                                    isFullyVisible: e3 && ey,
                                    maxSeekableTime: e3 && ey ? eX : void 0,
                                    onClick: (e) => {
                                        tn(e), el === u.Q6.ENDED && e1(u.Q6.PLAYING, "user");
                                    },
                                    onScrubBack: te,
                                    onScrubForward: tt,
                                    "data-testid": "discord-web-video-player-timeline",
                                }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: C.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, s.to)(
                                        [tu.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [tu.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, s.to)([tu.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => eu(!0),
                                onBlur: () => eu(!1),
                                children: (0, r.jsx)(E.A, {
                                    videoRef: eF,
                                    playerState: el,
                                    animSpring: tu,
                                    visible: e3,
                                    seekForwardEnabled: !P,
                                    hideCaptionBtn: null == O,
                                    hideTranscriptBtn: null == Q,
                                    hideSkipButtons: "portrait" === N,
                                    size: eJ,
                                    volume: ej,
                                    muted: ew,
                                    transcriptEnabled: eR,
                                    captionEnabled: eO,
                                    fullScreenEnabled: eV,
                                    handlePlaybackBtnClick: tr,
                                    handleTranscriptBtnClick: () => {
                                        eP(!eR);
                                    },
                                    handleCaptionBtnClick: () => {
                                        eQ(!eO);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !eV,
                                            t = (0, f.qf)(eF.current?.parentNode, eF.current);
                                        e && null != t
                                            ? ((0, f.tl)(t), t.addEventListener(f.Wb, e5), B?.(!0), eZ(u.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(f.Wb, e5), B?.(!1), (0, f.sP)(t), eZ(u.oA.MD)),
                                            eU(e);
                                    },
                                    handleSeekBackBtnClick: te,
                                    handleSeekForwardBtnClick: tt,
                                    handleControlBarPendingInteraction: e_,
                                    onVolumeChange: (e) => {
                                        eM(e), F?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        ek(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
