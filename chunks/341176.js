n.d(t, {
    D: () => p,
    Z: () => g
});
var i = n(200651),
    a = n(120356),
    r = n.n(a),
    l = n(524444),
    s = n(52824),
    o = n(956664),
    c = n(589530),
    d = n(591759),
    u = n(124347),
    m = n(80966),
    h = n(201262);
let p = {
    DEFAULT: null,
    CONTAIN: h.contain,
    SCALE_DOWN: h.scaleDown
};
function g(e) {
    let { media: t, fit: n = p.DEFAULT, obscured: a = !1, onContextMenu: g } = e,
        { width: _, height: x, url: C, proxyUrl: v, alt: f, type: I, maxWidth: b, maxHeight: j, ...S } = t,
        { width: N, height: E } = (0, o.zp)(null != _ ? _ : 0, null != x ? x : 0),
        y = (0, s.q)({
            proxyURL: v,
            url: C
        }),
        P = !(null == _ || 0 === _ || null == x || 0 === x);
    if ('VIDEO' === I && P && null != v) {
        var A;
        let e = (function (e) {
            let t = d.Z.toURLSafe(e);
            return null == t ? null : (t.searchParams.append('format', 'webp'), t.toString());
        })(v);
        if (null == e) return null;
        let n = null !== (A = t.renderLinkComponent) && void 0 !== A ? A : l.iT;
        return (0, i.jsx)(m.Z, {
            ...S,
            src: y,
            width: _,
            height: x,
            maxWidth: N,
            maxHeight: E,
            poster: e,
            naturalWidth: _,
            naturalHeight: x,
            volume: c.FC,
            autoMute: c.rs,
            onVolumeChange: c.jA,
            onMute: c.Zj,
            renderLinkComponent: n,
            autoPlay: !a,
            alt: f,
            onContextMenu: g
        });
    }
    return 'IMAGE' === I
        ? P
            ? (0, i.jsx)(u.ZP, {
                  ...S,
                  imageClassName: r()(h.slide, n),
                  src: y,
                  width: _,
                  height: x,
                  shouldLink: !1,
                  maxWidth: N,
                  maxHeight: E,
                  animated: !a && t.animated,
                  autoPlay: !a,
                  alt: f,
                  zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                  onContextMenu: g
              })
            : (0, i.jsx)('img', {
                  src: y,
                  alt: f,
                  className: r()(h.slide, n),
                  onContextMenu: g
              })
        : null;
}
