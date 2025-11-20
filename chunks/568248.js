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
    _ = n(411405),
    p = n(295435),
    h = n(217702),
    m = n(156259);
let g = 85;
function E(e) {
    let { media: t, spoiler: n, description: a } = e,
        E = (0, u.pU)(t),
        b = (0, s.yE)(t.flags, c.hR.IS_ANIMATED),
        { gifAutoPlay: y } = (0, d.c)(),
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
                : (0, r.jsx)(f.Yi, {
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
        ? (0, r.jsx)(_.ZP, {
              type: _.ZP.Types.ATTACHMENT,
              reason: l.wk.SPOILER,
              obscured: O,
              onToggleObscurity: () => v((e) => !e),
              children: (e) => I(e),
          })
        : I(!1);
}
