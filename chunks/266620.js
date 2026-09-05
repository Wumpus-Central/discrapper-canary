i.d(t, { Cr: () => A, I1: () => I, Nj: () => _, R6: () => w, SX: () => k, UB: () => z }), i(938796);
var n = i(477900),
    a = i(582128),
    l = i(665260);
i(876230);
var r = i(682176),
    o = i(713021),
    s = i(777501),
    d = i(121489),
    c = i(644447),
    u = i(515718),
    m = i(587481),
    h = i(998218),
    p = i(465856),
    g = i(966245),
    f = i(447991),
    S = i(838541),
    v = i(652215);
i(516653);
var y = i(375708);
function A(e) {
    let t = e.item.originalItem;
    return (0, g.LL)({
        ...e,
        alt: t.description,
        src: (0, c.E)({ proxyURL: t.proxy_url, url: t.url }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, l.Lt)(t.flags ?? 0, v.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function I(e) {
    let t = e.item.originalItem,
        i = (0, l.Lt)(t.flags ?? 0, v.sbO.IS_CLIP),
        a = h.A.toURLSafe(t.proxy_url);
    return null == a
        ? null
        : (a.searchParams.append("format", "webp"), i)
          ? (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(r.A, {
                        attachment: t,
                        src: t.url,
                        posterUrl: a.toString(),
                        channelId: e.message.channel_id,
                        className: e.className,
                        embed: !0,
                        volume: (0, m.GD)(),
                        autoMute: (0, m.uj)(),
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
                        onVolumeChange: m.oc,
                        onMutedChange: m.y5,
                    }),
                    e.renderAdjacentContent?.(),
                ],
            })
          : (e.naturalWidth <= 6016 && e.naturalHeight <= 3384) || (e.naturalWidth <= 3384 && e.naturalHeight <= 6016)
            ? (0, n.jsx)(C, { attachmentProps: e, posterUrl: a.toString() })
            : x(e, a.toString());
}
function x(e, t) {
    let i = e.item.originalItem;
    return (0, g.$o)({
        ...e,
        alt: i.description,
        poster: t,
        fileSize: i.size,
        fileName: (0, p.A)(i),
        src: i.url,
        placeholder: i.placeholder,
        placeholderVersion: i.placeholder_version,
        srcIsAnimated: (0, l.Lt)(i.flags ?? 0, v.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: i.id, filename: i.filename, size: i.size },
        },
    });
}
function C(e) {
    let { attachmentProps: t, posterUrl: i } = e,
        a = t.item.originalItem,
        { useDiscordVideoPlayer: l } = (0, s.r)({ location: "VideoComponentForMessageAttachment" });
    if (l) {
        let e,
            l,
            r,
            o = null != a.width && null != a.height && a.height > a.width ? "portrait" : "landscape",
            s = null != a.description && "" !== a.description ? a.description : y.intl.string(y.t.FlNoSV),
            { width: d, height: c } =
                ((e = t.maxWidth ?? S.k6),
                (l = t.maxHeight ?? S.Rk),
                (r = e >= 240 && l >= 180),
                (0, u.Uj)({
                    width: t.width ?? 0,
                    height: t.height ?? 0,
                    maxWidth: e,
                    maxHeight: l,
                    minWidth: 240 * !!r,
                    minHeight: 180 * !!r,
                }));
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: t.className ?? void 0,
                    style: { width: d, height: c, position: "relative", display: "flex" },
                    onContextMenu: t.onContextMenu ?? void 0,
                    children: [
                        (0, n.jsx)(f.A, {
                            crossOrigin: null,
                            alt: s,
                            src: a.url,
                            poster: i,
                            posterPlaceholder: a.placeholder,
                            posterPlaceholderVersion: a.placeholder_version,
                            initialActive: !1,
                            playable: t.playable,
                            autoplay: t.autoPlay,
                            initialVolume: (0, m.v1)(),
                            initialMuted: (0, m.uj)(),
                            getInitialVolume: m.v1,
                            getInitialMuted: m.uj,
                            orientation: o,
                            minWidth: 0,
                            minHeight: 0,
                            parentTransitionState: null,
                            onPlay: t.onPlay ?? void 0,
                            onVolumeChange: m.ls,
                            onMutedChange: m.y5,
                            onClick: t.onClick ?? void 0,
                            renderOverlay: t.renderOverlayContent ?? void 0,
                            hideFullScreenBtn: !(t.allowFullScreen ?? !0),
                            hideSkipButtons: !0,
                            compactTimeDisplay: !0,
                            autoHideVolumeSlider: !0,
                            autoSizeControlBar: !0,
                            withVideoHalo: !0,
                        }),
                        (0, n.jsx)(g._z, {
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
    return x(t, i);
}
function _(e) {
    let t = e.item.originalItem;
    return (0, g.gL)({ ...e, fileSize: t.size, fileName: (0, p.A)(t), src: t.url });
}
function k(e) {
    let { message: t, item: i } = e,
        n = i.originalItem,
        l = (0, o.dx)(o.k0.VOICE_MESSAGE, n.id),
        r = a.useCallback(
            (e, i, a) => {
                (0, d.wQ)(t.id, n.duration_secs ?? null, i, t.author.id);
            },
            [t, n.duration_secs],
        ),
        s = a.useCallback(
            (e, i) => {
                (0, d.dP)(t.id, n.duration_secs ?? null, e, t.author.id, i);
            },
            [t, n.duration_secs],
        ),
        c = a.useCallback(
            (e) => {
                (0, d._O)(t.id, e?.message ?? null);
            },
            [t],
        );
    return (0, g.P$)({
        ...e,
        fileSize: n.size,
        fileName: (0, p.A)(n),
        src: n.url,
        durationSecs: n.duration_secs,
        waveform: n.waveform,
        onPlay: r,
        onPause: s,
        onError: c,
        playbackCacheKey: l,
    });
}
function w(e) {
    let t = e.item.originalItem;
    return (0, g._d)({ ...e, url: t.url, fileName: (0, p.A)(t), fileSize: t.size, contentType: t.content_type });
}
function z(e) {
    let t = e.item.originalItem;
    return (0, g.Dk)({ ...e, url: t.url, fileName: (0, p.A)(t), fileSize: t.size });
}
