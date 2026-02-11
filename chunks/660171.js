"use strict";
n.d(t, { A: () => h });
var r = n(64700),
    i = n(771253),
    a = n(731738),
    s = n(311907),
    o = n(831062),
    l = n(544180),
    u = n(18437),
    c = n(753386),
    d = n(261331),
    _ = n(652215);
function f(e) {
    return null == e.current || e.current.currentLevel < 0 || e.current.levels.length <= e.current.currentLevel
        ? { hls_level_index: -100, hls_segment_res_width: -100, hls_segment_res_height: -100 }
        : {
              hls_level_index: e.current.currentLevel,
              hls_segment_res_width: e.current.levels[e.current.currentLevel].width,
              hls_segment_res_height: e.current.levels[e.current.currentLevel].height,
          };
}
function h(e) {
    let {
            videoRef: t,
            hlsRef: n,
            videoSessionId: h,
            videoAssetId: p,
            sourceQuestContent: g,
            logger: E,
            questId: A,
            isQuestCompleted: I,
            isFullEpisodeVideoQuest: T,
        } = e,
        y = (0, u.u0)(),
        S = (0, u.Ut)(),
        v = (0, s.bG)([l.A], () => l.A.getEffectiveConnectionSpeed()),
        C = (0, r.useRef)(-1),
        b = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: A,
                        event: _.HAw.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                            video_asset_id: p,
                            network_connection_speed: e,
                            video_session_id: h,
                            is_hls_supported: i.Ay.isSupported(),
                            ...f(n),
                        },
                        sourceQuestContent: g,
                    });
            },
            [A, t, p, h, n, y, g],
        ),
        N = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    y({
                        questId: A,
                        event: _.HAw.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                            video_asset_id: p,
                            network_connection_speed: v,
                            duration: e,
                            video_session_id: h,
                            ...f(n),
                        },
                        sourceQuestContent: g,
                    });
            },
            [A, t, p, h, n, y, g, v],
        ),
        R = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: A,
                        event: _.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: { duration_ms: e, video_session_id: h, video_asset_id: p, ...f(n) },
                        sourceQuestContent: g,
                    });
            },
            [A, t, p, h, n, y, g],
        ),
        O = r.useCallback(() => {
            null != t.current &&
                y({
                    questId: A,
                    event: _.HAw.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: (0, c.zh)(t.current.currentTime, t.current.duration),
                        video_timestamp_seconds: t.current.currentTime,
                        video_session_id: h,
                        video_asset_id: p,
                        ...f(n),
                    },
                    sourceQuestContent: g,
                });
        }, [A, t, h, n, y, p, g]),
        D = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: A,
                        event: _.HAw.QUEST_VIDEO_RESUMED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            pause_reason: e,
                            video_session_id: h,
                            video_asset_id: p,
                            ...f(n),
                        },
                        sourceQuestContent: g,
                    });
            },
            [A, t, h, n, y, p, g],
        ),
        L = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    y({
                        questId: A,
                        event: _.HAw.QUEST_VIDEO_PAUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            reason: e,
                            video_session_id: h,
                            video_asset_id: p,
                            ...f(n),
                        },
                        sourceQuestContent: g,
                    });
            },
            [A, t, h, n, y, p, g],
        ),
        w = r.useCallback(
            (e, n) => {
                null != t.current &&
                    y({
                        questId: A,
                        event: e ? _.HAw.QUEST_VIDEO_APP_FOCUSED : _.HAw.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            video_state: n,
                            video_session_id: h,
                            video_asset_id: p,
                        },
                        sourceQuestContent: g,
                    });
            },
            [A, t, h, y, p, g],
        ),
        x = r.useCallback(() => {
            null != t.current &&
                ((C.current += 1),
                y({
                    questId: A,
                    event: _.HAw.QUEST_VIDEO_BUFFERING_STARTED,
                    properties: {
                        video_asset_id: p,
                        network_connection_speed: v,
                        buffer_index: C.current,
                        video_session_id: h,
                        ...f(n),
                    },
                    sourceQuestContent: g,
                }));
        }, [A, t, p, h, n, y, g, v]),
        P = r.useCallback(
            (e) => {
                null != t.current &&
                    ((C.current += 1),
                    y({
                        questId: A,
                        event: _.HAw.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: p,
                            network_connection_speed: v,
                            duration: e,
                            buffer_index: C.current,
                            video_session_id: h,
                            ...f(n),
                        },
                        sourceQuestContent: g,
                    }));
            },
            [A, t, p, h, n, y, g, v],
        ),
        M = r.useCallback(
            (e, t) => {
                S({ questId: A, questContent: e, questContentCTA: t, sourceQuestContent: g });
            },
            [A, g, S],
        ),
        k = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: A,
                        event: _.HAw.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: p,
                            quest_completed: I,
                            video_duration_sec: t.current.duration,
                            video_progress: (0, c.zh)(e.segment_end_sec, t.current.duration),
                            video_session_id: h,
                            ...f(n),
                        },
                        sourceQuestContent: g,
                    });
            },
            [y, A, p, I, h, n, t, g],
        ),
        U = r.useCallback(
            (e, r) => {
                if (null == t.current) return;
                let s = t.current?.error,
                    l = t.current?.networkState,
                    u = null != t.current ? (0, c.zh)(t.current.currentTime, t.current.duration) : void 0,
                    E = null != r ? { hls_error_subtype: r.errorDetails, hls_error_fatal: r.fatal } : {};
                y({
                    questId: A,
                    event: _.HAw.QUEST_VIDEO_ERROR,
                    properties: {
                        video_progress: u,
                        video_error_type: e,
                        video_asset_id: p,
                        network_connection_speed: v,
                        video_session_id: h,
                        video_error_code: s?.code,
                        video_error_message: s?.message,
                        video_network_state: l,
                        is_full_episode_video_quest: T,
                        is_hls_supported: i.Ay.isSupported(),
                        ...f(n),
                        ...E,
                    },
                    sourceQuestContent: g,
                }),
                    (e === d.SB.SOURCE_ERROR || e === d.SB.NO_VALID_SOURCE) &&
                        o.A.increment({ name: a.K.QUEST_VIDEO_ERROR, tags: [`quest_id:${A}`, `error_type:${e}`] });
            },
            [A, t, p, h, n, y, g, v, T],
        ),
        G = r.useCallback(
            (e, t) => {
                let n;
                switch ((E.info(`[QV] | HLS Error: type=${t.type}, details=${t.details}, fatal=${t.fatal}`), t.type)) {
                    case i.Ay.ErrorTypes.NETWORK_ERROR:
                        n = d.SB.HLS_NETWORK_ERROR;
                        break;
                    case i.Ay.ErrorTypes.MEDIA_ERROR:
                        n = d.SB.HLS_MEDIA_ERROR;
                        break;
                    case i.Ay.ErrorTypes.MUX_ERROR:
                        n = d.SB.HLS_MUX_ERROR;
                        break;
                    case i.Ay.ErrorTypes.KEY_SYSTEM_ERROR:
                        n = d.SB.HLS_KEY_SYSTEM_ERROR;
                        break;
                    default:
                        n = d.SB.HLS_OTHER_ERROR;
                }
                U(n, { errorDetails: t.details, fatal: t.fatal });
            },
            [E, U],
        );
    r.useEffect(() => {
        if (null == n.current) return;
        let e = n.current;
        return (
            e.on(i.Ay.Events.ERROR, G),
            () => {
                e.off(i.Ay.Events.ERROR, G);
            }
        );
    }, [n, G]);
    let F = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: A,
                        event: e ? _.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : _.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: { video_session_id: h, video_asset_id: p, ...f(n) },
                        sourceQuestContent: g,
                    });
            },
            [A, t, h, n, y, p, g],
        ),
        V = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: A,
                        event: _.HAw.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: {
                            volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                            video_session_id: h,
                            video_asset_id: p,
                            ...f(n),
                        },
                        sourceQuestContent: g,
                    });
            },
            [A, t, p, h, n, y, g],
        );
    return {
        trackQuestVideoLoadingStarted: b,
        trackQuestVideoLoadingEnded: N,
        trackQuestVideoTimeToFirstFrame: R,
        trackQuestVideoProgressed: O,
        trackQuestVideoResumed: D,
        trackQuestVideoPaused: L,
        trackQuestVideoFocusChange: w,
        trackQuestContentClick: M,
        trackQuestVideoBufferingStarted: x,
        trackQuestVideoBufferingEnded: P,
        trackWatchTimeAnalytics: k,
        trackQuestVideoFullscreenChanged: F,
        trackQuestVideoError: U,
        trackQuestVideoVolumeChanged: V,
    };
}
