"use strict";
n.d(t, { A: () => X }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(771253),
    l = n(522160),
    u = n(942381),
    c = n(311907),
    d = n(645577),
    _ = n(397927),
    f = n(964486),
    h = n(775602),
    p = n(607470),
    g = n(892358),
    E = n(544180),
    A = n(475815),
    I = n(829219),
    T = n(341915),
    y = n(405670),
    S = n(943849),
    v = n(991484),
    C = n(579473),
    b = n(590202),
    N = n(792620),
    R = n(753386),
    O = n(880080),
    D = n(818049),
    L = n(717415),
    w = n(661417),
    x = n(882291),
    P = n(224284),
    M = n(261331),
    k = n(602871),
    U = n(246465),
    G = n(660171),
    F = n(853738),
    V = n(654487),
    B = n(838541),
    j = n(681636);
let H = 50,
    Y = 58,
    W = 10,
    K = { tension: 250, friction: 5, clamp: !0 },
    $ = 3e3,
    z = 6,
    q = 2;
function X(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: a,
            parentTransitionState: X,
            performanceClockStartTime: Z,
            orientation: Q,
            videoUrlOverride: J,
        } = e,
        { sourceQuestContent: ee, quest: et, videoSessionId: en } = i.useContext(L.VideoQuestModalContext),
        er = (0, y.Kr)((e) => e.transcriptEnabled),
        ei = (0, y.Kr)((e) => e.setTranscriptEnabled),
        ea = (0, y.Kr)((e) => e.captionEnabled),
        es = (0, y.Kr)((e) => e.setCaptionEnabled),
        eo = (0, y.Kr)((e) => e.fullScreenEnabled),
        el = (0, y.Kr)((e) => e.setFullScreenEnabled),
        { focused: eu, focusedChanged: ec } = (0, g.A7)(),
        { visible: ed, visibleChanged: e_, targetRef: ef } = (0, g.O7)(),
        [eh, ep] = i.useState(!0 === a ? M.Q6.PLAYING : M.Q6.PAUSED),
        [em, eg] = i.useState(!1),
        [eE, eA] = i.useState(!1),
        eI = (0, N.Yh)(et),
        [eT, ey] = i.useState(eI.percentComplete),
        eS = i.useCallback((e) => {
            eH(null), ey(e);
        }, []),
        [ev, eC] = i.useState(!1),
        [eb, eN] = i.useState(!0),
        [eR, eO] = i.useState(!1),
        [eD, eL] = i.useState([]),
        [ew, ex] = i.useState(E.A.getEffectiveConnectionSpeed()),
        [eP, eM] = i.useState(0),
        [ek, eU] = i.useState(0),
        [eG, eF] = i.useState(!1),
        [eV, eB] = i.useState(!1),
        [ej, eH] = i.useState(null),
        eY = i.useRef(!0),
        eW = i.useRef(null),
        eK = i.useRef(null),
        e$ = (0, y.Kr)((e) => e.videoProgress[et.id] ?? { timestampSec: 0, duration: 10 }, u.x),
        ez = (0, y.Kr)((e) => e.setVideoProgress),
        eq = (0, y.Kr)((e) => e.muted),
        eX = (0, y.Kr)((e) => e.volume),
        eZ = (0, c.bG)([h.A], () => h.A.useReducedMotion),
        eQ = (0, i.useRef)(null),
        eJ = (0, i.useRef)(null),
        e0 = i.useRef(!0),
        e1 = et.userStatus?.completedAt != null,
        e2 = i.useMemo(() => et.config.features.includes(V.Li.FULL_EPISODE_VIDEO_QUEST), [et.config.features]),
        e3 = i.useRef(!1),
        [e6, e4] = i.useState(null),
        [e5, e7] = i.useState(!1),
        [e8, e9] = i.useState(!1),
        [te, tt] = i.useState(null),
        tn = e1 ? (eQ.current?.duration ?? 0) : Math.max(e$.maxTimestampSec, eI.progressSeconds),
        tr = i.useMemo(() => (0, S.L)({ quest: et, location: V.rE.VIDEO_MODAL }), [et]),
        ti = (0, d.g)(e1, e$, eI.progressSeconds),
        [ta, ts] = i.useState(M.oA.MD),
        to = { [M.oA.MD]: H, [M.oA.LG]: Y };
    (0, f.u5)(() => {
        e0.current &&
            ((e0.current = !1),
            ex(E.A.getEffectiveConnectionSpeed()),
            e1 && e$.timestampSec >= e$.duration && ez(et.id, 0, e$.duration));
    });
    let { videoAsset: tl, videoAssetType: tu, hlsRef: tc, onFirstChunkLoaded: td } = (0, U.A)(eQ, ew, ti, J),
        {
            trackQuestVideoLoadingStarted: t_,
            trackQuestVideoLoadingEnded: tf,
            trackQuestVideoProgressed: th,
            trackQuestVideoResumed: tp,
            trackQuestVideoPaused: tm,
            trackQuestVideoFocusChange: tg,
            trackQuestContentClick: tE,
            trackQuestVideoBufferingStarted: tA,
            trackQuestVideoBufferingEnded: tI,
            trackWatchTimeAnalytics: tT,
            trackQuestVideoTimeToFirstFrame: ty,
            trackQuestVideoFullscreenChanged: tS,
            trackQuestVideoError: tv,
            trackQuestVideoVolumeChanged: tC,
        } = (0, G.A)({
            questId: et.id,
            isQuestCompleted: e1,
            videoRef: eQ,
            hlsRef: tc,
            videoSessionId: en,
            videoAssetId: tu,
            sourceQuestContent: ee,
            logger: tr,
            isFullEpisodeVideoQuest: e2,
        });
    (0, F.A)({ videoAssetUrl: tl?.url, videoRef: eQ, hlsRef: tc, videoAssetType: tu });
    let tb = i.useCallback(() => eQ.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: tN } = (0, v.A)({
            getCurrentVideoTime: tb,
            isPlaying: eh === M.Q6.PLAYING,
            isMetadataLoaded: e5,
            isInitialSeekComplete: e8,
            onAnalytics: tT,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
        }),
        tR = i.useCallback(
            (e) => {
                if ((tr.info(`[QV] | updatePlayerState | playerState: ${e}`), ep(e), null != eQ.current))
                    switch (e) {
                        case M.Q6.PLAYING:
                            eQ.current.paused && tp(e6), e4(null), eQ.current.play();
                            break;
                        case M.Q6.PAUSED:
                            eQ.current.paused || tN(), eQ.current.pause(), (eY.current = !1);
                            break;
                        case M.Q6.ENDED:
                            tN(), ei(!1);
                    }
            },
            [tp, e6, tN, ei, tr],
        );
    i.useEffect(() => {
        tm(e6);
    }, [e6, tm]),
        i.useEffect(() => {
            ec && tg(eu, eh);
        }, [eu, ec, eh, tg]);
    let tO = i.useCallback(
        (e) => {
            e1 ||
                et.userStatus?.enrolledAt == null ||
                (tr.info(`[QV] sendServerProgressUpdate: ${e}`), (0, R.zv)(et, e)),
                th();
        },
        [e1, et, tr, th],
    );
    i.useEffect(() => {
        (X !== _.ip4.HIDDEN &&
            X !== _.ip4.EXITING &&
            X !== _.ip4.EXITED &&
            (null == X || !e_ || ed || e1) &&
            (!ec || eu || e1)) ||
            null == eQ.current ||
            eh !== M.Q6.PLAYING ||
            (tr.info(
                `[QV] | Pausing video | playerState: ${eh}, parentTransitionState: ${X}, visible: ${ed}, focused: ${eu}, isQuestCompleted: ${e1}`,
            ),
            tR(M.Q6.PAUSED),
            e1 || e4(T.Yg.LOST_FOCUS));
    }, [X, eu, ec, ed, e_, eh, e1, tR, tO, tr]);
    let [tD, tL] = i.useState(!1),
        tw = i.useRef(null),
        tx = i.useRef(performance.now()),
        tP = i.useCallback(() => {
            null != tw.current && clearTimeout(tw.current),
                eh !== M.Q6.PLAYING ||
                    (tw.current = setTimeout(
                        () => {
                            eh === M.Q6.PLAYING && tL(!0);
                        },
                        Math.max(0, $ - (performance.now() - tx.current)),
                    ));
        }, [eh]),
        tM = () => {
            eg(!0), tL(!1), (tx.current = performance.now()), null != tw.current && clearTimeout(tw.current);
        },
        tk = () => {
            eg(!1), tL(!1);
        },
        tU = () => {
            tL(!1), (tx.current = performance.now()), tP();
        },
        tG = tU,
        tF = tU;
    i.useEffect(() => {
        if (eh !== M.Q6.PLAYING) {
            tL(!1), null != tw.current && clearTimeout(tw.current);
            return;
        }
        return (
            tP(),
            () => {
                null != tw.current && clearTimeout(tw.current);
            }
        );
    }, [eh, tP]);
    let tV = !tD && (eE || em || eh === M.Q6.ENDED),
        tB = () => eA(!0),
        tj = () => eA(!1),
        tH = () => {
            ei(!er), tE(T.uF.VIDEO_MODAL, er ? b.Cy.TRANSCRIPT_DISABLE : b.Cy.TRANSCRIPT_ENABLE);
        },
        tY = () => {
            es(!ea), tE(T.uF.VIDEO_MODAL, ea ? b.Cy.CLOSED_CAPTIONING_DISABLE : b.Cy.CLOSED_CAPTIONING_ENABLE);
        },
        tW = () => {
            ei(!1), tE(T.uF.VIDEO_MODAL, b.Cy.TRANSCRIPT_DISABLE);
        },
        tK = () => {
            let e = !eo;
            tr.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
            let t = (0, A.qf)(eQ.current?.parentNode, eQ.current);
            e && null != t
                ? ((0, A.tl)(t), t.addEventListener(A.Wb, t$), tS(!0), ts(M.oA.LG))
                : e || null == t || (t.removeEventListener(A.Wb, t$), tS(!1), (0, A.sP)(t), ts(M.oA.MD)),
                el(e);
        },
        t$ = i.useCallback(() => {
            tr.info("[QV] | handleFullScreenExit");
            let e = (0, A.qf)(eQ.current?.parentNode, eQ.current);
            null == e || (0, A._U)(e) || (e.removeEventListener(A.Wb, t$), el(!1), tS(!1), ts(M.oA.MD));
        }, [el, tr, tS]),
        tz = () => {
            if (null == eQ.current) return;
            let e = Math.max(eQ.current.currentTime - W, 0);
            tr.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                tX(e),
                eh === M.Q6.ENDED && tR(M.Q6.PAUSED),
                tE(T.uF.VIDEO_MODAL, b.Cy.SEEK_BACKWARD);
        },
        tq = () => {
            if (null == eQ.current || !nA) return;
            let e = Math.min(eQ.current.currentTime + W, tn);
            tr.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                tX(e),
                eh !== M.Q6.ENDED && e >= eQ.current.duration && tR(M.Q6.ENDED),
                tE(T.uF.VIDEO_MODAL, b.Cy.SEEK_FORWARD);
        };
    i.useEffect(() => {
        let e = eQ.current;
        return () => {
            let t = (0, A.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(A.Wb, t$);
        };
    }, [t$]);
    let tX = i.useCallback(
        (e) => {
            null != eQ.current &&
                (tr.info(`[QV] | seekTimeline | timeSec: ${e}`),
                eH((e / (eQ.current.duration ?? 1)) * 100),
                tN(),
                eC(!0),
                e9(!1),
                (eQ.current.currentTime = e),
                ez(et.id, e, eQ.current.duration));
        },
        [eQ, ez, et.id, tN, tr],
    );
    i.useEffect(() => {
        let e = eQ.current;
        if (null == e) return;
        let t = () => {
            null != tc.current &&
                tc.current.mainForwardBufferInfo?.len === 0 &&
                tc.current.trigger(o.sV.BUFFER_FLUSHING, {
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
    }, [eQ, tc]);
    let tZ = () => {
            tr.info("[QV] | handleSeeked"), e9(!0);
        },
        tQ = () => {
            if (null != eQ.current)
                switch ((tr.info(`[QV] | handlePlaybackBtnClick | playerState: ${eh}`), eh)) {
                    case M.Q6.ENDED:
                        tX(0), tR(M.Q6.PLAYING);
                        break;
                    case M.Q6.PLAYING:
                        tR(M.Q6.PAUSED), e4(T.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tR(M.Q6.PLAYING);
                }
        },
        tJ = () => {
            tr.info("[QV] | handleVideoClick"), tQ();
        },
        t0 = (e) => {
            tt(e);
        },
        t1 = (e) => {
            tt((t) => (t?.id === e.id ? null : t));
        },
        t2 = () => {
            (eW.current = performance.now()),
                t_(ew),
                tr.info(`[QV] | handleLoadStart | loadingStartTime: ${eW.current}`);
        },
        t3 = () => {
            if (!eY.current) return;
            let e = performance.now() - Z;
            tr.info(`[QV] | ⏰ Video FCP: ${e}ms`), ty(e), (eY.current = !1);
        },
        t6 = (e) => {
            null != eQ.current &&
                (tr.info(`[QV] | handleLoadedMetadata | videoAssetId: ${tu}`),
                e7(!0),
                tu !== C.fY.VIDEO_PLAYER_VIDEO_HLS && tX(ti),
                eq ? (eQ.current.volume = 0) : (eQ.current.volume = eX));
        },
        t4 = i.useCallback(() => {
            if (
                null == eQ.current ||
                (tr.info(`[QV] | handleTracksLoaded: textTracks.length: ${eQ.current.textTracks.length}`),
                0 === eQ.current.textTracks.length)
            )
                return;
            let e = eQ.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, g.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => t0(n)), (n.onexit = () => t1(n)));
                }
        }, [eQ, tr]);
    i.useEffect(() => {
        if (null == eJ.current) return;
        let e = eJ.current;
        return (
            e.addEventListener("load", t4),
            () => {
                null != e && e.removeEventListener("load", t4);
            }
        );
    }, [eJ, t4]);
    let t5 = (e) => {
            tr.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eb}`),
                eb && (tf(null != eW.current ? performance.now() - eW.current : null), eN(!1), td());
        },
        t7 = (e) => {
            (eK.current = performance.now()),
                tr.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eK.current}`),
                tA(),
                eO(!0);
        },
        t8 = (e) => {
            e >= t && (e3.current = !0), eM(e + z + Math.random() * q), tO(e);
        },
        t9 = (e) => {
            if (null == eQ.current) return;
            let r = eQ.current.currentTime >= t && !e3.current && e2;
            (eQ.current.currentTime >= eP || r) &&
                (tr.info(
                    `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${eQ.current.currentTime}`,
                ),
                t8(eQ.current.currentTime)),
                eQ.current.currentTime >= ek &&
                    (eU(eQ.current.currentTime + 1),
                    (0, I.Gn)(et.id, eI.taskType, eQ.current.currentTime),
                    n(eQ.current.currentTime)),
                ez(et.id, eQ.current.currentTime, eQ.current.duration),
                eS((eQ.current.currentTime / eQ.current.duration) * 100);
        },
        ne = (e) => {
            null != eQ.current &&
                (tO(eQ.current.duration + 1),
                tr.info(`[QV] | handleEnded: sending progress update: ${eQ.current.duration + 1}`),
                ez(et.id, eQ.current.duration, eQ.current.duration)),
                tR(M.Q6.ENDED),
                eO(!1);
        },
        nt = (e) => {
            if (null == eQ.current) return;
            tr.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${eQ.current.buffered.length}`);
            let t = [];
            for (let e = 0; e < eQ.current.buffered.length; e++) {
                let n = eQ.current.buffered.start(e),
                    r = eQ.current.buffered.end(e);
                r - n < 1 || t.push({ start: n / eQ.current.duration, size: (r - n) / eQ.current.duration });
            }
            eL(t);
        },
        nn = i.useCallback(
            (e) => {
                tr.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${eQ.current?.currentTime}, videoAssetId: ${tu}, connectionSpeed: ${ew}`,
                ),
                    tv(e);
            },
            [ew, tv, eQ, tu, tr],
        ),
        nr = () => nn(M.SB.ABORT),
        ni = () => nn(M.SB.ERROR),
        na = () => nn(M.SB.SOURCE_ERROR),
        ns = () => nn(M.SB.EMPTIED),
        no = () => nn(M.SB.STALLED),
        nl = i.useRef(!1);
    i.useEffect(() => {
        null != tl || nl.current || ((nl.current = !0), tv(M.SB.NO_VALID_SOURCE));
    }, [tl, tv, nl]);
    let nu = (e) => {
        tr.info(`[QV] | handleCanPlay: playerState: ${eh}`),
            null != eQ.current &&
                eh === M.Q6.PLAYING &&
                (tr.info("[QV] | handleCanPlay: did NOT early return"),
                eb && (tr.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eb}`), eN(!1)),
                eR &&
                    (tr.info(`[QV] | handleCanPlay: waitingForChunk: ${eR}`),
                    tI(null != eK.current ? performance.now() - eK.current : null),
                    eO(!1)),
                tr.info("[QV] | handleCanPlay: updating player state to playing"),
                tR(M.Q6.PLAYING));
    };
    i.useEffect(() => {
        if (!ev) return;
        let e = setTimeout(() => {
            eC(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [ev]);
    let nc = (e) => {
            tX(e), eh === M.Q6.ENDED && tR(M.Q6.PLAYING);
        },
        [{ controlBarAnimSpring: nd }, n_] = (0, _.zhh)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: K,
            onStart: () => {
                eB(!1);
            },
            onRest: (e) => {
                1 === e.value && eB(!0);
            },
        })),
        nf = (0, i.useRef)(null),
        [{ captionHeightSpring: nh }, np] = (0, _.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: K }));
    i.useEffect(
        () => (
            np({ captionHeightSpring: ea && null != te ? (nf.current?.clientHeight ?? 0) : 0, immediate: eZ }),
            () => {
                nh.stop();
            }
        ),
        [ea, np, eZ, te, nh],
    ),
        i.useEffect(
            () => (
                n_({ controlBarAnimSpring: tV || eG ? 1 : 0, immediate: eZ }),
                () => {
                    nd.stop();
                }
            ),
            [tV, n_, eZ, eG, nd],
        );
    let nm = eh === M.Q6.ENDED,
        ng = i.useMemo(() => (0, C.tW)(et, C.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [et]),
        nE = i.useMemo(() => (0, C.tW)(et, C.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [et]),
        nA = e1 || e$.maxTimestampSec >= (eQ.current?.currentTime ?? 0) + 1,
        nI = i.useMemo(() => null === (0, C.tW)(et, C.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [et]);
    return (0, r.jsx)(_.DUT, {
        className: j.W6,
        "data-fullscreen": eo,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: tM,
        onMouseLeave: tk,
        onMouseMove: tG,
        onKeyDown: tF,
        children: (0, r.jsxs)("div", {
            className: s()(j.NS, { [j.DO]: "portrait" === Q, [j.r7]: "landscape" === Q }),
            children: [
                nm &&
                    (0, r.jsx)(D.A, {
                        videoRef: eQ,
                        onExitFullScreen: t$,
                        onTrackQuestVideoFullscreenChanged: tS,
                        onTrackQuestContentClick: tE,
                        orientation: Q,
                    }),
                (0, r.jsxs)(p.A, {
                    ref: (e) => {
                        (eQ.current = e), (ef.current = e);
                    },
                    autoPlay: a,
                    playsInline: !0,
                    mediaLayoutType: eo ? B.dG.STATIC : B.dG.RESPONSIVE,
                    className: s()({ [j.R]: nm, [j.IR]: !0 }),
                    controls: !1,
                    poster: ng?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: t9,
                    onEnded: ne,
                    onLoadedData: t5,
                    onLoadedMetadata: t6,
                    onLoadStart: t2,
                    onPlaying: t3,
                    onWaiting: t7,
                    onProgress: nt,
                    onCanPlay: nu,
                    onCanPlayThrough: nu,
                    onSeeked: tZ,
                    onAbort: nr,
                    onError: ni,
                    onEmptied: ns,
                    onStalled: no,
                    onClick: tJ,
                    crossOrigin: "anonymous",
                    children: [
                        null != nE &&
                            (0, r.jsx)("track", {
                                ref: eJ,
                                src: nE.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != tl &&
                            tu !== C.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != tl.mimetype &&
                            (0, r.jsx)("source", { onError: na, src: tl.url, type: tl.mimetype }),
                    ],
                }),
                (eb || eR) &&
                    eh === M.Q6.PLAYING &&
                    null != tl &&
                    (0, r.jsx)("span", {
                        className: j.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(_.y$y, { type: _.y$y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(k.A, { hasVideoAsset: null != tl, playerState: eh, pauseReason: e6 }),
                (0, r.jsx)(l.animated.div, {
                    className: j.R4,
                    "data-testid": "discord-web-video-player-share-btn",
                    style: { opacity: (0, l.to)([nd.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                    children: (0, r.jsx)(w.A, {}),
                }),
                er &&
                    eh !== M.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(_.DUT, {
                                onClick: () => {
                                    eh === M.Q6.PAUSED && tR(M.Q6.PLAYING), ei(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: j.BG }),
                            }),
                            (0, r.jsx)(l.animated.div, {
                                className: s()(j.xr, { [j.MZ]: "portrait" === Q }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, l.to)([nd, nh], (e, t) => `${e * to[ta] + t}px`) },
                                children: (0, r.jsx)(P.y, { quest: et, onClose: tW }),
                            }),
                        ],
                    }),
                (0, r.jsx)(l.animated.div, {
                    className: j.Jp,
                    style: { opacity: (0, l.to)([nd.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                (0, r.jsx)(
                    "div",
                    {
                        className: s()(j.yf, { [j.ZH]: eh === M.Q6.PLAYING, [j.v7]: eh === M.Q6.PAUSED }),
                        children:
                            eh === M.Q6.PLAYING
                                ? (0, r.jsx)(_.udU, { className: j.PK })
                                : (0, r.jsx)(_.E$n, { className: j.PK }),
                    },
                    eh,
                ),
                ea &&
                    null != te &&
                    !nm &&
                    (0, r.jsx)(l.animated.div, {
                        className: j.o$,
                        ref: nf,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, l.to)([nd.to({ range: [0, 1], output: [0, -to[ta]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(_.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: j.qh,
                            children: te.text,
                        }),
                    }),
                (0, r.jsxs)(l.animated.div, {
                    className: j.r8,
                    style: { height: (0, l.to)([nd.to({ range: [0, 1], output: [0, to[ta]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(x.A, {
                            percent: null != ej ? ej : eT,
                            animate: !0 !== e0.current && !ev,
                            interactionEnabled: e1 && eV,
                            backgroundColor: tV ? void 0 : "rgba(0, 0, 0, 0.0)",
                            playerState: eh,
                            preloadedBuffers: tV ? eD : void 0,
                            duration: eQ.current?.duration ?? 1,
                            isFullyVisible: tV && eV,
                            maxSeekableTime: tV && eV ? tn : void 0,
                            onClick: nc,
                            onScrubBack: tz,
                            onScrubForward: tq,
                            "data-testid": "discord-web-video-player-timeline",
                        }),
                        (0, r.jsx)(l.animated.div, {
                            className: j.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, l.to)(
                                    [nd.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                paddingBottom: (0, l.to)(
                                    [nd.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, l.to)([nd.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: tB,
                            onBlur: tj,
                            children: (0, r.jsx)(O.A, {
                                videoRef: eQ,
                                orientation: Q,
                                playerState: eh,
                                animSpring: nd,
                                visible: tV,
                                seekForwardEnabled: nA,
                                hideCaptionBtn: null == nE,
                                hideTranscriptBtn: nI,
                                size: ta,
                                handlePlaybackBtnClick: tQ,
                                handleTranscriptBtnClick: tH,
                                handleCaptionBtnClick: tY,
                                handleFullScreenBtnClick: tK,
                                handleSeekBackBtnClick: tz,
                                handleSeekForwardBtnClick: tq,
                                handleControlBarPendingInteraction: eF,
                                onVolumeChange: tC,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
