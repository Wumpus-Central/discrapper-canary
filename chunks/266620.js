n.d(t, { Cr: () => v, I1: () => b, Nj: () => T, R6: () => S, SX: () => y, UB: () => N, YE: () => j }), n(938796);
var i = n(627968),
    a = n(64700),
    r = n(665260),
    l = n(311907),
    s = n(571356),
    o = n(990078),
    d = n(397927),
    c = n(672477),
    u = n(982406),
    _ = n(458517),
    m = n(713021),
    h = n(121489),
    p = n(734057),
    g = n(644447),
    A = n(998218),
    x = n(465856),
    f = n(652176),
    C = n(652215),
    I = n(985018),
    E = n(999169);
function v(e) {
    let t = e.item.originalItem;
    return (0, f.LL)({
        ...e,
        alt: t.description,
        src: (0, g.E)({ proxyURL: t.proxy_url, url: t.url }),
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
function b(e) {
    let t = e.item.originalItem,
        { newEmbedUi: n } = c.Q.useConfig({ location: "VideoComponentForMessageAttachment" }),
        _ = (0, r.Lt)(t.flags ?? 0, C.sbO.IS_CLIP),
        m = (0, l.bG)([p.A], () => p.A.getBasicChannel(e.message.channel_id)?.guild_id),
        h = a.useCallback(
            () =>
                !_ || n
                    ? null
                    : (0, i.jsx)(o.m, {
                          text: I.intl.string(I.t["/fgfWh"]),
                          children: (0, i.jsxs)("div", {
                              className: E.M,
                              children: [
                                  (0, i.jsx)(d.xgA, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(s.E, {
                                      variant: "text-xs/semibold",
                                      color: "always-white",
                                      children: I.intl.string(I.t.oA4afG),
                                  }),
                              ],
                          }),
                      }),
            [_, n],
        ),
        g = A.A.toURLSafe(t.proxy_url);
    return null == g
        ? null
        : (g.searchParams.append("format", "webp"), _ && n)
          ? (0, i.jsx)(u.A, { attachment: t, posterUrl: g.toString(), guildId: m, className: e.className })
          : (0, f.$o)({
                ...e,
                alt: t.description,
                poster: g.toString(),
                fileSize: t.size,
                fileName: (0, x.A)(t),
                src: t.url,
                placeholder: t.placeholder,
                placeholderVersion: t.placeholder_version,
                srcIsAnimated: (0, r.Lt)(t.flags ?? 0, C.sbO.IS_ANIMATED),
                renderOverlayContent: h,
                sourceMetadata: {
                    message: e.message,
                    identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, size: t.size },
                },
            });
}
function T(e) {
    let t = e.item.originalItem;
    return (0, f.gL)({ ...e, fileSize: t.size, fileName: (0, x.A)(t), src: t.url });
}
function y(e) {
    let { message: t, item: n } = e,
        i = n.originalItem,
        r = (0, m.dx)(m.k0.VOICE_MESSAGE, i.id),
        l = a.useCallback(
            (e, n, a) => {
                (0, h.wQ)(t.id, i.duration_secs ?? null, n, t.author.id);
            },
            [t, i.duration_secs],
        ),
        s = a.useCallback(
            (e, n) => {
                (0, h.dP)(t.id, i.duration_secs ?? null, e, t.author.id, n);
            },
            [t, i.duration_secs],
        ),
        o = a.useCallback(
            (e) => {
                (0, h._O)(t.id, e?.message ?? null);
            },
            [t],
        );
    return (0, f.P$)({
        ...e,
        fileSize: i.size,
        fileName: (0, x.A)(i),
        src: i.url,
        durationSecs: i.duration_secs,
        waveform: i.waveform,
        onPlay: l,
        onPause: s,
        onError: o,
        playbackCacheKey: r,
    });
}
function S(e) {
    let t = e.item.originalItem;
    return (0, f._d)({ ...e, url: t.url, fileName: (0, x.A)(t), fileSize: t.size, contentType: t.content_type });
}
function N(e) {
    let t = e.item.originalItem;
    return (0, f.Dk)({ ...e, url: t.url, fileName: (0, x.A)(t), fileSize: t.size });
}
function j(e) {
    let { newEmbedUi: t } = c.Q.useConfig({ location: "MosaicItemFooterForMessageAttachment" });
    return "CLIP" !== e.item.type || t ? null : (0, i.jsx)(L, { attachment: e.item.originalItem, message: e.message });
}
function L(e) {
    let { attachment: t, message: n } = e,
        a = n.channel_id,
        r = (0, l.bG)([p.A], () => p.A.getBasicChannel(a)?.guild_id),
        { clip_created_at: s, clip_participants: o, title: d, application: c } = t;
    return (0, i.jsx)(_.A, {
        createdAt: null != s ? Date.parse(s) : void 0,
        participantIds:
            o?.map((e) => {
                let { id: t } = e;
                return t;
            }) ?? [],
        applicationId: c?.id,
        title: d,
        guildId: r,
    });
}
