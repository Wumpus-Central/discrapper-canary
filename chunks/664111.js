n.d(t, { A: () => M }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(825638),
    u = n(311907),
    o = n(876230),
    c = n(649658),
    d = n(397927),
    m = n(964486),
    f = n(775602),
    h = n(607470),
    p = n(475815),
    E = n(662903),
    x = n(337953),
    v = n(183494),
    b = n(408121),
    g = n(984212),
    y = n(739416),
    A = n(931853),
    C = n(90721),
    S = n(652215),
    N = n(838541),
    R = n(985018),
    L = n(834926);
let w = { tension: 250, friction: 5, clamp: !0 },
    T = { visibility: "hidden" },
    P = l.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: c = "landscape",
                videoUrlOverride: S,
                src: R,
                poster: P,
                initialTimeSec: D = 0,
                onProgressUpdate: M,
                onEnded: j,
                onError: k,
                maxSeekableTimeSec: I,
                captionTrackUrl: B,
                transcriptText: U,
                renderEndScreen: F,
                onPlayerStateChange: G,
                onFullscreenChange: Q,
                onVolumeChange: O,
                onMutedChange: $,
                initialVolume: _ = 0.3,
                initialMuted: K = !1,
                onLoadStart: Y,
                onLoadEnd: X,
                onFirstFrame: z,
                onBufferingStart: V,
                onBufferingEnd: W,
                onFocusChange: H,
                onVisibilityChange: Z,
                onSeek: J,
                renderOverlay: q,
                renderPersistentOverlay: ee,
                transcriptClassName: et,
                onHlsInstance: en,
                onClick: er,
                preload: el,
                downloadUrl: ea,
                downloadContentType: ei,
                getPlaybackBlockedMessage: es,
                progressClassName: eu,
                pauseOnLostVisibility: eo = !1,
                persistTimeline: ec = !1,
                persistPlayhead: ed = !0,
                autoFocus: em = !1,
                autoHideVolumeSlider: ef = !1,
                timelineIndicatorConfig: eh,
                loadingSpinnerPosition: ep = "top-left",
                crossOrigin: eE = "anonymous",
                withVideoHalo: ex = !1,
                objectFit: ev = "contain",
            } = e,
            eb = S ?? R,
            eg = es ?? A.u,
            { focused: ey, focusedChanged: eA } = (0, y.A7)(),
            { visible: eC, visibleChanged: eS, targetRef: eN } = (0, y.O7)(),
            [eR, eL] = l.useState(a ? o.Q6.PLAYING : o.Q6.PAUSED),
            [ew, eT] = l.useState(!1),
            [eP, eD] = l.useState(!1),
            [eM, ej] = l.useState(0),
            [ek, eI] = l.useState(null),
            eB = l.useCallback((e) => {
                eI(null), ej(e);
            }, []),
            [eU, eF] = l.useState(!1),
            eG = l.useRef(null),
            [eQ, eO] = l.useState(o.h$.LOADING),
            e$ = l.useRef(!1),
            e_ = l.useRef(null),
            [eK, eY] = l.useState([]),
            [eX, ez] = l.useState(!1),
            eV = l.useRef(!1),
            eW = l.useRef(!1),
            eH = l.useRef(!1),
            eZ = l.useRef(!1),
            [eJ, eq] = l.useState(!0),
            e0 = l.useRef(!0),
            e1 = l.useRef(null),
            e6 = l.useRef(null),
            [e2, e9] = l.useState(_),
            [e4, e8] = l.useState(K),
            [e7, e3] = l.useState(!1),
            [e5, te] = l.useState(!1),
            [tt, tn] = l.useState(!1),
            tr = (0, u.bG)([f.A], () => f.A.useReducedMotion),
            tl = (0, l.useRef)(null),
            ta = (0, l.useRef)(null),
            ti = (0, l.useRef)(null),
            ts = l.useRef(!0),
            [tu, to] = l.useState(null),
            tc = l.useCallback(() => tl.current?.currentTime ?? null, []);
        (0, C.A)({ videoRef: tl, canvasRef: ta, enabled: ex && !tr, canvasWidth: 32, canvasHeight: 18 });
        let td = l.useCallback(
                (e, t) => {
                    k?.(e, t);
                },
                [k],
            ),
            { isHlsActive: tm } = (0, E.Ay)(tl, { src: eb, initialTimeSec: D, onError: td, onHlsInstance: en }),
            [tf, th] = l.useState(null),
            [tp, tE] = l.useState(0),
            [tx, tv] = l.useState(!1),
            tb = I ?? tl.current?.duration ?? 0,
            [tg, ty] = l.useState(o.oA.MD),
            tA = { [o.oA.MD]: 56, [o.oA.LG]: 64 };
        (0, m.u5)(() => {
            ts.current && (ts.current = !1);
        });
        let tC = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((eZ.current = !0), eL(e), G?.(e, t), null != tl.current))
                    switch (e) {
                        case o.Q6.PLAYING:
                            to(null), tl.current.play();
                            break;
                        case o.Q6.PAUSED:
                            (eV.current = !1), tl.current.pause(), (e0.current = !1);
                            break;
                        case o.Q6.ENDED:
                            e3(!1);
                    }
            },
            [G],
        );
        l.useEffect(() => {
            if (!eo) return;
            let e = null != n && (n === d.ip4.HIDDEN || n === d.ip4.EXITING || n === d.ip4.EXITED),
                t = null != n && eS && !eC,
                r = eA && !ey;
            if ((e || t || r) && null != tl.current && eR === o.Q6.PLAYING) {
                let n = e || t ? o.KB.VISIBILITY : o.KB.FOCUS;
                to(n), tC(o.Q6.PAUSED, n);
            }
        }, [eo, n, ey, eA, eC, eS, eR, tC]),
            l.useEffect(() => {
                eA && H?.(ey, eR);
            }, [ey, eA, eR, H]),
            l.useEffect(() => {
                eS && Z?.(eC, eR);
            }, [eC, eS, eR, Z]);
        let [tS, tN] = l.useState(!1),
            tR = l.useRef(null),
            tL = l.useRef(0);
        l.useLayoutEffect(() => {
            tL.current = performance.now();
        }, []);
        let tw = l.useCallback(() => {
                null != tR.current && clearTimeout(tR.current),
                    eR !== o.Q6.PLAYING ||
                        (tR.current = setTimeout(
                            () => {
                                eR === o.Q6.PLAYING && tN(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - tL.current)),
                        ));
            }, [eR]),
            tT = l.useCallback(() => {
                tN(!1), (tL.current = performance.now()), tw();
            }, [tw]);
        l.useEffect(() => {
            if (eR !== o.Q6.PLAYING) {
                tN(!1), null != tR.current && clearTimeout(tR.current);
                return;
            }
            return (
                tw(),
                () => {
                    null != tR.current && clearTimeout(tR.current);
                }
            );
        }, [eR, tw]),
            l.useEffect(
                () => () => {
                    null != eG.current && clearTimeout(eG.current);
                },
                [],
            );
        let tP = !tS && (eP || ew || eR === o.Q6.ENDED),
            tD = l.useRef(Q);
        tD.current = Q;
        let tM = l.useCallback(() => {
                let e = (0, p.qf)(tl.current?.parentNode, tl.current);
                null == e || (0, p._U)(e) || (e.removeEventListener(p.Wb, tM), tn(!1), tD.current?.(!1), ty(o.oA.MD));
            }, []),
            tj = () => {
                null == tl.current ||
                    (tI(Math.max((e_.current ?? tl.current.currentTime) - 10, 0)),
                    eR === o.Q6.ENDED && tC(o.Q6.PAUSED, o.KB.SEEK));
            },
            tk = () => {
                if (null == tl.current) return;
                let e = Math.min((e_.current ?? tl.current.currentTime) + 10, tb);
                tI(e), eR !== o.Q6.ENDED && e >= tl.current.duration && tC(o.Q6.ENDED, o.KB.SEEK);
            };
        l.useEffect(() => {
            let e = tl.current;
            return () => {
                let t = (0, p.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(p.Wb, tM);
            };
        }, [tM]);
        let tI = l.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (null == tl.current) return;
                    let n = tl.current.currentTime;
                    (e_.current = e),
                        eI((e / (tl.current.duration ?? 1)) * 100),
                        eF(!0),
                        null != eG.current && clearTimeout(eG.current),
                        (eG.current = setTimeout(() => {
                            eF(!1), (eG.current = null);
                        }, 100)),
                        (e$.current = !0),
                        (tl.current.currentTime = e),
                        t && J?.(n, e);
                },
                [J],
            ),
            tB = () => {
                if (null != tl.current)
                    switch (eR) {
                        case o.Q6.ENDED:
                            tI(0), tC(o.Q6.PLAYING, o.KB.USER);
                            break;
                        case o.Q6.PLAYING:
                            to(o.KB.USER), tC(o.Q6.PAUSED, o.KB.USER);
                            break;
                        default:
                            tC(o.Q6.PLAYING, o.KB.USER);
                    }
            },
            tU = (e) => {
                th(e);
            },
            tF = (e) => {
                th((t) => (t?.id === e.id ? null : t));
            },
            tG = l.useCallback(() => {
                if (null == tl.current || 0 === tl.current.textTracks.length) return;
                let e = tl.current.textTracks[0];
                if (((e.mode = "hidden"), null != e.cues))
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, g.C)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tU(n)), (n.onexit = () => tF(n)));
                    }
            }, []);
        l.useEffect(() => {
            if (null == ti.current) return;
            let e = ti.current;
            return (
                e.addEventListener("load", tG),
                () => {
                    null != e && e.removeEventListener("load", tG);
                }
            );
        }, [tG]);
        let tQ = (e) => {
                if (null != tl.current) {
                    if (eQ === o.h$.BUFFERING) {
                        let e = null != e6.current ? performance.now() - e6.current : null;
                        W?.(e);
                    } else if (eQ === o.h$.LOADING) {
                        let e = null != e1.current ? performance.now() - e1.current : null;
                        X?.(e);
                    }
                    eO(o.h$.READY), eR === o.Q6.PLAYING && (eV.current || tC(o.Q6.PLAYING, o.KB.BUFFERING_RECOVERY));
                }
            },
            [{ controlBarAnimSpring: tO }, t$] = (0, d.zhh)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: w,
                onStart: () => {
                    eq(!1);
                },
                onRest: (e) => {
                    1 === e.value && eq(!0);
                },
            })),
            t_ = (0, l.useRef)(null),
            [{ captionHeightSpring: tK }, tY] = (0, d.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: w }));
        l.useEffect(
            () => (
                tY({ captionHeightSpring: e5 && null != tf ? (t_.current?.clientHeight ?? 0) : 0, immediate: tr }),
                () => {
                    tK.stop();
                }
            ),
            [e5, tY, tr, tf, tK],
        ),
            l.useEffect(
                () => (
                    t$({ controlBarAnimSpring: tP || eX ? 1 : 0, immediate: tr }),
                    () => {
                        tO.stop();
                    }
                ),
                [tP, t$, tr, eX, tO],
            );
        let tX = eR === o.Q6.ENDED && null != F,
            tz = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.KB.USER;
                    null != tl.current && (tI(0), tC(o.Q6.PLAYING, e));
                },
                [tI, tC],
            ),
            tV = l.useRef(null),
            tW = l.useCallback(
                (e) => {
                    tT(), tV.current?.(e.nativeEvent);
                },
                [tT],
            );
        return (0, r.jsx)(d.DUT, {
            className: L.W6,
            "data-fullscreen": tt,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                eT(!0), tN(!1), (tL.current = performance.now()), null != tR.current && clearTimeout(tR.current);
            },
            onMouseLeave: () => {
                eT(!1), tN(!1);
            },
            onMouseMove: tT,
            children: (0, r.jsxs)("div", {
                className: i()(L.NS, { [L.DO]: "portrait" === c, [L.r7]: "landscape" === c }),
                tabIndex: -1,
                onKeyDown: tW,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    ex && !tr && (0, r.jsx)("canvas", { ref: ta, className: L.Xm }),
                    tX && F?.({ replay: tz }),
                    (0, r.jsxs)(h.A, {
                        ref: (e) => {
                            (tl.current = e),
                                (eN.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: a,
                        playsInline: !0,
                        mediaLayoutType: tt ? N.dG.STATIC : N.dG.RESPONSIVE,
                        className: i()({ [L.R]: tX, [L.IR]: !0, [L.FP]: "cover" === ev && !tt }),
                        controls: !1,
                        poster: P,
                        preload: el,
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: (e) => {
                            null != tl.current &&
                                (M?.(tl.current.currentTime, tl.current.duration),
                                e$.current || eB((tl.current.currentTime / tl.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            eO(o.h$.READY), j?.(), eW.current || tC(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                        },
                        onLoadedData: (e) => {
                            if (eQ === o.h$.LOADING) {
                                let e = null != e1.current ? performance.now() - e1.current : null;
                                X?.(e), eO(o.h$.READY);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null == tl.current) return;
                            D > 0 && !tm && tI(D, !1), e4 ? (tl.current.volume = 0) : (tl.current.volume = e2);
                            let t = tl.current.duration;
                            t > 0 && isFinite(t) && tE(t), tv(!0);
                        },
                        onLoadStart: () => {
                            (e1.current = performance.now()), Y?.();
                        },
                        onPlaying: () => {
                            e0.current && (z?.(performance.now()), (e0.current = !1));
                        },
                        onWaiting: (e) => {
                            (e6.current = performance.now()), V?.(), eO(o.h$.BUFFERING);
                        },
                        onProgress: (e) => {
                            if (null == tl.current) return;
                            let t = [];
                            for (let e = 0; e < tl.current.buffered.length; e++) {
                                let n = tl.current.buffered.start(e),
                                    r = tl.current.buffered.end(e);
                                r - n < 1 ||
                                    t.push({ start: n / tl.current.duration, size: (r - n) / tl.current.duration });
                            }
                            eY(t);
                        },
                        onCanPlay: tQ,
                        onCanPlayThrough: tQ,
                        onSeeked: () => {
                            (e$.current = !1),
                                (e_.current = null),
                                null != tl.current && eB((tl.current.currentTime / tl.current.duration) * 100);
                        },
                        onAbort: () => td(o.SB.ABORT),
                        onError: () => td(o.SB.ERROR),
                        onEmptied: () => td(o.SB.EMPTIED),
                        onStalled: () => td(o.SB.STALLED),
                        onClick: (e) => {
                            null != er ? er(e) : tB();
                        },
                        crossOrigin: eE ?? void 0,
                        children: [
                            null != B &&
                                (0, r.jsx)("track", {
                                    ref: ti,
                                    src: B,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            !tm &&
                                (0, r.jsx)("source", {
                                    onError: () => td(o.SB.SOURCE_ERROR),
                                    src: eb,
                                    type: "video/mp4",
                                }),
                        ],
                    }),
                    eQ !== o.h$.READY &&
                        eR === o.Q6.PLAYING &&
                        null != eb &&
                        (0, r.jsx)("span", {
                            className: i()(L.S, { [L.F]: "center" === ep }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, r.jsx)(d.y$y, { type: d.y$y.Type.WANDERING_CUBES }),
                        }),
                    (0, r.jsx)(A.A, {
                        message: eg({ hasVideoAsset: null != eb, playerState: eR, pauseReason: tu }),
                        showOverlay: null == eb,
                    }),
                    null != q &&
                        (0, r.jsx)(s.animated.div, {
                            className: L.MU,
                            style: {
                                opacity: (0, s.to)([tO.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, s.to)([tO.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, s.to)([tO.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: q(),
                        }),
                    null != ee &&
                        (0, r.jsx)("div", {
                            className: L.MU,
                            children: ee({ playerState: eR, isControlBarExpanded: tP }),
                        }),
                    e7 &&
                        eR !== o.Q6.ENDED &&
                        null != U &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.DUT, {
                                    onClick: () => {
                                        eR === o.Q6.PAUSED && tC(o.Q6.PLAYING, o.KB.USER), e3(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, r.jsx)("div", { className: L.BG }),
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: i()(L.xr, et, { [L.MZ]: "portrait" === c }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, s.to)([tO, tK], (e, t) => `${e * tA[tg] + t}px`) },
                                    children: (0, r.jsx)(b.X, {
                                        text: U,
                                        onClose: () => {
                                            e3(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: L.Jp,
                        style: { opacity: (0, s.to)([tO.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(L.yf, {
                                [L.ZH]: eZ.current && eR === o.Q6.PLAYING,
                                [L.v7]: eZ.current && eR === o.Q6.PAUSED,
                            }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eR === o.Q6.PLAYING
                                    ? (0, r.jsx)(d.udU, { className: L.PK })
                                    : (0, r.jsx)(d.E$n, { className: L.PK }),
                        },
                        eR,
                    ),
                    e5 &&
                        null != tf &&
                        !tX &&
                        (0, r.jsx)(s.animated.div, {
                            className: L.o$,
                            ref: t_,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, s.to)(
                                    [tO.to({ range: [0, 1], output: [-20, -tA[tg]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                className: L.qh,
                                children: tf.text,
                            }),
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: L.r8,
                        style: { height: (0, s.to)([tO.to({ range: [0, 1], output: [0, tA[tg]] })], (e) => `${e}px`) },
                        children: [
                            (0, r.jsx)(s.animated.div, {
                                style: {
                                    transform: (0, s.to)(
                                        [tO.to({ range: [1, 0], output: [0, 1] })],
                                        (e) => `translateY(-${20 * e}px)`,
                                    ),
                                },
                                children: (0, r.jsx)("div", {
                                    style: tP || eX || ec ? void 0 : T,
                                    children: (0, r.jsx)(v.Ay, {
                                        percent: null != ek ? ek : eM,
                                        animate:
                                            !0 !== ts.current && !eU && eR === o.Q6.PLAYING && tx && eQ === o.h$.READY,
                                        interactionEnabled: eJ && tb > 0,
                                        backgroundColor: tP || ec ? void 0 : "rgba(0, 0, 0, 0.0)",
                                        playerState: eR,
                                        preloadedBuffers: tP ? eK : void 0,
                                        durationSec: tp > 0 ? tp : +!tx,
                                        isFullyVisible: tP && eJ,
                                        maxSeekableTime: null != I && tb > 0 ? tb : void 0,
                                        progressClassName: eu,
                                        persistPlayhead: ed,
                                        onClick: (e) => {
                                            if ((tI(e), eR === o.Q6.ENDED && !eW.current)) {
                                                let t = tl.current?.duration;
                                                (null == t || Number.isNaN(t) || e < t) && tC(o.Q6.PLAYING, o.KB.USER);
                                            }
                                        },
                                        onScrubBack: tj,
                                        onScrubForward: tk,
                                        onDragStateChange: (e) => {
                                            if (((eW.current = e), ez(e), e))
                                                (eV.current = eR === o.Q6.PLAYING),
                                                    (eH.current = eR === o.Q6.ENDED),
                                                    eV.current
                                                        ? tl.current?.pause()
                                                        : eH.current && tC(o.Q6.PAUSED, o.KB.SEEK);
                                            else {
                                                let e = tl.current,
                                                    t =
                                                        null != e &&
                                                        !Number.isNaN(e.duration) &&
                                                        e.currentTime >= e.duration;
                                                eV.current
                                                    ? ((eV.current = !1),
                                                      t ? tC(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE) : e?.play())
                                                    : eH.current
                                                      ? ((eH.current = !1),
                                                        t
                                                            ? tC(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE)
                                                            : tC(o.Q6.PLAYING, o.KB.USER))
                                                      : t && tC(o.Q6.ENDED, o.KB.PLAYBACK_COMPLETE);
                                            }
                                        },
                                        indicatorConfig: eh,
                                        getCurrentTimeSec: tc,
                                        "data-testid": "discord-web-video-player-timeline",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: L.uN,
                                "data-testid": "discord-web-video-player-controls",
                                style: {
                                    paddingTop: (0, s.to)(
                                        [tO.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 20}px`,
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [tO.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${e * e * 12}px`,
                                    ),
                                    pointerEvents: (0, s.to)([tO.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                        e < 0.3 ? "none" : "auto",
                                    ),
                                },
                                onFocus: () => eD(!0),
                                onBlur: () => eD(!1),
                                children: (0, r.jsx)(x.A, {
                                    videoRef: tl,
                                    playerState: eR,
                                    animSpring: tO,
                                    visible: tP,
                                    seekForwardEnabled: null == I || (tl.current?.currentTime ?? 0) + 1 < tb,
                                    hideCaptionBtn: null == B,
                                    hideTranscriptBtn: null == U,
                                    hideSkipButtons: "portrait" === c,
                                    size: tg,
                                    downloadUrl: ea,
                                    downloadContentType: ei,
                                    autoFocus: em,
                                    keyDownHandlerRef: tV,
                                    volume: e2,
                                    muted: e4,
                                    transcriptEnabled: e7,
                                    captionEnabled: e5,
                                    fullScreenEnabled: tt,
                                    handlePlaybackBtnClick: tB,
                                    handleTranscriptBtnClick: () => {
                                        e3(!e7);
                                    },
                                    handleCaptionBtnClick: () => {
                                        te(!e5);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        let e = !tt,
                                            t = (0, p.qf)(tl.current?.parentNode, tl.current);
                                        e && null != t
                                            ? ((0, p.tl)(t), t.addEventListener(p.Wb, tM), Q?.(!0), ty(o.oA.LG))
                                            : e ||
                                              null == t ||
                                              (t.removeEventListener(p.Wb, tM), Q?.(!1), (0, p.sP)(t), ty(o.oA.MD)),
                                            tn(e);
                                    },
                                    handleSeekBackBtnClick: tj,
                                    handleSeekForwardBtnClick: tk,
                                    autoHideVolumeSlider: ef,
                                    handleControlBarPendingInteraction: ez,
                                    onVolumeChange: (e) => {
                                        e9(e), O?.(e);
                                    },
                                    onMutedChange: (e) => {
                                        e8(e), $?.(e);
                                    },
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
function D(e) {
    let { poster: t, posterPlaceholder: n, posterPlaceholderVersion: a, orientation: i, objectFit: s = "contain" } = e,
        [u, o] = l.useState(!1),
        d = l.useCallback(() => o(!0), []);
    return null == t
        ? null
        : (0, r.jsx)(c.y, {
              readyState: u ? S.Rv1.READY : S.Rv1.LOADING,
              aspectRatio: "portrait" === i ? 9 / 16 : 16 / 9,
              placeholder: n,
              placeholderVersion: a ?? 1,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              disableSpinner: !0,
              children: (0, r.jsx)("img", { src: t, className: L.zH, style: { objectFit: s }, alt: "", onLoad: d }),
          });
}
let M = l.forwardRef(function (e, t) {
    let { active: n = !0, onClick: a, ...s } = e,
        {
            autoplay: u,
            poster: c,
            orientation: m = "landscape",
            posterPlaceholder: f,
            posterPlaceholderVersion: h,
            renderOverlay: p,
            renderPersistentOverlay: E,
            objectFit: x,
        } = s,
        [v, b] = l.useState(!1),
        g = l.useCallback(
            (e) => {
                null != a ? a(e) : b(!0);
            },
            [a],
        ),
        y = l.useRef(null);
    return n || v
        ? (0, r.jsx)(P, { ...s, onClick: a, autoplay: u || v, ref: t })
        : (0, r.jsx)(d.DUT, {
              className: i()(L.W6, L.nZ),
              "data-testid": "discord-web-video-player-container",
              tabIndex: 0,
              onClick: g,
              "aria-label": R.intl.string(R.t.RscU7I),
              focusProps: { ringTarget: y },
              children: (0, r.jsxs)("div", {
                  className: i()(L.NS, { [L.DO]: "portrait" === m, [L.r7]: "landscape" === m }),
                  children: [
                      (0, r.jsx)(D, {
                          poster: c,
                          posterPlaceholder: f,
                          posterPlaceholderVersion: h,
                          orientation: m,
                          objectFit: x,
                      }),
                      null != p && (0, r.jsx)("div", { className: L.MU, children: p() }),
                      null != E &&
                          (0, r.jsx)("div", {
                              className: L.MU,
                              children: E({ playerState: o.Q6.PAUSED, isControlBarExpanded: !0 }),
                          }),
                      (0, r.jsx)("div", {
                          className: L.mF,
                          ref: y,
                          children: (0, r.jsx)(d.udU, { size: "xs", color: "currentColor", className: L.z_ }),
                      }),
                  ],
              }),
          });
});
