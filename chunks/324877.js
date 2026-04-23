n.d(t, { A: () => C }), n(938796);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(665260),
    o = n(338717),
    d = n(731068),
    c = n(448381),
    u = n(564107),
    m = n(652176),
    _ = n(302031),
    p = n(632656),
    h = n(838541),
    A = n(493934);
function C(e) {
    let { media: t, spoiler: n, description: r } = e,
        C = (0, c.wz)(t),
        x = (0, s.Lt)(t.flags, d.e5.IS_ANIMATED),
        { gifAutoPlay: f } = (0, u.X)(),
        [E, I] = l.useState(n),
        [N, g] = l.useState(n);
    n !== E && (I(n), g(n));
    let v = (e) =>
        "IMAGE" !== C
            ? (0, a.jsx)(p.m, {
                  className: A.Dg,
                  media: t,
                  placeholderWidth: 85,
                  placeholderHeight: 85,
                  maxWidth: 85,
                  maxHeight: 85,
                  hiddenSpoilers: e,
              })
            : (0, a.jsx)(m.LL, {
                  containerClassName: i()(A.Dg, { [A.rP]: e }),
                  imageClassName: A._8,
                  src: t.proxyUrl,
                  alt: r,
                  original: t.url,
                  placeholder: t.placeholder,
                  placeholderVersion: t.placeholderVersion,
                  width: t.width ?? 0,
                  height: t.height ?? 0,
                  hiddenSpoilers: e,
                  maxWidth: 170,
                  maxHeight: 170,
                  minWidth: 85,
                  minHeight: 85,
                  autoPlay: f && !e,
                  mediaLayoutType: h.dG.MOSAIC,
                  reducedSizeAltTextButton: !0,
                  srcIsAnimated: x,
              });
    return n
        ? (0, a.jsx)(_.Ay, {
              type: _.Ay.Types.ATTACHMENT,
              reason: o.Oc.SPOILER,
              obscured: N,
              onToggleObscurity: () => g((e) => !e),
              children: (e) => v(e),
          })
        : v(!1);
}
