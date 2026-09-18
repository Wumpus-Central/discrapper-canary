(i.d(t, { Cr: () => x, I1: () => k, Nj: () => M, UB: () => j, SX: () => b, R6: () => w }), i(938796));
var a = i(477900),
    n = i(582128),
    r = i(665260),
    l = i(876230),
    o = i(682176),
    s = i(713021);
let d = (0, i(945810).mj)({
    name: "2026-05-dvp-for-attachments",
    kind: "user",
    defaultConfig: { useDiscordVideoPlayer: !1 },
    variations: { 0: { useDiscordVideoPlayer: !1 }, 1: { useDiscordVideoPlayer: !0 } },
});
var u = i(174459),
    c = i(652215),
    m = i(644447),
    h = i(515718),
    p = i(587481),
    g = i(998218),
    _ = i(465856),
    f = i(85935),
    S = i(268218);
let A = n.lazy(() =>
        (0, S.sq)({
            createPromise: () => Promise.resolve().then(i.bind(i, 664111)),
            webpackId: 664111,
            name: "DiscordVideoPlayer",
        }),
    ),
    C = { width: "100%", height: "100%", objectFit: "contain" };
function v(e) {
    let { onPlay: t, autoplay: i, playable: r = !0, ...o } = e,
        s = n.useRef(!1),
        d = n.useRef(!1),
        u = n.useCallback(
            (e, i) => {
                s.current && ((s.current = !1), t?.(d.current, e, i));
            },
            [t],
        ),
        c = n.useCallback(
            (e, t) => {
                e === l.Q6.PLAYING
                    ? t !== l.KB.BUFFERING_RECOVERY && ((s.current = !0), (d.current = t !== l.KB.USER))
                    : u(0, 0);
            },
            [u],
        ),
        m = n.useCallback(
            (e, t) => {
                u(1e3 * e, Number.isFinite(t) ? 1e3 * t : 0);
            },
            [u],
        ),
        h = null != o.poster ? (0, a.jsx)("img", { src: o.poster, alt: "", style: C }) : null;
    return r
        ? (0, a.jsx)(n.Suspense, {
              fallback: h,
              children: (0, a.jsx)(A, { ...o, autoplay: i, onPlayerStateChange: c, onProgressUpdate: m }),
          })
        : h;
}
var y = i(838541);
i(516653);
var I = i(375708);
function x(e) {
    let t = e.item.originalItem;
    return (0, f.LL)({
        ...e,
        alt: t.description,
        src: (0, m.E)({ proxyURL: t.proxy_url, url: t.url }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, r.Lt)(t.flags ?? 0, c.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function k(e) {
    let t = e.item.originalItem,
        i = (0, r.Lt)(t.flags ?? 0, c.sbO.IS_CLIP),
        n = g.A.toURLSafe(t.proxy_url);
    return null == n
        ? null
        : (n.searchParams.append("format", "webp"), i)
          ? (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(o.A, {
                        attachment: t,
                        src: t.url,
                        posterUrl: n.toString(),
                        channelId: e.message.channel_id,
                        className: e.className,
                        embed: !0,
                        volume: (0, p.GD)(),
                        autoMute: (0, p.uj)(),
                        messageId: e.message.id,
                        fillContainer: !e.isSingleMosaicItem,
                        onClick: e.onClick ?? void 0,
                        onSeekRequest: e.onSeekRequest,
                        onContextMenu: e.onContextMenu ?? void 0,
                        maxWidth: e.maxWidth,
                        maxHeight: e.maxHeight ?? y.Rk,
                        showParticipants: e.isSingleMosaicItem,
                        allowFullScreen: e.allowFullScreen,
                        onPlay: e.onPlay ?? void 0,
                        onVolumeChange: p.oc,
                        onMutedChange: p.y5,
                    }),
                    e.renderAdjacentContent?.(),
                ],
            })
          : (e.naturalWidth <= 6016 && e.naturalHeight <= 3384) || (e.naturalWidth <= 3384 && e.naturalHeight <= 6016)
            ? (0, a.jsx)(E, { attachmentProps: e, posterUrl: n.toString() })
            : P(e, n.toString());
}
function P(e, t) {
    let i = e.item.originalItem;
    return (0, f.$o)({
        ...e,
        alt: i.description,
        poster: t,
        fileSize: i.size,
        fileName: (0, _.A)(i),
        src: i.url,
        placeholder: i.placeholder,
        placeholderVersion: i.placeholder_version,
        srcIsAnimated: (0, r.Lt)(i.flags ?? 0, c.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: i.id, filename: i.filename, size: i.size },
        },
    });
}
function E(e) {
    let { attachmentProps: t, posterUrl: i } = e,
        n = t.item.originalItem,
        { useDiscordVideoPlayer: r } = (function (e) {
            let { location: t } = e;
            return d.useConfig({ location: t });
        })({ location: "VideoComponentForMessageAttachment" });
    if (r) {
        let e,
            r,
            l,
            o = null != n.width && null != n.height && n.height > n.width ? "portrait" : "landscape",
            s = null != n.description && "" !== n.description ? n.description : I.intl.string(I.t.FlNoSV),
            { width: d, height: u } =
                ((e = t.maxWidth ?? y.k6),
                (r = t.maxHeight ?? y.Rk),
                (l = e >= 240 && r >= 180),
                (0, h.Uj)({
                    width: t.width ?? 0,
                    height: t.height ?? 0,
                    maxWidth: e,
                    maxHeight: r,
                    minWidth: 240 * !!l,
                    minHeight: 180 * !!l,
                }));
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: t.className ?? void 0,
                    style: { width: d, height: u, position: "relative", display: "flex" },
                    onContextMenu: t.onContextMenu ?? void 0,
                    children: [
                        (0, a.jsx)(v, {
                            crossOrigin: null,
                            alt: s,
                            src: n.url,
                            poster: i,
                            posterPlaceholder: n.placeholder,
                            posterPlaceholderVersion: n.placeholder_version,
                            initialActive: !1,
                            playable: t.playable,
                            autoplay: t.autoPlay,
                            initialVolume: (0, p.v1)(),
                            initialMuted: (0, p.uj)(),
                            getInitialVolume: p.v1,
                            getInitialMuted: p.uj,
                            orientation: o,
                            minWidth: 0,
                            minHeight: 0,
                            parentTransitionState: null,
                            onPlay: t.onPlay ?? void 0,
                            onVolumeChange: p.ls,
                            onMutedChange: p.y5,
                            onClick: t.onClick ?? void 0,
                            renderOverlay: t.renderOverlayContent ?? void 0,
                            hideFullScreenBtn: !(t.allowFullScreen ?? !0),
                            hideSkipButtons: !0,
                            compactTimeDisplay: !0,
                            autoHideVolumeSlider: !0,
                            autoSizeControlBar: !0,
                            withVideoHalo: !0,
                        }),
                        (0, a.jsx)(f._z, {
                            alt: n.description,
                            disableAltTextDisplay: t.disableAltTextDisplay,
                            hiddenSpoilers: t.hiddenSpoilers,
                            reducedSizeAltTextButton: t.reducedSizeAltTextButton,
                        }),
                    ],
                }),
                t.renderAdjacentContent?.(),
            ],
        });
    }
    return P(t, i);
}
function M(e) {
    let t = e.item.originalItem;
    return (0, f.gL)({ ...e, fileSize: t.size, fileName: (0, _.A)(t), src: t.url });
}
function b(e) {
    let { message: t, item: i } = e,
        a = i.originalItem,
        r = (0, s.dx)(s.k0.VOICE_MESSAGE, a.id),
        l = n.useCallback(
            (e, i, n) => {
                var r, l, o;
                ((r = t.id),
                    (l = a.duration_secs ?? null),
                    (o = t.author.id),
                    u.default.track(c.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
                        message_id: r,
                        total_duration_secs: l,
                        start_duration_secs: Math.min(l ?? i, i),
                        sender_user_id: o,
                    }));
            },
            [t, a.duration_secs],
        ),
        o = n.useCallback(
            (e, i) => {
                var n, r, l;
                ((n = t.id),
                    (r = a.duration_secs ?? null),
                    (l = t.author.id),
                    u.default.track(c.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
                        message_id: n,
                        total_duration_secs: r,
                        end_duration_secs: Math.min(r ?? e, e),
                        sender_user_id: l,
                        duration_listening_secs: i,
                    }));
            },
            [t, a.duration_secs],
        ),
        d = n.useCallback(
            (e) => {
                var i, a;
                ((i = t.id),
                    (a = e?.message ?? null),
                    u.default.track(c.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, { message_id: i, error_message: a }));
            },
            [t],
        );
    return (0, f.P$)({
        ...e,
        fileSize: a.size,
        fileName: (0, _.A)(a),
        src: a.url,
        durationSecs: a.duration_secs,
        waveform: a.waveform,
        onPlay: l,
        onPause: o,
        onError: d,
        playbackCacheKey: r,
    });
}
function w(e) {
    let t = e.item.originalItem;
    return (0, f._d)({ ...e, url: t.url, fileName: (0, _.A)(t), fileSize: t.size, contentType: t.content_type });
}
function j(e) {
    let t = e.item.originalItem;
    return (0, f.Dk)({ ...e, url: t.url, fileName: (0, _.A)(t), fileSize: t.size });
}
