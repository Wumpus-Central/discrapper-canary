l.d(n, { Z: () => h }), l(47120);
var t = l(200651),
    i = l(192379),
    r = l(95398),
    a = l(169525),
    s = l(499376),
    o = l(128854),
    u = l(524444),
    c = l(295435),
    d = l(217702),
    m = l(985906);
function h(e) {
    let { media: n, spoiler: l, description: h } = e,
        p = (0, s.pU)(n),
        { gifAutoPlay: x } = (0, o.c)(),
        [v, f] = i.useState(l),
        C = (e) => {
            var l, i;
            return 'IMAGE' !== p
                ? (0, t.jsx)(c.S, {
                      className: m.imgContainer,
                      media: n,
                      placeholderWidth: 85,
                      placeholderHeight: 85,
                      maxWidth: 85,
                      maxHeight: 85,
                      hiddenSpoilers: e
                  })
                : (0, t.jsx)(u.Yi, {
                      containerClassName: m.imgContainer,
                      imageClassName: m.img,
                      src: n.proxyUrl,
                      alt: h,
                      original: n.url,
                      placeholder: n.placeholder,
                      placeholderVersion: n.placeholderVersion,
                      width: null !== (l = n.width) && void 0 !== l ? l : 0,
                      height: null !== (i = n.height) && void 0 !== i ? i : 0,
                      hiddenSpoilers: e,
                      maxWidth: 170,
                      maxHeight: 170,
                      minWidth: 85,
                      minHeight: 85,
                      autoPlay: x && !e,
                      mediaLayoutType: d.hV.MOSAIC,
                      reducedSizeAltTextButton: !0
                  });
        };
    return l
        ? (0, t.jsx)(r.Z, {
              type: r.Z.Types.ATTACHMENT,
              reason: a.wk.SPOILER,
              obscured: v,
              onToggleObscurity: () => f((e) => !e),
              children: (e) => C(e)
          })
        : C(!1);
}
