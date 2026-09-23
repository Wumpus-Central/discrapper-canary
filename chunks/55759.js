(n.d(t, { A: () => es }), n(321073));
var r = n(477900),
    l = n(582128),
    i = n(503698),
    s = n.n(i),
    u = n(202091),
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
    x = n(683574),
    L = n(906892),
    O = n(544180),
    P = n(723702),
    N = n(475815),
    k = n(396813),
    b = n(738822),
    y = n(405670),
    V = n(291749),
    U = n(590202),
    Q = n(851936),
    M = n(792620),
    w = n(753386),
    B = n(795068),
    F = n(678968),
    j = n(576199),
    Y = n(163961),
    K = n(758423),
    H = n(103515),
    G = n(854356),
    $ = n(979204),
    q = n(451713);
function W(e) {
    let {
            targetSec: t,
            isFullyVisible: n,
            percent: i,
            animate: s,
            interactionEnabled: u,
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
        percent: i,
        animate: s,
        interactionEnabled: u,
        playerState: _,
        backgroundColor: o,
        preloadedBuffers: c,
        durationSec: d,
        maxSeekableTime: E,
        segmentBorderRadius: 99,
        progressClassName: a ? q.c : q.q,
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
        i = (0, y.Kr)((e) => e.transcript);
    l.useEffect(() => {
        let e = (0, V.tW)(t, V.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == i ||
            i.questId !== t.id ||
            i.fetchStatus === y.Lx.NONE ||
            (i.fetchStatus === y.Lx.SUCCESS && e?.url !== i.url)) &&
            (0, k.qY)(t);
    }, [i, t]);
    let s = i?.questId === t.id && i?.fetchStatus === y.Lx.SUCCESS ? (i.text ?? "") : "",
        u = l.useMemo(
            () =>
                s
                    .split("\n")
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [s],
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
                            i?.fetchStatus === y.Lx.FETCHING
                                ? (0, r.jsx)("div", {
                                      className: J.Cw,
                                      children: (0, r.jsx)(m.y, { type: m.y.Type.WANDERING_CUBES }),
                                  })
                                : (0, r.jsx)(z.D, {
                                      variant: "heading-md/normal",
                                      color: "text-muted",
                                      children: u.map((e, t) => (0, r.jsx)("p", { children: e }, t)),
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
    el = n(375708);
let ei = { tension: 250, friction: 5, clamp: !0 };
function es(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: i,
            autoFocus: $ = !0,
            parentTransitionState: q,
            openedAtMs: z,
            orientation: X,
            videoUrlOverride: Z,
        } = e,
        {
            sourceQuestContent: es,
            quest: eu,
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
        [eh, eg] = l.useState(!0 === i ? Y.Q6.PLAYING : Y.Q6.PAUSED),
        [eI, eD] = l.useState(!1),
        [eT, eR] = l.useState(!1),
        ex = (0, M.Yh)(eu),
        [eL, eO] = l.useState(ex.percentComplete),
        eP = l.useCallback((e) => {
            (ez(null), eO(e));
        }, []),
        [eN, ek] = l.useState(!1),
        [eb, ey] = l.useState(!0),
        [eV, eU] = l.useState(!1),
        [eQ, eM] = l.useState([]),
        [ew, eB] = l.useState(O.A.getEffectiveConnectionSpeed()),
        [eF, ej] = l.useState(0),
        [eY, eK] = l.useState(0),
        [eH, eG] = l.useState(!1),
        [e$, eq] = l.useState(!1),
        [eW, ez] = l.useState(null),
        eX = l.useRef(!0),
        eZ = l.useRef(null),
        eJ = l.useRef(null),
        e0 = (0, y.Kr)((e) => e.videoProgress[eu.id] ?? y.yc, a.x),
        e1 = (0, y.Kr)((e) => e.setVideoProgress),
        e7 = (0, y.Kr)((e) => e.muted),
        e6 = (0, y.Kr)((e) => e.setMuted),
        e2 = (0, y.Kr)((e) => e.volume),
        e8 = (0, y.Kr)((e) => e.setVolume),
        e5 = (0, c.bG)([I.Ay], () => I.Ay.useReducedMotion),
        e9 = (0, l.useRef)(null),
        e3 = (0, l.useRef)(null),
        e4 = (0, l.useRef)(null),
        te = l.useRef(!0),
        tt = eu.userStatus?.completedAt != null,
        tn = l.useMemo(() => eu.config.features.includes(et.Li.FULL_EPISODE_VIDEO_QUEST), [eu.config.features]),
        tr = l.useRef(!1),
        [tl, ti] = l.useState(null),
        [ts, tu] = l.useState(!1),
        [ta, to] = l.useState(null),
        tc = Math.max(e0.maxTimestampSec, ex.progressSeconds),
        td = tt ? (e9.current?.duration ?? 0) : (0, w.vd)(tc, e0.duration),
        tE = l.useMemo(() => (0, Q.L)({ quest: eu, location: et.rE.VIDEO_MODAL }), [eu]),
        t_ = (0, E.g)(tt, e0, ex.progressSeconds),
        [tf, tp] = l.useState(Y.oA.MD),
        tm = { [Y.oA.SM]: 56, [Y.oA.MD]: 56, [Y.oA.LG]: 64 };
    (0, g.u5)(() => {
        te.current &&
            ((te.current = !1),
            eB(O.A.getEffectiveConnectionSpeed()),
            tt && e0.timestampSec >= e0.duration && e1(eu.id, 0, e0.duration));
    });
    let { videoAsset: tS, videoAssetType: tv, hlsRef: tC, hls: tA, onFirstChunkLoaded: th } = (0, K.A)(e9, ew, t_, Z),
        {
            trackQuestVideoLoadingStarted: tg,
            trackQuestVideoLoadingEnded: tI,
            trackQuestVideoProgressed: tD,
            trackQuestVideoResumed: tT,
            trackQuestVideoPaused: tR,
            trackQuestVideoFocusChange: tx,
            trackQuestContentClick: tL,
            trackQuestVideoBufferingStarted: tO,
            trackQuestVideoBufferingEnded: tP,
            trackQuestVideoSegmentWatched: tN,
            trackQuestVideoTimeToFirstFrame: tk,
            trackQuestVideoFullscreenChanged: tb,
            trackQuestVideoError: ty,
            trackQuestVideoVolumeChanged: tV,
            handleEngagedViewProgress: tU,
        } = (0, H.A)({
            questId: eu.id,
            isQuestCompleted: tt,
            videoRef: e9,
            hlsRef: tC,
            hls: tA,
            videoSessionId: ea,
            videoAssetId: tv,
            sourceQuestContent: es,
            logger: tE,
            isFullEpisodeVideoQuest: tn,
        });
    (0, G.A)({ videoAssetUrl: tS?.url, videoRef: e9, hls: tA, videoAssetType: tv });
    let tQ = l.useRef(null),
        tM = l.useCallback(() => {
            (clearTimeout(tQ.current),
                tu(!0),
                (tQ.current = setTimeout(() => {
                    tu(!1);
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
            handleFirstFrame: tj,
            handleSeek: tY,
        } = (0, R.Yr)({ getCurrentVideoTime: tw, onAnalytics: tN, emitIntervalMs: R.KI, minSegmentDurationMs: R._4 }),
        tK = l.useRef(tB);
    l.useEffect(() => {
        tK.current(eh, null);
    }, []);
    let tH = l.useCallback(
        (e) => {
            if ((tE.info(`[QV] | updatePlayerState | playerState: ${e}`), tB(e, null), eg(e), null != e9.current))
                switch (e) {
                    case Y.Q6.PLAYING:
                        (e9.current.paused && tT(tl), ti(null), e9.current.play());
                        break;
                    case Y.Q6.PAUSED:
                        (e9.current.pause(),
                            tU({
                                positionSeconds: e9.current.currentTime,
                                durationSeconds: e9.current.duration,
                                isPlaying: !1,
                            }),
                            (eX.current = !1));
                        break;
                    case Y.Q6.ENDED:
                        e_(!1);
                }
        },
        [tB, tT, tl, e_, tE, tU],
    );
    (l.useEffect(() => {
        tR(tl);
    }, [tl, tR]),
        l.useEffect(() => {
            eS && tx(em, eh);
        }, [em, eS, eh, tx]));
    let tG = l.useCallback(
        (e) => {
            (tt ||
                eu.userStatus?.enrolledAt == null ||
                (tE.info(`[QV] sendServerProgressUpdate: ${e}`), (0, w.zv)(eu, e)),
                tD());
        },
        [tt, eu, tE, tD],
    );
    (l.useEffect(() => {
        (q !== _.ip.HIDDEN &&
            q !== _.ip.EXITING &&
            q !== _.ip.EXITED &&
            (null == q || !eC || ev || tt) &&
            (!eS || em || tt)) ||
            null == e9.current ||
            eh !== Y.Q6.PLAYING ||
            (tE.info(
                `[QV] | Pausing video | playerState: ${eh}, parentTransitionState: ${q}, visible: ${ev}, focused: ${em}, isQuestCompleted: ${tt}`,
            ),
            tH(Y.Q6.PAUSED),
            tt ? tn && ti(b.Yg.ANOTHER_MODAL_OPENED) : ti(b.Yg.LOST_FOCUS));
    }, [q, em, eS, ev, eC, eh, tt, tH, tG, tE, tn]),
        l.useEffect(() => {
            tl === b.Yg.ANOTHER_MODAL_OPENED &&
                q === _.ip.ENTERED &&
                eh === Y.Q6.PAUSED &&
                tn &&
                em &&
                (tE.info("[QV] | Resuming full episode video after modal re-entered"), tH(Y.Q6.PLAYING));
        }, [q, eh, tE, tH, tl, tn, em]));
    let [t$, tq] = l.useState(!1),
        tW = l.useRef(null),
        tz = l.useRef(performance.now()),
        tX = l.useCallback(() => {
            (null != tW.current && clearTimeout(tW.current),
                eh !== Y.Q6.PLAYING ||
                    (tW.current = setTimeout(
                        () => {
                            eh === Y.Q6.PLAYING && tq(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tz.current)),
                    )));
        }, [eh]);
    function tZ() {
        (tq(!1), (tz.current = performance.now()), tX());
    }
    l.useEffect(() => {
        if (eh !== Y.Q6.PLAYING) {
            (tq(!1), null != tW.current && clearTimeout(tW.current));
            return;
        }
        return (
            tX(),
            () => {
                null != tW.current && clearTimeout(tW.current);
            }
        );
    }, [eh, tX]);
    let tJ = !t$ && (eT || eI || eh === Y.Q6.ENDED),
        t0 = l.useCallback(() => {
            tE.info("[QV] | handleFullScreenExit");
            let e = (0, N.qf)(e9.current?.parentNode, e9.current);
            null == e || (0, N._U)(e) || (e.removeEventListener(N.Wb, t0), ed(!1), tb(!1), tp(Y.oA.MD));
        }, [ed, tE, tb]);
    function t1() {
        if (null == e9.current) return;
        let e = Math.max(e9.current.currentTime - 10, 0);
        (tE.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
            t8(e),
            eh === Y.Q6.ENDED && tH(Y.Q6.PAUSED),
            tL(b.uF.VIDEO_MODAL, U.Cy.SEEK_BACKWARD));
    }
    function t7() {
        if (null == e9.current || !nc) return;
        let e = Math.min(e9.current.currentTime + 10, td);
        (tE.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
            t8(e),
            eh !== Y.Q6.ENDED && e >= e9.current.duration && tH(Y.Q6.ENDED),
            tL(b.uF.VIDEO_MODAL, U.Cy.SEEK_FORWARD));
    }
    (l.useEffect(() => {
        let e = e9.current;
        return () => {
            let t = (0, N.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(N.Wb, t0);
        };
    }, [t0]),
        l.useEffect(() => {
            function e(e) {
                return e4.current?.(e);
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, []));
    let t6 = l.useCallback(
            (e) => {
                (e8(e), tV(e));
            },
            [e8, tV],
        ),
        t2 = l.useCallback(
            (e) => {
                e6(e);
            },
            [e6],
        ),
        t8 = l.useCallback(
            (e) => {
                null != e9.current &&
                    (tE.info(`[QV] | seekTimeline | timeSec: ${e}`),
                    ez((e / (e9.current.duration ?? 1)) * 100),
                    tY(),
                    ek(!0),
                    (e9.current.currentTime = e),
                    e1(eu.id, e, e9.current.duration));
            },
            [e9, e1, eu.id, tY, tE],
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
                (tH(Y.Q6.PAUSED), ti(b.Yg.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (tH(Y.Q6.PAUSED), ti(b.Yg.LOST_FOCUS));
            },
        }));
    let t5 = l.useRef(!1);
    function t9() {
        if (null != e9.current)
            switch ((tE.info(`[QV] | handlePlaybackBtnClick | playerState: ${eh}`), tM(), eh)) {
                case Y.Q6.ENDED:
                    (t8(0), tH(Y.Q6.PLAYING));
                    break;
                case Y.Q6.PLAYING:
                    (tH(Y.Q6.PAUSED), ti(b.Yg.PAUSE_BUTTON));
                    break;
                default:
                    tH(Y.Q6.PLAYING);
            }
    }
    let t3 = l.useCallback(() => {
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
        if (null == e3.current) return;
        let e = e3.current;
        return (
            e.addEventListener("load", t3),
            () => {
                null != e && e.removeEventListener("load", t3);
            }
        );
    }, [e3, t3]);
    let t4 = l.useCallback(
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
                eh === Y.Q6.PLAYING &&
                (tE.info("[QV] | handleCanPlay: did NOT early return"),
                eb && (tE.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eb}`), ey(!1)),
                eV &&
                    (tE.info(`[QV] | handleCanPlay: waitingForChunk: ${eV}`),
                    tP(null != eJ.current ? performance.now() - eJ.current : null),
                    eU(!1)),
                tE.info("[QV] | handleCanPlay: updating player state to playing"),
                tH(Y.Q6.PLAYING)));
    }
    (l.useEffect(() => {
        null != tS || ne.current || ((ne.current = !0), ty(Y.SB.NO_VALID_SOURCE));
    }, [tS, ty, ne]),
        l.useEffect(() => {
            if (!eN) return;
            let e = setTimeout(() => {
                ek(!1);
            }, 1e3);
            return () => clearTimeout(e);
        }, [eN]));
    let [{ controlBarAnimSpring: nn }, nr] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: ei,
            onStart: () => {
                eq(!1);
            },
            onRest: (e) => {
                1 === e.value && eq(!0);
            },
        })),
        nl = (0, l.useRef)(null),
        [{ captionHeightSpring: ni }, ns] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: ei }));
    (l.useEffect(
        () => (
            ns({ captionHeightSpring: ef && null != ta ? (nl.current?.clientHeight ?? 0) : 0, immediate: e5 }),
            () => {
                ni.stop();
            }
        ),
        [ef, ns, e5, ta, ni],
    ),
        l.useEffect(
            () => (
                nr({ controlBarAnimSpring: tJ || eH ? 1 : 0, immediate: e5 }),
                () => {
                    nn.stop();
                }
            ),
            [tJ, nr, e5, eH, nn],
        ));
    let nu = eh === Y.Q6.ENDED,
        na = l.useMemo(() => (0, V.tW)(eu, V.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [eu]),
        no = l.useMemo(() => (0, V.tW)(eu, V.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [eu]),
        nc = tt || tc >= (e9.current?.currentTime ?? 0) + 1,
        nd = l.useMemo(() => null === (0, V.tW)(eu, V.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [eu]),
        nE = tt && e$,
        n_ = (0, r.jsx)(L.BK, {
            children: (0, r.jsx)(x.pT, {
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
                            tq(!1),
                            (tz.current = performance.now()),
                            null != tW.current && clearTimeout(tW.current));
                    },
                    onMouseLeave: function () {
                        (eD(!1), tq(!1));
                    },
                    onMouseMove: tZ,
                    onKeyDown: tZ,
                    children: (0, r.jsxs)("div", {
                        className: s()(J.NS, { [J.DO]: "portrait" === X, [J.r7]: "landscape" === X }),
                        style: { "--custom-footer-bottom": "4px" },
                        children: [
                            nu && (0, r.jsx)(F.A, { videoRef: e9, onTrackQuestContentClick: tL, orientation: X }),
                            (0, r.jsxs)(D.A, {
                                ref: (e) => {
                                    ((e9.current = e), (eA.current = e));
                                },
                                autoPlay: i,
                                playsInline: !0,
                                mediaLayoutType: ec ? er.dG.STATIC : er.dG.RESPONSIVE,
                                className: s()({ [J.R]: nu, [J.IR]: !0 }),
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
                                            ej(l + et.aA + Math.random() * et.A6),
                                            tG(l));
                                    }
                                    (e9.current.currentTime >= eY &&
                                        (eK(e9.current.currentTime + 1),
                                        (0, k.Gn)(eu.id, ex.taskType, e9.current.currentTime),
                                        n(e9.current.currentTime)),
                                        e1(eu.id, e9.current.currentTime, e9.current.duration),
                                        eP((e9.current.currentTime / e9.current.duration) * 100));
                                },
                                onEnded: function (e) {
                                    (null != e9.current &&
                                        (tG(e9.current.duration + 1),
                                        tE.info(
                                            `[QV] | handleEnded: sending progress update: ${e9.current.duration + 1}`,
                                        ),
                                        e1(eu.id, e9.current.duration, e9.current.duration)),
                                        tH(Y.Q6.ENDED),
                                        eU(!1));
                                },
                                onLoadedData: function (e) {
                                    (tE.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eb}`),
                                        eb &&
                                            (tI(null != eZ.current ? performance.now() - eZ.current : null),
                                            ey(!1),
                                            th()));
                                },
                                onLoadedMetadata: function (e) {
                                    null != e9.current &&
                                        (tE.info(`[QV] | handleLoadedMetadata | videoAssetId: ${tv}`),
                                        tF(null),
                                        tv !== V.fY.VIDEO_PLAYER_VIDEO_HLS && t8(t_),
                                        e7 ? (e9.current.volume = 0) : (e9.current.volume = e2));
                                },
                                onLoadStart: function () {
                                    ((eZ.current = performance.now()),
                                        (t5.current = !1),
                                        tg(ew),
                                        tE.info(`[QV] | handleLoadStart | loadingStartTime: ${eZ.current}`));
                                },
                                onPlaying: function () {
                                    if (!eX.current) return;
                                    let e = performance.now() - z;
                                    (tE.info(`[QV] | \u{23F0} Video FCP: ${e}ms`), tk(e), (eX.current = !1));
                                },
                                onWaiting: function (e) {
                                    ((eJ.current = performance.now()),
                                        tE.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eJ.current}`),
                                        tO(),
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
                                    (tE.info("[QV] | handleSeeked"), t5.current || ((t5.current = !0), tj(0)));
                                },
                                onAbort: function () {
                                    return t4(Y.SB.ABORT);
                                },
                                onError: function () {
                                    return t4(Y.SB.ERROR);
                                },
                                onEmptied: function () {
                                    return t4(Y.SB.EMPTIED);
                                },
                                onStalled: function () {
                                    return t4(Y.SB.STALLED);
                                },
                                onClick: function () {
                                    (tE.info("[QV] | handleVideoClick"), t9());
                                },
                                crossOrigin: "anonymous",
                                children: [
                                    null != no &&
                                        (0, r.jsx)("track", {
                                            ref: e3,
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
                                                return t4(Y.SB.SOURCE_ERROR);
                                            },
                                            src: tS.url,
                                            type: tS.mimetype,
                                        }),
                                ],
                            }),
                            (eb || eV) &&
                                eh === Y.Q6.PLAYING &&
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
                                        ? n === Y.Q6.PAUSED && (r === d.KB.FOCUS || r === d.KB.PICTURE_IN_PICTURE)
                                            ? el.intl.string(el.t.w6PeBF)
                                            : null
                                        : (0, P.isWeb)()
                                          ? el.intl.string(el.t["E1du/q"])
                                          : el.intl.string(el.t["rStN/7"]);
                                })({
                                    hasVideoAsset: null != tS,
                                    playerState: eh,
                                    pauseReason: (function (e) {
                                        switch (e) {
                                            case b.Yg.PAUSE_BUTTON:
                                                return d.KB.USER;
                                            case b.Yg.LOST_FOCUS:
                                                return d.KB.FOCUS;
                                            case b.Yg.MODAL_CLOSED:
                                                return d.KB.VISIBILITY;
                                            case b.Yg.PICTURE_IN_PICTURE:
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
                                    (0, r.jsx)(j.A, {}),
                                    (0, r.jsx)(S.K, {
                                        variant: "overlay-secondary",
                                        icon: v.P,
                                        "aria-label": el.intl.string(el.t.cpT0Cq),
                                        onClick: eo,
                                    }),
                                ],
                            }),
                            eE &&
                                eh !== Y.Q6.ENDED &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (eh === Y.Q6.PAUSED && tH(Y.Q6.PLAYING), e_(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: J.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: s()(J.xr, { [J.MZ]: "portrait" === X }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)([nn, ni], (e, t) => `${e * tm[tf] + t}px`),
                                            },
                                            children: (0, r.jsx)(ee, {
                                                quest: eu,
                                                onClose: function () {
                                                    (e_(!1), tL(b.uF.VIDEO_MODAL, U.Cy.TRANSCRIPT_DISABLE));
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(u.animated.div, {
                                className: J.Jp,
                                style: {
                                    opacity: (0, u.to)([nn.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                },
                            }),
                            ts &&
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: s()(J.yf, {
                                            [J.ZH]: eh === Y.Q6.PLAYING,
                                            [J.v7]: eh === Y.Q6.PAUSED,
                                        }),
                                        style: { "--custom-play-pause-pop-ms": "1000ms" },
                                        children:
                                            eh === Y.Q6.PLAYING
                                                ? (0, r.jsx)(C.PlayIcon, { className: J.PK })
                                                : (0, r.jsx)(A.PauseIcon, { className: J.PK }),
                                    },
                                    eh,
                                ),
                            ef &&
                                null != ta &&
                                !nu &&
                                (0, r.jsx)(u.animated.div, {
                                    className: J.o$,
                                    ref: nl,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
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
                            (0, r.jsxs)(u.animated.div, {
                                className: J.r8,
                                style: {
                                    height: (0, u.to)([nn.to({ range: [0, 1], output: [0, tm[tf]] })], (e) => `${e}px`),
                                },
                                children: [
                                    (0, r.jsx)(u.animated.div, {
                                        style: {
                                            transform: (0, u.to)(
                                                [nn.to({ range: [1, 0], output: [0, 1] })],
                                                (e) => `translateY(-${20 * e}px)`,
                                            ),
                                        },
                                        children: (0, r.jsx)(W, {
                                            percent: null != eW ? eW : eL,
                                            animate: !0 !== te.current && !eN,
                                            interactionEnabled: nE,
                                            playerState: eh,
                                            preloadedBuffers: tJ ? eQ : void 0,
                                            durationSec: e9.current?.duration ?? 1,
                                            isFullyVisible: tJ && e$,
                                            maxSeekableTime: tJ && e$ ? td : void 0,
                                            onClick: function (e) {
                                                nE && (t8(e), eh === Y.Q6.ENDED && tH(Y.Q6.PLAYING));
                                            },
                                            onScrubBack: t1,
                                            onScrubForward: t7,
                                            isQuestCompleted: tt,
                                            targetSec: t,
                                            "data-testid": "discord-web-video-player-timeline",
                                        }),
                                    }),
                                    (0, r.jsx)(u.animated.div, {
                                        className: J.uN,
                                        "data-testid": "discord-web-video-player-controls",
                                        style: {
                                            paddingTop: (0, u.to)(
                                                [nn.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e * e * 20}px`,
                                            ),
                                            paddingBottom: (0, u.to)(
                                                [nn.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e * e * 12}px`,
                                            ),
                                            pointerEvents: (0, u.to)([nn.to({ range: [0, 1], output: [0, 1] })], (e) =>
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
                                            keyDownHandlerRef: e4,
                                            volume: e2,
                                            muted: e7,
                                            transcriptEnabled: eE,
                                            captionEnabled: ef,
                                            handlePlaybackBtnClick: t9,
                                            handleTranscriptBtnClick: function () {
                                                (e_(!eE),
                                                    tL(
                                                        b.uF.VIDEO_MODAL,
                                                        eE ? U.Cy.TRANSCRIPT_DISABLE : U.Cy.TRANSCRIPT_ENABLE,
                                                    ));
                                            },
                                            handleCaptionBtnClick: function () {
                                                (ep(!ef),
                                                    tL(
                                                        b.uF.VIDEO_MODAL,
                                                        ef
                                                            ? U.Cy.CLOSED_CAPTIONING_DISABLE
                                                            : U.Cy.CLOSED_CAPTIONING_ENABLE,
                                                    ));
                                            },
                                            handleFullScreenBtnClick: () => {
                                                let e = !ec;
                                                tE.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                                let t = (0, N.qf)(e9.current?.parentNode, e9.current);
                                                (e && null != t
                                                    ? ((0, N.tl)(t), t.addEventListener(N.Wb, t0), tb(!0), tp(Y.oA.LG))
                                                    : e ||
                                                      null == t ||
                                                      (t.removeEventListener(N.Wb, t0),
                                                      tb(!1),
                                                      (0, N.sP)(t),
                                                      tp(Y.oA.MD)),
                                                    ed(e));
                                            },
                                            handleSeekBackBtnClick: t1,
                                            handleSeekForwardBtnClick: t7,
                                            handleControlBarPendingInteraction: eG,
                                            onVolumeChange: t6,
                                            onMutedChange: t2,
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
