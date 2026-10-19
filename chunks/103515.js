n.d(t, { A: () => T });
var r = n(582128),
    l = n(323889),
    u = n(731738),
    i = n(17928),
    s = n(274670),
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
    I = n(163961),
    g = n(652215);
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
            videoAssetId: L,
            sourceQuestContent: O,
            logger: N,
            questId: k,
            isQuestCompleted: P,
            isFullEpisodeVideoQuest: b,
            listenForHlsErrors: x = !0,
        } = e,
        y = (0, m.u0)(),
        V = (0, m.Ut)(),
        U = (0, v.wW)(),
        Q = (0, i.bG)([E.A], () => E.A.getEffectiveConnectionSpeed()),
        M = (0, r.useRef)(-1),
        w = r.useMemo(
            () =>
                (function (e) {
                    let { getImpressionId: t, onEmit: n, initialWatchedSeconds: r = 0, thresholdSeconds: l = 5 } = e,
                        u = Math.max(0, r),
                        i = null,
                        s = null,
                        a = !1;
                    function o() {
                        let e = t();
                        return null != e && e.length > 0 ? e : null;
                    }
                    function c() {
                        i = null;
                    }
                    return {
                        onProgress(e) {
                            let { positionSeconds: t, durationSeconds: r, isPlaying: d } = e,
                                E = o();
                            if (null == E) return void c();
                            if ((null != s && s !== E && ((u = 0), c()), (s = E), !C.has(E) && !a)) {
                                if (!d) return void c();
                                if (null != i) {
                                    let e = t - i;
                                    e > 0 && e <= 1.5 && (u += e);
                                }
                                ((i = t),
                                    u < l ||
                                        C.has(E) ||
                                        a ||
                                        ((a = !0),
                                        Promise.resolve(
                                            n({
                                                video_watch_seconds: u,
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
                        getWatchedSeconds: () => u,
                        hasEmitted: () => {
                            let e = o();
                            return a || (null != e && C.has(e));
                        },
                    };
                })({
                    getImpressionId: U,
                    onEmit: (e) => {
                        let t = _.uF.VIDEO_MODAL;
                        (0, p.av)({
                            questId: k,
                            event: g.HAw.QUEST_CONTENT_ENGAGED_VIEWED,
                            properties: {
                                ...(0, S.fF)(t),
                                ...(0, o.A)(),
                                impression_id: U(),
                                video_watch_seconds: e.video_watch_seconds,
                                video_position_seconds: e.video_position_seconds,
                                video_duration_seconds: e.video_duration_seconds,
                                apple_advertising_id: null,
                                android_advertising_id: null,
                                metadata_sealed: (0, A.L4)(O, k) ?? null,
                                traffic_metadata_sealed: (0, A.Gp)(O, k) ?? null,
                            },
                            sourceQuestContent: O,
                        });
                    },
                }),
            [U, k, O],
        ),
        B = r.useCallback(
            (e) => {
                let { positionSeconds: t, durationSeconds: n, isPlaying: r } = e;
                w.onProgress({ positionSeconds: t, durationSeconds: n, isPlaying: r });
            },
            [w],
        ),
        F = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: k,
                        event: g.HAw.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                            video_asset_id: L,
                            network_connection_speed: e,
                            video_session_id: R,
                            is_hls_supported: (0, d.Ap)(),
                            ...D(n),
                        },
                        sourceQuestContent: O,
                    });
            },
            [k, t, L, R, n, y, O],
        ),
        Y = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    y({
                        questId: k,
                        event: g.HAw.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                            video_asset_id: L,
                            network_connection_speed: Q,
                            duration: e,
                            video_session_id: R,
                            ...D(n),
                        },
                        sourceQuestContent: O,
                    });
            },
            [k, t, L, R, n, y, O, Q],
        ),
        j = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: k,
                        event: g.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: { duration_ms: e, video_session_id: R, video_asset_id: L, ...D(n) },
                        sourceQuestContent: O,
                    });
            },
            [k, t, L, R, n, y, O],
        ),
        H = r.useCallback(() => {
            null != t.current &&
                y({
                    questId: k,
                    event: g.HAw.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: (0, h.zh)(t.current.currentTime, t.current.duration),
                        video_timestamp_seconds: t.current.currentTime,
                        video_session_id: R,
                        video_asset_id: L,
                        ...D(n),
                    },
                    sourceQuestContent: O,
                });
        }, [k, t, R, n, y, L, O]),
        G = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: k,
                        event: g.HAw.QUEST_VIDEO_RESUMED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            pause_reason: e,
                            video_session_id: R,
                            video_asset_id: L,
                            ...D(n),
                        },
                        sourceQuestContent: O,
                    });
            },
            [k, t, R, n, y, L, O],
        ),
        K = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    y({
                        questId: k,
                        event: g.HAw.QUEST_VIDEO_PAUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            reason: e,
                            video_session_id: R,
                            video_asset_id: L,
                            ...D(n),
                        },
                        sourceQuestContent: O,
                    });
            },
            [k, t, R, n, y, L, O],
        ),
        $ = r.useCallback(
            (e, n) => {
                null != t.current &&
                    y({
                        questId: k,
                        event: e ? g.HAw.QUEST_VIDEO_APP_FOCUSED : g.HAw.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            video_state: n,
                            video_session_id: R,
                            video_asset_id: L,
                        },
                        sourceQuestContent: O,
                    });
            },
            [k, t, R, y, L, O],
        ),
        W = r.useCallback(() => {
            null != t.current &&
                ((M.current += 1),
                y({
                    questId: k,
                    event: g.HAw.QUEST_VIDEO_BUFFERING_STARTED,
                    properties: {
                        video_asset_id: L,
                        network_connection_speed: Q,
                        buffer_index: M.current,
                        video_session_id: R,
                        ...D(n),
                    },
                    sourceQuestContent: O,
                }));
        }, [k, t, L, R, n, y, O, Q]),
        q = r.useCallback(
            (e) => {
                null != t.current &&
                    ((M.current += 1),
                    y({
                        questId: k,
                        event: g.HAw.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: L,
                            network_connection_speed: Q,
                            duration: e,
                            buffer_index: M.current,
                            video_session_id: R,
                            ...D(n),
                        },
                        sourceQuestContent: O,
                    }));
            },
            [k, t, L, R, n, y, O, Q],
        ),
        z = r.useCallback(
            (e, t) => {
                (0, f.E5)(f.kI.STEP_2_CLICKED_INTERNAL, "video_quest_analytics")
                    ? (0, s.r)({
                          type: a.F.CLICK_INTERNAL,
                          adCreativeType: l.p.QUEST,
                          adCreativeId: k,
                          questContentCTA: t,
                          surfaceId: e,
                          sourceQuestContent: O,
                          impressionId: U(),
                      })
                    : V({ questId: k, questContent: e, questContentCTA: t, sourceQuestContent: O });
            },
            [k, O, V, U],
        ),
        X = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: k,
                        event: g.HAw.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: L,
                            quest_completed: P,
                            video_duration_sec: t.current.duration,
                            video_progress: (0, h.zh)(e.segment_end_sec, t.current.duration),
                            video_session_id: R,
                            ...D(n),
                        },
                        sourceQuestContent: O,
                    });
            },
            [y, k, L, P, R, n, t, O],
        ),
        Z = r.useCallback(
            (e, r) => {
                if (null == t.current) return;
                let i = t.current?.error,
                    s = t.current?.networkState,
                    a = null != t.current ? (0, h.zh)(t.current.currentTime, t.current.duration) : void 0,
                    o = null != r ? { hls_error_subtype: r.errorDetails, hls_error_fatal: r.fatal } : {};
                (y({
                    questId: k,
                    event: g.HAw.QUEST_VIDEO_ERROR,
                    properties: {
                        video_progress: a,
                        video_error_type: e,
                        video_asset_id: L,
                        network_connection_speed: Q,
                        video_session_id: R,
                        video_error_code: i?.code,
                        video_error_message: i?.message,
                        video_network_state: s,
                        is_full_episode_video_quest: b,
                        is_hls_supported: (0, d.Ap)(),
                        ...D(n),
                        ...o,
                    },
                    sourceQuestContent: O,
                }),
                    (e === I.SB.SOURCE_ERROR || e === I.SB.NO_VALID_SOURCE) &&
                        c.A.increment({
                            name: u.K.QUEST_VIDEO_ERROR,
                            tags: [`ad_creative_id:${k}`, `ad_creative_type:${l.p[l.p.QUEST]}`, `error_type:${e}`],
                        }));
            },
            [k, t, L, R, n, y, O, Q, b],
        );
    r.useEffect(() => {
        if (!x || null == T) return;
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
                switch ((N.info(`[QV] | HLS Error: type=${n.type}, details=${n.details}, fatal=${n.fatal}`), n.type)) {
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
                Z(r, { errorDetails: n.details, fatal: n.fatal });
            }
        }
    }, [x, T, N, Z]);
    let J = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: k,
                        event: e ? g.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : g.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: { video_session_id: R, video_asset_id: L, ...D(n) },
                        sourceQuestContent: O,
                    });
            },
            [k, t, R, n, y, L, O],
        ),
        ee = r.useCallback(
            (e) => {
                null != t.current &&
                    y({
                        questId: k,
                        event: g.HAw.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: {
                            volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                            video_session_id: R,
                            video_asset_id: L,
                            ...D(n),
                        },
                        sourceQuestContent: O,
                    });
            },
            [k, t, L, R, n, y, O],
        );
    return {
        trackQuestVideoLoadingStarted: F,
        trackQuestVideoLoadingEnded: Y,
        trackQuestVideoTimeToFirstFrame: j,
        trackQuestVideoProgressed: H,
        trackQuestVideoResumed: G,
        trackQuestVideoPaused: K,
        trackQuestVideoFocusChange: $,
        trackQuestContentClick: z,
        trackQuestVideoBufferingStarted: W,
        trackQuestVideoBufferingEnded: q,
        trackQuestVideoSegmentWatched: X,
        trackQuestVideoFullscreenChanged: J,
        trackQuestVideoError: Z,
        trackQuestVideoVolumeChanged: ee,
        handleEngagedViewProgress: B,
    };
}
