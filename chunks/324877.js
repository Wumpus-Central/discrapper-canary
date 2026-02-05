n.d(t, { A: () => E }), n(938796);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(665260),
    o = n(338717),
    d = n(731068),
    c = n(448381),
    u = n(564107),
    m = n(652176),
    p = n(302031),
    A = n(632656),
    h = n(838541),
    C = n(913941);
function E(e) {
    let { media: t, spoiler: n, description: r } = e,
        E = (0, c.wz)(t),
        x = (0, i.Lt)(t.flags, d.e5.IS_ANIMATED),
        { gifAutoPlay: N } = (0, u.X)(),
        [I, _] = a.useState(n),
        [f, g] = a.useState(n);
    n !== I && (_(n), g(n));
    let T = (e) =>
        "IMAGE" !== E
            ? (0, l.jsx)(A.m, {
                  className: C.Dg,
                  media: t,
                  placeholderWidth: 85,
                  placeholderHeight: 85,
                  maxWidth: 85,
                  maxHeight: 85,
                  hiddenSpoilers: e,
              })
            : (0, l.jsx)(m.LL, {
                  containerClassName: s()(C.Dg, { [C.rP]: e }),
                  imageClassName: C._8,
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
                  autoPlay: N && !e,
                  mediaLayoutType: h.dG.MOSAIC,
                  reducedSizeAltTextButton: !0,
                  srcIsAnimated: x,
              });
    return n
        ? (0, l.jsx)(p.Ay, {
              type: p.Ay.Types.ATTACHMENT,
              reason: o.Oc.SPOILER,
              obscured: f,
              onToggleObscurity: () => g((e) => !e),
              children: (e) => T(e),
          })
        : T(!1);
}
