(i.d(t, { A: () => f }), i(938796), i(321073));
var a = i(477900),
    l = i(582128),
    n = i(503698),
    s = i.n(n),
    o = i(665260),
    r = i(17928),
    c = i(876230),
    d = i(26137),
    h = i(534890),
    u = i(268218),
    p = i(776231),
    m = i(614269),
    v = i(829097),
    g = i(734057),
    w = i(53774),
    C = i(560149),
    S = i(349897),
    _ = i(215655),
    A = i(802976),
    M = i(696016),
    I = i(652215),
    b = i(268378),
    k = i(375708),
    x = i(324973);
let V = (0, u.Fe)({
    createPromise: () => Promise.resolve().then(i.bind(i, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, a.jsx)("div", { className: x.Lq }),
});
function f(e) {
    let {
            attachment: t,
            posterUrl: i,
            className: n,
            autoPlay: u,
            src: f,
            fillContainer: y = !1,
            minWidth: E = 500,
            maxWidth: T = 1 / 0,
            maxHeight: P = 1 / 0,
            channelId: N,
            messageId: B,
            showTextContent: R = T >= 250,
            showParticipants: F = !0,
            volume: j,
            autoMute: U,
            onVolumeChange: H,
            onMutedChange: L,
            onClick: Z,
            onContextMenu: G,
            onPlay: O,
            onSeekRequest: D,
            initialTimeSec: J,
            allowFullScreen: K = !0,
        } = e,
        Q = t.width ?? 0,
        W = t.height ?? 0,
        Y = (0, r.bG)([g.A], () => g.A.getBasicChannel(N)?.guild_id, [N]),
        q = Q > 0 && W > 0 ? Q / W : 16 / 9;
    (q > 2 || q < 1) && (q = 16 / 9);
    let X = l.useRef(null);
    (0, _.A)(t.id, X, D);
    let z = Math.min(Q > 0 ? Q : E, T),
        $ = z / q;
    ($ > P && (z = ($ = P) * q), z < E && ($ = (z = E) / q));
    let ee = Math.round(Math.min(z, T)),
        et = Math.round(Math.min($, P)),
        ei = Q > 0 && W > 0 ? Math.min(ee / Q, et / W, 1) : 1,
        ea = (0, p.AE)({ src: i, width: Math.round(Q * ei), height: Math.round(W * ei) }),
        [el, en] = l.useState(!1),
        [es, eo] = l.useState(!0),
        [er, ec] = l.useState(!0),
        [ed, eh] = l.useState(0),
        eu = l.useRef(0),
        ep = l.useCallback(
            (e, t) => {
                t !== c.KB.BUFFERING_RECOVERY && e === c.Q6.PLAYING && O?.(t !== c.KB.USER, 1e3 * eu.current, 1e3 * ed);
            },
            [ed, O],
        ),
        em = l.useCallback((e, t) => {
            ((eu.current = e), Number.isFinite(t) && t > 0 && eh((e) => (e === t ? e : t)));
        }, []),
        ev = l.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        eg = (0, o.Lt)(t.flags ?? 0, I.sbO.HAS_TIMELINE_COMMENTS),
        ew = l.useMemo(() => {
            let e = [];
            return (
                ev &&
                    e.push({
                        id: "speaking-indicators",
                        iconComponent: d.r,
                        label: k.intl.string(b.default.hFWVZQ),
                        active: es,
                        onClick: () => eo((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    }),
                eg &&
                    e.push({
                        id: "timeline-comments",
                        iconComponent: h.ChatIcon,
                        label: k.intl.string(b.default.XfP4bO),
                        active: er,
                        onClick: () => ec((e) => !e),
                        "data-testid": "clips-player-timeline-comments-toggle",
                    }),
                e
            );
        }, [ev, es, eg, er]),
        eC = (0, v._)({ location: M.Mu }).externalAnalyticsEnabled,
        eS = l.useMemo(
            () =>
                eC
                    ? {
                          contentId: f.split("?")[0],
                          videoStreamType: m.u.isHlsUrl(f) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [eC, f, t.title],
        ),
        e_ = l.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        [eA, eM] = l.useState(!1),
        eI = l.useCallback(
            (e) => {
                let {
                    playerState: i,
                    isControlBarExpanded: l,
                    videoRef: n,
                    isActive: s,
                    isVolumeExpanded: o,
                    controlBarAnimationSpring: r,
                } = e;
                return (0, a.jsx)(C.A, {
                    attachment: t,
                    controlBarAnimationSpring: r,
                    guildId: Y,
                    isFullScreen: el,
                    showParticipants: F,
                    showTextContent: R,
                    channelId: N,
                    messageId: B,
                    showSpeakingIndicators: es,
                    clipUserIds: e_,
                    durationSeconds: ed,
                    playerState: i,
                    isControlBarExpanded: l,
                    videoRef: n,
                    isActive: s,
                    isVolumeExpanded: o,
                    showTimelineComments: er,
                    isGridView: eA,
                    setIsGridView: eM,
                });
            },
            [t, Y, el, F, R, N, B, es, e_, ed, er, eA],
        ),
        eb = (0, S.T)(t.clip_events_timeline ?? []),
        ek = (0, A.A)({ attachment: t, channelId: N, guildId: Y, messageId: B }),
        ex = l.useCallback(
            (e) =>
                null == ek
                    ? null
                    : (0, a.jsx)(w.A, {
                          ...e,
                          original: ek.original,
                          subSources: ek.subSources,
                          isGridView: eA,
                          setIsGridView: eM,
                          suppressSourceSelection: eA,
                      }),
            [ek, eA],
        );
    return (0, a.jsx)("div", {
        className: s()(x.kL, { [x.HA]: y }, n),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: G,
        style: y ? void 0 : { width: ee, height: et },
        children: (0, a.jsx)(V, {
            src: f,
            downloadUrl: t.url,
            renderVideo: null != ek ? ex : void 0,
            downloadContentType: t.content_type,
            extraButtons: ew,
            poster: ea,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: u,
            initialActive: !1,
            initialTimeSec: J,
            initialVolume: j,
            initialMuted: U,
            onVolumeChange: H,
            onMutedChange: L,
            onProgressUpdate: em,
            orientation: "landscape",
            timelineIndicatorConfig: eb,
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: eI,
            parentTransitionState: null,
            onFullscreenChange: en,
            onClick: Z,
            onPlayerStateChange: ep,
            withVideoHalo: !eA,
            objectFit: y ? "cover" : void 0,
            muxContentMetadata: eS,
            hideFullScreenBtn: !K,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: X,
            scrubPreviewVttUrl: t.spritesheet_vtt_url,
            scrubPreviewImageUrl: t.spritesheet_image_url,
        }),
    });
}
