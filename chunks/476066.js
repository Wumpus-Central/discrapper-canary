n.d(t, { A: () => y }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(523436),
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
                onLoadStart: $,
                onLoadEnd: Y,
                onFirstFrame: K,
                onBufferingStart: H,
                onBufferingEnd: W,
                onFocusChange: q,
                onVisibilityChange: z,
                onSeek: X,
                renderOverlay: J,
            } = e,
            Z = R ?? L,
            { focused: ee, focusedChanged: et } = (0, g.A7)(),
            { visible: en, visibleChanged: er, targetRef: el } = (0, g.O7)(),
            [ei, es] = l.useState(T ? u.Q6.PLAYING : u.Q6.PAUSED),
            [ea, eo] = l.useState(!1),
            [eu, ec] = l.useState(!1),
            [ed, em] = l.useState(0),
            [ep, ef] = l.useState(null),
            eE = l.useCallback((e) => {
                ef(null), em(e);
            }, []),
            [eh, ev] = l.useState(!1),
            [ex, eg] = l.useState(!0),
            [eS, eA] = l.useState(!1),
            [eC, e_] = l.useState([]),
            [eb, ey] = l.useState(!1),
            [eT, eN] = l.useState(!1),
            eD = l.useRef(!0),
            eR = l.useRef(null),
            eL = l.useRef(null),
            eI = l.useRef(0);
        l.useLayoutEffect(() => {
            eI.current = performance.now();
        }, []);
        let [eM, ej] = l.useState(0.3),
            [ew, ek] = l.useState(!1),
            [eO, eP] = l.useState(!1),
            [eQ, eV] = l.useState(!1),
            [eU, eB] = l.useState(!1),
            eF = (0, o.bG)([m.A], () => m.A.useReducedMotion),
            eG = (0, l.useRef)(null),
            e$ = (0, l.useRef)(null),
            eY = l.useRef(!0),
            [eK, eH] = l.useState(null),
            eW = l.useCallback(
                (e) => {
                    k?.(e);
                },
                [k],
            ),
            { isHlsActive: eq } = (0, A.A)(eG, { src: Z, initialTimeSec: M, onError: eW }),
            [ez, eX] = l.useState(!1),
            [eJ, eZ] = l.useState(null),
            e0 = O ?? eG.current?.duration ?? 0,
            [e1, e6] = l.useState(u.oA.MD),
            e2 = { [u.oA.MD]: 50, [u.oA.LG]: 58 };
        (0, d.u5)(() => {
            eY.current && (eY.current = !1);
        });
        let e7 = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((es(e), B?.(e, t), null != eG.current))
                    switch (e) {
                        case u.Q6.PLAYING:
                            eH(null), eG.current.play();
                            break;
                        case u.Q6.PAUSED:
                            eG.current.pause(), (eD.current = !1);
                            break;
                        case u.Q6.ENDED:
                            eP(!1);
                    }
            },
            [B],
        );
        l.useEffect(() => {
            let e = null != i && (i === c.ip4.HIDDEN || i === c.ip4.EXITING || i === c.ip4.EXITED),
                t = null != i && er && !en,
                n = et && !ee;
            if ((e || t || n) && null != eG.current && ei === u.Q6.PLAYING) {
                let n = e || t ? "visibility" : "focus";
                eH(n), e7(u.Q6.PAUSED, n);
            }
        }, [i, ee, et, en, er, ei, e7]),
            l.useEffect(() => {
                et && q?.(ee, ei);
            }, [ee, et, ei, q]),
            l.useEffect(() => {
                er && z?.(en, ei);
            }, [en, er, ei, z]);
        let [e4, e9] = l.useState(!1),
            e8 = l.useRef(null),
            e3 = l.useRef(0);
        l.useLayoutEffect(() => {
            e3.current = performance.now();
        }, []);
        let e5 = l.useCallback(() => {
                null != e8.current && clearTimeout(e8.current),
                    ei !== u.Q6.PLAYING ||
                        (e8.current = setTimeout(
                            () => {
                                ei === u.Q6.PLAYING && e9(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - e3.current)),
                        ));
            }, [ei]),
            te = () => {
                e9(!1), (e3.current = performance.now()), e5();
            };
        l.useEffect(() => {
            if (ei !== u.Q6.PLAYING) {
                e9(!1), null != e8.current && clearTimeout(e8.current);
                return;
            }
            return (
                e5(),
                () => {
                    null != e8.current && clearTimeout(e8.current);
                }
            );
        }, [ei, e5]);
        let tt = !e4 && (eu || ea || ei === u.Q6.ENDED),
            tn = l.useCallback(() => {
                let e = (0, f.qf)(eG.current?.parentNode, eG.current);
                null == e || (0, f._U)(e) || (e.removeEventListener(f.Wb, tn), eB(!1), F?.(!1), e6(u.oA.MD));
            }, [F]),
            tr = () => {
                null == eG.current ||
                    (ti(Math.max(eG.current.currentTime - 10, 0)), ei === u.Q6.ENDED && e7(u.Q6.PAUSED, "seek"));
            },
            tl = () => {
                if (null == eG.current || P) return;
                let e = Math.min(eG.current.currentTime + 10, e0);
                ti(e), ei !== u.Q6.ENDED && e >= eG.current.duration && e7(u.Q6.ENDED, "seek");
            };
        l.useEffect(() => {
            let e = eG.current;
            return () => {
                let t = (0, f.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(f.Wb, tn);
            };
        }, [tn]);
        let ti = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == eG.current) return;
                    let n = eG.current.currentTime;
                    ef((e / (eG.current.duration ?? 1)) * 100),
                        ev(!0),
                        eX(!1),
                        (eG.current.currentTime = e),
                        t && X?.(n, e);
                },
                [X],
            ),
            ts = () => {
                if (null != eG.current)
                    switch (ei) {
                        case u.Q6.ENDED:
                            ti(0), e7(u.Q6.PLAYING, "user");
                            break;
                        case u.Q6.PLAYING:
                            eH("user"), e7(u.Q6.PAUSED, "user");
                            break;
                        default:
                            e7(u.Q6.PLAYING, "user");
                    }
            },
            ta = (e) => {
                eZ(e);
            },
            to = (e) => {
                eZ((t) => (t?.id === e.id ? null : t));
            },
            tu = l.useCallback(() => {
                if (null == eG.current || 0 === eG.current.textTracks.length) return;
                let e = eG.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, x.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => ta(n)), (n.onexit = () => to(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == e$.current) return;
            let e = e$.current;
            return (
                e.addEventListener("load", tu),
                () => {
                    null != e && e.removeEventListener("load", tu);
                }
            );
        }, [tu]);
        let tc = (e) => {
            if (null != eG.current && ei === u.Q6.PLAYING) {
                if ((ex && eg(!1), eS)) {
                    let e = null != eL.current ? performance.now() - eL.current : null;
                    W?.(e), eA(!1);
                }
                e7(u.Q6.PLAYING, "buffering_recovery");
            }
        };
        l.useEffect(() => {
            if (!eh) return;
            let e = setTimeout(() => {
                ev(!1);
            }, 1e3);
            return () => clearTimeout(e);
        }, [eh]);
        let [{ controlBarAnimSpring: td }, tm] = (0, c.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: b,
                onStart: () => {
                    eN(!1);
                },
                onRest: (e) => {
                    1 === e.value && eN(!0);
                },
            })),
            tp = (0, l.useRef)(null),
            [{ captionHeightSpring: tf }, tE] = (0, c.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: b }));
        l.useEffect(
            () => (
                tE({ captionHeightSpring: eQ && null != eJ ? (tp.current?.clientHeight ?? 0) : 0, immediate: eF }),
                () => {
                    tf.stop();
                }
            ),
            [eQ, tE, eF, eJ, tf],
        ),
            l.useEffect(
                () => (
                    tm({ controlBarAnimSpring: tt || eb ? 1 : 0, immediate: eF }),
                    () => {
                        td.stop();
                    }
                ),
                [tt, tm, eF, eb, td],
            );
        let th = ei === u.Q6.ENDED;
        return (0, r.jsx)(c.DUT, {
            className: _.W6,
            "data-fullscreen": eU,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eo(!0), e9(!1), (e3.current = performance.now()), null != e8.current && clearTimeout(e8.current);
            },
            onMouseLeave: () => {
                eo(!1), e9(!1);
            },
            onMouseMove: te,
            onKeyDown: te,
            children: (0, r.jsxs)("div", {
                className: s()(_.NS, { [_.DO]: "portrait" === D, [_.r7]: "landscape" === D }),
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    th && U?.(),
                    (0, r.jsxs)(p.A, {
                        ref: (e) => {
                            (eG.current = e),
                                (el.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: T,
                        playsInline: !0,
                        mediaLayoutType: eU ? C.dG.STATIC : C.dG.RESPONSIVE,
                        className: s()({ [_.R]: th, [_.IR]: !0 }),
                        controls: !1,
                        poster: I,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != eG.current &&
                                (j?.(eG.current.currentTime, eG.current.duration),
                                eE((eG.current.currentTime / eG.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            e7(u.Q6.ENDED, "playback_complete"), eA(!1), w?.();
                        },
                        onLoadedData: (e) => {
                            if (ex) {
                                let e = null != eR.current ? performance.now() - eR.current : null;
                                Y?.(e), eg(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            null != eG.current &&
                                (M > 0 && ti(M, !1), ew ? (eG.current.volume = 0) : (eG.current.volume = eM));
                        },
                        onLoadStart: () => {
                            (eR.current = performance.now()), $?.();
                        },
                        onPlaying: () => {
                            if (!eD.current) return;
                            let e = 0 !== N ? N : eI.current,
                                t = performance.now() - e;
                            K?.(t), (eD.current = !1);
                        },
                        onWaiting: (e) => {
                            (eL.current = performance.now()), H?.(), eA(!0);
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
                            e_(t);
                        },
                        onCanPlay: tc,
                        onCanPlayThrough: tc,
                        onSeeked: () => {
                            eX(!0);
                        },
                        onAbort: () => eW(u.SB.ABORT),
                        onError: () => eW(u.SB.ERROR),
                        onEmptied: () => eW(u.SB.EMPTIED),
                        onStalled: () => eW(u.SB.STALLED),
                        onClick: () => {
                            ts();
                        },
                        crossOrigin: "anonymous",
                        children: [
                            null != Q &&
                                (0, r.jsx)("track", {
                                    ref: e$,
                                    src: Q,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !eq &&
                                (0, r.jsx)("source", {
                                    onError: () => eW(u.SB.SOURCE_ERROR),
                                    src: Z,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    (ex || eS) &&
                        ei === u.Q6.PLAYING &&
                        null != Z &&
                        (0, r.jsx)("span", {
                            className: _.S,
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(S.A, { hasVideoAsset: null != Z, playerState: ei, pauseReason: eK }),
                    null != J &&
                        (0, r.jsx)(a.animated.div, {
                            className: _.R4,
                            style: {
                                opacity: (0, a.to)([td.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, a.to)([td.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, a.to)([td.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: J(),
                        }),
                    eO &&
                        ei !== u.Q6.ENDED &&
                        null != V &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.DUT, {
                                    onClick: () => {
                                        ei === u.Q6.PAUSED && e7(u.Q6.PLAYING, "user"), eP(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: _.BG }),
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: s()(_.xr, { [_.MZ]: "portrait" === D }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, a.to)([td, tf], (e, t) => `${e * e2[e1] + t}px`) },
                                    children: (0, r.jsx)(v.X, {
                                        text: V,
                                        onClose: () => {
                                            eP(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(a.animated.div, {
                        className: _.Jp,
                        style: { opacity: (0, a.to)([td.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: s()(_.yf, { [_.ZH]: ei === u.Q6.PLAYING, [_.v7]: ei === u.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ei === u.Q6.PLAYING
                                    ? (0, r.jsx)(c.udU, { className: _.PK })
                                    : (0, r.jsx)(c.E$n, { className: _.PK }),
                        },
                        ei,
                    ),
                    eQ &&
                        null != eJ &&
                        !th &&
                        (0, r.jsx)(a.animated.div, {
                            className: _.o$,
                            ref: tp,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, a.to)(
                                    [td.to({ range: [0, 1], output: [-20, -e2[e1]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: _.qh,
                                children: eJ.text,
                            }),
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: _.r8,
                        style: { height: (0, a.to)([td.to({ range: [0, 1], output: [0, e2[e1]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(a.animated.div, {
                                style: {
                                    transform: (0, a.to)(
                                        [td.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)(h.A, {
                                    percent: null != ep ? ep : ed,
                                    animate: !0 !== eY.current && !eh,
                                    interactionEnabled: !P && eT,
                                    backgroundColor: tt ? void 0 : "rgba(0, 0, 0, 0.0)",
                                    playerState: ei,
                                    preloadedBuffers: tt ? eC : void 0,
                                    duration: eG.current?.duration ?? 1,
                                    isFullyVisible: tt && eT,
                                    maxSeekableTime: tt && eT ? e0 : void 0,
                                    onClick: (e) => {
                                        ti(e), ei === u.Q6.ENDED && e7(u.Q6.PLAYING, "user");
                                    },
                                    onScrubBack: tr,
                                    onScrubForward: tl,
                                    "data-testid": "discord-web-video-player-timeline",
                                }),
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: _.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, a.to)(
                                        [td.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    paddingBottom: (0, a.to)(
                                        [td.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, a.to)([td.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => ec(!0),
                                onBlur: () => ec(!1),
                                children: (0, r.jsx)(E.A, {
                                    videoRef: eG,
                                    playerState: ei,
                                    animSpring: td,
                                    visible: tt,
                                    seekForwardEnabled: !P,
                                    hideCaptionBtn: null == Q,
                                    hideTranscriptBtn: null == V,
                                    hideSkipButtons: "portrait" === D,
                                    size: e1,
                                    volume: eM,
                                    muted: ew,
                                    transcriptEnabled: eO,
                                    captionEnabled: eQ,
                                    fullScreenEnabled: eU,
                                    handlePlaybackBtnClick: ts,
                                    handleTranscriptBtnClick: () => {
                                        eP(!eO);
                                    },
                                    handleCaptionBtnClick: () => {
                                        eV(!eQ);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !eU,
                                            t = (0, f.qf)(eG.current?.parentNode, eG.current);
                                        e && null != t
                                            ? ((0, f.tl)(t), t.addEventListener(f.Wb, tn), F?.(!0), e6(u.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(f.Wb, tn), F?.(!1), (0, f.sP)(t), e6(u.oA.MD)),
                                            eB(e);
                                    },
                                    handleSeekBackBtnClick: tr,
                                    handleSeekForwardBtnClick: tl,
                                    handleControlBarPendingInteraction: ey,
                                    onVolumeChange: (e) => {
                                        ej(e), G?.(e);
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
