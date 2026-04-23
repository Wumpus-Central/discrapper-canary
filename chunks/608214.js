n.d(t, { Ay: () => E, FX: () => w, VZ: () => _ }), n(938796);
var i = n(627968),
    a = n(64700),
    r = n(665260),
    l = n(672477),
    s = n(275687),
    o = n(731068),
    d = n(619517),
    u = n(248643),
    h = n(803316),
    c = n(652176),
    m = n(644447),
    g = n(587481),
    p = n(998218),
    f = n(454290),
    A = n(504149),
    x = n(652215),
    y = n(610995);
function w(e, t) {
    return {
        ...e,
        type: (0, o.FE)(e),
        original: e.url,
        srcIsAnimated: (0, r.Lt)(e.flags, o.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function _(e) {
    let t = p.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
let E = a.memo(function (e) {
    var t, n, a, o, w;
    let E,
        { media: C, obscured: S = !1, maxWidth: b, maxHeight: I, onContextMenu: v } = e,
        { width: M, height: j, url: T, proxyUrl: N, alt: O, type: P, maxWidth: D, maxHeight: R, ...L } = C,
        { zoomed: U } = (0, f.Q)(),
        { newEmbedUi: V } = l.Q.useConfig({ location: "MediaViewerMedia" }),
        k = (function (e) {
            if (e?.identifier?.type !== "attachment" || null == e.message) return null;
            let t = e.identifier.attachmentId,
                n = e.message.attachments.find((e) => e.id === t);
            return null != n && (0, r.Lt)(n.flags ?? 0, x.sbO.IS_CLIP) ? n : null;
        })(C.sourceMetadata),
        H =
            ((t = U),
            (n = T),
            (a = N),
            (o = C.contentType),
            (w = C.originalContentType),
            t && p.A.isDiscordAssetUrl(n, o, w) ? (0, h.XW)(n, o, w) : (0, m.E)({ proxyURL: a, url: n })),
        F = null != M && 0 !== M && null != j && 0 !== j;
    if ("VIDEO" === P && F && null != N) {
        let e = C.poster ?? _(N);
        if (null == e) return null;
        if (null != k && V)
            return (0, i.jsx)(s.A, {
                attachment: k,
                src: H,
                posterUrl: e,
                channelId: C.sourceMetadata?.message?.channel_id,
                maxWidth: b,
                maxHeight: I,
                active: !0,
                messageId: C.sourceMetadata?.message?.id,
                autoPlay: C.autoPlay ?? !S,
                autoMute: "function" == typeof C.autoMute ? C.autoMute() : (C.autoMute ?? (0, g.uj)()),
                volume: (0, g.v1)(),
                onContextMenu: v,
                onVolumeChange: g.ls,
                onMutedChange: g.y5,
            });
        let t = C.renderLinkComponent ?? c.bU;
        return (0, i.jsx)(u.A, {
            ...L,
            src: H,
            width: M,
            height: j,
            maxWidth: b,
            maxHeight: I,
            poster: e,
            naturalWidth: M,
            naturalHeight: j,
            volume: g.v1,
            autoMute: C.autoMute ?? g.uj,
            onVolumeChange: g.ls,
            onMute: g.y5,
            renderLinkComponent: t,
            autoPlay: C.autoPlay ?? !S,
            alt: O,
            onContextMenu: v,
            disableArrowKeySeek: !0,
        });
    }
    return (
        "IMAGE" === P &&
            (E = F
                ? (0, i.jsx)(d.Ay, {
                      ...L,
                      src: H,
                      width: M,
                      height: j,
                      maxWidth: b,
                      maxHeight: I,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: y.$_,
                      animated: !S && C.animated,
                      autoPlay: !S,
                      alt: O,
                      onContextMenu: v,
                  })
                : (0, i.jsx)("img", {
                      src: H,
                      alt: O,
                      onContextMenu: v,
                      className: y.xx,
                      style: { maxWidth: b, maxHeight: I },
                  })),
        null != E ? (0, i.jsx)(A.A, { children: E }) : null
    );
});
