(i.d(t, { Cr: () => x, I1: () => k, Nj: () => T, UB: () => P, SX: () => w, R6: () => z }), i(938796));
var n = i(477900),
    a = i(582128),
    l = i(448761),
    r = i(665260);
i(876230);
var o = i(682176),
    s = i(776231),
    d = i(713021),
    c = i(777501),
    u = i(174459),
    m = i(652215),
    h = i(644447),
    g = i(515718),
    p = i(587481),
    _ = i(998218),
    S = i(869938),
    A = i(465856),
    f = i(44788),
    I = i(447991),
    y = i(838541),
    C = i(516653),
    v = i(105292);
function x(e) {
    let t = e.item.originalItem;
    return (0, f.LL)({
        ...e,
        alt: t.description,
        src: (0, h.E)({ proxyURL: t.proxy_url, url: t.url }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, r.Lt)(t.flags ?? 0, m.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function k(e) {
    let t = e.item.originalItem,
        i = (0, r.Lt)(t.flags ?? 0, m.sbO.IS_CLIP),
        a = _.A.toURLSafe(t.proxy_url);
    return null == a
        ? null
        : (a.searchParams.append("format", "webp"), i)
          ? (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(o.A, {
                        attachment: t,
                        src: t.url,
                        posterUrl: a.toString(),
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
          : (0, C.T)(e.naturalWidth, e.naturalHeight)
            ? (0, n.jsx)(E, { attachmentProps: e, posterUrl: a.toString() })
            : M(e, a.toString());
}
function M(e, t) {
    let i = e.item.originalItem;
    return (0, f.$o)({
        ...e,
        showPlaybackSpeedControl: !0,
        alt: i.description,
        poster: t,
        fileSize: i.size,
        fileName: (0, A.A)(i),
        src: i.url,
        placeholder: i.placeholder,
        placeholderVersion: i.placeholder_version,
        srcIsAnimated: (0, r.Lt)(i.flags ?? 0, m.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: i.id, filename: i.filename, size: i.size },
        },
    });
}
function E(e) {
    let { attachmentProps: t, posterUrl: i } = e,
        a = t.item.originalItem,
        { useDiscordVideoPlayer: l } = (0, c.r)({ location: "VideoComponentForMessageAttachment" });
    if (l) {
        let e,
            l,
            r,
            o,
            d,
            c = null != a.width && null != a.height && a.height > a.width ? "portrait" : "landscape",
            u = !0 === t.isSingleMosaicItem,
            m = "portrait" === c,
            h = null != a.description && "" !== a.description ? a.description : v.intl.string(v.t.FlNoSV),
            { width: _, height: S } =
                ((e = t.maxWidth ?? y.k6),
                (l = t.maxHeight ?? y.Rk),
                (r = e >= 240 && l >= 180),
                (0, g.Uj)({
                    width: t.width ?? 0,
                    height: t.height ?? 0,
                    maxWidth: e,
                    maxHeight: l,
                    minWidth: 240 * !!r,
                    minHeight: 180 * !!r,
                })),
            A =
                ((o = t.width ?? 0),
                (d = t.height ?? 0),
                o <= 0 || d <= 0 || _ <= 0 || S <= 0
                    ? i
                    : (0, s.AE)({
                          src: i,
                          width: o,
                          height: d,
                          ratio: (0, g.U8)({ width: o, height: d, maxWidth: _, maxHeight: S }),
                      }));
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: t.className ?? void 0,
                    style: { width: _, height: S, position: "relative", display: "flex" },
                    onContextMenu: t.onContextMenu ?? void 0,
                    children: [
                        (0, n.jsx)(I.A, {
                            crossOrigin: null,
                            alt: h,
                            src: a.url,
                            poster: A,
                            fileSizeBytes: a.size,
                            mimeType: t.mimeType?.join("/"),
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
                            hideSkipButtons: !u,
                            compactTimeDisplay: !u || m,
                            autoHideVolumeSlider: !u || m,
                            floatingVolumeSlider: u && m,
                            hidePlaybackSpeedBtn: !!u && !!m && "inline",
                            autoSizeControlBar: !0,
                        }),
                        (0, n.jsx)(f._z, {
                            alt: a.description,
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
    return M(t, i);
}
function T(e) {
    let t = e.item.originalItem;
    return (0, f.gL)({ ...e, fileSize: t.size, fileName: (0, A.A)(t), src: t.url });
}
function w(e) {
    let { message: t, item: i } = e,
        n = i.originalItem,
        l = (0, d.dx)(d.k0.VOICE_MESSAGE, n.id),
        r = a.useCallback(
            (e, i, a) => {
                var l, r, o;
                ((l = t.id),
                    (r = n.duration_secs ?? null),
                    (o = t.author.id),
                    u.default.track(m.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
                        message_id: l,
                        total_duration_secs: r,
                        start_duration_secs: Math.min(r ?? i, i),
                        sender_user_id: o,
                    }));
            },
            [t, n.duration_secs],
        ),
        o = a.useCallback(
            (e, i) => {
                var a, l, r;
                ((a = t.id),
                    (l = n.duration_secs ?? null),
                    (r = t.author.id),
                    u.default.track(m.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
                        message_id: a,
                        total_duration_secs: l,
                        end_duration_secs: Math.min(l ?? e, e),
                        sender_user_id: r,
                        duration_listening_secs: i,
                    }));
            },
            [t, n.duration_secs],
        ),
        s = a.useCallback(
            (e) => {
                var i, n;
                ((i = t.id),
                    (n = e?.message ?? null),
                    u.default.track(m.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, { message_id: i, error_message: n }));
            },
            [t],
        );
    return (0, f.P$)({
        ...e,
        fileSize: n.size,
        fileName: (0, A.A)(n),
        src: n.url,
        durationSecs: n.duration_secs,
        waveform: n.waveform,
        onPlay: r,
        onPause: o,
        onError: s,
        playbackCacheKey: l,
    });
}
function z(e) {
    let t = e.item.originalItem,
        { message: i } = e;
    return (0, f._d)({
        ...e,
        url: t.url,
        fileName: (0, A.A)(t),
        fileSize: t.size,
        contentType: t.content_type,
        defaultExpanded:
            0 === (0, S.A)(i) &&
            1 === i.attachments.filter((e) => !(0, r.Lt)(e.flags ?? 0, m.sbO.IS_THUMBNAIL)).length &&
            0 === i.embeds.length &&
            0 === i.codedLinks.length &&
            0 === i.giftCodes.length &&
            null == i.sharedClientTheme &&
            (null == i.application || null == i.activityInstance) &&
            i.type !== l.l.INTERACTION_PREMIUM_UPSELL,
    });
}
function P(e) {
    let t = e.item.originalItem;
    return (0, f.Dk)({ ...e, url: t.url, fileName: (0, A.A)(t), fileSize: t.size });
}
