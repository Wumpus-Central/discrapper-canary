n.d(t, {
    D: () => S,
    Z: () => A
});
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(124347),
    l = n(80966),
    c = n(480050),
    u = n(296182),
    d = n(524444),
    f = n(52824),
    _ = n(589530),
    p = n(591759),
    h = n(254109),
    m = n(212459),
    g = n(986261);
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
function b(e) {
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
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e) {
    let t = p.Z.toURLSafe(e);
    return null == t ? null : (t.searchParams.append('format', 'webp'), t.toString());
}
function T(e) {
    let t,
        { media: n, obscured: i = !1, maxWidth: o, maxHeight: u, onContextMenu: f } = e,
        { width: p, height: E, url: y, proxyUrl: I, alt: T, type: A, maxWidth: C, maxHeight: R } = n,
        P = v(n, ['width', 'height', 'url', 'proxyUrl', 'alt', 'type', 'maxWidth', 'maxHeight']),
        { zoomed: w, setZoomed: D } = (0, m.Y)(),
        L = N(w, y, I),
        x = null != p && 0 !== p && null != E && 0 !== E;
    if ('VIDEO' === A && x && null != I) {
        var M;
        let e = S(I);
        if (null == e) return null;
        let t = null != (M = n.renderLinkComponent) ? M : d.iT;
        return (0, r.jsx)(
            l.Z,
            O(b({}, P), {
                src: L,
                width: p,
                height: E,
                maxWidth: o,
                maxHeight: u,
                poster: e,
                naturalWidth: p,
                naturalHeight: E,
                volume: _.FC,
                autoMute: _.rs,
                onVolumeChange: _.jA,
                onMute: _.Zj,
                renderLinkComponent: t,
                autoPlay: !i,
                alt: T,
                onContextMenu: f
            })
        );
    }
    return (
        'IMAGE' === A &&
            (t = x
                ? (0, r.jsx)(
                      s.ZP,
                      O(b({}, P), {
                          src: L,
                          width: p,
                          height: E,
                          maxWidth: o,
                          maxHeight: u,
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
                      src: L,
                      alt: T,
                      onContextMenu: f,
                      className: g.dimensionlessImage,
                      style: {
                          maxWidth: o,
                          maxHeight: u
                      }
                  })),
        null != t
            ? (0, r.jsx)(c.Z, {
                  width: p,
                  height: E,
                  maxWidth: o,
                  maxHeight: u,
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
let A = i.memo(T);
function N(e, t, n) {
    return e && p.Z.isDiscordAssetUrl(t)
        ? (0, u.s$)(t)
        : (0, f.q)({
              proxyURL: n,
              url: t
          });
}
