l.d(n, { Z: () => m }), l(47120);
var t = l(200651),
    i = l(192379),
    r = l(95398),
    a = l(169525),
    s = l(499376),
    o = l(128854),
    u = l(524444),
    c = l(295435),
    d = l(793400);
function m(e) {
    let { media: n, spoiler: l, description: m } = e,
        h = (0, s.pU)(n),
        { gifAutoPlay: p } = (0, o.c)(),
        [x, v] = i.useState(l),
        f = (e) => {
            var l, i;
            return 'IMAGE' !== h
                ? (0, t.jsx)(c.S, {
                      className: d.imgContainer,
                      media: n,
                      placeholderWidth: 85,
                      placeholderHeight: 85,
                      maxWidth: 85,
                      maxHeight: 85,
                      hiddenSpoilers: e
                  })
                : (0, t.jsx)(u.Yi, {
                      containerClassName: d.imgContainer,
                      imageClassName: d.img,
                      src: n.proxyUrl,
                      alt: m,
                      original: n.url,
                      placeholder: n.placeholder,
                      placeholderVersion: n.placeholderVersion,
                      width: null !== (l = n.width) && void 0 !== l ? l : 0,
                      height: null !== (i = n.height) && void 0 !== i ? i : 0,
                      hiddenSpoilers: e,
                      maxWidth: 85,
                      maxHeight: 85,
                      minWidth: 85,
                      minHeight: 85,
                      autoPlay: p && !e
                  });
        };
    return l
        ? (0, t.jsx)(r.Z, {
              type: r.Z.Types.ATTACHMENT,
              reason: a.wk.SPOILER,
              obscured: x,
              onToggleObscurity: () => v((e) => !e),
              children: (e) => f(e)
          })
        : f(!1);
}
