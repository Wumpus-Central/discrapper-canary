n.d(t, { A: () => b }), n(321073);
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
    E = n(475815),
    f = n(470208),
    h = n(821859),
    v = n(274604),
    x = n(79423),
    g = n(60907),
    S = n(267956),
    A = n(838541),
    C = n(221190);
let _ = { tension: 250, friction: 5, clamp: !0 };
function b(e) {
    let {
            targetTimeSec: t = 1 / 0,
            parentTransitionState: n,
            onOptimisticProgressUpdate: i = () => {},
            autoplay: b = !1,
            performanceClockStartTime: T = 0,
            orientation: y = "landscape",
            videoUrlOverride: N,
            src: D,
            poster: I,
            initialTimeSec: L = 0,
            onProgressUpdate: j,
            onEnded: M,
            onError: w,
            maxSeekableTimeSec: k,
            seekForwardRestricted: R = !1,
            captionTrackUrl: P,
            transcriptText: O,
            renderEndScreen: Q,
            onPlayerStateChange: V,
            onFullscreenChange: U,
            onVolumeChange: B,
            onLoadStart: F,
            onFirstFrame: G,
            onBufferingStart: $,
            onBufferingEnd: Y,
        } = e,
        K = N ?? D,
        { focused: H, focusedChanged: W } = (0, g.A7)(),
        { visible: q, visibleChanged: z, targetRef: X } = (0, g.O7)(),
        [J, Z] = l.useState(b ? u.Q6.PLAYING : u.Q6.PAUSED),
        [ee, et] = l.useState(!1),
        [en, er] = l.useState(!1),
        [el, ei] = l.useState(0),
        [ea, es] = l.useState(null),
        eo = l.useCallback((e) => {
            es(null), ei(e);
        }, []),
        [eu, ec] = l.useState(!1),
        [ed, em] = l.useState(!0),
        [ep, eE] = l.useState(!1),
        [ef, eh] = l.useState([]),
        [ev, ex] = l.useState(!1),
        [eg, eS] = l.useState(!1),
        eA = l.useRef(!0),
        eC = l.useRef(null),
        e_ = l.useRef(null),
        eb = l.useRef(0);
    l.useLayoutEffect(() => {
        eb.current = performance.now();
    }, []);
    let [eT, ey] = l.useState(0.3),
        [eN, eD] = l.useState(!1),
        [eI, eL] = l.useState(!1),
        [ej, eM] = l.useState(!1),
        [ew, ek] = l.useState(!1),
        eR = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        eP = (0, l.useRef)(null),
        eO = (0, l.useRef)(null),
        eQ = l.useRef(!0),
        [eV, eU] = l.useState(null),
        [eB, eF] = l.useState(!1),
        [eG, e$] = l.useState(null),
        eY = k ?? eP.current?.duration ?? 0,
        [eK, eH] = l.useState(u.oA.MD),
        eW = { [u.oA.MD]: 50, [u.oA.LG]: 58 };
    (0, d.u5)(() => {
        eQ.current && (eQ.current = !1);
    });
    let eq = l.useCallback(
        (e) => {
            if ((Z(e), V?.(e), null != eP.current))
                switch (e) {
                    case u.Q6.PLAYING:
                        eU(null), eP.current.play();
                        break;
                    case u.Q6.PAUSED:
                        eP.current.pause(), (eA.current = !1);
                        break;
                    case u.Q6.ENDED:
                        eL(!1);
                }
        },
        [V],
    );
    l.useEffect(() => {
        let e = null != n && (n === c.ip4.HIDDEN || n === c.ip4.EXITING || n === c.ip4.EXITED),
            t = null != n && z && !q,
            r = W && !H;
        (e || t || r) &&
            null != eP.current &&
            J === u.Q6.PLAYING &&
            (eU(e || t ? "visibility" : "focus"), eq(u.Q6.PAUSED));
    }, [n, H, W, q, z, J, eq]);
    let [ez, eX] = l.useState(!1),
        eJ = l.useRef(null),
        eZ = l.useRef(0);
    l.useLayoutEffect(() => {
        eZ.current = performance.now();
    }, []);
    let e0 = l.useCallback(() => {
            null != eJ.current && clearTimeout(eJ.current),
                J !== u.Q6.PLAYING ||
                    (eJ.current = setTimeout(
                        () => {
                            J === u.Q6.PLAYING && eX(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - eZ.current)),
                    ));
        }, [J]),
        e1 = () => {
            eX(!1), (eZ.current = performance.now()), e0();
        };
    l.useEffect(() => {
        if (J !== u.Q6.PLAYING) {
            eX(!1), null != eJ.current && clearTimeout(eJ.current);
            return;
        }
        return (
            e0(),
            () => {
                null != eJ.current && clearTimeout(eJ.current);
            }
        );
    }, [J, e0]);
    let e2 = !ez && (en || ee || J === u.Q6.ENDED),
        e6 = l.useCallback(() => {
            let e = (0, E.qf)(eP.current?.parentNode, eP.current);
            null == e || (0, E._U)(e) || (e.removeEventListener(E.Wb, e6), ek(!1), U?.(!1), eH(u.oA.MD));
        }, [U]),
        e7 = () => {
            null == eP.current || (e9(Math.max(eP.current.currentTime - 10, 0)), J === u.Q6.ENDED && eq(u.Q6.PAUSED));
        },
        e4 = () => {
            if (null == eP.current || R) return;
            let e = Math.min(eP.current.currentTime + 10, eY);
            e9(e), J !== u.Q6.ENDED && e >= eP.current.duration && eq(u.Q6.ENDED);
        };
    l.useEffect(() => {
        let e = eP.current;
        return () => {
            let t = (0, E.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(E.Wb, e6);
        };
    }, [e6]);
    let e9 = l.useCallback((e) => {
            null != eP.current &&
                (es((e / (eP.current.duration ?? 1)) * 100), ec(!0), eF(!1), (eP.current.currentTime = e));
        }, []),
        e8 = () => {
            if (null != eP.current)
                switch (J) {
                    case u.Q6.ENDED:
                        e9(0), eq(u.Q6.PLAYING);
                        break;
                    case u.Q6.PLAYING:
                        eq(u.Q6.PAUSED), eU("user");
                        break;
                    default:
                        eq(u.Q6.PLAYING);
                }
        },
        e3 = (e) => {
            e$(e);
        },
        e5 = (e) => {
            e$((t) => (t?.id === e.id ? null : t));
        },
        te = l.useCallback(() => {
            if (null == eP.current || 0 === eP.current.textTracks.length) return;
            let e = eP.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, x.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => e3(n)), (n.onexit = () => e5(n)));
                }
        }, []);
    l.useEffect(() => {
        if (null == eO.current) return;
        let e = eO.current;
        return (
            e.addEventListener("load", te),
            () => {
                null != e && e.removeEventListener("load", te);
            }
        );
    }, [te]);
    let tt = l.useCallback(
            (e) => {
                w?.(e);
            },
            [w],
        ),
        tn = (e) => {
            if (null != eP.current && J === u.Q6.PLAYING) {
                if ((ed && em(!1), ep)) {
                    let e = null != e_.current ? performance.now() - e_.current : null;
                    Y?.(e), eE(!1);
                }
                eq(u.Q6.PLAYING);
            }
        };
    l.useEffect(() => {
        if (!eu) return;
        let e = setTimeout(() => {
            ec(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eu]);
    let [{ controlBarAnimSpring: tr }, tl] = (0, c.zhh)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: _,
            onStart: () => {
                eS(!1);
            },
            onRest: (e) => {
                1 === e.value && eS(!0);
            },
        })),
        ti = (0, l.useRef)(null),
        [{ captionHeightSpring: ta }, ts] = (0, c.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: _ }));
    l.useEffect(
        () => (
            ts({ captionHeightSpring: ej && null != eG ? (ti.current?.clientHeight ?? 0) : 0, immediate: eR }),
            () => {
                ta.stop();
            }
        ),
        [ej, ts, eR, eG, ta],
    ),
        l.useEffect(
            () => (
                tl({ controlBarAnimSpring: e2 || ev ? 1 : 0, immediate: eR }),
                () => {
                    tr.stop();
                }
            ),
            [e2, tl, eR, ev, tr],
        );
    let to = J === u.Q6.ENDED;
    return (0, r.jsx)(c.DUT, {
        className: C.W6,
        "data-fullscreen": ew,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            et(!0), eX(!1), (eZ.current = performance.now()), null != eJ.current && clearTimeout(eJ.current);
        },
        onMouseLeave: () => {
            et(!1), eX(!1);
        },
        onMouseMove: e1,
        onKeyDown: e1,
        children: (0, r.jsxs)("div", {
            className: a()(C.NS, { [C.DO]: "portrait" === y, [C.r7]: "landscape" === y }),
            style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
            children: [
                to && Q?.(),
                (0, r.jsxs)(p.A, {
                    ref: (e) => {
                        (eP.current = e), (X.current = e);
                    },
                    autoPlay: b,
                    playsInline: !0,
                    mediaLayoutType: ew ? A.dG.STATIC : A.dG.RESPONSIVE,
                    className: a()({ [C.R]: to, [C.IR]: !0 }),
                    controls: !1,
                    poster: I,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        null != eP.current &&
                            (j?.(eP.current.currentTime, eP.current.duration),
                            eo((eP.current.currentTime / eP.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        eq(u.Q6.ENDED), eE(!1), M?.();
                    },
                    onLoadedData: (e) => {
                        ed && em(!1);
                    },
                    onLoadedMetadata: (e) => {
                        null != eP.current && (L > 0 && e9(L), eN ? (eP.current.volume = 0) : (eP.current.volume = eT));
                    },
                    onLoadStart: () => {
                        (eC.current = performance.now()), F?.();
                    },
                    onPlaying: () => {
                        if (!eA.current) return;
                        let e = 0 !== T ? T : eb.current,
                            t = performance.now() - e;
                        G?.(t), (eA.current = !1);
                    },
                    onWaiting: (e) => {
                        (e_.current = performance.now()), $?.(), eE(!0);
                    },
                    onProgress: (e) => {
                        if (null == eP.current) return;
                        let t = [];
                        for (let e = 0; e < eP.current.buffered.length; e++) {
                            let n = eP.current.buffered.start(e),
                                r = eP.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / eP.current.duration, size: (r - n) / eP.current.duration });
                        }
                        eh(t);
                    },
                    onCanPlay: tn,
                    onCanPlayThrough: tn,
                    onSeeked: () => {
                        eF(!0);
                    },
                    onAbort: () => tt(u.SB.ABORT),
                    onError: () => tt(u.SB.ERROR),
                    onEmptied: () => tt(u.SB.EMPTIED),
                    onStalled: () => tt(u.SB.STALLED),
                    onClick: () => {
                        e8();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != P &&
                            (0, r.jsx)("track", {
                                ref: eO,
                                src: P,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        (0, r.jsx)("source", { onError: () => tt(u.SB.SOURCE_ERROR), src: K, type: "video/mp4" }),
                    ],
                }),
                (ed || ep) &&
                    J === u.Q6.PLAYING &&
                    null != K &&
                    (0, r.jsx)("span", {
                        className: C.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(S.A, { hasVideoAsset: null != K, playerState: J, pauseReason: eV }),
                eI &&
                    J !== u.Q6.ENDED &&
                    null != O &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(c.DUT, {
                                onClick: () => {
                                    J === u.Q6.PAUSED && eq(u.Q6.PLAYING), eL(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: C.BG }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: a()(C.xr, { [C.MZ]: "portrait" === y }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, s.to)([tr, ta], (e, t) => `${e * eW[eK] + t}px`) },
                                children: (0, r.jsx)(v.X, {
                                    text: O,
                                    onClose: () => {
                                        eL(!1);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(s.animated.div, {
                    className: C.Jp,
                    style: { opacity: (0, s.to)([tr.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                (0, r.jsx)(
                    "div",
                    {
                        className: a()(C.yf, { [C.ZH]: J === u.Q6.PLAYING, [C.v7]: J === u.Q6.PAUSED }),
                        style: { "--custom-play-pause-pop-ms": "1000ms" },
                        children:
                            J === u.Q6.PLAYING
                                ? (0, r.jsx)(c.udU, { className: C.PK })
                                : (0, r.jsx)(c.E$n, { className: C.PK }),
                    },
                    J,
                ),
                ej &&
                    null != eG &&
                    !to &&
                    (0, r.jsx)(s.animated.div, {
                        className: C.o$,
                        ref: ti,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, s.to)([tr.to({ range: [0, 1], output: [-20, -eW[eK]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: C.qh,
                            children: eG.text,
                        }),
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: C.r8,
                    style: { height: (0, s.to)([tr.to({ range: [0, 1], output: [0, eW[eK]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(s.animated.div, {
                            style: {
                                transform: (0, s.to)(
                                    [tr.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${20 * e}px)`,
                                ),
                            },
                            children: (0, r.jsx)(h.A, {
                                percent: null != ea ? ea : el,
                                animate: !0 !== eQ.current && !eu,
                                interactionEnabled: !R && eg,
                                backgroundColor: e2 ? void 0 : "rgba(0, 0, 0, 0.0)",
                                playerState: J,
                                preloadedBuffers: e2 ? ef : void 0,
                                duration: eP.current?.duration ?? 1,
                                isFullyVisible: e2 && eg,
                                maxSeekableTime: e2 && eg ? eY : void 0,
                                onClick: (e) => {
                                    e9(e), J === u.Q6.ENDED && eq(u.Q6.PLAYING);
                                },
                                onScrubBack: e7,
                                onScrubForward: e4,
                                "data-testid": "discord-web-video-player-timeline",
                            }),
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: C.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, s.to)(
                                    [tr.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                paddingBottom: (0, s.to)(
                                    [tr.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, s.to)([tr.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: () => er(!0),
                            onBlur: () => er(!1),
                            children: (0, r.jsx)(f.A, {
                                videoRef: eP,
                                playerState: J,
                                animSpring: tr,
                                visible: e2,
                                seekForwardEnabled: !R,
                                hideCaptionBtn: null == P,
                                hideTranscriptBtn: null == O,
                                hideSkipButtons: "portrait" === y,
                                size: eK,
                                volume: eT,
                                muted: eN,
                                transcriptEnabled: eI,
                                captionEnabled: ej,
                                fullScreenEnabled: ew,
                                handlePlaybackBtnClick: e8,
                                handleTranscriptBtnClick: () => {
                                    eL(!eI);
                                },
                                handleCaptionBtnClick: () => {
                                    eM(!ej);
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !ew,
                                        t = (0, E.qf)(eP.current?.parentNode, eP.current);
                                    e && null != t
                                        ? ((0, E.tl)(t), t.addEventListener(E.Wb, e6), U?.(!0), eH(u.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(E.Wb, e6), U?.(!1), (0, E.sP)(t), eH(u.oA.MD)),
                                        ek(e);
                                },
                                handleSeekBackBtnClick: e7,
                                handleSeekForwardBtnClick: e4,
                                handleControlBarPendingInteraction: ex,
                                onVolumeChange: (e) => {
                                    ey(e), B?.(e);
                                },
                                onMutedChange: (e) => {
                                    eD(e);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
