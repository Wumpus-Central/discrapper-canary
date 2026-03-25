"use strict";
n.d(t, { Ay: () => I, FX: () => E, VZ: () => g }), n(938796);
var r = n(627968),
    i = n(64700),
    s = n(665260),
    a = n(731068),
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
function E(e, t) {
    return {
        ...e,
        type: (0, a.FE)(e),
        original: e.url,
        srcIsAnimated: (0, s.Lt)(e.flags, a.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function g(e) {
    let t = f.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
function A(e) {
    let t,
        { media: n, obscured: i = !1, maxWidth: s, maxHeight: a, onContextMenu: u } = e,
        { width: d, height: f, url: E, proxyUrl: A, alt: I, type: S, maxWidth: y, maxHeight: v, ...N } = n,
        { zoomed: C } = (0, p.Q)(),
        R = T(C, E, A, n.contentType, n.originalContentType),
        O = null != d && 0 !== d && null != f && 0 !== f;
    if ("VIDEO" === S && O && null != A) {
        let e = n.poster ?? g(A);
        if (null == e) return null;
        let t = n.renderLinkComponent ?? c.bU;
        return (0, r.jsx)(l.A, {
            ...N,
            src: R,
            width: d,
            height: f,
            maxWidth: s,
            maxHeight: a,
            poster: e,
            naturalWidth: d,
            naturalHeight: f,
            volume: _.v1,
            autoMute: n.autoMute ?? _.uj,
            onVolumeChange: _.ls,
            onMute: _.y5,
            renderLinkComponent: t,
            autoPlay: n.autoPlay ?? !i,
            alt: I,
            onContextMenu: u,
            disableArrowKeySeek: !0,
        });
    }
    return (
        "IMAGE" === S &&
            (t = O
                ? (0, r.jsx)(o.Ay, {
                      ...N,
                      src: R,
                      width: d,
                      height: f,
                      maxWidth: s,
                      maxHeight: a,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: m.$_,
                      animated: !i && n.animated,
                      autoPlay: !i,
                      alt: I,
                      onContextMenu: u,
                  })
                : (0, r.jsx)("img", {
                      src: R,
                      alt: I,
                      onContextMenu: u,
                      className: m.xx,
                      style: { maxWidth: s, maxHeight: a },
                  })),
        null != t ? (0, r.jsx)(h.A, { children: t }) : null
    );
}
let I = i.memo(A);
function T(e, t, n, r, i) {
    return e && f.A.isDiscordAssetUrl(t, r, i) ? (0, u.XW)(t, r, i) : (0, d.E)({ proxyURL: n, url: t });
}
