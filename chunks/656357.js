n.d(t, { Z: () => H }), n(388685), n(539854);
var r = n(54381),
    o = n(473749),
    l = n(120356),
    i = n.n(l),
    a = n(853590),
    s = n(55160),
    c = n(442837),
    u = n(780384),
    d = n(481060),
    m = n(493773),
    f = n(607070),
    p = n(70097),
    v = n(210887),
    E = n(866960),
    g = n(228488),
    h = n(22095),
    C = n(617136),
    S = n(49436),
    b = n(184299),
    O = n(535584),
    _ = n(550235),
    x = n(475595),
    y = n(254579),
    j = n(542347),
    P = n(922826),
    D = n(104800),
    T = n(215113),
    R = n(449788),
    N = n(508067),
    I = n(890193),
    A = n(325916),
    w = n(939389),
    L = n(267322),
    k = n(70417),
    M = n(934703),
    V = n(981786),
    Z = n(324805),
    F = n(217702),
    B = n(388032),
    U = n(209668);
let q = {
    tension: 250,
    friction: 5,
    clamp: !0,
};
function Y() {
    let e = (0, c.e7)([v.Z], () => v.Z.getState().theme);
    return (0, r.jsx)("div", {
        className: U.pauseText,
        style: { background: (0, u.wj)(e) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
        children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: B.intl.string(B.t["U7Xrb+"]),
        }),
    });
}
function H(e) {
    var t, n, l, u, v, B, H;
    let {
            videoTask: Q,
            onOptimisticProgressUpdate: G,
            autoplay: K,
            parentTransitionState: W,
            performanceClockStartTime: z,
            orientation: X,
        } = e,
        { sourceQuestContent: $, quest: J, videoSessionId: ee } = o.useContext(T.VideoQuestModalContext),
        et = (0, b.km)((e) => e.transcriptEnabled),
        en = (0, b.km)((e) => e.setTranscriptEnabled),
        er = (0, b.km)((e) => e.captionEnabled),
        eo = (0, b.km)((e) => e.setCaptionEnabled),
        el = (0, b.km)((e) => e.fullScreenEnabled),
        ei = (0, b.km)((e) => e.setFullScreenEnabled),
        { focused: ea, focusedChanged: es } = (0, L.xU)(),
        { visible: ec, visibleChanged: eu, targetRef: ed } = (0, L.Yy)(),
        [em, ef] = o.useState(!0 === K ? A.rq.PLAYING : A.rq.PAUSED),
        [ep, ev] = o.useState(!1),
        [eE, eg] = o.useState(!1),
        eh = (0, y.il)(J),
        [eC, eS] = o.useState(eh.percentComplete),
        eb = o.useCallback((e) => {
            eB(null), eS(e);
        }, []),
        [eO, e_] = o.useState(!1),
        [ex, ey] = o.useState(!0),
        [ej, eP] = o.useState(!1),
        [eD, eT] = o.useState([]),
        [eR, eN] = o.useState(E.Z.getEffectiveConnectionSpeed()),
        [eI, eA] = o.useState(0),
        [ew, eL] = o.useState(0),
        [ek, eM] = o.useState(!1),
        [eV, eZ] = o.useState(!1),
        [eF, eB] = o.useState(null),
        eU = o.useRef(!0),
        eq = o.useRef(null),
        eY = o.useRef(null),
        eH = (0, b.km)((e) => {
            var t;
            return null != (t = e.videoProgress[J.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10,
                  };
        }, s.X),
        eQ = (0, b.km)((e) => e.setVideoProgress),
        eG = (0, b.km)((e) => e.muted),
        eK = (0, b.km)((e) => e.volume),
        eW = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        ez = (0, o.useRef)(null),
        eX = (0, o.useRef)(null),
        e$ = o.useRef(!0),
        eJ = (null == (t = J.userStatus) ? void 0 : t.completedAt) != null,
        e0 = o.useMemo(() => J.config.features.includes(Z.S7.FULL_EPISODE_VIDEO_QUEST), [J.config.features]),
        e1 = o.useRef(!1),
        [e2, e4] = o.useState(null),
        [e8, e3] = o.useState(!1),
        [e6, e9] = o.useState(!1),
        [e7, e5] = o.useState(null),
        te = eJ
            ? null != (v = null == (n = ez.current) ? void 0 : n.duration)
                ? v
                : 0
            : Math.max(eH.maxTimestampSec, eh.progressSeconds),
        tt = o.useMemo(
            () =>
                (0, O.T)({
                    quest: J,
                    location: Z.dr.VIDEO_MODAL,
                }),
            [J],
        ),
        tn = (0, w.$R)(eJ, eH, eh),
        [tr, to] = o.useState(A._H.MD),
        tl = {
            [A._H.MD]: 50,
            [A._H.LG]: 58,
        };
    (0, m.Ng)(() => {
        e$.current &&
            ((e$.current = !1),
            eN(E.Z.getEffectiveConnectionSpeed()),
            eJ && eH.timestampSec >= eH.duration && eQ(J.id, 0, eH.duration));
    });
    let { videoAsset: ti, videoAssetType: ta, hlsRef: ts, onFirstChunkLoaded: tc } = (0, k.Z)(ez, eR, tn),
        {
            trackQuestVideoLoadingStarted: tu,
            trackQuestVideoLoadingEnded: td,
            trackQuestVideoProgressed: tm,
            trackQuestVideoResumed: tf,
            trackQuestVideoPaused: tp,
            trackQuestVideoFocusChange: tv,
            trackQuestContentClick: tE,
            trackQuestVideoBufferingStarted: tg,
            trackQuestVideoBufferingEnded: th,
            trackWatchTimeAnalytics: tC,
            trackQuestVideoTimeToFirstFrame: tS,
            trackQuestVideoFullscreenChanged: tb,
            trackQuestVideoError: tO,
            trackQuestVideoVolumeChanged: t_,
        } = (0, M.Z)({
            questId: J.id,
            isQuestCompleted: eJ,
            videoRef: ez,
            hlsRef: ts,
            videoSessionId: ee,
            videoAssetId: ta,
            sourceQuestContent: $,
            logger: tt,
        });
    (0, V.Z)({
        videoAssetUrl: null == ti ? void 0 : ti.url,
        videoRef: ez,
        hlsRef: ts,
        videoAssetType: ta,
    });
    let tx = o.useCallback(() => {
            var e, t;
            return null != (t = null == (e = ez.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: ty } = (0, _.Z)({
            getCurrentVideoTime: tx,
            isPlaying: em === A.rq.PLAYING,
            isMetadataLoaded: e8,
            isInitialSeekComplete: e6,
            onAnalytics: tC,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000,
        }),
        tj = o.useCallback(
            (e) => {
                if ((tt.info("[QV] | updatePlayerState | playerState: ".concat(e)), ef(e), null != ez.current))
                    switch (e) {
                        case A.rq.PLAYING:
                            ez.current.paused && tf(e2), e4(null), ez.current.play();
                            break;
                        case A.rq.PAUSED:
                            ez.current.paused || ty(), ez.current.pause(), (eU.current = !1);
                            break;
                        case A.rq.ENDED:
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
                (tt.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, j.FI)(J, e)),
                tm();
        },
        [eJ, J, tt, tm],
    );
    o.useEffect(() => {
        (W !== d.Dvm.HIDDEN &&
            W !== d.Dvm.EXITING &&
            W !== d.Dvm.EXITED &&
            (null == W || !eu || ec || eJ) &&
            (!es || ea || eJ)) ||
            null == ez.current ||
            em !== A.rq.PLAYING ||
            (tt.info(
                "[QV] | Pausing video | playerState: "
                    .concat(em, ", parentTransitionState: ")
                    .concat(W, ", visible: ")
                    .concat(ec, ", focused: ")
                    .concat(ea, ", isQuestCompleted: ")
                    .concat(eJ),
            ),
            tj(A.rq.PAUSED),
            eJ || e4(S.yE.LOST_FOCUS));
    }, [W, ea, es, ec, eu, em, eJ, tj, tP, tt]);
    let [tD, tT] = o.useState(!1),
        tR = o.useRef(null),
        tN = o.useRef(performance.now()),
        tI = o.useCallback(() => {
            null != tR.current && clearTimeout(tR.current),
                em === A.rq.PLAYING &&
                    (tR.current = setTimeout(
                        () => {
                            em === A.rq.PLAYING && tT(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tN.current)),
                    ));
        }, [em]),
        tA = () => {
            tT(!1), (tN.current = performance.now()), tI();
        };
    o.useEffect(() => {
        if (em !== A.rq.PLAYING) {
            tT(!1), null != tR.current && clearTimeout(tR.current);
            return;
        }
        return (
            tI(),
            () => {
                null != tR.current && clearTimeout(tR.current);
            }
        );
    }, [em, tI]);
    let tw = !tD && (eE || ep || em === A.rq.ENDED),
        tL = o.useCallback(() => {
            var e;
            tt.info("[QV] | handleFullScreenExit");
            let t = (0, g.fn)(null == (e = ez.current) ? void 0 : e.parentNode, ez.current);
            null == t || (0, g.rB)(t) || (t.removeEventListener(g.NO, tL), ei(!1), tb(!1), to(A._H.MD));
        }, [ei, tt, tb]),
        tk = () => {
            if (null == ez.current) return;
            let e = Math.max(ez.current.currentTime - 10, 0);
            tt.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)),
                tV(e),
                em === A.rq.ENDED && tj(A.rq.PAUSED),
                tE(S.jn.VIDEO_MODAL, C.jZ.SEEK_BACKWARD);
        },
        tM = () => {
            if (null == ez.current || !tJ) return;
            let e = Math.min(ez.current.currentTime + 10, te);
            tt.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)),
                tV(e),
                em !== A.rq.ENDED && e >= ez.current.duration && tj(A.rq.ENDED),
                tE(S.jn.VIDEO_MODAL, C.jZ.SEEK_FORWARD);
        };
    o.useEffect(() => {
        let e = ez.current;
        return () => {
            let t = (0, g.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(g.NO, tL);
        };
    }, [tL]);
    let tV = o.useCallback(
            (e) => {
                var t;
                null != ez.current &&
                    (tt.info("[QV] | seekTimeline | timeSec: ".concat(e)),
                    eB((e / (null != (t = ez.current.duration) ? t : 1)) * 100),
                    ty(),
                    e_(!0),
                    e9(!1),
                    (ez.current.currentTime = e),
                    eQ(J.id, e, ez.current.duration));
            },
            [ez, eQ, J.id, ty, tt],
        ),
        tZ = () => {
            if (null != ez.current)
                switch ((tt.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(em)), em)) {
                    case A.rq.ENDED:
                        tV(0), tj(A.rq.PLAYING);
                        break;
                    case A.rq.PLAYING:
                        tj(A.rq.PAUSED), e4(S.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tj(A.rq.PLAYING);
                }
        },
        tF = (e) => {
            e5(e);
        },
        tB = (e) => {
            e5((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tU = o.useCallback(() => {
            if (
                null == ez.current ||
                (tt.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(ez.current.textTracks.length)),
                0 === ez.current.textTracks.length)
            )
                return;
            let e = ez.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, w.JC)(n) && ((n.id = "cue-".concat(t)), (n.onenter = () => tF(n)), (n.onexit = () => tB(n)));
                }
        }, [ez, tt]);
    o.useEffect(() => {
        if (null == eX.current) return;
        let e = eX.current;
        return (
            e.addEventListener("load", tU),
            () => {
                null != e && e.removeEventListener("load", tU);
            }
        );
    }, [eX, tU]);
    let tq = o.useCallback(
            (e) => {
                var t;
                tt.info(
                    "[QV] | logVideoError: errorType: "
                        .concat(e, ", videoProgress: ")
                        .concat(null == (t = ez.current) ? void 0 : t.currentTime, ", videoAssetId: ")
                        .concat(ta, ", connectionSpeed: ")
                        .concat(eR),
                ),
                    tO(e);
            },
            [eR, tO, ez, ta, tt],
        ),
        tY = (e) => {
            tt.info("[QV] | handleCanPlay: playerState: ".concat(em)),
                null != ez.current &&
                    em === A.rq.PLAYING &&
                    (tt.info("[QV] | handleCanPlay: did NOT early return"),
                    ex && (tt.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(ex)), ey(!1)),
                    ej &&
                        (tt.info("[QV] | handleCanPlay: waitingForChunk: ".concat(ej)),
                        th(null != eY.current ? performance.now() - eY.current : null),
                        eP(!1)),
                    tt.info("[QV] | handleCanPlay: updating player state to playing"),
                    tj(A.rq.PLAYING));
        };
    o.useEffect(() => {
        if (!eO) return;
        let e = setTimeout(() => {
            e_(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eO]);
    let [{ controlBarAnimSpring: tH }, tQ] = (0, d.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: q,
            onStart: () => {
                eZ(!1);
            },
            onRest: (e) => {
                1 === e.value && eZ(!0);
            },
        })),
        tG = (0, o.useRef)(null),
        [{ captionHeightSpring: tK }, tW] = (0, d.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: q,
        }));
    o.useEffect(() => {
        var e, t;
        return (
            tW({
                captionHeightSpring:
                    er && null != e7 && null != (t = null == (e = tG.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: eW,
            }),
            () => {
                tK.stop();
            }
        );
    }, [er, tW, eW, e7, tK]),
        o.useEffect(
            () => (
                tQ({
                    controlBarAnimSpring: tw || ek ? 1 : 0,
                    immediate: eW,
                }),
                () => {
                    tH.stop();
                }
            ),
            [tw, tQ, eW, ek, tH],
        );
    let tz = em === A.rq.ENDED,
        tX = o.useMemo(() => (0, x.fh)(J, x.eC.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [J]),
        t$ = o.useMemo(() => (0, x.fh)(J, x.eC.VIDEO_PLAYER_CAPTION, void 0, !1), [J]),
        tJ = eJ || eH.maxTimestampSec >= (null != (B = null == (l = ez.current) ? void 0 : l.currentTime) ? B : 0) + 1,
        t0 = o.useMemo(() => null === (0, x.fh)(J, x.eC.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [J]);
    return (0, r.jsx)(d.P3F, {
        className: U.videoCont,
        "data-fullscreen": el,
        tabIndex: -1,
        onMouseEnter: () => {
            ev(!0), tT(!1), (tN.current = performance.now()), null != tR.current && clearTimeout(tR.current);
        },
        onMouseLeave: () => {
            ev(!1), tT(!1);
        },
        onMouseMove: tA,
        onKeyDown: tA,
        children: (0, r.jsxs)("div", {
            className: i()(U.videoContInnerRelative, {
                [U.videoContInnerRelativePortrait]: "portrait" === X,
                [U.videoContInnerRelativeLandscape]: "landscape" === X,
            }),
            children: [
                tz &&
                    (0, r.jsx)(D.Z, {
                        videoRef: ez,
                        onExitFullScreen: tL,
                        onTrackQuestVideoFullscreenChanged: tb,
                        onTrackQuestContentClick: tE,
                        orientation: X,
                    }),
                (0, r.jsxs)(p.Z, {
                    ref: (e) => {
                        (ez.current = e), (ed.current = e);
                    },
                    autoPlay: K,
                    playsInline: !0,
                    mediaLayoutType: el ? F.hV.STATIC : F.hV.RESPONSIVE,
                    className: i()({
                        [U.hidden]: tz,
                        [U.videoInner]: !0,
                    }),
                    controls: !1,
                    poster: null == tX ? void 0 : tX.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        if (null == ez.current) return;
                        let t = ez.current.currentTime >= Q.target && !e1.current && e0;
                        if (ez.current.currentTime >= eI || t) {
                            var n;
                            tt.info(
                                "[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(
                                    ez.current.currentTime,
                                ),
                            ),
                                (n = ez.current.currentTime) >= Q.target && (e1.current = !0),
                                eA(n + 6 + 2 * Math.random()),
                                tP(n);
                        }
                        ez.current.currentTime >= ew &&
                            (eL(ez.current.currentTime + 1),
                            (0, h.qm)(J.id, eh.taskType, ez.current.currentTime),
                            G(ez.current.currentTime)),
                            eQ(J.id, ez.current.currentTime, ez.current.duration),
                            eb((ez.current.currentTime / ez.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != ez.current &&
                            (tP(ez.current.duration + 1),
                            tt.info("[QV] | handleEnded: sending progress update: ".concat(ez.current.duration + 1)),
                            eQ(J.id, ez.current.duration, ez.current.duration)),
                            tj(A.rq.ENDED),
                            eP(!1);
                    },
                    onLoadedData: (e) => {
                        tt.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(ex)),
                            ex && (td(null != eq.current ? performance.now() - eq.current : null), ey(!1), tc());
                    },
                    onLoadedMetadata: (e) => {
                        null != ez.current &&
                            (tt.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(ta)),
                            e3(!0),
                            ta !== x.eC.VIDEO_PLAYER_VIDEO_HLS && tV(tn),
                            eG ? (ez.current.volume = 0) : (ez.current.volume = eK));
                    },
                    onLoadStart: () => {
                        (eq.current = performance.now()),
                            tu(eR),
                            tt.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eq.current));
                    },
                    onPlaying: () => {
                        if (!eU.current) return;
                        let e = performance.now() - z;
                        tt.info("[QV] | \u23F0 Video FCP: ".concat(e, "ms")), tS(e), (eU.current = !1);
                    },
                    onWaiting: (e) => {
                        (eY.current = performance.now()),
                            tt.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eY.current)),
                            tg(),
                            eP(!0);
                    },
                    onProgress: (e) => {
                        if (null == ez.current) return;
                        tt.info(
                            "[QV] | handleLoadingHasProgressed: buffered.length: ".concat(ez.current.buffered.length),
                        );
                        let t = [];
                        for (let e = 0; e < ez.current.buffered.length; e++) {
                            let n = ez.current.buffered.start(e),
                                r = ez.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / ez.current.duration,
                                    size: (r - n) / ez.current.duration,
                                });
                        }
                        eT(t);
                    },
                    onCanPlay: tY,
                    onCanPlayThrough: tY,
                    onSeeked: () => {
                        tt.info("[QV] | handleSeeked"), e9(!0);
                    },
                    onAbort: () => tq(A.CY.ABORT),
                    onError: () => tq(A.CY.ERROR),
                    onEmptied: () => tq(A.CY.EMPTIED),
                    onStalled: () => tq(A.CY.STALLED),
                    onClick: () => {
                        tt.info("[QV] | handleVideoClick"), tZ();
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
                            ta !== x.eC.VIDEO_PLAYER_VIDEO_HLS &&
                            null != ti.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tq(A.CY.SOURCE_ERROR),
                                src: ti.url,
                                type: ti.mimetype,
                            }),
                    ],
                }),
                (ex || ej) &&
                    em === A.rq.PLAYING &&
                    (0, r.jsx)(d.$jN, {
                        type: d.$jN.Type.WANDERING_CUBES,
                        className: U.loadingSpinner,
                    }),
                em === A.rq.PAUSED && e2 === S.yE.LOST_FOCUS && (0, r.jsx)(Y, {}),
                (0, r.jsx)(a.animated.div, {
                    className: U.floatingShareButtonContainer,
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
                    children: (0, r.jsx)(R.Z, {}),
                }),
                et &&
                    em !== A.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(d.P3F, {
                                onClick: () => {
                                    em === A.rq.PAUSED && tj(A.rq.PLAYING), en(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: U.transcriptOverlay }),
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: i()(U.transcriptCont, { [U.transcriptContPortrait]: "portrait" === X }),
                                style: {
                                    marginBottom: (0, a.to)([tH, tK], (e, t) => "".concat(e * tl[tr] + t, "px")),
                                },
                                children: (0, r.jsx)(I.E, {
                                    quest: J,
                                    onClose: () => {
                                        en(!1), tE(S.jn.VIDEO_MODAL, C.jZ.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(a.animated.div, {
                    className: U.videoFooterContGradient,
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
                        className: i()(U.playPausePopCont, {
                            [U.play]: em === A.rq.PLAYING,
                            [U.pause]: em === A.rq.PAUSED,
                        }),
                        children:
                            em === A.rq.PLAYING
                                ? (0, r.jsx)(d.o1U, { className: U.playPausePopIcon })
                                : (0, r.jsx)(d.fpf, { className: U.playPausePopIcon }),
                    },
                    em,
                ),
                er &&
                    null != e7 &&
                    !tz &&
                    (0, r.jsx)(a.animated.div, {
                        className: U.captionContainer,
                        ref: tG,
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
                        children: (0, r.jsx)(d.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: U.captionText,
                            children: e7.text,
                        }),
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: U.videoFooterCont,
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
                        (0, r.jsx)(N.Z, {
                            percent: null != eF ? eF : eC,
                            animate: !0 !== e$.current && !eO,
                            interactionEnabled: eJ && eV,
                            backgroundColor: tw ? void 0 : "rgba(0, 0, 0, 0.0)",
                            preloadedBuffers: tw ? eD : void 0,
                            duration: null != (H = null == (u = ez.current) ? void 0 : u.duration) ? H : 1,
                            isFullyVisible: tw && eV,
                            maxSeekableTime: tw && eV ? te : void 0,
                            onClick: (e) => {
                                tV(e), em === A.rq.ENDED && tj(A.rq.PLAYING);
                            },
                            onScrubBack: tk,
                            onScrubForward: tM,
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: U.videoControlsCont,
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
                            onFocus: () => eg(!0),
                            onBlur: () => eg(!1),
                            children: (0, r.jsx)(P.Z, {
                                videoRef: ez,
                                videoTask: Q,
                                playerState: em,
                                animSpring: tH,
                                visible: tw,
                                seekForwardEnabled: tJ,
                                hideCaptionBtn: null == t$,
                                hideTranscriptBtn: t0,
                                size: tr,
                                handlePlaybackBtnClick: tZ,
                                handleTranscriptBtnClick: () => {
                                    en(!et),
                                        tE(S.jn.VIDEO_MODAL, et ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    eo(!er),
                                        tE(
                                            S.jn.VIDEO_MODAL,
                                            er ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !el;
                                    tt.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
                                    let n = (0, g.fn)(null == (e = ez.current) ? void 0 : e.parentNode, ez.current);
                                    t && null != n
                                        ? ((0, g.Dj)(n), n.addEventListener(g.NO, tL), tb(!0), to(A._H.LG))
                                        : t ||
                                          null == n ||
                                          (n.removeEventListener(g.NO, tL), tb(!1), (0, g.Pr)(n), to(A._H.MD)),
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
