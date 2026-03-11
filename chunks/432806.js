r.d(t, { A: () => T });
var o = r(627968),
    n = r(64700),
    a = r(942381),
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
        } = n.useContext(C.VideoQuestModalContext),
        D = (0, n.useRef)(null),
        w = (0, b.Yh)(R),
        O = R.userStatus?.completedAt != null,
        U = n.useMemo(() => R.config.features.includes(y.Li.FULL_EPISODE_VIDEO_QUEST), [R.config.features]),
        L = (0, _.Kr)((e) => e.videoProgress[R.id] ?? _.yc, a.x),
        j = (0, _.Kr)((e) => e.setVideoProgress),
        F = (0, s.g)(O, L, w.progressSeconds),
        [N] = n.useState(() => d.A.getEffectiveConnectionSpeed()),
        W = O ? void 0 : Math.max(L.maxTimestampSec, w.progressSeconds),
        { videoAsset: M, videoAssetType: Q } = (0, S.A)(D, N, F, k, !1),
        q = (0, n.useRef)(null),
        G = n.useCallback((e) => {
            q.current = e;
        }, []),
        H = n.useMemo(() => (0, p.L)({ quest: R, location: y.rE.VIDEO_MODAL }), [R]),
        K = (0, n.useRef)(0),
        Y = (0, n.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: z,
            trackQuestVideoLoadingEnded: X,
            trackQuestVideoResumed: $,
            trackQuestVideoPaused: Z,
            trackQuestVideoFocusChange: J,
            trackQuestVideoBufferingStarted: ee,
            trackQuestVideoBufferingEnded: et,
            trackQuestVideoTimeToFirstFrame: er,
            trackQuestVideoFullscreenChanged: eo,
            trackQuestVideoError: en,
            trackQuestVideoVolumeChanged: ea,
            trackQuestContentClick: ei,
            trackQuestVideoProgressed: es,
            trackQuestVideoSegmentWatched: el,
        } = (0, h.A)({
            questId: R.id,
            isQuestCompleted: O,
            videoRef: D,
            hlsRef: q,
            videoSessionId: I,
            videoAssetId: Q,
            sourceQuestContent: V,
            logger: H,
            isFullEpisodeVideoQuest: U,
            listenForHlsErrors: !1,
        });
    (0, x.A)({ videoAssetUrl: M?.url, videoRef: D, hlsRef: q, videoAssetType: Q });
    let [ed, ec] = n.useState(!1),
        [eu, e_] = n.useState(!1),
        [ep, ef] = n.useState(!1),
        eb = n.useCallback(() => D.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: em } = (0, l.Yr)({
            getCurrentVideoTime: eb,
            isPlaying: ed,
            isMetadataLoaded: eu,
            isInitialSeekComplete: ep,
            onAnalytics: el,
            emitIntervalMs: l.KI,
            minSegmentDurationMs: l._4,
        }),
        eg = (0, n.useRef)(null),
        eC = n.useCallback(
            (e, t) => {
                switch (e) {
                    case i.Q6.PLAYING:
                        ec(!0), D.current?.paused === !0 && $(eg.current), (eg.current = null);
                        break;
                    case i.Q6.PAUSED:
                        ec(!1), em();
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
                            null != e && ((eg.current = e), Z(e));
                        }
                        break;
                    case i.Q6.ENDED:
                        ec(!1);
                }
            },
            [$, Z, em],
        ),
        ev = n.useCallback(() => {
            z(N);
        }, [z, N]),
        eS = n.useCallback(
            (e) => {
                e_(!0), X(e);
            },
            [X],
        ),
        eh = n.useCallback(
            (e) => {
                ef(!0), er(e);
            },
            [er],
        ),
        ex = n.useCallback(
            (e) => {
                B(e), eo(e);
            },
            [B, eo],
        ),
        ey = n.useCallback(
            (e, o) => {
                j(R.id, e, o), (0, c.Gn)(R.id, w.taskType, e), r(e);
                let n = U && e >= t && !Y.current;
                (e >= K.current || n) &&
                    (n && (Y.current = !0),
                    (K.current = e + y.aA + Math.random() * y.A6),
                    O || R.userStatus?.enrolledAt == null || (0, m.zv)(R, e),
                    es());
            },
            [R, w.taskType, t, O, U, es, j, r],
        ),
        eT = n.useCallback(
            (e, t) => {
                em(), null != D.current && j(R.id, t, D.current.duration);
            },
            [R.id, j, em],
        ),
        eP = n.useCallback(() => {
            if ((em(), null != D.current)) {
                let e = D.current.duration;
                O || R.userStatus?.enrolledAt == null || (0, m.zv)(R, e + 1), j(R.id, e, e);
            }
        }, [R, O, j, em]),
        eA = n.useCallback(
            (e, t) => {
                en(e, t);
            },
            [en],
        ),
        eE = n.useMemo(() => (0, f.tW)(R, f.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [R]),
        ek = n.useCallback(() => (0, o.jsx)(v.A, {}), []),
        eV = n.useCallback(
            () => (0, o.jsx)(g.A, { videoRef: D, onTrackQuestContentClick: ei, orientation: E }),
            [ei, E],
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
        captionTrackUrl: eE?.url,
        onPlayerStateChange: eC,
        onLoadStart: ev,
        onLoadEnd: eS,
        onFirstFrame: eh,
        onBufferingStart: ee,
        onBufferingEnd: et,
        onFocusChange: J,
        onFullscreenChange: ex,
        onVolumeChange: ea,
        onProgressUpdate: ey,
        onSeek: eT,
        onEnded: eP,
        onError: eA,
        onHlsInstance: G,
        renderOverlay: ek,
        renderEndScreen: eV,
    });
}
