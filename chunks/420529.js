e.d(n, { Z: () => D });
var i = e(255367);
e(73800);
var l = e(399606),
    r = e(481060),
    d = e(231757),
    a = e(397639),
    s = e(19780),
    _ = e(979651),
    u = e(951206),
    p = e(446226),
    o = e(937393),
    E = e(721351),
    c = e(981631),
    I = e(388032);
function T(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(e);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                ((i = e[n]),
                    n in t
                        ? Object.defineProperty(t, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[n] = i));
            }));
    }
    return t;
}
function g(t, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (t, n) {
                  var e = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      e.push.apply(e, i);
                  }
                  return e;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t
    );
}
function D(t) {
    let n = (0, l.e7)([s.Z], () => s.Z.getChannelId() === t.id),
        D = (0, p.Z)(),
        m = (null == D ? void 0 : D.channelId) === t.id,
        O = (0, a.V)(t) && !t.isPrivate(),
        L = (0, a.Z)(t),
        U = (!(0, l.e7)([_.Z], () => _.Z.isInChannel(t.id)) && L) || O,
        A = (0, o.Z)();
    if (!m && 0 === A.length) return null;
    let y = (n) => {
        if (!n.twoWayLink || n.revoked)
            return void (0, d.Z)({
                platformType: n.type,
                location: 'Console Transfer Item'
            });
        n.type === c.ABu.XBOX
            ? (0, r.ZDy)(async () => {
                  let { default: n } = await Promise.all([e.e('65383'), e.e('522')]).then(e.bind(e, 200623));
                  return (e) => (0, i.jsx)(n, g(T({}, e), { channel: t }));
              })
            : (n.type === c.ABu.PLAYSTATION || n.type === c.ABu.PLAYSTATION_STAGING) &&
              (0, r.ZDy)(async () => {
                  let { default: l } = await e.e('638').then(e.bind(e, 543974));
                  return (e) =>
                      (0, i.jsx)(
                          l,
                          g(T({}, e), {
                              platform: n.type,
                              channel: t
                          })
                      );
              });
    };
    return m
        ? (0, i.jsx)(r.sNh, {
              label: I.intl.string(I.t.PlwgdX),
              id: 'handoff',
              action: () => {
                  (0, u.F)(D);
              },
              icon: (0, E.Z)(void 0),
              disabled: U
          })
        : A.map((t) => {
              var e, l;
              return (0, i.jsx)(
                  r.sNh,
                  {
                      id: 'transfer-'.concat(t.type, '-').concat(t.id),
                      label: ((e = t.type), (l = n), e === c.ABu.XBOX ? (l ? I.intl.string(I.t['qVE/VF']) : I.intl.string(I.t.E8euSk)) : e === c.ABu.PLAYSTATION ? (l ? I.intl.string(I.t.vzfxmZ) : I.intl.string(I.t.QxEYDg)) : e === c.ABu.PLAYSTATION_STAGING ? (l ? I.intl.string(I.t.BDiXtb) : I.intl.string(I.t['bhdB9/'])) : void 0),
                      action: () => y(t),
                      icon: (0, E.Z)(t.type),
                      disabled: U
                  },
                  t.id
              );
          });
}
