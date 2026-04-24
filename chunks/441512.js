n.d(t, { A: () => y });
var r = n(627968),
    s = n(64700),
    a = n(942381),
    l = n(876230),
    i = n(645577),
    u = n(408278),
    o = n(789645),
    c = n(611051),
    d = n(931853),
    E = n(544180),
    m = n(723702),
    f = n(829219),
    _ = n(507107),
    S = n(405670),
    p = n(859387),
    v = n(851936),
    g = n(792620),
    h = n(753386),
    C = n(795068),
    A = n(678968),
    x = n(576199),
    D = n(758423),
    I = n(458817),
    T = n(873856),
    b = n(979204),
    O = n(654487),
    R = n(985018),
    k = n(924838),
    L = n(25920);
function y(e) {
    let t,
        {
            targetTimeSec: n,
            onOptimisticProgressUpdate: y,
            autoplay: N,
            autoFocus: M = !0,
            parentTransitionState: P,
            openedAtMs: w,
            orientation: V,
            videoUrlOverride: Q,
        } = e,
        {
            sourceQuestContent: j,
            quest: U,
            videoSessionId: B,
            setIsFullscreenEnabled: F,
            onClose: Y,
        } = s.useContext(C.a),
        H = (0, s.useRef)(null),
        K = (0, g.Yh)(U),
        G = U.userStatus?.completedAt != null,
        $ = !G,
        q = s.useMemo(() => U.config.features.includes(O.Li.FULL_EPISODE_VIDEO_QUEST), [U.config.features]),
        W = (0, S.Kr)((e) => e.videoProgress[U.id] ?? S.yc, a.x),
        z = (0, S.Kr)((e) => e.setVideoProgress),
        X = (0, S.Kr)((e) => e.volume),
        Z = (0, S.Kr)((e) => e.muted),
        J = (0, S.Kr)((e) => e.setVolume),
        ee = (0, S.Kr)((e) => e.setMuted),
        et = (0, i.g)(G, W, K.progressSeconds),
        [en] = s.useState(() => E.A.getEffectiveConnectionSpeed()),
        er = Math.max(W.maxTimestampSec, K.progressSeconds),
        es = G ? void 0 : (0, h.vd)(er, W.duration),
        { videoAsset: ea, videoAssetType: el } = (0, D.A)(H, en, et, Q, !1),
        ei = s.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                return t || null != el
                    ? n === l.Q6.PAUSED && r === l.KB.FOCUS
                        ? R.intl.string(R.t.w6PeBF)
                        : (0, d.u)({ hasVideoAsset: t, playerState: n, pauseReason: r })
                    : (0, m.isWeb)()
                      ? R.intl.string(R.t["E1du/q"])
                      : R.intl.string(R.t["rStN/7"]);
            },
            [el],
        ),
        eu = (0, s.useRef)(null),
        eo = s.useCallback((e) => {
            eu.current = e;
        }, []),
        ec = s.useMemo(() => (0, v.L)({ quest: U, location: O.rE.VIDEO_MODAL }), [U]),
        ed = (0, s.useRef)(0),
        eE = (0, s.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: em,
            trackQuestVideoLoadingEnded: ef,
            trackQuestVideoResumed: e_,
            trackQuestVideoPaused: eS,
            trackQuestVideoFocusChange: ep,
            trackQuestVideoBufferingStarted: ev,
            trackQuestVideoBufferingEnded: eg,
            trackQuestVideoTimeToFirstFrame: eh,
            trackQuestVideoFullscreenChanged: eC,
            trackQuestVideoError: eA,
            trackQuestVideoVolumeChanged: ex,
            trackQuestContentClick: eD,
            trackQuestVideoProgressed: eI,
            trackQuestVideoSegmentWatched: eT,
        } = (0, I.A)({
            questId: U.id,
            isQuestCompleted: G,
            videoRef: H,
            hlsRef: eu,
            videoSessionId: B,
            videoAssetId: el,
            sourceQuestContent: j,
            logger: ec,
            isFullEpisodeVideoQuest: q,
            listenForHlsErrors: !1,
        });
    (0, T.A)({ videoAssetUrl: ea?.url, videoRef: H, hlsRef: eu, videoAssetType: el });
    let eb =
            ((t = (0, S.Kr)((e) => e.transcript)),
            (s.useEffect(() => {
                let e = (0, p.tW)(U, p.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
                (null == t ||
                    t.questId !== U.id ||
                    t.fetchStatus === S.Lx.NONE ||
                    (t.fetchStatus === S.Lx.SUCCESS && e?.url !== t.url)) &&
                    (0, f.qY)(U);
            }, [t, U]),
            t?.questId === U.id && t?.fetchStatus === S.Lx.SUCCESS)
                ? (t.text ?? null)
                : null),
        eO = (0, b.A)({ targetSec: n, quest: U, sourceQuestContent: j, questConfig: U.config, clickable: G }),
        eR = s.useCallback(() => H.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: ek,
            handleLoadEnd: eL,
            handleFirstFrame: ey,
            handleSeek: eN,
        } = (0, c.Yr)({ getCurrentVideoTime: eR, onAnalytics: eT, emitIntervalMs: c.KI, minSegmentDurationMs: c._4 }),
        eM = (0, s.useRef)(null),
        eP = s.useCallback(
            (e, t) => {
                switch ((ek(e, t), e)) {
                    case l.Q6.PLAYING:
                        H.current?.paused === !0 && e_(eM.current), (eM.current = null);
                        break;
                    case l.Q6.PAUSED: {
                        let e = (function (e) {
                            switch (e) {
                                case l.KB.USER:
                                    return _.Yg.PAUSE_BUTTON;
                                case l.KB.FOCUS:
                                    return _.Yg.LOST_FOCUS;
                                case l.KB.VISIBILITY:
                                    return _.Yg.MODAL_CLOSED;
                                default:
                                    return null;
                            }
                        })(t);
                        null != e && ((eM.current = e), eS(e));
                    }
                    case l.Q6.ENDED:
                }
            },
            [ek, e_, eS],
        ),
        ew = s.useCallback(() => {
            em(en);
        }, [em, en]),
        eV = s.useCallback(
            (e) => {
                eL(e), ef(e);
            },
            [eL, ef],
        ),
        eQ = s.useCallback(
            (e) => {
                let t = e - w;
                ey(t), eh(t);
            },
            [ey, eh, w],
        ),
        ej = s.useCallback(
            (e) => {
                F(e), eC(e);
            },
            [F, eC],
        ),
        eU = s.useCallback(
            (e) => {
                J(e), ex(e);
            },
            [J, ex],
        ),
        eB = s.useCallback(
            (e, t) => {
                z(U.id, e, t), (0, f.Gn)(U.id, K.taskType, e), y(e);
                let r = q && e >= n && !eE.current;
                (e >= ed.current || r) &&
                    (r && (eE.current = !0),
                    (ed.current = e + O.aA + Math.random() * O.A6),
                    G || U.userStatus?.enrolledAt == null || (0, h.zv)(U, e),
                    eI());
            },
            [U, K.taskType, n, G, q, eI, z, y],
        ),
        eF = s.useCallback(
            (e, t) => {
                if ((eN(), null != H.current)) {
                    let n = H.current.duration;
                    z(U.id, e, n), z(U.id, t, n);
                }
            },
            [eN, U.id, z],
        ),
        eY = s.useCallback(() => {
            if (null != H.current) {
                let e = H.current.duration;
                G || U.userStatus?.enrolledAt == null || (0, h.zv)(U, e + 1), z(U.id, e, e), eI();
            }
        }, [U, G, z, eI]),
        eH = s.useCallback(
            (e, t) => {
                eA(e, t);
            },
            [eA],
        ),
        eK = s.useMemo(() => (0, p.tW)(U, p.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [U]),
        eG = s.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: L.A,
                    children: [
                        (0, r.jsx)(x.A, {}),
                        (0, r.jsx)(u.K, {
                            "data-testid": "video-quest-close-btn",
                            variant: "overlay-secondary",
                            icon: o.P,
                            "aria-label": R.intl.string(R.t.cpT0Cq),
                            onClick: Y,
                        }),
                    ],
                }),
            [Y],
        ),
        e$ = s.useCallback(
            () => (0, r.jsx)(A.A, { videoRef: H, onTrackQuestContentClick: eD, orientation: V }),
            [eD, V],
        );
    return (0, r.jsx)(c.Ft, {
        ref: H,
        parentTransitionState: P,
        autoplay: N,
        progressClassName: $ ? k.q : k.c,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !G,
        autoFocus: M,
        getPlaybackBlockedMessage: ei,
        orientation: V,
        videoUrlOverride: Q,
        src: ea?.url,
        poster: void 0,
        initialTimeSec: et,
        maxSeekableTimeSec: es,
        captionTrackUrl: eK?.url,
        onPlayerStateChange: eP,
        onLoadStart: ew,
        onLoadEnd: eV,
        onFirstFrame: eQ,
        onBufferingStart: ev,
        onBufferingEnd: eg,
        onFocusChange: ep,
        onFullscreenChange: ej,
        initialVolume: X,
        initialMuted: Z,
        onVolumeChange: eU,
        onMutedChange: (e) => {
            ee(e);
        },
        onProgressUpdate: eB,
        onSeek: eF,
        onEnded: eY,
        onError: eH,
        onHlsInstance: eo,
        transcriptText: eb ?? void 0,
        transcriptClassName: L.f,
        renderPersistentOverlay: eG,
        renderEndScreen: e$,
        timelineIndicatorConfig: eO,
        autoHideVolumeSlider: !0,
    });
}
