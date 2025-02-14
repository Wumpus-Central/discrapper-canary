t.d(n, {
    D: () => f,
    Z: () => p
});
var a = t(200651),
    i = t(120356),
    r = t.n(i),
    l = t(524444),
    o = t(52824),
    s = t(956664),
    c = t(589530),
    u = t(591759),
    d = t(124347),
    _ = t(80966),
    h = t(201262);
let f = {
    DEFAULT: null,
    CONTAIN: h.contain,
    SCALE_DOWN: h.scaleDown
};
function p(e) {
    let { media: n, fit: t = f.DEFAULT, obscured: i = !1, onContextMenu: p } = e,
        { width: C, height: m, url: E, proxyUrl: S, alt: g, type: L, maxWidth: x, maxHeight: O, ...v } = n,
        { width: b, height: A } = (0, s.zp)(null != C ? C : 0, null != m ? m : 0),
        N = (0, o.q)({
            proxyURL: S,
            url: E
        }),
        D = !(null == C || 0 === C || null == m || 0 === m);
    if ('VIDEO' === L && D && null != S) {
        var R;
        let e = (function (e) {
            let n = u.Z.toURLSafe(e);
            return null == n ? null : (n.searchParams.append('format', 'webp'), n.toString());
        })(S);
        if (null == e) return null;
        let t = null !== (R = n.renderLinkComponent) && void 0 !== R ? R : l.iT;
        return (0, a.jsx)(_.Z, {
            ...v,
            src: N,
            width: C,
            height: m,
            maxWidth: b,
            maxHeight: A,
            poster: e,
            naturalWidth: C,
            naturalHeight: m,
            volume: c.FC,
            autoMute: c.rs,
            onVolumeChange: c.jA,
            onMute: c.Zj,
            renderLinkComponent: t,
            autoPlay: !i,
            alt: g,
            onContextMenu: p
        });
    }
    return 'IMAGE' === L
        ? D
            ? (0, a.jsx)(d.ZP, {
                  ...v,
                  imageClassName: r()(h.slide, t),
                  src: N,
                  width: C,
                  height: m,
                  shouldLink: !1,
                  maxWidth: b,
                  maxHeight: A,
                  animated: !i && n.animated,
                  autoPlay: !i,
                  alt: g,
                  zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                  onContextMenu: p
              })
            : (0, a.jsx)('img', {
                  src: N,
                  alt: g,
                  className: r()(h.slide, t),
                  onContextMenu: p
              })
        : null;
}
