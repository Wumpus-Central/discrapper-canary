n.d(t, {
    A: () => B,
}),
    n(896048),
    n(321073);
var r = n(627968),
    l = n(64700),
    o = n(503698),
    i = n.n(o),
    s = n(108531),
    a = n(942381),
    c = n(311907),
    u = n(397927),
    d = n(964486),
    f = n(775602),
    m = n(607470),
    p = n(544180),
    v = n(475815),
    E = n(829219),
    g = n(216456),
    h = n(341915),
    b = n(405670),
    y = n(943849),
    O = n(991484),
    S = n(579473),
    _ = n(792620),
    C = n(753386),
    x = n(880080),
    A = n(818049),
    j = n(717415),
    T = n(661417),
    D = n(882291),
    w = n(224284),
    N = n(261331),
    P = n(457775),
    I = n(154395),
    L = n(602871),
    R = n(246465),
    k = n(660171),
    M = n(853738),
    V = n(654487),
    Q = n(838541),
    U = n(438655);
let F = {
    tension: 250,
    friction: 5,
    clamp: !0,
};

function B(e) {
    var t, n, o, B, K, G, H;
    let {
            videoTask: Y,
            onOptimisticProgressUpdate: W,
            autoplay: q,
            parentTransitionState: z,
            performanceClockStartTime: Z,
            orientation: X,
        } = e,
        { sourceQuestContent: J, quest: $, videoSessionId: ee } = l.useContext(j.VideoQuestModalContext),
        et = (0, b.Kr)((e) => e.transcriptEnabled),
        en = (0, b.Kr)((e) => e.setTranscriptEnabled),
        er = (0, b.Kr)((e) => e.captionEnabled),
        el = (0, b.Kr)((e) => e.setCaptionEnabled),
        eo = (0, b.Kr)((e) => e.fullScreenEnabled),
        ei = (0, b.Kr)((e) => e.setFullScreenEnabled),
        { focused: es, focusedChanged: ea } = (0, I.A7)(),
        { visible: ec, visibleChanged: eu, targetRef: ed } = (0, I.O7)(),
        [ef, em] = l.useState(!0 === q ? N.Q6.PLAYING : N.Q6.PAUSED),
        [ep, ev] = l.useState(!1),
        [eE, eg] = l.useState(!1),
        eh = (0, _.Yh)($),
        [eb, ey] = l.useState(eh.percentComplete),
        eO = l.useCallback((e) => {
            eF(null), ey(e);
        }, []),
        [eS, e_] = l.useState(!1),
        [eC, ex] = l.useState(!0),
        [eA, ej] = l.useState(!1),
        [eT, eD] = l.useState([]),
        [ew, eN] = l.useState(p.A.getEffectiveConnectionSpeed()),
        [eP, eI] = l.useState(0),
        [eL, eR] = l.useState(0),
        [ek, eM] = l.useState(!1),
        [eV, eQ] = l.useState(!1),
        [eU, eF] = l.useState(null),
        eB = l.useRef(!0),
        eK = l.useRef(null),
        eG = l.useRef(null),
        eH = (0, b.Kr)((e) => {
            var t;
            return null != (t = e.videoProgress[$.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10,
                  };
        }, a.x),
        eY = (0, b.Kr)((e) => e.setVideoProgress),
        eW = (0, b.Kr)((e) => e.muted),
        eq = (0, b.Kr)((e) => e.volume),
        ez = (0, c.bG)([f.A], () => f.A.useReducedMotion),
        eZ = (0, l.useRef)(null),
        eX = (0, l.useRef)(null),
        eJ = l.useRef(!0),
        e$ = (null == (B = $.userStatus) ? void 0 : B.completedAt) != null,
        e0 = l.useMemo(() => $.config.features.includes(V.Li.FULL_EPISODE_VIDEO_QUEST), [$.config.features]),
        e1 = l.useRef(!1),
        [e6, e2] = l.useState(null),
        [e4, e7] = l.useState(!1),
        [e8, e9] = l.useState(!1),
        [e3, e5] = l.useState(null),
        te = e$
            ? null != (t = null == (K = eZ.current) ? void 0 : K.duration)
                ? t
                : 0
            : Math.max(eH.maxTimestampSec, eh.progressSeconds),
        tt = l.useMemo(
            () =>
                (0, y.L)({
                    quest: $,
                    location: V.rE.VIDEO_MODAL,
                }),
            [$],
        ),
        tn = (0, P.gx)(e$, eH, eh),
        [tr, tl] = l.useState(N.oA.MD),
        to = {
            [N.oA.MD]: 50,
            [N.oA.LG]: 58,
        };
    (0, d.u5)(() => {
        eJ.current &&
            ((eJ.current = !1),
            eN(p.A.getEffectiveConnectionSpeed()),
            e$ && eH.timestampSec >= eH.duration && eY($.id, 0, eH.duration));
    });
    let { videoAsset: ti, videoAssetType: ts, hlsRef: ta, onFirstChunkLoaded: tc } = (0, R.A)(eZ, ew, tn),
        {
            trackQuestVideoLoadingStarted: tu,
            trackQuestVideoLoadingEnded: td,
            trackQuestVideoProgressed: tf,
            trackQuestVideoResumed: tm,
            trackQuestVideoPaused: tp,
            trackQuestVideoFocusChange: tv,
            trackQuestContentClick: tE,
            trackQuestVideoBufferingStarted: tg,
            trackQuestVideoBufferingEnded: th,
            trackWatchTimeAnalytics: tb,
            trackQuestVideoTimeToFirstFrame: ty,
            trackQuestVideoFullscreenChanged: tO,
            trackQuestVideoError: tS,
            trackQuestVideoVolumeChanged: t_,
        } = (0, k.A)({
            questId: $.id,
            isQuestCompleted: e$,
            videoRef: eZ,
            hlsRef: ta,
            videoSessionId: ee,
            videoAssetId: ts,
            sourceQuestContent: J,
            logger: tt,
            isFullEpisodeVideoQuest: e0,
        });
    (0, M.A)({
        videoAssetUrl: null == ti ? void 0 : ti.url,
        videoRef: eZ,
        hlsRef: ta,
        videoAssetType: ts,
    });
    let tC = l.useCallback(() => {
            var e, t;
            return null != (e = null == (t = eZ.current) ? void 0 : t.currentTime) ? e : null;
        }, []),
        { forceSendCurrentSegment: tx } = (0, O.A)({
            getCurrentVideoTime: tC,
            isPlaying: ef === N.Q6.PLAYING,
            isMetadataLoaded: e4,
            isInitialSeekComplete: e8,
            onAnalytics: tb,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
        }),
        tA = l.useCallback(
            (e) => {
                if ((tt.info("[QV] | updatePlayerState | playerState: ".concat(e)), em(e), null != eZ.current))
                    switch (e) {
                        case N.Q6.PLAYING:
                            eZ.current.paused && tm(e6), e2(null), eZ.current.play();
                            break;
                        case N.Q6.PAUSED:
                            eZ.current.paused || tx(), eZ.current.pause(), (eB.current = !1);
                            break;
                        case N.Q6.ENDED:
                            tx(), en(!1);
                    }
            },
            [tm, e6, tx, en, tt],
        );
    l.useEffect(() => {
        tp(e6);
    }, [e6, tp]),
        l.useEffect(() => {
            ea && tv(es, ef);
        }, [es, ea, ef, tv]);
    let tj = l.useCallback(
        (e) => {
            var t;
            e$ ||
                (null == (t = $.userStatus) ? void 0 : t.enrolledAt) == null ||
                (tt.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, C.zv)($, e)),
                tf();
        },
        [e$, $, tt, tf],
    );
    l.useEffect(() => {
        (z !== u.ip4.HIDDEN &&
            z !== u.ip4.EXITING &&
            z !== u.ip4.EXITED &&
            (null == z || !eu || ec || e$) &&
            (!ea || es || e$)) ||
            null == eZ.current ||
            ef !== N.Q6.PLAYING ||
            (tt.info(
                "[QV] | Pausing video | playerState: "
                    .concat(ef, ", parentTransitionState: ")
                    .concat(z, ", visible: ")
                    .concat(ec, ", focused: ")
                    .concat(es, ", isQuestCompleted: ")
                    .concat(e$),
            ),
            tA(N.Q6.PAUSED),
            e$ || e2(h.Yg.LOST_FOCUS));
    }, [z, es, ea, ec, eu, ef, e$, tA, tj, tt]);
    let [tT, tD] = l.useState(!1),
        tw = l.useRef(null),
        tN = l.useRef(performance.now()),
        tP = l.useCallback(() => {
            null != tw.current && clearTimeout(tw.current),
                ef !== N.Q6.PLAYING ||
                    (tw.current = setTimeout(
                        () => {
                            ef === N.Q6.PLAYING && tD(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tN.current)),
                    ));
        }, [ef]),
        tI = () => {
            tD(!1), (tN.current = performance.now()), tP();
        };
    l.useEffect(() => {
        if (ef !== N.Q6.PLAYING) {
            tD(!1), null != tw.current && clearTimeout(tw.current);
            return;
        }
        return (
            tP(),
            () => {
                null != tw.current && clearTimeout(tw.current);
            }
        );
    }, [ef, tP]);
    let tL = !tT && (eE || ep || ef === N.Q6.ENDED),
        tR = l.useCallback(() => {
            var e;
            tt.info("[QV] | handleFullScreenExit");
            let t = (0, v.qf)(null == (e = eZ.current) ? void 0 : e.parentNode, eZ.current);
            null == t || (0, v._U)(t) || (t.removeEventListener(v.Wb, tR), ei(!1), tO(!1), tl(N.oA.MD));
        }, [ei, tt, tO]),
        tk = () => {
            if (null == eZ.current) return;
            let e = Math.max(eZ.current.currentTime - 10, 0);
            tt.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)),
                tV(e),
                ef === N.Q6.ENDED && tA(N.Q6.PAUSED),
                tE(h.uF.VIDEO_MODAL, g.Cy.SEEK_BACKWARD);
        },
        tM = () => {
            if (null == eZ.current || !t0) return;
            let e = Math.min(eZ.current.currentTime + 10, te);
            tt.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)),
                tV(e),
                ef !== N.Q6.ENDED && e >= eZ.current.duration && tA(N.Q6.ENDED),
                tE(h.uF.VIDEO_MODAL, g.Cy.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = eZ.current;
        return () => {
            let t = (0, v.qf)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(v.Wb, tR);
        };
    }, [tR]);
    let tV = l.useCallback(
            (e) => {
                var t;
                null != eZ.current &&
                    (tt.info("[QV] | seekTimeline | timeSec: ".concat(e)),
                    eF((e / (null != (t = eZ.current.duration) ? t : 1)) * 100),
                    tx(),
                    e_(!0),
                    e9(!1),
                    (eZ.current.currentTime = e),
                    eY($.id, e, eZ.current.duration));
            },
            [eZ, eY, $.id, tx, tt],
        ),
        tQ = () => {
            if (null != eZ.current)
                switch ((tt.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(ef)), ef)) {
                    case N.Q6.ENDED:
                        tV(0), tA(N.Q6.PLAYING);
                        break;
                    case N.Q6.PLAYING:
                        tA(N.Q6.PAUSED), e2(h.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tA(N.Q6.PLAYING);
                }
        },
        tU = (e) => {
            e5(e);
        },
        tF = (e) => {
            e5((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tB = l.useCallback(() => {
            if (
                null == eZ.current ||
                (tt.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(eZ.current.textTracks.length)),
                0 === eZ.current.textTracks.length)
            )
                return;
            let e = eZ.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, P.Ce)(n) && ((n.id = "cue-".concat(t)), (n.onenter = () => tU(n)), (n.onexit = () => tF(n)));
                }
        }, [eZ, tt]);
    l.useEffect(() => {
        if (null == eX.current) return;
        let e = eX.current;
        return (
            e.addEventListener("load", tB),
            () => {
                null != e && e.removeEventListener("load", tB);
            }
        );
    }, [eX, tB]);
    let tK = l.useCallback(
            (e) => {
                var t;
                tt.info(
                    "[QV] | logVideoError: errorType: "
                        .concat(e, ", videoProgress: ")
                        .concat(null == (t = eZ.current) ? void 0 : t.currentTime, ", videoAssetId: ")
                        .concat(ts, ", connectionSpeed: ")
                        .concat(ew),
                ),
                    tS(e);
            },
            [ew, tS, eZ, ts, tt],
        ),
        tG = l.useRef(!1);
    l.useEffect(() => {
        null != ti || tG.current || ((tG.current = !0), tS(N.SB.NO_VALID_SOURCE));
    }, [ti, tS, tG]);
    let tH = (e) => {
        tt.info("[QV] | handleCanPlay: playerState: ".concat(ef)),
            null != eZ.current &&
                ef === N.Q6.PLAYING &&
                (tt.info("[QV] | handleCanPlay: did NOT early return"),
                eC && (tt.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eC)), ex(!1)),
                eA &&
                    (tt.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eA)),
                    th(null != eG.current ? performance.now() - eG.current : null),
                    ej(!1)),
                tt.info("[QV] | handleCanPlay: updating player state to playing"),
                tA(N.Q6.PLAYING));
    };
    l.useEffect(() => {
        if (!eS) return;
        let e = setTimeout(() => {
            e_(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eS]);
    let [{ controlBarAnimSpring: tY }, tW] = (0, u.zhh)(() => ({
            from: {
                controlBarAnimSpring: 0,
            },
            config: F,
            onStart: () => {
                eQ(!1);
            },
            onRest: (e) => {
                1 === e.value && eQ(!0);
            },
        })),
        tq = (0, l.useRef)(null),
        [{ captionHeightSpring: tz }, tZ] = (0, u.zhh)(() => ({
            from: {
                captionHeightSpring: 0,
            },
            config: F,
        }));
    l.useEffect(() => {
        var e, t;
        return (
            tZ({
                captionHeightSpring:
                    er && null != e3 && null != (e = null == (t = tq.current) ? void 0 : t.clientHeight) ? e : 0,
                immediate: ez,
            }),
            () => {
                tz.stop();
            }
        );
    }, [er, tZ, ez, e3, tz]),
        l.useEffect(
            () => (
                tW({
                    controlBarAnimSpring: tL || ek ? 1 : 0,
                    immediate: ez,
                }),
                () => {
                    tY.stop();
                }
            ),
            [tL, tW, ez, ek, tY],
        );
    let tX = ef === N.Q6.ENDED,
        tJ = l.useMemo(() => (0, S.tW)($, S.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [$]),
        t$ = l.useMemo(() => (0, S.tW)($, S.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [$]),
        t0 = e$ || eH.maxTimestampSec >= (null != (n = null == (G = eZ.current) ? void 0 : G.currentTime) ? n : 0) + 1,
        t1 = l.useMemo(() => null === (0, S.tW)($, S.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [$]);
    return (0, r.jsx)(u.DUT, {
        className: U.W6,
        "data-fullscreen": eo,
        tabIndex: -1,
        onMouseEnter: () => {
            ev(!0), tD(!1), (tN.current = performance.now()), null != tw.current && clearTimeout(tw.current);
        },
        onMouseLeave: () => {
            ev(!1), tD(!1);
        },
        onMouseMove: tI,
        onKeyDown: tI,
        children: (0, r.jsxs)("div", {
            className: i()(U.NS, {
                [U.DO]: "portrait" === X,
                [U.r7]: "landscape" === X,
            }),
            children: [
                tX &&
                    (0, r.jsx)(A.A, {
                        videoRef: eZ,
                        onExitFullScreen: tR,
                        onTrackQuestVideoFullscreenChanged: tO,
                        onTrackQuestContentClick: tE,
                        orientation: X,
                    }),
                (0, r.jsxs)(m.A, {
                    ref: (e) => {
                        (eZ.current = e), (ed.current = e);
                    },
                    autoPlay: q,
                    playsInline: !0,
                    mediaLayoutType: eo ? Q.dG.STATIC : Q.dG.RESPONSIVE,
                    className: i()({
                        [U.R]: tX,
                        [U.IR]: !0,
                    }),
                    controls: !1,
                    poster: null == tJ ? void 0 : tJ.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        if (null == eZ.current) return;
                        let t = eZ.current.currentTime >= Y.target && !e1.current && e0;
                        if (eZ.current.currentTime >= eP || t) {
                            var n;
                            tt.info(
                                "[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(
                                    eZ.current.currentTime,
                                ),
                            ),
                                (n = eZ.current.currentTime) >= Y.target && (e1.current = !0),
                                eI(n + 6 + 2 * Math.random()),
                                tj(n);
                        }
                        eZ.current.currentTime >= eL &&
                            (eR(eZ.current.currentTime + 1),
                            (0, E.Gn)($.id, eh.taskType, eZ.current.currentTime),
                            W(eZ.current.currentTime)),
                            eY($.id, eZ.current.currentTime, eZ.current.duration),
                            eO((eZ.current.currentTime / eZ.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != eZ.current &&
                            (tj(eZ.current.duration + 1),
                            tt.info("[QV] | handleEnded: sending progress update: ".concat(eZ.current.duration + 1)),
                            eY($.id, eZ.current.duration, eZ.current.duration)),
                            tA(N.Q6.ENDED),
                            ej(!1);
                    },
                    onLoadedData: (e) => {
                        tt.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eC)),
                            eC && (td(null != eK.current ? performance.now() - eK.current : null), ex(!1), tc());
                    },
                    onLoadedMetadata: (e) => {
                        null != eZ.current &&
                            (tt.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(ts)),
                            e7(!0),
                            ts !== S.fY.VIDEO_PLAYER_VIDEO_HLS && tV(tn),
                            eW ? (eZ.current.volume = 0) : (eZ.current.volume = eq));
                    },
                    onLoadStart: () => {
                        (eK.current = performance.now()),
                            tu(ew),
                            tt.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eK.current));
                    },
                    onPlaying: () => {
                        if (!eB.current) return;
                        let e = performance.now() - Z;
                        tt.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), ty(e), (eB.current = !1);
                    },
                    onWaiting: (e) => {
                        (eG.current = performance.now()),
                            tt.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eG.current)),
                            tg(),
                            ej(!0);
                    },
                    onProgress: (e) => {
                        if (null == eZ.current) return;
                        tt.info(
                            "[QV] | handleLoadingHasProgressed: buffered.length: ".concat(eZ.current.buffered.length),
                        );
                        let t = [];
                        for (let e = 0; e < eZ.current.buffered.length; e++) {
                            let n = eZ.current.buffered.start(e),
                                r = eZ.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / eZ.current.duration,
                                    size: (r - n) / eZ.current.duration,
                                });
                        }
                        eD(t);
                    },
                    onCanPlay: tH,
                    onCanPlayThrough: tH,
                    onSeeked: () => {
                        tt.info("[QV] | handleSeeked"), e9(!0);
                    },
                    onAbort: () => tK(N.SB.ABORT),
                    onError: () => tK(N.SB.ERROR),
                    onEmptied: () => tK(N.SB.EMPTIED),
                    onStalled: () => tK(N.SB.STALLED),
                    onClick: () => {
                        tt.info("[QV] | handleVideoClick"), tQ();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != t$ &&
                            (0, r.jsx)("track", {
                                ref: eX,
                                src: t$.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != ti &&
                            ts !== S.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != ti.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tK(N.SB.SOURCE_ERROR),
                                src: ti.url,
                                type: ti.mimetype,
                            }),
                    ],
                }),
                (eC || eA) &&
                    ef === N.Q6.PLAYING &&
                    null != ti &&
                    (0, r.jsx)(u.y$y, {
                        type: u.y$y.Type.WANDERING_CUBES,
                        className: U.S,
                    }),
                (0, r.jsx)(L.A, {
                    hasVideoAsset: null != ti,
                    playerState: ef,
                    pauseReason: e6,
                }),
                (0, r.jsx)(s.animated.div, {
                    className: U.R4,
                    style: {
                        opacity: (0, s.to)(
                            [
                                tY.to({
                                    range: [0, 1],
                                    output: [0, 1],
                                }),
                            ],
                            (e) => "".concat(e),
                        ),
                    },
                    children: (0, r.jsx)(T.A, {}),
                }),
                et &&
                    ef !== N.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(u.DUT, {
                                onClick: () => {
                                    ef === N.Q6.PAUSED && tA(N.Q6.PLAYING), en(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", {
                                    className: U.BG,
                                }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: i()(U.xr, {
                                    [U.MZ]: "portrait" === X,
                                }),
                                style: {
                                    marginBottom: (0, s.to)([tY, tz], (e, t) => "".concat(e * to[tr] + t, "px")),
                                },
                                children: (0, r.jsx)(w.y, {
                                    quest: $,
                                    onClose: () => {
                                        en(!1), tE(h.uF.VIDEO_MODAL, g.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(s.animated.div, {
                    className: U.Jp,
                    style: {
                        opacity: (0, s.to)(
                            [
                                tY.to({
                                    range: [0, 1],
                                    output: [0, 1],
                                }),
                            ],
                            (e) => "".concat(e),
                        ),
                    },
                }),
                (0, r.jsx)(
                    "div",
                    {
                        className: i()(U.yf, {
                            [U.ZH]: ef === N.Q6.PLAYING,
                            [U.v7]: ef === N.Q6.PAUSED,
                        }),
                        children:
                            ef === N.Q6.PLAYING
                                ? (0, r.jsx)(u.udU, {
                                      className: U.PK,
                                  })
                                : (0, r.jsx)(u.E$n, {
                                      className: U.PK,
                                  }),
                    },
                    ef,
                ),
                er &&
                    null != e3 &&
                    !tX &&
                    (0, r.jsx)(s.animated.div, {
                        className: U.o$,
                        ref: tq,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    tY.to({
                                        range: [0, 1],
                                        output: [0, -to[tr]],
                                    }),
                                ],
                                (e) => "".concat(e, "px"),
                            ),
                        },
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: U.qh,
                            children: e3.text,
                        }),
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: U.r8,
                    style: {
                        height: (0, s.to)(
                            [
                                tY.to({
                                    range: [0, 1],
                                    output: [0, to[tr]],
                                }),
                            ],
                            (e) => "".concat(e, "px"),
                        ),
                    },
                    children: [
                        (0, r.jsx)(D.A, {
                            percent: null != eU ? eU : eb,
                            animate: !0 !== eJ.current && !eS,
                            interactionEnabled: e$ && eV,
                            backgroundColor: tL ? void 0 : "rgba(0, 0, 0, 0.0)",
                            playerState: ef,
                            preloadedBuffers: tL ? eT : void 0,
                            duration: null != (o = null == (H = eZ.current) ? void 0 : H.duration) ? o : 1,
                            isFullyVisible: tL && eV,
                            maxSeekableTime: tL && eV ? te : void 0,
                            onClick: (e) => {
                                tV(e), ef === N.Q6.ENDED && tA(N.Q6.PLAYING);
                            },
                            onScrubBack: tk,
                            onScrubForward: tM,
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: U.uN,
                            style: {
                                paddingTop: (0, s.to)(
                                    [
                                        tY.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                paddingBottom: (0, s.to)(
                                    [
                                        tY.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                pointerEvents: (0, s.to)(
                                    [
                                        tY.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => (e < 0.3 ? "none" : "auto"),
                                ),
                            },
                            onFocus: () => eg(!0),
                            onBlur: () => eg(!1),
                            children: (0, r.jsx)(x.A, {
                                videoRef: eZ,
                                videoTask: Y,
                                playerState: ef,
                                animSpring: tY,
                                visible: tL,
                                seekForwardEnabled: t0,
                                hideCaptionBtn: null == t$,
                                hideTranscriptBtn: t1,
                                size: tr,
                                handlePlaybackBtnClick: tQ,
                                handleTranscriptBtnClick: () => {
                                    en(!et),
                                        tE(h.uF.VIDEO_MODAL, et ? g.Cy.TRANSCRIPT_DISABLE : g.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    el(!er),
                                        tE(
                                            h.uF.VIDEO_MODAL,
                                            er ? g.Cy.CLOSED_CAPTIONING_DISABLE : g.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !eo;
                                    tt.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
                                    let n = (0, v.qf)(null == (e = eZ.current) ? void 0 : e.parentNode, eZ.current);
                                    t && null != n
                                        ? ((0, v.tl)(n), n.addEventListener(v.Wb, tR), tO(!0), tl(N.oA.LG))
                                        : t ||
                                          null == n ||
                                          (n.removeEventListener(v.Wb, tR), tO(!1), (0, v.sP)(n), tl(N.oA.MD)),
                                        ei(t);
                                },
                                handleSeekBackBtnClick: tk,
                                handleSeekForwardBtnClick: tM,
                                handleControlBarPendingInteraction: eM,
                                onVolumeChange: t_,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
