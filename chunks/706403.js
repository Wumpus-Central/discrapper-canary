(i.d(t, { Cr: () => y, I1: () => I, Nj: () => k, UB: () => z, SX: () => E, R6: () => w }), i(938796));
var a = i(477900),
    n = i(582128),
    l = i(665260);
i(876230);
var r = i(682176),
    o = i(776231),
    s = i(713021),
    d = i(777501),
    c = i(174459),
    u = i(652215),
    m = i(644447),
    h = i(515718),
    p = i(587481),
    g = i(998218),
    _ = i(465856),
    A = i(684519),
    S = i(447991),
    f = i(838541),
    v = i(516653),
    C = i(105292);
function y(e) {
    let t = e.item.originalItem;
    return (0, A.LL)({
        ...e,
        alt: t.description,
        src: (0, m.E)({ proxyURL: t.proxy_url, url: t.url }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, l.Lt)(t.flags ?? 0, u.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function I(e) {
    let t = e.item.originalItem,
        i = (0, l.Lt)(t.flags ?? 0, u.sbO.IS_CLIP),
        n = g.A.toURLSafe(t.proxy_url);
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
                        volume: (0, p.GD)(),
                        autoMute: (0, p.uj)(),
                        messageId: e.message.id,
                        fillContainer: !e.isSingleMosaicItem,
                        onClick: e.onClick ?? void 0,
                        onSeekRequest: e.onSeekRequest,
                        onContextMenu: e.onContextMenu ?? void 0,
                        maxWidth: e.maxWidth,
                        maxHeight: e.maxHeight ?? f.Rk,
                        showParticipants: e.isSingleMosaicItem,
                        allowFullScreen: e.allowFullScreen,
                        onPlay: e.onPlay ?? void 0,
                        onVolumeChange: p.oc,
                        onMutedChange: p.y5,
                    }),
                    e.renderAdjacentContent?.(),
                ],
            })
          : (0, v.T)(e.naturalWidth, e.naturalHeight)
            ? (0, a.jsx)(M, { attachmentProps: e, posterUrl: n.toString() })
            : x(e, n.toString());
}
function x(e, t) {
    let i = e.item.originalItem;
    return (0, A.$o)({
        ...e,
        alt: i.description,
        poster: t,
        fileSize: i.size,
        fileName: (0, _.A)(i),
        src: i.url,
        placeholder: i.placeholder,
        placeholderVersion: i.placeholder_version,
        srcIsAnimated: (0, l.Lt)(i.flags ?? 0, u.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: i.id, filename: i.filename, size: i.size },
        },
    });
}
function M(e) {
    let { attachmentProps: t, posterUrl: i } = e,
        n = t.item.originalItem,
        { useDiscordVideoPlayer: l } = (0, d.r)({ location: "VideoComponentForMessageAttachment" });
    if (l) {
        let e,
            l,
            r,
            s,
            d,
            c = null != n.width && null != n.height && n.height > n.width ? "portrait" : "landscape",
            u = null != n.description && "" !== n.description ? n.description : C.intl.string(C.t.FlNoSV),
            { width: m, height: g } =
                ((e = t.maxWidth ?? f.k6),
                (l = t.maxHeight ?? f.Rk),
                (r = e >= 240 && l >= 180),
                (0, h.Uj)({
                    width: t.width ?? 0,
                    height: t.height ?? 0,
                    maxWidth: e,
                    maxHeight: l,
                    minWidth: 240 * !!r,
                    minHeight: 180 * !!r,
                })),
            _ =
                ((s = t.width ?? 0),
                (d = t.height ?? 0),
                s <= 0 || d <= 0 || m <= 0 || g <= 0
                    ? i
                    : (0, o.AE)({
                          src: i,
                          width: s,
                          height: d,
                          ratio: (0, h.U8)({ width: s, height: d, maxWidth: m, maxHeight: g }),
                      }));
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: t.className ?? void 0,
                    style: { width: m, height: g, position: "relative", display: "flex" },
                    onContextMenu: t.onContextMenu ?? void 0,
                    children: [
                        (0, a.jsx)(S.A, {
                            crossOrigin: null,
                            alt: u,
                            src: n.url,
                            poster: _,
                            fileSizeBytes: n.size,
                            posterPlaceholder: n.placeholder,
                            posterPlaceholderVersion: n.placeholder_version,
                            initialActive: !1,
                            playable: t.playable,
                            autoplay: t.autoPlay,
                            initialVolume: (0, p.v1)(),
                            initialMuted: (0, p.uj)(),
                            getInitialVolume: p.v1,
                            getInitialMuted: p.uj,
                            orientation: c,
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
                        }),
                        (0, a.jsx)(A._z, {
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
    return x(t, i);
}
function k(e) {
    let t = e.item.originalItem;
    return (0, A.gL)({ ...e, fileSize: t.size, fileName: (0, _.A)(t), src: t.url });
}
function E(e) {
    let { message: t, item: i } = e,
        a = i.originalItem,
        l = (0, s.dx)(s.k0.VOICE_MESSAGE, a.id),
        r = n.useCallback(
            (e, i, n) => {
                var l, r, o;
                ((l = t.id),
                    (r = a.duration_secs ?? null),
                    (o = t.author.id),
                    c.default.track(u.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
                        message_id: l,
                        total_duration_secs: r,
                        start_duration_secs: Math.min(r ?? i, i),
                        sender_user_id: o,
                    }));
            },
            [t, a.duration_secs],
        ),
        o = n.useCallback(
            (e, i) => {
                var n, l, r;
                ((n = t.id),
                    (l = a.duration_secs ?? null),
                    (r = t.author.id),
                    c.default.track(u.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
                        message_id: n,
                        total_duration_secs: l,
                        end_duration_secs: Math.min(l ?? e, e),
                        sender_user_id: r,
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
                    c.default.track(u.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, { message_id: i, error_message: a }));
            },
            [t],
        );
    return (0, A.P$)({
        ...e,
        fileSize: a.size,
        fileName: (0, _.A)(a),
        src: a.url,
        durationSecs: a.duration_secs,
        waveform: a.waveform,
        onPlay: r,
        onPause: o,
        onError: d,
        playbackCacheKey: l,
    });
}
function w(e) {
    let t = e.item.originalItem;
    return (0, A._d)({ ...e, url: t.url, fileName: (0, _.A)(t), fileSize: t.size, contentType: t.content_type });
}
function z(e) {
    let t = e.item.originalItem;
    return (0, A.Dk)({ ...e, url: t.url, fileName: (0, _.A)(t), fileSize: t.size });
}
