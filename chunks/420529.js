e.d(n, { Z: () => m });
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
    I = e(721351),
    c = e(981631),
    T = e(388032);
function g(t) {
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
function E(t, n) {
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
function m(t) {
    let n = (0, l.e7)([_.Z], () => _.Z.getChannelId() === t.id),
        m = (0, p.Z)(),
        U = (null == m ? void 0 : m.channelId) === t.id,
        D = (0, a.V)(t) && !t.isPrivate(),
        L = (0, a.Z)(t),
        O = (!(0, l.e7)([s.Z], () => s.Z.isInChannel(t.id)) && L) || D,
        y = (0, o.Z)();
    if (!U && 0 === y.length) return null;
    let G = (n) => {
        if (!n.twoWayLink || n.revoked)
            return void (0, d.Z)({
                platformType: n.type,
                location: 'Console Transfer Item'
            });
        n.type === c.ABu.XBOX
            ? (0, r.ZDy)(async () => {
                  let { default: n } = await Promise.all([e.e('85516'), e.e('522')]).then(e.bind(e, 200623));
                  return (e) => (0, i.jsx)(n, E(g({}, e), { channel: t }));
              })
            : (n.type === c.ABu.PLAYSTATION || n.type === c.ABu.PLAYSTATION_STAGING) &&
              (0, r.ZDy)(async () => {
                  let { default: l } = await e.e('638').then(e.bind(e, 543974));
                  return (e) =>
                      (0, i.jsx)(
                          l,
                          E(g({}, e), {
                              platform: n.type,
                              channel: t
                          })
                      );
              });
    };
    return U
        ? (0, i.jsx)(r.sNh, {
              label: T.intl.string(T.t.PlwgdX),
              id: 'handoff',
              action: () => {
                  (0, u.F)(m);
              },
              icon: (0, I.Z)(void 0),
              disabled: O
          })
        : y.map((t) => {
              var e, l;
              return (0, i.jsx)(
                  r.sNh,
                  {
                      id: 'transfer-'.concat(t.type, '-').concat(t.id),
                      label: ((e = t.type), (l = n), e === c.ABu.XBOX ? (l ? T.intl.string(T.t['qVE/VF']) : T.intl.string(T.t.E8euSk)) : e === c.ABu.PLAYSTATION ? (l ? T.intl.string(T.t.vzfxmZ) : T.intl.string(T.t.QxEYDg)) : e === c.ABu.PLAYSTATION_STAGING ? (l ? T.intl.string(T.t.BDiXtb) : T.intl.string(T.t['bhdB9/'])) : void 0),
                      action: () => G(t),
                      icon: (0, I.Z)(t.type),
                      disabled: O
                  },
                  t.id
              );
          });
}
