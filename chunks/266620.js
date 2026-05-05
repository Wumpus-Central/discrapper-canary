i.d(t, { Cr: () => h, I1: () => f, Nj: () => I, R6: () => A, SX: () => _, UB: () => S }), i(938796);
var a = i(627968),
    n = i(64700),
    l = i(665260),
    r = i(163281),
    s = i(713021),
    o = i(121489),
    c = i(644447),
    d = i(998218),
    m = i(465856),
    u = i(34337),
    p = i(838541),
    g = i(652215);
function h(e) {
    let t = e.item.originalItem;
    return (0, u.LL)({
        ...e,
        alt: t.description,
        src: (0, c.E)({ proxyURL: t.proxy_url, url: t.url }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, l.Lt)(t.flags ?? 0, g.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function f(e) {
    let t = e.item.originalItem,
        i = (0, l.Lt)(t.flags ?? 0, g.sbO.IS_CLIP),
        n = d.A.toURLSafe(t.proxy_url);
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
                        messageId: e.message.id,
                        fillContainer: !e.isSingleMosaicItem,
                        onClick: e.onClick ?? void 0,
                        onContextMenu: e.onContextMenu ?? void 0,
                        maxWidth: e.maxWidth,
                        maxHeight: e.maxHeight ?? p.Rk,
                        showParticipants: e.isSingleMosaicItem,
                        allowFullScreen: e.allowFullScreen,
                    }),
                    e.renderAdjacentContent?.(),
                ],
            })
          : (0, u.$o)({
                ...e,
                alt: t.description,
                poster: n.toString(),
                fileSize: t.size,
                fileName: (0, m.A)(t),
                src: t.url,
                placeholder: t.placeholder,
                placeholderVersion: t.placeholder_version,
                srcIsAnimated: (0, l.Lt)(t.flags ?? 0, g.sbO.IS_ANIMATED),
                sourceMetadata: {
                    message: e.message,
                    identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, size: t.size },
                },
            });
}
function I(e) {
    let t = e.item.originalItem;
    return (0, u.gL)({ ...e, fileSize: t.size, fileName: (0, m.A)(t), src: t.url });
}
function _(e) {
    let { message: t, item: i } = e,
        a = i.originalItem,
        l = (0, s.dx)(s.k0.VOICE_MESSAGE, a.id),
        r = n.useCallback(
            (e, i, n) => {
                (0, o.wQ)(t.id, a.duration_secs ?? null, i, t.author.id);
            },
            [t, a.duration_secs],
        ),
        c = n.useCallback(
            (e, i) => {
                (0, o.dP)(t.id, a.duration_secs ?? null, e, t.author.id, i);
            },
            [t, a.duration_secs],
        ),
        d = n.useCallback(
            (e) => {
                (0, o._O)(t.id, e?.message ?? null);
            },
            [t],
        );
    return (0, u.P$)({
        ...e,
        fileSize: a.size,
        fileName: (0, m.A)(a),
        src: a.url,
        durationSecs: a.duration_secs,
        waveform: a.waveform,
        onPlay: r,
        onPause: c,
        onError: d,
        playbackCacheKey: l,
    });
}
function A(e) {
    let t = e.item.originalItem;
    return (0, u._d)({ ...e, url: t.url, fileName: (0, m.A)(t), fileSize: t.size, contentType: t.content_type });
}
function S(e) {
    let t = e.item.originalItem;
    return (0, u.Dk)({ ...e, url: t.url, fileName: (0, m.A)(t), fileSize: t.size });
}
