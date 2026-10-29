(n.d(t, { A: () => es }), n(321073));
var r = n(477900),
    u = n(582128),
    l = n(503698),
    s = n.n(l),
    i = n(941143),
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
    I = n(834730),
    g = n(964486),
    h = n(775602),
    D = n(607470),
    T = n(53200),
    R = n(613373),
    O = n(683574),
    L = n(906892),
    N = n(544180),
    k = n(723702),
    b = n(475815),
    P = n(427495),
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
    G = n(458817),
    K = n(854356),
    $ = n(721092),
    W = n(879371);
function q(e) {
    let {
            targetSec: t,
            isFullyVisible: n,
            percent: l,
            animate: s,
            interactionEnabled: i,
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
        { quest: v, sourceQuestContent: C } = u.useContext(B.a),
        { questConfig: A } = u.useContext(B.l),
        I = (0, $.A)({ targetSec: t, quest: v, sourceQuestContent: C, questConfig: A, clickable: !0 });
    return (0, r.jsx)(R.uI, {
        isFullyVisible: n,
        percent: l,
        animate: s,
        interactionEnabled: i,
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
        indicatorConfig: I,
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
        l = (0, y.Kr)((e) => e.transcript);
    u.useEffect(() => {
        let e = (0, V.tW)(t, V.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == l ||
            l.questId !== t.id ||
            l.fetchStatus === y.Lx.NONE ||
            (l.fetchStatus === y.Lx.SUCCESS && e?.url !== l.url)) &&
            (0, P.qY)(t);
    }, [l, t]);
    let s = l?.questId === t.id && l?.fetchStatus === y.Lx.SUCCESS ? (l.text ?? "") : "",
        i = u.useMemo(
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
                            l?.fetchStatus === y.Lx.FETCHING
                                ? (0, r.jsx)("div", {
                                      className: J.Cw,
                                      children: (0, r.jsx)(m.y, { type: m.y.Type.WANDERING_CUBES }),
                                  })
                                : (0, r.jsx)(z.D, {
                                      variant: "heading-md/normal",
                                      color: "text-muted",
                                      children: i.map((e, t) => (0, r.jsx)("p", { children: e }, t)),
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
    eu = n(105292);
let el = { tension: 250, friction: 5, clamp: !0 };
function es(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: l,
            autoFocus: $ = !0,
            parentTransitionState: W,
            openedAtMs: z,
            orientation: X,
            videoUrlOverride: Z,
        } = e,
        {
            sourceQuestContent: es,
            quest: ei,
            videoSessionId: ea,
            onClose: eo,
            isFullscreenEnabled: ec,
            setIsFullscreenEnabled: ed,
        } = u.useContext(B.a),
        eE = (0, y.Kr)((e) => e.transcriptEnabled),
        e_ = (0, y.Kr)((e) => e.setTranscriptEnabled),
        ef = (0, y.Kr)((e) => e.captionEnabled),
        ep = (0, y.Kr)((e) => e.setCaptionEnabled),
        { focused: em, focusedChanged: eS } = (0, R.A7)(),
        { visible: ev, visibleChanged: eC, targetRef: eA } = (0, R.O7)(),
        [eI, eg] = u.useState(!0 === l ? j.Q6.PLAYING : j.Q6.PAUSED),
        [eh, eD] = u.useState(!1),
        [eT, eR] = u.useState(!1),
        eO = (0, M.Yh)(ei),
        [eL, eN] = u.useState(eO.percentComplete),
        ek = u.useCallback((e) => {
            (ez(null), eN(e));
        }, []),
        [eb, eP] = u.useState(!1),
        [ex, ey] = u.useState(!0),
        [eV, eU] = u.useState(!1),
        [eQ, eM] = u.useState([]),
        [ew, eB] = u.useState(N.A.getEffectiveConnectionSpeed()),
        [eF, eY] = u.useState(0),
        [ej, eH] = u.useState(0),
        [eG, eK] = u.useState(!1),
        [e$, eW] = u.useState(!1),
        [eq, ez] = u.useState(null),
        eX = u.useRef(!0),
        eZ = u.useRef(null),
        eJ = u.useRef(null),
        e0 = (0, y.Kr)((e) => e.videoProgress[ei.id] ?? y.yc, a.x),
        e1 = (0, y.Kr)((e) => e.setVideoProgress),
        e7 = (0, y.Kr)((e) => e.muted),
        e2 = (0, y.Kr)((e) => e.setMuted),
        e6 = (0, y.Kr)((e) => e.volume),
        e8 = (0, y.Kr)((e) => e.setVolume),
        e9 = (0, c.bG)([h.Ay], () => h.Ay.useReducedMotion),
        e5 = (0, u.useRef)(null),
        e4 = (0, u.useRef)(null),
        e3 = (0, u.useRef)(null),
        te = u.useRef(!0),
        tt = ei.userStatus?.completedAt != null,
        tn = u.useMemo(() => ei.config.features.includes(et.Li.FULL_EPISODE_VIDEO_QUEST), [ei.config.features]),
        tr = u.useRef(!1),
        [tu, tl] = u.useState(null),
        [ts, ti] = u.useState(!1),
        [ta, to] = u.useState(null),
        tc = Math.max(e0.maxTimestampSec, eO.progressSeconds),
        td = tt ? (e5.current?.duration ?? 0) : (0, w.vd)(tc, e0.duration),
        tE = u.useMemo(() => (0, Q.L)({ quest: ei, location: et.rE.VIDEO_MODAL }), [ei]),
        t_ = (0, E.g)(tt, e0, eO.progressSeconds),
        [tf, tp] = u.useState(j.oA.MD),
        tm = { [j.oA.SM]: 56, [j.oA.MD]: 56, [j.oA.LG]: 64 };
    (0, g.u5)(() => {
        te.current &&
            ((te.current = !1),
            eB(N.A.getEffectiveConnectionSpeed()),
            tt && e0.timestampSec >= e0.duration && e1(ei.id, 0, e0.duration));
    });
    let { videoAsset: tS, videoAssetType: tv, hlsRef: tC, hls: tA, onFirstChunkLoaded: tI } = (0, H.A)(e5, ew, t_, Z),
        {
            trackQuestVideoLoadingStarted: tg,
            trackQuestVideoLoadingEnded: th,
            trackQuestVideoProgressed: tD,
            trackQuestVideoResumed: tT,
            trackQuestVideoPaused: tR,
            trackQuestVideoFocusChange: tO,
            trackQuestContentClick: tL,
            trackQuestVideoBufferingStarted: tN,
            trackQuestVideoBufferingEnded: tk,
            trackQuestVideoSegmentWatched: tb,
            trackQuestVideoTimeToFirstFrame: tP,
            trackQuestVideoFullscreenChanged: tx,
            trackQuestVideoError: ty,
            trackQuestVideoVolumeChanged: tV,
            handleEngagedViewProgress: tU,
        } = (0, G.A)({
            questId: ei.id,
            isQuestCompleted: tt,
            videoRef: e5,
            hlsRef: tC,
            hls: tA,
            videoSessionId: ea,
            videoAssetId: tv,
            sourceQuestContent: es,
            logger: tE,
            isFullEpisodeVideoQuest: tn,
        });
    (0, K.A)({ videoAssetUrl: tS?.url, videoRef: e5, hls: tA, videoAssetType: tv });
    let tQ = u.useRef(null),
        tM = u.useCallback(() => {
            (clearTimeout(tQ.current),
                ti(!0),
                (tQ.current = setTimeout(() => {
                    ti(!1);
                }, 1e3)));
        }, []);
    u.useEffect(
        () => () => {
            null != tQ.current && clearTimeout(tQ.current);
        },
        [],
    );
    let tw = u.useCallback(() => e5.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: tB,
            handleLoadEnd: tF,
            handleFirstFrame: tY,
            handleSeek: tj,
        } = (0, R.Yr)({ getCurrentVideoTime: tw, onAnalytics: tb, emitIntervalMs: R.KI, minSegmentDurationMs: R._4 }),
        tH = u.useRef(tB);
    u.useEffect(() => {
        tH.current(eI, null);
    }, []);
    let tG = u.useCallback(
        (e) => {
            if ((tE.info(`[QV] | updatePlayerState | playerState: ${e}`), tB(e, null), eg(e), null != e5.current))
                switch (e) {
                    case j.Q6.PLAYING:
                        (e5.current.paused && tT(tu), tl(null), e5.current.play());
                        break;
                    case j.Q6.PAUSED:
                        (e5.current.pause(),
                            tU({
                                positionSeconds: e5.current.currentTime,
                                durationSeconds: e5.current.duration,
                                isPlaying: !1,
                            }),
                            (eX.current = !1));
                        break;
                    case j.Q6.ENDED:
                        e_(!1);
                }
        },
        [tB, tT, tu, e_, tE, tU],
    );
    (u.useEffect(() => {
        tR(tu);
    }, [tu, tR]),
        u.useEffect(() => {
            eS && tO(em, eI);
        }, [em, eS, eI, tO]));
    let tK = u.useCallback(
        (e) => {
            (tt ||
                ei.userStatus?.enrolledAt == null ||
                (tE.info(`[QV] sendServerProgressUpdate: ${e}`), (0, w.zv)(ei, e)),
                tD());
        },
        [tt, ei, tE, tD],
    );
    (u.useEffect(() => {
        (W !== _.ip.HIDDEN &&
            W !== _.ip.EXITING &&
            W !== _.ip.EXITED &&
            (null == W || !eC || ev || tt) &&
            (!eS || em || tt)) ||
            null == e5.current ||
            eI !== j.Q6.PLAYING ||
            (tE.info(
                `[QV] | Pausing video | playerState: ${eI}, parentTransitionState: ${W}, visible: ${ev}, focused: ${em}, isQuestCompleted: ${tt}`,
            ),
            tG(j.Q6.PAUSED),
            tt ? tn && tl(x.Yg.ANOTHER_MODAL_OPENED) : tl(x.Yg.LOST_FOCUS));
    }, [W, em, eS, ev, eC, eI, tt, tG, tK, tE, tn]),
        u.useEffect(() => {
            tu === x.Yg.ANOTHER_MODAL_OPENED &&
                W === _.ip.ENTERED &&
                eI === j.Q6.PAUSED &&
                tn &&
                em &&
                (tE.info("[QV] | Resuming full episode video after modal re-entered"), tG(j.Q6.PLAYING));
        }, [W, eI, tE, tG, tu, tn, em]));
    let [t$, tW] = u.useState(!1),
        tq = u.useRef(null),
        tz = u.useRef(performance.now()),
        tX = u.useCallback(() => {
            (null != tq.current && clearTimeout(tq.current),
                eI !== j.Q6.PLAYING ||
                    (tq.current = setTimeout(
                        () => {
                            eI === j.Q6.PLAYING && tW(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tz.current)),
                    )));
        }, [eI]);
    function tZ() {
        (tW(!1), (tz.current = performance.now()), tX());
    }
    u.useEffect(() => {
        if (eI !== j.Q6.PLAYING) {
            (tW(!1), null != tq.current && clearTimeout(tq.current));
            return;
        }
        return (
            tX(),
            () => {
                null != tq.current && clearTimeout(tq.current);
            }
        );
    }, [eI, tX]);
    let tJ = !t$ && (eT || eh || eI === j.Q6.ENDED),
        t0 = u.useCallback(() => {
            tE.info("[QV] | handleFullScreenExit");
            let e = (0, b.qf)(e5.current?.parentNode, e5.current);
            null == e || (0, b._U)(e) || (e.removeEventListener(b.Wb, t0), ed(!1), tx(!1), tp(j.oA.MD));
        }, [ed, tE, tx]);
    function t1() {
        if (null == e5.current) return;
        let e = Math.max(e5.current.currentTime - 10, 0);
        (tE.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
            t8(e),
            eI === j.Q6.ENDED && tG(j.Q6.PAUSED),
            tL(x.uF.VIDEO_MODAL, U.Cy.SEEK_BACKWARD));
    }
    function t7() {
        if (null == e5.current || !nc) return;
        let e = Math.min(e5.current.currentTime + 10, td);
        (tE.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
            t8(e),
            eI !== j.Q6.ENDED && e >= e5.current.duration && tG(j.Q6.ENDED),
            tL(x.uF.VIDEO_MODAL, U.Cy.SEEK_FORWARD));
    }
    (u.useEffect(() => {
        let e = e5.current;
        return () => {
            let t = (0, b.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(b.Wb, t0);
        };
    }, [t0]),
        u.useEffect(() => {
            function e(e) {
                return e3.current?.(e);
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, []));
    let t2 = u.useCallback(
            (e) => {
                (e8(e), tV(e));
            },
            [e8, tV],
        ),
        t6 = u.useCallback(
            (e) => {
                e2(e);
            },
            [e2],
        ),
        t8 = u.useCallback(
            (e) => {
                null != e5.current &&
                    (tE.info(`[QV] | seekTimeline | timeSec: ${e}`),
                    ez((e / (e5.current.duration ?? 1)) * 100),
                    tj(),
                    eP(!0),
                    (e5.current.currentTime = e),
                    e1(ei.id, e, e5.current.duration));
            },
            [e5, e1, ei.id, tj, tE],
        );
    (u.useEffect(() => {
        let e = e5.current;
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
    }, [e5, tC]),
        (0, R.C1)({
            videoRef: e5,
            enabled: !tt,
            onPipPause: () => {
                (tG(j.Q6.PAUSED), tl(x.Yg.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (tG(j.Q6.PAUSED), tl(x.Yg.LOST_FOCUS));
            },
        }));
    let t9 = u.useRef(!1);
    function t5() {
        if (null != e5.current)
            switch ((tE.info(`[QV] | handlePlaybackBtnClick | playerState: ${eI}`), tM(), eI)) {
                case j.Q6.ENDED:
                    (t8(0), tG(j.Q6.PLAYING));
                    break;
                case j.Q6.PLAYING:
                    (tG(j.Q6.PAUSED), tl(x.Yg.PAUSE_BUTTON));
                    break;
                default:
                    tG(j.Q6.PLAYING);
            }
    }
    let t4 = u.useCallback(() => {
        if (
            null == e5.current ||
            (tE.info(`[QV] | handleTracksLoaded: textTracks.length: ${e5.current.textTracks.length}`),
            0 === e5.current.textTracks.length)
        )
            return;
        let e = e5.current.textTracks[0];
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
    }, [e5, tE]);
    u.useEffect(() => {
        if (null == e4.current) return;
        let e = e4.current;
        return (
            e.addEventListener("load", t4),
            () => {
                null != e && e.removeEventListener("load", t4);
            }
        );
    }, [e4, t4]);
    let t3 = u.useCallback(
            (e) => {
                (tE.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${e5.current?.currentTime}, videoAssetId: ${tv}, connectionSpeed: ${ew}`,
                ),
                    ty(e));
            },
            [ew, ty, e5, tv, tE],
        ),
        ne = u.useRef(!1);
    function nt(e) {
        (tE.info(`[QV] | handleCanPlay: playerState: ${eI}`),
            null != e5.current &&
                eI === j.Q6.PLAYING &&
                (tE.info("[QV] | handleCanPlay: did NOT early return"),
                ex && (tE.info(`[QV] | handleCanPlay: loadingFirstChunk: ${ex}`), ey(!1)),
                eV &&
                    (tE.info(`[QV] | handleCanPlay: waitingForChunk: ${eV}`),
                    tk(null != eJ.current ? performance.now() - eJ.current : null),
                    eU(!1)),
                tE.info("[QV] | handleCanPlay: updating player state to playing"),
                tG(j.Q6.PLAYING)));
    }
    (u.useEffect(() => {
        null != tS || ne.current || ((ne.current = !0), ty(j.SB.NO_VALID_SOURCE));
    }, [tS, ty, ne]),
        u.useEffect(() => {
            if (!eb) return;
            let e = setTimeout(() => {
                eP(!1);
            }, 1e3);
            return () => clearTimeout(e);
        }, [eb]));
    let [{ controlBarAnimSpring: nn }, nr] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: el,
            onStart: () => {
                eW(!1);
            },
            onRest: (e) => {
                1 === e.value && eW(!0);
            },
        })),
        nu = (0, u.useRef)(null),
        [{ captionHeightSpring: nl }, ns] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: el }));
    (u.useEffect(
        () => (
            ns({ captionHeightSpring: ef && null != ta ? (nu.current?.clientHeight ?? 0) : 0, immediate: e9 }),
            () => {
                nl.stop();
            }
        ),
        [ef, ns, e9, ta, nl],
    ),
        u.useEffect(
            () => (
                nr({ controlBarAnimSpring: tJ || eG ? 1 : 0, immediate: e9 }),
                () => {
                    nn.stop();
                }
            ),
            [tJ, nr, e9, eG, nn],
        ));
    let ni = eI === j.Q6.ENDED,
        na = u.useMemo(() => (0, V.tW)(ei, V.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [ei]),
        no = u.useMemo(() => (0, V.tW)(ei, V.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [ei]),
        nc = tt || tc >= (e5.current?.currentTime ?? 0) + 1,
        nd = u.useMemo(() => null === (0, V.tW)(ei, V.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [ei]),
        nE = tt && e$,
        n_ = (0, r.jsx)(L.BK, {
            children: (0, r.jsx)(O.pT, {
                isActive: !0,
                isControlBarExpanded: tJ,
                activeLayer: ec ? L.$W : void 0,
                isFullscreen: ec,
                videoRef: e5,
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
                        className: s()(J.NS, { [J.DO]: "portrait" === X, [J.r7]: "landscape" === X }),
                        style: { "--custom-footer-bottom": "4px" },
                        children: [
                            ni && (0, r.jsx)(F.A, { videoRef: e5, onTrackQuestContentClick: tL, orientation: X }),
                            (0, r.jsxs)(D.A, {
                                ref: (e) => {
                                    ((e5.current = e), (eA.current = e));
                                },
                                autoPlay: l,
                                playsInline: !0,
                                mediaLayoutType: ec ? er.dG.STATIC : er.dG.RESPONSIVE,
                                className: s()({ [J.R]: ni, [J.IR]: !0 }),
                                controls: !1,
                                poster: na?.url,
                                disablePictureInPicture: !0,
                                "data-testid": "discord-web-video-player-video",
                                onTimeUpdate: function (e) {
                                    if (null == e5.current) return;
                                    tU({
                                        positionSeconds: e5.current.currentTime,
                                        durationSeconds: e5.current.duration,
                                        isPlaying: !e5.current.paused,
                                    });
                                    let r = e5.current.currentTime >= t && !tr.current && tn;
                                    if (e5.current.currentTime >= eF || r) {
                                        var u;
                                        (tE.info(
                                            `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${e5.current.currentTime}`,
                                        ),
                                            (u = e5.current.currentTime) >= t && (tr.current = !0),
                                            eY(u + et.aA + Math.random() * et.A6),
                                            tK(u));
                                    }
                                    (e5.current.currentTime >= ej &&
                                        (eH(e5.current.currentTime + 1),
                                        (0, P.Gn)(ei.id, eO.taskType, e5.current.currentTime),
                                        n(e5.current.currentTime)),
                                        e1(ei.id, e5.current.currentTime, e5.current.duration),
                                        ek((e5.current.currentTime / e5.current.duration) * 100));
                                },
                                onEnded: function (e) {
                                    (null != e5.current &&
                                        (tK(e5.current.duration + 1),
                                        tE.info(
                                            `[QV] | handleEnded: sending progress update: ${e5.current.duration + 1}`,
                                        ),
                                        e1(ei.id, e5.current.duration, e5.current.duration)),
                                        tG(j.Q6.ENDED),
                                        eU(!1));
                                },
                                onLoadedData: function (e) {
                                    (tE.info(`[QV] | handleLoadedData: loadingFirstChunk: ${ex}`),
                                        ex &&
                                            (th(null != eZ.current ? performance.now() - eZ.current : null),
                                            ey(!1),
                                            tI()));
                                },
                                onLoadedMetadata: function (e) {
                                    null != e5.current &&
                                        (tE.info(`[QV] | handleLoadedMetadata | videoAssetId: ${tv}`),
                                        tF(null),
                                        tv !== V.fY.VIDEO_PLAYER_VIDEO_HLS && t8(t_),
                                        e7 ? (e5.current.volume = 0) : (e5.current.volume = e6));
                                },
                                onLoadStart: function () {
                                    ((eZ.current = performance.now()),
                                        (t9.current = !1),
                                        tg(ew),
                                        tE.info(`[QV] | handleLoadStart | loadingStartTime: ${eZ.current}`));
                                },
                                onPlaying: function () {
                                    if (!eX.current) return;
                                    let e = performance.now() - z;
                                    (tE.info(`[QV] | \u{23F0} Video FCP: ${e}ms`), tP(e), (eX.current = !1));
                                },
                                onWaiting: function (e) {
                                    ((eJ.current = performance.now()),
                                        tE.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eJ.current}`),
                                        tN(),
                                        eU(!0));
                                },
                                onProgress: function (e) {
                                    if (null == e5.current) return;
                                    tE.info(
                                        `[QV] | handleLoadingHasProgressed: buffered.length: ${e5.current.buffered.length}`,
                                    );
                                    let t = [];
                                    for (let e = 0; e < e5.current.buffered.length; e++) {
                                        let n = e5.current.buffered.start(e),
                                            r = e5.current.buffered.end(e);
                                        r - n < 1 ||
                                            t.push({
                                                start: n / e5.current.duration,
                                                size: (r - n) / e5.current.duration,
                                            });
                                    }
                                    eM(t);
                                },
                                onCanPlay: nt,
                                onCanPlayThrough: nt,
                                onSeeked: function () {
                                    (tE.info("[QV] | handleSeeked"), t9.current || ((t9.current = !0), tY(0)));
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
                                    (tE.info("[QV] | handleVideoClick"), t5());
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
                                eI === j.Q6.PLAYING &&
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
                                            ? eu.intl.string(eu.t.w6PeBF)
                                            : null
                                        : (0, k.isWeb)()
                                          ? eu.intl.string(eu.t["E1du/q"])
                                          : eu.intl.string(eu.t["rStN/7"]);
                                })({
                                    hasVideoAsset: null != tS,
                                    playerState: eI,
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
                                    })(tu),
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
                                        "aria-label": eu.intl.string(eu.t.cpT0Cq),
                                        onClick: eo,
                                    }),
                                ],
                            }),
                            eE &&
                                eI !== j.Q6.ENDED &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (eI === j.Q6.PAUSED && tG(j.Q6.PLAYING), e_(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: J.BG }),
                                        }),
                                        (0, r.jsx)(i.animated.div, {
                                            className: s()(J.xr, { [J.MZ]: "portrait" === X }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, i.to)([nn, nl], (e, t) => `${e * tm[tf] + t}px`),
                                            },
                                            children: (0, r.jsx)(ee, {
                                                quest: ei,
                                                onClose: function () {
                                                    (e_(!1), tL(x.uF.VIDEO_MODAL, U.Cy.TRANSCRIPT_DISABLE));
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(i.animated.div, {
                                className: J.Jp,
                                style: {
                                    opacity: (0, i.to)([nn.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                },
                            }),
                            ts &&
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: s()(J.yf, {
                                            [J.ZH]: eI === j.Q6.PLAYING,
                                            [J.v7]: eI === j.Q6.PAUSED,
                                        }),
                                        style: { "--custom-play-pause-pop-ms": "1000ms" },
                                        children:
                                            eI === j.Q6.PLAYING
                                                ? (0, r.jsx)(C.PlayIcon, { className: J.PK })
                                                : (0, r.jsx)(A.PauseIcon, { className: J.PK }),
                                    },
                                    eI,
                                ),
                            ef &&
                                null != ta &&
                                !ni &&
                                (0, r.jsx)(i.animated.div, {
                                    className: J.o$,
                                    ref: nu,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, i.to)(
                                            [nn.to({ range: [0, 1], output: [-20, -tm[tf]] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(I.E, {
                                        variant: "text-lg/semibold",
                                        color: "text-overlay-light",
                                        className: J.qh,
                                        children: ta.text,
                                    }),
                                }),
                            (0, r.jsxs)(i.animated.div, {
                                className: J.r8,
                                style: {
                                    height: (0, i.to)([nn.to({ range: [0, 1], output: [0, tm[tf]] })], (e) => `${e}px`),
                                },
                                children: [
                                    (0, r.jsx)(i.animated.div, {
                                        style: {
                                            transform: (0, i.to)(
                                                [nn.to({ range: [1, 0], output: [0, 1] })],
                                                (e) => `translateY(-${20 * e}px)`,
                                            ),
                                        },
                                        children: (0, r.jsx)(q, {
                                            percent: null != eq ? eq : eL,
                                            animate: !0 !== te.current && !eb,
                                            interactionEnabled: nE,
                                            playerState: eI,
                                            preloadedBuffers: tJ ? eQ : void 0,
                                            durationSec: e5.current?.duration ?? 1,
                                            isFullyVisible: tJ && e$,
                                            maxSeekableTime: tJ && e$ ? td : void 0,
                                            onClick: function (e) {
                                                nE && (t8(e), eI === j.Q6.ENDED && tG(j.Q6.PLAYING));
                                            },
                                            onScrubBack: t1,
                                            onScrubForward: t7,
                                            isQuestCompleted: tt,
                                            targetSec: t,
                                            "data-testid": "discord-web-video-player-timeline",
                                        }),
                                    }),
                                    (0, r.jsx)(i.animated.div, {
                                        className: J.uN,
                                        "data-testid": "discord-web-video-player-controls",
                                        style: {
                                            paddingTop: (0, i.to)(
                                                [nn.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e * e * 20}px`,
                                            ),
                                            paddingBottom: (0, i.to)(
                                                [nn.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e * e * 12}px`,
                                            ),
                                            pointerEvents: (0, i.to)([nn.to({ range: [0, 1], output: [0, 1] })], (e) =>
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
                                            playerState: eI,
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
                                            muted: e7,
                                            transcriptEnabled: eE,
                                            captionEnabled: ef,
                                            handlePlaybackBtnClick: t5,
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
                                                let t = (0, b.qf)(e5.current?.parentNode, e5.current);
                                                (e && null != t
                                                    ? ((0, b.tl)(t), t.addEventListener(b.Wb, t0), tx(!0), tp(j.oA.LG))
                                                    : e ||
                                                      null == t ||
                                                      (t.removeEventListener(b.Wb, t0),
                                                      tx(!1),
                                                      (0, b.sP)(t),
                                                      tp(j.oA.MD)),
                                                    ed(e));
                                            },
                                            handleSeekBackBtnClick: t1,
                                            handleSeekForwardBtnClick: t7,
                                            handleControlBarPendingInteraction: eK,
                                            onVolumeChange: t2,
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
