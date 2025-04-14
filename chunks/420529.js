n.d(t, { Z: () => T });
var i = n(200651);
n(192379);
var r = n(399606),
    d = n(481060),
    a = n(231757),
    l = n(397639),
    _ = n(19780),
    s = n(979651),
    u = n(951206),
    p = n(446226),
    o = n(937393),
    g = n(721351),
    I = n(981631),
    c = n(388032);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    let t = (0, r.e7)([_.Z], () => _.Z.getChannelId() === e.id),
        T = (0, p.Z)(),
        U = (null == T ? void 0 : T.channelId) === e.id,
        L = (0, l.V)(e) && !e.isPrivate(),
        O = (0, l.Z)(e),
        y = (!(0, r.e7)([s.Z], () => s.Z.isInChannel(e.id)) && O) || L,
        D = (0, o.Z)();
    if (!U && 0 === D.length) return null;
    let m = (t) => {
        if (!t.twoWayLink || t.revoked)
            return void (0, a.Z)({
                platformType: t.type,
                location: 'Console Transfer Item'
            });
        t.type === I.ABu.XBOX
            ? (0, d.ZDy)(async () => {
                  let { default: t } = await Promise.all([n.e('53419'), n.e('522')]).then(n.bind(n, 200623));
                  return (n) => (0, i.jsx)(t, E(N({}, n), { channel: e }));
              })
            : (t.type === I.ABu.PLAYSTATION || t.type === I.ABu.PLAYSTATION_STAGING) &&
              (0, d.ZDy)(async () => {
                  let { default: r } = await n.e('638').then(n.bind(n, 543974));
                  return (n) =>
                      (0, i.jsx)(
                          r,
                          E(N({}, n), {
                              platform: t.type,
                              channel: e
                          })
                      );
              });
    };
    return U
        ? (0, i.jsx)(d.sNh, {
              label: c.NW.string(c.t.PlwgdX),
              id: 'handoff',
              action: () => {
                  (0, u.F)(T);
              },
              icon: (0, g.Z)(void 0),
              disabled: y
          })
        : D.map((e) => {
              var n, r;
              return (0, i.jsx)(
                  d.sNh,
                  {
                      id: 'transfer-'.concat(e.type, '-').concat(e.id),
                      label: ((n = e.type), (r = t), n === I.ABu.XBOX ? (r ? c.NW.string(c.t['qVE/VF']) : c.NW.string(c.t.E8euSk)) : n === I.ABu.PLAYSTATION ? (r ? c.NW.string(c.t.vzfxmZ) : c.NW.string(c.t.QxEYDg)) : n === I.ABu.PLAYSTATION_STAGING ? (r ? c.NW.string(c.t.BDiXtb) : c.NW.string(c.t['bhdB9/'])) : void 0),
                      action: () => m(e),
                      icon: (0, g.Z)(e.type),
                      disabled: y
                  },
                  e.id
              );
          });
}
