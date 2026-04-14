"use strict";
n.d(t, { Ay: () => v, FX: () => I, VZ: () => T }), n(938796);
var r = n(627968),
    i = n(64700),
    s = n(665260),
    a = n(672477),
    o = n(275687),
    l = n(731068),
    u = n(619517),
    c = n(248643),
    d = n(803316),
    _ = n(652176),
    f = n(644447),
    h = n(587481),
    p = n(998218),
    m = n(454290),
    E = n(504149),
    g = n(652215),
    A = n(176739);
function I(e, t) {
    return {
        ...e,
        type: (0, l.FE)(e),
        original: e.url,
        srcIsAnimated: (0, s.Lt)(e.flags, l.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function T(e) {
    let t = p.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
function S(e) {
    if (e?.identifier?.type !== "attachment" || null == e.message) return null;
    let t = e.identifier.attachmentId,
        n = e.message.attachments.find((e) => e.id === t);
    return null != n && (0, s.Lt)(n.flags ?? 0, g.sbO.IS_CLIP) ? n : null;
}
function y(e) {
    let t,
        { media: n, obscured: i = !1, maxWidth: s, maxHeight: l, onContextMenu: d } = e,
        { width: f, height: p, url: g, proxyUrl: I, alt: y, type: v, maxWidth: N, maxHeight: R, ...b } = n,
        { zoomed: O } = (0, m.Q)(),
        { newEmbedUi: D } = a.Q.useConfig({ location: "MediaViewerMedia" }),
        L = S(n.sourceMetadata),
        w = C(O, g, I, n.contentType, n.originalContentType),
        M = null != f && 0 !== f && null != p && 0 !== p;
    if ("VIDEO" === v && M && null != I) {
        let e = n.poster ?? T(I);
        if (null == e) return null;
        if (null != L && D)
            return (0, r.jsx)(o.A, {
                attachment: L,
                src: w,
                posterUrl: e,
                channelId: n.sourceMetadata?.message?.channel_id,
                maxWidth: s,
                maxHeight: l,
                active: !0,
                autoPlay: n.autoPlay ?? !i,
                autoMute: "function" == typeof n.autoMute ? n.autoMute() : (n.autoMute ?? (0, h.uj)()),
                volume: (0, h.v1)(),
                onContextMenu: d,
                onVolumeChange: h.ls,
                onMutedChange: h.y5,
            });
        let t = n.renderLinkComponent ?? _.bU;
        return (0, r.jsx)(c.A, {
            ...b,
            src: w,
            width: f,
            height: p,
            maxWidth: s,
            maxHeight: l,
            poster: e,
            naturalWidth: f,
            naturalHeight: p,
            volume: h.v1,
            autoMute: n.autoMute ?? h.uj,
            onVolumeChange: h.ls,
            onMute: h.y5,
            renderLinkComponent: t,
            autoPlay: n.autoPlay ?? !i,
            alt: y,
            onContextMenu: d,
            disableArrowKeySeek: !0,
        });
    }
    return (
        "IMAGE" === v &&
            (t = M
                ? (0, r.jsx)(u.Ay, {
                      ...b,
                      src: w,
                      width: f,
                      height: p,
                      maxWidth: s,
                      maxHeight: l,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: A.$_,
                      animated: !i && n.animated,
                      autoPlay: !i,
                      alt: y,
                      onContextMenu: d,
                  })
                : (0, r.jsx)("img", {
                      src: w,
                      alt: y,
                      onContextMenu: d,
                      className: A.xx,
                      style: { maxWidth: s, maxHeight: l },
                  })),
        null != t ? (0, r.jsx)(E.A, { children: t }) : null
    );
}
let v = i.memo(y);
function C(e, t, n, r, i) {
    return e && p.A.isDiscordAssetUrl(t, r, i) ? (0, d.XW)(t, r, i) : (0, f.E)({ proxyURL: n, url: t });
}
