n.d(t, { A: () => f });
var r = n(64700),
    l = n(771253),
    i = n(731738),
    s = n(311907),
    a = n(831062),
    o = n(544180),
    u = n(18437),
    c = n(753386),
    d = n(261331),
    m = n(652215);
function p(e) {
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
            videoAssetId: E,
            sourceQuestContent: h,
            logger: v,
            questId: x,
            isQuestCompleted: g,
            isFullEpisodeVideoQuest: S,
            listenForHlsErrors: A = !0,
        } = e,
        C = (0, u.u0)(),
        _ = (0, u.Ut)(),
        b = (0, s.bG)([o.A], () => o.A.getEffectiveConnectionSpeed()),
        y = (0, r.useRef)(-1),
        T = r.useCallback(
            (e) => {
                null != t.current &&
                    C({
                        questId: x,
                        event: m.HAw.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                            video_asset_id: E,
                            network_connection_speed: e,
                            video_session_id: f,
                            is_hls_supported: l.Ay.isSupported(),
                            ...p(n),
                        },
                        sourceQuestContent: h,
                    });
            },
            [x, t, E, f, n, C, h],
        ),
        N = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    C({
                        questId: x,
                        event: m.HAw.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                            video_asset_id: E,
                            network_connection_speed: b,
                            duration: e,
                            video_session_id: f,
                            ...p(n),
                        },
                        sourceQuestContent: h,
                    });
            },
            [x, t, E, f, n, C, h, b],
        ),
        D = r.useCallback(
            (e) => {
                null != t.current &&
                    C({
                        questId: x,
                        event: m.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: { duration_ms: e, video_session_id: f, video_asset_id: E, ...p(n) },
                        sourceQuestContent: h,
                    });
            },
            [x, t, E, f, n, C, h],
        ),
        R = r.useCallback(() => {
            null != t.current &&
                C({
                    questId: x,
                    event: m.HAw.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: (0, c.zh)(t.current.currentTime, t.current.duration),
                        video_timestamp_seconds: t.current.currentTime,
                        video_session_id: f,
                        video_asset_id: E,
                        ...p(n),
                    },
                    sourceQuestContent: h,
                });
        }, [x, t, f, n, C, E, h]),
        L = r.useCallback(
            (e) => {
                null != t.current &&
                    C({
                        questId: x,
                        event: m.HAw.QUEST_VIDEO_RESUMED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            pause_reason: e,
                            video_session_id: f,
                            video_asset_id: E,
                            ...p(n),
                        },
                        sourceQuestContent: h,
                    });
            },
            [x, t, f, n, C, E, h],
        ),
        I = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    C({
                        questId: x,
                        event: m.HAw.QUEST_VIDEO_PAUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            reason: e,
                            video_session_id: f,
                            video_asset_id: E,
                            ...p(n),
                        },
                        sourceQuestContent: h,
                    });
            },
            [x, t, f, n, C, E, h],
        ),
        M = r.useCallback(
            (e, n) => {
                null != t.current &&
                    C({
                        questId: x,
                        event: e ? m.HAw.QUEST_VIDEO_APP_FOCUSED : m.HAw.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            video_state: n,
                            video_session_id: f,
                            video_asset_id: E,
                        },
                        sourceQuestContent: h,
                    });
            },
            [x, t, f, C, E, h],
        ),
        j = r.useCallback(() => {
            null != t.current &&
                ((y.current += 1),
                C({
                    questId: x,
                    event: m.HAw.QUEST_VIDEO_BUFFERING_STARTED,
                    properties: {
                        video_asset_id: E,
                        network_connection_speed: b,
                        buffer_index: y.current,
                        video_session_id: f,
                        ...p(n),
                    },
                    sourceQuestContent: h,
                }));
        }, [x, t, E, f, n, C, h, b]),
        w = r.useCallback(
            (e) => {
                null != t.current &&
                    ((y.current += 1),
                    C({
                        questId: x,
                        event: m.HAw.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: E,
                            network_connection_speed: b,
                            duration: e,
                            buffer_index: y.current,
                            video_session_id: f,
                            ...p(n),
                        },
                        sourceQuestContent: h,
                    }));
            },
            [x, t, E, f, n, C, h, b],
        ),
        k = r.useCallback(
            (e, t) => {
                _({ questId: x, questContent: e, questContentCTA: t, sourceQuestContent: h });
            },
            [x, h, _],
        ),
        O = r.useCallback(
            (e) => {
                null != t.current &&
                    C({
                        questId: x,
                        event: m.HAw.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: E,
                            quest_completed: g,
                            video_duration_sec: t.current.duration,
                            video_progress: (0, c.zh)(e.segment_end_sec, t.current.duration),
                            video_session_id: f,
                            ...p(n),
                        },
                        sourceQuestContent: h,
                    });
            },
            [C, x, E, g, f, n, t, h],
        ),
        P = r.useCallback(
            (e, r) => {
                if (null == t.current) return;
                let s = t.current?.error,
                    o = t.current?.networkState,
                    u = null != t.current ? (0, c.zh)(t.current.currentTime, t.current.duration) : void 0,
                    v = null != r ? { hls_error_subtype: r.errorDetails, hls_error_fatal: r.fatal } : {};
                C({
                    questId: x,
                    event: m.HAw.QUEST_VIDEO_ERROR,
                    properties: {
                        video_progress: u,
                        video_error_type: e,
                        video_asset_id: E,
                        network_connection_speed: b,
                        video_session_id: f,
                        video_error_code: s?.code,
                        video_error_message: s?.message,
                        video_network_state: o,
                        is_full_episode_video_quest: S,
                        is_hls_supported: l.Ay.isSupported(),
                        ...p(n),
                        ...v,
                    },
                    sourceQuestContent: h,
                }),
                    (e === d.SB.SOURCE_ERROR || e === d.SB.NO_VALID_SOURCE) &&
                        a.A.increment({ name: i.K.QUEST_VIDEO_ERROR, tags: [`quest_id:${x}`, `error_type:${e}`] });
            },
            [x, t, E, f, n, C, h, b, S],
        );
    r.useEffect(() => {
        if (!A || null == n.current) return;
        let e = n.current,
            t = (e, t) => {
                let n;
                switch ((v.info(`[QV] | HLS Error: type=${t.type}, details=${t.details}, fatal=${t.fatal}`), t.type)) {
                    case l.Ay.ErrorTypes.NETWORK_ERROR:
                        n = d.SB.HLS_NETWORK_ERROR;
                        break;
                    case l.Ay.ErrorTypes.MEDIA_ERROR:
                        n = d.SB.HLS_MEDIA_ERROR;
                        break;
                    case l.Ay.ErrorTypes.MUX_ERROR:
                        n = d.SB.HLS_MUX_ERROR;
                        break;
                    case l.Ay.ErrorTypes.KEY_SYSTEM_ERROR:
                        n = d.SB.HLS_KEY_SYSTEM_ERROR;
                        break;
                    default:
                        n = d.SB.HLS_OTHER_ERROR;
                }
                P(n, { errorDetails: t.details, fatal: t.fatal });
            };
        return (
            e.on(l.Ay.Events.ERROR, t),
            () => {
                e.off(l.Ay.Events.ERROR, t);
            }
        );
    }, [A, n, v, P]);
    let Q = r.useCallback(
            (e) => {
                null != t.current &&
                    C({
                        questId: x,
                        event: e ? m.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : m.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: { video_session_id: f, video_asset_id: E, ...p(n) },
                        sourceQuestContent: h,
                    });
            },
            [x, t, f, n, C, E, h],
        ),
        V = r.useCallback(
            (e) => {
                null != t.current &&
                    C({
                        questId: x,
                        event: m.HAw.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: {
                            volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                            video_session_id: f,
                            video_asset_id: E,
                            ...p(n),
                        },
                        sourceQuestContent: h,
                    });
            },
            [x, t, E, f, n, C, h],
        );
    return {
        trackQuestVideoLoadingStarted: T,
        trackQuestVideoLoadingEnded: N,
        trackQuestVideoTimeToFirstFrame: D,
        trackQuestVideoProgressed: R,
        trackQuestVideoResumed: L,
        trackQuestVideoPaused: I,
        trackQuestVideoFocusChange: M,
        trackQuestContentClick: k,
        trackQuestVideoBufferingStarted: j,
        trackQuestVideoBufferingEnded: w,
        trackQuestVideoSegmentWatched: O,
        trackQuestVideoFullscreenChanged: Q,
        trackQuestVideoError: P,
        trackQuestVideoVolumeChanged: V,
    };
}
