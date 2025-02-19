n.d(t, {
    D: () => I,
    Z: () => N
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(378409),
    l = n(124347),
    c = n(80966),
    u = n(480050),
    d = n(524444),
    f = n(52824),
    p = n(589530),
    _ = n(591759),
    h = n(254109),
    m = n(212459),
    g = n(505363);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function I(e) {
    let t = _.Z.toURLSafe(e);
    return null == t ? null : (t.searchParams.append('format', 'webp'), t.toString());
}
function T(e) {
    let t,
        { media: n, obscured: i = !1, maxWidth: o, maxHeight: s, onContextMenu: f } = e,
        { width: _, height: E, url: b, proxyUrl: S, alt: T, type: N, maxWidth: C, maxHeight: R } = n,
        P = O(n, ['width', 'height', 'url', 'proxyUrl', 'alt', 'type', 'maxWidth', 'maxHeight']),
        { zoomed: w, setZoomed: D } = (0, m.Y)(),
        x = A(w, b, S),
        L = null != _ && 0 !== _ && null != E && 0 !== E;
    if ('VIDEO' === N && L && null != S) {
        var M;
        let e = I(S);
        if (null == e) return null;
        let t = null !== (M = n.renderLinkComponent) && void 0 !== M ? M : d.iT;
        return (0, r.jsx)(
            c.Z,
            y(v({}, P), {
                src: x,
                width: _,
                height: E,
                maxWidth: o,
                maxHeight: s,
                poster: e,
                naturalWidth: _,
                naturalHeight: E,
                volume: p.FC,
                autoMute: p.rs,
                onVolumeChange: p.jA,
                onMute: p.Zj,
                renderLinkComponent: t,
                autoPlay: !i,
                alt: T,
                onContextMenu: f
            })
        );
    }
    return (
        'IMAGE' === N &&
            (t = L
                ? (0, r.jsx)(
                      l.ZP,
                      y(v({}, P), {
                          src: x,
                          width: _,
                          height: E,
                          maxWidth: o,
                          maxHeight: s,
                          useFullWidth: !0,
                          shouldLink: !1,
                          className: g.media,
                          animated: !i && n.animated,
                          autoPlay: !i,
                          alt: T,
                          onContextMenu: f
                      })
                  )
                : (0, r.jsx)('img', {
                      src: x,
                      alt: T,
                      onContextMenu: f,
                      className: g.dimensionlessImage,
                      style: {
                          maxWidth: o,
                          maxHeight: s
                      }
                  })),
        null != t
            ? (0, r.jsx)(u.Z, {
                  width: _,
                  height: E,
                  maxWidth: o,
                  maxHeight: s,
                  active: w,
                  className: a()(g.wrapper, { [g.zoomed]: w }),
                  onClick: () => {
                      D(!w), (0, h.yg)(w ? h.uG.ZOOM_OUT_IMAGE_PRESSED : h.uG.ZOOM_IN_IMAGE_PRESSED);
                  },
                  children: t
              })
            : null
    );
}
let N = i.memo(T);
function A(e, t, n) {
    return e && (0, s.rV)(t)
        ? (0, s.s$)(t)
        : (0, f.q)({
              proxyURL: n,
              url: t
          });
}
