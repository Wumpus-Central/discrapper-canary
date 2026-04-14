"use strict";
s.d(t, { A: () => d });
var n = s(627968);
s(64700);
var r = s(311907),
    l = s(832163),
    a = s(371794),
    i = s(873297),
    o = s(188275),
    c = s(985018);
let d = (e) => {
    let { onDismiss: t, skuIds: s, tab: d } = e,
        u = (0, r.bG)([l.A], () => l.A.getApplicationIdFromGuildId(o.Kf), []),
        _ = (0, r.bG)([l.A], () => (null != u ? l.A.getStorefrontMetadata(u) : void 0), [u]),
        g = null != u && _?.logoAssetId != null ? (0, a.YE)(u, _.logoAssetId, 75) : null;
    return null == u
        ? null
        : (0, n.jsx)(i.A, {
              onDismiss: t,
              skuIds: s,
              tab: d,
              applicationId: u,
              headerText: c.intl.string(c.t["z/QEIP"]),
              shopButtonText: c.intl.string(c.t["kq/75v"]),
              analyticsSection: "marvel-rivals-promotional-banner",
              analyticsTileType: "MARVEL_RIVALS_PROMOTIONAL_BANNER",
              analyticsImpressionType: "marvel_rivals_promotional_banner",
              backgroundGradient: "linear-gradient(90deg, rgba(30, 140, 120, 0.35) 0%, rgba(160, 50, 110, 0.35) 100%)",
              logoUrl: g ?? void 0,
          });
};
