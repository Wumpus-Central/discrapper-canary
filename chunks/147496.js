t.r(n), t.d(n, { ItemDetailsModal: () => v }), t(266796), t(566702);
var o = t(200651);
t(192379);
var a = t(752843),
    l = t(442837),
    r = t(481060),
    i = t(55563),
    d = t(551428),
    _ = t(73346),
    c = t(591759),
    s = t(110742),
    u = t(886253),
    p = t(680005),
    f = t(938337),
    m = t(981631),
    k = t(388032);
function v(e) {
    var n, t, v, B;
    let { onClose: h, transitionState: g, skuId: x, appId: b, onHeaderTitleClick: I } = e,
        C = (0, l.e7)([d.Z], () => d.Z.getForSKU(x), [x]),
        S = (0, l.e7)([i.Z], () => i.Z.get(x), [x]),
        L = (0, s.M)(x);
    if (null == S) return null;
    let H = null !== (t = S.name) && void 0 !== t ? t : '',
        T = null !== (v = null == C ? void 0 : null === (n = C.description) || void 0 === n ? void 0 : n.trim()) && void 0 !== v ? v : void 0,
        W = (null == C ? void 0 : C.headerBackground) != null && null !== (B = c.Z.toURLSafe((0, _._W)(b, C.headerBackground, 256))) && void 0 !== B ? B : void 0,
        Z = S.type === m.epS.DURABLE && L,
        j = S.type === m.epS.DURABLE ? (Z ? k.NW.string(k.t.bm82mp) : k.NW.string(k.t['6gprwc'])) : void 0,
        { price: y } = S;
    return null == y
        ? null
        : (0, o.jsx)(u.A, {
              appId: b,
              skuId: S.id,
              transitionState: g,
              onHeaderTitleClick: null != I ? I : h,
              onClose: h,
              footer: (0, o.jsx)(p.YG, {
                  appId: b,
                  sku: S
              }),
              children: (0, o.jsx)(f.i, {
                  appId: b,
                  skuId: S.id,
                  title: H,
                  description: T,
                  imgSrc: W,
                  tag: null != j ? (0, o.jsx)(a.V, { text: j }) : void 0,
                  FallbackIcon: r.Prq
              })
          });
}
