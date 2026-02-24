n.d(t, { A: () => K }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(771253),
    o = n(475539),
    u = n(942381),
    c = n(311907),
    d = n(645577),
    m = n(397927),
    p = n(964486),
    E = n(775602),
    f = n(607470),
    v = n(892358),
    h = n(544180),
    x = n(475815),
    g = n(829219),
    S = n(341915),
    C = n(405670),
    A = n(245853),
    _ = n(943849),
    b = n(991484),
    T = n(579473),
    y = n(590202),
    N = n(792620),
    D = n(753386),
    L = n(880080),
    j = n(818049),
    I = n(717415),
    M = n(661417),
    k = n(882291),
    R = n(224284),
    w = n(261331),
    O = n(602871),
    P = n(246465),
    V = n(660171),
    Q = n(853738),
    U = n(654487),
    B = n(838541),
    F = n(985018),
    G = n(681636);
let $ = { tension: 250, friction: 5, clamp: !0 };
function K(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: s,
            parentTransitionState: K,
            performanceClockStartTime: Y,
            orientation: H,
            videoUrlOverride: z,
        } = e,
        {
            sourceQuestContent: W,
            quest: q,
            videoSessionId: X,
            onClose: J,
            isFullscreenEnabled: Z,
            setIsFullscreenEnabled: ee,
        } = i.useContext(I.VideoQuestModalContext),
        et = (0, C.Kr)((e) => e.transcriptEnabled),
        en = (0, C.Kr)((e) => e.setTranscriptEnabled),
        er = (0, C.Kr)((e) => e.captionEnabled),
        ei = (0, C.Kr)((e) => e.setCaptionEnabled),
        { focused: es, focusedChanged: el } = (0, v.A7)(),
        { visible: ea, visibleChanged: eo, targetRef: eu } = (0, v.O7)(),
        [ec, ed] = i.useState(!0 === s ? w.Q6.PLAYING : w.Q6.PAUSED),
        [em, ep] = i.useState(!1),
        [eE, ef] = i.useState(!1),
        ev = (0, N.Yh)(q),
        [eh, ex] = i.useState(ev.percentComplete),
        eg = i.useCallback((e) => {
            eQ(null), ex(e);
        }, []),
        [eS, eC] = i.useState(!1),
        [eA, e_] = i.useState(!0),
        [eb, eT] = i.useState(!1),
        [ey, eN] = i.useState([]),
        [eD, eL] = i.useState(h.A.getEffectiveConnectionSpeed()),
        [ej, eI] = i.useState(0),
        [eM, ek] = i.useState(0),
        [eR, ew] = i.useState(!1),
        [eO, eP] = i.useState(!1),
        [eV, eQ] = i.useState(null),
        eU = i.useRef(!0),
        eB = i.useRef(null),
        eF = i.useRef(null),
        eG = (0, C.Kr)((e) => e.videoProgress[q.id] ?? { timestampSec: 0, duration: 10 }, u.x),
        e$ = (0, C.Kr)((e) => e.setVideoProgress),
        eK = (0, C.Kr)((e) => e.muted),
        eY = (0, C.Kr)((e) => e.volume),
        eH = (0, c.bG)([E.A], () => E.A.useReducedMotion),
        ez = (0, i.useRef)(null),
        eW = (0, i.useRef)(null),
        eq = i.useRef(!0),
        eX = q.userStatus?.completedAt != null,
        eJ = i.useMemo(() => q.config.features.includes(U.Li.FULL_EPISODE_VIDEO_QUEST), [q.config.features]),
        eZ = i.useRef(!1),
        [e0, e1] = i.useState(null),
        [e6, e7] = i.useState(!1),
        [e2, e4] = i.useState(!1),
        [e8, e9] = i.useState(null),
        e3 = eX ? (ez.current?.duration ?? 0) : Math.max(eG.maxTimestampSec, ev.progressSeconds),
        e5 = i.useMemo(() => (0, _.L)({ quest: q, location: U.rE.VIDEO_MODAL }), [q]),
        te = (0, d.g)(eX, eG, ev.progressSeconds),
        { enabled: tt } = A.jS.useConfig({ location: U.rE.VIDEO_MODAL }),
        [tn, tr] = i.useState(w.oA.MD),
        ti = { [w.oA.MD]: tt ? 56 : 50, [w.oA.LG]: tt ? 64 : 58 };
    (0, p.u5)(() => {
        eq.current &&
            ((eq.current = !1),
            eL(h.A.getEffectiveConnectionSpeed()),
            eX && eG.timestampSec >= eG.duration && e$(q.id, 0, eG.duration));
    });
    let { videoAsset: ts, videoAssetType: tl, hlsRef: ta, onFirstChunkLoaded: to } = (0, P.A)(ez, eD, te, z),
        {
            trackQuestVideoLoadingStarted: tu,
            trackQuestVideoLoadingEnded: tc,
            trackQuestVideoProgressed: td,
            trackQuestVideoResumed: tm,
            trackQuestVideoPaused: tp,
            trackQuestVideoFocusChange: tE,
            trackQuestContentClick: tf,
            trackQuestVideoBufferingStarted: tv,
            trackQuestVideoBufferingEnded: th,
            trackWatchTimeAnalytics: tx,
            trackQuestVideoTimeToFirstFrame: tg,
            trackQuestVideoFullscreenChanged: tS,
            trackQuestVideoError: tC,
            trackQuestVideoVolumeChanged: tA,
        } = (0, V.A)({
            questId: q.id,
            isQuestCompleted: eX,
            videoRef: ez,
            hlsRef: ta,
            videoSessionId: X,
            videoAssetId: tl,
            sourceQuestContent: W,
            logger: e5,
            isFullEpisodeVideoQuest: eJ,
        });
    (0, Q.A)({ videoAssetUrl: ts?.url, videoRef: ez, hlsRef: ta, videoAssetType: tl });
    let t_ = i.useCallback(() => ez.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: tb } = (0, b.A)({
            getCurrentVideoTime: t_,
            isPlaying: ec === w.Q6.PLAYING,
            isMetadataLoaded: e6,
            isInitialSeekComplete: e2,
            onAnalytics: tx,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
        }),
        tT = i.useCallback(
            (e) => {
                if ((e5.info(`[QV] | updatePlayerState | playerState: ${e}`), ed(e), null != ez.current))
                    switch (e) {
                        case w.Q6.PLAYING:
                            ez.current.paused && tm(e0), e1(null), ez.current.play();
                            break;
                        case w.Q6.PAUSED:
                            ez.current.paused || tb(), ez.current.pause(), (eU.current = !1);
                            break;
                        case w.Q6.ENDED:
                            tb(), en(!1);
                    }
            },
            [tm, e0, tb, en, e5],
        );
    i.useEffect(() => {
        tp(e0);
    }, [e0, tp]),
        i.useEffect(() => {
            el && tE(es, ec);
        }, [es, el, ec, tE]);
    let ty = i.useCallback(
        (e) => {
            eX || q.userStatus?.enrolledAt == null || (e5.info(`[QV] sendServerProgressUpdate: ${e}`), (0, D.zv)(q, e)),
                td();
        },
        [eX, q, e5, td],
    );
    i.useEffect(() => {
        (K !== m.ip4.HIDDEN &&
            K !== m.ip4.EXITING &&
            K !== m.ip4.EXITED &&
            (null == K || !eo || ea || eX) &&
            (!el || es || eX)) ||
            null == ez.current ||
            ec !== w.Q6.PLAYING ||
            (e5.info(
                `[QV] | Pausing video | playerState: ${ec}, parentTransitionState: ${K}, visible: ${ea}, focused: ${es}, isQuestCompleted: ${eX}`,
            ),
            tT(w.Q6.PAUSED),
            eX || e1(S.Yg.LOST_FOCUS));
    }, [K, es, el, ea, eo, ec, eX, tT, ty, e5]);
    let [tN, tD] = i.useState(!1),
        tL = i.useRef(null),
        tj = i.useRef(performance.now()),
        tI = i.useCallback(() => {
            null != tL.current && clearTimeout(tL.current),
                ec !== w.Q6.PLAYING ||
                    (tL.current = setTimeout(
                        () => {
                            ec === w.Q6.PLAYING && tD(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tj.current)),
                    ));
        }, [ec]),
        tM = () => {
            tD(!1), (tj.current = performance.now()), tI();
        };
    i.useEffect(() => {
        if (ec !== w.Q6.PLAYING) {
            tD(!1), null != tL.current && clearTimeout(tL.current);
            return;
        }
        return (
            tI(),
            () => {
                null != tL.current && clearTimeout(tL.current);
            }
        );
    }, [ec, tI]);
    let tk = !tN && (eE || em || ec === w.Q6.ENDED),
        tR = i.useCallback(() => {
            e5.info("[QV] | handleFullScreenExit");
            let e = (0, x.qf)(ez.current?.parentNode, ez.current);
            null == e || (0, x._U)(e) || (e.removeEventListener(x.Wb, tR), ee(!1), tS(!1), tr(w.oA.MD));
        }, [ee, e5, tS]),
        tw = () => {
            if (null == ez.current) return;
            let e = Math.max(ez.current.currentTime - 10, 0);
            e5.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                tP(e),
                ec === w.Q6.ENDED && tT(w.Q6.PAUSED),
                tf(S.uF.VIDEO_MODAL, y.Cy.SEEK_BACKWARD);
        },
        tO = () => {
            if (null == ez.current || !tZ) return;
            let e = Math.min(ez.current.currentTime + 10, e3);
            e5.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                tP(e),
                ec !== w.Q6.ENDED && e >= ez.current.duration && tT(w.Q6.ENDED),
                tf(S.uF.VIDEO_MODAL, y.Cy.SEEK_FORWARD);
        };
    i.useEffect(() => {
        let e = ez.current;
        return () => {
            let t = (0, x.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(x.Wb, tR);
        };
    }, [tR]);
    let tP = i.useCallback(
        (e) => {
            null != ez.current &&
                (e5.info(`[QV] | seekTimeline | timeSec: ${e}`),
                eQ((e / (ez.current.duration ?? 1)) * 100),
                tb(),
                eC(!0),
                e4(!1),
                (ez.current.currentTime = e),
                e$(q.id, e, ez.current.duration));
        },
        [ez, e$, q.id, tb, e5],
    );
    i.useEffect(() => {
        let e = ez.current;
        if (null == e) return;
        let t = () => {
            null != ta.current &&
                ta.current.mainForwardBufferInfo?.len === 0 &&
                ta.current.trigger(a.sV.BUFFER_FLUSHING, {
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
    }, [ez, ta]);
    let tV = () => {
            if (null != ez.current)
                switch ((e5.info(`[QV] | handlePlaybackBtnClick | playerState: ${ec}`), ec)) {
                    case w.Q6.ENDED:
                        tP(0), tT(w.Q6.PLAYING);
                        break;
                    case w.Q6.PLAYING:
                        tT(w.Q6.PAUSED), e1(S.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tT(w.Q6.PLAYING);
                }
        },
        tQ = (e) => {
            e9(e);
        },
        tU = (e) => {
            e9((t) => (t?.id === e.id ? null : t));
        },
        tB = i.useCallback(() => {
            if (
                null == ez.current ||
                (e5.info(`[QV] | handleTracksLoaded: textTracks.length: ${ez.current.textTracks.length}`),
                0 === ez.current.textTracks.length)
            )
                return;
            let e = ez.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, v.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tQ(n)), (n.onexit = () => tU(n)));
                }
        }, [ez, e5]);
    i.useEffect(() => {
        if (null == eW.current) return;
        let e = eW.current;
        return (
            e.addEventListener("load", tB),
            () => {
                null != e && e.removeEventListener("load", tB);
            }
        );
    }, [eW, tB]);
    let tF = i.useCallback(
            (e) => {
                e5.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${ez.current?.currentTime}, videoAssetId: ${tl}, connectionSpeed: ${eD}`,
                ),
                    tC(e);
            },
            [eD, tC, ez, tl, e5],
        ),
        tG = i.useRef(!1);
    i.useEffect(() => {
        null != ts || tG.current || ((tG.current = !0), tC(w.SB.NO_VALID_SOURCE));
    }, [ts, tC, tG]);
    let t$ = (e) => {
        e5.info(`[QV] | handleCanPlay: playerState: ${ec}`),
            null != ez.current &&
                ec === w.Q6.PLAYING &&
                (e5.info("[QV] | handleCanPlay: did NOT early return"),
                eA && (e5.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eA}`), e_(!1)),
                eb &&
                    (e5.info(`[QV] | handleCanPlay: waitingForChunk: ${eb}`),
                    th(null != eF.current ? performance.now() - eF.current : null),
                    eT(!1)),
                e5.info("[QV] | handleCanPlay: updating player state to playing"),
                tT(w.Q6.PLAYING));
    };
    i.useEffect(() => {
        if (!eS) return;
        let e = setTimeout(() => {
            eC(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eS]);
    let [{ controlBarAnimSpring: tK }, tY] = (0, m.zhh)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: $,
            onStart: () => {
                eP(!1);
            },
            onRest: (e) => {
                1 === e.value && eP(!0);
            },
        })),
        tH = (0, i.useRef)(null),
        [{ captionHeightSpring: tz }, tW] = (0, m.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: $ }));
    i.useEffect(
        () => (
            tW({ captionHeightSpring: er && null != e8 ? (tH.current?.clientHeight ?? 0) : 0, immediate: eH }),
            () => {
                tz.stop();
            }
        ),
        [er, tW, eH, e8, tz],
    ),
        i.useEffect(
            () => (
                tY({ controlBarAnimSpring: tk || eR ? 1 : 0, immediate: eH }),
                () => {
                    tK.stop();
                }
            ),
            [tk, tY, eH, eR, tK],
        );
    let tq = ec === w.Q6.ENDED,
        tX = i.useMemo(() => (0, T.tW)(q, T.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [q]),
        tJ = i.useMemo(() => (0, T.tW)(q, T.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [q]),
        tZ = eX || eG.maxTimestampSec >= (ez.current?.currentTime ?? 0) + 1,
        t0 = i.useMemo(() => null === (0, T.tW)(q, T.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [q]),
        t1 = tt ? 20 : 12,
        t6 = 20 * !!tt;
    return (0, r.jsx)(m.DUT, {
        className: G.W6,
        "data-fullscreen": Z,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            ep(!0), tD(!1), (tj.current = performance.now()), null != tL.current && clearTimeout(tL.current);
        },
        onMouseLeave: () => {
            ep(!1), tD(!1);
        },
        onMouseMove: tM,
        onKeyDown: tM,
        children: (0, r.jsxs)("div", {
            className: l()(G.NS, { [G.DO]: "portrait" === H, [G.r7]: "landscape" === H }),
            style: { "--custom-footer-bottom": `${tt ? 4 : 2}px` },
            children: [
                tq &&
                    (0, r.jsx)(j.A, {
                        videoRef: ez,
                        onExitFullScreen: tR,
                        onTrackQuestVideoFullscreenChanged: tS,
                        onTrackQuestContentClick: tf,
                        orientation: H,
                    }),
                (0, r.jsxs)(f.A, {
                    ref: (e) => {
                        (ez.current = e), (eu.current = e);
                    },
                    autoPlay: s,
                    playsInline: !0,
                    mediaLayoutType: Z ? B.dG.STATIC : B.dG.RESPONSIVE,
                    className: l()({ [G.R]: tq, [G.IR]: !0 }),
                    controls: !1,
                    poster: tX?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        if (null == ez.current) return;
                        let r = ez.current.currentTime >= t && !eZ.current && eJ;
                        if (ez.current.currentTime >= ej || r) {
                            var i;
                            e5.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${ez.current.currentTime}`,
                            ),
                                (i = ez.current.currentTime) >= t && (eZ.current = !0),
                                eI(i + 6 + 2 * Math.random()),
                                ty(i);
                        }
                        ez.current.currentTime >= eM &&
                            (ek(ez.current.currentTime + 1),
                            (0, g.Gn)(q.id, ev.taskType, ez.current.currentTime),
                            n(ez.current.currentTime)),
                            e$(q.id, ez.current.currentTime, ez.current.duration),
                            eg((ez.current.currentTime / ez.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != ez.current &&
                            (ty(ez.current.duration + 1),
                            e5.info(`[QV] | handleEnded: sending progress update: ${ez.current.duration + 1}`),
                            e$(q.id, ez.current.duration, ez.current.duration)),
                            tT(w.Q6.ENDED),
                            eT(!1);
                    },
                    onLoadedData: (e) => {
                        e5.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eA}`),
                            eA && (tc(null != eB.current ? performance.now() - eB.current : null), e_(!1), to());
                    },
                    onLoadedMetadata: (e) => {
                        null != ez.current &&
                            (e5.info(`[QV] | handleLoadedMetadata | videoAssetId: ${tl}`),
                            e7(!0),
                            tl !== T.fY.VIDEO_PLAYER_VIDEO_HLS && tP(te),
                            eK ? (ez.current.volume = 0) : (ez.current.volume = eY));
                    },
                    onLoadStart: () => {
                        (eB.current = performance.now()),
                            tu(eD),
                            e5.info(`[QV] | handleLoadStart | loadingStartTime: ${eB.current}`);
                    },
                    onPlaying: () => {
                        if (!eU.current) return;
                        let e = performance.now() - Y;
                        e5.info(`[QV] | ⏰ Video FCP: ${e}ms`), tg(e), (eU.current = !1);
                    },
                    onWaiting: (e) => {
                        (eF.current = performance.now()),
                            e5.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eF.current}`),
                            tv(),
                            eT(!0);
                    },
                    onProgress: (e) => {
                        if (null == ez.current) return;
                        e5.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${ez.current.buffered.length}`);
                        let t = [];
                        for (let e = 0; e < ez.current.buffered.length; e++) {
                            let n = ez.current.buffered.start(e),
                                r = ez.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / ez.current.duration, size: (r - n) / ez.current.duration });
                        }
                        eN(t);
                    },
                    onCanPlay: t$,
                    onCanPlayThrough: t$,
                    onSeeked: () => {
                        e5.info("[QV] | handleSeeked"), e4(!0);
                    },
                    onAbort: () => tF(w.SB.ABORT),
                    onError: () => tF(w.SB.ERROR),
                    onEmptied: () => tF(w.SB.EMPTIED),
                    onStalled: () => tF(w.SB.STALLED),
                    onClick: () => {
                        e5.info("[QV] | handleVideoClick"), tV();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != tJ &&
                            (0, r.jsx)("track", {
                                ref: eW,
                                src: tJ.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != ts &&
                            tl !== T.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != ts.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tF(w.SB.SOURCE_ERROR),
                                src: ts.url,
                                type: ts.mimetype,
                            }),
                    ],
                }),
                (eA || eb) &&
                    ec === w.Q6.PLAYING &&
                    null != ts &&
                    (0, r.jsx)("span", {
                        className: G.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(m.y$y, { type: m.y$y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(O.A, { hasVideoAsset: null != ts, playerState: ec, pauseReason: e0 }),
                tt
                    ? (0, r.jsxs)("div", {
                          className: G.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          children: [
                              (0, r.jsx)(M.A, {}),
                              (0, r.jsx)(m.K0, {
                                  variant: "overlay-secondary",
                                  icon: m.PGe,
                                  "aria-label": F.intl.string(F.t.cpT0Cq),
                                  onClick: J,
                              }),
                          ],
                      })
                    : (0, r.jsx)(o.animated.div, {
                          className: G.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          style: { opacity: (0, o.to)([tK.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                          children: (0, r.jsx)(M.A, {}),
                      }),
                et &&
                    ec !== w.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.DUT, {
                                onClick: () => {
                                    ec === w.Q6.PAUSED && tT(w.Q6.PLAYING), en(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: G.BG }),
                            }),
                            (0, r.jsx)(o.animated.div, {
                                className: l()(G.xr, { [G.MZ]: "portrait" === H }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, o.to)([tK, tz], (e, t) => `${e * ti[tn] + t}px`) },
                                children: (0, r.jsx)(R.y, {
                                    quest: q,
                                    onClose: () => {
                                        en(!1), tf(S.uF.VIDEO_MODAL, y.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(o.animated.div, {
                    className: G.Jp,
                    style: { opacity: (0, o.to)([tK.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                (0, r.jsx)(
                    "div",
                    {
                        className: l()(G.yf, { [G.ZH]: ec === w.Q6.PLAYING, [G.v7]: ec === w.Q6.PAUSED }),
                        children:
                            ec === w.Q6.PLAYING
                                ? (0, r.jsx)(m.udU, { className: G.PK })
                                : (0, r.jsx)(m.E$n, { className: G.PK }),
                    },
                    ec,
                ),
                er &&
                    null != e8 &&
                    !tq &&
                    (0, r.jsx)(o.animated.div, {
                        className: G.o$,
                        ref: tH,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, o.to)([tK.to({ range: [0, 1], output: [-t6, -ti[tn]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(m.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: G.qh,
                            children: e8.text,
                        }),
                    }),
                (0, r.jsxs)(o.animated.div, {
                    className: G.r8,
                    style: { height: (0, o.to)([tK.to({ range: [0, 1], output: [0, ti[tn]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(o.animated.div, {
                            style: {
                                transform: (0, o.to)(
                                    [tK.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${e * t6}px)`,
                                ),
                            },
                            children: (0, r.jsx)(k.A, {
                                percent: null != eV ? eV : eh,
                                animate: !0 !== eq.current && !eS,
                                interactionEnabled: eX && eO,
                                playerState: ec,
                                preloadedBuffers: tk ? ey : void 0,
                                duration: ez.current?.duration ?? 1,
                                isFullyVisible: tk && eO,
                                maxSeekableTime: tk && eO ? e3 : void 0,
                                onClick: (e) => {
                                    tP(e), ec === w.Q6.ENDED && tT(w.Q6.PLAYING);
                                },
                                onScrubBack: tw,
                                onScrubForward: tO,
                                "data-testid": "discord-web-video-player-timeline",
                            }),
                        }),
                        (0, r.jsx)(o.animated.div, {
                            className: G.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, o.to)(
                                    [tK.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * t1}px`,
                                ),
                                paddingBottom: (0, o.to)(
                                    [tK.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, o.to)([tK.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: () => ef(!0),
                            onBlur: () => ef(!1),
                            children: (0, r.jsx)(L.A, {
                                videoRef: ez,
                                orientation: H,
                                playerState: ec,
                                animSpring: tK,
                                visible: tk,
                                seekForwardEnabled: tZ,
                                hideCaptionBtn: null == tJ,
                                hideTranscriptBtn: t0,
                                size: tn,
                                handlePlaybackBtnClick: tV,
                                handleTranscriptBtnClick: () => {
                                    en(!et),
                                        tf(S.uF.VIDEO_MODAL, et ? y.Cy.TRANSCRIPT_DISABLE : y.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    ei(!er),
                                        tf(
                                            S.uF.VIDEO_MODAL,
                                            er ? y.Cy.CLOSED_CAPTIONING_DISABLE : y.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !Z;
                                    e5.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, x.qf)(ez.current?.parentNode, ez.current);
                                    e && null != t
                                        ? ((0, x.tl)(t), t.addEventListener(x.Wb, tR), tS(!0), tr(w.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(x.Wb, tR), tS(!1), (0, x.sP)(t), tr(w.oA.MD)),
                                        ee(e);
                                },
                                handleSeekBackBtnClick: tw,
                                handleSeekForwardBtnClick: tO,
                                handleControlBarPendingInteraction: ew,
                                onVolumeChange: tA,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
