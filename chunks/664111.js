"use strict";
n.r(t), n.d(t, { default: () => V }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(372684),
    o = n(337836),
    d = n(17928),
    c = n(876230),
    u = n(231723),
    _ = n(717421),
    E = n(939249),
    A = n(289873),
    h = n(782134),
    I = n(113494),
    f = n(834730),
    p = n(964486),
    T = n(775602),
    m = n(607470),
    g = n(475815),
    S = n(718499),
    N = n(23590),
    C = n(683574),
    O = n(671897),
    R = n(906892),
    L = n(565164),
    y = n(275664),
    D = n(408121),
    v = n(984212),
    b = n(739416),
    M = n(931853),
    P = n(90721),
    U = n(920228),
    w = n(838541),
    G = n(375708),
    x = n(834926);
let k = { tension: 250, friction: 5, clamp: !0 },
    F = { visibility: "hidden" },
    V = r.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: V = "landscape",
                videoUrlOverride: B,
                alt: H,
                src: j,
                poster: W,
                initialActive: Y = !0,
                initialTimeSec: K = 0,
                onProgressUpdate: $,
                onEnded: z,
                onError: q,
                maxSeekableTimeSec: Z,
                captionTrackUrl: X,
                transcriptText: Q,
                renderEndScreen: J,
                onPlayerStateChange: ee,
                onFullscreenChange: et,
                onVolumeChange: en,
                onMutedChange: ei,
                initialVolume: er = 0.3,
                initialMuted: ea = !1,
                getInitialVolume: es,
                getInitialMuted: el,
                onLoadStart: eo,
                onLoadEnd: ed,
                onFirstFrame: ec,
                onBufferingStart: eu,
                onBufferingEnd: e_,
                onFocusChange: eE,
                onVisibilityChange: eA,
                onSeek: eh,
                renderOverlay: eI,
                renderPersistentOverlay: ef,
                transcriptClassName: ep,
                onHlsInstance: eT,
                onClick: em,
                preload: eg,
                downloadUrl: eS,
                downloadContentType: eN,
                extraButtons: eC,
                hideFullScreenBtn: eO = !1,
                hideSkipButtons: eR,
                compactTimeDisplay: eL = !1,
                hidePlaybackSpeedBtn: ey = !1,
                getPlaybackBlockedMessage: eD,
                progressClassName: ev,
                pauseOnLostVisibility: eb = !1,
                persistTimeline: eM = !1,
                persistPlayhead: eP = !0,
                autoFocus: eU = !1,
                autoHideVolumeSlider: ew = !1,
                timelineIndicatorConfig: eG,
                scrubPreviewVttUrl: ex,
                scrubPreviewImageUrl: ek,
                loadingSpinnerPosition: eF = "top-left",
                crossOrigin: eV = "anonymous",
                withVideoHalo: eB = !1,
                objectFit: eH = "contain",
                minWidth: ej = 240,
                minHeight: eW = 180,
                muxContentMetadata: eY,
                awaitMuxReady: eK = !1,
                playerRef: e$,
            } = e,
            ez = B ?? j,
            eq = eD ?? M.u,
            { focused: eZ, focusedChanged: eX } = (0, b.A7)(),
            { visible: eQ, visibleChanged: eJ, targetRef: e0 } = (0, b.O7)(),
            [e1, e2] = r.useState(a ? c.Q6.PLAYING : c.Q6.PAUSED),
            [e3, e6] = r.useState(!1),
            [e4, e5] = r.useState(!1),
            [e7, e8] = r.useState(0),
            [e9, te] = r.useState(null),
            tt = r.useCallback((e) => {
                te(null), e8(e);
            }, []),
            tn = r.useRef(null),
            [ti, tr] = r.useState(!1),
            ta = r.useRef(null),
            [ts, tl] = r.useState(c.h$.LOADING),
            to = r.useRef(!1),
            td = r.useRef(null),
            [tc, tu] = r.useState([]),
            [t_, tE] = r.useState(!1),
            tA = r.useRef(!1),
            th = r.useRef(!1),
            tI = r.useRef(!1),
            tf = r.useRef(!1),
            [tp, tT] = r.useState(!0),
            tm = r.useRef(!0),
            tg = r.useRef(null),
            tS = r.useRef(null),
            [tN, tC] = r.useState(a || Y),
            [tO, tR] = r.useState(er),
            [tL, ty] = r.useState(ea),
            [tD, tv] = r.useState(!ew),
            [tb, tM] = r.useState(!1),
            [tP, tU] = r.useState(!1),
            [tw, tG] = r.useState(!1),
            tx = (0, d.bG)([T.Ay], () => T.Ay.useReducedMotion),
            tk = (0, r.useRef)(null),
            tF = (0, r.useRef)(null),
            tV = (0, r.useRef)(null),
            tB = r.useRef(!0),
            [tH, tj] = r.useState(null),
            tW = r.useRef(null),
            tY = (0, L.z5)(tN, tW, ex, ek),
            tK = r.useCallback(() => tk.current?.currentTime ?? null, []);
        (0, P.A)({ videoRef: tk, canvasRef: tF, enabled: tN && eB && !tx, canvasWidth: 32, canvasHeight: 18 });
        let t$ = r.useCallback(
                (e, t) => {
                    q?.(e, t);
                },
                [q],
            ),
            { isHlsActive: tz, hls: tq } = (0, S.Ay)(tk, {
                src: ez,
                initialTimeSec: K,
                onError: t$,
                onHlsInstance: eT,
                crossOrigin: eV,
            }),
            { isReady: tZ } = (0, N.A)({ videoRef: tk, hls: tq, contentMetadata: eY, isHls: tz }),
            tX = eK && !tZ && !tz,
            [tQ, tJ] = r.useState(null),
            [t0, t1] = r.useState(0),
            [t2, t3] = r.useState(!1),
            t6 = Z ?? tk.current?.duration ?? 0,
            [t4, t5] = r.useState(c.oA.MD),
            t7 = { [c.oA.MD]: 56, [c.oA.LG]: 64 };
        (0, p.u5)(() => {
            tB.current && (tB.current = !1);
        });
        let t8 = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tf.current = !0), e2(e), ee?.(e, t), null != tk.current))
                    switch (e) {
                        case c.Q6.PLAYING:
                            tj(null), tC(!0), tk.current.play();
                            break;
                        case c.Q6.PAUSED:
                            (tA.current = !1), tk.current.pause(), (tm.current = !1);
                            break;
                        case c.Q6.ENDED:
                            tM(!1);
                    }
            },
            [ee],
        );
        r.useEffect(() => {
            if (!eb) return;
            let e = null != n && (n === u.ip.HIDDEN || n === u.ip.EXITING || n === u.ip.EXITED),
                t = null != n && eJ && !eQ,
                i = eX && !eZ;
            if ((e || t || i) && null != tk.current && e1 === c.Q6.PLAYING) {
                let n = e || t ? c.KB.VISIBILITY : c.KB.FOCUS;
                tj(n), t8(c.Q6.PAUSED, n);
            }
        }, [eb, n, eZ, eX, eQ, eJ, e1, t8]),
            (0, U.A)({
                videoRef: tk,
                enabled: eb,
                onPipPause: () => {
                    tj(c.KB.PICTURE_IN_PICTURE), t8(c.Q6.PAUSED, c.KB.PICTURE_IN_PICTURE);
                },
                onHiddenPause: () => {
                    tj(c.KB.FOCUS), t8(c.Q6.PAUSED, c.KB.FOCUS);
                },
            }),
            r.useEffect(() => {
                eX && eE?.(eZ, e1);
            }, [eZ, eX, e1, eE]),
            r.useEffect(() => {
                eJ && eA?.(eQ, e1);
            }, [eQ, eJ, e1, eA]);
        let [t9, ne] = r.useState(!1),
            nt = r.useRef(null),
            nn = r.useRef(0);
        r.useLayoutEffect(() => {
            nn.current = performance.now();
        }, []);
        let ni = r.useCallback(() => {
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
            nr = r.useCallback(() => {
                ne(!1), (nn.current = performance.now()), ni();
            }, [ni]);
        r.useEffect(() => {
            if (e1 !== c.Q6.PLAYING) {
                ne(!1), null != nt.current && clearTimeout(nt.current);
                return;
            }
            return (
                ni(),
                () => {
                    null != nt.current && clearTimeout(nt.current);
                }
            );
        }, [e1, ni]),
            r.useEffect(
                () => () => {
                    null != ta.current && clearTimeout(ta.current);
                },
                [],
            );
        let na = !t9 && (e4 || e3 || e1 === c.Q6.ENDED),
            ns = r.useRef(et);
        ns.current = et;
        let nl = r.useCallback(() => {
            let e = (0, g.qf)(tk.current?.parentNode, tk.current);
            null == e || (0, g._U)(e) || (e.removeEventListener(g.Wb, nl), tG(!1), ns.current?.(!1), t5(c.oA.MD));
        }, []);
        function no() {
            null == tk.current ||
                (nc(Math.max((td.current ?? tk.current.currentTime) - 10, 0)),
                e1 === c.Q6.ENDED && t8(c.Q6.PAUSED, c.KB.SEEK));
        }
        function nd() {
            if (null == tk.current) return;
            let e = Math.min((td.current ?? tk.current.currentTime) + 10, t6);
            nc(e), e1 !== c.Q6.ENDED && e >= tk.current.duration && t8(c.Q6.ENDED, c.KB.SEEK);
        }
        r.useEffect(() => {
            let e = tk.current;
            return () => {
                let t = (0, g.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(g.Wb, nl);
            };
        }, [nl]);
        let nc = r.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == tk.current) return;
                let n = tk.current.currentTime;
                (td.current = e),
                    te((e / (tk.current.duration ?? 1)) * 100),
                    tr(!0),
                    null != ta.current && clearTimeout(ta.current),
                    (ta.current = setTimeout(() => {
                        tr(!1), (ta.current = null);
                    }, 100)),
                    (to.current = !0),
                    (tk.current.currentTime = e),
                    t && eh?.(n, e);
            },
            [eh],
        );
        function nu() {
            if (null != tk.current)
                switch (e1) {
                    case c.Q6.ENDED:
                        nc(0), t8(c.Q6.PLAYING, c.KB.USER);
                        break;
                    case c.Q6.PLAYING:
                        tj(c.KB.USER), t8(c.Q6.PAUSED, c.KB.USER);
                        break;
                    default:
                        t8(c.Q6.PLAYING, c.KB.USER);
                }
        }
        function n_(e) {
            null != em ? em(e) : (tC(!0), nu());
        }
        let nE = r.useCallback(() => {
            if (null == tk.current || 0 === tk.current.textTracks.length) return;
            let e = tk.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, v.C)(n) &&
                        ((n.id = `cue-${t}`),
                        (n.onenter = () => {
                            tJ(n);
                        }),
                        (n.onexit = () =>
                            (function (e) {
                                tJ((t) => (t?.id === e.id ? null : t));
                            })(n)));
                }
        }, []);
        function nA(e) {
            if (null != tk.current) {
                if (ts === c.h$.BUFFERING) {
                    let e = null != tS.current ? performance.now() - tS.current : null;
                    e_?.(e);
                } else if (ts === c.h$.LOADING) {
                    let e = null != tg.current ? performance.now() - tg.current : null;
                    ed?.(e);
                }
                tl(c.h$.READY), e1 === c.Q6.PLAYING && (tA.current || t8(c.Q6.PLAYING, c.KB.BUFFERING_RECOVERY));
            }
        }
        function nh(e) {
            if ((nc(e), e1 === c.Q6.ENDED && !th.current)) {
                let t = tk.current?.duration;
                (null == t || Number.isNaN(t) || e < t) && t8(c.Q6.PLAYING, c.KB.USER);
            }
        }
        r.useEffect(() => {
            if (null == tV.current) return;
            let e = tV.current;
            return (
                e.addEventListener("load", nE),
                () => {
                    null != e && e.removeEventListener("load", nE);
                }
            );
        }, [nE]);
        let [{ controlBarAnimSpring: nI }, nf] = (0, _.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: k,
                onStart: () => {
                    tT(!1);
                },
                onRest: () => {
                    tT(!0);
                },
            })),
            np = (0, r.useRef)(null),
            [{ captionHeightSpring: nT }, nm] = (0, _.z)(() => ({ from: { captionHeightSpring: 0 }, config: k }));
        r.useEffect(
            () => (
                nm({ captionHeightSpring: tP && null != tQ ? (np.current?.clientHeight ?? 0) : 0, immediate: tx }),
                () => {
                    nT.stop();
                }
            ),
            [tP, nm, tx, tQ, nT],
        ),
            r.useEffect(
                () => (
                    nf({ controlBarAnimSpring: na || t_ ? 1 : 0, immediate: tx }),
                    () => {
                        nI.stop();
                    }
                ),
                [na, nf, tx, t_, nI],
            );
        let ng = e1 === c.Q6.ENDED && null != J,
            nS = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.KB.USER;
                    null != tk.current && (nc(0), t8(c.Q6.PLAYING, e));
                },
                [nc, t8],
            ),
            nN = r.useRef(null),
            nC = r.useCallback(
                (e) => {
                    nr(), nN.current?.(e.nativeEvent);
                },
                [nr],
            );
        r.useImperativeHandle(
            e$,
            () => ({
                play: () => {
                    t8(c.Q6.PLAYING, c.KB.USER);
                },
                pause: () => {
                    t8(c.Q6.PAUSED, c.KB.USER);
                },
                seek: (e) => {
                    nc(e);
                },
            }),
            [t8, nc],
        );
        let nO = (0, i.jsx)(R.BK, {
            children: (0, i.jsx)(C.pT, {
                activeLayer: tw ? R.$W : void 0,
                isFullscreen: tw,
                videoRef: tk,
                children: (0, i.jsx)(E.D, {
                    className: s()(x.W6, { [x.nZ]: !tN }),
                    style: { minWidth: ej, minHeight: eW },
                    "data-fullscreen": tw,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tN ? -1 : 0,
                    focusProps: tN ? void 0 : { ringTarget: tn },
                    onMouseEnter: function () {
                        e6(!0),
                            ne(!1),
                            (nn.current = performance.now()),
                            null != nt.current && clearTimeout(nt.current);
                    },
                    onMouseLeave: function () {
                        e6(!1), ne(!1);
                    },
                    "aria-label": tN ? void 0 : G.intl.string(G.t.RscU7I),
                    onClick: tN ? void 0 : n_,
                    onMouseMove: nr,
                    children: (0, i.jsxs)("div", {
                        className: s()(x.NS, { [x.DO]: "portrait" === V, [x.r7]: "landscape" === V }),
                        tabIndex: -1,
                        onKeyDown: nC,
                        style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                        children: [
                            eB && !tx && (0, i.jsx)("canvas", { ref: tF, className: x.Xm }),
                            ng && J?.({ replay: nS }),
                            (0, i.jsxs)(m.A, {
                                ref: (e) => {
                                    (tk.current = e),
                                        (e0.current = e),
                                        "function" == typeof t ? t(e) : null != t && (t.current = e);
                                },
                                autoPlay: a,
                                alt: H,
                                playsInline: !0,
                                mediaLayoutType: tw ? w.dG.STATIC : w.dG.RESPONSIVE,
                                className: s()({ [x.R]: ng, [x.IR]: !0, [x.FP]: "cover" === eH && !tw }),
                                controls: !1,
                                poster: W,
                                preload: tN ? eg : "none",
                                disablePictureInPicture: !0,
                                "data-testid": "discord-web-video-player-video",
                                onTimeUpdate: function (e) {
                                    null != tk.current &&
                                        ($?.(tk.current.currentTime, tk.current.duration),
                                        to.current || tt((tk.current.currentTime / tk.current.duration) * 100));
                                },
                                onEnded: function (e) {
                                    tl(c.h$.READY), z?.(), th.current || t8(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE);
                                },
                                onLoadedData: function (e) {
                                    if (ts === c.h$.LOADING) {
                                        let e = null != tg.current ? performance.now() - tg.current : null;
                                        ed?.(e), tl(c.h$.READY);
                                    }
                                },
                                onLoadedMetadata: function (e) {
                                    if (null == tk.current) return;
                                    K > 0 && !tz && nc(K, !1);
                                    let t = es?.() ?? tO,
                                        n = el?.() ?? tL;
                                    t !== tO && tR(t), n !== tL && ty(n), (tk.current.volume = n ? 0 : t);
                                    let i = tk.current.duration;
                                    i > 0 && isFinite(i) && t1(i), t3(!0);
                                },
                                onLoadStart: function () {
                                    (tg.current = performance.now()), eo?.();
                                },
                                onPlaying: function () {
                                    tm.current && (ec?.(performance.now()), (tm.current = !1));
                                },
                                onWaiting: function (e) {
                                    (tS.current = performance.now()), eu?.(), tl(c.h$.BUFFERING);
                                },
                                onProgress: function (e) {
                                    if (null == tk.current) return;
                                    let t = [];
                                    for (let e = 0; e < tk.current.buffered.length; e++) {
                                        let n = tk.current.buffered.start(e),
                                            i = tk.current.buffered.end(e);
                                        i - n < 1 ||
                                            t.push({
                                                start: n / tk.current.duration,
                                                size: (i - n) / tk.current.duration,
                                            });
                                    }
                                    tu(t);
                                },
                                onCanPlay: nA,
                                onCanPlayThrough: nA,
                                onSeeked: function () {
                                    (to.current = !1),
                                        (td.current = null),
                                        null != tk.current && tt((tk.current.currentTime / tk.current.duration) * 100);
                                },
                                onAbort: function () {
                                    return t$(c.SB.ABORT);
                                },
                                onError: function () {
                                    return t$(c.SB.ERROR);
                                },
                                onEmptied: function () {
                                    return t$(c.SB.EMPTIED);
                                },
                                onStalled: function () {
                                    return t$(c.SB.STALLED);
                                },
                                onClick: n_,
                                crossOrigin: eV ?? void 0,
                                children: [
                                    null != X &&
                                        (0, i.jsx)("track", {
                                            ref: tV,
                                            src: X,
                                            label: "English",
                                            kind: "captions",
                                            srcLang: "en",
                                            default: !0,
                                        }),
                                    null != ex && (0, i.jsx)("track", { ref: tW, src: ex, kind: "metadata" }),
                                    !tz &&
                                        !tX &&
                                        (0, i.jsx)("source", {
                                            onError: function () {
                                                return t$(c.SB.SOURCE_ERROR);
                                            },
                                            src: ez,
                                        }),
                                ],
                            }),
                            ts !== c.h$.READY &&
                                e1 === c.Q6.PLAYING &&
                                null != ez &&
                                (0, i.jsx)("span", {
                                    className: s()(x.S, { [x.F]: "center" === eF }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, i.jsx)(A.y, { type: A.y.Type.WANDERING_CUBES }),
                                }),
                            (0, i.jsx)(M.A, {
                                message: eq({ hasVideoAsset: null != ez, playerState: e1, pauseReason: tH }),
                                showOverlay: null == ez,
                            }),
                            null != eI &&
                                (0, i.jsx)(l.animated.div, {
                                    className: x.MU,
                                    style: {
                                        opacity: (0, l.to)([nI.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, l.to)([nI.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, l.to)([nI.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: eI(),
                                }),
                            tb &&
                                e1 !== c.Q6.ENDED &&
                                null != Q &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(E.D, {
                                            onClick: () => {
                                                e1 === c.Q6.PAUSED && t8(c.Q6.PLAYING, c.KB.USER), tM(!1);
                                            },
                                            tabIndex: -1,
                                            children: (0, i.jsx)("div", { className: x.BG }),
                                        }),
                                        (0, i.jsx)(l.animated.div, {
                                            className: s()(x.xr, ep, { [x.MZ]: "portrait" === V }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, l.to)([nI, nT], (e, t) => `${e * t7[t4] + t}px`),
                                            },
                                            children: (0, i.jsx)(D.X, {
                                                text: Q,
                                                onClose: function () {
                                                    tM(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tN &&
                                (0, i.jsx)(l.animated.div, {
                                    className: x.Jp,
                                    style: {
                                        opacity: (0, l.to)([nI.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, i.jsx)(
                                "div",
                                {
                                    className: s()(x.yf, {
                                        [x.ZH]: tf.current && e1 === c.Q6.PLAYING,
                                        [x.v7]: tf.current && e1 === c.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        e1 === c.Q6.PLAYING
                                            ? (0, i.jsx)(h.u, { className: x.PK })
                                            : (0, i.jsx)(I.E, { className: x.PK }),
                                },
                                e1,
                            ),
                            tP &&
                                null != tQ &&
                                !ng &&
                                (0, i.jsx)(l.animated.div, {
                                    className: x.o$,
                                    ref: np,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, l.to)(
                                            [nI.to({ range: [0, 1], output: [-20, -t7[t4]] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, i.jsx)(f.E, {
                                        variant: "text-lg/semibold",
                                        color: "text-overlay-light",
                                        className: x.qh,
                                        children: tQ.text,
                                    }),
                                }),
                            tN &&
                                (0, i.jsxs)(l.animated.div, {
                                    className: x.r8,
                                    style: {
                                        height: (0, l.to)(
                                            [nI.to({ range: [0, 1], output: [0, t7[t4]] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: [
                                        (0, i.jsx)(l.animated.div, {
                                            style: {
                                                transform: (0, l.to)(
                                                    [nI.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${20 * e}px)`,
                                                ),
                                            },
                                            children: (0, i.jsx)("div", {
                                                style: na || t_ || eM ? void 0 : F,
                                                children: (0, i.jsx)(y.Ay, {
                                                    percent: null != e9 ? e9 : e7,
                                                    animate:
                                                        !0 !== tB.current &&
                                                        !ti &&
                                                        e1 === c.Q6.PLAYING &&
                                                        t2 &&
                                                        ts === c.h$.READY,
                                                    interactionEnabled: tp && t6 > 0,
                                                    backgroundColor: na || eM ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                    playerState: e1,
                                                    preloadedBuffers: na ? tc : void 0,
                                                    durationSec: t0 > 0 ? t0 : +!t2,
                                                    isFullyVisible: na && tp,
                                                    maxSeekableTime: null != Z && t6 > 0 ? t6 : void 0,
                                                    progressClassName: ev,
                                                    persistPlayhead: eP,
                                                    onClick: nh,
                                                    onScrubBack: no,
                                                    onScrubForward: nd,
                                                    onDragStateChange: function (e) {
                                                        if (((th.current = e), tE(e), e))
                                                            (tA.current = e1 === c.Q6.PLAYING),
                                                                (tI.current = e1 === c.Q6.ENDED),
                                                                tA.current
                                                                    ? tk.current?.pause()
                                                                    : tI.current && t8(c.Q6.PAUSED, c.KB.SEEK);
                                                        else {
                                                            let e = tk.current,
                                                                t =
                                                                    null != e &&
                                                                    !Number.isNaN(e.duration) &&
                                                                    e.currentTime >= e.duration;
                                                            tA.current
                                                                ? ((tA.current = !1),
                                                                  t
                                                                      ? t8(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                                                      : e?.play())
                                                                : tI.current
                                                                  ? ((tI.current = !1),
                                                                    t
                                                                        ? t8(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                                                        : t8(c.Q6.PLAYING, c.KB.USER))
                                                                  : t && t8(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE);
                                                        }
                                                    },
                                                    indicatorConfig: eG,
                                                    scrubPreviewCues: tY,
                                                    onIndicatorSeek: nh,
                                                    getCurrentTimeSec: tK,
                                                    "data-testid": "discord-web-video-player-timeline",
                                                }),
                                            }),
                                        }),
                                        (0, i.jsx)(l.animated.div, {
                                            className: x.uN,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, l.to)(
                                                    [nI.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 20}px`,
                                                ),
                                                paddingBottom: (0, l.to)(
                                                    [nI.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * 12}px`,
                                                ),
                                                pointerEvents: (0, l.to)(
                                                    [nI.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            onFocus: function () {
                                                return e5(!0);
                                            },
                                            onBlur: function () {
                                                return e5(!1);
                                            },
                                            children: (0, i.jsx)(O.A, {
                                                playerState: e1,
                                                animSpring: nI,
                                                visible: na,
                                                seekForwardEnabled:
                                                    null == Z || (tk.current?.currentTime ?? 0) + 1 < t6,
                                                hideCaptionBtn: null == X,
                                                hideTranscriptBtn: null == Q,
                                                hideFullScreenBtn: eO,
                                                hidePlaybackSpeedBtn: ey,
                                                hideSkipButtons: eR ?? "portrait" === V,
                                                compactTimeDisplay: eL,
                                                size: t4,
                                                downloadUrl: eS,
                                                downloadContentType: eN,
                                                extraButtons: eC,
                                                autoFocus: eU,
                                                keyDownHandlerRef: nN,
                                                volume: tO,
                                                muted: tL,
                                                transcriptEnabled: tb,
                                                captionEnabled: tP,
                                                handlePlaybackBtnClick: nu,
                                                handleTranscriptBtnClick: function () {
                                                    tM(!tb);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    tU(!tP);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !tw,
                                                        t = (0, g.qf)(tk.current?.parentNode, tk.current);
                                                    e && null != t
                                                        ? ((0, g.tl)(t),
                                                          t.addEventListener(g.Wb, nl),
                                                          et?.(!0),
                                                          t5(c.oA.LG))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(g.Wb, nl),
                                                          et?.(!1),
                                                          (0, g.sP)(t),
                                                          t5(c.oA.MD)),
                                                        tG(e);
                                                },
                                                handleSeekBackBtnClick: no,
                                                handleSeekForwardBtnClick: nd,
                                                autoHideVolumeSlider: ew,
                                                handleControlBarPendingInteraction: tE,
                                                onVolumeChange: function (e) {
                                                    tR(e), en?.(e);
                                                },
                                                onMutedChange: function (e) {
                                                    ty(e), ei?.(e);
                                                },
                                                onVolumeExpandedChange: function (e) {
                                                    tv(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            null != ef &&
                                (0, i.jsx)("div", {
                                    className: x.MU,
                                    children: ef({
                                        playerState: e1,
                                        isControlBarExpanded: na,
                                        controlBarAnimationSpring: nI,
                                        videoRef: tk,
                                        isActive: tN,
                                        isVolumeExpanded: tD,
                                    }),
                                }),
                            !tN &&
                                (0, i.jsx)("div", {
                                    className: x.mF,
                                    ref: tn,
                                    children: (0, i.jsx)(h.u, { size: "xs", color: "currentColor", className: x.z_ }),
                                }),
                            (0, i.jsx)(R.bW, {}),
                            (0, i.jsx)(o.P, {}),
                        ],
                    }),
                }),
            }),
        });
        return (0, i.jsx)(o.Jh, { enabled: tw, children: nO });
    });
