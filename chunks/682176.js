"use strict";
n.d(t, { A: () => C });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(876230),
    d = n(26137),
    c = n(268218),
    u = n(597098),
    _ = n(614269),
    E = n(829097),
    A = n(734057),
    h = n(102174),
    I = n(664708),
    f = n(349897),
    p = n(215655),
    T = n(696016),
    m = n(16590),
    g = n(375708),
    S = n(237610);
let N = (0, c.Fe)({
    createPromise: () => Promise.resolve().then(n.bind(n, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: S.Lq }),
});
function C(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: a,
            autoPlay: c,
            src: C,
            fillContainer: O = !1,
            minWidth: R = 500,
            maxWidth: L = 1 / 0,
            maxHeight: y = 1 / 0,
            channelId: D,
            messageId: v,
            showTextContent: b = L >= 250,
            showParticipants: M = !0,
            volume: P,
            autoMute: U,
            onVolumeChange: w,
            onMutedChange: G,
            onClick: x,
            onContextMenu: k,
            onPlay: F,
            allowFullScreen: V = !0,
        } = e,
        B = t.width ?? 0,
        H = t.height ?? 0,
        j = (0, l.bG)([A.A], () => A.A.getBasicChannel(D)?.guild_id, [D]),
        W = B > 0 && H > 0 ? B / H : 16 / 9;
    (W > 2 || W < 1) && (W = 16 / 9);
    let Y = r.useRef(null);
    (0, p.A)(t.id, Y);
    let K = Math.min(B > 0 ? B : R, L),
        $ = K / W;
    $ > y && (K = ($ = y) * W), K < R && ($ = (K = R) / W);
    let z = Math.round(Math.min(K, L)),
        q = Math.round(Math.min($, y)),
        Z = B > 0 && H > 0 ? Math.min(z / B, q / H, 1) : 1,
        X = (0, u.AE)({ src: n, width: Math.round(B * Z), height: Math.round(H * Z) }),
        [Q, J] = r.useState(!1),
        [ee, et] = r.useState(!0),
        [en, ei] = r.useState(0),
        er = r.useRef(0),
        ea = r.useCallback(
            (e, t) => {
                t !== o.KB.BUFFERING_RECOVERY && e === o.Q6.PLAYING && F?.(t !== o.KB.USER, 1e3 * er.current, 1e3 * en);
            },
            [en, F],
        ),
        es = r.useCallback((e, t) => {
            (er.current = e), Number.isFinite(t) && t > 0 && ei((e) => (e === t ? e : t));
        }, []),
        el = r.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        eo = r.useMemo(() => {
            if (el)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: d.r,
                        label: g.intl.string(m.default.hFWVZQ),
                        active: ee,
                        onClick: () => et((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [el, ee]),
        ed = (0, E._)({ location: T.Mu }).externalAnalyticsEnabled,
        ec = r.useMemo(
            () =>
                ed
                    ? {
                          contentId: C.split("?")[0],
                          videoStreamType: _.u.isHlsUrl(C) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [ed, C, t.title],
        ),
        eu = r.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        { enableScrubPreview: e_ } = h.B.useConfig({ location: "ClipsPlayer" }),
        eE = r.useCallback(
            (e) => {
                let {
                    playerState: n,
                    isControlBarExpanded: r,
                    videoRef: a,
                    isActive: s,
                    isVolumeExpanded: l,
                    controlBarAnimationSpring: o,
                } = e;
                return (0, i.jsx)(I.A, {
                    attachment: t,
                    controlBarAnimationSpring: o,
                    guildId: j,
                    isFullScreen: Q,
                    showParticipants: M,
                    showTextContent: b,
                    channelId: D,
                    messageId: v,
                    showSpeakingIndicators: ee,
                    clipUserIds: eu,
                    durationSeconds: en,
                    playerState: n,
                    isControlBarExpanded: r,
                    videoRef: a,
                    isActive: s,
                    isVolumeExpanded: l,
                });
            },
            [t, j, Q, M, b, D, v, ee, eu, en],
        ),
        eA = (0, f.T)(t.clip_events_timeline ?? []);
    return (0, i.jsx)("div", {
        className: s()(S.kL, { [S.HA]: O }, a),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: k,
        style: O ? void 0 : { width: z, height: q },
        children: (0, i.jsx)(N, {
            src: C,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: eo,
            poster: X,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: c,
            initialActive: !1,
            initialVolume: P,
            initialMuted: U,
            onVolumeChange: w,
            onMutedChange: G,
            onProgressUpdate: es,
            orientation: "landscape",
            timelineIndicatorConfig: eA,
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: eE,
            parentTransitionState: null,
            onFullscreenChange: J,
            onClick: x,
            onPlayerStateChange: ea,
            withVideoHalo: !0,
            objectFit: O ? "cover" : void 0,
            muxContentMetadata: ec,
            hideFullScreenBtn: !V,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: Y,
            scrubPreviewVttUrl: e_ ? t.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: e_ ? t.spritesheet_image_url : void 0,
        }),
    });
}
