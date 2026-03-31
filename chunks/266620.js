n.d(t, { Cr: () => T, I1: () => y, Nj: () => S, R6: () => j, SX: () => N, UB: () => L, YE: () => R }), n(938796);
var i = n(627968),
    r = n(64700),
    a = n(665260),
    l = n(311907),
    s = n(571356),
    o = n(990078),
    d = n(397927),
    c = n(672477),
    u = n(67281),
    _ = n(458517),
    m = n(776231),
    h = n(713021),
    p = n(476066),
    g = n(121489),
    A = n(734057),
    x = n(644447),
    f = n(998218),
    C = n(465856),
    I = n(652176),
    E = n(652215),
    b = n(985018),
    v = n(999169);
function T(e) {
    let t = e.item.originalItem;
    return (0, I.LL)({
        ...e,
        alt: t.description,
        src: (0, x.E)({ proxyURL: t.proxy_url, url: t.url }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, a.Lt)(t.flags ?? 0, E.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, title: t.title, size: t.size },
        },
        analyticsSource: "ImageComponentForMessageAttachment",
    });
}
function y(e) {
    let t = e.item.originalItem,
        { newEmbedUi: n } = c.Q.useConfig({ location: "VideoComponentForMessageAttachment" }),
        _ = (0, a.Lt)(t.flags ?? 0, E.sbO.IS_CLIP),
        h = (0, l.bG)([A.A], () => A.A.getBasicChannel(e.message.channel_id)?.guild_id),
        g = r.useCallback(
            () =>
                !_ || n
                    ? null
                    : (0, i.jsx)(o.m, {
                          text: b.intl.string(b.t["/fgfWh"]),
                          children: (0, i.jsxs)("div", {
                              className: v.M,
                              children: [
                                  (0, i.jsx)(d.xgA, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(s.E, {
                                      variant: "text-xs/semibold",
                                      color: "always-white",
                                      children: b.intl.string(b.t.oA4afG),
                                  }),
                              ],
                          }),
                      }),
            [_, n],
        ),
        x = r.useCallback(
            (e) => {
                let { playerState: r, isControlBarExpanded: a } = e;
                return _ && n
                    ? (0, i.jsx)(u.A, {
                          createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                          participantIds:
                              t.clip_participants?.map((e) => {
                                  let { id: t } = e;
                                  return t;
                              }) ?? [],
                          applicationId: t.application?.id,
                          title: t.title,
                          guildId: h,
                          playerState: r,
                          isControlBarExpanded: a,
                      })
                    : null;
            },
            [t, _, n, h],
        ),
        T = f.A.toURLSafe(t.proxy_url);
    if (null == T) return null;
    if ((T.searchParams.append("format", "webp"), _ && n)) {
        let { width: n, height: r, naturalWidth: a, naturalHeight: l } = e,
            s = (0, m.AE)({ src: T.toString(), width: n, height: r });
        return (0, i.jsx)("div", {
            style: { width: "100%", aspectRatio: `${n} / ${r}` },
            children: (0, i.jsx)(p.A, {
                src: t.url,
                downloadUrl: t.url,
                downloadContentType: t.content_type,
                poster: s,
                posterPlaceholder: t.placeholder,
                posterPlaceholderVersion: t.placeholder_version,
                active: !1,
                orientation: a >= l ? "landscape" : "portrait",
                renderPersistentOverlay: x,
                targetTimeSec: 1 / 0,
                parentTransitionState: null,
                onOptimisticProgressUpdate: () => {},
                performanceClockStartTime: 0,
            }),
        });
    }
    return (0, I.$o)({
        ...e,
        alt: t.description,
        poster: T.toString(),
        fileSize: t.size,
        fileName: (0, C.A)(t),
        src: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        srcIsAnimated: (0, a.Lt)(t.flags ?? 0, E.sbO.IS_ANIMATED),
        renderOverlayContent: g,
        sourceMetadata: {
            message: e.message,
            identifier: { type: "attachment", attachmentId: t.id, filename: t.filename, size: t.size },
        },
    });
}
function S(e) {
    let t = e.item.originalItem;
    return (0, I.gL)({ ...e, fileSize: t.size, fileName: (0, C.A)(t), src: t.url });
}
function N(e) {
    let { message: t, item: n } = e,
        i = n.originalItem,
        a = (0, h.dx)(h.k0.VOICE_MESSAGE, i.id),
        l = r.useCallback(
            (e, n, r) => {
                (0, g.wQ)(t.id, i.duration_secs ?? null, n, t.author.id);
            },
            [t, i.duration_secs],
        ),
        s = r.useCallback(
            (e, n) => {
                (0, g.dP)(t.id, i.duration_secs ?? null, e, t.author.id, n);
            },
            [t, i.duration_secs],
        ),
        o = r.useCallback(
            (e) => {
                (0, g._O)(t.id, e?.message ?? null);
            },
            [t],
        );
    return (0, I.P$)({
        ...e,
        fileSize: i.size,
        fileName: (0, C.A)(i),
        src: i.url,
        durationSecs: i.duration_secs,
        waveform: i.waveform,
        onPlay: l,
        onPause: s,
        onError: o,
        playbackCacheKey: a,
    });
}
function j(e) {
    let t = e.item.originalItem;
    return (0, I._d)({ ...e, url: t.url, fileName: (0, C.A)(t), fileSize: t.size, contentType: t.content_type });
}
function L(e) {
    let t = e.item.originalItem;
    return (0, I.Dk)({ ...e, url: t.url, fileName: (0, C.A)(t), fileSize: t.size });
}
function R(e) {
    let { newEmbedUi: t } = c.Q.useConfig({ location: "MosaicItemFooterForMessageAttachment" });
    return "CLIP" !== e.item.type || t ? null : (0, i.jsx)(P, { attachment: e.item.originalItem, message: e.message });
}
function P(e) {
    let { attachment: t, message: n } = e,
        r = n.channel_id,
        a = (0, l.bG)([A.A], () => A.A.getBasicChannel(r)?.guild_id),
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
        guildId: a,
    });
}
