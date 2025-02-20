n.d(t, {
    D: () => _,
    Z: () => f
});
var r = n(200651),
    a = n(120356),
    i = n.n(a),
    l = n(524444),
    o = n(52824),
    s = n(956664),
    c = n(589530),
    d = n(591759),
    u = n(124347),
    p = n(80966),
    m = n(168529);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = {
    DEFAULT: null,
    CONTAIN: m.contain,
    SCALE_DOWN: m.scaleDown
};
function f(e) {
    let { media: t, fit: n = _.DEFAULT, obscured: a = !1, onContextMenu: f } = e,
        { width: v, height: b, url: x, proxyUrl: C, alt: j, type: y, maxWidth: O, maxHeight: I } = t,
        N = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(t, ['width', 'height', 'url', 'proxyUrl', 'alt', 'type', 'maxWidth', 'maxHeight']),
        { width: P, height: S } = (0, s.zp)(null != v ? v : 0, null != b ? b : 0),
        E = (0, o.q)({
            proxyURL: C,
            url: x
        }),
        T = null != v && 0 !== v && null != b && 0 !== b;
    if ('VIDEO' === y && T && null != C) {
        var A;
        let e = (function (e) {
            let t = d.Z.toURLSafe(e);
            return null == t ? null : (t.searchParams.append('format', 'webp'), t.toString());
        })(C);
        if (null == e) return null;
        let n = null !== (A = t.renderLinkComponent) && void 0 !== A ? A : l.iT;
        return (0, r.jsx)(
            p.Z,
            g(h({}, N), {
                src: E,
                width: v,
                height: b,
                maxWidth: P,
                maxHeight: S,
                poster: e,
                naturalWidth: v,
                naturalHeight: b,
                volume: c.FC,
                autoMute: c.rs,
                onVolumeChange: c.jA,
                onMute: c.Zj,
                renderLinkComponent: n,
                autoPlay: !a,
                alt: j,
                onContextMenu: f
            })
        );
    }
    return 'IMAGE' === y
        ? T
            ? (0, r.jsx)(
                  u.ZP,
                  g(h({}, N), {
                      imageClassName: i()(m.slide, n),
                      src: E,
                      width: v,
                      height: b,
                      shouldLink: !1,
                      maxWidth: P,
                      maxHeight: S,
                      animated: !a && t.animated,
                      autoPlay: !a,
                      alt: j,
                      zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                      onContextMenu: f
                  })
              )
            : (0, r.jsx)('img', {
                  src: E,
                  alt: j,
                  className: i()(m.slide, n),
                  onContextMenu: f
              })
        : null;
}
