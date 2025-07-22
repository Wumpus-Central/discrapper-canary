(n.d(t, {
    Dt: () => T,
    ZP: () => A,
    ze: () => I
}),
    n(997841));
var r = n(255367),
    i = n(73800),
    a = n(768494),
    o = n(124347),
    s = n(80966),
    l = n(296182),
    c = n(524444),
    u = n(52824),
    d = n(630388),
    _ = n(589530),
    f = n(591759),
    p = n(212459),
    h = n(116475),
    m = n(986261);
function g(e, t, n) {
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
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            }));
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function I(e, t) {
    return y(E({}, e), {
        type: (0, a.hg)(e),
        original: e.url,
        srcIsAnimated: (0, d.yE)(e.flags, a.hR.IS_ANIMATED),
        sourceMetadata: { message: t }
    });
}
function T(e) {
    let t = f.Z.toURLSafe(e);
    return null == t ? null : (t.searchParams.append('format', 'webp'), t.toString());
}
function S(e) {
    let t,
        { media: n, obscured: i = !1, maxWidth: a, maxHeight: l, onContextMenu: u } = e,
        { width: d, height: f, url: g, proxyUrl: b, alt: v, type: I, maxWidth: S, maxHeight: A } = n,
        C = O(n, ['width', 'height', 'url', 'proxyUrl', 'alt', 'type', 'maxWidth', 'maxHeight']),
        { zoomed: R } = (0, p.Y)(),
        P = N(R, g, b),
        w = null != d && 0 !== d && null != f && 0 !== f;
    if ('VIDEO' === I && w && null != b) {
        var D;
        let e = T(b);
        if (null == e) return null;
        let t = null != (D = n.renderLinkComponent) ? D : c.iT;
        return (0, r.jsx)(
            s.Z,
            y(E({}, C), {
                src: P,
                width: d,
                height: f,
                maxWidth: a,
                maxHeight: l,
                poster: e,
                naturalWidth: d,
                naturalHeight: f,
                volume: _.FC,
                autoMute: _.rs,
                onVolumeChange: _.jA,
                onMute: _.Zj,
                renderLinkComponent: t,
                autoPlay: !i,
                alt: v,
                onContextMenu: u,
                disableArrowKeySeek: !0
            })
        );
    }
    return (
        'IMAGE' === I &&
            (t = w
                ? (0, r.jsx)(
                      o.ZP,
                      y(E({}, C), {
                          src: P,
                          width: d,
                          height: f,
                          maxWidth: a,
                          maxHeight: l,
                          useFullWidth: !0,
                          shouldLink: !1,
                          className: m.media,
                          animated: !i && n.animated,
                          autoPlay: !i,
                          alt: v,
                          onContextMenu: u
                      })
                  )
                : (0, r.jsx)('img', {
                      src: P,
                      alt: v,
                      onContextMenu: u,
                      className: m.dimensionlessImage,
                      style: {
                          maxWidth: a,
                          maxHeight: l
                      }
                  })),
        null != t ? (0, r.jsx)(h.Z, { children: t }) : null
    );
}
let A = i.memo(S);
function N(e, t, n) {
    return e && f.Z.isDiscordAssetUrl(t)
        ? (0, l.s$)(t)
        : (0, u.q)({
              proxyURL: n,
              url: t
          });
}
