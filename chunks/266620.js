i.d(t, { Cr: () => f, I1: () => I, Nj: () => _, R6: () => S, SX: () => A, UB: () => C }), i(938796);
var a = i(627968),
    n = i(64700),
    l = i(665260),
    r = i(311232),
    o = i(713021),
    s = i(121489),
    c = i(644447),
    u = i(587481),
    m = i(998218),
    d = i(465856),
    p = i(34337),
    g = i(838541),
    h = i(652215);
function f(e) {
    let t = e.item.originalItem;
    return (0, p.LL)({
        ...e,
        alt: t.description,
        src: (0, c.E)({ proxyURL: t.proxy_url, url: t.url }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, l.Lt)(t.flags ?? 0, h.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function I(e) {
    let t = e.item.originalItem,
        i = (0, l.Lt)(t.flags ?? 0, h.sbO.IS_CLIP),
        n = m.A.toURLSafe(t.proxy_url);
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
                        volume: (0, u.GD)(),
                        autoMute: (0, u.uj)(),
                        messageId: e.message.id,
                        fillContainer: !e.isSingleMosaicItem,
                        onClick: e.onClick ?? void 0,
                        onContextMenu: e.onContextMenu ?? void 0,
                        maxWidth: e.maxWidth,
                        maxHeight: e.maxHeight ?? g.Rk,
                        showParticipants: e.isSingleMosaicItem,
                        allowFullScreen: e.allowFullScreen,
                        onVolumeChange: u.oc,
                        onMutedChange: u.y5,
                    }),
                    e.renderAdjacentContent?.(),
                ],
            })
          : (0, p.$o)({
                ...e,
                alt: t.description,
                poster: n.toString(),
                fileSize: t.size,
                fileName: (0, d.A)(t),
                src: t.url,
                placeholder: t.placeholder,
                placeholderVersion: t.placeholder_version,
                srcIsAnimated: (0, l.Lt)(t.flags ?? 0, h.sbO.IS_ANIMATED),
                sourceMetadata: {
                    message: e.message,
                    identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, size: t.size },
                },
            });
}
function _(e) {
    let t = e.item.originalItem;
    return (0, p.gL)({ ...e, fileSize: t.size, fileName: (0, d.A)(t), src: t.url });
}
function A(e) {
    let { message: t, item: i } = e,
        a = i.originalItem,
        l = (0, o.dx)(o.k0.VOICE_MESSAGE, a.id),
        r = n.useCallback(
            (e, i, n) => {
                (0, s.wQ)(t.id, a.duration_secs ?? null, i, t.author.id);
            },
            [t, a.duration_secs],
        ),
        c = n.useCallback(
            (e, i) => {
                (0, s.dP)(t.id, a.duration_secs ?? null, e, t.author.id, i);
            },
            [t, a.duration_secs],
        ),
        u = n.useCallback(
            (e) => {
                (0, s._O)(t.id, e?.message ?? null);
            },
            [t],
        );
    return (0, p.P$)({
        ...e,
        fileSize: a.size,
        fileName: (0, d.A)(a),
        src: a.url,
        durationSecs: a.duration_secs,
        waveform: a.waveform,
        onPlay: r,
        onPause: c,
        onError: u,
        playbackCacheKey: l,
    });
}
function S(e) {
    let t = e.item.originalItem;
    return (0, p._d)({ ...e, url: t.url, fileName: (0, d.A)(t), fileSize: t.size, contentType: t.content_type });
}
function C(e) {
    let t = e.item.originalItem;
    return (0, p.Dk)({ ...e, url: t.url, fileName: (0, d.A)(t), fileSize: t.size });
}
