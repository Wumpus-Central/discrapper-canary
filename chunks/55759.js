n.d(t, { A: () => eu }), n(321073);
var r = n(477900),
    l = n(582128),
    i = n(503698),
    u = n.n(i),
    s = n(53466),
    a = n(462180),
    o = n(337836),
    c = n(17928),
    d = n(876230),
    E = n(645577),
    f = n(231723),
    _ = n(717421),
    m = n(939249),
    p = n(289873),
    S = n(408278),
    C = n(789645),
    v = n(782134),
    A = n(113494),
    h = n(834730),
    g = n(964486),
    I = n(775602),
    T = n(607470),
    D = n(53200),
    R = n(613373),
    x = n(683574),
    L = n(906892),
    O = n(544180),
    P = n(723702),
    k = n(475815),
    N = n(396813),
    b = n(24001),
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
    H = n(458817),
    G = n(854356),
    $ = n(979204),
    q = n(628110);
function W(e) {
    let {
            targetSec: t,
            isFullyVisible: n,
            percent: i,
            animate: u,
            interactionEnabled: s,
            isQuestCompleted: a,
            backgroundColor: o,
            preloadedBuffers: c,
            durationSec: d,
            maxSeekableTime: E,
            playerState: f,
            onClick: _,
            onScrubBack: m,
            onScrubForward: p,
            "data-testid": S,
        } = e,
        { quest: C, sourceQuestContent: v } = l.useContext(B.a),
        { questConfig: A } = l.useContext(B.l),
        h = (0, $.A)({ targetSec: t, quest: C, sourceQuestContent: v, questConfig: A, clickable: !0 });
    return (0, r.jsx)(R.uI, {
        isFullyVisible: n,
        percent: i,
        animate: u,
        interactionEnabled: s,
        playerState: f,
        backgroundColor: o,
        preloadedBuffers: c,
        durationSec: d,
        maxSeekableTime: E,
        segmentBorderRadius: 99,
        progressClassName: a ? q.c : q.q,
        timelineHeightPx: 4,
        initialTimelineHeightPx: 4,
        onClick: _,
        onScrubBack: m,
        onScrubForward: p,
        indicatorConfig: h,
        onIndicatorSeek: _,
        "data-testid": S,
    });
}
var z = n(297264),
    X = n(259678),
    Z = n(364522),
    J = n(668534);
