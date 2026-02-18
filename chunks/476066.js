n.d(t, { A: () => b }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(522160),
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
    g = n(79423),
    S = n(60907),
    C = n(267956),
    A = n(838541),
    x = n(681636);
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
            poster: L,
            initialTimeSec: I = 0,
            onProgressUpdate: j,
            onEnded: R,
            onError: k,
            maxSeekableTimeSec: w,
            seekForwardRestricted: M = !1,
            captionTrackUrl: O,
            transcriptText: P,
            renderEndScreen: V,
            onPlayerStateChange: Q,
            onFullscreenChange: U,
            onVolumeChange: B,
            onLoadStart: F,
            onFirstFrame: G,
            onBufferingStart: $,
            onBufferingEnd: Y,
        } = e,
        K = N ?? D,
        { focused: H, focusedChanged: z } = (0, S.A7)(),
        { visible: W, visibleChanged: q, targetRef: X } = (0, S.O7)(),
        [J, Z] = l.useState(b ? u.Q6.PLAYING : u.Q6.PAUSED),
        [ee, et] = l.useState(!1),
        [en, er] = l.useState(!1),
        [el, ei] = l.useState(0),
        [es, ea] = l.useState(null),
        eo = l.useCallback((e) => {
            ea(null), ei(e);
        }, []),
        [eu, ec] = l.useState(!1),
        [ed, em] = l.useState(!0),
        [ep, eE] = l.useState(!1),
        [ef, ev] = l.useState([]),
        [eh, eg] = l.useState(!1),
        [eS, eC] = l.useState(!1),
        eA = l.useRef(!0),
        ex = l.useRef(null),
        e_ = l.useRef(null),
        eb = l.useRef(0);
    l.useLayoutEffect(() => {
        eb.current = performance.now();
    }, []);
    let [eT, ey] = l.useState(0.3),
        [eN, eD] = l.useState(!1),
        [eL, eI] = l.useState(!1),
        [ej, eR] = l.useState(!1),
        [ek, ew] = l.useState(!1),
        eM = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        eO = (0, l.useRef)(null),
        eP = (0, l.useRef)(null),
        eV = l.useRef(!0),
        [eQ, eU] = l.useState(null),
        [eB, eF] = l.useState(!1),
        [eG, e$] = l.useState(null),
        eY = w ?? eO.current?.duration ?? 0,
        [eK, eH] = l.useState(u.oA.MD),
        ez = { [u.oA.MD]: 50, [u.oA.LG]: 58 };
    (0, d.u5)(() => {
        eV.current && (eV.current = !1);
    });
    let eW = l.useCallback(
        (e) => {
            if ((Z(e), Q?.(e), null != eO.current))
                switch (e) {
                    case u.Q6.PLAYING:
                        eU(null), eO.current.play();
                        break;
                    case u.Q6.PAUSED:
                        eO.current.pause(), (eA.current = !1);
                        break;
                    case u.Q6.ENDED:
                        eI(!1);
                }
        },
        [Q],
    );
    l.useEffect(() => {
        let e = null != n && (n === c.ip4.HIDDEN || n === c.ip4.EXITING || n === c.ip4.EXITED),
            t = null != n && q && !W,
            r = z && !H;
        (e || t || r) &&
            null != eO.current &&
            J === u.Q6.PLAYING &&
            (eU(e || t ? "visibility" : "focus"), eW(u.Q6.PAUSED));
    }, [n, H, z, W, q, J, eW]);
    let [eq, eX] = l.useState(!1),
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
    let e6 = !eq && (en || ee || J === u.Q6.ENDED),
        e2 = l.useCallback(() => {
            let e = (0, E.qf)(eO.current?.parentNode, eO.current);
            null == e || (0, E._U)(e) || (e.removeEventListener(E.Wb, e2), ew(!1), U?.(!1), eH(u.oA.MD));
        }, [U]),
        e7 = () => {
            null == eO.current || (e8(Math.max(eO.current.currentTime - 10, 0)), J === u.Q6.ENDED && eW(u.Q6.PAUSED));
        },
        e4 = () => {
            if (null == eO.current || M) return;
            let e = Math.min(eO.current.currentTime + 10, eY);
            e8(e), J !== u.Q6.ENDED && e >= eO.current.duration && eW(u.Q6.ENDED);
        };
    l.useEffect(() => {
        let e = eO.current;
        return () => {
            let t = (0, E.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(E.Wb, e2);
        };
    }, [e2]);
    let e8 = l.useCallback((e) => {
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
        te = l.useCallback(() => {
            if (null == eO.current || 0 === eO.current.textTracks.length) return;
            let e = eO.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, g.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => e3(n)), (n.onexit = () => e5(n)));
                }
        }, []);
    l.useEffect(() => {
        if (null == eP.current) return;
        let e = eP.current;
        return (
            e.addEventListener("load", te),
            () => {
                null != e && e.removeEventListener("load", te);
            }
        );
    }, [te]);
    let tt = l.useCallback(
            (e) => {
                k?.(e);
            },
            [k],
        ),
        tn = (e) => {
            if (null != eO.current && J === u.Q6.PLAYING) {
                if ((ed && em(!1), ep)) {
                    let e = null != e_.current ? performance.now() - e_.current : null;
                    Y?.(e), eE(!1);
                }
                eW(u.Q6.PLAYING);
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
                eC(!1);
            },
            onRest: (e) => {
                1 === e.value && eC(!0);
            },
        })),
        ti = (0, l.useRef)(null),
        [{ captionHeightSpring: ts }, ta] = (0, c.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: _ }));
    l.useEffect(
        () => (
            ta({ captionHeightSpring: ej && null != eG ? (ti.current?.clientHeight ?? 0) : 0, immediate: eM }),
            () => {
                ts.stop();
            }
        ),
        [ej, ta, eM, eG, ts],
    ),
        l.useEffect(
            () => (
                tl({ controlBarAnimSpring: e6 || eh ? 1 : 0, immediate: eM }),
                () => {
                    tr.stop();
                }
            ),
            [e6, tl, eM, eh, tr],
        );
    let to = J === u.Q6.ENDED;
    return (0, r.jsx)(c.DUT, {
        className: x.W6,
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
            className: s()(x.NS, { [x.DO]: "portrait" === y, [x.r7]: "landscape" === y }),
            children: [
                to && V?.(),
                (0, r.jsxs)(p.A, {
                    ref: (e) => {
                        (eO.current = e), (X.current = e);
                    },
                    autoPlay: b,
                    playsInline: !0,
                    mediaLayoutType: ek ? A.dG.STATIC : A.dG.RESPONSIVE,
                    className: s()({ [x.R]: to, [x.IR]: !0 }),
                    controls: !1,
                    poster: L,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        null != eO.current &&
                            (j?.(eO.current.currentTime, eO.current.duration),
                            eo((eO.current.currentTime / eO.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        eW(u.Q6.ENDED), eE(!1), R?.();
                    },
                    onLoadedData: (e) => {
                        ed && em(!1);
                    },
                    onLoadedMetadata: (e) => {
                        null != eO.current && (I > 0 && e8(I), eN ? (eO.current.volume = 0) : (eO.current.volume = eT));
                    },
                    onLoadStart: () => {
                        (ex.current = performance.now()), F?.();
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
                        (0, r.jsx)("source", { onError: () => tt(u.SB.SOURCE_ERROR), src: K, type: "video/mp4" }),
                    ],
                }),
                (ed || ep) &&
                    J === u.Q6.PLAYING &&
                    null != K &&
                    (0, r.jsx)("span", {
                        className: x.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(C.A, { hasVideoAsset: null != K, playerState: J, pauseReason: eQ }),
                eL &&
                    J !== u.Q6.ENDED &&
                    null != P &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(c.DUT, {
                                onClick: () => {
                                    J === u.Q6.PAUSED && eW(u.Q6.PLAYING), eI(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: x.BG }),
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: s()(x.xr, { [x.MZ]: "portrait" === y }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, a.to)([tr, ts], (e, t) => `${e * ez[eK] + t}px`) },
                                children: (0, r.jsx)(h.X, {
                                    text: P,
                                    onClose: () => {
                                        eI(!1);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(a.animated.div, {
                    className: x.Jp,
                    style: { opacity: (0, a.to)([tr.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                (0, r.jsx)(
                    "div",
                    {
                        className: s()(x.yf, { [x.ZH]: J === u.Q6.PLAYING, [x.v7]: J === u.Q6.PAUSED }),
                        children:
                            J === u.Q6.PLAYING
                                ? (0, r.jsx)(c.udU, { className: x.PK })
                                : (0, r.jsx)(c.E$n, { className: x.PK }),
                    },
                    J,
                ),
                ej &&
                    null != eG &&
                    !to &&
                    (0, r.jsx)(a.animated.div, {
                        className: x.o$,
                        ref: ti,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, a.to)([tr.to({ range: [0, 1], output: [0, -ez[eK]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: x.qh,
                            children: eG.text,
                        }),
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: x.r8,
                    style: { height: (0, a.to)([tr.to({ range: [0, 1], output: [0, ez[eK]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(v.A, {
                            percent: null != es ? es : el,
                            animate: !0 !== eV.current && !eu,
                            interactionEnabled: !M && eS,
                            backgroundColor: e6 ? void 0 : "rgba(0, 0, 0, 0.0)",
                            playerState: J,
                            preloadedBuffers: e6 ? ef : void 0,
                            duration: eO.current?.duration ?? 1,
                            isFullyVisible: e6 && eS,
                            maxSeekableTime: e6 && eS ? eY : void 0,
                            onClick: (e) => {
                                e8(e), J === u.Q6.ENDED && eW(u.Q6.PLAYING);
                            },
                            onScrubBack: e7,
                            onScrubForward: e4,
                            "data-testid": "discord-web-video-player-timeline",
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: x.uN,
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
                                seekForwardEnabled: !M,
                                hideCaptionBtn: null == O,
                                hideTranscriptBtn: null == P,
                                hideSkipButtons: "portrait" === y,
                                size: eK,
                                volume: eT,
                                muted: eN,
                                transcriptEnabled: eL,
                                captionEnabled: ej,
                                fullScreenEnabled: ek,
                                handlePlaybackBtnClick: e9,
                                handleTranscriptBtnClick: () => {
                                    eI(!eL);
                                },
                                handleCaptionBtnClick: () => {
                                    eR(!ej);
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !ek,
                                        t = (0, E.qf)(eO.current?.parentNode, eO.current);
                                    e && null != t
                                        ? ((0, E.tl)(t), t.addEventListener(E.Wb, e2), U?.(!0), eH(u.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(E.Wb, e2), U?.(!1), (0, E.sP)(t), eH(u.oA.MD)),
                                        ew(e);
                                },
                                handleSeekBackBtnClick: e7,
                                handleSeekForwardBtnClick: e4,
                                handleControlBarPendingInteraction: eg,
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
