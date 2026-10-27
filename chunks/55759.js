(n.d(t, { A: () => ei }), n(321073));
var r = n(477900),
    l = n(582128),
    u = n(503698),
    i = n.n(u),
    s = n(399513),
    a = n(462180),
    o = n(337836),
    c = n(17928),
    d = n(876230),
    E = n(645577),
    _ = n(231723),
    f = n(717421),
    p = n(939249),
    m = n(289873),
    S = n(408278),
    v = n(789645),
    C = n(782134),
    A = n(113494),
    h = n(834730),
    g = n(964486),
    I = n(775602),
    D = n(607470),
    T = n(53200),
    R = n(613373),
    O = n(683574),
    L = n(906892),
    N = n(544180),
    k = n(723702),
    P = n(475815),
    b = n(427495),
    x = n(738822),
    y = n(405670),
    V = n(291749),
    U = n(590202),
    Q = n(851936),
    M = n(792620),
    w = n(753386),
    B = n(795068),
    F = n(678968),
    Y = n(576199),
    j = n(163961),
    H = n(758423),
    G = n(103515),
    K = n(854356),
    $ = n(721092),
    W = n(879371);
function q(e) {
    let {
            targetSec: t,
            isFullyVisible: n,
            percent: u,
            animate: i,
            interactionEnabled: s,
            isQuestCompleted: a,
            backgroundColor: o,
            preloadedBuffers: c,
            durationSec: d,
            maxSeekableTime: E,
            playerState: _,
            onClick: f,
            onScrubBack: p,
            onScrubForward: m,
            "data-testid": S,
        } = e,
        { quest: v, sourceQuestContent: C } = l.useContext(B.a),
        { questConfig: A } = l.useContext(B.l),
        h = (0, $.A)({ targetSec: t, quest: v, sourceQuestContent: C, questConfig: A, clickable: !0 });
    return (0, r.jsx)(R.uI, {
        isFullyVisible: n,
        percent: u,
        animate: i,
        interactionEnabled: s,
        playerState: _,
        backgroundColor: o,
        preloadedBuffers: c,
        durationSec: d,
        maxSeekableTime: E,
        segmentBorderRadius: 99,
        progressClassName: a ? W.s : W.V,
        timelineHeightPx: 4,
        initialTimelineHeightPx: 4,
        onClick: f,
        onScrubBack: p,
        onScrubForward: m,
        indicatorConfig: h,
        onIndicatorSeek: f,
        "data-testid": S,
    });
}
var z = n(297264),
    X = n(559106),
    Z = n(364522),
    J = n(862649);
function ee(e) {
    let { quest: t, onClose: n } = e,
        u = (0, y.Kr)((e) => e.transcript);
    l.useEffect(() => {
        let e = (0, V.tW)(t, V.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == u ||
            u.questId !== t.id ||
            u.fetchStatus === y.Lx.NONE ||
            (u.fetchStatus === y.Lx.SUCCESS && e?.url !== u.url)) &&
            (0, b.qY)(t);
    }, [u, t]);
    let i = u?.questId === t.id && u?.fetchStatus === y.Lx.SUCCESS ? (u.text ?? "") : "",
        s = l.useMemo(
            () =>
                i
                    .split("\n")
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [i],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: J.Mm,
                children: [
                    (0, r.jsx)(z.D, { variant: "heading-md/semibold", color: "currentColor", children: "Transcript" }),
                    (0, r.jsx)(p.D, {
                        onClick: n,
                        className: J.GI,
                        children: (0, r.jsx)(v.P, { color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsx)(X.vN, {
                children: (0, r.jsx)(Z.Ar, {
                    className: J.j5,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: J.FN,
                        children:
                            u?.fetchStatus === y.Lx.FETCHING
                                ? (0, r.jsx)("div", {
                                      className: J.Cw,
                                      children: (0, r.jsx)(m.y, { type: m.y.Type.WANDERING_CUBES }),
                                  })
                                : (0, r.jsx)(z.D, {
                                      variant: "heading-md/normal",
                                      color: "text-muted",
                                      children: s.map((e, t) => (0, r.jsx)("p", { children: e }, t)),
                                  }),
                    }),
                }),
            }),
        ],
    });
}
var et = n(190107),
    en = n(652215),
    er = n(838541),
    el = n(105292);
