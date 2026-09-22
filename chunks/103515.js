n.d(t, { A: () => T });
var r = n(582128),
    l = n(323889),
    i = n(731738),
    s = n(17928),
    u = n(274670),
    a = n(144779),
    o = n(69114),
    c = n(807393),
    d = n(53200),
    E = n(544180),
    _ = n(738822),
    f = n(104886),
    p = n(561844),
    m = n(18437),
    S = n(590202),
    v = n(971649);
let C = new Set();
var A = n(710969),
    h = n(753386),
    g = n(163961),
    I = n(652215);
function D(e) {
    return null == e.current || e.current.currentLevel < 0 || e.current.levels.length <= e.current.currentLevel
        ? { hls_level_index: -100, hls_segment_res_width: -100, hls_segment_res_height: -100 }
        : {
              hls_level_index: e.current.currentLevel,
              hls_segment_res_width: e.current.levels[e.current.currentLevel].width,
              hls_segment_res_height: e.current.levels[e.current.currentLevel].height,
          };
}
function T(e) {
    let {
            videoRef: t,
            hlsRef: n,
            hls: T = null,
            videoSessionId: R,
            videoAssetId: x,
            sourceQuestContent: L,
            logger: O,
            questId: P,
            isQuestCompleted: N,
            isFullEpisodeVideoQuest: k,
            listenForHlsErrors: b = !0,
        } = e,
        y = (0, m.u0)(),
        V = (0, m.Ut)(),
        U = (0, v.go)(),
        Q = (0, v.wW)(),
        M = (0, s.bG)([E.A], () => E.A.getEffectiveConnectionSpeed()),
        w = (0, r.useRef)(-1),
        B = r.useMemo(
            () =>
                (function (e) {
                    let { getImpressionId: t, onEmit: n, initialWatchedSeconds: r = 0, thresholdSeconds: l = 5 } = e,
                        i = Math.max(0, r),
                        s = null,
                        u = null,
                        a = !1;
                    function o() {
                        let e = t();
                        return null != e && e.length > 0 ? e : null;
                    }
                    function c() {
                        s = null;
                    }
                    return {
                        onProgress(e) {
                            let { positionSeconds: t, durationSeconds: r, isPlaying: d } = e,
                                E = o();
                            if (null == E) return void c();
                            if ((null != u && u !== E && ((i = 0), c()), (u = E), !C.has(E) && !a)) {
                                if (!d) return void c();
                                if (null != s) {
                                    let e = t - s;
                                    e > 0 && e <= 1.5 && (i += e);
                                }
                                ((s = t),
                                    i < l ||
                                        C.has(E) ||
                                        a ||
                                        ((a = !0),
                                        Promise.resolve(
                                            n({
                                                video_watch_seconds: i,
                                                video_position_seconds: t,
                                                video_duration_seconds: r,
                                            }),
                                        )
                                            .then(() => {
                                                C.add(E);
                                            })
                                            .catch(() => {})
                                            .finally(() => {
                                                a = !1;
                                            })));
                            }
                        },
                        pause: c,
                        getWatchedSeconds: () => i,
                        hasEmitted: () => {
                            let e = o();
                            return a || (null != e && C.has(e));
                        },
                    };
                })({
                    getImpressionId: Q,
                    onEmit: (e) => {
                        let t = _.uF.VIDEO_MODAL;
                        (0, p.av)({
                            questId: P,
                            event: I.HAw.QUEST_CONTENT_ENGAGED_VIEWED,
                            properties: {
                                ...(0, S.fF)(t),
                                ...(0, o.A)(),
                                impression_id: Q(),
                                video_watch_seconds: e.video_watch_seconds,
                                video_position_seconds: e.video_position_seconds,
                                video_duration_seconds: e.video_duration_seconds,
                                apple_advertising_id: null,
                                android_advertising_id: null,
                                metadata_sealed: (0, A.L4)(L, P) ?? null,
                                traffic_metadata_sealed: (0, A.Gp)(L, P) ?? null,
                            },
                            sourceQuestContent: L,
                        });
                    },
                }),
            [Q, P, L],
        ),
        F = r.useCallback(
            (e) => {
                let { positionSeconds: t, durationSeconds: n, isPlaying: r } = e;
                B.onProgress({ positionSeconds: t, durationSeconds: n, isPlaying: r });
            },
            [B],
        ),
        j = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: P,
                        event: I.HAw.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                            video_asset_id: x,
                            network_connection_speed: e,
                            video_session_id: R,
                            is_hls_supported: (0, d.Ap)(),
                            ...D(n),
                        },
                        sourceQuestContent: L,
                    });
            },
            [P, t, x, R, n, y, L],
        ),
        Y = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    y({
                        questId: P,
                        event: I.HAw.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                            video_asset_id: x,
                            network_connection_speed: M,
                            duration: e,
                            video_session_id: R,
                            ...D(n),
                        },
                        sourceQuestContent: L,
                    });
            },
            [P, t, x, R, n, y, L, M],
        ),
        K = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: P,
                        event: I.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: { duration_ms: e, video_session_id: R, video_asset_id: x, ...D(n) },
                        sourceQuestContent: L,
                    });
            },
            [P, t, x, R, n, y, L],
        ),
        H = r.useCallback(() => {
            null != t.current &&
                y({
                    questId: P,
                    event: I.HAw.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: (0, h.zh)(t.current.currentTime, t.current.duration),
                        video_timestamp_seconds: t.current.currentTime,
                        video_session_id: R,
                        video_asset_id: x,
                        ...D(n),
                    },
                    sourceQuestContent: L,
                });
        }, [P, t, R, n, y, x, L]),
        G = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: P,
                        event: I.HAw.QUEST_VIDEO_RESUMED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            pause_reason: e,
                            video_session_id: R,
                            video_asset_id: x,
                            ...D(n),
                        },
                        sourceQuestContent: L,
                    });
            },
            [P, t, R, n, y, x, L],
        ),
        $ = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    y({
                        questId: P,
                        event: I.HAw.QUEST_VIDEO_PAUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            reason: e,
                            video_session_id: R,
                            video_asset_id: x,
                            ...D(n),
                        },
                        sourceQuestContent: L,
                    });
            },
            [P, t, R, n, y, x, L],
        ),
        q = r.useCallback(
            (e, n) => {
                null != t.current &&
                    y({
                        questId: P,
                        event: e ? I.HAw.QUEST_VIDEO_APP_FOCUSED : I.HAw.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            video_state: n,
                            video_session_id: R,
                            video_asset_id: x,
                        },
                        sourceQuestContent: L,
                    });
            },
            [P, t, R, y, x, L],
        ),
        W = r.useCallback(() => {
            null != t.current &&
                ((w.current += 1),
                y({
                    questId: P,
                    event: I.HAw.QUEST_VIDEO_BUFFERING_STARTED,
                    properties: {
                        video_asset_id: x,
                        network_connection_speed: M,
                        buffer_index: w.current,
                        video_session_id: R,
                        ...D(n),
                    },
                    sourceQuestContent: L,
                }));
        }, [P, t, x, R, n, y, L, M]),
        z = r.useCallback(
            (e) => {
                null != t.current &&
                    ((w.current += 1),
                    y({
                        questId: P,
                        event: I.HAw.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: x,
                            network_connection_speed: M,
                            duration: e,
                            buffer_index: w.current,
                            video_session_id: R,
                            ...D(n),
                        },
                        sourceQuestContent: L,
                    }));
            },
            [P, t, x, R, n, y, L, M],
        ),
        X = r.useCallback(
            (e, t) => {
                (0, f.E5)(f.kI.STEP_2_CLICKED_INTERNAL, "video_quest_analytics")
                    ? (0, u.r)({
                          type: a.F.CLICK_INTERNAL,
                          adCreativeType: l.p.QUEST,
                          adCreativeId: P,
                          questContentCTA: t,
                          surfaceId: e,
                          sourceQuestContent: L,
                          impressionId: U,
                      })
                    : V({ questId: P, questContent: e, questContentCTA: t, sourceQuestContent: L });
            },
            [P, L, V, U],
        ),
        Z = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: P,
                        event: I.HAw.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: x,
                            quest_completed: N,
                            video_duration_sec: t.current.duration,
                            video_progress: (0, h.zh)(e.segment_end_sec, t.current.duration),
                            video_session_id: R,
                            ...D(n),
                        },
                        sourceQuestContent: L,
                    });
            },
            [y, P, x, N, R, n, t, L],
        ),
        J = r.useCallback(
            (e, r) => {
                if (null == t.current) return;
                let l = t.current?.error,
                    s = t.current?.networkState,
                    u = null != t.current ? (0, h.zh)(t.current.currentTime, t.current.duration) : void 0,
                    a = null != r ? { hls_error_subtype: r.errorDetails, hls_error_fatal: r.fatal } : {};
                (y({
                    questId: P,
                    event: I.HAw.QUEST_VIDEO_ERROR,
                    properties: {
                        video_progress: u,
                        video_error_type: e,
                        video_asset_id: x,
                        network_connection_speed: M,
                        video_session_id: R,
                        video_error_code: l?.code,
                        video_error_message: l?.message,
                        video_network_state: s,
                        is_full_episode_video_quest: k,
                        is_hls_supported: (0, d.Ap)(),
                        ...D(n),
                        ...a,
                    },
                    sourceQuestContent: L,
                }),
                    (e === g.SB.SOURCE_ERROR || e === g.SB.NO_VALID_SOURCE) &&
                        c.A.increment({ name: i.K.QUEST_VIDEO_ERROR, tags: [`quest_id:${P}`, `error_type:${e}`] }));
            },
            [P, t, x, R, n, y, L, M, k],
        );
    r.useEffect(() => {
        if (!b || null == T) return;
        let e = (0, d.LA)();
        if (null != e)
            return (
                T.on(e.Events.ERROR, t),
                () => {
                    T.off(e.Events.ERROR, t);
                }
            );
        function t(t, n) {
            let r;
            if (null != e) {
                switch ((O.info(`[QV] | HLS Error: type=${n.type}, details=${n.details}, fatal=${n.fatal}`), n.type)) {
                    case e.ErrorTypes.NETWORK_ERROR:
                        r = g.SB.HLS_NETWORK_ERROR;
                        break;
                    case e.ErrorTypes.MEDIA_ERROR:
                        r = g.SB.HLS_MEDIA_ERROR;
                        break;
                    case e.ErrorTypes.MUX_ERROR:
                        r = g.SB.HLS_MUX_ERROR;
                        break;
                    case e.ErrorTypes.KEY_SYSTEM_ERROR:
                        r = g.SB.HLS_KEY_SYSTEM_ERROR;
                        break;
                    default:
                        r = g.SB.HLS_OTHER_ERROR;
                }
                J(r, { errorDetails: n.details, fatal: n.fatal });
            }
        }
    }, [b, T, O, J]);
    let ee = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: P,
                        event: e ? I.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : I.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: { video_session_id: R, video_asset_id: x, ...D(n) },
                        sourceQuestContent: L,
                    });
            },
            [P, t, R, n, y, x, L],
        ),
        et = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: P,
                        event: I.HAw.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: {
                            volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                            video_session_id: R,
                            video_asset_id: x,
                            ...D(n),
                        },
                        sourceQuestContent: L,
                    });
            },
            [P, t, x, R, n, y, L],
        );
    return {
        trackQuestVideoLoadingStarted: j,
        trackQuestVideoLoadingEnded: Y,
        trackQuestVideoTimeToFirstFrame: K,
        trackQuestVideoProgressed: H,
        trackQuestVideoResumed: G,
        trackQuestVideoPaused: $,
        trackQuestVideoFocusChange: q,
        trackQuestContentClick: X,
        trackQuestVideoBufferingStarted: W,
        trackQuestVideoBufferingEnded: z,
        trackQuestVideoSegmentWatched: Z,
        trackQuestVideoFullscreenChanged: ee,
        trackQuestVideoError: J,
        trackQuestVideoVolumeChanged: et,
        handleEngagedViewProgress: F,
    };
}
