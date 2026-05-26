n.r(t), n.d(t, { default: () => G }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    u = n(873174),
    s = n(17928),
    o = n(876230),
    c = n(966697),
    d = n(231723),
    m = n(717421),
    p = n(939249),
    f = n(289873),
    h = n(782134),
    x = n(113494),
    v = n(834730),
    E = n(964486),
    b = n(775602),
    g = n(607470),
    y = n(475815),
    S = n(718499),
    C = n(23590),
    N = n(671897),
    R = n(565164),
    A = n(275664),
    w = n(408121),
    P = n(984212),
    L = n(739416),
    T = n(931853),
    k = n(90721),
    j = n(920228),
    D = n(652215),
    M = n(838541),
    I = n(375708),
    B = n(332206);
let F = { tension: 250, friction: 5, clamp: !0 },
    U = { visibility: "hidden" },
    $ = l.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: c = "landscape",
                videoUrlOverride: D,
                src: I,
                poster: $,
                initialTimeSec: O = 0,
                onProgressUpdate: G,
                onEnded: K,
                onError: _,
                maxSeekableTimeSec: Q,
                captionTrackUrl: Y,
                transcriptText: z,
                renderEndScreen: X,
                onPlayerStateChange: V,
                onFullscreenChange: H,
                onVolumeChange: W,
                onMutedChange: Z,
                initialVolume: J = 0.3,
                initialMuted: q = !1,
                onLoadStart: ee,
                onLoadEnd: et,
                onFirstFrame: en,
                onBufferingStart: er,
                onBufferingEnd: el,
                onFocusChange: ea,
                onVisibilityChange: ei,
                onSeek: eu,
                renderOverlay: es,
                renderPersistentOverlay: eo,
                transcriptClassName: ec,
                onHlsInstance: ed,
                onClick: em,
                preload: ep,
                downloadUrl: ef,
                downloadContentType: eh,
                extraButtons: ex,
                hideFullScreenBtn: ev = !1,
                hideSkipButtons: eE,
                compactTimeDisplay: eb = !1,
                hidePlaybackSpeedBtn: eg = !1,
                getPlaybackBlockedMessage: ey,
                progressClassName: eS,
                pauseOnLostVisibility: eC = !1,
                persistTimeline: eN = !1,
                persistPlayhead: eR = !0,
                autoFocus: eA = !1,
                autoHideVolumeSlider: ew = !1,
                timelineIndicatorConfig: eP,
                scrubPreviewVttUrl: eL,
                scrubPreviewImageUrl: eT,
                loadingSpinnerPosition: ek = "top-left",
                crossOrigin: ej = "anonymous",
                withVideoHalo: eD = !1,
                objectFit: eM = "contain",
                muxContentMetadata: eI,
                awaitMuxReady: eB = !1,
            } = e,
            eF = D ?? I,
            eU = ey ?? T.u,
            e$ = l.useRef(null),
            eO = (0, R.z5)(e$, eL, eT),
            { focused: eG, focusedChanged: eK } = (0, L.A7)(),
            { visible: e_, visibleChanged: eQ, targetRef: eY } = (0, L.O7)(),
            [ez, eX] = l.useState(a ? o.Q6.PLAYING : o.Q6.PAUSED),
            [eV, eH] = l.useState(!1),
            [eW, eZ] = l.useState(!1),
            [eJ, eq] = l.useState(0),
            [e0, e1] = l.useState(null),
            e6 = l.useCallback((e) => {
                e1(null), eq(e);
            }, []),
            [e2, e4] = l.useState(!1),
            e9 = l.useRef(null),
            [e7, e8] = l.useState(o.h$.LOADING),
            e3 = l.useRef(!1),
            e5 = l.useRef(null),
            [te, tt] = l.useState([]),
            [tn, tr] = l.useState(!1),
            tl = l.useRef(!1),
            ta = l.useRef(!1),
            ti = l.useRef(!1),
            tu = l.useRef(!1),
            [ts, to] = l.useState(!0),
            tc = l.useRef(!0),
            td = l.useRef(null),
            tm = l.useRef(null),
            [tp, tf] = l.useState(J),
            [th, tx] = l.useState(q),
            [tv, tE] = l.useState(!1),
            [tb, tg] = l.useState(!1),
            [ty, tS] = l.useState(!1),
            tC = (0, s.bG)([b.A], () => b.A.useReducedMotion),
            tN = (0, l.useRef)(null),
            tR = (0, l.useRef)(null),
            tA = (0, l.useRef)(null),
            tw = l.useRef(!0),
            [tP, tL] = l.useState(null),
            tT = l.useCallback(() => tN.current?.currentTime ?? null, []);
        (0, k.A)({ videoRef: tN, canvasRef: tR, enabled: eD && !tC, canvasWidth: 32, canvasHeight: 18 });
        let tk = l.useCallback(
                (e, t) => {
                    _?.(e, t);
                },
                [_],
            ),
            { isHlsActive: tj, hlsRef: tD } = (0, S.Ay)(tN, {
                src: eF,
                initialTimeSec: O,
                onError: tk,
                onHlsInstance: ed,
                crossOrigin: ej,
            }),
            { isReady: tM } = (0, C.A)({ videoRef: tN, hlsRef: tD, contentMetadata: eI, isHls: tj }),
            tI = eB && !tM && !tj,
            [tB, tF] = l.useState(null),
            [tU, t$] = l.useState(0),
            [tO, tG] = l.useState(!1),
            tK = Q ?? tN.current?.duration ?? 0,
            [t_, tQ] = l.useState(o.oA.MD),
            tY = { [o.oA.MD]: 56, [o.oA.LG]: 64 };
        (0, E.u5)(() => {
            tw.current && (tw.current = !1);
        });
        let tz = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tu.current = !0), eX(e), V?.(e, t), null != tN.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            tL(null), tN.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (tl.current = !1), tN.current.pause(), (tc.current = !1);
                            break;
                        case o.Q6.ENDED:
                            tE(!1);
                    }
            },
            [V],
        );
        l.useEffect(() => {
            if (!eC) return;
            let e = null != n && (n === d.ip.HIDDEN || n === d.ip.EXITING || n === d.ip.EXITED),
                t = null != n && eQ && !e_,
                r = eK && !eG;
            if ((e || t || r) && null != tN.current && ez === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                tL(n), tz(o.Q6.PAUSED, n);
            }
        }, [eC, n, eG, eK, e_, eQ, ez, tz]),
            (0, j.A)({
                videoRef: tN,
                enabled: eC,
                onPipPause: () => {
                    tL(o.KB.PICTURE_IN_PICTURE), tz(o.Q6.PAUSED, o.KB.PICTURE_IN_PICTURE);
                },
                onHiddenPause: () => {
                    tL(o.KB.FOCUS), tz(o.Q6.PAUSED, o.KB.FOCUS);
                },
            }),
            l.useEffect(() => {
                eK && ea?.(eG, ez);
            }, [eG, eK, ez, ea]),
            l.useEffect(() => {
                eQ && ei?.(e_, ez);
            }, [e_, eQ, ez, ei]);
        let [tX, tV] = l.useState(!1),
            tH = l.useRef(null),
            tW = l.useRef(0);
        l.useLayoutEffect(() => {
            tW.current = performance.now();
        }, []);
        let tZ = l.useCallback(() => {
                null != tH.current && clearTimeout(tH.current),
                    ez !== o.Q6.PLAYING ||
                        (tH.current = setTimeout(
                            () => {
                                ez === o.Q6.PLAYING && tV(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tW.current)),
                        ));
            }, [ez]),
            tJ = l.useCallback(() => {
                tV(!1), (tW.current = performance.now()), tZ();
            }, [tZ]);
        l.useEffect(() => {
            if (ez !== o.Q6.PLAYING) {
                tV(!1), null != tH.current && clearTimeout(tH.current);
                return;
            }
            return (
                tZ(),
                () => {
                    null != tH.current && clearTimeout(tH.current);
                }
            );
        }, [ez, tZ]),
            l.useEffect(
                () => () => {
                    null != e9.current && clearTimeout(e9.current);
                },
                [],
            );
        let tq = !tX && (eW || eV || ez === o.Q6.ENDED),
            t0 = l.useRef(H);
        t0.current = H;
        let t1 = l.useCallback(() => {
                let e = (0, y.qf)(tN.current?.parentNode, tN.current);
                null == e || (0, y._U)(e) || (e.removeEventListener(y.Wb, t1), tS(!1), t0.current?.(!1), tQ(o.oA.MD));
            }, []),
            t6 = () => {
                null == tN.current ||
                    (t4(Math.max((e5.current ?? tN.current.currentTime) - 10, 0)),
                    ez === o.Q6.ENDED && tz(o.Q6.PAUSED, o.KB.SEEK));
            },
            t2 = () => {
                if (null == tN.current) return;
                let e = Math.min((e5.current ?? tN.current.currentTime) + 10, tK);
                t4(e), ez !== o.Q6.ENDED && e >= tN.current.duration && tz(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = tN.current;
            return () => {
                let t = (0, y.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(y.Wb, t1);
            };
        }, [t1]);
        let t4 = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tN.current) return;
                    let n = tN.current.currentTime;
                    (e5.current = e),
                        e1((e / (tN.current.duration ?? 1)) * 100),
                        e4(!0),
                        null != e9.current && clearTimeout(e9.current),
                        (e9.current = setTimeout(() => {
                            e4(!1), (e9.current = null);
                        }, 100)),
                        (e3.current = !0),
                        (tN.current.currentTime = e),
                        t && eu?.(n, e);
                },
                [eu],
            ),
            t9 = () => {
                if (null != tN.current)
                    switch (ez) {
                        case o.Q6.ENDED:
                            t4(0), tz(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            tL(o.KB.USER), tz(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tz(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            t7 = (e) => {
                tF(e);
            },
            t8 = (e) => {
                tF((t) => (t?.id === e.id ? null : t));
            },
            t3 = l.useCallback(() => {
                if (null == tN.current || 0 === tN.current.textTracks.length) return;
                let e = tN.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, P.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => t7(n)), (n.onexit = () => t8(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == tA.current) return;
            let e = tA.current;
            return (
                e.addEventListener("load", t3),
                () => {
                    null != e && e.removeEventListener("load", t3);
                }
            );
        }, [t3]);
        let t5 = (e) => {
                if (null != tN.current) {
                    if (e7 === o.h$.BUFFERING) {
                        let e = null != tm.current ? performance.now() - tm.current : null;
                        el?.(e);
                    } else if (e7 === o.h$.LOADING) {
                        let e = null != td.current ? performance.now() - td.current : null;
                        et?.(e);
                    }
                    e8(o.h$.READY), ez === o.Q6.PLAYING && (tl.current || tz(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            ne = (e) => {
                if ((t4(e), ez === o.Q6.ENDED && !ta.current)) {
                    let t = tN.current?.duration;
                    (null == t || Number.isNaN(t) || e < t) && tz(o.Q6.PLAYING, o.KB.USER);
                }
            },
            [{ controlBarAnimSpring: nt }, nn] = (0, m.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: F,
                onStart: () => {
                    to(!1);
                },
                onRest: () => {
                    to(!0);
                },
            })),
            nr = (0, l.useRef)(null),
            [{ captionHeightSpring: nl }, na] = (0, m.z)(() => ({ from: { captionHeightSpring: 0 }, config: F }));
        l.useEffect(
            () => (
                na({ captionHeightSpring: tb && null != tB ? (nr.current?.clientHeight ?? 0) : 0, immediate: tC }),
                () => {
                    nl.stop();
                }
            ),
            [tb, na, tC, tB, nl],
        ),
            l.useEffect(
                () => (
                    nn({ controlBarAnimSpring: tq || tn ? 1 : 0, immediate: tC }),
                    () => {
                        nt.stop();
                    }
                ),
                [tq, nn, tC, tn, nt],
            );
        let ni = ez === o.Q6.ENDED && null != X,
            nu = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != tN.current && (t4(0), tz(o.Q6.PLAYING, e));
                },
                [t4, tz],
            ),
            ns = l.useRef(null),
            no = l.useCallback(
                (e) => {
                    tJ(), ns.current?.(e.nativeEvent);
                },
                [tJ],
            );
        return (0, r.jsx)(p.D, {
            className: B.W6,
            "data-fullscreen": ty,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eH(!0), tV(!1), (tW.current = performance.now()), null != tH.current && clearTimeout(tH.current);
            },
            onMouseLeave: () => {
                eH(!1), tV(!1);
            },
            onMouseMove: tJ,
            children: (0, r.jsxs)("div", {
                className: i()(B.NS, { [B.DO]: "portrait" === c, [B.r7]: "landscape" === c }),
                tabIndex: -1,
                onKeyDown: no,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    eD && !tC && (0, r.jsx)("canvas", { ref: tR, className: B.Xm }),
                    ni && X?.({ replay: nu }),
                    (0, r.jsxs)(g.A, {
                        ref: (e) => {
                            (tN.current = e),
                                (eY.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: a,
                        playsInline: !0,
                        mediaLayoutType: ty ? M.dG.STATIC : M.dG.RESPONSIVE,
                        className: i()({ [B.R]: ni, [B.IR]: !0, [B.FP]: "cover" === eM && !ty }),
                        controls: !1,
                        poster: $,
                        preload: ep,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != tN.current &&
                                (G?.(tN.current.currentTime, tN.current.duration),
                                e3.current || e6((tN.current.currentTime / tN.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            e8(o.h$.READY), K?.(), ta.current || tz(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                        },
                        onLoadedData: (e) => {
                            if (e7 === o.h$.LOADING) {
                                let e = null != td.current ? performance.now() - td.current : null;
                                et?.(e), e8(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tN.current) return;
                            O > 0 && !tj && t4(O, !1), th ? (tN.current.volume = 0) : (tN.current.volume = tp);
                            let t = tN.current.duration;
                            t > 0 && isFinite(t) && t$(t), tG(!0);
                        },
                        onLoadStart: () => {
                            (td.current = performance.now()), ee?.();
                        },
                        onPlaying: () => {
                            tc.current && (en?.(performance.now()), (tc.current = !1));
                        },
                        onWaiting: (e) => {
                            (tm.current = performance.now()), er?.(), e8(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == tN.current) return;
                            let t = [];
                            for (let e = 0; e < tN.current.buffered.length; e++) {
                                let n = tN.current.buffered.start(e),
                                    r = tN.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / tN.current.duration, size: (r - n) / tN.current.duration });
                            }
                            tt(t);
                        },
                        onCanPlay: t5,
                        onCanPlayThrough: t5,
                        onSeeked: () => {
                            (e3.current = !1),
                                (e5.current = null),
                                null != tN.current && e6((tN.current.currentTime / tN.current.duration) * 100);
                        },
                        onAbort: () => tk(o.SB.ABORT),
                        onError: () => tk(o.SB.ERROR),
                        onEmptied: () => tk(o.SB.EMPTIED),
                        onStalled: () => tk(o.SB.STALLED),
                        onClick: (e) => {
                            null != em ? em(e) : t9();
                        },
                        crossOrigin: ej ?? void 0,
                        children: [
                            null != Y &&
                                (0, r.jsx)("track", {
                                    ref: tA,
                                    src: Y,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            null != eL && (0, r.jsx)("track", { ref: e$, src: eL, kind: "metadata" }),
                            !tj &&
                                !tI &&
                                (0, r.jsx)("source", {
                                    onError: () => tk(o.SB.SOURCE_ERROR),
                                    src: eF,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    e7 !== o.h$.READY &&
                        ez === o.Q6.PLAYING &&
                        null != eF &&
                        (0, r.jsx)("span", {
                            className: i()(B.S, { [B.F]: "center" === ek }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(f.y, { type: f.y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(T.A, {
                        message: eU({ hasVideoAsset: null != eF, playerState: ez, pauseReason: tP }),
                        showOverlay: null == eF,
                    }),
                    null != es &&
                        (0, r.jsx)(u.animated.div, {
                            className: B.MU,
                            style: {
                                opacity: (0, u.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, u.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, u.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: es(),
                        }),
                    tv &&
                        ez !== o.Q6.ENDED &&
                        null != z &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(p.D, {
                                    onClick: () => {
                                        ez === o.Q6.PAUSED && tz(o.Q6.PLAYING, o.KB.USER), tE(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: B.BG }),
                                }),
                                (0, r.jsx)(u.animated.div, {
                                    className: i()(B.xr, ec, { [B.MZ]: "portrait" === c }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, u.to)([nt, nl], (e, t) => `${e * tY[t_] + t}px`) },
                                    children: (0, r.jsx)(w.X, {
                                        text: z,
                                        onClose: () => {
                                            tE(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(u.animated.div, {
                        className: B.Jp,
                        style: { opacity: (0, u.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(B.yf, {
                                [B.ZH]: tu.current && ez === o.Q6.PLAYING,
                                [B.v7]: tu.current && ez === o.Q6.PAUSED,
                            }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ez === o.Q6.PLAYING
                                    ? (0, r.jsx)(h.u, { className: B.PK })
                                    : (0, r.jsx)(x.E, { className: B.PK }),
                        },
                        ez,
                    ),
                    tb &&
                        null != tB &&
                        !ni &&
                        (0, r.jsx)(u.animated.div, {
                            className: B.o$,
                            ref: nr,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, u.to)(
                                    [nt.to({ range: [0, 1], output: [-20, -tY[t_]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(v.E, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: B.qh,
                                children: tB.text,
                            }),
                        }),
                    (0, r.jsxs)(u.animated.div, {
                        className: B.r8,
                        style: { height: (0, u.to)([nt.to({ range: [0, 1], output: [0, tY[t_]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(u.animated.div, {
                                style: {
                                    transform: (0, u.to)(
                                        [nt.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: tq || tn || eN ? void 0 : U,
                                    children: (0, r.jsx)(A.Ay, {
                                        percent: null != e0 ? e0 : eJ,
                                        animate:
                                            !0 !== tw.current && !e2 && ez === o.Q6.PLAYING && tO && e7 === o.h$.READY,
                                        interactionEnabled: ts && tK > 0,
                                        backgroundColor: tq || eN ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: ez,
                                        preloadedBuffers: tq ? te : void 0,
                                        durationSec: tU > 0 ? tU : +!tO,
                                        isFullyVisible: tq && ts,
                                        maxSeekableTime: null != Q && tK > 0 ? tK : void 0,
                                        progressClassName: eS,
                                        persistPlayhead: eR,
                                        onClick: ne,
                                        onScrubBack: t6,
                                        onScrubForward: t2,
                                        onDragStateChange: (e) => {
                                            if (((ta.current = e), tr(e), e))
                                                (tl.current = ez === o.Q6.PLAYING),
                                                    (ti.current = ez === o.Q6.ENDED),
                                                    tl.current
                                                        ? tN.current?.pause()
                                                        : ti.current && tz(o.Q6.PAUSED, o.KB.SEEK);
                                            else {
                                                let e = tN.current,
                                                    t =
                                                        null != e &&
                                                        !Number.isNaN(e.duration) &&
                                                        e.currentTime >= e.duration;
                                                tl.current
                                                    ? ((tl.current = !1),
                                                      t ? tz(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE) : e?.play())
                                                    : ti.current
                                                      ? ((ti.current = !1),
                                                        t
                                                            ? tz(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE)
                                                            : tz(o.Q6.PLAYING, o.KB.USER))
                                                      : t && tz(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                                            }
                                        },
                                        indicatorConfig: eP,
                                        scrubPreviewCues: eO,
                                        onIndicatorSeek: ne,
                                        getCurrentTimeSec: tT,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: B.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, u.to)(
                                        [nt.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 20}px`,
                                    ),
                                    paddingBottom: (0, u.to)(
                                        [nt.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, u.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => eZ(!0),
                                onBlur: () => eZ(!1),
                                children: (0, r.jsx)(N.A, {
                                    videoRef: tN,
                                    playerState: ez,
                                    animSpring: nt,
                                    visible: tq,
                                    seekForwardEnabled: null == Q || (tN.current?.currentTime ?? 0) + 1 < tK,
                                    hideCaptionBtn: null == Y,
                                    hideTranscriptBtn: null == z,
                                    hideFullScreenBtn: ev,
                                    hidePlaybackSpeedBtn: eg,
                                    hideSkipButtons: eE ?? "portrait" === c,
                                    compactTimeDisplay: eb,
                                    size: t_,
                                    downloadUrl: ef,
                                    downloadContentType: eh,
                                    extraButtons: ex,
                                    autoFocus: eA,
                                    keyDownHandlerRef: ns,
                                    volume: tp,
                                    muted: th,
                                    transcriptEnabled: tv,
                                    captionEnabled: tb,
                                    fullScreenEnabled: ty,
                                    handlePlaybackBtnClick: t9,
                                    handleTranscriptBtnClick: () => {
                                        tE(!tv);
                                    },
                                    handleCaptionBtnClick: () => {
                                        tg(!tb);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !ty,
                                            t = (0, y.qf)(tN.current?.parentNode, tN.current);
                                        e && null != t
                                            ? ((0, y.tl)(t), t.addEventListener(y.Wb, t1), H?.(!0), tQ(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(y.Wb, t1), H?.(!1), (0, y.sP)(t), tQ(o.oA.MD)),
                                            tS(e);
                                    },
                                    handleSeekBackBtnClick: t6,
                                    handleSeekForwardBtnClick: t2,
                                    autoHideVolumeSlider: ew,
                                    handleControlBarPendingInteraction: tr,
                                    onVolumeChange: (e) => {
                                        tf(e), W?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        tx(e), Z?.(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                    null != eo &&
                        (0, r.jsx)("div", {
                            className: B.MU,
                            children: eo({ playerState: ez, isControlBarExpanded: tq, videoRef: tN, isActive: !0 }),
                        }),
                ],
            }),
        });
    });
function O(e) {
    let { poster: t, posterPlaceholder: n, posterPlaceholderVersion: a, orientation: i, objectFit: u = "contain" } = e,
        [s, o] = l.useState(!1),
        d = l.useCallback(() => o(!0), []);
    return null == t
        ? null
        : (0, r.jsx)(c.y, {
              readyState: s ? D.Rv1.READY : D.Rv1.LOADING,
              aspectRatio: "portrait" === i ? 9 / 16 : 16 / 9,
              placeholder: n,
              placeholderVersion: a ?? 1,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              disableSpinner: !0,
              children: (0, r.jsx)("img", { src: t, className: B.zH, style: { objectFit: u }, alt: "", onLoad: d }),
          });
}
let G = l.forwardRef(function (e, t) {
    let { active: n = !0, onClick: a, ...u } = e,
        {
            autoplay: s,
            poster: c,
            orientation: d = "landscape",
            posterPlaceholder: m,
            posterPlaceholderVersion: f,
            renderOverlay: x,
            renderPersistentOverlay: v,
            objectFit: E,
        } = u,
        [b, g] = l.useState(!1),
        y = n || b,
        S = l.useCallback(
            (e) => {
                null != a ? a(e) : g(!0);
            },
            [a],
        ),
        C = l.useRef(null);
    return y
        ? (0, r.jsx)($, { ...u, onClick: a, autoplay: s || b, ref: t })
        : (0, r.jsx)(p.D, {
              className: i()(B.W6, B.nZ),
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: S,
              "aria-label": I.intl.string(I.t.RscU7I),
              focusProps: { ringTarget: C },
              children: (0, r.jsxs)("div", {
                  className: i()(B.NS, { [B.DO]: "portrait" === d, [B.r7]: "landscape" === d }),
                  children: [
                      (0, r.jsx)(O, {
                          poster: c,
                          posterPlaceholder: m,
                          posterPlaceholderVersion: f,
                          orientation: d,
                          objectFit: E,
                      }),
                      null != x && (0, r.jsx)("div", { className: B.MU, children: x() }),
                      null != v &&
                          (0, r.jsx)("div", {
                              className: B.MU,
                              children: v({ playerState: o.Q6.PAUSED, isControlBarExpanded: !0, isActive: !1 }),
                          }),
                      (0, r.jsx)("div", {
                          className: B.mF,
                          ref: C,
                          children: (0, r.jsx)(h.u, { size: "xs", color: "currentColor", className: B.z_ }),
                      }),
                  ],
              }),
          });
});
