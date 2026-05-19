n.d(t, { A: () => N });
var r = n(627968),
    l = n(64700),
    s = n(942381),
    a = n(876230),
    i = n(645577),
    u = n(408278),
    o = n(789645),
    c = n(613373),
    d = n(931853),
    E = n(544180),
    m = n(723702),
    f = n(340124),
    _ = n(507107),
    S = n(405670),
    p = n(859387),
    v = n(851936),
    C = n(792620),
    g = n(753386),
    A = n(795068),
    h = n(678968),
    D = n(576199),
    x = n(758423),
    T = n(458817),
    I = n(854356),
    b = n(979204),
    O = n(190107),
    R = n(375708),
    L = n(924838),
    k = n(25920);
function N(e) {
    let t,
        {
            targetTimeSec: n,
            onOptimisticProgressUpdate: N,
            autoplay: P,
            autoFocus: y = !0,
            parentTransitionState: M,
            openedAtMs: V,
            orientation: w,
            videoUrlOverride: Q,
        } = e,
        {
            sourceQuestContent: j,
            quest: U,
            videoSessionId: B,
            setIsFullscreenEnabled: F,
            onClose: Y,
        } = l.useContext(A.a),
        K = (0, l.useRef)(null),
        H = (0, C.Yh)(U),
        G = U.userStatus?.completedAt != null,
        $ = !G,
        q = l.useMemo(() => U.config.features.includes(O.Li.FULL_EPISODE_VIDEO_QUEST), [U.config.features]),
        W = (0, S.Kr)((e) => e.videoProgress[U.id] ?? S.yc, s.x),
        z = (0, S.Kr)((e) => e.setVideoProgress),
        X = (0, S.Kr)((e) => e.volume),
        Z = (0, S.Kr)((e) => e.muted),
        J = (0, S.Kr)((e) => e.setVolume),
        ee = (0, S.Kr)((e) => e.setMuted),
        et = (0, i.g)(G, W, H.progressSeconds),
        [en] = l.useState(() => E.A.getEffectiveConnectionSpeed()),
        er = Math.max(W.maxTimestampSec, H.progressSeconds),
        el = G ? void 0 : (0, g.vd)(er, W.duration),
        { videoAsset: es, videoAssetType: ea } = (0, x.A)(K, en, et, Q, !1),
        ei = l.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                return t || null != ea
                    ? n === a.Q6.PAUSED && r === a.KB.FOCUS
                        ? R.intl.string(R.t.w6PeBF)
                        : (0, d.u)({ hasVideoAsset: t, playerState: n, pauseReason: r })
                    : (0, m.isWeb)()
                      ? R.intl.string(R.t["E1du/q"])
                      : R.intl.string(R.t["rStN/7"]);
            },
            [ea],
        ),
        eu = (0, l.useRef)(null),
        eo = l.useCallback((e) => {
            eu.current = e;
        }, []),
        ec = l.useMemo(() => (0, v.L)({ quest: U, location: O.rE.VIDEO_MODAL }), [U]),
        ed = (0, l.useRef)(0),
        eE = (0, l.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: em,
            trackQuestVideoLoadingEnded: ef,
            trackQuestVideoResumed: e_,
            trackQuestVideoPaused: eS,
            trackQuestVideoFocusChange: ep,
            trackQuestVideoBufferingStarted: ev,
            trackQuestVideoBufferingEnded: eC,
            trackQuestVideoTimeToFirstFrame: eg,
            trackQuestVideoFullscreenChanged: eA,
            trackQuestVideoError: eh,
            trackQuestVideoVolumeChanged: eD,
            trackQuestContentClick: ex,
            trackQuestVideoProgressed: eT,
            trackQuestVideoSegmentWatched: eI,
        } = (0, T.A)({
            questId: U.id,
            isQuestCompleted: G,
            videoRef: K,
            hlsRef: eu,
            videoSessionId: B,
            videoAssetId: ea,
            sourceQuestContent: j,
            logger: ec,
            isFullEpisodeVideoQuest: q,
            listenForHlsErrors: !1,
        });
    (0, I.A)({ videoAssetUrl: es?.url, videoRef: K, hlsRef: eu, videoAssetType: ea });
    let eb =
            ((t = (0, S.Kr)((e) => e.transcript)),
            (l.useEffect(() => {
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
        eR = l.useCallback(() => K.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: eL,
            handleLoadEnd: ek,
            handleFirstFrame: eN,
            handleSeek: eP,
        } = (0, c.Yr)({ getCurrentVideoTime: eR, onAnalytics: eI, emitIntervalMs: c.KI, minSegmentDurationMs: c._4 }),
        ey = (0, l.useRef)(null),
        eM = l.useCallback(
            (e, t) => {
                switch ((eL(e, t), e)) {
                    case a.Q6.PLAYING:
                        K.current?.paused === !0 && e_(ey.current), (ey.current = null);
                        break;
                    case a.Q6.PAUSED: {
                        let e = (function (e) {
                            switch (e) {
                                case a.KB.USER:
                                    return _.Yg.PAUSE_BUTTON;
                                case a.KB.FOCUS:
                                    return _.Yg.LOST_FOCUS;
                                case a.KB.VISIBILITY:
                                    return _.Yg.MODAL_CLOSED;
                                default:
                                    return null;
                            }
                        })(t);
                        null != e && ((ey.current = e), eS(e));
                    }
                    case a.Q6.ENDED:
                }
            },
            [eL, e_, eS],
        ),
        eV = l.useCallback(() => {
            em(en);
        }, [em, en]),
        ew = l.useCallback(
            (e) => {
                ek(e), ef(e);
            },
            [ek, ef],
        ),
        eQ = l.useCallback(
            (e) => {
                let t = e - V;
                eN(t), eg(t);
            },
            [eN, eg, V],
        ),
        ej = l.useCallback(
            (e) => {
                F(e), eA(e);
            },
            [F, eA],
        ),
        eU = l.useCallback(
            (e) => {
                J(e), eD(e);
            },
            [J, eD],
        ),
        eB = l.useCallback(
            (e, t) => {
                z(U.id, e, t), (0, f.Gn)(U.id, H.taskType, e), N(e);
                let r = q && e >= n && !eE.current;
                (e >= ed.current || r) &&
                    (r && (eE.current = !0),
                    (ed.current = e + O.aA + Math.random() * O.A6),
                    G || U.userStatus?.enrolledAt == null || (0, g.zv)(U, e),
                    eT());
            },
            [U, H.taskType, n, G, q, eT, z, N],
        ),
        eF = l.useCallback(
            (e, t) => {
                if ((eP(), null != K.current)) {
                    let n = K.current.duration;
                    z(U.id, e, n), z(U.id, t, n);
                }
            },
            [eP, U.id, z],
        ),
        eY = l.useCallback(() => {
            if (null != K.current) {
                let e = K.current.duration;
                G || U.userStatus?.enrolledAt == null || (0, g.zv)(U, e + 1), z(U.id, e, e), eT();
            }
        }, [U, G, z, eT]),
        eK = l.useCallback(
            (e, t) => {
                eh(e, t);
            },
            [eh],
        ),
        eH = l.useMemo(() => (0, p.tW)(U, p.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [U]),
        eG = l.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: k.A,
                    children: [
                        (0, r.jsx)(D.A, {}),
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
        e$ = l.useCallback(
            () => (0, r.jsx)(h.A, { videoRef: K, onTrackQuestContentClick: ex, orientation: w }),
            [ex, w],
        );
    return (0, r.jsx)(c.Ft, {
        ref: K,
        parentTransitionState: M,
        autoplay: P,
        progressClassName: $ ? L.q : L.c,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !G,
        autoFocus: y,
        getPlaybackBlockedMessage: ei,
        orientation: w,
        videoUrlOverride: Q,
        src: es?.url,
        poster: void 0,
        initialTimeSec: et,
        maxSeekableTimeSec: el,
        captionTrackUrl: eH?.url,
        onPlayerStateChange: eM,
        onLoadStart: eV,
        onLoadEnd: ew,
        onFirstFrame: eQ,
        onBufferingStart: ev,
        onBufferingEnd: eC,
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
        onError: eK,
        onHlsInstance: eo,
        transcriptText: eb ?? void 0,
        transcriptClassName: k.f,
        renderPersistentOverlay: eG,
        renderEndScreen: e$,
        timelineIndicatorConfig: eO,
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
