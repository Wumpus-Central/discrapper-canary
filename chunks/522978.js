n.d(t, { A: () => u });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(573648),
    s = n(128232),
    l = n(690364),
    o = n(889558),
    d = n(738104),
    c = n(652215);
function u(e) {
    let { platformType: t, location: u, overrideUrl: _, successRedirect: E } = e;
    if ((t === c.fg2.LEAGUE_OF_LEGENDS && (t = c.fg2.RIOT_GAMES), t === c.fg2.CRUNCHYROLL)) {
        var A;
        return void ((A = [u ?? "unknown"]),
        (0, r.mM)(async () => {
            let { default: e } = await Promise.all([
                n.e(237427),
                n.e(72338),
                n.e(110839),
                n.e(264236),
                n.e(990189),
                n.e(490028),
                n.e(761935),
                n.e(132191),
                n.e(493014),
                n.e(964610),
                n.e(249858),
                n.e(197672),
                n.e(141419),
            ]).then(n.bind(n, 95895));
            return (t) => (0, i.jsx)(e, { analyticsLocation: A, ...t });
        }));
    }
    t === c.fg2.XBOX
        ? l.t([u ?? "unknown"])
        : t === c.fg2.PLAYSTATION || t === c.fg2.PLAYSTATION_STAGING
          ? s.t([u ?? "unknown"], t)
          : t === c.fg2.DOMAIN
            ? (0, r.mM)(async () => {
                  let { default: e } = await Promise.all([
                      n.e(388859),
                      n.e(144909),
                      n.e(188941),
                      n.e(837687),
                      n.e(82721),
                      n.e(358235),
                  ]).then(n.bind(n, 683286));
                  return (t) => (0, i.jsx)(e, { analyticsLocation: [u ?? "unknown"], ...t });
              })
            : a.A.get(t)?.isFederated === !0
              ? (0, r.mM)(async () => {
                    let { default: e } = await n.e(954839).then(n.bind(n, 343946));
                    return (n) => (0, i.jsx)(e, { platformType: t, location: u, successRedirect: E, ...n });
                })
              : null != _
                ? (0, o.h)({
                      shouldConfirm: !0,
                      href: _,
                      onConfirm: () => {
                          (0, d.d)(t, { location: u, successRedirect: E }, _);
                      },
                  })
                : (0, d.d)(t, { location: u, successRedirect: E });
}
