"use strict";
n.d(t, { A: () => L }), n(938796), n(321073);
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(665260),
    o = n(17928),
    d = n(876230),
    c = n(26137),
    u = n(534890),
    _ = n(268218),
    E = n(597098),
    A = n(614269),
    h = n(829097),
    I = n(734057),
    f = n(102174),
    p = n(664708),
    T = n(349897),
    m = n(215655),
    g = n(696016),
    S = n(652215),
    N = n(16590),
    C = n(375708),
    O = n(237610);
let R = (0, _.Fe)({
    createPromise: () => Promise.resolve().then(n.bind(n, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: O.Lq }),
});
function L(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: a,
            autoPlay: _,
            src: L,
            fillContainer: y = !1,
            minWidth: D = 500,
            maxWidth: v = 1 / 0,
            maxHeight: b = 1 / 0,
            channelId: M,
            messageId: P,
            showTextContent: U = v >= 250,
            showParticipants: w = !0,
            volume: G,
            autoMute: x,
            onVolumeChange: k,
            onMutedChange: F,
            onClick: V,
            onContextMenu: B,
            onPlay: H,
            allowFullScreen: j = !0,
        } = e,
        W = t.width ?? 0,
        Y = t.height ?? 0,
        K = (0, o.bG)([I.A], () => I.A.getBasicChannel(M)?.guild_id, [M]),
        $ = W > 0 && Y > 0 ? W / Y : 16 / 9;
    ($ > 2 || $ < 1) && ($ = 16 / 9);
    let z = r.useRef(null);
    (0, m.A)(t.id, z);
    let q = Math.min(W > 0 ? W : D, v),
        Z = q / $;
    Z > b && (q = (Z = b) * $), q < D && (Z = (q = D) / $);
    let X = Math.round(Math.min(q, v)),
        Q = Math.round(Math.min(Z, b)),
        J = W > 0 && Y > 0 ? Math.min(X / W, Q / Y, 1) : 1,
        ee = (0, E.AE)({ src: n, width: Math.round(W * J), height: Math.round(Y * J) }),
        [et, en] = r.useState(!1),
        [ei, er] = r.useState(!0),
        [ea, es] = r.useState(!0),
        [el, eo] = r.useState(0),
        ed = r.useRef(0),
        ec = r.useCallback(
            (e, t) => {
                t !== d.KB.BUFFERING_RECOVERY && e === d.Q6.PLAYING && H?.(t !== d.KB.USER, 1e3 * ed.current, 1e3 * el);
            },
            [el, H],
        ),
        eu = r.useCallback((e, t) => {
            (ed.current = e), Number.isFinite(t) && t > 0 && eo((e) => (e === t ? e : t));
        }, []),
        e_ = r.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        eE = (0, l.Lt)(t.flags ?? 0, S.sbO.HAS_TIMELINE_COMMENTS),
        eA = r.useMemo(() => {
            let e = [];
            return (
                e_ &&
                    e.push({
                        id: "speaking-indicators",
                        iconComponent: c.r,
                        label: C.intl.string(N.default.hFWVZQ),
                        active: ei,
                        onClick: () => er((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    }),
                eE &&
                    e.push({
                        id: "timeline-comments",
                        iconComponent: u.o,
                        label: C.intl.string(N.default.XfP4bO),
                        active: ea,
                        onClick: () => es((e) => !e),
                        "data-testid": "clips-player-timeline-comments-toggle",
                    }),
                e
            );
        }, [e_, ei, eE, ea]),
        eh = (0, h._)({ location: g.Mu }).externalAnalyticsEnabled,
        eI = r.useMemo(
            () =>
                eh
                    ? {
                          contentId: L.split("?")[0],
                          videoStreamType: A.u.isHlsUrl(L) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [eh, L, t.title],
        ),
        ef = r.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        { enableScrubPreview: ep } = f.B.useConfig({ location: "ClipsPlayer" }),
        eT = r.useCallback(
            (e) => {
                let {
                    playerState: n,
                    isControlBarExpanded: r,
                    videoRef: a,
                    isActive: s,
                    isVolumeExpanded: l,
                    controlBarAnimationSpring: o,
                } = e;
                return (0, i.jsx)(p.A, {
                    attachment: t,
                    controlBarAnimationSpring: o,
                    guildId: K,
                    isFullScreen: et,
                    showParticipants: w,
                    showTextContent: U,
                    channelId: M,
                    messageId: P,
                    showSpeakingIndicators: ei,
                    clipUserIds: ef,
                    durationSeconds: el,
                    playerState: n,
                    isControlBarExpanded: r,
                    videoRef: a,
                    isActive: s,
                    isVolumeExpanded: l,
                    showTimelineComments: ea,
                });
            },
            [t, K, et, w, U, M, P, ei, ef, el, ea],
        ),
        em = (0, T.T)(t.clip_events_timeline ?? []);
    return (0, i.jsx)("div", {
        className: s()(O.kL, { [O.HA]: y }, a),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: B,
        style: y ? void 0 : { width: X, height: Q },
        children: (0, i.jsx)(R, {
            src: L,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: eA,
            poster: ee,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: _,
            initialActive: !1,
            initialVolume: G,
            initialMuted: x,
            onVolumeChange: k,
            onMutedChange: F,
            onProgressUpdate: eu,
            orientation: "landscape",
            timelineIndicatorConfig: em,
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: eT,
            parentTransitionState: null,
            onFullscreenChange: en,
            onClick: V,
            onPlayerStateChange: ec,
            withVideoHalo: !0,
            objectFit: y ? "cover" : void 0,
            muxContentMetadata: eI,
            hideFullScreenBtn: !j,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: z,
            scrubPreviewVttUrl: ep ? t.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: ep ? t.spritesheet_image_url : void 0,
        }),
    });
}
