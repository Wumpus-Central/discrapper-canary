"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(573648),
    a = n(76843),
    o = n(738104),
    l = n(652215);
function u(e) {
    var t, u, c, d;
    let { platformType: _, location: f, overrideUrl: h, successRedirect: p } = e;
    (_ === l.fg2.LEAGUE_OF_LEGENDS && (_ = l.fg2.RIOT_GAMES), _ === l.fg2.CRUNCHYROLL)
        ? ((t = [f ?? "unknown"]),
          (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                  n.e("17094"),
                  n.e("9504"),
                  n.e("61935"),
                  n.e("36335"),
                  n.e("64610"),
                  n.e("9957"),
                  n.e("90341"),
              ]).then(n.bind(n, 840241));
              return (n) => (0, i.jsx)(e, { analyticsLocation: t, ...n });
          }))
        : _ === l.fg2.XBOX
          ? ((u = [f ?? "unknown"]),
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("17094"),
                    n.e("46232"),
                    n.e("95429"),
                    n.e("98189"),
                    n.e("98965"),
                    n.e("30221"),
                    n.e("48370"),
                    n.e("36335"),
                    n.e("64610"),
                    n.e("9957"),
                    n.e("5674"),
                    n.e("51593"),
                ]).then(n.bind(n, 858128));
                return (t) => (0, i.jsx)(e, { analyticsLocation: u, ...t });
            }))
          : _ === l.fg2.PLAYSTATION || _ === l.fg2.PLAYSTATION_STAGING
            ? ((c = [f ?? "unknown"]),
              (d = _),
              (0, r.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("17094"),
                      n.e("98965"),
                      n.e("36335"),
                      n.e("64610"),
                      n.e("9957"),
                      n.e("5674"),
                      n.e("45629"),
                  ]).then(n.bind(n, 10060));
                  return (t) => (0, i.jsx)(e, { analyticsLocation: c, platformType: d, ...t });
              }))
            : _ === l.fg2.DOMAIN
              ? (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("57750"),
                        n.e("97893"),
                        n.e("37687"),
                        n.e("94048"),
                    ]).then(n.bind(n, 110819));
                    return (t) => (0, i.jsx)(e, { analyticsLocation: [f ?? "unknown"], ...t });
                })
              : s.A.get(_)?.isFederated === !0
                ? (0, r.openModalLazy)(async () => {
                      let { default: e } = await n.e("10645").then(n.bind(n, 61492));
                      return (t) => (0, i.jsx)(e, { platformType: _, location: f, successRedirect: p, ...t });
                  })
                : null != h
                  ? (0, a.h)({
                        shouldConfirm: !0,
                        href: h,
                        onConfirm: () => {
                            (0, o.d)(_, { location: f, successRedirect: p }, h);
                        },
                    })
                  : (0, o.d)(_, { location: f, successRedirect: p });
}
