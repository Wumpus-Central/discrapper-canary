n.d(t, { Z: () => E }), n(953529), n(997841), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(936141),
    l = n(768494),
    c = n(499376),
    u = n(128854),
    d = n(524444),
    f = n(411405),
    _ = n(630388),
    p = n(295435),
    h = n(217702),
    m = n(421698);
let g = 85;
function E(e) {
    let { media: t, spoiler: n, description: a } = e,
        E = (0, c.pU)(t),
        b = (0, _.yE)(t.flags, l.hR.IS_ANIMATED),
        { gifAutoPlay: y } = (0, u.c)(),
        [O, v] = i.useState(n),
        I = (e) => {
            var n, i;
            return "IMAGE" !== E
                ? (0, r.jsx)(p.S, {
                      className: m.imgContainer,
                      media: t,
                      placeholderWidth: g,
                      placeholderHeight: g,
                      maxWidth: g,
                      maxHeight: g,
                      hiddenSpoilers: e,
                  })
                : (0, r.jsx)(d.Yi, {
                      containerClassName: o()(m.imgContainer, { [m.hiddenSpoiler]: e }),
                      imageClassName: m.img,
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
                      mediaLayoutType: h.hV.MOSAIC,
                      reducedSizeAltTextButton: !0,
                      srcIsAnimated: b,
                  });
        };
    return n
        ? (0, r.jsx)(f.ZP, {
              type: f.ZP.Types.ATTACHMENT,
              reason: s.wk.SPOILER,
              obscured: O,
              onToggleObscurity: () => v((e) => !e),
              children: (e) => I(e),
          })
        : I(!1);
}
