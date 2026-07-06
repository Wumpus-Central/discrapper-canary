n.d(t, { A: () => v });
var r = n(64700),
    l = n(323889),
    i = n(731738),
    a = n(17928),
    s = n(274670),
    u = n(144779),
    o = n(807393),
    c = n(53200),
    d = n(544180),
    E = n(104886),
    f = n(18437),
    _ = n(971649),
    m = n(753386),
    p = n(163961),
    S = n(652215);
function C(e) {
    return null == e.current || e.current.currentLevel < 0 || e.current.levels.length <= e.current.currentLevel
        ? { hls_level_index: -100, hls_segment_res_width: -100, hls_segment_res_height: -100 }
        : {
              hls_level_index: e.current.currentLevel,
              hls_segment_res_width: e.current.levels[e.current.currentLevel].width,
              hls_segment_res_height: e.current.levels[e.current.currentLevel].height,
          };
}
function v(e) {
    let {
            videoRef: t,
            hlsRef: n,
            hls: v = null,
            videoSessionId: A,
            videoAssetId: g,
            sourceQuestContent: h,
            logger: I,
            questId: T,
            isQuestCompleted: D,
            isFullEpisodeVideoQuest: R,
            listenForHlsErrors: x = !0,
        } = e,
        L = (0, f.u0)(),
        O = (0, f.Ut)(),
        P = (0, _.go)(),
        N = (0, a.bG)([d.A], () => d.A.getEffectiveConnectionSpeed()),
        k = (0, r.useRef)(-1),
        b = r.useCallback(
            (e) => {
                null != t.current &&
                    L({
                        questId: T,
                        event: S.HAw.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                            video_asset_id: g,
                            network_connection_speed: e,
                            video_session_id: A,
                            is_hls_supported: (0, c.Ap)(),
                            ...C(n),
                        },
                        sourceQuestContent: h,
                    });
            },
            [T, t, g, A, n, L, h],
        ),
        y = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    L({
                        questId: T,
                        event: S.HAw.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                            video_asset_id: g,
                            network_connection_speed: N,
                            duration: e,
                            video_session_id: A,
                            ...C(n),
                        },
                        sourceQuestContent: h,
                    });
            },
            [T, t, g, A, n, L, h, N],
        ),
        V = r.useCallback(
            (e) => {
                null != t.current &&
                    L({
                        questId: T,
                        event: S.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: { duration_ms: e, video_session_id: A, video_asset_id: g, ...C(n) },
                        sourceQuestContent: h,
                    });
            },
            [T, t, g, A, n, L, h],
        ),
        U = r.useCallback(() => {
            null != t.current &&
                L({
                    questId: T,
                    event: S.HAw.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: (0, m.zh)(t.current.currentTime, t.current.duration),
                        video_timestamp_seconds: t.current.currentTime,
                        video_session_id: A,
                        video_asset_id: g,
                        ...C(n),
                    },
                    sourceQuestContent: h,
                });
        }, [T, t, A, n, L, g, h]),
        Q = r.useCallback(
            (e) => {
                null != t.current &&
                    L({
                        questId: T,
                        event: S.HAw.QUEST_VIDEO_RESUMED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            pause_reason: e,
                            video_session_id: A,
                            video_asset_id: g,
                            ...C(n),
                        },
                        sourceQuestContent: h,
                    });
            },
            [T, t, A, n, L, g, h],
        ),
        w = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    L({
                        questId: T,
                        event: S.HAw.QUEST_VIDEO_PAUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            reason: e,
                            video_session_id: A,
                            video_asset_id: g,
                            ...C(n),
                        },
                        sourceQuestContent: h,
                    });
            },
            [T, t, A, n, L, g, h],
        ),
        M = r.useCallback(
            (e, n) => {
                null != t.current &&
                    L({
                        questId: T,
                        event: e ? S.HAw.QUEST_VIDEO_APP_FOCUSED : S.HAw.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            video_state: n,
                            video_session_id: A,
                            video_asset_id: g,
                        },
                        sourceQuestContent: h,
                    });
            },
            [T, t, A, L, g, h],
        ),
        B = r.useCallback(() => {
            null != t.current &&
                ((k.current += 1),
                L({
                    questId: T,
                    event: S.HAw.QUEST_VIDEO_BUFFERING_STARTED,
                    properties: {
                        video_asset_id: g,
                        network_connection_speed: N,
                        buffer_index: k.current,
                        video_session_id: A,
                        ...C(n),
                    },
                    sourceQuestContent: h,
                }));
        }, [T, t, g, A, n, L, h, N]),
        F = r.useCallback(
            (e) => {
                null != t.current &&
                    ((k.current += 1),
                    L({
                        questId: T,
                        event: S.HAw.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: g,
                            network_connection_speed: N,
                            duration: e,
                            buffer_index: k.current,
                            video_session_id: A,
                            ...C(n),
                        },
                        sourceQuestContent: h,
                    }));
            },
            [T, t, g, A, n, L, h, N],
        ),
        Y = r.useCallback(
            (e, t) => {
                (0, E.E5)(E.kI.STEP_2_CLICKED_INTERNAL, "video_quest_analytics")
                    ? (0, s.r)({
                          type: u.F.CLICK_INTERNAL,
                          adCreativeType: l.p.QUEST,
                          adCreativeId: T,
                          questContentCTA: t,
                          surfaceId: e,
                          sourceQuestContent: h,
                          impressionId: P,
                      })
                    : O({ questId: T, questContent: e, questContentCTA: t, sourceQuestContent: h });
            },
            [T, h, O, P],
        ),
        j = r.useCallback(
            (e) => {
                null != t.current &&
                    L({
                        questId: T,
                        event: S.HAw.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: g,
                            quest_completed: D,
                            video_duration_sec: t.current.duration,
                            video_progress: (0, m.zh)(e.segment_end_sec, t.current.duration),
                            video_session_id: A,
                            ...C(n),
                        },
                        sourceQuestContent: h,
                    });
            },
            [L, T, g, D, A, n, t, h],
        ),
        K = r.useCallback(
            (e, r) => {
                if (null == t.current) return;
                let l = t.current?.error,
                    a = t.current?.networkState,
                    s = null != t.current ? (0, m.zh)(t.current.currentTime, t.current.duration) : void 0,
                    u = null != r ? { hls_error_subtype: r.errorDetails, hls_error_fatal: r.fatal } : {};
                L({
                    questId: T,
                    event: S.HAw.QUEST_VIDEO_ERROR,
                    properties: {
                        video_progress: s,
                        video_error_type: e,
                        video_asset_id: g,
                        network_connection_speed: N,
                        video_session_id: A,
                        video_error_code: l?.code,
                        video_error_message: l?.message,
                        video_network_state: a,
                        is_full_episode_video_quest: R,
                        is_hls_supported: (0, c.Ap)(),
                        ...C(n),
                        ...u,
                    },
                    sourceQuestContent: h,
                }),
                    (e === p.SB.SOURCE_ERROR || e === p.SB.NO_VALID_SOURCE) &&
                        o.A.increment({ name: i.K.QUEST_VIDEO_ERROR, tags: [`quest_id:${T}`, `error_type:${e}`] });
            },
            [T, t, g, A, n, L, h, N, R],
        );
    r.useEffect(() => {
        if (!x || null == v) return;
        let e = (0, c.LA)();
        if (null == e) return;
        let t = (t, n) => {
            let r;
            switch ((I.info(`[QV] | HLS Error: type=${n.type}, details=${n.details}, fatal=${n.fatal}`), n.type)) {
                case e.ErrorTypes.NETWORK_ERROR:
                    r = p.SB.HLS_NETWORK_ERROR;
                    break;
                case e.ErrorTypes.MEDIA_ERROR:
                    r = p.SB.HLS_MEDIA_ERROR;
                    break;
                case e.ErrorTypes.MUX_ERROR:
                    r = p.SB.HLS_MUX_ERROR;
                    break;
                case e.ErrorTypes.KEY_SYSTEM_ERROR:
                    r = p.SB.HLS_KEY_SYSTEM_ERROR;
                    break;
                default:
                    r = p.SB.HLS_OTHER_ERROR;
            }
            K(r, { errorDetails: n.details, fatal: n.fatal });
        };
        return (
            v.on(e.Events.ERROR, t),
            () => {
                v.off(e.Events.ERROR, t);
            }
        );
    }, [x, v, I, K]);
    let H = r.useCallback(
            (e) => {
                null != t.current &&
                    L({
                        questId: T,
                        event: e ? S.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : S.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: { video_session_id: A, video_asset_id: g, ...C(n) },
                        sourceQuestContent: h,
                    });
            },
            [T, t, A, n, L, g, h],
        ),
        G = r.useCallback(
            (e) => {
                null != t.current &&
                    L({
                        questId: T,
                        event: S.HAw.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: {
                            volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                            video_session_id: A,
                            video_asset_id: g,
                            ...C(n),
                        },
                        sourceQuestContent: h,
                    });
            },
            [T, t, g, A, n, L, h],
        );
    return {
        trackQuestVideoLoadingStarted: b,
        trackQuestVideoLoadingEnded: y,
        trackQuestVideoTimeToFirstFrame: V,
        trackQuestVideoProgressed: U,
        trackQuestVideoResumed: Q,
        trackQuestVideoPaused: w,
        trackQuestVideoFocusChange: M,
        trackQuestContentClick: Y,
        trackQuestVideoBufferingStarted: B,
        trackQuestVideoBufferingEnded: F,
        trackQuestVideoSegmentWatched: j,
        trackQuestVideoFullscreenChanged: H,
        trackQuestVideoError: K,
        trackQuestVideoVolumeChanged: G,
    };
}
