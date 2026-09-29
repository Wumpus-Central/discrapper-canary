(i.d(t, { A: () => y, v: () => V }), i(938796), i(321073));
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
    b = i(704796),
    f = i(375708),
    k = i(324973);
let x = (0, u.qT)({
    createPromise: () => Promise.resolve().then(i.bind(i, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, a.jsx)("div", { className: k.Lq }),
});
function V() {
    x.preload();
}
function y(e) {
    let {
            attachment: t,
            posterUrl: i,
            className: n,
            autoPlay: u,
            src: V,
            fillContainer: y = !1,
            minWidth: E = 500,
            maxWidth: T = 1 / 0,
            maxHeight: P = 1 / 0,
            channelId: N,
            messageId: B,
            showTextContent: R = T >= 250,
            showParticipants: j = !0,
            volume: F,
            autoMute: U,
            onVolumeChange: H,
            onMutedChange: L,
            onClick: Z,
            onContextMenu: G,
            onPlay: O,
            onSeekRequest: D,
            initialTimeSec: q,
            onEnded: J,
            allowFullScreen: K = !0,
        } = e,
        Q = t.width ?? 0,
        W = t.height ?? 0,
        Y = (0, r.bG)([g.A], () => g.A.getBasicChannel(N)?.guild_id, [N]),
        X = Q > 0 && W > 0 ? Q / W : 16 / 9;
    (X > 2 || X < 1) && (X = 16 / 9);
    let z = l.useRef(null);
    (0, _.A)(t.id, z, D);
    let $ = Math.min(Q > 0 ? Q : E, T),
        ee = $ / X;
    (ee > P && ($ = (ee = P) * X), $ < E && (ee = ($ = E) / X));
    let et = Math.round(Math.min($, T)),
        ei = Math.round(Math.min(ee, P)),
        ea = Q > 0 && W > 0 ? Math.min(et / Q, ei / W, 1) : 1,
        el = (0, p.AE)({ src: i, width: Math.round(Q * ea), height: Math.round(W * ea) }),
        [en, es] = l.useState(!1),
        [eo, er] = l.useState(!0),
        [ec, ed] = l.useState(!0),
        [eh, eu] = l.useState(0),
        ep = l.useRef(0),
        em = l.useCallback(
            (e, t) => {
                t !== c.KB.BUFFERING_RECOVERY && e === c.Q6.PLAYING && O?.(t !== c.KB.USER, 1e3 * ep.current, 1e3 * eh);
            },
            [eh, O],
        ),
        ev = l.useCallback((e, t) => {
            ((ep.current = e), Number.isFinite(t) && t > 0 && eu((e) => (e === t ? e : t)));
        }, []),
        eg = l.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        ew = (0, o.Lt)(t.flags ?? 0, I.sbO.HAS_TIMELINE_COMMENTS),
        eC = l.useMemo(() => {
            let e = [];
            return (
                eg &&
                    e.push({
                        id: "speaking-indicators",
                        iconComponent: d.r,
                        label: f.intl.string(b.default.hFWVZQ),
                        active: eo,
                        onClick: () => er((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    }),
                ew &&
                    e.push({
                        id: "timeline-comments",
                        iconComponent: h.ChatIcon,
                        label: f.intl.string(b.default.XfP4bO),
                        active: ec,
                        onClick: () => ed((e) => !e),
                        "data-testid": "clips-player-timeline-comments-toggle",
                    }),
                e
            );
        }, [eg, eo, ew, ec]),
        eS = (0, v._)({ location: M.Mu }).externalAnalyticsEnabled,
        e_ = l.useMemo(
            () =>
                eS
                    ? {
                          contentId: V.split("?")[0],
                          videoStreamType: m.u.isHlsUrl(V) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [eS, V, t.title],
        ),
        eA = l.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        [eM, eI] = l.useState(!1),
        eb = l.useCallback(
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
                    isFullScreen: en,
                    showParticipants: j,
                    showTextContent: R,
                    channelId: N,
                    messageId: B,
                    showSpeakingIndicators: eo,
                    clipUserIds: eA,
                    durationSeconds: eh,
                    playerState: i,
                    isControlBarExpanded: l,
                    videoRef: n,
                    isActive: s,
                    isVolumeExpanded: o,
                    showTimelineComments: ec,
                    isGridView: eM,
                    setIsGridView: eI,
                });
            },
            [t, Y, en, j, R, N, B, eo, eA, eh, ec, eM],
        ),
        ef = (0, S.T)(t.clip_events_timeline ?? []),
        ek = (0, A.A)({ attachment: t, channelId: N, guildId: Y, messageId: B }),
        ex = l.useCallback(
            (e) =>
                null == ek
                    ? null
                    : (0, a.jsx)(w.A, {
                          ...e,
                          original: ek.original,
                          subSources: ek.subSources,
                          isGridView: eM,
                          setIsGridView: eI,
                          suppressSourceSelection: eM,
                      }),
            [ek, eM],
        );
    return (0, a.jsx)("div", {
        className: s()(k.kL, { [k.HA]: y }, n),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: G,
        style: y ? void 0 : { width: et, height: ei },
        children: (0, a.jsx)(x, {
            src: V,
            downloadUrl: t.url,
            renderVideo: null != ek ? ex : void 0,
            downloadContentType: t.content_type,
            extraButtons: eC,
            poster: el,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: u,
            initialActive: !1,
            initialTimeSec: q,
            initialVolume: F,
            initialMuted: U,
            onVolumeChange: H,
            onMutedChange: L,
            onProgressUpdate: ev,
            orientation: "landscape",
            timelineIndicatorConfig: ef,
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: eb,
            parentTransitionState: null,
            onFullscreenChange: es,
            onClick: Z,
            onPlayerStateChange: em,
            onEnded: J,
            withVideoHalo: !eM,
            objectFit: y ? "cover" : void 0,
            muxContentMetadata: e_,
            hideFullScreenBtn: !K,
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