function ee(e) {
    let { quest: t, onClose: n } = e,
        i = (0, y.Kr)((e) => e.transcript);
    l.useEffect(() => {
        let e = (0, V.tW)(t, V.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == i ||
            i.questId !== t.id ||
            i.fetchStatus === y.Lx.NONE ||
            (i.fetchStatus === y.Lx.SUCCESS && e?.url !== i.url)) &&
            (0, N.qY)(t);
    }, [i, t]);
    let u = i?.questId === t.id && i?.fetchStatus === y.Lx.SUCCESS ? (i.text ?? "") : "",
        s = l.useMemo(
            () =>
                u
                    .split("\n")
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [u],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: J.Mm,
                children: [
                    (0, r.jsx)(z.D, { variant: "heading-md/semibold", color: "currentColor", children: "Transcript" }),
                    (0, r.jsx)(m.D, {
                        onClick: n,
                        className: J.GI,
                        children: (0, r.jsx)(C.P, { color: "currentColor" }),
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
                                      children: (0, r.jsx)(p.y, { type: p.y.Type.WANDERING_CUBES }),
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
    el = n(375708);
let ei = { tension: 250, friction: 5, clamp: !0 };
function eu(e) {
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
            sourceQuestContent: eu,
            quest: es,
            videoSessionId: ea,
            onClose: eo,
            isFullscreenEnabled: ec,
            setIsFullscreenEnabled: ed,
        } = l.useContext(B.a),
        eE = (0, y.Kr)((e) => e.transcriptEnabled),
        ef = (0, y.Kr)((e) => e.setTranscriptEnabled),
        e_ = (0, y.Kr)((e) => e.captionEnabled),
        em = (0, y.Kr)((e) => e.setCaptionEnabled),
        { focused: ep, focusedChanged: eS } = (0, R.A7)(),
        { visible: eC, visibleChanged: ev, targetRef: eA } = (0, R.O7)(),
        [eh, eg] = l.useState(!0 === i ? Y.Q6.PLAYING : Y.Q6.PAUSED),
        [eI, eT] = l.useState(!1),
        [eD, eR] = l.useState(!1),
        ex = (0, M.Yh)(es),
        [eL, eO] = l.useState(ex.percentComplete),
        eP = l.useCallback((e) => {
            ez(null), eO(e);
        }, []),
        [ek, eN] = l.useState(!1),
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
        e0 = (0, y.Kr)((e) => e.videoProgress[es.id] ?? y.yc, a.x),
        e1 = (0, y.Kr)((e) => e.setVideoProgress),
        e6 = (0, y.Kr)((e) => e.muted),
        e7 = (0, y.Kr)((e) => e.setMuted),
        e8 = (0, y.Kr)((e) => e.volume),
        e2 = (0, y.Kr)((e) => e.setVolume),
        e4 = (0, c.bG)([I.Ay], () => I.Ay.useReducedMotion),
        e5 = (0, l.useRef)(null),
        e9 = (0, l.useRef)(null),
        e3 = (0, l.useRef)(null),
        te = l.useRef(!0),
        tt = es.userStatus?.completedAt != null,
        tn = l.useMemo(() => es.config.features.includes(et.Li.FULL_EPISODE_VIDEO_QUEST), [es.config.features]),
        tr = l.useRef(!1),
        [tl, ti] = l.useState(null),
        [tu, ts] = l.useState(!1),
        [ta, to] = l.useState(null),
        tc = Math.max(e0.maxTimestampSec, ex.progressSeconds),
        td = tt ? (e5.current?.duration ?? 0) : (0, w.vd)(tc, e0.duration),
        tE = l.useMemo(() => (0, Q.L)({ quest: es, location: et.rE.VIDEO_MODAL }), [es]),
        tf = (0, E.g)(tt, e0, ex.progressSeconds),
        [t_, tm] = l.useState(Y.oA.MD),
        tp = { [Y.oA.MD]: 56, [Y.oA.LG]: 64 };
    (0, g.u5)(() => {
        te.current &&
            ((te.current = !1),
            eB(O.A.getEffectiveConnectionSpeed()),
            tt && e0.timestampSec >= e0.duration && e1(es.id, 0, e0.duration));
    });
    let { videoAsset: tS, videoAssetType: tC, hlsRef: tv, hls: tA, onFirstChunkLoaded: th } = (0, K.A)(e5, ew, tf, Z),
        {
            trackQuestVideoLoadingStarted: tg,
            trackQuestVideoLoadingEnded: tI,
            trackQuestVideoProgressed: tT,
            trackQuestVideoResumed: tD,
            trackQuestVideoPaused: tR,
            trackQuestVideoFocusChange: tx,
            trackQuestContentClick: tL,
            trackQuestVideoBufferingStarted: tO,
            trackQuestVideoBufferingEnded: tP,
            trackQuestVideoSegmentWatched: tk,
            trackQuestVideoTimeToFirstFrame: tN,
            trackQuestVideoFullscreenChanged: tb,
            trackQuestVideoError: ty,
            trackQuestVideoVolumeChanged: tV,
        } = (0, H.A)({
            questId: es.id,
            isQuestCompleted: tt,
            videoRef: e5,
            hlsRef: tv,
            hls: tA,
            videoSessionId: ea,
            videoAssetId: tC,
            sourceQuestContent: eu,
            logger: tE,
            isFullEpisodeVideoQuest: tn,
        });
    (0, G.A)({ videoAssetUrl: tS?.url, videoRef: e5, hls: tA, videoAssetType: tC });
    let tU = l.useRef(null),
        tQ = l.useCallback(() => {
            clearTimeout(tU.current),
                ts(!0),
                (tU.current = setTimeout(() => {
                    ts(!1);
                }, 1e3));
        }, []);
    l.useEffect(
        () => () => {
            null != tU.current && clearTimeout(tU.current);
        },
        [],
    );
    let tM = l.useCallback(() => e5.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: tw,
            handleLoadEnd: tB,
            handleFirstFrame: tF,
            handleSeek: tj,
        } = (0, R.Yr)({ getCurrentVideoTime: tM, onAnalytics: tk, emitIntervalMs: R.KI, minSegmentDurationMs: R._4 }),
        tY = l.useRef(tw);
    l.useEffect(() => {
        tY.current(eh, null);
    }, []);
    let tK = l.useCallback(
        (e) => {
            if ((tE.info(`[QV] | updatePlayerState | playerState: ${e}`), tw(e, null), eg(e), null != e5.current))
                switch (e) {
                    case Y.Q6.PLAYING:
                        e5.current.paused && tD(tl), ti(null), e5.current.play();
                        break;
                    case Y.Q6.PAUSED:
                        e5.current.pause(), (eX.current = !1);
                        break;
                    case Y.Q6.ENDED:
                        ef(!1);
                }
        },
        [tw, tD, tl, ef, tE],
    );
    l.useEffect(() => {
        tR(tl);
    }, [tl, tR]),
        l.useEffect(() => {
            eS && tx(ep, eh);
        }, [ep, eS, eh, tx]);
    let tH = l.useCallback(
        (e) => {
            tt ||
                es.userStatus?.enrolledAt == null ||
                (tE.info(`[QV] sendServerProgressUpdate: ${e}`), (0, w.zv)(es, e)),
                tT();
        },
        [tt, es, tE, tT],
    );
    l.useEffect(() => {
        (q !== f.ip.HIDDEN &&
            q !== f.ip.EXITING &&
            q !== f.ip.EXITED &&
            (null == q || !ev || eC || tt) &&
            (!eS || ep || tt)) ||
            null == e5.current ||
            eh !== Y.Q6.PLAYING ||
            (tE.info(
                `[QV] | Pausing video | playerState: ${eh}, parentTransitionState: ${q}, visible: ${eC}, focused: ${ep}, isQuestCompleted: ${tt}`,
            ),
            tK(Y.Q6.PAUSED),
            tt ? tn && ti(b.Yg.ANOTHER_MODAL_OPENED) : ti(b.Yg.LOST_FOCUS));
    }, [q, ep, eS, eC, ev, eh, tt, tK, tH, tE, tn]),
        l.useEffect(() => {
            tl === b.Yg.ANOTHER_MODAL_OPENED &&
                q === f.ip.ENTERED &&
                eh === Y.Q6.PAUSED &&
                tn &&
                ep &&
                (tE.info("[QV] | Resuming full episode video after modal re-entered"), tK(Y.Q6.PLAYING));
        }, [q, eh, tE, tK, tl, tn, ep]);
    let [tG, t$] = l.useState(!1),
        tq = l.useRef(null),
        tW = l.useRef(performance.now()),
        tz = l.useCallback(() => {
            null != tq.current && clearTimeout(tq.current),
                eh !== Y.Q6.PLAYING ||
                    (tq.current = setTimeout(
                        () => {
                            eh === Y.Q6.PLAYING && t$(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tW.current)),
                    ));
        }, [eh]);
    function tX() {
        t$(!1), (tW.current = performance.now()), tz();
    }
    l.useEffect(() => {
        if (eh !== Y.Q6.PLAYING) {
            t$(!1), null != tq.current && clearTimeout(tq.current);
            return;
        }
        return (
            tz(),
            () => {
                null != tq.current && clearTimeout(tq.current);
            }
        );
    }, [eh, tz]);
    let tZ = !tG && (eD || eI || eh === Y.Q6.ENDED),
        tJ = l.useCallback(() => {
            tE.info("[QV] | handleFullScreenExit");
            let e = (0, k.qf)(e5.current?.parentNode, e5.current);
            null == e || (0, k._U)(e) || (e.removeEventListener(k.Wb, tJ), ed(!1), tb(!1), tm(Y.oA.MD));
        }, [ed, tE, tb]);
    function t0() {
        if (null == e5.current) return;
        let e = Math.max(e5.current.currentTime - 10, 0);
        tE.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
            t8(e),
            eh === Y.Q6.ENDED && tK(Y.Q6.PAUSED),
            tL(b.uF.VIDEO_MODAL, U.Cy.SEEK_BACKWARD);
    }
    function t1() {
        if (null == e5.current || !no) return;
        let e = Math.min(e5.current.currentTime + 10, td);
        tE.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
            t8(e),
            eh !== Y.Q6.ENDED && e >= e5.current.duration && tK(Y.Q6.ENDED),
            tL(b.uF.VIDEO_MODAL, U.Cy.SEEK_FORWARD);
    }
    l.useEffect(() => {
        let e = e5.current;
        return () => {
            let t = (0, k.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(k.Wb, tJ);
        };
    }, [tJ]),
        l.useEffect(() => {
            function e(e) {
                return e3.current?.(e);
            }
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
        }, []);
    let t6 = l.useCallback(
            (e) => {
                e2(e), tV(e);
            },
            [e2, tV],
        ),
        t7 = l.useCallback(
            (e) => {
                e7(e);
            },
            [e7],
        ),
        t8 = l.useCallback(
            (e) => {
                null != e5.current &&
                    (tE.info(`[QV] | seekTimeline | timeSec: ${e}`),
                    ez((e / (e5.current.duration ?? 1)) * 100),
                    tj(),
                    eN(!0),
                    (e5.current.currentTime = e),
                    e1(es.id, e, e5.current.duration));
            },
            [e5, e1, es.id, tj, tE],
        );
    l.useEffect(() => {
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
            let t = (0, D.LA)();
            null != t &&
                null != tv.current &&
                tv.current.mainForwardBufferInfo?.len === 0 &&
                tv.current.trigger(t.Events.BUFFER_FLUSHING, {
                    startOffset: e.currentTime,
                    endOffset: 1 / 0,
                    type: "video",
                });
        }
    }, [e5, tv]),
        (0, R.C1)({
            videoRef: e5,
            enabled: !tt,
            onPipPause: () => {
                tK(Y.Q6.PAUSED), ti(b.Yg.PICTURE_IN_PICTURE);
            },
            onHiddenPause: () => {
                tK(Y.Q6.PAUSED), ti(b.Yg.LOST_FOCUS);
            },
        });
    let t2 = l.useRef(!1);
    function t4() {
        if (null != e5.current)
            switch ((tE.info(`[QV] | handlePlaybackBtnClick | playerState: ${eh}`), tQ(), eh)) {
                case Y.Q6.ENDED:
                    t8(0), tK(Y.Q6.PLAYING);
                    break;
                case Y.Q6.PLAYING:
                    tK(Y.Q6.PAUSED), ti(b.Yg.PAUSE_BUTTON);
                    break;
                default:
                    tK(Y.Q6.PLAYING);
            }
    }
    let t5 = l.useCallback(() => {
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
    l.useEffect(() => {
        if (null == e9.current) return;
        let e = e9.current;
        return (
            e.addEventListener("load", t5),
            () => {
                null != e && e.removeEventListener("load", t5);
            }
        );
    }, [e9, t5]);
    let t9 = l.useCallback(
            (e) => {
                tE.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${e5.current?.currentTime}, videoAssetId: ${tC}, connectionSpeed: ${ew}`,
                ),
                    ty(e);
            },
            [ew, ty, e5, tC, tE],
        ),
        t3 = l.useRef(!1);
    function ne(e) {
        tE.info(`[QV] | handleCanPlay: playerState: ${eh}`),
            null != e5.current &&
                eh === Y.Q6.PLAYING &&
                (tE.info("[QV] | handleCanPlay: did NOT early return"),
                eb && (tE.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eb}`), ey(!1)),
                eV &&
                    (tE.info(`[QV] | handleCanPlay: waitingForChunk: ${eV}`),
                    tP(null != eJ.current ? performance.now() - eJ.current : null),
                    eU(!1)),
                tE.info("[QV] | handleCanPlay: updating player state to playing"),
                tK(Y.Q6.PLAYING));
    }
    l.useEffect(() => {
        null != tS || t3.current || ((t3.current = !0), ty(Y.SB.NO_VALID_SOURCE));
    }, [tS, ty, t3]),
        l.useEffect(() => {
            if (!ek) return;
            let e = setTimeout(() => {
                eN(!1);
            }, 1e3);
            return () => clearTimeout(e);
        }, [ek]);
    let [{ controlBarAnimSpring: nt }, nn] = (0, _.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: ei,
            onStart: () => {
                eq(!1);
            },
            onRest: (e) => {
                1 === e.value && eq(!0);
            },
        })),
        nr = (0, l.useRef)(null),
        [{ captionHeightSpring: nl }, ni] = (0, _.z)(() => ({ from: { captionHeightSpring: 0 }, config: ei }));
    l.useEffect(
        () => (
            ni({ captionHeightSpring: e_ && null != ta ? (nr.current?.clientHeight ?? 0) : 0, immediate: e4 }),
            () => {
                nl.stop();
            }
        ),
        [e_, ni, e4, ta, nl],
    ),
        l.useEffect(
            () => (
                nn({ controlBarAnimSpring: tZ || eH ? 1 : 0, immediate: e4 }),
                () => {
                    nt.stop();
                }
            ),
            [tZ, nn, e4, eH, nt],
        );
    let nu = eh === Y.Q6.ENDED,
        ns = l.useMemo(() => (0, V.tW)(es, V.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [es]),
        na = l.useMemo(() => (0, V.tW)(es, V.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [es]),
        no = tt || tc >= (e5.current?.currentTime ?? 0) + 1,
        nc = l.useMemo(() => null === (0, V.tW)(es, V.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [es]),
        nd = tt && e$,
        nE = (0, r.jsx)(L.BK, {
            children: (0, r.jsx)(x.pT, {
                isActive: !0,
                isControlBarExpanded: tZ,
                activeLayer: ec ? L.$W : void 0,
                isFullscreen: ec,
                videoRef: e5,
                children: (0, r.jsx)(m.D, {
                    className: J.W6,
                    "data-fullscreen": ec,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: -1,
                    onMouseEnter: function () {
                        eT(!0),
                            t$(!1),
                            (tW.current = performance.now()),
                            null != tq.current && clearTimeout(tq.current);
                    },
                    onMouseLeave: function () {
                        eT(!1), t$(!1);
                    },
                    onMouseMove: tX,
                    onKeyDown: tX,
                    children: (0, r.jsxs)("div", {
                        className: u()(J.NS, { [J.DO]: "portrait" === X, [J.r7]: "landscape" === X }),
                        style: { "--custom-footer-bottom": "4px" },
                        children: [
                            nu && (0, r.jsx)(F.A, { videoRef: e5, onTrackQuestContentClick: tL, orientation: X }),
                            (0, r.jsxs)(T.A, {
                                ref: (e) => {
                                    (e5.current = e), (eA.current = e);
                                },
                                autoPlay: i,
                                playsInline: !0,
                                mediaLayoutType: ec ? er.dG.STATIC : er.dG.RESPONSIVE,
                                className: u()({ [J.R]: nu, [J.IR]: !0 }),
                                controls: !1,
                                poster: ns?.url,
                                disablePictureInPicture: !0,
                                "data-testid": "discord-web-video-player-video",
                                onTimeUpdate: function (e) {
                                    if (null == e5.current) return;
                                    let r = e5.current.currentTime >= t && !tr.current && tn;
                                    if (e5.current.currentTime >= eF || r) {
                                        var l;
                                        tE.info(
                                            `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${e5.current.currentTime}`,
                                        ),
                                            (l = e5.current.currentTime) >= t && (tr.current = !0),
                                            ej(l + et.aA + Math.random() * et.A6),
                                            tH(l);
                                    }
                                    e5.current.currentTime >= eY &&
                                        (eK(e5.current.currentTime + 1),
                                        (0, N.Gn)(es.id, ex.taskType, e5.current.currentTime),
                                        n(e5.current.currentTime)),
                                        e1(es.id, e5.current.currentTime, e5.current.duration),
                                        eP((e5.current.currentTime / e5.current.duration) * 100);
                                },
                                onEnded: function (e) {
                                    null != e5.current &&
                                        (tH(e5.current.duration + 1),
                                        tE.info(
                                            `[QV] | handleEnded: sending progress update: ${e5.current.duration + 1}`,
                                        ),
                                        e1(es.id, e5.current.duration, e5.current.duration)),
                                        tK(Y.Q6.ENDED),
                                        eU(!1);
                                },
                                onLoadedData: function (e) {
                                    tE.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eb}`),
                                        eb &&
                                            (tI(null != eZ.current ? performance.now() - eZ.current : null),
                                            ey(!1),
                                            th());
                                },
                                onLoadedMetadata: function (e) {
                                    null != e5.current &&
                                        (tE.info(`[QV] | handleLoadedMetadata | videoAssetId: ${tC}`),
                                        tB(null),
                                        tC !== V.fY.VIDEO_PLAYER_VIDEO_HLS && t8(tf),
                                        e6 ? (e5.current.volume = 0) : (e5.current.volume = e8));
                                },
                                onLoadStart: function () {
                                    (eZ.current = performance.now()),
                                        (t2.current = !1),
                                        tg(ew),
                                        tE.info(`[QV] | handleLoadStart | loadingStartTime: ${eZ.current}`);
                                },
                                onPlaying: function () {
                                    if (!eX.current) return;
                                    let e = performance.now() - z;
                                    tE.info(`[QV] | \u{23F0} Video FCP: ${e}ms`), tN(e), (eX.current = !1);
                                },
                                onWaiting: function (e) {
                                    (eJ.current = performance.now()),
                                        tE.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eJ.current}`),
                                        tO(),
                                        eU(!0);
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
                                onCanPlay: ne,
                                onCanPlayThrough: ne,
                                onSeeked: function () {
                                    tE.info("[QV] | handleSeeked"), t2.current || ((t2.current = !0), tF(0));
                                },
                                onAbort: function () {
                                    return t9(Y.SB.ABORT);
                                },
                                onError: function () {
                                    return t9(Y.SB.ERROR);
                                },
                                onEmptied: function () {
                                    return t9(Y.SB.EMPTIED);
                                },
                                onStalled: function () {
                                    return t9(Y.SB.STALLED);
                                },
                                onClick: function () {
                                    tE.info("[QV] | handleVideoClick"), t4();
                                },
                                crossOrigin: "anonymous",
                                children: [
                                    null != na &&
                                        (0, r.jsx)("track", {
                                            ref: e9,
                                            src: na.url,
                                            label: "English",
                                            kind: "captions",
                                            srcLang: "en",
                                            default: !0,
                                        }),
                                    null != tS &&
                                        tC !== V.fY.VIDEO_PLAYER_VIDEO_HLS &&
                                        null != tS.mimetype &&
                                        (0, r.jsx)("source", {
                                            onError: function () {
                                                return t9(Y.SB.SOURCE_ERROR);
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
                                    children: (0, r.jsx)(p.y, { type: p.y.Type.WANDERING_CUBES }),
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
                                        icon: C.P,
                                        "aria-label": el.intl.string(el.t.cpT0Cq),
                                        onClick: eo,
                                    }),
                                ],
                            }),
                            eE &&
                                eh !== Y.Q6.ENDED &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(m.D, {
                                            onClick: () => {
                                                eh === Y.Q6.PAUSED && tK(Y.Q6.PLAYING), ef(!1);
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: J.BG }),
                                        }),
                                        (0, r.jsx)(s.animated.div, {
                                            className: u()(J.xr, { [J.MZ]: "portrait" === X }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, s.to)([nt, nl], (e, t) => `${e * tp[t_] + t}px`),
                                            },
                                            children: (0, r.jsx)(ee, {
                                                quest: es,
                                                onClose: function () {
                                                    ef(!1), tL(b.uF.VIDEO_MODAL, U.Cy.TRANSCRIPT_DISABLE);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(s.animated.div, {
                                className: J.Jp,
                                style: {
                                    opacity: (0, s.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                },
                            }),
                            tu &&
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: u()(J.yf, {
                                            [J.ZH]: eh === Y.Q6.PLAYING,
                                            [J.v7]: eh === Y.Q6.PAUSED,
                                        }),
                                        style: { "--custom-play-pause-pop-ms": "1000ms" },
                                        children:
                                            eh === Y.Q6.PLAYING
                                                ? (0, r.jsx)(v.u, { className: J.PK })
                                                : (0, r.jsx)(A.E, { className: J.PK }),
                                    },
                                    eh,
                                ),
                            e_ &&
                                null != ta &&
                                !nu &&
                                (0, r.jsx)(s.animated.div, {
                                    className: J.o$,
                                    ref: nr,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, s.to)(
                                            [nt.to({ range: [0, 1], output: [-20, -tp[t_]] })],
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
                                    height: (0, s.to)([nt.to({ range: [0, 1], output: [0, tp[t_]] })], (e) => `${e}px`),
                                },
                                children: [
                                    (0, r.jsx)(s.animated.div, {
                                        style: {
                                            transform: (0, s.to)(
                                                [nt.to({ range: [1, 0], output: [0, 1] })],
                                                (e) => `translateY(-${20 * e}px)`,
                                            ),
                                        },
                                        children: (0, r.jsx)(W, {
                                            percent: null != eW ? eW : eL,
                                            animate: !0 !== te.current && !ek,
                                            interactionEnabled: nd,
                                            playerState: eh,
                                            preloadedBuffers: tZ ? eQ : void 0,
                                            durationSec: e5.current?.duration ?? 1,
                                            isFullyVisible: tZ && e$,
                                            maxSeekableTime: tZ && e$ ? td : void 0,
                                            onClick: function (e) {
                                                nd && (t8(e), eh === Y.Q6.ENDED && tK(Y.Q6.PLAYING));
                                            },
                                            onScrubBack: t0,
                                            onScrubForward: t1,
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
                                                [nt.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e * e * 20}px`,
                                            ),
                                            paddingBottom: (0, s.to)(
                                                [nt.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e * e * 12}px`,
                                            ),
                                            pointerEvents: (0, s.to)([nt.to({ range: [0, 1], output: [0, 1] })], (e) =>
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
                                            animSpring: nt,
                                            visible: tZ,
                                            seekForwardEnabled: no,
                                            hideCaptionBtn: null == na,
                                            hideTranscriptBtn: nc,
                                            hideSkipButtons: "portrait" === X,
                                            hidePlaybackSpeedBtn: !0,
                                            size: t_,
                                            autoFocus: $,
                                            keyDownHandlerRef: e3,
                                            volume: e8,
                                            muted: e6,
                                            transcriptEnabled: eE,
                                            captionEnabled: e_,
                                            handlePlaybackBtnClick: t4,
                                            handleTranscriptBtnClick: function () {
                                                ef(!eE),
                                                    tL(
                                                        b.uF.VIDEO_MODAL,
                                                        eE ? U.Cy.TRANSCRIPT_DISABLE : U.Cy.TRANSCRIPT_ENABLE,
                                                    );
                                            },
                                            handleCaptionBtnClick: function () {
                                                em(!e_),
                                                    tL(
                                                        b.uF.VIDEO_MODAL,
                                                        e_
                                                            ? U.Cy.CLOSED_CAPTIONING_DISABLE
                                                            : U.Cy.CLOSED_CAPTIONING_ENABLE,
                                                    );
                                            },
                                            handleFullScreenBtnClick: () => {
                                                let e = !ec;
                                                tE.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                                let t = (0, k.qf)(e5.current?.parentNode, e5.current);
                                                e && null != t
                                                    ? ((0, k.tl)(t), t.addEventListener(k.Wb, tJ), tb(!0), tm(Y.oA.LG))
                                                    : e ||
                                                      null == t ||
                                                      (t.removeEventListener(k.Wb, tJ),
                                                      tb(!1),
                                                      (0, k.sP)(t),
                                                      tm(Y.oA.MD)),
                                                    ed(e);
                                            },
                                            handleSeekBackBtnClick: t0,
                                            handleSeekForwardBtnClick: t1,
                                            handleControlBarPendingInteraction: eG,
                                            onVolumeChange: t6,
                                            onMutedChange: t7,
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
    return (0, r.jsx)(o.Jh, { enabled: ec, children: nE });
}
