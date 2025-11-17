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
    _ = n(680005),
    p = n(938337),
    h = n(981631),
    m = n(388032);
function g(e) {
    var t, n, g, E;
    let { onClose: b, transitionState: y, skuId: O, appId: v, onHeaderTitleClick: I } = e,
        T = (0, a.e7)([l.Z], () => l.Z.getForSKU(O), [O]),
        S = (0, a.e7)([s.Z], () => s.Z.get(O), [O]),
        A = (0, d.M)(O);
    if (null == S) return null;
    let C = null != (n = S.name) ? n : "",
        N = null != (g = null == T || null == (t = T.description) ? void 0 : t.trim()) ? g : void 0,
        R =
            (null == T ? void 0 : T.headerBackground) != null &&
            null != (E = u.Z.toURLSafe((0, c._W)(v, T.headerBackground, 256)))
                ? E
                : void 0,
        P = S.type === h.epS.DURABLE && A,
        D = S.type === h.epS.DURABLE ? (P ? m.intl.string(m.t.bm82mm) : m.intl.string(m.t["6gprwf"])) : void 0,
        { price: w } = S;
    return null == w
        ? null
        : (0, r.jsx)(f.A, {
              appId: v,
              skuId: S.id,
              transitionState: y,
              onHeaderTitleClick: null != I ? I : b,
              onClose: b,
              footer: (0, r.jsx)(_.YG, {
                  appId: v,
                  sku: S,
              }),
              children: (0, r.jsx)(p.i, {
                  appId: v,
                  skuId: S.id,
                  title: C,
                  description: N,
                  imgSrc: R,
                  tag: null != D ? (0, r.jsx)(i.V, { text: D }) : void 0,
                  FallbackIcon: o.Prq,
              }),
          });
}
