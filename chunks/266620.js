n.d(t, { Cr: () => S, I1: () => y, Nj: () => N, R6: () => L, SX: () => j, UB: () => R, YE: () => P }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(665260),
    o = n(311907),
    d = n(834730),
    c = n(990078),
    u = n(176781),
    m = n(672477),
    _ = n(275687),
    h = n(458517),
    p = n(713021),
    g = n(121489),
    A = n(734057),
    f = n(644447),
    x = n(998218),
    C = n(465856),
    E = n(652176),
    I = n(838541),
    v = n(652215),
    b = n(985018),
    T = n(697841);
function S(e) {
    let t = e.item.originalItem;
    return (0, E.LL)({
        ...e,
        alt: t.description,
        src: (0, f.E)({ proxyURL: t.proxy_url, url: t.url }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, r.Lt)(t.flags ?? 0, v.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function y(e) {
    let t = e.item.originalItem,
        { newEmbedUi: n } = m.Q.useConfig({ location: "VideoComponentForMessageAttachment" }),
        a = (0, r.Lt)(t.flags ?? 0, v.sbO.IS_CLIP),
        o = l.useCallback(
            () =>
                !a || n
                    ? null
                    : (0, i.jsx)(c.m, {
                          text: b.intl.string(b.t["/fgfWh"]),
                          children: (0, i.jsxs)("div", {
                              className: T.MV,
                              children: [
                                  (0, i.jsx)(u.x, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(d.E, {
                                      variant: "text-xs/semibold",
                                      color: "always-white",
                                      children: b.intl.string(b.t.oA4afG),
                                  }),
                              ],
                          }),
                      }),
            [a, n],
        ),
        h = x.A.toURLSafe(t.proxy_url);
    return null == h
        ? null
        : (h.searchParams.append("format", "webp"), a && n)
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(_.A, {
                        attachment: t,
                        src: t.url,
                        posterUrl: h.toString(),
                        channelId: e.message.channel_id,
                        className: s()(T.m0, e.className, { [T.g$]: n }),
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
          : (0, E.$o)({
                ...e,
                alt: t.description,
                poster: h.toString(),
                fileSize: t.size,
                fileName: (0, C.A)(t),
                src: t.url,
                placeholder: t.placeholder,
                placeholderVersion: t.placeholder_version,
                srcIsAnimated: (0, r.Lt)(t.flags ?? 0, v.sbO.IS_ANIMATED),
                renderOverlayContent: o,
                sourceMetadata: {
                    message: e.message,
                    identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, size: t.size },
                },
            });
}
function N(e) {
    let t = e.item.originalItem;
    return (0, E.gL)({ ...e, fileSize: t.size, fileName: (0, C.A)(t), src: t.url });
}
function j(e) {
    let { message: t, item: n } = e,
        i = n.originalItem,
        a = (0, p.dx)(p.k0.VOICE_MESSAGE, i.id),
        s = l.useCallback(
            (e, n, l) => {
                (0, g.wQ)(t.id, i.duration_secs ?? null, n, t.author.id);
            },
            [t, i.duration_secs],
        ),
        r = l.useCallback(
            (e, n) => {
                (0, g.dP)(t.id, i.duration_secs ?? null, e, t.author.id, n);
            },
            [t, i.duration_secs],
        ),
        o = l.useCallback(
            (e) => {
                (0, g._O)(t.id, e?.message ?? null);
            },
            [t],
        );
    return (0, E.P$)({
        ...e,
        fileSize: i.size,
        fileName: (0, C.A)(i),
        src: i.url,
        durationSecs: i.duration_secs,
        waveform: i.waveform,
        onPlay: s,
        onPause: r,
        onError: o,
        playbackCacheKey: a,
    });
}
function L(e) {
    let t = e.item.originalItem;
    return (0, E._d)({ ...e, url: t.url, fileName: (0, C.A)(t), fileSize: t.size, contentType: t.content_type });
}
function R(e) {
    let t = e.item.originalItem;
    return (0, E.Dk)({ ...e, url: t.url, fileName: (0, C.A)(t), fileSize: t.size });
}
function P(e) {
    let { newEmbedUi: t } = m.Q.useConfig({ location: "MosaicItemFooterForMessageAttachment" });
    return "CLIP" !== e.item.type || t ? null : (0, i.jsx)(w, { attachment: e.item.originalItem, message: e.message });
}
function w(e) {
    let { attachment: t, message: n } = e,
        l = n.channel_id,
        a = (0, o.bG)([A.A], () => A.A.getBasicChannel(l)?.guild_id),
        { clip_created_at: s, clip_participants: r, title: d, application: c } = t;
    return (0, i.jsx)(h.A, {
        createdAt: null != s ? Date.parse(s) : void 0,
        participantIds:
            r?.map((e) => {
                let { id: t } = e;
                return t;
            }) ?? [],
        applicationId: c?.id,
        title: d,
        guildId: a,
    });
}
