n.r(t), n.d(t, { ItemDetailsModal: () => g }), n(953529), n(781311);
var r = n(54381);
n(473749);
var i = n(942682),
    a = n(442837),
    o = n(481060),
    s = n(55563),
    l = n(551428),
    c = n(73346),
    u = n(591759),
    d = n(110742),
    f = n(886253),
    p = n(680005),
    _ = n(938337),
    m = n(981631),
    h = n(388032);
function g(e) {
    var t, n, g, E;
    let { onClose: b, transitionState: y, skuId: O, appId: v, onHeaderTitleClick: S } = e,
        I = (0, a.e7)([l.Z], () => l.Z.getForSKU(O), [O]),
        T = (0, a.e7)([s.Z], () => s.Z.get(O), [O]),
        A = (0, d.M)(O);
    if (null == T) return null;
    let C = null != (n = T.name) ? n : "",
        N = null != (g = null == I || null == (t = I.description) ? void 0 : t.trim()) ? g : void 0,
        P =
            (null == I ? void 0 : I.headerBackground) != null &&
            null != (E = u.Z.toURLSafe((0, c._W)(v, I.headerBackground, 256)))
                ? E
                : void 0,
        R = T.type === m.epS.DURABLE && A,
        w = T.type === m.epS.DURABLE ? (R ? h.intl.string(h.t.bm82mm) : h.intl.string(h.t["6gprwf"])) : void 0,
        { price: D } = T;
    return null == D
        ? null
        : (0, r.jsx)(f.A, {
              appId: v,
              skuId: T.id,
              transitionState: y,
              onHeaderTitleClick: null != S ? S : b,
              onClose: b,
              footer: (0, r.jsx)(p.YG, {
                  appId: v,
                  sku: T,
              }),
              children: (0, r.jsx)(_.i, {
                  appId: v,
                  skuId: T.id,
                  title: C,
                  description: N,
                  imgSrc: P,
                  tag: null != w ? (0, r.jsx)(i.V, { text: w }) : void 0,
                  FallbackIcon: o.Prq,
              }),
          });
}
