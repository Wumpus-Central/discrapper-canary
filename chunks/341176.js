n.d(t, {
    D: () => f,
    Z: () => _
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
    m = n(197617);
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
let f = {
    DEFAULT: null,
    CONTAIN: m.contain,
    SCALE_DOWN: m.scaleDown
};
function _(e) {
    let { media: t, fit: n = f.DEFAULT, obscured: a = !1, onContextMenu: _ } = e,
        { width: b, height: x, url: v, proxyUrl: C, alt: j, type: y, maxWidth: O, maxHeight: I } = t,
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
        { width: P, height: S } = (0, s.zp)(null != b ? b : 0, null != x ? x : 0),
        E = (0, o.q)({
            proxyURL: C,
            url: v
        }),
        T = null != b && 0 !== b && null != x && 0 !== x;
    if ('VIDEO' === y && T && null != C) {
        var A;
        let e = (function (e) {
            let t = d.Z.toURLSafe(e);
            return null == t ? null : (t.searchParams.append('format', 'webp'), t.toString());
        })(C);
        if (null == e) return null;
        let n = null != (A = t.renderLinkComponent) ? A : l.iT;
        return (0, r.jsx)(
            p.Z,
            g(h({}, N), {
                src: E,
                width: b,
                height: x,
                maxWidth: P,
                maxHeight: S,
                poster: e,
                naturalWidth: b,
                naturalHeight: x,
                volume: c.FC,
                autoMute: c.rs,
                onVolumeChange: c.jA,
                onMute: c.Zj,
                renderLinkComponent: n,
                autoPlay: !a,
                alt: j,
                onContextMenu: _
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
                      width: b,
                      height: x,
                      shouldLink: !1,
                      maxWidth: P,
                      maxHeight: S,
                      animated: !a && t.animated,
                      autoPlay: !a,
                      alt: j,
                      zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                      onContextMenu: _
                  })
              )
            : (0, r.jsx)('img', {
                  src: E,
                  alt: j,
                  className: i()(m.slide, n),
                  onContextMenu: _
              })
        : null;
}
