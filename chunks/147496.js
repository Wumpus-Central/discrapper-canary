t.r(n), t.d(n, { ItemDetailsModal: () => v }), t(953529), t(781311);
var l = t(200651);
t(192379);
var r = t(752843),
    a = t(442837),
    o = t(481060),
    i = t(55563),
    s = t(551428),
    c = t(73346),
    d = t(591759),
    u = t(110742),
    x = t(886253),
    m = t(680005),
    _ = t(938337),
    h = t(981631),
    p = t(388032);
function v(e) {
    var n, t, v, j;
    let { onClose: f, transitionState: g, skuId: k, appId: b, onHeaderTitleClick: N } = e,
        S = (0, a.e7)([s.Z], () => s.Z.getForSKU(k), [k]),
        I = (0, a.e7)([i.Z], () => i.Z.get(k), [k]),
        O = (0, u.M)(k);
    if (null == I) return null;
    let y = null != (t = I.name) ? t : '',
        R = null != (v = null == S || null == (n = S.description) ? void 0 : n.trim()) ? v : void 0,
        T = (null == S ? void 0 : S.headerBackground) != null && null != (j = d.Z.toURLSafe((0, c._W)(b, S.headerBackground, 256))) ? j : void 0,
        C = I.type === h.epS.DURABLE && O,
        B = I.type === h.epS.DURABLE ? (C ? p.intl.string(p.t.bm82mp) : p.intl.string(p.t['6gprwc'])) : void 0,
        { price: E } = I;
    return null == E
        ? null
        : (0, l.jsx)(x.A, {
              appId: b,
              skuId: I.id,
              transitionState: g,
              onHeaderTitleClick: null != N ? N : f,
              onClose: f,
              footer: (0, l.jsx)(m.YG, {
                  appId: b,
                  sku: I
              }),
              children: (0, l.jsx)(_.i, {
                  appId: b,
                  skuId: I.id,
                  title: y,
                  description: R,
                  imgSrc: T,
                  tag: null != B ? (0, l.jsx)(r.V, { text: B }) : void 0,
                  FallbackIcon: o.Prq
              })
          });
}
