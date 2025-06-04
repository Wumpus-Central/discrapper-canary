e.d(n, { Z: () => O });
var i = e(255367);
e(73800);
var l = e(399606),
    r = e(481060),
    d = e(231757),
    a = e(397639),
    _ = e(19780),
    s = e(979651),
    u = e(951206),
    o = e(446226),
    p = e(937393),
    E = e(721351),
    g = e(981631),
    I = e(388032);
function c(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(e);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                (i = e[n]),
                    n in t
                        ? Object.defineProperty(t, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[n] = i);
            });
    }
    return t;
}
function T(t, n) {
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
function O(t) {
    let n = (0, l.e7)([_.Z], () => _.Z.getChannelId() === t.id),
        O = (0, o.Z)(),
        D = (null == O ? void 0 : O.channelId) === t.id,
        L = (0, a.V)(t) && !t.isPrivate(),
        U = (0, a.Z)(t),
        m = (!(0, l.e7)([s.Z], () => s.Z.isInChannel(t.id)) && U) || L,
        A = (0, p.Z)();
    if (!D && 0 === A.length) return null;
    let S = (n) => {
        if (!n.twoWayLink || n.revoked)
            return void (0, d.Z)({
                platformType: n.type,
                location: 'Console Transfer Item'
            });
        n.type === g.ABu.XBOX
            ? (0, r.ZDy)(async () => {
                  let { default: n } = await Promise.all([e.e('58994'), e.e('522')]).then(e.bind(e, 200623));
                  return (e) => (0, i.jsx)(n, T(c({}, e), { channel: t }));
              })
            : (n.type === g.ABu.PLAYSTATION || n.type === g.ABu.PLAYSTATION_STAGING) &&
              (0, r.ZDy)(async () => {
                  let { default: l } = await e.e('638').then(e.bind(e, 543974));
                  return (e) =>
                      (0, i.jsx)(
                          l,
                          T(c({}, e), {
                              platform: n.type,
                              channel: t
                          })
                      );
              });
    };
    return D
        ? (0, i.jsx)(r.sNh, {
              label: I.intl.string(I.t.PlwgdX),
              id: 'handoff',
              action: () => {
                  (0, u.F)(O);
              },
              icon: (0, E.Z)(void 0),
              disabled: m
          })
        : A.map((t) => {
              var e, l;
              return (0, i.jsx)(
                  r.sNh,
                  {
                      id: 'transfer-'.concat(t.type, '-').concat(t.id),
                      label: ((e = t.type), (l = n), e === g.ABu.XBOX ? (l ? I.intl.string(I.t['qVE/VF']) : I.intl.string(I.t.E8euSk)) : e === g.ABu.PLAYSTATION ? (l ? I.intl.string(I.t.vzfxmZ) : I.intl.string(I.t.QxEYDg)) : e === g.ABu.PLAYSTATION_STAGING ? (l ? I.intl.string(I.t.BDiXtb) : I.intl.string(I.t['bhdB9/'])) : void 0),
                      action: () => S(t),
                      icon: (0, E.Z)(t.type),
                      disabled: m
                  },
                  t.id
              );
          });
}
