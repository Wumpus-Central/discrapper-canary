n.d(t, { Z: () => Y }), n(388685), n(539854);
var r = n(54381),
    o = n(473749),
    l = n(120356),
    i = n.n(l),
    a = n(790519),
    s = n(55160),
    c = n(754700),
    u = n(442837),
    d = n(780384),
    m = n(481060),
    f = n(493773),
    p = n(607070),
    v = n(70097),
    E = n(210887),
    g = n(866960),
    O = n(228488),
    h = n(22095),
    b = n(617136),
    C = n(509212),
    S = n(497505),
    y = n(184299),
    _ = n(937797),
    x = n(5881),
    j = n(550235),
    D = n(720293),
    P = n(922826),
    T = n(104800),
    R = n(215113),
    I = n(449788),
    N = n(508067),
    A = n(890193),
    w = n(325916),
    k = n(939389),
    M = n(267322),
    L = n(70417),
    V = n(934703),
    Z = n(981786),
    F = n(46140),
    B = n(217702),
    H = n(388032),
    U = n(273339);
let q = {
    tension: 250,
    friction: 5,
    clamp: !0,
};
function Q() {
    let e = (0, u.e7)([E.Z], () => E.Z.getState().theme);
    return (0, r.jsx)("div", {
        className: U.pauseText,
        style: { background: (0, d.wj)(e) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
        children: (0, r.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: H.intl.string(H.t["U7Xrb+"]),
        }),
    });
}
function Y(e) {
    var t, n, l, d, E, H, Y, G, W;
    let {
            videoTask: z,
            onOptimisticProgressUpdate: K,
            autoplay: X,
            parentTransitionState: J,
            performanceClockStartTime: $,
            orientation: ee,
        } = e,
        { sourceQuestContent: et, quest: en, videoSessionId: er } = o.useContext(R.VideoQuestModalContext),
        eo = (0, y.km)((e) => e.transcriptEnabled),
        el = (0, y.km)((e) => e.setTranscriptEnabled),
        ei = (0, y.km)((e) => e.captionEnabled),
        ea = (0, y.km)((e) => e.setCaptionEnabled),
        es = (0, y.km)((e) => e.fullScreenEnabled),
        ec = (0, y.km)((e) => e.setFullScreenEnabled),
        { enabled: eu, variant: ed } = _.EO.useConfig({ location: F.dr.VIDEO_MODAL }),
        em = ed === _.m_.OVERLAY_SHARE_ON_VIDEO,
        { focused: ef, focusedChanged: ep } = (0, M.xU)(),
        { visible: ev, visibleChanged: eE, targetRef: eg } = (0, M.Yy)(),
        [eO, eh] = o.useState(!0 === X ? w.rq.PLAYING : w.rq.PAUSED),
        [eb, eC] = o.useState(!1),
        [eS, ey] = o.useState(!1),
        e_ = (0, C.il)(en),
        [ex, ej] = o.useState(e_.percentComplete),
        eD = o.useCallback((e) => {
            eG(null), ej(e);
        }, []),
        [eP, eT] = o.useState(!1),
        [eR, eI] = o.useState(!0),
        [eN, eA] = o.useState(!1),
        [ew, ek] = o.useState([]),
        [eM, eL] = o.useState(g.Z.getEffectiveConnectionSpeed()),
        [eV, eZ] = o.useState(0),
        [eF, eB] = o.useState(0),
        [eH, eU] = o.useState(!1),
        [eq, eQ] = o.useState(!1),
        [eY, eG] = o.useState(null),
        eW = o.useRef(!0),
        ez = o.useRef(null),
        eK = o.useRef(null),
        eX = (0, y.km)((e) => {
            var t;
            return null != (t = e.videoProgress[en.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10,
                  };
        }, s.X),
        eJ = (0, y.km)((e) => e.setVideoProgress),
        e$ = (0, y.km)((e) => e.muted),
        e0 = (0, y.km)((e) => e.volume),
        e1 = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
        e2 = (0, o.useRef)(null),
        e4 = (0, o.useRef)(null),
        e7 = o.useRef(!0),
        e3 = (null == (t = en.userStatus) ? void 0 : t.completedAt) != null,
        [e8, e9] = o.useState(null),
        [e6, e5] = o.useState(!1),
        [te, tt] = o.useState(!1),
        [tn, tr] = o.useState(null),
        to = e3
            ? null != (E = null == (n = e2.current) ? void 0 : n.duration)
                ? E
                : 0
            : Math.max(eX.maxTimestampSec, e_.progressSeconds),
        tl = o.useMemo(
            () =>
                (0, x.T)({
                    quest: en,
                    location: F.dr.VIDEO_MODAL,
                }),
            [en],
        ),
        ti = (0, k.$R)(e3, eX, e_),
        [ta, ts] = o.useState(w._H.MD),
        tc = {
            [w._H.MD]: 50,
            [w._H.LG]: 58,
        };
    (0, f.Ng)(() => {
        e7.current &&
            ((e7.current = !1),
            eL(g.Z.getEffectiveConnectionSpeed()),
            e3 && eX.timestampSec >= eX.duration && eJ(en.id, 0, eX.duration));
    });
    let { videoVariant: tu, videoAsset: td, hlsRef: tm, onFirstChunkLoaded: tf } = (0, L.Z)(e2, eM, ti),
        tp = (0, D.CC)(tu),
        {
            trackQuestVideoLoadingStarted: tv,
            trackQuestVideoLoadingEnded: tE,
            trackQuestVideoProgressed: tg,
            trackQuestVideoResumed: tO,
            trackQuestVideoPaused: th,
            trackQuestVideoFocusChange: tb,
            trackQuestContentClick: tC,
            trackQuestVideoBufferingStarted: tS,
            trackQuestVideoBufferingEnded: ty,
            trackWatchTimeAnalytics: t_,
            trackQuestVideoTimeToFirstFrame: tx,
            trackQuestVideoFullscreenChanged: tj,
            trackQuestVideoError: tD,
            trackQuestVideoVolumeChanged: tP,
        } = (0, V.Z)({
            questId: en.id,
            isQuestCompleted: e3,
            videoRef: e2,
            hlsRef: tm,
            videoSessionId: er,
            videoAssetId: tp,
            sourceQuestContent: et,
            logger: tl,
        });
    (0, Z.Z)({
        videoAssetUrl: null == td ? void 0 : td.url,
        videoRef: e2,
        hlsRef: tm,
        videoVariant: tu,
    });
    let tT = o.useCallback(() => {
            var e, t;
            return null != (t = null == (e = e2.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tR } = (0, j.Z)({
            getCurrentVideoTime: tT,
            isPlaying: eO === w.rq.PLAYING,
            isMetadataLoaded: e6,
            isInitialSeekComplete: te,
            onAnalytics: t_,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000,
        }),
        tI = o.useCallback(
            (e) => {
                if ((tl.info("[QV] | updatePlayerState | playerState: ".concat(e)), eh(e), null != e2.current))
                    switch (e) {
                        case w.rq.PLAYING:
                            e2.current.paused && tO(e8), e9(null), e2.current.play();
                            break;
                        case w.rq.PAUSED:
                            e2.current.paused || tR(), e2.current.pause(), (eW.current = !1);
                            break;
                        case w.rq.ENDED:
                            tR(), el(!1);
                    }
            },
            [tO, e8, tR, el, tl],
        );
    o.useEffect(() => {
        th(e8);
    }, [e8, th]),
        o.useEffect(() => {
            ep && tb(ef, eO);
        }, [ef, ep, eO, tb]);
    let tN = o.useCallback(
        (e) => {
            var t;
            e3 ||
                (null == (t = en.userStatus) ? void 0 : t.enrolledAt) == null ||
                (tl.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, C.FI)(en, e)),
                tg();
        },
        [e3, en, tl, tg],
    );
    o.useEffect(() => {
        (J !== m.Dvm.HIDDEN &&
            J !== m.Dvm.EXITING &&
            J !== m.Dvm.EXITED &&
            (null == J || !eE || ev || e3) &&
            (!ep || ef || e3)) ||
            null == e2.current ||
            eO !== w.rq.PLAYING ||
            (tl.info(
                "[QV] | Pausing video | playerState: "
                    .concat(eO, ", parentTransitionState: ")
                    .concat(J, ", visible: ")
                    .concat(ev, ", focused: ")
                    .concat(ef, ", isQuestCompleted: ")
                    .concat(e3),
            ),
            tI(w.rq.PAUSED),
            e3 || e9(S.yE.LOST_FOCUS));
    }, [J, ef, ep, ev, eE, eO, e3, tI, tN, tl]);
    let [tA, tw] = o.useState(!1),
        tk = o.useRef(null),
        tM = o.useRef(performance.now()),
        tL = o.useCallback(() => {
            null != tk.current && clearTimeout(tk.current),
                eO === w.rq.PLAYING &&
                    (tk.current = setTimeout(
                        () => {
                            eO === w.rq.PLAYING && tw(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tM.current)),
                    ));
        }, [eO]),
        tV = () => {
            tw(!1), (tM.current = performance.now()), tL();
        };
    o.useEffect(() => {
        if (eO !== w.rq.PLAYING) {
            tw(!1), null != tk.current && clearTimeout(tk.current);
            return;
        }
        return (
            tL(),
            () => {
                null != tk.current && clearTimeout(tk.current);
            }
        );
    }, [eO, tL]);
    let tZ = !tA && (eS || eb || eO === w.rq.ENDED),
        tF = o.useCallback(() => {
            var e;
            tl.info("[QV] | handleFullScreenExit");
            let t = (0, O.fn)(null == (e = e2.current) ? void 0 : e.parentNode, e2.current);
            null == t || (0, O.rB)(t) || (t.removeEventListener(O.NO, tF), ec(!1), tj(!1), ts(w._H.MD));
        }, [ec, tl, tj]),
        tB = () => {
            if (null == e2.current) return;
            let e = Math.max(e2.current.currentTime - 10, 0);
            tl.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)),
                tU(e),
                eO === w.rq.ENDED && tI(w.rq.PAUSED),
                tC(S.jn.VIDEO_MODAL, b.jZ.SEEK_BACKWARD);
        },
        tH = () => {
            if (null == e2.current || !t7) return;
            let e = Math.min(e2.current.currentTime + 10, to);
            tl.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)),
                tU(e),
                eO !== w.rq.ENDED && e >= e2.current.duration && tI(w.rq.ENDED),
                tC(S.jn.VIDEO_MODAL, b.jZ.SEEK_FORWARD);
        };
    o.useEffect(() => {
        let e = e2.current;
        return () => {
            let t = (0, O.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(O.NO, tF);
        };
    }, [tF]);
    let tU = o.useCallback(
            (e) => {
                var t;
                null != e2.current &&
                    (tl.info("[QV] | seekTimeline | timeSec: ".concat(e)),
                    eG((e / (null != (t = e2.current.duration) ? t : 1)) * 100),
                    tR(),
                    eT(!0),
                    tt(!1),
                    (e2.current.currentTime = e),
                    eJ(en.id, e, e2.current.duration));
            },
            [e2, eJ, en.id, tR, tl],
        ),
        tq = () => {
            if (null != e2.current)
                switch ((tl.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eO)), eO)) {
                    case w.rq.ENDED:
                        tU(0), tI(w.rq.PLAYING);
                        break;
                    case w.rq.PLAYING:
                        tI(w.rq.PAUSED), e9(S.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tI(w.rq.PLAYING);
                }
        },
        tQ = (e) => {
            tr(e);
        },
        tY = (e) => {
            tr((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tG = o.useCallback(() => {
            if (
                null == e2.current ||
                (tl.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e2.current.textTracks.length)),
                0 === e2.current.textTracks.length)
            )
                return;
            let e = e2.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, k.JC)(n) && ((n.id = "cue-".concat(t)), (n.onenter = () => tQ(n)), (n.onexit = () => tY(n)));
                }
        }, [e2, tl]);
    o.useEffect(() => {
        if (null == e4.current) return;
        let e = e4.current;
        return (
            e.addEventListener("load", tG),
            () => {
                null != e && e.removeEventListener("load", tG);
            }
        );
    }, [e4, tG]);
    let tW = o.useCallback(
            (e) => {
                var t;
                tl.info(
                    "[QV] | logVideoError: errorType: "
                        .concat(e, ", videoProgress: ")
                        .concat(null == (t = e2.current) ? void 0 : t.currentTime, ", videoAssetId: ")
                        .concat(tp, ", connectionSpeed: ")
                        .concat(eM),
                ),
                    tD(e);
            },
            [eM, tD, e2, tp, tl],
        ),
        tz = (e) => {
            tl.info("[QV] | handleCanPlay: playerState: ".concat(eO)),
                null != e2.current &&
                    eO === w.rq.PLAYING &&
                    (tl.info("[QV] | handleCanPlay: did NOT early return"),
                    eR && (tl.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eR)), eI(!1)),
                    eN &&
                        (tl.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eN)),
                        ty(null != eK.current ? performance.now() - eK.current : null),
                        eA(!1)),
                    tl.info("[QV] | handleCanPlay: updating player state to playing"),
                    tI(w.rq.PLAYING));
        };
    o.useEffect(() => {
        if (!eP) return;
        let e = setTimeout(() => {
            eT(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eP]);
    let [{ controlBarAnimSpring: tK }, tX] = (0, m.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: q,
            onStart: () => {
                eQ(!1);
            },
            onRest: (e) => {
                1 === e.value && eQ(!0);
            },
        })),
        tJ = (0, o.useRef)(null),
        [{ captionHeightSpring: t$ }, t0] = (0, m.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: q,
        }));
    o.useEffect(() => {
        var e, t;
        return (
            t0({
                captionHeightSpring:
                    ei && null != tn && null != (t = null == (e = tJ.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: e1,
            }),
            () => {
                t$.stop();
            }
        );
    }, [ei, t0, e1, tn, t$]),
        o.useEffect(
            () => (
                tX({
                    controlBarAnimSpring: tZ || eH ? 1 : 0,
                    immediate: e1,
                }),
                () => {
                    tK.stop();
                }
            ),
            [tZ, tX, e1, eH, tK],
        );
    let t1 = eO === w.rq.ENDED,
        t2 = o.useMemo(() => (0, D.z0)(en, c.X.WATCH_VIDEO, D.n1.VIDEO, D.O.THUMBNAIL), [en]),
        t4 = o.useMemo(() => (0, D.z0)(en, c.X.WATCH_VIDEO, D.n1.VIDEO, D.O.CAPTION), [en]),
        t7 = e3 || eX.maxTimestampSec >= (null != (H = null == (l = e2.current) ? void 0 : l.currentTime) ? H : 0) + 1,
        t3 = o.useMemo(() => null === (0, D.z0)(en, c.X.WATCH_VIDEO, D.n1.VIDEO, D.O.TRANSCRIPT), [en]),
        t8 = eu
            ? {}
            : {
                  paddingLeft: (0, a.to)(
                      [
                          tK.to({
                              range: [0, 1],
                              output: [0, 25],
                          }),
                      ],
                      (e) => "".concat(e, "px"),
                  ),
                  paddingRight: (0, a.to)(
                      [
                          tK.to({
                              range: [0, 1],
                              output: [0, 25],
                          }),
                      ],
                      (e) => "".concat(e, "px"),
                  ),
              };
    return (0, r.jsx)(m.P3F, {
        className: i()(U.videoCont, { [U.videoContRoundedCorners]: eu }),
        "data-fullscreen": es,
        tabIndex: -1,
        onMouseEnter: () => {
            eC(!0), tw(!1), (tM.current = performance.now()), null != tk.current && clearTimeout(tk.current);
        },
        onMouseLeave: () => {
            eC(!1), tw(!1);
        },
        onMouseMove: tV,
        onKeyDown: tV,
        children: (0, r.jsxs)("div", {
            className: i()(U.videoContInnerRelative, {
                [U.videoContInnerRelativePortrait]: "portrait" === ee,
                [U.videoContInnerRelativeLandscape]: "landscape" === ee,
            }),
            children: [
                t1 &&
                    (0, r.jsx)(T.Z, {
                        videoRef: e2,
                        onExitFullScreen: tF,
                        onTrackQuestVideoFullscreenChanged: tj,
                        onTrackQuestContentClick: tC,
                    }),
                (0, r.jsxs)(v.Z, {
                    ref: (e) => {
                        (e2.current = e), (eg.current = e);
                    },
                    autoPlay: X,
                    playsInline: !0,
                    mediaLayoutType: es ? B.hV.STATIC : B.hV.RESPONSIVE,
                    className: i()({
                        [U.hidden]: t1,
                        [U.videoInner]: !0,
                    }),
                    controls: !1,
                    poster: null == t2 ? void 0 : t2.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e2.current &&
                            (e2.current.currentTime >= eV &&
                                (tl.info(
                                    "[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(
                                        e2.current.currentTime,
                                    ),
                                ),
                                eZ(e2.current.currentTime + 6 + 2 * Math.random()),
                                tN(e2.current.currentTime)),
                            e2.current.currentTime >= eF &&
                                (eB(e2.current.currentTime + 1),
                                (0, h.qm)(en.id, e_.taskType, e2.current.currentTime),
                                K(e2.current.currentTime)),
                            eJ(en.id, e2.current.currentTime, e2.current.duration),
                            eD((e2.current.currentTime / e2.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != e2.current &&
                            (tN(e2.current.duration + 1),
                            tl.info("[QV] | handleEnded: sending progress update: ".concat(e2.current.duration + 1)),
                            eJ(en.id, e2.current.duration, e2.current.duration)),
                            tI(w.rq.ENDED),
                            eA(!1);
                    },
                    onLoadedData: (e) => {
                        tl.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eR)),
                            eR && (tE(null != ez.current ? performance.now() - ez.current : null), eI(!1), tf());
                    },
                    onLoadedMetadata: (e) => {
                        null != e2.current &&
                            (tl.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tp)),
                            e5(!0),
                            tu !== D.n1.VIDEO_HLS && tU(ti),
                            e$ ? (e2.current.volume = 0) : (e2.current.volume = e0));
                    },
                    onLoadStart: () => {
                        (ez.current = performance.now()),
                            tv(eM),
                            tl.info("[QV] | handleLoadStart | loadingStartTime: ".concat(ez.current));
                    },
                    onPlaying: () => {
                        if (!eW.current) return;
                        let e = performance.now() - $;
                        tl.info("[QV] | \u23F0 Video FCP: ".concat(e, "ms")), tx(e), (eW.current = !1);
                    },
                    onWaiting: (e) => {
                        (eK.current = performance.now()),
                            tl.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eK.current)),
                            tS(),
                            eA(!0);
                    },
                    onProgress: (e) => {
                        if (null == e2.current) return;
                        tl.info(
                            "[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e2.current.buffered.length),
                        );
                        let t = [];
                        for (let e = 0; e < e2.current.buffered.length; e++) {
                            let n = e2.current.buffered.start(e),
                                r = e2.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / e2.current.duration,
                                    size: (r - n) / e2.current.duration,
                                });
                        }
                        ek(t);
                    },
                    onCanPlay: tz,
                    onCanPlayThrough: tz,
                    onSeeked: () => {
                        tl.info("[QV] | handleSeeked"), tt(!0);
                    },
                    onAbort: () => tW(w.CY.ABORT),
                    onError: () => tW(w.CY.ERROR),
                    onEmptied: () => tW(w.CY.EMPTIED),
                    onStalled: () => tW(w.CY.STALLED),
                    onClick: () => {
                        tl.info("[QV] | handleVideoClick"), tq();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != t4 &&
                            (0, r.jsx)("track", {
                                ref: e4,
                                src: t4.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != td &&
                            tu !== D.n1.VIDEO_HLS &&
                            (0, r.jsx)("source", {
                                onError: () => tW(w.CY.SOURCE_ERROR),
                                src: td.url,
                                type: td.mimetype,
                            }),
                    ],
                }),
                (eR || eN) &&
                    eO === w.rq.PLAYING &&
                    (0, r.jsx)(m.$jN, {
                        type: m.$jN.Type.WANDERING_CUBES,
                        className: U.loadingSpinner,
                    }),
                eO === w.rq.PAUSED && e8 === S.yE.LOST_FOCUS && (0, r.jsx)(Q, {}),
                em &&
                    (0, r.jsx)(a.animated.div, {
                        className: U.floatingShareButtonContainer,
                        style: {
                            opacity: (0, a.to)(
                                [
                                    tK.to({
                                        range: [0, 1],
                                        output: [0, 1],
                                    }),
                                ],
                                (e) => "".concat(e),
                            ),
                        },
                        children: (0, r.jsx)(I.Z, {}),
                    }),
                eo &&
                    eO !== w.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.P3F, {
                                onClick: () => {
                                    eO === w.rq.PAUSED && tI(w.rq.PLAYING), el(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: U.transcriptOverlay }),
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: i()(U.transcriptCont, { [U.transcriptContPortrait]: "portrait" === ee }),
                                style: {
                                    marginBottom: (0, a.to)([tK, t$], (e, t) => "".concat(e * tc[ta] + t, "px")),
                                },
                                children: (0, r.jsx)(A.E, {
                                    quest: en,
                                    onClose: () => {
                                        el(!1), tC(S.jn.VIDEO_MODAL, b.jZ.TRANSCRIPT_DISABLE);
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
                                tK.to({
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
                            [U.play]: eO === w.rq.PLAYING,
                            [U.pause]: eO === w.rq.PAUSED,
                        }),
                        children:
                            eO === w.rq.PLAYING
                                ? (0, r.jsx)(m.o1U, { className: U.playPausePopIcon })
                                : (0, r.jsx)(m.fpf, { className: U.playPausePopIcon }),
                    },
                    eO,
                ),
                ei &&
                    null != tn &&
                    !t1 &&
                    (0, r.jsx)(a.animated.div, {
                        className: U.captionContainer,
                        ref: tJ,
                        style: {
                            translateY: (0, a.to)(
                                [
                                    tK.to({
                                        range: [0, 1],
                                        output: [0, -tc[ta]],
                                    }),
                                ],
                                (e) => "".concat(e, "px"),
                            ),
                        },
                        children: (0, r.jsx)(m.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: U.captionText,
                            children: tn.text,
                        }),
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: U.videoFooterCont,
                    style:
                        ((G = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, t8)),
                        (W = W =
                            {
                                paddingInline: 16 * !!eu,
                                height: (0, a.to)(
                                    [
                                        tK.to({
                                            range: [0, 1],
                                            output: [0, tc[ta]],
                                        }),
                                    ],
                                    (e) => "".concat(e, "px"),
                                ),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(G, Object.getOwnPropertyDescriptors(W))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(W)).forEach(function (e) {
                                  Object.defineProperty(G, e, Object.getOwnPropertyDescriptor(W, e));
                              }),
                        G),
                    children: [
                        (0, r.jsx)(N.Z, {
                            percent: null != eY ? eY : ex,
                            animate: !0 !== e7.current && !eP,
                            interactionEnabled: e3 && eq,
                            backgroundColor: tZ ? void 0 : "rgba(0, 0, 0, 0.0)",
                            preloadedBuffers: tZ ? ew : void 0,
                            duration: null != (Y = null == (d = e2.current) ? void 0 : d.duration) ? Y : 1,
                            maxSeekableTime: tZ && eq ? to : void 0,
                            onClick: (e) => {
                                tU(e), eO === w.rq.ENDED && tI(w.rq.PLAYING);
                            },
                            onScrubBack: tB,
                            rounded: eu,
                            onScrubForward: tH,
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: U.videoControlsCont,
                            style: {
                                paddingTop: (0, a.to)(
                                    [
                                        tK.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                paddingBottom: (0, a.to)(
                                    [
                                        tK.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                pointerEvents: (0, a.to)(
                                    [
                                        tK.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => (e < 0.3 ? "none" : "auto"),
                                ),
                            },
                            onFocus: () => ey(!0),
                            onBlur: () => ey(!1),
                            children: (0, r.jsx)(P.Z, {
                                videoRef: e2,
                                videoTask: z,
                                playerState: eO,
                                animSpring: tK,
                                visible: tZ,
                                seekForwardEnabled: t7,
                                hideCaptionBtn: null == t4,
                                hideTranscriptBtn: t3,
                                size: ta,
                                handlePlaybackBtnClick: tq,
                                handleTranscriptBtnClick: () => {
                                    el(!eo),
                                        tC(S.jn.VIDEO_MODAL, eo ? b.jZ.TRANSCRIPT_DISABLE : b.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    ea(!ei),
                                        tC(
                                            S.jn.VIDEO_MODAL,
                                            ei ? b.jZ.CLOSED_CAPTIONING_DISABLE : b.jZ.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !es;
                                    tl.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
                                    let n = (0, O.fn)(null == (e = e2.current) ? void 0 : e.parentNode, e2.current);
                                    t && null != n
                                        ? ((0, O.Dj)(n), n.addEventListener(O.NO, tF), tj(!0), ts(w._H.LG))
                                        : t ||
                                          null == n ||
                                          (n.removeEventListener(O.NO, tF), tj(!1), (0, O.Pr)(n), ts(w._H.MD)),
                                        ec(t);
                                },
                                handleSeekBackBtnClick: tB,
                                handleSeekForwardBtnClick: tH,
                                handleControlBarPendingInteraction: eU,
                                onVolumeChange: tP,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
