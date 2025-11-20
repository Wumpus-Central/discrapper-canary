n.d(t, {
    Dt: () => T,
    ZP: () => A,
    ze: () => I,
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
    _ = n(591759),
    p = n(212459),
    h = n(116475),
    m = n(899359);
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
function I(e, t) {
    return y(E({}, e), {
        type: (0, o.hg)(e),
        original: e.url,
        srcIsAnimated: (0, a.yE)(e.flags, o.hR.IS_ANIMATED),
        sourceMetadata: { message: t },
    });
}
function T(e) {
    let t = _.Z.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
function S(e) {
    let t,
        { media: n, obscured: i = !1, maxWidth: a, maxHeight: o, onContextMenu: c } = e,
        { width: d, height: _, url: g, proxyUrl: b, alt: v, type: I, maxWidth: S, maxHeight: A } = n,
        N = O(n, ["width", "height", "url", "proxyUrl", "alt", "type", "maxWidth", "maxHeight"]),
        { zoomed: R } = (0, p.Y)(),
        P = C(R, g, b, n.contentType, n.originalContentType),
        D = null != d && 0 !== d && null != _ && 0 !== _;
    if ("VIDEO" === I && D && null != b) {
        var w;
        let e = T(b);
        if (null == e) return null;
        let t = null != (w = n.renderLinkComponent) ? w : u.iT;
        return (0, r.jsx)(
            l.Z,
            y(E({}, N), {
                src: P,
                width: d,
                height: _,
                maxWidth: a,
                maxHeight: o,
                poster: e,
                naturalWidth: d,
                naturalHeight: _,
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
        "IMAGE" === I &&
            (t = D
                ? (0, r.jsx)(
                      s.ZP,
                      y(E({}, N), {
                          src: P,
                          width: d,
                          height: _,
                          maxWidth: a,
                          maxHeight: o,
                          useFullWidth: !0,
                          shouldLink: !1,
                          className: m.media,
                          animated: !i && n.animated,
                          autoPlay: !i,
                          alt: v,
                          onContextMenu: c,
                      }),
                  )
                : (0, r.jsx)("img", {
                      src: P,
                      alt: v,
                      onContextMenu: c,
                      className: m.dimensionlessImage,
                      style: {
                          maxWidth: a,
                          maxHeight: o,
                      },
                  })),
        null != t ? (0, r.jsx)(h.Z, { children: t }) : null
    );
}
let A = i.memo(S);
function C(e, t, n, r, i) {
    return e && _.Z.isDiscordAssetUrl(t, r, i)
        ? (0, c.s$)(t, r, i)
        : (0, d.q)({
              proxyURL: n,
              url: t,
          });
}
