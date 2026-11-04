n.d(t, { A: () => eE });
var s = n(477900),
    r = n(582128),
    i = n(462180),
    l = n(876230),
    u = n(645577),
    o = n(91982),
    a = n(544180),
    d = n(723702),
    c = n(7891),
    _ = n(506988),
    E = n(405670),
    v = n(760914),
    C = n(792620),
    p = n(753386),
    S = n(491812),
    m = n(755372),
    I = n(236850),
    f = n(795068),
    D = n(554830),
    O = n(475815),
    A = n(914313),
    g = n(590202),
    T = n(651892),
    h = n(280905),
    k = n(503698),
    L = n.n(k),
    b = n(862649);
function R(e) {
    let { className: t, color: n } = e;
    return (0, s.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "2",
        height: "40",
        viewBox: "0 0 2 40",
        fill: "none",
        className: L()(b.SU, t),
        children: (0, s.jsx)("path", { d: "M1 0V40", stroke: n, strokeOpacity: "0.3", strokeWidth: "2" }),
    });
}
var V = n(781121),
    U = n(221596),
    x = n(792996);
function N(e) {
    let { videoRef: t, onTrackQuestContentClick: n, orientation: i } = e,
        { onClose: l, sourceQuestContent: u, quest: a, isFullscreenEnabled: d } = r.useContext(f.a),
        c = (0, V.H)({ quest: a, onClose: l, sourceQuestContent: u }),
        E = r.useCallback(() => {
            if (d) {
                let e = (0, O.qf)(t.current?.parentNode, t.current);
                null != e && (0, O.sP)(e);
            }
            (n(_.uF.VIDEO_MODAL_END_CARD, g.Cy.LEARN_MORE), c(_.uF.VIDEO_MODAL_END_CARD, g.Cy.OPEN_GAME_LINK));
        }, [d, t, c, n]),
        { title: C, subtitle: p } = {
            title: (0, T.wr)(a),
            subtitle: a.config.ctaConfig.subtitle ?? x.intl.string(x.t.mxaHfx),
        },
        { enabled: S } = A.uK.useConfig({ location: U.rE.VIDEO_MODAL }),
        m = r.useMemo(() => (0, v.tW)(a, v.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1)?.url ?? null, [a]);
    return S
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(o.nY, { url: m }),
                  (0, s.jsx)(o.KP, {}),
                  (0, s.jsxs)(o.zj, {
                      orientation: i,
                      children: [
                          null != m &&
                              (0, s.jsx)(h.R, {
                                  questOrQuests: a,
                                  questContent: _.uF.VIDEO_MODAL_END_CARD,
                                  sourceQuestContent: u,
                                  children: (e) =>
                                      (0, s.jsx)(o.Kb, {
                                          ref: (t) => {
                                              e.current = t;
                                          },
                                          url: m,
                                          orientation: i,
                                      }),
                              }),
                          (0, s.jsx)(o.lx, {
                              title: C,
                              subtitle: p,
                              ctaBtnLabel: a.config.ctaConfig.buttonLabel,
                              ctaIcon: D.K,
                              onCTAClick: E,
                              orientation: i,
                          }),
                      ],
                  }),
              ],
          })
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  null != m &&
                      (0, s.jsx)(h.R, {
                          questOrQuests: a,
                          questContent: _.uF.VIDEO_MODAL_END_CARD,
                          sourceQuestContent: u,
                          children: (e) =>
                              (0, s.jsx)(o.pK, {
                                  ref: (t) => {
                                      e.current = t;
                                  },
                                  url: m,
                              }),
                      }),
                  (0, s.jsx)("div", { className: b.MT, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, s.jsx)(o.OH, {
                      title: C,
                      subtitle: p,
                      icon: D.K,
                      className: b.mT,
                      onClick: E,
                      divider: (0, s.jsx)(R, { color: "#747783" }),
                  }),
              ],
          });
}
var w = n(858899),
    M = n(866665),
    P = n(408278),
    F = n(173936),
    y = n(971649),
    Q = n(814793);
