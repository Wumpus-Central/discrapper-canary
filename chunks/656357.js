n.d(t, { Z: () => $ }), n(388685), n(539854);
var r = n(951288),
    o = n(647438),
    l = n(120356),
    i = n.n(l),
    a = n(713447),
    s = n(203463),
    c = n(574583),
    u = n(754700),
    d = n(442837),
    m = n(780384),
    p = n(481060),
    f = n(493773),
    v = n(607070),
    g = n(70097),
    E = n(210887),
    O = n(707903),
    b = n(866960),
    h = n(228488),
    S = n(22095),
    C = n(617136),
    y = n(509212),
    _ = n(497505),
    x = n(184299),
    j = n(937797),
    D = n(347382),
    T = n(5881),
    P = n(117242),
    R = n(720293),
    I = n(602667),
    N = n(922826),
    w = n(215113),
    A = n(449788),
    k = n(508067),
    M = n(890193),
    L = n(325916),
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
    K = {
        tension: 250,
        friction: 5,
        clamp: !0,
    };
function z() {
    let e = (0, d.e7)([E.Z], () => E.Z.getState().theme);
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
    var t, n, l, m, E, I, Z, q, $, ee;
    let {
            videoTask: et,
            onOptimisticProgressUpdate: en,
            autoplay: er,
            parentTransitionState: eo,
            performanceClockStartTime: el,
            orientation: ei,
        } = e,
        { sourceQuestContent: ea, quest: es, videoSessionId: ec, onClose: eu } = o.useContext(w.VideoQuestModalContext),
        ed = (0, x.km)((e) => e.transcriptEnabled),
        em = (0, x.km)((e) => e.setTranscriptEnabled),
        ep = (0, x.km)((e) => e.captionEnabled),
        ef = (0, x.km)((e) => e.setCaptionEnabled),
        ev = (0, x.km)((e) => e.fullScreenEnabled),
        eg = (0, x.km)((e) => e.setFullScreenEnabled),
        { enabled: eE, variant: eO } = j.EO.useConfig({ location: U.dr.VIDEO_MODAL }),
        eb = eO === j.m_.OVERLAY_SHARE_ON_VIDEO,
        { focused: eh, focusedChanged: eS } = (0, F.xU)(),
        { visible: eC, visibleChanged: ey, targetRef: e_ } = (0, F.Yy)(),
        [ex, ej] = o.useState(!0 === er ? L.rq.PLAYING : L.rq.PAUSED),
        [eD, eT] = o.useState(!1),
        [eP, eR] = o.useState(!1),
        eI = (0, y.il)(es),
        [eN, ew] = o.useState(eI.percentComplete),
        eA = o.useCallback((e) => {
            e0(null), ew(e);
        }, []),
        [ek, eM] = o.useState(!1),
        [eL, eV] = o.useState(!0),
        [eZ, eF] = o.useState(!1),
        [eB, eH] = o.useState([]),
        [eU, eq] = o.useState(b.Z.getEffectiveConnectionSpeed()),
        [eY, eG] = o.useState(0),
        [eQ, eW] = o.useState(0),
        [eK, ez] = o.useState(!1),
        [eX, eJ] = o.useState(!1),
        [e$, e0] = o.useState(null),
        e1 = o.useRef(!0),
        e2 = o.useRef(null),
        e8 = o.useRef(null),
        e4 = (0, x.km)((e) => {
            var t;
            return null != (t = e.videoProgress[es.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10,
                  };
        }, c.X),
        e3 = (0, x.km)((e) => e.setVideoProgress),
        e6 = (0, x.km)((e) => e.muted),
        e9 = (0, x.km)((e) => e.volume),
        e7 = (0, d.e7)([v.Z], () => v.Z.useReducedMotion),
        e5 = (0, o.useRef)(null),
        te = (0, o.useRef)(null),
        tt = o.useRef(!0),
        tn = (null == (t = es.userStatus) ? void 0 : t.completedAt) != null,
        [tr, to] = o.useState(null),
        [tl, ti] = o.useState(!1),
        [ta, ts] = o.useState(!1),
        [tc, tu] = o.useState(null),
        td = tn
            ? null != (I = null == (n = e5.current) ? void 0 : n.duration)
                ? I
                : 0
            : Math.max(e4.maxTimestampSec, eI.progressSeconds),
        tm = o.useMemo(
            () =>
                (0, T.T)({
                    quest: es,
                    location: U.dr.VIDEO_MODAL,
                }),
            [es],
        ),
        { title: tp, subtitle: tf } = (function (e) {
            var t, n, r;
            let o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
            return {
                title: (0, y.B2)(e.config),
                subtitle:
                    null !=
                    (r =
                        null != (n = null == (t = e.config.ctaConfig) ? void 0 : t.subtitle)
                            ? n
                            : null == o
                              ? void 0
                              : o.messages.videoEndCtaSubtitle)
                        ? r
                        : G.intl.string(G.t.mxaHfx),
            };
        })(es),
        tv = tn
            ? e4.timestampSec >= e4.duration
                ? 0
                : e4.timestampSec
            : Math.max(e4.timestampSec, eI.progressSeconds),
        [tg, tE] = o.useState(L._H.MD),
        tO = {
            [L._H.MD]: 50,
            [L._H.LG]: 58,
        };
    (0, f.Ng)(() => {
        tt.current &&
            ((tt.current = !1),
            eq(b.Z.getEffectiveConnectionSpeed()),
            tn && e4.timestampSec >= e4.duration && e3(es.id, 0, e4.duration));
    });
    let {
            videoVariant: tb,
            videoAsset: th,
            hlsRef: tS,
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
        })(es, e5, eU, tv),
        tC = (0, R.CC)(tb),
        {
            trackQuestVideoLoadingStarted: ty,
            trackQuestVideoLoadingEnded: t_,
            trackQuestVideoProgressed: tx,
            trackQuestVideoResumed: tj,
            trackQuestVideoPaused: tD,
            trackQuestVideoFocusChange: tT,
            trackQuestContentClick: tP,
            trackQuestVideoBufferingStarted: tR,
            trackQuestVideoBufferingEnded: tI,
            trackWatchTimeAnalytics: tN,
            trackQuestVideoTimeToFirstFrame: tw,
            trackQuestVideoFullscreenChanged: tA,
            trackQuestVideoError: tk,
            trackQuestVideoVolumeChanged: tM,
        } = (0, B.Z)({
            quest: es,
            videoRef: e5,
            hlsRef: tS,
            videoSessionId: ec,
            videoAssetId: tC,
            sourceQuestContent: ea,
            logger: tm,
        }),
        tL = o.useRef(null),
        tV = es.id,
        tZ = es.config.application.id,
        tF = es.config.messages.gameTitle,
        tB = null == th ? void 0 : th.url,
        tH = null == (l = es.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : l.messages.videoTitle;
    o.useEffect(() => {
        var e;
        if (
            null == tB ||
            null == e5.current ||
            (tb === R.n1.VIDEO_HLS && null == tS.current) ||
            !(0, O.Zx)({ location: U.dr.VIDEO_MODAL }).externalAnalyticsEnabled
        )
            return;
        let t = {
            debug: !1,
            videoElement: e5.current,
            hlsInstance: tb === R.n1.VIDEO_HLS && null != (e = tS.current) ? e : void 0,
            feature: "quests",
            contentMetadata: {
                contentId: tB,
                videoStreamType: tb === R.n1.VIDEO_HLS ? "hls" : "mp4",
                contentType: "quests",
                durationSec: null == e5.current.duration || isNaN(e5.current.duration) ? 0 : e5.current.duration,
                title: tH,
                questId: tV,
                gameId: tZ,
                gameName: tF,
            },
        };
        return (
            (tL.current = new O.ci(t)),
            tL.current.initialize(),
            () => {
                null != tL.current && (tL.current.endSession(), tL.current.destroy(), (tL.current = null));
            }
        );
    }, [tb, tS, tZ, tF, tV, tB, tH]);
    let tU = o.useCallback(() => {
            var e, t;
            return null != (t = null == (e = e5.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tq } = (0, P.Z)({
            getCurrentVideoTime: tU,
            isPlaying: ex === L.rq.PLAYING,
            isMetadataLoaded: tl,
            isInitialSeekComplete: ta,
            onAnalytics: tN,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000,
        }),
        tY = o.useCallback(
            (e) => {
                if ((tm.info("[QV] | updatePlayerState | playerState: ".concat(e)), ej(e), null != e5.current))
                    switch (e) {
                        case L.rq.PLAYING:
                            e5.current.paused && tj(tr), to(null), e5.current.play();
                            break;
                        case L.rq.PAUSED:
                            e5.current.paused || tq(), e5.current.pause(), (e1.current = !1);
                            break;
                        case L.rq.ENDED:
                            tq(), em(!1);
                    }
            },
            [tj, tr, tq, em, tm],
        );
    o.useEffect(() => {
        tD(tr);
    }, [tr, tD]),
        o.useEffect(() => {
            eS && tT(eh, ex);
        }, [eh, eS, ex, tT]);
    let tG = o.useCallback(
        (e) => {
            var t;
            tn ||
                (null == (t = es.userStatus) ? void 0 : t.enrolledAt) == null ||
                (tm.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, y.FI)(es, e)),
                tx();
        },
        [tn, es, tm, tx],
    );
    o.useEffect(() => {
        (eo !== p.Dvm.HIDDEN &&
            eo !== p.Dvm.EXITING &&
            eo !== p.Dvm.EXITED &&
            (null == eo || !ey || eC || tn) &&
            (!eS || eh || tn)) ||
            null == e5.current ||
            ex !== L.rq.PLAYING ||
            (tm.info(
                "[QV] | Pausing video | playerState: "
                    .concat(ex, ", parentTransitionState: ")
                    .concat(eo, ", visible: ")
                    .concat(eC, ", focused: ")
                    .concat(eh, ", isQuestCompleted: ")
                    .concat(tn),
            ),
            tY(L.rq.PAUSED),
            tn || to(_.yE.LOST_FOCUS));
    }, [eo, eh, eS, eC, ey, ex, tn, tY, tG, tm]);
    let [tQ, tW] = o.useState(!1),
        tK = o.useRef(null),
        tz = o.useRef(performance.now()),
        tX = o.useCallback(() => {
            null != tK.current && clearTimeout(tK.current),
                ex === L.rq.PLAYING &&
                    (tK.current = setTimeout(
                        () => {
                            ex === L.rq.PLAYING && tW(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tz.current)),
                    ));
        }, [ex]),
        tJ = () => {
            tW(!1), (tz.current = performance.now()), tX();
        };
    o.useEffect(() => {
        if (ex !== L.rq.PLAYING) {
            tW(!1), null != tK.current && clearTimeout(tK.current);
            return;
        }
        return (
            tX(),
            () => {
                null != tK.current && clearTimeout(tK.current);
            }
        );
    }, [ex, tX]);
    let t$ = !tQ && (eP || eD || ex === L.rq.ENDED),
        t0 = o.useCallback(() => {
            var e;
            tm.info("[QV] | handleFullScreenExit");
            let t = (0, h.fn)(null == (e = e5.current) ? void 0 : e.parentNode, e5.current);
            null == t || (0, h.rB)(t) || (t.removeEventListener(h.NO, t0), eg(!1), tA(!1), tE(L._H.MD));
        }, [eg, tm, tA]),
        t1 = () => {
            if (null == e5.current) return;
            let e = Math.max(e5.current.currentTime - 10, 0);
            tm.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)),
                t8(e),
                ex === L.rq.ENDED && tY(L.rq.PAUSED),
                tP(_.jn.VIDEO_MODAL, C.jZ.SEEK_BACKWARD);
        },
        t2 = () => {
            if (null == e5.current || !nu) return;
            let e = Math.min(e5.current.currentTime + 10, td);
            tm.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)),
                t8(e),
                ex !== L.rq.ENDED && e >= e5.current.duration && tY(L.rq.ENDED),
                tP(_.jn.VIDEO_MODAL, C.jZ.SEEK_FORWARD);
        };
    o.useEffect(() => {
        let e = e5.current;
        return () => {
            let t = (0, h.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(h.NO, t0);
        };
    }, [t0]);
    let t8 = o.useCallback(
            (e) => {
                var t;
                null != e5.current &&
                    (tm.info("[QV] | seekTimeline | timeSec: ".concat(e)),
                    e0((e / (null != (t = e5.current.duration) ? t : 1)) * 100),
                    tq(),
                    eM(!0),
                    ts(!1),
                    (e5.current.currentTime = e),
                    e3(es.id, e, e5.current.duration));
            },
            [e5, e3, es.id, tq, tm],
        ),
        t4 = () => {
            if (null != e5.current)
                switch ((tm.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(ex)), ex)) {
                    case L.rq.ENDED:
                        t8(0), tY(L.rq.PLAYING);
                        break;
                    case L.rq.PLAYING:
                        tY(L.rq.PAUSED), to(_.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tY(L.rq.PLAYING);
                }
        },
        t3 = (e) => {
            tu(e);
        },
        t6 = (e) => {
            tu((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        t9 = o.useCallback(() => {
            if (
                null == e5.current ||
                (tm.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e5.current.textTracks.length)),
                0 === e5.current.textTracks.length)
            )
                return;
            let e = e5.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, V.JC)(n) && ((n.id = "cue-".concat(t)), (n.onenter = () => t3(n)), (n.onexit = () => t6(n)));
                }
        }, [e5, tm]);
    o.useEffect(() => {
        if (null == te.current) return;
        let e = te.current;
        return (
            e.addEventListener("load", t9),
            () => {
                null != e && e.removeEventListener("load", t9);
            }
        );
    }, [te, t9]);
    let t7 = o.useCallback(
            (e) => {
                var t;
                tm.info(
                    "[QV] | logVideoError: errorType: "
                        .concat(e, ", videoProgress: ")
                        .concat(null == (t = e5.current) ? void 0 : t.currentTime, ", videoAssetId: ")
                        .concat(tC, ", connectionSpeed: ")
                        .concat(eU),
                ),
                    tk(e);
            },
            [eU, tk, e5, tC, tm],
        ),
        t5 = (e) => {
            tm.info("[QV] | handleCanPlay: playerState: ".concat(ex)),
                null != e5.current &&
                    ex === L.rq.PLAYING &&
                    (tm.info("[QV] | handleCanPlay: did NOT early return"),
                    eL && (tm.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eL)), eV(!1)),
                    eZ &&
                        (tm.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eZ)),
                        tI(null != e8.current ? performance.now() - e8.current : null),
                        eF(!1)),
                    tm.info("[QV] | handleCanPlay: updating player state to playing"),
                    tY(L.rq.PLAYING));
        };
    o.useEffect(() => {
        if (!ek) return;
        let e = setTimeout(() => {
            eM(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ek]);
    let [{ controlBarAnimSpring: ne }, nt] = (0, p.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: K,
            onStart: () => {
                eJ(!1);
            },
            onRest: (e) => {
                1 === e.value && eJ(!0);
            },
        })),
        nn = (0, o.useRef)(null),
        [{ captionHeightSpring: nr }, no] = (0, p.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: K,
        }));
    o.useEffect(() => {
        var e, t;
        return (
            no({
                captionHeightSpring:
                    ep && null != tc && null != (t = null == (e = nn.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: e7,
            }),
            () => {
                nr.stop();
            }
        );
    }, [ep, no, e7, tc, nr]),
        o.useEffect(
            () => (
                nt({
                    controlBarAnimSpring: t$ || eK ? 1 : 0,
                    immediate: e7,
                }),
                () => {
                    ne.stop();
                }
            ),
            [t$, nt, e7, eK, ne],
        );
    let nl = ex === L.rq.ENDED,
        ni = (0, H.e)({
            quest: es,
            onClose: eu,
            sourceQuestContent: ea,
        }),
        na = o.useCallback(
            (e, t) => {
                if (ev) {
                    var n;
                    let e = (0, h.fn)(null == (n = e5.current) ? void 0 : n.parentNode, e5.current);
                    null != e && (e.removeEventListener(h.NO, t0), (0, h.Pr)(e), eg(!1), tA(!1));
                }
                tP(e, C.jZ.LEARN_MORE), ni(e, t);
            },
            [ni, ev, tP, t0, eg, tA],
        ),
        ns = o.useMemo(() => (0, R.z0)(es, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.THUMBNAIL), [es]),
        nc = o.useMemo(() => (0, R.z0)(es, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.CAPTION), [es]),
        nu = tn || e4.maxTimestampSec >= (null != (Z = null == (m = e5.current) ? void 0 : m.currentTime) ? Z : 0) + 1,
        nd = o.useMemo(() => null === (0, R.z0)(es, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.TRANSCRIPT), [es]),
        nm = eE
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
        className: i()(Q.videoCont, { [Q.videoContRoundedCorners]: eE }),
        "data-fullscreen": ev,
        tabIndex: -1,
        onMouseEnter: () => {
            eT(!0), tW(!1), (tz.current = performance.now()), null != tK.current && clearTimeout(tK.current);
        },
        onMouseLeave: () => {
            eT(!1), tW(!1);
        },
        onMouseMove: tJ,
        onKeyDown: tJ,
        children: (0, r.jsxs)("div", {
            className: i()(Q.videoContInnerRelative, {
                [Q.videoContInnerRelativePortrait]: "portrait" === ei,
                [Q.videoContInnerRelativeLandscape]: "landscape" === ei,
            }),
            children: [
                nl &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(X, {
                                quest: es,
                                shouldShow: nl,
                                sourceQuestContent: ea,
                            }),
                            (0, r.jsx)("div", { className: Q.videoContOverlay }),
                            (0, r.jsx)(J, {
                                title: tp,
                                subtitle: tf,
                                icon: p.d4D,
                                className: Q.endScreenPanelRight,
                                onClick: () => na(_.jn.VIDEO_MODAL, C.jZ.OPEN_GAME_LINK),
                            }),
                        ],
                    }),
                (0, r.jsxs)(g.Z, {
                    ref: (e) => {
                        (e5.current = e), (e_.current = e);
                    },
                    autoPlay: er,
                    playsInline: !0,
                    mediaLayoutType: ev ? Y.hV.STATIC : Y.hV.RESPONSIVE,
                    className: i()({
                        [Q.hidden]: nl,
                        [Q.videoInner]: !0,
                    }),
                    controls: !1,
                    poster: null == ns ? void 0 : ns.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e5.current &&
                            (e5.current.currentTime >= eY &&
                                (tm.info(
                                    "[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(
                                        e5.current.currentTime,
                                    ),
                                ),
                                eG(e5.current.currentTime + 6 + 2 * Math.random()),
                                tG(e5.current.currentTime)),
                            e5.current.currentTime >= eQ &&
                                (eW(e5.current.currentTime + 1),
                                (0, S.qm)(es.id, eI.taskType, e5.current.currentTime),
                                en(e5.current.currentTime)),
                            e3(es.id, e5.current.currentTime, e5.current.duration),
                            eA((e5.current.currentTime / e5.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != e5.current &&
                            (tG(e5.current.duration + 1),
                            tm.info("[QV] | handleEnded: sending progress update: ".concat(e5.current.duration + 1)),
                            e3(es.id, e5.current.duration, e5.current.duration)),
                            tY(L.rq.ENDED),
                            eF(!1);
                    },
                    onLoadedData: (e) => {
                        tm.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eL)),
                            eL &&
                                (t_(null != e2.current ? performance.now() - e2.current : null),
                                eV(!1),
                                null != tS.current && (tS.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != e5.current &&
                            (tm.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tC)),
                            ti(!0),
                            tb !== R.n1.VIDEO_HLS && t8(tv),
                            e6 ? (e5.current.volume = 0) : (e5.current.volume = e9));
                    },
                    onLoadStart: () => {
                        (e2.current = performance.now()),
                            ty(eU),
                            tm.info("[QV] | handleLoadStart | loadingStartTime: ".concat(e2.current));
                    },
                    onPlaying: () => {
                        if (!e1.current) return;
                        let e = performance.now() - el;
                        tm.info("[QV] | \u23F0 Video FCP: ".concat(e, "ms")), tw(e), (e1.current = !1);
                    },
                    onWaiting: (e) => {
                        (e8.current = performance.now()),
                            tm.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(e8.current)),
                            tR(),
                            eF(!0);
                    },
                    onProgress: (e) => {
                        if (null == e5.current) return;
                        tm.info(
                            "[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e5.current.buffered.length),
                        );
                        let t = [];
                        for (let e = 0; e < e5.current.buffered.length; e++) {
                            let n = e5.current.buffered.start(e),
                                r = e5.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / e5.current.duration,
                                    size: (r - n) / e5.current.duration,
                                });
                        }
                        eH(t);
                    },
                    onCanPlay: t5,
                    onCanPlayThrough: t5,
                    onSeeked: () => {
                        tm.info("[QV] | handleSeeked"), ts(!0);
                    },
                    onAbort: () => t7(L.CY.ABORT),
                    onError: () => t7(L.CY.ERROR),
                    onEmptied: () => t7(L.CY.EMPTIED),
                    onStalled: () => t7(L.CY.STALLED),
                    onClick: () => {
                        tm.info("[QV] | handleVideoClick"), t4();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != nc &&
                            (0, r.jsx)("track", {
                                ref: te,
                                src: nc.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != th &&
                            tb !== R.n1.VIDEO_HLS &&
                            (0, r.jsx)("source", {
                                onError: () => t7(L.CY.SOURCE_ERROR),
                                src: th.url,
                                type: th.mimetype,
                            }),
                    ],
                }),
                (eL || eZ) &&
                    ex === L.rq.PLAYING &&
                    (0, r.jsx)(p.$jN, {
                        type: p.$jN.Type.WANDERING_CUBES,
                        className: Q.loadingSpinner,
                    }),
                ex === L.rq.PAUSED && tr === _.yE.LOST_FOCUS && (0, r.jsx)(z, {}),
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
                        children: (0, r.jsx)(A.Z, {}),
                    }),
                ed &&
                    ex !== L.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.P3F, {
                                onClick: () => em(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: Q.transcriptOverlay }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: i()(Q.transcriptCont, { [Q.transcriptContPortrait]: "portrait" === ei }),
                                style: {
                                    marginBottom: (0, s.to)([ne, nr], (e, t) => "".concat(e * tO[tg] + t, "px")),
                                },
                                children: (0, r.jsx)(M.E, {
                                    quest: es,
                                    onClose: () => {
                                        em(!1), tP(_.jn.VIDEO_MODAL, C.jZ.TRANSCRIPT_DISABLE);
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
                            [Q.play]: ex === L.rq.PLAYING,
                            [Q.pause]: ex === L.rq.PAUSED,
                        }),
                        children:
                            ex === L.rq.PLAYING
                                ? (0, r.jsx)(p.o1U, { className: Q.playPausePopIcon })
                                : (0, r.jsx)(p.fpf, { className: Q.playPausePopIcon }),
                    },
                    ex,
                ),
                ep &&
                    null != tc &&
                    !nl &&
                    (0, r.jsx)(s.animated.div, {
                        className: Q.captionContainer,
                        ref: nn,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    ne.to({
                                        range: [0, 1],
                                        output: [0, -tO[tg]],
                                    }),
                                ],
                                (e) => "".concat(e, "px"),
                            ),
                        },
                        children: (0, r.jsx)(p.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: Q.captionText,
                            children: tc.text,
                        }),
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: Q.videoFooterCont,
                    style:
                        (($ = (function (e) {
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
                        (ee = ee =
                            {
                                paddingInline: 16 * !!eE,
                                height: (0, s.to)(
                                    [
                                        ne.to({
                                            range: [0, 1],
                                            output: [0, tO[tg]],
                                        }),
                                    ],
                                    (e) => "".concat(e, "px"),
                                ),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties($, Object.getOwnPropertyDescriptors(ee))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(ee)).forEach(function (e) {
                                  Object.defineProperty($, e, Object.getOwnPropertyDescriptor(ee, e));
                              }),
                        $),
                    children: [
                        (0, r.jsx)(k.Z, {
                            percent: null != e$ ? e$ : eN,
                            animate: !0 !== tt.current && !ek,
                            interactionEnabled: tn && eX,
                            backgroundColor: t$ ? void 0 : "rgba(0, 0, 0, 0.0)",
                            preloadedBuffers: t$ ? eB : void 0,
                            duration: null != (q = null == (E = e5.current) ? void 0 : E.duration) ? q : 1,
                            maxSeekableTime: t$ && eX ? td : void 0,
                            onClick: (e) => {
                                t8(e), ex === L.rq.ENDED && tY(L.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                t1();
                            },
                            rounded: eE,
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
                            onFocus: () => eR(!0),
                            onBlur: () => eR(!1),
                            children: (0, r.jsx)(N.Z, {
                                videoRef: e5,
                                videoTask: et,
                                playerState: ex,
                                animSpring: ne,
                                visible: t$,
                                seekForwardEnabled: nu,
                                hideCaptionBtn: null == nc,
                                hideTranscriptBtn: nd,
                                size: tg,
                                handlePlaybackBtnClick: t4,
                                handleTranscriptBtnClick: () => {
                                    em(!ed),
                                        tP(_.jn.VIDEO_MODAL, ed ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    ef(!ep),
                                        tP(
                                            _.jn.VIDEO_MODAL,
                                            ep ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ev;
                                    tm.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
                                    let n = (0, h.fn)(null == (e = e5.current) ? void 0 : e.parentNode, e5.current);
                                    t && null != n
                                        ? ((0, h.Dj)(n), n.addEventListener(h.NO, t0), tA(!0), tE(L._H.LG))
                                        : t ||
                                          null == n ||
                                          (n.removeEventListener(h.NO, t0), tA(!1), (0, h.Pr)(n), tE(L._H.MD)),
                                        eg(t);
                                },
                                handleSeekBackBtnClick: t1,
                                handleSeekForwardBtnClick: t2,
                                handleControlBarPendingInteraction: ez,
                                onVolumeChange: tM,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
