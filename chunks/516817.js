n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(614185),
    l = n(359135),
    c = n(4242),
    u = n(513402);
function d(e) {
    let { children: t, nameplate: n, hover: o, selected: d, placement: f } = e,
        p = (0, s.D)('Nameplate'),
        _ = (0, i.useMemo)(() => ((o || d) && (null == n ? void 0 : n.animatedSrc) != null ? (null == n ? void 0 : n.animatedSrc) : null == n ? void 0 : n.src), [o, d, n]),
        h = (0, c.p)(n, o, d);
    return null != n && p && null != _
        ? (0, r.jsxs)('div', {
              className: a()(u.container, {
                  [u.memberslist]: f === l.QY.Memberlist,
                  [u.privateChannel]: f === l.QY.PrivateChannel,
                  [u.account]: f === l.QY.Account
              }),
              children: [
                  null != h.borderColor &&
                      (0, r.jsx)('div', {
                          style: { borderColor: h.borderColor },
                          className: u.borderLayer
                      }),
                  null != h.background &&
                      (0, r.jsx)('div', {
                          style: { background: h.background },
                          className: u.gradientLayer
                      }),
                  (0, r.jsx)('div', {
                      className: u.imgLayer,
                      children: (0, r.jsx)('img', {
                          className: a()(u.img, {
                              [u.hover]: o,
                              [u.selected]: d
                          }),
                          src: _,
                          alt: n.imgAlt
                      })
                  }),
                  (0, r.jsx)('div', {
                      className: u.content,
                      children: t
                  })
              ]
          })
        : (0, r.jsx)(r.Fragment, { children: t });
}
