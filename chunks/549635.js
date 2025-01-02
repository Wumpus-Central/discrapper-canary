t.d(n, {
    D: function () {
        return S;
    }
});
var i = t(200651),
    r = t(192379),
    l = t(120356),
    a = t.n(l),
    o = t(378409),
    s = t(124347),
    u = t(80966),
    c = t(480050),
    d = t(524444),
    h = t(52824),
    m = t(956664),
    f = t(589530),
    p = t(591759),
    _ = t(254109),
    E = t(212459),
    g = t(427244);
function S(e) {
    let n = p.Z.toURLSafe(e);
    return null == n ? null : (n.searchParams.append('format', 'webp'), n.toString());
}
n.Z = r.memo(function (e) {
    let n,
        { media: t, obscured: r = !1, onContextMenu: l } = e,
        { width: x, height: C, url: I, proxyUrl: y, alt: v, type: O, maxWidth: b, maxHeight: M, ...L } = t,
        { zoomed: A, setZoomed: T } = (0, E.Y)(),
        R = (function (e, n, t) {
            return e && p.Z.isDiscordUrl(n, !0)
                ? (0, o.s$)(n)
                : (0, h.q)({
                      proxyURL: t,
                      url: n
                  });
        })(A, I, y),
        { width: j, height: N } = (0, m.zp)(null != x ? x : 0, null != C ? C : 0),
        D = !(null == x || 0 === x || null == C || 0 === C);
    if ('VIDEO' === O && D && null != y) {
        var P;
        let e = S(y);
        if (null == e) return null;
        let n = null !== (P = t.renderLinkComponent) && void 0 !== P ? P : d.iT;
        return (0, i.jsx)(u.Z, {
            ...L,
            src: R,
            width: x,
            height: C,
            maxWidth: j,
            maxHeight: N,
            poster: e,
            naturalWidth: x,
            naturalHeight: C,
            volume: f.FC,
            autoMute: f.rs,
            onVolumeChange: f.jA,
            onMute: f.Zj,
            renderLinkComponent: n,
            autoPlay: !r,
            alt: v,
            onContextMenu: l
        });
    }
    return (
        'IMAGE' === O &&
            (n = D
                ? (0, i.jsx)(s.ZP, {
                      ...L,
                      src: R,
                      width: x,
                      height: C,
                      shouldLink: !1,
                      maxWidth: j,
                      maxHeight: N,
                      useFullWidth: !0,
                      animated: !r && t.animated,
                      autoPlay: !r,
                      alt: v,
                      zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                      onContextMenu: l
                  })
                : (0, i.jsx)('img', {
                      src: R,
                      alt: v,
                      onContextMenu: l,
                      className: g.dimensionlessImage
                  })),
        null != n
            ? (0, i.jsx)(c.Z, {
                  width: x,
                  height: C,
                  maxWidth: j,
                  maxHeight: N,
                  active: A,
                  className: a()(g.wrapper, { [g.zoomed]: A }),
                  onClick: () => {
                      T(!A), (0, _.yg)(A ? _.uG.ZOOM_OUT_IMAGE_PRESSED : _.uG.ZOOM_IN_IMAGE_PRESSED);
                  },
                  children: n
              })
            : null
    );
});
