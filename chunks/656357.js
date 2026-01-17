n.d(t, { Z: () => q }), n(388685), n(539854);
var r = n(54381),
    o = n(473749),
    l = n(120356),
    i = n.n(l),
    a = n(81239),
    s = n(782425),
    c = n(442837),
    u = n(481060),
    d = n(493773),
    m = n(607070),
    f = n(70097),
    p = n(866960),
    v = n(228488),
    g = n(22095),
    E = n(617136),
    h = n(49436),
    C = n(184299),
    b = n(535584),
    S = n(550235),
    O = n(475595),
    _ = n(254579),
    x = n(542347),
    y = n(922826),
    j = n(104800),
    P = n(215113),
    D = n(449788),
    T = n(508067),
    I = n(890193),
    N = n(325916),
    w = n(939389),
    k = n(267322),
    A = n(767067),
    M = n(70417),
    R = n(934703),
    L = n(981786),
    V = n(324805),
    Z = n(217702),
    F = n(209668);
let B = {
    tension: 250,
    friction: 5,
    clamp: !0,
};
function q(e) {
    var t, n, l, q, U, Y, Q;
    let {
            videoTask: H,
            onOptimisticProgressUpdate: G,
            autoplay: z,
            parentTransitionState: W,
            performanceClockStartTime: K,
            orientation: X,
        } = e,
        { sourceQuestContent: $, quest: J, videoSessionId: ee } = o.useContext(P.VideoQuestModalContext),
        et = (0, C.km)((e) => e.transcriptEnabled),
        en = (0, C.km)((e) => e.setTranscriptEnabled),
        er = (0, C.km)((e) => e.captionEnabled),
        eo = (0, C.km)((e) => e.setCaptionEnabled),
        el = (0, C.km)((e) => e.fullScreenEnabled),
        ei = (0, C.km)((e) => e.setFullScreenEnabled),
        { focused: ea, focusedChanged: es } = (0, k.xU)(),
        { visible: ec, visibleChanged: eu, targetRef: ed } = (0, k.Yy)(),
        [em, ef] = o.useState(!0 === z ? N.rq.PLAYING : N.rq.PAUSED),
        [ep, ev] = o.useState(!1),
        [eg, eE] = o.useState(!1),
        eh = (0, _.il)(J),
        [eC, eb] = o.useState(eh.percentComplete),
        eS = o.useCallback((e) => {
            eB(null), eb(e);
        }, []),
        [eO, e_] = o.useState(!1),
        [ex, ey] = o.useState(!0),
        [ej, eP] = o.useState(!1),
        [eD, eT] = o.useState([]),
        [eI, eN] = o.useState(p.Z.getEffectiveConnectionSpeed()),
        [ew, ek] = o.useState(0),
        [eA, eM] = o.useState(0),
        [eR, eL] = o.useState(!1),
        [eV, eZ] = o.useState(!1),
        [eF, eB] = o.useState(null),
        eq = o.useRef(!0),
        eU = o.useRef(null),
        eY = o.useRef(null),
        eQ = (0, C.km)((e) => {
            var t;
            return null != (t = e.videoProgress[J.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10,
                  };
        }, s.X),
        eH = (0, C.km)((e) => e.setVideoProgress),
        eG = (0, C.km)((e) => e.muted),
        ez = (0, C.km)((e) => e.volume),
        eW = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        eK = (0, o.useRef)(null),
        eX = (0, o.useRef)(null),
        e$ = o.useRef(!0),
        eJ = (null == (t = J.userStatus) ? void 0 : t.completedAt) != null,
        e0 = o.useMemo(() => J.config.features.includes(V.S7.FULL_EPISODE_VIDEO_QUEST), [J.config.features]),
        e1 = o.useRef(!1),
        [e2, e4] = o.useState(null),
        [e8, e6] = o.useState(!1),
        [e3, e9] = o.useState(!1),
        [e7, e5] = o.useState(null),
        te = eJ
            ? null != (U = null == (n = eK.current) ? void 0 : n.duration)
                ? U
                : 0
            : Math.max(eQ.maxTimestampSec, eh.progressSeconds),
        tt = o.useMemo(
            () =>
                (0, b.T)({
                    quest: J,
                    location: V.dr.VIDEO_MODAL,
                }),
            [J],
        ),
        tn = (0, w.$R)(eJ, eQ, eh),
        [tr, to] = o.useState(N._H.MD),
        tl = {
            [N._H.MD]: 50,
            [N._H.LG]: 58,
        };
    (0, d.Ng)(() => {
        e$.current &&
            ((e$.current = !1),
            eN(p.Z.getEffectiveConnectionSpeed()),
            eJ && eQ.timestampSec >= eQ.duration && eH(J.id, 0, eQ.duration));
    });
    let { videoAsset: ti, videoAssetType: ta, hlsRef: ts, onFirstChunkLoaded: tc } = (0, M.Z)(eK, eI, tn),
        {
            trackQuestVideoLoadingStarted: tu,
            trackQuestVideoLoadingEnded: td,
            trackQuestVideoProgressed: tm,
            trackQuestVideoResumed: tf,
            trackQuestVideoPaused: tp,
            trackQuestVideoFocusChange: tv,
            trackQuestContentClick: tg,
            trackQuestVideoBufferingStarted: tE,
            trackQuestVideoBufferingEnded: th,
            trackWatchTimeAnalytics: tC,
            trackQuestVideoTimeToFirstFrame: tb,
            trackQuestVideoFullscreenChanged: tS,
            trackQuestVideoError: tO,
            trackQuestVideoVolumeChanged: t_,
        } = (0, R.Z)({
            questId: J.id,
            isQuestCompleted: eJ,
            videoRef: eK,
            hlsRef: ts,
            videoSessionId: ee,
            videoAssetId: ta,
            sourceQuestContent: $,
            logger: tt,
            isFullEpisodeVideoQuest: e0,
        });
    (0, L.Z)({
        videoAssetUrl: null == ti ? void 0 : ti.url,
        videoRef: eK,
        hlsRef: ts,
        videoAssetType: ta,
    });
    let tx = o.useCallback(() => {
            var e, t;
            return null != (t = null == (e = eK.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: ty } = (0, S.Z)({
            getCurrentVideoTime: tx,
            isPlaying: em === N.rq.PLAYING,
            isMetadataLoaded: e8,
            isInitialSeekComplete: e3,
            onAnalytics: tC,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000,
        }),
        tj = o.useCallback(
            (e) => {
                if ((tt.info("[QV] | updatePlayerState | playerState: ".concat(e)), ef(e), null != eK.current))
                    switch (e) {
                        case N.rq.PLAYING:
                            eK.current.paused && tf(e2), e4(null), eK.current.play();
                            break;
                        case N.rq.PAUSED:
                            eK.current.paused || ty(), eK.current.pause(), (eq.current = !1);
                            break;
                        case N.rq.ENDED:
                            ty(), en(!1);
                    }
            },
            [tf, e2, ty, en, tt],
        );
    o.useEffect(() => {
        tp(e2);
    }, [e2, tp]),
        o.useEffect(() => {
            es && tv(ea, em);
        }, [ea, es, em, tv]);
    let tP = o.useCallback(
        (e) => {
            var t;
            eJ ||
                (null == (t = J.userStatus) ? void 0 : t.enrolledAt) == null ||
                (tt.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, x.FI)(J, e)),
                tm();
        },
        [eJ, J, tt, tm],
    );
    o.useEffect(() => {
        (W !== u.Dvm.HIDDEN &&
            W !== u.Dvm.EXITING &&
            W !== u.Dvm.EXITED &&
            (null == W || !eu || ec || eJ) &&
            (!es || ea || eJ)) ||
            null == eK.current ||
            em !== N.rq.PLAYING ||
            (tt.info(
                "[QV] | Pausing video | playerState: "
                    .concat(em, ", parentTransitionState: ")
                    .concat(W, ", visible: ")
                    .concat(ec, ", focused: ")
                    .concat(ea, ", isQuestCompleted: ")
                    .concat(eJ),
            ),
            tj(N.rq.PAUSED),
            eJ || e4(h.yE.LOST_FOCUS));
    }, [W, ea, es, ec, eu, em, eJ, tj, tP, tt]);
    let [tD, tT] = o.useState(!1),
        tI = o.useRef(null),
        tN = o.useRef(performance.now()),
        tw = o.useCallback(() => {
            null != tI.current && clearTimeout(tI.current),
                em === N.rq.PLAYING &&
                    (tI.current = setTimeout(
                        () => {
                            em === N.rq.PLAYING && tT(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tN.current)),
                    ));
        }, [em]),
        tk = () => {
            tT(!1), (tN.current = performance.now()), tw();
        };
    o.useEffect(() => {
        if (em !== N.rq.PLAYING) {
            tT(!1), null != tI.current && clearTimeout(tI.current);
            return;
        }
        return (
            tw(),
            () => {
                null != tI.current && clearTimeout(tI.current);
            }
        );
    }, [em, tw]);
    let tA = !tD && (eg || ep || em === N.rq.ENDED),
        tM = o.useCallback(() => {
            var e;
            tt.info("[QV] | handleFullScreenExit");
            let t = (0, v.fn)(null == (e = eK.current) ? void 0 : e.parentNode, eK.current);
            null == t || (0, v.rB)(t) || (t.removeEventListener(v.NO, tM), ei(!1), tS(!1), to(N._H.MD));
        }, [ei, tt, tS]),
        tR = () => {
            if (null == eK.current) return;
            let e = Math.max(eK.current.currentTime - 10, 0);
            tt.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)),
                tV(e),
                em === N.rq.ENDED && tj(N.rq.PAUSED),
                tg(h.jn.VIDEO_MODAL, E.jZ.SEEK_BACKWARD);
        },
        tL = () => {
            if (null == eK.current || !t0) return;
            let e = Math.min(eK.current.currentTime + 10, te);
            tt.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)),
                tV(e),
                em !== N.rq.ENDED && e >= eK.current.duration && tj(N.rq.ENDED),
                tg(h.jn.VIDEO_MODAL, E.jZ.SEEK_FORWARD);
        };
    o.useEffect(() => {
        let e = eK.current;
        return () => {
            let t = (0, v.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(v.NO, tM);
        };
    }, [tM]);
    let tV = o.useCallback(
            (e) => {
                var t;
                null != eK.current &&
                    (tt.info("[QV] | seekTimeline | timeSec: ".concat(e)),
                    eB((e / (null != (t = eK.current.duration) ? t : 1)) * 100),
                    ty(),
                    e_(!0),
                    e9(!1),
                    (eK.current.currentTime = e),
                    eH(J.id, e, eK.current.duration));
            },
            [eK, eH, J.id, ty, tt],
        ),
        tZ = () => {
            if (null != eK.current)
                switch ((tt.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(em)), em)) {
                    case N.rq.ENDED:
                        tV(0), tj(N.rq.PLAYING);
                        break;
                    case N.rq.PLAYING:
                        tj(N.rq.PAUSED), e4(h.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tj(N.rq.PLAYING);
                }
        },
        tF = (e) => {
            e5(e);
        },
        tB = (e) => {
            e5((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tq = o.useCallback(() => {
            if (
                null == eK.current ||
                (tt.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(eK.current.textTracks.length)),
                0 === eK.current.textTracks.length)
            )
                return;
            let e = eK.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, w.JC)(n) && ((n.id = "cue-".concat(t)), (n.onenter = () => tF(n)), (n.onexit = () => tB(n)));
                }
        }, [eK, tt]);
    o.useEffect(() => {
        if (null == eX.current) return;
        let e = eX.current;
        return (
            e.addEventListener("load", tq),
            () => {
                null != e && e.removeEventListener("load", tq);
            }
        );
    }, [eX, tq]);
    let tU = o.useCallback(
            (e) => {
                var t;
                tt.info(
                    "[QV] | logVideoError: errorType: "
                        .concat(e, ", videoProgress: ")
                        .concat(null == (t = eK.current) ? void 0 : t.currentTime, ", videoAssetId: ")
                        .concat(ta, ", connectionSpeed: ")
                        .concat(eI),
                ),
                    tO(e);
            },
            [eI, tO, eK, ta, tt],
        ),
        tY = o.useRef(!1);
    o.useEffect(() => {
        null != ti || tY.current || ((tY.current = !0), tO(N.CY.NO_VALID_SOURCE));
    }, [ti, tO, tY]);
    let tQ = (e) => {
        tt.info("[QV] | handleCanPlay: playerState: ".concat(em)),
            null != eK.current &&
                em === N.rq.PLAYING &&
                (tt.info("[QV] | handleCanPlay: did NOT early return"),
                ex && (tt.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(ex)), ey(!1)),
                ej &&
                    (tt.info("[QV] | handleCanPlay: waitingForChunk: ".concat(ej)),
                    th(null != eY.current ? performance.now() - eY.current : null),
                    eP(!1)),
                tt.info("[QV] | handleCanPlay: updating player state to playing"),
                tj(N.rq.PLAYING));
    };
    o.useEffect(() => {
        if (!eO) return;
        let e = setTimeout(() => {
            e_(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eO]);
    let [{ controlBarAnimSpring: tH }, tG] = (0, u.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: B,
            onStart: () => {
                eZ(!1);
            },
            onRest: (e) => {
                1 === e.value && eZ(!0);
            },
        })),
        tz = (0, o.useRef)(null),
        [{ captionHeightSpring: tW }, tK] = (0, u.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: B,
        }));
    o.useEffect(() => {
        var e, t;
        return (
            tK({
                captionHeightSpring:
                    er && null != e7 && null != (t = null == (e = tz.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: eW,
            }),
            () => {
                tW.stop();
            }
        );
    }, [er, tK, eW, e7, tW]),
        o.useEffect(
            () => (
                tG({
                    controlBarAnimSpring: tA || eR ? 1 : 0,
                    immediate: eW,
                }),
                () => {
                    tH.stop();
                }
            ),
            [tA, tG, eW, eR, tH],
        );
    let tX = em === N.rq.ENDED,
        t$ = o.useMemo(() => (0, O.fh)(J, O.eC.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [J]),
        tJ = o.useMemo(() => (0, O.fh)(J, O.eC.VIDEO_PLAYER_CAPTION, void 0, !1), [J]),
        t0 = eJ || eQ.maxTimestampSec >= (null != (Y = null == (l = eK.current) ? void 0 : l.currentTime) ? Y : 0) + 1,
        t1 = o.useMemo(() => null === (0, O.fh)(J, O.eC.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [J]);
    return (0, r.jsx)(u.P3F, {
        className: F.videoCont,
        "data-fullscreen": el,
        tabIndex: -1,
        onMouseEnter: () => {
            ev(!0), tT(!1), (tN.current = performance.now()), null != tI.current && clearTimeout(tI.current);
        },
        onMouseLeave: () => {
            ev(!1), tT(!1);
        },
        onMouseMove: tk,
        onKeyDown: tk,
        children: (0, r.jsxs)("div", {
            className: i()(F.videoContInnerRelative, {
                [F.videoContInnerRelativePortrait]: "portrait" === X,
                [F.videoContInnerRelativeLandscape]: "landscape" === X,
            }),
            children: [
                tX &&
                    (0, r.jsx)(j.Z, {
                        videoRef: eK,
                        onExitFullScreen: tM,
                        onTrackQuestVideoFullscreenChanged: tS,
                        onTrackQuestContentClick: tg,
                        orientation: X,
                    }),
                (0, r.jsxs)(f.Z, {
                    ref: (e) => {
                        (eK.current = e), (ed.current = e);
                    },
                    autoPlay: z,
                    playsInline: !0,
                    mediaLayoutType: el ? Z.hV.STATIC : Z.hV.RESPONSIVE,
                    className: i()({
                        [F.hidden]: tX,
                        [F.videoInner]: !0,
                    }),
                    controls: !1,
                    poster: null == t$ ? void 0 : t$.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        if (null == eK.current) return;
                        let t = eK.current.currentTime >= H.target && !e1.current && e0;
                        if (eK.current.currentTime >= ew || t) {
                            var n;
                            tt.info(
                                "[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(
                                    eK.current.currentTime,
                                ),
                            ),
                                (n = eK.current.currentTime) >= H.target && (e1.current = !0),
                                ek(n + 6 + 2 * Math.random()),
                                tP(n);
                        }
                        eK.current.currentTime >= eA &&
                            (eM(eK.current.currentTime + 1),
                            (0, g.qm)(J.id, eh.taskType, eK.current.currentTime),
                            G(eK.current.currentTime)),
                            eH(J.id, eK.current.currentTime, eK.current.duration),
                            eS((eK.current.currentTime / eK.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != eK.current &&
                            (tP(eK.current.duration + 1),
                            tt.info("[QV] | handleEnded: sending progress update: ".concat(eK.current.duration + 1)),
                            eH(J.id, eK.current.duration, eK.current.duration)),
                            tj(N.rq.ENDED),
                            eP(!1);
                    },
                    onLoadedData: (e) => {
                        tt.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(ex)),
                            ex && (td(null != eU.current ? performance.now() - eU.current : null), ey(!1), tc());
                    },
                    onLoadedMetadata: (e) => {
                        null != eK.current &&
                            (tt.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(ta)),
                            e6(!0),
                            ta !== O.eC.VIDEO_PLAYER_VIDEO_HLS && tV(tn),
                            eG ? (eK.current.volume = 0) : (eK.current.volume = ez));
                    },
                    onLoadStart: () => {
                        (eU.current = performance.now()),
                            tu(eI),
                            tt.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eU.current));
                    },
                    onPlaying: () => {
                        if (!eq.current) return;
                        let e = performance.now() - K;
                        tt.info("[QV] | \u23F0 Video FCP: ".concat(e, "ms")), tb(e), (eq.current = !1);
                    },
                    onWaiting: (e) => {
                        (eY.current = performance.now()),
                            tt.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eY.current)),
                            tE(),
                            eP(!0);
                    },
                    onProgress: (e) => {
                        if (null == eK.current) return;
                        tt.info(
                            "[QV] | handleLoadingHasProgressed: buffered.length: ".concat(eK.current.buffered.length),
                        );
                        let t = [];
                        for (let e = 0; e < eK.current.buffered.length; e++) {
                            let n = eK.current.buffered.start(e),
                                r = eK.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / eK.current.duration,
                                    size: (r - n) / eK.current.duration,
                                });
                        }
                        eT(t);
                    },
                    onCanPlay: tQ,
                    onCanPlayThrough: tQ,
                    onSeeked: () => {
                        tt.info("[QV] | handleSeeked"), e9(!0);
                    },
                    onAbort: () => tU(N.CY.ABORT),
                    onError: () => tU(N.CY.ERROR),
                    onEmptied: () => tU(N.CY.EMPTIED),
                    onStalled: () => tU(N.CY.STALLED),
                    onClick: () => {
                        tt.info("[QV] | handleVideoClick"), tZ();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != tJ &&
                            (0, r.jsx)("track", {
                                ref: eX,
                                src: tJ.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != ti &&
                            ta !== O.eC.VIDEO_PLAYER_VIDEO_HLS &&
                            null != ti.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tU(N.CY.SOURCE_ERROR),
                                src: ti.url,
                                type: ti.mimetype,
                            }),
                    ],
                }),
                (ex || ej) &&
                    em === N.rq.PLAYING &&
                    null != ti &&
                    (0, r.jsx)(u.$jN, {
                        type: u.$jN.Type.WANDERING_CUBES,
                        className: F.loadingSpinner,
                    }),
                (0, r.jsx)(A.Z, {
                    hasVideoAsset: null != ti,
                    playerState: em,
                    pauseReason: e2,
                }),
                (0, r.jsx)(a.animated.div, {
                    className: F.floatingShareButtonContainer,
                    style: {
                        opacity: (0, a.to)(
                            [
                                tH.to({
                                    range: [0, 1],
                                    output: [0, 1],
                                }),
                            ],
                            (e) => "".concat(e),
                        ),
                    },
                    children: (0, r.jsx)(D.Z, {}),
                }),
                et &&
                    em !== N.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(u.P3F, {
                                onClick: () => {
                                    em === N.rq.PAUSED && tj(N.rq.PLAYING), en(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: F.transcriptOverlay }),
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: i()(F.transcriptCont, { [F.transcriptContPortrait]: "portrait" === X }),
                                style: {
                                    marginBottom: (0, a.to)([tH, tW], (e, t) => "".concat(e * tl[tr] + t, "px")),
                                },
                                children: (0, r.jsx)(I.E, {
                                    quest: J,
                                    onClose: () => {
                                        en(!1), tg(h.jn.VIDEO_MODAL, E.jZ.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(a.animated.div, {
                    className: F.videoFooterContGradient,
                    style: {
                        opacity: (0, a.to)(
                            [
                                tH.to({
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
                        className: i()(F.playPausePopCont, {
                            [F.play]: em === N.rq.PLAYING,
                            [F.pause]: em === N.rq.PAUSED,
                        }),
                        children:
                            em === N.rq.PLAYING
                                ? (0, r.jsx)(u.o1U, { className: F.playPausePopIcon })
                                : (0, r.jsx)(u.fpf, { className: F.playPausePopIcon }),
                    },
                    em,
                ),
                er &&
                    null != e7 &&
                    !tX &&
                    (0, r.jsx)(a.animated.div, {
                        className: F.captionContainer,
                        ref: tz,
                        style: {
                            translateY: (0, a.to)(
                                [
                                    tH.to({
                                        range: [0, 1],
                                        output: [0, -tl[tr]],
                                    }),
                                ],
                                (e) => "".concat(e, "px"),
                            ),
                        },
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: F.captionText,
                            children: e7.text,
                        }),
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: F.videoFooterCont,
                    style: {
                        height: (0, a.to)(
                            [
                                tH.to({
                                    range: [0, 1],
                                    output: [0, tl[tr]],
                                }),
                            ],
                            (e) => "".concat(e, "px"),
                        ),
                    },
                    children: [
                        (0, r.jsx)(T.Z, {
                            percent: null != eF ? eF : eC,
                            animate: !0 !== e$.current && !eO,
                            interactionEnabled: eJ && eV,
                            backgroundColor: tA ? void 0 : "rgba(0, 0, 0, 0.0)",
                            playerState: em,
                            preloadedBuffers: tA ? eD : void 0,
                            duration: null != (Q = null == (q = eK.current) ? void 0 : q.duration) ? Q : 1,
                            isFullyVisible: tA && eV,
                            maxSeekableTime: tA && eV ? te : void 0,
                            onClick: (e) => {
                                tV(e), em === N.rq.ENDED && tj(N.rq.PLAYING);
                            },
                            onScrubBack: tR,
                            onScrubForward: tL,
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: F.videoControlsCont,
                            style: {
                                paddingTop: (0, a.to)(
                                    [
                                        tH.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                paddingBottom: (0, a.to)(
                                    [
                                        tH.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                pointerEvents: (0, a.to)(
                                    [
                                        tH.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => (e < 0.3 ? "none" : "auto"),
                                ),
                            },
                            onFocus: () => eE(!0),
                            onBlur: () => eE(!1),
                            children: (0, r.jsx)(y.Z, {
                                videoRef: eK,
                                videoTask: H,
                                playerState: em,
                                animSpring: tH,
                                visible: tA,
                                seekForwardEnabled: t0,
                                hideCaptionBtn: null == tJ,
                                hideTranscriptBtn: t1,
                                size: tr,
                                handlePlaybackBtnClick: tZ,
                                handleTranscriptBtnClick: () => {
                                    en(!et),
                                        tg(h.jn.VIDEO_MODAL, et ? E.jZ.TRANSCRIPT_DISABLE : E.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    eo(!er),
                                        tg(
                                            h.jn.VIDEO_MODAL,
                                            er ? E.jZ.CLOSED_CAPTIONING_DISABLE : E.jZ.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !el;
                                    tt.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
                                    let n = (0, v.fn)(null == (e = eK.current) ? void 0 : e.parentNode, eK.current);
                                    t && null != n
                                        ? ((0, v.Dj)(n), n.addEventListener(v.NO, tM), tS(!0), to(N._H.LG))
                                        : t ||
                                          null == n ||
                                          (n.removeEventListener(v.NO, tM), tS(!1), (0, v.Pr)(n), to(N._H.MD)),
                                        ei(t);
                                },
                                handleSeekBackBtnClick: tR,
                                handleSeekForwardBtnClick: tL,
                                handleControlBarPendingInteraction: eL,
                                onVolumeChange: t_,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
