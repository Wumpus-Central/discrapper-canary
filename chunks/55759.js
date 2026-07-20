n.d(t, { A: () => es }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    u = n(372684),
    a = n(942381),
    o = n(337836),
    c = n(17928),
    d = n(876230),
    E = n(645577),
    f = n(231723),
    _ = n(717421),
    m = n(939249),
    p = n(289873),
    S = n(408278),
    C = n(789645),
    v = n(782134),
    A = n(113494),
    g = n(834730),
    h = n(964486),
    I = n(775602),
    T = n(607470),
    D = n(53200),
    R = n(613373),
    x = n(683574),
    L = n(906892),
    O = n(544180),
    P = n(723702),
    N = n(475815),
    b = n(340124),
    k = n(24001),
    y = n(405670),
    V = n(291749),
    U = n(590202),
    Q = n(851936),
    M = n(792620),
    w = n(753386),
    B = n(795068),
    F = n(678968),
    j = n(576199),
    Y = n(163961),
    K = n(758423),
    H = n(458817),
    G = n(854356),
    $ = n(979204),
    q = n(924838);
function W(e) {
    let {
            targetSec: t,
            isFullyVisible: n,
            percent: i,
            animate: s,
            interactionEnabled: u,
            isQuestCompleted: a,
            backgroundColor: o,
            preloadedBuffers: c,
            durationSec: d,
            maxSeekableTime: E,
            playerState: f,
            onClick: _,
            onScrubBack: m,
            onScrubForward: p,
            "data-testid": S,
        } = e,
        { quest: C, sourceQuestContent: v, useNewProgressBarStyling: A } = l.useContext(B.a),
        { questConfig: g } = l.useContext(B.l),
        h = (0, $.A)({ targetSec: t, quest: C, sourceQuestContent: v, questConfig: g, clickable: !0 });
    return (0, r.jsx)(R.uI, {
        isFullyVisible: n,
        percent: i,
        animate: s,
        interactionEnabled: u,
        playerState: f,
        backgroundColor: o,
        preloadedBuffers: c,
        durationSec: d,
        maxSeekableTime: E,
        segmentBorderRadius: A ? 99 : 8,
        progressClassName: !a && A ? q.q : q.c,
        timelineHeightPx: A ? 4 : 2,
        hoverTimelineHeightPx: A ? void 0 : 4,
        initialTimelineHeightPx: A ? 4 : 2,
        onClick: _,
        onScrubBack: m,
        onScrubForward: p,
        indicatorConfig: h,
        onIndicatorSeek: _,
        "data-testid": S,
    });
}
var z = n(297264),
    X = n(187322),
    Z = n(364522),
    J = n(834926);
function ee(e) {
    let { quest: t, onClose: n } = e,
        i = (0, y.Kr)((e) => e.transcript);
    l.useEffect(() => {
        let e = (0, V.tW)(t, V.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == i ||
            i.questId !== t.id ||
            i.fetchStatus === y.Lx.NONE ||
            (i.fetchStatus === y.Lx.SUCCESS && e?.url !== i.url)) &&
            (0, b.qY)(t);
    }, [i, t]);
    let s = i?.questId === t.id && i?.fetchStatus === y.Lx.SUCCESS ? (i.text ?? "") : "",
        u = l.useMemo(
            () =>
                s
                    .split("\n")
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [s],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: J.Mm,
                children: [
                    (0, r.jsx)(z.D, { variant: "heading-md/semibold", color: "currentColor", children: "Transcript" }),
                    (0, r.jsx)(m.D, {
                        onClick: n,
                        className: J.GI,
                        children: (0, r.jsx)(C.P, { color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsx)(X.vN, {
                children: (0, r.jsx)(Z.Ar, {
                    className: J.j5,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: J.FN,
                        children:
                            i?.fetchStatus === y.Lx.FETCHING
                                ? (0, r.jsx)("div", {
                                      className: J.Cw,
                                      children: (0, r.jsx)(p.y, { type: p.y.Type.WANDERING_CUBES }),
                                  })
                                : (0, r.jsx)(z.D, {
                                      variant: "heading-md/normal",
                                      color: "text-muted",
                                      children: u.map((e, t) => (0, r.jsx)("p", { children: e }, t)),
                                  }),
                    }),
                }),
            }),
        ],
    });
}
var et = n(190107),
    en = n(652215),
    er = n(838541),
    el = n(375708);
let ei = { tension: 250, friction: 5, clamp: !0 };
function es(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: i,
            autoFocus: $ = !0,
            parentTransitionState: q,
            openedAtMs: z,
            orientation: X,
            videoUrlOverride: Z,
        } = e,
        {
            sourceQuestContent: es,
            quest: eu,
            videoSessionId: ea,
            onClose: eo,
            isFullscreenEnabled: ec,
            setIsFullscreenEnabled: ed,
            useNewProgressBarStyling: eE,
        } = l.useContext(B.a),
        ef = (0, y.Kr)((e) => e.transcriptEnabled),
        e_ = (0, y.Kr)((e) => e.setTranscriptEnabled),
        em = (0, y.Kr)((e) => e.captionEnabled),
        ep = (0, y.Kr)((e) => e.setCaptionEnabled),
        { focused: eS, focusedChanged: eC } = (0, R.A7)(),
        { visible: ev, visibleChanged: eA, targetRef: eg } = (0, R.O7)(),
        [eh, eI] = l.useState(!0 === i ? Y.Q6.PLAYING : Y.Q6.PAUSED),
        [eT, eD] = l.useState(!1),
        [eR, ex] = l.useState(!1),
        eL = (0, M.Yh)(eu),
        [eO, eP] = l.useState(eL.percentComplete),
        eN = l.useCallback((e) => {
            eX(null), eP(e);
        }, []),
        [eb, ek] = l.useState(!1),
        [ey, eV] = l.useState(!0),
        [eU, eQ] = l.useState(!1),
        [eM, ew] = l.useState([]),
        [eB, eF] = l.useState(O.A.getEffectiveConnectionSpeed()),
        [ej, eY] = l.useState(0),
        [eK, eH] = l.useState(0),
        [eG, e$] = l.useState(!1),
        [eq, eW] = l.useState(!1),
        [ez, eX] = l.useState(null),
        eZ = l.useRef(!0),
        eJ = l.useRef(null),
        e0 = l.useRef(null),
        e1 = (0, y.Kr)((e) => e.videoProgress[eu.id] ?? y.yc, a.x),
        e6 = (0, y.Kr)((e) => e.setVideoProgress),
        e7 = (0, y.Kr)((e) => e.muted),
        e4 = (0, y.Kr)((e) => e.setMuted),
        e2 = (0, y.Kr)((e) => e.volume),
        e9 = (0, y.Kr)((e) => e.setVolume),
        e8 = (0, c.bG)([I.Ay], () => I.Ay.useReducedMotion),
        e3 = (0, l.useRef)(null),
        e5 = (0, l.useRef)(null),
        te = (0, l.useRef)(null),
        tt = l.useRef(!0),
        tn = eu.userStatus?.completedAt != null,
        tr = l.useMemo(() => eu.config.features.includes(et.Li.FULL_EPISODE_VIDEO_QUEST), [eu.config.features]),
        tl = l.useRef(!1),
        [ti, ts] = l.useState(null),
        [tu, ta] = l.useState(!1),
        [to, tc] = l.useState(null),
        td = Math.max(e1.maxTimestampSec, eL.progressSeconds),
        tE = tn ? (e3.current?.duration ?? 0) : (0, w.vd)(td, e1.duration),
        tf = l.useMemo(() => (0, Q.L)({ quest: eu, location: et.rE.VIDEO_MODAL }), [eu]),
        t_ = (0, E.g)(tn, e1, eL.progressSeconds),
        [tm, tp] = l.useState(Y.oA.MD),
        tS = { [Y.oA.MD]: eE ? 56 : 50, [Y.oA.LG]: eE ? 64 : 58 };
    (0, h.u5)(() => {
        tt.current &&
            ((tt.current = !1),
            eF(O.A.getEffectiveConnectionSpeed()),
            tn && e1.timestampSec >= e1.duration && e6(eu.id, 0, e1.duration));
    });
    let { videoAsset: tC, videoAssetType: tv, hlsRef: tA, hls: tg, onFirstChunkLoaded: th } = (0, K.A)(e3, eB, t_, Z),
        {
            trackQuestVideoLoadingStarted: tI,
            trackQuestVideoLoadingEnded: tT,
            trackQuestVideoProgressed: tD,
            trackQuestVideoResumed: tR,
            trackQuestVideoPaused: tx,
            trackQuestVideoFocusChange: tL,
            trackQuestContentClick: tO,
            trackQuestVideoBufferingStarted: tP,
            trackQuestVideoBufferingEnded: tN,
            trackQuestVideoSegmentWatched: tb,
            trackQuestVideoTimeToFirstFrame: tk,
            trackQuestVideoFullscreenChanged: ty,
            trackQuestVideoError: tV,
            trackQuestVideoVolumeChanged: tU,
        } = (0, H.A)({
            questId: eu.id,
            isQuestCompleted: tn,
            videoRef: e3,
            hlsRef: tA,
            hls: tg,
            videoSessionId: ea,
            videoAssetId: tv,
            sourceQuestContent: es,
            logger: tf,
            isFullEpisodeVideoQuest: tr,
        });
    (0, G.A)({ videoAssetUrl: tC?.url, videoRef: e3, hls: tg, videoAssetType: tv });
    let tQ = l.useRef(null),
        tM = l.useCallback(() => {
            clearTimeout(tQ.current),
                ta(!0),
                (tQ.current = setTimeout(() => {
                    ta(!1);
                }, 1e3));
        }, []);
    l.useEffect(
        () => () => {
            null != tQ.current && clearTimeout(tQ.current);
        },
        [],
    );
    let tw = l.useCallback(() => e3.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: tB,
            handleLoadEnd: tF,
            handleFirstFrame: tj,
            handleSeek: tY,
        } = (0, R.Yr)({ getCurrentVideoTime: tw, onAnalytics: tb, emitIntervalMs: R.KI, minSegmentDurationMs: R._4 }),
        tK = l.useRef(tB);
    l.useEffect(() => {
        tK.current(eh, null);
    }, []);
    let tH = l.useCallback(
        (e) => {
            if ((tf.info(`[QV] | updatePlayerState | playerState: ${e}`), tB(e, null), eI(e), null != e3.current))
                switch (e) {
                    case Y.Q6.PLAYING:
                        e3.current.paused && tR(ti), ts(null), e3.current.play();
                        break;
                    case Y.Q6.PAUSED:
                        e3.current.pause(), (eZ.current = !1);
                        break;
                    case Y.Q6.ENDED:
                        e_(!1);
                }
        },
        [tB, tR, ti, e_, tf],
    );
    l.useEffect(() => {
        tx(ti);
    }, [ti, tx]),
        l.useEffect(() => {
            eC && tL(eS, eh);
        }, [eS, eC, eh, tL]);
    let tG = l.useCallback(
        (e) => {
            tn ||
                eu.userStatus?.enrolledAt == null ||
                (tf.info(`[QV] sendServerProgressUpdate: ${e}`), (0, w.zv)(eu, e)),
                tD();
        },
        [tn, eu, tf, tD],
    );
    l.useEffect(() => {
        (q !== f.ip.HIDDEN &&
            q !== f.ip.EXITING &&
            q !== f.ip.EXITED &&
            (null == q || !eA || ev || tn) &&
            (!eC || eS || tn)) ||
            null == e3.current ||
            eh !== Y.Q6.PLAYING ||
            (tf.info(
                `[QV] | Pausing video | playerState: ${eh}, parentTransitionState: ${q}, visible: ${ev}, focused: ${eS}, isQuestCompleted: ${tn}`,
            ),
            tH(Y.Q6.PAUSED),
            tn ? tr && ts(k.Yg.ANOTHER_MODAL_OPENED) : ts(k.Yg.LOST_FOCUS));
    }, [q, eS, eC, ev, eA, eh, tn, tH, tG, tf, tr]),
        l.useEffect(() => {
            ti === k.Yg.ANOTHER_MODAL_OPENED &&
                q === f.ip.ENTERED &&
                eh === Y.Q6.PAUSED &&
                tr &&
                eS &&
                (tf.info("[QV] | Resuming full episode video after modal re-entered"), tH(Y.Q6.PLAYING));
        }, [q, eh, tf, tH, ti, tr, eS]);
    let [t$, tq] = l.useState(!1),
        tW = l.useRef(null),
        tz = l.useRef(performance.now()),
        tX = l.useCallback(() => {
            null != tW.current && clearTimeout(tW.current),
                eh !== Y.Q6.PLAYING ||
                    (tW.current = setTimeout(
                        () => {
                            eh === Y.Q6.PLAYING && tq(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tz.current)),
                    ));
        }, [eh]);
    function tZ() {
        tq(!1), (tz.current = performance.now()), tX();
    }
    l.useEffect(() => {
        if (eh !== Y.Q6.PLAYING) {
            tq(!1), null != tW.current && clearTimeout(tW.current);
            return;
        }
        return (
            tX(),
            () => {
                null != tW.current && clearTimeout(tW.current);
            }
        );
    }, [eh, tX]);
    let tJ = !t$ && (eR || eT || eh === Y.Q6.ENDED),
        t0 = l.useCallback(() => {
            tf.info("[QV] | handleFullScreenExit");
            let e = (0, N.qf)(e3.current?.parentNode, e3.current);
            null == e || (0, N._U)(e) || (e.removeEventListener(N.Wb, t0), ed(!1), ty(!1), tp(Y.oA.MD));
        }, [ed, tf, ty]);
    function t1() {
        if (null == e3.current) return;
        let e = Math.max(e3.current.currentTime - 10, 0);
        tf.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
            t2(e),
            eh === Y.Q6.ENDED && tH(Y.Q6.PAUSED),
            tO(k.uF.VIDEO_MODAL, U.Cy.SEEK_BACKWARD);
    }
    function t6() {
        if (null == e3.current || !nc) return;
        let e = Math.min(e3.current.currentTime + 10, tE);
        tf.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
            t2(e),
            eh !== Y.Q6.ENDED && e >= e3.current.duration && tH(Y.Q6.ENDED),
            tO(k.uF.VIDEO_MODAL, U.Cy.SEEK_FORWARD);
    }
    l.useEffect(() => {
        let e = e3.current;
        return () => {
            let t = (0, N.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(N.Wb, t0);
        };
    }, [t0]),
        l.useEffect(() => {
            function e(e) {
                return te.current?.(e);
            }
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
        }, []);
    let t7 = l.useCallback(
            (e) => {
                e9(e), tU(e);
            },
            [e9, tU],
        ),
        t4 = l.useCallback(
            (e) => {
                e4(e);
            },
            [e4],
        ),
        t2 = l.useCallback(
            (e) => {
                null != e3.current &&
                    (tf.info(`[QV] | seekTimeline | timeSec: ${e}`),
                    eX((e / (e3.current.duration ?? 1)) * 100),
                    tY(),
                    ek(!0),
                    (e3.current.currentTime = e),
                    e6(eu.id, e, e3.current.duration));
            },
            [e3, e6, eu.id, tY, tf],
        );
    l.useEffect(() => {
        let e = e3.current;
        if (null != e)
            return (
                e.addEventListener("seeking", t),
                () => {
                    e.removeEventListener("seeking", t);
                }
            );
        function t() {
            if (null == e) return;
            let t = (0, D.LA)();
            null != t &&
                null != tA.current &&
                tA.current.mainForwardBufferInfo?.len === 0 &&
                tA.current.trigger(t.Events.BUFFER_FLUSHING, {
                    startOffset: e.currentTime,
                    endOffset: 1 / 0,
                    type: "video",
                });
        }
    }, [e3, tA]),
        (0, R.C1)({
            videoRef: e3,
            enabled: !tn,
            onPipPause: () => {
                tH(Y.Q6.PAUSED), ts(k.Yg.PICTURE_IN_PICTURE);
            },
            onHiddenPause: () => {
                tH(Y.Q6.PAUSED), ts(k.Yg.LOST_FOCUS);
            },
        });
    let t9 = l.useRef(!1);
    function t8() {
        if (null != e3.current)
            switch ((tf.info(`[QV] | handlePlaybackBtnClick | playerState: ${eh}`), tM(), eh)) {
                case Y.Q6.ENDED:
                    t2(0), tH(Y.Q6.PLAYING);
                    break;
                case Y.Q6.PLAYING:
                    tH(Y.Q6.PAUSED), ts(k.Yg.PAUSE_BUTTON);
                    break;
                default:
                    tH(Y.Q6.PLAYING);
            }
    }
    let t3 = l.useCallback(() => {
        if (
            null == e3.current ||
            (tf.info(`[QV] | handleTracksLoaded: textTracks.length: ${e3.current.textTracks.length}`),
            0 === e3.current.textTracks.length)
        )
            return;
        let e = e3.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, R.Ce)(n) &&
                    ((n.id = `cue-${t}`),
                    (n.onenter = () => {
                        tc(n);
                    }),
                    (n.onexit = () =>
                        (function (e) {
                            tc((t) => (t?.id === e.id ? null : t));
                        })(n)));
            }
    }, [e3, tf]);
    l.useEffect(() => {
        if (null == e5.current) return;
        let e = e5.current;
        return (
            e.addEventListener("load", t3),
            () => {
                null != e && e.removeEventListener("load", t3);
            }
        );
    }, [e5, t3]);
    let t5 = l.useCallback(
            (e) => {
                tf.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${e3.current?.currentTime}, videoAssetId: ${tv}, connectionSpeed: ${eB}`,
                ),
                    tV(e);
            },
            [eB, tV, e3, tv, tf],
        ),
        ne = l.useRef(!1);
    function nt(e) {
        tf.info(`[QV] | handleCanPlay: playerState: ${eh}`),
            null != e3.current &&
                eh === Y.Q6.PLAYING &&
                (tf.info("[QV] | handleCanPlay: did NOT early return"),
                ey && (tf.info(`[QV] | handleCanPlay: loadingFirstChunk: ${ey}`), eV(!1)),
                eU &&
                    (tf.info(`[QV] | handleCanPlay: waitingForChunk: ${eU}`),
                    tN(null != e0.current ? performance.now() - e0.current : null),
                    eQ(!1)),
                tf.info("[QV] | handleCanPlay: updating player state to playing"),
                tH(Y.Q6.PLAYING));
    }
    l.useEffect(() => {
        null != tC || ne.current || ((ne.current = !0), tV(Y.SB.NO_VALID_SOURCE));
    }, [tC, tV, ne]),
        l.useEffect(() => {
            if (!eb) return;
            let e = setTimeout(() => {
                ek(!1);
            }, 1e3);
            return () => clearTimeout(e);
        }, [eb]);
    let [{ controlBarAnimSpring: nn }, nr] = (0, _.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: ei,
            onStart: () => {
                eW(!1);
            },
            onRest: (e) => {
                1 === e.value && eW(!0);
            },
        })),
        nl = (0, l.useRef)(null),
        [{ captionHeightSpring: ni }, ns] = (0, _.z)(() => ({ from: { captionHeightSpring: 0 }, config: ei }));
    l.useEffect(
        () => (
            ns({ captionHeightSpring: em && null != to ? (nl.current?.clientHeight ?? 0) : 0, immediate: e8 }),
            () => {
                ni.stop();
            }
        ),
        [em, ns, e8, to, ni],
    ),
        l.useEffect(
            () => (
                nr({ controlBarAnimSpring: tJ || eG ? 1 : 0, immediate: e8 }),
                () => {
                    nn.stop();
                }
            ),
            [tJ, nr, e8, eG, nn],
        );
    let nu = eh === Y.Q6.ENDED,
        na = l.useMemo(() => (0, V.tW)(eu, V.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [eu]),
        no = l.useMemo(() => (0, V.tW)(eu, V.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [eu]),
        nc = tn || td >= (e3.current?.currentTime ?? 0) + 1,
        nd = l.useMemo(() => null === (0, V.tW)(eu, V.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [eu]),
        nE = eE ? 20 : 12,
        nf = 20 * !!eE,
        n_ = tn && eq,
        nm = (0, r.jsx)(L.BK, {
            children: (0, r.jsx)(x.pT, {
                activeLayer: ec ? L.$W : void 0,
                isFullscreen: ec,
                videoRef: e3,
                children: (0, r.jsx)(m.D, {
                    className: J.W6,
                    "data-fullscreen": ec,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: -1,
                    onMouseEnter: function () {
                        eD(!0),
                            tq(!1),
                            (tz.current = performance.now()),
                            null != tW.current && clearTimeout(tW.current);
                    },
                    onMouseLeave: function () {
                        eD(!1), tq(!1);
                    },
                    onMouseMove: tZ,
                    onKeyDown: tZ,
                    children: (0, r.jsxs)("div", {
                        className: s()(J.NS, { [J.DO]: "portrait" === X, [J.r7]: "landscape" === X }),
                        style: { "--custom-footer-bottom": `${eE ? 4 : 2}px` },
                        children: [
                            nu && (0, r.jsx)(F.A, { videoRef: e3, onTrackQuestContentClick: tO, orientation: X }),
                            (0, r.jsxs)(T.A, {
                                ref: (e) => {
                                    (e3.current = e), (eg.current = e);
                                },
                                autoPlay: i,
                                playsInline: !0,
                                mediaLayoutType: ec ? er.dG.STATIC : er.dG.RESPONSIVE,
                                className: s()({ [J.R]: nu, [J.IR]: !0 }),
                                controls: !1,
                                poster: na?.url,
                                disablePictureInPicture: !0,
                                "data-testid": "discord-web-video-player-video",
                                onTimeUpdate: function (e) {
                                    if (null == e3.current) return;
                                    let r = e3.current.currentTime >= t && !tl.current && tr;
                                    if (e3.current.currentTime >= ej || r) {
                                        var l;
                                        tf.info(
                                            `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${e3.current.currentTime}`,
                                        ),
                                            (l = e3.current.currentTime) >= t && (tl.current = !0),
                                            eY(l + et.aA + Math.random() * et.A6),
                                            tG(l);
                                    }
                                    e3.current.currentTime >= eK &&
                                        (eH(e3.current.currentTime + 1),
                                        (0, b.Gn)(eu.id, eL.taskType, e3.current.currentTime),
                                        n(e3.current.currentTime)),
                                        e6(eu.id, e3.current.currentTime, e3.current.duration),
                                        eN((e3.current.currentTime / e3.current.duration) * 100);
                                },
                                onEnded: function (e) {
                                    null != e3.current &&
                                        (tG(e3.current.duration + 1),
                                        tf.info(
                                            `[QV] | handleEnded: sending progress update: ${e3.current.duration + 1}`,
                                        ),
                                        e6(eu.id, e3.current.duration, e3.current.duration)),
                                        tH(Y.Q6.ENDED),
                                        eQ(!1);
                                },
                                onLoadedData: function (e) {
                                    tf.info(`[QV] | handleLoadedData: loadingFirstChunk: ${ey}`),
                                        ey &&
                                            (tT(null != eJ.current ? performance.now() - eJ.current : null),
                                            eV(!1),
                                            th());
                                },
                                onLoadedMetadata: function (e) {
                                    null != e3.current &&
                                        (tf.info(`[QV] | handleLoadedMetadata | videoAssetId: ${tv}`),
                                        tF(null),
                                        tv !== V.fY.VIDEO_PLAYER_VIDEO_HLS && t2(t_),
                                        e7 ? (e3.current.volume = 0) : (e3.current.volume = e2));
                                },
                                onLoadStart: function () {
                                    (eJ.current = performance.now()),
                                        (t9.current = !1),
                                        tI(eB),
                                        tf.info(`[QV] | handleLoadStart | loadingStartTime: ${eJ.current}`);
                                },
                                onPlaying: function () {
                                    if (!eZ.current) return;
                                    let e = performance.now() - z;
                                    tf.info(`[QV] | \u{23F0} Video FCP: ${e}ms`), tk(e), (eZ.current = !1);
                                },
                                onWaiting: function (e) {
                                    (e0.current = performance.now()),
                                        tf.info(`[QV] | handleWaitingForData: bufferingStartTime: ${e0.current}`),
                                        tP(),
                                        eQ(!0);
                                },
                                onProgress: function (e) {
                                    if (null == e3.current) return;
                                    tf.info(
                                        `[QV] | handleLoadingHasProgressed: buffered.length: ${e3.current.buffered.length}`,
                                    );
                                    let t = [];
                                    for (let e = 0; e < e3.current.buffered.length; e++) {
                                        let n = e3.current.buffered.start(e),
                                            r = e3.current.buffered.end(e);
                                        r - n < 1 ||
                                            t.push({
                                                start: n / e3.current.duration,
                                                size: (r - n) / e3.current.duration,
                                            });
                                    }
                                    ew(t);
                                },
                                onCanPlay: nt,
                                onCanPlayThrough: nt,
                                onSeeked: function () {
                                    tf.info("[QV] | handleSeeked"), t9.current || ((t9.current = !0), tj(0));
                                },
                                onAbort: function () {
                                    return t5(Y.SB.ABORT);
                                },
                                onError: function () {
                                    return t5(Y.SB.ERROR);
                                },
                                onEmptied: function () {
                                    return t5(Y.SB.EMPTIED);
                                },
                                onStalled: function () {
                                    return t5(Y.SB.STALLED);
                                },
                                onClick: function () {
                                    tf.info("[QV] | handleVideoClick"), t8();
                                },
                                crossOrigin: "anonymous",
                                children: [
                                    null != no &&
                                        (0, r.jsx)("track", {
                                            ref: e5,
                                            src: no.url,
                                            label: "English",
                                            kind: "captions",
                                            srcLang: "en",
                                            default: !0,
                                        }),
                                    null != tC &&
                                        tv !== V.fY.VIDEO_PLAYER_VIDEO_HLS &&
                                        null != tC.mimetype &&
                                        (0, r.jsx)("source", {
                                            onError: function () {
                                                return t5(Y.SB.SOURCE_ERROR);
                                            },
                                            src: tC.url,
                                            type: tC.mimetype,
                                        }),
                                ],
                            }),
                            (ey || eU) &&
                                eh === Y.Q6.PLAYING &&
                                null != tC &&
                                (0, r.jsx)("span", {
                                    className: J.S,
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(p.y, { type: p.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(R.DQ, {
                                message: (function (e) {
                                    let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                                    return t
                                        ? n === Y.Q6.PAUSED && (r === d.KB.FOCUS || r === d.KB.PICTURE_IN_PICTURE)
                                            ? el.intl.string(el.t.w6PeBF)
                                            : null
                                        : (0, P.isWeb)()
                                          ? el.intl.string(el.t["E1du/q"])
                                          : el.intl.string(el.t["rStN/7"]);
                                })({
                                    hasVideoAsset: null != tC,
                                    playerState: eh,
                                    pauseReason: (function (e) {
                                        switch (e) {
                                            case k.Yg.PAUSE_BUTTON:
                                                return d.KB.USER;
                                            case k.Yg.LOST_FOCUS:
                                                return d.KB.FOCUS;
                                            case k.Yg.MODAL_CLOSED:
                                                return d.KB.VISIBILITY;
                                            case k.Yg.PICTURE_IN_PICTURE:
                                                return d.KB.PICTURE_IN_PICTURE;
                                            default:
                                                return null;
                                        }
                                    })(ti),
                                }),
                                showOverlay: null == tC,
                            }),
                            eE
                                ? (0, r.jsxs)("div", {
                                      className: J.R4,
                                      "data-testid": "discord-web-video-player-share-btn",
                                      children: [
                                          (0, r.jsx)(j.A, {}),
                                          (0, r.jsx)(S.K, {
                                              variant: "overlay-secondary",
                                              icon: C.P,
                                              "aria-label": el.intl.string(el.t.cpT0Cq),
                                              onClick: eo,
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(u.animated.div, {
                                      className: J.R4,
                                      "data-testid": "discord-web-video-player-share-btn",
                                      style: {
                                          opacity: (0, u.to)([nn.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                          visibility: (0, u.to)([nn.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                              e < 0.1 ? "hidden" : "visible",
                                          ),
                                          pointerEvents: (0, u.to)([nn.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                              e < 0.3 ? "none" : "auto",
                                          ),
                                      },
                                      children: (0, r.jsx)(j.A, {}),
                                  }),
                            ef &&
                                eh !== Y.Q6.ENDED &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(m.D, {
                                            onClick: () => {
                                                eh === Y.Q6.PAUSED && tH(Y.Q6.PLAYING), e_(!1);
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: J.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: s()(J.xr, { [J.MZ]: "portrait" === X }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)([nn, ni], (e, t) => `${e * tS[tm] + t}px`),
                                            },
                                            children: (0, r.jsx)(ee, {
                                                quest: eu,
                                                onClose: function () {
                                                    e_(!1), tO(k.uF.VIDEO_MODAL, U.Cy.TRANSCRIPT_DISABLE);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(u.animated.div, {
                                className: J.Jp,
                                style: {
                                    opacity: (0, u.to)([nn.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                },
                            }),
                            tu &&
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: s()(J.yf, {
                                            [J.ZH]: eh === Y.Q6.PLAYING,
                                            [J.v7]: eh === Y.Q6.PAUSED,
                                        }),
                                        style: { "--custom-play-pause-pop-ms": "1000ms" },
                                        children:
                                            eh === Y.Q6.PLAYING
                                                ? (0, r.jsx)(v.u, { className: J.PK })
                                                : (0, r.jsx)(A.E, { className: J.PK }),
                                    },
                                    eh,
                                ),
                            em &&
                                null != to &&
                                !nu &&
                                (0, r.jsx)(u.animated.div, {
                                    className: J.o$,
                                    ref: nl,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [nn.to({ range: [0, 1], output: [-nf, -tS[tm]] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(g.E, {
                                        variant: "text-lg/semibold",
                                        color: "text-overlay-light",
                                        className: J.qh,
                                        children: to.text,
                                    }),
                                }),
                            (0, r.jsxs)(u.animated.div, {
                                className: J.r8,
                                style: {
                                    height: (0, u.to)([nn.to({ range: [0, 1], output: [0, tS[tm]] })], (e) => `${e}px`),
                                },
                                children: [
                                    (0, r.jsx)(u.animated.div, {
                                        style: {
                                            transform: (0, u.to)(
                                                [nn.to({ range: [1, 0], output: [0, 1] })],
                                                (e) => `translateY(-${e * nf}px)`,
                                            ),
                                        },
                                        children: (0, r.jsx)(W, {
                                            percent: null != ez ? ez : eO,
                                            animate: !0 !== tt.current && !eb,
                                            interactionEnabled: n_,
                                            playerState: eh,
                                            preloadedBuffers: tJ ? eM : void 0,
                                            durationSec: e3.current?.duration ?? 1,
                                            isFullyVisible: tJ && eq,
                                            maxSeekableTime: tJ && eq ? tE : void 0,
                                            onClick: function (e) {
                                                n_ && (t2(e), eh === Y.Q6.ENDED && tH(Y.Q6.PLAYING));
                                            },
                                            onScrubBack: t1,
                                            onScrubForward: t6,
                                            isQuestCompleted: tn,
                                            targetSec: t,
                                            "data-testid": "discord-web-video-player-timeline",
                                        }),
                                    }),
                                    (0, r.jsx)(u.animated.div, {
                                        className: J.uN,
                                        "data-testid": "discord-web-video-player-controls",
                                        style: {
                                            paddingTop: (0, u.to)(
                                                [nn.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e * e * nE}px`,
                                            ),
                                            paddingBottom: (0, u.to)(
                                                [nn.to({ range: [0, 1], output: [0, 1] })],
                                                (e) => `${e * e * 12}px`,
                                            ),
                                            pointerEvents: (0, u.to)([nn.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                                e < 0.3 ? "none" : "auto",
                                            ),
                                        },
                                        onFocus: function () {
                                            return ex(!0);
                                        },
                                        onBlur: function () {
                                            return ex(!1);
                                        },
                                        children: (0, r.jsx)(R.zZ, {
                                            playerState: eh,
                                            animSpring: nn,
                                            visible: tJ,
                                            seekForwardEnabled: nc,
                                            hideCaptionBtn: null == no,
                                            hideTranscriptBtn: nd,
                                            hideSkipButtons: "portrait" === X,
                                            hidePlaybackSpeedBtn: !0,
                                            size: tm,
                                            autoFocus: $,
                                            keyDownHandlerRef: te,
                                            volume: e2,
                                            muted: e7,
                                            transcriptEnabled: ef,
                                            captionEnabled: em,
                                            handlePlaybackBtnClick: t8,
                                            handleTranscriptBtnClick: function () {
                                                e_(!ef),
                                                    tO(
                                                        k.uF.VIDEO_MODAL,
                                                        ef ? U.Cy.TRANSCRIPT_DISABLE : U.Cy.TRANSCRIPT_ENABLE,
                                                    );
                                            },
                                            handleCaptionBtnClick: function () {
                                                ep(!em),
                                                    tO(
                                                        k.uF.VIDEO_MODAL,
                                                        em
                                                            ? U.Cy.CLOSED_CAPTIONING_DISABLE
                                                            : U.Cy.CLOSED_CAPTIONING_ENABLE,
                                                    );
                                            },
                                            handleFullScreenBtnClick: () => {
                                                let e = !ec;
                                                tf.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                                let t = (0, N.qf)(e3.current?.parentNode, e3.current);
                                                e && null != t
                                                    ? ((0, N.tl)(t), t.addEventListener(N.Wb, t0), ty(!0), tp(Y.oA.LG))
                                                    : e ||
                                                      null == t ||
                                                      (t.removeEventListener(N.Wb, t0),
                                                      ty(!1),
                                                      (0, N.sP)(t),
                                                      tp(Y.oA.MD)),
                                                    ed(e);
                                            },
                                            handleSeekBackBtnClick: t1,
                                            handleSeekForwardBtnClick: t6,
                                            handleControlBarPendingInteraction: e$,
                                            onVolumeChange: t7,
                                            onMutedChange: t4,
                                            onVolumeExpandedChange: en.FXj,
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(o.P, {}),
                            (0, r.jsx)(L.bW, {}),
                        ],
                    }),
                }),
            }),
        });
    return (0, r.jsx)(o.Jh, { enabled: ec, children: nm });
}
