n.d(t, { A: () => b }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(475539),
    o = n(311907),
    u = n(876230),
    c = n(397927),
    d = n(964486),
    m = n(775602),
    p = n(607470),
    E = n(475815),
    f = n(470208),
    v = n(821859),
    h = n(274604),
    x = n(79423),
    g = n(60907),
    S = n(267956),
    C = n(838541),
    A = n(681636);
let _ = { tension: 250, friction: 5, clamp: !0 };
function b(e) {
    let {
            targetTimeSec: t = 1 / 0,
            parentTransitionState: n,
            onOptimisticProgressUpdate: s = () => {},
            autoplay: b = !1,
            performanceClockStartTime: T = 0,
            orientation: y = "landscape",
            videoUrlOverride: N,
            src: D,
            poster: L,
            initialTimeSec: j = 0,
            onProgressUpdate: I,
            onEnded: M,
            onError: k,
            maxSeekableTimeSec: R,
            seekForwardRestricted: w = !1,
            captionTrackUrl: O,
            transcriptText: P,
            renderEndScreen: V,
            onPlayerStateChange: Q,
            onFullscreenChange: U,
            onVolumeChange: B,
            onLoadStart: F,
            onFirstFrame: G,
            onBufferingStart: $,
            onBufferingEnd: K,
        } = e,
        Y = N ?? D,
        { focused: H, focusedChanged: z } = (0, g.A7)(),
        { visible: W, visibleChanged: q, targetRef: X } = (0, g.O7)(),
        [J, Z] = i.useState(b ? u.Q6.PLAYING : u.Q6.PAUSED),
        [ee, et] = i.useState(!1),
        [en, er] = i.useState(!1),
        [ei, es] = i.useState(0),
        [el, ea] = i.useState(null),
        eo = i.useCallback((e) => {
            ea(null), es(e);
        }, []),
        [eu, ec] = i.useState(!1),
        [ed, em] = i.useState(!0),
        [ep, eE] = i.useState(!1),
        [ef, ev] = i.useState([]),
        [eh, ex] = i.useState(!1),
        [eg, eS] = i.useState(!1),
        eC = i.useRef(!0),
        eA = i.useRef(null),
        e_ = i.useRef(null),
        eb = i.useRef(0);
    i.useLayoutEffect(() => {
        eb.current = performance.now();
    }, []);
    let [eT, ey] = i.useState(0.3),
        [eN, eD] = i.useState(!1),
        [eL, ej] = i.useState(!1),
        [eI, eM] = i.useState(!1),
        [ek, eR] = i.useState(!1),
        ew = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        eO = (0, i.useRef)(null),
        eP = (0, i.useRef)(null),
        eV = i.useRef(!0),
        [eQ, eU] = i.useState(null),
        [eB, eF] = i.useState(!1),
        [eG, e$] = i.useState(null),
        eK = R ?? eO.current?.duration ?? 0,
        [eY, eH] = i.useState(u.oA.MD),
        ez = { [u.oA.MD]: 50, [u.oA.LG]: 58 };
    (0, d.u5)(() => {
        eV.current && (eV.current = !1);
    });
    let eW = i.useCallback(
        (e) => {
            if ((Z(e), Q?.(e), null != eO.current))
                switch (e) {
                    case u.Q6.PLAYING:
                        eU(null), eO.current.play();
                        break;
                    case u.Q6.PAUSED:
                        eO.current.pause(), (eC.current = !1);
                        break;
                    case u.Q6.ENDED:
                        ej(!1);
                }
        },
        [Q],
    );
    i.useEffect(() => {
        let e = null != n && (n === c.ip4.HIDDEN || n === c.ip4.EXITING || n === c.ip4.EXITED),
            t = null != n && q && !W,
            r = z && !H;
        (e || t || r) &&
            null != eO.current &&
            J === u.Q6.PLAYING &&
            (eU(e || t ? "visibility" : "focus"), eW(u.Q6.PAUSED));
    }, [n, H, z, W, q, J, eW]);
    let [eq, eX] = i.useState(!1),
        eJ = i.useRef(null),
        eZ = i.useRef(0);
    i.useLayoutEffect(() => {
        eZ.current = performance.now();
    }, []);
    let e0 = i.useCallback(() => {
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
    i.useEffect(() => {
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
    let e6 = !eq && (en || ee || J === u.Q6.ENDED),
        e7 = i.useCallback(() => {
            let e = (0, E.qf)(eO.current?.parentNode, eO.current);
            null == e || (0, E._U)(e) || (e.removeEventListener(E.Wb, e7), eR(!1), U?.(!1), eH(u.oA.MD));
        }, [U]),
        e2 = () => {
            null == eO.current || (e8(Math.max(eO.current.currentTime - 10, 0)), J === u.Q6.ENDED && eW(u.Q6.PAUSED));
        },
        e4 = () => {
            if (null == eO.current || w) return;
            let e = Math.min(eO.current.currentTime + 10, eK);
            e8(e), J !== u.Q6.ENDED && e >= eO.current.duration && eW(u.Q6.ENDED);
        };
    i.useEffect(() => {
        let e = eO.current;
        return () => {
            let t = (0, E.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(E.Wb, e7);
        };
    }, [e7]);
    let e8 = i.useCallback((e) => {
            null != eO.current &&
                (ea((e / (eO.current.duration ?? 1)) * 100), ec(!0), eF(!1), (eO.current.currentTime = e));
        }, []),
        e9 = () => {
            if (null != eO.current)
                switch (J) {
                    case u.Q6.ENDED:
                        e8(0), eW(u.Q6.PLAYING);
                        break;
                    case u.Q6.PLAYING:
                        eW(u.Q6.PAUSED), eU("user");
                        break;
                    default:
                        eW(u.Q6.PLAYING);
                }
        },
        e3 = (e) => {
            e$(e);
        },
        e5 = (e) => {
            e$((t) => (t?.id === e.id ? null : t));
        },
        te = i.useCallback(() => {
            if (null == eO.current || 0 === eO.current.textTracks.length) return;
            let e = eO.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, x.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => e3(n)), (n.onexit = () => e5(n)));
                }
        }, []);
    i.useEffect(() => {
        if (null == eP.current) return;
        let e = eP.current;
        return (
            e.addEventListener("load", te),
            () => {
                null != e && e.removeEventListener("load", te);
            }
        );
    }, [te]);
    let tt = i.useCallback(
            (e) => {
                k?.(e);
            },
            [k],
        ),
        tn = (e) => {
            if (null != eO.current && J === u.Q6.PLAYING) {
                if ((ed && em(!1), ep)) {
                    let e = null != e_.current ? performance.now() - e_.current : null;
                    K?.(e), eE(!1);
                }
                eW(u.Q6.PLAYING);
            }
        };
    i.useEffect(() => {
        if (!eu) return;
        let e = setTimeout(() => {
            ec(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eu]);
    let [{ controlBarAnimSpring: tr }, ti] = (0, c.zhh)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: _,
            onStart: () => {
                eS(!1);
            },
            onRest: (e) => {
                1 === e.value && eS(!0);
            },
        })),
        ts = (0, i.useRef)(null),
        [{ captionHeightSpring: tl }, ta] = (0, c.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: _ }));
    i.useEffect(
        () => (
            ta({ captionHeightSpring: eI && null != eG ? (ts.current?.clientHeight ?? 0) : 0, immediate: ew }),
            () => {
                tl.stop();
            }
        ),
        [eI, ta, ew, eG, tl],
    ),
        i.useEffect(
            () => (
                ti({ controlBarAnimSpring: e6 || eh ? 1 : 0, immediate: ew }),
                () => {
                    tr.stop();
                }
            ),
            [e6, ti, ew, eh, tr],
        );
    let to = J === u.Q6.ENDED;
    return (0, r.jsx)(c.DUT, {
        className: A.W6,
        "data-fullscreen": ek,
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
            className: l()(A.NS, { [A.DO]: "portrait" === y, [A.r7]: "landscape" === y }),
            style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
            children: [
                to && V?.(),
                (0, r.jsxs)(p.A, {
                    ref: (e) => {
                        (eO.current = e), (X.current = e);
                    },
                    autoPlay: b,
                    playsInline: !0,
                    mediaLayoutType: ek ? C.dG.STATIC : C.dG.RESPONSIVE,
                    className: l()({ [A.R]: to, [A.IR]: !0 }),
                    controls: !1,
                    poster: L,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        null != eO.current &&
                            (I?.(eO.current.currentTime, eO.current.duration),
                            eo((eO.current.currentTime / eO.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        eW(u.Q6.ENDED), eE(!1), M?.();
                    },
                    onLoadedData: (e) => {
                        ed && em(!1);
                    },
                    onLoadedMetadata: (e) => {
                        null != eO.current && (j > 0 && e8(j), eN ? (eO.current.volume = 0) : (eO.current.volume = eT));
                    },
                    onLoadStart: () => {
                        (eA.current = performance.now()), F?.();
                    },
                    onPlaying: () => {
                        if (!eC.current) return;
                        let e = 0 !== T ? T : eb.current,
                            t = performance.now() - e;
                        G?.(t), (eC.current = !1);
                    },
                    onWaiting: (e) => {
                        (e_.current = performance.now()), $?.(), eE(!0);
                    },
                    onProgress: (e) => {
                        if (null == eO.current) return;
                        let t = [];
                        for (let e = 0; e < eO.current.buffered.length; e++) {
                            let n = eO.current.buffered.start(e),
                                r = eO.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / eO.current.duration, size: (r - n) / eO.current.duration });
                        }
                        ev(t);
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
                        e9();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != O &&
                            (0, r.jsx)("track", {
                                ref: eP,
                                src: O,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        (0, r.jsx)("source", { onError: () => tt(u.SB.SOURCE_ERROR), src: Y, type: "video/mp4" }),
                    ],
                }),
                (ed || ep) &&
                    J === u.Q6.PLAYING &&
                    null != Y &&
                    (0, r.jsx)("span", {
                        className: A.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(S.A, { hasVideoAsset: null != Y, playerState: J, pauseReason: eQ }),
                eL &&
                    J !== u.Q6.ENDED &&
                    null != P &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(c.DUT, {
                                onClick: () => {
                                    J === u.Q6.PAUSED && eW(u.Q6.PLAYING), ej(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: A.BG }),
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: l()(A.xr, { [A.MZ]: "portrait" === y }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, a.to)([tr, tl], (e, t) => `${e * ez[eY] + t}px`) },
                                children: (0, r.jsx)(h.X, {
                                    text: P,
                                    onClose: () => {
                                        ej(!1);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(a.animated.div, {
                    className: A.Jp,
                    style: { opacity: (0, a.to)([tr.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                (0, r.jsx)(
                    "div",
                    {
                        className: l()(A.yf, { [A.ZH]: J === u.Q6.PLAYING, [A.v7]: J === u.Q6.PAUSED }),
                        children:
                            J === u.Q6.PLAYING
                                ? (0, r.jsx)(c.udU, { className: A.PK })
                                : (0, r.jsx)(c.E$n, { className: A.PK }),
                    },
                    J,
                ),
                eI &&
                    null != eG &&
                    !to &&
                    (0, r.jsx)(a.animated.div, {
                        className: A.o$,
                        ref: ts,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, a.to)([tr.to({ range: [0, 1], output: [-20, -ez[eY]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: A.qh,
                            children: eG.text,
                        }),
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: A.r8,
                    style: { height: (0, a.to)([tr.to({ range: [0, 1], output: [0, ez[eY]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(a.animated.div, {
                            style: {
                                transform: (0, a.to)(
                                    [tr.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${20 * e}px)`,
                                ),
                            },
                            children: (0, r.jsx)(v.A, {
                                percent: null != el ? el : ei,
                                animate: !0 !== eV.current && !eu,
                                interactionEnabled: !w && eg,
                                backgroundColor: e6 ? void 0 : "rgba(0, 0, 0, 0.0)",
                                playerState: J,
                                preloadedBuffers: e6 ? ef : void 0,
                                duration: eO.current?.duration ?? 1,
                                isFullyVisible: e6 && eg,
                                maxSeekableTime: e6 && eg ? eK : void 0,
                                onClick: (e) => {
                                    e8(e), J === u.Q6.ENDED && eW(u.Q6.PLAYING);
                                },
                                onScrubBack: e2,
                                onScrubForward: e4,
                                "data-testid": "discord-web-video-player-timeline",
                            }),
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: A.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, a.to)(
                                    [tr.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                paddingBottom: (0, a.to)(
                                    [tr.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, a.to)([tr.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: () => er(!0),
                            onBlur: () => er(!1),
                            children: (0, r.jsx)(f.A, {
                                videoRef: eO,
                                playerState: J,
                                animSpring: tr,
                                visible: e6,
                                seekForwardEnabled: !w,
                                hideCaptionBtn: null == O,
                                hideTranscriptBtn: null == P,
                                hideSkipButtons: "portrait" === y,
                                size: eY,
                                volume: eT,
                                muted: eN,
                                transcriptEnabled: eL,
                                captionEnabled: eI,
                                fullScreenEnabled: ek,
                                handlePlaybackBtnClick: e9,
                                handleTranscriptBtnClick: () => {
                                    ej(!eL);
                                },
                                handleCaptionBtnClick: () => {
                                    eM(!eI);
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !ek,
                                        t = (0, E.qf)(eO.current?.parentNode, eO.current);
                                    e && null != t
                                        ? ((0, E.tl)(t), t.addEventListener(E.Wb, e7), U?.(!0), eH(u.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(E.Wb, e7), U?.(!1), (0, E.sP)(t), eH(u.oA.MD)),
                                        eR(e);
                                },
                                handleSeekBackBtnClick: e2,
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
