"use strict";
n.d(t, { Ay: () => I, FX: () => g, VZ: () => E }), n(938796);
var r = n(627968),
    i = n(64700),
    a = n(665260),
    s = n(731068),
    o = n(619517),
    l = n(248643),
    u = n(803316),
    c = n(652176),
    d = n(644447),
    _ = n(587481),
    f = n(998218),
    p = n(454290),
    h = n(504149),
    m = n(112576);
function g(e, t) {
    return {
        ...e,
        type: (0, s.FE)(e),
        original: e.url,
        srcIsAnimated: (0, a.Lt)(e.flags, s.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function E(e) {
    let t = f.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
function A(e) {
    let t,
        { media: n, obscured: i = !1, maxWidth: a, maxHeight: s, onContextMenu: u } = e,
        { width: d, height: f, url: g, proxyUrl: A, alt: I, type: y, maxWidth: S, maxHeight: v, ...C } = n,
        { zoomed: b } = (0, p.Q)(),
        N = T(b, g, A, n.contentType, n.originalContentType),
        R = null != d && 0 !== d && null != f && 0 !== f;
    if ("VIDEO" === y && R && null != A) {
        let e = E(A);
        if (null == e) return null;
        let t = n.renderLinkComponent ?? c.bU;
        return (0, r.jsx)(l.A, {
            ...C,
            src: N,
            width: d,
            height: f,
            maxWidth: a,
            maxHeight: s,
            poster: e,
            naturalWidth: d,
            naturalHeight: f,
            volume: _.v1,
            autoMute: _.uj,
            onVolumeChange: _.ls,
            onMute: _.y5,
            renderLinkComponent: t,
            autoPlay: !i,
            alt: I,
            onContextMenu: u,
            disableArrowKeySeek: !0,
        });
    }
    return (
        "IMAGE" === y &&
            (t = R
                ? (0, r.jsx)(o.Ay, {
                      ...C,
                      src: N,
                      width: d,
                      height: f,
                      maxWidth: a,
                      maxHeight: s,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: m.$_,
                      animated: !i && n.animated,
                      autoPlay: !i,
                      alt: I,
                      onContextMenu: u,
                  })
                : (0, r.jsx)("img", {
                      src: N,
                      alt: I,
                      onContextMenu: u,
                      className: m.xx,
                      style: { maxWidth: a, maxHeight: s },
                  })),
        null != t ? (0, r.jsx)(h.A, { children: t }) : null
    );
}
let I = i.memo(A);
function T(e, t, n, r, i) {
    return e && f.A.isDiscordAssetUrl(t, r, i) ? (0, u.XW)(t, r, i) : (0, d.E)({ proxyURL: n, url: t });
}
