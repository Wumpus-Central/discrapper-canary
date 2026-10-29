n.d(t, { A: () => D });
var r = n(582128),
    u = n(323889),
    l = n(731738),
    s = n(17928),
    i = n(507395),
    a = n(144779),
    o = n(69114),
    c = n(807393),
    d = n(53200),
    E = n(544180),
    _ = n(738822),
    f = n(561844),
    p = n(18437),
    m = n(590202),
    S = n(971649),
    v = n(297727),
    C = n(710969),
    A = n(753386),
    I = n(163961),
    g = n(652215);
function h(e) {
    return null == e.current || e.current.currentLevel < 0 || e.current.levels.length <= e.current.currentLevel
        ? { hls_level_index: -100, hls_segment_res_width: -100, hls_segment_res_height: -100 }
        : {
              hls_level_index: e.current.currentLevel,
              hls_segment_res_width: e.current.levels[e.current.currentLevel].width,
              hls_segment_res_height: e.current.levels[e.current.currentLevel].height,
          };
}
function D(e) {
    let {
            videoRef: t,
            hlsRef: n,
            hls: D = null,
            videoSessionId: T,
            videoAssetId: R,
            sourceQuestContent: O,
            logger: L,
            questId: N,
            isQuestCompleted: k,
            isFullEpisodeVideoQuest: b,
            listenForHlsErrors: P = !0,
        } = e,
        x = (0, p.u0)(),
        y = (0, S.wW)(),
        V = (0, s.bG)([E.A], () => E.A.getEffectiveConnectionSpeed()),
        U = (0, r.useRef)(-1),
        Q = r.useMemo(
            () =>
                (0, v.n0)({
                    getImpressionId: y,
                    onEmit: (e) => {
                        let t = _.uF.VIDEO_MODAL;
                        (0, f.av)({
                            questId: N,
                            event: g.HAw.QUEST_CONTENT_ENGAGED_VIEWED,
                            properties: {
                                ...(0, m.fF)(t),
                                ...(0, o.A)(),
                                impression_id: y(),
                                video_watch_seconds: e.video_watch_seconds,
                                video_position_seconds: e.video_position_seconds,
                                video_duration_seconds: e.video_duration_seconds,
                                apple_advertising_id: null,
                                android_advertising_id: null,
                                metadata_sealed: (0, C.L4)(O, N) ?? null,
                                traffic_metadata_sealed: (0, C.Gp)(O, N) ?? null,
                            },
                            sourceQuestContent: O,
                        });
                    },
                }),
            [y, N, O],
        ),
        M = r.useCallback(
            (e) => {
                let { positionSeconds: t, durationSeconds: n, isPlaying: r } = e;
                Q.onProgress({ positionSeconds: t, durationSeconds: n, isPlaying: r });
            },
            [Q],
        ),
        w = r.useCallback(
            (e) => {
                null != t.current &&
                    x({
                        questId: N,
                        event: g.HAw.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                            video_asset_id: R,
                            network_connection_speed: e,
                            video_session_id: T,
                            is_hls_supported: (0, d.Ap)(),
                            ...h(n),
                        },
                        sourceQuestContent: O,
                    });
            },
            [N, t, R, T, n, x, O],
        ),
        B = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    x({
                        questId: N,
                        event: g.HAw.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                            video_asset_id: R,
                            network_connection_speed: V,
                            duration: e,
                            video_session_id: T,
                            ...h(n),
                        },
                        sourceQuestContent: O,
                    });
            },
            [N, t, R, T, n, x, O, V],
        ),
        F = r.useCallback(
            (e) => {
                null != t.current &&
                    x({
                        questId: N,
                        event: g.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: { duration_ms: e, video_session_id: T, video_asset_id: R, ...h(n) },
                        sourceQuestContent: O,
                    });
            },
            [N, t, R, T, n, x, O],
        ),
        Y = r.useCallback(() => {
            null != t.current &&
                x({
                    questId: N,
                    event: g.HAw.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: (0, A.zh)(t.current.currentTime, t.current.duration),
                        video_timestamp_seconds: t.current.currentTime,
                        video_session_id: T,
                        video_asset_id: R,
                        ...h(n),
                    },
                    sourceQuestContent: O,
                });
        }, [N, t, T, n, x, R, O]),
        j = r.useCallback(
            (e) => {
                null != t.current &&
                    x({
                        questId: N,
                        event: g.HAw.QUEST_VIDEO_RESUMED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            pause_reason: e,
                            video_session_id: T,
                            video_asset_id: R,
                            ...h(n),
                        },
                        sourceQuestContent: O,
                    });
            },
            [N, t, T, n, x, R, O],
        ),
        H = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    x({
                        questId: N,
                        event: g.HAw.QUEST_VIDEO_PAUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            reason: e,
                            video_session_id: T,
                            video_asset_id: R,
                            ...h(n),
                        },
                        sourceQuestContent: O,
                    });
            },
            [N, t, T, n, x, R, O],
        ),
        G = r.useCallback(
            (e, n) => {
                null != t.current &&
                    x({
                        questId: N,
                        event: e ? g.HAw.QUEST_VIDEO_APP_FOCUSED : g.HAw.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            video_state: n,
                            video_session_id: T,
                            video_asset_id: R,
                        },
                        sourceQuestContent: O,
                    });
            },
            [N, t, T, x, R, O],
        ),
        K = r.useCallback(() => {
            null != t.current &&
                ((U.current += 1),
                x({
                    questId: N,
                    event: g.HAw.QUEST_VIDEO_BUFFERING_STARTED,
                    properties: {
                        video_asset_id: R,
                        network_connection_speed: V,
                        buffer_index: U.current,
                        video_session_id: T,
                        ...h(n),
                    },
                    sourceQuestContent: O,
                }));
        }, [N, t, R, T, n, x, O, V]),
        $ = r.useCallback(
            (e) => {
                null != t.current &&
                    ((U.current += 1),
                    x({
                        questId: N,
                        event: g.HAw.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: R,
                            network_connection_speed: V,
                            duration: e,
                            buffer_index: U.current,
                            video_session_id: T,
                            ...h(n),
                        },
                        sourceQuestContent: O,
                    }));
            },
            [N, t, R, T, n, x, O, V],
        ),
        W = r.useCallback(
            (e, t) => {
                (0, i.r)({
                    type: a.F.CLICK_INTERNAL,
                    adCreativeType: u.p.QUEST,
                    adCreativeId: N,
                    questContentCTA: t,
                    surfaceId: e,
                    sourceQuestContent: O,
                    impressionId: y(),
                });
            },
            [N, O, y],
        ),
        q = r.useCallback(
            (e) => {
                null != t.current &&
                    x({
                        questId: N,
                        event: g.HAw.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: R,
                            quest_completed: k,
                            video_duration_sec: t.current.duration,
                            video_progress: (0, A.zh)(e.segment_end_sec, t.current.duration),
                            video_session_id: T,
                            ...h(n),
                        },
                        sourceQuestContent: O,
                    });
            },
            [x, N, R, k, T, n, t, O],
        ),
        z = r.useCallback(
            (e, r) => {
                if (null == t.current) return;
                let s = t.current?.error,
                    i = t.current?.networkState,
                    a = null != t.current ? (0, A.zh)(t.current.currentTime, t.current.duration) : void 0,
                    o = null != r ? { hls_error_subtype: r.errorDetails, hls_error_fatal: r.fatal } : {};
                (x({
                    questId: N,
                    event: g.HAw.QUEST_VIDEO_ERROR,
                    properties: {
                        video_progress: a,
                        video_error_type: e,
                        video_asset_id: R,
                        network_connection_speed: V,
                        video_session_id: T,
                        video_error_code: s?.code,
                        video_error_message: s?.message,
                        video_network_state: i,
                        is_full_episode_video_quest: b,
                        is_hls_supported: (0, d.Ap)(),
                        ...h(n),
                        ...o,
                    },
                    sourceQuestContent: O,
                }),
                    (e === I.SB.SOURCE_ERROR || e === I.SB.NO_VALID_SOURCE) &&
                        c.A.increment({
                            name: l.K.QUEST_VIDEO_ERROR,
                            tags: [`ad_creative_id:${N}`, `ad_creative_type:${u.p[u.p.QUEST]}`, `error_type:${e}`],
                        }));
            },
            [N, t, R, T, n, x, O, V, b],
        );
    r.useEffect(() => {
        if (!P || null == D) return;
        let e = (0, d.LA)();
        if (null != e)
            return (
                D.on(e.Events.ERROR, t),
                () => {
                    D.off(e.Events.ERROR, t);
                }
            );
        function t(t, n) {
            let r;
            if (null != e) {
                switch ((L.info(`[QV] | HLS Error: type=${n.type}, details=${n.details}, fatal=${n.fatal}`), n.type)) {
                    case e.ErrorTypes.NETWORK_ERROR:
                        r = I.SB.HLS_NETWORK_ERROR;
                        break;
                    case e.ErrorTypes.MEDIA_ERROR:
                        r = I.SB.HLS_MEDIA_ERROR;
                        break;
                    case e.ErrorTypes.MUX_ERROR:
                        r = I.SB.HLS_MUX_ERROR;
                        break;
                    case e.ErrorTypes.KEY_SYSTEM_ERROR:
                        r = I.SB.HLS_KEY_SYSTEM_ERROR;
                        break;
                    default:
                        r = I.SB.HLS_OTHER_ERROR;
                }
                z(r, { errorDetails: n.details, fatal: n.fatal });
            }
        }
    }, [P, D, L, z]);
    let X = r.useCallback(
            (e) => {
                null != t.current &&
                    x({
                        questId: N,
                        event: e ? g.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : g.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: { video_session_id: T, video_asset_id: R, ...h(n) },
                        sourceQuestContent: O,
                    });
            },
            [N, t, T, n, x, R, O],
        ),
        Z = r.useCallback(
            (e) => {
                null != t.current &&
                    x({
                        questId: N,
                        event: g.HAw.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: {
                            volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                            video_session_id: T,
                            video_asset_id: R,
                            ...h(n),
                        },
                        sourceQuestContent: O,
                    });
            },
            [N, t, R, T, n, x, O],
        );
    return {
        trackQuestVideoLoadingStarted: w,
        trackQuestVideoLoadingEnded: B,
        trackQuestVideoTimeToFirstFrame: F,
        trackQuestVideoProgressed: Y,
        trackQuestVideoResumed: j,
        trackQuestVideoPaused: H,
        trackQuestVideoFocusChange: G,
        trackQuestContentClick: W,
        trackQuestVideoBufferingStarted: K,
        trackQuestVideoBufferingEnded: $,
        trackQuestVideoSegmentWatched: q,
        trackQuestVideoFullscreenChanged: X,
        trackQuestVideoError: z,
        trackQuestVideoVolumeChanged: Z,
        handleEngagedViewProgress: M,
    };
}
