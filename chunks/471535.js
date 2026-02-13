"use strict";
n.d(t, { A: () => Z }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(771253),
    l = n(40153),
    u = n(942381),
    c = n(311907),
    d = n(397927),
    _ = n(964486),
    f = n(775602),
    h = n(607470),
    p = n(544180),
    g = n(475815),
    E = n(829219),
    A = n(341915),
    I = n(405670),
    T = n(943849),
    y = n(991484),
    S = n(579473),
    v = n(590202),
    C = n(792620),
    b = n(753386),
    N = n(880080),
    R = n(818049),
    O = n(717415),
    D = n(661417),
    L = n(882291),
    w = n(224284),
    x = n(261331),
    P = n(457775),
    M = n(154395),
    k = n(602871),
    U = n(246465),
    G = n(660171),
    F = n(853738),
    V = n(219129),
    B = n(654487),
    j = n(838541),
    H = n(438655);
let Y = 50,
    W = 58,
    K = 10,
    $ = { tension: 250, friction: 5, clamp: !0 },
    z = 3e3,
    q = 6,
    X = 2;
function Z(e) {
    let {
            videoTask: t,
            onOptimisticProgressUpdate: n,
            autoplay: a,
            parentTransitionState: Z,
            performanceClockStartTime: Q,
            orientation: J,
            videoUrlOverride: ee,
        } = e,
        { sourceQuestContent: et, quest: en, videoSessionId: er } = i.useContext(O.VideoQuestModalContext),
        ei = (0, I.Kr)((e) => e.transcriptEnabled),
        ea = (0, I.Kr)((e) => e.setTranscriptEnabled),
        es = (0, I.Kr)((e) => e.captionEnabled),
        eo = (0, I.Kr)((e) => e.setCaptionEnabled),
        el = (0, I.Kr)((e) => e.fullScreenEnabled),
        eu = (0, I.Kr)((e) => e.setFullScreenEnabled),
        { focused: ec, focusedChanged: ed } = (0, M.A7)(),
        { visible: e_, visibleChanged: ef, targetRef: eh } = (0, M.O7)(),
        [ep, em] = i.useState(!0 === a ? x.Q6.PLAYING : x.Q6.PAUSED),
        [eg, eE] = i.useState(!1),
        [eA, eI] = i.useState(!1),
        eT = (0, C.Yh)(en),
        [ey, eS] = i.useState(eT.percentComplete),
        ev = i.useCallback((e) => {
            eY(null), eS(e);
        }, []),
        [eC, eb] = i.useState(!1),
        [eN, eR] = i.useState(!0),
        [eO, eD] = i.useState(!1),
        [eL, ew] = i.useState([]),
        [ex, eP] = i.useState(p.A.getEffectiveConnectionSpeed()),
        [eM, ek] = i.useState(0),
        [eU, eG] = i.useState(0),
        [eF, eV] = i.useState(!1),
        [eB, ej] = i.useState(!1),
        [eH, eY] = i.useState(null),
        eW = i.useRef(!0),
        eK = i.useRef(null),
        e$ = i.useRef(null),
        ez = (0, I.Kr)((e) => e.videoProgress[en.id] ?? { timestampSec: 0, duration: 10 }, u.x),
        eq = (0, I.Kr)((e) => e.setVideoProgress),
        eX = (0, I.Kr)((e) => e.muted),
        eZ = (0, I.Kr)((e) => e.volume),
        eQ = (0, c.bG)([f.A], () => f.A.useReducedMotion),
        eJ = (0, i.useRef)(null),
        e0 = (0, i.useRef)(null),
        e1 = i.useRef(!0),
        e2 = en.userStatus?.completedAt != null,
        e3 = i.useMemo(() => en.config.features.includes(B.Li.FULL_EPISODE_VIDEO_QUEST), [en.config.features]),
        e6 = i.useRef(!1),
        [e4, e5] = i.useState(null),
        [e7, e8] = i.useState(!1),
        [e9, te] = i.useState(!1),
        [tt, tn] = i.useState(null),
        tr = e2 ? (eJ.current?.duration ?? 0) : Math.max(ez.maxTimestampSec, eT.progressSeconds),
        ti = i.useMemo(() => (0, T.L)({ quest: en, location: B.rE.VIDEO_MODAL }), [en]),
        ta = (0, V.g)(e2, ez, eT),
        [ts, to] = i.useState(x.oA.MD),
        tl = { [x.oA.MD]: Y, [x.oA.LG]: W };
    (0, _.u5)(() => {
        e1.current &&
            ((e1.current = !1),
            eP(p.A.getEffectiveConnectionSpeed()),
            e2 && ez.timestampSec >= ez.duration && eq(en.id, 0, ez.duration));
    });
    let { videoAsset: tu, videoAssetType: tc, hlsRef: td, onFirstChunkLoaded: t_ } = (0, U.A)(eJ, ex, ta, ee),
        {
            trackQuestVideoLoadingStarted: tf,
            trackQuestVideoLoadingEnded: th,
            trackQuestVideoProgressed: tp,
            trackQuestVideoResumed: tm,
            trackQuestVideoPaused: tg,
            trackQuestVideoFocusChange: tE,
            trackQuestContentClick: tA,
            trackQuestVideoBufferingStarted: tI,
            trackQuestVideoBufferingEnded: tT,
            trackWatchTimeAnalytics: ty,
            trackQuestVideoTimeToFirstFrame: tS,
            trackQuestVideoFullscreenChanged: tv,
            trackQuestVideoError: tC,
            trackQuestVideoVolumeChanged: tb,
        } = (0, G.A)({
            questId: en.id,
            isQuestCompleted: e2,
            videoRef: eJ,
            hlsRef: td,
            videoSessionId: er,
            videoAssetId: tc,
            sourceQuestContent: et,
            logger: ti,
            isFullEpisodeVideoQuest: e3,
        });
    (0, F.A)({ videoAssetUrl: tu?.url, videoRef: eJ, hlsRef: td, videoAssetType: tc });
    let tN = i.useCallback(() => eJ.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: tR } = (0, y.A)({
            getCurrentVideoTime: tN,
            isPlaying: ep === x.Q6.PLAYING,
            isMetadataLoaded: e7,
            isInitialSeekComplete: e9,
            onAnalytics: ty,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
        }),
        tO = i.useCallback(
            (e) => {
                if ((ti.info(`[QV] | updatePlayerState | playerState: ${e}`), em(e), null != eJ.current))
                    switch (e) {
                        case x.Q6.PLAYING:
                            eJ.current.paused && tm(e4), e5(null), eJ.current.play();
                            break;
                        case x.Q6.PAUSED:
                            eJ.current.paused || tR(), eJ.current.pause(), (eW.current = !1);
                            break;
                        case x.Q6.ENDED:
                            tR(), ea(!1);
                    }
            },
            [tm, e4, tR, ea, ti],
        );
    i.useEffect(() => {
        tg(e4);
    }, [e4, tg]),
        i.useEffect(() => {
            ed && tE(ec, ep);
        }, [ec, ed, ep, tE]);
    let tD = i.useCallback(
        (e) => {
            e2 ||
                en.userStatus?.enrolledAt == null ||
                (ti.info(`[QV] sendServerProgressUpdate: ${e}`), (0, b.zv)(en, e)),
                tp();
        },
        [e2, en, ti, tp],
    );
    i.useEffect(() => {
        (Z !== d.ip4.HIDDEN &&
            Z !== d.ip4.EXITING &&
            Z !== d.ip4.EXITED &&
            (null == Z || !ef || e_ || e2) &&
            (!ed || ec || e2)) ||
            null == eJ.current ||
            ep !== x.Q6.PLAYING ||
            (ti.info(
                `[QV] | Pausing video | playerState: ${ep}, parentTransitionState: ${Z}, visible: ${e_}, focused: ${ec}, isQuestCompleted: ${e2}`,
            ),
            tO(x.Q6.PAUSED),
            e2 || e5(A.Yg.LOST_FOCUS));
    }, [Z, ec, ed, e_, ef, ep, e2, tO, tD, ti]);
    let [tL, tw] = i.useState(!1),
        tx = i.useRef(null),
        tP = i.useRef(performance.now()),
        tM = i.useCallback(() => {
            null != tx.current && clearTimeout(tx.current),
                ep !== x.Q6.PLAYING ||
                    (tx.current = setTimeout(
                        () => {
                            ep === x.Q6.PLAYING && tw(!0);
                        },
                        Math.max(0, z - (performance.now() - tP.current)),
                    ));
        }, [ep]),
        tk = () => {
            eE(!0), tw(!1), (tP.current = performance.now()), null != tx.current && clearTimeout(tx.current);
        },
        tU = () => {
            eE(!1), tw(!1);
        },
        tG = () => {
            tw(!1), (tP.current = performance.now()), tM();
        },
        tF = tG,
        tV = tG;
    i.useEffect(() => {
        if (ep !== x.Q6.PLAYING) {
            tw(!1), null != tx.current && clearTimeout(tx.current);
            return;
        }
        return (
            tM(),
            () => {
                null != tx.current && clearTimeout(tx.current);
            }
        );
    }, [ep, tM]);
    let tB = !tL && (eA || eg || ep === x.Q6.ENDED),
        tj = () => eI(!0),
        tH = () => eI(!1),
        tY = () => {
            ea(!ei), tA(A.uF.VIDEO_MODAL, ei ? v.Cy.TRANSCRIPT_DISABLE : v.Cy.TRANSCRIPT_ENABLE);
        },
        tW = () => {
            eo(!es), tA(A.uF.VIDEO_MODAL, es ? v.Cy.CLOSED_CAPTIONING_DISABLE : v.Cy.CLOSED_CAPTIONING_ENABLE);
        },
        tK = () => {
            ea(!1), tA(A.uF.VIDEO_MODAL, v.Cy.TRANSCRIPT_DISABLE);
        },
        t$ = () => {
            let e = !el;
            ti.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
            let t = (0, g.qf)(eJ.current?.parentNode, eJ.current);
            e && null != t
                ? ((0, g.tl)(t), t.addEventListener(g.Wb, tz), tv(!0), to(x.oA.LG))
                : e || null == t || (t.removeEventListener(g.Wb, tz), tv(!1), (0, g.sP)(t), to(x.oA.MD)),
                eu(e);
        },
        tz = i.useCallback(() => {
            ti.info("[QV] | handleFullScreenExit");
            let e = (0, g.qf)(eJ.current?.parentNode, eJ.current);
            null == e || (0, g._U)(e) || (e.removeEventListener(g.Wb, tz), eu(!1), tv(!1), to(x.oA.MD));
        }, [eu, ti, tv]),
        tq = () => {
            if (null == eJ.current) return;
            let e = Math.max(eJ.current.currentTime - K, 0);
            ti.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                tZ(e),
                ep === x.Q6.ENDED && tO(x.Q6.PAUSED),
                tA(A.uF.VIDEO_MODAL, v.Cy.SEEK_BACKWARD);
        },
        tX = () => {
            if (null == eJ.current || !nI) return;
            let e = Math.min(eJ.current.currentTime + K, tr);
            ti.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                tZ(e),
                ep !== x.Q6.ENDED && e >= eJ.current.duration && tO(x.Q6.ENDED),
                tA(A.uF.VIDEO_MODAL, v.Cy.SEEK_FORWARD);
        };
    i.useEffect(() => {
        let e = eJ.current;
        return () => {
            let t = (0, g.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(g.Wb, tz);
        };
    }, [tz]);
    let tZ = i.useCallback(
        (e) => {
            null != eJ.current &&
                (ti.info(`[QV] | seekTimeline | timeSec: ${e}`),
                eY((e / (eJ.current.duration ?? 1)) * 100),
                tR(),
                eb(!0),
                te(!1),
                (eJ.current.currentTime = e),
                eq(en.id, e, eJ.current.duration));
        },
        [eJ, eq, en.id, tR, ti],
    );
    i.useEffect(() => {
        let e = eJ.current;
        if (null == e) return;
        let t = () => {
            null != td.current &&
                td.current.mainForwardBufferInfo?.len === 0 &&
                td.current.trigger(o.sV.BUFFER_FLUSHING, {
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
    }, [eJ, td]);
    let tQ = () => {
            ti.info("[QV] | handleSeeked"), te(!0);
        },
        tJ = () => {
            if (null != eJ.current)
                switch ((ti.info(`[QV] | handlePlaybackBtnClick | playerState: ${ep}`), ep)) {
                    case x.Q6.ENDED:
                        tZ(0), tO(x.Q6.PLAYING);
                        break;
                    case x.Q6.PLAYING:
                        tO(x.Q6.PAUSED), e5(A.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tO(x.Q6.PLAYING);
                }
        },
        t0 = () => {
            ti.info("[QV] | handleVideoClick"), tJ();
        },
        t1 = (e) => {
            tn(e);
        },
        t2 = (e) => {
            tn((t) => (t?.id === e.id ? null : t));
        },
        t3 = () => {
            (eK.current = performance.now()),
                tf(ex),
                ti.info(`[QV] | handleLoadStart | loadingStartTime: ${eK.current}`);
        },
        t6 = () => {
            if (!eW.current) return;
            let e = performance.now() - Q;
            ti.info(`[QV] | ⏰ Video FCP: ${e}ms`), tS(e), (eW.current = !1);
        },
        t4 = (e) => {
            null != eJ.current &&
                (ti.info(`[QV] | handleLoadedMetadata | videoAssetId: ${tc}`),
                e8(!0),
                tc !== S.fY.VIDEO_PLAYER_VIDEO_HLS && tZ(ta),
                eX ? (eJ.current.volume = 0) : (eJ.current.volume = eZ));
        },
        t5 = i.useCallback(() => {
            if (
                null == eJ.current ||
                (ti.info(`[QV] | handleTracksLoaded: textTracks.length: ${eJ.current.textTracks.length}`),
                0 === eJ.current.textTracks.length)
            )
                return;
            let e = eJ.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, P.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => t1(n)), (n.onexit = () => t2(n)));
                }
        }, [eJ, ti]);
    i.useEffect(() => {
        if (null == e0.current) return;
        let e = e0.current;
        return (
            e.addEventListener("load", t5),
            () => {
                null != e && e.removeEventListener("load", t5);
            }
        );
    }, [e0, t5]);
    let t7 = (e) => {
            ti.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eN}`),
                eN && (th(null != eK.current ? performance.now() - eK.current : null), eR(!1), t_());
        },
        t8 = (e) => {
            (e$.current = performance.now()),
                ti.info(`[QV] | handleWaitingForData: bufferingStartTime: ${e$.current}`),
                tI(),
                eD(!0);
        },
        t9 = (e) => {
            e >= t.target && (e6.current = !0), ek(e + q + Math.random() * X), tD(e);
        },
        ne = (e) => {
            if (null == eJ.current) return;
            let r = eJ.current.currentTime >= t.target && !e6.current && e3;
            (eJ.current.currentTime >= eM || r) &&
                (ti.info(
                    `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${eJ.current.currentTime}`,
                ),
                t9(eJ.current.currentTime)),
                eJ.current.currentTime >= eU &&
                    (eG(eJ.current.currentTime + 1),
                    (0, E.Gn)(en.id, eT.taskType, eJ.current.currentTime),
                    n(eJ.current.currentTime)),
                eq(en.id, eJ.current.currentTime, eJ.current.duration),
                ev((eJ.current.currentTime / eJ.current.duration) * 100);
        },
        nt = (e) => {
            null != eJ.current &&
                (tD(eJ.current.duration + 1),
                ti.info(`[QV] | handleEnded: sending progress update: ${eJ.current.duration + 1}`),
                eq(en.id, eJ.current.duration, eJ.current.duration)),
                tO(x.Q6.ENDED),
                eD(!1);
        },
        nn = (e) => {
            if (null == eJ.current) return;
            ti.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${eJ.current.buffered.length}`);
            let t = [];
            for (let e = 0; e < eJ.current.buffered.length; e++) {
                let n = eJ.current.buffered.start(e),
                    r = eJ.current.buffered.end(e);
                r - n < 1 || t.push({ start: n / eJ.current.duration, size: (r - n) / eJ.current.duration });
            }
            ew(t);
        },
        nr = i.useCallback(
            (e) => {
                ti.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${eJ.current?.currentTime}, videoAssetId: ${tc}, connectionSpeed: ${ex}`,
                ),
                    tC(e);
            },
            [ex, tC, eJ, tc, ti],
        ),
        ni = () => nr(x.SB.ABORT),
        na = () => nr(x.SB.ERROR),
        ns = () => nr(x.SB.SOURCE_ERROR),
        no = () => nr(x.SB.EMPTIED),
        nl = () => nr(x.SB.STALLED),
        nu = i.useRef(!1);
    i.useEffect(() => {
        null != tu || nu.current || ((nu.current = !0), tC(x.SB.NO_VALID_SOURCE));
    }, [tu, tC, nu]);
    let nc = (e) => {
        ti.info(`[QV] | handleCanPlay: playerState: ${ep}`),
            null != eJ.current &&
                ep === x.Q6.PLAYING &&
                (ti.info("[QV] | handleCanPlay: did NOT early return"),
                eN && (ti.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eN}`), eR(!1)),
                eO &&
                    (ti.info(`[QV] | handleCanPlay: waitingForChunk: ${eO}`),
                    tT(null != e$.current ? performance.now() - e$.current : null),
                    eD(!1)),
                ti.info("[QV] | handleCanPlay: updating player state to playing"),
                tO(x.Q6.PLAYING));
    };
    i.useEffect(() => {
        if (!eC) return;
        let e = setTimeout(() => {
            eb(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eC]);
    let nd = (e) => {
            tZ(e), ep === x.Q6.ENDED && tO(x.Q6.PLAYING);
        },
        [{ controlBarAnimSpring: n_ }, nf] = (0, d.zhh)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: $,
            onStart: () => {
                ej(!1);
            },
            onRest: (e) => {
                1 === e.value && ej(!0);
            },
        })),
        nh = (0, i.useRef)(null),
        [{ captionHeightSpring: np }, nm] = (0, d.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: $ }));
    i.useEffect(
        () => (
            nm({ captionHeightSpring: es && null != tt ? (nh.current?.clientHeight ?? 0) : 0, immediate: eQ }),
            () => {
                np.stop();
            }
        ),
        [es, nm, eQ, tt, np],
    ),
        i.useEffect(
            () => (
                nf({ controlBarAnimSpring: tB || eF ? 1 : 0, immediate: eQ }),
                () => {
                    n_.stop();
                }
            ),
            [tB, nf, eQ, eF, n_],
        );
    let ng = ep === x.Q6.ENDED,
        nE = i.useMemo(() => (0, S.tW)(en, S.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [en]),
        nA = i.useMemo(() => (0, S.tW)(en, S.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [en]),
        nI = e2 || ez.maxTimestampSec >= (eJ.current?.currentTime ?? 0) + 1,
        nT = i.useMemo(() => null === (0, S.tW)(en, S.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [en]);
    return (0, r.jsx)(d.DUT, {
        className: H.W6,
        "data-fullscreen": el,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: tk,
        onMouseLeave: tU,
        onMouseMove: tF,
        onKeyDown: tV,
        children: (0, r.jsxs)("div", {
            className: s()(H.NS, { [H.DO]: "portrait" === J, [H.r7]: "landscape" === J }),
            children: [
                ng &&
                    (0, r.jsx)(R.A, {
                        videoRef: eJ,
                        onExitFullScreen: tz,
                        onTrackQuestVideoFullscreenChanged: tv,
                        onTrackQuestContentClick: tA,
                        orientation: J,
                    }),
                (0, r.jsxs)(h.A, {
                    ref: (e) => {
                        (eJ.current = e), (eh.current = e);
                    },
                    autoPlay: a,
                    playsInline: !0,
                    mediaLayoutType: el ? j.dG.STATIC : j.dG.RESPONSIVE,
                    className: s()({ [H.R]: ng, [H.IR]: !0 }),
                    controls: !1,
                    poster: nE?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: ne,
                    onEnded: nt,
                    onLoadedData: t7,
                    onLoadedMetadata: t4,
                    onLoadStart: t3,
                    onPlaying: t6,
                    onWaiting: t8,
                    onProgress: nn,
                    onCanPlay: nc,
                    onCanPlayThrough: nc,
                    onSeeked: tQ,
                    onAbort: ni,
                    onError: na,
                    onEmptied: no,
                    onStalled: nl,
                    onClick: t0,
                    crossOrigin: "anonymous",
                    children: [
                        null != nA &&
                            (0, r.jsx)("track", {
                                ref: e0,
                                src: nA.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != tu &&
                            tc !== S.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != tu.mimetype &&
                            (0, r.jsx)("source", { onError: ns, src: tu.url, type: tu.mimetype }),
                    ],
                }),
                (eN || eO) &&
                    ep === x.Q6.PLAYING &&
                    null != tu &&
                    (0, r.jsx)(d.y$y, { type: d.y$y.Type.WANDERING_CUBES, className: H.S }),
                (0, r.jsx)(k.A, { hasVideoAsset: null != tu, playerState: ep, pauseReason: e4 }),
                (0, r.jsx)(l.animated.div, {
                    className: H.R4,
                    "data-testid": "discord-web-video-player-share-btn",
                    style: { opacity: (0, l.to)([n_.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    children: (0, r.jsx)(D.A, {}),
                }),
                ei &&
                    ep !== x.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(d.DUT, {
                                onClick: () => {
                                    ep === x.Q6.PAUSED && tO(x.Q6.PLAYING), ea(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: H.BG }),
                            }),
                            (0, r.jsx)(l.animated.div, {
                                className: s()(H.xr, { [H.MZ]: "portrait" === J }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, l.to)([n_, np], (e, t) => `${e * tl[ts] + t}px`) },
                                children: (0, r.jsx)(w.y, { quest: en, onClose: tK }),
                            }),
                        ],
                    }),
                (0, r.jsx)(l.animated.div, {
                    className: H.Jp,
                    style: { opacity: (0, l.to)([n_.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                (0, r.jsx)(
                    "div",
                    {
                        className: s()(H.yf, { [H.ZH]: ep === x.Q6.PLAYING, [H.v7]: ep === x.Q6.PAUSED }),
                        children:
                            ep === x.Q6.PLAYING
                                ? (0, r.jsx)(d.udU, { className: H.PK })
                                : (0, r.jsx)(d.E$n, { className: H.PK }),
                    },
                    ep,
                ),
                es &&
                    null != tt &&
                    !ng &&
                    (0, r.jsx)(l.animated.div, {
                        className: H.o$,
                        ref: nh,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, l.to)([n_.to({ range: [0, 1], output: [0, -tl[ts]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(d.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: H.qh,
                            children: tt.text,
                        }),
                    }),
                (0, r.jsxs)(l.animated.div, {
                    className: H.r8,
                    style: { height: (0, l.to)([n_.to({ range: [0, 1], output: [0, tl[ts]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(L.A, {
                            percent: null != eH ? eH : ey,
                            animate: !0 !== e1.current && !eC,
                            interactionEnabled: e2 && eB,
                            backgroundColor: tB ? void 0 : "rgba(0, 0, 0, 0.0)",
                            playerState: ep,
                            preloadedBuffers: tB ? eL : void 0,
                            duration: eJ.current?.duration ?? 1,
                            isFullyVisible: tB && eB,
                            maxSeekableTime: tB && eB ? tr : void 0,
                            onClick: nd,
                            onScrubBack: tq,
                            onScrubForward: tX,
                            "data-testid": "discord-web-video-player-timeline",
                        }),
                        (0, r.jsx)(l.animated.div, {
                            className: H.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, l.to)(
                                    [n_.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                paddingBottom: (0, l.to)(
                                    [n_.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, l.to)([n_.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: tj,
                            onBlur: tH,
                            children: (0, r.jsx)(N.A, {
                                videoRef: eJ,
                                videoTask: t,
                                playerState: ep,
                                animSpring: n_,
                                visible: tB,
                                seekForwardEnabled: nI,
                                hideCaptionBtn: null == nA,
                                hideTranscriptBtn: nT,
                                size: ts,
                                handlePlaybackBtnClick: tJ,
                                handleTranscriptBtnClick: tY,
                                handleCaptionBtnClick: tW,
                                handleFullScreenBtnClick: t$,
                                handleSeekBackBtnClick: tq,
                                handleSeekForwardBtnClick: tX,
                                handleControlBarPendingInteraction: eV,
                                onVolumeChange: tb,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
