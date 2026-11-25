(i.d(t, { Nj: () => E, UB: () => P, Cr: () => C, R6: () => O, I1: () => M, SX: () => z }), i(938796));
var a = i(477900),
    n = i(582128),
    l = i(665260),
    r = i(682176),
    o = i(776231),
    s = i(713021),
    d = i(925056),
    u = i(889767),
    c = i(608628),
    m = i(777501),
    h = i(129230),
    p = i(652215),
    g = i(644447),
    _ = i(515718),
    A = i(587481),
    S = i(998218),
    f = i(465856);
i(876230);
var x = i(383055),
    y = i(447991);
i(838541);
var I = i(516653),
    v = i(792996);
function C(e) {
    let t = e.item.originalItem;
    return (0, x.LL)({
        ...e,
        alt: t.description,
        src: (0, g.E)({ proxyURL: t.proxy_url, url: t.url }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, l.Lt)(t.flags ?? 0, p.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function M(e) {
    let t = e.item.originalItem,
        i = (0, l.Lt)(t.flags ?? 0, p.sbO.IS_CLIP),
        n = S.A.toURLSafe(t.proxy_url);
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
                        volume: (0, A.GD)(),
                        autoMute: (0, A.uj)(),
                        messageId: e.message.id,
                        fillContainer: !e.isSingleMosaicItem,
                        onClick: e.onClick ?? void 0,
                        onSeekRequest: e.onSeekRequest,
                        onContextMenu: e.onContextMenu ?? void 0,
                        maxWidth: e.maxWidth,
                        maxHeight: e.maxHeight ?? 350,
                        showParticipants: e.isSingleMosaicItem,
                        allowFullScreen: e.allowFullScreen,
                        onPlay: e.onPlay ?? void 0,
                        onVolumeChange: A.oc,
                        onMutedChange: A.y5,
                    }),
                    e.renderAdjacentContent?.(),
                ],
            })
          : (0, I.T)(e.naturalWidth, e.naturalHeight)
            ? (0, a.jsx)(T, { attachmentProps: e, posterUrl: n.toString() })
            : w(e, n.toString());
}
function w(e, t) {
    let { onOpenInMediaViewer: i, ...a } = e,
        n = a.item.originalItem;
    return (0, x.$o)({
        ...a,
        showPlaybackSpeedControl: !0,
        alt: n.description,
        poster: t,
        fileSize: n.size,
        fileName: (0, f.A)(n),
        src: n.url,
        placeholder: n.placeholder,
        placeholderVersion: n.placeholder_version,
        srcIsAnimated: (0, l.Lt)(n.flags ?? 0, p.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: a.message,
            identifier: { type: "attachment", attachmentId: n.id, filename: n.filename, size: n.size },
        },
    });
}
function T(e) {
    let { attachmentProps: t, posterUrl: i } = e,
        n = t.item.originalItem,
        { useDiscordVideoPlayer: l } = (0, m.r)({ location: "VideoComponentForMessageAttachment" });
    if (l) {
        let e,
            l,
            r = null != n.width && null != n.height && n.height > n.width ? "portrait" : "landscape",
            s = !0 === t.isSingleMosaicItem,
            m = null != n.description && "" !== n.description ? n.description : v.intl.string(v.t.FlNoSV),
            { width: h, height: p } = (function (e) {
                let { width: t, height: i, maxWidth: a, maxHeight: n, fillTile: l } = e;
                if (l) return { width: a, height: n };
                let r = a >= 240 && n >= 180;
                return (0, _.Uj)({
                    width: t,
                    height: i,
                    maxWidth: a,
                    maxHeight: n,
                    minWidth: 240 * !!r,
                    minHeight: 180 * !!r,
                });
            })({
                width: t.width ?? 0,
                height: t.height ?? 0,
                maxWidth: t.maxWidth ?? 550,
                maxHeight: t.maxHeight ?? 350,
                fillTile: !s,
            }),
            g =
                ((e = t.width ?? 0),
                (l = t.height ?? 0),
                e <= 0 || l <= 0 || h <= 0 || p <= 0
                    ? i
                    : (0, o.AE)({
                          src: i,
                          width: e,
                          height: l,
                          ratio: (t.isSingleMosaicItem ? _.U8 : _.V)({
                              width: e,
                              height: l,
                              maxWidth: h,
                              maxHeight: p,
                          }),
                          maxWidth: h,
                          maxHeight: p,
                      })),
            S = (0, x.Ir)({
                alt: n.description,
                disableAltTextDisplay: t.disableAltTextDisplay,
                hiddenSpoilers: t.hiddenSpoilers,
            })
                ? `${4 + (!0 === t.reducedSizeAltTextButton ? 18 : 32) + 4}px`
                : void 0;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: t.className ?? void 0,
                    style: {
                        width: s ? h : "100%",
                        maxWidth: "100%",
                        minWidth: 0,
                        minHeight: 0,
                        height: s ? "auto" : "100%",
                        maxHeight: s ? void 0 : "inherit",
                        aspectRatio: `${h} / ${p}`,
                        position: "relative",
                        display: "flex",
                        "--custom-top-start-overlay-top": S,
                    },
                    onContextMenu: t.onContextMenu ?? void 0,
                    children: [
                        (0, a.jsx)(y.A, {
                            attachmentLayout: s ? "single" : "tile",
                            crossOrigin: null,
                            alt: m,
                            src: n.url,
                            poster: g,
                            fileSizeBytes: n.size,
                            mimeType: t.mimeType?.join("/"),
                            initialActive: !1,
                            preloadOnHover: !0,
                            playable: t.playable,
                            autoplay: t.autoPlay,
                            initialVolume: (0, A.v1)(),
                            initialMuted: (0, A.uj)(),
                            getInitialVolume: A.v1,
                            getInitialMuted: A.uj,
                            orientation: r,
                            parentTransitionState: null,
                            onPlay: t.onPlay ?? void 0,
                            onVolumeChange: A.ls,
                            onMutedChange: A.y5,
                            onOpenInMediaViewer: t.onOpenInMediaViewer,
                            renderOverlay: t.renderOverlayContent ?? void 0,
                            hideFullScreenBtn: !(t.allowFullScreen ?? !0),
                            renderTopStartOverlay: (0, c.PR)((0, u.o)(n, t.message), d.u.MOSAIC),
                        }),
                        (0, a.jsx)(x._z, {
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
    return w(t, i);
}
function E(e) {
    let t = e.item.originalItem;
    return (0, x.gL)({ ...e, fileSize: t.size, fileName: (0, f.A)(t), src: t.url });
}
function z(e) {
    let { message: t, item: i } = e,
        a = i.originalItem,
        l = (0, s.dx)(s.k0.VOICE_MESSAGE, a.id),
        r = n.useCallback(
            (e, i, n) => {
                var l, r, o;
                ((l = t.id),
                    (r = a.duration_secs ?? null),
                    (o = t.author.id),
                    h.default.track(p.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
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
                    h.default.track(p.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
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
                    h.default.track(p.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, { message_id: i, error_message: a }));
            },
            [t],
        );
    return (0, x.P$)({
        ...e,
        fileSize: a.size,
        fileName: (0, f.A)(a),
        src: a.url,
        durationSecs: a.duration_secs,
        waveform: a.waveform,
        onPlay: r,
        onPause: o,
        onError: d,
        playbackCacheKey: l,
    });
}
function O(e) {
    let t = e.item.originalItem;
    return (0, x._d)({ ...e, url: t.url, fileName: (0, f.A)(t), fileSize: t.size, contentType: t.content_type });
}
function P(e) {
    let t = e.item.originalItem;
    return (0, x.Dk)({ ...e, url: t.url, fileName: (0, f.A)(t), fileSize: t.size });
}
