t.r(n), t.d(n, { ItemDetailsModal: () => v }), t(266796), t(566702);
var r = t(200651);
t(192379);
var l = t(752843),
    a = t(442837),
    o = t(481060),
    s = t(55563),
    i = t(551428),
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
    let { onClose: f, transitionState: N, skuId: g, appId: k, onHeaderTitleClick: b } = e,
        S = (0, a.e7)([i.Z], () => i.Z.getForSKU(g), [g]),
        I = (0, a.e7)([s.Z], () => s.Z.get(g), [g]),
        O = (0, u.M)(g);
    if (null == I) return null;
    let y = null != (t = I.name) ? t : '',
        R = null != (v = null == S || null == (n = S.description) ? void 0 : n.trim()) ? v : void 0,
        T = (null == S ? void 0 : S.headerBackground) != null && null != (j = d.Z.toURLSafe((0, c._W)(k, S.headerBackground, 256))) ? j : void 0,
        C = I.type === h.epS.DURABLE && O,
        B = I.type === h.epS.DURABLE ? (C ? p.NW.string(p.t.bm82mp) : p.NW.string(p.t['6gprwc'])) : void 0,
        { price: E } = I;
    return null == E
        ? null
        : (0, r.jsx)(x.A, {
              appId: k,
              skuId: I.id,
              transitionState: N,
              onHeaderTitleClick: null != b ? b : f,
              onClose: f,
              footer: (0, r.jsx)(m.YG, {
                  appId: k,
                  sku: I
              }),
              children: (0, r.jsx)(_.i, {
                  appId: k,
                  skuId: I.id,
                  title: y,
                  description: R,
                  imgSrc: T,
                  tag: null != B ? (0, r.jsx)(l.V, { text: B }) : void 0,
                  FallbackIcon: o.Prq
              })
          });
}