function H(e) {
    let { floatRight: t } = e,
        { quest: n, sourceQuestContent: i } = r.useContext(f.a),
        l = (0, y.go)(),
        u = (0, Q.E0)(n.config),
        o = r.useCallback(() => {
            u &&
                ((0, T.Xm)(n.id, {
                    content: _.uF.VIDEO_MODAL,
                    ctaContent: g.Cy.COPY_QUEST_URL,
                    impressionId: l,
                    sourceQuestContent: i,
                }),
                (0, w.P0)({ text: x.intl.string(x.t["+5kSoW"]), variant: "success" }));
        }, [l, u, n.id, i]);
    return u
        ? (0, s.jsx)("div", {
              "data-testid": "video-quest-share-btn",
              "data-quest-id": n.id,
              style: { marginLeft: t ? "auto" : void 0, pointerEvents: "auto" },
              children: (0, s.jsx)(M.m, {
                  text: x.intl.string(x.t.WmfZHZ),
                  children: (0, s.jsx)(P.K, {
                      variant: "overlay-secondary",
                      icon: F.LinkIcon,
                      "aria-label": x.intl.string(x.t.RDE0Sc),
                      onClick: o,
                  }),
              }),
          })
        : null;
}
var Y = n(412703),
    j = n(902173),
    q = n(53200),
    K = n(652215);
let B = new Set([K.NKC.FIVE_G, K.NKC.FOUR_G, K.NKC.UNKNOWN]);
var G = n(323889),
    W = n(731738),
    z = n(855986),
    Z = n(438457),
    $ = n(144779),
    X = n(69114),
    J = n(913379),
    ee = n(561844),
    et = n(18437),
    en = n(297727),
    es = n(710969);
function er(e) {
    return null == e.current || e.current.currentLevel < 0 || e.current.levels.length <= e.current.currentLevel
        ? { hls_level_index: -100, hls_segment_res_width: -100, hls_segment_res_height: -100 }
        : {
              hls_level_index: e.current.currentLevel,
              hls_segment_res_width: e.current.levels[e.current.currentLevel].width,
              hls_segment_res_height: e.current.levels[e.current.currentLevel].height,
          };
}
n(531443);
var ei = n(611599);
(n(141711), n(497329), new ei.Vy("MobileCustomMuxIntegration"), new ei.Vy("MobileMuxWrapper"), n(740644));
var el = n(829097),
    eu = n(287809),
    eo = n(417404),
    ea = n(260918),
    ed = n(639701),
    ec = n(879371),
    e_ = n(215805);
