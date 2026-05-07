n.d(t, { A: () => en }), n(321073);
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(771253),
    u = n(873174),
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
    C = n(782134),
    g = n(113494),
    A = n(834730),
    h = n(964486),
    D = n(775602),
    x = n(607470),
    T = n(613373),
    I = n(544180),
    O = n(723702),
    b = n(475815),
    R = n(340124),
    L = n(507107),
    k = n(405670),
    N = n(859387),
    P = n(590202),
    y = n(851936),
    M = n(792620),
    V = n(753386),
    w = n(795068),
    Q = n(678968),
    j = n(576199),
    U = n(163961),
    B = n(758423),
    F = n(458817),
    Y = n(854356),
    K = n(979204),
    H = n(924838);
function G(e) {
    let {
            targetSec: t,
            isFullyVisible: n,
            percent: s,
            animate: a,
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
        { quest: v, sourceQuestContent: C, useNewProgressBarStyling: g } = l.useContext(w.a),
        { questConfig: A } = l.useContext(w.l),
        h = (0, K.A)({ targetSec: t, quest: v, sourceQuestContent: C, questConfig: A, clickable: !0 });
    return (0, r.jsx)(T.uI, {
        isFullyVisible: n,
        percent: s,
        animate: a,
        interactionEnabled: i,
        playerState: m,
        backgroundColor: o,
        preloadedBuffers: c,
        durationSec: d,
        maxSeekableTime: E,
        segmentBorderRadius: g ? 99 : 8,
        progressClassName: !u && g ? H.q : H.c,
        timelineHeightPx: g ? 4 : 2,
        hoverTimelineHeightPx: g ? void 0 : 4,
        initialTimelineHeightPx: g ? 4 : 2,
        onClick: f,
        onScrubBack: _,
        onScrubForward: S,
        indicatorConfig: h,
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
        s = (0, k.Kr)((e) => e.transcript);
    l.useEffect(() => {
        let e = (0, N.tW)(t, N.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == s ||
            s.questId !== t.id ||
            s.fetchStatus === k.Lx.NONE ||
            (s.fetchStatus === k.Lx.SUCCESS && e?.url !== s.url)) &&
            (0, R.qY)(t);
    }, [s, t]);
    let a = s?.questId === t.id && s?.fetchStatus === k.Lx.SUCCESS ? (s.text ?? "") : "",
        i = l.useMemo(
            () =>
                a
                    .split("\n")
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [a],
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
                            s?.fetchStatus === k.Lx.FETCHING
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
var Z = n(190107),
    J = n(838541),
    ee = n(375708);
let et = { tension: 250, friction: 5, clamp: !0 };
function en(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: s,
            autoFocus: K = !0,
            parentTransitionState: H,
            openedAtMs: $,
            orientation: q,
            videoUrlOverride: W,
        } = e,
        {
            sourceQuestContent: en,
            quest: er,
            videoSessionId: el,
            onClose: es,
            isFullscreenEnabled: ea,
            setIsFullscreenEnabled: ei,
            useNewProgressBarStyling: eu,
        } = l.useContext(w.a),
        eo = (0, k.Kr)((e) => e.transcriptEnabled),
        ec = (0, k.Kr)((e) => e.setTranscriptEnabled),
        ed = (0, k.Kr)((e) => e.captionEnabled),
        eE = (0, k.Kr)((e) => e.setCaptionEnabled),
        { focused: em, focusedChanged: ef } = (0, T.A7)(),
        { visible: e_, visibleChanged: eS, targetRef: ep } = (0, T.O7)(),
        [ev, eC] = l.useState(!0 === s ? U.Q6.PLAYING : U.Q6.PAUSED),
        [eg, eA] = l.useState(!1),
        [eh, eD] = l.useState(!1),
        ex = (0, M.Yh)(er),
        [eT, eI] = l.useState(ex.percentComplete),
        eO = l.useCallback((e) => {
            e$(null), eI(e);
        }, []),
        [eb, eR] = l.useState(!1),
        [eL, ek] = l.useState(!0),
        [eN, eP] = l.useState(!1),
        [ey, eM] = l.useState([]),
        [eV, ew] = l.useState(I.A.getEffectiveConnectionSpeed()),
        [eQ, ej] = l.useState(0),
        [eU, eB] = l.useState(0),
        [eF, eY] = l.useState(!1),
        [eK, eH] = l.useState(!1),
        [eG, e$] = l.useState(null),
        eq = l.useRef(!0),
        eW = l.useRef(null),
        ez = l.useRef(null),
        eX = (0, k.Kr)((e) => e.videoProgress[er.id] ?? k.yc, o.x),
        eZ = (0, k.Kr)((e) => e.setVideoProgress),
        eJ = (0, k.Kr)((e) => e.muted),
        e0 = (0, k.Kr)((e) => e.setMuted),
        e1 = (0, k.Kr)((e) => e.volume),
        e7 = (0, k.Kr)((e) => e.setVolume),
        e6 = (0, c.bG)([D.A], () => D.A.useReducedMotion),
        e4 = (0, l.useRef)(null),
        e3 = (0, l.useRef)(null),
        e5 = (0, l.useRef)(null),
        e8 = l.useRef(!0),
        e9 = er.userStatus?.completedAt != null,
        e2 = l.useMemo(() => er.config.features.includes(Z.Li.FULL_EPISODE_VIDEO_QUEST), [er.config.features]),
        te = l.useRef(!1),
        [tt, tn] = l.useState(null),
        [tr, tl] = l.useState(!1),
        [ts, ta] = l.useState(null),
        ti = Math.max(eX.maxTimestampSec, ex.progressSeconds),
        tu = e9 ? (e4.current?.duration ?? 0) : (0, V.vd)(ti, eX.duration),
        to = l.useMemo(() => (0, y.L)({ quest: er, location: Z.rE.VIDEO_MODAL }), [er]),
        tc = (0, E.g)(e9, eX, ex.progressSeconds),
        [td, tE] = l.useState(U.oA.MD),
        tm = { [U.oA.MD]: eu ? 56 : 50, [U.oA.LG]: eu ? 64 : 58 };
    (0, h.u5)(() => {
        e8.current &&
            ((e8.current = !1),
            ew(I.A.getEffectiveConnectionSpeed()),
            e9 && eX.timestampSec >= eX.duration && eZ(er.id, 0, eX.duration));
    });
    let { videoAsset: tf, videoAssetType: t_, hlsRef: tS, onFirstChunkLoaded: tp } = (0, B.A)(e4, eV, tc, W),
        {
            trackQuestVideoLoadingStarted: tv,
            trackQuestVideoLoadingEnded: tC,
            trackQuestVideoProgressed: tg,
            trackQuestVideoResumed: tA,
            trackQuestVideoPaused: th,
            trackQuestVideoFocusChange: tD,
            trackQuestContentClick: tx,
            trackQuestVideoBufferingStarted: tT,
            trackQuestVideoBufferingEnded: tI,
            trackQuestVideoSegmentWatched: tO,
            trackQuestVideoTimeToFirstFrame: tb,
            trackQuestVideoFullscreenChanged: tR,
            trackQuestVideoError: tL,
            trackQuestVideoVolumeChanged: tk,
        } = (0, F.A)({
            questId: er.id,
            isQuestCompleted: e9,
            videoRef: e4,
            hlsRef: tS,
            videoSessionId: el,
            videoAssetId: t_,
            sourceQuestContent: en,
            logger: to,
            isFullEpisodeVideoQuest: e2,
        });
    (0, Y.A)({ videoAssetUrl: tf?.url, videoRef: e4, hlsRef: tS, videoAssetType: t_ });
    let tN = l.useRef(null),
        tP = l.useCallback(() => {
            clearTimeout(tN.current),
                tl(!0),
                (tN.current = setTimeout(() => {
                    tl(!1);
                }, 1e3));
        }, []);
    l.useEffect(
        () => () => {
            null != tN.current && clearTimeout(tN.current);
        },
        [],
    );
    let ty = l.useCallback(() => e4.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: tM,
            handleLoadEnd: tV,
            handleFirstFrame: tw,
            handleSeek: tQ,
        } = (0, T.Yr)({ getCurrentVideoTime: ty, onAnalytics: tO, emitIntervalMs: T.KI, minSegmentDurationMs: T._4 }),
        tj = l.useRef(tM);
    l.useEffect(() => {
        tj.current(ev, null);
    }, []);
    let tU = l.useCallback(
        (e) => {
            if ((to.info(`[QV] | updatePlayerState | playerState: ${e}`), tM(e, null), eC(e), null != e4.current))
                switch (e) {
                    case U.Q6.PLAYING:
                        e4.current.paused && tA(tt), tn(null), e4.current.play();
                        break;
                    case U.Q6.PAUSED:
                        e4.current.pause(), (eq.current = !1);
                        break;
                    case U.Q6.ENDED:
                        ec(!1);
                }
        },
        [tM, tA, tt, ec, to],
    );
    l.useEffect(() => {
        th(tt);
    }, [tt, th]),
        l.useEffect(() => {
            ef && tD(em, ev);
        }, [em, ef, ev, tD]);
    let tB = l.useCallback(
        (e) => {
            e9 ||
                er.userStatus?.enrolledAt == null ||
                (to.info(`[QV] sendServerProgressUpdate: ${e}`), (0, V.zv)(er, e)),
                tg();
        },
        [e9, er, to, tg],
    );
    l.useEffect(() => {
        (H !== m.ip.HIDDEN &&
            H !== m.ip.EXITING &&
            H !== m.ip.EXITED &&
            (null == H || !eS || e_ || e9) &&
            (!ef || em || e9)) ||
            null == e4.current ||
            ev !== U.Q6.PLAYING ||
            (to.info(
                `[QV] | Pausing video | playerState: ${ev}, parentTransitionState: ${H}, visible: ${e_}, focused: ${em}, isQuestCompleted: ${e9}`,
            ),
            tU(U.Q6.PAUSED),
            e9 ? e2 && tn(L.Yg.ANOTHER_MODAL_OPENED) : tn(L.Yg.LOST_FOCUS));
    }, [H, em, ef, e_, eS, ev, e9, tU, tB, to, e2]),
        l.useEffect(() => {
            tt === L.Yg.ANOTHER_MODAL_OPENED &&
                H === m.ip.ENTERED &&
                ev === U.Q6.PAUSED &&
                e2 &&
                em &&
                (to.info("[QV] | Resuming full episode video after modal re-entered"), tU(U.Q6.PLAYING));
        }, [H, ev, to, tU, tt, e2, em]);
    let [tF, tY] = l.useState(!1),
        tK = l.useRef(null),
        tH = l.useRef(performance.now()),
        tG = l.useCallback(() => {
            null != tK.current && clearTimeout(tK.current),
                ev !== U.Q6.PLAYING ||
                    (tK.current = setTimeout(
                        () => {
                            ev === U.Q6.PLAYING && tY(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tH.current)),
                    ));
        }, [ev]),
        t$ = () => {
            tY(!1), (tH.current = performance.now()), tG();
        };
    l.useEffect(() => {
        if (ev !== U.Q6.PLAYING) {
            tY(!1), null != tK.current && clearTimeout(tK.current);
            return;
        }
        return (
            tG(),
            () => {
                null != tK.current && clearTimeout(tK.current);
            }
        );
    }, [ev, tG]);
    let tq = !tF && (eh || eg || ev === U.Q6.ENDED),
        tW = l.useCallback(() => {
            to.info("[QV] | handleFullScreenExit");
            let e = (0, b.qf)(e4.current?.parentNode, e4.current);
            null == e || (0, b._U)(e) || (e.removeEventListener(b.Wb, tW), ei(!1), tR(!1), tE(U.oA.MD));
        }, [ei, to, tR]),
        tz = () => {
            if (null == e4.current) return;
            let e = Math.max(e4.current.currentTime - 10, 0);
            to.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                t0(e),
                ev === U.Q6.ENDED && tU(U.Q6.PAUSED),
                tx(L.uF.VIDEO_MODAL, P.Cy.SEEK_BACKWARD);
        },
        tX = () => {
            if (null == e4.current || !ni) return;
            let e = Math.min(e4.current.currentTime + 10, tu);
            to.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                t0(e),
                ev !== U.Q6.ENDED && e >= e4.current.duration && tU(U.Q6.ENDED),
                tx(L.uF.VIDEO_MODAL, P.Cy.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = e4.current;
        return () => {
            let t = (0, b.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(b.Wb, tW);
        };
    }, [tW]),
        l.useEffect(() => {
            let e = (e) => e5.current?.(e);
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
        }, []);
    let tZ = l.useCallback(
            (e) => {
                e7(e), tk(e);
            },
            [e7, tk],
        ),
        tJ = l.useCallback(
            (e) => {
                e0(e);
            },
            [e0],
        ),
        t0 = l.useCallback(
            (e) => {
                null != e4.current &&
                    (to.info(`[QV] | seekTimeline | timeSec: ${e}`),
                    e$((e / (e4.current.duration ?? 1)) * 100),
                    tQ(),
                    eR(!0),
                    (e4.current.currentTime = e),
                    eZ(er.id, e, e4.current.duration));
            },
            [e4, eZ, er.id, tQ, to],
        );
    l.useEffect(() => {
        let e = e4.current;
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
    }, [e4, tS]);
    let t1 = l.useRef(!1),
        t7 = () => {
            if (null != e4.current)
                switch ((to.info(`[QV] | handlePlaybackBtnClick | playerState: ${ev}`), tP(), ev)) {
                    case U.Q6.ENDED:
                        t0(0), tU(U.Q6.PLAYING);
                        break;
                    case U.Q6.PLAYING:
                        tU(U.Q6.PAUSED), tn(L.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tU(U.Q6.PLAYING);
                }
        },
        t6 = (e) => {
            ta(e);
        },
        t4 = (e) => {
            ta((t) => (t?.id === e.id ? null : t));
        },
        t3 = l.useCallback(() => {
            if (
                null == e4.current ||
                (to.info(`[QV] | handleTracksLoaded: textTracks.length: ${e4.current.textTracks.length}`),
                0 === e4.current.textTracks.length)
            )
                return;
            let e = e4.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, T.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => t6(n)), (n.onexit = () => t4(n)));
                }
        }, [e4, to]);
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
    let t5 = l.useCallback(
            (e) => {
                to.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${e4.current?.currentTime}, videoAssetId: ${t_}, connectionSpeed: ${eV}`,
                ),
                    tL(e);
            },
            [eV, tL, e4, t_, to],
        ),
        t8 = l.useRef(!1);
    l.useEffect(() => {
        null != tf || t8.current || ((t8.current = !0), tL(U.SB.NO_VALID_SOURCE));
    }, [tf, tL, t8]);
    let t9 = (e) => {
        to.info(`[QV] | handleCanPlay: playerState: ${ev}`),
            null != e4.current &&
                ev === U.Q6.PLAYING &&
                (to.info("[QV] | handleCanPlay: did NOT early return"),
                eL && (to.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eL}`), ek(!1)),
                eN &&
                    (to.info(`[QV] | handleCanPlay: waitingForChunk: ${eN}`),
                    tI(null != ez.current ? performance.now() - ez.current : null),
                    eP(!1)),
                to.info("[QV] | handleCanPlay: updating player state to playing"),
                tU(U.Q6.PLAYING));
    };
    l.useEffect(() => {
        if (!eb) return;
        let e = setTimeout(() => {
            eR(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eb]);
    let [{ controlBarAnimSpring: t2 }, ne] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: et,
            onStart: () => {
                eH(!1);
            },
            onRest: (e) => {
                1 === e.value && eH(!0);
            },
        })),
        nt = (0, l.useRef)(null),
        [{ captionHeightSpring: nn }, nr] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: et }));
    l.useEffect(
        () => (
            nr({ captionHeightSpring: ed && null != ts ? (nt.current?.clientHeight ?? 0) : 0, immediate: e6 }),
            () => {
                nn.stop();
            }
        ),
        [ed, nr, e6, ts, nn],
    ),
        l.useEffect(
            () => (
                ne({ controlBarAnimSpring: tq || eF ? 1 : 0, immediate: e6 }),
                () => {
                    t2.stop();
                }
            ),
            [tq, ne, e6, eF, t2],
        );
    let nl = ev === U.Q6.ENDED,
        ns = l.useMemo(() => (0, N.tW)(er, N.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [er]),
        na = l.useMemo(() => (0, N.tW)(er, N.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [er]),
        ni = e9 || ti >= (e4.current?.currentTime ?? 0) + 1,
        nu = l.useMemo(() => null === (0, N.tW)(er, N.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [er]),
        no = eu ? 20 : 12,
        nc = 20 * !!eu,
        nd = e9 && eK;
    return (0, r.jsx)(_.D, {
        className: z.W6,
        "data-fullscreen": ea,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            eA(!0), tY(!1), (tH.current = performance.now()), null != tK.current && clearTimeout(tK.current);
        },
        onMouseLeave: () => {
            eA(!1), tY(!1);
        },
        onMouseMove: t$,
        onKeyDown: t$,
        children: (0, r.jsxs)("div", {
            className: a()(z.NS, { [z.DO]: "portrait" === q, [z.r7]: "landscape" === q }),
            style: { "--custom-footer-bottom": `${eu ? 4 : 2}px` },
            children: [
                nl && (0, r.jsx)(Q.A, { videoRef: e4, onTrackQuestContentClick: tx, orientation: q }),
                (0, r.jsxs)(x.A, {
                    ref: (e) => {
                        (e4.current = e), (ep.current = e);
                    },
                    autoPlay: s,
                    playsInline: !0,
                    mediaLayoutType: ea ? J.dG.STATIC : J.dG.RESPONSIVE,
                    className: a()({ [z.R]: nl, [z.IR]: !0 }),
                    controls: !1,
                    poster: ns?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        if (null == e4.current) return;
                        let r = e4.current.currentTime >= t && !te.current && e2;
                        if (e4.current.currentTime >= eQ || r) {
                            var l;
                            to.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${e4.current.currentTime}`,
                            ),
                                (l = e4.current.currentTime) >= t && (te.current = !0),
                                ej(l + Z.aA + Math.random() * Z.A6),
                                tB(l);
                        }
                        e4.current.currentTime >= eU &&
                            (eB(e4.current.currentTime + 1),
                            (0, R.Gn)(er.id, ex.taskType, e4.current.currentTime),
                            n(e4.current.currentTime)),
                            eZ(er.id, e4.current.currentTime, e4.current.duration),
                            eO((e4.current.currentTime / e4.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != e4.current &&
                            (tB(e4.current.duration + 1),
                            to.info(`[QV] | handleEnded: sending progress update: ${e4.current.duration + 1}`),
                            eZ(er.id, e4.current.duration, e4.current.duration)),
                            tU(U.Q6.ENDED),
                            eP(!1);
                    },
                    onLoadedData: (e) => {
                        to.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eL}`),
                            eL && (tC(null != eW.current ? performance.now() - eW.current : null), ek(!1), tp());
                    },
                    onLoadedMetadata: (e) => {
                        null != e4.current &&
                            (to.info(`[QV] | handleLoadedMetadata | videoAssetId: ${t_}`),
                            tV(null),
                            t_ !== N.fY.VIDEO_PLAYER_VIDEO_HLS && t0(tc),
                            eJ ? (e4.current.volume = 0) : (e4.current.volume = e1));
                    },
                    onLoadStart: () => {
                        (eW.current = performance.now()),
                            (t1.current = !1),
                            tv(eV),
                            to.info(`[QV] | handleLoadStart | loadingStartTime: ${eW.current}`);
                    },
                    onPlaying: () => {
                        if (!eq.current) return;
                        let e = performance.now() - $;
                        to.info(`[QV] | \u{23F0} Video FCP: ${e}ms`), tb(e), (eq.current = !1);
                    },
                    onWaiting: (e) => {
                        (ez.current = performance.now()),
                            to.info(`[QV] | handleWaitingForData: bufferingStartTime: ${ez.current}`),
                            tT(),
                            eP(!0);
                    },
                    onProgress: (e) => {
                        if (null == e4.current) return;
                        to.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${e4.current.buffered.length}`);
                        let t = [];
                        for (let e = 0; e < e4.current.buffered.length; e++) {
                            let n = e4.current.buffered.start(e),
                                r = e4.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / e4.current.duration, size: (r - n) / e4.current.duration });
                        }
                        eM(t);
                    },
                    onCanPlay: t9,
                    onCanPlayThrough: t9,
                    onSeeked: () => {
                        to.info("[QV] | handleSeeked"), t1.current || ((t1.current = !0), tw(0));
                    },
                    onAbort: () => t5(U.SB.ABORT),
                    onError: () => t5(U.SB.ERROR),
                    onEmptied: () => t5(U.SB.EMPTIED),
                    onStalled: () => t5(U.SB.STALLED),
                    onClick: () => {
                        to.info("[QV] | handleVideoClick"), t7();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != na &&
                            (0, r.jsx)("track", {
                                ref: e3,
                                src: na.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != tf &&
                            t_ !== N.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != tf.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => t5(U.SB.SOURCE_ERROR),
                                src: tf.url,
                                type: tf.mimetype,
                            }),
                    ],
                }),
                (eL || eN) &&
                    ev === U.Q6.PLAYING &&
                    null != tf &&
                    (0, r.jsx)("span", {
                        className: z.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(S.y, { type: S.y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(T.DQ, {
                    message: ((e) => {
                        let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                        return t
                            ? n === U.Q6.PAUSED && r === d.KB.FOCUS
                                ? ee.intl.string(ee.t.w6PeBF)
                                : null
                            : (0, O.isWeb)()
                              ? ee.intl.string(ee.t["E1du/q"])
                              : ee.intl.string(ee.t["rStN/7"]);
                    })({
                        hasVideoAsset: null != tf,
                        playerState: ev,
                        pauseReason: (function (e) {
                            switch (e) {
                                case L.Yg.PAUSE_BUTTON:
                                    return d.KB.USER;
                                case L.Yg.LOST_FOCUS:
                                    return d.KB.FOCUS;
                                case L.Yg.MODAL_CLOSED:
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
                                className: a()(z.xr, { [z.MZ]: "portrait" === q }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, u.to)([t2, nn], (e, t) => `${e * tm[td] + t}px`) },
                                children: (0, r.jsx)(X, {
                                    quest: er,
                                    onClose: () => {
                                        ec(!1), tx(L.uF.VIDEO_MODAL, P.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(u.animated.div, {
                    className: z.Jp,
                    style: { opacity: (0, u.to)([t2.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                tr &&
                    (0, r.jsx)(
                        "div",
                        {
                            className: a()(z.yf, { [z.ZH]: ev === U.Q6.PLAYING, [z.v7]: ev === U.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ev === U.Q6.PLAYING
                                    ? (0, r.jsx)(C.u, { className: z.PK })
                                    : (0, r.jsx)(g.E, { className: z.PK }),
                        },
                        ev,
                    ),
                ed &&
                    null != ts &&
                    !nl &&
                    (0, r.jsx)(u.animated.div, {
                        className: z.o$,
                        ref: nt,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, u.to)([t2.to({ range: [0, 1], output: [-nc, -tm[td]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(A.E, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: z.qh,
                            children: ts.text,
                        }),
                    }),
                (0, r.jsxs)(u.animated.div, {
                    className: z.r8,
                    style: { height: (0, u.to)([t2.to({ range: [0, 1], output: [0, tm[td]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(u.animated.div, {
                            style: {
                                transform: (0, u.to)(
                                    [t2.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${e * nc}px)`,
                                ),
                            },
                            children: (0, r.jsx)(G, {
                                percent: null != eG ? eG : eT,
                                animate: !0 !== e8.current && !eb,
                                interactionEnabled: nd,
                                playerState: ev,
                                preloadedBuffers: tq ? ey : void 0,
                                durationSec: e4.current?.duration ?? 1,
                                isFullyVisible: tq && eK,
                                maxSeekableTime: tq && eK ? tu : void 0,
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
                                    [t2.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * no}px`,
                                ),
                                paddingBottom: (0, u.to)(
                                    [t2.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, u.to)([t2.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: () => eD(!0),
                            onBlur: () => eD(!1),
                            children: (0, r.jsx)(T.zZ, {
                                videoRef: e4,
                                playerState: ev,
                                animSpring: t2,
                                visible: tq,
                                seekForwardEnabled: ni,
                                hideCaptionBtn: null == na,
                                hideTranscriptBtn: nu,
                                hideSkipButtons: "portrait" === q,
                                size: td,
                                autoFocus: K,
                                keyDownHandlerRef: e5,
                                volume: e1,
                                muted: eJ,
                                transcriptEnabled: eo,
                                captionEnabled: ed,
                                fullScreenEnabled: ea,
                                handlePlaybackBtnClick: t7,
                                handleTranscriptBtnClick: () => {
                                    ec(!eo),
                                        tx(L.uF.VIDEO_MODAL, eo ? P.Cy.TRANSCRIPT_DISABLE : P.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    eE(!ed),
                                        tx(
                                            L.uF.VIDEO_MODAL,
                                            ed ? P.Cy.CLOSED_CAPTIONING_DISABLE : P.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !ea;
                                    to.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, b.qf)(e4.current?.parentNode, e4.current);
                                    e && null != t
                                        ? ((0, b.tl)(t), t.addEventListener(b.Wb, tW), tR(!0), tE(U.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(b.Wb, tW), tR(!1), (0, b.sP)(t), tE(U.oA.MD)),
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
