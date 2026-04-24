n.d(t, { A: () => en }), n(321073);
var r = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    i = n(771253),
    u = n(419354),
    o = n(942381),
    c = n(17928),
    d = n(876230),
    E = n(645577),
    m = n(231723),
    f = n(717421),
    _ = n(939249),
    S = n(289873),
    p = n(408278),
    v = n(789645),
    g = n(782134),
    h = n(113494),
    C = n(834730),
    A = n(964486),
    x = n(775602),
    D = n(607470),
    I = n(611051),
    T = n(544180),
    b = n(723702),
    O = n(475815),
    R = n(829219),
    k = n(507107),
    L = n(405670),
    y = n(859387),
    N = n(590202),
    M = n(851936),
    P = n(792620),
    w = n(753386),
    V = n(795068),
    Q = n(678968),
    j = n(576199),
    U = n(163961),
    B = n(758423),
    F = n(458817),
    Y = n(873856),
    H = n(979204),
    K = n(924838);
function G(e) {
    let {
            targetSec: t,
            isFullyVisible: n,
            percent: a,
            animate: l,
            interactionEnabled: i,
            isQuestCompleted: u,
            backgroundColor: o,
            preloadedBuffers: c,
            durationSec: d,
            maxSeekableTime: E,
            playerState: m,
            onClick: f,
            onScrubBack: _,
            onScrubForward: S,
            "data-testid": p,
        } = e,
        { quest: v, sourceQuestContent: g, useNewProgressBarStyling: h } = s.useContext(V.a),
        { questConfig: C } = s.useContext(V.l),
        A = (0, H.A)({ targetSec: t, quest: v, sourceQuestContent: g, questConfig: C, clickable: !0 });
    return (0, r.jsx)(I.uI, {
        isFullyVisible: n,
        percent: a,
        animate: l,
        interactionEnabled: i,
        playerState: m,
        backgroundColor: o,
        preloadedBuffers: c,
        durationSec: d,
        maxSeekableTime: E,
        segmentBorderRadius: h ? 99 : 8,
        progressClassName: !u && h ? K.q : K.c,
        timelineHeightPx: h ? 4 : 2,
        hoverTimelineHeightPx: h ? void 0 : 4,
        initialTimelineHeightPx: h ? 4 : 2,
        onClick: f,
        onScrubBack: _,
        onScrubForward: S,
        indicatorConfig: A,
        onIndicatorSeek: f,
        "data-testid": p,
    });
}
var $ = n(534514),
    q = n(187322),
    W = n(364522),
    z = n(834926);
