n.d(t, { A: () => y }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(490249),
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
    _ = n(681636);
let b = { tension: 250, friction: 5, clamp: !0 },
    y = l.forwardRef(function (e, t) {
        let {
                targetTimeSec: n = 1 / 0,
                parentTransitionState: i,
                onOptimisticProgressUpdate: y = () => {},
                autoplay: T = !1,
                performanceClockStartTime: N = 0,
                orientation: D = "landscape",
                videoUrlOverride: R,
                src: L,
                poster: I,
                initialTimeSec: M = 0,
                onProgressUpdate: j,
                onEnded: w,
                onError: k,
                maxSeekableTimeSec: O,
                seekForwardRestricted: P = !1,
                captionTrackUrl: Q,
                transcriptText: V,
                renderEndScreen: U,
                onPlayerStateChange: B,
                onFullscreenChange: F,
                onVolumeChange: G,
                onLoadStart: K,
                onLoadEnd: Y,
                onFirstFrame: $,
                onBufferingStart: H,
                onBufferingEnd: z,
                onFocusChange: W,
                onVisibilityChange: q,
                onSeek: X,
                renderOverlay: J,
                onHlsInstance: Z,
            } = e,
            ee = R ?? L,
            { focused: et, focusedChanged: en } = (0, g.A7)(),
            { visible: er, visibleChanged: el, targetRef: ei } = (0, g.O7)(),
            [es, ea] = l.useState(T ? u.Q6.PLAYING : u.Q6.PAUSED),
            [eo, eu] = l.useState(!1),
            [ec, ed] = l.useState(!1),
            [em, ep] = l.useState(0),
            [ef, eE] = l.useState(null),
            eh = l.useCallback((e) => {
                eE(null), ep(e);
            }, []),
            [ev, ex] = l.useState(!1),
            [eg, eS] = l.useState(!0),
            [eA, eC] = l.useState(!1),
            [e_, eb] = l.useState([]),
            [ey, eT] = l.useState(!1),
            [eN, eD] = l.useState(!1),
            eR = l.useRef(!0),
            eL = l.useRef(null),
            eI = l.useRef(null),
            eM = l.useRef(0);
        l.useLayoutEffect(() => {
            eM.current = performance.now();
        }, []);
        let [ej, ew] = l.useState(0.3),
            [ek, eO] = l.useState(!1),
            [eP, eQ] = l.useState(!1),
            [eV, eU] = l.useState(!1),
            [eB, eF] = l.useState(!1),
            eG = (0, o.bG)([m.A], () => m.A.useReducedMotion),
            eK = (0, l.useRef)(null),
            eY = (0, l.useRef)(null),
            e$ = l.useRef(!0),
            [eH, ez] = l.useState(null),
            eW = l.useCallback(
                (e, t) => {
                    k?.(e, t);
                },
                [k],
            ),
            { isHlsActive: eq } = (0, A.Ay)(eK, { src: ee, initialTimeSec: M, onError: eW, onHlsInstance: Z }),
            [eX, eJ] = l.useState(!1),
            [eZ, e0] = l.useState(null),
            e1 = O ?? eK.current?.duration ?? 0,
            [e6, e2] = l.useState(u.oA.MD),
            e7 = { [u.oA.MD]: 50, [u.oA.LG]: 58 };
        (0, d.u5)(() => {
            e$.current && (e$.current = !1);
        });
        let e4 = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((ea(e), B?.(e, t), null != eK.current))
                    switch (e) {
                        case u.Q6.PLAYING:
                            ez(null), eK.current.play();
                            break;
                        case u.Q6.PAUSED:
                            eK.current.pause(), (eR.current = !1);
                            break;
                        case u.Q6.ENDED:
                            eQ(!1);
                    }
            },
            [B],
        );
        l.useEffect(() => {
            let e = null != i && (i === c.ip4.HIDDEN || i === c.ip4.EXITING || i === c.ip4.EXITED),
                t = null != i && el && !er,
                n = en && !et;
            if ((e || t || n) && null != eK.current && es === u.Q6.PLAYING) {
                let n = e || t ? "visibility" : "focus";
                ez(n), e4(u.Q6.PAUSED, n);
            }
        }, [i, et, en, er, el, es, e4]),
            l.useEffect(() => {
                en && W?.(et, es);
            }, [et, en, es, W]),
            l.useEffect(() => {
                el && q?.(er, es);
            }, [er, el, es, q]);
        let [e9, e8] = l.useState(!1),
            e3 = l.useRef(null),
            e5 = l.useRef(0);
        l.useLayoutEffect(() => {
            e5.current = performance.now();
        }, []);
        let te = l.useCallback(() => {
                null != e3.current && clearTimeout(e3.current),
                    es !== u.Q6.PLAYING ||
                        (e3.current = setTimeout(
                            () => {
                                es === u.Q6.PLAYING && e8(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - e5.current)),
                        ));
            }, [es]),
            tt = () => {
                e8(!1), (e5.current = performance.now()), te();
            };
        l.useEffect(() => {
            if (es !== u.Q6.PLAYING) {
                e8(!1), null != e3.current && clearTimeout(e3.current);
                return;
            }
            return (
                te(),
                () => {
                    null != e3.current && clearTimeout(e3.current);
                }
            );
        }, [es, te]);
        let tn = !e9 && (ec || eo || es === u.Q6.ENDED),
            tr = l.useCallback(() => {
                let e = (0, f.qf)(eK.current?.parentNode, eK.current);
                null == e || (0, f._U)(e) || (e.removeEventListener(f.Wb, tr), eF(!1), F?.(!1), e2(u.oA.MD));
            }, [F]),
            tl = () => {
                null == eK.current ||
                    (ts(Math.max(eK.current.currentTime - 10, 0)), es === u.Q6.ENDED && e4(u.Q6.PAUSED, "seek"));
            },
            ti = () => {
                if (null == eK.current || P) return;
                let e = Math.min(eK.current.currentTime + 10, e1);
                ts(e), es !== u.Q6.ENDED && e >= eK.current.duration && e4(u.Q6.ENDED, "seek");
            };
        l.useEffect(() => {
            let e = eK.current;
            return () => {
                let t = (0, f.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(f.Wb, tr);
            };
        }, [tr]);
        let ts = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == eK.current) return;
                    let n = eK.current.currentTime;
                    eE((e / (eK.current.duration ?? 1)) * 100),
                        ex(!0),
                        eJ(!1),
                        (eK.current.currentTime = e),
                        t && X?.(n, e);
                },
                [X],
            ),
            ta = () => {
                if (null != eK.current)
                    switch (es) {
                        case u.Q6.ENDED:
                            ts(0), e4(u.Q6.PLAYING, "user");
                            break;
                        case u.Q6.PLAYING:
                            ez("user"), e4(u.Q6.PAUSED, "user");
                            break;
                        default:
                            e4(u.Q6.PLAYING, "user");
                    }
            },
            to = (e) => {
                e0(e);
            },
            tu = (e) => {
                e0((t) => (t?.id === e.id ? null : t));
            },
            tc = l.useCallback(() => {
                if (null == eK.current || 0 === eK.current.textTracks.length) return;
                let e = eK.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, x.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => to(n)), (n.onexit = () => tu(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == eY.current) return;
            let e = eY.current;
            return (
                e.addEventListener("load", tc),
                () => {
                    null != e && e.removeEventListener("load", tc);
                }
            );
        }, [tc]);
        let td = (e) => {
            if (null != eK.current && es === u.Q6.PLAYING) {
                if ((eg && eS(!1), eA)) {
                    let e = null != eI.current ? performance.now() - eI.current : null;
                    z?.(e), eC(!1);
                }
                e4(u.Q6.PLAYING, "buffering_recovery");
            }
        };
        l.useEffect(() => {
            if (!ev) return;
            let e = setTimeout(() => {
                ex(!1);
            }, 1e3);
            return () => clearTimeout(e);
        }, [ev]);
        let [{ controlBarAnimSpring: tm }, tp] = (0, c.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: b,
                onStart: () => {
                    eD(!1);
                },
                onRest: (e) => {
                    1 === e.value && eD(!0);
                },
            })),
            tf = (0, l.useRef)(null),
            [{ captionHeightSpring: tE }, th] = (0, c.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: b }));
        l.useEffect(
            () => (
                th({ captionHeightSpring: eV && null != eZ ? (tf.current?.clientHeight ?? 0) : 0, immediate: eG }),
                () => {
                    tE.stop();
                }
            ),
            [eV, th, eG, eZ, tE],
        ),
            l.useEffect(
                () => (
                    tp({ controlBarAnimSpring: tn || ey ? 1 : 0, immediate: eG }),
                    () => {
                        tm.stop();
                    }
                ),
                [tn, tp, eG, ey, tm],
            );
        let tv = es === u.Q6.ENDED,
            tx = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "user";
                    null != eK.current && (ts(0), e4(u.Q6.PLAYING, e));
                },
                [ts, e4],
            );
        return (0, r.jsx)(c.DUT, {
            className: _.W6,
            "data-fullscreen": eB,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eu(!0), e8(!1), (e5.current = performance.now()), null != e3.current && clearTimeout(e3.current);
            },
            onMouseLeave: () => {
                eu(!1), e8(!1);
            },
            onMouseMove: tt,
            onKeyDown: tt,
            children: (0, r.jsxs)("div", {
                className: s()(_.NS, { [_.DO]: "portrait" === D, [_.r7]: "landscape" === D }),
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    tv && U?.({ replay: tx }),
                    (0, r.jsxs)(p.A, {
                        ref: (e) => {
                            (eK.current = e),
                                (ei.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: T,
                        playsInline: !0,
                        mediaLayoutType: eB ? C.dG.STATIC : C.dG.RESPONSIVE,
                        className: s()({ [_.R]: tv, [_.IR]: !0 }),
                        controls: !1,
                        poster: I,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != eK.current &&
                                (j?.(eK.current.currentTime, eK.current.duration),
                                eh((eK.current.currentTime / eK.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            e4(u.Q6.ENDED, "playback_complete"), eC(!1), w?.();
                        },
                        onLoadedData: (e) => {
                            if (eg) {
                                let e = null != eL.current ? performance.now() - eL.current : null;
                                Y?.(e), eS(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            null != eK.current &&
                                (M > 0 && ts(M, !1), ek ? (eK.current.volume = 0) : (eK.current.volume = ej));
                        },
                        onLoadStart: () => {
                            (eL.current = performance.now()), K?.();
                        },
                        onPlaying: () => {
                            if (!eR.current) return;
                            let e = 0 !== N ? N : eM.current,
                                t = performance.now() - e;
                            $?.(t), (eR.current = !1);
                        },
                        onWaiting: (e) => {
                            (eI.current = performance.now()), H?.(), eC(!0);
                        },
                        onProgress: (e) => {
                            if (null == eK.current) return;
                            let t = [];
                            for (let e = 0; e < eK.current.buffered.length; e++) {
                                let n = eK.current.buffered.start(e),
                                    r = eK.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / eK.current.duration, size: (r - n) / eK.current.duration });
                            }
                            eb(t);
                        },
                        onCanPlay: td,
                        onCanPlayThrough: td,
                        onSeeked: () => {
                            eJ(!0);
                        },
                        onAbort: () => eW(u.SB.ABORT),
                        onError: () => eW(u.SB.ERROR),
                        onEmptied: () => eW(u.SB.EMPTIED),
                        onStalled: () => eW(u.SB.STALLED),
                        onClick: () => {
                            ta();
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
                            !eq &&
                                (0, r.jsx)("source", {
                                    onError: () => eW(u.SB.SOURCE_ERROR),
                                    src: ee,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    (eg || eA) &&
                        es === u.Q6.PLAYING &&
                        null != ee &&
                        (0, r.jsx)("span", {
                            className: _.S,
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(S.A, { hasVideoAsset: null != ee, playerState: es, pauseReason: eH }),
                    null != J &&
                        (0, r.jsx)(a.animated.div, {
                            className: _.R4,
                            style: {
                                opacity: (0, a.to)([tm.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, a.to)([tm.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, a.to)([tm.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: J(),
                        }),
                    eP &&
                        es !== u.Q6.ENDED &&
                        null != V &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.DUT, {
                                    onClick: () => {
                                        es === u.Q6.PAUSED && e4(u.Q6.PLAYING, "user"), eQ(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: _.BG }),
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: s()(_.xr, { [_.MZ]: "portrait" === D }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, a.to)([tm, tE], (e, t) => `${e * e7[e6] + t}px`) },
                                    children: (0, r.jsx)(v.X, {
                                        text: V,
                                        onClose: () => {
                                            eQ(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(a.animated.div, {
                        className: _.Jp,
                        style: { opacity: (0, a.to)([tm.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: s()(_.yf, { [_.ZH]: es === u.Q6.PLAYING, [_.v7]: es === u.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                es === u.Q6.PLAYING
                                    ? (0, r.jsx)(c.udU, { className: _.PK })
                                    : (0, r.jsx)(c.E$n, { className: _.PK }),
                        },
                        es,
                    ),
                    eV &&
                        null != eZ &&
                        !tv &&
                        (0, r.jsx)(a.animated.div, {
                            className: _.o$,
                            ref: tf,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, a.to)(
                                    [tm.to({ range: [0, 1], output: [-20, -e7[e6]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: _.qh,
                                children: eZ.text,
                            }),
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: _.r8,
                        style: { height: (0, a.to)([tm.to({ range: [0, 1], output: [0, e7[e6]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(a.animated.div, {
                                style: {
                                    transform: (0, a.to)(
                                        [tm.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)(h.A, {
                                    percent: null != ef ? ef : em,
                                    animate: !0 !== e$.current && !ev,
                                    interactionEnabled: !P && eN,
                                    backgroundColor: tn ? void 0 : "rgba(0, 0, 0, 0.0)",
                                    playerState: es,
                                    preloadedBuffers: tn ? e_ : void 0,
                                    duration: eK.current?.duration ?? 1,
                                    isFullyVisible: tn && eN,
                                    maxSeekableTime: tn && eN ? e1 : void 0,
                                    onClick: (e) => {
                                        ts(e), es === u.Q6.ENDED && e4(u.Q6.PLAYING, "user");
                                    },
                                    onScrubBack: tl,
                                    onScrubForward: ti,
                                    "data-testid": "discord-web-video-player-timeline",
                                }),
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: _.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, a.to)(
                                        [tm.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    paddingBottom: (0, a.to)(
                                        [tm.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, a.to)([tm.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => ed(!0),
                                onBlur: () => ed(!1),
                                children: (0, r.jsx)(E.A, {
                                    videoRef: eK,
                                    playerState: es,
                                    animSpring: tm,
                                    visible: tn,
                                    seekForwardEnabled: !P,
                                    hideCaptionBtn: null == Q,
                                    hideTranscriptBtn: null == V,
                                    hideSkipButtons: "portrait" === D,
                                    size: e6,
                                    volume: ej,
                                    muted: ek,
                                    transcriptEnabled: eP,
                                    captionEnabled: eV,
                                    fullScreenEnabled: eB,
                                    handlePlaybackBtnClick: ta,
                                    handleTranscriptBtnClick: () => {
                                        eQ(!eP);
                                    },
                                    handleCaptionBtnClick: () => {
                                        eU(!eV);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !eB,
                                            t = (0, f.qf)(eK.current?.parentNode, eK.current);
                                        e && null != t
                                            ? ((0, f.tl)(t), t.addEventListener(f.Wb, tr), F?.(!0), e2(u.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(f.Wb, tr), F?.(!1), (0, f.sP)(t), e2(u.oA.MD)),
                                            eF(e);
                                    },
                                    handleSeekBackBtnClick: tl,
                                    handleSeekForwardBtnClick: ti,
                                    handleControlBarPendingInteraction: eT,
                                    onVolumeChange: (e) => {
                                        ew(e), G?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        eO(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
