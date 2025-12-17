n.d(t, { Z: () => E }), n(953529), n(997841), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(95015),
    l = n(936141),
    c = n(768494),
    u = n(499376),
    d = n(128854),
    f = n(524444),
    p = n(411405),
    _ = n(295435),
    m = n(217702),
    h = n(311527);
let g = 85;
function E(e) {
    let { media: t, spoiler: n, description: a } = e,
        E = (0, u.pU)(t),
        b = (0, s.yE)(t.flags, c.hR.IS_ANIMATED),
        { gifAutoPlay: y } = (0, d.c)(),
        [O, v] = i.useState(n),
        S = (e) => {
            var n, i;
            return "IMAGE" !== E
                ? (0, r.jsx)(_.S, {
                      className: h.imgContainer,
                      media: t,
                      placeholderWidth: g,
                      placeholderHeight: g,
                      maxWidth: g,
                      maxHeight: g,
                      hiddenSpoilers: e,
                  })
                : (0, r.jsx)(f.Yi, {
                      containerClassName: o()(h.imgContainer, { [h.hiddenSpoiler]: e }),
                      imageClassName: h.img,
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
                      mediaLayoutType: m.hV.MOSAIC,
                      reducedSizeAltTextButton: !0,
                      srcIsAnimated: b,
                  });
        };
    return n
        ? (0, r.jsx)(p.ZP, {
              type: p.ZP.Types.ATTACHMENT,
              reason: l.wk.SPOILER,
              obscured: O,
              onToggleObscurity: () => v((e) => !e),
              children: (e) => S(e),
          })
        : S(!1);
}
