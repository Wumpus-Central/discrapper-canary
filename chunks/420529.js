n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(399606),
    l = n(481060),
    a = n(231757),
    o = n(397639),
    s = n(19780),
    c = n(979651),
    u = n(951206),
    d = n(446226),
    p = n(937393),
    f = n(721351),
    h = n(981631),
    m = n(388032);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let t = (0, i.e7)([s.Z], () => s.Z.getChannelId() === e.id),
        _ = (0, d.Z)(),
        y = (null == _ ? void 0 : _.channelId) === e.id,
        C = (0, o.V)(e) && !e.isPrivate(),
        v = (0, o.Z)(e),
        O = (!(0, i.e7)([c.Z], () => c.Z.isInChannel(e.id)) && v) || C,
        x = (0, p.Z)();
    return y || 0 !== x.length
        ? y
            ? (0, r.jsx)(l.sNh, {
                  label: m.intl.string(m.t.PlwgdU),
                  id: "handoff",
                  action: () => {
                      (0, u.F)(_);
                  },
                  icon: (0, f.Z)(void 0),
                  disabled: O,
              })
            : x.map((i) => {
                  var o, s;
                  return (0, r.jsx)(
                      l.sNh,
                      {
                          id: "transfer-".concat(i.type, "-").concat(i.id),
                          label:
                              ((o = i.type),
                              (s = t),
                              o === h.ABu.XBOX
                                  ? s
                                      ? m.intl.string(m.t["qVE/VF"])
                                      : m.intl.string(m.t.E8euSk)
                                  : o === h.ABu.PLAYSTATION
                                    ? s
                                        ? m.intl.string(m.t.vzfxmY)
                                        : m.intl.string(m.t.QxEYDj)
                                    : o === h.ABu.PLAYSTATION_STAGING
                                      ? s
                                          ? m.intl.string(m.t.BDiXtV)
                                          : m.intl.string(m.t["bhdB9+"])
                                      : void 0),
                          action: () =>
                              ((t) => {
                                  if (!t.twoWayLink || t.revoked)
                                      return void (0, a.Z)({
                                          platformType: t.type,
                                          location: "Console Transfer Item",
                                      });
                                  t.type === h.ABu.XBOX
                                      ? (0, l.ZDy)(async () => {
                                            let { default: t } = await Promise.all([n.e("85555"), n.e("45929")]).then(
                                                n.bind(n, 200623),
                                            );
                                            return (n) => (0, r.jsx)(t, b(g({}, n), { channel: e }));
                                        })
                                      : (t.type === h.ABu.PLAYSTATION || t.type === h.ABu.PLAYSTATION_STAGING) &&
                                        (0, l.ZDy)(async () => {
                                            let { default: i } = await n.e("638").then(n.bind(n, 543974));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    i,
                                                    b(g({}, n), {
                                                        platform: t.type,
                                                        channel: e,
                                                    }),
                                                );
                                        });
                              })(i),
                          icon: (0, f.Z)(i.type),
                          disabled: O,
                      },
                      i.id,
                  );
              })
        : null;
}
