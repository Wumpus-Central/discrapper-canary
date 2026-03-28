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
    x = n(470208),
    E = n(821859),
    v = n(274604),
    g = n(79423),
    b = n(60907),
    y = n(154030),
    S = n(662903),
    C = n(652215),
    A = n(838541),
    N = n(985018),
    T = n(655833);
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
                initialTimeSec: L = 0,
                onProgressUpdate: M,
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
                onHlsInstance: Z,
                preload: q,
                downloadUrl: ee,
                downloadContentType: et,
                progressGlow: en,
                pauseOnLostVisibility: er = !1,
                autoFocus: el = !1,
                timelineIndicatorConfig: ea,
            } = e,
            ei = j ?? P,
            { focused: es, focusedChanged: eo } = (0, b.A7)(),
            { visible: eu, visibleChanged: ec, targetRef: ed } = (0, b.O7)(),
            [em, ep] = l.useState(C ? u.Q6.PLAYING : u.Q6.PAUSED),
            [eh, ef] = l.useState(!1),
            [ex, eE] = l.useState(!1),
            [ev, eg] = l.useState(0),
            [eb, ey] = l.useState(null),
            eS = l.useCallback((e) => {
                ey(null), eg(e);
            }, []),
            [eC, eA] = l.useState(!1),
            [eN, eT] = l.useState(!0),
            [eR, ew] = l.useState(!1),
            [ej, eP] = l.useState([]),
            [eD, eL] = l.useState(!1),
            [eM, ek] = l.useState(!1),
            eI = l.useRef(!0),
            eB = l.useRef(null),
            eU = l.useRef(null),
            eO = l.useRef(0);
        l.useLayoutEffect(() => {
            eO.current = performance.now();
        }, []);
        let [eK, e_] = l.useState(0.3),
            [eG, eQ] = l.useState(!1),
            [e$, eF] = l.useState(!1),
            [eY, ez] = l.useState(!1),
            [eX, eW] = l.useState(!1),
            eV = (0, o.bG)([p.A], () => p.A.useReducedMotion),
            eH = (0, l.useRef)(null),
            eJ = (0, l.useRef)(null),
            eZ = l.useRef(!0),
            [eq, e0] = l.useState(null),
            e1 = l.useCallback(
                (e, t) => {
                    I?.(e, t);
                },
                [I],
            ),
            { isHlsActive: e2 } = (0, S.Ay)(eH, { src: ei, initialTimeSec: L, onError: e1, onHlsInstance: Z }),
            [e6, e4] = l.useState(!1),
            [e8, e7] = l.useState(null),
            [e9, e3] = l.useState(0),
            e5 = B ?? eH.current?.duration ?? 0,
            [te, tt] = l.useState(u.oA.MD),
            tn = { [u.oA.MD]: 50, [u.oA.LG]: 58 };
        (0, m.u5)(() => {
            eZ.current && (eZ.current = !1);
        });
        let tr = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((ep(e), _?.(e, t), null != eH.current))
                    switch (e) {
                        case u.Q6.PLAYING:
                            e0(null), eH.current.play();
                            break;
                        case u.Q6.PAUSED:
                            eH.current.pause(), (eI.current = !1);
                            break;
                        case u.Q6.ENDED:
                            eF(!1);
                    }
            },
            [_],
        );
        l.useEffect(() => {
            if (!er) return;
            let e = null != a && (a === d.ip4.HIDDEN || a === d.ip4.EXITING || a === d.ip4.EXITED),
                t = null != a && ec && !eu,
                n = eo && !es;
            if ((e || t || n) && null != eH.current && em === u.Q6.PLAYING) {
                let n = e || t ? u.KB.VISIBILITY : u.KB.FOCUS;
                e0(n), tr(u.Q6.PAUSED, n);
            }
        }, [er, a, es, eo, eu, ec, em, tr]),
            l.useEffect(() => {
                eo && W?.(es, em);
            }, [es, eo, em, W]),
            l.useEffect(() => {
                ec && V?.(eu, em);
            }, [eu, ec, em, V]);
        let [tl, ta] = l.useState(!1),
            ti = l.useRef(null),
            ts = l.useRef(0);
        l.useLayoutEffect(() => {
            ts.current = performance.now();
        }, []);
        let to = l.useCallback(() => {
                null != ti.current && clearTimeout(ti.current),
                    em !== u.Q6.PLAYING ||
                        (ti.current = setTimeout(
                            () => {
                                em === u.Q6.PLAYING && ta(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - ts.current)),
                        ));
            }, [em]),
            tu = l.useCallback(() => {
                ta(!1), (ts.current = performance.now()), to();
            }, [to]);
        l.useEffect(() => {
            if (em !== u.Q6.PLAYING) {
                ta(!1), null != ti.current && clearTimeout(ti.current);
                return;
            }
            return (
                to(),
                () => {
                    null != ti.current && clearTimeout(ti.current);
                }
            );
        }, [em, to]);
        let tc = !tl && (ex || eh || em === u.Q6.ENDED),
            td = l.useCallback(() => {
                let e = (0, f.qf)(eH.current?.parentNode, eH.current);
                null == e || (0, f._U)(e) || (e.removeEventListener(f.Wb, td), eW(!1), G?.(!1), tt(u.oA.MD));
            }, [G]),
            tm = () => {
                null == eH.current ||
                    (th(Math.max(eH.current.currentTime - 10, 0)), em === u.Q6.ENDED && tr(u.Q6.PAUSED, u.KB.SEEK));
            },
            tp = () => {
                if (null == eH.current) return;
                let e = Math.min(eH.current.currentTime + 10, e5);
                th(e), em !== u.Q6.ENDED && e >= eH.current.duration && tr(u.Q6.ENDED, u.KB.SEEK);
            };
        l.useEffect(() => {
            let e = eH.current;
            return () => {
                let t = (0, f.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(f.Wb, td);
            };
        }, [td]);
        let th = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == eH.current) return;
                    let n = eH.current.currentTime;
                    ey((e / (eH.current.duration ?? 1)) * 100),
                        eA(!0),
                        e4(!1),
                        (eH.current.currentTime = e),
                        t && H?.(n, e);
                },
                [H],
            ),
            tf = () => {
                if (null != eH.current)
                    switch (em) {
                        case u.Q6.ENDED:
                            th(0), tr(u.Q6.PLAYING, u.KB.USER);
                            break;
                        case u.Q6.PLAYING:
                            e0(u.KB.USER), tr(u.Q6.PAUSED, u.KB.USER);
                            break;
                        default:
                            tr(u.Q6.PLAYING, u.KB.USER);
                    }
            },
            tx = (e) => {
                e7(e);
            },
            tE = (e) => {
                e7((t) => (t?.id === e.id ? null : t));
            },
            tv = l.useCallback(() => {
                if (null == eH.current || 0 === eH.current.textTracks.length) return;
                let e = eH.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, g.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tx(n)), (n.onexit = () => tE(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == eJ.current) return;
            let e = eJ.current;
            return (
                e.addEventListener("load", tv),
                () => {
                    null != e && e.removeEventListener("load", tv);
                }
            );
        }, [tv]);
        let tg = (e) => {
            if (null != eH.current && em === u.Q6.PLAYING) {
                if ((eN && eT(!1), eR)) {
                    let e = null != eU.current ? performance.now() - eU.current : null;
                    X?.(e), ew(!1);
                }
                tr(u.Q6.PLAYING, u.KB.BUFFERING_RECOVERY);
            }
        };
        l.useEffect(() => {
            if (!eC) return;
            let e = setTimeout(() => {
                eA(!1);
            }, 1e3);
            return () => clearTimeout(e);
        }, [eC]);
        let [{ controlBarAnimSpring: tb }, ty] = (0, d.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: R,
                onStart: () => {
                    ek(!1);
                },
                onRest: (e) => {
                    1 === e.value && ek(!0);
                },
            })),
            tS = (0, l.useRef)(null),
            [{ captionHeightSpring: tC }, tA] = (0, d.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: R }));
        l.useEffect(
            () => (
                tA({ captionHeightSpring: eY && null != e8 ? (tS.current?.clientHeight ?? 0) : 0, immediate: eV }),
                () => {
                    tC.stop();
                }
            ),
            [eY, tA, eV, e8, tC],
        ),
            l.useEffect(
                () => (
                    ty({ controlBarAnimSpring: tc || eD ? 1 : 0, immediate: eV }),
                    () => {
                        tb.stop();
                    }
                ),
                [tc, ty, eV, eD, tb],
            );
        let tN = em === u.Q6.ENDED && null != K,
            tT = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.KB.USER;
                    null != eH.current && (th(0), tr(u.Q6.PLAYING, e));
                },
                [th, tr],
            ),
            tR = l.useRef(null),
            tw = l.useCallback(
                (e) => {
                    tu(), tR.current?.(e.nativeEvent);
                },
                [tu],
            );
        return (0, r.jsx)(d.DUT, {
            className: T.W6,
            "data-fullscreen": eX,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                ef(!0), ta(!1), (ts.current = performance.now()), null != ti.current && clearTimeout(ti.current);
            },
            onMouseLeave: () => {
                ef(!1), ta(!1);
            },
            onMouseMove: tu,
            onKeyDown: tw,
            children: (0, r.jsxs)("div", {
                className: i()(T.NS, { [T.DO]: "portrait" === w, [T.r7]: "landscape" === w }),
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    tN && K?.({ replay: tT }),
                    (0, r.jsxs)(h.A, {
                        ref: (e) => {
                            (eH.current = e),
                                (ed.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: C,
                        playsInline: !0,
                        mediaLayoutType: eX ? A.dG.STATIC : A.dG.RESPONSIVE,
                        className: i()({ [T.R]: tN, [T.IR]: !0 }),
                        controls: !1,
                        poster: D,
                        preload: q,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != eH.current &&
                                (M?.(eH.current.currentTime, eH.current.duration),
                                eS((eH.current.currentTime / eH.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            tr(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE), ew(!1), k?.();
                        },
                        onLoadedData: (e) => {
                            if (eN) {
                                let e = null != eB.current ? performance.now() - eB.current : null;
                                F?.(e), eT(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == eH.current) return;
                            L > 0 && th(L, !1), eG ? (eH.current.volume = 0) : (eH.current.volume = eK);
                            let t = eH.current.duration;
                            t > 0 && isFinite(t) && e3(t);
                        },
                        onLoadStart: () => {
                            (eB.current = performance.now()), $?.();
                        },
                        onPlaying: () => {
                            if (!eI.current) return;
                            let e = 0 !== N ? N : eO.current,
                                t = performance.now() - e;
                            Y?.(t), (eI.current = !1);
                        },
                        onWaiting: (e) => {
                            (eU.current = performance.now()), z?.(), ew(!0);
                        },
                        onProgress: (e) => {
                            if (null == eH.current) return;
                            let t = [];
                            for (let e = 0; e < eH.current.buffered.length; e++) {
                                let n = eH.current.buffered.start(e),
                                    r = eH.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / eH.current.duration, size: (r - n) / eH.current.duration });
                            }
                            eP(t);
                        },
                        onCanPlay: tg,
                        onCanPlayThrough: tg,
                        onSeeked: () => {
                            e4(!0);
                        },
                        onAbort: () => e1(u.SB.ABORT),
                        onError: () => e1(u.SB.ERROR),
                        onEmptied: () => e1(u.SB.EMPTIED),
                        onStalled: () => e1(u.SB.STALLED),
                        onClick: () => {
                            tf();
                        },
                        crossOrigin: "anonymous",
                        children: [
                            null != U &&
                                (0, r.jsx)("track", {
                                    ref: eJ,
                                    src: U,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !e2 &&
                                (0, r.jsx)("source", {
                                    onError: () => e1(u.SB.SOURCE_ERROR),
                                    src: ei,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    (eN || eR) &&
                        em === u.Q6.PLAYING &&
                        null != ei &&
                        (0, r.jsx)("span", {
                            className: T.S,
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(d.y$y, { type: d.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(y.A, {
                        message: (0, y.u)({ hasVideoAsset: null != ei, playerState: em, pauseReason: eq }),
                        showOverlay: null == ei,
                    }),
                    null != J &&
                        (0, r.jsx)(s.animated.div, {
                            className: T.MU,
                            style: {
                                opacity: (0, s.to)([tb.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, s.to)([tb.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, s.to)([tb.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: J(),
                        }),
                    e$ &&
                        em !== u.Q6.ENDED &&
                        null != O &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.DUT, {
                                    onClick: () => {
                                        em === u.Q6.PAUSED && tr(u.Q6.PLAYING, u.KB.USER), eF(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: T.BG }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: i()(T.xr, { [T.MZ]: "portrait" === w }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, s.to)([tb, tC], (e, t) => `${e * tn[te] + t}px`) },
                                    children: (0, r.jsx)(v.X, {
                                        text: O,
                                        onClose: () => {
                                            eF(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: T.Jp,
                        style: { opacity: (0, s.to)([tb.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(T.yf, { [T.ZH]: em === u.Q6.PLAYING, [T.v7]: em === u.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                em === u.Q6.PLAYING
                                    ? (0, r.jsx)(d.udU, { className: T.PK })
                                    : (0, r.jsx)(d.E$n, { className: T.PK }),
                        },
                        em,
                    ),
                    eY &&
                        null != e8 &&
                        !tN &&
                        (0, r.jsx)(s.animated.div, {
                            className: T.o$,
                            ref: tS,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, s.to)(
                                    [tb.to({ range: [0, 1], output: [-20, -tn[te]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: T.qh,
                                children: e8.text,
                            }),
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: T.r8,
                        style: { height: (0, s.to)([tb.to({ range: [0, 1], output: [0, tn[te]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(s.animated.div, {
                                style: {
                                    transform: (0, s.to)(
                                        [tb.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)(E.Ay, {
                                    percent: null != eb ? eb : ev,
                                    animate: !0 !== eZ.current && !eC,
                                    interactionEnabled: eM && e5 > 0,
                                    backgroundColor: tc ? void 0 : "rgba(0, 0, 0, 0.0)",
                                    playerState: em,
                                    preloadedBuffers: tc ? ej : void 0,
                                    durationSec: e9 > 0 ? e9 : 1,
                                    isFullyVisible: tc && eM,
                                    maxSeekableTime: e5 > 0 ? e5 : void 0,
                                    progressGlow: en,
                                    onClick: (e) => {
                                        th(e), em === u.Q6.ENDED && tr(u.Q6.PLAYING, u.KB.USER);
                                    },
                                    onScrubBack: tm,
                                    onScrubForward: tp,
                                    indicatorConfig: ea,
                                    "data-testid": "discord-web-video-player-timeline",
                                }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: T.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, s.to)(
                                        [tb.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [tb.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, s.to)([tb.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => eE(!0),
                                onBlur: () => eE(!1),
                                children: (0, r.jsx)(x.A, {
                                    videoRef: eH,
                                    playerState: em,
                                    animSpring: tb,
                                    visible: tc,
                                    seekForwardEnabled: null == B || (eH.current?.currentTime ?? 0) + 1 < e5,
                                    hideCaptionBtn: null == U,
                                    hideTranscriptBtn: null == O,
                                    hideSkipButtons: "portrait" === w,
                                    size: te,
                                    downloadUrl: ee,
                                    downloadContentType: et,
                                    autoFocus: el,
                                    keyDownHandlerRef: tR,
                                    volume: eK,
                                    muted: eG,
                                    transcriptEnabled: e$,
                                    captionEnabled: eY,
                                    fullScreenEnabled: eX,
                                    handlePlaybackBtnClick: tf,
                                    handleTranscriptBtnClick: () => {
                                        eF(!e$);
                                    },
                                    handleCaptionBtnClick: () => {
                                        ez(!eY);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !eX,
                                            t = (0, f.qf)(eH.current?.parentNode, eH.current);
                                        e && null != t
                                            ? ((0, f.tl)(t), t.addEventListener(f.Wb, td), G?.(!0), tt(u.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(f.Wb, td), G?.(!1), (0, f.sP)(t), tt(u.oA.MD)),
                                            eW(e);
                                    },
                                    handleSeekBackBtnClick: tm,
                                    handleSeekForwardBtnClick: tp,
                                    handleControlBarPendingInteraction: eL,
                                    onVolumeChange: (e) => {
                                        e_(e), Q?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        eQ(e);
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
            orientation: u = "landscape",
            posterPlaceholder: c,
            posterPlaceholderVersion: m,
            renderOverlay: p,
        } = a,
        [h, f] = l.useState(!1),
        x = l.useCallback(() => {
            f(!0);
        }, []),
        E = l.useRef(null);
    return n || h
        ? (0, r.jsx)(w, { ...a, autoplay: s || h, ref: t })
        : (0, r.jsx)(d.DUT, {
              className: T.W6,
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: x,
              "aria-label": N.intl.string(N.t.RscU7I),
              focusProps: { ringTarget: E },
              children: (0, r.jsxs)("div", {
                  className: i()(T.NS, { [T.DO]: "portrait" === u, [T.r7]: "landscape" === u }),
                  children: [
                      (0, r.jsx)(j, { poster: o, posterPlaceholder: c, posterPlaceholderVersion: m, orientation: u }),
                      null != p && (0, r.jsx)("div", { className: T.MU, children: p() }),
                      (0, r.jsx)("div", {
                          className: T.mF,
                          ref: E,
                          children: (0, r.jsx)(d.udU, { size: "xs", color: "currentColor", className: T.z_ }),
                      }),
                  ],
              }),
          });
});
