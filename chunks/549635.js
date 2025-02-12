n.d(t, {
    D: () => v,
    Z: () => I
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(378409),
    l = n(124347),
    u = n(80966),
    c = n(480050),
    d = n(524444),
    f = n(52824),
    _ = n(956664),
    p = n(589530),
    h = n(591759),
    m = n(254109),
    g = n(212459),
    E = n(997169);
function v(e) {
    let t = h.Z.toURLSafe(e);
    return null == t ? null : (t.searchParams.append('format', 'webp'), t.toString());
}
function y(e) {
    var t, n, r, a, o;
    let f,
        { media: h, obscured: y = !1, padding: I, onContextMenu: b } = e,
        { width: S, height: A, url: N, proxyUrl: C, alt: R, type: O, maxWidth: D, maxHeight: L, ...x } = h,
        { zoomed: P, setZoomed: w } = (0, g.Y)(),
        M = T(P, N, C),
        k = {
            vertical: (null !== (t = null == I ? void 0 : I.top) && void 0 !== t ? t : 0) + (null !== (n = null == I ? void 0 : I.bottom) && void 0 !== n ? n : 0),
            horizontal: (null !== (r = null == I ? void 0 : I.left) && void 0 !== r ? r : 0) + (null !== (a = null == I ? void 0 : I.right) && void 0 !== a ? a : 0)
        },
        { width: U, height: G } = (0, _.zp)(null != S ? S : 0, null != A ? A : 0, k),
        B = !(null == S || 0 === S || null == A || 0 === A);
    if ('VIDEO' === O && B && null != C) {
        let e = v(C);
        if (null == e) return null;
        let t = null !== (o = h.renderLinkComponent) && void 0 !== o ? o : d.iT;
        return (0, i.jsx)(u.Z, {
            ...x,
            src: M,
            width: S,
            height: A,
            maxWidth: U,
            maxHeight: G,
            poster: e,
            naturalWidth: S,
            naturalHeight: A,
            volume: p.FC,
            autoMute: p.rs,
            onVolumeChange: p.jA,
            onMute: p.Zj,
            renderLinkComponent: t,
            autoPlay: !y,
            alt: R,
            onContextMenu: b
        });
    }
    return (
        'IMAGE' === O &&
            (f = B
                ? (0, i.jsx)(l.ZP, {
                      ...x,
                      src: M,
                      width: S,
                      height: A,
                      shouldLink: !1,
                      maxWidth: U,
                      maxHeight: G,
                      useFullWidth: !0,
                      animated: !y && h.animated,
                      autoPlay: !y,
                      alt: R,
                      zoomThumbnailPlaceholder: h.zoomThumbnailPlaceholder,
                      onContextMenu: b
                  })
                : (0, i.jsx)('img', {
                      src: M,
                      alt: R,
                      onContextMenu: b,
                      className: E.dimensionlessImage
                  })),
        null != f
            ? (0, i.jsx)(c.Z, {
                  width: S,
                  height: A,
                  maxWidth: U,
                  maxHeight: G,
                  active: P,
                  className: s()(E.wrapper, { [E.zoomed]: P }),
                  panPadding: I,
                  onClick: () => {
                      w(!P), (0, m.yg)(P ? m.uG.ZOOM_OUT_IMAGE_PRESSED : m.uG.ZOOM_IN_IMAGE_PRESSED);
                  },
                  children: f
              })
            : null
    );
}
let I = r.memo(y);
function T(e, t, n) {
    return e && (0, o.rV)(t)
        ? (0, o.s$)(t)
        : (0, f.q)({
              proxyURL: n,
              url: t
          });
}
