n.d(t, { Z: () => u });
var r = n(73800),
    l = n(10106),
    o = n(617136),
    i = n(918701),
    a = n(981631);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function c(e) {
    return null == e.current || e.current.currentLevel < 0 || e.current.levels.length <= e.current.currentLevel
        ? {
              hls_level_index: -100,
              hls_segment_res_width: -100,
              hls_segment_res_height: -100
          }
        : {
              hls_level_index: e.current.currentLevel,
              hls_segment_res_width: e.current.levels[e.current.currentLevel].width,
              hls_segment_res_height: e.current.levels[e.current.currentLevel].height
          };
}
function u(e) {
    var t;
    let { quest: n, videoRef: u, hlsRef: d, videoSessionId: m, videoAssetId: f, sourceQuestContent: p } = e,
        v = (0, o._F)(),
        g = (0, o.O5)(),
        b = (0, r.useRef)(-1),
        E = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        O = n.id,
        C = r.useCallback(
            (e) => {
                null != u.current &&
                    v({
                        questId: O,
                        event: a.rMx.QUEST_VIDEO_LOADING_STARTED,
                        properties: s(
                            {
                                video_asset_id: f,
                                network_connection_speed: e,
                                video_session_id: m,
                                is_hls_supported: l.ZP.isSupported()
                            },
                            c(d)
                        ),
                        sourceQuestContent: p
                    });
            },
            [O, u, f, m, d, v, p]
        ),
        h = r.useCallback(
            (e, t) => {
                null != u.current &&
                    null != t &&
                    v({
                        questId: O,
                        event: a.rMx.QUEST_VIDEO_LOADING_ENDED,
                        properties: s(
                            {
                                video_asset_id: f,
                                network_connection_speed: e,
                                duration: t,
                                video_session_id: m
                            },
                            c(d)
                        ),
                        sourceQuestContent: p
                    });
            },
            [O, u, f, m, d, v, p]
        ),
        S = r.useCallback(
            (e) => {
                null != u.current &&
                    v({
                        questId: O,
                        event: a.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: s(
                            {
                                duration_ms: e,
                                video_session_id: m,
                                video_asset_id: f
                            },
                            c(d)
                        ),
                        sourceQuestContent: p
                    });
            },
            [O, u, f, m, d, v, p]
        ),
        j = r.useCallback(() => {
            null != u.current &&
                v({
                    questId: O,
                    event: a.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: s(
                        {
                            progress: (0, i.bA)(u.current.currentTime, u.current.duration),
                            video_timestamp_seconds: u.current.currentTime,
                            video_session_id: m,
                            video_asset_id: f
                        },
                        c(d)
                    ),
                    sourceQuestContent: p
                });
        }, [O, u, m, d, v, f, p]),
        y = r.useCallback(
            (e) => {
                null != u.current &&
                    v({
                        questId: O,
                        event: a.rMx.QUEST_VIDEO_RESUMED,
                        properties: s(
                            {
                                video_timestamp_seconds: u.current.currentTime,
                                pause_reason: e,
                                video_session_id: m,
                                video_asset_id: f
                            },
                            c(d)
                        ),
                        sourceQuestContent: p
                    });
            },
            [O, u, m, d, v, f, p]
        ),
        _ = r.useCallback(
            (e) => {
                null != u.current &&
                    null != e &&
                    v({
                        questId: O,
                        event: a.rMx.QUEST_VIDEO_PAUSED,
                        properties: s(
                            {
                                video_timestamp_seconds: u.current.currentTime,
                                reason: e,
                                video_session_id: m,
                                video_asset_id: f
                            },
                            c(d)
                        ),
                        sourceQuestContent: p
                    });
            },
            [O, u, m, d, v, f, p]
        ),
        x = r.useCallback(
            (e, t) => {
                null != u.current &&
                    v({
                        questId: O,
                        event: e ? a.rMx.QUEST_VIDEO_APP_FOCUSED : a.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: u.current.currentTime,
                            video_state: t,
                            video_session_id: m,
                            video_asset_id: f
                        },
                        sourceQuestContent: p
                    });
            },
            [O, u, m, v, f, p]
        ),
        D = r.useCallback(
            (e) => {
                null != u.current &&
                    ((b.current += 1),
                    v({
                        questId: O,
                        event: a.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                        properties: s(
                            {
                                video_asset_id: f,
                                network_connection_speed: e,
                                buffer_index: b.current,
                                video_session_id: m
                            },
                            c(d)
                        ),
                        sourceQuestContent: p
                    }));
            },
            [O, u, f, m, d, v, p]
        ),
        T = r.useCallback(
            (e, t) => {
                null != u.current &&
                    ((b.current += 1),
                    v({
                        questId: O,
                        event: a.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: s(
                            {
                                video_asset_id: f,
                                network_connection_speed: e,
                                duration: t,
                                buffer_index: b.current,
                                video_session_id: m
                            },
                            c(d)
                        ),
                        sourceQuestContent: p
                    }));
            },
            [O, u, f, m, d, v, p]
        ),
        P = r.useCallback(
            (e, t) => {
                g({
                    questId: O,
                    questContent: e,
                    questContentCTA: t,
                    sourceQuestContent: p
                });
            },
            [O, p, g]
        ),
        N = r.useCallback(
            (e) => {
                if (null != u.current) {
                    var t, n;
                    v({
                        questId: O,
                        event: a.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: s(
                            ((t = s({}, e)),
                            (n = n =
                                {
                                    video_asset_id: f,
                                    quest_completed: E,
                                    video_duration_sec: u.current.duration,
                                    video_progress: (0, i.bA)(e.segment_end_sec, u.current.duration),
                                    video_session_id: m
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t),
                            c(d)
                        ),
                        sourceQuestContent: p
                    });
                }
            },
            [v, O, f, E, m, d, u, p]
        ),
        k = r.useCallback(
            (e, t) => {
                var n, r;
                if (null == u.current) return;
                let l = null == (n = u.current) ? void 0 : n.error,
                    o = null == (r = u.current) ? void 0 : r.networkState,
                    g = null != u.current ? (0, i.bA)(u.current.currentTime, u.current.duration) : void 0;
                v({
                    questId: O,
                    event: a.rMx.QUEST_VIDEO_ERROR,
                    properties: s(
                        {
                            video_progress: g,
                            video_error_type: e,
                            video_asset_id: f,
                            network_connection_speed: t,
                            video_session_id: m,
                            video_error_code: null == l ? void 0 : l.code,
                            video_error_message: null == l ? void 0 : l.message,
                            video_network_state: o
                        },
                        c(d)
                    ),
                    sourceQuestContent: p
                });
            },
            [O, u, f, m, d, v, p]
        ),
        I = r.useCallback(
            (e) => {
                null != u.current &&
                    v({
                        questId: O,
                        event: e ? a.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED : a.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: s(
                            {
                                video_session_id: m,
                                video_asset_id: f
                            },
                            c(d)
                        ),
                        sourceQuestContent: p
                    });
            },
            [O, u, m, d, v, f, p]
        ),
        w = r.useCallback(
            (e) => {
                null != u.current &&
                    v({
                        questId: O,
                        event: a.rMx.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: s(
                            {
                                volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                                video_session_id: m,
                                video_asset_id: f
                            },
                            c(d)
                        ),
                        sourceQuestContent: p
                    });
            },
            [O, u, f, m, d, v, p]
        );
    return {
        trackQuestVideoLoadingStarted: C,
        trackQuestVideoLoadingEnded: h,
        trackQuestVideoTimeToFirstFrame: S,
        trackQuestVideoProgressed: j,
        trackQuestVideoResumed: y,
        trackQuestVideoPaused: _,
        trackQuestVideoFocusChange: x,
        trackQuestContentClick: P,
        trackQuestVideoBufferingStarted: D,
        trackQuestVideoBufferingEnded: T,
        trackWatchTimeAnalytics: N,
        trackQuestVideoFullscreenChanged: I,
        trackQuestVideoError: k,
        trackQuestVideoVolumeChanged: w
    };
}
