e.d(n, { Z: () => U });
var i = e(951288);
e(647438);
var d = e(399606),
    l = e(481060),
    r = e(231757),
    a = e(397639),
    _ = e(19780),
    s = e(979651),
    p = e(951206),
    u = e(446226),
    I = e(937393),
    o = e(721351),
    c = e(981631),
    E = e(388032);
function T(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(e);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }),
            )),
            i.forEach(function (n) {
                var i;
                (i = e[n]),
                    n in t
                        ? Object.defineProperty(t, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[n] = i);
            });
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
function U(t) {
    let n = (0, d.e7)([_.Z], () => _.Z.getChannelId() === t.id),
        U = (0, u.Z)(),
        L = (null == U ? void 0 : U.channelId) === t.id,
        y = (0, a.V)(t) && !t.isPrivate(),
        D = (0, a.Z)(t),
        m = (!(0, d.e7)([s.Z], () => s.Z.isInChannel(t.id)) && D) || y,
        O = (0, I.Z)();
    return L || 0 !== O.length
        ? L
            ? (0, i.jsx)(l.sNh, {
                  label: E.intl.string(E.t.PlwgdX),
                  id: "handoff",
                  action: () => {
                      (0, p.F)(U);
                  },
                  icon: (0, o.Z)(void 0),
                  disabled: m,
              })
            : O.map((d) => {
                  var a, _;
                  return (0, i.jsx)(
                      l.sNh,
                      {
                          id: "transfer-".concat(d.type, "-").concat(d.id),
                          label:
                              ((a = d.type),
                              (_ = n),
                              a === c.ABu.XBOX
                                  ? _
                                      ? E.intl.string(E.t["qVE/VF"])
                                      : E.intl.string(E.t.E8euSk)
                                  : a === c.ABu.PLAYSTATION
                                    ? _
                                        ? E.intl.string(E.t.vzfxmZ)
                                        : E.intl.string(E.t.QxEYDg)
                                    : a === c.ABu.PLAYSTATION_STAGING
                                      ? _
                                          ? E.intl.string(E.t.BDiXtb)
                                          : E.intl.string(E.t["bhdB9/"])
                                      : void 0),
                          action: () =>
                              ((n) => {
                                  if (!n.twoWayLink || n.revoked)
                                      return void (0, r.Z)({
                                          platformType: n.type,
                                          location: "Console Transfer Item",
                                      });
                                  n.type === c.ABu.XBOX
                                      ? (0, l.ZDy)(async () => {
                                            let { default: n } = await Promise.all([e.e("20193"), e.e("522")]).then(
                                                e.bind(e, 200623),
                                            );
                                            return (e) => (0, i.jsx)(n, g(T({}, e), { channel: t }));
                                        })
                                      : (n.type === c.ABu.PLAYSTATION || n.type === c.ABu.PLAYSTATION_STAGING) &&
                                        (0, l.ZDy)(async () => {
                                            let { default: d } = await e.e("638").then(e.bind(e, 543974));
                                            return (e) =>
                                                (0, i.jsx)(
                                                    d,
                                                    g(T({}, e), {
                                                        platform: n.type,
                                                        channel: t,
                                                    }),
                                                );
                                        });
                              })(d),
                          icon: (0, o.Z)(d.type),
                          disabled: m,
                      },
                      d.id,
                  );
              })
        : null;
}
