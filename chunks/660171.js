n.d(t, { A: () => f });
var r = n(64700),
    s = n(771253),
    i = n(731738),
    l = n(311907),
    a = n(831062),
    o = n(544180),
    u = n(18437),
    c = n(753386),
    d = n(261331),
    m = n(652215);
function E(e) {
    return null == e.current || e.current.currentLevel < 0 || e.current.levels.length <= e.current.currentLevel
        ? { hls_level_index: -100, hls_segment_res_width: -100, hls_segment_res_height: -100 }
        : {
              hls_level_index: e.current.currentLevel,
              hls_segment_res_width: e.current.levels[e.current.currentLevel].width,
              hls_segment_res_height: e.current.levels[e.current.currentLevel].height,
          };
}
function f(e) {
    let {
            videoRef: t,
            hlsRef: n,
            videoSessionId: f,
            videoAssetId: p,
            sourceQuestContent: v,
            logger: h,
            questId: _,
            isQuestCompleted: C,
            isFullEpisodeVideoQuest: g,
        } = e,
        S = (0, u.u0)(),
        A = (0, u.Ut)(),
        x = (0, l.bG)([o.A], () => o.A.getEffectiveConnectionSpeed()),
        T = (0, r.useRef)(-1),
        b = r.useCallback(
            (e) => {
                null != t.current &&
                    S({
                        questId: _,
                        event: m.HAw.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                            video_asset_id: p,
                            network_connection_speed: e,
                            video_session_id: f,
                            is_hls_supported: s.Ay.isSupported(),
                            ...E(n),
                        },
                        sourceQuestContent: v,
                    });
            },
            [_, t, p, f, n, S, v],
        ),
        D = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    S({
                        questId: _,
                        event: m.HAw.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                            video_asset_id: p,
                            network_connection_speed: x,
                            duration: e,
                            video_session_id: f,
                            ...E(n),
                        },
                        sourceQuestContent: v,
                    });
            },
            [_, t, p, f, n, S, v, x],
        ),
        N = r.useCallback(
            (e) => {
                null != t.current &&
                    S({
                        questId: _,
                        event: m.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: { duration_ms: e, video_session_id: f, video_asset_id: p, ...E(n) },
                        sourceQuestContent: v,
                    });
            },
            [_, t, p, f, n, S, v],
        ),
        y = r.useCallback(() => {
            null != t.current &&
                S({
                    questId: _,
                    event: m.HAw.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: (0, c.zh)(t.current.currentTime, t.current.duration),
                        video_timestamp_seconds: t.current.currentTime,
                        video_session_id: f,
                        video_asset_id: p,
                        ...E(n),
                    },
                    sourceQuestContent: v,
                });
        }, [_, t, f, n, S, p, v]),
        I = r.useCallback(
            (e) => {
                null != t.current &&
                    S({
                        questId: _,
                        event: m.HAw.QUEST_VIDEO_RESUMED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            pause_reason: e,
                            video_session_id: f,
                            video_asset_id: p,
                            ...E(n),
                        },
                        sourceQuestContent: v,
                    });
            },
            [_, t, f, n, S, p, v],
        ),
        L = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    S({
                        questId: _,
                        event: m.HAw.QUEST_VIDEO_PAUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            reason: e,
                            video_session_id: f,
                            video_asset_id: p,
                            ...E(n),
                        },
                        sourceQuestContent: v,
                    });
            },
            [_, t, f, n, S, p, v],
        ),
        R = r.useCallback(
            (e, n) => {
                null != t.current &&
                    S({
                        questId: _,
                        event: e ? m.HAw.QUEST_VIDEO_APP_FOCUSED : m.HAw.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            video_state: n,
                            video_session_id: f,
                            video_asset_id: p,
                        },
                        sourceQuestContent: v,
                    });
            },
            [_, t, f, S, p, v],
        ),
        M = r.useCallback(() => {
            null != t.current &&
                ((T.current += 1),
                S({
                    questId: _,
                    event: m.HAw.QUEST_VIDEO_BUFFERING_STARTED,
                    properties: {
                        video_asset_id: p,
                        network_connection_speed: x,
                        buffer_index: T.current,
                        video_session_id: f,
                        ...E(n),
                    },
                    sourceQuestContent: v,
                }));
        }, [_, t, p, f, n, S, v, x]),
        j = r.useCallback(
            (e) => {
                null != t.current &&
                    ((T.current += 1),
                    S({
                        questId: _,
                        event: m.HAw.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: p,
                            network_connection_speed: x,
                            duration: e,
                            buffer_index: T.current,
                            video_session_id: f,
                            ...E(n),
                        },
                        sourceQuestContent: v,
                    }));
            },
            [_, t, p, f, n, S, v, x],
        ),
        O = r.useCallback(
            (e, t) => {
                A({ questId: _, questContent: e, questContentCTA: t, sourceQuestContent: v });
            },
            [_, v, A],
        ),
        k = r.useCallback(
            (e) => {
                null != t.current &&
                    S({
                        questId: _,
                        event: m.HAw.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: p,
                            quest_completed: C,
                            video_duration_sec: t.current.duration,
                            video_progress: (0, c.zh)(e.segment_end_sec, t.current.duration),
                            video_session_id: f,
                            ...E(n),
                        },
                        sourceQuestContent: v,
                    });
            },
            [S, _, p, C, f, n, t, v],
        ),
        w = r.useCallback(
            (e, r) => {
                if (null == t.current) return;
                let l = t.current?.error,
                    o = t.current?.networkState,
                    u = null != t.current ? (0, c.zh)(t.current.currentTime, t.current.duration) : void 0,
                    h = null != r ? { hls_error_subtype: r.errorDetails, hls_error_fatal: r.fatal } : {};
                S({
                    questId: _,
                    event: m.HAw.QUEST_VIDEO_ERROR,
                    properties: {
                        video_progress: u,
                        video_error_type: e,
                        video_asset_id: p,
                        network_connection_speed: x,
                        video_session_id: f,
                        video_error_code: l?.code,
                        video_error_message: l?.message,
                        video_network_state: o,
                        is_full_episode_video_quest: g,
                        is_hls_supported: s.Ay.isSupported(),
                        ...E(n),
                        ...h,
                    },
                    sourceQuestContent: v,
                }),
                    (e === d.SB.SOURCE_ERROR || e === d.SB.NO_VALID_SOURCE) &&
                        a.A.increment({ name: i.K.QUEST_VIDEO_ERROR, tags: [`quest_id:${_}`, `error_type:${e}`] });
            },
            [_, t, p, f, n, S, v, x, g],
        ),
        V = r.useCallback(
            (e, t) => {
                let n;
                switch ((h.info(`[QV] | HLS Error: type=${t.type}, details=${t.details}, fatal=${t.fatal}`), t.type)) {
                    case s.Ay.ErrorTypes.NETWORK_ERROR:
                        n = d.SB.HLS_NETWORK_ERROR;
                        break;
                    case s.Ay.ErrorTypes.MEDIA_ERROR:
                        n = d.SB.HLS_MEDIA_ERROR;
                        break;
                    case s.Ay.ErrorTypes.MUX_ERROR:
                        n = d.SB.HLS_MUX_ERROR;
                        break;
                    case s.Ay.ErrorTypes.KEY_SYSTEM_ERROR:
                        n = d.SB.HLS_KEY_SYSTEM_ERROR;
                        break;
                    default:
                        n = d.SB.HLS_OTHER_ERROR;
                }
                w(n, { errorDetails: t.details, fatal: t.fatal });
            },
            [h, w],
        );
    r.useEffect(() => {
        if (null == n.current) return;
        let e = n.current;
        return (
            e.on(s.Ay.Events.ERROR, V),
            () => {
                e.off(s.Ay.Events.ERROR, V);
            }
        );
    }, [n, V]);
    let P = r.useCallback(
            (e) => {
                null != t.current &&
                    S({
                        questId: _,
                        event: e ? m.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : m.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: { video_session_id: f, video_asset_id: p, ...E(n) },
                        sourceQuestContent: v,
                    });
            },
            [_, t, f, n, S, p, v],
        ),
        Q = r.useCallback(
            (e) => {
                null != t.current &&
                    S({
                        questId: _,
                        event: m.HAw.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: {
                            volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                            video_session_id: f,
                            video_asset_id: p,
                            ...E(n),
                        },
                        sourceQuestContent: v,
                    });
            },
            [_, t, p, f, n, S, v],
        );
    return {
        trackQuestVideoLoadingStarted: b,
        trackQuestVideoLoadingEnded: D,
        trackQuestVideoTimeToFirstFrame: N,
        trackQuestVideoProgressed: y,
        trackQuestVideoResumed: I,
        trackQuestVideoPaused: L,
        trackQuestVideoFocusChange: R,
        trackQuestContentClick: O,
        trackQuestVideoBufferingStarted: M,
        trackQuestVideoBufferingEnded: j,
        trackWatchTimeAnalytics: k,
        trackQuestVideoFullscreenChanged: P,
        trackQuestVideoError: w,
        trackQuestVideoVolumeChanged: Q,
    };
}
