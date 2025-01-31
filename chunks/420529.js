n.d(e, { Z: () => T });
var i = n(200651);
n(192379);
var l = n(399606),
    r = n(481060),
    a = n(231757),
    d = n(397639),
    s = n(19780),
    u = n(979651),
    _ = n(951206),
    o = n(446226),
    E = n(937393),
    c = n(721351),
    g = n(981631),
    I = n(388032);
function T(t) {
    let e = (0, l.e7)([s.Z], () => s.Z.getChannelId() === t.id),
        T = (0, o.Z)(),
        p = (null == T ? void 0 : T.channelId) === t.id,
        m = (0, d.V)(t) && !t.isPrivate(),
        C = (0, d.Z)(t),
        L = (!(0, l.e7)([u.Z], () => u.Z.isInChannel(t.id)) && C) || m,
        S = (0, E.Z)();
    if (!p && 0 === S.length) return null;
    let U = (e) => {
        if (!e.twoWayLink || e.revoked) {
            (0, a.Z)({
                platformType: e.type,
                location: 'Console Transfer Item'
            });
            return;
        }
        e.type === g.ABu.XBOX
            ? (0, r.ZDy)(async () => {
                  let { default: e } = await Promise.all([n.e('62729'), n.e('522')]).then(n.bind(n, 200623));
                  return (n) =>
                      (0, i.jsx)(e, {
                          ...n,
                          channel: t
                      });
              })
            : (e.type === g.ABu.PLAYSTATION || e.type === g.ABu.PLAYSTATION_STAGING) &&
              (0, r.ZDy)(async () => {
                  let { default: l } = await n.e('638').then(n.bind(n, 543974));
                  return (n) =>
                      (0, i.jsx)(l, {
                          ...n,
                          platform: e.type,
                          channel: t
                      });
              });
    };
    return (0, i.jsx)(i.Fragment, {
        children: p
            ? (0, i.jsx)(r.sNh, {
                  label: I.intl.string(I.t.PlwgdX),
                  id: 'handoff',
                  action: () => {
                      (0, _.F)(T);
                  },
                  icon: (0, c.Z)(void 0),
                  disabled: L
              })
            : S.map((t) => {
                  var n, l;
                  return (0, i.jsx)(
                      r.sNh,
                      {
                          id: 'transfer-'.concat(t.type, '-').concat(t.id),
                          label: ((n = t.type), (l = e), n === g.ABu.XBOX ? (l ? I.intl.string(I.t['f+Aijo']) : I.intl.string(I.t.E8euSk)) : n === g.ABu.PLAYSTATION ? (l ? I.intl.string(I.t.vzfxmZ) : I.intl.string(I.t.QxEYDg)) : n === g.ABu.PLAYSTATION_STAGING ? (l ? I.intl.string(I.t.BDiXtb) : I.intl.string(I.t['bhdB9/'])) : void 0),
                          action: () => U(t),
                          icon: (0, c.Z)(t.type),
                          disabled: L
                      },
                      t.id
                  );
              })
    });
}
