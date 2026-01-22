n.d(t, { A: () => E }), n(228524), n(938796), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(665260),
    l = n(338717),
    c = n(731068),
    u = n(448381),
    d = n(564107),
    f = n(652176),
    p = n(302031),
    _ = n(632656),
    h = n(838541),
    m = n(913941);
let g = 85;
function E(e) {
    let { media: t, spoiler: n, description: a } = e,
        E = (0, u.wz)(t),
        b = (0, o.Lt)(t.flags, c.e5.IS_ANIMATED),
        { gifAutoPlay: y } = (0, d.X)(),
        [O, A] = i.useState(n),
        [v, S] = i.useState(n);
    n !== O && (A(n), S(n));
    let I = (e) => {
        var n, i;
        return "IMAGE" !== E
            ? (0, r.jsx)(_.m, {
                  className: m.Dg,
                  media: t,
                  placeholderWidth: g,
                  placeholderHeight: g,
                  maxWidth: g,
                  maxHeight: g,
                  hiddenSpoilers: e,
              })
            : (0, r.jsx)(f.LL, {
                  containerClassName: s()(m.Dg, { [m.rP]: e }),
                  imageClassName: m._8,
                  src: t.proxyUrl,
                  alt: a,
                  original: t.url,
                  placeholder: t.placeholder,
                  placeholderVersion: t.placeholderVersion,
                  width: null != (n = t.width) ? n : 0,
                  height: null != (i = t.height) ? i : 0,
                  hiddenSpoilers: e,
                  maxWidth: 2 * g,
                  maxHeight: 2 * g,
                  minWidth: g,
                  minHeight: g,
                  autoPlay: y && !e,
                  mediaLayoutType: h.dG.MOSAIC,
                  reducedSizeAltTextButton: !0,
                  srcIsAnimated: b,
              });
    };
    return n
        ? (0, r.jsx)(p.Ay, {
              type: p.Ay.Types.ATTACHMENT,
              reason: l.Oc.SPOILER,
              obscured: v,
              onToggleObscurity: () => S((e) => !e),
              children: (e) => I(e),
          })
        : I(!1);
}
