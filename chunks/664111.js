n.r(t), n.d(t, { default: () => F }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(922139),
    u = n(17928),
    o = n(876230),
    c = n(231723),
    d = n(717421),
    m = n(939249),
    h = n(289873),
    f = n(782134),
    p = n(113494),
    v = n(834730),
    g = n(964486),
    x = n(775602),
    E = n(607470),
    b = n(475815),
    S = n(718499),
    C = n(23590),
    w = n(671897),
    y = n(565164),
    A = n(275664),
    N = n(408121),
    R = n(984212),
    T = n(739416),
    L = n(931853),
    M = n(90721),
    P = n(920228),
    j = n(838541),
    k = n(375708),
    D = n(834926);
let I = { tension: 250, friction: 5, clamp: !0 },
    B = { visibility: "hidden" },
    F = l.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: F = "landscape",
                videoUrlOverride: _,
                alt: U,
                src: O,
                poster: K,
                initialActive: Q = !0,
                initialTimeSec: $ = 0,
                onProgressUpdate: G,
                onEnded: V,
                onError: H,
                maxSeekableTimeSec: Y,
                captionTrackUrl: Z,
                transcriptText: z,
                renderEndScreen: X,
                onPlayerStateChange: W,
                onFullscreenChange: q,
                onVolumeChange: J,
                onMutedChange: ee,
                initialVolume: et = 0.3,
                initialMuted: en = !1,
                getInitialVolume: er,
                getInitialMuted: el,
                onLoadStart: ea,
                onLoadEnd: ei,
                onFirstFrame: es,
                onBufferingStart: eu,
                onBufferingEnd: eo,
                onFocusChange: ec,
                onVisibilityChange: ed,
                onSeek: em,
                renderOverlay: eh,
                renderPersistentOverlay: ef,
                transcriptClassName: ep,
                onHlsInstance: ev,
                onClick: eg,
                preload: ex,
                downloadUrl: eE,
                downloadContentType: eb,
                extraButtons: eS,
                hideFullScreenBtn: eC = !1,
                hideSkipButtons: ew,
                compactTimeDisplay: ey = !1,
                hidePlaybackSpeedBtn: eA = !1,
                getPlaybackBlockedMessage: eN,
                progressClassName: eR,
                pauseOnLostVisibility: eT = !1,
                persistTimeline: eL = !1,
                persistPlayhead: eM = !0,
                autoFocus: eP = !1,
                autoHideVolumeSlider: ej = !1,
                timelineIndicatorConfig: ek,
                scrubPreviewVttUrl: eD,
                scrubPreviewImageUrl: eI,
                loadingSpinnerPosition: eB = "top-left",
                crossOrigin: eF = "anonymous",
                withVideoHalo: e_ = !1,
                objectFit: eU = "contain",
                muxContentMetadata: eO,
                awaitMuxReady: eK = !1,
            } = e,
            eQ = _ ?? O,
            e$ = eN ?? L.u,
            { focused: eG, focusedChanged: eV } = (0, T.A7)(),
            { visible: eH, visibleChanged: eY, targetRef: eZ } = (0, T.O7)(),
            [ez, eX] = l.useState(a ? o.Q6.PLAYING : o.Q6.PAUSED),
            [eW, eq] = l.useState(!1),
            [eJ, e0] = l.useState(!1),
            [e1, e2] = l.useState(0),
            [e6, e4] = l.useState(null),
            e3 = l.useCallback((e) => {
                e4(null), e2(e);
            }, []),
            e9 = l.useRef(null),
            [e8, e7] = l.useState(!1),
            e5 = l.useRef(null),
            [te, tt] = l.useState(o.h$.LOADING),
            tn = l.useRef(!1),
            tr = l.useRef(null),
            [tl, ta] = l.useState([]),
            [ti, ts] = l.useState(!1),
            tu = l.useRef(!1),
            to = l.useRef(!1),
            tc = l.useRef(!1),
            td = l.useRef(!1),
            [tm, th] = l.useState(!0),
            tf = l.useRef(!0),
            tp = l.useRef(null),
            tv = l.useRef(null),
            [tg, tx] = l.useState(a || Q),
            [tE, tb] = l.useState(et),
            [tS, tC] = l.useState(en),
            [tw, ty] = l.useState(!ej),
            [tA, tN] = l.useState(!1),
            [tR, tT] = l.useState(!1),
            [tL, tM] = l.useState(!1),
            tP = (0, u.bG)([x.Ay], () => x.Ay.useReducedMotion),
            tj = (0, l.useRef)(null),
            tk = (0, l.useRef)(null),
            tD = (0, l.useRef)(null),
            tI = l.useRef(!0),
            [tB, tF] = l.useState(null),
            t_ = l.useRef(null),
            tU = (0, y.z5)(tg, t_, eD, eI),
            tO = l.useCallback(() => tj.current?.currentTime ?? null, []);
        (0, M.A)({ videoRef: tj, canvasRef: tk, enabled: tg && e_ && !tP, canvasWidth: 32, canvasHeight: 18 });
        let tK = l.useCallback(
                (e, t) => {
                    H?.(e, t);
                },
                [H],
            ),
            { isHlsActive: tQ, hlsRef: t$ } = (0, S.Ay)(tj, {
                src: eQ,
                initialTimeSec: $,
                onError: tK,
                onHlsInstance: ev,
                crossOrigin: eF,
            }),
            { isReady: tG } = (0, C.A)({ videoRef: tj, hlsRef: t$, contentMetadata: eO, isHls: tQ }),
            tV = eK && !tG && !tQ,
            [tH, tY] = l.useState(null),
            [tZ, tz] = l.useState(0),
            [tX, tW] = l.useState(!1),
            tq = Y ?? tj.current?.duration ?? 0,
            [tJ, t0] = l.useState(o.oA.MD),
            t1 = { [o.oA.MD]: 56, [o.oA.LG]: 64 };
        (0, g.u5)(() => {
            tI.current && (tI.current = !1);
        });
        let t2 = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((td.current = !0), eX(e), W?.(e, t), null != tj.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            tF(null), tj.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (tu.current = !1), tj.current.pause(), (tf.current = !1);
                            break;
                        case o.Q6.ENDED:
                            tN(!1);
                    }
            },
            [W],
        );
        l.useEffect(() => {
            if (!eT) return;
            let e = null != n && (n === c.ip.HIDDEN || n === c.ip.EXITING || n === c.ip.EXITED),
                t = null != n && eY && !eH,
                r = eV && !eG;
            if ((e || t || r) && null != tj.current && ez === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                tF(n), t2(o.Q6.PAUSED, n);
            }
        }, [eT, n, eG, eV, eH, eY, ez, t2]),
            (0, P.A)({
                videoRef: tj,
                enabled: eT,
                onPipPause: () => {
                    tF(o.KB.PICTURE_IN_PICTURE), t2(o.Q6.PAUSED, o.KB.PICTURE_IN_PICTURE);
                },
                onHiddenPause: () => {
                    tF(o.KB.FOCUS), t2(o.Q6.PAUSED, o.KB.FOCUS);
                },
            }),
            l.useEffect(() => {
                eV && ec?.(eG, ez);
            }, [eG, eV, ez, ec]),
            l.useEffect(() => {
                eY && ed?.(eH, ez);
            }, [eH, eY, ez, ed]);
        let [t6, t4] = l.useState(!1),
            t3 = l.useRef(null),
            t9 = l.useRef(0);
        l.useLayoutEffect(() => {
            t9.current = performance.now();
        }, []);
        let t8 = l.useCallback(() => {
                null != t3.current && clearTimeout(t3.current),
                    ez !== o.Q6.PLAYING ||
                        (t3.current = setTimeout(
                            () => {
                                ez === o.Q6.PLAYING && t4(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - t9.current)),
                        ));
            }, [ez]),
            t7 = l.useCallback(() => {
                t4(!1), (t9.current = performance.now()), t8();
            }, [t8]);
        l.useEffect(() => {
            if (ez !== o.Q6.PLAYING) {
                t4(!1), null != t3.current && clearTimeout(t3.current);
                return;
            }
            return (
                t8(),
                () => {
                    null != t3.current && clearTimeout(t3.current);
                }
            );
        }, [ez, t8]),
            l.useEffect(
                () => () => {
                    null != e5.current && clearTimeout(e5.current);
                },
                [],
            );
        let t5 = !t6 && (eJ || eW || ez === o.Q6.ENDED),
            ne = l.useRef(q);
        ne.current = q;
        let nt = l.useCallback(() => {
                let e = (0, b.qf)(tj.current?.parentNode, tj.current);
                null == e || (0, b._U)(e) || (e.removeEventListener(b.Wb, nt), tM(!1), ne.current?.(!1), t0(o.oA.MD));
            }, []),
            nn = () => {
                null == tj.current ||
                    (nl(Math.max((tr.current ?? tj.current.currentTime) - 10, 0)),
                    ez === o.Q6.ENDED && t2(o.Q6.PAUSED, o.KB.SEEK));
            },
            nr = () => {
                if (null == tj.current) return;
                let e = Math.min((tr.current ?? tj.current.currentTime) + 10, tq);
                nl(e), ez !== o.Q6.ENDED && e >= tj.current.duration && t2(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = tj.current;
            return () => {
                let t = (0, b.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(b.Wb, nt);
            };
        }, [nt]);
        let nl = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tj.current) return;
                    let n = tj.current.currentTime;
                    (tr.current = e),
                        e4((e / (tj.current.duration ?? 1)) * 100),
                        e7(!0),
                        null != e5.current && clearTimeout(e5.current),
                        (e5.current = setTimeout(() => {
                            e7(!1), (e5.current = null);
                        }, 100)),
                        (tn.current = !0),
                        (tj.current.currentTime = e),
                        t && em?.(n, e);
                },
                [em],
            ),
            na = () => {
                if (null != tj.current)
                    switch (ez) {
                        case o.Q6.ENDED:
                            nl(0), t2(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            tF(o.KB.USER), t2(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            t2(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            ni = (e) => {
                null != eg ? eg(e) : (tx(!0), na());
            },
            ns = (e) => {
                tY(e);
            },
            nu = (e) => {
                tY((t) => (t?.id === e.id ? null : t));
            },
            no = l.useCallback(() => {
                if (null == tj.current || 0 === tj.current.textTracks.length) return;
                let e = tj.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, R.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => ns(n)), (n.onexit = () => nu(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == tD.current) return;
            let e = tD.current;
            return (
                e.addEventListener("load", no),
                () => {
                    null != e && e.removeEventListener("load", no);
                }
            );
        }, [no]);
        let nc = (e) => {
                if (null != tj.current) {
                    if (te === o.h$.BUFFERING) {
                        let e = null != tv.current ? performance.now() - tv.current : null;
                        eo?.(e);
                    } else if (te === o.h$.LOADING) {
                        let e = null != tp.current ? performance.now() - tp.current : null;
                        ei?.(e);
                    }
                    tt(o.h$.READY), ez === o.Q6.PLAYING && (tu.current || t2(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            nd = (e) => {
                if ((nl(e), ez === o.Q6.ENDED && !to.current)) {
                    let t = tj.current?.duration;
                    (null == t || Number.isNaN(t) || e < t) && t2(o.Q6.PLAYING, o.KB.USER);
                }
            },
            [{ controlBarAnimSpring: nm }, nh] = (0, d.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: I,
                onStart: () => {
                    th(!1);
                },
                onRest: () => {
                    th(!0);
                },
            })),
            nf = (0, l.useRef)(null),
            [{ captionHeightSpring: np }, nv] = (0, d.z)(() => ({ from: { captionHeightSpring: 0 }, config: I }));
        l.useEffect(
            () => (
                nv({ captionHeightSpring: tR && null != tH ? (nf.current?.clientHeight ?? 0) : 0, immediate: tP }),
                () => {
                    np.stop();
                }
            ),
            [tR, nv, tP, tH, np],
        ),
            l.useEffect(
                () => (
                    nh({ controlBarAnimSpring: t5 || ti ? 1 : 0, immediate: tP }),
                    () => {
                        nm.stop();
                    }
                ),
                [t5, nh, tP, ti, nm],
            );
        let ng = ez === o.Q6.ENDED && null != X,
            nx = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != tj.current && (nl(0), t2(o.Q6.PLAYING, e));
                },
                [nl, t2],
            ),
            nE = l.useRef(null),
            nb = l.useCallback(
                (e) => {
                    t7(), nE.current?.(e.nativeEvent);
                },
                [t7],
            );
        return (0, r.jsx)(m.D, {
            className: i()(D.W6, { [D.nZ]: !tg }),
            "data-fullscreen": tL,
            "data-testid": "discord-web-video-player-container",
            tabIndex: tg ? -1 : 0,
            focusProps: tg ? void 0 : { ringTarget: e9 },
            onMouseEnter: () => {
                eq(!0), t4(!1), (t9.current = performance.now()), null != t3.current && clearTimeout(t3.current);
            },
            onMouseLeave: () => {
                eq(!1), t4(!1);
            },
            "aria-label": tg ? void 0 : k.intl.string(k.t.RscU7I),
            onClick: tg ? void 0 : ni,
            onMouseMove: t7,
            children: (0, r.jsxs)("div", {
                className: i()(D.NS, { [D.DO]: "portrait" === F, [D.r7]: "landscape" === F }),
                tabIndex: -1,
                onKeyDown: nb,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    e_ && !tP && (0, r.jsx)("canvas", { ref: tk, className: D.Xm }),
                    ng && X?.({ replay: nx }),
                    (0, r.jsxs)(E.A, {
                        ref: (e) => {
                            (tj.current = e),
                                (eZ.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: a,
                        alt: U,
                        playsInline: !0,
                        mediaLayoutType: tL ? j.dG.STATIC : j.dG.RESPONSIVE,
                        className: i()({ [D.R]: ng, [D.IR]: !0, [D.FP]: "cover" === eU && !tL }),
                        controls: !1,
                        poster: K,
                        preload: tg ? ex : "none",
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != tj.current &&
                                (G?.(tj.current.currentTime, tj.current.duration),
                                tn.current || e3((tj.current.currentTime / tj.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            tt(o.h$.READY), V?.(), to.current || t2(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                        },
                        onLoadedData: (e) => {
                            if (te === o.h$.LOADING) {
                                let e = null != tp.current ? performance.now() - tp.current : null;
                                ei?.(e), tt(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tj.current) return;
                            $ > 0 && !tQ && nl($, !1);
                            let t = er?.() ?? tE,
                                n = el?.() ?? tS;
                            t !== tE && tb(t), n !== tS && tC(n), (tj.current.volume = n ? 0 : t);
                            let r = tj.current.duration;
                            r > 0 && isFinite(r) && tz(r), tW(!0);
                        },
                        onLoadStart: () => {
                            (tp.current = performance.now()), ea?.();
                        },
                        onPlaying: () => {
                            tf.current && (es?.(performance.now()), (tf.current = !1));
                        },
                        onWaiting: (e) => {
                            (tv.current = performance.now()), eu?.(), tt(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == tj.current) return;
                            let t = [];
                            for (let e = 0; e < tj.current.buffered.length; e++) {
                                let n = tj.current.buffered.start(e),
                                    r = tj.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / tj.current.duration, size: (r - n) / tj.current.duration });
                            }
                            ta(t);
                        },
                        onCanPlay: nc,
                        onCanPlayThrough: nc,
                        onSeeked: () => {
                            (tn.current = !1),
                                (tr.current = null),
                                null != tj.current && e3((tj.current.currentTime / tj.current.duration) * 100);
                        },
                        onAbort: () => tK(o.SB.ABORT),
                        onError: () => tK(o.SB.ERROR),
                        onEmptied: () => tK(o.SB.EMPTIED),
                        onStalled: () => tK(o.SB.STALLED),
                        onClick: ni,
                        crossOrigin: eF ?? void 0,
                        children: [
                            null != Z &&
                                (0, r.jsx)("track", {
                                    ref: tD,
                                    src: Z,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            null != eD && (0, r.jsx)("track", { ref: t_, src: eD, kind: "metadata" }),
                            !tQ && !tV && (0, r.jsx)("source", { onError: () => tK(o.SB.SOURCE_ERROR), src: eQ }),
                        ],
                    }),
                    te !== o.h$.READY &&
                        ez === o.Q6.PLAYING &&
                        null != eQ &&
                        (0, r.jsx)("span", {
                            className: i()(D.S, { [D.F]: "center" === eB }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(L.A, {
                        message: e$({ hasVideoAsset: null != eQ, playerState: ez, pauseReason: tB }),
                        showOverlay: null == eQ,
                    }),
                    null != eh &&
                        (0, r.jsx)(s.animated.div, {
                            className: D.MU,
                            style: {
                                opacity: (0, s.to)([nm.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, s.to)([nm.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, s.to)([nm.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: eh(),
                        }),
                    tA &&
                        ez !== o.Q6.ENDED &&
                        null != z &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.D, {
                                    onClick: () => {
                                        ez === o.Q6.PAUSED && t2(o.Q6.PLAYING, o.KB.USER), tN(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: D.BG }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: i()(D.xr, ep, { [D.MZ]: "portrait" === F }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, s.to)([nm, np], (e, t) => `${e * t1[tJ] + t}px`) },
                                    children: (0, r.jsx)(N.X, {
                                        text: z,
                                        onClose: () => {
                                            tN(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    tg &&
                        (0, r.jsx)(s.animated.div, {
                            className: D.Jp,
                            style: { opacity: (0, s.to)([nm.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                        }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(D.yf, {
                                [D.ZH]: td.current && ez === o.Q6.PLAYING,
                                [D.v7]: td.current && ez === o.Q6.PAUSED,
                            }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ez === o.Q6.PLAYING
                                    ? (0, r.jsx)(f.u, { className: D.PK })
                                    : (0, r.jsx)(p.E, { className: D.PK }),
                        },
                        ez,
                    ),
                    tR &&
                        null != tH &&
                        !ng &&
                        (0, r.jsx)(s.animated.div, {
                            className: D.o$,
                            ref: nf,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, s.to)(
                                    [nm.to({ range: [0, 1], output: [-20, -t1[tJ]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(v.E, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: D.qh,
                                children: tH.text,
                            }),
                        }),
                    tg &&
                        (0, r.jsxs)(s.animated.div, {
                            className: D.r8,
                            style: {
                                height: (0, s.to)([nm.to({ range: [0, 1], output: [0, t1[tJ]] })], (e) => `${e}px`),
                            },
                            children: [
                                (0, r.jsx)(s.animated.div, {
                                    style: {
                                        transform: (0, s.to)(
                                            [nm.to({ range: [1, 0], output: [0, 1] })],
                                            (e) => `translateY(-${20 * e}px)`,
                                        ),
                                    },
                                    children: (0, r.jsx)("div", {
                                        style: t5 || ti || eL ? void 0 : B,
                                        children: (0, r.jsx)(A.Ay, {
                                            percent: null != e6 ? e6 : e1,
                                            animate:
                                                !0 !== tI.current &&
                                                !e8 &&
                                                ez === o.Q6.PLAYING &&
                                                tX &&
                                                te === o.h$.READY,
                                            interactionEnabled: tm && tq > 0,
                                            backgroundColor: t5 || eL ? void 0 : "rgba(0, 0, 0, 0.0)",
                                            playerState: ez,
                                            preloadedBuffers: t5 ? tl : void 0,
                                            durationSec: tZ > 0 ? tZ : +!tX,
                                            isFullyVisible: t5 && tm,
                                            maxSeekableTime: null != Y && tq > 0 ? tq : void 0,
                                            progressClassName: eR,
                                            persistPlayhead: eM,
                                            onClick: nd,
                                            onScrubBack: nn,
                                            onScrubForward: nr,
                                            onDragStateChange: (e) => {
                                                if (((to.current = e), ts(e), e))
                                                    (tu.current = ez === o.Q6.PLAYING),
                                                        (tc.current = ez === o.Q6.ENDED),
                                                        tu.current
                                                            ? tj.current?.pause()
                                                            : tc.current && t2(o.Q6.PAUSED, o.KB.SEEK);
                                                else {
                                                    let e = tj.current,
                                                        t =
                                                            null != e &&
                                                            !Number.isNaN(e.duration) &&
                                                            e.currentTime >= e.duration;
                                                    tu.current
                                                        ? ((tu.current = !1),
                                                          t ? t2(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE) : e?.play())
                                                        : tc.current
                                                          ? ((tc.current = !1),
                                                            t
                                                                ? t2(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE)
                                                                : t2(o.Q6.PLAYING, o.KB.USER))
                                                          : t && t2(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                                                }
                                            },
                                            indicatorConfig: ek,
                                            scrubPreviewCues: tU,
                                            onIndicatorSeek: nd,
                                            getCurrentTimeSec: tO,
                                            "data-testid": "discord-web-video-player-timeline",
                                        }),
                                    }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: D.uN,
                                    "data-testid": "discord-web-video-player-controls",
                                    style: {
                                        paddingTop: (0, s.to)(
                                            [nm.to({ range: [0, 1], output: [0, 1] })],
                                            (e) => `${e * e * 20}px`,
                                        ),
                                        paddingBottom: (0, s.to)(
                                            [nm.to({ range: [0, 1], output: [0, 1] })],
                                            (e) => `${e * e * 12}px`,
                                        ),
                                        pointerEvents: (0, s.to)([nm.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    onFocus: () => e0(!0),
                                    onBlur: () => e0(!1),
                                    children: (0, r.jsx)(w.A, {
                                        videoRef: tj,
                                        playerState: ez,
                                        animSpring: nm,
                                        visible: t5,
                                        seekForwardEnabled: null == Y || (tj.current?.currentTime ?? 0) + 1 < tq,
                                        hideCaptionBtn: null == Z,
                                        hideTranscriptBtn: null == z,
                                        hideFullScreenBtn: eC,
                                        hidePlaybackSpeedBtn: eA,
                                        hideSkipButtons: ew ?? "portrait" === F,
                                        compactTimeDisplay: ey,
                                        size: tJ,
                                        downloadUrl: eE,
                                        downloadContentType: eb,
                                        extraButtons: eS,
                                        autoFocus: eP,
                                        keyDownHandlerRef: nE,
                                        volume: tE,
                                        muted: tS,
                                        transcriptEnabled: tA,
                                        captionEnabled: tR,
                                        fullScreenEnabled: tL,
                                        handlePlaybackBtnClick: na,
                                        handleTranscriptBtnClick: () => {
                                            tN(!tA);
                                        },
                                        handleCaptionBtnClick: () => {
                                            tT(!tR);
                                        },
                                        handleFullScreenBtnClick: () => {
                                            let e = !tL,
                                                t = (0, b.qf)(tj.current?.parentNode, tj.current);
                                            e && null != t
                                                ? ((0, b.tl)(t), t.addEventListener(b.Wb, nt), q?.(!0), t0(o.oA.LG))
                                                : e ||
                                                  null == t ||
                                                  (t.removeEventListener(b.Wb, nt), q?.(!1), (0, b.sP)(t), t0(o.oA.MD)),
                                                tM(e);
                                        },
                                        handleSeekBackBtnClick: nn,
                                        handleSeekForwardBtnClick: nr,
                                        autoHideVolumeSlider: ej,
                                        handleControlBarPendingInteraction: ts,
                                        onVolumeChange: (e) => {
                                            tb(e), J?.(e);
                                        },
                                        onMutedChange: (e) => {
                                            tC(e), ee?.(e);
                                        },
                                        onVolumeExpandedChange: (e) => {
                                            ty(e);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    null != ef &&
                        (0, r.jsx)("div", {
                            className: D.MU,
                            children: ef({
                                playerState: ez,
                                isControlBarExpanded: t5,
                                videoRef: tj,
                                isActive: tg,
                                isVolumeExpanded: tw,
                            }),
                        }),
                    !tg &&
                        (0, r.jsx)("div", {
                            className: D.mF,
                            ref: e9,
                            children: (0, r.jsx)(f.u, { size: "xs", color: "currentColor", className: D.z_ }),
                        }),
                ],
            }),
        });
    });
