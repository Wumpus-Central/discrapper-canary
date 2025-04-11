r.d(t, { Z: () => f }), r(953529), r(388685);
var n = r(200651),
    l = r(192379),
    i = r(95398),
    o = r(169525),
    a = r(499376),
    c = r(128854),
    s = r(524444),
    u = r(295435),
    d = r(217702),
    p = r(583760);
function f(e) {
    let { media: t, spoiler: r, description: f } = e,
        b = (0, a.pU)(t),
        { gifAutoPlay: O } = (0, c.c)(),
        [m, y] = l.useState(r),
        j = (e) => {
            var r, l;
            return 'IMAGE' !== b
                ? (0, n.jsx)(u.S, {
                      className: p.imgContainer,
                      media: t,
                      placeholderWidth: 85,
                      placeholderHeight: 85,
                      maxWidth: 85,
                      maxHeight: 85,
                      hiddenSpoilers: e
                  })
                : (0, n.jsx)(s.Yi, {
                      containerClassName: p.imgContainer,
                      imageClassName: p.img,
                      src: t.proxyUrl,
                      alt: f,
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
                      autoPlay: O && !e,
                      mediaLayoutType: d.hV.MOSAIC,
                      reducedSizeAltTextButton: !0
                  });
        };
    return r
        ? (0, n.jsx)(i.ZP, {
              type: i.ZP.Types.ATTACHMENT,
              reason: o.wk.SPOILER,
              obscured: m,
              onToggleObscurity: () => y((e) => !e),
              children: (e) => j(e)
          })
        : j(!1);
}
