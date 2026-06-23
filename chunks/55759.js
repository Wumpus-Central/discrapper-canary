n.d(t, { A: () => er }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(771253),
    u = n(308186),
    o = n(942381),
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
    g = n(834730),
    h = n(964486),
    I = n(775602),
    D = n(607470),
    T = n(613373),
    R = n(544180),
    x = n(723702),
    O = n(475815),
    L = n(340124),
    P = n(507107),
    b = n(405670),
    k = n(551875),
    N = n(590202),
    y = n(851936),
    V = n(792620),
    U = n(753386),
    Q = n(795068),
    w = n(678968),
    M = n(576199),
    B = n(163961),
    F = n(758423),
    Y = n(458817),
    j = n(854356),
    H = n(979204),
    K = n(924838);
function G(e) {
    let {
            targetSec: t,
            isFullyVisible: n,
            percent: i,
            animate: s,
            interactionEnabled: a,
            isQuestCompleted: u,
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
        h = (0, H.A)({ targetSec: t, quest: C, sourceQuestContent: v, questConfig: g, clickable: !0 });
    return (0, r.jsx)(T.uI, {
        isFullyVisible: n,
        percent: i,
        animate: s,
        interactionEnabled: a,
        playerState: f,
        backgroundColor: o,
        preloadedBuffers: c,
        durationSec: d,
        maxSeekableTime: E,
        segmentBorderRadius: A ? 99 : 8,
        progressClassName: !u && A ? K.q : K.c,
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
        i = (0, b.Kr)((e) => e.transcript);
    l.useEffect(() => {
        let e = (0, k.tW)(t, k.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == i ||
            i.questId !== t.id ||
            i.fetchStatus === b.Lx.NONE ||
            (i.fetchStatus === b.Lx.SUCCESS && e?.url !== i.url)) &&
            (0, L.qY)(t);
    }, [i, t]);
    let s = i?.questId === t.id && i?.fetchStatus === b.Lx.SUCCESS ? (i.text ?? "") : "",
        a = l.useMemo(
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
                className: z.Mm,
                children: [
                    (0, r.jsx)($.D, { variant: "heading-md/semibold", color: "currentColor", children: "Transcript" }),
                    (0, r.jsx)(m.D, {
                        onClick: n,
                        className: z.GI,
                        children: (0, r.jsx)(C.P, { color: "currentColor" }),
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
                            i?.fetchStatus === b.Lx.FETCHING
                                ? (0, r.jsx)("div", {
                                      className: z.Cw,
                                      children: (0, r.jsx)(p.y, { type: p.y.Type.WANDERING_CUBES }),
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
            autoFocus: H = !0,
            parentTransitionState: K,
            openedAtMs: $,
            orientation: q,
            videoUrlOverride: W,
        } = e,
        {
            sourceQuestContent: er,
            quest: el,
            videoSessionId: ei,
            onClose: es,
            isFullscreenEnabled: ea,
            setIsFullscreenEnabled: eu,
            useNewProgressBarStyling: eo,
        } = l.useContext(Q.a),
        ec = (0, b.Kr)((e) => e.transcriptEnabled),
        ed = (0, b.Kr)((e) => e.setTranscriptEnabled),
        eE = (0, b.Kr)((e) => e.captionEnabled),
        ef = (0, b.Kr)((e) => e.setCaptionEnabled),
        { focused: e_, focusedChanged: em } = (0, T.A7)(),
        { visible: ep, visibleChanged: eS, targetRef: eC } = (0, T.O7)(),
        [ev, eA] = l.useState(!0 === i ? B.Q6.PLAYING : B.Q6.PAUSED),
        [eg, eh] = l.useState(!1),
        [eI, eD] = l.useState(!1),
        eT = (0, V.Yh)(el),
        [eR, ex] = l.useState(eT.percentComplete),
        eO = l.useCallback((e) => {
            eq(null), ex(e);
        }, []),
        [eL, eP] = l.useState(!1),
        [eb, ek] = l.useState(!0),
        [eN, ey] = l.useState(!1),
        [eV, eU] = l.useState([]),
        [eQ, ew] = l.useState(R.A.getEffectiveConnectionSpeed()),
        [eM, eB] = l.useState(0),
        [eF, eY] = l.useState(0),
        [ej, eH] = l.useState(!1),
        [eK, eG] = l.useState(!1),
        [e$, eq] = l.useState(null),
        eW = l.useRef(!0),
        ez = l.useRef(null),
        eX = l.useRef(null),
        eZ = (0, b.Kr)((e) => e.videoProgress[el.id] ?? b.yc, o.x),
        eJ = (0, b.Kr)((e) => e.setVideoProgress),
        e0 = (0, b.Kr)((e) => e.muted),
        e1 = (0, b.Kr)((e) => e.setMuted),
        e7 = (0, b.Kr)((e) => e.volume),
        e6 = (0, b.Kr)((e) => e.setVolume),
        e5 = (0, c.bG)([I.Ay], () => I.Ay.useReducedMotion),
        e4 = (0, l.useRef)(null),
        e8 = (0, l.useRef)(null),
        e3 = (0, l.useRef)(null),
        e2 = l.useRef(!0),
        e9 = el.userStatus?.completedAt != null,
        te = l.useMemo(() => el.config.features.includes(Z.Li.FULL_EPISODE_VIDEO_QUEST), [el.config.features]),
        tt = l.useRef(!1),
        [tn, tr] = l.useState(null),
        [tl, ti] = l.useState(!1),
        [ts, ta] = l.useState(null),
        tu = Math.max(eZ.maxTimestampSec, eT.progressSeconds),
        to = e9 ? (e4.current?.duration ?? 0) : (0, U.vd)(tu, eZ.duration),
        tc = l.useMemo(() => (0, y.L)({ quest: el, location: Z.rE.VIDEO_MODAL }), [el]),
        td = (0, E.g)(e9, eZ, eT.progressSeconds),
        [tE, tf] = l.useState(B.oA.MD),
        t_ = { [B.oA.MD]: eo ? 56 : 50, [B.oA.LG]: eo ? 64 : 58 };
    (0, h.u5)(() => {
        e2.current &&
            ((e2.current = !1),
            ew(R.A.getEffectiveConnectionSpeed()),
            e9 && eZ.timestampSec >= eZ.duration && eJ(el.id, 0, eZ.duration));
    });
    let { videoAsset: tm, videoAssetType: tp, hlsRef: tS, onFirstChunkLoaded: tC } = (0, F.A)(e4, eQ, td, W),
        {
            trackQuestVideoLoadingStarted: tv,
            trackQuestVideoLoadingEnded: tA,
            trackQuestVideoProgressed: tg,
            trackQuestVideoResumed: th,
            trackQuestVideoPaused: tI,
            trackQuestVideoFocusChange: tD,
            trackQuestContentClick: tT,
            trackQuestVideoBufferingStarted: tR,
            trackQuestVideoBufferingEnded: tx,
            trackQuestVideoSegmentWatched: tO,
            trackQuestVideoTimeToFirstFrame: tL,
            trackQuestVideoFullscreenChanged: tP,
            trackQuestVideoError: tb,
            trackQuestVideoVolumeChanged: tk,
        } = (0, Y.A)({
            questId: el.id,
            isQuestCompleted: e9,
            videoRef: e4,
            hlsRef: tS,
            videoSessionId: ei,
            videoAssetId: tp,
            sourceQuestContent: er,
            logger: tc,
            isFullEpisodeVideoQuest: te,
        });
    (0, j.A)({ videoAssetUrl: tm?.url, videoRef: e4, hlsRef: tS, videoAssetType: tp });
    let tN = l.useRef(null),
        ty = l.useCallback(() => {
            clearTimeout(tN.current),
                ti(!0),
                (tN.current = setTimeout(() => {
                    ti(!1);
                }, 1e3));
        }, []);
    l.useEffect(
        () => () => {
            null != tN.current && clearTimeout(tN.current);
        },
        [],
    );
    let tV = l.useCallback(() => e4.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: tU,
            handleLoadEnd: tQ,
            handleFirstFrame: tw,
            handleSeek: tM,
        } = (0, T.Yr)({ getCurrentVideoTime: tV, onAnalytics: tO, emitIntervalMs: T.KI, minSegmentDurationMs: T._4 }),
        tB = l.useRef(tU);
    l.useEffect(() => {
        tB.current(ev, null);
    }, []);
    let tF = l.useCallback(
        (e) => {
            if ((tc.info(`[QV] | updatePlayerState | playerState: ${e}`), tU(e, null), eA(e), null != e4.current))
                switch (e) {
                    case B.Q6.PLAYING:
                        e4.current.paused && th(tn), tr(null), e4.current.play();
                        break;
                    case B.Q6.PAUSED:
                        e4.current.pause(), (eW.current = !1);
                        break;
                    case B.Q6.ENDED:
                        ed(!1);
                }
        },
        [tU, th, tn, ed, tc],
    );
    l.useEffect(() => {
        tI(tn);
    }, [tn, tI]),
        l.useEffect(() => {
            em && tD(e_, ev);
        }, [e_, em, ev, tD]);
    let tY = l.useCallback(
        (e) => {
            e9 ||
                el.userStatus?.enrolledAt == null ||
                (tc.info(`[QV] sendServerProgressUpdate: ${e}`), (0, U.zv)(el, e)),
                tg();
        },
        [e9, el, tc, tg],
    );
    l.useEffect(() => {
        (K !== f.ip.HIDDEN &&
            K !== f.ip.EXITING &&
            K !== f.ip.EXITED &&
            (null == K || !eS || ep || e9) &&
            (!em || e_ || e9)) ||
            null == e4.current ||
            ev !== B.Q6.PLAYING ||
            (tc.info(
                `[QV] | Pausing video | playerState: ${ev}, parentTransitionState: ${K}, visible: ${ep}, focused: ${e_}, isQuestCompleted: ${e9}`,
            ),
            tF(B.Q6.PAUSED),
            e9 ? te && tr(P.Yg.ANOTHER_MODAL_OPENED) : tr(P.Yg.LOST_FOCUS));
    }, [K, e_, em, ep, eS, ev, e9, tF, tY, tc, te]),
        l.useEffect(() => {
            tn === P.Yg.ANOTHER_MODAL_OPENED &&
                K === f.ip.ENTERED &&
                ev === B.Q6.PAUSED &&
                te &&
                e_ &&
                (tc.info("[QV] | Resuming full episode video after modal re-entered"), tF(B.Q6.PLAYING));
        }, [K, ev, tc, tF, tn, te, e_]);
    let [tj, tH] = l.useState(!1),
        tK = l.useRef(null),
        tG = l.useRef(performance.now()),
        t$ = l.useCallback(() => {
            null != tK.current && clearTimeout(tK.current),
                ev !== B.Q6.PLAYING ||
                    (tK.current = setTimeout(
                        () => {
                            ev === B.Q6.PLAYING && tH(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tG.current)),
                    ));
        }, [ev]);
    function tq() {
        tH(!1), (tG.current = performance.now()), t$();
    }
    l.useEffect(() => {
        if (ev !== B.Q6.PLAYING) {
            tH(!1), null != tK.current && clearTimeout(tK.current);
            return;
        }
        return (
            t$(),
            () => {
                null != tK.current && clearTimeout(tK.current);
            }
        );
    }, [ev, t$]);
    let tW = !tj && (eI || eg || ev === B.Q6.ENDED),
        tz = l.useCallback(() => {
            tc.info("[QV] | handleFullScreenExit");
            let e = (0, O.qf)(e4.current?.parentNode, e4.current);
            null == e || (0, O._U)(e) || (e.removeEventListener(O.Wb, tz), eu(!1), tP(!1), tf(B.oA.MD));
        }, [eu, tc, tP]),
        tX = () => {
            if (null == e4.current) return;
            let e = Math.max(e4.current.currentTime - 10, 0);
            tc.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                t1(e),
                ev === B.Q6.ENDED && tF(B.Q6.PAUSED),
                tT(P.uF.VIDEO_MODAL, N.Cy.SEEK_BACKWARD);
        },
        tZ = () => {
            if (null == e4.current || !ns) return;
            let e = Math.min(e4.current.currentTime + 10, to);
            tc.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                t1(e),
                ev !== B.Q6.ENDED && e >= e4.current.duration && tF(B.Q6.ENDED),
                tT(P.uF.VIDEO_MODAL, N.Cy.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = e4.current;
        return () => {
            let t = (0, O.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(O.Wb, tz);
        };
    }, [tz]),
        l.useEffect(() => {
            function e(e) {
                return e3.current?.(e);
            }
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
        }, []);
    let tJ = l.useCallback(
            (e) => {
                e6(e), tk(e);
            },
            [e6, tk],
        ),
        t0 = l.useCallback(
            (e) => {
                e1(e);
            },
            [e1],
        ),
        t1 = l.useCallback(
            (e) => {
                null != e4.current &&
                    (tc.info(`[QV] | seekTimeline | timeSec: ${e}`),
                    eq((e / (e4.current.duration ?? 1)) * 100),
                    tM(),
                    eP(!0),
                    (e4.current.currentTime = e),
                    eJ(el.id, e, e4.current.duration));
            },
            [e4, eJ, el.id, tM, tc],
        );
    l.useEffect(() => {
        let e = e4.current;
        if (null == e) return;
        let t = () => {
            null != tS.current &&
                tS.current.mainForwardBufferInfo?.len === 0 &&
                tS.current.trigger(a.sV.BUFFER_FLUSHING, {
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
    }, [e4, tS]),
        (0, T.C1)({
            videoRef: e4,
            enabled: !e9,
            onPipPause: () => {
                tF(B.Q6.PAUSED), tr(P.Yg.PICTURE_IN_PICTURE);
            },
            onHiddenPause: () => {
                tF(B.Q6.PAUSED), tr(P.Yg.LOST_FOCUS);
            },
        });
    let t7 = l.useRef(!1);
    function t6() {
        if (null != e4.current)
            switch ((tc.info(`[QV] | handlePlaybackBtnClick | playerState: ${ev}`), ty(), ev)) {
                case B.Q6.ENDED:
                    t1(0), tF(B.Q6.PLAYING);
                    break;
                case B.Q6.PLAYING:
                    tF(B.Q6.PAUSED), tr(P.Yg.PAUSE_BUTTON);
                    break;
                default:
                    tF(B.Q6.PLAYING);
            }
    }
    let t5 = l.useCallback(() => {
        if (
            null == e4.current ||
            (tc.info(`[QV] | handleTracksLoaded: textTracks.length: ${e4.current.textTracks.length}`),
            0 === e4.current.textTracks.length)
        )
            return;
        let e = e4.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, T.Ce)(n) &&
                    ((n.id = `cue-${t}`),
                    (n.onenter = () => {
                        ta(n);
                    }),
                    (n.onexit = () =>
                        (function (e) {
                            ta((t) => (t?.id === e.id ? null : t));
                        })(n)));
            }
    }, [e4, tc]);
    l.useEffect(() => {
        if (null == e8.current) return;
        let e = e8.current;
        return (
            e.addEventListener("load", t5),
            () => {
                null != e && e.removeEventListener("load", t5);
            }
        );
    }, [e8, t5]);
    let t4 = l.useCallback(
            (e) => {
                tc.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${e4.current?.currentTime}, videoAssetId: ${tp}, connectionSpeed: ${eQ}`,
                ),
                    tb(e);
            },
            [eQ, tb, e4, tp, tc],
        ),
        t8 = l.useRef(!1);
    l.useEffect(() => {
        null != tm || t8.current || ((t8.current = !0), tb(B.SB.NO_VALID_SOURCE));
    }, [tm, tb, t8]);
    let t3 = (e) => {
        tc.info(`[QV] | handleCanPlay: playerState: ${ev}`),
            null != e4.current &&
                ev === B.Q6.PLAYING &&
                (tc.info("[QV] | handleCanPlay: did NOT early return"),
                eb && (tc.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eb}`), ek(!1)),
                eN &&
                    (tc.info(`[QV] | handleCanPlay: waitingForChunk: ${eN}`),
                    tx(null != eX.current ? performance.now() - eX.current : null),
                    ey(!1)),
                tc.info("[QV] | handleCanPlay: updating player state to playing"),
                tF(B.Q6.PLAYING));
    };
    l.useEffect(() => {
        if (!eL) return;
        let e = setTimeout(() => {
            eP(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eL]);
    let [{ controlBarAnimSpring: t2 }, t9] = (0, _.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: en,
            onStart: () => {
                eG(!1);
            },
            onRest: (e) => {
                1 === e.value && eG(!0);
            },
        })),
        ne = (0, l.useRef)(null),
        [{ captionHeightSpring: nt }, nn] = (0, _.z)(() => ({ from: { captionHeightSpring: 0 }, config: en }));
    l.useEffect(
        () => (
            nn({ captionHeightSpring: eE && null != ts ? (ne.current?.clientHeight ?? 0) : 0, immediate: e5 }),
            () => {
                nt.stop();
            }
        ),
        [eE, nn, e5, ts, nt],
    ),
        l.useEffect(
            () => (
                t9({ controlBarAnimSpring: tW || ej ? 1 : 0, immediate: e5 }),
                () => {
                    t2.stop();
                }
            ),
            [tW, t9, e5, ej, t2],
        );
    let nr = ev === B.Q6.ENDED,
        nl = l.useMemo(() => (0, k.tW)(el, k.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [el]),
        ni = l.useMemo(() => (0, k.tW)(el, k.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [el]),
        ns = e9 || tu >= (e4.current?.currentTime ?? 0) + 1,
        na = l.useMemo(() => null === (0, k.tW)(el, k.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [el]),
        nu = eo ? 20 : 12,
        no = 20 * !!eo,
        nc = e9 && eK;
    return (0, r.jsx)(m.D, {
        className: z.W6,
        "data-fullscreen": ea,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: function () {
            eh(!0), tH(!1), (tG.current = performance.now()), null != tK.current && clearTimeout(tK.current);
        },
        onMouseLeave: function () {
            eh(!1), tH(!1);
        },
        onMouseMove: tq,
        onKeyDown: tq,
        children: (0, r.jsxs)("div", {
            className: s()(z.NS, { [z.DO]: "portrait" === q, [z.r7]: "landscape" === q }),
            style: { "--custom-footer-bottom": `${eo ? 4 : 2}px` },
            children: [
                nr && (0, r.jsx)(w.A, { videoRef: e4, onTrackQuestContentClick: tT, orientation: q }),
                (0, r.jsxs)(D.A, {
                    ref: (e) => {
                        (e4.current = e), (eC.current = e);
                    },
                    autoPlay: i,
                    playsInline: !0,
                    mediaLayoutType: ea ? ee.dG.STATIC : ee.dG.RESPONSIVE,
                    className: s()({ [z.R]: nr, [z.IR]: !0 }),
                    controls: !1,
                    poster: nl?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: function (e) {
                        if (null == e4.current) return;
                        let r = e4.current.currentTime >= t && !tt.current && te;
                        if (e4.current.currentTime >= eM || r) {
                            var l;
                            tc.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${e4.current.currentTime}`,
                            ),
                                (l = e4.current.currentTime) >= t && (tt.current = !0),
                                eB(l + Z.aA + Math.random() * Z.A6),
                                tY(l);
                        }
                        e4.current.currentTime >= eF &&
                            (eY(e4.current.currentTime + 1),
                            (0, L.Gn)(el.id, eT.taskType, e4.current.currentTime),
                            n(e4.current.currentTime)),
                            eJ(el.id, e4.current.currentTime, e4.current.duration),
                            eO((e4.current.currentTime / e4.current.duration) * 100);
                    },
                    onEnded: function (e) {
                        null != e4.current &&
                            (tY(e4.current.duration + 1),
                            tc.info(`[QV] | handleEnded: sending progress update: ${e4.current.duration + 1}`),
                            eJ(el.id, e4.current.duration, e4.current.duration)),
                            tF(B.Q6.ENDED),
                            ey(!1);
                    },
                    onLoadedData: function (e) {
                        tc.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eb}`),
                            eb && (tA(null != ez.current ? performance.now() - ez.current : null), ek(!1), tC());
                    },
                    onLoadedMetadata: function (e) {
                        null != e4.current &&
                            (tc.info(`[QV] | handleLoadedMetadata | videoAssetId: ${tp}`),
                            tQ(null),
                            tp !== k.fY.VIDEO_PLAYER_VIDEO_HLS && t1(td),
                            e0 ? (e4.current.volume = 0) : (e4.current.volume = e7));
                    },
                    onLoadStart: function () {
                        (ez.current = performance.now()),
                            (t7.current = !1),
                            tv(eQ),
                            tc.info(`[QV] | handleLoadStart | loadingStartTime: ${ez.current}`);
                    },
                    onPlaying: function () {
                        if (!eW.current) return;
                        let e = performance.now() - $;
                        tc.info(`[QV] | \u{23F0} Video FCP: ${e}ms`), tL(e), (eW.current = !1);
                    },
                    onWaiting: function (e) {
                        (eX.current = performance.now()),
                            tc.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eX.current}`),
                            tR(),
                            ey(!0);
                    },
                    onProgress: function (e) {
                        if (null == e4.current) return;
                        tc.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${e4.current.buffered.length}`);
                        let t = [];
                        for (let e = 0; e < e4.current.buffered.length; e++) {
                            let n = e4.current.buffered.start(e),
                                r = e4.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / e4.current.duration, size: (r - n) / e4.current.duration });
                        }
                        eU(t);
                    },
                    onCanPlay: t3,
                    onCanPlayThrough: t3,
                    onSeeked: function () {
                        tc.info("[QV] | handleSeeked"), t7.current || ((t7.current = !0), tw(0));
                    },
                    onAbort: function () {
                        return t4(B.SB.ABORT);
                    },
                    onError: function () {
                        return t4(B.SB.ERROR);
                    },
                    onEmptied: function () {
                        return t4(B.SB.EMPTIED);
                    },
                    onStalled: function () {
                        return t4(B.SB.STALLED);
                    },
                    onClick: function () {
                        tc.info("[QV] | handleVideoClick"), t6();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != ni &&
                            (0, r.jsx)("track", {
                                ref: e8,
                                src: ni.url,
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
                                    return t4(B.SB.SOURCE_ERROR);
                                },
                                src: tm.url,
                                type: tm.mimetype,
                            }),
                    ],
                }),
                (eb || eN) &&
                    ev === B.Q6.PLAYING &&
                    null != tm &&
                    (0, r.jsx)("span", {
                        className: z.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(p.y, { type: p.y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(T.DQ, {
                    message: (function (e) {
                        let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                        return t
                            ? n === B.Q6.PAUSED && (r === d.KB.FOCUS || r === d.KB.PICTURE_IN_PICTURE)
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
                                    return d.KB.USER;
                                case P.Yg.LOST_FOCUS:
                                    return d.KB.FOCUS;
                                case P.Yg.MODAL_CLOSED:
                                    return d.KB.VISIBILITY;
                                case P.Yg.PICTURE_IN_PICTURE:
                                    return d.KB.PICTURE_IN_PICTURE;
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
                              (0, r.jsx)(M.A, {}),
                              (0, r.jsx)(S.K, {
                                  variant: "overlay-secondary",
                                  icon: C.P,
                                  "aria-label": et.intl.string(et.t.cpT0Cq),
                                  onClick: es,
                              }),
                          ],
                      })
                    : (0, r.jsx)(u.animated.div, {
                          className: z.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          style: {
                              opacity: (0, u.to)([t2.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                              visibility: (0, u.to)([t2.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.1 ? "hidden" : "visible",
                              ),
                              pointerEvents: (0, u.to)([t2.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.3 ? "none" : "auto",
                              ),
                          },
                          children: (0, r.jsx)(M.A, {}),
                      }),
                ec &&
                    ev !== B.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.D, {
                                onClick: () => {
                                    ev === B.Q6.PAUSED && tF(B.Q6.PLAYING), ed(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: z.BG }),
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: s()(z.xr, { [z.MZ]: "portrait" === q }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, u.to)([t2, nt], (e, t) => `${e * t_[tE] + t}px`) },
                                children: (0, r.jsx)(X, {
                                    quest: el,
                                    onClose: function () {
                                        ed(!1), tT(P.uF.VIDEO_MODAL, N.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(u.animated.div, {
                    className: z.Jp,
                    style: { opacity: (0, u.to)([t2.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                tl &&
                    (0, r.jsx)(
                        "div",
                        {
                            className: s()(z.yf, { [z.ZH]: ev === B.Q6.PLAYING, [z.v7]: ev === B.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ev === B.Q6.PLAYING
                                    ? (0, r.jsx)(v.u, { className: z.PK })
                                    : (0, r.jsx)(A.E, { className: z.PK }),
                        },
                        ev,
                    ),
                eE &&
                    null != ts &&
                    !nr &&
                    (0, r.jsx)(u.animated.div, {
                        className: z.o$,
                        ref: ne,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, u.to)([t2.to({ range: [0, 1], output: [-no, -t_[tE]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(g.E, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: z.qh,
                            children: ts.text,
                        }),
                    }),
                (0, r.jsxs)(u.animated.div, {
                    className: z.r8,
                    style: { height: (0, u.to)([t2.to({ range: [0, 1], output: [0, t_[tE]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(u.animated.div, {
                            style: {
                                transform: (0, u.to)(
                                    [t2.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${e * no}px)`,
                                ),
                            },
                            children: (0, r.jsx)(G, {
                                percent: null != e$ ? e$ : eR,
                                animate: !0 !== e2.current && !eL,
                                interactionEnabled: nc,
                                playerState: ev,
                                preloadedBuffers: tW ? eV : void 0,
                                durationSec: e4.current?.duration ?? 1,
                                isFullyVisible: tW && eK,
                                maxSeekableTime: tW && eK ? to : void 0,
                                onClick: function (e) {
                                    nc && (t1(e), ev === B.Q6.ENDED && tF(B.Q6.PLAYING));
                                },
                                onScrubBack: tX,
                                onScrubForward: tZ,
                                isQuestCompleted: e9,
                                targetSec: t,
                                "data-testid": "discord-web-video-player-timeline",
                            }),
                        }),
                        (0, r.jsx)(u.animated.div, {
                            className: z.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, u.to)(
                                    [t2.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * nu}px`,
                                ),
                                paddingBottom: (0, u.to)(
                                    [t2.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, u.to)([t2.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: function () {
                                return eD(!0);
                            },
                            onBlur: function () {
                                return eD(!1);
                            },
                            children: (0, r.jsx)(T.zZ, {
                                videoRef: e4,
                                playerState: ev,
                                animSpring: t2,
                                visible: tW,
                                seekForwardEnabled: ns,
                                hideCaptionBtn: null == ni,
                                hideTranscriptBtn: na,
                                hideSkipButtons: "portrait" === q,
                                hidePlaybackSpeedBtn: !0,
                                size: tE,
                                autoFocus: H,
                                keyDownHandlerRef: e3,
                                volume: e7,
                                muted: e0,
                                transcriptEnabled: ec,
                                captionEnabled: eE,
                                fullScreenEnabled: ea,
                                handlePlaybackBtnClick: t6,
                                handleTranscriptBtnClick: function () {
                                    ed(!ec),
                                        tT(P.uF.VIDEO_MODAL, ec ? N.Cy.TRANSCRIPT_DISABLE : N.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: function () {
                                    ef(!eE),
                                        tT(
                                            P.uF.VIDEO_MODAL,
                                            eE ? N.Cy.CLOSED_CAPTIONING_DISABLE : N.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !ea;
                                    tc.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, O.qf)(e4.current?.parentNode, e4.current);
                                    e && null != t
                                        ? ((0, O.tl)(t), t.addEventListener(O.Wb, tz), tP(!0), tf(B.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(O.Wb, tz), tP(!1), (0, O.sP)(t), tf(B.oA.MD)),
                                        eu(e);
                                },
                                handleSeekBackBtnClick: tX,
                                handleSeekForwardBtnClick: tZ,
                                handleControlBarPendingInteraction: eH,
                                onVolumeChange: tJ,
                                onMutedChange: t0,
                                onVolumeExpandedChange: J.FXj,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
