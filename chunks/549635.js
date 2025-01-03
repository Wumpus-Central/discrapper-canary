t.d(n, {
    D: function () {
        return S;
    }
});
var i = t(200651),
    r = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(378409),
    s = t(124347),
    u = t(80966),
    c = t(480050),
    d = t(524444),
    h = t(52824),
    f = t(956664),
    m = t(589530),
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
        { media: t, obscured: r = !1, onContextMenu: a } = e,
        { width: p, height: x, url: C, proxyUrl: I, alt: y, type: v, maxWidth: O, maxHeight: b, ...M } = t,
        { zoomed: L, setZoomed: A } = (0, E.Y)(),
        T = (function (e, n, t) {
            return e && (0, o.rV)(n)
                ? (0, o.s$)(n)
                : (0, h.q)({
                      proxyURL: t,
                      url: n
                  });
        })(L, C, I),
        { width: R, height: j } = (0, f.zp)(null != p ? p : 0, null != x ? x : 0),
        N = !(null == p || 0 === p || null == x || 0 === x);
    if ('VIDEO' === v && N && null != I) {
        var D;
        let e = S(I);
        if (null == e) return null;
        let n = null !== (D = t.renderLinkComponent) && void 0 !== D ? D : d.iT;
        return (0, i.jsx)(u.Z, {
            ...M,
            src: T,
            width: p,
            height: x,
            maxWidth: R,
            maxHeight: j,
            poster: e,
            naturalWidth: p,
            naturalHeight: x,
            volume: m.FC,
            autoMute: m.rs,
            onVolumeChange: m.jA,
            onMute: m.Zj,
            renderLinkComponent: n,
            autoPlay: !r,
            alt: y,
            onContextMenu: a
        });
    }
    return (
        'IMAGE' === v &&
            (n = N
                ? (0, i.jsx)(s.ZP, {
                      ...M,
                      src: T,
                      width: p,
                      height: x,
                      shouldLink: !1,
                      maxWidth: R,
                      maxHeight: j,
                      useFullWidth: !0,
                      animated: !r && t.animated,
                      autoPlay: !r,
                      alt: y,
                      zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                      onContextMenu: a
                  })
                : (0, i.jsx)('img', {
                      src: T,
                      alt: y,
                      onContextMenu: a,
                      className: g.dimensionlessImage
                  })),
        null != n
            ? (0, i.jsx)(c.Z, {
                  width: p,
                  height: x,
                  maxWidth: R,
                  maxHeight: j,
                  active: L,
                  className: l()(g.wrapper, { [g.zoomed]: L }),
                  onClick: () => {
                      A(!L), (0, _.yg)(L ? _.uG.ZOOM_OUT_IMAGE_PRESSED : _.uG.ZOOM_IN_IMAGE_PRESSED);
                  },
                  children: n
              })
            : null
    );
});
