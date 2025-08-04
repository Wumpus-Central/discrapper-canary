n.d(t, { Z: () => f });
var r = n(73800),
    l = n(10106),
    o = n(442837),
    i = n(866960),
    a = n(617136),
    s = n(509212),
    c = n(223418),
    u = n(981631);
function d(e) {
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
function m(e) {
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
function f(e) {
    var t;
    let { quest: n, videoRef: f, hlsRef: p, videoSessionId: v, videoAssetId: E, sourceQuestContent: g, logger: O } = e,
        b = (0, a._F)(),
        C = (0, a.O5)(),
        S = (0, o.e7)([i.Z], () => i.Z.getEffectiveConnectionSpeed()),
        h = (0, r.useRef)(-1),
        _ = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        j = n.id,
        y = r.useCallback(
            (e) => {
                null != f.current &&
                    b({
                        questId: j,
                        event: u.rMx.QUEST_VIDEO_LOADING_STARTED,
                        properties: d(
                            {
                                video_asset_id: E,
                                network_connection_speed: e,
                                video_session_id: v,
                                is_hls_supported: l.ZP.isSupported()
                            },
                            m(p)
                        ),
                        sourceQuestContent: g
                    });
            },
            [j, f, E, v, p, b, g]
        ),
        x = r.useCallback(
            (e) => {
                null != f.current &&
                    null != e &&
                    b({
                        questId: j,
                        event: u.rMx.QUEST_VIDEO_LOADING_ENDED,
                        properties: d(
                            {
                                video_asset_id: E,
                                network_connection_speed: S,
                                duration: e,
                                video_session_id: v
                            },
                            m(p)
                        ),
                        sourceQuestContent: g
                    });
            },
            [j, f, E, v, p, b, g, S]
        ),
        D = r.useCallback(
            (e) => {
                null != f.current &&
                    b({
                        questId: j,
                        event: u.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: d(
                            {
                                duration_ms: e,
                                video_session_id: v,
                                video_asset_id: E
                            },
                            m(p)
                        ),
                        sourceQuestContent: g
                    });
            },
            [j, f, E, v, p, b, g]
        ),
        T = r.useCallback(() => {
            null != f.current &&
                b({
                    questId: j,
                    event: u.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: d(
                        {
                            progress: (0, s.bA)(f.current.currentTime, f.current.duration),
                            video_timestamp_seconds: f.current.currentTime,
                            video_session_id: v,
                            video_asset_id: E
                        },
                        m(p)
                    ),
                    sourceQuestContent: g
                });
        }, [j, f, v, p, b, E, g]),
        P = r.useCallback(
            (e) => {
                null != f.current &&
                    b({
                        questId: j,
                        event: u.rMx.QUEST_VIDEO_RESUMED,
                        properties: d(
                            {
                                video_timestamp_seconds: f.current.currentTime,
                                pause_reason: e,
                                video_session_id: v,
                                video_asset_id: E
                            },
                            m(p)
                        ),
                        sourceQuestContent: g
                    });
            },
            [j, f, v, p, b, E, g]
        ),
        R = r.useCallback(
            (e) => {
                null != f.current &&
                    null != e &&
                    b({
                        questId: j,
                        event: u.rMx.QUEST_VIDEO_PAUSED,
                        properties: d(
                            {
                                video_timestamp_seconds: f.current.currentTime,
                                reason: e,
                                video_session_id: v,
                                video_asset_id: E
                            },
                            m(p)
                        ),
                        sourceQuestContent: g
                    });
            },
            [j, f, v, p, b, E, g]
        ),
        N = r.useCallback(
            (e, t) => {
                null != f.current &&
                    b({
                        questId: j,
                        event: e ? u.rMx.QUEST_VIDEO_APP_FOCUSED : u.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: f.current.currentTime,
                            video_state: t,
                            video_session_id: v,
                            video_asset_id: E
                        },
                        sourceQuestContent: g
                    });
            },
            [j, f, v, b, E, g]
        ),
        I = r.useCallback(() => {
            null != f.current &&
                ((h.current += 1),
                b({
                    questId: j,
                    event: u.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                    properties: d(
                        {
                            video_asset_id: E,
                            network_connection_speed: S,
                            buffer_index: h.current,
                            video_session_id: v
                        },
                        m(p)
                    ),
                    sourceQuestContent: g
                }));
        }, [j, f, E, v, p, b, g, S]),
        k = r.useCallback(
            (e) => {
                null != f.current &&
                    ((h.current += 1),
                    b({
                        questId: j,
                        event: u.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: d(
                            {
                                video_asset_id: E,
                                network_connection_speed: S,
                                duration: e,
                                buffer_index: h.current,
                                video_session_id: v
                            },
                            m(p)
                        ),
                        sourceQuestContent: g
                    }));
            },
            [j, f, E, v, p, b, g, S]
        ),
        A = r.useCallback(
            (e, t) => {
                C({
                    questId: j,
                    questContent: e,
                    questContentCTA: t,
                    sourceQuestContent: g
                });
            },
            [j, g, C]
        ),
        w = r.useCallback(
            (e) => {
                if (null != f.current) {
                    var t, n;
                    b({
                        questId: j,
                        event: u.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: d(
                            ((t = d({}, e)),
                            (n = n =
                                {
                                    video_asset_id: E,
                                    quest_completed: _,
                                    video_duration_sec: f.current.duration,
                                    video_progress: (0, s.bA)(e.segment_end_sec, f.current.duration),
                                    video_session_id: v
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
                            m(p)
                        ),
                        sourceQuestContent: g
                    });
                }
            },
            [b, j, E, _, v, p, f, g]
        ),
        L = r.useCallback(
            (e, t) => {
                var n, r;
                if (null == f.current) return;
                let l = null == (n = f.current) ? void 0 : n.error,
                    o = null == (r = f.current) ? void 0 : r.networkState,
                    i = null != f.current ? (0, s.bA)(f.current.currentTime, f.current.duration) : void 0,
                    a =
                        null != t
                            ? {
                                  hls_error_subtype: t.errorDetails,
                                  hls_error_fatal: t.fatal
                              }
                            : {};
                b({
                    questId: j,
                    event: u.rMx.QUEST_VIDEO_ERROR,
                    properties: d(
                        {
                            video_progress: i,
                            video_error_type: e,
                            video_asset_id: E,
                            network_connection_speed: S,
                            video_session_id: v,
                            video_error_code: null == l ? void 0 : l.code,
                            video_error_message: null == l ? void 0 : l.message,
                            video_network_state: o
                        },
                        m(p),
                        a
                    ),
                    sourceQuestContent: g
                });
            },
            [j, f, E, v, p, b, g, S]
        ),
        M = r.useCallback(
            (e, t) => {
                let n;
                switch ((O.info('[QV] | HLS Error: type='.concat(t.type, ', details=').concat(t.details, ', fatal=').concat(t.fatal)), t.type)) {
                    case l.ZP.ErrorTypes.NETWORK_ERROR:
                        n = c.CY.HLS_NETWORK_ERROR;
                        break;
                    case l.ZP.ErrorTypes.MEDIA_ERROR:
                        n = c.CY.HLS_MEDIA_ERROR;
                        break;
                    case l.ZP.ErrorTypes.MUX_ERROR:
                        n = c.CY.HLS_MUX_ERROR;
                        break;
                    case l.ZP.ErrorTypes.KEY_SYSTEM_ERROR:
                        n = c.CY.HLS_KEY_SYSTEM_ERROR;
                        break;
                    default:
                        n = c.CY.HLS_OTHER_ERROR;
                }
                L(n, {
                    errorDetails: t.details,
                    fatal: t.fatal
                });
            },
            [O, L]
        );
    r.useEffect(() => {
        if (null == p.current) return;
        let e = p.current;
        return (
            e.on(l.ZP.Events.ERROR, M),
            () => {
                e.off(l.ZP.Events.ERROR, M);
            }
        );
    }, [p, M]);
    let V = r.useCallback(
            (e) => {
                null != f.current &&
                    b({
                        questId: j,
                        event: e ? u.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED : u.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: d(
                            {
                                video_session_id: v,
                                video_asset_id: E
                            },
                            m(p)
                        ),
                        sourceQuestContent: g
                    });
            },
            [j, f, v, p, b, E, g]
        ),
        B = r.useCallback(
            (e) => {
                null != f.current &&
                    b({
                        questId: j,
                        event: u.rMx.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: d(
                            {
                                volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                                video_session_id: v,
                                video_asset_id: E
                            },
                            m(p)
                        ),
                        sourceQuestContent: g
                    });
            },
            [j, f, E, v, p, b, g]
        );
    return {
        trackQuestVideoLoadingStarted: y,
        trackQuestVideoLoadingEnded: x,
        trackQuestVideoTimeToFirstFrame: D,
        trackQuestVideoProgressed: T,
        trackQuestVideoResumed: P,
        trackQuestVideoPaused: R,
        trackQuestVideoFocusChange: N,
        trackQuestContentClick: A,
        trackQuestVideoBufferingStarted: I,
        trackQuestVideoBufferingEnded: k,
        trackWatchTimeAnalytics: w,
        trackQuestVideoFullscreenChanged: V,
        trackQuestVideoError: L,
        trackQuestVideoVolumeChanged: B
    };
}
