n.d(t, { A: () => G }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(771253),
    o = n(522160),
    u = n(942381),
    c = n(311907),
    d = n(645577),
    m = n(397927),
    p = n(964486),
    E = n(775602),
    f = n(607470),
    v = n(892358),
    h = n(544180),
    g = n(475815),
    S = n(829219),
    C = n(341915),
    A = n(405670),
    x = n(943849),
    _ = n(991484),
    b = n(579473),
    T = n(590202),
    y = n(792620),
    N = n(753386),
    D = n(880080),
    L = n(818049),
    I = n(717415),
    j = n(661417),
    R = n(882291),
    k = n(224284),
    w = n(261331),
    M = n(602871),
    O = n(246465),
    P = n(660171),
    V = n(853738),
    Q = n(654487),
    U = n(838541),
    B = n(681636);
let F = { tension: 250, friction: 5, clamp: !0 };
function G(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: i,
            parentTransitionState: G,
            performanceClockStartTime: $,
            orientation: Y,
            videoUrlOverride: K,
        } = e,
        { sourceQuestContent: H, quest: z, videoSessionId: W } = l.useContext(I.VideoQuestModalContext),
        q = (0, A.Kr)((e) => e.transcriptEnabled),
        X = (0, A.Kr)((e) => e.setTranscriptEnabled),
        J = (0, A.Kr)((e) => e.captionEnabled),
        Z = (0, A.Kr)((e) => e.setCaptionEnabled),
        ee = (0, A.Kr)((e) => e.fullScreenEnabled),
        et = (0, A.Kr)((e) => e.setFullScreenEnabled),
        { focused: en, focusedChanged: er } = (0, v.A7)(),
        { visible: el, visibleChanged: ei, targetRef: es } = (0, v.O7)(),
        [ea, eo] = l.useState(!0 === i ? w.Q6.PLAYING : w.Q6.PAUSED),
        [eu, ec] = l.useState(!1),
        [ed, em] = l.useState(!1),
        ep = (0, y.Yh)(z),
        [eE, ef] = l.useState(ep.percentComplete),
        ev = l.useCallback((e) => {
            eO(null), ef(e);
        }, []),
        [eh, eg] = l.useState(!1),
        [eS, eC] = l.useState(!0),
        [eA, ex] = l.useState(!1),
        [e_, eb] = l.useState([]),
        [eT, ey] = l.useState(h.A.getEffectiveConnectionSpeed()),
        [eN, eD] = l.useState(0),
        [eL, eI] = l.useState(0),
        [ej, eR] = l.useState(!1),
        [ek, ew] = l.useState(!1),
        [eM, eO] = l.useState(null),
        eP = l.useRef(!0),
        eV = l.useRef(null),
        eQ = l.useRef(null),
        eU = (0, A.Kr)((e) => e.videoProgress[z.id] ?? { timestampSec: 0, duration: 10 }, u.x),
        eB = (0, A.Kr)((e) => e.setVideoProgress),
        eF = (0, A.Kr)((e) => e.muted),
        eG = (0, A.Kr)((e) => e.volume),
        e$ = (0, c.bG)([E.A], () => E.A.useReducedMotion),
        eY = (0, l.useRef)(null),
        eK = (0, l.useRef)(null),
        eH = l.useRef(!0),
        ez = z.userStatus?.completedAt != null,
        eW = l.useMemo(() => z.config.features.includes(Q.Li.FULL_EPISODE_VIDEO_QUEST), [z.config.features]),
        eq = l.useRef(!1),
        [eX, eJ] = l.useState(null),
        [eZ, e0] = l.useState(!1),
        [e1, e6] = l.useState(!1),
        [e2, e7] = l.useState(null),
        e4 = ez ? (eY.current?.duration ?? 0) : Math.max(eU.maxTimestampSec, ep.progressSeconds),
        e8 = l.useMemo(() => (0, x.L)({ quest: z, location: Q.rE.VIDEO_MODAL }), [z]),
        e9 = (0, d.g)(ez, eU, ep.progressSeconds),
        [e3, e5] = l.useState(w.oA.MD),
        te = { [w.oA.MD]: 50, [w.oA.LG]: 58 };
    (0, p.u5)(() => {
        eH.current &&
            ((eH.current = !1),
            ey(h.A.getEffectiveConnectionSpeed()),
            ez && eU.timestampSec >= eU.duration && eB(z.id, 0, eU.duration));
    });
    let { videoAsset: tt, videoAssetType: tn, hlsRef: tr, onFirstChunkLoaded: tl } = (0, O.A)(eY, eT, e9, K),
        {
            trackQuestVideoLoadingStarted: ti,
            trackQuestVideoLoadingEnded: ts,
            trackQuestVideoProgressed: ta,
            trackQuestVideoResumed: to,
            trackQuestVideoPaused: tu,
            trackQuestVideoFocusChange: tc,
            trackQuestContentClick: td,
            trackQuestVideoBufferingStarted: tm,
            trackQuestVideoBufferingEnded: tp,
            trackWatchTimeAnalytics: tE,
            trackQuestVideoTimeToFirstFrame: tf,
            trackQuestVideoFullscreenChanged: tv,
            trackQuestVideoError: th,
            trackQuestVideoVolumeChanged: tg,
        } = (0, P.A)({
            questId: z.id,
            isQuestCompleted: ez,
            videoRef: eY,
            hlsRef: tr,
            videoSessionId: W,
            videoAssetId: tn,
            sourceQuestContent: H,
            logger: e8,
            isFullEpisodeVideoQuest: eW,
        });
    (0, V.A)({ videoAssetUrl: tt?.url, videoRef: eY, hlsRef: tr, videoAssetType: tn });
    let tS = l.useCallback(() => eY.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: tC } = (0, _.A)({
            getCurrentVideoTime: tS,
            isPlaying: ea === w.Q6.PLAYING,
            isMetadataLoaded: eZ,
            isInitialSeekComplete: e1,
            onAnalytics: tE,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
        }),
        tA = l.useCallback(
            (e) => {
                if ((e8.info(`[QV] | updatePlayerState | playerState: ${e}`), eo(e), null != eY.current))
                    switch (e) {
                        case w.Q6.PLAYING:
                            eY.current.paused && to(eX), eJ(null), eY.current.play();
                            break;
                        case w.Q6.PAUSED:
                            eY.current.paused || tC(), eY.current.pause(), (eP.current = !1);
                            break;
                        case w.Q6.ENDED:
                            tC(), X(!1);
                    }
            },
            [to, eX, tC, X, e8],
        );
    l.useEffect(() => {
        tu(eX);
    }, [eX, tu]),
        l.useEffect(() => {
            er && tc(en, ea);
        }, [en, er, ea, tc]);
    let tx = l.useCallback(
        (e) => {
            ez || z.userStatus?.enrolledAt == null || (e8.info(`[QV] sendServerProgressUpdate: ${e}`), (0, N.zv)(z, e)),
                ta();
        },
        [ez, z, e8, ta],
    );
    l.useEffect(() => {
        (G !== m.ip4.HIDDEN &&
            G !== m.ip4.EXITING &&
            G !== m.ip4.EXITED &&
            (null == G || !ei || el || ez) &&
            (!er || en || ez)) ||
            null == eY.current ||
            ea !== w.Q6.PLAYING ||
            (e8.info(
                `[QV] | Pausing video | playerState: ${ea}, parentTransitionState: ${G}, visible: ${el}, focused: ${en}, isQuestCompleted: ${ez}`,
            ),
            tA(w.Q6.PAUSED),
            ez || eJ(C.Yg.LOST_FOCUS));
    }, [G, en, er, el, ei, ea, ez, tA, tx, e8]);
    let [t_, tb] = l.useState(!1),
        tT = l.useRef(null),
        ty = l.useRef(performance.now()),
        tN = l.useCallback(() => {
            null != tT.current && clearTimeout(tT.current),
                ea !== w.Q6.PLAYING ||
                    (tT.current = setTimeout(
                        () => {
                            ea === w.Q6.PLAYING && tb(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - ty.current)),
                    ));
        }, [ea]),
        tD = () => {
            tb(!1), (ty.current = performance.now()), tN();
        };
    l.useEffect(() => {
        if (ea !== w.Q6.PLAYING) {
            tb(!1), null != tT.current && clearTimeout(tT.current);
            return;
        }
        return (
            tN(),
            () => {
                null != tT.current && clearTimeout(tT.current);
            }
        );
    }, [ea, tN]);
    let tL = !t_ && (ed || eu || ea === w.Q6.ENDED),
        tI = l.useCallback(() => {
            e8.info("[QV] | handleFullScreenExit");
            let e = (0, g.qf)(eY.current?.parentNode, eY.current);
            null == e || (0, g._U)(e) || (e.removeEventListener(g.Wb, tI), et(!1), tv(!1), e5(w.oA.MD));
        }, [et, e8, tv]),
        tj = () => {
            if (null == eY.current) return;
            let e = Math.max(eY.current.currentTime - 10, 0);
            e8.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                tk(e),
                ea === w.Q6.ENDED && tA(w.Q6.PAUSED),
                td(C.uF.VIDEO_MODAL, T.Cy.SEEK_BACKWARD);
        },
        tR = () => {
            if (null == eY.current || !tW) return;
            let e = Math.min(eY.current.currentTime + 10, e4);
            e8.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                tk(e),
                ea !== w.Q6.ENDED && e >= eY.current.duration && tA(w.Q6.ENDED),
                td(C.uF.VIDEO_MODAL, T.Cy.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = eY.current;
        return () => {
            let t = (0, g.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(g.Wb, tI);
        };
    }, [tI]);
    let tk = l.useCallback(
        (e) => {
            null != eY.current &&
                (e8.info(`[QV] | seekTimeline | timeSec: ${e}`),
                eO((e / (eY.current.duration ?? 1)) * 100),
                tC(),
                eg(!0),
                e6(!1),
                (eY.current.currentTime = e),
                eB(z.id, e, eY.current.duration));
        },
        [eY, eB, z.id, tC, e8],
    );
    l.useEffect(() => {
        let e = eY.current;
        if (null == e) return;
        let t = () => {
            null != tr.current &&
                tr.current.mainForwardBufferInfo?.len === 0 &&
                tr.current.trigger(a.sV.BUFFER_FLUSHING, {
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
    }, [eY, tr]);
    let tw = () => {
            if (null != eY.current)
                switch ((e8.info(`[QV] | handlePlaybackBtnClick | playerState: ${ea}`), ea)) {
                    case w.Q6.ENDED:
                        tk(0), tA(w.Q6.PLAYING);
                        break;
                    case w.Q6.PLAYING:
                        tA(w.Q6.PAUSED), eJ(C.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tA(w.Q6.PLAYING);
                }
        },
        tM = (e) => {
            e7(e);
        },
        tO = (e) => {
            e7((t) => (t?.id === e.id ? null : t));
        },
        tP = l.useCallback(() => {
            if (
                null == eY.current ||
                (e8.info(`[QV] | handleTracksLoaded: textTracks.length: ${eY.current.textTracks.length}`),
                0 === eY.current.textTracks.length)
            )
                return;
            let e = eY.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, v.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tM(n)), (n.onexit = () => tO(n)));
                }
        }, [eY, e8]);
    l.useEffect(() => {
        if (null == eK.current) return;
        let e = eK.current;
        return (
            e.addEventListener("load", tP),
            () => {
                null != e && e.removeEventListener("load", tP);
            }
        );
    }, [eK, tP]);
    let tV = l.useCallback(
            (e) => {
                e8.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${eY.current?.currentTime}, videoAssetId: ${tn}, connectionSpeed: ${eT}`,
                ),
                    th(e);
            },
            [eT, th, eY, tn, e8],
        ),
        tQ = l.useRef(!1);
    l.useEffect(() => {
        null != tt || tQ.current || ((tQ.current = !0), th(w.SB.NO_VALID_SOURCE));
    }, [tt, th, tQ]);
    let tU = (e) => {
        e8.info(`[QV] | handleCanPlay: playerState: ${ea}`),
            null != eY.current &&
                ea === w.Q6.PLAYING &&
                (e8.info("[QV] | handleCanPlay: did NOT early return"),
                eS && (e8.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eS}`), eC(!1)),
                eA &&
                    (e8.info(`[QV] | handleCanPlay: waitingForChunk: ${eA}`),
                    tp(null != eQ.current ? performance.now() - eQ.current : null),
                    ex(!1)),
                e8.info("[QV] | handleCanPlay: updating player state to playing"),
                tA(w.Q6.PLAYING));
    };
    l.useEffect(() => {
        if (!eh) return;
        let e = setTimeout(() => {
            eg(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eh]);
    let [{ controlBarAnimSpring: tB }, tF] = (0, m.zhh)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: F,
            onStart: () => {
                ew(!1);
            },
            onRest: (e) => {
                1 === e.value && ew(!0);
            },
        })),
        tG = (0, l.useRef)(null),
        [{ captionHeightSpring: t$ }, tY] = (0, m.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: F }));
    l.useEffect(
        () => (
            tY({ captionHeightSpring: J && null != e2 ? (tG.current?.clientHeight ?? 0) : 0, immediate: e$ }),
            () => {
                t$.stop();
            }
        ),
        [J, tY, e$, e2, t$],
    ),
        l.useEffect(
            () => (
                tF({ controlBarAnimSpring: tL || ej ? 1 : 0, immediate: e$ }),
                () => {
                    tB.stop();
                }
            ),
            [tL, tF, e$, ej, tB],
        );
    let tK = ea === w.Q6.ENDED,
        tH = l.useMemo(() => (0, b.tW)(z, b.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [z]),
        tz = l.useMemo(() => (0, b.tW)(z, b.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [z]),
        tW = ez || eU.maxTimestampSec >= (eY.current?.currentTime ?? 0) + 1,
        tq = l.useMemo(() => null === (0, b.tW)(z, b.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [z]);
    return (0, r.jsx)(m.DUT, {
        className: B.W6,
        "data-fullscreen": ee,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            ec(!0), tb(!1), (ty.current = performance.now()), null != tT.current && clearTimeout(tT.current);
        },
        onMouseLeave: () => {
            ec(!1), tb(!1);
        },
        onMouseMove: tD,
        onKeyDown: tD,
        children: (0, r.jsxs)("div", {
            className: s()(B.NS, { [B.DO]: "portrait" === Y, [B.r7]: "landscape" === Y }),
            children: [
                tK &&
                    (0, r.jsx)(L.A, {
                        videoRef: eY,
                        onExitFullScreen: tI,
                        onTrackQuestVideoFullscreenChanged: tv,
                        onTrackQuestContentClick: td,
                        orientation: Y,
                    }),
                (0, r.jsxs)(f.A, {
                    ref: (e) => {
                        (eY.current = e), (es.current = e);
                    },
                    autoPlay: i,
                    playsInline: !0,
                    mediaLayoutType: ee ? U.dG.STATIC : U.dG.RESPONSIVE,
                    className: s()({ [B.R]: tK, [B.IR]: !0 }),
                    controls: !1,
                    poster: tH?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        if (null == eY.current) return;
                        let r = eY.current.currentTime >= t && !eq.current && eW;
                        if (eY.current.currentTime >= eN || r) {
                            var l;
                            e8.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${eY.current.currentTime}`,
                            ),
                                (l = eY.current.currentTime) >= t && (eq.current = !0),
                                eD(l + 6 + 2 * Math.random()),
                                tx(l);
                        }
                        eY.current.currentTime >= eL &&
                            (eI(eY.current.currentTime + 1),
                            (0, S.Gn)(z.id, ep.taskType, eY.current.currentTime),
                            n(eY.current.currentTime)),
                            eB(z.id, eY.current.currentTime, eY.current.duration),
                            ev((eY.current.currentTime / eY.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != eY.current &&
                            (tx(eY.current.duration + 1),
                            e8.info(`[QV] | handleEnded: sending progress update: ${eY.current.duration + 1}`),
                            eB(z.id, eY.current.duration, eY.current.duration)),
                            tA(w.Q6.ENDED),
                            ex(!1);
                    },
                    onLoadedData: (e) => {
                        e8.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eS}`),
                            eS && (ts(null != eV.current ? performance.now() - eV.current : null), eC(!1), tl());
                    },
                    onLoadedMetadata: (e) => {
                        null != eY.current &&
                            (e8.info(`[QV] | handleLoadedMetadata | videoAssetId: ${tn}`),
                            e0(!0),
                            tn !== b.fY.VIDEO_PLAYER_VIDEO_HLS && tk(e9),
                            eF ? (eY.current.volume = 0) : (eY.current.volume = eG));
                    },
                    onLoadStart: () => {
                        (eV.current = performance.now()),
                            ti(eT),
                            e8.info(`[QV] | handleLoadStart | loadingStartTime: ${eV.current}`);
                    },
                    onPlaying: () => {
                        if (!eP.current) return;
                        let e = performance.now() - $;
                        e8.info(`[QV] | ⏰ Video FCP: ${e}ms`), tf(e), (eP.current = !1);
                    },
                    onWaiting: (e) => {
                        (eQ.current = performance.now()),
                            e8.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eQ.current}`),
                            tm(),
                            ex(!0);
                    },
                    onProgress: (e) => {
                        if (null == eY.current) return;
                        e8.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${eY.current.buffered.length}`);
                        let t = [];
                        for (let e = 0; e < eY.current.buffered.length; e++) {
                            let n = eY.current.buffered.start(e),
                                r = eY.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / eY.current.duration, size: (r - n) / eY.current.duration });
                        }
                        eb(t);
                    },
                    onCanPlay: tU,
                    onCanPlayThrough: tU,
                    onSeeked: () => {
                        e8.info("[QV] | handleSeeked"), e6(!0);
                    },
                    onAbort: () => tV(w.SB.ABORT),
                    onError: () => tV(w.SB.ERROR),
                    onEmptied: () => tV(w.SB.EMPTIED),
                    onStalled: () => tV(w.SB.STALLED),
                    onClick: () => {
                        e8.info("[QV] | handleVideoClick"), tw();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != tz &&
                            (0, r.jsx)("track", {
                                ref: eK,
                                src: tz.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != tt &&
                            tn !== b.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != tt.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tV(w.SB.SOURCE_ERROR),
                                src: tt.url,
                                type: tt.mimetype,
                            }),
                    ],
                }),
                (eS || eA) &&
                    ea === w.Q6.PLAYING &&
                    null != tt &&
                    (0, r.jsx)("span", {
                        className: B.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(m.y$y, { type: m.y$y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(M.A, { hasVideoAsset: null != tt, playerState: ea, pauseReason: eX }),
                (0, r.jsx)(o.animated.div, {
                    className: B.R4,
                    "data-testid": "discord-web-video-player-share-btn",
                    style: { opacity: (0, o.to)([tB.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    children: (0, r.jsx)(j.A, {}),
                }),
                q &&
                    ea !== w.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.DUT, {
                                onClick: () => {
                                    ea === w.Q6.PAUSED && tA(w.Q6.PLAYING), X(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: B.BG }),
                            }),
                            (0, r.jsx)(o.animated.div, {
                                className: s()(B.xr, { [B.MZ]: "portrait" === Y }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, o.to)([tB, t$], (e, t) => `${e * te[e3] + t}px`) },
                                children: (0, r.jsx)(k.y, {
                                    quest: z,
                                    onClose: () => {
                                        X(!1), td(C.uF.VIDEO_MODAL, T.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(o.animated.div, {
                    className: B.Jp,
                    style: { opacity: (0, o.to)([tB.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                (0, r.jsx)(
                    "div",
                    {
                        className: s()(B.yf, { [B.ZH]: ea === w.Q6.PLAYING, [B.v7]: ea === w.Q6.PAUSED }),
                        children:
                            ea === w.Q6.PLAYING
                                ? (0, r.jsx)(m.udU, { className: B.PK })
                                : (0, r.jsx)(m.E$n, { className: B.PK }),
                    },
                    ea,
                ),
                J &&
                    null != e2 &&
                    !tK &&
                    (0, r.jsx)(o.animated.div, {
                        className: B.o$,
                        ref: tG,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, o.to)([tB.to({ range: [0, 1], output: [0, -te[e3]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(m.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: B.qh,
                            children: e2.text,
                        }),
                    }),
                (0, r.jsxs)(o.animated.div, {
                    className: B.r8,
                    style: { height: (0, o.to)([tB.to({ range: [0, 1], output: [0, te[e3]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(R.A, {
                            percent: null != eM ? eM : eE,
                            animate: !0 !== eH.current && !eh,
                            interactionEnabled: ez && ek,
                            backgroundColor: tL ? void 0 : "rgba(0, 0, 0, 0.0)",
                            playerState: ea,
                            preloadedBuffers: tL ? e_ : void 0,
                            duration: eY.current?.duration ?? 1,
                            isFullyVisible: tL && ek,
                            maxSeekableTime: tL && ek ? e4 : void 0,
                            onClick: (e) => {
                                tk(e), ea === w.Q6.ENDED && tA(w.Q6.PLAYING);
                            },
                            onScrubBack: tj,
                            onScrubForward: tR,
                            "data-testid": "discord-web-video-player-timeline",
                        }),
                        (0, r.jsx)(o.animated.div, {
                            className: B.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, o.to)(
                                    [tB.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                paddingBottom: (0, o.to)(
                                    [tB.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, o.to)([tB.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: () => em(!0),
                            onBlur: () => em(!1),
                            children: (0, r.jsx)(D.A, {
                                videoRef: eY,
                                orientation: Y,
                                playerState: ea,
                                animSpring: tB,
                                visible: tL,
                                seekForwardEnabled: tW,
                                hideCaptionBtn: null == tz,
                                hideTranscriptBtn: tq,
                                size: e3,
                                handlePlaybackBtnClick: tw,
                                handleTranscriptBtnClick: () => {
                                    X(!q), td(C.uF.VIDEO_MODAL, q ? T.Cy.TRANSCRIPT_DISABLE : T.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    Z(!J),
                                        td(
                                            C.uF.VIDEO_MODAL,
                                            J ? T.Cy.CLOSED_CAPTIONING_DISABLE : T.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !ee;
                                    e8.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, g.qf)(eY.current?.parentNode, eY.current);
                                    e && null != t
                                        ? ((0, g.tl)(t), t.addEventListener(g.Wb, tI), tv(!0), e5(w.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(g.Wb, tI), tv(!1), (0, g.sP)(t), e5(w.oA.MD)),
                                        et(e);
                                },
                                handleSeekBackBtnClick: tj,
                                handleSeekForwardBtnClick: tR,
                                handleControlBarPendingInteraction: eR,
                                onVolumeChange: tg,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
