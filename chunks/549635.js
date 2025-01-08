t.d(n, {
    D: function () {
        return S;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(378409),
    s = t(124347),
    u = t(80966),
    c = t(480050),
    d = t(524444),
    f = t(52824),
    m = t(956664),
    h = t(589530),
    p = t(591759),
    g = t(254109),
    _ = t(212459),
    E = t(427244);
function S(e) {
    let n = p.Z.toURLSafe(e);
    return null == n ? null : (n.searchParams.append('format', 'webp'), n.toString());
}
n.Z = l.memo(function (e) {
    var n, t, l, r, p;
    let x,
        { media: v, obscured: C = !1, padding: y, onContextMenu: I } = e,
        { width: b, height: O, url: M, proxyUrl: L, alt: T, type: A, maxWidth: R, maxHeight: j, ...N } = v,
        { zoomed: P, setZoomed: D } = (0, _.Y)(),
        w = (function (e, n, t) {
            return e && (0, o.rV)(n)
                ? (0, o.s$)(n)
                : (0, f.q)({
                      proxyURL: t,
                      url: n
                  });
        })(P, M, L),
        k = {
            vertical: (null !== (n = null == y ? void 0 : y.top) && void 0 !== n ? n : 0) + (null !== (t = null == y ? void 0 : y.bottom) && void 0 !== t ? t : 0),
            horizontal: (null !== (l = null == y ? void 0 : y.left) && void 0 !== l ? l : 0) + (null !== (r = null == y ? void 0 : y.right) && void 0 !== r ? r : 0)
        },
        { width: Z, height: U } = (0, m.zp)(null != b ? b : 0, null != O ? O : 0, k),
        B = !(null == b || 0 === b || null == O || 0 === O);
    if ('VIDEO' === A && B && null != L) {
        let e = S(L);
        if (null == e) return null;
        let n = null !== (p = v.renderLinkComponent) && void 0 !== p ? p : d.iT;
        return (0, i.jsx)(u.Z, {
            ...N,
            src: w,
            width: b,
            height: O,
            maxWidth: Z,
            maxHeight: U,
            poster: e,
            naturalWidth: b,
            naturalHeight: O,
            volume: h.FC,
            autoMute: h.rs,
            onVolumeChange: h.jA,
            onMute: h.Zj,
            renderLinkComponent: n,
            autoPlay: !C,
            alt: T,
            onContextMenu: I
        });
    }
    return (
        'IMAGE' === A &&
            (x = B
                ? (0, i.jsx)(s.ZP, {
                      ...N,
                      src: w,
                      width: b,
                      height: O,
                      shouldLink: !1,
                      maxWidth: Z,
                      maxHeight: U,
                      useFullWidth: !0,
                      animated: !C && v.animated,
                      autoPlay: !C,
                      alt: T,
                      zoomThumbnailPlaceholder: v.zoomThumbnailPlaceholder,
                      onContextMenu: I
                  })
                : (0, i.jsx)('img', {
                      src: w,
                      alt: T,
                      onContextMenu: I,
                      className: E.dimensionlessImage
                  })),
        null != x
            ? (0, i.jsx)(c.Z, {
                  width: b,
                  height: O,
                  maxWidth: Z,
                  maxHeight: U,
                  active: P,
                  className: a()(E.wrapper, { [E.zoomed]: P }),
                  panPadding: y,
                  onClick: () => {
                      D(!P), (0, g.yg)(P ? g.uG.ZOOM_OUT_IMAGE_PRESSED : g.uG.ZOOM_IN_IMAGE_PRESSED);
                  },
                  children: x
              })
            : null
    );
});
