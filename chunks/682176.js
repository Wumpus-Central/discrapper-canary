(i.d(t, { A: () => P, v: () => x }), i(938796), i(321073));
var n = i(477900),
    l = i(582128),
    a = i(503698),
    s = i.n(a),
    o = i(665260),
    r = i(17928),
    d = i(876230),
    c = i(26137),
    u = i(534890),
    p = i(268218),
    h = i(614269),
    m = i(829097),
    g = i(734057),
    v = i(53774),
    C = i(560149),
    w = i(349897),
    S = i(394039),
    _ = i(215655),
    b = i(802976),
    k = i(696016),
    A = i(652215),
    I = i(268378),
    M = i(660183),
    y = i(324973);
let f = (0, p.qT)({
    createPromise: () =>
        Promise.all([i.e("216870"), i.e("398793"), i.e("256616"), i.e("643612"), i.e("133179"), i.e("334127")]).then(
            i.bind(i, 266546),
        ),
    webpackId: 266546,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, n.jsx)("div", { className: y.Lq }),
});
function x() {
    f.preload();
}
function P(e) {
    let {
            attachment: t,
            posterUrl: i,
            className: a,
            autoPlay: p,
            src: x,
            fillContainer: P = !1,
            minWidth: V = 500,
            maxWidth: T = 1 / 0,
            maxHeight: E = 1 / 0,
            channelId: B,
            messageId: R,
            showTextContent: N = T >= 250,
            showParticipants: F = !0,
            volume: U,
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
        } = e,
        W = t.width ?? 0,
        Y = t.height ?? 0,
        J = (0, r.bG)([g.A], () => g.A.getBasicChannel(B)?.guild_id, [B]),
        X = W > 0 && Y > 0 ? W / Y : 16 / 9;
    (X > 2 || X < 1) && (X = 16 / 9);
    let z = l.useRef(null);
    (0, _.A)(t.id, z, D);
    let $ = Math.min(W > 0 ? W : V, T),
        ee = $ / X;
    (ee > E && ($ = (ee = E) * X), $ < V && (ee = ($ = V) / X));
    let et = Math.round(Math.min($, T)),
        ei = Math.round(Math.min(ee, E)),
        en = (0, S.s)(i, t, et, ei),
        [el, ea] = l.useState(!1),
        [es, eo] = l.useState(!0),
        [er, ed] = l.useState(!0),
        [ec, eu] = l.useState(0),
        ep = l.useRef(0),
        eh = l.useCallback(
            (e, t) => {
                t !== d.KB.BUFFERING_RECOVERY && e === d.Q6.PLAYING && Z?.(t !== d.KB.USER, 1e3 * ep.current, 1e3 * ec);
            },
            [ec, Z],
        ),
        em = l.useCallback((e, t) => {
            ((ep.current = e), Number.isFinite(t) && t > 0 && eu((e) => (e === t ? e : t)));
        }, []),
        eg = l.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        ev = (0, o.Lt)(t.flags ?? 0, A.sbO.HAS_TIMELINE_COMMENTS),
        eC = l.useMemo(() => {
            let e = [];
            return (
                eg &&
                    e.push({
                        id: "speaking-indicators",
                        iconComponent: c.r,
                        label: M.intl.string(I.default.hFWVZQ),
                        active: es,
                        onClick: () => eo((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    }),
                ev &&
                    e.push({
                        id: "timeline-comments",
                        iconComponent: u.ChatIcon,
                        label: M.intl.string(I.default.XfP4bO),
                        active: er,
                        onClick: () => ed((e) => !e),
                        "data-testid": "clips-player-timeline-comments-toggle",
                    }),
                e
            );
        }, [eg, es, ev, er]),
        ew = (0, m._)({ location: k.Mu }).externalAnalyticsEnabled,
        eS = l.useMemo(
            () =>
                ew
                    ? {
                          contentId: x.split("?")[0],
                          videoStreamType: h.u.isHlsUrl(x) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [ew, x, t.title],
        ),
        e_ = l.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        [eb, ek] = l.useState(!1),
        eA = l.useCallback(
            (e) => {
                let {
                    playerState: i,
                    isControlBarExpanded: l,
                    videoRef: a,
                    isActive: s,
                    isVolumeExpanded: o,
                    controlBarAnimationSpring: r,
                } = e;
                return (0, n.jsx)(C.A, {
                    attachment: t,
                    controlBarAnimationSpring: r,
                    guildId: J,
                    isFullScreen: el,
                    showParticipants: F,
                    showTextContent: N,
                    channelId: B,
                    messageId: R,
                    showSpeakingIndicators: es,
                    clipUserIds: e_,
                    durationSeconds: ec,
                    playerState: i,
                    isControlBarExpanded: l,
                    videoRef: a,
                    isActive: s,
                    isVolumeExpanded: o,
                    showTimelineComments: er,
                    isGridView: eb,
                    setIsGridView: ek,
                });
            },
            [t, J, el, F, N, B, R, es, e_, ec, er, eb],
        ),
        eI = (0, w.T)(t.clip_events_timeline ?? [], t.application?.id, t.duration_secs ?? ec),
        eM = (0, b.A)({ attachment: t, channelId: B, guildId: J, messageId: R, width: et, height: ei }),
        ey = l.useCallback(
            (e) =>
                null == eM
                    ? null
                    : (0, n.jsx)(v.A, {
                          ...e,
                          original: eM.original,
                          subSources: eM.subSources,
                          isGridView: eb,
                          setIsGridView: ek,
                          suppressSourceSelection: eb,
                      }),
            [eM, eb],
        );
    return (0, n.jsx)("div", {
        className: s()(y.kL, { [y.HA]: P }, a),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: O,
        style: P ? void 0 : { width: et, height: ei },
        children: (0, n.jsx)(f, {
            src: x,
            downloadUrl: t.url,
            renderVideo: null != eM ? ey : void 0,
            downloadContentType: t.content_type,
            extraButtons: eC,
            poster: en,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: p,
            initialActive: !1,
            initialTimeSec: q,
            initialVolume: U,
            initialMuted: j,
            onVolumeChange: G,
            onMutedChange: L,
            onProgressUpdate: em,
            orientation: "landscape",
            timelineIndicatorConfig: eI,
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: eA,
            parentTransitionState: null,
            onFullscreenChange: ea,
            onClick: H,
            onPlayerStateChange: eh,
            onEnded: K,
            withVideoHalo: !eb,
            objectFit: P ? "cover" : void 0,
            muxContentMetadata: eS,
            hideFullScreenBtn: !Q,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: z,
            scrubPreviewVttUrl: t.spritesheet_vtt_url,
            scrubPreviewImageUrl: t.spritesheet_image_url,
        }),
    });
}
