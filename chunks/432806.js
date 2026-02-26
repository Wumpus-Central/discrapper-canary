r.d(t, { A: () => y });
var o = r(627968),
    a = r(64700),
    n = r(942381),
    i = r(876230),
    s = r(645577),
    l = r(892358),
    d = r(544180),
    _ = r(829219),
    u = r(341915),
    c = r(405670),
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
    T = r(654487);
function y(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: r,
            autoplay: y,
            parentTransitionState: P,
            performanceClockStartTime: A,
            orientation: E,
            videoUrlOverride: V,
        } = e,
        {
            sourceQuestContent: k,
            quest: I,
            videoSessionId: R,
            setIsFullscreenEnabled: B,
        } = a.useContext(C.VideoQuestModalContext),
        D = (0, a.useRef)(null),
        w = (0, b.Yh)(I),
        O = I.userStatus?.completedAt != null,
        U = a.useMemo(() => I.config.features.includes(T.Li.FULL_EPISODE_VIDEO_QUEST), [I.config.features]),
        L = (0, c.Kr)((e) => e.videoProgress[I.id] ?? c.yc, n.x),
        F = (0, c.Kr)((e) => e.setVideoProgress),
        N = (0, s.g)(O, L, w.progressSeconds),
        [W] = a.useState(() => d.A.getEffectiveConnectionSpeed()),
        M = O ? void 0 : Math.max(L.maxTimestampSec, w.progressSeconds),
        { videoAsset: j, videoAssetType: Q, hlsRef: q } = (0, S.A)(D, W, N, V),
        G = a.useMemo(() => (0, p.L)({ quest: I, location: T.rE.VIDEO_MODAL }), [I]),
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
        } = (0, h.A)({
            questId: I.id,
            isQuestCompleted: O,
            videoRef: D,
            hlsRef: q,
            videoSessionId: R,
            videoAssetId: Q,
            sourceQuestContent: k,
            logger: G,
            isFullEpisodeVideoQuest: U,
        });
    (0, x.A)({ videoAssetUrl: j?.url, videoRef: D, hlsRef: q, videoAssetType: Q });
    let es = (0, a.useRef)(null),
        el = a.useCallback(
            (e, t) => {
                if (e === i.Q6.PLAYING) D.current?.paused === !0 && X(es.current), (es.current = null);
                else if (e === i.Q6.PAUSED) {
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
                    null != e && ((es.current = e), $(e));
                }
            },
            [X, $],
        ),
        ed = a.useCallback(() => {
            Y(W);
        }, [Y, W]),
        e_ = a.useCallback(
            (e) => {
                B(e), er(e);
            },
            [B, er],
        ),
        eu = a.useCallback(
            (e, o) => {
                F(I.id, e, o), (0, _.Gn)(I.id, w.taskType, e), r(e);
                let a = U && e >= t && !K.current;
                (e >= H.current || a) &&
                    (a && (K.current = !0),
                    (H.current = e + T.aA + Math.random() * T.A6),
                    O || I.userStatus?.enrolledAt == null || (0, m.zv)(I, e),
                    ei());
            },
            [I, w.taskType, t, O, U, ei, F, r],
        ),
        ec = a.useCallback(
            (e, t) => {
                null != D.current && F(I.id, t, D.current.duration);
            },
            [I.id, F],
        ),
        ep = a.useCallback(() => {
            if (null != D.current) {
                let e = D.current.duration;
                O || I.userStatus?.enrolledAt == null || (0, m.zv)(I, e + 1), F(I.id, e, e);
            }
        }, [I, O, F]),
        ef = a.useCallback(
            (e) => {
                eo(e);
            },
            [eo],
        ),
        eb = a.useMemo(() => (0, f.tW)(I, f.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [I]),
        em = a.useCallback(() => (0, o.jsx)(v.A, {}), []),
        eg = a.useCallback(
            () => (0, o.jsx)(g.A, { videoRef: D, onTrackQuestContentClick: en, orientation: E }),
            [en, E],
        );
    return (0, o.jsx)(l.Ft, {
        ref: D,
        targetTimeSec: t,
        parentTransitionState: P,
        onOptimisticProgressUpdate: r,
        autoplay: y,
        performanceClockStartTime: A,
        orientation: E,
        videoUrlOverride: V,
        src: j?.url,
        poster: void 0,
        initialTimeSec: N,
        maxSeekableTimeSec: M,
        seekForwardRestricted: !O,
        captionTrackUrl: eb?.url,
        onPlayerStateChange: el,
        onLoadStart: ed,
        onLoadEnd: z,
        onFirstFrame: et,
        onBufferingStart: J,
        onBufferingEnd: ee,
        onFocusChange: Z,
        onFullscreenChange: e_,
        onVolumeChange: ea,
        onProgressUpdate: eu,
        onSeek: ec,
        onEnded: ep,
        onError: ef,
        renderOverlay: em,
        renderEndScreen: eg,
    });
}
