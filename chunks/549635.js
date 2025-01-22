r.d(n, {
    D: function () {
        return y;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(378409),
    u = r(124347),
    c = r(80966),
    d = r(480050),
    f = r(524444),
    p = r(52824),
    h = r(956664),
    _ = r(589530),
    m = r(591759),
    g = r(254109),
    E = r(212459),
    v = r(427244);
function y(e) {
    let n = m.Z.toURLSafe(e);
    return null == n ? null : (n.searchParams.append('format', 'webp'), n.toString());
}
function b(e) {
    var n, r, a, o, l;
    let p,
        { media: m, obscured: b = !1, padding: T, onContextMenu: S } = e,
        { width: A, height: C, url: N, proxyUrl: R, alt: O, type: D, maxWidth: L, maxHeight: x, ...w } = m,
        { zoomed: P, setZoomed: M } = (0, E.Y)(),
        k = I(P, N, R),
        U = {
            vertical: (null !== (n = null == T ? void 0 : T.top) && void 0 !== n ? n : 0) + (null !== (r = null == T ? void 0 : T.bottom) && void 0 !== r ? r : 0),
            horizontal: (null !== (a = null == T ? void 0 : T.left) && void 0 !== a ? a : 0) + (null !== (o = null == T ? void 0 : T.right) && void 0 !== o ? o : 0)
        },
        { width: B, height: G } = (0, h.zp)(null != A ? A : 0, null != C ? C : 0, U),
        Z = !(null == A || 0 === A || null == C || 0 === C);
    if ('VIDEO' === D && Z && null != R) {
        let e = y(R);
        if (null == e) return null;
        let n = null !== (l = m.renderLinkComponent) && void 0 !== l ? l : f.iT;
        return (0, i.jsx)(c.Z, {
            ...w,
            src: k,
            width: A,
            height: C,
            maxWidth: B,
            maxHeight: G,
            poster: e,
            naturalWidth: A,
            naturalHeight: C,
            volume: _.FC,
            autoMute: _.rs,
            onVolumeChange: _.jA,
            onMute: _.Zj,
            renderLinkComponent: n,
            autoPlay: !b,
            alt: O,
            onContextMenu: S
        });
    }
    return (
        'IMAGE' === D &&
            (p = Z
                ? (0, i.jsx)(u.ZP, {
                      ...w,
                      src: k,
                      width: A,
                      height: C,
                      shouldLink: !1,
                      maxWidth: B,
                      maxHeight: G,
                      useFullWidth: !0,
                      animated: !b && m.animated,
                      autoPlay: !b,
                      alt: O,
                      zoomThumbnailPlaceholder: m.zoomThumbnailPlaceholder,
                      onContextMenu: S
                  })
                : (0, i.jsx)('img', {
                      src: k,
                      alt: O,
                      onContextMenu: S,
                      className: v.dimensionlessImage
                  })),
        null != p
            ? (0, i.jsx)(d.Z, {
                  width: A,
                  height: C,
                  maxWidth: B,
                  maxHeight: G,
                  active: P,
                  className: s()(v.wrapper, { [v.zoomed]: P }),
                  panPadding: T,
                  onClick: () => {
                      M(!P), (0, g.yg)(P ? g.uG.ZOOM_OUT_IMAGE_PRESSED : g.uG.ZOOM_IN_IMAGE_PRESSED);
                  },
                  children: p
              })
            : null
    );
}
function I(e, n, r) {
    return e && (0, l.rV)(n)
        ? (0, l.s$)(n)
        : (0, p.q)({
              proxyURL: r,
              url: n
          });
}
n.Z = a.memo(b);