let eu = { tension: 250, friction: 5, clamp: !0 };
function ei(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: u,
            autoFocus: $ = !0,
            parentTransitionState: W,
            openedAtMs: z,
            orientation: X,
            videoUrlOverride: Z,
        } = e,
        {
            sourceQuestContent: ei,
            quest: es,
            videoSessionId: ea,
            onClose: eo,
            isFullscreenEnabled: ec,
            setIsFullscreenEnabled: ed,
        } = l.useContext(B.a),
        eE = (0, y.Kr)((e) => e.transcriptEnabled),
        e_ = (0, y.Kr)((e) => e.setTranscriptEnabled),
        ef = (0, y.Kr)((e) => e.captionEnabled),
        ep = (0, y.Kr)((e) => e.setCaptionEnabled),
        { focused: em, focusedChanged: eS } = (0, R.A7)(),
        { visible: ev, visibleChanged: eC, targetRef: eA } = (0, R.O7)(),
        [eh, eg] = l.useState(!0 === u ? j.Q6.PLAYING : j.Q6.PAUSED),
        [eI, eD] = l.useState(!1),
        [eT, eR] = l.useState(!1),
        eO = (0, M.Yh)(es),
        [eL, eN] = l.useState(eO.percentComplete),
        ek = l.useCallback((e) => {
            (ez(null), eN(e));
        }, []),
        [eP, eb] = l.useState(!1),
        [ex, ey] = l.useState(!0),
        [eV, eU] = l.useState(!1),
        [eQ, eM] = l.useState([]),
        [ew, eB] = l.useState(N.A.getEffectiveConnectionSpeed()),
        [eF, eY] = l.useState(0),
        [ej, eH] = l.useState(0),
        [eG, eK] = l.useState(!1),
        [e$, eW] = l.useState(!1),
        [eq, ez] = l.useState(null),
        eX = l.useRef(!0),
        eZ = l.useRef(null),
        eJ = l.useRef(null),
        e0 = (0, y.Kr)((e) => e.videoProgress[es.id] ?? y.yc, a.x),
        e1 = (0, y.Kr)((e) => e.setVideoProgress),
        e2 = (0, y.Kr)((e) => e.muted),
        e7 = (0, y.Kr)((e) => e.setMuted),
        e6 = (0, y.Kr)((e) => e.volume),
        e5 = (0, y.Kr)((e) => e.setVolume),
        e8 = (0, c.bG)([I.Ay], () => I.Ay.useReducedMotion),
        e9 = (0, l.useRef)(null),
        e4 = (0, l.useRef)(null),
        e3 = (0, l.useRef)(null),
        te = l.useRef(!0),
        tt = es.userStatus?.completedAt != null,
        tn = l.useMemo(() => es.config.features.includes(et.Li.FULL_EPISODE_VIDEO_QUEST), [es.config.features]),
        tr = l.useRef(!1),
        [tl, tu] = l.useState(null),
        [ti, ts] = l.useState(!1),
        [ta, to] = l.useState(null),
        tc = Math.max(e0.maxTimestampSec, eO.progressSeconds),
        td = tt ? (e9.current?.duration ?? 0) : (0, w.vd)(tc, e0.duration),
        tE = l.useMemo(() => (0, Q.L)({ quest: es, location: et.rE.VIDEO_MODAL }), [es]),
        t_ = (0, E.g)(tt, e0, eO.progressSeconds),
        [tf, tp] = l.useState(j.oA.MD),
        tm = { [j.oA.SM]: 56, [j.oA.MD]: 56, [j.oA.LG]: 64 };
    (0, g.u5)(() => {
        te.current &&
            ((te.current = !1),
            eB(N.A.getEffectiveConnectionSpeed()),
            tt && e0.timestampSec >= e0.duration && e1(es.id, 0, e0.duration));
    });
    let { videoAsset: tS, videoAssetType: tv, hlsRef: tC, hls: tA, onFirstChunkLoaded: th } = (0, H.A)(e9, ew, t_, Z),
        {
            trackQuestVideoLoadingStarted: tg,
            trackQuestVideoLoadingEnded: tI,
            trackQuestVideoProgressed: tD,
            trackQuestVideoResumed: tT,
            trackQuestVideoPaused: tR,
            trackQuestVideoFocusChange: tO,
            trackQuestContentClick: tL,
            trackQuestVideoBufferingStarted: tN,
            trackQuestVideoBufferingEnded: tk,
            trackQuestVideoSegmentWatched: tP,
            trackQuestVideoTimeToFirstFrame: tb,
            trackQuestVideoFullscreenChanged: tx,
            trackQuestVideoError: ty,
            trackQuestVideoVolumeChanged: tV,
            handleEngagedViewProgress: tU,
        } = (0, G.A)({
            questId: es.id,
            isQuestCompleted: tt,
            videoRef: e9,
            hlsRef: tC,
            hls: tA,
            videoSessionId: ea,
            videoAssetId: tv,
            sourceQuestContent: ei,
            logger: tE,
            isFullEpisodeVideoQuest: tn,
        });
    (0, K.A)({ videoAssetUrl: tS?.url, videoRef: e9, hls: tA, videoAssetType: tv });
    let tQ = l.useRef(null),
        tM = l.useCallback(() => {
            (clearTimeout(tQ.current),
                ts(!0),
                (tQ.current = setTimeout(() => {
                    ts(!1);
                }, 1e3)));
        }, []);
    l.useEffect(
        () => () => {
            null != tQ.current && clearTimeout(tQ.current);
        },
        [],
    );
    let tw = l.useCallback(() => e9.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: tB,
            handleLoadEnd: tF,
            handleFirstFrame: tY,
            handleSeek: tj,
        } = (0, R.Yr)({ getCurrentVideoTime: tw, onAnalytics: tP, emitIntervalMs: R.KI, minSegmentDurationMs: R._4 }),
        tH = l.useRef(tB);
    l.useEffect(() => {
        tH.current(eh, null);
    }, []);
    let tG = l.useCallback(
        (e) => {
            if ((tE.info(`[QV] | updatePlayerState | playerState: ${e}`), tB(e, null), eg(e), null != e9.current))
                switch (e) {
                    case j.Q6.PLAYING:
                        (e9.current.paused && tT(tl), tu(null), e9.current.play());
                        break;
                    case j.Q6.PAUSED:
                        (e9.current.pause(),
                            tU({
                                positionSeconds: e9.current.currentTime,
                                durationSeconds: e9.current.duration,
                                isPlaying: !1,
                            }),
                            (eX.current = !1));
                        break;
                    case j.Q6.ENDED:
                        e_(!1);
                }
        },
        [tB, tT, tl, e_, tE, tU],
    );
    (l.useEffect(() => {
        tR(tl);
    }, [tl, tR]),
        l.useEffect(() => {
            eS && tO(em, eh);
        }, [em, eS, eh, tO]));
    let tK = l.useCallback(
        (e) => {
            (tt ||
                es.userStatus?.enrolledAt == null ||
                (tE.info(`[QV] sendServerProgressUpdate: ${e}`), (0, w.zv)(es, e)),
                tD());
        },
        [tt, es, tE, tD],
    );
    (l.useEffect(() => {
        (W !== _.ip.HIDDEN &&
            W !== _.ip.EXITING &&
            W !== _.ip.EXITED &&
            (null == W || !eC || ev || tt) &&
            (!eS || em || tt)) ||
            null == e9.current ||
            eh !== j.Q6.PLAYING ||
            (tE.info(
                `[QV] | Pausing video | playerState: ${eh}, parentTransitionState: ${W}, visible: ${ev}, focused: ${em}, isQuestCompleted: ${tt}`,
            ),
            tG(j.Q6.PAUSED),
            tt ? tn && tu(x.Yg.ANOTHER_MODAL_OPENED) : tu(x.Yg.LOST_FOCUS));
    }, [W, em, eS, ev, eC, eh, tt, tG, tK, tE, tn]),
        l.useEffect(() => {
            tl === x.Yg.ANOTHER_MODAL_OPENED &&
                W === _.ip.ENTERED &&
                eh === j.Q6.PAUSED &&
                tn &&
                em &&
                (tE.info("[QV] | Resuming full episode video after modal re-entered"), tG(j.Q6.PLAYING));
        }, [W, eh, tE, tG, tl, tn, em]));
    let [t$, tW] = l.useState(!1),
        tq = l.useRef(null),
        tz = l.useRef(performance.now()),
        tX = l.useCallback(() => {
            (null != tq.current && clearTimeout(tq.current),
                eh !== j.Q6.PLAYING ||
                    (tq.current = setTimeout(
                        () => {
                            eh === j.Q6.PLAYING && tW(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tz.current)),
                    )));
        }, [eh]);
    function tZ() {
        (tW(!1), (tz.current = performance.now()), tX());
    }
    l.useEffect(() => {
        if (eh !== j.Q6.PLAYING) {
            (tW(!1), null != tq.current && clearTimeout(tq.current));
            return;
        }
        return (
            tX(),
            () => {
                null != tq.current && clearTimeout(tq.current);
            }
        );
    }, [eh, tX]);
    let tJ = !t$ && (eT || eI || eh === j.Q6.ENDED),
        t0 = l.useCallback(() => {
            tE.info("[QV] | handleFullScreenExit");
            let e = (0, P.qf)(e9.current?.parentNode, e9.current);
            null == e || (0, P._U)(e) || (e.removeEventListener(P.Wb, t0), ed(!1), tx(!1), tp(j.oA.MD));
        }, [ed, tE, tx]);
    function t1() {
        if (null == e9.current) return;
        let e = Math.max(e9.current.currentTime - 10, 0);
        (tE.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
            t5(e),
            eh === j.Q6.ENDED && tG(j.Q6.PAUSED),
            tL(x.uF.VIDEO_MODAL, U.Cy.SEEK_BACKWARD));
    }
    function t2() {
        if (null == e9.current || !nc) return;
        let e = Math.min(e9.current.currentTime + 10, td);
        (tE.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
            t5(e),
            eh !== j.Q6.ENDED && e >= e9.current.duration && tG(j.Q6.ENDED),
            tL(x.uF.VIDEO_MODAL, U.Cy.SEEK_FORWARD));
    }
    (l.useEffect(() => {
        let e = e9.current;
        return () => {
            let t = (0, P.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(P.Wb, t0);
        };
    }, [t0]),
        l.useEffect(() => {
            function e(e) {
                return e3.current?.(e);
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, []));
    let t7 = l.useCallback(
            (e) => {
                (e5(e), tV(e));
            },
            [e5, tV],
        ),
        t6 = l.useCallback(
            (e) => {
                e7(e);
            },
            [e7],
        ),
        t5 = l.useCallback(
            (e) => {
                null != e9.current &&
                    (tE.info(`[QV] | seekTimeline | timeSec: ${e}`),
                    ez((e / (e9.current.duration ?? 1)) * 100),
                    tj(),
                    eb(!0),
                    (e9.current.currentTime = e),
                    e1(es.id, e, e9.current.duration));
            },
            [e9, e1, es.id, tj, tE],
        );
    (l.useEffect(() => {
        let e = e9.current;
        if (null != e)
            return (
                e.addEventListener("seeking", t),
                () => {
                    e.removeEventListener("seeking", t);
                }
            );
        function t() {
            if (null == e) return;
            let t = (0, T.LA)();
            null != t &&
                null != tC.current &&
                tC.current.mainForwardBufferInfo?.len === 0 &&
                tC.current.trigger(t.Events.BUFFER_FLUSHING, {
                    startOffset: e.currentTime,
                    endOffset: 1 / 0,
                    type: "video",
                });
        }
    }, [e9, tC]),
        (0, R.C1)({
            videoRef: e9,
            enabled: !tt,
            onPipPause: () => {
                (tG(j.Q6.PAUSED), tu(x.Yg.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (tG(j.Q6.PAUSED), tu(x.Yg.LOST_FOCUS));
            },
        }));
    let t8 = l.useRef(!1);
    function t9() {
        if (null != e9.current)
            switch ((tE.info(`[QV] | handlePlaybackBtnClick | playerState: ${eh}`), tM(), eh)) {
                case j.Q6.ENDED:
                    (t5(0), tG(j.Q6.PLAYING));
                    break;
                case j.Q6.PLAYING:
                    (tG(j.Q6.PAUSED), tu(x.Yg.PAUSE_BUTTON));
                    break;
                default:
                    tG(j.Q6.PLAYING);
            }
    }
    let t4 = l.useCallback(() => {
        if (
            null == e9.current ||
            (tE.info(`[QV] | handleTracksLoaded: textTracks.length: ${e9.current.textTracks.length}`),
            0 === e9.current.textTracks.length)
        )
            return;
        let e = e9.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, R.Ce)(n) &&
                    ((n.id = `cue-${t}`),
                    (n.onenter = () => {
                        to(n);
                    }),
                    (n.onexit = () =>
                        (function (e) {
                            to((t) => (t?.id === e.id ? null : t));
                        })(n)));
            }
    }, [e9, tE]);
    l.useEffect(() => {
        if (null == e4.current) return;
        let e = e4.current;
        return (
            e.addEventListener("load", t4),
            () => {
                null != e && e.removeEventListener("load", t4);
            }
        );
    }, [e4, t4]);
    let t3 = l.useCallback(
            (e) => {
                (tE.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${e9.current?.currentTime}, videoAssetId: ${tv}, connectionSpeed: ${ew}`,
                ),
                    ty(e));
            },
            [ew, ty, e9, tv, tE],
        ),
        ne = l.useRef(!1);
    function nt(e) {
        (tE.info(`[QV] | handleCanPlay: playerState: ${eh}`),
            null != e9.current &&
                eh === j.Q6.PLAYING &&
                (tE.info("[QV] | handleCanPlay: did NOT early return"),
                ex && (tE.info(`[QV] | handleCanPlay: loadingFirstChunk: ${ex}`), ey(!1)),
                eV &&
                    (tE.info(`[QV] | handleCanPlay: waitingForChunk: ${eV}`),
                    tk(null != eJ.current ? performance.now() - eJ.current : null),
                    eU(!1)),
                tE.info("[QV] | handleCanPlay: updating player state to playing"),
                tG(j.Q6.PLAYING)));
    }
    (l.useEffect(() => {
        null != tS || ne.current || ((ne.current = !0), ty(j.SB.NO_VALID_SOURCE));
    }, [tS, ty, ne]),
        l.useEffect(() => {
            if (!eP) return;
            let e = setTimeout(() => {
                eb(!1);
            }, 1e3);
            return () => clearTimeout(e);
        }, [eP]));
    let [{ controlBarAnimSpring: nn }, nr] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: eu,
            onStart: () => {
                eW(!1);
            },
            onRest: (e) => {
                1 === e.value && eW(!0);
            },
        })),
        nl = (0, l.useRef)(null),
        [{ captionHeightSpring: nu }, ni] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: eu }));
    (l.useEffect(
        () => (
            ni({ captionHeightSpring: ef && null != ta ? (nl.current?.clientHeight ?? 0) : 0, immediate: e8 }),
            () => {
                nu.stop();
            }
        ),
        [ef, ni, e8, ta, nu],
    ),
        l.useEffect(
            () => (
                nr({ controlBarAnimSpring: tJ || eG ? 1 : 0, immediate: e8 }),
                () => {
                    nn.stop();
                }
            ),
            [tJ, nr, e8, eG, nn],
        ));
    let ns = eh === j.Q6.ENDED,
        na = l.useMemo(() => (0, V.tW)(es, V.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [es]),
        no = l.useMemo(() => (0, V.tW)(es, V.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [es]),
        nc = tt || tc >= (e9.current?.currentTime ?? 0) + 1,
        nd = l.useMemo(() => null === (0, V.tW)(es, V.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [es]),
        nE = tt && e$,
        n_ = (0, r.jsx)(L.BK, {
            children: (0, r.jsx)(O.pT, {
                isActive: !0,
                isControlBarExpanded: tJ,
                activeLayer: ec ? L.$W : void 0,
                isFullscreen: ec,
                videoRef: e9,
                children: (0, r.jsx)(p.D, {
                    className: J.W6,
                    "data-fullscreen": ec,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: -1,
                    onMouseEnter: function () {
                        (eD(!0),
                            tW(!1),
                            (tz.current = performance.now()),
                            null != tq.current && clearTimeout(tq.current));
                    },
                    onMouseLeave: function () {
                        (eD(!1), tW(!1));
                    },
                    onMouseMove: tZ,
                    onKeyDown: tZ,
                    children: (0, r.jsxs)("div", {
                        className: i()(J.NS, { [J.DO]: "portrait" === X, [J.r7]: "landscape" === X }),
                        style: { "--custom-footer-bottom": "4px" },
                        children: [
                            ns && (0, r.jsx)(F.A, { videoRef: e9, onTrackQuestContentClick: tL, orientation: X }),
                            (0, r.jsxs)(D.A, {
                                ref: (e) => {
                                    ((e9.current = e), (eA.current = e));
                                },
                                autoPlay: u,
                                playsInline: !0,
                                mediaLayoutType: ec ? er.dG.STATIC : er.dG.RESPONSIVE,
                                className: i()({ [J.R]: ns, [J.IR]: !0 }),
                                controls: !1,
                                poster: na?.url,
                                disablePictureInPicture: !0,
                                "data-testid": "discord-web-video-player-video",
                                onTimeUpdate: function (e) {
                                    if (null == e9.current) return;
                                    tU({
                                        positionSeconds: e9.current.currentTime,
                                        durationSeconds: e9.current.duration,
                                        isPlaying: !e9.current.paused,
                                    });
                                    let r = e9.current.currentTime >= t && !tr.current && tn;
                                    if (e9.current.currentTime >= eF || r) {
                                        var l;
                                        (tE.info(
                                            `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${e9.current.currentTime}`,
                                        ),
                                            (l = e9.current.currentTime) >= t && (tr.current = !0),
                                            eY(l + et.aA + Math.random() * et.A6),
                                            tK(l));
                                    }
                                    (e9.current.currentTime >= ej &&
                                        (eH(e9.current.currentTime + 1),
                                        (0, b.Gn)(es.id, eO.taskType, e9.current.currentTime),
                                        n(e9.current.currentTime)),
                                        e1(es.id, e9.current.currentTime, e9.current.duration),
                                        ek((e9.current.currentTime / e9.current.duration) * 100));
                                },
                                onEnded: function (e) {
                                    (null != e9.current &&
                                        (tK(e9.current.duration + 1),
                                        tE.info(
                                            `[QV] | handleEnded: sending progress update: ${e9.current.duration + 1}`,
                                        ),
                                        e1(es.id, e9.current.duration, e9.current.duration)),
                                        tG(j.Q6.ENDED),
                                        eU(!1));
                                },
                                onLoadedData: function (e) {
                                    (tE.info(`[QV] | handleLoadedData: loadingFirstChunk: ${ex}`),
                                        ex &&
                                            (tI(null != eZ.current ? performance.now() - eZ.current : null),
                                            ey(!1),
                                            th()));
                                },
                                onLoadedMetadata: function (e) {
                                    null != e9.current &&
                                        (tE.info(`[QV] | handleLoadedMetadata | videoAssetId: ${tv}`),
                                        tF(null),
                                        tv !== V.fY.VIDEO_PLAYER_VIDEO_HLS && t5(t_),
                                        e2 ? (e9.current.volume = 0) : (e9.current.volume = e6));
                                },
                                onLoadStart: function () {
                                    ((eZ.current = performance.now()),
                                        (t8.current = !1),
                                        tg(ew),
                                        tE.info(`[QV] | handleLoadStart | loadingStartTime: ${eZ.current}`));
                                },
                                onPlaying: function () {
                                    if (!eX.current) return;
                                    let e = performance.now() - z;
                                    (tE.info(`[QV] | \u{23F0} Video FCP: ${e}ms`), tb(e), (eX.current = !1));
                                },
                                onWaiting: function (e) {
                                    ((eJ.current = performance.now()),
                                        tE.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eJ.current}`),
                                        tN(),
                                        eU(!0));
                                },
                                onProgress: function (e) {
                                    if (null == e9.current) return;
                                    tE.info(
                                        `[QV] | handleLoadingHasProgressed: buffered.length: ${e9.current.buffered.length}`,
                                    );
                                    let t = [];
                                    for (let e = 0; e < e9.current.buffered.length; e++) {
                                        let n = e9.current.buffered.start(e),
                                            r = e9.current.buffered.end(e);
                                        r - n < 1 ||
                                            t.push({
                                                start: n / e9.current.duration,
                                                size: (r - n) / e9.current.duration,
                                            });
                                    }
                                    eM(t);
                                },
                                onCanPlay: nt,
                                onCanPlayThrough: nt,
                                onSeeked: function () {
                                    (tE.info("[QV] | handleSeeked"), t8.current || ((t8.current = !0), tY(0)));
                                },
                                onAbort: function () {
                                    return t3(j.SB.ABORT);
                                },
                                onError: function () {
                                    return t3(j.SB.ERROR);
                                },
                                onEmptied: function () {
                                    return t3(j.SB.EMPTIED);
                                },
                                onStalled: function () {
                                    return t3(j.SB.STALLED);
                                },
                                onClick: function () {
                                    (tE.info("[QV] | handleVideoClick"), t9());
                                },
                                crossOrigin: "anonymous",
                                children: [
                                    null != no &&
                                        (0, r.jsx)("track", {
                                            ref: e4,
                                            src: no.url,
                                            label: "English",
                                            kind: "captions",
                                            srcLang: "en",
                                            default: !0,
                                        }),
                                    null != tS &&
                                        tv !== V.fY.VIDEO_PLAYER_VIDEO_HLS &&
                                        null != tS.mimetype &&
                                        (0, r.jsx)("source", {
                                            onError: function () {
                                                return t3(j.SB.SOURCE_ERROR);
                                            },
                                            src: tS.url,
                                            type: tS.mimetype,
                                        }),
                                ],
                            }),
                            (ex || eV) &&
                                eh === j.Q6.PLAYING &&
                                null != tS &&
                                (0, r.jsx)("span", {
                                    className: J.S,
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(m.y, { type: m.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(R.DQ, {
                                message: (function (e) {
                                    let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                                    return t
                                        ? n === j.Q6.PAUSED && (r === d.KB.FOCUS || r === d.KB.PICTURE_IN_PICTURE)
                                            ? el.intl.string(el.t.w6PeBF)
                                            : null
                                        : (0, k.isWeb)()
                                          ? el.intl.string(el.t["E1du/q"])
                                          : el.intl.string(el.t["rStN/7"]);
                                })({
                                    hasVideoAsset: null != tS,
                                    playerState: eh,
                                    pauseReason: (function (e) {
                                        switch (e) {
                                            case x.Yg.PAUSE_BUTTON:
                                                return d.KB.USER;
                                            case x.Yg.LOST_FOCUS:
                                                return d.KB.FOCUS;
                                            case x.Yg.MODAL_CLOSED:
                                                return d.KB.VISIBILITY;
                                            case x.Yg.PICTURE_IN_PICTURE:
                                                return d.KB.PICTURE_IN_PICTURE;
                                            default:
                                                return null;
                                        }
                                    })(tl),
                                }),
                                showOverlay: null == tS,
                            }),
                            (0, r.jsxs)("div", {
                                className: J.R4,
                                "data-testid": "discord-web-video-player-share-btn",
                                children: [
                                    (0, r.jsx)(Y.A, {}),
                                    (0, r.jsx)(S.K, {
                                        variant: "overlay-secondary",
                                        icon: v.P,
                                        "aria-label": el.intl.string(el.t.cpT0Cq),
                                        onClick: eo,
                                    }),
                                ],
                            }),
                            eE &&
                                eh !== j.Q6.ENDED &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (eh === j.Q6.PAUSED && tG(j.Q6.PLAYING), e_(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: J.BG }),
                                        }),
                                        (0, r.jsx)(s.animated.div, {
                                            className: i()(J.xr, { [J.MZ]: "portrait" === X }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, s.to)([nn, nu], (e, t) => `${e * tm[tf] + t}px`),
                                            },
                                            children: (0, r.jsx)(ee, {
                                                quest: es,
                                                onClose: function () {
                                                    (e_(!1), tL(x.uF.VIDEO_MODAL, U.Cy.TRANSCRIPT_DISABLE));
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(s.animated.div, {
                                className: J.Jp,
                                style: {
                                    opacity: (0, s.to)([nn.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                },
                            }),
                            ti &&
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: i()(J.yf, {
                                            [J.ZH]: eh === j.Q6.PLAYING,
                                            [J.v7]: eh === j.Q6.PAUSED,
                                        }),
                                        style: { "--custom-play-pause-pop-ms": "1000ms" },
                                        children:
                                            eh === j.Q6.PLAYING
                                                ? (0, r.jsx)(C.PlayIcon, { className: J.PK })
                                                : (0, r.jsx)(A.PauseIcon, { className: J.PK }),
                                    },
                                    eh,
                                ),
                            ef &&
                                null != ta &&
                                !ns &&
                                (0, r.jsx)(s.animated.div, {
                                    className: J.o$,
                                    ref: nl,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, s.to)(
                                            [nn.to({ range: [0, 1], output: [-20, -tm[tf]] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(h.E, {
                                        variant: "text-lg/semibold",
                                        color: "text-overlay-light",
                                        className: J.qh,
                                        children: ta.text,
                                    }),
                                }),
                            (0, r.jsxs)(s.animated.div, {
                                className: J.r8,
                                style: {
                                    height: (0, s.to)([nn.to({ range: [0, 1], output: [0, tm[tf]] })], (e) => `${e}px`),
                                },
                                children: [
                                    (0, r.jsx)(s.animated.div, {
                                        style: {
                                            transform: (0, s.to)(
                                                [nn.to({ range: [1, 0], output: [0, 1] })],
                                                (e) => `translateY(-${20 * e}px)`,
                                            ),
                                        },
                                        children: (0, r.jsx)(q, {
                                            percent: null != eq ? eq : eL,
                                            animate: !0 !== te.current && !eP,
                                            interactionEnabled: nE,
                                            playerState: eh,
                                            preloadedBuffers: tJ ? eQ : void 0,
                                            durationSec: e9.current?.duration ?? 1,
                                            isFullyVisible: tJ && e$,
                                            maxSeekableTime: tJ && e$ ? td : void 0,
                                            onClick: function (e) {
                                                nE && (t5(e), eh === j.Q6.ENDED && tG(j.Q6.PLAYING));
                                            },
                                            onScrubBack: t1,
                                            onScrubForward: t2,
                                            isQuestCompleted: tt,
                                            targetSec: t,
                                            "data-testid": "discord-web-video-player-timeline",
                                        }),
                                    }),
                                    (0, r.jsx)(s.animated.div, {
                                        className: J.uN,
                                        "data-testid": "discord-web-video-player-controls",
                                        style: {
                                            paddingTop: (0, s.to)(
                                                [nn.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e * e * 20}px`,
                                            ),
                                            paddingBottom: (0, s.to)(
                                                [nn.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e * e * 12}px`,
                                            ),
                                            pointerEvents: (0, s.to)([nn.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                                e < 0.3 ? "none" : "auto",
                                            ),
                                        },
                                        onFocus: function () {
                                            return eR(!0);
                                        },
                                        onBlur: function () {
                                            return eR(!1);
                                        },
                                        children: (0, r.jsx)(R.zZ, {
                                            playerState: eh,
                                            animSpring: nn,
                                            visible: tJ,
                                            seekForwardEnabled: nc,
                                            hideCaptionBtn: null == no,
                                            hideTranscriptBtn: nd,
                                            hideSkipButtons: "portrait" === X,
                                            hidePlaybackSpeedBtn: !0,
                                            size: tf,
                                            autoFocus: $,
                                            keyDownHandlerRef: e3,
                                            volume: e6,
                                            muted: e2,
                                            transcriptEnabled: eE,
                                            captionEnabled: ef,
                                            handlePlaybackBtnClick: t9,
                                            handleTranscriptBtnClick: function () {
                                                (e_(!eE),
                                                    tL(
                                                        x.uF.VIDEO_MODAL,
                                                        eE ? U.Cy.TRANSCRIPT_DISABLE : U.Cy.TRANSCRIPT_ENABLE,
                                                    ));
                                            },
                                            handleCaptionBtnClick: function () {
                                                (ep(!ef),
                                                    tL(
                                                        x.uF.VIDEO_MODAL,
                                                        ef
                                                            ? U.Cy.CLOSED_CAPTIONING_DISABLE
                                                            : U.Cy.CLOSED_CAPTIONING_ENABLE,
                                                    ));
                                            },
                                            handleFullScreenBtnClick: () => {
                                                let e = !ec;
                                                tE.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                                let t = (0, P.qf)(e9.current?.parentNode, e9.current);
                                                (e && null != t
                                                    ? ((0, P.tl)(t), t.addEventListener(P.Wb, t0), tx(!0), tp(j.oA.LG))
                                                    : e ||
                                                      null == t ||
                                                      (t.removeEventListener(P.Wb, t0),
                                                      tx(!1),
                                                      (0, P.sP)(t),
                                                      tp(j.oA.MD)),
                                                    ed(e));
                                            },
                                            handleSeekBackBtnClick: t1,
                                            handleSeekForwardBtnClick: t2,
                                            handleControlBarPendingInteraction: eK,
                                            onVolumeChange: t7,
                                            onMutedChange: t6,
                                            onVolumeExpandedChange: en.FXj,
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(o.P, {}),
                            (0, r.jsx)(L.bW, {}),
                        ],
                    }),
                }),
            }),
        });
    return (0, r.jsx)(o.Jh, { enabled: ec, children: n_ });
}
