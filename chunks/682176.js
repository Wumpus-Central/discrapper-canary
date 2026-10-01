(i.d(t, { A: () => y, v: () => V }), i(938796), i(321073));
var n = i(477900),
    a = i(582128),
    l = i(503698),
    s = i.n(l),
    o = i(665260),
    r = i(17928),
    d = i(876230),
    c = i(26137),
    u = i(534890),
    h = i(268218),
    p = i(776231),
    m = i(614269),
    g = i(829097),
    v = i(734057),
    w = i(53774),
    C = i(560149),
    M = i(349897),
    S = i(215655),
    _ = i(802976),
    A = i(696016),
    I = i(652215),
    b = i(268378),
    f = i(375708),
    k = i(324973);
let x = (0, h.qT)({
    createPromise: () => Promise.all([i.e("216870"), i.e("643612"), i.e("334127")]).then(i.bind(i, 266546)),
    webpackId: 266546,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, n.jsx)("div", { className: k.Lq }),
});
function V() {
    x.preload();
}
function y(e) {
    let {
            attachment: t,
            posterUrl: i,
            className: l,
            autoPlay: h,
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
        Y = (0, r.bG)([v.A], () => v.A.getBasicChannel(N)?.guild_id, [N]),
        X = Q > 0 && W > 0 ? Q / W : 16 / 9;
    (X > 2 || X < 1) && (X = 16 / 9);
    let z = a.useRef(null);
    (0, S.A)(t.id, z, D);
    let $ = Math.min(Q > 0 ? Q : E, T),
        ee = $ / X;
    (ee > P && ($ = (ee = P) * X), $ < E && (ee = ($ = E) / X));
    let et = Math.round(Math.min($, T)),
        ei = Math.round(Math.min(ee, P)),
        en = Q > 0 && W > 0 ? Math.min(et / Q, ei / W, 1) : 1,
        ea = (0, p.AE)({ src: i, width: Math.round(Q * en), height: Math.round(W * en) }),
        [el, es] = a.useState(!1),
        [eo, er] = a.useState(!0),
        [ed, ec] = a.useState(!0),
        [eu, eh] = a.useState(0),
        ep = a.useRef(0),
        em = a.useCallback(
            (e, t) => {
                t !== d.KB.BUFFERING_RECOVERY && e === d.Q6.PLAYING && O?.(t !== d.KB.USER, 1e3 * ep.current, 1e3 * eu);
            },
            [eu, O],
        ),
        eg = a.useCallback((e, t) => {
            ((ep.current = e), Number.isFinite(t) && t > 0 && eh((e) => (e === t ? e : t)));
        }, []),
        ev = a.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        ew = (0, o.Lt)(t.flags ?? 0, I.sbO.HAS_TIMELINE_COMMENTS),
        eC = a.useMemo(() => {
            let e = [];
            return (
                ev &&
                    e.push({
                        id: "speaking-indicators",
                        iconComponent: c.r,
                        label: f.intl.string(b.default.hFWVZQ),
                        active: eo,
                        onClick: () => er((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    }),
                ew &&
                    e.push({
                        id: "timeline-comments",
                        iconComponent: u.ChatIcon,
                        label: f.intl.string(b.default.XfP4bO),
                        active: ed,
                        onClick: () => ec((e) => !e),
                        "data-testid": "clips-player-timeline-comments-toggle",
                    }),
                e
            );
        }, [ev, eo, ew, ed]),
        eM = (0, g._)({ location: A.Mu }).externalAnalyticsEnabled,
        eS = a.useMemo(
            () =>
                eM
                    ? {
                          contentId: V.split("?")[0],
                          videoStreamType: m.u.isHlsUrl(V) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [eM, V, t.title],
        ),
        e_ = a.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        [eA, eI] = a.useState(!1),
        eb = a.useCallback(
            (e) => {
                let {
                    playerState: i,
                    isControlBarExpanded: a,
                    videoRef: l,
                    isActive: s,
                    isVolumeExpanded: o,
                    controlBarAnimationSpring: r,
                } = e;
                return (0, n.jsx)(C.A, {
                    attachment: t,
                    controlBarAnimationSpring: r,
                    guildId: Y,
                    isFullScreen: el,
                    showParticipants: j,
                    showTextContent: R,
                    channelId: N,
                    messageId: B,
                    showSpeakingIndicators: eo,
                    clipUserIds: e_,
                    durationSeconds: eu,
                    playerState: i,
                    isControlBarExpanded: a,
                    videoRef: l,
                    isActive: s,
                    isVolumeExpanded: o,
                    showTimelineComments: ed,
                    isGridView: eA,
                    setIsGridView: eI,
                });
            },
            [t, Y, el, j, R, N, B, eo, e_, eu, ed, eA],
        ),
        ef = (0, M.T)(t.clip_events_timeline ?? []),
        ek = (0, _.A)({ attachment: t, channelId: N, guildId: Y, messageId: B }),
        ex = a.useCallback(
            (e) =>
                null == ek
                    ? null
                    : (0, n.jsx)(w.A, {
                          ...e,
                          original: ek.original,
                          subSources: ek.subSources,
                          isGridView: eA,
                          setIsGridView: eI,
                          suppressSourceSelection: eA,
                      }),
            [ek, eA],
        );
    return (0, n.jsx)("div", {
        className: s()(k.kL, { [k.HA]: y }, l),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: G,
        style: y ? void 0 : { width: et, height: ei },
        children: (0, n.jsx)(x, {
            src: V,
            downloadUrl: t.url,
            renderVideo: null != ek ? ex : void 0,
            downloadContentType: t.content_type,
            extraButtons: eC,
            poster: ea,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: h,
            initialActive: !1,
            initialTimeSec: q,
            initialVolume: F,
            initialMuted: U,
            onVolumeChange: H,
            onMutedChange: L,
            onProgressUpdate: eg,
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
            withVideoHalo: !eA,
            objectFit: y ? "cover" : void 0,
            muxContentMetadata: eS,
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
