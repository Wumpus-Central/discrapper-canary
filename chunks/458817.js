n.d(t, { A: () => f });
var r = n(64700),
    s = n(771253),
    a = n(731738),
    l = n(17928),
    i = n(831062),
    u = n(544180),
    o = n(18437),
    c = n(753386),
    d = n(163961),
    E = n(652215);
function m(e) {
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
            videoAssetId: _,
            sourceQuestContent: S,
            logger: p,
            questId: v,
            isQuestCompleted: g,
            isFullEpisodeVideoQuest: h,
            listenForHlsErrors: C = !0,
        } = e,
        A = (0, o.u0)(),
        x = (0, o.Ut)(),
        D = (0, l.bG)([u.A], () => u.A.getEffectiveConnectionSpeed()),
        I = (0, r.useRef)(-1),
        T = r.useCallback(
            (e) => {
                null != t.current &&
                    A({
                        questId: v,
                        event: E.HAw.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                            video_asset_id: _,
                            network_connection_speed: e,
                            video_session_id: f,
                            is_hls_supported: s.Ay.isSupported(),
                            ...m(n),
                        },
                        sourceQuestContent: S,
                    });
            },
            [v, t, _, f, n, A, S],
        ),
        b = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    A({
                        questId: v,
                        event: E.HAw.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                            video_asset_id: _,
                            network_connection_speed: D,
                            duration: e,
                            video_session_id: f,
                            ...m(n),
                        },
                        sourceQuestContent: S,
                    });
            },
            [v, t, _, f, n, A, S, D],
        ),
        O = r.useCallback(
            (e) => {
                null != t.current &&
                    A({
                        questId: v,
                        event: E.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: { duration_ms: e, video_session_id: f, video_asset_id: _, ...m(n) },
                        sourceQuestContent: S,
                    });
            },
            [v, t, _, f, n, A, S],
        ),
        L = r.useCallback(() => {
            null != t.current &&
                A({
                    questId: v,
                    event: E.HAw.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: (0, c.zh)(t.current.currentTime, t.current.duration),
                        video_timestamp_seconds: t.current.currentTime,
                        video_session_id: f,
                        video_asset_id: _,
                        ...m(n),
                    },
                    sourceQuestContent: S,
                });
        }, [v, t, f, n, A, _, S]),
        R = r.useCallback(
            (e) => {
                null != t.current &&
                    A({
                        questId: v,
                        event: E.HAw.QUEST_VIDEO_RESUMED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            pause_reason: e,
                            video_session_id: f,
                            video_asset_id: _,
                            ...m(n),
                        },
                        sourceQuestContent: S,
                    });
            },
            [v, t, f, n, A, _, S],
        ),
        k = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    A({
                        questId: v,
                        event: E.HAw.QUEST_VIDEO_PAUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            reason: e,
                            video_session_id: f,
                            video_asset_id: _,
                            ...m(n),
                        },
                        sourceQuestContent: S,
                    });
            },
            [v, t, f, n, A, _, S],
        ),
        N = r.useCallback(
            (e, n) => {
                null != t.current &&
                    A({
                        questId: v,
                        event: e ? E.HAw.QUEST_VIDEO_APP_FOCUSED : E.HAw.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            video_state: n,
                            video_session_id: f,
                            video_asset_id: _,
                        },
                        sourceQuestContent: S,
                    });
            },
            [v, t, f, A, _, S],
        ),
        y = r.useCallback(() => {
            null != t.current &&
                ((I.current += 1),
                A({
                    questId: v,
                    event: E.HAw.QUEST_VIDEO_BUFFERING_STARTED,
                    properties: {
                        video_asset_id: _,
                        network_connection_speed: D,
                        buffer_index: I.current,
                        video_session_id: f,
                        ...m(n),
                    },
                    sourceQuestContent: S,
                }));
        }, [v, t, _, f, n, A, S, D]),
        M = r.useCallback(
            (e) => {
                null != t.current &&
                    ((I.current += 1),
                    A({
                        questId: v,
                        event: E.HAw.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: _,
                            network_connection_speed: D,
                            duration: e,
                            buffer_index: I.current,
                            video_session_id: f,
                            ...m(n),
                        },
                        sourceQuestContent: S,
                    }));
            },
            [v, t, _, f, n, A, S, D],
        ),
        P = r.useCallback(
            (e, t) => {
                x({ questId: v, questContent: e, questContentCTA: t, sourceQuestContent: S });
            },
            [v, S, x],
        ),
        V = r.useCallback(
            (e) => {
                null != t.current &&
                    A({
                        questId: v,
                        event: E.HAw.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: _,
                            quest_completed: g,
                            video_duration_sec: t.current.duration,
                            video_progress: (0, c.zh)(e.segment_end_sec, t.current.duration),
                            video_session_id: f,
                            ...m(n),
                        },
                        sourceQuestContent: S,
                    });
            },
            [A, v, _, g, f, n, t, S],
        ),
        w = r.useCallback(
            (e, r) => {
                if (null == t.current) return;
                let l = t.current?.error,
                    u = t.current?.networkState,
                    o = null != t.current ? (0, c.zh)(t.current.currentTime, t.current.duration) : void 0,
                    p = null != r ? { hls_error_subtype: r.errorDetails, hls_error_fatal: r.fatal } : {};
                A({
                    questId: v,
                    event: E.HAw.QUEST_VIDEO_ERROR,
                    properties: {
                        video_progress: o,
                        video_error_type: e,
                        video_asset_id: _,
                        network_connection_speed: D,
                        video_session_id: f,
                        video_error_code: l?.code,
                        video_error_message: l?.message,
                        video_network_state: u,
                        is_full_episode_video_quest: h,
                        is_hls_supported: s.Ay.isSupported(),
                        ...m(n),
                        ...p,
                    },
                    sourceQuestContent: S,
                }),
                    (e === d.SB.SOURCE_ERROR || e === d.SB.NO_VALID_SOURCE) &&
                        i.A.increment({ name: a.K.QUEST_VIDEO_ERROR, tags: [`quest_id:${v}`, `error_type:${e}`] });
            },
            [v, t, _, f, n, A, S, D, h],
        );
    r.useEffect(() => {
        if (!C || null == n.current) return;
        let e = n.current,
            t = (e, t) => {
                let n;
                switch ((p.info(`[QV] | HLS Error: type=${t.type}, details=${t.details}, fatal=${t.fatal}`), t.type)) {
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
            };
        return (
            e.on(s.Ay.Events.ERROR, t),
            () => {
                e.off(s.Ay.Events.ERROR, t);
            }
        );
    }, [C, n, p, w]);
    let Q = r.useCallback(
            (e) => {
                null != t.current &&
                    A({
                        questId: v,
                        event: e ? E.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : E.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: { video_session_id: f, video_asset_id: _, ...m(n) },
                        sourceQuestContent: S,
                    });
            },
            [v, t, f, n, A, _, S],
        ),
        j = r.useCallback(
            (e) => {
                null != t.current &&
                    A({
                        questId: v,
                        event: E.HAw.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: {
                            volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                            video_session_id: f,
                            video_asset_id: _,
                            ...m(n),
                        },
                        sourceQuestContent: S,
                    });
            },
            [v, t, _, f, n, A, S],
        );
    return {
        trackQuestVideoLoadingStarted: T,
        trackQuestVideoLoadingEnded: b,
        trackQuestVideoTimeToFirstFrame: O,
        trackQuestVideoProgressed: L,
        trackQuestVideoResumed: R,
        trackQuestVideoPaused: k,
        trackQuestVideoFocusChange: N,
        trackQuestContentClick: P,
        trackQuestVideoBufferingStarted: y,
        trackQuestVideoBufferingEnded: M,
        trackQuestVideoSegmentWatched: V,
        trackQuestVideoFullscreenChanged: Q,
        trackQuestVideoError: w,
        trackQuestVideoVolumeChanged: j,
    };
}
