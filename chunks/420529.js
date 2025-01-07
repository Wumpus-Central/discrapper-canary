e.d(n, {
    Z: function () {
        return p;
    }
});
var i = e(200651);
e(192379);
var l = e(399606),
    r = e(481060),
    d = e(231757),
    a = e(397639),
    u = e(19780),
    s = e(979651),
    o = e(951206),
    _ = e(446226),
    c = e(937393),
    E = e(721351),
    I = e(981631),
    g = e(388032);
function p(t) {
    let n = (0, l.e7)([u.Z], () => u.Z.getChannelId() === t.id),
        p = (0, _.Z)(),
        T = (null == p ? void 0 : p.channelId) === t.id,
        m = (0, a.V)(t) && !t.isPrivate(),
        C = (0, a.Z)(t),
        f = (!(0, l.e7)([s.Z], () => s.Z.isInChannel(t.id)) && C) || m,
        L = (0, c.Z)();
    if (!T && 0 === L.length) return null;
    let U = (n) => {
        if (!n.twoWayLink || n.revoked) {
            (0, d.Z)({
                platformType: n.type,
                location: 'Console Transfer Item'
            });
            return;
        }
        n.type === I.ABu.XBOX
            ? (0, r.openModalLazy)(async () => {
                  let { default: n } = await Promise.all([e.e('13328'), e.e('522')]).then(e.bind(e, 200623));
                  return (e) =>
                      (0, i.jsx)(n, {
                          ...e,
                          channel: t
                      });
              })
            : (n.type === I.ABu.PLAYSTATION || n.type === I.ABu.PLAYSTATION_STAGING) &&
              (0, r.openModalLazy)(async () => {
                  let { default: l } = await e.e('638').then(e.bind(e, 543974));
                  return (e) =>
                      (0, i.jsx)(l, {
                          ...e,
                          platform: n.type,
                          channel: t
                      });
              });
    };
    return (0, i.jsx)(i.Fragment, {
        children: T
            ? (0, i.jsx)(r.MenuItem, {
                  label: g.intl.string(g.t.PlwgdX),
                  id: 'handoff',
                  action: () => {
                      (0, o.F)(p);
                  },
                  icon: (0, E.Z)(void 0),
                  disabled: f
              })
            : L.map((t) =>
                  (0, i.jsx)(
                      r.MenuItem,
                      {
                          id: 'transfer-'.concat(t.type, '-').concat(t.id),
                          label: (function (t, n) {
                              if (t === I.ABu.XBOX) return n ? g.intl.string(g.t['f+Aijo']) : g.intl.string(g.t.E8euSk);
                              if (t === I.ABu.PLAYSTATION) return n ? g.intl.string(g.t.vzfxmZ) : g.intl.string(g.t.QxEYDg);
                              if (t === I.ABu.PLAYSTATION_STAGING) return n ? g.intl.string(g.t.BDiXtb) : g.intl.string(g.t['bhdB9/']);
                          })(t.type, n),
                          action: () => U(t),
                          icon: (0, E.Z)(t.type),
                          disabled: f
                      },
                      t.id
                  )
              )
    });
}
