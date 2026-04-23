n.d(t, { A: () => P });
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
    v = n(590202),
    g = n(971649),
    h = n(851936),
    C = n(792620),
    A = n(753386),
    x = n(795068),
    D = n(678968),
    I = n(576199),
    T = n(758423),
    b = n(458817),
    O = n(781121),
    L = n(873856),
    R = n(979204),
    k = n(654487),
    N = n(985018),
    y = n(924838),
    M = n(25920);
function P(e) {
    let t,
        {
            targetTimeSec: n,
            onOptimisticProgressUpdate: P,
            autoplay: V,
            autoFocus: w = !0,
            parentTransitionState: Q,
            openedAtMs: j,
            orientation: U,
            videoUrlOverride: B,
        } = e,
        {
            sourceQuestContent: F,
            quest: Y,
            videoSessionId: H,
            setIsFullscreenEnabled: K,
            onClose: G,
        } = s.useContext(x.a),
        $ = (0, s.useRef)(null),
        q = (0, C.Yh)(Y),
        W = Y.userStatus?.completedAt != null,
        z = !W,
        X = s.useMemo(() => Y.config.features.includes(k.Li.FULL_EPISODE_VIDEO_QUEST), [Y.config.features]),
        Z = (0, S.Kr)((e) => e.videoProgress[Y.id] ?? S.yc, a.x),
        J = (0, S.Kr)((e) => e.setVideoProgress),
        ee = (0, S.Kr)((e) => e.volume),
        et = (0, S.Kr)((e) => e.muted),
        en = (0, S.Kr)((e) => e.setVolume),
        er = (0, S.Kr)((e) => e.setMuted),
        es = (0, i.g)(W, Z, q.progressSeconds),
        [ea] = s.useState(() => E.A.getEffectiveConnectionSpeed()),
        el = Math.max(Z.maxTimestampSec, q.progressSeconds),
        ei = W ? void 0 : (0, A.vd)(el, Z.duration),
        { videoAsset: eu, videoAssetType: eo } = (0, T.A)($, ea, es, B, !1),
        ec = s.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                return t || null != eo
                    ? n === l.Q6.PAUSED && r === l.KB.FOCUS
                        ? N.intl.string(N.t.w6PeBF)
                        : (0, d.u)({ hasVideoAsset: t, playerState: n, pauseReason: r })
                    : (0, m.isWeb)()
                      ? N.intl.string(N.t["E1du/q"])
                      : N.intl.string(N.t["rStN/7"]);
            },
            [eo],
        ),
        ed = (0, s.useRef)(null),
        eE = s.useCallback((e) => {
            ed.current = e;
        }, []),
        em = s.useMemo(() => (0, h.L)({ quest: Y, location: k.rE.VIDEO_MODAL }), [Y]),
        ef = (0, s.useRef)(0),
        e_ = (0, s.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: eS,
            trackQuestVideoLoadingEnded: ep,
            trackQuestVideoResumed: ev,
            trackQuestVideoPaused: eg,
            trackQuestVideoFocusChange: eh,
            trackQuestVideoBufferingStarted: eC,
            trackQuestVideoBufferingEnded: eA,
            trackQuestVideoTimeToFirstFrame: ex,
            trackQuestVideoFullscreenChanged: eD,
            trackQuestVideoError: eI,
            trackQuestVideoVolumeChanged: eT,
            trackQuestContentClick: eb,
            trackQuestVideoProgressed: eO,
            trackQuestVideoSegmentWatched: eL,
        } = (0, b.A)({
            questId: Y.id,
            isQuestCompleted: W,
            videoRef: $,
            hlsRef: ed,
            videoSessionId: H,
            videoAssetId: eo,
            sourceQuestContent: F,
            logger: em,
            isFullEpisodeVideoQuest: X,
            listenForHlsErrors: !1,
        });
    (0, L.A)({ videoAssetUrl: eu?.url, videoRef: $, hlsRef: ed, videoAssetType: eo });
    let eR =
            ((t = (0, S.Kr)((e) => e.transcript)),
            (s.useEffect(() => {
                let e = (0, p.tW)(Y, p.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
                (null == t ||
                    t.questId !== Y.id ||
                    t.fetchStatus === S.Lx.NONE ||
                    (t.fetchStatus === S.Lx.SUCCESS && e?.url !== t.url)) &&
                    (0, f.qY)(Y);
            }, [t, Y]),
            t?.questId === Y.id && t?.fetchStatus === S.Lx.SUCCESS)
                ? (t.text ?? null)
                : null),
        ek = (0, g.go)(),
        eN = (0, O.H)({ quest: Y, onClose: G, sourceQuestContent: F, impressionId: ek }),
        ey = s.useCallback(() => {
            eN(_.uF.VIDEO_MODAL, v.Cy.OPEN_GAME_LINK);
        }, [eN]),
        eM = (0, R.A)({
            targetSec: n,
            quest: Y,
            sourceQuestContent: F,
            questConfig: Y.config,
            onIndicatorClick: W ? ey : void 0,
        }),
        eP = s.useCallback(() => $.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: eV,
            handleLoadEnd: ew,
            handleFirstFrame: eQ,
            handleSeek: ej,
        } = (0, c.Yr)({ getCurrentVideoTime: eP, onAnalytics: eL, emitIntervalMs: c.KI, minSegmentDurationMs: c._4 }),
        eU = (0, s.useRef)(null),
        eB = s.useCallback(
            (e, t) => {
                switch ((eV(e, t), e)) {
                    case l.Q6.PLAYING:
                        $.current?.paused === !0 && ev(eU.current), (eU.current = null);
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
                        null != e && ((eU.current = e), eg(e));
                    }
                    case l.Q6.ENDED:
                }
            },
            [eV, ev, eg],
        ),
        eF = s.useCallback(() => {
            eS(ea);
        }, [eS, ea]),
        eY = s.useCallback(
            (e) => {
                ew(e), ep(e);
            },
            [ew, ep],
        ),
        eH = s.useCallback(
            (e) => {
                let t = e - j;
                eQ(t), ex(t);
            },
            [eQ, ex, j],
        ),
        eK = s.useCallback(
            (e) => {
                K(e), eD(e);
            },
            [K, eD],
        ),
        eG = s.useCallback(
            (e) => {
                en(e), eT(e);
            },
            [en, eT],
        ),
        e$ = s.useCallback(
            (e, t) => {
                J(Y.id, e, t), (0, f.Gn)(Y.id, q.taskType, e), P(e);
                let r = X && e >= n && !e_.current;
                (e >= ef.current || r) &&
                    (r && (e_.current = !0),
                    (ef.current = e + k.aA + Math.random() * k.A6),
                    W || Y.userStatus?.enrolledAt == null || (0, A.zv)(Y, e),
                    eO());
            },
            [Y, q.taskType, n, W, X, eO, J, P],
        ),
        eq = s.useCallback(
            (e, t) => {
                ej(), null != $.current && J(Y.id, t, $.current.duration);
            },
            [ej, Y.id, J],
        ),
        eW = s.useCallback(() => {
            if (null != $.current) {
                let e = $.current.duration;
                W || Y.userStatus?.enrolledAt == null || (0, A.zv)(Y, e + 1), J(Y.id, e, e), eO();
            }
        }, [Y, W, J, eO]),
        ez = s.useCallback(
            (e, t) => {
                eI(e, t);
            },
            [eI],
        ),
        eX = s.useMemo(() => (0, p.tW)(Y, p.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [Y]),
        eZ = s.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: M.A,
                    children: [
                        (0, r.jsx)(I.A, {}),
                        (0, r.jsx)(u.K, {
                            "data-testid": "video-quest-close-btn",
                            variant: "overlay-secondary",
                            icon: o.P,
                            "aria-label": N.intl.string(N.t.cpT0Cq),
                            onClick: G,
                        }),
                    ],
                }),
            [G],
        ),
        eJ = s.useCallback(
            () => (0, r.jsx)(D.A, { videoRef: $, onTrackQuestContentClick: eb, orientation: U }),
            [eb, U],
        );
    return (0, r.jsx)(c.Ft, {
        ref: $,
        parentTransitionState: Q,
        autoplay: V,
        progressClassName: z ? y.q : y.c,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !W,
        autoFocus: w,
        getPlaybackBlockedMessage: ec,
        orientation: U,
        videoUrlOverride: B,
        src: eu?.url,
        poster: void 0,
        initialTimeSec: es,
        maxSeekableTimeSec: ei,
        captionTrackUrl: eX?.url,
        onPlayerStateChange: eB,
        onLoadStart: eF,
        onLoadEnd: eY,
        onFirstFrame: eH,
        onBufferingStart: eC,
        onBufferingEnd: eA,
        onFocusChange: eh,
        onFullscreenChange: eK,
        initialVolume: ee,
        initialMuted: et,
        onVolumeChange: eG,
        onMutedChange: (e) => {
            er(e);
        },
        onProgressUpdate: e$,
        onSeek: eq,
        onEnded: eW,
        onError: ez,
        onHlsInstance: eE,
        transcriptText: eR ?? void 0,
        transcriptClassName: M.f,
        renderPersistentOverlay: eZ,
        renderEndScreen: eJ,
        timelineIndicatorConfig: eM,
        autoHideVolumeSlider: !0,
    });
}
