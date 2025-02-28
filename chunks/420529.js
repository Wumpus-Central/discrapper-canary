n.d(t, { Z: () => T });
var i = n(200651);
n(192379);
var r = n(399606),
    a = n(481060),
    d = n(231757),
    l = n(397639),
    s = n(19780),
    o = n(979651),
    _ = n(951206),
    u = n(446226),
    c = n(937393),
    p = n(721351),
    g = n(981631),
    N = n(388032);
function E(e) {
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
function I(e, t) {
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
    let t = (0, r.e7)([s.Z], () => s.Z.getChannelId() === e.id),
        T = (0, u.Z)(),
        m = (null == T ? void 0 : T.channelId) === e.id,
        L = (0, l.V)(e) && !e.isPrivate(),
        S = (0, l.Z)(e),
        U = (!(0, r.e7)([o.Z], () => o.Z.isInChannel(e.id)) && S) || L,
        y = (0, c.Z)();
    if (!m && 0 === y.length) return null;
    let C = (t) => {
        if (!t.twoWayLink || t.revoked) {
            (0, d.Z)({
                platformType: t.type,
                location: 'Console Transfer Item'
            });
            return;
        }
        t.type === g.ABu.XBOX
            ? (0, a.ZDy)(async () => {
                  let { default: t } = await Promise.all([n.e('62729'), n.e('522')]).then(n.bind(n, 200623));
                  return (n) => (0, i.jsx)(t, I(E({}, n), { channel: e }));
              })
            : (t.type === g.ABu.PLAYSTATION || t.type === g.ABu.PLAYSTATION_STAGING) &&
              (0, a.ZDy)(async () => {
                  let { default: r } = await n.e('638').then(n.bind(n, 543974));
                  return (n) =>
                      (0, i.jsx)(
                          r,
                          I(E({}, n), {
                              platform: t.type,
                              channel: e
                          })
                      );
              });
    };
    return m
        ? (0, i.jsx)(a.sNh, {
              label: N.NW.string(N.t.PlwgdX),
              id: 'handoff',
              action: () => {
                  (0, _.F)(T);
              },
              icon: (0, p.Z)(void 0),
              disabled: U
          })
        : y.map((e) => {
              var n, r;
              return (0, i.jsx)(
                  a.sNh,
                  {
                      id: 'transfer-'.concat(e.type, '-').concat(e.id),
                      label: ((n = e.type), (r = t), n === g.ABu.XBOX ? (r ? N.NW.string(N.t['f+Aijo']) : N.NW.string(N.t.E8euSk)) : n === g.ABu.PLAYSTATION ? (r ? N.NW.string(N.t.vzfxmZ) : N.NW.string(N.t.QxEYDg)) : n === g.ABu.PLAYSTATION_STAGING ? (r ? N.NW.string(N.t.BDiXtb) : N.NW.string(N.t['bhdB9/'])) : void 0),
                      action: () => C(e),
                      icon: (0, p.Z)(e.type),
                      disabled: U
                  },
                  e.id
              );
          });
}
