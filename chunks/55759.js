n.d(t, { A: () => er }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    u = n.n(i),
    a = n(580929),
    s = n(942381),
    o = n(17928),
    c = n(876230),
    d = n(645577),
    E = n(231723),
    f = n(717421),
    _ = n(939249),
    m = n(289873),
    p = n(408278),
    S = n(789645),
    C = n(782134),
    v = n(113494),
    A = n(834730),
    g = n(964486),
    h = n(775602),
    I = n(607470),
    T = n(53200),
    D = n(613373),
    R = n(544180),
    x = n(723702),
    L = n(475815),
    O = n(340124),
    P = n(24001),
    N = n(405670),
    k = n(46948),
    b = n(590202),
    y = n(851936),
    V = n(792620),
    U = n(753386),
    Q = n(795068),
    M = n(678968),
    w = n(576199),
    B = n(163961),
    F = n(758423),
    Y = n(458817),
    j = n(854356),
    K = n(979204),
    H = n(924838);
function G(e) {
    let {
            targetSec: t,
            isFullyVisible: n,
            percent: i,
            animate: u,
            interactionEnabled: a,
            isQuestCompleted: s,
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
        { quest: C, sourceQuestContent: v, useNewProgressBarStyling: A } = l.useContext(Q.a),
        { questConfig: g } = l.useContext(Q.l),
        h = (0, K.A)({ targetSec: t, quest: C, sourceQuestContent: v, questConfig: g, clickable: !0 });
    return (0, r.jsx)(D.uI, {
        isFullyVisible: n,
        percent: i,
        animate: u,
        interactionEnabled: a,
        playerState: f,
        backgroundColor: o,
        preloadedBuffers: c,
        durationSec: d,
        maxSeekableTime: E,
        segmentBorderRadius: A ? 99 : 8,
        progressClassName: !s && A ? H.q : H.c,
        timelineHeightPx: A ? 4 : 2,
        hoverTimelineHeightPx: A ? void 0 : 4,
        initialTimelineHeightPx: A ? 4 : 2,
        onClick: _,
        onScrubBack: m,
        onScrubForward: p,
        indicatorConfig: h,
        onIndicatorSeek: _,
        "data-testid": S,
    });
}
var $ = n(534514),
    q = n(187322),
    W = n(364522),
    z = n(834926);
function X(e) {
    let { quest: t, onClose: n } = e,
        i = (0, N.Kr)((e) => e.transcript);
    l.useEffect(() => {
        let e = (0, k.tW)(t, k.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == i ||
            i.questId !== t.id ||
            i.fetchStatus === N.Lx.NONE ||
            (i.fetchStatus === N.Lx.SUCCESS && e?.url !== i.url)) &&
            (0, O.qY)(t);
    }, [i, t]);
    let u = i?.questId === t.id && i?.fetchStatus === N.Lx.SUCCESS ? (i.text ?? "") : "",
        a = l.useMemo(
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
                className: z.Mm,
                children: [
                    (0, r.jsx)($.D, { variant: "heading-md/semibold", color: "currentColor", children: "Transcript" }),
                    (0, r.jsx)(_.D, {
                        onClick: n,
                        className: z.GI,
                        children: (0, r.jsx)(S.P, { color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsx)(q.vN, {
                children: (0, r.jsx)(W.Ar, {
                    className: z.j5,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: z.FN,
                        children:
                            i?.fetchStatus === N.Lx.FETCHING
                                ? (0, r.jsx)("div", {
                                      className: z.Cw,
                                      children: (0, r.jsx)(m.y, { type: m.y.Type.WANDERING_CUBES }),
                                  })
                                : (0, r.jsx)($.D, {
                                      variant: "heading-md/normal",
                                      color: "text-muted",
                                      children: a.map((e, t) => (0, r.jsx)("p", { children: e }, t)),
                                  }),
                    }),
                }),
            }),
        ],
    });
}
var Z = n(190107),
    J = n(652215),
    ee = n(838541),
    et = n(375708);
let en = { tension: 250, friction: 5, clamp: !0 };
function er(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: i,
            autoFocus: K = !0,
            parentTransitionState: H,
            openedAtMs: $,
            orientation: q,
            videoUrlOverride: W,
        } = e,
        {
            sourceQuestContent: er,
            quest: el,
            videoSessionId: ei,
            onClose: eu,
            isFullscreenEnabled: ea,
            setIsFullscreenEnabled: es,
            useNewProgressBarStyling: eo,
        } = l.useContext(Q.a),
        ec = (0, N.Kr)((e) => e.transcriptEnabled),
        ed = (0, N.Kr)((e) => e.setTranscriptEnabled),
        eE = (0, N.Kr)((e) => e.captionEnabled),
        ef = (0, N.Kr)((e) => e.setCaptionEnabled),
        { focused: e_, focusedChanged: em } = (0, D.A7)(),
        { visible: ep, visibleChanged: eS, targetRef: eC } = (0, D.O7)(),
        [ev, eA] = l.useState(!0 === i ? B.Q6.PLAYING : B.Q6.PAUSED),
        [eg, eh] = l.useState(!1),
        [eI, eT] = l.useState(!1),
        eD = (0, V.Yh)(el),
        [eR, ex] = l.useState(eD.percentComplete),
        eL = l.useCallback((e) => {
            eq(null), ex(e);
        }, []),
        [eO, eP] = l.useState(!1),
        [eN, ek] = l.useState(!0),
        [eb, ey] = l.useState(!1),
        [eV, eU] = l.useState([]),
        [eQ, eM] = l.useState(R.A.getEffectiveConnectionSpeed()),
        [ew, eB] = l.useState(0),
        [eF, eY] = l.useState(0),
        [ej, eK] = l.useState(!1),
        [eH, eG] = l.useState(!1),
        [e$, eq] = l.useState(null),
        eW = l.useRef(!0),
        ez = l.useRef(null),
        eX = l.useRef(null),
        eZ = (0, N.Kr)((e) => e.videoProgress[el.id] ?? N.yc, s.x),
        eJ = (0, N.Kr)((e) => e.setVideoProgress),
        e0 = (0, N.Kr)((e) => e.muted),
        e1 = (0, N.Kr)((e) => e.setMuted),
        e6 = (0, N.Kr)((e) => e.volume),
        e7 = (0, N.Kr)((e) => e.setVolume),
        e4 = (0, o.bG)([h.Ay], () => h.Ay.useReducedMotion),
        e8 = (0, l.useRef)(null),
        e2 = (0, l.useRef)(null),
        e9 = (0, l.useRef)(null),
        e3 = l.useRef(!0),
        e5 = el.userStatus?.completedAt != null,
        te = l.useMemo(() => el.config.features.includes(Z.Li.FULL_EPISODE_VIDEO_QUEST), [el.config.features]),
        tt = l.useRef(!1),
        [tn, tr] = l.useState(null),
        [tl, ti] = l.useState(!1),
        [tu, ta] = l.useState(null),
        ts = Math.max(eZ.maxTimestampSec, eD.progressSeconds),
        to = e5 ? (e8.current?.duration ?? 0) : (0, U.vd)(ts, eZ.duration),
        tc = l.useMemo(() => (0, y.L)({ quest: el, location: Z.rE.VIDEO_MODAL }), [el]),
        td = (0, d.g)(e5, eZ, eD.progressSeconds),
        [tE, tf] = l.useState(B.oA.MD),
        t_ = { [B.oA.MD]: eo ? 56 : 50, [B.oA.LG]: eo ? 64 : 58 };
    (0, g.u5)(() => {
        e3.current &&
            ((e3.current = !1),
            eM(R.A.getEffectiveConnectionSpeed()),
            e5 && eZ.timestampSec >= eZ.duration && eJ(el.id, 0, eZ.duration));
    });
    let { videoAsset: tm, videoAssetType: tp, hlsRef: tS, hls: tC, onFirstChunkLoaded: tv } = (0, F.A)(e8, eQ, td, W),
        {
            trackQuestVideoLoadingStarted: tA,
            trackQuestVideoLoadingEnded: tg,
            trackQuestVideoProgressed: th,
            trackQuestVideoResumed: tI,
            trackQuestVideoPaused: tT,
            trackQuestVideoFocusChange: tD,
            trackQuestContentClick: tR,
            trackQuestVideoBufferingStarted: tx,
            trackQuestVideoBufferingEnded: tL,
            trackQuestVideoSegmentWatched: tO,
            trackQuestVideoTimeToFirstFrame: tP,
            trackQuestVideoFullscreenChanged: tN,
            trackQuestVideoError: tk,
            trackQuestVideoVolumeChanged: tb,
        } = (0, Y.A)({
            questId: el.id,
            isQuestCompleted: e5,
            videoRef: e8,
            hlsRef: tS,
            hls: tC,
            videoSessionId: ei,
            videoAssetId: tp,
            sourceQuestContent: er,
            logger: tc,
            isFullEpisodeVideoQuest: te,
        });
    (0, j.A)({ videoAssetUrl: tm?.url, videoRef: e8, hls: tC, videoAssetType: tp });
    let ty = l.useRef(null),
        tV = l.useCallback(() => {
            clearTimeout(ty.current),
                ti(!0),
                (ty.current = setTimeout(() => {
                    ti(!1);
                }, 1e3));
        }, []);
    l.useEffect(
        () => () => {
            null != ty.current && clearTimeout(ty.current);
        },
        [],
    );
    let tU = l.useCallback(() => e8.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: tQ,
            handleLoadEnd: tM,
            handleFirstFrame: tw,
            handleSeek: tB,
        } = (0, D.Yr)({ getCurrentVideoTime: tU, onAnalytics: tO, emitIntervalMs: D.KI, minSegmentDurationMs: D._4 }),
        tF = l.useRef(tQ);
    l.useEffect(() => {
        tF.current(ev, null);
    }, []);
    let tY = l.useCallback(
        (e) => {
            if ((tc.info(`[QV] | updatePlayerState | playerState: ${e}`), tQ(e, null), eA(e), null != e8.current))
                switch (e) {
                    case B.Q6.PLAYING:
                        e8.current.paused && tI(tn), tr(null), e8.current.play();
                        break;
                    case B.Q6.PAUSED:
                        e8.current.pause(), (eW.current = !1);
                        break;
                    case B.Q6.ENDED:
                        ed(!1);
                }
        },
        [tQ, tI, tn, ed, tc],
    );
    l.useEffect(() => {
        tT(tn);
    }, [tn, tT]),
        l.useEffect(() => {
            em && tD(e_, ev);
        }, [e_, em, ev, tD]);
    let tj = l.useCallback(
        (e) => {
            e5 ||
                el.userStatus?.enrolledAt == null ||
                (tc.info(`[QV] sendServerProgressUpdate: ${e}`), (0, U.zv)(el, e)),
                th();
        },
        [e5, el, tc, th],
    );
    l.useEffect(() => {
        (H !== E.ip.HIDDEN &&
            H !== E.ip.EXITING &&
            H !== E.ip.EXITED &&
            (null == H || !eS || ep || e5) &&
            (!em || e_ || e5)) ||
            null == e8.current ||
            ev !== B.Q6.PLAYING ||
            (tc.info(
                `[QV] | Pausing video | playerState: ${ev}, parentTransitionState: ${H}, visible: ${ep}, focused: ${e_}, isQuestCompleted: ${e5}`,
            ),
            tY(B.Q6.PAUSED),
            e5 ? te && tr(P.Yg.ANOTHER_MODAL_OPENED) : tr(P.Yg.LOST_FOCUS));
    }, [H, e_, em, ep, eS, ev, e5, tY, tj, tc, te]),
        l.useEffect(() => {
            tn === P.Yg.ANOTHER_MODAL_OPENED &&
                H === E.ip.ENTERED &&
                ev === B.Q6.PAUSED &&
                te &&
                e_ &&
                (tc.info("[QV] | Resuming full episode video after modal re-entered"), tY(B.Q6.PLAYING));
        }, [H, ev, tc, tY, tn, te, e_]);
    let [tK, tH] = l.useState(!1),
        tG = l.useRef(null),
        t$ = l.useRef(performance.now()),
        tq = l.useCallback(() => {
            null != tG.current && clearTimeout(tG.current),
                ev !== B.Q6.PLAYING ||
                    (tG.current = setTimeout(
                        () => {
                            ev === B.Q6.PLAYING && tH(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - t$.current)),
                    ));
        }, [ev]);
    function tW() {
        tH(!1), (t$.current = performance.now()), tq();
    }
    l.useEffect(() => {
        if (ev !== B.Q6.PLAYING) {
            tH(!1), null != tG.current && clearTimeout(tG.current);
            return;
        }
        return (
            tq(),
            () => {
                null != tG.current && clearTimeout(tG.current);
            }
        );
    }, [ev, tq]);
    let tz = !tK && (eI || eg || ev === B.Q6.ENDED),
        tX = l.useCallback(() => {
            tc.info("[QV] | handleFullScreenExit");
            let e = (0, L.qf)(e8.current?.parentNode, e8.current);
            null == e || (0, L._U)(e) || (e.removeEventListener(L.Wb, tX), es(!1), tN(!1), tf(B.oA.MD));
        }, [es, tc, tN]),
        tZ = () => {
            if (null == e8.current) return;
            let e = Math.max(e8.current.currentTime - 10, 0);
            tc.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                t6(e),
                ev === B.Q6.ENDED && tY(B.Q6.PAUSED),
                tR(P.uF.VIDEO_MODAL, b.Cy.SEEK_BACKWARD);
        },
        tJ = () => {
            if (null == e8.current || !na) return;
            let e = Math.min(e8.current.currentTime + 10, to);
            tc.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                t6(e),
                ev !== B.Q6.ENDED && e >= e8.current.duration && tY(B.Q6.ENDED),
                tR(P.uF.VIDEO_MODAL, b.Cy.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = e8.current;
        return () => {
            let t = (0, L.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(L.Wb, tX);
        };
    }, [tX]),
        l.useEffect(() => {
            function e(e) {
                return e9.current?.(e);
            }
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
        }, []);
    let t0 = l.useCallback(
            (e) => {
                e7(e), tb(e);
            },
            [e7, tb],
        ),
        t1 = l.useCallback(
            (e) => {
                e1(e);
            },
            [e1],
        ),
        t6 = l.useCallback(
            (e) => {
                null != e8.current &&
                    (tc.info(`[QV] | seekTimeline | timeSec: ${e}`),
                    eq((e / (e8.current.duration ?? 1)) * 100),
                    tB(),
                    eP(!0),
                    (e8.current.currentTime = e),
                    eJ(el.id, e, e8.current.duration));
            },
            [e8, eJ, el.id, tB, tc],
        );
    l.useEffect(() => {
        let e = e8.current;
        if (null == e) return;
        let t = () => {
            let t = (0, T.LA)();
            null != t &&
                null != tS.current &&
                tS.current.mainForwardBufferInfo?.len === 0 &&
                tS.current.trigger(t.Events.BUFFER_FLUSHING, {
                    startOffset: e.currentTime,
                    endOffset: 1 / 0,
                    type: "video",
                });
        };
        return (
            e.addEventListener("seeking", t),
            () => {
                e.removeEventListener("seeking", t);
            }
        );
    }, [e8, tS]),
        (0, D.C1)({
            videoRef: e8,
            enabled: !e5,
            onPipPause: () => {
                tY(B.Q6.PAUSED), tr(P.Yg.PICTURE_IN_PICTURE);
            },
            onHiddenPause: () => {
                tY(B.Q6.PAUSED), tr(P.Yg.LOST_FOCUS);
            },
        });
    let t7 = l.useRef(!1);
    function t4() {
        if (null != e8.current)
            switch ((tc.info(`[QV] | handlePlaybackBtnClick | playerState: ${ev}`), tV(), ev)) {
                case B.Q6.ENDED:
                    t6(0), tY(B.Q6.PLAYING);
                    break;
                case B.Q6.PLAYING:
                    tY(B.Q6.PAUSED), tr(P.Yg.PAUSE_BUTTON);
                    break;
                default:
                    tY(B.Q6.PLAYING);
            }
    }
    let t8 = l.useCallback(() => {
        if (
            null == e8.current ||
            (tc.info(`[QV] | handleTracksLoaded: textTracks.length: ${e8.current.textTracks.length}`),
            0 === e8.current.textTracks.length)
        )
            return;
        let e = e8.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, D.Ce)(n) &&
                    ((n.id = `cue-${t}`),
                    (n.onenter = () => {
                        ta(n);
                    }),
                    (n.onexit = () =>
                        (function (e) {
                            ta((t) => (t?.id === e.id ? null : t));
                        })(n)));
            }
    }, [e8, tc]);
    l.useEffect(() => {
        if (null == e2.current) return;
        let e = e2.current;
        return (
            e.addEventListener("load", t8),
            () => {
                null != e && e.removeEventListener("load", t8);
            }
        );
    }, [e2, t8]);
    let t2 = l.useCallback(
            (e) => {
                tc.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${e8.current?.currentTime}, videoAssetId: ${tp}, connectionSpeed: ${eQ}`,
                ),
                    tk(e);
            },
            [eQ, tk, e8, tp, tc],
        ),
        t9 = l.useRef(!1);
    l.useEffect(() => {
        null != tm || t9.current || ((t9.current = !0), tk(B.SB.NO_VALID_SOURCE));
    }, [tm, tk, t9]);
    let t3 = (e) => {
        tc.info(`[QV] | handleCanPlay: playerState: ${ev}`),
            null != e8.current &&
                ev === B.Q6.PLAYING &&
                (tc.info("[QV] | handleCanPlay: did NOT early return"),
                eN && (tc.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eN}`), ek(!1)),
                eb &&
                    (tc.info(`[QV] | handleCanPlay: waitingForChunk: ${eb}`),
                    tL(null != eX.current ? performance.now() - eX.current : null),
                    ey(!1)),
                tc.info("[QV] | handleCanPlay: updating player state to playing"),
                tY(B.Q6.PLAYING));
    };
    l.useEffect(() => {
        if (!eO) return;
        let e = setTimeout(() => {
            eP(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eO]);
    let [{ controlBarAnimSpring: t5 }, ne] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: en,
            onStart: () => {
                eG(!1);
            },
            onRest: (e) => {
                1 === e.value && eG(!0);
            },
        })),
        nt = (0, l.useRef)(null),
        [{ captionHeightSpring: nn }, nr] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: en }));
    l.useEffect(
        () => (
            nr({ captionHeightSpring: eE && null != tu ? (nt.current?.clientHeight ?? 0) : 0, immediate: e4 }),
            () => {
                nn.stop();
            }
        ),
        [eE, nr, e4, tu, nn],
    ),
        l.useEffect(
            () => (
                ne({ controlBarAnimSpring: tz || ej ? 1 : 0, immediate: e4 }),
                () => {
                    t5.stop();
                }
            ),
            [tz, ne, e4, ej, t5],
        );
    let nl = ev === B.Q6.ENDED,
        ni = l.useMemo(() => (0, k.tW)(el, k.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [el]),
        nu = l.useMemo(() => (0, k.tW)(el, k.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [el]),
        na = e5 || ts >= (e8.current?.currentTime ?? 0) + 1,
        ns = l.useMemo(() => null === (0, k.tW)(el, k.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [el]),
        no = eo ? 20 : 12,
        nc = 20 * !!eo,
        nd = e5 && eH;
    return (0, r.jsx)(_.D, {
        className: z.W6,
        "data-fullscreen": ea,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: function () {
            eh(!0), tH(!1), (t$.current = performance.now()), null != tG.current && clearTimeout(tG.current);
        },
        onMouseLeave: function () {
            eh(!1), tH(!1);
        },
        onMouseMove: tW,
        onKeyDown: tW,
        children: (0, r.jsxs)("div", {
            className: u()(z.NS, { [z.DO]: "portrait" === q, [z.r7]: "landscape" === q }),
            style: { "--custom-footer-bottom": `${eo ? 4 : 2}px` },
            children: [
                nl && (0, r.jsx)(M.A, { videoRef: e8, onTrackQuestContentClick: tR, orientation: q }),
                (0, r.jsxs)(I.A, {
                    ref: (e) => {
                        (e8.current = e), (eC.current = e);
                    },
                    autoPlay: i,
                    playsInline: !0,
                    mediaLayoutType: ea ? ee.dG.STATIC : ee.dG.RESPONSIVE,
                    className: u()({ [z.R]: nl, [z.IR]: !0 }),
                    controls: !1,
                    poster: ni?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: function (e) {
                        if (null == e8.current) return;
                        let r = e8.current.currentTime >= t && !tt.current && te;
                        if (e8.current.currentTime >= ew || r) {
                            var l;
                            tc.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${e8.current.currentTime}`,
                            ),
                                (l = e8.current.currentTime) >= t && (tt.current = !0),
                                eB(l + Z.aA + Math.random() * Z.A6),
                                tj(l);
                        }
                        e8.current.currentTime >= eF &&
                            (eY(e8.current.currentTime + 1),
                            (0, O.Gn)(el.id, eD.taskType, e8.current.currentTime),
                            n(e8.current.currentTime)),
                            eJ(el.id, e8.current.currentTime, e8.current.duration),
                            eL((e8.current.currentTime / e8.current.duration) * 100);
                    },
                    onEnded: function (e) {
                        null != e8.current &&
                            (tj(e8.current.duration + 1),
                            tc.info(`[QV] | handleEnded: sending progress update: ${e8.current.duration + 1}`),
                            eJ(el.id, e8.current.duration, e8.current.duration)),
                            tY(B.Q6.ENDED),
                            ey(!1);
                    },
                    onLoadedData: function (e) {
                        tc.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eN}`),
                            eN && (tg(null != ez.current ? performance.now() - ez.current : null), ek(!1), tv());
                    },
                    onLoadedMetadata: function (e) {
                        null != e8.current &&
                            (tc.info(`[QV] | handleLoadedMetadata | videoAssetId: ${tp}`),
                            tM(null),
                            tp !== k.fY.VIDEO_PLAYER_VIDEO_HLS && t6(td),
                            e0 ? (e8.current.volume = 0) : (e8.current.volume = e6));
                    },
                    onLoadStart: function () {
                        (ez.current = performance.now()),
                            (t7.current = !1),
                            tA(eQ),
                            tc.info(`[QV] | handleLoadStart | loadingStartTime: ${ez.current}`);
                    },
                    onPlaying: function () {
                        if (!eW.current) return;
                        let e = performance.now() - $;
                        tc.info(`[QV] | \u{23F0} Video FCP: ${e}ms`), tP(e), (eW.current = !1);
                    },
                    onWaiting: function (e) {
                        (eX.current = performance.now()),
                            tc.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eX.current}`),
                            tx(),
                            ey(!0);
                    },
                    onProgress: function (e) {
                        if (null == e8.current) return;
                        tc.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${e8.current.buffered.length}`);
                        let t = [];
                        for (let e = 0; e < e8.current.buffered.length; e++) {
                            let n = e8.current.buffered.start(e),
                                r = e8.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / e8.current.duration, size: (r - n) / e8.current.duration });
                        }
                        eU(t);
                    },
                    onCanPlay: t3,
                    onCanPlayThrough: t3,
                    onSeeked: function () {
                        tc.info("[QV] | handleSeeked"), t7.current || ((t7.current = !0), tw(0));
                    },
                    onAbort: function () {
                        return t2(B.SB.ABORT);
                    },
                    onError: function () {
                        return t2(B.SB.ERROR);
                    },
                    onEmptied: function () {
                        return t2(B.SB.EMPTIED);
                    },
                    onStalled: function () {
                        return t2(B.SB.STALLED);
                    },
                    onClick: function () {
                        tc.info("[QV] | handleVideoClick"), t4();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != nu &&
                            (0, r.jsx)("track", {
                                ref: e2,
                                src: nu.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != tm &&
                            tp !== k.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != tm.mimetype &&
                            (0, r.jsx)("source", {
                                onError: function () {
                                    return t2(B.SB.SOURCE_ERROR);
                                },
                                src: tm.url,
                                type: tm.mimetype,
                            }),
                    ],
                }),
                (eN || eb) &&
                    ev === B.Q6.PLAYING &&
                    null != tm &&
                    (0, r.jsx)("span", {
                        className: z.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(m.y, { type: m.y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(D.DQ, {
                    message: (function (e) {
                        let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                        return t
                            ? n === B.Q6.PAUSED && (r === c.KB.FOCUS || r === c.KB.PICTURE_IN_PICTURE)
                                ? et.intl.string(et.t.w6PeBF)
                                : null
                            : (0, x.isWeb)()
                              ? et.intl.string(et.t["E1du/q"])
                              : et.intl.string(et.t["rStN/7"]);
                    })({
                        hasVideoAsset: null != tm,
                        playerState: ev,
                        pauseReason: (function (e) {
                            switch (e) {
                                case P.Yg.PAUSE_BUTTON:
                                    return c.KB.USER;
                                case P.Yg.LOST_FOCUS:
                                    return c.KB.FOCUS;
                                case P.Yg.MODAL_CLOSED:
                                    return c.KB.VISIBILITY;
                                case P.Yg.PICTURE_IN_PICTURE:
                                    return c.KB.PICTURE_IN_PICTURE;
                                default:
                                    return null;
                            }
                        })(tn),
                    }),
                    showOverlay: null == tm,
                }),
                eo
                    ? (0, r.jsxs)("div", {
                          className: z.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          children: [
                              (0, r.jsx)(w.A, {}),
                              (0, r.jsx)(p.K, {
                                  variant: "overlay-secondary",
                                  icon: S.P,
                                  "aria-label": et.intl.string(et.t.cpT0Cq),
                                  onClick: eu,
                              }),
                          ],
                      })
                    : (0, r.jsx)(a.animated.div, {
                          className: z.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          style: {
                              opacity: (0, a.to)([t5.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                              visibility: (0, a.to)([t5.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.1 ? "hidden" : "visible",
                              ),
                              pointerEvents: (0, a.to)([t5.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.3 ? "none" : "auto",
                              ),
                          },
                          children: (0, r.jsx)(w.A, {}),
                      }),
                ec &&
                    ev !== B.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(_.D, {
                                onClick: () => {
                                    ev === B.Q6.PAUSED && tY(B.Q6.PLAYING), ed(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: z.BG }),
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: u()(z.xr, { [z.MZ]: "portrait" === q }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, a.to)([t5, nn], (e, t) => `${e * t_[tE] + t}px`) },
                                children: (0, r.jsx)(X, {
                                    quest: el,
                                    onClose: function () {
                                        ed(!1), tR(P.uF.VIDEO_MODAL, b.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(a.animated.div, {
                    className: z.Jp,
                    style: { opacity: (0, a.to)([t5.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                tl &&
                    (0, r.jsx)(
                        "div",
                        {
                            className: u()(z.yf, { [z.ZH]: ev === B.Q6.PLAYING, [z.v7]: ev === B.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ev === B.Q6.PLAYING
                                    ? (0, r.jsx)(C.u, { className: z.PK })
                                    : (0, r.jsx)(v.E, { className: z.PK }),
                        },
                        ev,
                    ),
                eE &&
                    null != tu &&
                    !nl &&
                    (0, r.jsx)(a.animated.div, {
                        className: z.o$,
                        ref: nt,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, a.to)([t5.to({ range: [0, 1], output: [-nc, -t_[tE]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(A.E, {
                            variant: "text-lg/semibold",
                            color: "text-overlay-light",
                            className: z.qh,
                            children: tu.text,
                        }),
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: z.r8,
                    style: { height: (0, a.to)([t5.to({ range: [0, 1], output: [0, t_[tE]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(a.animated.div, {
                            style: {
                                transform: (0, a.to)(
                                    [t5.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${e * nc}px)`,
                                ),
                            },
                            children: (0, r.jsx)(G, {
                                percent: null != e$ ? e$ : eR,
                                animate: !0 !== e3.current && !eO,
                                interactionEnabled: nd,
                                playerState: ev,
                                preloadedBuffers: tz ? eV : void 0,
                                durationSec: e8.current?.duration ?? 1,
                                isFullyVisible: tz && eH,
                                maxSeekableTime: tz && eH ? to : void 0,
                                onClick: function (e) {
                                    nd && (t6(e), ev === B.Q6.ENDED && tY(B.Q6.PLAYING));
                                },
                                onScrubBack: tZ,
                                onScrubForward: tJ,
                                isQuestCompleted: e5,
                                targetSec: t,
                                "data-testid": "discord-web-video-player-timeline",
                            }),
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: z.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, a.to)(
                                    [t5.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * no}px`,
                                ),
                                paddingBottom: (0, a.to)(
                                    [t5.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, a.to)([t5.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: function () {
                                return eT(!0);
                            },
                            onBlur: function () {
                                return eT(!1);
                            },
                            children: (0, r.jsx)(D.zZ, {
                                videoRef: e8,
                                playerState: ev,
                                animSpring: t5,
                                visible: tz,
                                seekForwardEnabled: na,
                                hideCaptionBtn: null == nu,
                                hideTranscriptBtn: ns,
                                hideSkipButtons: "portrait" === q,
                                hidePlaybackSpeedBtn: !0,
                                size: tE,
                                autoFocus: K,
                                keyDownHandlerRef: e9,
                                volume: e6,
                                muted: e0,
                                transcriptEnabled: ec,
                                captionEnabled: eE,
                                fullScreenEnabled: ea,
                                handlePlaybackBtnClick: t4,
                                handleTranscriptBtnClick: function () {
                                    ed(!ec),
                                        tR(P.uF.VIDEO_MODAL, ec ? b.Cy.TRANSCRIPT_DISABLE : b.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: function () {
                                    ef(!eE),
                                        tR(
                                            P.uF.VIDEO_MODAL,
                                            eE ? b.Cy.CLOSED_CAPTIONING_DISABLE : b.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !ea;
                                    tc.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, L.qf)(e8.current?.parentNode, e8.current);
                                    e && null != t
                                        ? ((0, L.tl)(t), t.addEventListener(L.Wb, tX), tN(!0), tf(B.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(L.Wb, tX), tN(!1), (0, L.sP)(t), tf(B.oA.MD)),
                                        es(e);
                                },
                                handleSeekBackBtnClick: tZ,
                                handleSeekForwardBtnClick: tJ,
                                handleControlBarPendingInteraction: eK,
                                onVolumeChange: t0,
                                onMutedChange: t1,
                                onVolumeExpandedChange: J.FXj,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
