n.d(t, { Cr: () => S, I1: () => v, Nj: () => O, R6: () => M, SX: () => L, UB: () => x, YE: () => k }), n(938796);
var i = n(627968),
    a = n(64700),
    o = n(503698),
    l = n.n(o),
    r = n(665260),
    s = n(17928),
    d = n(834730),
    c = n(990078),
    u = n(176781),
    _ = n(672477),
    m = n(958742),
    p = n(458517),
    h = n(713021),
    f = n(121489),
    g = n(734057),
    A = n(644447),
    y = n(998218),
    E = n(465856),
    b = n(34337),
    I = n(838541),
    C = n(652215),
    w = n(985018),
    T = n(697841);
function S(e) {
    let t = e.item.originalItem;
    return (0, b.LL)({
        ...e,
        alt: t.description,
        src: (0, A.E)({ proxyURL: t.proxy_url, url: t.url }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, r.Lt)(t.flags ?? 0, C.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function v(e) {
    let t = e.item.originalItem,
        { newEmbedUi: n } = _.Q.useConfig({ location: "VideoComponentForMessageAttachment" }),
        o = (0, r.Lt)(t.flags ?? 0, C.sbO.IS_CLIP),
        s = a.useCallback(
            () =>
                !o || n
                    ? null
                    : (0, i.jsx)(c.m, {
                          text: w.intl.string(w.t["/fgfWh"]),
                          children: (0, i.jsxs)("div", {
                              className: T.MV,
                              children: [
                                  (0, i.jsx)(u.x, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(d.E, {
                                      variant: "text-xs/semibold",
                                      color: "always-white",
                                      children: w.intl.string(w.t.oA4afG),
                                  }),
                              ],
                          }),
                      }),
            [o, n],
        ),
        p = y.A.toURLSafe(t.proxy_url);
    return null == p
        ? null
        : (p.searchParams.append("format", "webp"), o && n)
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(m.A, {
                        attachment: t,
                        src: t.url,
                        posterUrl: p.toString(),
                        channelId: e.message.channel_id,
                        className: l()(T.m0, e.className, { [T.g$]: n }),
                        embed: !0,
                        messageId: e.message.id,
                        fillContainer: !e.isSingleMosaicItem,
                        onClick: e.onClick ?? void 0,
                        onContextMenu: e.onContextMenu ?? void 0,
                        maxWidth: e.maxWidth,
                        maxHeight: e.maxHeight ?? I.Rk,
                        showParticipants: e.isSingleMosaicItem,
                    }),
                    e.renderAdjacentContent?.(),
                ],
            })
          : (0, b.$o)({
                ...e,
                alt: t.description,
                poster: p.toString(),
                fileSize: t.size,
                fileName: (0, E.A)(t),
                src: t.url,
                placeholder: t.placeholder,
                placeholderVersion: t.placeholder_version,
                srcIsAnimated: (0, r.Lt)(t.flags ?? 0, C.sbO.IS_ANIMATED),
                renderOverlayContent: s,
                sourceMetadata: {
                    message: e.message,
                    identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, size: t.size },
                },
            });
}
function O(e) {
    let t = e.item.originalItem;
    return (0, b.gL)({ ...e, fileSize: t.size, fileName: (0, E.A)(t), src: t.url });
}
function L(e) {
    let { message: t, item: n } = e,
        i = n.originalItem,
        o = (0, h.dx)(h.k0.VOICE_MESSAGE, i.id),
        l = a.useCallback(
            (e, n, a) => {
                (0, f.wQ)(t.id, i.duration_secs ?? null, n, t.author.id);
            },
            [t, i.duration_secs],
        ),
        r = a.useCallback(
            (e, n) => {
                (0, f.dP)(t.id, i.duration_secs ?? null, e, t.author.id, n);
            },
            [t, i.duration_secs],
        ),
        s = a.useCallback(
            (e) => {
                (0, f._O)(t.id, e?.message ?? null);
            },
            [t],
        );
    return (0, b.P$)({
        ...e,
        fileSize: i.size,
        fileName: (0, E.A)(i),
        src: i.url,
        durationSecs: i.duration_secs,
        waveform: i.waveform,
        onPlay: l,
        onPause: r,
        onError: s,
        playbackCacheKey: o,
    });
}
function M(e) {
    let t = e.item.originalItem;
    return (0, b._d)({ ...e, url: t.url, fileName: (0, E.A)(t), fileSize: t.size, contentType: t.content_type });
}
function x(e) {
    let t = e.item.originalItem;
    return (0, b.Dk)({ ...e, url: t.url, fileName: (0, E.A)(t), fileSize: t.size });
}
function k(e) {
    let { newEmbedUi: t } = _.Q.useConfig({ location: "MosaicItemFooterForMessageAttachment" });
    return "CLIP" !== e.item.type || t ? null : (0, i.jsx)(P, { attachment: e.item.originalItem, message: e.message });
}
function P(e) {
    let { attachment: t, message: n } = e,
        a = n.channel_id,
        o = (0, s.bG)([g.A], () => g.A.getBasicChannel(a)?.guild_id),
        { clip_created_at: l, clip_participants: r, title: d, application: c } = t;
    return (0, i.jsx)(p.A, {
        createdAt: null != l ? Date.parse(l) : void 0,
        participantIds:
            r?.map((e) => {
                let { id: t } = e;
                return t;
            }) ?? [],
        applicationId: c?.id,
        title: d,
        guildId: o,
    });
}
