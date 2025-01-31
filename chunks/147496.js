n.r(l), n.d(l, { ItemDetailsModal: () => p });
var t = n(200651);
n(192379);
var r = n(752843),
    a = n(442837),
    o = n(481060),
    i = n(55563),
    s = n(551428),
    c = n(73346),
    d = n(591759),
    u = n(110742),
    x = n(886253),
    _ = n(680005),
    m = n(938337),
    h = n(981631),
    v = n(388032);
function p(e) {
    var l, n, p, f;
    let { onClose: j, transitionState: k, skuId: S, appId: N, onHeaderTitleClick: g } = e,
        T = (0, a.e7)([s.Z], () => s.Z.getForSKU(S), [S]),
        C = (0, a.e7)([i.Z], () => i.Z.get(S), [S]),
        I = (0, u.M)(S);
    if (null == C) return null;
    let R = null !== (n = C.name) && void 0 !== n ? n : '',
        B = null !== (p = null == T ? void 0 : null === (l = T.description) || void 0 === l ? void 0 : l.trim()) && void 0 !== p ? p : void 0,
        E = (null == T ? void 0 : T.headerBackground) != null && null !== (f = d.Z.toURLSafe((0, c._W)(N, T.headerBackground, 256))) && void 0 !== f ? f : void 0,
        Z = C.type === h.epS.DURABLE && I,
        L = C.type === h.epS.DURABLE ? (Z ? v.intl.string(v.t.bm82mp) : v.intl.string(v.t['6gprwc'])) : void 0,
        { price: b } = C;
    return null == b
        ? null
        : (0, t.jsx)(x.A, {
              appId: N,
              skuId: C.id,
              transitionState: k,
              onHeaderTitleClick: null != g ? g : j,
              onClose: j,
              footer: (0, t.jsx)(_.YG, {
                  appId: N,
                  sku: C
              }),
              children: (0, t.jsx)(m.i, {
                  appId: N,
                  skuId: C.id,
                  title: R,
                  description: B,
                  imgSrc: E,
                  tag: null != L ? (0, t.jsx)(r.V, { text: L }) : void 0,
                  FallbackIcon: o.Prq
              })
          });
}
