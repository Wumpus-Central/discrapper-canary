n.d(t, { A: () => k });
var r = n(477900),
    l = n(582128),
    i = n(462180),
    s = n(876230),
    u = n(645577),
    a = n(408278),
    o = n(789645),
    c = n(613373),
    d = n(931853),
    E = n(544180),
    _ = n(723702),
    f = n(396813),
    p = n(738822),
    m = n(405670),
    S = n(291749),
    v = n(851936),
    C = n(792620),
    A = n(753386),
    h = n(795068),
    g = n(678968),
    I = n(576199),
    D = n(758423),
    T = n(103515),
    R = n(854356),
    x = n(979204),
    L = n(190107),
    O = n(375708),
    P = n(451713),
    N = n(215805);
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
            setIsFullscreenEnabled: j,
            onClose: Y,
        } = l.useContext(h.a),
        K = (0, l.useRef)(null),
        H = (0, C.Yh)(B),
        G = B.userStatus?.completedAt != null,
        $ = !G,
        q = l.useMemo(() => B.config.features.includes(L.Li.FULL_EPISODE_VIDEO_QUEST), [B.config.features]),
        W = (0, m.Kr)((e) => e.videoProgress[B.id] ?? m.yc, i.x),
        z = (0, m.Kr)((e) => e.setVideoProgress),
        X = (0, m.Kr)((e) => e.volume),
        Z = (0, m.Kr)((e) => e.muted),
        J = (0, m.Kr)((e) => e.setVolume),
        ee = (0, m.Kr)((e) => e.setMuted),
        et = (0, u.g)(G, W, H.progressSeconds),
        [en] = l.useState(() => E.A.getEffectiveConnectionSpeed()),
        er = Math.max(W.maxTimestampSec, H.progressSeconds),
        el = G ? void 0 : (0, A.vd)(er, W.duration),
        { videoAsset: ei, videoAssetType: es } = (0, D.A)(K, en, et, M, !1),
        eu = l.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                return t || null != es
                    ? n === s.Q6.PAUSED && (r === s.KB.FOCUS || r === s.KB.PICTURE_IN_PICTURE)
                        ? O.intl.string(O.t.w6PeBF)
                        : (0, d.u)({ hasVideoAsset: t, playerState: n, pauseReason: r })
                    : (0, _.isWeb)()
                      ? O.intl.string(O.t["E1du/q"])
                      : O.intl.string(O.t["rStN/7"]);
            },
            [es],
        ),
        ea = (0, l.useRef)(null),
        [eo, ec] = l.useState(null),
        ed = l.useCallback((e) => {
            ((ea.current = e), ec(e));
        }, []),
        eE = l.useMemo(() => (0, v.L)({ quest: B, location: L.rE.VIDEO_MODAL }), [B]),
        e_ = (0, l.useRef)(0),
        ef = (0, l.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: ep,
            trackQuestVideoLoadingEnded: em,
            trackQuestVideoResumed: eS,
            trackQuestVideoPaused: ev,
            trackQuestVideoFocusChange: eC,
            trackQuestVideoBufferingStarted: eA,
            trackQuestVideoBufferingEnded: eh,
            trackQuestVideoTimeToFirstFrame: eg,
            trackQuestVideoFullscreenChanged: eI,
            trackQuestVideoError: eD,
            trackQuestVideoVolumeChanged: eT,
            trackQuestContentClick: eR,
            trackQuestVideoProgressed: ex,
            trackQuestVideoSegmentWatched: eL,
            handleEngagedViewProgress: eO,
        } = (0, T.A)({
            questId: B.id,
            isQuestCompleted: G,
            videoRef: K,
            hlsRef: ea,
            videoSessionId: F,
            videoAssetId: es,
            sourceQuestContent: w,
            logger: eE,
            isFullEpisodeVideoQuest: q,
            listenForHlsErrors: !1,
        });
    (0, R.A)({ videoAssetUrl: ei?.url, videoRef: K, hls: eo, videoAssetType: es });
    let eP =
            ((t = (0, m.Kr)((e) => e.transcript)),
            (l.useEffect(() => {
                let e = (0, S.tW)(B, S.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
                (null == t ||
                    t.questId !== B.id ||
                    t.fetchStatus === m.Lx.NONE ||
                    (t.fetchStatus === m.Lx.SUCCESS && e?.url !== t.url)) &&
                    (0, f.qY)(B);
            }, [t, B]),
            t?.questId === B.id && t?.fetchStatus === m.Lx.SUCCESS)
                ? (t.text ?? null)
                : null),
        eN = (0, x.A)({ targetSec: n, quest: B, sourceQuestContent: w, questConfig: B.config, clickable: G }),
        ek = l.useCallback(() => K.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: eb,
            handleLoadEnd: ey,
            handleFirstFrame: eV,
            handleSeek: eU,
        } = (0, c.Yr)({ getCurrentVideoTime: ek, onAnalytics: eL, emitIntervalMs: c.KI, minSegmentDurationMs: c._4 }),
        eQ = (0, l.useRef)(null),
        eM = l.useCallback(
            (e, t) => {
                switch ((eb(e, t), e)) {
                    case s.Q6.PLAYING:
                        (K.current?.paused === !0 && eS(eQ.current), (eQ.current = null));
                        break;
                    case s.Q6.PAUSED: {
                        let e = (function (e) {
                            switch (e) {
                                case s.KB.USER:
                                    return p.Yg.PAUSE_BUTTON;
                                case s.KB.FOCUS:
                                    return p.Yg.LOST_FOCUS;
                                case s.KB.VISIBILITY:
                                    return p.Yg.MODAL_CLOSED;
                                case s.KB.PICTURE_IN_PICTURE:
                                    return p.Yg.PICTURE_IN_PICTURE;
                                default:
                                    return null;
                            }
                        })(t);
                        (null != e && ((eQ.current = e), ev(e)),
                            null != K.current &&
                                eO({
                                    positionSeconds: K.current.currentTime,
                                    durationSeconds: K.current.duration,
                                    isPlaying: !1,
                                }));
                    }
                    case s.Q6.ENDED:
                }
            },
            [eb, eS, ev, eO],
        ),
        ew = l.useCallback(() => {
            ep(en);
        }, [ep, en]),
        eB = l.useCallback(
            (e) => {
                (ey(e), em(e));
            },
            [ey, em],
        ),
        eF = l.useCallback(
            (e) => {
                let t = e - U;
                (eV(t), eg(t));
            },
            [eV, eg, U],
        ),
        ej = l.useCallback(
            (e) => {
                (j(e), eI(e));
            },
            [j, eI],
        ),
        eY = l.useCallback(
            (e) => {
                (J(e), eT(e));
            },
            [J, eT],
        ),
        eK = l.useCallback(
            (e, t) => {
                (z(B.id, e, t),
                    (0, f.Gn)(B.id, H.taskType, e),
                    k(e),
                    eO({ positionSeconds: e, durationSeconds: t, isPlaying: null != K.current && !K.current.paused }));
                let r = q && e >= n && !ef.current;
                (e >= e_.current || r) &&
                    (r && (ef.current = !0),
                    (e_.current = e + L.aA + Math.random() * L.A6),
                    G || B.userStatus?.enrolledAt == null || (0, A.zv)(B, e),
                    ex());
            },
            [B, H.taskType, n, G, q, ex, z, k, eO],
        ),
        eH = l.useCallback(
            (e, t) => {
                if ((eU(), null != K.current)) {
                    let n = K.current.duration;
                    (z(B.id, e, n), z(B.id, t, n));
                }
            },
            [eU, B.id, z],
        ),
        eG = l.useCallback(() => {
            if (null != K.current) {
                let e = K.current.duration;
                (G || B.userStatus?.enrolledAt == null || (0, A.zv)(B, e + 1), z(B.id, e, e), ex());
            }
        }, [B, G, z, ex]),
        e$ = l.useCallback(
            (e, t) => {
                eD(e, t);
            },
            [eD],
        ),
        eq = l.useMemo(() => (0, S.tW)(B, S.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [B]),
        eW = l.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: N.A,
                    children: [
                        (0, r.jsx)(I.A, {}),
                        (0, r.jsx)(a.K, {
                            "data-testid": "video-quest-close-btn",
                            variant: "overlay-secondary",
                            icon: o.P,
                            "aria-label": O.intl.string(O.t.cpT0Cq),
                            onClick: Y,
                        }),
                    ],
                }),
            [Y],
        ),
        ez = l.useCallback(
            () => (0, r.jsx)(g.A, { videoRef: K, onTrackQuestContentClick: eR, orientation: Q }),
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
        getPlaybackBlockedMessage: eu,
        orientation: Q,
        videoUrlOverride: M,
        src: ei?.url,
        poster: void 0,
        initialTimeSec: et,
        maxSeekableTimeSec: el,
        captionTrackUrl: eq?.url,
        onPlayerStateChange: eM,
        onLoadStart: ew,
        onLoadEnd: eB,
        onFirstFrame: eF,
        onBufferingStart: eA,
        onBufferingEnd: eh,
        onFocusChange: eC,
        onFullscreenChange: ej,
        initialVolume: X,
        initialMuted: Z,
        onVolumeChange: eY,
        onMutedChange: function (e) {
            ee(e);
        },
        onProgressUpdate: eK,
        onSeek: eH,
        onEnded: eG,
        onError: e$,
        onHlsInstance: ed,
        transcriptText: eP ?? void 0,
        transcriptClassName: N.f,
        renderPersistentOverlay: eW,
        renderEndScreen: ez,
        timelineIndicatorConfig: eN,
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
