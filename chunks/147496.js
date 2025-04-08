r.r(t), r.d(t, { ItemDetailsModal: () => m }), r(953529), r(781311);
var n = r(200651);
r(192379);
var l = r(752843),
    i = r(442837),
    o = r(481060),
    a = r(55563),
    c = r(551428),
    s = r(73346),
    u = r(591759),
    p = r(110742),
    d = r(886253),
    f = r(680005),
    b = r(938337),
    O = r(981631),
    y = r(388032);
function m(e) {
    var t, r, m, j;
    let { onClose: g, transitionState: h, skuId: v, appId: P, onHeaderTitleClick: x } = e,
        w = (0, i.e7)([c.Z], () => c.Z.getForSKU(v), [v]),
        S = (0, i.e7)([a.Z], () => a.Z.get(v), [v]),
        C = (0, p.M)(v);
    if (null == S) return null;
    let E = null != (r = S.name) ? r : '',
        N = null != (m = null == w || null == (t = w.description) ? void 0 : t.trim()) ? m : void 0,
        I = (null == w ? void 0 : w.headerBackground) != null && null != (j = u.Z.toURLSafe((0, s._W)(P, w.headerBackground, 256))) ? j : void 0,
        k = S.type === O.epS.DURABLE && C,
        Z = S.type === O.epS.DURABLE ? (k ? y.NW.string(y.t.bm82mp) : y.NW.string(y.t['6gprwc'])) : void 0,
        { price: T } = S;
    return null == T
        ? null
        : (0, n.jsx)(d.A, {
              appId: P,
              skuId: S.id,
              transitionState: h,
              onHeaderTitleClick: null != x ? x : g,
              onClose: g,
              footer: (0, n.jsx)(f.YG, {
                  appId: P,
                  sku: S
              }),
              children: (0, n.jsx)(b.i, {
                  appId: P,
                  skuId: S.id,
                  title: E,
                  description: N,
                  imgSrc: I,
                  tag: null != Z ? (0, n.jsx)(l.V, { text: Z }) : void 0,
                  FallbackIcon: o.Prq
              })
          });
}
