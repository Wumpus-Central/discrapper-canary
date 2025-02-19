n.d(t, {
    D: () => T,
    Z: () => A
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
    p = n(956664),
    _ = n(589530),
    h = n(591759),
    m = n(254109),
    g = n(212459),
    E = n(505363);
function v(e, t, n) {
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
                v(e, t, n[t]);
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
function S(e, t) {
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
function T(e) {
    let t = h.Z.toURLSafe(e);
    return null == t ? null : (t.searchParams.append('format', 'webp'), t.toString());
}
function N(e) {
    var t, n, i, o, s;
    let f,
        { media: h, obscured: v = !1, padding: y, onContextMenu: I } = e,
        { width: N, height: A, url: R, proxyUrl: P, alt: w, type: D, maxWidth: x, maxHeight: L } = h,
        M = S(h, ['width', 'height', 'url', 'proxyUrl', 'alt', 'type', 'maxWidth', 'maxHeight']),
        { zoomed: k, setZoomed: j } = (0, g.Y)(),
        U = C(k, R, P),
        G = {
            vertical: (null !== (t = null == y ? void 0 : y.top) && void 0 !== t ? t : 0) + (null !== (n = null == y ? void 0 : y.bottom) && void 0 !== n ? n : 0),
            horizontal: (null !== (i = null == y ? void 0 : y.left) && void 0 !== i ? i : 0) + (null !== (o = null == y ? void 0 : y.right) && void 0 !== o ? o : 0)
        },
        { width: B, height: Z } = (0, p.zp)(null != N ? N : 0, null != A ? A : 0, G),
        F = null != N && 0 !== N && null != A && 0 !== A;
    if ('VIDEO' === D && F && null != P) {
        let e = T(P);
        if (null == e) return null;
        let t = null !== (s = h.renderLinkComponent) && void 0 !== s ? s : d.iT;
        return (0, r.jsx)(
            c.Z,
            O(b({}, M), {
                src: U,
                width: N,
                height: A,
                maxWidth: B,
                maxHeight: Z,
                poster: e,
                naturalWidth: N,
                naturalHeight: A,
                volume: _.FC,
                autoMute: _.rs,
                onVolumeChange: _.jA,
                onMute: _.Zj,
                renderLinkComponent: t,
                autoPlay: !v,
                alt: w,
                onContextMenu: I
            })
        );
    }
    return (
        'IMAGE' === D &&
            (f = F
                ? (0, r.jsx)(
                      l.ZP,
                      O(b({}, M), {
                          src: U,
                          width: N,
                          height: A,
                          shouldLink: !1,
                          maxWidth: B,
                          maxHeight: Z,
                          useFullWidth: !0,
                          animated: !v && h.animated,
                          autoPlay: !v,
                          alt: w,
                          zoomThumbnailPlaceholder: h.zoomThumbnailPlaceholder,
                          onContextMenu: I
                      })
                  )
                : (0, r.jsx)('img', {
                      src: U,
                      alt: w,
                      onContextMenu: I,
                      className: E.dimensionlessImage
                  })),
        null != f
            ? (0, r.jsx)(u.Z, {
                  width: N,
                  height: A,
                  maxWidth: B,
                  maxHeight: Z,
                  active: k,
                  className: a()(E.wrapper, { [E.zoomed]: k }),
                  panPadding: y,
                  onClick: () => {
                      j(!k), (0, m.yg)(k ? m.uG.ZOOM_OUT_IMAGE_PRESSED : m.uG.ZOOM_IN_IMAGE_PRESSED);
                  },
                  children: f
              })
            : null
    );
}
let A = i.memo(N);
function C(e, t, n) {
    return e && (0, s.rV)(t)
        ? (0, s.s$)(t)
        : (0, f.q)({
              proxyURL: n,
              url: t
          });
}
