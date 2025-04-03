n.d(t, { Z: () => u });
var r = n(192379),
    l = n(941208),
    o = n(617136),
    i = n(918701),
    a = n(981631);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
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
function u(e, t, n, u, d) {
    var m;
    let p = (0, o._F)(),
        f = (0, o.O5)(),
        v = (0, r.useRef)(-1),
        g = (null == (m = e.userStatus) ? void 0 : m.completedAt) != null,
        b = e.id,
        E = r.useCallback(
            (e) => {
                null != t.current &&
                    p({
                        questId: b,
                        event: a.rMx.QUEST_VIDEO_LOADING_STARTED,
                        properties: s(
                            {
                                video_asset_id: d,
                                network_connection_speed: e,
                                video_session_id: u,
                                is_hls_supported: l.ZP.isSupported()
                            },
                            c(n)
                        )
                    });
            },
            [b, t, d, u, n, p]
        ),
        O = r.useCallback(
            (e, r) => {
                null != t.current &&
                    null != r &&
                    p({
                        questId: b,
                        event: a.rMx.QUEST_VIDEO_LOADING_ENDED,
                        properties: s(
                            {
                                video_asset_id: d,
                                network_connection_speed: e,
                                duration: r,
                                video_session_id: u
                            },
                            c(n)
                        )
                    });
            },
            [b, t, d, u, n, p]
        ),
        h = r.useCallback(
            (e) => {
                null != t.current &&
                    p({
                        questId: b,
                        event: a.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: s(
                            {
                                duration_ms: e,
                                video_session_id: u,
                                video_asset_id: d
                            },
                            c(n)
                        )
                    });
            },
            [b, t, d, u, n, p]
        ),
        S = r.useCallback(() => {
            null != t.current &&
                p({
                    questId: b,
                    event: a.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: s(
                        {
                            progress: (0, i.bA)(t.current.currentTime, t.current.duration),
                            video_timestamp_seconds: t.current.currentTime,
                            video_session_id: u,
                            video_asset_id: d
                        },
                        c(n)
                    )
                });
        }, [b, t, u, n, p, d]),
        C = r.useCallback(
            (e) => {
                null != t.current &&
                    p({
                        questId: b,
                        event: a.rMx.QUEST_VIDEO_RESUMED,
                        properties: s(
                            {
                                video_timestamp_seconds: t.current.currentTime,
                                pause_reason: e,
                                video_session_id: u,
                                video_asset_id: d
                            },
                            c(n)
                        )
                    });
            },
            [b, t, u, n, p, d]
        ),
        j = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    p({
                        questId: b,
                        event: a.rMx.QUEST_VIDEO_PAUSED,
                        properties: s(
                            {
                                video_timestamp_seconds: t.current.currentTime,
                                reason: e,
                                video_session_id: u,
                                video_asset_id: d
                            },
                            c(n)
                        )
                    });
            },
            [b, t, u, n, p, d]
        ),
        y = r.useCallback(
            (e, n) => {
                null != t.current &&
                    p({
                        questId: b,
                        event: e ? a.rMx.QUEST_VIDEO_APP_FOCUSED : a.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            video_state: n,
                            video_session_id: u,
                            video_asset_id: d
                        }
                    });
            },
            [b, t, u, p, d]
        ),
        _ = r.useCallback(
            (e) => {
                null != t.current &&
                    ((v.current += 1),
                    p({
                        questId: b,
                        event: a.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                        properties: s(
                            {
                                video_asset_id: d,
                                network_connection_speed: e,
                                buffer_index: v.current,
                                video_session_id: u
                            },
                            c(n)
                        )
                    }));
            },
            [b, t, d, u, n, p]
        ),
        x = r.useCallback(
            (e, r) => {
                null != t.current &&
                    ((v.current += 1),
                    p({
                        questId: b,
                        event: a.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: s(
                            {
                                video_asset_id: d,
                                network_connection_speed: e,
                                duration: r,
                                buffer_index: v.current,
                                video_session_id: u
                            },
                            c(n)
                        )
                    }));
            },
            [b, t, d, u, n, p]
        ),
        N = r.useCallback(
            (e, t) => {
                f({
                    questId: b,
                    questContent: e,
                    questContentCTA: t
                });
            },
            [b, f]
        ),
        D = r.useCallback(
            (e) => {
                if (null != t.current) {
                    var r, l;
                    p({
                        questId: b,
                        event: a.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: s(
                            ((r = s({}, e)),
                            (l = l =
                                {
                                    video_asset_id: d,
                                    quest_completed: g,
                                    video_duration_sec: t.current.duration,
                                    video_progress: (0, i.bA)(e.segment_end_sec, t.current.duration),
                                    video_session_id: u
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
                            c(n)
                        )
                    });
                }
            },
            [p, b, d, g, u, n, t]
        ),
        P = r.useCallback(
            (e, r) => {
                var l, o;
                if (null == t.current) return;
                let m = null == (l = t.current) ? void 0 : l.error,
                    f = null == (o = t.current) ? void 0 : o.networkState,
                    v = null != t.current ? (0, i.bA)(t.current.currentTime, t.current.duration) : void 0;
                p({
                    questId: b,
                    event: a.rMx.QUEST_VIDEO_ERROR,
                    properties: s(
                        {
                            video_progress: v,
                            video_error_type: e,
                            video_asset_id: d,
                            network_connection_speed: r,
                            video_session_id: u,
                            video_error_code: null == m ? void 0 : m.code,
                            video_error_message: null == m ? void 0 : m.message,
                            video_network_state: f
                        },
                        c(n)
                    )
                });
            },
            [b, t, d, u, n, p]
        );
    return {
        trackQuestVideoLoadingStarted: E,
        trackQuestVideoLoadingEnded: O,
        trackQuestVideoTimeToFirstFrame: h,
        trackQuestVideoProgressed: S,
        trackQuestVideoResumed: C,
        trackQuestVideoPaused: j,
        trackQuestVideoFocusChange: y,
        trackQuestContentClick: N,
        trackQuestVideoBufferingStarted: _,
        trackQuestVideoBufferingEnded: x,
        trackWatchTimeAnalytics: D,
        trackQuestVideoFullscreenChanged: r.useCallback(
            (e) => {
                null != t.current &&
                    p({
                        questId: b,
                        event: e ? a.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED : a.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: s(
                            {
                                video_session_id: u,
                                video_asset_id: d
                            },
                            c(n)
                        )
                    });
            },
            [b, t, u, n, p, d]
        ),
        trackQuestVideoError: P,
        trackQuestVideoVolumeChanged: r.useCallback(
            (e) => {
                null != t.current &&
                    p({
                        questId: b,
                        event: a.rMx.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: s(
                            {
                                volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                                video_session_id: u,
                                video_asset_id: d
                            },
                            c(n)
                        )
                    });
            },
            [b, t, d, u, n, p]
        )
    };
}
