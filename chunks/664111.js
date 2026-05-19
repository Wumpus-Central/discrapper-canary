n.r(t), n.d(t, { default: () => O }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(873174),
    u = n(17928),
    o = n(876230),
    c = n(966697),
    d = n(231723),
    m = n(717421),
    p = n(939249),
    f = n(289873),
    h = n(782134),
    x = n(113494),
    v = n(834730),
    b = n(964486),
    g = n(775602),
    E = n(607470),
    y = n(475815),
    S = n(718499),
    C = n(23590),
    N = n(671897),
    R = n(275664),
    A = n(408121),
    w = n(984212),
    P = n(739416),
    L = n(931853),
    T = n(90721),
    j = n(652215),
    D = n(838541),
    k = n(375708),
    M = n(834926);
let I = { tension: 250, friction: 5, clamp: !0 },
    B = { visibility: "hidden" },
    F = l.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: c = "landscape",
                videoUrlOverride: j,
                src: k,
                poster: F,
                initialTimeSec: G = 0,
                onProgressUpdate: O,
                onEnded: U,
                onError: Q,
                maxSeekableTimeSec: K,
                captionTrackUrl: $,
                transcriptText: _,
                renderEndScreen: Y,
                onPlayerStateChange: z,
                onFullscreenChange: X,
                onVolumeChange: V,
                onMutedChange: W,
                initialVolume: H = 0.3,
                initialMuted: Z = !1,
                onLoadStart: J,
                onLoadEnd: q,
                onFirstFrame: ee,
                onBufferingStart: et,
                onBufferingEnd: en,
                onFocusChange: er,
                onVisibilityChange: el,
                onSeek: ea,
                renderOverlay: ei,
                renderPersistentOverlay: es,
                transcriptClassName: eu,
                onHlsInstance: eo,
                onClick: ec,
                preload: ed,
                downloadUrl: em,
                downloadContentType: ep,
                extraButtons: ef,
                hideFullScreenBtn: eh = !1,
                hideSkipButtons: ex,
                compactTimeDisplay: ev = !1,
                hidePlaybackSpeedBtn: eb = !1,
                getPlaybackBlockedMessage: eg,
                progressClassName: eE,
                pauseOnLostVisibility: ey = !1,
                persistTimeline: eS = !1,
                persistPlayhead: eC = !0,
                autoFocus: eN = !1,
                autoHideVolumeSlider: eR = !1,
                timelineIndicatorConfig: eA,
                loadingSpinnerPosition: ew = "top-left",
                crossOrigin: eP = "anonymous",
                withVideoHalo: eL = !1,
                objectFit: eT = "contain",
                muxContentMetadata: ej,
                awaitMuxReady: eD = !1,
            } = e,
            ek = j ?? k,
            eM = eg ?? L.u,
            { focused: eI, focusedChanged: eB } = (0, P.A7)(),
            { visible: eF, visibleChanged: eG, targetRef: eO } = (0, P.O7)(),
            [eU, eQ] = l.useState(a ? o.Q6.PLAYING : o.Q6.PAUSED),
            [eK, e$] = l.useState(!1),
            [e_, eY] = l.useState(!1),
            [ez, eX] = l.useState(0),
            [eV, eW] = l.useState(null),
            eH = l.useCallback((e) => {
                eW(null), eX(e);
            }, []),
            [eZ, eJ] = l.useState(!1),
            eq = l.useRef(null),
            [e0, e1] = l.useState(o.h$.LOADING),
            e6 = l.useRef(!1),
            e2 = l.useRef(null),
            [e4, e9] = l.useState([]),
            [e8, e7] = l.useState(!1),
            e3 = l.useRef(!1),
            e5 = l.useRef(!1),
            te = l.useRef(!1),
            tt = l.useRef(!1),
            [tn, tr] = l.useState(!0),
            tl = l.useRef(!0),
            ta = l.useRef(null),
            ti = l.useRef(null),
            [ts, tu] = l.useState(H),
            [to, tc] = l.useState(Z),
            [td, tm] = l.useState(!1),
            [tp, tf] = l.useState(!1),
            [th, tx] = l.useState(!1),
            tv = (0, u.bG)([g.A], () => g.A.useReducedMotion),
            tb = (0, l.useRef)(null),
            tg = (0, l.useRef)(null),
            tE = (0, l.useRef)(null),
            ty = l.useRef(!0),
            [tS, tC] = l.useState(null),
            tN = l.useCallback(() => tb.current?.currentTime ?? null, []);
        (0, T.A)({ videoRef: tb, canvasRef: tg, enabled: eL && !tv, canvasWidth: 32, canvasHeight: 18 });
        let tR = l.useCallback(
                (e, t) => {
                    Q?.(e, t);
                },
                [Q],
            ),
            { isHlsActive: tA, hlsRef: tw } = (0, S.Ay)(tb, {
                src: ek,
                initialTimeSec: G,
                onError: tR,
                onHlsInstance: eo,
                crossOrigin: eP,
            }),
            { isReady: tP } = (0, C.A)({ videoRef: tb, hlsRef: tw, contentMetadata: ej, isHls: tA }),
            tL = eD && !tP && !tA,
            [tT, tj] = l.useState(null),
            [tD, tk] = l.useState(0),
            [tM, tI] = l.useState(!1),
            tB = K ?? tb.current?.duration ?? 0,
            [tF, tG] = l.useState(o.oA.MD),
            tO = { [o.oA.MD]: 56, [o.oA.LG]: 64 };
        (0, b.u5)(() => {
            ty.current && (ty.current = !1);
        });
        let tU = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tt.current = !0), eQ(e), z?.(e, t), null != tb.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            tC(null), tb.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (e3.current = !1), tb.current.pause(), (tl.current = !1);
                            break;
                        case o.Q6.ENDED:
                            tm(!1);
                    }
            },
            [z],
        );
        l.useEffect(() => {
            if (!ey) return;
            let e = null != n && (n === d.ip.HIDDEN || n === d.ip.EXITING || n === d.ip.EXITED),
                t = null != n && eG && !eF,
                r = eB && !eI;
            if ((e || t || r) && null != tb.current && eU === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                tC(n), tU(o.Q6.PAUSED, n);
            }
        }, [ey, n, eI, eB, eF, eG, eU, tU]),
            l.useEffect(() => {
                eB && er?.(eI, eU);
            }, [eI, eB, eU, er]),
            l.useEffect(() => {
                eG && el?.(eF, eU);
            }, [eF, eG, eU, el]);
        let [tQ, tK] = l.useState(!1),
            t$ = l.useRef(null),
            t_ = l.useRef(0);
        l.useLayoutEffect(() => {
            t_.current = performance.now();
        }, []);
        let tY = l.useCallback(() => {
                null != t$.current && clearTimeout(t$.current),
                    eU !== o.Q6.PLAYING ||
                        (t$.current = setTimeout(
                            () => {
                                eU === o.Q6.PLAYING && tK(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - t_.current)),
                        ));
            }, [eU]),
            tz = l.useCallback(() => {
                tK(!1), (t_.current = performance.now()), tY();
            }, [tY]);
        l.useEffect(() => {
            if (eU !== o.Q6.PLAYING) {
                tK(!1), null != t$.current && clearTimeout(t$.current);
                return;
            }
            return (
                tY(),
                () => {
                    null != t$.current && clearTimeout(t$.current);
                }
            );
        }, [eU, tY]),
            l.useEffect(
                () => () => {
                    null != eq.current && clearTimeout(eq.current);
                },
                [],
            );
        let tX = !tQ && (e_ || eK || eU === o.Q6.ENDED),
            tV = l.useRef(X);
        tV.current = X;
        let tW = l.useCallback(() => {
                let e = (0, y.qf)(tb.current?.parentNode, tb.current);
                null == e || (0, y._U)(e) || (e.removeEventListener(y.Wb, tW), tx(!1), tV.current?.(!1), tG(o.oA.MD));
            }, []),
            tH = () => {
                null == tb.current ||
                    (tJ(Math.max((e2.current ?? tb.current.currentTime) - 10, 0)),
                    eU === o.Q6.ENDED && tU(o.Q6.PAUSED, o.KB.SEEK));
            },
            tZ = () => {
                if (null == tb.current) return;
                let e = Math.min((e2.current ?? tb.current.currentTime) + 10, tB);
                tJ(e), eU !== o.Q6.ENDED && e >= tb.current.duration && tU(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = tb.current;
            return () => {
                let t = (0, y.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(y.Wb, tW);
            };
        }, [tW]);
        let tJ = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tb.current) return;
                    let n = tb.current.currentTime;
                    (e2.current = e),
                        eW((e / (tb.current.duration ?? 1)) * 100),
                        eJ(!0),
                        null != eq.current && clearTimeout(eq.current),
                        (eq.current = setTimeout(() => {
                            eJ(!1), (eq.current = null);
                        }, 100)),
                        (e6.current = !0),
                        (tb.current.currentTime = e),
                        t && ea?.(n, e);
                },
                [ea],
            ),
            tq = () => {
                if (null != tb.current)
                    switch (eU) {
                        case o.Q6.ENDED:
                            tJ(0), tU(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            tC(o.KB.USER), tU(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tU(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            t0 = (e) => {
                tj(e);
            },
            t1 = (e) => {
                tj((t) => (t?.id === e.id ? null : t));
            },
            t6 = l.useCallback(() => {
                if (null == tb.current || 0 === tb.current.textTracks.length) return;
                let e = tb.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, w.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => t0(n)), (n.onexit = () => t1(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == tE.current) return;
            let e = tE.current;
            return (
                e.addEventListener("load", t6),
                () => {
                    null != e && e.removeEventListener("load", t6);
                }
            );
        }, [t6]);
        let t2 = (e) => {
                if (null != tb.current) {
                    if (e0 === o.h$.BUFFERING) {
                        let e = null != ti.current ? performance.now() - ti.current : null;
                        en?.(e);
                    } else if (e0 === o.h$.LOADING) {
                        let e = null != ta.current ? performance.now() - ta.current : null;
                        q?.(e);
                    }
                    e1(o.h$.READY), eU === o.Q6.PLAYING && (e3.current || tU(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            t4 = (e) => {
                if ((tJ(e), eU === o.Q6.ENDED && !e5.current)) {
                    let t = tb.current?.duration;
                    (null == t || Number.isNaN(t) || e < t) && tU(o.Q6.PLAYING, o.KB.USER);
                }
            },
            [{ controlBarAnimSpring: t9 }, t8] = (0, m.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: I,
                onStart: () => {
                    tr(!1);
                },
                onRest: () => {
                    tr(!0);
                },
            })),
            t7 = (0, l.useRef)(null),
            [{ captionHeightSpring: t3 }, t5] = (0, m.z)(() => ({ from: { captionHeightSpring: 0 }, config: I }));
        l.useEffect(
            () => (
                t5({ captionHeightSpring: tp && null != tT ? (t7.current?.clientHeight ?? 0) : 0, immediate: tv }),
                () => {
                    t3.stop();
                }
            ),
            [tp, t5, tv, tT, t3],
        ),
            l.useEffect(
                () => (
                    t8({ controlBarAnimSpring: tX || e8 ? 1 : 0, immediate: tv }),
                    () => {
                        t9.stop();
                    }
                ),
                [tX, t8, tv, e8, t9],
            );
        let ne = eU === o.Q6.ENDED && null != Y,
            nt = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != tb.current && (tJ(0), tU(o.Q6.PLAYING, e));
                },
                [tJ, tU],
            ),
            nn = l.useRef(null),
            nr = l.useCallback(
                (e) => {
                    tz(), nn.current?.(e.nativeEvent);
                },
                [tz],
            );
        return (0, r.jsx)(p.D, {
            className: M.W6,
            "data-fullscreen": th,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                e$(!0), tK(!1), (t_.current = performance.now()), null != t$.current && clearTimeout(t$.current);
            },
            onMouseLeave: () => {
                e$(!1), tK(!1);
            },
            onMouseMove: tz,
            children: (0, r.jsxs)("div", {
                className: i()(M.NS, { [M.DO]: "portrait" === c, [M.r7]: "landscape" === c }),
                tabIndex: -1,
                onKeyDown: nr,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    eL && !tv && (0, r.jsx)("canvas", { ref: tg, className: M.Xm }),
                    ne && Y?.({ replay: nt }),
                    (0, r.jsxs)(E.A, {
                        ref: (e) => {
                            (tb.current = e),
                                (eO.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: a,
                        playsInline: !0,
                        mediaLayoutType: th ? D.dG.STATIC : D.dG.RESPONSIVE,
                        className: i()({ [M.R]: ne, [M.IR]: !0, [M.FP]: "cover" === eT && !th }),
                        controls: !1,
                        poster: F,
                        preload: ed,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != tb.current &&
                                (O?.(tb.current.currentTime, tb.current.duration),
                                e6.current || eH((tb.current.currentTime / tb.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            e1(o.h$.READY), U?.(), e5.current || tU(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                        },
                        onLoadedData: (e) => {
                            if (e0 === o.h$.LOADING) {
                                let e = null != ta.current ? performance.now() - ta.current : null;
                                q?.(e), e1(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tb.current) return;
                            G > 0 && !tA && tJ(G, !1), to ? (tb.current.volume = 0) : (tb.current.volume = ts);
                            let t = tb.current.duration;
                            t > 0 && isFinite(t) && tk(t), tI(!0);
                        },
                        onLoadStart: () => {
                            (ta.current = performance.now()), J?.();
                        },
                        onPlaying: () => {
                            tl.current && (ee?.(performance.now()), (tl.current = !1));
                        },
                        onWaiting: (e) => {
                            (ti.current = performance.now()), et?.(), e1(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == tb.current) return;
                            let t = [];
                            for (let e = 0; e < tb.current.buffered.length; e++) {
                                let n = tb.current.buffered.start(e),
                                    r = tb.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / tb.current.duration, size: (r - n) / tb.current.duration });
                            }
                            e9(t);
                        },
                        onCanPlay: t2,
                        onCanPlayThrough: t2,
                        onSeeked: () => {
                            (e6.current = !1),
                                (e2.current = null),
                                null != tb.current && eH((tb.current.currentTime / tb.current.duration) * 100);
                        },
                        onAbort: () => tR(o.SB.ABORT),
                        onError: () => tR(o.SB.ERROR),
                        onEmptied: () => tR(o.SB.EMPTIED),
                        onStalled: () => tR(o.SB.STALLED),
                        onClick: (e) => {
                            null != ec ? ec(e) : tq();
                        },
                        crossOrigin: eP ?? void 0,
                        children: [
                            null != $ &&
                                (0, r.jsx)("track", {
                                    ref: tE,
                                    src: $,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !tA &&
                                !tL &&
                                (0, r.jsx)("source", {
                                    onError: () => tR(o.SB.SOURCE_ERROR),
                                    src: ek,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    e0 !== o.h$.READY &&
                        eU === o.Q6.PLAYING &&
                        null != ek &&
                        (0, r.jsx)("span", {
                            className: i()(M.S, { [M.F]: "center" === ew }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(f.y, { type: f.y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(L.A, {
                        message: eM({ hasVideoAsset: null != ek, playerState: eU, pauseReason: tS }),
                        showOverlay: null == ek,
                    }),
                    null != ei &&
                        (0, r.jsx)(s.animated.div, {
                            className: M.MU,
                            style: {
                                opacity: (0, s.to)([t9.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, s.to)([t9.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, s.to)([t9.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: ei(),
                        }),
                    td &&
                        eU !== o.Q6.ENDED &&
                        null != _ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(p.D, {
                                    onClick: () => {
                                        eU === o.Q6.PAUSED && tU(o.Q6.PLAYING, o.KB.USER), tm(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: M.BG }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: i()(M.xr, eu, { [M.MZ]: "portrait" === c }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, s.to)([t9, t3], (e, t) => `${e * tO[tF] + t}px`) },
                                    children: (0, r.jsx)(A.X, {
                                        text: _,
                                        onClose: () => {
                                            tm(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: M.Jp,
                        style: { opacity: (0, s.to)([t9.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(M.yf, {
                                [M.ZH]: tt.current && eU === o.Q6.PLAYING,
                                [M.v7]: tt.current && eU === o.Q6.PAUSED,
                            }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eU === o.Q6.PLAYING
                                    ? (0, r.jsx)(h.u, { className: M.PK })
                                    : (0, r.jsx)(x.E, { className: M.PK }),
                        },
                        eU,
                    ),
                    tp &&
                        null != tT &&
                        !ne &&
                        (0, r.jsx)(s.animated.div, {
                            className: M.o$,
                            ref: t7,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, s.to)(
                                    [t9.to({ range: [0, 1], output: [-20, -tO[tF]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(v.E, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: M.qh,
                                children: tT.text,
                            }),
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: M.r8,
                        style: { height: (0, s.to)([t9.to({ range: [0, 1], output: [0, tO[tF]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(s.animated.div, {
                                style: {
                                    transform: (0, s.to)(
                                        [t9.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: tX || e8 || eS ? void 0 : B,
                                    children: (0, r.jsx)(R.Ay, {
                                        percent: null != eV ? eV : ez,
                                        animate:
                                            !0 !== ty.current && !eZ && eU === o.Q6.PLAYING && tM && e0 === o.h$.READY,
                                        interactionEnabled: tn && tB > 0,
                                        backgroundColor: tX || eS ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eU,
                                        preloadedBuffers: tX ? e4 : void 0,
                                        durationSec: tD > 0 ? tD : +!tM,
                                        isFullyVisible: tX && tn,
                                        maxSeekableTime: null != K && tB > 0 ? tB : void 0,
                                        progressClassName: eE,
                                        persistPlayhead: eC,
                                        onClick: t4,
                                        onScrubBack: tH,
                                        onScrubForward: tZ,
                                        onDragStateChange: (e) => {
                                            if (((e5.current = e), e7(e), e))
                                                (e3.current = eU === o.Q6.PLAYING),
                                                    (te.current = eU === o.Q6.ENDED),
                                                    e3.current
                                                        ? tb.current?.pause()
                                                        : te.current && tU(o.Q6.PAUSED, o.KB.SEEK);
                                            else {
                                                let e = tb.current,
                                                    t =
                                                        null != e &&
                                                        !Number.isNaN(e.duration) &&
                                                        e.currentTime >= e.duration;
                                                e3.current
                                                    ? ((e3.current = !1),
                                                      t ? tU(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE) : e?.play())
                                                    : te.current
                                                      ? ((te.current = !1),
                                                        t
                                                            ? tU(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE)
                                                            : tU(o.Q6.PLAYING, o.KB.USER))
                                                      : t && tU(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                                            }
                                        },
                                        indicatorConfig: eA,
                                        onIndicatorSeek: t4,
                                        getCurrentTimeSec: tN,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: M.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, s.to)(
                                        [t9.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 20}px`,
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [t9.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, s.to)([t9.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => eY(!0),
                                onBlur: () => eY(!1),
                                children: (0, r.jsx)(N.A, {
                                    videoRef: tb,
                                    playerState: eU,
                                    animSpring: t9,
                                    visible: tX,
                                    seekForwardEnabled: null == K || (tb.current?.currentTime ?? 0) + 1 < tB,
                                    hideCaptionBtn: null == $,
                                    hideTranscriptBtn: null == _,
                                    hideFullScreenBtn: eh,
                                    hidePlaybackSpeedBtn: eb,
                                    hideSkipButtons: ex ?? "portrait" === c,
                                    compactTimeDisplay: ev,
                                    size: tF,
                                    downloadUrl: em,
                                    downloadContentType: ep,
                                    extraButtons: ef,
                                    autoFocus: eN,
                                    keyDownHandlerRef: nn,
                                    volume: ts,
                                    muted: to,
                                    transcriptEnabled: td,
                                    captionEnabled: tp,
                                    fullScreenEnabled: th,
                                    handlePlaybackBtnClick: tq,
                                    handleTranscriptBtnClick: () => {
                                        tm(!td);
                                    },
                                    handleCaptionBtnClick: () => {
                                        tf(!tp);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !th,
                                            t = (0, y.qf)(tb.current?.parentNode, tb.current);
                                        e && null != t
                                            ? ((0, y.tl)(t), t.addEventListener(y.Wb, tW), X?.(!0), tG(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(y.Wb, tW), X?.(!1), (0, y.sP)(t), tG(o.oA.MD)),
                                            tx(e);
                                    },
                                    handleSeekBackBtnClick: tH,
                                    handleSeekForwardBtnClick: tZ,
                                    autoHideVolumeSlider: eR,
                                    handleControlBarPendingInteraction: e7,
                                    onVolumeChange: (e) => {
                                        tu(e), V?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        tc(e), W?.(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                    null != es &&
                        (0, r.jsx)("div", {
                            className: M.MU,
                            children: es({ playerState: eU, isControlBarExpanded: tX, videoRef: tb, isActive: !0 }),
                        }),
                ],
            }),
        });
    });
function G(e) {
    let { poster: t, posterPlaceholder: n, posterPlaceholderVersion: a, orientation: i, objectFit: s = "contain" } = e,
        [u, o] = l.useState(!1),
        d = l.useCallback(() => o(!0), []);
    return null == t
        ? null
        : (0, r.jsx)(c.y, {
              readyState: u ? j.Rv1.READY : j.Rv1.LOADING,
              aspectRatio: "portrait" === i ? 9 / 16 : 16 / 9,
              placeholder: n,
              placeholderVersion: a ?? 1,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              disableSpinner: !0,
              children: (0, r.jsx)("img", { src: t, className: M.zH, style: { objectFit: s }, alt: "", onLoad: d }),
          });
}
let O = l.forwardRef(function (e, t) {
    let { active: n = !0, onClick: a, ...s } = e,
        {
            autoplay: u,
            poster: c,
            orientation: d = "landscape",
            posterPlaceholder: m,
            posterPlaceholderVersion: f,
            renderOverlay: x,
            renderPersistentOverlay: v,
            objectFit: b,
        } = s,
        [g, E] = l.useState(!1),
        y = l.useCallback(
            (e) => {
                null != a ? a(e) : E(!0);
            },
            [a],
        ),
        S = l.useRef(null);
    return n || g
        ? (0, r.jsx)(F, { ...s, onClick: a, autoplay: u || g, ref: t })
        : (0, r.jsx)(p.D, {
              className: i()(M.W6, M.nZ),
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: y,
              "aria-label": k.intl.string(k.t.RscU7I),
              focusProps: { ringTarget: S },
              children: (0, r.jsxs)("div", {
                  className: i()(M.NS, { [M.DO]: "portrait" === d, [M.r7]: "landscape" === d }),
                  children: [
                      (0, r.jsx)(G, {
                          poster: c,
                          posterPlaceholder: m,
                          posterPlaceholderVersion: f,
                          orientation: d,
                          objectFit: b,
                      }),
                      null != x && (0, r.jsx)("div", { className: M.MU, children: x() }),
                      null != v &&
                          (0, r.jsx)("div", {
                              className: M.MU,
                              children: v({ playerState: o.Q6.PAUSED, isControlBarExpanded: !0, isActive: !1 }),
                          }),
                      (0, r.jsx)("div", {
                          className: M.mF,
                          ref: S,
                          children: (0, r.jsx)(h.u, { size: "xs", color: "currentColor", className: M.z_ }),
                      }),
                  ],
              }),
          });
});
