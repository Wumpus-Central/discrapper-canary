r.r(t), r.d(t, { ItemDetailsModal: () => y }), r(953529), r(781311);
var n = r(200651);
r(192379);
var l = r(752843),
    i = r(442837),
    o = r(481060),
    a = r(55563),
    c = r(551428),
    s = r(73346),
    u = r(591759),
    d = r(110742),
    p = r(886253),
    f = r(680005),
    b = r(938337),
    O = r(981631),
    m = r(388032);
function y(e) {
    var t, r, y, j;
    let { onClose: g, transitionState: h, skuId: v, appId: P, onHeaderTitleClick: x } = e,
        S = (0, i.e7)([c.Z], () => c.Z.getForSKU(v), [v]),
        w = (0, i.e7)([a.Z], () => a.Z.get(v), [v]),
        C = (0, d.M)(v);
    if (null == w) return null;
    let E = null != (r = w.name) ? r : '',
        N = null != (y = null == S || null == (t = S.description) ? void 0 : t.trim()) ? y : void 0,
        I = (null == S ? void 0 : S.headerBackground) != null && null != (j = u.Z.toURLSafe((0, s._W)(P, S.headerBackground, 256))) ? j : void 0,
        T = w.type === O.epS.DURABLE && C,
        k = w.type === O.epS.DURABLE ? (T ? m.intl.string(m.t.bm82mp) : m.intl.string(m.t['6gprwc'])) : void 0,
        { price: Z } = w;
    return null == Z
        ? null
        : (0, n.jsx)(p.A, {
              appId: P,
              skuId: w.id,
              transitionState: h,
              onHeaderTitleClick: null != x ? x : g,
              onClose: g,
              footer: (0, n.jsx)(f.YG, {
                  appId: P,
                  sku: w
              }),
              children: (0, n.jsx)(b.i, {
                  appId: P,
                  skuId: w.id,
                  title: E,
                  description: N,
                  imgSrc: I,
                  tag: null != k ? (0, n.jsx)(l.V, { text: k }) : void 0,
                  FallbackIcon: o.Prq
              })
          });
}
