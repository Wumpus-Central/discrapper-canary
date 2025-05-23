r.d(t, { Z: () => y }), r(953529), r(997841), r(388685);
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(95398),
    c = r(768494),
    s = r(169525),
    u = r(499376),
    d = r(128854),
    p = r(524444),
    f = r(630388),
    b = r(295435),
    m = r(217702),
    O = r(350275);
function y(e) {
    let { media: t, spoiler: r, description: i } = e,
        y = (0, u.pU)(t),
        j = (0, f.yE)(t.flags, c.hR.IS_ANIMATED),
        { gifAutoPlay: g } = (0, d.c)(),
        [h, v] = l.useState(r),
        P = (e) => {
            var r, l;
            return 'IMAGE' !== y
                ? (0, n.jsx)(b.S, {
                      className: O.imgContainer,
                      media: t,
                      placeholderWidth: 85,
                      placeholderHeight: 85,
                      maxWidth: 85,
                      maxHeight: 85,
                      hiddenSpoilers: e
                  })
                : (0, n.jsx)(p.Yi, {
                      containerClassName: o()(O.imgContainer, { [O.hiddenSpoiler]: e }),
                      imageClassName: O.img,
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
                      autoPlay: g && !e,
                      mediaLayoutType: m.hV.MOSAIC,
                      reducedSizeAltTextButton: !0,
                      srcIsAnimated: j
                  });
        };
    return r
        ? (0, n.jsx)(a.ZP, {
              type: a.ZP.Types.ATTACHMENT,
              reason: s.wk.SPOILER,
              obscured: h,
              onToggleObscurity: () => v((e) => !e),
              children: (e) => P(e)
          })
        : P(!1);
}
