n.d(t, { A: () => b });
var r = n(477900),
    l = n(582128),
    u = n(462180),
    i = n(876230),
    s = n(645577),
    a = n(613373),
    o = n(544180),
    c = n(723702),
    d = n(427495),
    E = n(738822),
    _ = n(405670),
    f = n(291749),
    p = n(851936),
    m = n(792620),
    S = n(753386),
    v = n(491812),
    C = n(755372),
    A = n(236850),
    h = n(795068),
    g = n(678968),
    I = n(576199),
    D = n(758423),
    T = n(103515),
    R = n(854356),
    O = n(721092),
    L = n(190107),
    N = n(105292),
    k = n(879371),
    P = n(215805);
function b(e) {
    let t,
        {
            targetTimeSec: n,
            onOptimisticProgressUpdate: b,
            autoplay: x,
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
        } = l.useContext(h.a),
        H = (0, l.useRef)(null),
        G = (0, m.Yh)(B),
        K = B.userStatus?.completedAt != null,
        $ = !K,
        W = l.useMemo(() => B.config.features.includes(L.Li.FULL_EPISODE_VIDEO_QUEST), [B.config.features]),
        q = (0, _.Kr)((e) => e.videoProgress[B.id] ?? _.yc, u.x),
        z = (0, _.Kr)((e) => e.setVideoProgress),
        { volume: X, muted: Z, setVolume: J, setMuted: ee } = (0, A.A)(),
        et = (0, s.g)(K, q, G.progressSeconds),
        [en] = l.useState(() => o.A.getEffectiveConnectionSpeed()),
        er = Math.max(q.maxTimestampSec, G.progressSeconds),
        el = K ? void 0 : (0, S.vd)(er, q.duration),
        { videoAsset: eu, videoAssetType: ei } = (0, D.A)(H, en, et, M, !1),
        es = l.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                return t || null != ei
                    ? (0, C.b)({ hasVideoAsset: t, playerState: n, pauseReason: r })
                    : (0, c.isWeb)()
                      ? N.intl.string(N.t["E1du/q"])
                      : N.intl.string(N.t["rStN/7"]);
            },
            [ei],
        ),
        ea = (0, l.useRef)(null),
        [eo, ec] = l.useState(null),
        ed = l.useCallback((e) => {
            ((ea.current = e), ec(e));
        }, []),
        eE = l.useMemo(() => (0, p.L)({ quest: B, location: L.rE.VIDEO_MODAL }), [B]),
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
            trackQuestVideoProgressed: eO,
            trackQuestVideoSegmentWatched: eL,
            handleEngagedViewProgress: eN,
        } = (0, T.A)({
            questId: B.id,
            isQuestCompleted: K,
            videoRef: H,
            hlsRef: ea,
            videoSessionId: F,
            videoAssetId: ei,
            sourceQuestContent: w,
            logger: eE,
            isFullEpisodeVideoQuest: W,
            listenForHlsErrors: !1,
        });
    (0, R.A)({ videoAssetUrl: eu?.url, videoRef: H, hls: eo, videoAssetType: ei });
    let ek =
            ((t = (0, _.Kr)((e) => e.transcript)),
            (l.useEffect(() => {
                let e = (0, f.tW)(B, f.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
                (null == t ||
                    t.questId !== B.id ||
                    t.fetchStatus === _.Lx.NONE ||
                    (t.fetchStatus === _.Lx.SUCCESS && e?.url !== t.url)) &&
                    (0, d.qY)(B);
            }, [t, B]),
            t?.questId === B.id && t?.fetchStatus === _.Lx.SUCCESS)
                ? (t.text ?? null)
                : null),
        eP = (0, O.A)({ targetSec: n, quest: B, sourceQuestContent: w, questConfig: B.config, clickable: K }),
        eb = l.useCallback(() => H.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: ex,
            handleLoadEnd: ey,
            handleFirstFrame: eV,
            handleSeek: eU,
        } = (0, a.Yr)({ getCurrentVideoTime: eb, onAnalytics: eL, emitIntervalMs: a.KI, minSegmentDurationMs: a._4 }),
        eQ = (0, l.useRef)(null),
        eM = l.useCallback(
            (e, t) => {
                switch ((ex(e, t), e)) {
                    case i.Q6.PLAYING:
                        (H.current?.paused === !0 && eS(eQ.current), (eQ.current = null));
                        break;
                    case i.Q6.PAUSED: {
                        let e = (function (e) {
                            switch (e) {
                                case i.KB.USER:
                                    return E.Yg.PAUSE_BUTTON;
                                case i.KB.FOCUS:
                                    return E.Yg.LOST_FOCUS;
                                case i.KB.VISIBILITY:
                                    return E.Yg.MODAL_CLOSED;
                                case i.KB.PICTURE_IN_PICTURE:
                                    return E.Yg.PICTURE_IN_PICTURE;
                                default:
                                    return null;
                            }
                        })(t);
                        (null != e && ((eQ.current = e), ev(e)),
                            null != H.current &&
                                eN({
                                    positionSeconds: H.current.currentTime,
                                    durationSeconds: H.current.duration,
                                    isPlaying: !1,
                                }));
                    }
                    case i.Q6.ENDED:
                }
            },
            [ex, eS, ev, eN],
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
        eY = l.useCallback(
            (e) => {
                (Y(e), eI(e));
            },
            [Y, eI],
        ),
        ej = l.useCallback(
            (e) => {
                (J(e), eT(e));
            },
            [J, eT],
        ),
        eH = l.useCallback(
            (e, t) => {
                (z(B.id, e, t),
                    (0, d.Gn)(B.id, G.taskType, e),
                    b(e),
                    eN({ positionSeconds: e, durationSeconds: t, isPlaying: null != H.current && !H.current.paused }));
                let r = W && e >= n && !ef.current;
                (e >= e_.current || r) &&
                    (r && (ef.current = !0),
                    (e_.current = e + L.aA + Math.random() * L.A6),
                    K || B.userStatus?.enrolledAt == null || (0, S.zv)(B, e),
                    eO());
            },
            [B, G.taskType, n, K, W, eO, z, b, eN],
        ),
        eG = l.useCallback(
            (e, t) => {
                if ((eU(), null != H.current)) {
                    let n = H.current.duration;
                    (z(B.id, e, n), z(B.id, t, n));
                }
            },
            [eU, B.id, z],
        ),
        eK = l.useCallback(() => {
            if (null != H.current) {
                let e = H.current.duration;
                (K || B.userStatus?.enrolledAt == null || (0, S.zv)(B, e + 1), z(B.id, e, e), eO());
            }
        }, [B, K, z, eO]),
        e$ = l.useCallback(
            (e, t) => {
                eD(e, t);
            },
            [eD],
        ),
        eW = l.useMemo(() => (0, f.tW)(B, f.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [B]),
        eq = l.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: P.A,
                    children: [(0, r.jsx)(I.A, {}), (0, r.jsx)(v.A, { onClose: j })],
                }),
            [j],
        ),
        ez = l.useCallback(
            () => (0, r.jsx)(g.A, { videoRef: H, onTrackQuestContentClick: eR, orientation: Q }),
            [eR, Q],
        );
    return (0, r.jsx)(a.Ft, {
        ref: H,
        parentTransitionState: V,
        autoplay: x,
        progressClassName: $ ? k.V : k.s,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !K,
        autoFocus: y,
        getPlaybackBlockedMessage: es,
        orientation: Q,
        videoUrlOverride: M,
        src: eu?.url,
        poster: void 0,
        initialTimeSec: et,
        maxSeekableTimeSec: el,
        captionTrackUrl: eW?.url,
        onPlayerStateChange: eM,
        onLoadStart: ew,
        onLoadEnd: eB,
        onFirstFrame: eF,
        onBufferingStart: eA,
        onBufferingEnd: eh,
        onFocusChange: eC,
        onFullscreenChange: eY,
        initialVolume: X,
        initialMuted: Z,
        onVolumeChange: ej,
        onMutedChange: function (e) {
            ee(e);
        },
        onProgressUpdate: eH,
        onSeek: eG,
        onEnded: eK,
        onError: e$,
        onHlsInstance: ed,
        transcriptText: ek ?? void 0,
        transcriptClassName: P.f,
        renderPersistentOverlay: eq,
        renderEndScreen: ez,
        timelineIndicatorConfig: eP,
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
