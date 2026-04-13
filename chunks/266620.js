n.d(t, { Cr: () => w, I1: () => B, Nj: () => P, R6: () => j, SX: () => M, UB: () => T, YE: () => k }), n(938796);
var a = n(627968),
    o = n(64700),
    r = n(503698),
    i = n.n(r),
    l = n(665260),
    c = n(311907),
    s = n(571356),
    _ = n(990078),
    d = n(397927),
    u = n(672477),
    p = n(275687),
    m = n(458517),
    b = n(713021),
    h = n(121489),
    f = n(734057),
    C = n(644447),
    g = n(998218),
    v = n(465856),
    x = n(652176),
    I = n(838541),
    y = n(652215),
    S = n(985018),
    A = n(999169);
function w(e) {
    let t = e.item.originalItem;
    return (0, x.LL)({
        ...e,
        alt: t.description,
        src: (0, C.E)({ proxyURL: t.proxy_url, url: t.url }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, l.Lt)(t.flags ?? 0, y.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function B(e) {
    let t = e.item.originalItem,
        { newEmbedUi: n } = u.Q.useConfig({ location: "VideoComponentForMessageAttachment" }),
        r = (0, l.Lt)(t.flags ?? 0, y.sbO.IS_CLIP),
        c = o.useCallback(
            () =>
                !r || n
                    ? null
                    : (0, a.jsx)(_.m, {
                          text: S.intl.string(S.t["/fgfWh"]),
                          children: (0, a.jsxs)("div", {
                              className: A.M,
                              children: [
                                  (0, a.jsx)(d.xgA, { size: "xs", color: "currentColor" }),
                                  (0, a.jsx)(s.E, {
                                      variant: "text-xs/semibold",
                                      color: "always-white",
                                      children: S.intl.string(S.t.oA4afG),
                                  }),
                              ],
                          }),
                      }),
            [r, n],
        ),
        m = g.A.toURLSafe(t.proxy_url);
    return null == m
        ? null
        : (m.searchParams.append("format", "webp"), r && n)
          ? (0, a.jsx)(p.A, {
                attachment: t,
                src: t.url,
                posterUrl: m.toString(),
                channelId: e.message.channel_id,
                className: i()(A.m, e.className),
                embed: !0,
                onContextMenu: e.onContextMenu ?? void 0,
                maxWidth: e.maxWidth,
                maxHeight: e.maxHeight ?? I.Rk,
                showParticipants: e.isSingleMosaicItem,
            })
          : (0, x.$o)({
                ...e,
                alt: t.description,
                poster: m.toString(),
                fileSize: t.size,
                fileName: (0, v.A)(t),
                src: t.url,
                placeholder: t.placeholder,
                placeholderVersion: t.placeholder_version,
                srcIsAnimated: (0, l.Lt)(t.flags ?? 0, y.sbO.IS_ANIMATED),
                renderOverlayContent: c,
                sourceMetadata: {
                    message: e.message,
                    identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, size: t.size },
                },
            });
}
function P(e) {
    let t = e.item.originalItem;
    return (0, x.gL)({ ...e, fileSize: t.size, fileName: (0, v.A)(t), src: t.url });
}
function M(e) {
    let { message: t, item: n } = e,
        a = n.originalItem,
        r = (0, b.dx)(b.k0.VOICE_MESSAGE, a.id),
        i = o.useCallback(
            (e, n, o) => {
                (0, h.wQ)(t.id, a.duration_secs ?? null, n, t.author.id);
            },
            [t, a.duration_secs],
        ),
        l = o.useCallback(
            (e, n) => {
                (0, h.dP)(t.id, a.duration_secs ?? null, e, t.author.id, n);
            },
            [t, a.duration_secs],
        ),
        c = o.useCallback(
            (e) => {
                (0, h._O)(t.id, e?.message ?? null);
            },
            [t],
        );
    return (0, x.P$)({
        ...e,
        fileSize: a.size,
        fileName: (0, v.A)(a),
        src: a.url,
        durationSecs: a.duration_secs,
        waveform: a.waveform,
        onPlay: i,
        onPause: l,
        onError: c,
        playbackCacheKey: r,
    });
}
function j(e) {
    let t = e.item.originalItem;
    return (0, x._d)({ ...e, url: t.url, fileName: (0, v.A)(t), fileSize: t.size, contentType: t.content_type });
}
function T(e) {
    let t = e.item.originalItem;
    return (0, x.Dk)({ ...e, url: t.url, fileName: (0, v.A)(t), fileSize: t.size });
}
function k(e) {
    let { newEmbedUi: t } = u.Q.useConfig({ location: "MosaicItemFooterForMessageAttachment" });
    return "CLIP" !== e.item.type || t ? null : (0, a.jsx)(E, { attachment: e.item.originalItem, message: e.message });
}
function E(e) {
    let { attachment: t, message: n } = e,
        o = n.channel_id,
        r = (0, c.bG)([f.A], () => f.A.getBasicChannel(o)?.guild_id),
        { clip_created_at: i, clip_participants: l, title: s, application: _ } = t;
    return (0, a.jsx)(m.A, {
        createdAt: null != i ? Date.parse(i) : void 0,
        participantIds:
            l?.map((e) => {
                let { id: t } = e;
                return t;
            }) ?? [],
        applicationId: _?.id,
        title: s,
        guildId: r,
    });
}
