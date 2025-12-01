n.d(t, { Z: () => Q }), n(388685), n(539854);
var r = n(54381),
    o = n(473749),
    l = n(120356),
    i = n.n(l),
    a = n(666917),
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
    O = n(22095),
    h = n(617136),
    b = n(49436),
    C = n(509212),
    S = n(184299),
    _ = n(937797),
    y = n(535584),
    x = n(550235),
    j = n(475595),
    P = n(542347),
    D = n(922826),
    R = n(104800),
    T = n(215113),
    I = n(449788),
    N = n(508067),
    A = n(890193),
    w = n(325916),
    k = n(939389),
    L = n(267322),
    M = n(70417),
    V = n(934703),
    Z = n(981786),
    F = n(324805),
    B = n(217702),
    U = n(388032),
    q = n(273339);
let Y = {
    tension: 250,
    friction: 5,
    clamp: !0,
};
function H() {
    let e = (0, c.e7)([v.Z], () => v.Z.getState().theme);
    return (0, r.jsx)("div", {
        className: q.pauseText,
        style: { background: (0, u.wj)(e) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
        children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: U.intl.string(U.t["U7Xrb+"]),
        }),
    });
}
function Q(e) {
    var t, n, l, u, v, U, Q, G, K;
    let {
            videoTask: W,
            onOptimisticProgressUpdate: z,
            autoplay: X,
            parentTransitionState: J,
            performanceClockStartTime: $,
            orientation: ee,
        } = e,
        { sourceQuestContent: et, quest: en, videoSessionId: er } = o.useContext(T.VideoQuestModalContext),
        eo = (0, S.km)((e) => e.transcriptEnabled),
        el = (0, S.km)((e) => e.setTranscriptEnabled),
        ei = (0, S.km)((e) => e.captionEnabled),
        ea = (0, S.km)((e) => e.setCaptionEnabled),
        es = (0, S.km)((e) => e.fullScreenEnabled),
        ec = (0, S.km)((e) => e.setFullScreenEnabled),
        { enabled: eu, variant: ed } = _.EO.useConfig({ location: F.dr.VIDEO_MODAL }),
        em = ed === _.m_.OVERLAY_SHARE_ON_VIDEO,
        { focused: ef, focusedChanged: ep } = (0, L.xU)(),
        { visible: ev, visibleChanged: eE, targetRef: eg } = (0, L.Yy)(),
        [eO, eh] = o.useState(!0 === X ? w.rq.PLAYING : w.rq.PAUSED),
        [eb, eC] = o.useState(!1),
        [eS, e_] = o.useState(!1),
        ey = (0, C.il)(en),
        [ex, ej] = o.useState(ey.percentComplete),
        eP = o.useCallback((e) => {
            eG(null), ej(e);
        }, []),
        [eD, eR] = o.useState(!1),
        [eT, eI] = o.useState(!0),
        [eN, eA] = o.useState(!1),
        [ew, ek] = o.useState([]),
        [eL, eM] = o.useState(E.Z.getEffectiveConnectionSpeed()),
        [eV, eZ] = o.useState(0),
        [eF, eB] = o.useState(0),
        [eU, eq] = o.useState(!1),
        [eY, eH] = o.useState(!1),
        [eQ, eG] = o.useState(null),
        eK = o.useRef(!0),
        eW = o.useRef(null),
        ez = o.useRef(null),
        eX = (0, S.km)((e) => {
            var t;
            return null != (t = e.videoProgress[en.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10,
                  };
        }, s.X),
        eJ = (0, S.km)((e) => e.setVideoProgress),
        e$ = (0, S.km)((e) => e.muted),
        e0 = (0, S.km)((e) => e.volume),
        e1 = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        e2 = (0, o.useRef)(null),
        e3 = (0, o.useRef)(null),
        e4 = o.useRef(!0),
        e8 = (null == (t = en.userStatus) ? void 0 : t.completedAt) != null,
        [e7, e9] = o.useState(null),
        [e6, e5] = o.useState(!1),
        [te, tt] = o.useState(!1),
        [tn, tr] = o.useState(null),
        to = e8
            ? null != (v = null == (n = e2.current) ? void 0 : n.duration)
                ? v
                : 0
            : Math.max(eX.maxTimestampSec, ey.progressSeconds),
        tl = o.useMemo(
            () =>
                (0, y.T)({
                    quest: en,
                    location: F.dr.VIDEO_MODAL,
                }),
            [en],
        ),
        ti = (0, k.$R)(e8, eX, ey),
        [ta, ts] = o.useState(w._H.MD),
        tc = {
            [w._H.MD]: 50,
            [w._H.LG]: 58,
        };
    (0, m.Ng)(() => {
        e4.current &&
            ((e4.current = !1),
            eM(E.Z.getEffectiveConnectionSpeed()),
            e8 && eX.timestampSec >= eX.duration && eJ(en.id, 0, eX.duration));
    });
    let { videoAsset: tu, videoAssetType: td, hlsRef: tm, onFirstChunkLoaded: tf } = (0, M.Z)(e2, eL, ti),
        {
            trackQuestVideoLoadingStarted: tp,
            trackQuestVideoLoadingEnded: tv,
            trackQuestVideoProgressed: tE,
            trackQuestVideoResumed: tg,
            trackQuestVideoPaused: tO,
            trackQuestVideoFocusChange: th,
            trackQuestContentClick: tb,
            trackQuestVideoBufferingStarted: tC,
            trackQuestVideoBufferingEnded: tS,
            trackWatchTimeAnalytics: t_,
            trackQuestVideoTimeToFirstFrame: ty,
            trackQuestVideoFullscreenChanged: tx,
            trackQuestVideoError: tj,
            trackQuestVideoVolumeChanged: tP,
        } = (0, V.Z)({
            questId: en.id,
            isQuestCompleted: e8,
            videoRef: e2,
            hlsRef: tm,
            videoSessionId: er,
            videoAssetId: td,
            sourceQuestContent: et,
            logger: tl,
        });
    (0, Z.Z)({
        videoAssetUrl: null == tu ? void 0 : tu.url,
        videoRef: e2,
        hlsRef: tm,
        videoAssetType: td,
    });
    let tD = o.useCallback(() => {
            var e, t;
            return null != (t = null == (e = e2.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tR } = (0, x.Z)({
            getCurrentVideoTime: tD,
            isPlaying: eO === w.rq.PLAYING,
            isMetadataLoaded: e6,
            isInitialSeekComplete: te,
            onAnalytics: t_,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000,
        }),
        tT = o.useCallback(
            (e) => {
                if ((tl.info("[QV] | updatePlayerState | playerState: ".concat(e)), eh(e), null != e2.current))
                    switch (e) {
                        case w.rq.PLAYING:
                            e2.current.paused && tg(e7), e9(null), e2.current.play();
                            break;
                        case w.rq.PAUSED:
                            e2.current.paused || tR(), e2.current.pause(), (eK.current = !1);
                            break;
                        case w.rq.ENDED:
                            tR(), el(!1);
                    }
            },
            [tg, e7, tR, el, tl],
        );
    o.useEffect(() => {
        tO(e7);
    }, [e7, tO]),
        o.useEffect(() => {
            ep && th(ef, eO);
        }, [ef, ep, eO, th]);
    let tI = o.useCallback(
        (e) => {
            var t;
            e8 ||
                (null == (t = en.userStatus) ? void 0 : t.enrolledAt) == null ||
                (tl.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, P.FI)(en, e)),
                tE();
        },
        [e8, en, tl, tE],
    );
    o.useEffect(() => {
        (J !== d.Dvm.HIDDEN &&
            J !== d.Dvm.EXITING &&
            J !== d.Dvm.EXITED &&
            (null == J || !eE || ev || e8) &&
            (!ep || ef || e8)) ||
            null == e2.current ||
            eO !== w.rq.PLAYING ||
            (tl.info(
                "[QV] | Pausing video | playerState: "
                    .concat(eO, ", parentTransitionState: ")
                    .concat(J, ", visible: ")
                    .concat(ev, ", focused: ")
                    .concat(ef, ", isQuestCompleted: ")
                    .concat(e8),
            ),
            tT(w.rq.PAUSED),
            e8 || e9(b.yE.LOST_FOCUS));
    }, [J, ef, ep, ev, eE, eO, e8, tT, tI, tl]);
    let [tN, tA] = o.useState(!1),
        tw = o.useRef(null),
        tk = o.useRef(performance.now()),
        tL = o.useCallback(() => {
            null != tw.current && clearTimeout(tw.current),
                eO === w.rq.PLAYING &&
                    (tw.current = setTimeout(
                        () => {
                            eO === w.rq.PLAYING && tA(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tk.current)),
                    ));
        }, [eO]),
        tM = () => {
            tA(!1), (tk.current = performance.now()), tL();
        };
    o.useEffect(() => {
        if (eO !== w.rq.PLAYING) {
            tA(!1), null != tw.current && clearTimeout(tw.current);
            return;
        }
        return (
            tL(),
            () => {
                null != tw.current && clearTimeout(tw.current);
            }
        );
    }, [eO, tL]);
    let tV = !tN && (eS || eb || eO === w.rq.ENDED),
        tZ = o.useCallback(() => {
            var e;
            tl.info("[QV] | handleFullScreenExit");
            let t = (0, g.fn)(null == (e = e2.current) ? void 0 : e.parentNode, e2.current);
            null == t || (0, g.rB)(t) || (t.removeEventListener(g.NO, tZ), ec(!1), tx(!1), ts(w._H.MD));
        }, [ec, tl, tx]),
        tF = () => {
            if (null == e2.current) return;
            let e = Math.max(e2.current.currentTime - 10, 0);
            tl.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)),
                tU(e),
                eO === w.rq.ENDED && tT(w.rq.PAUSED),
                tb(b.jn.VIDEO_MODAL, h.jZ.SEEK_BACKWARD);
        },
        tB = () => {
            if (null == e2.current || !t3) return;
            let e = Math.min(e2.current.currentTime + 10, to);
            tl.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)),
                tU(e),
                eO !== w.rq.ENDED && e >= e2.current.duration && tT(w.rq.ENDED),
                tb(b.jn.VIDEO_MODAL, h.jZ.SEEK_FORWARD);
        };
    o.useEffect(() => {
        let e = e2.current;
        return () => {
            let t = (0, g.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(g.NO, tZ);
        };
    }, [tZ]);
    let tU = o.useCallback(
            (e) => {
                var t;
                null != e2.current &&
                    (tl.info("[QV] | seekTimeline | timeSec: ".concat(e)),
                    eG((e / (null != (t = e2.current.duration) ? t : 1)) * 100),
                    tR(),
                    eR(!0),
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
                        tU(0), tT(w.rq.PLAYING);
                        break;
                    case w.rq.PLAYING:
                        tT(w.rq.PAUSED), e9(b.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tT(w.rq.PLAYING);
                }
        },
        tY = (e) => {
            tr(e);
        },
        tH = (e) => {
            tr((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tQ = o.useCallback(() => {
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
                    (0, k.JC)(n) && ((n.id = "cue-".concat(t)), (n.onenter = () => tY(n)), (n.onexit = () => tH(n)));
                }
        }, [e2, tl]);
    o.useEffect(() => {
        if (null == e3.current) return;
        let e = e3.current;
        return (
            e.addEventListener("load", tQ),
            () => {
                null != e && e.removeEventListener("load", tQ);
            }
        );
    }, [e3, tQ]);
    let tG = o.useCallback(
            (e) => {
                var t;
                tl.info(
                    "[QV] | logVideoError: errorType: "
                        .concat(e, ", videoProgress: ")
                        .concat(null == (t = e2.current) ? void 0 : t.currentTime, ", videoAssetId: ")
                        .concat(td, ", connectionSpeed: ")
                        .concat(eL),
                ),
                    tj(e);
            },
            [eL, tj, e2, td, tl],
        ),
        tK = (e) => {
            tl.info("[QV] | handleCanPlay: playerState: ".concat(eO)),
                null != e2.current &&
                    eO === w.rq.PLAYING &&
                    (tl.info("[QV] | handleCanPlay: did NOT early return"),
                    eT && (tl.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eT)), eI(!1)),
                    eN &&
                        (tl.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eN)),
                        tS(null != ez.current ? performance.now() - ez.current : null),
                        eA(!1)),
                    tl.info("[QV] | handleCanPlay: updating player state to playing"),
                    tT(w.rq.PLAYING));
        };
    o.useEffect(() => {
        if (!eD) return;
        let e = setTimeout(() => {
            eR(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eD]);
    let [{ controlBarAnimSpring: tW }, tz] = (0, d.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: Y,
            onStart: () => {
                eH(!1);
            },
            onRest: (e) => {
                1 === e.value && eH(!0);
            },
        })),
        tX = (0, o.useRef)(null),
        [{ captionHeightSpring: tJ }, t$] = (0, d.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: Y,
        }));
    o.useEffect(() => {
        var e, t;
        return (
            t$({
                captionHeightSpring:
                    ei && null != tn && null != (t = null == (e = tX.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: e1,
            }),
            () => {
                tJ.stop();
            }
        );
    }, [ei, t$, e1, tn, tJ]),
        o.useEffect(
            () => (
                tz({
                    controlBarAnimSpring: tV || eU ? 1 : 0,
                    immediate: e1,
                }),
                () => {
                    tW.stop();
                }
            ),
            [tV, tz, e1, eU, tW],
        );
    let t0 = eO === w.rq.ENDED,
        t1 = o.useMemo(() => (0, j.fh)(en, j.eC.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [en]),
        t2 = o.useMemo(() => (0, j.fh)(en, j.eC.VIDEO_PLAYER_CAPTION, void 0, !1), [en]),
        t3 = e8 || eX.maxTimestampSec >= (null != (U = null == (l = e2.current) ? void 0 : l.currentTime) ? U : 0) + 1,
        t4 = o.useMemo(() => null === (0, j.fh)(en, j.eC.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [en]),
        t8 = eu
            ? {}
            : {
                  paddingLeft: (0, a.to)(
                      [
                          tW.to({
                              range: [0, 1],
                              output: [0, 25],
                          }),
                      ],
                      (e) => "".concat(e, "px"),
                  ),
                  paddingRight: (0, a.to)(
                      [
                          tW.to({
                              range: [0, 1],
                              output: [0, 25],
                          }),
                      ],
                      (e) => "".concat(e, "px"),
                  ),
              };
    return (0, r.jsx)(d.P3F, {
        className: i()(q.videoCont, { [q.videoContRoundedCorners]: eu }),
        "data-fullscreen": es,
        tabIndex: -1,
        onMouseEnter: () => {
            eC(!0), tA(!1), (tk.current = performance.now()), null != tw.current && clearTimeout(tw.current);
        },
        onMouseLeave: () => {
            eC(!1), tA(!1);
        },
        onMouseMove: tM,
        onKeyDown: tM,
        children: (0, r.jsxs)("div", {
            className: i()(q.videoContInnerRelative, {
                [q.videoContInnerRelativePortrait]: "portrait" === ee,
                [q.videoContInnerRelativeLandscape]: "landscape" === ee,
            }),
            children: [
                t0 &&
                    (0, r.jsx)(R.Z, {
                        videoRef: e2,
                        onExitFullScreen: tZ,
                        onTrackQuestVideoFullscreenChanged: tx,
                        onTrackQuestContentClick: tb,
                    }),
                (0, r.jsxs)(p.Z, {
                    ref: (e) => {
                        (e2.current = e), (eg.current = e);
                    },
                    autoPlay: X,
                    playsInline: !0,
                    mediaLayoutType: es ? B.hV.STATIC : B.hV.RESPONSIVE,
                    className: i()({
                        [q.hidden]: t0,
                        [q.videoInner]: !0,
                    }),
                    controls: !1,
                    poster: null == t1 ? void 0 : t1.url,
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
                                tI(e2.current.currentTime)),
                            e2.current.currentTime >= eF &&
                                (eB(e2.current.currentTime + 1),
                                (0, O.qm)(en.id, ey.taskType, e2.current.currentTime),
                                z(e2.current.currentTime)),
                            eJ(en.id, e2.current.currentTime, e2.current.duration),
                            eP((e2.current.currentTime / e2.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != e2.current &&
                            (tI(e2.current.duration + 1),
                            tl.info("[QV] | handleEnded: sending progress update: ".concat(e2.current.duration + 1)),
                            eJ(en.id, e2.current.duration, e2.current.duration)),
                            tT(w.rq.ENDED),
                            eA(!1);
                    },
                    onLoadedData: (e) => {
                        tl.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eT)),
                            eT && (tv(null != eW.current ? performance.now() - eW.current : null), eI(!1), tf());
                    },
                    onLoadedMetadata: (e) => {
                        null != e2.current &&
                            (tl.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(td)),
                            e5(!0),
                            td !== j.eC.VIDEO_PLAYER_VIDEO_HLS && tU(ti),
                            e$ ? (e2.current.volume = 0) : (e2.current.volume = e0));
                    },
                    onLoadStart: () => {
                        (eW.current = performance.now()),
                            tp(eL),
                            tl.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eW.current));
                    },
                    onPlaying: () => {
                        if (!eK.current) return;
                        let e = performance.now() - $;
                        tl.info("[QV] | \u23F0 Video FCP: ".concat(e, "ms")), ty(e), (eK.current = !1);
                    },
                    onWaiting: (e) => {
                        (ez.current = performance.now()),
                            tl.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(ez.current)),
                            tC(),
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
                    onCanPlay: tK,
                    onCanPlayThrough: tK,
                    onSeeked: () => {
                        tl.info("[QV] | handleSeeked"), tt(!0);
                    },
                    onAbort: () => tG(w.CY.ABORT),
                    onError: () => tG(w.CY.ERROR),
                    onEmptied: () => tG(w.CY.EMPTIED),
                    onStalled: () => tG(w.CY.STALLED),
                    onClick: () => {
                        tl.info("[QV] | handleVideoClick"), tq();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != t2 &&
                            (0, r.jsx)("track", {
                                ref: e3,
                                src: t2.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != tu &&
                            td !== j.eC.VIDEO_PLAYER_VIDEO_HLS &&
                            null != tu.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tG(w.CY.SOURCE_ERROR),
                                src: tu.url,
                                type: tu.mimetype,
                            }),
                    ],
                }),
                (eT || eN) &&
                    eO === w.rq.PLAYING &&
                    (0, r.jsx)(d.$jN, {
                        type: d.$jN.Type.WANDERING_CUBES,
                        className: q.loadingSpinner,
                    }),
                eO === w.rq.PAUSED && e7 === b.yE.LOST_FOCUS && (0, r.jsx)(H, {}),
                em &&
                    (0, r.jsx)(a.animated.div, {
                        className: q.floatingShareButtonContainer,
                        style: {
                            opacity: (0, a.to)(
                                [
                                    tW.to({
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
                            (0, r.jsx)(d.P3F, {
                                onClick: () => {
                                    eO === w.rq.PAUSED && tT(w.rq.PLAYING), el(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: q.transcriptOverlay }),
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: i()(q.transcriptCont, { [q.transcriptContPortrait]: "portrait" === ee }),
                                style: {
                                    marginBottom: (0, a.to)([tW, tJ], (e, t) => "".concat(e * tc[ta] + t, "px")),
                                },
                                children: (0, r.jsx)(A.E, {
                                    quest: en,
                                    onClose: () => {
                                        el(!1), tb(b.jn.VIDEO_MODAL, h.jZ.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(a.animated.div, {
                    className: q.videoFooterContGradient,
                    style: {
                        opacity: (0, a.to)(
                            [
                                tW.to({
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
                        className: i()(q.playPausePopCont, {
                            [q.play]: eO === w.rq.PLAYING,
                            [q.pause]: eO === w.rq.PAUSED,
                        }),
                        children:
                            eO === w.rq.PLAYING
                                ? (0, r.jsx)(d.o1U, { className: q.playPausePopIcon })
                                : (0, r.jsx)(d.fpf, { className: q.playPausePopIcon }),
                    },
                    eO,
                ),
                ei &&
                    null != tn &&
                    !t0 &&
                    (0, r.jsx)(a.animated.div, {
                        className: q.captionContainer,
                        ref: tX,
                        style: {
                            translateY: (0, a.to)(
                                [
                                    tW.to({
                                        range: [0, 1],
                                        output: [0, -tc[ta]],
                                    }),
                                ],
                                (e) => "".concat(e, "px"),
                            ),
                        },
                        children: (0, r.jsx)(d.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: q.captionText,
                            children: tn.text,
                        }),
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: q.videoFooterCont,
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
                        (K = K =
                            {
                                paddingInline: 16 * !!eu,
                                height: (0, a.to)(
                                    [
                                        tW.to({
                                            range: [0, 1],
                                            output: [0, tc[ta]],
                                        }),
                                    ],
                                    (e) => "".concat(e, "px"),
                                ),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(G, Object.getOwnPropertyDescriptors(K))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(K)).forEach(function (e) {
                                  Object.defineProperty(G, e, Object.getOwnPropertyDescriptor(K, e));
                              }),
                        G),
                    children: [
                        (0, r.jsx)(N.Z, {
                            percent: null != eQ ? eQ : ex,
                            animate: !0 !== e4.current && !eD,
                            interactionEnabled: e8 && eY,
                            backgroundColor: tV ? void 0 : "rgba(0, 0, 0, 0.0)",
                            preloadedBuffers: tV ? ew : void 0,
                            duration: null != (Q = null == (u = e2.current) ? void 0 : u.duration) ? Q : 1,
                            maxSeekableTime: tV && eY ? to : void 0,
                            onClick: (e) => {
                                tU(e), eO === w.rq.ENDED && tT(w.rq.PLAYING);
                            },
                            onScrubBack: tF,
                            rounded: eu,
                            onScrubForward: tB,
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: q.videoControlsCont,
                            style: {
                                paddingTop: (0, a.to)(
                                    [
                                        tW.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                paddingBottom: (0, a.to)(
                                    [
                                        tW.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                pointerEvents: (0, a.to)(
                                    [
                                        tW.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => (e < 0.3 ? "none" : "auto"),
                                ),
                            },
                            onFocus: () => e_(!0),
                            onBlur: () => e_(!1),
                            children: (0, r.jsx)(D.Z, {
                                videoRef: e2,
                                videoTask: W,
                                playerState: eO,
                                animSpring: tW,
                                visible: tV,
                                seekForwardEnabled: t3,
                                hideCaptionBtn: null == t2,
                                hideTranscriptBtn: t4,
                                size: ta,
                                handlePlaybackBtnClick: tq,
                                handleTranscriptBtnClick: () => {
                                    el(!eo),
                                        tb(b.jn.VIDEO_MODAL, eo ? h.jZ.TRANSCRIPT_DISABLE : h.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    ea(!ei),
                                        tb(
                                            b.jn.VIDEO_MODAL,
                                            ei ? h.jZ.CLOSED_CAPTIONING_DISABLE : h.jZ.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !es;
                                    tl.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
                                    let n = (0, g.fn)(null == (e = e2.current) ? void 0 : e.parentNode, e2.current);
                                    t && null != n
                                        ? ((0, g.Dj)(n), n.addEventListener(g.NO, tZ), tx(!0), ts(w._H.LG))
                                        : t ||
                                          null == n ||
                                          (n.removeEventListener(g.NO, tZ), tx(!1), (0, g.Pr)(n), ts(w._H.MD)),
                                        ec(t);
                                },
                                handleSeekBackBtnClick: tF,
                                handleSeekForwardBtnClick: tB,
                                handleControlBarPendingInteraction: eq,
                                onVolumeChange: tP,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
