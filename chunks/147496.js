t.r(n),
    t.d(n, {
        ItemDetailsModal: function () {
            return p;
        }
    });
var l = t(200651);
t(192379);
var o = t(752843),
    r = t(442837),
    a = t(481060),
    i = t(55563),
    s = t(551428),
    c = t(73346),
    d = t(591759),
    u = t(110742),
    m = t(886253),
    x = t(680005),
    f = t(938337),
    _ = t(981631),
    h = t(388032);
function p(e) {
    var n, t, p, v;
    let { onClose: j, transitionState: S, skuId: g, appId: N, onHeaderTitleClick: B } = e,
        k = (0, r.e7)([s.Z], () => s.Z.getForSKU(g), [g]),
        T = (0, r.e7)([i.Z], () => i.Z.get(g), [g]),
        I = (0, u.M)(g);
    if (null == T) return null;
    let C = null !== (t = T.name) && void 0 !== t ? t : '',
        E = null !== (p = null == k ? void 0 : null === (n = k.description) || void 0 === n ? void 0 : n.trim()) && void 0 !== p ? p : void 0,
        R = (null == k ? void 0 : k.headerBackground) != null && null !== (v = d.Z.toURLSafe((0, c._W)(N, k.headerBackground, 256))) && void 0 !== v ? v : void 0,
        b = T.type === _.epS.DURABLE && I,
        L = T.type === _.epS.DURABLE ? (b ? h.intl.string(h.t.bm82mp) : h.intl.string(h.t['6gprwc'])) : void 0,
        { price: Z } = T;
    return null == Z
        ? null
        : (0, l.jsx)(m.A, {
              appId: N,
              skuId: T.id,
              transitionState: S,
              onHeaderTitleClick: null != B ? B : j,
              onClose: j,
              footer: (0, l.jsx)(x.YG, {
                  appId: N,
                  sku: T
              }),
              children: (0, l.jsx)(f.i, {
                  appId: N,
                  skuId: T.id,
                  title: C,
                  description: E,
                  imgSrc: R,
                  tag: null != L ? (0, l.jsx)(o.V, { text: L }) : void 0,
                  FallbackIcon: a.TicketIcon
              })
          });
}
