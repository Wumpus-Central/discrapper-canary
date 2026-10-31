(i.d(t, { Cr: () => E, I1: () => w, Nj: () => z, UB: () => j, SX: () => L, R6: () => N }), i(938796));
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
    h = i(530567),
    p = i(777501),
    g = i(174459),
    S = i(652215),
    A = i(644447),
    _ = i(515718),
    f = i(587481),
    y = i(998218),
    I = i(869938),
    C = i(465856),
    v = i(44788),
    x = i(447991),
    M = i(838541),
    k = i(516653),
    T = i(105292);
function E(e) {
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
        srcIsAnimated: (0, r.Lt)(t.flags ?? 0, S.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function w(e) {
    let t = e.item.originalItem,
        i = (0, r.Lt)(t.flags ?? 0, S.sbO.IS_CLIP),
        a = y.A.toURLSafe(t.proxy_url);
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
                        volume: (0, f.GD)(),
                        autoMute: (0, f.uj)(),
                        messageId: e.message.id,
                        fillContainer: !e.isSingleMosaicItem,
                        onClick: e.onClick ?? void 0,
                        onSeekRequest: e.onSeekRequest,
                        onContextMenu: e.onContextMenu ?? void 0,
                        maxWidth: e.maxWidth,
                        maxHeight: e.maxHeight ?? M.Rk,
                        showParticipants: e.isSingleMosaicItem,
                        allowFullScreen: e.allowFullScreen,
                        onPlay: e.onPlay ?? void 0,
                        onVolumeChange: f.oc,
                        onMutedChange: f.y5,
                    }),
                    e.renderAdjacentContent?.(),
                ],
            })
          : (0, k.T)(e.naturalWidth, e.naturalHeight)
            ? (0, n.jsx)(b, { attachmentProps: e, posterUrl: a.toString() })
            : P(e, a.toString());
}
function P(e, t) {
    let i = e.item.originalItem;
    return (0, v.$o)({
        ...e,
        showPlaybackSpeedControl: !0,
        alt: i.description,
        poster: t,
        fileSize: i.size,
        fileName: (0, C.A)(i),
        src: i.url,
        placeholder: i.placeholder,
        placeholderVersion: i.placeholder_version,
        srcIsAnimated: (0, r.Lt)(i.flags ?? 0, S.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: i.id, filename: i.filename, size: i.size },
        },
    });
}
function b(e) {
    let { attachmentProps: t, posterUrl: i } = e,
        [l, r] = a.useState(!1),
        o = t.item.originalItem,
        { useDiscordVideoPlayer: d } = (0, p.r)({ location: "VideoComponentForMessageAttachment" });
    if (d) {
        let e,
            a,
            d,
            p,
            g,
            S = null != o.width && null != o.height && o.height > o.width ? "portrait" : "landscape",
            A = !0 === t.isSingleMosaicItem,
            y = "portrait" === S,
            I = null != o.description && "" !== o.description ? o.description : T.intl.string(T.t.FlNoSV),
            { width: C, height: k } =
                ((e = t.maxWidth ?? M.k6),
                (a = t.maxHeight ?? M.Rk),
                (d = e >= 240 && a >= 180),
                (0, _.Uj)({
                    width: t.width ?? 0,
                    height: t.height ?? 0,
                    maxWidth: e,
                    maxHeight: a,
                    minWidth: 240 * !!d,
                    minHeight: 180 * !!d,
                })),
            E = C < h.$7 && !l,
            w =
                ((p = t.width ?? 0),
                (g = t.height ?? 0),
                p <= 0 || g <= 0 || C <= 0 || k <= 0
                    ? i
                    : (0, s.AE)({
                          src: i,
                          width: p,
                          height: g,
                          ratio: (0, _.U8)({ width: p, height: g, maxWidth: C, maxHeight: k }),
                      })),
            P = (0, v.Ir)({
                alt: o.description,
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
                        width: C,
                        height: k,
                        position: "relative",
                        display: "flex",
                        "--custom-top-start-overlay-top": P,
                    },
                    onContextMenu: t.onContextMenu ?? void 0,
                    children: [
                        (0, n.jsx)(x.A, {
                            crossOrigin: null,
                            alt: I,
                            src: o.url,
                            poster: w,
                            fileSizeBytes: o.size,
                            mimeType: t.mimeType?.join("/"),
                            initialActive: !1,
                            playable: t.playable,
                            autoplay: t.autoPlay,
                            initialVolume: (0, f.v1)(),
                            initialMuted: (0, f.uj)(),
                            getInitialVolume: f.v1,
                            getInitialMuted: f.uj,
                            orientation: S,
                            minWidth: 0,
                            minHeight: 0,
                            parentTransitionState: null,
                            onPlay: t.onPlay ?? void 0,
                            onVolumeChange: f.ls,
                            onMutedChange: f.y5,
                            onClick: t.onClick ?? void 0,
                            renderOverlay: t.renderOverlayContent ?? void 0,
                            hideFullScreenBtn: !(t.allowFullScreen ?? !0),
                            hideSkipButtons: !A,
                            compactTimeDisplay: !A || y || E,
                            autoHideVolumeSlider: !A || y,
                            floatingVolumeSlider: (A && y) || E,
                            hidePlaybackSpeedBtn: !!A && !!y && "inline",
                            controlBarConfig: h.Xq,
                            onFullscreenChange: r,
                            renderTopStartOverlay: (0, m.PR)((0, u.o)(o, t.message), c.u.MOSAIC),
                        }),
                        (0, n.jsx)(v._z, {
                            alt: o.description,
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
function z(e) {
    let t = e.item.originalItem;
    return (0, v.gL)({ ...e, fileSize: t.size, fileName: (0, C.A)(t), src: t.url });
}
function L(e) {
    let { message: t, item: i } = e,
        n = i.originalItem,
        l = (0, d.dx)(d.k0.VOICE_MESSAGE, n.id),
        r = a.useCallback(
            (e, i, a) => {
                var l, r, o;
                ((l = t.id),
                    (r = n.duration_secs ?? null),
                    (o = t.author.id),
                    g.default.track(S.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
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
                    g.default.track(S.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
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
                    g.default.track(S.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, { message_id: i, error_message: n }));
            },
            [t],
        );
    return (0, v.P$)({
        ...e,
        fileSize: n.size,
        fileName: (0, C.A)(n),
        src: n.url,
        durationSecs: n.duration_secs,
        waveform: n.waveform,
        onPlay: r,
        onPause: o,
        onError: s,
        playbackCacheKey: l,
    });
}
function N(e) {
    let t = e.item.originalItem,
        { message: i } = e;
    return (0, v._d)({
        ...e,
        url: t.url,
        fileName: (0, C.A)(t),
        fileSize: t.size,
        contentType: t.content_type,
        defaultExpanded:
            0 === (0, I.A)(i) &&
            1 === i.attachments.filter((e) => !(0, r.Lt)(e.flags ?? 0, S.sbO.IS_THUMBNAIL)).length &&
            0 === i.embeds.length &&
            0 === i.codedLinks.length &&
            0 === i.giftCodes.length &&
            null == i.sharedClientTheme &&
            (null == i.application || null == i.activityInstance) &&
            i.type !== l.l.INTERACTION_PREMIUM_UPSELL,
    });
}
function j(e) {
    let t = e.item.originalItem;
    return (0, v.Dk)({ ...e, url: t.url, fileName: (0, C.A)(t), fileSize: t.size });
}
