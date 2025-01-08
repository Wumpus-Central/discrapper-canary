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
    f = t(52824),
    h = t(956664),
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
        { media: t, obscured: r = !1, panPadding: l, onContextMenu: p } = e,
        { width: x, height: C, url: y, proxyUrl: I, alt: v, type: O, maxWidth: b, maxHeight: M, ...L } = t,
        { zoomed: A, setZoomed: T } = (0, E.Y)(),
        R = (function (e, n, t) {
            return e && (0, o.rV)(n)
                ? (0, o.s$)(n)
                : (0, f.q)({
                      proxyURL: t,
                      url: n
                  });
        })(A, y, I),
        { width: j, height: N } = (0, h.zp)(null != x ? x : 0, null != C ? C : 0),
        D = !(null == x || 0 === x || null == C || 0 === C);
    if ('VIDEO' === O && D && null != I) {
        var P;
        let e = S(I);
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
            volume: m.FC,
            autoMute: m.rs,
            onVolumeChange: m.jA,
            onMute: m.Zj,
            renderLinkComponent: n,
            autoPlay: !r,
            alt: v,
            onContextMenu: p
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
                      onContextMenu: p
                  })
                : (0, i.jsx)('img', {
                      src: R,
                      alt: v,
                      onContextMenu: p,
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
                  panPadding: l,
                  onClick: () => {
                      T(!A), (0, _.yg)(A ? _.uG.ZOOM_OUT_IMAGE_PRESSED : _.uG.ZOOM_IN_IMAGE_PRESSED);
                  },
                  children: n
              })
            : null
    );
});
