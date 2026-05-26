n.d(t, { A: () => k });
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
    p = n(551875),
    v = n(851936),
    C = n(792620),
    g = n(753386),
    A = n(795068),
    h = n(678968),
    D = n(576199),
    I = n(758423),
    T = n(458817),
    x = n(854356),
    R = n(979204),
    b = n(190107),
    O = n(375708),
    N = n(924838),
    L = n(25920);
function k(e) {
    let t,
        {
            targetTimeSec: n,
            onOptimisticProgressUpdate: k,
            autoplay: P,
            autoFocus: y = !0,
            parentTransitionState: M,
            openedAtMs: U,
            orientation: V,
            videoUrlOverride: w,
        } = e,
        {
            sourceQuestContent: Q,
            quest: j,
            videoSessionId: B,
            setIsFullscreenEnabled: F,
            onClose: Y,
        } = l.useContext(A.a),
        K = (0, l.useRef)(null),
        H = (0, C.Yh)(j),
        G = j.userStatus?.completedAt != null,
        $ = !G,
        q = l.useMemo(() => j.config.features.includes(b.Li.FULL_EPISODE_VIDEO_QUEST), [j.config.features]),
        W = (0, S.Kr)((e) => e.videoProgress[j.id] ?? S.yc, s.x),
        z = (0, S.Kr)((e) => e.setVideoProgress),
        X = (0, S.Kr)((e) => e.volume),
        Z = (0, S.Kr)((e) => e.muted),
        J = (0, S.Kr)((e) => e.setVolume),
        ee = (0, S.Kr)((e) => e.setMuted),
        et = (0, i.g)(G, W, H.progressSeconds),
        [en] = l.useState(() => E.A.getEffectiveConnectionSpeed()),
        er = Math.max(W.maxTimestampSec, H.progressSeconds),
        el = G ? void 0 : (0, g.vd)(er, W.duration),
        { videoAsset: es, videoAssetType: ea } = (0, I.A)(K, en, et, w, !1),
        ei = l.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                return t || null != ea
                    ? n === a.Q6.PAUSED && (r === a.KB.FOCUS || r === a.KB.PICTURE_IN_PICTURE)
                        ? O.intl.string(O.t.w6PeBF)
                        : (0, d.u)({ hasVideoAsset: t, playerState: n, pauseReason: r })
                    : (0, m.isWeb)()
                      ? O.intl.string(O.t["E1du/q"])
                      : O.intl.string(O.t["rStN/7"]);
            },
            [ea],
        ),
        eu = (0, l.useRef)(null),
        eo = l.useCallback((e) => {
            eu.current = e;
        }, []),
        ec = l.useMemo(() => (0, v.L)({ quest: j, location: b.rE.VIDEO_MODAL }), [j]),
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
            trackQuestContentClick: eI,
            trackQuestVideoProgressed: eT,
            trackQuestVideoSegmentWatched: ex,
        } = (0, T.A)({
            questId: j.id,
            isQuestCompleted: G,
            videoRef: K,
            hlsRef: eu,
            videoSessionId: B,
            videoAssetId: ea,
            sourceQuestContent: Q,
            logger: ec,
            isFullEpisodeVideoQuest: q,
            listenForHlsErrors: !1,
        });
    (0, x.A)({ videoAssetUrl: es?.url, videoRef: K, hlsRef: eu, videoAssetType: ea });
    let eR =
            ((t = (0, S.Kr)((e) => e.transcript)),
            (l.useEffect(() => {
                let e = (0, p.tW)(j, p.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
                (null == t ||
                    t.questId !== j.id ||
                    t.fetchStatus === S.Lx.NONE ||
                    (t.fetchStatus === S.Lx.SUCCESS && e?.url !== t.url)) &&
                    (0, f.qY)(j);
            }, [t, j]),
            t?.questId === j.id && t?.fetchStatus === S.Lx.SUCCESS)
                ? (t.text ?? null)
                : null),
        eb = (0, R.A)({ targetSec: n, quest: j, sourceQuestContent: Q, questConfig: j.config, clickable: G }),
        eO = l.useCallback(() => K.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: eN,
            handleLoadEnd: eL,
            handleFirstFrame: ek,
            handleSeek: eP,
        } = (0, c.Yr)({ getCurrentVideoTime: eO, onAnalytics: ex, emitIntervalMs: c.KI, minSegmentDurationMs: c._4 }),
        ey = (0, l.useRef)(null),
        eM = l.useCallback(
            (e, t) => {
                switch ((eN(e, t), e)) {
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
                                case a.KB.PICTURE_IN_PICTURE:
                                    return _.Yg.PICTURE_IN_PICTURE;
                                default:
                                    return null;
                            }
                        })(t);
                        null != e && ((ey.current = e), eS(e));
                    }
                    case a.Q6.ENDED:
                }
            },
            [eN, e_, eS],
        ),
        eU = l.useCallback(() => {
            em(en);
        }, [em, en]),
        eV = l.useCallback(
            (e) => {
                eL(e), ef(e);
            },
            [eL, ef],
        ),
        ew = l.useCallback(
            (e) => {
                let t = e - U;
                ek(t), eg(t);
            },
            [ek, eg, U],
        ),
        eQ = l.useCallback(
            (e) => {
                F(e), eA(e);
            },
            [F, eA],
        ),
        ej = l.useCallback(
            (e) => {
                J(e), eD(e);
            },
            [J, eD],
        ),
        eB = l.useCallback(
            (e, t) => {
                z(j.id, e, t), (0, f.Gn)(j.id, H.taskType, e), k(e);
                let r = q && e >= n && !eE.current;
                (e >= ed.current || r) &&
                    (r && (eE.current = !0),
                    (ed.current = e + b.aA + Math.random() * b.A6),
                    G || j.userStatus?.enrolledAt == null || (0, g.zv)(j, e),
                    eT());
            },
            [j, H.taskType, n, G, q, eT, z, k],
        ),
        eF = l.useCallback(
            (e, t) => {
                if ((eP(), null != K.current)) {
                    let n = K.current.duration;
                    z(j.id, e, n), z(j.id, t, n);
                }
            },
            [eP, j.id, z],
        ),
        eY = l.useCallback(() => {
            if (null != K.current) {
                let e = K.current.duration;
                G || j.userStatus?.enrolledAt == null || (0, g.zv)(j, e + 1), z(j.id, e, e), eT();
            }
        }, [j, G, z, eT]),
        eK = l.useCallback(
            (e, t) => {
                eh(e, t);
            },
            [eh],
        ),
        eH = l.useMemo(() => (0, p.tW)(j, p.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [j]),
        eG = l.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: L.A,
                    children: [
                        (0, r.jsx)(D.A, {}),
                        (0, r.jsx)(u.K, {
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
        e$ = l.useCallback(
            () => (0, r.jsx)(h.A, { videoRef: K, onTrackQuestContentClick: eI, orientation: V }),
            [eI, V],
        );
    return (0, r.jsx)(c.Ft, {
        ref: K,
        parentTransitionState: M,
        autoplay: P,
        progressClassName: $ ? N.q : N.c,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !G,
        autoFocus: y,
        getPlaybackBlockedMessage: ei,
        orientation: V,
        videoUrlOverride: w,
        src: es?.url,
        poster: void 0,
        initialTimeSec: et,
        maxSeekableTimeSec: el,
        captionTrackUrl: eH?.url,
        onPlayerStateChange: eM,
        onLoadStart: eU,
        onLoadEnd: eV,
        onFirstFrame: ew,
        onBufferingStart: ev,
        onBufferingEnd: eC,
        onFocusChange: ep,
        onFullscreenChange: eQ,
        initialVolume: X,
        initialMuted: Z,
        onVolumeChange: ej,
        onMutedChange: (e) => {
            ee(e);
        },
        onProgressUpdate: eB,
        onSeek: eF,
        onEnded: eY,
        onError: eK,
        onHlsInstance: eo,
        transcriptText: eR ?? void 0,
        transcriptClassName: L.f,
        renderPersistentOverlay: eG,
        renderEndScreen: e$,
        timelineIndicatorConfig: eb,
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
