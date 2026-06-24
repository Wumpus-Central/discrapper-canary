n.d(t, { A: () => v });
var r = n(64700),
    l = n(771253),
    i = n(323889),
    a = n(731738),
    s = n(17928),
    u = n(274670),
    o = n(144779),
    c = n(807393),
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
            videoSessionId: v,
            videoAssetId: A,
            sourceQuestContent: g,
            logger: h,
            questId: I,
            isQuestCompleted: T,
            isFullEpisodeVideoQuest: D,
            listenForHlsErrors: R = !0,
        } = e,
        x = (0, f.u0)(),
        O = (0, f.Ut)(),
        L = (0, _.go)(),
        P = (0, s.bG)([d.A], () => d.A.getEffectiveConnectionSpeed()),
        N = (0, r.useRef)(-1),
        k = r.useCallback(
            (e) => {
                null != t.current &&
                    x({
                        questId: I,
                        event: S.HAw.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                            video_asset_id: A,
                            network_connection_speed: e,
                            video_session_id: v,
                            is_hls_supported: l.Ay.isSupported(),
                            ...C(n),
                        },
                        sourceQuestContent: g,
                    });
            },
            [I, t, A, v, n, x, g],
        ),
        b = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    x({
                        questId: I,
                        event: S.HAw.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                            video_asset_id: A,
                            network_connection_speed: P,
                            duration: e,
                            video_session_id: v,
                            ...C(n),
                        },
                        sourceQuestContent: g,
                    });
            },
            [I, t, A, v, n, x, g, P],
        ),
        y = r.useCallback(
            (e) => {
                null != t.current &&
                    x({
                        questId: I,
                        event: S.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: { duration_ms: e, video_session_id: v, video_asset_id: A, ...C(n) },
                        sourceQuestContent: g,
                    });
            },
            [I, t, A, v, n, x, g],
        ),
        V = r.useCallback(() => {
            null != t.current &&
                x({
                    questId: I,
                    event: S.HAw.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: (0, m.zh)(t.current.currentTime, t.current.duration),
                        video_timestamp_seconds: t.current.currentTime,
                        video_session_id: v,
                        video_asset_id: A,
                        ...C(n),
                    },
                    sourceQuestContent: g,
                });
        }, [I, t, v, n, x, A, g]),
        U = r.useCallback(
            (e) => {
                null != t.current &&
                    x({
                        questId: I,
                        event: S.HAw.QUEST_VIDEO_RESUMED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            pause_reason: e,
                            video_session_id: v,
                            video_asset_id: A,
                            ...C(n),
                        },
                        sourceQuestContent: g,
                    });
            },
            [I, t, v, n, x, A, g],
        ),
        Q = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    x({
                        questId: I,
                        event: S.HAw.QUEST_VIDEO_PAUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            reason: e,
                            video_session_id: v,
                            video_asset_id: A,
                            ...C(n),
                        },
                        sourceQuestContent: g,
                    });
            },
            [I, t, v, n, x, A, g],
        ),
        w = r.useCallback(
            (e, n) => {
                null != t.current &&
                    x({
                        questId: I,
                        event: e ? S.HAw.QUEST_VIDEO_APP_FOCUSED : S.HAw.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            video_state: n,
                            video_session_id: v,
                            video_asset_id: A,
                        },
                        sourceQuestContent: g,
                    });
            },
            [I, t, v, x, A, g],
        ),
        M = r.useCallback(() => {
            null != t.current &&
                ((N.current += 1),
                x({
                    questId: I,
                    event: S.HAw.QUEST_VIDEO_BUFFERING_STARTED,
                    properties: {
                        video_asset_id: A,
                        network_connection_speed: P,
                        buffer_index: N.current,
                        video_session_id: v,
                        ...C(n),
                    },
                    sourceQuestContent: g,
                }));
        }, [I, t, A, v, n, x, g, P]),
        B = r.useCallback(
            (e) => {
                null != t.current &&
                    ((N.current += 1),
                    x({
                        questId: I,
                        event: S.HAw.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: A,
                            network_connection_speed: P,
                            duration: e,
                            buffer_index: N.current,
                            video_session_id: v,
                            ...C(n),
                        },
                        sourceQuestContent: g,
                    }));
            },
            [I, t, A, v, n, x, g, P],
        ),
        F = r.useCallback(
            (e, t) => {
                (0, E.E5)(E.kI.STEP_2_CLICKED_INTERNAL, "video_quest_analytics")
                    ? (0, u.r)({
                          type: o.F.CLICK_INTERNAL,
                          adCreativeType: i.p.QUEST,
                          adCreativeId: I,
                          questContentCTA: t,
                          surfaceId: e,
                          sourceQuestContent: g,
                          impressionId: L,
                      })
                    : O({ questId: I, questContent: e, questContentCTA: t, sourceQuestContent: g });
            },
            [I, g, O, L],
        ),
        Y = r.useCallback(
            (e) => {
                null != t.current &&
                    x({
                        questId: I,
                        event: S.HAw.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: A,
                            quest_completed: T,
                            video_duration_sec: t.current.duration,
                            video_progress: (0, m.zh)(e.segment_end_sec, t.current.duration),
                            video_session_id: v,
                            ...C(n),
                        },
                        sourceQuestContent: g,
                    });
            },
            [x, I, A, T, v, n, t, g],
        ),
        j = r.useCallback(
            (e, r) => {
                if (null == t.current) return;
                let i = t.current?.error,
                    s = t.current?.networkState,
                    u = null != t.current ? (0, m.zh)(t.current.currentTime, t.current.duration) : void 0,
                    o = null != r ? { hls_error_subtype: r.errorDetails, hls_error_fatal: r.fatal } : {};
                x({
                    questId: I,
                    event: S.HAw.QUEST_VIDEO_ERROR,
                    properties: {
                        video_progress: u,
                        video_error_type: e,
                        video_asset_id: A,
                        network_connection_speed: P,
                        video_session_id: v,
                        video_error_code: i?.code,
                        video_error_message: i?.message,
                        video_network_state: s,
                        is_full_episode_video_quest: D,
                        is_hls_supported: l.Ay.isSupported(),
                        ...C(n),
                        ...o,
                    },
                    sourceQuestContent: g,
                }),
                    (e === p.SB.SOURCE_ERROR || e === p.SB.NO_VALID_SOURCE) &&
                        c.A.increment({ name: a.K.QUEST_VIDEO_ERROR, tags: [`quest_id:${I}`, `error_type:${e}`] });
            },
            [I, t, A, v, n, x, g, P, D],
        );
    r.useEffect(() => {
        if (!R || null == n.current) return;
        let e = n.current;
        function t(e, t) {
            let n;
            switch ((h.info(`[QV] | HLS Error: type=${t.type}, details=${t.details}, fatal=${t.fatal}`), t.type)) {
                case l.Ay.ErrorTypes.NETWORK_ERROR:
                    n = p.SB.HLS_NETWORK_ERROR;
                    break;
                case l.Ay.ErrorTypes.MEDIA_ERROR:
                    n = p.SB.HLS_MEDIA_ERROR;
                    break;
                case l.Ay.ErrorTypes.MUX_ERROR:
                    n = p.SB.HLS_MUX_ERROR;
                    break;
                case l.Ay.ErrorTypes.KEY_SYSTEM_ERROR:
                    n = p.SB.HLS_KEY_SYSTEM_ERROR;
                    break;
                default:
                    n = p.SB.HLS_OTHER_ERROR;
            }
            j(n, { errorDetails: t.details, fatal: t.fatal });
        }
        return (
            e.on(l.Ay.Events.ERROR, t),
            () => {
                e.off(l.Ay.Events.ERROR, t);
            }
        );
    }, [R, n, h, j]);
    let K = r.useCallback(
            (e) => {
                null != t.current &&
                    x({
                        questId: I,
                        event: e ? S.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : S.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: { video_session_id: v, video_asset_id: A, ...C(n) },
                        sourceQuestContent: g,
                    });
            },
            [I, t, v, n, x, A, g],
        ),
        H = r.useCallback(
            (e) => {
                null != t.current &&
                    x({
                        questId: I,
                        event: S.HAw.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: {
                            volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                            video_session_id: v,
                            video_asset_id: A,
                            ...C(n),
                        },
                        sourceQuestContent: g,
                    });
            },
            [I, t, A, v, n, x, g],
        );
    return {
        trackQuestVideoLoadingStarted: k,
        trackQuestVideoLoadingEnded: b,
        trackQuestVideoTimeToFirstFrame: y,
        trackQuestVideoProgressed: V,
        trackQuestVideoResumed: U,
        trackQuestVideoPaused: Q,
        trackQuestVideoFocusChange: w,
        trackQuestContentClick: F,
        trackQuestVideoBufferingStarted: M,
        trackQuestVideoBufferingEnded: B,
        trackQuestVideoSegmentWatched: Y,
        trackQuestVideoFullscreenChanged: K,
        trackQuestVideoError: j,
        trackQuestVideoVolumeChanged: H,
    };
}
