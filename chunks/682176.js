i.d(t, { A: () => P }), i(938796), i(321073);
var a = i(477900),
    l = i(582128),
    n = i(503698),
    o = i.n(n),
    s = i(665260),
    r = i(17928),
    c = i(876230),
    d = i(26137),
    h = i(534890),
    p = i(268218),
    u = i(776231),
    m = i(614269),
    v = i(829097),
    g = i(734057),
    C = i(102174),
    _ = i(560149),
    w = i(349897),
    S = i(215655),
    M = i(696016),
    k = i(652215),
    b = i(711918),
    y = i(375708),
    A = i(324973);
let I = (0, p.Fe)({
    createPromise: () => Promise.resolve().then(i.bind(i, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, a.jsx)("div", { className: A.Lq }),
});
function P(e) {
    let {
            attachment: t,
            posterUrl: i,
            className: n,
            autoPlay: p,
            src: P,
            fillContainer: f = !1,
            minWidth: x = 500,
            maxWidth: E = 1 / 0,
            maxHeight: T = 1 / 0,
            channelId: B,
            messageId: V,
            showTextContent: R = E >= 250,
            showParticipants: F = !0,
            volume: N,
            autoMute: U,
            onVolumeChange: L,
            onMutedChange: j,
            onClick: H,
            onContextMenu: O,
            onPlay: Z,
            onSeekRequest: D,
            initialTimeSec: G,
            allowFullScreen: K = !0,
        } = e,
        Q = t.width ?? 0,
        W = t.height ?? 0,
        Y = (0, r.bG)([g.A], () => g.A.getBasicChannel(B)?.guild_id, [B]),
        q = Q > 0 && W > 0 ? Q / W : 16 / 9;
    (q > 2 || q < 1) && (q = 16 / 9);
    let J = l.useRef(null);
    (0, S.A)(t.id, J, D);
    let X = Math.min(Q > 0 ? Q : x, E),
        z = X / q;
    z > T && (X = (z = T) * q), X < x && (z = (X = x) / q);
    let $ = Math.round(Math.min(X, E)),
        ee = Math.round(Math.min(z, T)),
        et = Q > 0 && W > 0 ? Math.min($ / Q, ee / W, 1) : 1,
        ei = (0, u.AE)({ src: i, width: Math.round(Q * et), height: Math.round(W * et) }),
        [ea, el] = l.useState(!1),
        [en, eo] = l.useState(!0),
        [es, er] = l.useState(!0),
        [ec, ed] = l.useState(0),
        eh = l.useRef(0),
        ep = l.useCallback(
            (e, t) => {
                t !== c.KB.BUFFERING_RECOVERY && e === c.Q6.PLAYING && Z?.(t !== c.KB.USER, 1e3 * eh.current, 1e3 * ec);
            },
            [ec, Z],
        ),
        eu = l.useCallback((e, t) => {
            (eh.current = e), Number.isFinite(t) && t > 0 && ed((e) => (e === t ? e : t));
        }, []),
        em = l.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        ev = (0, s.Lt)(t.flags ?? 0, k.sbO.HAS_TIMELINE_COMMENTS),
        eg = l.useMemo(() => {
            let e = [];
            return (
                em &&
                    e.push({
                        id: "speaking-indicators",
                        iconComponent: d.r,
                        label: y.intl.string(b.default.hFWVZQ),
                        active: en,
                        onClick: () => eo((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    }),
                ev &&
                    e.push({
                        id: "timeline-comments",
                        iconComponent: h.ChatIcon,
                        label: y.intl.string(b.default.XfP4bO),
                        active: es,
                        onClick: () => er((e) => !e),
                        "data-testid": "clips-player-timeline-comments-toggle",
                    }),
                e
            );
        }, [em, en, ev, es]),
        eC = (0, v._)({ location: M.Mu }).externalAnalyticsEnabled,
        e_ = l.useMemo(
            () =>
                eC
                    ? {
                          contentId: P.split("?")[0],
                          videoStreamType: m.u.isHlsUrl(P) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [eC, P, t.title],
        ),
        ew = l.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        { enableScrubPreview: eS } = C.B.useConfig({ location: "ClipsPlayer" }),
        eM = l.useCallback(
            (e) => {
                let {
                    playerState: i,
                    isControlBarExpanded: l,
                    videoRef: n,
                    isActive: o,
                    isVolumeExpanded: s,
                    controlBarAnimationSpring: r,
                } = e;
                return (0, a.jsx)(_.A, {
                    attachment: t,
                    controlBarAnimationSpring: r,
                    guildId: Y,
                    isFullScreen: ea,
                    showParticipants: F,
                    showTextContent: R,
                    channelId: B,
                    messageId: V,
                    showSpeakingIndicators: en,
                    clipUserIds: ew,
                    durationSeconds: ec,
                    playerState: i,
                    isControlBarExpanded: l,
                    videoRef: n,
                    isActive: o,
                    isVolumeExpanded: s,
                    showTimelineComments: es,
                });
            },
            [t, Y, ea, F, R, B, V, en, ew, ec, es],
        ),
        ek = (0, w.T)(t.clip_events_timeline ?? []);
    return (0, a.jsx)("div", {
        className: o()(A.kL, { [A.HA]: f }, n),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: O,
        style: f ? void 0 : { width: $, height: ee },
        children: (0, a.jsx)(I, {
            src: P,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: eg,
            poster: ei,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: p,
            initialActive: !1,
            initialTimeSec: G,
            initialVolume: N,
            initialMuted: U,
            onVolumeChange: L,
            onMutedChange: j,
            onProgressUpdate: eu,
            orientation: "landscape",
            timelineIndicatorConfig: ek,
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: eM,
            parentTransitionState: null,
            onFullscreenChange: el,
            onClick: H,
            onPlayerStateChange: ep,
            withVideoHalo: !0,
            objectFit: f ? "cover" : void 0,
            muxContentMetadata: e_,
            hideFullScreenBtn: !K,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: J,
            scrubPreviewVttUrl: eS ? t.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: eS ? t.spritesheet_image_url : void 0,
        }),
    });
}
