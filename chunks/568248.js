r.d(t, { Z: () => O }), r(953529), r(388685);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    o = r.n(i),
    a = r(95398),
    c = r(169525),
    s = r(499376),
    u = r(128854),
    d = r(524444),
    p = r(295435),
    f = r(217702),
    b = r(583760);
function O(e) {
    let { media: t, spoiler: r, description: i } = e,
        O = (0, s.pU)(t),
        { gifAutoPlay: m } = (0, u.c)(),
        [y, j] = l.useState(r),
        g = (e) => {
            var r, l;
            return 'IMAGE' !== O
                ? (0, n.jsx)(p.S, {
                      className: b.imgContainer,
                      media: t,
                      placeholderWidth: 85,
                      placeholderHeight: 85,
                      maxWidth: 85,
                      maxHeight: 85,
                      hiddenSpoilers: e
                  })
                : (0, n.jsx)(d.Yi, {
                      containerClassName: o()(b.imgContainer, { [b.hiddenSpoiler]: e }),
                      imageClassName: b.img,
                      src: t.proxyUrl,
                      alt: i,
                      original: t.url,
                      placeholder: t.placeholder,
                      placeholderVersion: t.placeholderVersion,
                      width: null != (r = t.width) ? r : 0,
                      height: null != (l = t.height) ? l : 0,
                      hiddenSpoilers: e,
                      maxWidth: 170,
                      maxHeight: 170,
                      minWidth: 85,
                      minHeight: 85,
                      autoPlay: m && !e,
                      mediaLayoutType: f.hV.MOSAIC,
                      reducedSizeAltTextButton: !0
                  });
        };
    return r
        ? (0, n.jsx)(a.ZP, {
              type: a.ZP.Types.ATTACHMENT,
              reason: c.wk.SPOILER,
              obscured: y,
              onToggleObscurity: () => j((e) => !e),
              children: (e) => g(e)
          })
        : g(!1);
}
