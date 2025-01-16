t.d(n, {
    Z: function () {
        return m;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(95398),
    a = t(169525),
    o = t(499376),
    s = t(128854),
    c = t(524444),
    u = t(295435),
    d = t(793400);
function m(e) {
    let { media: n, spoiler: t, description: m } = e,
        f = (0, o.pU)(n),
        { gifAutoPlay: p } = (0, s.c)(),
        [h, x] = i.useState(t),
        v = (e) => {
            var t, i;
            return 'IMAGE' !== f
                ? (0, l.jsx)(u.S, {
                      className: d.imgContainer,
                      media: n,
                      placeholderWidth: 85,
                      placeholderHeight: 85,
                      maxWidth: 85,
                      maxHeight: 85,
                      hiddenSpoilers: e
                  })
                : (0, l.jsx)(c.Yi, {
                      containerClassName: d.imgContainer,
                      imageClassName: d.img,
                      src: n.proxyUrl,
                      alt: m,
                      original: n.url,
                      placeholder: n.placeholder,
                      placeholderVersion: n.placeholderVersion,
                      width: null !== (t = n.width) && void 0 !== t ? t : 0,
                      height: null !== (i = n.height) && void 0 !== i ? i : 0,
                      hiddenSpoilers: e,
                      maxWidth: 85,
                      maxHeight: 85,
                      minWidth: 85,
                      minHeight: 85,
                      autoPlay: p && !e
                  });
        };
    return t
        ? (0, l.jsx)(r.Z, {
              type: r.Z.Types.ATTACHMENT,
              reason: a.wk.SPOILER,
              obscured: h,
              onToggleObscurity: () => x((e) => !e),
              children: (e) => v(e)
          })
        : v(!1);
}
