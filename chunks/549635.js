n.d(t, {
    Dt: () => N,
    ZP: () => P,
    ze: () => A
}),
    n(997841);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(768494),
    l = n(124347),
    c = n(80966),
    u = n(480050),
    d = n(296182),
    f = n(524444),
    _ = n(52824),
    p = n(630388),
    h = n(589530),
    m = n(591759),
    g = n(254109),
    E = n(212459),
    b = n(264146);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function A(e, t) {
    return I(O({}, e), {
        type: (0, s.hg)(e),
        original: e.url,
        srcIsAnimated: (0, p.yE)(e.flags, s.hR.IS_ANIMATED),
        sourceMetadata: { message: t }
    });
}
function N(e) {
    let t = m.Z.toURLSafe(e);
    return null == t ? null : (t.searchParams.append('format', 'webp'), t.toString());
}
function C(e) {
    let t,
        { media: n, obscured: i = !1, maxWidth: o, maxHeight: s, onContextMenu: d } = e,
        { width: _, height: p, url: m, proxyUrl: y, alt: v, type: T, maxWidth: A, maxHeight: C } = n,
        P = S(n, ['width', 'height', 'url', 'proxyUrl', 'alt', 'type', 'maxWidth', 'maxHeight']),
        { zoomed: w, setZoomed: D } = (0, E.Y)(),
        L = R(w, m, y),
        x = null != _ && 0 !== _ && null != p && 0 !== p;
    if ('VIDEO' === T && x && null != y) {
        var k;
        let e = N(y);
        if (null == e) return null;
        let t = null != (k = n.renderLinkComponent) ? k : f.iT;
        return (0, r.jsx)(
            c.Z,
            I(O({}, P), {
                src: L,
                width: _,
                height: p,
                maxWidth: o,
                maxHeight: s,
                poster: e,
                naturalWidth: _,
                naturalHeight: p,
                volume: h.FC,
                autoMute: h.rs,
                onVolumeChange: h.jA,
                onMute: h.Zj,
                renderLinkComponent: t,
                autoPlay: !i,
                alt: v,
                onContextMenu: d
            })
        );
    }
    return (
        'IMAGE' === T &&
            (t = x
                ? (0, r.jsx)(
                      l.ZP,
                      I(O({}, P), {
                          src: L,
                          width: _,
                          height: p,
                          maxWidth: o,
                          maxHeight: s,
                          useFullWidth: !0,
                          shouldLink: !1,
                          className: b.media,
                          animated: !i && n.animated,
                          autoPlay: !i,
                          alt: v,
                          onContextMenu: d
                      })
                  )
                : (0, r.jsx)('img', {
                      src: L,
                      alt: v,
                      onContextMenu: d,
                      className: b.dimensionlessImage,
                      style: {
                          maxWidth: o,
                          maxHeight: s
                      }
                  })),
        null != t
            ? (0, r.jsx)(u.Z, {
                  width: _,
                  height: p,
                  maxWidth: o,
                  maxHeight: s,
                  active: w,
                  className: a()(b.wrapper, { [b.zoomed]: w }),
                  onClick: () => {
                      D(!w), (0, g.yg)(w ? g.uG.ZOOM_OUT_IMAGE_PRESSED : g.uG.ZOOM_IN_IMAGE_PRESSED);
                  },
                  children: t
              })
            : null
    );
}
let P = i.memo(C);
function R(e, t, n) {
    return e && m.Z.isDiscordAssetUrl(t)
        ? (0, d.s$)(t)
        : (0, _.q)({
              proxyURL: n,
              url: t
          });
}
