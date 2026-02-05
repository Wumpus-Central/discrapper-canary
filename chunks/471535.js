n.d(t, { A: () => G }), n(321073);
var r = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    a = n(563495),
    o = n(942381),
    u = n(311907),
    c = n(397927),
    d = n(964486),
    m = n(775602),
    E = n(607470),
    f = n(544180),
    p = n(475815),
    v = n(829219),
    h = n(341915),
    _ = n(405670),
    C = n(943849),
    g = n(991484),
    S = n(579473),
    A = n(590202),
    x = n(792620),
    T = n(753386),
    b = n(880080),
    D = n(818049),
    N = n(717415),
    y = n(661417),
    I = n(882291),
    L = n(224284),
    R = n(261331),
    M = n(457775),
    j = n(154395),
    O = n(602871),
    k = n(246465),
    w = n(660171),
    V = n(853738),
    P = n(219129),
    Q = n(654487),
    U = n(838541),
    F = n(438655);
let B = { tension: 250, friction: 5, clamp: !0 };
function G(e) {
    let {
            videoTask: t,
            onOptimisticProgressUpdate: n,
            autoplay: i,
            parentTransitionState: G,
            performanceClockStartTime: H,
            orientation: Y,
        } = e,
        { sourceQuestContent: $, quest: K, videoSessionId: W } = s.useContext(N.VideoQuestModalContext),
        q = (0, _.Kr)((e) => e.transcriptEnabled),
        z = (0, _.Kr)((e) => e.setTranscriptEnabled),
        X = (0, _.Kr)((e) => e.captionEnabled),
        Z = (0, _.Kr)((e) => e.setCaptionEnabled),
        J = (0, _.Kr)((e) => e.fullScreenEnabled),
        ee = (0, _.Kr)((e) => e.setFullScreenEnabled),
        { focused: et, focusedChanged: en } = (0, j.A7)(),
        { visible: er, visibleChanged: es, targetRef: ei } = (0, j.O7)(),
        [el, ea] = s.useState(!0 === i ? R.Q6.PLAYING : R.Q6.PAUSED),
        [eo, eu] = s.useState(!1),
        [ec, ed] = s.useState(!1),
        em = (0, x.Yh)(K),
        [eE, ef] = s.useState(em.percentComplete),
        ep = s.useCallback((e) => {
            ek(null), ef(e);
        }, []),
        [ev, eh] = s.useState(!1),
        [e_, eC] = s.useState(!0),
        [eg, eS] = s.useState(!1),
        [eA, ex] = s.useState([]),
        [eT, eb] = s.useState(f.A.getEffectiveConnectionSpeed()),
        [eD, eN] = s.useState(0),
        [ey, eI] = s.useState(0),
        [eL, eR] = s.useState(!1),
        [eM, ej] = s.useState(!1),
        [eO, ek] = s.useState(null),
        ew = s.useRef(!0),
        eV = s.useRef(null),
        eP = s.useRef(null),
        eQ = (0, _.Kr)((e) => e.videoProgress[K.id] ?? { timestampSec: 0, duration: 10 }, o.x),
        eU = (0, _.Kr)((e) => e.setVideoProgress),
        eF = (0, _.Kr)((e) => e.muted),
        eB = (0, _.Kr)((e) => e.volume),
        eG = (0, u.bG)([m.A], () => m.A.useReducedMotion),
        eH = (0, s.useRef)(null),
        eY = (0, s.useRef)(null),
        e$ = s.useRef(!0),
        eK = K.userStatus?.completedAt != null,
        eW = s.useMemo(() => K.config.features.includes(Q.Li.FULL_EPISODE_VIDEO_QUEST), [K.config.features]),
        eq = s.useRef(!1),
        [ez, eX] = s.useState(null),
        [eZ, eJ] = s.useState(!1),
        [e0, e1] = s.useState(!1),
        [e2, e6] = s.useState(null),
        e7 = eK ? (eH.current?.duration ?? 0) : Math.max(eQ.maxTimestampSec, em.progressSeconds),
        e4 = s.useMemo(() => (0, C.L)({ quest: K, location: Q.rE.VIDEO_MODAL }), [K]),
        e9 = (0, P.g)(eK, eQ, em),
        [e8, e3] = s.useState(R.oA.MD),
        e5 = { [R.oA.MD]: 50, [R.oA.LG]: 58 };
    (0, d.u5)(() => {
        e$.current &&
            ((e$.current = !1),
            eb(f.A.getEffectiveConnectionSpeed()),
            eK && eQ.timestampSec >= eQ.duration && eU(K.id, 0, eQ.duration));
    });
    let { videoAsset: te, videoAssetType: tt, hlsRef: tn, onFirstChunkLoaded: tr } = (0, k.A)(eH, eT, e9),
        {
            trackQuestVideoLoadingStarted: ts,
            trackQuestVideoLoadingEnded: ti,
            trackQuestVideoProgressed: tl,
            trackQuestVideoResumed: ta,
            trackQuestVideoPaused: to,
            trackQuestVideoFocusChange: tu,
            trackQuestContentClick: tc,
            trackQuestVideoBufferingStarted: td,
            trackQuestVideoBufferingEnded: tm,
            trackWatchTimeAnalytics: tE,
            trackQuestVideoTimeToFirstFrame: tf,
            trackQuestVideoFullscreenChanged: tp,
            trackQuestVideoError: tv,
            trackQuestVideoVolumeChanged: th,
        } = (0, w.A)({
            questId: K.id,
            isQuestCompleted: eK,
            videoRef: eH,
            hlsRef: tn,
            videoSessionId: W,
            videoAssetId: tt,
            sourceQuestContent: $,
            logger: e4,
            isFullEpisodeVideoQuest: eW,
        });
    (0, V.A)({ videoAssetUrl: te?.url, videoRef: eH, hlsRef: tn, videoAssetType: tt });
    let t_ = s.useCallback(() => eH.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: tC } = (0, g.A)({
            getCurrentVideoTime: t_,
            isPlaying: el === R.Q6.PLAYING,
            isMetadataLoaded: eZ,
            isInitialSeekComplete: e0,
            onAnalytics: tE,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
        }),
        tg = s.useCallback(
            (e) => {
                if ((e4.info(`[QV] | updatePlayerState | playerState: ${e}`), ea(e), null != eH.current))
                    switch (e) {
                        case R.Q6.PLAYING:
                            eH.current.paused && ta(ez), eX(null), eH.current.play();
                            break;
                        case R.Q6.PAUSED:
                            eH.current.paused || tC(), eH.current.pause(), (ew.current = !1);
                            break;
                        case R.Q6.ENDED:
                            tC(), z(!1);
                    }
            },
            [ta, ez, tC, z, e4],
        );
    s.useEffect(() => {
        to(ez);
    }, [ez, to]),
        s.useEffect(() => {
            en && tu(et, el);
        }, [et, en, el, tu]);
    let tS = s.useCallback(
        (e) => {
            eK || K.userStatus?.enrolledAt == null || (e4.info(`[QV] sendServerProgressUpdate: ${e}`), (0, T.zv)(K, e)),
                tl();
        },
        [eK, K, e4, tl],
    );
    s.useEffect(() => {
        (G !== c.ip4.HIDDEN &&
            G !== c.ip4.EXITING &&
            G !== c.ip4.EXITED &&
            (null == G || !es || er || eK) &&
            (!en || et || eK)) ||
            null == eH.current ||
            el !== R.Q6.PLAYING ||
            (e4.info(
                `[QV] | Pausing video | playerState: ${el}, parentTransitionState: ${G}, visible: ${er}, focused: ${et}, isQuestCompleted: ${eK}`,
            ),
            tg(R.Q6.PAUSED),
            eK || eX(h.Yg.LOST_FOCUS));
    }, [G, et, en, er, es, el, eK, tg, tS, e4]);
    let [tA, tx] = s.useState(!1),
        tT = s.useRef(null),
        tb = s.useRef(performance.now()),
        tD = s.useCallback(() => {
            null != tT.current && clearTimeout(tT.current),
                el !== R.Q6.PLAYING ||
                    (tT.current = setTimeout(
                        () => {
                            el === R.Q6.PLAYING && tx(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tb.current)),
                    ));
        }, [el]),
        tN = () => {
            tx(!1), (tb.current = performance.now()), tD();
        };
    s.useEffect(() => {
        if (el !== R.Q6.PLAYING) {
            tx(!1), null != tT.current && clearTimeout(tT.current);
            return;
        }
        return (
            tD(),
            () => {
                null != tT.current && clearTimeout(tT.current);
            }
        );
    }, [el, tD]);
    let ty = !tA && (ec || eo || el === R.Q6.ENDED),
        tI = s.useCallback(() => {
            e4.info("[QV] | handleFullScreenExit");
            let e = (0, p.qf)(eH.current?.parentNode, eH.current);
            null == e || (0, p._U)(e) || (e.removeEventListener(p.Wb, tI), ee(!1), tp(!1), e3(R.oA.MD));
        }, [ee, e4, tp]),
        tL = () => {
            if (null == eH.current) return;
            let e = Math.max(eH.current.currentTime - 10, 0);
            e4.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                tM(e),
                el === R.Q6.ENDED && tg(R.Q6.PAUSED),
                tc(h.uF.VIDEO_MODAL, A.Cy.SEEK_BACKWARD);
        },
        tR = () => {
            if (null == eH.current || !tW) return;
            let e = Math.min(eH.current.currentTime + 10, e7);
            e4.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                tM(e),
                el !== R.Q6.ENDED && e >= eH.current.duration && tg(R.Q6.ENDED),
                tc(h.uF.VIDEO_MODAL, A.Cy.SEEK_FORWARD);
        };
    s.useEffect(() => {
        let e = eH.current;
        return () => {
            let t = (0, p.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(p.Wb, tI);
        };
    }, [tI]);
    let tM = s.useCallback(
            (e) => {
                null != eH.current &&
                    (e4.info(`[QV] | seekTimeline | timeSec: ${e}`),
                    ek((e / (eH.current.duration ?? 1)) * 100),
                    tC(),
                    eh(!0),
                    e1(!1),
                    (eH.current.currentTime = e),
                    eU(K.id, e, eH.current.duration));
            },
            [eH, eU, K.id, tC, e4],
        ),
        tj = () => {
            if (null != eH.current)
                switch ((e4.info(`[QV] | handlePlaybackBtnClick | playerState: ${el}`), el)) {
                    case R.Q6.ENDED:
                        tM(0), tg(R.Q6.PLAYING);
                        break;
                    case R.Q6.PLAYING:
                        tg(R.Q6.PAUSED), eX(h.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tg(R.Q6.PLAYING);
                }
        },
        tO = (e) => {
            e6(e);
        },
        tk = (e) => {
            e6((t) => (t?.id === e.id ? null : t));
        },
        tw = s.useCallback(() => {
            if (
                null == eH.current ||
                (e4.info(`[QV] | handleTracksLoaded: textTracks.length: ${eH.current.textTracks.length}`),
                0 === eH.current.textTracks.length)
            )
                return;
            let e = eH.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, M.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tO(n)), (n.onexit = () => tk(n)));
                }
        }, [eH, e4]);
    s.useEffect(() => {
        if (null == eY.current) return;
        let e = eY.current;
        return (
            e.addEventListener("load", tw),
            () => {
                null != e && e.removeEventListener("load", tw);
            }
        );
    }, [eY, tw]);
    let tV = s.useCallback(
            (e) => {
                e4.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${eH.current?.currentTime}, videoAssetId: ${tt}, connectionSpeed: ${eT}`,
                ),
                    tv(e);
            },
            [eT, tv, eH, tt, e4],
        ),
        tP = s.useRef(!1);
    s.useEffect(() => {
        null != te || tP.current || ((tP.current = !0), tv(R.SB.NO_VALID_SOURCE));
    }, [te, tv, tP]);
    let tQ = (e) => {
        e4.info(`[QV] | handleCanPlay: playerState: ${el}`),
            null != eH.current &&
                el === R.Q6.PLAYING &&
                (e4.info("[QV] | handleCanPlay: did NOT early return"),
                e_ && (e4.info(`[QV] | handleCanPlay: loadingFirstChunk: ${e_}`), eC(!1)),
                eg &&
                    (e4.info(`[QV] | handleCanPlay: waitingForChunk: ${eg}`),
                    tm(null != eP.current ? performance.now() - eP.current : null),
                    eS(!1)),
                e4.info("[QV] | handleCanPlay: updating player state to playing"),
                tg(R.Q6.PLAYING));
    };
    s.useEffect(() => {
        if (!ev) return;
        let e = setTimeout(() => {
            eh(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [ev]);
    let [{ controlBarAnimSpring: tU }, tF] = (0, c.zhh)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: B,
            onStart: () => {
                ej(!1);
            },
            onRest: (e) => {
                1 === e.value && ej(!0);
            },
        })),
        tB = (0, s.useRef)(null),
        [{ captionHeightSpring: tG }, tH] = (0, c.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: B }));
    s.useEffect(
        () => (
            tH({ captionHeightSpring: X && null != e2 ? (tB.current?.clientHeight ?? 0) : 0, immediate: eG }),
            () => {
                tG.stop();
            }
        ),
        [X, tH, eG, e2, tG],
    ),
        s.useEffect(
            () => (
                tF({ controlBarAnimSpring: ty || eL ? 1 : 0, immediate: eG }),
                () => {
                    tU.stop();
                }
            ),
            [ty, tF, eG, eL, tU],
        );
    let tY = el === R.Q6.ENDED,
        t$ = s.useMemo(() => (0, S.tW)(K, S.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [K]),
        tK = s.useMemo(() => (0, S.tW)(K, S.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [K]),
        tW = eK || eQ.maxTimestampSec >= (eH.current?.currentTime ?? 0) + 1,
        tq = s.useMemo(() => null === (0, S.tW)(K, S.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [K]);
    return (0, r.jsx)(c.DUT, {
        className: F.W6,
        "data-fullscreen": J,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            eu(!0), tx(!1), (tb.current = performance.now()), null != tT.current && clearTimeout(tT.current);
        },
        onMouseLeave: () => {
            eu(!1), tx(!1);
        },
        onMouseMove: tN,
        onKeyDown: tN,
        children: (0, r.jsxs)("div", {
            className: l()(F.NS, { [F.DO]: "portrait" === Y, [F.r7]: "landscape" === Y }),
            children: [
                tY &&
                    (0, r.jsx)(D.A, {
                        videoRef: eH,
                        onExitFullScreen: tI,
                        onTrackQuestVideoFullscreenChanged: tp,
                        onTrackQuestContentClick: tc,
                        orientation: Y,
                    }),
                (0, r.jsxs)(E.A, {
                    ref: (e) => {
                        (eH.current = e), (ei.current = e);
                    },
                    autoPlay: i,
                    playsInline: !0,
                    mediaLayoutType: J ? U.dG.STATIC : U.dG.RESPONSIVE,
                    className: l()({ [F.R]: tY, [F.IR]: !0 }),
                    controls: !1,
                    poster: t$?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        if (null == eH.current) return;
                        let r = eH.current.currentTime >= t.target && !eq.current && eW;
                        if (eH.current.currentTime >= eD || r) {
                            var s;
                            e4.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${eH.current.currentTime}`,
                            ),
                                (s = eH.current.currentTime) >= t.target && (eq.current = !0),
                                eN(s + 6 + 2 * Math.random()),
                                tS(s);
                        }
                        eH.current.currentTime >= ey &&
                            (eI(eH.current.currentTime + 1),
                            (0, v.Gn)(K.id, em.taskType, eH.current.currentTime),
                            n(eH.current.currentTime)),
                            eU(K.id, eH.current.currentTime, eH.current.duration),
                            ep((eH.current.currentTime / eH.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != eH.current &&
                            (tS(eH.current.duration + 1),
                            e4.info(`[QV] | handleEnded: sending progress update: ${eH.current.duration + 1}`),
                            eU(K.id, eH.current.duration, eH.current.duration)),
                            tg(R.Q6.ENDED),
                            eS(!1);
                    },
                    onLoadedData: (e) => {
                        e4.info(`[QV] | handleLoadedData: loadingFirstChunk: ${e_}`),
                            e_ && (ti(null != eV.current ? performance.now() - eV.current : null), eC(!1), tr());
                    },
                    onLoadedMetadata: (e) => {
                        null != eH.current &&
                            (e4.info(`[QV] | handleLoadedMetadata | videoAssetId: ${tt}`),
                            eJ(!0),
                            tt !== S.fY.VIDEO_PLAYER_VIDEO_HLS && tM(e9),
                            eF ? (eH.current.volume = 0) : (eH.current.volume = eB));
                    },
                    onLoadStart: () => {
                        (eV.current = performance.now()),
                            ts(eT),
                            e4.info(`[QV] | handleLoadStart | loadingStartTime: ${eV.current}`);
                    },
                    onPlaying: () => {
                        if (!ew.current) return;
                        let e = performance.now() - H;
                        e4.info(`[QV] | ⏰ Video FCP: ${e}ms`), tf(e), (ew.current = !1);
                    },
                    onWaiting: (e) => {
                        (eP.current = performance.now()),
                            e4.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eP.current}`),
                            td(),
                            eS(!0);
                    },
                    onProgress: (e) => {
                        if (null == eH.current) return;
                        e4.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${eH.current.buffered.length}`);
                        let t = [];
                        for (let e = 0; e < eH.current.buffered.length; e++) {
                            let n = eH.current.buffered.start(e),
                                r = eH.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / eH.current.duration, size: (r - n) / eH.current.duration });
                        }
                        ex(t);
                    },
                    onCanPlay: tQ,
                    onCanPlayThrough: tQ,
                    onSeeked: () => {
                        e4.info("[QV] | handleSeeked"), e1(!0);
                    },
                    onAbort: () => tV(R.SB.ABORT),
                    onError: () => tV(R.SB.ERROR),
                    onEmptied: () => tV(R.SB.EMPTIED),
                    onStalled: () => tV(R.SB.STALLED),
                    onClick: () => {
                        e4.info("[QV] | handleVideoClick"), tj();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != tK &&
                            (0, r.jsx)("track", {
                                ref: eY,
                                src: tK.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != te &&
                            tt !== S.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != te.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tV(R.SB.SOURCE_ERROR),
                                src: te.url,
                                type: te.mimetype,
                            }),
                    ],
                }),
                (e_ || eg) &&
                    el === R.Q6.PLAYING &&
                    null != te &&
                    (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES, className: F.S }),
                (0, r.jsx)(O.A, { hasVideoAsset: null != te, playerState: el, pauseReason: ez }),
                (0, r.jsx)(a.animated.div, {
                    className: F.R4,
                    "data-testid": "discord-web-video-player-share-btn",
                    style: { opacity: (0, a.to)([tU.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    children: (0, r.jsx)(y.A, {}),
                }),
                q &&
                    el !== R.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(c.DUT, {
                                onClick: () => {
                                    el === R.Q6.PAUSED && tg(R.Q6.PLAYING), z(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: F.BG }),
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: l()(F.xr, { [F.MZ]: "portrait" === Y }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, a.to)([tU, tG], (e, t) => `${e * e5[e8] + t}px`) },
                                children: (0, r.jsx)(L.y, {
                                    quest: K,
                                    onClose: () => {
                                        z(!1), tc(h.uF.VIDEO_MODAL, A.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(a.animated.div, {
                    className: F.Jp,
                    style: { opacity: (0, a.to)([tU.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                (0, r.jsx)(
                    "div",
                    {
                        className: l()(F.yf, { [F.ZH]: el === R.Q6.PLAYING, [F.v7]: el === R.Q6.PAUSED }),
                        children:
                            el === R.Q6.PLAYING
                                ? (0, r.jsx)(c.udU, { className: F.PK })
                                : (0, r.jsx)(c.E$n, { className: F.PK }),
                    },
                    el,
                ),
                X &&
                    null != e2 &&
                    !tY &&
                    (0, r.jsx)(a.animated.div, {
                        className: F.o$,
                        ref: tB,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, a.to)([tU.to({ range: [0, 1], output: [0, -e5[e8]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: F.qh,
                            children: e2.text,
                        }),
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: F.r8,
                    style: { height: (0, a.to)([tU.to({ range: [0, 1], output: [0, e5[e8]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(I.A, {
                            percent: null != eO ? eO : eE,
                            animate: !0 !== e$.current && !ev,
                            interactionEnabled: eK && eM,
                            backgroundColor: ty ? void 0 : "rgba(0, 0, 0, 0.0)",
                            playerState: el,
                            preloadedBuffers: ty ? eA : void 0,
                            duration: eH.current?.duration ?? 1,
                            isFullyVisible: ty && eM,
                            maxSeekableTime: ty && eM ? e7 : void 0,
                            onClick: (e) => {
                                tM(e), el === R.Q6.ENDED && tg(R.Q6.PLAYING);
                            },
                            onScrubBack: tL,
                            onScrubForward: tR,
                            "data-testid": "discord-web-video-player-timeline",
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: F.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, a.to)(
                                    [tU.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                paddingBottom: (0, a.to)(
                                    [tU.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, a.to)([tU.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: () => ed(!0),
                            onBlur: () => ed(!1),
                            children: (0, r.jsx)(b.A, {
                                videoRef: eH,
                                videoTask: t,
                                playerState: el,
                                animSpring: tU,
                                visible: ty,
                                seekForwardEnabled: tW,
                                hideCaptionBtn: null == tK,
                                hideTranscriptBtn: tq,
                                size: e8,
                                handlePlaybackBtnClick: tj,
                                handleTranscriptBtnClick: () => {
                                    z(!q), tc(h.uF.VIDEO_MODAL, q ? A.Cy.TRANSCRIPT_DISABLE : A.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    Z(!X),
                                        tc(
                                            h.uF.VIDEO_MODAL,
                                            X ? A.Cy.CLOSED_CAPTIONING_DISABLE : A.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !J;
                                    e4.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, p.qf)(eH.current?.parentNode, eH.current);
                                    e && null != t
                                        ? ((0, p.tl)(t), t.addEventListener(p.Wb, tI), tp(!0), e3(R.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(p.Wb, tI), tp(!1), (0, p.sP)(t), e3(R.oA.MD)),
                                        ee(e);
                                },
                                handleSeekBackBtnClick: tL,
                                handleSeekForwardBtnClick: tR,
                                handleControlBarPendingInteraction: eR,
                                onVolumeChange: th,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
