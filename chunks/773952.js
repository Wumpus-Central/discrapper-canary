"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(573648),
    a = n(76843),
    o = n(738104),
    l = n(652215);
function d(e) {
    var t, d, _, u;
    let { platformType: c, location: E, overrideUrl: h, successRedirect: m } = e;
    (c === l.fg2.LEAGUE_OF_LEGENDS && (c = l.fg2.RIOT_GAMES), c === l.fg2.CRUNCHYROLL)
        ? ((t = [E ?? "unknown"]),
          (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([n.e("9957"), n.e("90341")]).then(n.bind(n, 840241));
              return (n) => (0, i.jsx)(e, { analyticsLocation: t, ...n });
          }))
        : c === l.fg2.XBOX
          ? ((d = [E ?? "unknown"]),
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("53242"), n.e("9957"), n.e("73118")]).then(
                    n.bind(n, 858128),
                );
                return (t) => (0, i.jsx)(e, { analyticsLocation: d, ...t });
            }))
          : c === l.fg2.PLAYSTATION || c === l.fg2.PLAYSTATION_STAGING
            ? ((_ = [E ?? "unknown"]),
              (u = c),
              (0, r.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("9957"), n.e("45629")]).then(n.bind(n, 10060));
                  return (t) => (0, i.jsx)(e, { analyticsLocation: _, platformType: u, ...t });
              }))
            : c === l.fg2.DOMAIN
              ? (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e("94048").then(n.bind(n, 110819));
                    return (t) => (0, i.jsx)(e, { analyticsLocation: [E ?? "unknown"], ...t });
                })
              : s.A.get(c)?.isFederated === !0
                ? (0, r.openModalLazy)(async () => {
                      let { default: e } = await n.e("10645").then(n.bind(n, 61492));
                      return (t) => (0, i.jsx)(e, { platformType: c, location: E, successRedirect: m, ...t });
                  })
                : null != h
                  ? (0, a.h)({
                        shouldConfirm: !0,
                        href: h,
                        onConfirm: () => {
                            (0, o.d)(c, { location: E, successRedirect: m }, h);
                        },
                    })
                  : (0, o.d)(c, { location: E, successRedirect: m });
}
