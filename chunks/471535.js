n.d(t, { A: () => $ }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(771253),
    o = n(442215),
    u = n(942381),
    c = n(311907),
    d = n(645577),
    m = n(397927),
    p = n(964486),
    E = n(775602),
    f = n(607470),
    h = n(892358),
    v = n(544180),
    x = n(475815),
    g = n(829219),
    S = n(341915),
    A = n(405670),
    C = n(943849),
    _ = n(991484),
    b = n(579473),
    T = n(590202),
    y = n(792620),
    N = n(753386),
    D = n(880080),
    I = n(818049),
    L = n(717415),
    j = n(661417),
    M = n(882291),
    w = n(224284),
    k = n(261331),
    R = n(602871),
    P = n(246465),
    O = n(660171),
    Q = n(853738),
    V = n(654487),
    U = n(838541),
    B = n(985018),
    F = n(221190);
let G = { tension: 250, friction: 5, clamp: !0 };
function $(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: i,
            parentTransitionState: $,
            performanceClockStartTime: Y,
            orientation: K,
            videoUrlOverride: H,
        } = e,
        {
            sourceQuestContent: W,
            quest: q,
            videoSessionId: z,
            onClose: X,
            isFullscreenEnabled: J,
            setIsFullscreenEnabled: Z,
            useNewProgressBarStyling: ee,
        } = l.useContext(L.VideoQuestModalContext),
        et = (0, A.Kr)((e) => e.transcriptEnabled),
        en = (0, A.Kr)((e) => e.setTranscriptEnabled),
        er = (0, A.Kr)((e) => e.captionEnabled),
        el = (0, A.Kr)((e) => e.setCaptionEnabled),
        { focused: ei, focusedChanged: ea } = (0, h.A7)(),
        { visible: es, visibleChanged: eo, targetRef: eu } = (0, h.O7)(),
        [ec, ed] = l.useState(!0 === i ? k.Q6.PLAYING : k.Q6.PAUSED),
        [em, ep] = l.useState(!1),
        [eE, ef] = l.useState(!1),
        eh = (0, y.Yh)(q),
        [ev, ex] = l.useState(eh.percentComplete),
        eg = l.useCallback((e) => {
            eV(null), ex(e);
        }, []),
        [eS, eA] = l.useState(!1),
        [eC, e_] = l.useState(!0),
        [eb, eT] = l.useState(!1),
        [ey, eN] = l.useState([]),
        [eD, eI] = l.useState(v.A.getEffectiveConnectionSpeed()),
        [eL, ej] = l.useState(0),
        [eM, ew] = l.useState(0),
        [ek, eR] = l.useState(!1),
        [eP, eO] = l.useState(!1),
        [eQ, eV] = l.useState(null),
        eU = l.useRef(!0),
        eB = l.useRef(null),
        eF = l.useRef(null),
        eG = (0, A.Kr)((e) => e.videoProgress[q.id] ?? { timestampSec: 0, duration: 10 }, u.x),
        e$ = (0, A.Kr)((e) => e.setVideoProgress),
        eY = (0, A.Kr)((e) => e.muted),
        eK = (0, A.Kr)((e) => e.volume),
        eH = (0, c.bG)([E.A], () => E.A.useReducedMotion),
        eW = (0, l.useRef)(null),
        eq = (0, l.useRef)(null),
        ez = l.useRef(!0),
        eX = q.userStatus?.completedAt != null,
        eJ = l.useMemo(() => q.config.features.includes(V.Li.FULL_EPISODE_VIDEO_QUEST), [q.config.features]),
        eZ = l.useRef(!1),
        [e0, e1] = l.useState(null),
        [e2, e6] = l.useState(!1),
        [e7, e4] = l.useState(!1),
        [e9, e8] = l.useState(!1),
        [e3, e5] = l.useState(null),
        te = eX ? (eW.current?.duration ?? 0) : Math.max(eG.maxTimestampSec, eh.progressSeconds),
        tt = l.useMemo(() => (0, C.L)({ quest: q, location: V.rE.VIDEO_MODAL }), [q]),
        tn = (0, d.g)(eX, eG, eh.progressSeconds),
        [tr, tl] = l.useState(k.oA.MD),
        ti = { [k.oA.MD]: ee ? 56 : 50, [k.oA.LG]: ee ? 64 : 58 };
    (0, p.u5)(() => {
        ez.current &&
            ((ez.current = !1),
            eI(v.A.getEffectiveConnectionSpeed()),
            eX && eG.timestampSec >= eG.duration && e$(q.id, 0, eG.duration));
    });
    let { videoAsset: ta, videoAssetType: ts, hlsRef: to, onFirstChunkLoaded: tu } = (0, P.A)(eW, eD, tn, H),
        {
            trackQuestVideoLoadingStarted: tc,
            trackQuestVideoLoadingEnded: td,
            trackQuestVideoProgressed: tm,
            trackQuestVideoResumed: tp,
            trackQuestVideoPaused: tE,
            trackQuestVideoFocusChange: tf,
            trackQuestContentClick: th,
            trackQuestVideoBufferingStarted: tv,
            trackQuestVideoBufferingEnded: tx,
            trackWatchTimeAnalytics: tg,
            trackQuestVideoTimeToFirstFrame: tS,
            trackQuestVideoFullscreenChanged: tA,
            trackQuestVideoError: tC,
            trackQuestVideoVolumeChanged: t_,
        } = (0, O.A)({
            questId: q.id,
            isQuestCompleted: eX,
            videoRef: eW,
            hlsRef: to,
            videoSessionId: z,
            videoAssetId: ts,
            sourceQuestContent: W,
            logger: tt,
            isFullEpisodeVideoQuest: eJ,
        });
    (0, Q.A)({ videoAssetUrl: ta?.url, videoRef: eW, hlsRef: to, videoAssetType: ts });
    let tb = l.useRef(null),
        tT = l.useCallback(() => {
            clearTimeout(tb.current),
                e8(!0),
                (tb.current = setTimeout(() => {
                    e8(!1);
                }, 1e3));
        }, []);
    l.useEffect(
        () => () => {
            null != tb.current && clearTimeout(tb.current);
        },
        [],
    );
    let ty = l.useCallback(() => eW.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: tN } = (0, _.A)({
            getCurrentVideoTime: ty,
            isPlaying: ec === k.Q6.PLAYING,
            isMetadataLoaded: e2,
            isInitialSeekComplete: e7,
            onAnalytics: tg,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
        }),
        tD = l.useCallback(
            (e) => {
                if ((tt.info(`[QV] | updatePlayerState | playerState: ${e}`), ed(e), null != eW.current))
                    switch (e) {
                        case k.Q6.PLAYING:
                            eW.current.paused && tp(e0), e1(null), eW.current.play();
                            break;
                        case k.Q6.PAUSED:
                            eW.current.paused || tN(), eW.current.pause(), (eU.current = !1);
                            break;
                        case k.Q6.ENDED:
                            tN(), en(!1);
                    }
            },
            [tp, e0, tN, en, tt],
        );
    l.useEffect(() => {
        tE(e0);
    }, [e0, tE]),
        l.useEffect(() => {
            ea && tf(ei, ec);
        }, [ei, ea, ec, tf]);
    let tI = l.useCallback(
        (e) => {
            eX || q.userStatus?.enrolledAt == null || (tt.info(`[QV] sendServerProgressUpdate: ${e}`), (0, N.zv)(q, e)),
                tm();
        },
        [eX, q, tt, tm],
    );
    l.useEffect(() => {
        ($ !== m.ip4.HIDDEN &&
            $ !== m.ip4.EXITING &&
            $ !== m.ip4.EXITED &&
            (null == $ || !eo || es || eX) &&
            (!ea || ei || eX)) ||
            null == eW.current ||
            ec !== k.Q6.PLAYING ||
            (tt.info(
                `[QV] | Pausing video | playerState: ${ec}, parentTransitionState: ${$}, visible: ${es}, focused: ${ei}, isQuestCompleted: ${eX}`,
            ),
            tD(k.Q6.PAUSED),
            eX ? eJ && e1(S.Yg.ANOTHER_MODAL_OPENED) : e1(S.Yg.LOST_FOCUS));
    }, [$, ei, ea, es, eo, ec, eX, tD, tI, tt, eJ]),
        l.useEffect(() => {
            e0 === S.Yg.ANOTHER_MODAL_OPENED &&
                $ === m.ip4.ENTERED &&
                ec === k.Q6.PAUSED &&
                eJ &&
                ei &&
                (tt.info("[QV] | Resuming full episode video after modal re-entered"), tD(k.Q6.PLAYING));
        }, [$, ec, tt, tD, e0, eJ, ei]);
    let [tL, tj] = l.useState(!1),
        tM = l.useRef(null),
        tw = l.useRef(performance.now()),
        tk = l.useCallback(() => {
            null != tM.current && clearTimeout(tM.current),
                ec !== k.Q6.PLAYING ||
                    (tM.current = setTimeout(
                        () => {
                            ec === k.Q6.PLAYING && tj(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tw.current)),
                    ));
        }, [ec]),
        tR = () => {
            tj(!1), (tw.current = performance.now()), tk();
        };
    l.useEffect(() => {
        if (ec !== k.Q6.PLAYING) {
            tj(!1), null != tM.current && clearTimeout(tM.current);
            return;
        }
        return (
            tk(),
            () => {
                null != tM.current && clearTimeout(tM.current);
            }
        );
    }, [ec, tk]);
    let tP = !tL && (eE || em || ec === k.Q6.ENDED),
        tO = l.useCallback(() => {
            tt.info("[QV] | handleFullScreenExit");
            let e = (0, x.qf)(eW.current?.parentNode, eW.current);
            null == e || (0, x._U)(e) || (e.removeEventListener(x.Wb, tO), Z(!1), tA(!1), tl(k.oA.MD));
        }, [Z, tt, tA]),
        tQ = () => {
            if (null == eW.current) return;
            let e = Math.max(eW.current.currentTime - 10, 0);
            tt.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                tU(e),
                ec === k.Q6.ENDED && tD(k.Q6.PAUSED),
                th(S.uF.VIDEO_MODAL, T.Cy.SEEK_BACKWARD);
        },
        tV = () => {
            if (null == eW.current || !t2) return;
            let e = Math.min(eW.current.currentTime + 10, te);
            tt.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                tU(e),
                ec !== k.Q6.ENDED && e >= eW.current.duration && tD(k.Q6.ENDED),
                th(S.uF.VIDEO_MODAL, T.Cy.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = eW.current;
        return () => {
            let t = (0, x.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(x.Wb, tO);
        };
    }, [tO]);
    let tU = l.useCallback(
        (e) => {
            null != eW.current &&
                (tt.info(`[QV] | seekTimeline | timeSec: ${e}`),
                eV((e / (eW.current.duration ?? 1)) * 100),
                tN(),
                eA(!0),
                e4(!1),
                (eW.current.currentTime = e),
                e$(q.id, e, eW.current.duration));
        },
        [eW, e$, q.id, tN, tt],
    );
    l.useEffect(() => {
        let e = eW.current;
        if (null == e) return;
        let t = () => {
            null != to.current &&
                to.current.mainForwardBufferInfo?.len === 0 &&
                to.current.trigger(s.sV.BUFFER_FLUSHING, {
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
    }, [eW, to]);
    let tB = () => {
            if (null != eW.current)
                switch ((tt.info(`[QV] | handlePlaybackBtnClick | playerState: ${ec}`), tT(), ec)) {
                    case k.Q6.ENDED:
                        tU(0), tD(k.Q6.PLAYING);
                        break;
                    case k.Q6.PLAYING:
                        tD(k.Q6.PAUSED), e1(S.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tD(k.Q6.PLAYING);
                }
        },
        tF = (e) => {
            e5(e);
        },
        tG = (e) => {
            e5((t) => (t?.id === e.id ? null : t));
        },
        t$ = l.useCallback(() => {
            if (
                null == eW.current ||
                (tt.info(`[QV] | handleTracksLoaded: textTracks.length: ${eW.current.textTracks.length}`),
                0 === eW.current.textTracks.length)
            )
                return;
            let e = eW.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, h.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tF(n)), (n.onexit = () => tG(n)));
                }
        }, [eW, tt]);
    l.useEffect(() => {
        if (null == eq.current) return;
        let e = eq.current;
        return (
            e.addEventListener("load", t$),
            () => {
                null != e && e.removeEventListener("load", t$);
            }
        );
    }, [eq, t$]);
    let tY = l.useCallback(
            (e) => {
                tt.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${eW.current?.currentTime}, videoAssetId: ${ts}, connectionSpeed: ${eD}`,
                ),
                    tC(e);
            },
            [eD, tC, eW, ts, tt],
        ),
        tK = l.useRef(!1);
    l.useEffect(() => {
        null != ta || tK.current || ((tK.current = !0), tC(k.SB.NO_VALID_SOURCE));
    }, [ta, tC, tK]);
    let tH = (e) => {
        tt.info(`[QV] | handleCanPlay: playerState: ${ec}`),
            null != eW.current &&
                ec === k.Q6.PLAYING &&
                (tt.info("[QV] | handleCanPlay: did NOT early return"),
                eC && (tt.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eC}`), e_(!1)),
                eb &&
                    (tt.info(`[QV] | handleCanPlay: waitingForChunk: ${eb}`),
                    tx(null != eF.current ? performance.now() - eF.current : null),
                    eT(!1)),
                tt.info("[QV] | handleCanPlay: updating player state to playing"),
                tD(k.Q6.PLAYING));
    };
    l.useEffect(() => {
        if (!eS) return;
        let e = setTimeout(() => {
            eA(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eS]);
    let [{ controlBarAnimSpring: tW }, tq] = (0, m.zhh)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: G,
            onStart: () => {
                eO(!1);
            },
            onRest: (e) => {
                1 === e.value && eO(!0);
            },
        })),
        tz = (0, l.useRef)(null),
        [{ captionHeightSpring: tX }, tJ] = (0, m.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: G }));
    l.useEffect(
        () => (
            tJ({ captionHeightSpring: er && null != e3 ? (tz.current?.clientHeight ?? 0) : 0, immediate: eH }),
            () => {
                tX.stop();
            }
        ),
        [er, tJ, eH, e3, tX],
    ),
        l.useEffect(
            () => (
                tq({ controlBarAnimSpring: tP || ek ? 1 : 0, immediate: eH }),
                () => {
                    tW.stop();
                }
            ),
            [tP, tq, eH, ek, tW],
        );
    let tZ = ec === k.Q6.ENDED,
        t0 = l.useMemo(() => (0, b.tW)(q, b.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [q]),
        t1 = l.useMemo(() => (0, b.tW)(q, b.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [q]),
        t2 = eX || eG.maxTimestampSec >= (eW.current?.currentTime ?? 0) + 1,
        t6 = l.useMemo(() => null === (0, b.tW)(q, b.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [q]),
        t7 = ee ? 20 : 12,
        t4 = 20 * !!ee,
        t9 = eX && eP;
    return (0, r.jsx)(m.DUT, {
        className: F.W6,
        "data-fullscreen": J,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            ep(!0), tj(!1), (tw.current = performance.now()), null != tM.current && clearTimeout(tM.current);
        },
        onMouseLeave: () => {
            ep(!1), tj(!1);
        },
        onMouseMove: tR,
        onKeyDown: tR,
        children: (0, r.jsxs)("div", {
            className: a()(F.NS, { [F.DO]: "portrait" === K, [F.r7]: "landscape" === K }),
            style: { "--custom-footer-bottom": `${ee ? 4 : 2}px` },
            children: [
                tZ &&
                    (0, r.jsx)(I.A, {
                        videoRef: eW,
                        onExitFullScreen: tO,
                        onTrackQuestVideoFullscreenChanged: tA,
                        onTrackQuestContentClick: th,
                        orientation: K,
                    }),
                (0, r.jsxs)(f.A, {
                    ref: (e) => {
                        (eW.current = e), (eu.current = e);
                    },
                    autoPlay: i,
                    playsInline: !0,
                    mediaLayoutType: J ? U.dG.STATIC : U.dG.RESPONSIVE,
                    className: a()({ [F.R]: tZ, [F.IR]: !0 }),
                    controls: !1,
                    poster: t0?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        if (null == eW.current) return;
                        let r = eW.current.currentTime >= t && !eZ.current && eJ;
                        if (eW.current.currentTime >= eL || r) {
                            var l;
                            tt.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${eW.current.currentTime}`,
                            ),
                                (l = eW.current.currentTime) >= t && (eZ.current = !0),
                                ej(l + 6 + 2 * Math.random()),
                                tI(l);
                        }
                        eW.current.currentTime >= eM &&
                            (ew(eW.current.currentTime + 1),
                            (0, g.Gn)(q.id, eh.taskType, eW.current.currentTime),
                            n(eW.current.currentTime)),
                            e$(q.id, eW.current.currentTime, eW.current.duration),
                            eg((eW.current.currentTime / eW.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != eW.current &&
                            (tI(eW.current.duration + 1),
                            tt.info(`[QV] | handleEnded: sending progress update: ${eW.current.duration + 1}`),
                            e$(q.id, eW.current.duration, eW.current.duration)),
                            tD(k.Q6.ENDED),
                            eT(!1);
                    },
                    onLoadedData: (e) => {
                        tt.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eC}`),
                            eC && (td(null != eB.current ? performance.now() - eB.current : null), e_(!1), tu());
                    },
                    onLoadedMetadata: (e) => {
                        null != eW.current &&
                            (tt.info(`[QV] | handleLoadedMetadata | videoAssetId: ${ts}`),
                            e6(!0),
                            ts !== b.fY.VIDEO_PLAYER_VIDEO_HLS && tU(tn),
                            eY ? (eW.current.volume = 0) : (eW.current.volume = eK));
                    },
                    onLoadStart: () => {
                        (eB.current = performance.now()),
                            tc(eD),
                            tt.info(`[QV] | handleLoadStart | loadingStartTime: ${eB.current}`);
                    },
                    onPlaying: () => {
                        if (!eU.current) return;
                        let e = performance.now() - Y;
                        tt.info(`[QV] | ⏰ Video FCP: ${e}ms`), tS(e), (eU.current = !1);
                    },
                    onWaiting: (e) => {
                        (eF.current = performance.now()),
                            tt.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eF.current}`),
                            tv(),
                            eT(!0);
                    },
                    onProgress: (e) => {
                        if (null == eW.current) return;
                        tt.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${eW.current.buffered.length}`);
                        let t = [];
                        for (let e = 0; e < eW.current.buffered.length; e++) {
                            let n = eW.current.buffered.start(e),
                                r = eW.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / eW.current.duration, size: (r - n) / eW.current.duration });
                        }
                        eN(t);
                    },
                    onCanPlay: tH,
                    onCanPlayThrough: tH,
                    onSeeked: () => {
                        tt.info("[QV] | handleSeeked"), e4(!0);
                    },
                    onAbort: () => tY(k.SB.ABORT),
                    onError: () => tY(k.SB.ERROR),
                    onEmptied: () => tY(k.SB.EMPTIED),
                    onStalled: () => tY(k.SB.STALLED),
                    onClick: () => {
                        tt.info("[QV] | handleVideoClick"), tB();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != t1 &&
                            (0, r.jsx)("track", {
                                ref: eq,
                                src: t1.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != ta &&
                            ts !== b.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != ta.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tY(k.SB.SOURCE_ERROR),
                                src: ta.url,
                                type: ta.mimetype,
                            }),
                    ],
                }),
                (eC || eb) &&
                    ec === k.Q6.PLAYING &&
                    null != ta &&
                    (0, r.jsx)("span", {
                        className: F.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(m.y$y, { type: m.y$y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(R.A, { hasVideoAsset: null != ta, playerState: ec, pauseReason: e0 }),
                ee
                    ? (0, r.jsxs)("div", {
                          className: F.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          children: [
                              (0, r.jsx)(j.A, {}),
                              (0, r.jsx)(m.K0, {
                                  variant: "overlay-secondary",
                                  icon: m.PGe,
                                  "aria-label": B.intl.string(B.t.cpT0Cq),
                                  onClick: X,
                              }),
                          ],
                      })
                    : (0, r.jsx)(o.animated.div, {
                          className: F.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          style: { opacity: (0, o.to)([tW.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                          children: (0, r.jsx)(j.A, {}),
                      }),
                et &&
                    ec !== k.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.DUT, {
                                onClick: () => {
                                    ec === k.Q6.PAUSED && tD(k.Q6.PLAYING), en(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: F.BG }),
                            }),
                            (0, r.jsx)(o.animated.div, {
                                className: a()(F.xr, { [F.MZ]: "portrait" === K }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, o.to)([tW, tX], (e, t) => `${e * ti[tr] + t}px`) },
                                children: (0, r.jsx)(w.y, {
                                    quest: q,
                                    onClose: () => {
                                        en(!1), th(S.uF.VIDEO_MODAL, T.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(o.animated.div, {
                    className: F.Jp,
                    style: { opacity: (0, o.to)([tW.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                e9 &&
                    (0, r.jsx)(
                        "div",
                        {
                            className: a()(F.yf, { [F.ZH]: ec === k.Q6.PLAYING, [F.v7]: ec === k.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ec === k.Q6.PLAYING
                                    ? (0, r.jsx)(m.udU, { className: F.PK })
                                    : (0, r.jsx)(m.E$n, { className: F.PK }),
                        },
                        ec,
                    ),
                er &&
                    null != e3 &&
                    !tZ &&
                    (0, r.jsx)(o.animated.div, {
                        className: F.o$,
                        ref: tz,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, o.to)([tW.to({ range: [0, 1], output: [-t4, -ti[tr]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(m.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: F.qh,
                            children: e3.text,
                        }),
                    }),
                (0, r.jsxs)(o.animated.div, {
                    className: F.r8,
                    style: { height: (0, o.to)([tW.to({ range: [0, 1], output: [0, ti[tr]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(o.animated.div, {
                            style: {
                                transform: (0, o.to)(
                                    [tW.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${e * t4}px)`,
                                ),
                            },
                            children: (0, r.jsx)(M.A, {
                                percent: null != eQ ? eQ : ev,
                                animate: !0 !== ez.current && !eS,
                                interactionEnabled: t9,
                                playerState: ec,
                                preloadedBuffers: tP ? ey : void 0,
                                duration: eW.current?.duration ?? 1,
                                isFullyVisible: tP && eP,
                                maxSeekableTime: tP && eP ? te : void 0,
                                onClick: (e) => {
                                    t9 && (tU(e), ec === k.Q6.ENDED && tD(k.Q6.PLAYING));
                                },
                                onScrubBack: tQ,
                                onScrubForward: tV,
                                isQuestCompleted: eX,
                                targetSec: t,
                                "data-testid": "discord-web-video-player-timeline",
                            }),
                        }),
                        (0, r.jsx)(o.animated.div, {
                            className: F.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, o.to)(
                                    [tW.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * t7}px`,
                                ),
                                paddingBottom: (0, o.to)(
                                    [tW.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, o.to)([tW.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: () => ef(!0),
                            onBlur: () => ef(!1),
                            children: (0, r.jsx)(D.A, {
                                videoRef: eW,
                                orientation: K,
                                playerState: ec,
                                animSpring: tW,
                                visible: tP,
                                seekForwardEnabled: t2,
                                hideCaptionBtn: null == t1,
                                hideTranscriptBtn: t6,
                                size: tr,
                                handlePlaybackBtnClick: tB,
                                handleTranscriptBtnClick: () => {
                                    en(!et),
                                        th(S.uF.VIDEO_MODAL, et ? T.Cy.TRANSCRIPT_DISABLE : T.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    el(!er),
                                        th(
                                            S.uF.VIDEO_MODAL,
                                            er ? T.Cy.CLOSED_CAPTIONING_DISABLE : T.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !J;
                                    tt.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, x.qf)(eW.current?.parentNode, eW.current);
                                    e && null != t
                                        ? ((0, x.tl)(t), t.addEventListener(x.Wb, tO), tA(!0), tl(k.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(x.Wb, tO), tA(!1), (0, x.sP)(t), tl(k.oA.MD)),
                                        Z(e);
                                },
                                handleSeekBackBtnClick: tQ,
                                handleSeekForwardBtnClick: tV,
                                handleControlBarPendingInteraction: eR,
                                onVolumeChange: t_,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
