n.d(t, { Z: () => $ }), n(388685), n(539854);
var r = n(54381),
    o = n(473749),
    l = n(120356),
    i = n.n(l),
    a = n(713447),
    s = n(790519),
    c = n(55160),
    u = n(754700),
    d = n(442837),
    m = n(780384),
    p = n(481060),
    f = n(493773),
    v = n(607070),
    E = n(70097),
    g = n(210887),
    O = n(707903),
    h = n(866960),
    b = n(228488),
    S = n(22095),
    y = n(617136),
    C = n(509212),
    _ = n(497505),
    x = n(184299),
    j = n(937797),
    D = n(347382),
    P = n(5881),
    T = n(550235),
    R = n(720293),
    I = n(602667),
    N = n(922826),
    A = n(215113),
    w = n(449788),
    k = n(508067),
    L = n(890193),
    M = n(325916),
    V = n(939389),
    Z = n(874010),
    F = n(267322),
    B = n(934703),
    H = n(684245),
    U = n(46140),
    q = n(981631),
    Y = n(217702),
    G = n(388032),
    Q = n(273339);
let W = new Set([q.IyS.FIVE_G, q.IyS.FOUR_G, q.IyS.UNKNOWN]),
    z = {
        tension: 250,
        friction: 5,
        clamp: !0,
    };
