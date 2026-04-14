n.d(t, { Ay: () => v, FX: () => w, VZ: () => j }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(665260),
    a = n(672477),
    s = n(275687),
    o = n(731068),
    d = n(619517),
    u = n(248643),
    c = n(803316),
    h = n(652176),
    m = n(644447),
    p = n(587481),
    g = n(998218),
    x = n(454290),
    f = n(504149),
    A = n(652215),
    y = n(176739);
function w(e, t) {
    return {
        ...e,
        type: (0, o.FE)(e),
        original: e.url,
        srcIsAnimated: (0, r.Lt)(e.flags, o.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function j(e) {
    let t = g.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
let v = l.memo(function (e) {
    var t, n, l, o, w;
    let v,
        { media: C, obscured: E = !1, maxWidth: I, maxHeight: N, onContextMenu: S } = e,
        { width: M, height: P, url: b, proxyUrl: O, alt: U, type: D, maxWidth: T, maxHeight: _, ...V } = C,
        { zoomed: R } = (0, x.Q)(),
        { newEmbedUi: L } = a.Q.useConfig({ location: "MediaViewerMedia" }),
        k = (function (e) {
            if (e?.identifier?.type !== "attachment" || null == e.message) return null;
            let t = e.identifier.attachmentId,
                n = e.message.attachments.find((e) => e.id === t);
            return null != n && (0, r.Lt)(n.flags ?? 0, A.sbO.IS_CLIP) ? n : null;
        })(C.sourceMetadata),
        F =
            ((t = R),
            (n = b),
            (l = O),
            (o = C.contentType),
            (w = C.originalContentType),
            t && g.A.isDiscordAssetUrl(n, o, w) ? (0, c.XW)(n, o, w) : (0, m.E)({ proxyURL: l, url: n })),
        W = null != M && 0 !== M && null != P && 0 !== P;
    if ("VIDEO" === D && W && null != O) {
        let e = C.poster ?? j(O);
        if (null == e) return null;
        if (null != k && L)
            return (0, i.jsx)(s.A, {
                attachment: k,
                src: F,
                posterUrl: e,
                channelId: C.sourceMetadata?.message?.channel_id,
                maxWidth: I,
                maxHeight: N,
                active: !0,
                autoPlay: C.autoPlay ?? !E,
                autoMute: "function" == typeof C.autoMute ? C.autoMute() : (C.autoMute ?? (0, p.uj)()),
                volume: (0, p.v1)(),
                onContextMenu: S,
                onVolumeChange: p.ls,
                onMutedChange: p.y5,
            });
        let t = C.renderLinkComponent ?? h.bU;
        return (0, i.jsx)(u.A, {
            ...V,
            src: F,
            width: M,
            height: P,
            maxWidth: I,
            maxHeight: N,
            poster: e,
            naturalWidth: M,
            naturalHeight: P,
            volume: p.v1,
            autoMute: C.autoMute ?? p.uj,
            onVolumeChange: p.ls,
            onMute: p.y5,
            renderLinkComponent: t,
            autoPlay: C.autoPlay ?? !E,
            alt: U,
            onContextMenu: S,
            disableArrowKeySeek: !0,
        });
    }
    return (
        "IMAGE" === D &&
            (v = W
                ? (0, i.jsx)(d.Ay, {
                      ...V,
                      src: F,
                      width: M,
                      height: P,
                      maxWidth: I,
                      maxHeight: N,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: y.$_,
                      animated: !E && C.animated,
                      autoPlay: !E,
                      alt: U,
                      onContextMenu: S,
                  })
                : (0, i.jsx)("img", {
                      src: F,
                      alt: U,
                      onContextMenu: S,
                      className: y.xx,
                      style: { maxWidth: I, maxHeight: N },
                  })),
        null != v ? (0, i.jsx)(f.A, { children: v }) : null
    );
});
