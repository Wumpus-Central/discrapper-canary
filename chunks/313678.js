(i.d(t, { Cr: () => T, I1: () => E, Nj: () => P, UB: () => N, SX: () => b, R6: () => L }), i(938796));
var n = i(477900),
    a = i(582128),
    l = i(448761),
    r = i(665260);
i(876230);
var o = i(682176),
    s = i(776231),
    d = i(713021),
    c = i(925056),
    u = i(678917),
    m = i(534531),
    h = i(777501),
    p = i(174459),
    g = i(652215),
    S = i(644447),
    A = i(515718),
    _ = i(587481),
    f = i(998218),
    y = i(869938),
    I = i(465856),
    C = i(44788),
    v = i(447991),
    x = i(838541),
    M = i(516653),
    k = i(105292);
function T(e) {
    let t = e.item.originalItem;
    return (0, C.LL)({
        ...e,
        alt: t.description,
        src: (0, S.E)({ proxyURL: t.proxy_url, url: t.url }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, r.Lt)(t.flags ?? 0, g.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function E(e) {
    let t = e.item.originalItem,
        i = (0, r.Lt)(t.flags ?? 0, g.sbO.IS_CLIP),
        a = f.A.toURLSafe(t.proxy_url);
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
                        volume: (0, _.GD)(),
                        autoMute: (0, _.uj)(),
                        messageId: e.message.id,
                        fillContainer: !e.isSingleMosaicItem,
                        onClick: e.onClick ?? void 0,
                        onSeekRequest: e.onSeekRequest,
                        onContextMenu: e.onContextMenu ?? void 0,
                        maxWidth: e.maxWidth,
                        maxHeight: e.maxHeight ?? x.Rk,
                        showParticipants: e.isSingleMosaicItem,
                        allowFullScreen: e.allowFullScreen,
                        onPlay: e.onPlay ?? void 0,
                        onVolumeChange: _.oc,
                        onMutedChange: _.y5,
                    }),
                    e.renderAdjacentContent?.(),
                ],
            })
          : (0, M.T)(e.naturalWidth, e.naturalHeight)
            ? (0, n.jsx)(z, { attachmentProps: e, posterUrl: a.toString() })
            : w(e, a.toString());
}
function w(e, t) {
    let i = e.item.originalItem;
    return (0, C.$o)({
        ...e,
        showPlaybackSpeedControl: !0,
        alt: i.description,
        poster: t,
        fileSize: i.size,
        fileName: (0, I.A)(i),
        src: i.url,
        placeholder: i.placeholder,
        placeholderVersion: i.placeholder_version,
        srcIsAnimated: (0, r.Lt)(i.flags ?? 0, g.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: i.id, filename: i.filename, size: i.size },
        },
    });
}
function z(e) {
    let { attachmentProps: t, posterUrl: i } = e,
        a = t.item.originalItem,
        { useDiscordVideoPlayer: l } = (0, h.r)({ location: "VideoComponentForMessageAttachment" });
    if (l) {
        let e,
            l,
            r,
            o,
            d,
            h = null != a.width && null != a.height && a.height > a.width ? "portrait" : "landscape",
            p = !0 === t.isSingleMosaicItem,
            g = "portrait" === h,
            S = null != a.description && "" !== a.description ? a.description : k.intl.string(k.t.FlNoSV),
            { width: f, height: y } =
                ((e = t.maxWidth ?? x.k6),
                (l = t.maxHeight ?? x.Rk),
                (r = e >= 240 && l >= 180),
                (0, A.Uj)({
                    width: t.width ?? 0,
                    height: t.height ?? 0,
                    maxWidth: e,
                    maxHeight: l,
                    minWidth: 240 * !!r,
                    minHeight: 180 * !!r,
                })),
            I =
                ((o = t.width ?? 0),
                (d = t.height ?? 0),
                o <= 0 || d <= 0 || f <= 0 || y <= 0
                    ? i
                    : (0, s.AE)({
                          src: i,
                          width: o,
                          height: d,
                          ratio: (0, A.U8)({ width: o, height: d, maxWidth: f, maxHeight: y }),
                      })),
            M = (0, C.Ir)({
                alt: a.description,
                disableAltTextDisplay: t.disableAltTextDisplay,
                hiddenSpoilers: t.hiddenSpoilers,
            })
                ? `${4 + (!0 === t.reducedSizeAltTextButton ? 18 : 32) + 4}px`
                : void 0;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: t.className ?? void 0,
                    style: {
                        width: f,
                        height: y,
                        position: "relative",
                        display: "flex",
                        "--custom-top-start-overlay-top": M,
                    },
                    onContextMenu: t.onContextMenu ?? void 0,
                    children: [
                        (0, n.jsx)(v.A, {
                            crossOrigin: null,
                            alt: S,
                            src: a.url,
                            poster: I,
                            fileSizeBytes: a.size,
                            mimeType: t.mimeType?.join("/"),
                            initialActive: !1,
                            playable: t.playable,
                            autoplay: t.autoPlay,
                            initialVolume: (0, _.v1)(),
                            initialMuted: (0, _.uj)(),
                            getInitialVolume: _.v1,
                            getInitialMuted: _.uj,
                            orientation: h,
                            minWidth: 0,
                            minHeight: 0,
                            parentTransitionState: null,
                            onPlay: t.onPlay ?? void 0,
                            onVolumeChange: _.ls,
                            onMutedChange: _.y5,
                            onClick: t.onClick ?? void 0,
                            renderOverlay: t.renderOverlayContent ?? void 0,
                            hideFullScreenBtn: !(t.allowFullScreen ?? !0),
                            hideSkipButtons: !p,
                            compactTimeDisplay: !p || g,
                            autoHideVolumeSlider: !p || g,
                            floatingVolumeSlider: p && g,
                            hidePlaybackSpeedBtn: !!p && !!g && "inline",
                            autoSizeControlBar: !0,
                            renderTopStartOverlay: (0, m.PR)((0, u.o)(a, t.message), c.u.MOSAIC),
                        }),
                        (0, n.jsx)(C._z, {
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
    return w(t, i);
}
function P(e) {
    let t = e.item.originalItem;
    return (0, C.gL)({ ...e, fileSize: t.size, fileName: (0, I.A)(t), src: t.url });
}
function b(e) {
    let { message: t, item: i } = e,
        n = i.originalItem,
        l = (0, d.dx)(d.k0.VOICE_MESSAGE, n.id),
        r = a.useCallback(
            (e, i, a) => {
                var l, r, o;
                ((l = t.id),
                    (r = n.duration_secs ?? null),
                    (o = t.author.id),
                    p.default.track(g.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
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
                    p.default.track(g.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
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
                    p.default.track(g.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, { message_id: i, error_message: n }));
            },
            [t],
        );
    return (0, C.P$)({
        ...e,
        fileSize: n.size,
        fileName: (0, I.A)(n),
        src: n.url,
        durationSecs: n.duration_secs,
        waveform: n.waveform,
        onPlay: r,
        onPause: o,
        onError: s,
        playbackCacheKey: l,
    });
}
function L(e) {
    let t = e.item.originalItem,
        { message: i } = e;
    return (0, C._d)({
        ...e,
        url: t.url,
        fileName: (0, I.A)(t),
        fileSize: t.size,
        contentType: t.content_type,
        defaultExpanded:
            0 === (0, y.A)(i) &&
            1 === i.attachments.filter((e) => !(0, r.Lt)(e.flags ?? 0, g.sbO.IS_THUMBNAIL)).length &&
            0 === i.embeds.length &&
            0 === i.codedLinks.length &&
            0 === i.giftCodes.length &&
            null == i.sharedClientTheme &&
            (null == i.application || null == i.activityInstance) &&
            i.type !== l.l.INTERACTION_PREMIUM_UPSELL,
    });
}
function N(e) {
    let t = e.item.originalItem;
    return (0, C.Dk)({ ...e, url: t.url, fileName: (0, I.A)(t), fileSize: t.size });
}
