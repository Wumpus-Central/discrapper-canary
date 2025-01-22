t.r(n),
    t.d(n, {
        ItemDetailsModal: function () {
            return v;
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
    h = t(981631),
    _ = t(388032);
function v(e) {
    var n, t, v, p;
    let { onClose: j, transitionState: S, skuId: N, appId: B, onHeaderTitleClick: g } = e,
        k = (0, r.e7)([s.Z], () => s.Z.getForSKU(N), [N]),
        T = (0, r.e7)([i.Z], () => i.Z.get(N), [N]),
        C = (0, u.M)(N);
    if (null == T) return null;
    let I = null !== (t = T.name) && void 0 !== t ? t : '',
        R = null !== (v = null == k ? void 0 : null === (n = k.description) || void 0 === n ? void 0 : n.trim()) && void 0 !== v ? v : void 0,
        E = (null == k ? void 0 : k.headerBackground) != null && null !== (p = d.Z.toURLSafe((0, c._W)(B, k.headerBackground, 256))) && void 0 !== p ? p : void 0,
        Z = T.type === h.epS.DURABLE && C,
        L = T.type === h.epS.DURABLE ? (Z ? _.intl.string(_.t.bm82mp) : _.intl.string(_.t['6gprwc'])) : void 0,
        { price: b } = T;
    return null == b
        ? null
        : (0, l.jsx)(m.A, {
              appId: B,
              skuId: T.id,
              transitionState: S,
              onHeaderTitleClick: null != g ? g : j,
              onClose: j,
              footer: (0, l.jsx)(x.YG, {
                  appId: B,
                  sku: T
              }),
              children: (0, l.jsx)(f.i, {
                  appId: B,
                  skuId: T.id,
                  title: I,
                  description: R,
                  imgSrc: E,
                  tag: null != L ? (0, l.jsx)(o.V, { text: L }) : void 0,
                  FallbackIcon: a.TicketIcon
              })
          });
}
