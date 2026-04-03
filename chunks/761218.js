"use strict";
s.d(t, { A: () => d });
var n = s(627968);
s(64700);
var r = s(311907),
    l = s(832163),
    i = s(873297),
    a = s(188275),
    o = s(985018),
    c = s(751682);
let d = (e) => {
    let { onDismiss: t, skuIds: s, endTime: d, tab: u } = e,
        _ = (0, r.bG)([l.A], () => l.A.getApplicationIdFromGuildId(a.Kf), []);
    return null == _
        ? null
        : (0, n.jsx)(i.A, {
              onDismiss: t,
              skuIds: s,
              endTime: d,
              tab: u,
              applicationId: _,
              headerText: o.intl.string(o.t["z/QEIP"]),
              shopButtonText: o.intl.string(o.t["kq/75v"]),
              analyticsSection: "marvel-rivals-promotional-banner",
              analyticsTileType: "MARVEL_RIVALS_PROMOTIONAL_BANNER",
              analyticsImpressionType: "marvel_rivals_promotional_banner",
              backgroundImageUrl: c.A,
          });
};
