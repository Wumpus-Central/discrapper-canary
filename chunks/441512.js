n.d(t, { A: () => k });
var r = n(627968),
    l = n(64700),
    i = n(942381),
    s = n(876230),
    a = n(645577),
    u = n(408278),
    o = n(789645),
    c = n(613373),
    d = n(931853),
    E = n(544180),
    f = n(723702),
    _ = n(340124),
    m = n(507107),
    p = n(405670),
    S = n(551875),
    C = n(851936),
    v = n(792620),
    A = n(753386),
    g = n(795068),
    h = n(678968),
    I = n(576199),
    D = n(758423),
    T = n(458817),
    R = n(854356),
    x = n(979204),
    O = n(190107),
    L = n(375708),
    P = n(924838),
    b = n(25920);
function k(e) {
    let t,
        {
            targetTimeSec: n,
            onOptimisticProgressUpdate: k,
            autoplay: N,
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
        H = (0, l.useRef)(null),
        K = (0, v.Yh)(B),
        G = B.userStatus?.completedAt != null,
        $ = !G,
        q = l.useMemo(() => B.config.features.includes(O.Li.FULL_EPISODE_VIDEO_QUEST), [B.config.features]),
        W = (0, p.Kr)((e) => e.videoProgress[B.id] ?? p.yc, i.x),
        z = (0, p.Kr)((e) => e.setVideoProgress),
        X = (0, p.Kr)((e) => e.volume),
        Z = (0, p.Kr)((e) => e.muted),
        J = (0, p.Kr)((e) => e.setVolume),
        ee = (0, p.Kr)((e) => e.setMuted),
        et = (0, a.g)(G, W, K.progressSeconds),
        [en] = l.useState(() => E.A.getEffectiveConnectionSpeed()),
        er = Math.max(W.maxTimestampSec, K.progressSeconds),
        el = G ? void 0 : (0, A.vd)(er, W.duration),
        { videoAsset: ei, videoAssetType: es } = (0, D.A)(H, en, et, w, !1),
        ea = l.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                return t || null != es
                    ? n === s.Q6.PAUSED && (r === s.KB.FOCUS || r === s.KB.PICTURE_IN_PICTURE)
                        ? L.intl.string(L.t.w6PeBF)
                        : (0, d.u)({ hasVideoAsset: t, playerState: n, pauseReason: r })
                    : (0, f.isWeb)()
                      ? L.intl.string(L.t["E1du/q"])
                      : L.intl.string(L.t["rStN/7"]);
            },
            [es],
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
            trackQuestContentClick: eD,
            trackQuestVideoProgressed: eT,
            trackQuestVideoSegmentWatched: eR,
        } = (0, T.A)({
            questId: B.id,
            isQuestCompleted: G,
            videoRef: H,
            hlsRef: eu,
            videoSessionId: F,
            videoAssetId: es,
            sourceQuestContent: M,
            logger: ec,
            isFullEpisodeVideoQuest: q,
            listenForHlsErrors: !1,
        });
    (0, R.A)({ videoAssetUrl: ei?.url, videoRef: H, hlsRef: eu, videoAssetType: es });
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
        eL = l.useCallback(() => H.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: eP,
            handleLoadEnd: eb,
            handleFirstFrame: ek,
            handleSeek: eN,
        } = (0, c.Yr)({ getCurrentVideoTime: eL, onAnalytics: eR, emitIntervalMs: c.KI, minSegmentDurationMs: c._4 }),
        ey = (0, l.useRef)(null),
        eV = l.useCallback(
            (e, t) => {
                switch ((eP(e, t), e)) {
                    case s.Q6.PLAYING:
                        H.current?.paused === !0 && em(ey.current), (ey.current = null);
                        break;
                    case s.Q6.PAUSED: {
                        let e = (function (e) {
                            switch (e) {
                                case s.KB.USER:
                                    return m.Yg.PAUSE_BUTTON;
                                case s.KB.FOCUS:
                                    return m.Yg.LOST_FOCUS;
                                case s.KB.VISIBILITY:
                                    return m.Yg.MODAL_CLOSED;
                                case s.KB.PICTURE_IN_PICTURE:
                                    return m.Yg.PICTURE_IN_PICTURE;
                                default:
                                    return null;
                            }
                        })(t);
                        null != e && ((ey.current = e), ep(e));
                    }
                    case s.Q6.ENDED:
                }
            },
            [eP, em, ep],
        ),
        eU = l.useCallback(() => {
            ef(en);
        }, [ef, en]),
        eQ = l.useCallback(
            (e) => {
                eb(e), e_(e);
            },
            [eb, e_],
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
                z(B.id, e, t), (0, _.Gn)(B.id, K.taskType, e), k(e);
                let r = q && e >= n && !eE.current;
                (e >= ed.current || r) &&
                    (r && (eE.current = !0),
                    (ed.current = e + O.aA + Math.random() * O.A6),
                    G || B.userStatus?.enrolledAt == null || (0, A.zv)(B, e),
                    eT());
            },
            [B, K.taskType, n, G, q, eT, z, k],
        ),
        eY = l.useCallback(
            (e, t) => {
                if ((eN(), null != H.current)) {
                    let n = H.current.duration;
                    z(B.id, e, n), z(B.id, t, n);
                }
            },
            [eN, B.id, z],
        ),
        ej = l.useCallback(() => {
            if (null != H.current) {
                let e = H.current.duration;
                G || B.userStatus?.enrolledAt == null || (0, A.zv)(B, e + 1), z(B.id, e, e), eT();
            }
        }, [B, G, z, eT]),
        eH = l.useCallback(
            (e, t) => {
                eh(e, t);
            },
            [eh],
        ),
        eK = l.useMemo(() => (0, S.tW)(B, S.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [B]),
        eG = l.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: b.A,
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
            () => (0, r.jsx)(h.A, { videoRef: H, onTrackQuestContentClick: eD, orientation: Q }),
            [eD, Q],
        );
    return (0, r.jsx)(c.Ft, {
        ref: H,
        parentTransitionState: V,
        autoplay: N,
        progressClassName: $ ? P.q : P.c,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !G,
        autoFocus: y,
        getPlaybackBlockedMessage: ea,
        orientation: Q,
        videoUrlOverride: w,
        src: ei?.url,
        poster: void 0,
        initialTimeSec: et,
        maxSeekableTimeSec: el,
        captionTrackUrl: eK?.url,
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
        onError: eH,
        onHlsInstance: eo,
        transcriptText: ex ?? void 0,
        transcriptClassName: b.f,
        renderPersistentOverlay: eG,
        renderEndScreen: e$,
        timelineIndicatorConfig: eO,
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
