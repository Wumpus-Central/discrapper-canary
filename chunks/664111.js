"use strict";
n.r(t), n.d(t, { default: () => k }), n(321073);
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
    C = n(671897),
    O = n(565164),
    R = n(275664),
    L = n(408121),
    y = n(984212),
    D = n(739416),
    v = n(931853),
    b = n(90721),
    M = n(920228),
    P = n(838541),
    U = n(375708),
    w = n(834926);
let G = { tension: 250, friction: 5, clamp: !0 },
    x = { visibility: "hidden" },
    k = r.forwardRef(function (e, t) {
        let {
                parentTransitionState: n,
                autoplay: a = !1,
                orientation: k = "landscape",
                videoUrlOverride: F,
                alt: V,
                src: B,
                poster: H,
                initialActive: j = !0,
                initialTimeSec: W = 0,
                onProgressUpdate: Y,
                onEnded: K,
                onError: $,
                maxSeekableTimeSec: z,
                captionTrackUrl: q,
                transcriptText: Z,
                renderEndScreen: X,
                onPlayerStateChange: Q,
                onFullscreenChange: J,
                onVolumeChange: ee,
                onMutedChange: et,
                initialVolume: en = 0.3,
                initialMuted: ei = !1,
                getInitialVolume: er,
                getInitialMuted: ea,
                onLoadStart: es,
                onLoadEnd: el,
                onFirstFrame: eo,
                onBufferingStart: ed,
                onBufferingEnd: ec,
                onFocusChange: eu,
                onVisibilityChange: e_,
                onSeek: eE,
                renderOverlay: eA,
                renderPersistentOverlay: eh,
                transcriptClassName: eI,
                onHlsInstance: ef,
                onClick: ep,
                preload: eT,
                downloadUrl: em,
                downloadContentType: eg,
                extraButtons: eS,
                hideFullScreenBtn: eN = !1,
                hideSkipButtons: eC,
                compactTimeDisplay: eO = !1,
                hidePlaybackSpeedBtn: eR = !1,
                getPlaybackBlockedMessage: eL,
                progressClassName: ey,
                pauseOnLostVisibility: eD = !1,
                persistTimeline: ev = !1,
                persistPlayhead: eb = !0,
                autoFocus: eM = !1,
                autoHideVolumeSlider: eP = !1,
                timelineIndicatorConfig: eU,
                scrubPreviewVttUrl: ew,
                scrubPreviewImageUrl: eG,
                loadingSpinnerPosition: ex = "top-left",
                crossOrigin: ek = "anonymous",
                withVideoHalo: eF = !1,
                objectFit: eV = "contain",
                minWidth: eB = 240,
                minHeight: eH = 180,
                muxContentMetadata: ej,
                awaitMuxReady: eW = !1,
                playerRef: eY,
            } = e,
            eK = F ?? B,
            e$ = eL ?? v.u,
            { focused: ez, focusedChanged: eq } = (0, D.A7)(),
            { visible: eZ, visibleChanged: eX, targetRef: eQ } = (0, D.O7)(),
            [eJ, e0] = r.useState(a ? c.Q6.PLAYING : c.Q6.PAUSED),
            [e1, e2] = r.useState(!1),
            [e3, e6] = r.useState(!1),
            [e4, e5] = r.useState(0),
            [e7, e8] = r.useState(null),
            e9 = r.useCallback((e) => {
                e8(null), e5(e);
            }, []),
            te = r.useRef(null),
            [tt, tn] = r.useState(!1),
            ti = r.useRef(null),
            [tr, ta] = r.useState(c.h$.LOADING),
            ts = r.useRef(!1),
            tl = r.useRef(null),
            [to, td] = r.useState([]),
            [tc, tu] = r.useState(!1),
            t_ = r.useRef(!1),
            tE = r.useRef(!1),
            tA = r.useRef(!1),
            th = r.useRef(!1),
            [tI, tf] = r.useState(!0),
            tp = r.useRef(!0),
            tT = r.useRef(null),
            tm = r.useRef(null),
            [tg, tS] = r.useState(a || j),
            [tN, tC] = r.useState(en),
            [tO, tR] = r.useState(ei),
            [tL, ty] = r.useState(!eP),
            [tD, tv] = r.useState(!1),
            [tb, tM] = r.useState(!1),
            [tP, tU] = r.useState(!1),
            tw = (0, d.bG)([T.Ay], () => T.Ay.useReducedMotion),
            tG = (0, r.useRef)(null),
            tx = (0, r.useRef)(null),
            tk = (0, r.useRef)(null),
            tF = r.useRef(!0),
            [tV, tB] = r.useState(null),
            tH = r.useRef(null),
            tj = (0, O.z5)(tg, tH, ew, eG),
            tW = r.useCallback(() => tG.current?.currentTime ?? null, []);
        (0, b.A)({ videoRef: tG, canvasRef: tx, enabled: tg && eF && !tw, canvasWidth: 32, canvasHeight: 18 });
        let tY = r.useCallback(
                (e, t) => {
                    $?.(e, t);
                },
                [$],
            ),
            { isHlsActive: tK, hls: t$ } = (0, S.Ay)(tG, {
                src: eK,
                initialTimeSec: W,
                onError: tY,
                onHlsInstance: ef,
                crossOrigin: ek,
            }),
            { isReady: tz } = (0, N.A)({ videoRef: tG, hls: t$, contentMetadata: ej, isHls: tK }),
            tq = eW && !tz && !tK,
            [tZ, tX] = r.useState(null),
            [tQ, tJ] = r.useState(0),
            [t0, t1] = r.useState(!1),
            t2 = z ?? tG.current?.duration ?? 0,
            [t3, t6] = r.useState(c.oA.MD),
            t4 = { [c.oA.MD]: 56, [c.oA.LG]: 64 };
        (0, p.u5)(() => {
            tF.current && (tF.current = !1);
        });
        let t5 = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((th.current = !0), e0(e), Q?.(e, t), null != tG.current))
                    switch (e) {
                        case c.Q6.PLAYING:
                            tB(null), tS(!0), tG.current.play();
                            break;
                        case c.Q6.PAUSED:
                            (t_.current = !1), tG.current.pause(), (tp.current = !1);
                            break;
                        case c.Q6.ENDED:
                            tv(!1);
                    }
            },
            [Q],
        );
        r.useEffect(() => {
            if (!eD) return;
            let e = null != n && (n === u.ip.HIDDEN || n === u.ip.EXITING || n === u.ip.EXITED),
                t = null != n && eX && !eZ,
                i = eq && !ez;
            if ((e || t || i) && null != tG.current && eJ === c.Q6.PLAYING) {
                let n = e || t ? c.KB.VISIBILITY : c.KB.FOCUS;
                tB(n), t5(c.Q6.PAUSED, n);
            }
        }, [eD, n, ez, eq, eZ, eX, eJ, t5]),
            (0, M.A)({
                videoRef: tG,
                enabled: eD,
                onPipPause: () => {
                    tB(c.KB.PICTURE_IN_PICTURE), t5(c.Q6.PAUSED, c.KB.PICTURE_IN_PICTURE);
                },
                onHiddenPause: () => {
                    tB(c.KB.FOCUS), t5(c.Q6.PAUSED, c.KB.FOCUS);
                },
            }),
            r.useEffect(() => {
                eq && eu?.(ez, eJ);
            }, [ez, eq, eJ, eu]),
            r.useEffect(() => {
                eX && e_?.(eZ, eJ);
            }, [eZ, eX, eJ, e_]);
        let [t7, t8] = r.useState(!1),
            t9 = r.useRef(null),
            ne = r.useRef(0);
        r.useLayoutEffect(() => {
            ne.current = performance.now();
        }, []);
        let nt = r.useCallback(() => {
                switch ((null != t9.current && clearTimeout(t9.current), eJ)) {
                    case c.Q6.PLAYING:
                        t9.current = setTimeout(
                            () => {
                                t8(!0);
                            },
                            Math.max(0, 3e3 - (performance.now() - ne.current)),
                        );
                    case c.Q6.PAUSED:
                    case c.Q6.ENDED:
                }
            }, [eJ]),
            nn = r.useCallback(() => {
                t8(!1), (ne.current = performance.now()), nt();
            }, [nt]);
        r.useEffect(() => {
            if (eJ !== c.Q6.PLAYING) {
                t8(!1), null != t9.current && clearTimeout(t9.current);
                return;
            }
            return (
                nt(),
                () => {
                    null != t9.current && clearTimeout(t9.current);
                }
            );
        }, [eJ, nt]),
            r.useEffect(
                () => () => {
                    null != ti.current && clearTimeout(ti.current);
                },
                [],
            );
        let ni = !t7 && (e3 || e1 || eJ === c.Q6.ENDED),
            nr = r.useRef(J);
        nr.current = J;
        let na = r.useCallback(() => {
            let e = (0, g.qf)(tG.current?.parentNode, tG.current);
            null == e || (0, g._U)(e) || (e.removeEventListener(g.Wb, na), tU(!1), nr.current?.(!1), t6(c.oA.MD));
        }, []);
        function ns() {
            null == tG.current ||
                (no(Math.max((tl.current ?? tG.current.currentTime) - 10, 0)),
                eJ === c.Q6.ENDED && t5(c.Q6.PAUSED, c.KB.SEEK));
        }
        function nl() {
            if (null == tG.current) return;
            let e = Math.min((tl.current ?? tG.current.currentTime) + 10, t2);
            no(e), eJ !== c.Q6.ENDED && e >= tG.current.duration && t5(c.Q6.ENDED, c.KB.SEEK);
        }
        r.useEffect(() => {
            let e = tG.current;
            return () => {
                let t = (0, g.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(g.Wb, na);
            };
        }, [na]);
        let no = r.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == tG.current) return;
                let n = tG.current.currentTime;
                (tl.current = e),
                    e8((e / (tG.current.duration ?? 1)) * 100),
                    tn(!0),
                    null != ti.current && clearTimeout(ti.current),
                    (ti.current = setTimeout(() => {
                        tn(!1), (ti.current = null);
                    }, 100)),
                    (ts.current = !0),
                    (tG.current.currentTime = e),
                    t && eE?.(n, e);
            },
            [eE],
        );
        function nd() {
            if (null != tG.current)
                switch (eJ) {
                    case c.Q6.ENDED:
                        no(0), t5(c.Q6.PLAYING, c.KB.USER);
                        break;
                    case c.Q6.PLAYING:
                        tB(c.KB.USER), t5(c.Q6.PAUSED, c.KB.USER);
                        break;
                    default:
                        t5(c.Q6.PLAYING, c.KB.USER);
                }
        }
        function nc(e) {
            null != ep ? ep(e) : (tS(!0), nd());
        }
        let nu = r.useCallback(() => {
            if (null == tG.current || 0 === tG.current.textTracks.length) return;
            let e = tG.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, y.C)(n) &&
                        ((n.id = `cue-${t}`),
                        (n.onenter = () => {
                            tX(n);
                        }),
                        (n.onexit = () =>
                            (function (e) {
                                tX((t) => (t?.id === e.id ? null : t));
                            })(n)));
                }
        }, []);
        function n_(e) {
            if (null != tG.current) {
                if (tr === c.h$.BUFFERING) {
                    let e = null != tm.current ? performance.now() - tm.current : null;
                    ec?.(e);
                } else if (tr === c.h$.LOADING) {
                    let e = null != tT.current ? performance.now() - tT.current : null;
                    el?.(e);
                }
                ta(c.h$.READY), eJ === c.Q6.PLAYING && (t_.current || t5(c.Q6.PLAYING, c.KB.BUFFERING_RECOVERY));
            }
        }
        function nE(e) {
            if ((no(e), eJ === c.Q6.ENDED && !tE.current)) {
                let t = tG.current?.duration;
                (null == t || Number.isNaN(t) || e < t) && t5(c.Q6.PLAYING, c.KB.USER);
            }
        }
        r.useEffect(() => {
            if (null == tk.current) return;
            let e = tk.current;
            return (
                e.addEventListener("load", nu),
                () => {
                    null != e && e.removeEventListener("load", nu);
                }
            );
        }, [nu]);
        let [{ controlBarAnimSpring: nA }, nh] = (0, _.z)(() => ({
                from: { controlBarAnimSpring: 0 },
                config: G,
                onStart: () => {
                    tf(!1);
                },
                onRest: () => {
                    tf(!0);
                },
            })),
            nI = (0, r.useRef)(null),
            [{ captionHeightSpring: nf }, np] = (0, _.z)(() => ({ from: { captionHeightSpring: 0 }, config: G }));
        r.useEffect(
            () => (
                np({ captionHeightSpring: tb && null != tZ ? (nI.current?.clientHeight ?? 0) : 0, immediate: tw }),
                () => {
                    nf.stop();
                }
            ),
            [tb, np, tw, tZ, nf],
        ),
            r.useEffect(
                () => (
                    nh({ controlBarAnimSpring: ni || tc ? 1 : 0, immediate: tw }),
                    () => {
                        nA.stop();
                    }
                ),
                [ni, nh, tw, tc, nA],
            );
        let nT = eJ === c.Q6.ENDED && null != X,
            nm = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.KB.USER;
                    null != tG.current && (no(0), t5(c.Q6.PLAYING, e));
                },
                [no, t5],
            ),
            ng = r.useRef(null),
            nS = r.useCallback(
                (e) => {
                    nn(), ng.current?.(e.nativeEvent);
                },
                [nn],
            );
        r.useImperativeHandle(
            eY,
            () => ({
                play: () => {
                    t5(c.Q6.PLAYING, c.KB.USER);
                },
                pause: () => {
                    t5(c.Q6.PAUSED, c.KB.USER);
                },
                seek: (e) => {
                    no(e);
                },
            }),
            [t5, no],
        );
        let nN = (0, i.jsx)(E.D, {
            className: s()(w.W6, { [w.nZ]: !tg }),
            style: { minWidth: eB, minHeight: eH },
            "data-fullscreen": tP,
            "data-testid": "discord-web-video-player-container",
            tabIndex: tg ? -1 : 0,
            focusProps: tg ? void 0 : { ringTarget: te },
            onMouseEnter: function () {
                e2(!0), t8(!1), (ne.current = performance.now()), null != t9.current && clearTimeout(t9.current);
            },
            onMouseLeave: function () {
                e2(!1), t8(!1);
            },
            "aria-label": tg ? void 0 : U.intl.string(U.t.RscU7I),
            onClick: tg ? void 0 : nc,
            onMouseMove: nn,
            children: (0, i.jsxs)("div", {
                className: s()(w.NS, { [w.DO]: "portrait" === k, [w.r7]: "landscape" === k }),
                tabIndex: -1,
                onKeyDown: nS,
                style: { "--custom-footer-horizontal-padding": "20px", "--custom-footer-bottom": "4px" },
                children: [
                    eF && !tw && (0, i.jsx)("canvas", { ref: tx, className: w.Xm }),
                    nT && X?.({ replay: nm }),
                    (0, i.jsxs)(m.A, {
                        ref: (e) => {
                            (tG.current = e),
                                (eQ.current = e),
                                "function" == typeof t ? t(e) : null != t && (t.current = e);
                        },
                        autoPlay: a,
                        alt: V,
                        playsInline: !0,
                        mediaLayoutType: tP ? P.dG.STATIC : P.dG.RESPONSIVE,
                        className: s()({ [w.R]: nT, [w.IR]: !0, [w.FP]: "cover" === eV && !tP }),
                        controls: !1,
                        poster: H,
                        preload: tg ? eT : "none",
                        disablePictureInPicture: !0,
                        "data-testid": "discord-web-video-player-video",
                        onTimeUpdate: function (e) {
                            null != tG.current &&
                                (Y?.(tG.current.currentTime, tG.current.duration),
                                ts.current || e9((tG.current.currentTime / tG.current.duration) * 100));
                        },
                        onEnded: function (e) {
                            ta(c.h$.READY), K?.(), tE.current || t5(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE);
                        },
                        onLoadedData: function (e) {
                            if (tr === c.h$.LOADING) {
                                let e = null != tT.current ? performance.now() - tT.current : null;
                                el?.(e), ta(c.h$.READY);
                            }
                        },
                        onLoadedMetadata: function (e) {
                            if (null == tG.current) return;
                            W > 0 && !tK && no(W, !1);
                            let t = er?.() ?? tN,
                                n = ea?.() ?? tO;
                            t !== tN && tC(t), n !== tO && tR(n), (tG.current.volume = n ? 0 : t);
                            let i = tG.current.duration;
                            i > 0 && isFinite(i) && tJ(i), t1(!0);
                        },
                        onLoadStart: function () {
                            (tT.current = performance.now()), es?.();
                        },
                        onPlaying: function () {
                            tp.current && (eo?.(performance.now()), (tp.current = !1));
                        },
                        onWaiting: function (e) {
                            (tm.current = performance.now()), ed?.(), ta(c.h$.BUFFERING);
                        },
                        onProgress: function (e) {
                            if (null == tG.current) return;
                            let t = [];
                            for (let e = 0; e < tG.current.buffered.length; e++) {
                                let n = tG.current.buffered.start(e),
                                    i = tG.current.buffered.end(e);
                                i - n < 1 ||
                                    t.push({ start: n / tG.current.duration, size: (i - n) / tG.current.duration });
                            }
                            td(t);
                        },
                        onCanPlay: n_,
                        onCanPlayThrough: n_,
                        onSeeked: function () {
                            (ts.current = !1),
                                (tl.current = null),
                                null != tG.current && e9((tG.current.currentTime / tG.current.duration) * 100);
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
                        onClick: nc,
                        crossOrigin: ek ?? void 0,
                        children: [
                            null != q &&
                                (0, i.jsx)("track", {
                                    ref: tk,
                                    src: q,
                                    label: "English",
                                    kind: "captions",
                                    srcLang: "en",
                                    default: !0,
                                }),
                            null != ew && (0, i.jsx)("track", { ref: tH, src: ew, kind: "metadata" }),
                            !tK &&
                                !tq &&
                                (0, i.jsx)("source", {
                                    onError: function () {
                                        return tY(c.SB.SOURCE_ERROR);
                                    },
                                    src: eK,
                                }),
                        ],
                    }),
                    tr !== c.h$.READY &&
                        eJ === c.Q6.PLAYING &&
                        null != eK &&
                        (0, i.jsx)("span", {
                            className: s()(w.S, { [w.F]: "center" === ex }),
                            "data-testid": "discord-web-video-player-loading-spinner",
                            children: (0, i.jsx)(A.y, { type: A.y.Type.WANDERING_CUBES }),
                        }),
                    (0, i.jsx)(v.A, {
                        message: e$({ hasVideoAsset: null != eK, playerState: eJ, pauseReason: tV }),
                        showOverlay: null == eK,
                    }),
                    null != eA &&
                        (0, i.jsx)(l.animated.div, {
                            className: w.MU,
                            style: {
                                opacity: (0, l.to)([nA.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                visibility: (0, l.to)([nA.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.1 ? "hidden" : "visible",
                                ),
                                pointerEvents: (0, l.to)([nA.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            children: eA(),
                        }),
                    tD &&
                        eJ !== c.Q6.ENDED &&
                        null != Z &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(E.D, {
                                    onClick: () => {
                                        eJ === c.Q6.PAUSED && t5(c.Q6.PLAYING, c.KB.USER), tv(!1);
                                    },
                                    tabIndex: -1,
                                    children: (0, i.jsx)("div", { className: w.BG }),
                                }),
                                (0, i.jsx)(l.animated.div, {
                                    className: s()(w.xr, eI, { [w.MZ]: "portrait" === k }),
                                    "data-testid": "discord-web-video-player-transcript",
                                    style: { marginBottom: (0, l.to)([nA, nf], (e, t) => `${e * t4[t3] + t}px`) },
                                    children: (0, i.jsx)(L.X, {
                                        text: Z,
                                        onClose: function () {
                                            tv(!1);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    tg &&
                        (0, i.jsx)(l.animated.div, {
                            className: w.Jp,
                            style: { opacity: (0, l.to)([nA.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                        }),
                    (0, i.jsx)(
                        "div",
                        {
                            className: s()(w.yf, {
                                [w.ZH]: th.current && eJ === c.Q6.PLAYING,
                                [w.v7]: th.current && eJ === c.Q6.PAUSED,
                            }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eJ === c.Q6.PLAYING
                                    ? (0, i.jsx)(h.u, { className: w.PK })
                                    : (0, i.jsx)(I.E, { className: w.PK }),
                        },
                        eJ,
                    ),
                    tb &&
                        null != tZ &&
                        !nT &&
                        (0, i.jsx)(l.animated.div, {
                            className: w.o$,
                            ref: nI,
                            "data-testid": "discord-web-video-player-captions",
                            style: {
                                translateY: (0, l.to)(
                                    [nA.to({ range: [0, 1], output: [-20, -t4[t3]] })],
                                    (e) => `${e}px`,
                                ),
                            },
                            children: (0, i.jsx)(f.E, {
                                variant: "text-lg/semibold",
                                color: "text-overlay-light",
                                className: w.qh,
                                children: tZ.text,
                            }),
                        }),
                    tg &&
                        (0, i.jsxs)(l.animated.div, {
                            className: w.r8,
                            style: {
                                height: (0, l.to)([nA.to({ range: [0, 1], output: [0, t4[t3]] })], (e) => `${e}px`),
                            },
                            children: [
                                (0, i.jsx)(l.animated.div, {
                                    style: {
                                        transform: (0, l.to)(
                                            [nA.to({ range: [1, 0], output: [0, 1] })],
                                            (e) => `translateY(-${20 * e}px)`,
                                        ),
                                    },
                                    children: (0, i.jsx)("div", {
                                        style: ni || tc || ev ? void 0 : x,
                                        children: (0, i.jsx)(R.Ay, {
                                            percent: null != e7 ? e7 : e4,
                                            animate:
                                                !0 !== tF.current &&
                                                !tt &&
                                                eJ === c.Q6.PLAYING &&
                                                t0 &&
                                                tr === c.h$.READY,
                                            interactionEnabled: tI && t2 > 0,
                                            backgroundColor: ni || ev ? void 0 : "rgba(0, 0, 0, 0.0)",
                                            playerState: eJ,
                                            preloadedBuffers: ni ? to : void 0,
                                            durationSec: tQ > 0 ? tQ : +!t0,
                                            isFullyVisible: ni && tI,
                                            maxSeekableTime: null != z && t2 > 0 ? t2 : void 0,
                                            progressClassName: ey,
                                            persistPlayhead: eb,
                                            onClick: nE,
                                            onScrubBack: ns,
                                            onScrubForward: nl,
                                            onDragStateChange: function (e) {
                                                if (((tE.current = e), tu(e), e))
                                                    (t_.current = eJ === c.Q6.PLAYING),
                                                        (tA.current = eJ === c.Q6.ENDED),
                                                        t_.current
                                                            ? tG.current?.pause()
                                                            : tA.current && t5(c.Q6.PAUSED, c.KB.SEEK);
                                                else {
                                                    let e = tG.current,
                                                        t =
                                                            null != e &&
                                                            !Number.isNaN(e.duration) &&
                                                            e.currentTime >= e.duration;
                                                    t_.current
                                                        ? ((t_.current = !1),
                                                          t ? t5(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE) : e?.play())
                                                        : tA.current
                                                          ? ((tA.current = !1),
                                                            t
                                                                ? t5(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                                                : t5(c.Q6.PLAYING, c.KB.USER))
                                                          : t && t5(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE);
                                                }
                                            },
                                            indicatorConfig: eU,
                                            scrubPreviewCues: tj,
                                            onIndicatorSeek: nE,
                                            getCurrentTimeSec: tW,
                                            "data-testid": "discord-web-video-player-timeline",
                                        }),
                                    }),
                                }),
                                (0, i.jsx)(l.animated.div, {
                                    className: w.uN,
                                    "data-testid": "discord-web-video-player-controls",
                                    style: {
                                        paddingTop: (0, l.to)(
                                            [nA.to({ range: [0, 1], output: [0, 1] })],
                                            (e) => `${e * e * 20}px`,
                                        ),
                                        paddingBottom: (0, l.to)(
                                            [nA.to({ range: [0, 1], output: [0, 1] })],
                                            (e) => `${e * e * 12}px`,
                                        ),
                                        pointerEvents: (0, l.to)([nA.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    onFocus: function () {
                                        return e6(!0);
                                    },
                                    onBlur: function () {
                                        return e6(!1);
                                    },
                                    children: (0, i.jsx)(C.A, {
                                        videoRef: tG,
                                        playerState: eJ,
                                        animSpring: nA,
                                        visible: ni,
                                        seekForwardEnabled: null == z || (tG.current?.currentTime ?? 0) + 1 < t2,
                                        hideCaptionBtn: null == q,
                                        hideTranscriptBtn: null == Z,
                                        hideFullScreenBtn: eN,
                                        hidePlaybackSpeedBtn: eR,
                                        hideSkipButtons: eC ?? "portrait" === k,
                                        compactTimeDisplay: eO,
                                        size: t3,
                                        downloadUrl: em,
                                        downloadContentType: eg,
                                        extraButtons: eS,
                                        autoFocus: eM,
                                        keyDownHandlerRef: ng,
                                        volume: tN,
                                        muted: tO,
                                        transcriptEnabled: tD,
                                        captionEnabled: tb,
                                        fullScreenEnabled: tP,
                                        handlePlaybackBtnClick: nd,
                                        handleTranscriptBtnClick: function () {
                                            tv(!tD);
                                        },
                                        handleCaptionBtnClick: function () {
                                            tM(!tb);
                                        },
                                        handleFullScreenBtnClick: function () {
                                            let e = !tP,
                                                t = (0, g.qf)(tG.current?.parentNode, tG.current);
                                            e && null != t
                                                ? ((0, g.tl)(t), t.addEventListener(g.Wb, na), J?.(!0), t6(c.oA.LG))
                                                : e ||
                                                  null == t ||
                                                  (t.removeEventListener(g.Wb, na), J?.(!1), (0, g.sP)(t), t6(c.oA.MD)),
                                                tU(e);
                                        },
                                        handleSeekBackBtnClick: ns,
                                        handleSeekForwardBtnClick: nl,
                                        autoHideVolumeSlider: eP,
                                        handleControlBarPendingInteraction: tu,
                                        onVolumeChange: function (e) {
                                            tC(e), ee?.(e);
                                        },
                                        onMutedChange: function (e) {
                                            tR(e), et?.(e);
                                        },
                                        onVolumeExpandedChange: function (e) {
                                            ty(e);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    null != eh &&
                        (0, i.jsx)("div", {
                            className: w.MU,
                            children: eh({
                                playerState: eJ,
                                isControlBarExpanded: ni,
                                controlBarAnimationSpring: nA,
                                videoRef: tG,
                                isActive: tg,
                                isVolumeExpanded: tL,
                            }),
                        }),
                    !tg &&
                        (0, i.jsx)("div", {
                            className: w.mF,
                            ref: te,
                            children: (0, i.jsx)(h.u, { size: "xs", color: "currentColor", className: w.z_ }),
                        }),
                    (0, i.jsx)(o.P, {}),
                ],
            }),
        });
        return (0, i.jsx)(o.Jh, { enabled: tP, children: nN });
    });