function X(e) {
    let { quest: t, onClose: n } = e,
        a = (0, L.Kr)((e) => e.transcript);
    s.useEffect(() => {
        let e = (0, y.tW)(t, y.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == a ||
            a.questId !== t.id ||
            a.fetchStatus === L.Lx.NONE ||
            (a.fetchStatus === L.Lx.SUCCESS && e?.url !== a.url)) &&
            (0, R.qY)(t);
    }, [a, t]);
    let l = a?.questId === t.id && a?.fetchStatus === L.Lx.SUCCESS ? (a.text ?? "") : "",
        i = s.useMemo(
            () =>
                l
                    .split("\n")
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [l],
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
                        children: (0, r.jsx)(v.P, { color: "currentColor" }),
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
                            a?.fetchStatus === L.Lx.FETCHING
                                ? (0, r.jsx)("div", {
                                      className: z.Cw,
                                      children: (0, r.jsx)(S.y, { type: S.y.Type.WANDERING_CUBES }),
                                  })
                                : (0, r.jsx)($.D, {
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
var Z = n(654487),
    J = n(838541),
    ee = n(985018);
let et = { tension: 250, friction: 5, clamp: !0 };
function en(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: a,
            autoFocus: H = !0,
            parentTransitionState: K,
            openedAtMs: $,
            orientation: q,
            videoUrlOverride: W,
        } = e,
        {
            sourceQuestContent: en,
            quest: er,
            videoSessionId: es,
            onClose: ea,
            isFullscreenEnabled: el,
            setIsFullscreenEnabled: ei,
            useNewProgressBarStyling: eu,
        } = s.useContext(V.a),
        eo = (0, L.Kr)((e) => e.transcriptEnabled),
        ec = (0, L.Kr)((e) => e.setTranscriptEnabled),
        ed = (0, L.Kr)((e) => e.captionEnabled),
        eE = (0, L.Kr)((e) => e.setCaptionEnabled),
        { focused: em, focusedChanged: ef } = (0, I.A7)(),
        { visible: e_, visibleChanged: eS, targetRef: ep } = (0, I.O7)(),
        [ev, eg] = s.useState(!0 === a ? U.Q6.PLAYING : U.Q6.PAUSED),
        [eh, eC] = s.useState(!1),
        [eA, ex] = s.useState(!1),
        eD = (0, P.Yh)(er),
        [eI, eT] = s.useState(eD.percentComplete),
        eb = s.useCallback((e) => {
            e$(null), eT(e);
        }, []),
        [eO, eR] = s.useState(!1),
        [ek, eL] = s.useState(!0),
        [ey, eN] = s.useState(!1),
        [eM, eP] = s.useState([]),
        [ew, eV] = s.useState(T.A.getEffectiveConnectionSpeed()),
        [eQ, ej] = s.useState(0),
        [eU, eB] = s.useState(0),
        [eF, eY] = s.useState(!1),
        [eH, eK] = s.useState(!1),
        [eG, e$] = s.useState(null),
        eq = s.useRef(!0),
        eW = s.useRef(null),
        ez = s.useRef(null),
        eX = (0, L.Kr)((e) => e.videoProgress[er.id] ?? L.yc, o.x),
        eZ = (0, L.Kr)((e) => e.setVideoProgress),
        eJ = (0, L.Kr)((e) => e.muted),
        e0 = (0, L.Kr)((e) => e.setMuted),
        e1 = (0, L.Kr)((e) => e.volume),
        e6 = (0, L.Kr)((e) => e.setVolume),
        e7 = (0, c.bG)([x.A], () => x.A.useReducedMotion),
        e5 = (0, s.useRef)(null),
        e8 = (0, s.useRef)(null),
        e4 = (0, s.useRef)(null),
        e2 = s.useRef(!0),
        e9 = er.userStatus?.completedAt != null,
        e3 = s.useMemo(() => er.config.features.includes(Z.Li.FULL_EPISODE_VIDEO_QUEST), [er.config.features]),
        te = s.useRef(!1),
        [tt, tn] = s.useState(null),
        [tr, ts] = s.useState(!1),
        [ta, tl] = s.useState(null),
        ti = Math.max(eX.maxTimestampSec, eD.progressSeconds),
        tu = e9 ? (e5.current?.duration ?? 0) : (0, w.vd)(ti, eX.duration),
        to = s.useMemo(() => (0, M.L)({ quest: er, location: Z.rE.VIDEO_MODAL }), [er]),
        tc = (0, E.g)(e9, eX, eD.progressSeconds),
        [td, tE] = s.useState(U.oA.MD),
        tm = { [U.oA.MD]: eu ? 56 : 50, [U.oA.LG]: eu ? 64 : 58 };
    (0, A.u5)(() => {
        e2.current &&
            ((e2.current = !1),
            eV(T.A.getEffectiveConnectionSpeed()),
            e9 && eX.timestampSec >= eX.duration && eZ(er.id, 0, eX.duration));
    });
    let { videoAsset: tf, videoAssetType: t_, hlsRef: tS, onFirstChunkLoaded: tp } = (0, B.A)(e5, ew, tc, W),
        {
            trackQuestVideoLoadingStarted: tv,
            trackQuestVideoLoadingEnded: tg,
            trackQuestVideoProgressed: th,
            trackQuestVideoResumed: tC,
            trackQuestVideoPaused: tA,
            trackQuestVideoFocusChange: tx,
            trackQuestContentClick: tD,
            trackQuestVideoBufferingStarted: tI,
            trackQuestVideoBufferingEnded: tT,
            trackQuestVideoSegmentWatched: tb,
            trackQuestVideoTimeToFirstFrame: tO,
            trackQuestVideoFullscreenChanged: tR,
            trackQuestVideoError: tk,
            trackQuestVideoVolumeChanged: tL,
        } = (0, F.A)({
            questId: er.id,
            isQuestCompleted: e9,
            videoRef: e5,
            hlsRef: tS,
            videoSessionId: es,
            videoAssetId: t_,
            sourceQuestContent: en,
            logger: to,
            isFullEpisodeVideoQuest: e3,
        });
    (0, Y.A)({ videoAssetUrl: tf?.url, videoRef: e5, hlsRef: tS, videoAssetType: t_ });
    let ty = s.useRef(null),
        tN = s.useCallback(() => {
            clearTimeout(ty.current),
                ts(!0),
                (ty.current = setTimeout(() => {
                    ts(!1);
                }, 1e3));
        }, []);
    s.useEffect(
        () => () => {
            null != ty.current && clearTimeout(ty.current);
        },
        [],
    );
    let tM = s.useCallback(() => e5.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: tP,
            handleLoadEnd: tw,
            handleFirstFrame: tV,
            handleSeek: tQ,
        } = (0, I.Yr)({ getCurrentVideoTime: tM, onAnalytics: tb, emitIntervalMs: I.KI, minSegmentDurationMs: I._4 }),
        tj = s.useRef(tP);
    s.useEffect(() => {
        tj.current(ev, null);
    }, []);
    let tU = s.useCallback(
        (e) => {
            if ((to.info(`[QV] | updatePlayerState | playerState: ${e}`), tP(e, null), eg(e), null != e5.current))
                switch (e) {
                    case U.Q6.PLAYING:
                        e5.current.paused && tC(tt), tn(null), e5.current.play();
                        break;
                    case U.Q6.PAUSED:
                        e5.current.pause(), (eq.current = !1);
                        break;
                    case U.Q6.ENDED:
                        ec(!1);
                }
        },
        [tP, tC, tt, ec, to],
    );
    s.useEffect(() => {
        tA(tt);
    }, [tt, tA]),
        s.useEffect(() => {
            ef && tx(em, ev);
        }, [em, ef, ev, tx]);
    let tB = s.useCallback(
        (e) => {
            e9 ||
                er.userStatus?.enrolledAt == null ||
                (to.info(`[QV] sendServerProgressUpdate: ${e}`), (0, w.zv)(er, e)),
                th();
        },
        [e9, er, to, th],
    );
    s.useEffect(() => {
        (K !== m.ip.HIDDEN &&
            K !== m.ip.EXITING &&
            K !== m.ip.EXITED &&
            (null == K || !eS || e_ || e9) &&
            (!ef || em || e9)) ||
            null == e5.current ||
            ev !== U.Q6.PLAYING ||
            (to.info(
                `[QV] | Pausing video | playerState: ${ev}, parentTransitionState: ${K}, visible: ${e_}, focused: ${em}, isQuestCompleted: ${e9}`,
            ),
            tU(U.Q6.PAUSED),
            e9 ? e3 && tn(k.Yg.ANOTHER_MODAL_OPENED) : tn(k.Yg.LOST_FOCUS));
    }, [K, em, ef, e_, eS, ev, e9, tU, tB, to, e3]),
        s.useEffect(() => {
            tt === k.Yg.ANOTHER_MODAL_OPENED &&
                K === m.ip.ENTERED &&
                ev === U.Q6.PAUSED &&
                e3 &&
                em &&
                (to.info("[QV] | Resuming full episode video after modal re-entered"), tU(U.Q6.PLAYING));
        }, [K, ev, to, tU, tt, e3, em]);
    let [tF, tY] = s.useState(!1),
        tH = s.useRef(null),
        tK = s.useRef(performance.now()),
        tG = s.useCallback(() => {
            null != tH.current && clearTimeout(tH.current),
                ev !== U.Q6.PLAYING ||
                    (tH.current = setTimeout(
                        () => {
                            ev === U.Q6.PLAYING && tY(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tK.current)),
                    ));
        }, [ev]),
        t$ = () => {
            tY(!1), (tK.current = performance.now()), tG();
        };
    s.useEffect(() => {
        if (ev !== U.Q6.PLAYING) {
            tY(!1), null != tH.current && clearTimeout(tH.current);
            return;
        }
        return (
            tG(),
            () => {
                null != tH.current && clearTimeout(tH.current);
            }
        );
    }, [ev, tG]);
    let tq = !tF && (eA || eh || ev === U.Q6.ENDED),
        tW = s.useCallback(() => {
            to.info("[QV] | handleFullScreenExit");
            let e = (0, O.qf)(e5.current?.parentNode, e5.current);
            null == e || (0, O._U)(e) || (e.removeEventListener(O.Wb, tW), ei(!1), tR(!1), tE(U.oA.MD));
        }, [ei, to, tR]),
        tz = () => {
            if (null == e5.current) return;
            let e = Math.max(e5.current.currentTime - 10, 0);
            to.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                t0(e),
                ev === U.Q6.ENDED && tU(U.Q6.PAUSED),
                tD(k.uF.VIDEO_MODAL, N.Cy.SEEK_BACKWARD);
        },
        tX = () => {
            if (null == e5.current || !ni) return;
            let e = Math.min(e5.current.currentTime + 10, tu);
            to.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                t0(e),
                ev !== U.Q6.ENDED && e >= e5.current.duration && tU(U.Q6.ENDED),
                tD(k.uF.VIDEO_MODAL, N.Cy.SEEK_FORWARD);
        };
    s.useEffect(() => {
        let e = e5.current;
        return () => {
            let t = (0, O.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(O.Wb, tW);
        };
    }, [tW]),
        s.useEffect(() => {
            let e = (e) => e4.current?.(e);
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
        }, []);
    let tZ = s.useCallback(
            (e) => {
                e6(e), tL(e);
            },
            [e6, tL],
        ),
        tJ = s.useCallback(
            (e) => {
                e0(e);
            },
            [e0],
        ),
        t0 = s.useCallback(
            (e) => {
                null != e5.current &&
                    (to.info(`[QV] | seekTimeline | timeSec: ${e}`),
                    e$((e / (e5.current.duration ?? 1)) * 100),
                    tQ(),
                    eR(!0),
                    (e5.current.currentTime = e),
                    eZ(er.id, e, e5.current.duration));
            },
            [e5, eZ, er.id, tQ, to],
        );
    s.useEffect(() => {
        let e = e5.current;
        if (null == e) return;
        let t = () => {
            null != tS.current &&
                tS.current.mainForwardBufferInfo?.len === 0 &&
                tS.current.trigger(i.sV.BUFFER_FLUSHING, {
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
    }, [e5, tS]);
    let t1 = s.useRef(!1),
        t6 = () => {
            if (null != e5.current)
                switch ((to.info(`[QV] | handlePlaybackBtnClick | playerState: ${ev}`), tN(), ev)) {
                    case U.Q6.ENDED:
                        t0(0), tU(U.Q6.PLAYING);
                        break;
                    case U.Q6.PLAYING:
                        tU(U.Q6.PAUSED), tn(k.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tU(U.Q6.PLAYING);
                }
        },
        t7 = (e) => {
            tl(e);
        },
        t5 = (e) => {
            tl((t) => (t?.id === e.id ? null : t));
        },
        t8 = s.useCallback(() => {
            if (
                null == e5.current ||
                (to.info(`[QV] | handleTracksLoaded: textTracks.length: ${e5.current.textTracks.length}`),
                0 === e5.current.textTracks.length)
            )
                return;
            let e = e5.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, I.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => t7(n)), (n.onexit = () => t5(n)));
                }
        }, [e5, to]);
    s.useEffect(() => {
        if (null == e8.current) return;
        let e = e8.current;
        return (
            e.addEventListener("load", t8),
            () => {
                null != e && e.removeEventListener("load", t8);
            }
        );
    }, [e8, t8]);
    let t4 = s.useCallback(
            (e) => {
                to.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${e5.current?.currentTime}, videoAssetId: ${t_}, connectionSpeed: ${ew}`,
                ),
                    tk(e);
            },
            [ew, tk, e5, t_, to],
        ),
        t2 = s.useRef(!1);
    s.useEffect(() => {
        null != tf || t2.current || ((t2.current = !0), tk(U.SB.NO_VALID_SOURCE));
    }, [tf, tk, t2]);
    let t9 = (e) => {
        to.info(`[QV] | handleCanPlay: playerState: ${ev}`),
            null != e5.current &&
                ev === U.Q6.PLAYING &&
                (to.info("[QV] | handleCanPlay: did NOT early return"),
                ek && (to.info(`[QV] | handleCanPlay: loadingFirstChunk: ${ek}`), eL(!1)),
                ey &&
                    (to.info(`[QV] | handleCanPlay: waitingForChunk: ${ey}`),
                    tT(null != ez.current ? performance.now() - ez.current : null),
                    eN(!1)),
                to.info("[QV] | handleCanPlay: updating player state to playing"),
                tU(U.Q6.PLAYING));
    };
    s.useEffect(() => {
        if (!eO) return;
        let e = setTimeout(() => {
            eR(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eO]);
    let [{ controlBarAnimSpring: t3 }, ne] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: et,
            onStart: () => {
                eK(!1);
            },
            onRest: (e) => {
                1 === e.value && eK(!0);
            },
        })),
        nt = (0, s.useRef)(null),
        [{ captionHeightSpring: nn }, nr] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: et }));
    s.useEffect(
        () => (
            nr({ captionHeightSpring: ed && null != ta ? (nt.current?.clientHeight ?? 0) : 0, immediate: e7 }),
            () => {
                nn.stop();
            }
        ),
        [ed, nr, e7, ta, nn],
    ),
        s.useEffect(
            () => (
                ne({ controlBarAnimSpring: tq || eF ? 1 : 0, immediate: e7 }),
                () => {
                    t3.stop();
                }
            ),
            [tq, ne, e7, eF, t3],
        );
    let ns = ev === U.Q6.ENDED,
        na = s.useMemo(() => (0, y.tW)(er, y.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [er]),
        nl = s.useMemo(() => (0, y.tW)(er, y.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [er]),
        ni = e9 || ti >= (e5.current?.currentTime ?? 0) + 1,
        nu = s.useMemo(() => null === (0, y.tW)(er, y.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [er]),
        no = eu ? 20 : 12,
        nc = 20 * !!eu,
        nd = e9 && eH;
    return (0, r.jsx)(_.D, {
        className: z.W6,
        "data-fullscreen": el,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            eC(!0), tY(!1), (tK.current = performance.now()), null != tH.current && clearTimeout(tH.current);
        },
        onMouseLeave: () => {
            eC(!1), tY(!1);
        },
        onMouseMove: t$,
        onKeyDown: t$,
        children: (0, r.jsxs)("div", {
            className: l()(z.NS, { [z.DO]: "portrait" === q, [z.r7]: "landscape" === q }),
            style: { "--custom-footer-bottom": `${eu ? 4 : 2}px` },
            children: [
                ns && (0, r.jsx)(Q.A, { videoRef: e5, onTrackQuestContentClick: tD, orientation: q }),
                (0, r.jsxs)(D.A, {
                    ref: (e) => {
                        (e5.current = e), (ep.current = e);
                    },
                    autoPlay: a,
                    playsInline: !0,
                    mediaLayoutType: el ? J.dG.STATIC : J.dG.RESPONSIVE,
                    className: l()({ [z.R]: ns, [z.IR]: !0 }),
                    controls: !1,
                    poster: na?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        if (null == e5.current) return;
                        let r = e5.current.currentTime >= t && !te.current && e3;
                        if (e5.current.currentTime >= eQ || r) {
                            var s;
                            to.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${e5.current.currentTime}`,
                            ),
                                (s = e5.current.currentTime) >= t && (te.current = !0),
                                ej(s + Z.aA + Math.random() * Z.A6),
                                tB(s);
                        }
                        e5.current.currentTime >= eU &&
                            (eB(e5.current.currentTime + 1),
                            (0, R.Gn)(er.id, eD.taskType, e5.current.currentTime),
                            n(e5.current.currentTime)),
                            eZ(er.id, e5.current.currentTime, e5.current.duration),
                            eb((e5.current.currentTime / e5.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != e5.current &&
                            (tB(e5.current.duration + 1),
                            to.info(`[QV] | handleEnded: sending progress update: ${e5.current.duration + 1}`),
                            eZ(er.id, e5.current.duration, e5.current.duration)),
                            tU(U.Q6.ENDED),
                            eN(!1);
                    },
                    onLoadedData: (e) => {
                        to.info(`[QV] | handleLoadedData: loadingFirstChunk: ${ek}`),
                            ek && (tg(null != eW.current ? performance.now() - eW.current : null), eL(!1), tp());
                    },
                    onLoadedMetadata: (e) => {
                        null != e5.current &&
                            (to.info(`[QV] | handleLoadedMetadata | videoAssetId: ${t_}`),
                            tw(null),
                            t_ !== y.fY.VIDEO_PLAYER_VIDEO_HLS && t0(tc),
                            eJ ? (e5.current.volume = 0) : (e5.current.volume = e1));
                    },
                    onLoadStart: () => {
                        (eW.current = performance.now()),
                            (t1.current = !1),
                            tv(ew),
                            to.info(`[QV] | handleLoadStart | loadingStartTime: ${eW.current}`);
                    },
                    onPlaying: () => {
                        if (!eq.current) return;
                        let e = performance.now() - $;
                        to.info(`[QV] | ⏰ Video FCP: ${e}ms`), tO(e), (eq.current = !1);
                    },
                    onWaiting: (e) => {
                        (ez.current = performance.now()),
                            to.info(`[QV] | handleWaitingForData: bufferingStartTime: ${ez.current}`),
                            tI(),
                            eN(!0);
                    },
                    onProgress: (e) => {
                        if (null == e5.current) return;
                        to.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${e5.current.buffered.length}`);
                        let t = [];
                        for (let e = 0; e < e5.current.buffered.length; e++) {
                            let n = e5.current.buffered.start(e),
                                r = e5.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / e5.current.duration, size: (r - n) / e5.current.duration });
                        }
                        eP(t);
                    },
                    onCanPlay: t9,
                    onCanPlayThrough: t9,
                    onSeeked: () => {
                        to.info("[QV] | handleSeeked"), t1.current || ((t1.current = !0), tV(0));
                    },
                    onAbort: () => t4(U.SB.ABORT),
                    onError: () => t4(U.SB.ERROR),
                    onEmptied: () => t4(U.SB.EMPTIED),
                    onStalled: () => t4(U.SB.STALLED),
                    onClick: () => {
                        to.info("[QV] | handleVideoClick"), t6();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != nl &&
                            (0, r.jsx)("track", {
                                ref: e8,
                                src: nl.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != tf &&
                            t_ !== y.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != tf.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => t4(U.SB.SOURCE_ERROR),
                                src: tf.url,
                                type: tf.mimetype,
                            }),
                    ],
                }),
                (ek || ey) &&
                    ev === U.Q6.PLAYING &&
                    null != tf &&
                    (0, r.jsx)("span", {
                        className: z.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(S.y, { type: S.y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(I.DQ, {
                    message: ((e) => {
                        let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                        return t
                            ? n === U.Q6.PAUSED && r === d.KB.FOCUS
                                ? ee.intl.string(ee.t.w6PeBF)
                                : null
                            : (0, b.isWeb)()
                              ? ee.intl.string(ee.t["E1du/q"])
                              : ee.intl.string(ee.t["rStN/7"]);
                    })({
                        hasVideoAsset: null != tf,
                        playerState: ev,
                        pauseReason: (function (e) {
                            switch (e) {
                                case k.Yg.PAUSE_BUTTON:
                                    return d.KB.USER;
                                case k.Yg.LOST_FOCUS:
                                    return d.KB.FOCUS;
                                case k.Yg.MODAL_CLOSED:
                                    return d.KB.VISIBILITY;
                                default:
                                    return null;
                            }
                        })(tt),
                    }),
                    showOverlay: null == tf,
                }),
                eu
                    ? (0, r.jsxs)("div", {
                          className: z.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          children: [
                              (0, r.jsx)(j.A, {}),
                              (0, r.jsx)(p.K, {
                                  variant: "overlay-secondary",
                                  icon: v.P,
                                  "aria-label": ee.intl.string(ee.t.cpT0Cq),
                                  onClick: ea,
                              }),
                          ],
                      })
                    : (0, r.jsx)(u.animated.div, {
                          className: z.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          style: {
                              opacity: (0, u.to)([t3.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                              visibility: (0, u.to)([t3.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.1 ? "hidden" : "visible",
                              ),
                              pointerEvents: (0, u.to)([t3.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.3 ? "none" : "auto",
                              ),
                          },
                          children: (0, r.jsx)(j.A, {}),
                      }),
                eo &&
                    ev !== U.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(_.D, {
                                onClick: () => {
                                    ev === U.Q6.PAUSED && tU(U.Q6.PLAYING), ec(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: z.BG }),
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: l()(z.xr, { [z.MZ]: "portrait" === q }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, u.to)([t3, nn], (e, t) => `${e * tm[td] + t}px`) },
                                children: (0, r.jsx)(X, {
                                    quest: er,
                                    onClose: () => {
                                        ec(!1), tD(k.uF.VIDEO_MODAL, N.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(u.animated.div, {
                    className: z.Jp,
                    style: { opacity: (0, u.to)([t3.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                tr &&
                    (0, r.jsx)(
                        "div",
                        {
                            className: l()(z.yf, { [z.ZH]: ev === U.Q6.PLAYING, [z.v7]: ev === U.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ev === U.Q6.PLAYING
                                    ? (0, r.jsx)(g.u, { className: z.PK })
                                    : (0, r.jsx)(h.E, { className: z.PK }),
                        },
                        ev,
                    ),
                ed &&
                    null != ta &&
                    !ns &&
                    (0, r.jsx)(u.animated.div, {
                        className: z.o$,
                        ref: nt,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, u.to)([t3.to({ range: [0, 1], output: [-nc, -tm[td]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(C.E, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: z.qh,
                            children: ta.text,
                        }),
                    }),
                (0, r.jsxs)(u.animated.div, {
                    className: z.r8,
                    style: { height: (0, u.to)([t3.to({ range: [0, 1], output: [0, tm[td]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(u.animated.div, {
                            style: {
                                transform: (0, u.to)(
                                    [t3.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${e * nc}px)`,
                                ),
                            },
                            children: (0, r.jsx)(G, {
                                percent: null != eG ? eG : eI,
                                animate: !0 !== e2.current && !eO,
                                interactionEnabled: nd,
                                playerState: ev,
                                preloadedBuffers: tq ? eM : void 0,
                                durationSec: e5.current?.duration ?? 1,
                                isFullyVisible: tq && eH,
                                maxSeekableTime: tq && eH ? tu : void 0,
                                onClick: (e) => {
                                    nd && (t0(e), ev === U.Q6.ENDED && tU(U.Q6.PLAYING));
                                },
                                onScrubBack: tz,
                                onScrubForward: tX,
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
                                    [t3.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * no}px`,
                                ),
                                paddingBottom: (0, u.to)(
                                    [t3.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, u.to)([t3.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: () => ex(!0),
                            onBlur: () => ex(!1),
                            children: (0, r.jsx)(I.zZ, {
                                videoRef: e5,
                                playerState: ev,
                                animSpring: t3,
                                visible: tq,
                                seekForwardEnabled: ni,
                                hideCaptionBtn: null == nl,
                                hideTranscriptBtn: nu,
                                hideSkipButtons: "portrait" === q,
                                size: td,
                                autoFocus: H,
                                keyDownHandlerRef: e4,
                                volume: e1,
                                muted: eJ,
                                transcriptEnabled: eo,
                                captionEnabled: ed,
                                fullScreenEnabled: el,
                                handlePlaybackBtnClick: t6,
                                handleTranscriptBtnClick: () => {
                                    ec(!eo),
                                        tD(k.uF.VIDEO_MODAL, eo ? N.Cy.TRANSCRIPT_DISABLE : N.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    eE(!ed),
                                        tD(
                                            k.uF.VIDEO_MODAL,
                                            ed ? N.Cy.CLOSED_CAPTIONING_DISABLE : N.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !el;
                                    to.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, O.qf)(e5.current?.parentNode, e5.current);
                                    e && null != t
                                        ? ((0, O.tl)(t), t.addEventListener(O.Wb, tW), tR(!0), tE(U.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(O.Wb, tW), tR(!1), (0, O.sP)(t), tE(U.oA.MD)),
                                        ei(e);
                                },
                                handleSeekBackBtnClick: tz,
                                handleSeekForwardBtnClick: tX,
                                handleControlBarPendingInteraction: eY,
                                onVolumeChange: tZ,
                                onMutedChange: tJ,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
