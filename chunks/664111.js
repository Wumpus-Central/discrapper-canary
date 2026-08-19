n.r(t), n.d(t, { default: () => K }), n(321073);
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(53466),
    s = n(337836),
    o = n(17928),
    c = n(876230),
    d = n(231723),
    m = n(717421),
    f = n(939249),
    h = n(289873),
    p = n(782134),
    v = n(113494),
    x = n(834730),
    g = n(964486),
    E = n(775602),
    b = n(607470),
    S = n(475815),
    C = n(718499),
    w = n(23590),
    y = n(683574),
    A = n(671897),
    N = n(906892),
    R = n(565164),
    T = n(275664),
    L = n(408121),
    P = n(984212),
    M = n(739416),
    j = n(931853),
    D = n(90721),
    k = n(920228),
    I = n(838541),
    B = n(375708),
    F = n(668534);
let _ = { tension: 250, friction: 5, clamp: !0 },
    U = { visibility: "hidden" },
    K = l.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: K = "landscape",
                videoUrlOverride: O,
                alt: $,
                src: V,
                poster: Q,
                initialActive: G = !0,
                initialTimeSec: H = 0,
                onProgressUpdate: Y,
                onEnded: Z,
                onError: z,
                maxSeekableTimeSec: X,
                captionTrackUrl: W,
                transcriptText: J,
                renderEndScreen: q,
                onPlayerStateChange: ee,
                onFullscreenChange: et,
                onVolumeChange: en,
                onMutedChange: er,
                initialVolume: el = 0.3,
                initialMuted: ea = !1,
                getInitialVolume: ei,
                getInitialMuted: eu,
                onLoadStart: es,
                onLoadEnd: eo,
                onFirstFrame: ec,
                onBufferingStart: ed,
                onBufferingEnd: em,
                onFocusChange: ef,
                onVisibilityChange: eh,
                onSeek: ep,
                renderOverlay: ev,
                renderPersistentOverlay: ex,
                transcriptClassName: eg,
                onHlsInstance: eE,
                onClick: eb,
                preload: eS,
                downloadUrl: eC,
                downloadContentType: ew,
                extraButtons: ey,
                hideFullScreenBtn: eA = !1,
                hideSkipButtons: eN,
                compactTimeDisplay: eR = !1,
                hidePlaybackSpeedBtn: eT = !1,
                getPlaybackBlockedMessage: eL,
                progressClassName: eP,
                pauseOnLostVisibility: eM = !1,
                persistTimeline: ej = !1,
                persistPlayhead: eD = !0,
                autoFocus: ek = !1,
                autoHideVolumeSlider: eI = !1,
                timelineIndicatorConfig: eB,
                scrubPreviewVttUrl: eF,
                scrubPreviewImageUrl: e_,
                loadingSpinnerPosition: eU = "top-left",
                crossOrigin: eK = "anonymous",
                withVideoHalo: eO = !1,
                objectFit: e$ = "contain",
                minWidth: eV = 240,
                minHeight: eQ = 180,
                muxContentMetadata: eG,
                awaitMuxReady: eH = !1,
                playerRef: eY,
            } = e,
            eZ = O ?? V,
            ez = eL ?? j.u,
            { focused: eX, focusedChanged: eW } = (0, M.A7)(),
            { visible: eJ, visibleChanged: eq, targetRef: e0 } = (0, M.O7)(),
            [e1, e2] = l.useState(a ? c.Q6.PLAYING : c.Q6.PAUSED),
            [e6, e4] = l.useState(!1),
            [e8, e3] = l.useState(!1),
            [e9, e7] = l.useState(0),
            [e5, te] = l.useState(null),
            tt = l.useCallback((e) => {
                te(null), e7(e);
            }, []),
            tn = l.useRef(null),
            [tr, tl] = l.useState(!1),
            ta = l.useRef(null),
            [ti, tu] = l.useState(c.h$.LOADING),
            ts = l.useRef(!1),
            to = l.useRef(null),
            [tc, td] = l.useState([]),
            [tm, tf] = l.useState(!1),
            th = l.useRef(!1),
            tp = l.useRef(!1),
            tv = l.useRef(!1),
            tx = l.useRef(!1),
            [tg, tE] = l.useState(!0),
            tb = l.useRef(!0),
            tS = l.useRef(null),
            tC = l.useRef(null),
            [tw, ty] = l.useState(a || G),
            [tA, tN] = l.useState(el),
            [tR, tT] = l.useState(ea),
            [tL, tP] = l.useState(!eI),
            [tM, tj] = l.useState(!1),
            [tD, tk] = l.useState(!1),
            [tI, tB] = l.useState(!1),
            tF = (0, o.bG)([E.Ay], () => E.Ay.useReducedMotion),
            t_ = (0, l.useRef)(null),
            tU = (0, l.useRef)(null),
            tK = (0, l.useRef)(null),
            tO = l.useRef(!0),
            [t$, tV] = l.useState(null),
            tQ = l.useRef(null),
            tG = (0, R.z5)(tw, tQ, eF, e_),
            tH = l.useCallback(() => t_.current?.currentTime ?? null, []);
        (0, D.A)({ videoRef: t_, canvasRef: tU, enabled: tw && eO && !tF, canvasWidth: 32, canvasHeight: 18 });
        let tY = l.useCallback(
                (e, t) => {
                    z?.(e, t);
                },
                [z],
            ),
            { isHlsActive: tZ, hls: tz } = (0, C.Ay)(t_, {
                src: eZ,
                initialTimeSec: H,
                onError: tY,
                onHlsInstance: eE,
                crossOrigin: eK,
            }),
            { isReady: tX } = (0, w.A)({ videoRef: t_, hls: tz, contentMetadata: eG, isHls: tZ }),
            tW = eH && !tX && !tZ,
            [tJ, tq] = l.useState(null),
            [t0, t1] = l.useState(0),
            [t2, t6] = l.useState(!1),
            t4 = X ?? t_.current?.duration ?? 0,
            [t8, t3] = l.useState(c.oA.MD),
            t9 = { [c.oA.MD]: 56, [c.oA.LG]: 64 };
        (0, g.u5)(() => {
            tO.current && (tO.current = !1);
        });
        let t7 = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tx.current = !0), e2(e), ee?.(e, t), null != t_.current))
                    switch (e) {
                        case c.Q6.PLAYING:
                            tV(null), ty(!0), t_.current.play();
                            break;
                        case c.Q6.PAUSED:
                            (th.current = !1), t_.current.pause(), (tb.current = !1);
                            break;
                        case c.Q6.ENDED:
                            tj(!1);
                    }
            },
            [ee],
        );
        l.useEffect(() => {
            if (!eM) return;
            let e = null != n && (n === d.ip.HIDDEN || n === d.ip.EXITING || n === d.ip.EXITED),
                t = null != n && eq && !eJ,
                r = eW && !eX;
            if ((e || t || r) && null != t_.current && e1 === c.Q6.PLAYING) {
                let n = e || t ? c.KB.VISIBILITY : c.KB.FOCUS;
                tV(n), t7(c.Q6.PAUSED, n);
            }
        }, [eM, n, eX, eW, eJ, eq, e1, t7]),
            (0, k.A)({
                videoRef: t_,
                enabled: eM,
                onPipPause: () => {
                    tV(c.KB.PICTURE_IN_PICTURE), t7(c.Q6.PAUSED, c.KB.PICTURE_IN_PICTURE);
                },
                onHiddenPause: () => {
                    tV(c.KB.FOCUS), t7(c.Q6.PAUSED, c.KB.FOCUS);
                },
            }),
            l.useEffect(() => {
                eW && ef?.(eX, e1);
            }, [eX, eW, e1, ef]),
            l.useEffect(() => {
                eq && eh?.(eJ, e1);
            }, [eJ, eq, e1, eh]);
        let [t5, ne] = l.useState(!1),
            nt = l.useRef(null),
            nn = l.useRef(0);
        l.useLayoutEffect(() => {
            nn.current = performance.now();
        }, []);
        let nr = l.useCallback(() => {
                switch ((null != nt.current && clearTimeout(nt.current), e1)) {
                    case c.Q6.PLAYING:
                        nt.current = setTimeout(
                            () => {
                                ne(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - nn.current)),
                        );
                    case c.Q6.PAUSED:
                    case c.Q6.ENDED:
                }
            }, [e1]),
            nl = l.useCallback(() => {
                ne(!1), (nn.current = performance.now()), nr();
            }, [nr]);
        l.useEffect(() => {
            if (e1 !== c.Q6.PLAYING) {
                ne(!1), null != nt.current && clearTimeout(nt.current);
                return;
            }
            return (
                nr(),
                () => {
                    null != nt.current && clearTimeout(nt.current);
                }
            );
        }, [e1, nr]),
            l.useEffect(
                () => () => {
                    null != ta.current && clearTimeout(ta.current);
                },
                [],
            );
        let na = !t5 && (e8 || e6 || e1 === c.Q6.ENDED),
            ni = l.useRef(et);
        ni.current = et;
        let nu = l.useCallback(() => {
            let e = (0, S.qf)(t_.current?.parentNode, t_.current);
            null == e || (0, S._U)(e) || (e.removeEventListener(S.Wb, nu), tB(!1), ni.current?.(!1), t3(c.oA.MD));
        }, []);
        function ns() {
            null == t_.current ||
                (nc(Math.max((to.current ?? t_.current.currentTime) - 10, 0)),
                e1 === c.Q6.ENDED && t7(c.Q6.PAUSED, c.KB.SEEK));
        }
        function no() {
            if (null == t_.current) return;
            let e = Math.min((to.current ?? t_.current.currentTime) + 10, t4);
            nc(e), e1 !== c.Q6.ENDED && e >= t_.current.duration && t7(c.Q6.ENDED, c.KB.SEEK);
        }
        l.useEffect(() => {
            let e = t_.current;
            return () => {
                let t = (0, S.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(S.Wb, nu);
            };
        }, [nu]);
        let nc = l.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == t_.current) return;
                let n = t_.current.currentTime;
                (to.current = e),
                    te((e / (t_.current.duration ?? 1)) * 100),
                    tl(!0),
                    null != ta.current && clearTimeout(ta.current),
                    (ta.current = setTimeout(() => {
                        tl(!1), (ta.current = null);
                    }, 100)),
                    (ts.current = !0),
                    (t_.current.currentTime = e),
                    t && ep?.(n, e);
            },
            [ep],
        );
        function nd() {
            if (null != t_.current)
                switch (e1) {
                    case c.Q6.ENDED:
                        nc(0), t7(c.Q6.PLAYING, c.KB.USER);
                        break;
                    case c.Q6.PLAYING:
                        tV(c.KB.USER), t7(c.Q6.PAUSED, c.KB.USER);
                        break;
                    default:
                        t7(c.Q6.PLAYING, c.KB.USER);
                }
        }
        function nm(e) {
            null != eb ? eb(e) : (ty(!0), nd());
        }
        let nf = l.useCallback(() => {
            if (null == t_.current || 0 === t_.current.textTracks.length) return;
            let e = t_.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, P.C)(n) &&
                        ((n.id = `cue-${t}`),
                        (n.onenter = () => {
                            tq(n);
                        }),
                        (n.onexit = () =>
                            (function (e) {
                                tq((t) => (t?.id === e.id ? null : t));
                            })(n)));
                }
        }, []);
        function nh(e) {
            if (null != t_.current) {
                if (ti === c.h$.BUFFERING) {
                    let e = null != tC.current ? performance.now() - tC.current : null;
                    em?.(e);
                } else if (ti === c.h$.LOADING) {
                    let e = null != tS.current ? performance.now() - tS.current : null;
                    eo?.(e);
                }
                tu(c.h$.READY), e1 === c.Q6.PLAYING && (th.current || t7(c.Q6.PLAYING, c.KB.BUFFERING_RECOVERY));
            }
        }
        function np(e) {
            if ((nc(e), e1 === c.Q6.ENDED && !tp.current)) {
                let t = t_.current?.duration;
                (null == t || Number.isNaN(t) || e < t) && t7(c.Q6.PLAYING, c.KB.USER);
            }
        }
        l.useEffect(() => {
            if (null == tK.current) return;
            let e = tK.current;
            return (
                e.addEventListener("load", nf),
                () => {
                    null != e && e.removeEventListener("load", nf);
                }
            );
        }, [nf]);
        let [{ controlBarAnimSpring: nv }, nx] = (0, m.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: _,
                onStart: () => {
                    tE(!1);
                },
                onRest: () => {
                    tE(!0);
                },
            })),
            ng = (0, l.useRef)(null),
            [{ captionHeightSpring: nE }, nb] = (0, m.z)(() => ({ from: { captionHeightSpring: 0 }, config: _ }));
        l.useEffect(
            () => (
                nb({ captionHeightSpring: tD && null != tJ ? (ng.current?.clientHeight ?? 0) : 0, immediate: tF }),
                () => {
                    nE.stop();
                }
            ),
            [tD, nb, tF, tJ, nE],
        ),
            l.useEffect(
                () => (
                    nx({ controlBarAnimSpring: na || tm ? 1 : 0, immediate: tF }),
                    () => {
                        nv.stop();
                    }
                ),
                [na, nx, tF, tm, nv],
            );
        let nS = e1 === c.Q6.ENDED && null != q,
            nC = l.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.KB.USER;
                    null != t_.current && (nc(0), t7(c.Q6.PLAYING, e));
                },
                [nc, t7],
            ),
            nw = l.useRef(null),
            ny = l.useCallback(
                (e) => {
                    nl(), nw.current?.(e.nativeEvent);
                },
                [nl],
            );
        l.useImperativeHandle(
            eY,
            () => ({
                play: () => {
                    t7(c.Q6.PLAYING, c.KB.USER);
                },
                pause: () => {
                    t7(c.Q6.PAUSED, c.KB.USER);
                },
                seek: (e) => {
                    nc(e);
                },
            }),
            [t7, nc],
        );
        let nA = (0, r.jsx)(N.BK, {
            children: (0, r.jsx)(y.pT, {
                activeLayer: tI ? N.$W : void 0,
                isFullscreen: tI,
                videoRef: t_,
                isActive: tw,
                isControlBarExpanded: na,
                children: (0, r.jsx)(f.D, {
                    className: i()(F.W6, { [F.nZ]: !tw }),
                    style: { minWidth: eV, minHeight: eQ },
                    "data-fullscreen": tI,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tw ? -1 : 0,
                    focusProps: tw ? void 0 : { ringTarget: tn },
                    onMouseEnter: function () {
                        e4(!0),
                            ne(!1),
                            (nn.current = performance.now()),
                            null != nt.current && clearTimeout(nt.current);
                    },
                    onMouseLeave: function () {
                        e4(!1), ne(!1);
                    },
                    "aria-label": tw ? void 0 : B.intl.string(B.t.RscU7I),
                    onClick: tw ? void 0 : nm,
                    onMouseMove: nl,
                    children: (0, r.jsxs)("div", {
                        className: i()(F.NS, { [F.DO]: "portrait" === K, [F.r7]: "landscape" === K }),
                        tabIndex: -1,
                        onKeyDown: ny,
                        style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                        children: [
                            eO && !tF && (0, r.jsx)("canvas", { ref: tU, className: F.Xm }),
                            nS && q?.({ replay: nC }),
                            (0, r.jsxs)(b.A, {
                                ref: (e) => {
                                    (t_.current = e),
                                        (e0.current = e),
                                        "function" == typeof t ? t(e) : null != t && (t.current = e);
                                },
                                autoPlay: a,
                                alt: $,
                                playsInline: !0,
                                mediaLayoutType: tI ? I.dG.STATIC : I.dG.RESPONSIVE,
                                className: i()({ [F.R]: nS, [F.IR]: !0, [F.FP]: "cover" === e$ && !tI }),
                                controls: !1,
                                poster: Q,
                                preload: tw ? eS : "none",
                                disablePictureInPicture: !0,
                                "data-testid": "discord-web-video-player-video",
                                onTimeUpdate: function (e) {
                                    null != t_.current &&
                                        (Y?.(t_.current.currentTime, t_.current.duration),
                                        ts.current || tt((t_.current.currentTime / t_.current.duration) * 100));
                                },
                                onEnded: function (e) {
                                    tu(c.h$.READY), Z?.(), tp.current || t7(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE);
                                },
                                onLoadedData: function (e) {
                                    if (ti === c.h$.LOADING) {
                                        let e = null != tS.current ? performance.now() - tS.current : null;
                                        eo?.(e), tu(c.h$.READY);
                                    }
                                },
                                onLoadedMetadata: function (e) {
                                    if (null == t_.current) return;
                                    H > 0 && !tZ && nc(H, !1);
                                    let t = ei?.() ?? tA,
                                        n = eu?.() ?? tR;
                                    t !== tA && tN(t), n !== tR && tT(n), (t_.current.volume = n ? 0 : t);
                                    let r = t_.current.duration;
                                    r > 0 && isFinite(r) && t1(r), t6(!0);
                                },
                                onLoadStart: function () {
                                    (tS.current = performance.now()), es?.();
                                },
                                onPlaying: function () {
                                    tb.current && (ec?.(performance.now()), (tb.current = !1));
                                },
                                onWaiting: function (e) {
                                    (tC.current = performance.now()), ed?.(), tu(c.h$.BUFFERING);
                                },
                                onProgress: function (e) {
                                    if (null == t_.current) return;
                                    let t = [];
                                    for (let e = 0; e < t_.current.buffered.length; e++) {
                                        let n = t_.current.buffered.start(e),
                                            r = t_.current.buffered.end(e);
                                        r - n < 1 ||
                                            t.push({
                                                start: n / t_.current.duration,
                                                size: (r - n) / t_.current.duration,
                                            });
                                    }
                                    td(t);
                                },
                                onCanPlay: nh,
                                onCanPlayThrough: nh,
                                onSeeked: function () {
                                    (ts.current = !1),
                                        (to.current = null),
                                        null != t_.current && tt((t_.current.currentTime / t_.current.duration) * 100);
                                },
                                onAbort: function () {
                                    return tY(c.SB.ABORT);
                                },
                                onError: function () {
                                    return tY(c.SB.ERROR);
                                },
                                onEmptied: function () {
                                    return tY(c.SB.EMPTIED);
                                },
                                onStalled: function () {
                                    return tY(c.SB.STALLED);
                                },
                                onClick: nm,
                                crossOrigin: eK ?? void 0,
                                children: [
                                    null != W &&
                                        (0, r.jsx)("track", {
                                            ref: tK,
                                            src: W,
                                            label: "English",
                                            kind: "captions",
                                            srcLang: "en",
                                            default: !0,
                                        }),
                                    null != eF && (0, r.jsx)("track", { ref: tQ, src: eF, kind: "metadata" }),
                                    !tZ &&
                                        !tW &&
                                        (0, r.jsx)("source", {
                                            onError: function () {
                                                return tY(c.SB.SOURCE_ERROR);
                                            },
                                            src: eZ,
                                        }),
                                ],
                            }),
                            ti !== c.h$.READY &&
                                e1 === c.Q6.PLAYING &&
                                null != eZ &&
                                (0, r.jsx)("span", {
                                    className: i()(F.S, { [F.F]: "center" === eU }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(j.A, {
                                message: ez({ hasVideoAsset: null != eZ, playerState: e1, pauseReason: t$ }),
                                showOverlay: null == eZ,
                            }),
                            null != ev &&
                                (0, r.jsx)(u.animated.div, {
                                    className: F.MU,
                                    style: {
                                        opacity: (0, u.to)([nv.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, u.to)([nv.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, u.to)([nv.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: ev(),
                                }),
                            tM &&
                                e1 !== c.Q6.ENDED &&
                                null != J &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(f.D, {
                                            onClick: () => {
                                                e1 === c.Q6.PAUSED && t7(c.Q6.PLAYING, c.KB.USER), tj(!1);
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: F.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: i()(F.xr, eg, { [F.MZ]: "portrait" === K }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)([nv, nE], (e, t) => `${e * t9[t8] + t}px`),
                                            },
                                            children: (0, r.jsx)(L.X, {
                                                text: J,
                                                onClose: function () {
                                                    tj(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tw &&
                                (0, r.jsx)(u.animated.div, {
                                    className: F.Jp,
                                    style: {
                                        opacity: (0, u.to)([nv.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: i()(F.yf, {
                                        [F.ZH]: tx.current && e1 === c.Q6.PLAYING,
                                        [F.v7]: tx.current && e1 === c.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        e1 === c.Q6.PLAYING
                                            ? (0, r.jsx)(p.PlayIcon, { className: F.PK })
                                            : (0, r.jsx)(v.PauseIcon, { className: F.PK }),
                                },
                                e1,
                            ),
                            tD &&
                                null != tJ &&
                                !nS &&
                                (0, r.jsx)(u.animated.div, {
                                    className: F.o$,
                                    ref: ng,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [nv.to({ range: [0, 1], output: [-20, -t9[t8]] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(x.E, {
                                        variant: "text-lg/semibold",
                                        color: "text-overlay-light",
                                        className: F.qh,
                                        children: tJ.text,
                                    }),
                                }),
                            tw &&
                                (0, r.jsxs)(u.animated.div, {
                                    className: F.r8,
                                    style: {
                                        height: (0, u.to)(
                                            [nv.to({ range: [0, 1], output: [0, t9[t8]] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: [
                                        (0, r.jsx)(u.animated.div, {
                                            style: {
                                                transform: (0, u.to)(
                                                    [nv.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${20 * e}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)("div", {
                                                style: na || tm || ej ? void 0 : U,
                                                children: (0, r.jsx)(T.Ay, {
                                                    percent: null != e5 ? e5 : e9,
                                                    animate:
                                                        !0 !== tO.current &&
                                                        !tr &&
                                                        e1 === c.Q6.PLAYING &&
                                                        t2 &&
                                                        ti === c.h$.READY,
                                                    interactionEnabled: tg && t4 > 0,
                                                    backgroundColor: na || ej ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                    playerState: e1,
                                                    preloadedBuffers: na ? tc : void 0,
                                                    durationSec: t0 > 0 ? t0 : +!t2,
                                                    isFullyVisible: na && tg,
                                                    maxSeekableTime: null != X && t4 > 0 ? t4 : void 0,
                                                    progressClassName: eP,
                                                    persistPlayhead: eD,
                                                    onClick: np,
                                                    onScrubBack: ns,
                                                    onScrubForward: no,
                                                    onDragStateChange: function (e) {
                                                        if (((tp.current = e), tf(e), e))
                                                            (th.current = e1 === c.Q6.PLAYING),
                                                                (tv.current = e1 === c.Q6.ENDED),
                                                                th.current
                                                                    ? t_.current?.pause()
                                                                    : tv.current && t7(c.Q6.PAUSED, c.KB.SEEK);
                                                        else {
                                                            let e = t_.current,
                                                                t =
                                                                    null != e &&
                                                                    !Number.isNaN(e.duration) &&
                                                                    e.currentTime >= e.duration;
                                                            th.current
                                                                ? ((th.current = !1),
                                                                  t
                                                                      ? t7(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                                                      : e?.play())
                                                                : tv.current
                                                                  ? ((tv.current = !1),
                                                                    t
                                                                        ? t7(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                                                        : t7(c.Q6.PLAYING, c.KB.USER))
                                                                  : t && t7(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE);
                                                        }
                                                    },
                                                    indicatorConfig: eB,
                                                    scrubPreviewCues: tG,
                                                    onIndicatorSeek: np,
                                                    getCurrentTimeSec: tH,
                                                    "data-testid": "discord-web-video-player-timeline",
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: F.uN,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, u.to)(
                                                    [nv.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 20}px`,
                                                ),
                                                paddingBottom: (0, u.to)(
                                                    [nv.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 12}px`,
                                                ),
                                                pointerEvents: (0, u.to)(
                                                    [nv.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            onFocus: function () {
                                                return e3(!0);
                                            },
                                            onBlur: function () {
                                                return e3(!1);
                                            },
                                            children: (0, r.jsx)(A.A, {
                                                playerState: e1,
                                                animSpring: nv,
                                                visible: na,
                                                seekForwardEnabled:
                                                    null == X || (t_.current?.currentTime ?? 0) + 1 < t4,
                                                hideCaptionBtn: null == W,
                                                hideTranscriptBtn: null == J,
                                                hideFullScreenBtn: eA,
                                                hidePlaybackSpeedBtn: eT,
                                                hideSkipButtons: eN ?? "portrait" === K,
                                                compactTimeDisplay: eR,
                                                size: t8,
                                                downloadUrl: eC,
                                                downloadContentType: ew,
                                                extraButtons: ey,
                                                autoFocus: ek,
                                                keyDownHandlerRef: nw,
                                                volume: tA,
                                                muted: tR,
                                                transcriptEnabled: tM,
                                                captionEnabled: tD,
                                                handlePlaybackBtnClick: nd,
                                                handleTranscriptBtnClick: function () {
                                                    tj(!tM);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    tk(!tD);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !tI,
                                                        t = (0, S.qf)(t_.current?.parentNode, t_.current);
                                                    e && null != t
                                                        ? ((0, S.tl)(t),
                                                          t.addEventListener(S.Wb, nu),
                                                          et?.(!0),
                                                          t3(c.oA.LG))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(S.Wb, nu),
                                                          et?.(!1),
                                                          (0, S.sP)(t),
                                                          t3(c.oA.MD)),
                                                        tB(e);
                                                },
                                                handleSeekBackBtnClick: ns,
                                                handleSeekForwardBtnClick: no,
                                                autoHideVolumeSlider: eI,
                                                handleControlBarPendingInteraction: tf,
                                                onVolumeChange: function (e) {
                                                    tN(e), en?.(e);
                                                },
                                                onMutedChange: function (e) {
                                                    tT(e), er?.(e);
                                                },
                                                onVolumeExpandedChange: function (e) {
                                                    tP(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            null != ex &&
                                (0, r.jsx)("div", {
                                    className: F.MU,
                                    children: ex({
                                        playerState: e1,
                                        isControlBarExpanded: na,
                                        controlBarAnimationSpring: nv,
                                        videoRef: t_,
                                        isActive: tw,
                                        isVolumeExpanded: tL,
                                    }),
                                }),
                            !tw &&
                                (0, r.jsx)("div", {
                                    className: F.mF,
                                    ref: tn,
                                    children: (0, r.jsx)(p.PlayIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: F.z_,
                                    }),
                                }),
                            (0, r.jsx)(N.bW, {}),
                            (0, r.jsx)(s.P, {}),
                        ],
                    }),
                }),
            }),
        });
        return (0, r.jsx)(s.Jh, { enabled: tI, children: nA });
    });