function K() {
    let e = (0, d.e7)([g.Z], () => g.Z.getState().theme);
    return (0, r.jsx)("div", {
        className: Q.pauseText,
        style: { background: (0, m.wj)(e) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
        children: (0, r.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: G.intl.string(G.t["U7Xrb+"]),
        }),
    });
}
function X(e) {
    let { quest: t, shouldShow: n, sourceQuestContent: l } = e,
        a = o.useMemo(() => (0, R.z0)(t, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.THUMBNAIL), [t]);
    return null == a
        ? null
        : (0, r.jsx)(I.A, {
              questOrQuests: t,
              questContent: _.jn.VIDEO_MODAL_END_CARD,
              sourceQuestContent: l,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: a.url,
                      alt: "Video thumbnail",
                      className: i()(Q.stillFrameImageCard, { [Q.stillFrameImageCardHidden]: !n }),
                  }),
          });
}
function J(e) {
    let { title: t, subtitle: n, icon: l, onClick: a, className: s } = e,
        [c, u] = o.useState(!1),
        d = () => {
            u(!0);
        },
        m = () => {
            u(!1);
        };
    return (0, r.jsx)(p.P3F, {
        className: i()(Q.endScreenPanel, Q.accentOnHover, s),
        onMouseEnter: d,
        onMouseLeave: m,
        onFocus: d,
        onBlur: m,
        onClick: a,
        children: (0, r.jsxs)("div", {
            className: Q.endScreenPanelInner,
            children: [
                (0, r.jsxs)("div", {
                    className: Q.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(p.Heading, {
                            variant: "heading-md/semibold",
                            className: Q.endScreenPanelTextTitle,
                            children: t,
                        }),
                        (0, r.jsx)(p.Heading, {
                            variant: "heading-sm/normal",
                            className: Q.endScreenPanelTextSubtitle,
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)(Z.Z, { color: "#747783" }),
                (0, r.jsx)(l, {
                    size: "md",
                    color: c ? "#FFFFFF" : "#B5BAC1",
                    className: Q.endScreenIcon,
                }),
            ],
        }),
    });
}
function $(e) {
    var t, n, l, m, g, I, Z, q, $, ee, et;
    let {
            videoTask: en,
            onOptimisticProgressUpdate: er,
            autoplay: eo,
            parentTransitionState: el,
            performanceClockStartTime: ei,
            orientation: ea,
        } = e,
        { sourceQuestContent: es, quest: ec, videoSessionId: eu, onClose: ed } = o.useContext(A.VideoQuestModalContext),
        em = (0, x.km)((e) => e.transcriptEnabled),
        ep = (0, x.km)((e) => e.setTranscriptEnabled),
        ef = (0, x.km)((e) => e.captionEnabled),
        ev = (0, x.km)((e) => e.setCaptionEnabled),
        eE = (0, x.km)((e) => e.fullScreenEnabled),
        eg = (0, x.km)((e) => e.setFullScreenEnabled),
        { enabled: eO, variant: eh } = j.EO.useConfig({ location: U.dr.VIDEO_MODAL }),
        eb = eh === j.m_.OVERLAY_SHARE_ON_VIDEO,
        { focused: eS, focusedChanged: ey } = (0, F.xU)(),
        { visible: eC, visibleChanged: e_, targetRef: ex } = (0, F.Yy)(),
        [ej, eD] = o.useState(!0 === eo ? M.rq.PLAYING : M.rq.PAUSED),
        [eP, eT] = o.useState(!1),
        [eR, eI] = o.useState(!1),
        eN = (0, C.il)(ec),
        [eA, ew] = o.useState(eN.percentComplete),
        ek = o.useCallback((e) => {
            e1(null), ew(e);
        }, []),
        [eL, eM] = o.useState(!1),
        [eV, eZ] = o.useState(!0),
        [eF, eB] = o.useState(!1),
        [eH, eU] = o.useState([]),
        [eq, eY] = o.useState(h.Z.getEffectiveConnectionSpeed()),
        [eG, eQ] = o.useState(0),
        [eW, ez] = o.useState(0),
        [eK, eX] = o.useState(!1),
        [eJ, e$] = o.useState(!1),
        [e0, e1] = o.useState(null),
        e2 = o.useRef(!0),
        e4 = o.useRef(null),
        e3 = o.useRef(null),
        e7 = (0, x.km)((e) => {
            var t;
            return null != (t = e.videoProgress[ec.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10,
                  };
        }, c.X),
        e9 = (0, x.km)((e) => e.setVideoProgress),
        e8 = (0, x.km)((e) => e.muted),
        e6 = (0, x.km)((e) => e.volume),
        e5 = (0, d.e7)([v.Z], () => v.Z.useReducedMotion),
        te = (0, o.useRef)(null),
        tt = (0, o.useRef)(null),
        tn = o.useRef(!0),
        tr = (null == (t = ec.userStatus) ? void 0 : t.completedAt) != null,
        [to, tl] = o.useState(null),
        [ti, ta] = o.useState(!1),
        [ts, tc] = o.useState(!1),
        [tu, td] = o.useState(null),
        tm = tr
            ? null != (I = null == (n = te.current) ? void 0 : n.duration)
                ? I
                : 0
            : Math.max(e7.maxTimestampSec, eN.progressSeconds),
        tp = o.useMemo(
            () =>
                (0, P.T)({
                    quest: ec,
                    location: U.dr.VIDEO_MODAL,
                }),
            [ec],
        ),
        { title: tf, subtitle: tv } = {
            title: (0, C.B2)(ec.config),
            subtitle: null != ($ = ec.config.ctaConfig.subtitle) ? $ : G.intl.string(G.t.mxaHfx),
        },
        tE = tr
            ? e7.timestampSec >= e7.duration
                ? 0
                : e7.timestampSec
            : Math.max(e7.timestampSec, eN.progressSeconds),
        [tg, tO] = o.useState(M._H.MD),
        th = {
            [M._H.MD]: 50,
            [M._H.LG]: 58,
        };
    (0, f.Ng)(() => {
        tn.current &&
            ((tn.current = !1),
            eY(h.Z.getEffectiveConnectionSpeed()),
            tr && e7.timestampSec >= e7.duration && e9(ec.id, 0, e7.duration));
    });
    let {
            videoVariant: tb,
            videoAsset: tS,
            hlsRef: ty,
        } = (function (e, t, n, r) {
            var l;
            let i = o.useRef(!1),
                s = o.useRef(null),
                c = (0, D.z)(e, U.dr.VIDEO_MODAL),
                d = null == (l = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : l.assets,
                m = o.useMemo(
                    () =>
                        null != d
                            ? c && a.ZP.isSupported() && null != d.videoHls
                                ? R.n1.VIDEO_HLS
                                : W.has(n) || null == d.videoLowRes
                                  ? R.n1.VIDEO
                                  : R.n1.VIDEO_LOW_RES
                            : null,
                    [d, n, c],
                ),
                p = o.useMemo(() => (null != m ? (0, R.z0)(e, u.X.WATCH_VIDEO, m, R.O.VIDEO) : null), [e, m]),
                f = () => {
                    null != s.current &&
                        800000 !== s.current.config.minAutoBitrate &&
                        (s.current.config.minAutoBitrate = 800000);
                };
            return (
                o.useEffect(() => {
                    if (m !== R.n1.VIDEO_HLS || null == p || null == t.current || i.current) return;
                    (s.current = new a.ZP({
                        backBufferLength: 20,
                        maxBufferLength: 30,
                        startPosition: r,
                        startFragPrefetch: !0,
                        startLevel: -1,
                    })),
                        s.current.on(a.ZP.Events.FRAG_LOADING, f),
                        s.current.loadSource(p.url),
                        s.current.attachMedia(t.current),
                        (i.current = !0);
                    let e = s.current;
                    return () => {
                        null != e && e.off(a.ZP.Events.FRAG_LOADING, f);
                    };
                }, [p, m, t, r]),
                {
                    videoVariant: m,
                    videoAsset: p,
                    hlsRef: s,
                }
            );
        })(ec, te, eq, tE),
        tC = (0, R.CC)(tb),
        {
            trackQuestVideoLoadingStarted: t_,
            trackQuestVideoLoadingEnded: tx,
            trackQuestVideoProgressed: tj,
            trackQuestVideoResumed: tD,
            trackQuestVideoPaused: tP,
            trackQuestVideoFocusChange: tT,
            trackQuestContentClick: tR,
            trackQuestVideoBufferingStarted: tI,
            trackQuestVideoBufferingEnded: tN,
            trackWatchTimeAnalytics: tA,
            trackQuestVideoTimeToFirstFrame: tw,
            trackQuestVideoFullscreenChanged: tk,
            trackQuestVideoError: tL,
            trackQuestVideoVolumeChanged: tM,
        } = (0, B.Z)({
            quest: ec,
            videoRef: te,
            hlsRef: ty,
            videoSessionId: eu,
            videoAssetId: tC,
            sourceQuestContent: es,
            logger: tp,
        }),
        tV = o.useRef(null),
        tZ = ec.id,
        tF = ec.config.messages.gameTitle,
        tB = null == tS ? void 0 : tS.url,
        tH = null == (l = ec.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : l.messages.videoTitle;
    o.useEffect(() => {
        var e;
        if (
            null == tB ||
            null == te.current ||
            (tb === R.n1.VIDEO_HLS && null == ty.current) ||
            !(0, O.Zx)({ location: U.dr.VIDEO_MODAL }).externalAnalyticsEnabled
        )
            return;
        let t = {
            debug: !1,
            videoElement: te.current,
            hlsInstance: tb === R.n1.VIDEO_HLS && null != (e = ty.current) ? e : void 0,
            feature: "quests",
            contentMetadata: {
                contentId: tB,
                videoStreamType: tb === R.n1.VIDEO_HLS ? "hls" : "mp4",
                contentType: "quests",
                durationSec: null == te.current.duration || isNaN(te.current.duration) ? 0 : te.current.duration,
                title: tH,
                questId: tZ,
                gameName: tF,
            },
        };
        return (
            (tV.current = new O.ci(t)),
            tV.current.initialize(),
            () => {
                null != tV.current && (tV.current.endSession(), tV.current.destroy(), (tV.current = null));
            }
        );
    }, [tb, ty, tF, tZ, tB, tH]);
    let tU = o.useCallback(() => {
            var e, t;
            return null != (t = null == (e = te.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tq } = (0, T.Z)({
            getCurrentVideoTime: tU,
            isPlaying: ej === M.rq.PLAYING,
            isMetadataLoaded: ti,
            isInitialSeekComplete: ts,
            onAnalytics: tA,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000,
        }),
        tY = o.useCallback(
            (e) => {
                if ((tp.info("[QV] | updatePlayerState | playerState: ".concat(e)), eD(e), null != te.current))
                    switch (e) {
                        case M.rq.PLAYING:
                            te.current.paused && tD(to), tl(null), te.current.play();
                            break;
                        case M.rq.PAUSED:
                            te.current.paused || tq(), te.current.pause(), (e2.current = !1);
                            break;
                        case M.rq.ENDED:
                            tq(), ep(!1);
                    }
            },
            [tD, to, tq, ep, tp],
        );
    o.useEffect(() => {
        tP(to);
    }, [to, tP]),
        o.useEffect(() => {
            ey && tT(eS, ej);
        }, [eS, ey, ej, tT]);
    let tG = o.useCallback(
        (e) => {
            var t;
            tr ||
                (null == (t = ec.userStatus) ? void 0 : t.enrolledAt) == null ||
                (tp.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, C.FI)(ec, e)),
                tj();
        },
        [tr, ec, tp, tj],
    );
    o.useEffect(() => {
        (el !== p.Dvm.HIDDEN &&
            el !== p.Dvm.EXITING &&
            el !== p.Dvm.EXITED &&
            (null == el || !e_ || eC || tr) &&
            (!ey || eS || tr)) ||
            null == te.current ||
            ej !== M.rq.PLAYING ||
            (tp.info(
                "[QV] | Pausing video | playerState: "
                    .concat(ej, ", parentTransitionState: ")
                    .concat(el, ", visible: ")
                    .concat(eC, ", focused: ")
                    .concat(eS, ", isQuestCompleted: ")
                    .concat(tr),
            ),
            tY(M.rq.PAUSED),
            tr || tl(_.yE.LOST_FOCUS));
    }, [el, eS, ey, eC, e_, ej, tr, tY, tG, tp]);
    let [tQ, tW] = o.useState(!1),
        tz = o.useRef(null),
        tK = o.useRef(performance.now()),
        tX = o.useCallback(() => {
            null != tz.current && clearTimeout(tz.current),
                ej === M.rq.PLAYING &&
                    (tz.current = setTimeout(
                        () => {
                            ej === M.rq.PLAYING && tW(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tK.current)),
                    ));
        }, [ej]),
        tJ = () => {
            tW(!1), (tK.current = performance.now()), tX();
        };
    o.useEffect(() => {
        if (ej !== M.rq.PLAYING) {
            tW(!1), null != tz.current && clearTimeout(tz.current);
            return;
        }
        return (
            tX(),
            () => {
                null != tz.current && clearTimeout(tz.current);
            }
        );
    }, [ej, tX]);
    let t$ = !tQ && (eR || eP || ej === M.rq.ENDED),
        t0 = o.useCallback(() => {
            var e;
            tp.info("[QV] | handleFullScreenExit");
            let t = (0, b.fn)(null == (e = te.current) ? void 0 : e.parentNode, te.current);
            null == t || (0, b.rB)(t) || (t.removeEventListener(b.NO, t0), eg(!1), tk(!1), tO(M._H.MD));
        }, [eg, tp, tk]),
        t1 = () => {
            if (null == te.current) return;
            let e = Math.max(te.current.currentTime - 10, 0);
            tp.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)),
                t4(e),
                ej === M.rq.ENDED && tY(M.rq.PAUSED),
                tR(_.jn.VIDEO_MODAL, y.jZ.SEEK_BACKWARD);
        },
        t2 = () => {
            if (null == te.current || !nu) return;
            let e = Math.min(te.current.currentTime + 10, tm);
            tp.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)),
                t4(e),
                ej !== M.rq.ENDED && e >= te.current.duration && tY(M.rq.ENDED),
                tR(_.jn.VIDEO_MODAL, y.jZ.SEEK_FORWARD);
        };
    o.useEffect(() => {
        let e = te.current;
        return () => {
            let t = (0, b.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(b.NO, t0);
        };
    }, [t0]);
    let t4 = o.useCallback(
            (e) => {
                var t;
                null != te.current &&
                    (tp.info("[QV] | seekTimeline | timeSec: ".concat(e)),
                    e1((e / (null != (t = te.current.duration) ? t : 1)) * 100),
                    tq(),
                    eM(!0),
                    tc(!1),
                    (te.current.currentTime = e),
                    e9(ec.id, e, te.current.duration));
            },
            [te, e9, ec.id, tq, tp],
        ),
        t3 = () => {
            if (null != te.current)
                switch ((tp.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(ej)), ej)) {
                    case M.rq.ENDED:
                        t4(0), tY(M.rq.PLAYING);
                        break;
                    case M.rq.PLAYING:
                        tY(M.rq.PAUSED), tl(_.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tY(M.rq.PLAYING);
                }
        },
        t7 = (e) => {
            td(e);
        },
        t9 = (e) => {
            td((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        t8 = o.useCallback(() => {
            if (
                null == te.current ||
                (tp.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(te.current.textTracks.length)),
                0 === te.current.textTracks.length)
            )
                return;
            let e = te.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, V.JC)(n) && ((n.id = "cue-".concat(t)), (n.onenter = () => t7(n)), (n.onexit = () => t9(n)));
                }
        }, [te, tp]);
    o.useEffect(() => {
        if (null == tt.current) return;
        let e = tt.current;
        return (
            e.addEventListener("load", t8),
            () => {
                null != e && e.removeEventListener("load", t8);
            }
        );
    }, [tt, t8]);
    let t6 = o.useCallback(
            (e) => {
                var t;
                tp.info(
                    "[QV] | logVideoError: errorType: "
                        .concat(e, ", videoProgress: ")
                        .concat(null == (t = te.current) ? void 0 : t.currentTime, ", videoAssetId: ")
                        .concat(tC, ", connectionSpeed: ")
                        .concat(eq),
                ),
                    tL(e);
            },
            [eq, tL, te, tC, tp],
        ),
        t5 = (e) => {
            tp.info("[QV] | handleCanPlay: playerState: ".concat(ej)),
                null != te.current &&
                    ej === M.rq.PLAYING &&
                    (tp.info("[QV] | handleCanPlay: did NOT early return"),
                    eV && (tp.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eV)), eZ(!1)),
                    eF &&
                        (tp.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eF)),
                        tN(null != e3.current ? performance.now() - e3.current : null),
                        eB(!1)),
                    tp.info("[QV] | handleCanPlay: updating player state to playing"),
                    tY(M.rq.PLAYING));
        };
    o.useEffect(() => {
        if (!eL) return;
        let e = setTimeout(() => {
            eM(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eL]);
    let [{ controlBarAnimSpring: ne }, nt] = (0, p.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: z,
            onStart: () => {
                e$(!1);
            },
            onRest: (e) => {
                1 === e.value && e$(!0);
            },
        })),
        nn = (0, o.useRef)(null),
        [{ captionHeightSpring: nr }, no] = (0, p.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: z,
        }));
    o.useEffect(() => {
        var e, t;
        return (
            no({
                captionHeightSpring:
                    ef && null != tu && null != (t = null == (e = nn.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: e5,
            }),
            () => {
                nr.stop();
            }
        );
    }, [ef, no, e5, tu, nr]),
        o.useEffect(
            () => (
                nt({
                    controlBarAnimSpring: t$ || eK ? 1 : 0,
                    immediate: e5,
                }),
                () => {
                    ne.stop();
                }
            ),
            [t$, nt, e5, eK, ne],
        );
    let nl = ej === M.rq.ENDED,
        ni = (0, H.e)({
            quest: ec,
            onClose: ed,
            sourceQuestContent: es,
        }),
        na = o.useCallback(
            (e, t) => {
                if (eE) {
                    var n;
                    let e = (0, b.fn)(null == (n = te.current) ? void 0 : n.parentNode, te.current);
                    null != e && (e.removeEventListener(b.NO, t0), (0, b.Pr)(e), eg(!1), tk(!1));
                }
                tR(e, y.jZ.LEARN_MORE), ni(e, t);
            },
            [ni, eE, tR, t0, eg, tk],
        ),
        ns = o.useMemo(() => (0, R.z0)(ec, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.THUMBNAIL), [ec]),
        nc = o.useMemo(() => (0, R.z0)(ec, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.CAPTION), [ec]),
        nu = tr || e7.maxTimestampSec >= (null != (Z = null == (m = te.current) ? void 0 : m.currentTime) ? Z : 0) + 1,
        nd = o.useMemo(() => null === (0, R.z0)(ec, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.TRANSCRIPT), [ec]),
        nm = eO
            ? {}
            : {
                  paddingLeft: (0, s.to)(
                      [
                          ne.to({
                              range: [0, 1],
                              output: [0, 25],
                          }),
                      ],
                      (e) => "".concat(e, "px"),
                  ),
                  paddingRight: (0, s.to)(
                      [
                          ne.to({
                              range: [0, 1],
                              output: [0, 25],
                          }),
                      ],
                      (e) => "".concat(e, "px"),
                  ),
              };
    return (0, r.jsx)(p.P3F, {
        className: i()(Q.videoCont, { [Q.videoContRoundedCorners]: eO }),
        "data-fullscreen": eE,
        tabIndex: -1,
        onMouseEnter: () => {
            eT(!0), tW(!1), (tK.current = performance.now()), null != tz.current && clearTimeout(tz.current);
        },
        onMouseLeave: () => {
            eT(!1), tW(!1);
        },
        onMouseMove: tJ,
        onKeyDown: tJ,
        children: (0, r.jsxs)("div", {
            className: i()(Q.videoContInnerRelative, {
                [Q.videoContInnerRelativePortrait]: "portrait" === ea,
                [Q.videoContInnerRelativeLandscape]: "landscape" === ea,
            }),
            children: [
                nl &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(X, {
                                quest: ec,
                                shouldShow: nl,
                                sourceQuestContent: es,
                            }),
                            (0, r.jsx)("div", { className: Q.videoContOverlay }),
                            (0, r.jsx)(J, {
                                title: tf,
                                subtitle: tv,
                                icon: p.d4D,
                                className: Q.endScreenPanelRight,
                                onClick: () => na(_.jn.VIDEO_MODAL, y.jZ.OPEN_GAME_LINK),
                            }),
                        ],
                    }),
                (0, r.jsxs)(E.Z, {
                    ref: (e) => {
                        (te.current = e), (ex.current = e);
                    },
                    autoPlay: eo,
                    playsInline: !0,
                    mediaLayoutType: eE ? Y.hV.STATIC : Y.hV.RESPONSIVE,
                    className: i()({
                        [Q.hidden]: nl,
                        [Q.videoInner]: !0,
                    }),
                    controls: !1,
                    poster: null == ns ? void 0 : ns.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != te.current &&
                            (te.current.currentTime >= eG &&
                                (tp.info(
                                    "[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(
                                        te.current.currentTime,
                                    ),
                                ),
                                eQ(te.current.currentTime + 6 + 2 * Math.random()),
                                tG(te.current.currentTime)),
                            te.current.currentTime >= eW &&
                                (ez(te.current.currentTime + 1),
                                (0, S.qm)(ec.id, eN.taskType, te.current.currentTime),
                                er(te.current.currentTime)),
                            e9(ec.id, te.current.currentTime, te.current.duration),
                            ek((te.current.currentTime / te.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != te.current &&
                            (tG(te.current.duration + 1),
                            tp.info("[QV] | handleEnded: sending progress update: ".concat(te.current.duration + 1)),
                            e9(ec.id, te.current.duration, te.current.duration)),
                            tY(M.rq.ENDED),
                            eB(!1);
                    },
                    onLoadedData: (e) => {
                        tp.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eV)),
                            eV &&
                                (tx(null != e4.current ? performance.now() - e4.current : null),
                                eZ(!1),
                                null != ty.current && (ty.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != te.current &&
                            (tp.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tC)),
                            ta(!0),
                            tb !== R.n1.VIDEO_HLS && t4(tE),
                            e8 ? (te.current.volume = 0) : (te.current.volume = e6));
                    },
                    onLoadStart: () => {
                        (e4.current = performance.now()),
                            t_(eq),
                            tp.info("[QV] | handleLoadStart | loadingStartTime: ".concat(e4.current));
                    },
                    onPlaying: () => {
                        if (!e2.current) return;
                        let e = performance.now() - ei;
                        tp.info("[QV] | \u23F0 Video FCP: ".concat(e, "ms")), tw(e), (e2.current = !1);
                    },
                    onWaiting: (e) => {
                        (e3.current = performance.now()),
                            tp.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(e3.current)),
                            tI(),
                            eB(!0);
                    },
                    onProgress: (e) => {
                        if (null == te.current) return;
                        tp.info(
                            "[QV] | handleLoadingHasProgressed: buffered.length: ".concat(te.current.buffered.length),
                        );
                        let t = [];
                        for (let e = 0; e < te.current.buffered.length; e++) {
                            let n = te.current.buffered.start(e),
                                r = te.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / te.current.duration,
                                    size: (r - n) / te.current.duration,
                                });
                        }
                        eU(t);
                    },
                    onCanPlay: t5,
                    onCanPlayThrough: t5,
                    onSeeked: () => {
                        tp.info("[QV] | handleSeeked"), tc(!0);
                    },
                    onAbort: () => t6(M.CY.ABORT),
                    onError: () => t6(M.CY.ERROR),
                    onEmptied: () => t6(M.CY.EMPTIED),
                    onStalled: () => t6(M.CY.STALLED),
                    onClick: () => {
                        tp.info("[QV] | handleVideoClick"), t3();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != nc &&
                            (0, r.jsx)("track", {
                                ref: tt,
                                src: nc.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != tS &&
                            tb !== R.n1.VIDEO_HLS &&
                            (0, r.jsx)("source", {
                                onError: () => t6(M.CY.SOURCE_ERROR),
                                src: tS.url,
                                type: tS.mimetype,
                            }),
                    ],
                }),
                (eV || eF) &&
                    ej === M.rq.PLAYING &&
                    (0, r.jsx)(p.$jN, {
                        type: p.$jN.Type.WANDERING_CUBES,
                        className: Q.loadingSpinner,
                    }),
                ej === M.rq.PAUSED && to === _.yE.LOST_FOCUS && (0, r.jsx)(K, {}),
                eb &&
                    (0, r.jsx)(s.animated.div, {
                        className: Q.floatingShareButtonContainer,
                        style: {
                            opacity: (0, s.to)(
                                [
                                    ne.to({
                                        range: [0, 1],
                                        output: [0, 1],
                                    }),
                                ],
                                (e) => "".concat(e),
                            ),
                        },
                        children: (0, r.jsx)(w.Z, {}),
                    }),
                em &&
                    ej !== M.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.P3F, {
                                onClick: () => {
                                    ej === M.rq.PAUSED && tY(M.rq.PLAYING), ep(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: Q.transcriptOverlay }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: i()(Q.transcriptCont, { [Q.transcriptContPortrait]: "portrait" === ea }),
                                style: {
                                    marginBottom: (0, s.to)([ne, nr], (e, t) => "".concat(e * th[tg] + t, "px")),
                                },
                                children: (0, r.jsx)(L.E, {
                                    quest: ec,
                                    onClose: () => {
                                        ep(!1), tR(_.jn.VIDEO_MODAL, y.jZ.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(s.animated.div, {
                    className: Q.videoFooterContGradient,
                    style: {
                        opacity: (0, s.to)(
                            [
                                ne.to({
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
                        className: i()(Q.playPausePopCont, {
                            [Q.play]: ej === M.rq.PLAYING,
                            [Q.pause]: ej === M.rq.PAUSED,
                        }),
                        children:
                            ej === M.rq.PLAYING
                                ? (0, r.jsx)(p.o1U, { className: Q.playPausePopIcon })
                                : (0, r.jsx)(p.fpf, { className: Q.playPausePopIcon }),
                    },
                    ej,
                ),
                ef &&
                    null != tu &&
                    !nl &&
                    (0, r.jsx)(s.animated.div, {
                        className: Q.captionContainer,
                        ref: nn,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    ne.to({
                                        range: [0, 1],
                                        output: [0, -th[tg]],
                                    }),
                                ],
                                (e) => "".concat(e, "px"),
                            ),
                        },
                        children: (0, r.jsx)(p.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: Q.captionText,
                            children: tu.text,
                        }),
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: Q.videoFooterCont,
                    style:
                        ((ee = (function (e) {
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
                        })({}, nm)),
                        (et = et =
                            {
                                paddingInline: 16 * !!eO,
                                height: (0, s.to)(
                                    [
                                        ne.to({
                                            range: [0, 1],
                                            output: [0, th[tg]],
                                        }),
                                    ],
                                    (e) => "".concat(e, "px"),
                                ),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(ee, Object.getOwnPropertyDescriptors(et))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(et)).forEach(function (e) {
                                  Object.defineProperty(ee, e, Object.getOwnPropertyDescriptor(et, e));
                              }),
                        ee),
                    children: [
                        (0, r.jsx)(k.Z, {
                            percent: null != e0 ? e0 : eA,
                            animate: !0 !== tn.current && !eL,
                            interactionEnabled: tr && eJ,
                            backgroundColor: t$ ? void 0 : "rgba(0, 0, 0, 0.0)",
                            preloadedBuffers: t$ ? eH : void 0,
                            duration: null != (q = null == (g = te.current) ? void 0 : g.duration) ? q : 1,
                            maxSeekableTime: t$ && eJ ? tm : void 0,
                            onClick: (e) => {
                                t4(e), ej === M.rq.ENDED && tY(M.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                t1();
                            },
                            rounded: eO,
                            onScrubForward: () => {
                                t2();
                            },
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: Q.videoControlsCont,
                            style: {
                                paddingTop: (0, s.to)(
                                    [
                                        ne.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                paddingBottom: (0, s.to)(
                                    [
                                        ne.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                pointerEvents: (0, s.to)(
                                    [
                                        ne.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => (e < 0.3 ? "none" : "auto"),
                                ),
                            },
                            onFocus: () => eI(!0),
                            onBlur: () => eI(!1),
                            children: (0, r.jsx)(N.Z, {
                                videoRef: te,
                                videoTask: en,
                                playerState: ej,
                                animSpring: ne,
                                visible: t$,
                                seekForwardEnabled: nu,
                                hideCaptionBtn: null == nc,
                                hideTranscriptBtn: nd,
                                size: tg,
                                handlePlaybackBtnClick: t3,
                                handleTranscriptBtnClick: () => {
                                    ep(!em),
                                        tR(_.jn.VIDEO_MODAL, em ? y.jZ.TRANSCRIPT_DISABLE : y.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    ev(!ef),
                                        tR(
                                            _.jn.VIDEO_MODAL,
                                            ef ? y.jZ.CLOSED_CAPTIONING_DISABLE : y.jZ.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !eE;
                                    tp.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
                                    let n = (0, b.fn)(null == (e = te.current) ? void 0 : e.parentNode, te.current);
                                    t && null != n
                                        ? ((0, b.Dj)(n), n.addEventListener(b.NO, t0), tk(!0), tO(M._H.LG))
                                        : t ||
                                          null == n ||
                                          (n.removeEventListener(b.NO, t0), tk(!1), (0, b.Pr)(n), tO(M._H.MD)),
                                        eg(t);
                                },
                                handleSeekBackBtnClick: t1,
                                handleSeekForwardBtnClick: t2,
                                handleControlBarPendingInteraction: eX,
                                onVolumeChange: tM,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
