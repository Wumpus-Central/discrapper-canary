r.d(t, { A: () => T });
var o = r(627968),
    a = r(64700),
    n = r(942381),
    i = r(876230),
    s = r(645577),
    l = r(892358),
    d = r(544180),
    c = r(829219),
    u = r(341915),
    _ = r(405670),
    p = r(943849),
    f = r(579473),
    b = r(792620),
    m = r(753386),
    g = r(818049),
    C = r(717415),
    v = r(661417),
    S = r(246465),
    h = r(660171),
    x = r(853738),
    y = r(654487);
function T(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: r,
            autoplay: T,
            parentTransitionState: P,
            performanceClockStartTime: A,
            orientation: E,
            videoUrlOverride: k,
        } = e,
        {
            sourceQuestContent: V,
            quest: R,
            videoSessionId: I,
            setIsFullscreenEnabled: B,
        } = a.useContext(C.VideoQuestModalContext),
        D = (0, a.useRef)(null),
        w = (0, b.Yh)(R),
        O = R.userStatus?.completedAt != null,
        U = a.useMemo(() => R.config.features.includes(y.Li.FULL_EPISODE_VIDEO_QUEST), [R.config.features]),
        L = (0, _.Kr)((e) => e.videoProgress[R.id] ?? _.yc, n.x),
        j = (0, _.Kr)((e) => e.setVideoProgress),
        F = (0, s.g)(O, L, w.progressSeconds),
        [N] = a.useState(() => d.A.getEffectiveConnectionSpeed()),
        W = O ? void 0 : Math.max(L.maxTimestampSec, w.progressSeconds),
        { videoAsset: M, videoAssetType: Q, hlsRef: q } = (0, S.A)(D, N, F, k),
        G = a.useMemo(() => (0, p.L)({ quest: R, location: y.rE.VIDEO_MODAL }), [R]),
        H = (0, a.useRef)(0),
        K = (0, a.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: Y,
            trackQuestVideoLoadingEnded: z,
            trackQuestVideoResumed: X,
            trackQuestVideoPaused: $,
            trackQuestVideoFocusChange: Z,
            trackQuestVideoBufferingStarted: J,
            trackQuestVideoBufferingEnded: ee,
            trackQuestVideoTimeToFirstFrame: et,
            trackQuestVideoFullscreenChanged: er,
            trackQuestVideoError: eo,
            trackQuestVideoVolumeChanged: ea,
            trackQuestContentClick: en,
            trackQuestVideoProgressed: ei,
            trackQuestVideoSegmentWatched: es,
        } = (0, h.A)({
            questId: R.id,
            isQuestCompleted: O,
            videoRef: D,
            hlsRef: q,
            videoSessionId: I,
            videoAssetId: Q,
            sourceQuestContent: V,
            logger: G,
            isFullEpisodeVideoQuest: U,
        });
    (0, x.A)({ videoAssetUrl: M?.url, videoRef: D, hlsRef: q, videoAssetType: Q });
    let [el, ed] = a.useState(!1),
        [ec, eu] = a.useState(!1),
        [e_, ep] = a.useState(!1),
        ef = a.useCallback(() => D.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: eb } = (0, l.Yr)({
            getCurrentVideoTime: ef,
            isPlaying: el,
            isMetadataLoaded: ec,
            isInitialSeekComplete: e_,
            onAnalytics: es,
            emitIntervalMs: l.KI,
            minSegmentDurationMs: l._4,
        }),
        em = (0, a.useRef)(null),
        eg = a.useCallback(
            (e, t) => {
                switch (e) {
                    case i.Q6.PLAYING:
                        ed(!0), D.current?.paused === !0 && X(em.current), (em.current = null);
                        break;
                    case i.Q6.PAUSED:
                        ed(!1), eb();
                        {
                            let e = (function (e) {
                                switch (e) {
                                    case "user":
                                        return u.Yg.PAUSE_BUTTON;
                                    case "focus":
                                        return u.Yg.LOST_FOCUS;
                                    case "visibility":
                                        return u.Yg.MODAL_CLOSED;
                                    default:
                                        return null;
                                }
                            })(t);
                            null != e && ((em.current = e), $(e));
                        }
                        break;
                    case i.Q6.ENDED:
                        ed(!1);
                }
            },
            [X, $, eb],
        ),
        eC = a.useCallback(() => {
            Y(N);
        }, [Y, N]),
        ev = a.useCallback(
            (e) => {
                eu(!0), z(e);
            },
            [z],
        ),
        eS = a.useCallback(
            (e) => {
                ep(!0), et(e);
            },
            [et],
        ),
        eh = a.useCallback(
            (e) => {
                B(e), er(e);
            },
            [B, er],
        ),
        ex = a.useCallback(
            (e, o) => {
                j(R.id, e, o), (0, c.Gn)(R.id, w.taskType, e), r(e);
                let a = U && e >= t && !K.current;
                (e >= H.current || a) &&
                    (a && (K.current = !0),
                    (H.current = e + y.aA + Math.random() * y.A6),
                    O || R.userStatus?.enrolledAt == null || (0, m.zv)(R, e),
                    ei());
            },
            [R, w.taskType, t, O, U, ei, j, r],
        ),
        ey = a.useCallback(
            (e, t) => {
                eb(), null != D.current && j(R.id, t, D.current.duration);
            },
            [R.id, j, eb],
        ),
        eT = a.useCallback(() => {
            if ((eb(), null != D.current)) {
                let e = D.current.duration;
                O || R.userStatus?.enrolledAt == null || (0, m.zv)(R, e + 1), j(R.id, e, e);
            }
        }, [R, O, j, eb]),
        eP = a.useCallback(
            (e) => {
                eo(e);
            },
            [eo],
        ),
        eA = a.useMemo(() => (0, f.tW)(R, f.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [R]),
        eE = a.useCallback(() => (0, o.jsx)(v.A, {}), []),
        ek = a.useCallback(
            () => (0, o.jsx)(g.A, { videoRef: D, onTrackQuestContentClick: en, orientation: E }),
            [en, E],
        );
    return (0, o.jsx)(l.Ft, {
        ref: D,
        targetTimeSec: t,
        parentTransitionState: P,
        onOptimisticProgressUpdate: r,
        autoplay: T,
        performanceClockStartTime: A,
        orientation: E,
        videoUrlOverride: k,
        src: M?.url,
        poster: void 0,
        initialTimeSec: F,
        maxSeekableTimeSec: W,
        seekForwardRestricted: !O,
        captionTrackUrl: eA?.url,
        onPlayerStateChange: eg,
        onLoadStart: eC,
        onLoadEnd: ev,
        onFirstFrame: eS,
        onBufferingStart: J,
        onBufferingEnd: ee,
        onFocusChange: Z,
        onFullscreenChange: eh,
        onVolumeChange: ea,
        onProgressUpdate: ex,
        onSeek: ey,
        onEnded: eT,
        onError: eP,
        renderOverlay: eE,
        renderEndScreen: ek,
    });
}
