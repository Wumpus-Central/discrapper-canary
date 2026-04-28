"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(573648),
    a = n(76843),
    o = n(738104),
    l = n(652215);
function _(e) {
    var t, _, d, u;
    let { platformType: c, location: E, overrideUrl: h, successRedirect: m } = e;
    (c === l.fg2.LEAGUE_OF_LEGENDS && (c = l.fg2.RIOT_GAMES), c === l.fg2.CRUNCHYROLL)
        ? ((t = [E ?? "unknown"]),
          (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                  n.e("93816"),
                  n.e("9504"),
                  n.e("61935"),
                  n.e("36335"),
                  n.e("64610"),
                  n.e("9957"),
                  n.e("90341"),
              ]).then(n.bind(n, 840241));
              return (n) => (0, i.jsx)(e, { analyticsLocation: t, ...n });
          }))
        : c === l.fg2.XBOX
          ? ((_ = [E ?? "unknown"]),
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("93816"),
                    n.e("46232"),
                    n.e("95429"),
                    n.e("29835"),
                    n.e("30221"),
                    n.e("98965"),
                    n.e("48370"),
                    n.e("36335"),
                    n.e("64610"),
                    n.e("9957"),
                    n.e("5674"),
                    n.e("51593"),
                ]).then(n.bind(n, 858128));
                return (t) => (0, i.jsx)(e, { analyticsLocation: _, ...t });
            }))
          : c === l.fg2.PLAYSTATION || c === l.fg2.PLAYSTATION_STAGING
            ? ((d = [E ?? "unknown"]),
              (u = c),
              (0, r.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("93816"),
                      n.e("98965"),
                      n.e("36335"),
                      n.e("64610"),
                      n.e("9957"),
                      n.e("5674"),
                      n.e("45629"),
                  ]).then(n.bind(n, 10060));
                  return (t) => (0, i.jsx)(e, { analyticsLocation: d, platformType: u, ...t });
              }))
            : c === l.fg2.DOMAIN
              ? (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("48486"),
                        n.e("97893"),
                        n.e("37687"),
                        n.e("94048"),
                    ]).then(n.bind(n, 110819));
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
