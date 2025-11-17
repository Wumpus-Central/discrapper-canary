n.d(t, { Z: () => y });
var i = n(54381);
n(473749);
var r = n(399606),
    l = n(481060),
    a = n(231757),
    o = n(397639),
    s = n(19780),
    c = n(979651),
    u = n(951206),
    d = n(446226),
    p = n(937393),
    h = n(721351),
    f = n(981631),
    m = n(388032);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
function y(e) {
    let t = (0, r.e7)([s.Z], () => s.Z.getChannelId() === e.id),
        y = (0, d.Z)(),
        C = (null == y ? void 0 : y.channelId) === e.id,
        v = (0, o.V)(e) && !e.isPrivate(),
        _ = (0, o.Z)(e),
        x = (!(0, r.e7)([c.Z], () => c.Z.isInChannel(e.id)) && _) || v,
        j = (0, p.Z)();
    return C || 0 !== j.length
        ? C
            ? (0, i.jsx)(l.sNh, {
                  label: m.intl.string(m.t.PlwgdU),
                  id: "handoff",
                  action: () => {
                      (0, u.F)(y);
                  },
                  icon: (0, h.Z)(void 0),
                  disabled: x,
              })
            : j.map((r) => {
                  var o, s;
                  return (0, i.jsx)(
                      l.sNh,
                      {
                          id: "transfer-".concat(r.type, "-").concat(r.id),
                          label:
                              ((o = r.type),
                              (s = t),
                              o === f.ABu.XBOX
                                  ? s
                                      ? m.intl.string(m.t["qVE/VF"])
                                      : m.intl.string(m.t.E8euSk)
                                  : o === f.ABu.PLAYSTATION
                                    ? s
                                        ? m.intl.string(m.t.vzfxmY)
                                        : m.intl.string(m.t.QxEYDj)
                                    : o === f.ABu.PLAYSTATION_STAGING
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
                                  t.type === f.ABu.XBOX
                                      ? (0, l.ZDy)(async () => {
                                            let { default: t } = await Promise.all([n.e("69611"), n.e("45929")]).then(
                                                n.bind(n, 200623),
                                            );
                                            return (n) => (0, i.jsx)(t, b(g({}, n), { channel: e }));
                                        })
                                      : (t.type === f.ABu.PLAYSTATION || t.type === f.ABu.PLAYSTATION_STAGING) &&
                                        (0, l.ZDy)(async () => {
                                            let { default: r } = await n.e("638").then(n.bind(n, 543974));
                                            return (n) =>
                                                (0, i.jsx)(
                                                    r,
                                                    b(g({}, n), {
                                                        platform: t.type,
                                                        channel: e,
                                                    }),
                                                );
                                        });
                              })(r),
                          icon: (0, h.Z)(r.type),
                          disabled: x,
                      },
                      r.id,
                  );
              })
        : null;
}
