n.d(t, { Cr: () => C, I1: () => I, Nj: () => T, R6: () => N, SX: () => v, UB: () => S, YE: () => b }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(665260),
    r = n(311907),
    s = n(571356),
    o = n(990078),
    d = n(397927),
    c = n(458517),
    u = n(713021),
    m = n(121489),
    _ = n(734057),
    h = n(644447),
    p = n(998218),
    g = n(465856),
    A = n(652176),
    f = n(652215),
    x = n(985018),
    E = n(928438);
function C(e) {
    let t = e.item.originalItem;
    return (0, A.LL)({
        ...e,
        alt: t.description,
        src: (0, h.E)({ proxyURL: t.proxy_url, url: t.url }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, a.Lt)(t.flags ?? 0, f.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function I(e) {
    let t = e.item.originalItem,
        n = l.useCallback(
            () =>
                (0, a.Lt)(t.flags ?? 0, f.sbO.IS_CLIP)
                    ? (0, i.jsx)(o.m, {
                          text: x.intl.string(x.t["/fgfWh"]),
                          children: (0, i.jsxs)("div", {
                              className: E.M,
                              children: [
                                  (0, i.jsx)(d.xgA, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(s.E, {
                                      variant: "text-xs/semibold",
                                      color: "always-white",
                                      children: x.intl.string(x.t.oA4afG),
                                  }),
                              ],
                          }),
                      })
                    : null,
            [t],
        ),
        r = p.A.toURLSafe(t.proxy_url);
    return null == r
        ? null
        : (r.searchParams.append("format", "webp"),
          (0, A.$o)({
              ...e,
              alt: t.description,
              poster: r.toString(),
              fileSize: t.size,
              fileName: (0, g.A)(t),
              src: t.url,
              placeholder: t.placeholder,
              placeholderVersion: t.placeholder_version,
              srcIsAnimated: (0, a.Lt)(t.flags ?? 0, f.sbO.IS_ANIMATED),
              renderOverlayContent: n,
              sourceMetadata: {
                  message: e.message,
                  identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, size: t.size },
              },
          }));
}
function T(e) {
    let t = e.item.originalItem;
    return (0, A.gL)({ ...e, fileSize: t.size, fileName: (0, g.A)(t), src: t.url });
}
function v(e) {
    let { message: t, item: n } = e,
        i = n.originalItem,
        a = (0, u.dx)(u.k0.VOICE_MESSAGE, i.id),
        r = l.useCallback(
            (e, n, l) => {
                (0, m.wQ)(t.id, i.duration_secs ?? null, n, t.author.id);
            },
            [t, i.duration_secs],
        ),
        s = l.useCallback(
            (e, n) => {
                (0, m.dP)(t.id, i.duration_secs ?? null, e, t.author.id, n);
            },
            [t, i.duration_secs],
        ),
        o = l.useCallback(
            (e) => {
                (0, m._O)(t.id, e?.message ?? null);
            },
            [t],
        );
    return (0, A.P$)({
        ...e,
        fileSize: i.size,
        fileName: (0, g.A)(i),
        src: i.url,
        durationSecs: i.duration_secs,
        waveform: i.waveform,
        onPlay: r,
        onPause: s,
        onError: o,
        playbackCacheKey: a,
    });
}
function N(e) {
    let t = e.item.originalItem;
    return (0, A._d)({ ...e, url: t.url, fileName: (0, g.A)(t), fileSize: t.size, contentType: t.content_type });
}
function S(e) {
    let t = e.item.originalItem;
    return (0, A.Dk)({ ...e, url: t.url, fileName: (0, g.A)(t), fileSize: t.size });
}
function b(e) {
    return "CLIP" === e.item.type ? (0, i.jsx)(y, { attachment: e.item.originalItem, message: e.message }) : null;
}
function y(e) {
    let { attachment: t, message: n } = e,
        l = n.channel_id,
        a = (0, r.bG)([_.A], () => _.A.getBasicChannel(l)?.guild_id),
        { clip_created_at: s, clip_participants: o, title: d, application: u } = t;
    return (0, i.jsx)(c.A, {
        createdAt: null != s ? Date.parse(s) : void 0,
        participantIds:
            o?.map((e) => {
                let { id: t } = e;
                return t;
            }) ?? [],
        applicationId: u?.id,
        title: d,
        guildId: a,
    });
}
