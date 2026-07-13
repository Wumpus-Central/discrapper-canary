"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(876230),
    d = n(26137),
    c = n(268218),
    u = n(776231),
    _ = n(614269),
    E = n(829097),
    A = n(734057),
    h = n(102174),
    I = n(664708),
    f = n(215655),
    p = n(696016),
    T = n(16590),
    m = n(375708),
    g = n(581874);
let S = (0, c.Fe)({
    createPromise: () => Promise.resolve().then(n.bind(n, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: g.Lq }),
});
function N(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: a,
            autoPlay: c,
            src: N,
            fillContainer: C = !1,
            minWidth: O = 500,
            maxWidth: R = 1 / 0,
            maxHeight: L = 1 / 0,
            channelId: D,
            messageId: y,
            showTextContent: v = R >= 250,
            showParticipants: b = !0,
            volume: M,
            autoMute: P,
            onVolumeChange: U,
            onMutedChange: w,
            onClick: G,
            onContextMenu: x,
            onPlay: k,
            allowFullScreen: F = !0,
        } = e,
        V = t.width ?? 0,
        B = t.height ?? 0,
        H = (0, l.bG)([A.A], () => A.A.getBasicChannel(D)?.guild_id, [D]),
        j = V > 0 && B > 0 ? V / B : 16 / 9;
    (j > 2 || j < 1) && (j = 16 / 9);
    let W = r.useRef(null);
    (0, f.A)(t.id, W);
    let Y = Math.min(V > 0 ? V : O, R),
        K = Y / j;
    K > L && (Y = (K = L) * j), Y < O && (K = (Y = O) / j);
    let $ = Math.round(Math.min(Y, R)),
        z = Math.round(Math.min(K, L)),
        q = V > 0 && B > 0 ? Math.min($ / V, z / B, 1) : 1,
        Z = (0, u.AE)({ src: n, width: Math.round(V * q), height: Math.round(B * q) }),
        [X, Q] = r.useState(!1),
        [J, ee] = r.useState(!0),
        [et, en] = r.useState(0),
        ei = r.useRef(0),
        er = r.useCallback(
            (e, t) => {
                t !== o.KB.BUFFERING_RECOVERY && e === o.Q6.PLAYING && k?.(t !== o.KB.USER, 1e3 * ei.current, 1e3 * et);
            },
            [et, k],
        ),
        ea = r.useCallback((e, t) => {
            (ei.current = e), Number.isFinite(t) && t > 0 && en((e) => (e === t ? e : t));
        }, []),
        es = r.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        el = r.useMemo(() => {
            if (es)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: d.r,
                        label: m.intl.string(T.default.hFWVZQ),
                        active: J,
                        onClick: () => ee((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [es, J]),
        eo = (0, E._)({ location: p.Mu }).externalAnalyticsEnabled,
        ed = r.useMemo(
            () =>
                eo
                    ? {
                          contentId: N.split("?")[0],
                          videoStreamType: _.u.isHlsUrl(N) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [eo, N, t.title],
        ),
        ec = r.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        { enableScrubPreview: eu } = h.B.useConfig({ location: "ClipsPlayer" }),
        e_ = r.useCallback(
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
                    guildId: H,
                    isFullScreen: X,
                    showParticipants: b,
                    showTextContent: v,
                    channelId: D,
                    messageId: y,
                    showSpeakingIndicators: J,
                    clipUserIds: ec,
                    durationSeconds: et,
                    playerState: n,
                    isControlBarExpanded: r,
                    videoRef: a,
                    isActive: s,
                    isVolumeExpanded: l,
                });
            },
            [t, H, X, b, v, D, y, J, ec, et],
        );
    return (0, i.jsx)("div", {
        className: s()(g.kL, { [g.HA]: C }, a),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: x,
        style: C ? void 0 : { width: $, height: z },
        children: (0, i.jsx)(S, {
            src: N,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: el,
            poster: Z,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: c,
            initialActive: !1,
            initialVolume: M,
            initialMuted: P,
            onVolumeChange: U,
            onMutedChange: w,
            onProgressUpdate: ea,
            orientation: "landscape",
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: e_,
            parentTransitionState: null,
            onFullscreenChange: Q,
            onClick: G,
            onPlayerStateChange: er,
            withVideoHalo: !0,
            objectFit: C ? "cover" : void 0,
            muxContentMetadata: ed,
            hideFullScreenBtn: !F,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: W,
            scrubPreviewVttUrl: eu ? t.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: eu ? t.spritesheet_image_url : void 0,
        }),
    });
}
