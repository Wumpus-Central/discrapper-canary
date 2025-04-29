e.d(n, { Z: () => U });
var i = e(255367);
e(73800);
var l = e(399606),
    r = e(481060),
    d = e(231757),
    a = e(397639),
    _ = e(19780),
    s = e(979651),
    u = e(951206),
    p = e(446226),
    o = e(937393),
    g = e(721351),
    I = e(981631),
    c = e(388032);
function E(t) {
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
function U(t) {
    let n = (0, l.e7)([_.Z], () => _.Z.getChannelId() === t.id),
        U = (0, p.Z)(),
        L = (null == U ? void 0 : U.channelId) === t.id,
        O = (0, a.V)(t) && !t.isPrivate(),
        y = (0, a.Z)(t),
        D = (!(0, l.e7)([s.Z], () => s.Z.isInChannel(t.id)) && y) || O,
        m = (0, o.Z)();
    if (!L && 0 === m.length) return null;
    let S = (n) => {
        if (!n.twoWayLink || n.revoked)
            return void (0, d.Z)({
                platformType: n.type,
                location: 'Console Transfer Item'
            });
        n.type === I.ABu.XBOX
            ? (0, r.ZDy)(async () => {
                  let { default: n } = await Promise.all([e.e('91926'), e.e('522')]).then(e.bind(e, 200623));
                  return (e) => (0, i.jsx)(n, T(E({}, e), { channel: t }));
              })
            : (n.type === I.ABu.PLAYSTATION || n.type === I.ABu.PLAYSTATION_STAGING) &&
              (0, r.ZDy)(async () => {
                  let { default: l } = await e.e('638').then(e.bind(e, 543974));
                  return (e) =>
                      (0, i.jsx)(
                          l,
                          T(E({}, e), {
                              platform: n.type,
                              channel: t
                          })
                      );
              });
    };
    return L
        ? (0, i.jsx)(r.sNh, {
              label: c.intl.string(c.t.PlwgdX),
              id: 'handoff',
              action: () => {
                  (0, u.F)(U);
              },
              icon: (0, g.Z)(void 0),
              disabled: D
          })
        : m.map((t) => {
              var e, l;
              return (0, i.jsx)(
                  r.sNh,
                  {
                      id: 'transfer-'.concat(t.type, '-').concat(t.id),
                      label: ((e = t.type), (l = n), e === I.ABu.XBOX ? (l ? c.intl.string(c.t['qVE/VF']) : c.intl.string(c.t.E8euSk)) : e === I.ABu.PLAYSTATION ? (l ? c.intl.string(c.t.vzfxmZ) : c.intl.string(c.t.QxEYDg)) : e === I.ABu.PLAYSTATION_STAGING ? (l ? c.intl.string(c.t.BDiXtb) : c.intl.string(c.t['bhdB9/'])) : void 0),
                      action: () => S(t),
                      icon: (0, g.Z)(t.type),
                      disabled: D
                  },
                  t.id
              );
          });
}
