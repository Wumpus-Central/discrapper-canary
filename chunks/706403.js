(i.d(t, { Cr: () => C, I1: () => I, Nj: () => M, UB: () => E, SX: () => k, R6: () => w }), i(938796));
var a = i(477900),
    n = i(582128),
    l = i(665260);
i(876230);
var r = i(682176),
    o = i(713021),
    s = i(777501),
    d = i(174459),
    c = i(652215),
    u = i(644447),
    m = i(515718),
    h = i(587481),
    p = i(998218),
    g = i(465856),
    _ = i(85935),
    A = i(447991),
    S = i(838541),
    f = i(516653),
    v = i(375708);
function C(e) {
    let t = e.item.originalItem;
    return (0, _.LL)({
        ...e,
        alt: t.description,
        src: (0, u.E)({ proxyURL: t.proxy_url, url: t.url }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, l.Lt)(t.flags ?? 0, c.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function I(e) {
    let t = e.item.originalItem,
        i = (0, l.Lt)(t.flags ?? 0, c.sbO.IS_CLIP),
        n = p.A.toURLSafe(t.proxy_url);
    return null == n
        ? null
        : (n.searchParams.append("format", "webp"), i)
          ? (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(r.A, {
                        attachment: t,
                        src: t.url,
                        posterUrl: n.toString(),
                        channelId: e.message.channel_id,
                        className: e.className,
                        embed: !0,
                        volume: (0, h.GD)(),
                        autoMute: (0, h.uj)(),
                        messageId: e.message.id,
                        fillContainer: !e.isSingleMosaicItem,
                        onClick: e.onClick ?? void 0,
                        onSeekRequest: e.onSeekRequest,
                        onContextMenu: e.onContextMenu ?? void 0,
                        maxWidth: e.maxWidth,
                        maxHeight: e.maxHeight ?? S.Rk,
                        showParticipants: e.isSingleMosaicItem,
                        allowFullScreen: e.allowFullScreen,
                        onPlay: e.onPlay ?? void 0,
                        onVolumeChange: h.oc,
                        onMutedChange: h.y5,
                    }),
                    e.renderAdjacentContent?.(),
                ],
            })
          : (0, f.T)(e.naturalWidth, e.naturalHeight)
            ? (0, a.jsx)(x, { attachmentProps: e, posterUrl: n.toString() })
            : y(e, n.toString());
}
function y(e, t) {
    let i = e.item.originalItem;
    return (0, _.$o)({
        ...e,
        alt: i.description,
        poster: t,
        fileSize: i.size,
        fileName: (0, g.A)(i),
        src: i.url,
        placeholder: i.placeholder,
        placeholderVersion: i.placeholder_version,
        srcIsAnimated: (0, l.Lt)(i.flags ?? 0, c.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: i.id, filename: i.filename, size: i.size },
        },
    });
}
function x(e) {
    let { attachmentProps: t, posterUrl: i } = e,
        n = t.item.originalItem,
        { useDiscordVideoPlayer: l } = (0, s.r)({ location: "VideoComponentForMessageAttachment" });
    if (l) {
        let e,
            l,
            r,
            o = null != n.width && null != n.height && n.height > n.width ? "portrait" : "landscape",
            s = null != n.description && "" !== n.description ? n.description : v.intl.string(v.t.FlNoSV),
            { width: d, height: c } =
                ((e = t.maxWidth ?? S.k6),
                (l = t.maxHeight ?? S.Rk),
                (r = e >= 240 && l >= 180),
                (0, m.Uj)({
                    width: t.width ?? 0,
                    height: t.height ?? 0,
                    maxWidth: e,
                    maxHeight: l,
                    minWidth: 240 * !!r,
                    minHeight: 180 * !!r,
                }));
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: t.className ?? void 0,
                    style: { width: d, height: c, position: "relative", display: "flex" },
                    onContextMenu: t.onContextMenu ?? void 0,
                    children: [
                        (0, a.jsx)(A.A, {
                            crossOrigin: null,
                            alt: s,
                            src: n.url,
                            poster: i,
                            posterPlaceholder: n.placeholder,
                            posterPlaceholderVersion: n.placeholder_version,
                            initialActive: !1,
                            playable: t.playable,
                            autoplay: t.autoPlay,
                            initialVolume: (0, h.v1)(),
                            initialMuted: (0, h.uj)(),
                            getInitialVolume: h.v1,
                            getInitialMuted: h.uj,
                            orientation: o,
                            minWidth: 0,
                            minHeight: 0,
                            parentTransitionState: null,
                            onPlay: t.onPlay ?? void 0,
                            onVolumeChange: h.ls,
                            onMutedChange: h.y5,
                            onClick: t.onClick ?? void 0,
                            renderOverlay: t.renderOverlayContent ?? void 0,
                            hideFullScreenBtn: !(t.allowFullScreen ?? !0),
                            hideSkipButtons: !0,
                            compactTimeDisplay: !0,
                            autoHideVolumeSlider: !0,
                            autoSizeControlBar: !0,
                            withVideoHalo: !0,
                        }),
                        (0, a.jsx)(_._z, {
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
    return y(t, i);
}
function M(e) {
    let t = e.item.originalItem;
    return (0, _.gL)({ ...e, fileSize: t.size, fileName: (0, g.A)(t), src: t.url });
}
function k(e) {
    let { message: t, item: i } = e,
        a = i.originalItem,
        l = (0, o.dx)(o.k0.VOICE_MESSAGE, a.id),
        r = n.useCallback(
            (e, i, n) => {
                var l, r, o;
                ((l = t.id),
                    (r = a.duration_secs ?? null),
                    (o = t.author.id),
                    d.default.track(c.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
                        message_id: l,
                        total_duration_secs: r,
                        start_duration_secs: Math.min(r ?? i, i),
                        sender_user_id: o,
                    }));
            },
            [t, a.duration_secs],
        ),
        s = n.useCallback(
            (e, i) => {
                var n, l, r;
                ((n = t.id),
                    (l = a.duration_secs ?? null),
                    (r = t.author.id),
                    d.default.track(c.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
                        message_id: n,
                        total_duration_secs: l,
                        end_duration_secs: Math.min(l ?? e, e),
                        sender_user_id: r,
                        duration_listening_secs: i,
                    }));
            },
            [t, a.duration_secs],
        ),
        u = n.useCallback(
            (e) => {
                var i, a;
                ((i = t.id),
                    (a = e?.message ?? null),
                    d.default.track(c.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, { message_id: i, error_message: a }));
            },
            [t],
        );
    return (0, _.P$)({
        ...e,
        fileSize: a.size,
        fileName: (0, g.A)(a),
        src: a.url,
        durationSecs: a.duration_secs,
        waveform: a.waveform,
        onPlay: r,
        onPause: s,
        onError: u,
        playbackCacheKey: l,
    });
}
function w(e) {
    let t = e.item.originalItem;
    return (0, _._d)({ ...e, url: t.url, fileName: (0, g.A)(t), fileSize: t.size, contentType: t.content_type });
}
function E(e) {
    let t = e.item.originalItem;
    return (0, _.Dk)({ ...e, url: t.url, fileName: (0, g.A)(t), fileSize: t.size });
}
