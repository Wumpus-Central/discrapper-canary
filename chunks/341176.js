r.d(t, {
    D: () => b,
    Z: () => _
});
var n = r(200651),
    a = r(120356),
    o = r.n(a),
    i = r(524444),
    l = r(52824),
    s = r(956664),
    c = r(589530),
    u = r(591759),
    d = r(124347),
    p = r(80966),
    f = r(197617);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let b = {
    DEFAULT: null,
    CONTAIN: f.contain,
    SCALE_DOWN: f.scaleDown
};
function _(e) {
    let { media: t, fit: r = b.DEFAULT, obscured: a = !1, onContextMenu: _ } = e,
        { width: h, height: O, url: y, proxyUrl: v, alt: j, type: x, maxWidth: P, maxHeight: E } = t,
        I = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            }
            return a;
        })(t, ['width', 'height', 'url', 'proxyUrl', 'alt', 'type', 'maxWidth', 'maxHeight']),
        { width: N, height: w } = (0, s.zp)(null != h ? h : 0, null != O ? O : 0),
        C = (0, l.q)({
            proxyURL: v,
            url: y
        }),
        S = null != h && 0 !== h && null != O && 0 !== O;
    if ('VIDEO' === x && S && null != v) {
        var T;
        let e = (function (e) {
            let t = u.Z.toURLSafe(e);
            return null == t ? null : (t.searchParams.append('format', 'webp'), t.toString());
        })(v);
        if (null == e) return null;
        let r = null != (T = t.renderLinkComponent) ? T : i.iT;
        return (0, n.jsx)(
            p.Z,
            g(m({}, I), {
                src: C,
                width: h,
                height: O,
                maxWidth: N,
                maxHeight: w,
                poster: e,
                naturalWidth: h,
                naturalHeight: O,
                volume: c.FC,
                autoMute: c.rs,
                onVolumeChange: c.jA,
                onMute: c.Zj,
                renderLinkComponent: r,
                autoPlay: !a,
                alt: j,
                onContextMenu: _
            })
        );
    }
    return 'IMAGE' === x
        ? S
            ? (0, n.jsx)(
                  d.ZP,
                  g(m({}, I), {
                      imageClassName: o()(f.slide, r),
                      src: C,
                      width: h,
                      height: O,
                      shouldLink: !1,
                      maxWidth: N,
                      maxHeight: w,
                      animated: !a && t.animated,
                      autoPlay: !a,
                      alt: j,
                      zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                      onContextMenu: _
                  })
              )
            : (0, n.jsx)('img', {
                  src: C,
                  alt: j,
                  className: o()(f.slide, r),
                  onContextMenu: _
              })
        : null;
}
