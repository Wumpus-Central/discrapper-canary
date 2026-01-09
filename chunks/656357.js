n.d(t, { Z: () => H }), n(388685), n(539854);
var r = n(54381),
    o = n(473749),
    l = n(120356),
    i = n.n(l),
    a = n(620389),
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
    k = n(267322),
    L = n(70417),
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
        { focused: ea, focusedChanged: es } = (0, k.xU)(),
        { visible: ec, visibleChanged: eu, targetRef: ed } = (0, k.Yy)(),
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
        [ew, ek] = o.useState(0),
        [eL, eM] = o.useState(!1),
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
        [e0, e1] = o.useState(null),
        [e2, e4] = o.useState(!1),
        [e8, e3] = o.useState(!1),
        [e6, e9] = o.useState(null),
        e7 = eJ
            ? null != (v = null == (n = ez.current) ? void 0 : n.duration)
                ? v
                : 0
            : Math.max(eH.maxTimestampSec, eh.progressSeconds),
        e5 = o.useMemo(
            () =>
                (0, O.T)({
                    quest: J,
                    location: Z.dr.VIDEO_MODAL,
                }),
            [J],
        ),
        te = (0, w.$R)(eJ, eH, eh),
        [tt, tn] = o.useState(A._H.MD),
        tr = {
            [A._H.MD]: 50,
            [A._H.LG]: 58,
        };
    (0, m.Ng)(() => {
        e$.current &&
            ((e$.current = !1),
            eN(E.Z.getEffectiveConnectionSpeed()),
            eJ && eH.timestampSec >= eH.duration && eQ(J.id, 0, eH.duration));
    });
    let { videoAsset: to, videoAssetType: tl, hlsRef: ti, onFirstChunkLoaded: ta } = (0, L.Z)(ez, eR, te),
        {
            trackQuestVideoLoadingStarted: ts,
            trackQuestVideoLoadingEnded: tc,
            trackQuestVideoProgressed: tu,
            trackQuestVideoResumed: td,
            trackQuestVideoPaused: tm,
            trackQuestVideoFocusChange: tf,
            trackQuestContentClick: tp,
            trackQuestVideoBufferingStarted: tv,
            trackQuestVideoBufferingEnded: tE,
            trackWatchTimeAnalytics: tg,
            trackQuestVideoTimeToFirstFrame: th,
            trackQuestVideoFullscreenChanged: tC,
            trackQuestVideoError: tS,
            trackQuestVideoVolumeChanged: tb,
        } = (0, M.Z)({
            questId: J.id,
            isQuestCompleted: eJ,
            videoRef: ez,
            hlsRef: ti,
            videoSessionId: ee,
            videoAssetId: tl,
            sourceQuestContent: $,
            logger: e5,
        });
    (0, V.Z)({
        videoAssetUrl: null == to ? void 0 : to.url,
        videoRef: ez,
        hlsRef: ti,
        videoAssetType: tl,
    });
    let tO = o.useCallback(() => {
            var e, t;
            return null != (t = null == (e = ez.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: t_ } = (0, _.Z)({
            getCurrentVideoTime: tO,
            isPlaying: em === A.rq.PLAYING,
            isMetadataLoaded: e2,
            isInitialSeekComplete: e8,
            onAnalytics: tg,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000,
        }),
        tx = o.useCallback(
            (e) => {
                if ((e5.info("[QV] | updatePlayerState | playerState: ".concat(e)), ef(e), null != ez.current))
                    switch (e) {
                        case A.rq.PLAYING:
                            ez.current.paused && td(e0), e1(null), ez.current.play();
                            break;
                        case A.rq.PAUSED:
                            ez.current.paused || t_(), ez.current.pause(), (eU.current = !1);
                            break;
                        case A.rq.ENDED:
                            t_(), en(!1);
                    }
            },
            [td, e0, t_, en, e5],
        );
    o.useEffect(() => {
        tm(e0);
    }, [e0, tm]),
        o.useEffect(() => {
            es && tf(ea, em);
        }, [ea, es, em, tf]);
    let ty = o.useCallback(
        (e) => {
            var t;
            eJ ||
                (null == (t = J.userStatus) ? void 0 : t.enrolledAt) == null ||
                (e5.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, j.FI)(J, e)),
                tu();
        },
        [eJ, J, e5, tu],
    );
    o.useEffect(() => {
        (W !== d.Dvm.HIDDEN &&
            W !== d.Dvm.EXITING &&
            W !== d.Dvm.EXITED &&
            (null == W || !eu || ec || eJ) &&
            (!es || ea || eJ)) ||
            null == ez.current ||
            em !== A.rq.PLAYING ||
            (e5.info(
                "[QV] | Pausing video | playerState: "
                    .concat(em, ", parentTransitionState: ")
                    .concat(W, ", visible: ")
                    .concat(ec, ", focused: ")
                    .concat(ea, ", isQuestCompleted: ")
                    .concat(eJ),
            ),
            tx(A.rq.PAUSED),
            eJ || e1(S.yE.LOST_FOCUS));
    }, [W, ea, es, ec, eu, em, eJ, tx, ty, e5]);
    let [tj, tP] = o.useState(!1),
        tD = o.useRef(null),
        tT = o.useRef(performance.now()),
        tR = o.useCallback(() => {
            null != tD.current && clearTimeout(tD.current),
                em === A.rq.PLAYING &&
                    (tD.current = setTimeout(
                        () => {
                            em === A.rq.PLAYING && tP(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tT.current)),
                    ));
        }, [em]),
        tN = () => {
            tP(!1), (tT.current = performance.now()), tR();
        };
    o.useEffect(() => {
        if (em !== A.rq.PLAYING) {
            tP(!1), null != tD.current && clearTimeout(tD.current);
            return;
        }
        return (
            tR(),
            () => {
                null != tD.current && clearTimeout(tD.current);
            }
        );
    }, [em, tR]);
    let tI = !tj && (eE || ep || em === A.rq.ENDED),
        tA = o.useCallback(() => {
            var e;
            e5.info("[QV] | handleFullScreenExit");
            let t = (0, g.fn)(null == (e = ez.current) ? void 0 : e.parentNode, ez.current);
            null == t || (0, g.rB)(t) || (t.removeEventListener(g.NO, tA), ei(!1), tC(!1), tn(A._H.MD));
        }, [ei, e5, tC]),
        tw = () => {
            if (null == ez.current) return;
            let e = Math.max(ez.current.currentTime - 10, 0);
            e5.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)),
                tL(e),
                em === A.rq.ENDED && tx(A.rq.PAUSED),
                tp(S.jn.VIDEO_MODAL, C.jZ.SEEK_BACKWARD);
        },
        tk = () => {
            if (null == ez.current || !tX) return;
            let e = Math.min(ez.current.currentTime + 10, e7);
            e5.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)),
                tL(e),
                em !== A.rq.ENDED && e >= ez.current.duration && tx(A.rq.ENDED),
                tp(S.jn.VIDEO_MODAL, C.jZ.SEEK_FORWARD);
        };
    o.useEffect(() => {
        let e = ez.current;
        return () => {
            let t = (0, g.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(g.NO, tA);
        };
    }, [tA]);
    let tL = o.useCallback(
            (e) => {
                var t;
                null != ez.current &&
                    (e5.info("[QV] | seekTimeline | timeSec: ".concat(e)),
                    eB((e / (null != (t = ez.current.duration) ? t : 1)) * 100),
                    t_(),
                    e_(!0),
                    e3(!1),
                    (ez.current.currentTime = e),
                    eQ(J.id, e, ez.current.duration));
            },
            [ez, eQ, J.id, t_, e5],
        ),
        tM = () => {
            if (null != ez.current)
                switch ((e5.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(em)), em)) {
                    case A.rq.ENDED:
                        tL(0), tx(A.rq.PLAYING);
                        break;
                    case A.rq.PLAYING:
                        tx(A.rq.PAUSED), e1(S.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tx(A.rq.PLAYING);
                }
        },
        tV = (e) => {
            e9(e);
        },
        tZ = (e) => {
            e9((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tF = o.useCallback(() => {
            if (
                null == ez.current ||
                (e5.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(ez.current.textTracks.length)),
                0 === ez.current.textTracks.length)
            )
                return;
            let e = ez.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, w.JC)(n) && ((n.id = "cue-".concat(t)), (n.onenter = () => tV(n)), (n.onexit = () => tZ(n)));
                }
        }, [ez, e5]);
    o.useEffect(() => {
        if (null == eX.current) return;
        let e = eX.current;
        return (
            e.addEventListener("load", tF),
            () => {
                null != e && e.removeEventListener("load", tF);
            }
        );
    }, [eX, tF]);
    let tB = o.useCallback(
            (e) => {
                var t;
                e5.info(
                    "[QV] | logVideoError: errorType: "
                        .concat(e, ", videoProgress: ")
                        .concat(null == (t = ez.current) ? void 0 : t.currentTime, ", videoAssetId: ")
                        .concat(tl, ", connectionSpeed: ")
                        .concat(eR),
                ),
                    tS(e);
            },
            [eR, tS, ez, tl, e5],
        ),
        tU = (e) => {
            e5.info("[QV] | handleCanPlay: playerState: ".concat(em)),
                null != ez.current &&
                    em === A.rq.PLAYING &&
                    (e5.info("[QV] | handleCanPlay: did NOT early return"),
                    ex && (e5.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(ex)), ey(!1)),
                    ej &&
                        (e5.info("[QV] | handleCanPlay: waitingForChunk: ".concat(ej)),
                        tE(null != eY.current ? performance.now() - eY.current : null),
                        eP(!1)),
                    e5.info("[QV] | handleCanPlay: updating player state to playing"),
                    tx(A.rq.PLAYING));
        };
    o.useEffect(() => {
        if (!eO) return;
        let e = setTimeout(() => {
            e_(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eO]);
    let [{ controlBarAnimSpring: tq }, tY] = (0, d.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: q,
            onStart: () => {
                eZ(!1);
            },
            onRest: (e) => {
                1 === e.value && eZ(!0);
            },
        })),
        tH = (0, o.useRef)(null),
        [{ captionHeightSpring: tQ }, tG] = (0, d.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: q,
        }));
    o.useEffect(() => {
        var e, t;
        return (
            tG({
                captionHeightSpring:
                    er && null != e6 && null != (t = null == (e = tH.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: eW,
            }),
            () => {
                tQ.stop();
            }
        );
    }, [er, tG, eW, e6, tQ]),
        o.useEffect(
            () => (
                tY({
                    controlBarAnimSpring: tI || eL ? 1 : 0,
                    immediate: eW,
                }),
                () => {
                    tq.stop();
                }
            ),
            [tI, tY, eW, eL, tq],
        );
    let tK = em === A.rq.ENDED,
        tW = o.useMemo(() => (0, x.fh)(J, x.eC.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [J]),
        tz = o.useMemo(() => (0, x.fh)(J, x.eC.VIDEO_PLAYER_CAPTION, void 0, !1), [J]),
        tX = eJ || eH.maxTimestampSec >= (null != (B = null == (l = ez.current) ? void 0 : l.currentTime) ? B : 0) + 1,
        t$ = o.useMemo(() => null === (0, x.fh)(J, x.eC.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [J]);
    return (0, r.jsx)(d.P3F, {
        className: U.videoCont,
        "data-fullscreen": el,
        tabIndex: -1,
        onMouseEnter: () => {
            ev(!0), tP(!1), (tT.current = performance.now()), null != tD.current && clearTimeout(tD.current);
        },
        onMouseLeave: () => {
            ev(!1), tP(!1);
        },
        onMouseMove: tN,
        onKeyDown: tN,
        children: (0, r.jsxs)("div", {
            className: i()(U.videoContInnerRelative, {
                [U.videoContInnerRelativePortrait]: "portrait" === X,
                [U.videoContInnerRelativeLandscape]: "landscape" === X,
            }),
            children: [
                tK &&
                    (0, r.jsx)(D.Z, {
                        videoRef: ez,
                        onExitFullScreen: tA,
                        onTrackQuestVideoFullscreenChanged: tC,
                        onTrackQuestContentClick: tp,
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
                        [U.hidden]: tK,
                        [U.videoInner]: !0,
                    }),
                    controls: !1,
                    poster: null == tW ? void 0 : tW.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != ez.current &&
                            (ez.current.currentTime >= eI &&
                                (e5.info(
                                    "[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(
                                        ez.current.currentTime,
                                    ),
                                ),
                                eA(ez.current.currentTime + 6 + 2 * Math.random()),
                                ty(ez.current.currentTime)),
                            ez.current.currentTime >= ew &&
                                (ek(ez.current.currentTime + 1),
                                (0, h.qm)(J.id, eh.taskType, ez.current.currentTime),
                                G(ez.current.currentTime)),
                            eQ(J.id, ez.current.currentTime, ez.current.duration),
                            eb((ez.current.currentTime / ez.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != ez.current &&
                            (ty(ez.current.duration + 1),
                            e5.info("[QV] | handleEnded: sending progress update: ".concat(ez.current.duration + 1)),
                            eQ(J.id, ez.current.duration, ez.current.duration)),
                            tx(A.rq.ENDED),
                            eP(!1);
                    },
                    onLoadedData: (e) => {
                        e5.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(ex)),
                            ex && (tc(null != eq.current ? performance.now() - eq.current : null), ey(!1), ta());
                    },
                    onLoadedMetadata: (e) => {
                        null != ez.current &&
                            (e5.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tl)),
                            e4(!0),
                            tl !== x.eC.VIDEO_PLAYER_VIDEO_HLS && tL(te),
                            eG ? (ez.current.volume = 0) : (ez.current.volume = eK));
                    },
                    onLoadStart: () => {
                        (eq.current = performance.now()),
                            ts(eR),
                            e5.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eq.current));
                    },
                    onPlaying: () => {
                        if (!eU.current) return;
                        let e = performance.now() - z;
                        e5.info("[QV] | \u23F0 Video FCP: ".concat(e, "ms")), th(e), (eU.current = !1);
                    },
                    onWaiting: (e) => {
                        (eY.current = performance.now()),
                            e5.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eY.current)),
                            tv(),
                            eP(!0);
                    },
                    onProgress: (e) => {
                        if (null == ez.current) return;
                        e5.info(
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
                    onCanPlay: tU,
                    onCanPlayThrough: tU,
                    onSeeked: () => {
                        e5.info("[QV] | handleSeeked"), e3(!0);
                    },
                    onAbort: () => tB(A.CY.ABORT),
                    onError: () => tB(A.CY.ERROR),
                    onEmptied: () => tB(A.CY.EMPTIED),
                    onStalled: () => tB(A.CY.STALLED),
                    onClick: () => {
                        e5.info("[QV] | handleVideoClick"), tM();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != tz &&
                            (0, r.jsx)("track", {
                                ref: eX,
                                src: tz.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != to &&
                            tl !== x.eC.VIDEO_PLAYER_VIDEO_HLS &&
                            null != to.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tB(A.CY.SOURCE_ERROR),
                                src: to.url,
                                type: to.mimetype,
                            }),
                    ],
                }),
                (ex || ej) &&
                    em === A.rq.PLAYING &&
                    (0, r.jsx)(d.$jN, {
                        type: d.$jN.Type.WANDERING_CUBES,
                        className: U.loadingSpinner,
                    }),
                em === A.rq.PAUSED && e0 === S.yE.LOST_FOCUS && (0, r.jsx)(Y, {}),
                (0, r.jsx)(a.animated.div, {
                    className: U.floatingShareButtonContainer,
                    style: {
                        opacity: (0, a.to)(
                            [
                                tq.to({
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
                                    em === A.rq.PAUSED && tx(A.rq.PLAYING), en(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: U.transcriptOverlay }),
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: i()(U.transcriptCont, { [U.transcriptContPortrait]: "portrait" === X }),
                                style: {
                                    marginBottom: (0, a.to)([tq, tQ], (e, t) => "".concat(e * tr[tt] + t, "px")),
                                },
                                children: (0, r.jsx)(I.E, {
                                    quest: J,
                                    onClose: () => {
                                        en(!1), tp(S.jn.VIDEO_MODAL, C.jZ.TRANSCRIPT_DISABLE);
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
                                tq.to({
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
                    null != e6 &&
                    !tK &&
                    (0, r.jsx)(a.animated.div, {
                        className: U.captionContainer,
                        ref: tH,
                        style: {
                            translateY: (0, a.to)(
                                [
                                    tq.to({
                                        range: [0, 1],
                                        output: [0, -tr[tt]],
                                    }),
                                ],
                                (e) => "".concat(e, "px"),
                            ),
                        },
                        children: (0, r.jsx)(d.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: U.captionText,
                            children: e6.text,
                        }),
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: U.videoFooterCont,
                    style: {
                        height: (0, a.to)(
                            [
                                tq.to({
                                    range: [0, 1],
                                    output: [0, tr[tt]],
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
                            backgroundColor: tI ? void 0 : "rgba(0, 0, 0, 0.0)",
                            preloadedBuffers: tI ? eD : void 0,
                            duration: null != (H = null == (u = ez.current) ? void 0 : u.duration) ? H : 1,
                            isFullyVisible: tI && eV,
                            maxSeekableTime: tI && eV ? e7 : void 0,
                            onClick: (e) => {
                                tL(e), em === A.rq.ENDED && tx(A.rq.PLAYING);
                            },
                            onScrubBack: tw,
                            onScrubForward: tk,
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: U.videoControlsCont,
                            style: {
                                paddingTop: (0, a.to)(
                                    [
                                        tq.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                paddingBottom: (0, a.to)(
                                    [
                                        tq.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                pointerEvents: (0, a.to)(
                                    [
                                        tq.to({
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
                                animSpring: tq,
                                visible: tI,
                                seekForwardEnabled: tX,
                                hideCaptionBtn: null == tz,
                                hideTranscriptBtn: t$,
                                size: tt,
                                handlePlaybackBtnClick: tM,
                                handleTranscriptBtnClick: () => {
                                    en(!et),
                                        tp(S.jn.VIDEO_MODAL, et ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    eo(!er),
                                        tp(
                                            S.jn.VIDEO_MODAL,
                                            er ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !el;
                                    e5.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
                                    let n = (0, g.fn)(null == (e = ez.current) ? void 0 : e.parentNode, ez.current);
                                    t && null != n
                                        ? ((0, g.Dj)(n), n.addEventListener(g.NO, tA), tC(!0), tn(A._H.LG))
                                        : t ||
                                          null == n ||
                                          (n.removeEventListener(g.NO, tA), tC(!1), (0, g.Pr)(n), tn(A._H.MD)),
                                        ei(t);
                                },
                                handleSeekBackBtnClick: tw,
                                handleSeekForwardBtnClick: tk,
                                handleControlBarPendingInteraction: eM,
                                onVolumeChange: tb,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
