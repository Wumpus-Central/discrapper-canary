t.d(n, {
    D: function () {
        return h;
    },
    Z: function () {
        return p;
    }
});
var a = t(200651),
    r = t(120356),
    i = t.n(r),
    l = t(524444),
    o = t(52824),
    s = t(956664),
    u = t(589530),
    c = t(591759),
    d = t(124347),
    f = t(80966),
    _ = t(891589);
let h = {
    DEFAULT: null,
    CONTAIN: _.contain,
    SCALE_DOWN: _.scaleDown
};
function p(e) {
    let { media: n, fit: t = h.DEFAULT, obscured: r = !1, onContextMenu: p } = e,
        { width: m, height: C, url: E, proxyUrl: S, alt: g, type: L, maxWidth: O, maxHeight: x, ...A } = n,
        { width: v, height: N } = (0, s.zp)(null != m ? m : 0, null != C ? C : 0),
        R = (0, o.q)({
            proxyURL: S,
            url: E
        }),
        b = !(null == m || 0 === m || null == C || 0 === C);
    if ('VIDEO' === L && b && null != S) {
        var D;
        let e = (function (e) {
            let n = c.Z.toURLSafe(e);
            return null == n ? null : (n.searchParams.append('format', 'webp'), n.toString());
        })(S);
        if (null == e) return null;
        let t = null !== (D = n.renderLinkComponent) && void 0 !== D ? D : l.iT;
        return (0, a.jsx)(f.Z, {
            ...A,
            src: R,
            width: m,
            height: C,
            maxWidth: v,
            maxHeight: N,
            poster: e,
            naturalWidth: m,
            naturalHeight: C,
            volume: u.FC,
            autoMute: u.rs,
            onVolumeChange: u.jA,
            onMute: u.Zj,
            renderLinkComponent: t,
            autoPlay: !r,
            alt: g,
            onContextMenu: p
        });
    }
    if ('IMAGE' === L)
        return b
            ? (0, a.jsx)(d.ZP, {
                  ...A,
                  imageClassName: i()(_.slide, t),
                  src: R,
                  width: m,
                  height: C,
                  shouldLink: !1,
                  maxWidth: v,
                  maxHeight: N,
                  animated: !r && n.animated,
                  autoPlay: !r,
                  alt: g,
                  zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                  onContextMenu: p
              })
            : (0, a.jsx)('img', {
                  src: R,
                  alt: g,
                  className: i()(_.slide, t),
                  onContextMenu: p
              });
    return null;
}
