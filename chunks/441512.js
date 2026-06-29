n.d(t, { A: () => k });
var r = n(627968),
    l = n(64700),
    i = n(942381),
    a = n(876230),
    s = n(645577),
    u = n(408278),
    o = n(789645),
    c = n(613373),
    d = n(931853),
    E = n(544180),
    f = n(723702),
    _ = n(340124),
    m = n(24001),
    p = n(405670),
    S = n(46948),
    C = n(851936),
    v = n(792620),
    A = n(753386),
    g = n(795068),
    h = n(678968),
    I = n(576199),
    T = n(758423),
    D = n(458817),
    R = n(854356),
    x = n(979204),
    O = n(190107),
    L = n(375708),
    P = n(924838),
    N = n(25920);
function k(e) {
    let t,
        {
            targetTimeSec: n,
            onOptimisticProgressUpdate: k,
            autoplay: b,
            autoFocus: y = !0,
            parentTransitionState: V,
            openedAtMs: U,
            orientation: Q,
            videoUrlOverride: w,
        } = e,
        {
            sourceQuestContent: M,
            quest: B,
            videoSessionId: F,
            setIsFullscreenEnabled: Y,
            onClose: j,
        } = l.useContext(g.a),
        K = (0, l.useRef)(null),
        H = (0, v.Yh)(B),
        G = B.userStatus?.completedAt != null,
        $ = !G,
        q = l.useMemo(() => B.config.features.includes(O.Li.FULL_EPISODE_VIDEO_QUEST), [B.config.features]),
        W = (0, p.Kr)((e) => e.videoProgress[B.id] ?? p.yc, i.x),
        z = (0, p.Kr)((e) => e.setVideoProgress),
        X = (0, p.Kr)((e) => e.volume),
        Z = (0, p.Kr)((e) => e.muted),
        J = (0, p.Kr)((e) => e.setVolume),
        ee = (0, p.Kr)((e) => e.setMuted),
        et = (0, s.g)(G, W, H.progressSeconds),
        [en] = l.useState(() => E.A.getEffectiveConnectionSpeed()),
        er = Math.max(W.maxTimestampSec, H.progressSeconds),
        el = G ? void 0 : (0, A.vd)(er, W.duration),
        { videoAsset: ei, videoAssetType: ea } = (0, T.A)(K, en, et, w, !1),
        es = l.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                return t || null != ea
                    ? n === a.Q6.PAUSED && (r === a.KB.FOCUS || r === a.KB.PICTURE_IN_PICTURE)
                        ? L.intl.string(L.t.w6PeBF)
                        : (0, d.u)({ hasVideoAsset: t, playerState: n, pauseReason: r })
                    : (0, f.isWeb)()
                      ? L.intl.string(L.t["E1du/q"])
                      : L.intl.string(L.t["rStN/7"]);
            },
            [ea],
        ),
        eu = (0, l.useRef)(null),
        eo = l.useCallback((e) => {
            eu.current = e;
        }, []),
        ec = l.useMemo(() => (0, C.L)({ quest: B, location: O.rE.VIDEO_MODAL }), [B]),
        ed = (0, l.useRef)(0),
        eE = (0, l.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: ef,
            trackQuestVideoLoadingEnded: e_,
            trackQuestVideoResumed: em,
            trackQuestVideoPaused: ep,
            trackQuestVideoFocusChange: eS,
            trackQuestVideoBufferingStarted: eC,
            trackQuestVideoBufferingEnded: ev,
            trackQuestVideoTimeToFirstFrame: eA,
            trackQuestVideoFullscreenChanged: eg,
            trackQuestVideoError: eh,
            trackQuestVideoVolumeChanged: eI,
            trackQuestContentClick: eT,
            trackQuestVideoProgressed: eD,
            trackQuestVideoSegmentWatched: eR,
        } = (0, D.A)({
            questId: B.id,
            isQuestCompleted: G,
            videoRef: K,
            hlsRef: eu,
            videoSessionId: F,
            videoAssetId: ea,
            sourceQuestContent: M,
            logger: ec,
            isFullEpisodeVideoQuest: q,
            listenForHlsErrors: !1,
        });
    (0, R.A)({ videoAssetUrl: ei?.url, videoRef: K, hlsRef: eu, videoAssetType: ea });
    let ex =
            ((t = (0, p.Kr)((e) => e.transcript)),
            (l.useEffect(() => {
                let e = (0, S.tW)(B, S.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
                (null == t ||
                    t.questId !== B.id ||
                    t.fetchStatus === p.Lx.NONE ||
                    (t.fetchStatus === p.Lx.SUCCESS && e?.url !== t.url)) &&
                    (0, _.qY)(B);
            }, [t, B]),
            t?.questId === B.id && t?.fetchStatus === p.Lx.SUCCESS)
                ? (t.text ?? null)
                : null),
        eO = (0, x.A)({ targetSec: n, quest: B, sourceQuestContent: M, questConfig: B.config, clickable: G }),
        eL = l.useCallback(() => K.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: eP,
            handleLoadEnd: eN,
            handleFirstFrame: ek,
            handleSeek: eb,
        } = (0, c.Yr)({ getCurrentVideoTime: eL, onAnalytics: eR, emitIntervalMs: c.KI, minSegmentDurationMs: c._4 }),
        ey = (0, l.useRef)(null),
        eV = l.useCallback(
            (e, t) => {
                switch ((eP(e, t), e)) {
                    case a.Q6.PLAYING:
                        K.current?.paused === !0 && em(ey.current), (ey.current = null);
                        break;
                    case a.Q6.PAUSED: {
                        let e = (function (e) {
                            switch (e) {
                                case a.KB.USER:
                                    return m.Yg.PAUSE_BUTTON;
                                case a.KB.FOCUS:
                                    return m.Yg.LOST_FOCUS;
                                case a.KB.VISIBILITY:
                                    return m.Yg.MODAL_CLOSED;
                                case a.KB.PICTURE_IN_PICTURE:
                                    return m.Yg.PICTURE_IN_PICTURE;
                                default:
                                    return null;
                            }
                        })(t);
                        null != e && ((ey.current = e), ep(e));
                    }
                    case a.Q6.ENDED:
                }
            },
            [eP, em, ep],
        ),
        eU = l.useCallback(() => {
            ef(en);
        }, [ef, en]),
        eQ = l.useCallback(
            (e) => {
                eN(e), e_(e);
            },
            [eN, e_],
        ),
        ew = l.useCallback(
            (e) => {
                let t = e - U;
                ek(t), eA(t);
            },
            [ek, eA, U],
        ),
        eM = l.useCallback(
            (e) => {
                Y(e), eg(e);
            },
            [Y, eg],
        ),
        eB = l.useCallback(
            (e) => {
                J(e), eI(e);
            },
            [J, eI],
        ),
        eF = l.useCallback(
            (e, t) => {
                z(B.id, e, t), (0, _.Gn)(B.id, H.taskType, e), k(e);
                let r = q && e >= n && !eE.current;
                (e >= ed.current || r) &&
                    (r && (eE.current = !0),
                    (ed.current = e + O.aA + Math.random() * O.A6),
                    G || B.userStatus?.enrolledAt == null || (0, A.zv)(B, e),
                    eD());
            },
            [B, H.taskType, n, G, q, eD, z, k],
        ),
        eY = l.useCallback(
            (e, t) => {
                if ((eb(), null != K.current)) {
                    let n = K.current.duration;
                    z(B.id, e, n), z(B.id, t, n);
                }
            },
            [eb, B.id, z],
        ),
        ej = l.useCallback(() => {
            if (null != K.current) {
                let e = K.current.duration;
                G || B.userStatus?.enrolledAt == null || (0, A.zv)(B, e + 1), z(B.id, e, e), eD();
            }
        }, [B, G, z, eD]),
        eK = l.useCallback(
            (e, t) => {
                eh(e, t);
            },
            [eh],
        ),
        eH = l.useMemo(() => (0, S.tW)(B, S.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [B]),
        eG = l.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: N.A,
                    children: [
                        (0, r.jsx)(I.A, {}),
                        (0, r.jsx)(u.K, {
                            "data-testid": "video-quest-close-btn",
                            variant: "overlay-secondary",
                            icon: o.P,
                            "aria-label": L.intl.string(L.t.cpT0Cq),
                            onClick: j,
                        }),
                    ],
                }),
            [j],
        ),
        e$ = l.useCallback(
            () => (0, r.jsx)(h.A, { videoRef: K, onTrackQuestContentClick: eT, orientation: Q }),
            [eT, Q],
        );
    return (0, r.jsx)(c.Ft, {
        ref: K,
        parentTransitionState: V,
        autoplay: b,
        progressClassName: $ ? P.q : P.c,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !G,
        autoFocus: y,
        getPlaybackBlockedMessage: es,
        orientation: Q,
        videoUrlOverride: w,
        src: ei?.url,
        poster: void 0,
        initialTimeSec: et,
        maxSeekableTimeSec: el,
        captionTrackUrl: eH?.url,
        onPlayerStateChange: eV,
        onLoadStart: eU,
        onLoadEnd: eQ,
        onFirstFrame: ew,
        onBufferingStart: eC,
        onBufferingEnd: ev,
        onFocusChange: eS,
        onFullscreenChange: eM,
        initialVolume: X,
        initialMuted: Z,
        onVolumeChange: eB,
        onMutedChange: function (e) {
            ee(e);
        },
        onProgressUpdate: eF,
        onSeek: eY,
        onEnded: ej,
        onError: eK,
        onHlsInstance: eo,
        transcriptText: ex ?? void 0,
        transcriptClassName: N.f,
        renderPersistentOverlay: eG,
        renderEndScreen: e$,
        timelineIndicatorConfig: eO,
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
