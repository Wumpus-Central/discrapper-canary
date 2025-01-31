n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(433517),
    a = n(481060),
    s = n(920133),
    o = n(338096);
let l = {
    openDmSettingsUpsellModal(e) {
        let t = r.K.get(o.G),
            l = Date.now();
        null == t || l - t > o.k
            ? (r.K.set(o.G, l),
              (0, a.ZDy)(async () => {
                  let { default: t } = await n.e('35489').then(n.bind(n, 582712));
                  return (n) =>
                      (0, i.jsx)(t, {
                          ...n,
                          guildId: e
                      });
              }))
            : (0, s.L)(s.Q.SUPPRESSED_BY_COOLDOWN, e);
    }
};
