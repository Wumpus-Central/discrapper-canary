n.d(t, { A: () => k });
var r = n(627968),
    l = n(64700),
    i = n(942381),
    u = n(876230),
    a = n(645577),
    s = n(408278),
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
    L = n(190107),
    O = n(375708),
    P = n(111846),
    N = n(311872);
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
            videoUrlOverride: M,
        } = e,
        {
            sourceQuestContent: w,
            quest: B,
            videoSessionId: F,
            setIsFullscreenEnabled: Y,
            onClose: j,
        } = l.useContext(g.a),
        K = (0, l.useRef)(null),
        H = (0, v.Yh)(B),
        G = B.userStatus?.completedAt != null,
        $ = !G,
        q = l.useMemo(() => B.config.features.includes(L.Li.FULL_EPISODE_VIDEO_QUEST), [B.config.features]),
        W = (0, p.Kr)((e) => e.videoProgress[B.id] ?? p.yc, i.x),
        z = (0, p.Kr)((e) => e.setVideoProgress),
        X = (0, p.Kr)((e) => e.volume),
        Z = (0, p.Kr)((e) => e.muted),
        J = (0, p.Kr)((e) => e.setVolume),
        ee = (0, p.Kr)((e) => e.setMuted),
        et = (0, a.g)(G, W, H.progressSeconds),
        [en] = l.useState(() => E.A.getEffectiveConnectionSpeed()),
        er = Math.max(W.maxTimestampSec, H.progressSeconds),
        el = G ? void 0 : (0, A.vd)(er, W.duration),
        { videoAsset: ei, videoAssetType: eu } = (0, T.A)(K, en, et, M, !1),
        ea = l.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                return t || null != eu
                    ? n === u.Q6.PAUSED && (r === u.KB.FOCUS || r === u.KB.PICTURE_IN_PICTURE)
                        ? O.intl.string(O.t.w6PeBF)
                        : (0, d.u)({ hasVideoAsset: t, playerState: n, pauseReason: r })
                    : (0, f.isWeb)()
                      ? O.intl.string(O.t["E1du/q"])
                      : O.intl.string(O.t["rStN/7"]);
            },
            [eu],
        ),
        es = (0, l.useRef)(null),
        [eo, ec] = l.useState(null),
        ed = l.useCallback((e) => {
            (es.current = e), ec(e);
        }, []),
        eE = l.useMemo(() => (0, C.L)({ quest: B, location: L.rE.VIDEO_MODAL }), [B]),
        ef = (0, l.useRef)(0),
        e_ = (0, l.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: em,
            trackQuestVideoLoadingEnded: ep,
            trackQuestVideoResumed: eS,
            trackQuestVideoPaused: eC,
            trackQuestVideoFocusChange: ev,
            trackQuestVideoBufferingStarted: eA,
            trackQuestVideoBufferingEnded: eg,
            trackQuestVideoTimeToFirstFrame: eh,
            trackQuestVideoFullscreenChanged: eI,
            trackQuestVideoError: eT,
            trackQuestVideoVolumeChanged: eD,
            trackQuestContentClick: eR,
            trackQuestVideoProgressed: ex,
            trackQuestVideoSegmentWatched: eL,
        } = (0, D.A)({
            questId: B.id,
            isQuestCompleted: G,
            videoRef: K,
            hlsRef: es,
            videoSessionId: F,
            videoAssetId: eu,
            sourceQuestContent: w,
            logger: eE,
            isFullEpisodeVideoQuest: q,
            listenForHlsErrors: !1,
        });
    (0, R.A)({ videoAssetUrl: ei?.url, videoRef: K, hls: eo, videoAssetType: eu });
    let eO =
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
        eP = (0, x.A)({ targetSec: n, quest: B, sourceQuestContent: w, questConfig: B.config, clickable: G }),
        eN = l.useCallback(() => K.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: ek,
            handleLoadEnd: eb,
            handleFirstFrame: ey,
            handleSeek: eV,
        } = (0, c.Yr)({ getCurrentVideoTime: eN, onAnalytics: eL, emitIntervalMs: c.KI, minSegmentDurationMs: c._4 }),
        eU = (0, l.useRef)(null),
        eQ = l.useCallback(
            (e, t) => {
                switch ((ek(e, t), e)) {
                    case u.Q6.PLAYING:
                        K.current?.paused === !0 && eS(eU.current), (eU.current = null);
                        break;
                    case u.Q6.PAUSED: {
                        let e = (function (e) {
                            switch (e) {
                                case u.KB.USER:
                                    return m.Yg.PAUSE_BUTTON;
                                case u.KB.FOCUS:
                                    return m.Yg.LOST_FOCUS;
                                case u.KB.VISIBILITY:
                                    return m.Yg.MODAL_CLOSED;
                                case u.KB.PICTURE_IN_PICTURE:
                                    return m.Yg.PICTURE_IN_PICTURE;
                                default:
                                    return null;
                            }
                        })(t);
                        null != e && ((eU.current = e), eC(e));
                    }
                    case u.Q6.ENDED:
                }
            },
            [ek, eS, eC],
        ),
        eM = l.useCallback(() => {
            em(en);
        }, [em, en]),
        ew = l.useCallback(
            (e) => {
                eb(e), ep(e);
            },
            [eb, ep],
        ),
        eB = l.useCallback(
            (e) => {
                let t = e - U;
                ey(t), eh(t);
            },
            [ey, eh, U],
        ),
        eF = l.useCallback(
            (e) => {
                Y(e), eI(e);
            },
            [Y, eI],
        ),
        eY = l.useCallback(
            (e) => {
                J(e), eD(e);
            },
            [J, eD],
        ),
        ej = l.useCallback(
            (e, t) => {
                z(B.id, e, t), (0, _.Gn)(B.id, H.taskType, e), k(e);
                let r = q && e >= n && !e_.current;
                (e >= ef.current || r) &&
                    (r && (e_.current = !0),
                    (ef.current = e + L.aA + Math.random() * L.A6),
                    G || B.userStatus?.enrolledAt == null || (0, A.zv)(B, e),
                    ex());
            },
            [B, H.taskType, n, G, q, ex, z, k],
        ),
        eK = l.useCallback(
            (e, t) => {
                if ((eV(), null != K.current)) {
                    let n = K.current.duration;
                    z(B.id, e, n), z(B.id, t, n);
                }
            },
            [eV, B.id, z],
        ),
        eH = l.useCallback(() => {
            if (null != K.current) {
                let e = K.current.duration;
                G || B.userStatus?.enrolledAt == null || (0, A.zv)(B, e + 1), z(B.id, e, e), ex();
            }
        }, [B, G, z, ex]),
        eG = l.useCallback(
            (e, t) => {
                eT(e, t);
            },
            [eT],
        ),
        e$ = l.useMemo(() => (0, S.tW)(B, S.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [B]),
        eq = l.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: N.A,
                    children: [
                        (0, r.jsx)(I.A, {}),
                        (0, r.jsx)(s.K, {
                            "data-testid": "video-quest-close-btn",
                            variant: "overlay-secondary",
                            icon: o.P,
                            "aria-label": O.intl.string(O.t.cpT0Cq),
                            onClick: j,
                        }),
                    ],
                }),
            [j],
        ),
        eW = l.useCallback(
            () => (0, r.jsx)(h.A, { videoRef: K, onTrackQuestContentClick: eR, orientation: Q }),
            [eR, Q],
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
        getPlaybackBlockedMessage: ea,
        orientation: Q,
        videoUrlOverride: M,
        src: ei?.url,
        poster: void 0,
        initialTimeSec: et,
        maxSeekableTimeSec: el,
        captionTrackUrl: e$?.url,
        onPlayerStateChange: eQ,
        onLoadStart: eM,
        onLoadEnd: ew,
        onFirstFrame: eB,
        onBufferingStart: eA,
        onBufferingEnd: eg,
        onFocusChange: ev,
        onFullscreenChange: eF,
        initialVolume: X,
        initialMuted: Z,
        onVolumeChange: eY,
        onMutedChange: function (e) {
            ee(e);
        },
        onProgressUpdate: ej,
        onSeek: eK,
        onEnded: eH,
        onError: eG,
        onHlsInstance: ed,
        transcriptText: eO ?? void 0,
        transcriptClassName: N.f,
        renderPersistentOverlay: eq,
        renderEndScreen: eW,
        timelineIndicatorConfig: eP,
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