function eE(e) {
    let t,
        {
            targetTimeSec: n,
            onOptimisticProgressUpdate: D,
            autoplay: O,
            autoFocus: A = !0,
            parentTransitionState: T,
            openedAtMs: h,
            orientation: k,
            videoUrlOverride: L,
        } = e,
        {
            sourceQuestContent: b,
            quest: R,
            videoSessionId: V,
            setIsFullscreenEnabled: w,
            onClose: M,
        } = r.useContext(f.a),
        P = (0, r.useRef)(null),
        F = (0, C.Yh)(R),
        Q = R.userStatus?.completedAt != null,
        ei = !Q,
        eE = r.useMemo(() => R.config.features.includes(U.Li.FULL_EPISODE_VIDEO_QUEST), [R.config.features]),
        ev = (0, E.Kr)((e) => e.videoProgress[R.id] ?? E.yc, i.x),
        eC = (0, E.Kr)((e) => e.setVideoProgress),
        { volume: ep, muted: eS, setVolume: em, setMuted: eI } = (0, I.A)(),
        ef = (0, u.g)(Q, ev, F.progressSeconds),
        [eD] = r.useState(() => a.A.getEffectiveConnectionSpeed()),
        eO = Math.max(ev.maxTimestampSec, F.progressSeconds),
        eA = Q ? void 0 : (0, p.vd)(eO, ev.duration),
        { videoAsset: eg, videoAssetType: eT } = (function (e, t) {
            let { quest: n } = r.useContext(f.a),
                { questConfig: s } = r.useContext(f.l),
                i = s.taskConfigV2.tasks[Y.n.WATCH_VIDEO]?.assets,
                l = r.useMemo(() => s.features.includes(j.L.FULL_EPISODE_VIDEO_QUEST), [s.features]),
                u = r.useMemo(
                    () =>
                        null != i
                            ? (0, q.Ap)() && null != i.videoHls
                                ? v.fY.VIDEO_PLAYER_VIDEO_HLS
                                : l
                                  ? null
                                  : B.has(e) || null == i.videoLowRes
                                    ? v.fY.VIDEO_PLAYER_VIDEO
                                    : v.fY.VIDEO_PLAYER_VIDEO_LOW_RES
                            : null,
                    [i, e, l],
                ),
                o = r.useMemo(
                    () =>
                        null != t
                            ? { url: t, mimetype: "video/mp4", isAnimated: !0 }
                            : null != u
                              ? (0, v.tW)(n, u, void 0, !1)
                              : null,
                    [n, u, t],
                );
            return { videoAssetType: u, videoAsset: o };
        })(eD, L),
        eh = r.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: s } = e;
                return t || null != eT
                    ? (0, m.b)({ hasVideoAsset: t, playerState: n, pauseReason: s })
                    : (0, d.HZ)()
                      ? x.intl.string(x.t["E1du/q"])
                      : x.intl.string(x.t["rStN/7"]);
            },
            [eT],
        ),
        ek = (0, r.useRef)(null),
        [eL, eb] = r.useState(null),
        eR = r.useCallback((e) => {
            ((ek.current = e), eb(e));
        }, []),
        eV = (0, r.useRef)(0),
        eU = (0, r.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: ex,
            trackQuestVideoLoadingEnded: eN,
            trackQuestVideoResumed: ew,
            trackQuestVideoPaused: eM,
            trackQuestVideoFocusChange: eP,
            trackQuestVideoBufferingStarted: eF,
            trackQuestVideoBufferingEnded: ey,
            trackQuestVideoTimeToFirstFrame: eQ,
            trackQuestVideoFullscreenChanged: eH,
            trackQuestVideoError: eY,
            trackQuestVideoVolumeChanged: ej,
            trackQuestContentClick: eq,
            trackQuestVideoProgressed: eK,
            trackQuestVideoSegmentWatched: eB,
            handleEngagedViewProgress: eG,
        } = (function (e) {
            let {
                    videoRef: t,
                    hlsRef: n,
                    videoSessionId: s,
                    videoAssetId: i,
                    sourceQuestContent: u,
                    questId: o,
                    isQuestCompleted: d,
                    isFullEpisodeVideoQuest: c,
                } = e,
                E = (0, et.u0)(),
                v = (0, y.wW)(),
                C = (0, z.bG)([a.A], () => a.A.getEffectiveConnectionSpeed()),
                S = (0, r.useRef)(-1),
                m = r.useMemo(
                    () =>
                        (0, en.n0)({
                            getImpressionId: v,
                            onEmit: (e) => {
                                let t = _.uF.VIDEO_MODAL;
                                (0, ee.av)({
                                    questId: o,
                                    event: K.HAw.QUEST_CONTENT_ENGAGED_VIEWED,
                                    properties: {
                                        ...(0, g.fF)(t),
                                        ...(0, X.A)(),
                                        impression_id: v(),
                                        video_watch_seconds: e.video_watch_seconds,
                                        video_position_seconds: e.video_position_seconds,
                                        video_duration_seconds: e.video_duration_seconds,
                                        apple_advertising_id: null,
                                        android_advertising_id: null,
                                        metadata_sealed: (0, es.L4)(u, o) ?? null,
                                        traffic_metadata_sealed: (0, es.Gp)(u, o) ?? null,
                                    },
                                    sourceQuestContent: u,
                                });
                            },
                        }),
                    [v, o, u],
                ),
                I = r.useCallback(
                    (e) => {
                        let { positionSeconds: t, durationSeconds: n, isPlaying: s } = e;
                        m.onProgress({ positionSeconds: t, durationSeconds: n, isPlaying: s });
                    },
                    [m],
                ),
                f = r.useCallback(
                    (e) => {
                        null != t.current &&
                            E({
                                questId: o,
                                event: K.HAw.QUEST_VIDEO_LOADING_STARTED,
                                properties: {
                                    video_asset_id: i,
                                    network_connection_speed: e,
                                    video_session_id: s,
                                    is_hls_supported: (0, q.Ap)(),
                                    ...er(n),
                                },
                                sourceQuestContent: u,
                            });
                    },
                    [o, t, i, s, n, E, u],
                ),
                D = r.useCallback(
                    (e) => {
                        null != t.current &&
                            null != e &&
                            E({
                                questId: o,
                                event: K.HAw.QUEST_VIDEO_LOADING_ENDED,
                                properties: {
                                    video_asset_id: i,
                                    network_connection_speed: C,
                                    duration: e,
                                    video_session_id: s,
                                    ...er(n),
                                },
                                sourceQuestContent: u,
                            });
                    },
                    [o, t, i, s, n, E, u, C],
                ),
                O = r.useCallback(
                    (e) => {
                        null != t.current &&
                            E({
                                questId: o,
                                event: K.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                                properties: { duration_ms: e, video_session_id: s, video_asset_id: i, ...er(n) },
                                sourceQuestContent: u,
                            });
                    },
                    [o, t, i, s, n, E, u],
                ),
                A = r.useCallback(() => {
                    null != t.current &&
                        E({
                            questId: o,
                            event: K.HAw.QUEST_VIDEO_PROGRESSED,
                            properties: {
                                progress: (0, p.zh)(t.current.currentTime, t.current.duration),
                                video_timestamp_seconds: t.current.currentTime,
                                video_session_id: s,
                                video_asset_id: i,
                                ...er(n),
                            },
                            sourceQuestContent: u,
                        });
                }, [o, t, s, n, E, i, u]),
                T = r.useCallback(
                    (e) => {
                        null != t.current &&
                            E({
                                questId: o,
                                event: K.HAw.QUEST_VIDEO_RESUMED,
                                properties: {
                                    video_timestamp_seconds: t.current.currentTime,
                                    pause_reason: e,
                                    video_session_id: s,
                                    video_asset_id: i,
                                    ...er(n),
                                },
                                sourceQuestContent: u,
                            });
                    },
                    [o, t, s, n, E, i, u],
                ),
                h = r.useCallback(
                    (e) => {
                        null != t.current &&
                            null != e &&
                            E({
                                questId: o,
                                event: K.HAw.QUEST_VIDEO_PAUSED,
                                properties: {
                                    video_timestamp_seconds: t.current.currentTime,
                                    reason: e,
                                    video_session_id: s,
                                    video_asset_id: i,
                                    ...er(n),
                                },
                                sourceQuestContent: u,
                            });
                    },
                    [o, t, s, n, E, i, u],
                ),
                k = r.useCallback(
                    (e, n) => {
                        null != t.current &&
                            E({
                                questId: o,
                                event: e ? K.HAw.QUEST_VIDEO_APP_FOCUSED : K.HAw.QUEST_VIDEO_APP_UNFOCUSED,
                                properties: {
                                    video_timestamp_seconds: t.current.currentTime,
                                    video_state: n,
                                    video_session_id: s,
                                    video_asset_id: i,
                                },
                                sourceQuestContent: u,
                            });
                    },
                    [o, t, s, E, i, u],
                ),
                L = r.useCallback(() => {
                    null != t.current &&
                        ((S.current += 1),
                        E({
                            questId: o,
                            event: K.HAw.QUEST_VIDEO_BUFFERING_STARTED,
                            properties: {
                                video_asset_id: i,
                                network_connection_speed: C,
                                buffer_index: S.current,
                                video_session_id: s,
                                ...er(n),
                            },
                            sourceQuestContent: u,
                        }));
                }, [o, t, i, s, n, E, u, C]),
                b = r.useCallback(
                    (e) => {
                        null != t.current &&
                            ((S.current += 1),
                            E({
                                questId: o,
                                event: K.HAw.QUEST_VIDEO_BUFFERING_ENDED,
                                properties: {
                                    video_asset_id: i,
                                    network_connection_speed: C,
                                    duration: e,
                                    buffer_index: S.current,
                                    video_session_id: s,
                                    ...er(n),
                                },
                                sourceQuestContent: u,
                            }));
                    },
                    [o, t, i, s, n, E, u, C],
                ),
                R = r.useCallback(
                    (e, t) => {
                        (0, Z.r)({
                            type: $.F.CLICK_INTERNAL,
                            adCreativeType: G.p.QUEST,
                            adCreativeId: o,
                            questContentCTA: t,
                            surfaceId: e,
                            sourceQuestContent: u,
                            impressionId: v(),
                        });
                    },
                    [o, u, v],
                ),
                V = r.useCallback(
                    (e) => {
                        null != t.current &&
                            E({
                                questId: o,
                                event: K.HAw.QUEST_VIDEO_SEGMENT_WATCHED,
                                properties: {
                                    ...e,
                                    video_asset_id: i,
                                    quest_completed: d,
                                    video_duration_sec: t.current.duration,
                                    video_progress: (0, p.zh)(e.segment_end_sec, t.current.duration),
                                    video_session_id: s,
                                    ...er(n),
                                },
                                sourceQuestContent: u,
                            });
                    },
                    [E, o, i, d, s, n, t, u],
                ),
                U = r.useCallback(
                    (e, r) => {
                        if (null == t.current) return;
                        let a = t.current?.error,
                            d = t.current?.networkState,
                            _ = null != t.current ? (0, p.zh)(t.current.currentTime, t.current.duration) : void 0,
                            v = null != r ? { hls_error_subtype: r.errorDetails, hls_error_fatal: r.fatal } : {};
                        (E({
                            questId: o,
                            event: K.HAw.QUEST_VIDEO_ERROR,
                            properties: {
                                video_progress: _,
                                video_error_type: e,
                                video_asset_id: i,
                                network_connection_speed: C,
                                video_session_id: s,
                                video_error_code: a?.code,
                                video_error_message: a?.message,
                                video_network_state: d,
                                is_full_episode_video_quest: c,
                                is_hls_supported: (0, q.Ap)(),
                                ...er(n),
                                ...v,
                            },
                            sourceQuestContent: u,
                        }),
                            (e === l.SB.SOURCE_ERROR || e === l.SB.NO_VALID_SOURCE) &&
                                J.A.increment({
                                    name: W.K.QUEST_VIDEO_ERROR,
                                    tags: [
                                        `ad_creative_id:${o}`,
                                        `ad_creative_type:${G.p[G.p.QUEST]}`,
                                        `error_type:${e}`,
                                    ],
                                }));
                    },
                    [o, t, i, s, n, E, u, C, c],
                );
            return {
                trackQuestVideoLoadingStarted: f,
                trackQuestVideoLoadingEnded: D,
                trackQuestVideoTimeToFirstFrame: O,
                trackQuestVideoProgressed: A,
                trackQuestVideoResumed: T,
                trackQuestVideoPaused: h,
                trackQuestVideoFocusChange: k,
                trackQuestContentClick: R,
                trackQuestVideoBufferingStarted: L,
                trackQuestVideoBufferingEnded: b,
                trackQuestVideoSegmentWatched: V,
                trackQuestVideoFullscreenChanged: r.useCallback(
                    (e) => {
                        null != t.current &&
                            E({
                                questId: o,
                                event: e ? K.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : K.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
                                properties: { video_session_id: s, video_asset_id: i, ...er(n) },
                                sourceQuestContent: u,
                            });
                    },
                    [o, t, s, n, E, i, u],
                ),
                trackQuestVideoError: U,
                trackQuestVideoVolumeChanged: r.useCallback(
                    (e) => {
                        null != t.current &&
                            E({
                                questId: o,
                                event: K.HAw.QUEST_VIDEO_VOLUME_CHANGED,
                                properties: {
                                    volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                                    video_session_id: s,
                                    video_asset_id: i,
                                    ...er(n),
                                },
                                sourceQuestContent: u,
                            });
                    },
                    [o, t, i, s, n, E, u],
                ),
                handleEngagedViewProgress: I,
            };
        })({
            questId: R.id,
            isQuestCompleted: Q,
            videoRef: P,
            hlsRef: ek,
            videoSessionId: V,
            videoAssetId: eT,
            sourceQuestContent: b,
            isFullEpisodeVideoQuest: eE,
        });
    !(function (e) {
        let { videoAssetUrl: t, videoRef: n, hls: s, videoAssetType: i } = e,
            { questConfig: l } = r.useContext(f.l),
            u = (0, el._)({ location: U.rE.VIDEO_MODAL }).externalAnalyticsEnabled && null != t,
            a = i === v.fY.VIDEO_PLAYER_VIDEO_HLS,
            d = r.useMemo(
                () =>
                    u && null != t
                        ? {
                              contentId: t,
                              videoStreamType: a ? "hls" : "mp4",
                              contentType: "quests",
                              title: l.taskConfigV2.tasks[Y.n.WATCH_VIDEO]?.messages.videoTitle,
                              questId: l.id,
                              gameName: l.messages.gameTitle,
                          }
                        : void 0,
                [u, t, a, l],
            );
        (0, o.P8)({ videoRef: n, hls: s, contentMetadata: d, isHls: a });
    })({ videoAssetUrl: eg?.url, videoRef: P, hls: eL, videoAssetType: eT });
    let eW =
            ((t = (0, E.Kr)((e) => e.transcript)),
            (r.useEffect(() => {
                let e = (0, v.tW)(R, v.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
                (null == t ||
                    t.questId !== R.id ||
                    t.fetchStatus === E.Lx.NONE ||
                    (t.fetchStatus === E.Lx.SUCCESS && e?.url !== t.url)) &&
                    (0, c.qY)(R);
            }, [t, R]),
            t?.questId === R.id && t?.fetchStatus === E.Lx.SUCCESS)
                ? (t.text ?? null)
                : null),
        ez = (function (e) {
            let { targetSec: t, quest: n, sourceQuestContent: i, questConfig: l, clickable: u = !1 } = e,
                o = (0, z.bG)([eu.default], () => eu.default.getCurrentUser()),
                a = r.useMemo(() => l?.features.includes(U.Li.FULL_EPISODE_VIDEO_QUEST) === !0, [l?.features]),
                d = r.useMemo(() => (a ? (0, eo.mq)(l, o) : void 0), [l, a, o]),
                c = n.userStatus?.completedAt != null,
                E = r.useMemo(
                    () =>
                        (0, s.jsx)(ed.A, {
                            fullWidth: !0,
                            quest: n,
                            location: U.rE.VIDEO_MODAL,
                            questContent: _.uF.VIDEO_MODAL,
                            sourceQuestContent: i,
                            autoplay: !1,
                        }),
                    [n, i],
                ),
                v = (0, ea.A)({ targetSec: t, label: d, isCompleted: c, icon: E, clickable: u });
            return a ? v : void 0;
        })({ targetSec: n, quest: R, sourceQuestContent: b, questConfig: R.config, clickable: Q }),
        eZ = r.useCallback(() => P.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: e$,
            handleLoadEnd: eX,
            handleFirstFrame: eJ,
            handleSeek: e0,
        } = (0, o.Yr)({ getCurrentVideoTime: eZ, onAnalytics: eB, emitIntervalMs: o.KI, minSegmentDurationMs: o._4 }),
        e1 = (0, r.useRef)(null),
        e7 = r.useCallback(
            (e, t) => {
                switch ((e$(e, t), e)) {
                    case l.Q6.PLAYING:
                        (P.current?.paused === !0 && ew(e1.current), (e1.current = null));
                        break;
                    case l.Q6.PAUSED: {
                        let e = (function (e) {
                            switch (e) {
                                case l.KB.USER:
                                    return _.Yg.PAUSE_BUTTON;
                                case l.KB.FOCUS:
                                    return _.Yg.LOST_FOCUS;
                                case l.KB.VISIBILITY:
                                    return _.Yg.MODAL_CLOSED;
                                case l.KB.PICTURE_IN_PICTURE:
                                    return _.Yg.PICTURE_IN_PICTURE;
                                default:
                                    return null;
                            }
                        })(t);
                        (null != e && ((e1.current = e), eM(e)),
                            null != P.current &&
                                eG({
                                    positionSeconds: P.current.currentTime,
                                    durationSeconds: P.current.duration,
                                    isPlaying: !1,
                                }));
                    }
                    case l.Q6.ENDED:
                }
            },
            [e$, ew, eM, eG],
        ),
        e2 = r.useCallback(() => {
            ex(eD);
        }, [ex, eD]),
        e8 = r.useCallback(
            (e) => {
                (eX(e), eN(e));
            },
            [eX, eN],
        ),
        e9 = r.useCallback(
            (e) => {
                let t = e - h;
                (eJ(t), eQ(t));
            },
            [eJ, eQ, h],
        ),
        e5 = r.useCallback(
            (e) => {
                (w(e), eH(e));
            },
            [w, eH],
        ),
        e4 = r.useCallback(
            (e) => {
                (em(e), ej(e));
            },
            [em, ej],
        ),
        e6 = r.useCallback(
            (e, t) => {
                (eC(R.id, e, t),
                    (0, c.Gn)(R.id, F.taskType, e),
                    D(e),
                    eG({ positionSeconds: e, durationSeconds: t, isPlaying: null != P.current && !P.current.paused }));
                let s = eE && e >= n && !eU.current;
                (e >= eV.current || s) &&
                    (s && (eU.current = !0),
                    (eV.current = e + 6 + 2 * Math.random()),
                    Q || R.userStatus?.enrolledAt == null || (0, p.zv)(R, e),
                    eK());
            },
            [R, F.taskType, n, Q, eE, eK, eC, D, eG],
        ),
        e3 = r.useCallback(
            (e, t) => {
                if ((e0(), null != P.current)) {
                    let n = P.current.duration;
                    (eC(R.id, e, n), eC(R.id, t, n));
                }
            },
            [e0, R.id, eC],
        ),
        te = r.useCallback(() => {
            if (null != P.current) {
                let e = P.current.duration;
                (Q || R.userStatus?.enrolledAt == null || (0, p.zv)(R, e + 1), eC(R.id, e, e), eK());
            }
        }, [R, Q, eC, eK]),
        tt = r.useCallback(
            (e, t) => {
                eY(e, t);
            },
            [eY],
        ),
        tn = r.useMemo(() => (0, v.tW)(R, v.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [R]),
        ts = r.useCallback(
            () =>
                (0, s.jsxs)("div", { className: e_.A, children: [(0, s.jsx)(H, {}), (0, s.jsx)(S.A, { onClose: M })] }),
            [M],
        ),
        tr = r.useCallback(() => (0, s.jsx)(N, { videoRef: P, onTrackQuestContentClick: eq, orientation: k }), [eq, k]);
    return (0, s.jsx)(o.Ft, {
        ref: P,
        parentTransitionState: T,
        autoplay: O,
        progressClassName: ei ? ec.V : ec.s,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !Q,
        autoFocus: A,
        getPlaybackBlockedMessage: eh,
        orientation: k,
        videoUrlOverride: L,
        src: eg?.url,
        poster: void 0,
        initialTimeSec: ef,
        maxSeekableTimeSec: eA,
        captionTrackUrl: tn?.url,
        onPlayerStateChange: e7,
        onLoadStart: e2,
        onLoadEnd: e8,
        onFirstFrame: e9,
        onBufferingStart: eF,
        onBufferingEnd: ey,
        onFocusChange: eP,
        onFullscreenChange: e5,
        initialVolume: ep,
        initialMuted: eS,
        onVolumeChange: e4,
        onMutedChange: function (e) {
            eI(e);
        },
        onProgressUpdate: e6,
        onSeek: e3,
        onEnded: te,
        onError: tt,
        onHlsInstance: eR,
        transcriptText: eW ?? void 0,
        transcriptClassName: e_.f,
        renderPersistentOverlay: ts,
        renderEndScreen: tr,
        timelineIndicatorConfig: ez,
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
