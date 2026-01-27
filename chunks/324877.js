n.d(t, {
    A: () => g,
}),
    n(228524),
    n(938796),
    n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(665260),
    o = n(338717),
    c = n(731068),
    u = n(448381),
    d = n(564107),
    m = n(652176),
    f = n(302031),
    p = n(632656),
    h = n(838541),
    b = n(913941);

function g(e) {
    let { media: t, spoiler: n, description: a } = e,
        g = (0, u.wz)(t),
        x = (0, s.Lt)(t.flags, c.e5.IS_ANIMATED),
        { gifAutoPlay: y } = (0, d.X)(),
        [v, j] = l.useState(n),
        [C, _] = l.useState(n);
    n !== v && (j(n), _(n));
    let A = (e) => {
        var n, l;
        return "IMAGE" !== g
            ? (0, r.jsx)(p.m, {
                  className: b.Dg,
                  media: t,
                  placeholderWidth: 85,
                  placeholderHeight: 85,
                  maxWidth: 85,
                  maxHeight: 85,
                  hiddenSpoilers: e,
              })
            : (0, r.jsx)(m.LL, {
                  containerClassName: i()(b.Dg, {
                      [b.rP]: e,
                  }),
                  imageClassName: b._8,
                  src: t.proxyUrl,
                  alt: a,
                  original: t.url,
                  placeholder: t.placeholder,
                  placeholderVersion: t.placeholderVersion,
                  width: null != (n = t.width) ? n : 0,
                  height: null != (l = t.height) ? l : 0,
                  hiddenSpoilers: e,
                  maxWidth: 170,
                  maxHeight: 170,
                  minWidth: 85,
                  minHeight: 85,
                  autoPlay: y && !e,
                  mediaLayoutType: h.dG.MOSAIC,
                  reducedSizeAltTextButton: !0,
                  srcIsAnimated: x,
              });
    };
    return n
        ? (0, r.jsx)(f.Ay, {
              type: f.Ay.Types.ATTACHMENT,
              reason: o.Oc.SPOILER,
              obscured: C,
              onToggleObscurity: () => _((e) => !e),
              children: (e) => A(e),
          })
        : A(!1);
}
