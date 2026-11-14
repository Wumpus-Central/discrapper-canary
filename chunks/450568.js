(i.d(t, { Nj: () => z, UB: () => L, Cr: () => T, R6: () => b, I1: () => E, SX: () => P }), i(938796));
var n = i(477900),
    a = i(582128),
    l = i(448761),
    r = i(665260),
    o = i(682176),
    s = i(776231),
    d = i(713021),
    c = i(925056),
    u = i(889767),
    m = i(608628),
    h = i(777501),
    g = i(129230),
    p = i(652215),
    A = i(644447),
    _ = i(515718),
    S = i(587481),
    f = i(998218),
    I = i(869938),
    y = i(465856);
i(876230);
var v = i(383055),
    x = i(447991);
i(838541);
var C = i(516653),
    M = i(792996);
function T(e) {
    let t = e.item.originalItem;
    return (0, v.LL)({
        ...e,
        alt: t.description,
        src: (0, A.E)({ proxyURL: t.proxy_url, url: t.url }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, r.Lt)(t.flags ?? 0, p.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function E(e) {
    let t = e.item.originalItem,
        i = (0, r.Lt)(t.flags ?? 0, p.sbO.IS_CLIP),
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
                        volume: (0, S.GD)(),
                        autoMute: (0, S.uj)(),
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
                        onVolumeChange: S.oc,
                        onMutedChange: S.y5,
                    }),
                    e.renderAdjacentContent?.(),
                ],
            })
          : (0, C.T)(e.naturalWidth, e.naturalHeight)
            ? (0, n.jsx)(w, { attachmentProps: e, posterUrl: a.toString() })
            : k(e, a.toString());
}
function k(e, t) {
    let i = e.item.originalItem;
    return (0, v.$o)({
        ...e,
        showPlaybackSpeedControl: !0,
        alt: i.description,
        poster: t,
        fileSize: i.size,
        fileName: (0, y.A)(i),
        src: i.url,
        placeholder: i.placeholder,
        placeholderVersion: i.placeholder_version,
        srcIsAnimated: (0, r.Lt)(i.flags ?? 0, p.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: i.id, filename: i.filename, size: i.size },
        },
    });
}
function w(e) {
    let { attachmentProps: t, posterUrl: i } = e,
        a = t.item.originalItem,
        { useDiscordVideoPlayer: l } = (0, h.r)({ location: "VideoComponentForMessageAttachment" });
    if (l) {
        let e,
            l,
            r = null != a.width && null != a.height && a.height > a.width ? "portrait" : "landscape",
            o = !0 === t.isSingleMosaicItem,
            d = null != a.description && "" !== a.description ? a.description : M.intl.string(M.t.FlNoSV),
            { width: h, height: g } = (function (e) {
                let { width: t, height: i, maxWidth: n, maxHeight: a, fillTile: l } = e;
                if (l) return { width: n, height: a };
                let r = n >= 240 && a >= 180;
                return (0, _.Uj)({
                    width: t,
                    height: i,
                    maxWidth: n,
                    maxHeight: a,
                    minWidth: 240 * !!r,
                    minHeight: 180 * !!r,
                });
            })({
                width: t.width ?? 0,
                height: t.height ?? 0,
                maxWidth: t.maxWidth ?? 550,
                maxHeight: t.maxHeight ?? 350,
                fillTile: !o,
            }),
            p =
                ((e = t.width ?? 0),
                (l = t.height ?? 0),
                e <= 0 || l <= 0 || h <= 0 || g <= 0
                    ? i
                    : (0, s.AE)({
                          src: i,
                          width: e,
                          height: l,
                          ratio: (t.isSingleMosaicItem ? _.U8 : _.V)({
                              width: e,
                              height: l,
                              maxWidth: h,
                              maxHeight: g,
                          }),
                          maxWidth: h,
                          maxHeight: g,
                      })),
            A = (0, v.Ir)({
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
                        width: o ? h : "100%",
                        maxWidth: "100%",
                        minWidth: 0,
                        minHeight: 0,
                        height: o ? "auto" : "100%",
                        maxHeight: o ? void 0 : "inherit",
                        aspectRatio: `${h} / ${g}`,
                        position: "relative",
                        display: "flex",
                        "--custom-top-start-overlay-top": A,
                    },
                    onContextMenu: t.onContextMenu ?? void 0,
                    children: [
                        (0, n.jsx)(x.A, {
                            attachmentLayout: o ? "single" : "tile",
                            crossOrigin: null,
                            alt: d,
                            src: a.url,
                            poster: p,
                            fileSizeBytes: a.size,
                            mimeType: t.mimeType?.join("/"),
                            initialActive: !1,
                            preloadOnHover: null == t.onClick,
                            playable: t.playable,
                            autoplay: t.autoPlay,
                            initialVolume: (0, S.v1)(),
                            initialMuted: (0, S.uj)(),
                            getInitialVolume: S.v1,
                            getInitialMuted: S.uj,
                            orientation: r,
                            parentTransitionState: null,
                            onPlay: t.onPlay ?? void 0,
                            onVolumeChange: S.ls,
                            onMutedChange: S.y5,
                            onClick: t.onClick ?? void 0,
                            renderOverlay: t.renderOverlayContent ?? void 0,
                            hideFullScreenBtn: !(t.allowFullScreen ?? !0),
                            renderTopStartOverlay: (0, m.PR)((0, u.o)(a, t.message), c.u.MOSAIC),
                        }),
                        (0, n.jsx)(v._z, {
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
    return k(t, i);
}
function z(e) {
    let t = e.item.originalItem;
    return (0, v.gL)({ ...e, fileSize: t.size, fileName: (0, y.A)(t), src: t.url });
}
function P(e) {
    let { message: t, item: i } = e,
        n = i.originalItem,
        l = (0, d.dx)(d.k0.VOICE_MESSAGE, n.id),
        r = a.useCallback(
            (e, i, a) => {
                var l, r, o;
                ((l = t.id),
                    (r = n.duration_secs ?? null),
                    (o = t.author.id),
                    g.default.track(p.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
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
                    g.default.track(p.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
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
                    g.default.track(p.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, { message_id: i, error_message: n }));
            },
            [t],
        );
    return (0, v.P$)({
        ...e,
        fileSize: n.size,
        fileName: (0, y.A)(n),
        src: n.url,
        durationSecs: n.duration_secs,
        waveform: n.waveform,
        onPlay: r,
        onPause: o,
        onError: s,
        playbackCacheKey: l,
    });
}
function b(e) {
    let t = e.item.originalItem,
        { message: i } = e;
    return (0, v._d)({
        ...e,
        url: t.url,
        fileName: (0, y.A)(t),
        fileSize: t.size,
        contentType: t.content_type,
        defaultExpanded:
            0 === (0, I.A)(i) &&
            1 === i.attachments.filter((e) => !(0, r.Lt)(e.flags ?? 0, p.sbO.IS_THUMBNAIL)).length &&
            0 === i.embeds.length &&
            0 === i.codedLinks.length &&
            0 === i.giftCodes.length &&
            null == i.sharedClientTheme &&
            (null == i.application || null == i.activityInstance) &&
            i.type !== l.l.INTERACTION_PREMIUM_UPSELL,
    });
}
function L(e) {
    let t = e.item.originalItem;
    return (0, v.Dk)({ ...e, url: t.url, fileName: (0, y.A)(t), fileSize: t.size });
}
