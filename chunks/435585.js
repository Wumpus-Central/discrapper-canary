n.d(t, { Z: () => v });
var r = n(647438),
    o = n(10106),
    l = n(286379),
    a = n(442837),
    i = n(797614),
    s = n(866960),
    c = n(617136),
    u = n(509212),
    d = n(223418),
    f = n(981631);
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
    var t;
    let { quest: n, videoRef: v, hlsRef: C, videoSessionId: E, videoAssetId: _, sourceQuestContent: g, logger: S } = e,
        O = (0, c._F)(),
        b = (0, c.O5)(),
        h = (0, a.e7)([s.Z], () => s.Z.getEffectiveConnectionSpeed()),
        y = (0, r.useRef)(-1),
        j = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        x = n.id,
        T = r.useCallback(
            (e) => {
                null != v.current &&
                    O({
                        questId: x,
                        event: f.rMx.QUEST_VIDEO_LOADING_STARTED,
                        properties: m(
                            {
                                video_asset_id: _,
                                network_connection_speed: e,
                                video_session_id: E,
                                is_hls_supported: o.ZP.isSupported(),
                            },
                            p(C),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [x, v, _, E, C, O, g],
        ),
        P = r.useCallback(
            (e) => {
                null != v.current &&
                    null != e &&
                    O({
                        questId: x,
                        event: f.rMx.QUEST_VIDEO_LOADING_ENDED,
                        properties: m(
                            {
                                video_asset_id: _,
                                network_connection_speed: h,
                                duration: e,
                                video_session_id: E,
                            },
                            p(C),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [x, v, _, E, C, O, g, h],
        ),
        D = r.useCallback(
            (e) => {
                null != v.current &&
                    O({
                        questId: x,
                        event: f.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: m(
                            {
                                duration_ms: e,
                                video_session_id: E,
                                video_asset_id: _,
                            },
                            p(C),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [x, v, _, E, C, O, g],
        ),
        R = r.useCallback(() => {
            null != v.current &&
                O({
                    questId: x,
                    event: f.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: m(
                        {
                            progress: (0, u.bA)(v.current.currentTime, v.current.duration),
                            video_timestamp_seconds: v.current.currentTime,
                            video_session_id: E,
                            video_asset_id: _,
                        },
                        p(C),
                    ),
                    sourceQuestContent: g,
                });
        }, [x, v, E, C, O, _, g]),
        I = r.useCallback(
            (e) => {
                null != v.current &&
                    O({
                        questId: x,
                        event: f.rMx.QUEST_VIDEO_RESUMED,
                        properties: m(
                            {
                                video_timestamp_seconds: v.current.currentTime,
                                pause_reason: e,
                                video_session_id: E,
                                video_asset_id: _,
                            },
                            p(C),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [x, v, E, C, O, _, g],
        ),
        N = r.useCallback(
            (e) => {
                null != v.current &&
                    null != e &&
                    O({
                        questId: x,
                        event: f.rMx.QUEST_VIDEO_PAUSED,
                        properties: m(
                            {
                                video_timestamp_seconds: v.current.currentTime,
                                reason: e,
                                video_session_id: E,
                                video_asset_id: _,
                            },
                            p(C),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [x, v, E, C, O, _, g],
        ),
        k = r.useCallback(
            (e, t) => {
                null != v.current &&
                    O({
                        questId: x,
                        event: e ? f.rMx.QUEST_VIDEO_APP_FOCUSED : f.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: v.current.currentTime,
                            video_state: t,
                            video_session_id: E,
                            video_asset_id: _,
                        },
                        sourceQuestContent: g,
                    });
            },
            [x, v, E, O, _, g],
        ),
        A = r.useCallback(() => {
            null != v.current &&
                ((y.current += 1),
                O({
                    questId: x,
                    event: f.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                    properties: m(
                        {
                            video_asset_id: _,
                            network_connection_speed: h,
                            buffer_index: y.current,
                            video_session_id: E,
                        },
                        p(C),
                    ),
                    sourceQuestContent: g,
                }));
        }, [x, v, _, E, C, O, g, h]),
        L = r.useCallback(
            (e) => {
                null != v.current &&
                    ((y.current += 1),
                    O({
                        questId: x,
                        event: f.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: m(
                            {
                                video_asset_id: _,
                                network_connection_speed: h,
                                duration: e,
                                buffer_index: y.current,
                                video_session_id: E,
                            },
                            p(C),
                        ),
                        sourceQuestContent: g,
                    }));
            },
            [x, v, _, E, C, O, g, h],
        ),
        w = r.useCallback(
            (e, t) => {
                b({
                    questId: x,
                    questContent: e,
                    questContentCTA: t,
                    sourceQuestContent: g,
                });
            },
            [x, g, b],
        ),
        M = r.useCallback(
            (e) => {
                if (null != v.current) {
                    var t, n;
                    O({
                        questId: x,
                        event: f.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: m(
                            ((t = m({}, e)),
                            (n = n =
                                {
                                    video_asset_id: _,
                                    quest_completed: j,
                                    video_duration_sec: v.current.duration,
                                    video_progress: (0, u.bA)(e.segment_end_sec, v.current.duration),
                                    video_session_id: E,
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
                            p(C),
                        ),
                        sourceQuestContent: g,
                    });
                }
            },
            [O, x, _, j, E, C, v, g],
        ),
        B = r.useCallback(
            (e, t) => {
                var n, r;
                if (null == v.current) return;
                let o = null == (n = v.current) ? void 0 : n.error,
                    a = null == (r = v.current) ? void 0 : r.networkState,
                    s = null != v.current ? (0, u.bA)(v.current.currentTime, v.current.duration) : void 0,
                    c =
                        null != t
                            ? {
                                  hls_error_subtype: t.errorDetails,
                                  hls_error_fatal: t.fatal,
                              }
                            : {};
                O({
                    questId: x,
                    event: f.rMx.QUEST_VIDEO_ERROR,
                    properties: m(
                        {
                            video_progress: s,
                            video_error_type: e,
                            video_asset_id: _,
                            network_connection_speed: h,
                            video_session_id: E,
                            video_error_code: null == o ? void 0 : o.code,
                            video_error_message: null == o ? void 0 : o.message,
                            video_network_state: a,
                        },
                        p(C),
                        c,
                    ),
                    sourceQuestContent: g,
                }),
                    e === d.CY.SOURCE_ERROR &&
                        i.Z.increment({
                            name: l.V.QUEST_VIDEO_ERROR,
                            tags: ["quest_id:".concat(x), "error_type:".concat(e)],
                        });
            },
            [x, v, _, E, C, O, g, h],
        ),
        V = r.useCallback(
            (e, t) => {
                let n;
                switch (
                    (S.info(
                        "[QV] | HLS Error: type="
                            .concat(t.type, ", details=")
                            .concat(t.details, ", fatal=")
                            .concat(t.fatal),
                    ),
                    t.type)
                ) {
                    case o.ZP.ErrorTypes.NETWORK_ERROR:
                        n = d.CY.HLS_NETWORK_ERROR;
                        break;
                    case o.ZP.ErrorTypes.MEDIA_ERROR:
                        n = d.CY.HLS_MEDIA_ERROR;
                        break;
                    case o.ZP.ErrorTypes.MUX_ERROR:
                        n = d.CY.HLS_MUX_ERROR;
                        break;
                    case o.ZP.ErrorTypes.KEY_SYSTEM_ERROR:
                        n = d.CY.HLS_KEY_SYSTEM_ERROR;
                        break;
                    default:
                        n = d.CY.HLS_OTHER_ERROR;
                }
                B(n, {
                    errorDetails: t.details,
                    fatal: t.fatal,
                });
            },
            [S, B],
        );
    r.useEffect(() => {
        if (null == C.current) return;
        let e = C.current;
        return (
            e.on(o.ZP.Events.ERROR, V),
            () => {
                e.off(o.ZP.Events.ERROR, V);
            }
        );
    }, [C, V]);
    let F = r.useCallback(
            (e) => {
                null != v.current &&
                    O({
                        questId: x,
                        event: e ? f.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED : f.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: m(
                            {
                                video_session_id: E,
                                video_asset_id: _,
                            },
                            p(C),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [x, v, E, C, O, _, g],
        ),
        Z = r.useCallback(
            (e) => {
                null != v.current &&
                    O({
                        questId: x,
                        event: f.rMx.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: m(
                            {
                                volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                                video_session_id: E,
                                video_asset_id: _,
                            },
                            p(C),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [x, v, _, E, C, O, g],
        );
    return {
        trackQuestVideoLoadingStarted: T,
        trackQuestVideoLoadingEnded: P,
        trackQuestVideoTimeToFirstFrame: D,
        trackQuestVideoProgressed: R,
        trackQuestVideoResumed: I,
        trackQuestVideoPaused: N,
        trackQuestVideoFocusChange: k,
        trackQuestContentClick: w,
        trackQuestVideoBufferingStarted: A,
        trackQuestVideoBufferingEnded: L,
        trackWatchTimeAnalytics: M,
        trackQuestVideoFullscreenChanged: F,
        trackQuestVideoError: B,
        trackQuestVideoVolumeChanged: Z,
    };
}
