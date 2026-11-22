(i(938796), i(321073));
var n = i(477900),
    l = i(582128),
    a = i(503698),
    s = i.n(a),
    o = i(665260),
    r = i(855986),
    d = i(876230),
    c = i(26137),
    u = i(534890),
    p = i(268218),
    h = i(614269),
    m = i(829097),
    g = i(734057),
    C = i(501687),
    v = i(54563),
    w = i(349897),
    S = i(394039),
    _ = i(215655),
    b = i(802976),
    I = i(696016),
    k = i(652215),
    A = i(683825),
    M = i(792996),
    y = i(324973);
let f = (0, p.qT)({
    createPromise: () =>
        Promise.all([
            i.e(985768),
            i.e(936090),
            i.e(491279),
            i.e(398793),
            i.e(56021),
            i.e(791154),
            i.e(133179),
            i.e(384498),
            i.e(271244),
        ]).then(i.bind(i, 973513)),
    webpackId: 973513,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, n.jsx)("div", { className: y.Lq }),
});
i.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    attachment: t,
                    posterUrl: i,
                    className: a,
                    autoPlay: p,
                    src: x,
                    fillContainer: T = !1,
                    minWidth: V = 500,
                    maxWidth: E = 1 / 0,
                    maxHeight: P = 1 / 0,
                    channelId: R,
                    messageId: B,
                    showTextContent: U = E >= 250,
                    showParticipants: N = !0,
                    volume: F,
                    autoMute: j,
                    onVolumeChange: G,
                    onMutedChange: L,
                    onClick: H,
                    onContextMenu: O,
                    onPlay: Z,
                    onSeekRequest: D,
                    initialTimeSec: q,
                    onEnded: K,
                    allowFullScreen: Q = !0,
                    playerRef: W,
                } = e,
                Y = t.width ?? 0,
                J = t.height ?? 0,
                X = (0, r.bG)([g.A], () => g.A.getBasicChannel(R)?.guild_id, [R]),
                z = Y > 0 && J > 0 ? Y / J : 16 / 9;
            (z > 2 || z < 1) && (z = 16 / 9);
            let $ = l.useRef(null),
                ee = W ?? $;
            (0, _.A)(t.id, ee, D);
            let et = Math.min(Y > 0 ? Y : V, E),
                ei = et / z;
            (ei > P && (et = (ei = P) * z), et < V && (ei = (et = V) / z));
            let en = Math.round(Math.min(et, E)),
                el = Math.round(Math.min(ei, P)),
                ea = (0, S.s)(i, t, en, el),
                [es, eo] = l.useState(!1),
                [er, ed] = l.useState(!0),
                [ec, eu] = l.useState(!0),
                [ep, eh] = l.useState(0),
                em = l.useRef(0),
                eg = l.useCallback(
                    (e, t) => {
                        t !== d.KB.BUFFERING_RECOVERY &&
                            e === d.Q6.PLAYING &&
                            Z?.(t !== d.KB.USER, 1e3 * em.current, 1e3 * ep);
                    },
                    [ep, Z],
                ),
                eC = l.useCallback((e, t) => {
                    ((em.current = e), Number.isFinite(t) && t > 0 && eh((e) => (e === t ? e : t)));
                }, []),
                ev = l.useMemo(
                    () => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1,
                    [t.clip_events_timeline],
                ),
                ew = (0, o.Lt)(t.flags ?? 0, k.sbO.HAS_TIMELINE_COMMENTS),
                eS = l.useMemo(() => {
                    let e = [];
                    return (
                        ev &&
                            e.push({
                                id: "speaking-indicators",
                                iconComponent: c.UserCircleIcon,
                                label: M.intl.string(A.default.hFWVZQ),
                                active: er,
                                onClick: () => ed((e) => !e),
                                "data-testid": "clips-player-speaking-indicators-toggle",
                            }),
                        ew &&
                            e.push({
                                id: "timeline-comments",
                                iconComponent: u.ChatIcon,
                                label: M.intl.string(A.default.XfP4bO),
                                active: ec,
                                onClick: () => eu((e) => !e),
                                "data-testid": "clips-player-timeline-comments-toggle",
                            }),
                        e
                    );
                }, [ev, er, ew, ec]),
                e_ = (0, m._)({ location: I.Mu }).externalAnalyticsEnabled,
                eb = l.useMemo(
                    () =>
                        e_
                            ? {
                                  contentId: x.split("?")[0],
                                  videoStreamType: h.u.isHlsUrl(x) ? "hls" : "mp4",
                                  contentType: "clips",
                                  title: t.title,
                              }
                            : void 0,
                    [e_, x, t.title],
                ),
                eI = l.useMemo(
                    () =>
                        t.clip_participants?.map((e) => {
                            let { id: t } = e;
                            return t;
                        }) ?? [],
                    [t.clip_participants],
                ),
                [ek, eA] = l.useState(!1),
                eM = l.useCallback(
                    (e) => {
                        let {
                            playerState: i,
                            isControlBarExpanded: l,
                            videoRef: a,
                            isActive: s,
                            isVolumeExpanded: o,
                            controlBarAnimationSpring: r,
                        } = e;
                        return (0, n.jsx)(v.A, {
                            attachment: t,
                            controlBarAnimationSpring: r,
                            guildId: X,
                            isFullScreen: es,
                            showParticipants: N,
                            showTextContent: U,
                            channelId: R,
                            messageId: B,
                            showSpeakingIndicators: er,
                            clipUserIds: eI,
                            durationSeconds: ep,
                            playerState: i,
                            isControlBarExpanded: l,
                            videoRef: a,
                            isActive: s,
                            isVolumeExpanded: o,
                            showTimelineComments: ec,
                            isGridView: ek,
                            setIsGridView: eA,
                        });
                    },
                    [t, X, es, N, U, R, B, er, eI, ep, ec, ek],
                ),
                ey = (0, w.T)(t.clip_events_timeline ?? [], t.application?.id, t.duration_secs ?? ep),
                ef = (0, b.A)({ attachment: t, channelId: R, guildId: X, messageId: B, width: en, height: el }),
                ex = l.useCallback(
                    (e) =>
                        null == ef
                            ? null
                            : (0, n.jsx)(C.A, {
                                  ...e,
                                  original: ef.original,
                                  subSources: ef.subSources,
                                  isGridView: ek,
                                  setIsGridView: eA,
                                  suppressSourceSelection: ek,
                              }),
                    [ef, ek],
                );
            return (0, n.jsx)("div", {
                className: s()(y.kL, { [y.HA]: T }, a),
                onClick: (e) => e.stopPropagation(),
                onContextMenu: O,
                style: T ? void 0 : { width: en, height: el },
                children: (0, n.jsx)(f, {
                    src: x,
                    downloadUrl: t.url,
                    renderVideo: null != ef ? ex : void 0,
                    downloadContentType: t.content_type,
                    extraButtons: eS,
                    poster: ea,
                    autoplay: p,
                    initialActive: !1,
                    initialTimeSec: q,
                    initialVolume: F,
                    initialMuted: j,
                    onVolumeChange: G,
                    onMutedChange: L,
                    onProgressUpdate: eC,
                    orientation: "landscape",
                    timelineIndicatorConfig: ey,
                    minWidth: 0,
                    minHeight: 0,
                    loadingSpinnerPosition: "center",
                    renderPersistentOverlay: eM,
                    parentTransitionState: null,
                    onFullscreenChange: eo,
                    onClick: H,
                    onPlayerStateChange: eg,
                    onEnded: K,
                    withVideoHalo: !ek,
                    objectFit: T ? "cover" : void 0,
                    muxContentMetadata: eb,
                    hideFullScreenBtn: !Q,
                    hideSkipButtons: !0,
                    compactTimeDisplay: !0,
                    autoHideVolumeSlider: !0,
                    hidePlaybackSpeedBtn: !0,
                    playerRef: ee,
                    scrubPreviewVttUrl: t.spritesheet_vtt_url,
                    scrubPreviewImageUrl: t.spritesheet_image_url,
                }),
            });
        },
        v: function () {
            f.preload();
        },
    },
);
