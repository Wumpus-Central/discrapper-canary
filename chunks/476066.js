"use strict";
n.d(t, { A: () => O }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(522160),
    l = n(311907),
    u = n(876230),
    c = n(397927),
    d = n(964486),
    _ = n(775602),
    f = n(607470),
    h = n(475815),
    p = n(470208),
    g = n(821859),
    E = n(274604),
    A = n(79423),
    I = n(60907),
    T = n(267956),
    y = n(838541),
    S = n(681636);
let v = 50,
    C = 58,
    b = 10,
    N = { tension: 250, friction: 5, clamp: !0 },
    R = 3e3;
function O(e) {
    let {
            targetTimeSec: t = 1 / 0,
            parentTransitionState: n,
            onOptimisticProgressUpdate: a = () => {},
            autoplay: O = !1,
            performanceClockStartTime: D = 0,
            orientation: L = "landscape",
            videoUrlOverride: w,
            src: x,
            poster: P,
            initialTimeSec: M = 0,
            onProgressUpdate: k,
            onEnded: U,
            onError: G,
            maxSeekableTimeSec: F,
            seekForwardRestricted: V = !1,
            captionTrackUrl: B,
            transcriptText: j,
            renderEndScreen: H,
            onPlayerStateChange: Y,
            onFullscreenChange: W,
            onVolumeChange: K,
            onLoadStart: $,
            onFirstFrame: z,
            onBufferingStart: q,
            onBufferingEnd: X,
        } = e,
        Z = w ?? x,
        { focused: Q, focusedChanged: J } = (0, I.A7)(),
        { visible: ee, visibleChanged: et, targetRef: en } = (0, I.O7)(),
        [er, ei] = i.useState(O ? u.Q6.PLAYING : u.Q6.PAUSED),
        [ea, es] = i.useState(!1),
        [eo, el] = i.useState(!1),
        [eu, ec] = i.useState(0),
        [ed, e_] = i.useState(null),
        ef = i.useCallback((e) => {
            e_(null), ec(e);
        }, []),
        [eh, ep] = i.useState(!1),
        [em, eg] = i.useState(!0),
        [eE, eA] = i.useState(!1),
        [eI, eT] = i.useState([]),
        [ey, eS] = i.useState(!1),
        [ev, eC] = i.useState(!1),
        eb = i.useRef(!0),
        eN = i.useRef(null),
        eR = i.useRef(null),
        eO = i.useRef(0);
    i.useLayoutEffect(() => {
        eO.current = performance.now();
    }, []);
    let [eD, eL] = i.useState(0.3),
        [ew, ex] = i.useState(!1),
        [eP, eM] = i.useState(!1),
        [ek, eU] = i.useState(!1),
        [eG, eF] = i.useState(!1),
        eV = (0, l.bG)([_.A], () => _.A.useReducedMotion),
        eB = (0, i.useRef)(null),
        ej = (0, i.useRef)(null),
        eH = i.useRef(!0),
        [eY, eW] = i.useState(null),
        [eK, e$] = i.useState(!1),
        [ez, eq] = i.useState(null),
        eX = F ?? eB.current?.duration ?? 0,
        [eZ, eQ] = i.useState(u.oA.MD),
        eJ = { [u.oA.MD]: v, [u.oA.LG]: C };
    (0, d.u5)(() => {
        eH.current && (eH.current = !1);
    });
    let e0 = i.useCallback(
        (e) => {
            if ((ei(e), Y?.(e), null != eB.current))
                switch (e) {
                    case u.Q6.PLAYING:
                        eW(null), eB.current.play();
                        break;
                    case u.Q6.PAUSED:
                        eB.current.pause(), (eb.current = !1);
                        break;
                    case u.Q6.ENDED:
                        eM(!1);
                }
        },
        [Y],
    );
    i.useEffect(() => {
        let e = null != n && (n === c.ip4.HIDDEN || n === c.ip4.EXITING || n === c.ip4.EXITED),
            t = null != n && et && !ee,
            r = J && !Q;
        (e || t || r) &&
            null != eB.current &&
            er === u.Q6.PLAYING &&
            (eW(e || t ? "visibility" : "focus"), e0(u.Q6.PAUSED));
    }, [n, Q, J, ee, et, er, e0]);
    let [e1, e2] = i.useState(!1),
        e3 = i.useRef(null),
        e6 = i.useRef(0);
    i.useLayoutEffect(() => {
        e6.current = performance.now();
    }, []);
    let e4 = i.useCallback(() => {
            null != e3.current && clearTimeout(e3.current),
                er !== u.Q6.PLAYING ||
                    (e3.current = setTimeout(
                        () => {
                            er === u.Q6.PLAYING && e2(!0);
                        },
                        Math.max(0, R - (performance.now() - e6.current)),
                    ));
        }, [er]),
        e5 = () => {
            es(!0), e2(!1), (e6.current = performance.now()), null != e3.current && clearTimeout(e3.current);
        },
        e7 = () => {
            es(!1), e2(!1);
        },
        e8 = () => {
            e2(!1), (e6.current = performance.now()), e4();
        };
    i.useEffect(() => {
        if (er !== u.Q6.PLAYING) {
            e2(!1), null != e3.current && clearTimeout(e3.current);
            return;
        }
        return (
            e4(),
            () => {
                null != e3.current && clearTimeout(e3.current);
            }
        );
    }, [er, e4]);
    let e9 = !e1 && (eo || ea || er === u.Q6.ENDED),
        te = () => el(!0),
        tt = () => el(!1),
        tn = () => {
            eM(!eP);
        },
        tr = () => {
            eU(!ek);
        },
        ti = () => {
            eM(!1);
        },
        ta = i.useCallback(() => {
            let e = (0, h.qf)(eB.current?.parentNode, eB.current);
            null == e || (0, h._U)(e) || (e.removeEventListener(h.Wb, ta), eF(!1), W?.(!1), eQ(u.oA.MD));
        }, [W]),
        ts = () => {
            let e = !eG,
                t = (0, h.qf)(eB.current?.parentNode, eB.current);
            e && null != t
                ? ((0, h.tl)(t), t.addEventListener(h.Wb, ta), W?.(!0), eQ(u.oA.LG))
                : e || null == t || (t.removeEventListener(h.Wb, ta), W?.(!1), (0, h.sP)(t), eQ(u.oA.MD)),
                eF(e);
        },
        to = () => {
            null == eB.current || (tu(Math.max(eB.current.currentTime - b, 0)), er === u.Q6.ENDED && e0(u.Q6.PAUSED));
        },
        tl = () => {
            if (null == eB.current || V) return;
            let e = Math.min(eB.current.currentTime + b, eX);
            tu(e), er !== u.Q6.ENDED && e >= eB.current.duration && e0(u.Q6.ENDED);
        };
    i.useEffect(() => {
        let e = eB.current;
        return () => {
            let t = (0, h.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(h.Wb, ta);
        };
    }, [ta]);
    let tu = i.useCallback((e) => {
            null != eB.current &&
                (e_((e / (eB.current.duration ?? 1)) * 100), ep(!0), e$(!1), (eB.current.currentTime = e));
        }, []),
        tc = () => {
            e$(!0);
        },
        td = () => {
            if (null != eB.current)
                switch (er) {
                    case u.Q6.ENDED:
                        tu(0), e0(u.Q6.PLAYING);
                        break;
                    case u.Q6.PLAYING:
                        e0(u.Q6.PAUSED), eW("user");
                        break;
                    default:
                        e0(u.Q6.PLAYING);
                }
        },
        t_ = () => {
            td();
        },
        tf = (e) => {
            eq(e);
        },
        th = (e) => {
            eq((t) => (t?.id === e.id ? null : t));
        },
        tp = () => {
            (eN.current = performance.now()), $?.();
        },
        tm = () => {
            if (!eb.current) return;
            let e = 0 !== D ? D : eO.current,
                t = performance.now() - e;
            z?.(t), (eb.current = !1);
        },
        tg = (e) => {
            null != eB.current && (M > 0 && tu(M), ew ? (eB.current.volume = 0) : (eB.current.volume = eD));
        },
        tE = i.useCallback(() => {
            if (null == eB.current || 0 === eB.current.textTracks.length) return;
            let e = eB.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, A.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tf(n)), (n.onexit = () => th(n)));
                }
        }, []);
    i.useEffect(() => {
        if (null == ej.current) return;
        let e = ej.current;
        return (
            e.addEventListener("load", tE),
            () => {
                null != e && e.removeEventListener("load", tE);
            }
        );
    }, [tE]);
    let tA = (e) => {
            em && eg(!1);
        },
        tI = (e) => {
            (eR.current = performance.now()), q?.(), eA(!0);
        },
        tT = (e) => {
            null != eB.current &&
                (k?.(eB.current.currentTime, eB.current.duration),
                ef((eB.current.currentTime / eB.current.duration) * 100));
        },
        ty = (e) => {
            e0(u.Q6.ENDED), eA(!1), U?.();
        },
        tS = (e) => {
            if (null == eB.current) return;
            let t = [];
            for (let e = 0; e < eB.current.buffered.length; e++) {
                let n = eB.current.buffered.start(e),
                    r = eB.current.buffered.end(e);
                r - n < 1 || t.push({ start: n / eB.current.duration, size: (r - n) / eB.current.duration });
            }
            eT(t);
        },
        tv = i.useCallback(
            (e) => {
                G?.(e);
            },
            [G],
        ),
        tC = () => tv(u.SB.ABORT),
        tb = () => tv(u.SB.ERROR),
        tN = () => tv(u.SB.SOURCE_ERROR),
        tR = () => tv(u.SB.EMPTIED),
        tO = () => tv(u.SB.STALLED),
        tD = (e) => {
            if (null != eB.current && er === u.Q6.PLAYING) {
                if ((em && eg(!1), eE)) {
                    let e = null != eR.current ? performance.now() - eR.current : null;
                    X?.(e), eA(!1);
                }
                e0(u.Q6.PLAYING);
            }
        };
    i.useEffect(() => {
        if (!eh) return;
        let e = setTimeout(() => {
            ep(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eh]);
    let tL = (e) => {
            tu(e), er === u.Q6.ENDED && e0(u.Q6.PLAYING);
        },
        [{ controlBarAnimSpring: tw }, tx] = (0, c.zhh)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: N,
            onStart: () => {
                eC(!1);
            },
            onRest: (e) => {
                1 === e.value && eC(!0);
            },
        })),
        tP = (0, i.useRef)(null),
        [{ captionHeightSpring: tM }, tk] = (0, c.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: N }));
    i.useEffect(
        () => (
            tk({ captionHeightSpring: ek && null != ez ? (tP.current?.clientHeight ?? 0) : 0, immediate: eV }),
            () => {
                tM.stop();
            }
        ),
        [ek, tk, eV, ez, tM],
    ),
        i.useEffect(
            () => (
                tx({ controlBarAnimSpring: e9 || ey ? 1 : 0, immediate: eV }),
                () => {
                    tw.stop();
                }
            ),
            [e9, tx, eV, ey, tw],
        );
    let tU = er === u.Q6.ENDED,
        tG = (e) => {
            eL(e), K?.(e);
        },
        tF = (e) => {
            ex(e);
        };
    return (0, r.jsx)(c.DUT, {
        className: S.W6,
        "data-fullscreen": eG,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: e5,
        onMouseLeave: e7,
        onMouseMove: e8,
        onKeyDown: e8,
        children: (0, r.jsxs)("div", {
            className: s()(S.NS, { [S.DO]: "portrait" === L, [S.r7]: "landscape" === L }),
            children: [
                tU && H?.(),
                (0, r.jsxs)(f.A, {
                    ref: (e) => {
                        (eB.current = e), (en.current = e);
                    },
                    autoPlay: O,
                    playsInline: !0,
                    mediaLayoutType: eG ? y.dG.STATIC : y.dG.RESPONSIVE,
                    className: s()({ [S.R]: tU, [S.IR]: !0 }),
                    controls: !1,
                    poster: P,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: tT,
                    onEnded: ty,
                    onLoadedData: tA,
                    onLoadedMetadata: tg,
                    onLoadStart: tp,
                    onPlaying: tm,
                    onWaiting: tI,
                    onProgress: tS,
                    onCanPlay: tD,
                    onCanPlayThrough: tD,
                    onSeeked: tc,
                    onAbort: tC,
                    onError: tb,
                    onEmptied: tR,
                    onStalled: tO,
                    onClick: t_,
                    crossOrigin: "anonymous",
                    children: [
                        null != B &&
                            (0, r.jsx)("track", {
                                ref: ej,
                                src: B,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        (0, r.jsx)("source", { onError: tN, src: Z, type: "video/mp4" }),
                    ],
                }),
                (em || eE) &&
                    er === u.Q6.PLAYING &&
                    null != Z &&
                    (0, r.jsx)("span", {
                        className: S.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(T.A, { hasVideoAsset: null != Z, playerState: er, pauseReason: eY }),
                eP &&
                    er !== u.Q6.ENDED &&
                    null != j &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(c.DUT, {
                                onClick: () => {
                                    er === u.Q6.PAUSED && e0(u.Q6.PLAYING), eM(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: S.BG }),
                            }),
                            (0, r.jsx)(o.animated.div, {
                                className: s()(S.xr, { [S.MZ]: "portrait" === L }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, o.to)([tw, tM], (e, t) => `${e * eJ[eZ] + t}px`) },
                                children: (0, r.jsx)(E.X, { text: j, onClose: ti }),
                            }),
                        ],
                    }),
                (0, r.jsx)(o.animated.div, {
                    className: S.Jp,
                    style: { opacity: (0, o.to)([tw.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                (0, r.jsx)(
                    "div",
                    {
                        className: s()(S.yf, { [S.ZH]: er === u.Q6.PLAYING, [S.v7]: er === u.Q6.PAUSED }),
                        children:
                            er === u.Q6.PLAYING
                                ? (0, r.jsx)(c.udU, { className: S.PK })
                                : (0, r.jsx)(c.E$n, { className: S.PK }),
                    },
                    er,
                ),
                ek &&
                    null != ez &&
                    !tU &&
                    (0, r.jsx)(o.animated.div, {
                        className: S.o$,
                        ref: tP,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, o.to)([tw.to({ range: [0, 1], output: [0, -eJ[eZ]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: S.qh,
                            children: ez.text,
                        }),
                    }),
                (0, r.jsxs)(o.animated.div, {
                    className: S.r8,
                    style: { height: (0, o.to)([tw.to({ range: [0, 1], output: [0, eJ[eZ]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(g.A, {
                            percent: null != ed ? ed : eu,
                            animate: !0 !== eH.current && !eh,
                            interactionEnabled: !V && ev,
                            backgroundColor: e9 ? void 0 : "rgba(0, 0, 0, 0.0)",
                            playerState: er,
                            preloadedBuffers: e9 ? eI : void 0,
                            duration: eB.current?.duration ?? 1,
                            isFullyVisible: e9 && ev,
                            maxSeekableTime: e9 && ev ? eX : void 0,
                            onClick: tL,
                            onScrubBack: to,
                            onScrubForward: tl,
                            "data-testid": "discord-web-video-player-timeline",
                        }),
                        (0, r.jsx)(o.animated.div, {
                            className: S.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, o.to)(
                                    [tw.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                paddingBottom: (0, o.to)(
                                    [tw.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, o.to)([tw.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: te,
                            onBlur: tt,
                            children: (0, r.jsx)(p.A, {
                                videoRef: eB,
                                playerState: er,
                                animSpring: tw,
                                visible: e9,
                                seekForwardEnabled: !V,
                                hideCaptionBtn: null == B,
                                hideTranscriptBtn: null == j,
                                hideSkipButtons: "portrait" === L,
                                size: eZ,
                                volume: eD,
                                muted: ew,
                                transcriptEnabled: eP,
                                captionEnabled: ek,
                                fullScreenEnabled: eG,
                                handlePlaybackBtnClick: td,
                                handleTranscriptBtnClick: tn,
                                handleCaptionBtnClick: tr,
                                handleFullScreenBtnClick: ts,
                                handleSeekBackBtnClick: to,
                                handleSeekForwardBtnClick: tl,
                                handleControlBarPendingInteraction: eS,
                                onVolumeChange: tG,
                                onMutedChange: tF,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
