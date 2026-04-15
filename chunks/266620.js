n.d(t, { Cr: () => y, I1: () => S, Nj: () => N, R6: () => L, SX: () => j, UB: () => R, YE: () => P }), n(938796);
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(665260),
    o = n(311907),
    d = n(571356),
    c = n(990078),
    u = n(397927),
    _ = n(672477),
    m = n(275687),
    h = n(458517),
    p = n(713021),
    g = n(121489),
    A = n(734057),
    x = n(644447),
    f = n(998218),
    C = n(465856),
    E = n(652176),
    I = n(838541),
    v = n(652215),
    b = n(985018),
    T = n(999169);
function y(e) {
    let t = e.item.originalItem;
    return (0, E.LL)({
        ...e,
        alt: t.description,
        src: (0, x.E)({ proxyURL: t.proxy_url, url: t.url }),
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
function S(e) {
    let t = e.item.originalItem,
        { newEmbedUi: n } = _.Q.useConfig({ location: "VideoComponentForMessageAttachment" }),
        l = (0, r.Lt)(t.flags ?? 0, v.sbO.IS_CLIP),
        o = a.useCallback(
            () =>
                !l || n
                    ? null
                    : (0, i.jsx)(c.m, {
                          text: b.intl.string(b.t["/fgfWh"]),
                          children: (0, i.jsxs)("div", {
                              className: T.MV,
                              children: [
                                  (0, i.jsx)(u.xgA, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(d.E, {
                                      variant: "text-xs/semibold",
                                      color: "always-white",
                                      children: b.intl.string(b.t.oA4afG),
                                  }),
                              ],
                          }),
                      }),
            [l, n],
        ),
        h = f.A.toURLSafe(t.proxy_url);
    return null == h
        ? null
        : (h.searchParams.append("format", "webp"), l && n)
          ? (0, i.jsx)(m.A, {
                attachment: t,
                src: t.url,
                posterUrl: h.toString(),
                channelId: e.message.channel_id,
                className: s()(T.m0, e.className, { [T.g$]: n }),
                embed: !0,
                fillContainer: !e.isSingleMosaicItem,
                onClick: e.onClick ?? void 0,
                onContextMenu: e.onContextMenu ?? void 0,
                maxWidth: e.maxWidth,
                maxHeight: e.maxHeight ?? I.Rk,
                showParticipants: e.isSingleMosaicItem,
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
        l = (0, p.dx)(p.k0.VOICE_MESSAGE, i.id),
        s = a.useCallback(
            (e, n, a) => {
                (0, g.wQ)(t.id, i.duration_secs ?? null, n, t.author.id);
            },
            [t, i.duration_secs],
        ),
        r = a.useCallback(
            (e, n) => {
                (0, g.dP)(t.id, i.duration_secs ?? null, e, t.author.id, n);
            },
            [t, i.duration_secs],
        ),
        o = a.useCallback(
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
        playbackCacheKey: l,
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
    let { newEmbedUi: t } = _.Q.useConfig({ location: "MosaicItemFooterForMessageAttachment" });
    return "CLIP" !== e.item.type || t ? null : (0, i.jsx)(w, { attachment: e.item.originalItem, message: e.message });
}
function w(e) {
    let { attachment: t, message: n } = e,
        a = n.channel_id,
        l = (0, o.bG)([A.A], () => A.A.getBasicChannel(a)?.guild_id),
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
        guildId: l,
    });
}
