n.d(t, {
    Dt: () => I,
    ZP: () => A,
    ze: () => S,
}),
    n(997841);
var r = n(54381),
    i = n(473749),
    a = n(95015),
    o = n(768494),
    s = n(124347),
    l = n(80966),
    c = n(296182),
    u = n(524444),
    d = n(52824),
    f = n(589530),
    p = n(591759),
    _ = n(212459),
    m = n(116475),
    h = n(899359);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
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
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e, t) {
    return y(E({}, e), {
        type: (0, o.hg)(e),
        original: e.url,
        srcIsAnimated: (0, a.yE)(e.flags, o.hR.IS_ANIMATED),
        sourceMetadata: { message: t },
    });
}
function I(e) {
    let t = p.Z.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
function T(e) {
    let t,
        { media: n, obscured: i = !1, maxWidth: a, maxHeight: o, onContextMenu: c } = e,
        { width: d, height: p, url: g, proxyUrl: b, alt: v, type: S, maxWidth: T, maxHeight: A } = n,
        N = O(n, ["width", "height", "url", "proxyUrl", "alt", "type", "maxWidth", "maxHeight"]),
        { zoomed: P } = (0, _.Y)(),
        R = C(P, g, b, n.contentType, n.originalContentType),
        D = null != d && 0 !== d && null != p && 0 !== p;
    if ("VIDEO" === S && D && null != b) {
        var w;
        let e = I(b);
        if (null == e) return null;
        let t = null != (w = n.renderLinkComponent) ? w : u.iT;
        return (0, r.jsx)(
            l.Z,
            y(E({}, N), {
                src: R,
                width: d,
                height: p,
                maxWidth: a,
                maxHeight: o,
                poster: e,
                naturalWidth: d,
                naturalHeight: p,
                volume: f.FC,
                autoMute: f.rs,
                onVolumeChange: f.jA,
                onMute: f.Zj,
                renderLinkComponent: t,
                autoPlay: !i,
                alt: v,
                onContextMenu: c,
                disableArrowKeySeek: !0,
            }),
        );
    }
    return (
        "IMAGE" === S &&
            (t = D
                ? (0, r.jsx)(
                      s.ZP,
                      y(E({}, N), {
                          src: R,
                          width: d,
                          height: p,
                          maxWidth: a,
                          maxHeight: o,
                          useFullWidth: !0,
                          shouldLink: !1,
                          className: h.media,
                          animated: !i && n.animated,
                          autoPlay: !i,
                          alt: v,
                          onContextMenu: c,
                      }),
                  )
                : (0, r.jsx)("img", {
                      src: R,
                      alt: v,
                      onContextMenu: c,
                      className: h.dimensionlessImage,
                      style: {
                          maxWidth: a,
                          maxHeight: o,
                      },
                  })),
        null != t ? (0, r.jsx)(m.Z, { children: t }) : null
    );
}
let A = i.memo(T);
function C(e, t, n, r, i) {
    return e && p.Z.isDiscordAssetUrl(t, r, i)
        ? (0, c.s$)(t, r, i)
        : (0, d.q)({
              proxyURL: n,
              url: t,
          });
}
