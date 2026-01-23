n.d(t, {
    A: () => v,
});
var r = n(64700),
    l = n(771253),
    o = n(731738),
    i = n(311907),
    s = n(831062),
    a = n(544180),
    c = n(18437),
    u = n(753386),
    d = n(261331),
    f = n(652215);

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function p(e) {
    return null == e.current || e.current.currentLevel < 0 || e.current.levels.length <= e.current.currentLevel
        ? {
              hls_level_index: -100,
              hls_segment_res_width: -100,
              hls_segment_res_height: -100,
          }
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
            videoAssetId: E,
            sourceQuestContent: g,
            logger: h,
            questId: b,
            isQuestCompleted: y,
            isFullEpisodeVideoQuest: O,
        } = e,
        S = (0, c.u0)(),
        _ = (0, c.Ut)(),
        C = (0, i.bG)([a.A], () => a.A.getEffectiveConnectionSpeed()),
        x = (0, r.useRef)(-1),
        A = r.useCallback(
            (e) => {
                null != t.current &&
                    S({
                        questId: b,
                        event: f.HAw.QUEST_VIDEO_LOADING_STARTED,
                        properties: m(
                            {
                                video_asset_id: E,
                                network_connection_speed: e,
                                video_session_id: v,
                                is_hls_supported: l.Ay.isSupported(),
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [b, t, E, v, n, S, g],
        ),
        j = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    S({
                        questId: b,
                        event: f.HAw.QUEST_VIDEO_LOADING_ENDED,
                        properties: m(
                            {
                                video_asset_id: E,
                                network_connection_speed: C,
                                duration: e,
                                video_session_id: v,
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [b, t, E, v, n, S, g, C],
        ),
        T = r.useCallback(
            (e) => {
                null != t.current &&
                    S({
                        questId: b,
                        event: f.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: m(
                            {
                                duration_ms: e,
                                video_session_id: v,
                                video_asset_id: E,
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [b, t, E, v, n, S, g],
        ),
        D = r.useCallback(() => {
            null != t.current &&
                S({
                    questId: b,
                    event: f.HAw.QUEST_VIDEO_PROGRESSED,
                    properties: m(
                        {
                            progress: (0, u.zh)(t.current.currentTime, t.current.duration),
                            video_timestamp_seconds: t.current.currentTime,
                            video_session_id: v,
                            video_asset_id: E,
                        },
                        p(n),
                    ),
                    sourceQuestContent: g,
                });
        }, [b, t, v, n, S, E, g]),
        w = r.useCallback(
            (e) => {
                null != t.current &&
                    S({
                        questId: b,
                        event: f.HAw.QUEST_VIDEO_RESUMED,
                        properties: m(
                            {
                                video_timestamp_seconds: t.current.currentTime,
                                pause_reason: e,
                                video_session_id: v,
                                video_asset_id: E,
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [b, t, v, n, S, E, g],
        ),
        N = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    S({
                        questId: b,
                        event: f.HAw.QUEST_VIDEO_PAUSED,
                        properties: m(
                            {
                                video_timestamp_seconds: t.current.currentTime,
                                reason: e,
                                video_session_id: v,
                                video_asset_id: E,
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [b, t, v, n, S, E, g],
        ),
        P = r.useCallback(
            (e, n) => {
                null != t.current &&
                    S({
                        questId: b,
                        event: e ? f.HAw.QUEST_VIDEO_APP_FOCUSED : f.HAw.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            video_state: n,
                            video_session_id: v,
                            video_asset_id: E,
                        },
                        sourceQuestContent: g,
                    });
            },
            [b, t, v, S, E, g],
        ),
        I = r.useCallback(() => {
            null != t.current &&
                ((x.current += 1),
                S({
                    questId: b,
                    event: f.HAw.QUEST_VIDEO_BUFFERING_STARTED,
                    properties: m(
                        {
                            video_asset_id: E,
                            network_connection_speed: C,
                            buffer_index: x.current,
                            video_session_id: v,
                        },
                        p(n),
                    ),
                    sourceQuestContent: g,
                }));
        }, [b, t, E, v, n, S, g, C]),
        L = r.useCallback(
            (e) => {
                null != t.current &&
                    ((x.current += 1),
                    S({
                        questId: b,
                        event: f.HAw.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: m(
                            {
                                video_asset_id: E,
                                network_connection_speed: C,
                                duration: e,
                                buffer_index: x.current,
                                video_session_id: v,
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    }));
            },
            [b, t, E, v, n, S, g, C],
        ),
        R = r.useCallback(
            (e, t) => {
                _({
                    questId: b,
                    questContent: e,
                    questContentCTA: t,
                    sourceQuestContent: g,
                });
            },
            [b, g, _],
        ),
        k = r.useCallback(
            (e) => {
                if (null != t.current) {
                    var r, l;
                    S({
                        questId: b,
                        event: f.HAw.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: m(
                            ((r = m({}, e)),
                            (l = l =
                                {
                                    video_asset_id: E,
                                    quest_completed: y,
                                    video_duration_sec: t.current.duration,
                                    video_progress: (0, u.zh)(e.segment_end_sec, t.current.duration),
                                    video_session_id: v,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            r),
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
                }
            },
            [S, b, E, y, v, n, t, g],
        ),
        M = r.useCallback(
            (e, r) => {
                var i, a;
                if (null == t.current) return;
                let c = null == (i = t.current) ? void 0 : i.error,
                    h = null == (a = t.current) ? void 0 : a.networkState,
                    y = null != t.current ? (0, u.zh)(t.current.currentTime, t.current.duration) : void 0,
                    _ =
                        null != r
                            ? {
                                  hls_error_subtype: r.errorDetails,
                                  hls_error_fatal: r.fatal,
                              }
                            : {};
                S({
                    questId: b,
                    event: f.HAw.QUEST_VIDEO_ERROR,
                    properties: m(
                        {
                            video_progress: y,
                            video_error_type: e,
                            video_asset_id: E,
                            network_connection_speed: C,
                            video_session_id: v,
                            video_error_code: null == c ? void 0 : c.code,
                            video_error_message: null == c ? void 0 : c.message,
                            video_network_state: h,
                            is_full_episode_video_quest: O,
                            is_hls_supported: l.Ay.isSupported(),
                        },
                        p(n),
                        _,
                    ),
                    sourceQuestContent: g,
                }),
                    (e === d.SB.SOURCE_ERROR || e === d.SB.NO_VALID_SOURCE) &&
                        s.A.increment({
                            name: o.K.QUEST_VIDEO_ERROR,
                            tags: ["quest_id:".concat(b), "error_type:".concat(e)],
                        });
            },
            [b, t, E, v, n, S, g, C, O],
        ),
        V = r.useCallback(
            (e, t) => {
                let n;
                switch (
                    (h.info(
                        "[QV] | HLS Error: type="
                            .concat(t.type, ", details=")
                            .concat(t.details, ", fatal=")
                            .concat(t.fatal),
                    ),
                    t.type)
                ) {
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
                M(n, {
                    errorDetails: t.details,
                    fatal: t.fatal,
                });
            },
            [h, M],
        );
    r.useEffect(() => {
        if (null == n.current) return;
        let e = n.current;
        return (
            e.on(l.Ay.Events.ERROR, V),
            () => {
                e.off(l.Ay.Events.ERROR, V);
            }
        );
    }, [n, V]);
    let Q = r.useCallback(
            (e) => {
                null != t.current &&
                    S({
                        questId: b,
                        event: e ? f.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : f.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: m(
                            {
                                video_session_id: v,
                                video_asset_id: E,
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [b, t, v, n, S, E, g],
        ),
        U = r.useCallback(
            (e) => {
                null != t.current &&
                    S({
                        questId: b,
                        event: f.HAw.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: m(
                            {
                                volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                                video_session_id: v,
                                video_asset_id: E,
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [b, t, E, v, n, S, g],
        );
    return {
        trackQuestVideoLoadingStarted: A,
        trackQuestVideoLoadingEnded: j,
        trackQuestVideoTimeToFirstFrame: T,
        trackQuestVideoProgressed: D,
        trackQuestVideoResumed: w,
        trackQuestVideoPaused: N,
        trackQuestVideoFocusChange: P,
        trackQuestContentClick: R,
        trackQuestVideoBufferingStarted: I,
        trackQuestVideoBufferingEnded: L,
        trackWatchTimeAnalytics: k,
        trackQuestVideoFullscreenChanged: Q,
        trackQuestVideoError: M,
        trackQuestVideoVolumeChanged: U,
    };
}
