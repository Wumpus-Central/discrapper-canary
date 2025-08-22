n.d(t, { Z: () => O });
var r = n(951288);
n(647438);
var l = n(399606),
    i = n(481060),
    u = n(231757),
    c = n(397639),
    o = n(19780),
    a = n(979651),
    s = n(951206),
    d = n(446226),
    f = n(937393),
    E = n(721351),
    Z = n(981631),
    g = n(388032);
function N(e) {
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
function p(e, t) {
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
function O(e) {
    let t = (0, l.e7)([o.Z], () => o.Z.getChannelId() === e.id),
        O = (0, d.Z)(),
        b = (null == O ? void 0 : O.channelId) === e.id,
        y = (0, c.V)(e) && !e.isPrivate(),
        P = (0, c.Z)(e),
        _ = (!(0, l.e7)([a.Z], () => a.Z.isInChannel(e.id)) && P) || y,
        v = (0, f.Z)();
    return b || 0 !== v.length
        ? b
            ? (0, r.jsx)(i.sNh, {
                  label: g.intl.string(g.t.PlwgdX),
                  id: "handoff",
                  action: () => {
                      (0, s.F)(O);
                  },
                  icon: (0, E.Z)(void 0),
                  disabled: _,
              })
            : v.map((l) => {
                  var c, o;
                  return (0, r.jsx)(
                      i.sNh,
                      {
                          id: "transfer-".concat(l.type, "-").concat(l.id),
                          label:
                              ((c = l.type),
                              (o = t),
                              c === Z.ABu.XBOX
                                  ? o
                                      ? g.intl.string(g.t["qVE/VF"])
                                      : g.intl.string(g.t.E8euSk)
                                  : c === Z.ABu.PLAYSTATION
                                    ? o
                                        ? g.intl.string(g.t.vzfxmZ)
                                        : g.intl.string(g.t.QxEYDg)
                                    : c === Z.ABu.PLAYSTATION_STAGING
                                      ? o
                                          ? g.intl.string(g.t.BDiXtb)
                                          : g.intl.string(g.t["bhdB9/"])
                                      : void 0),
                          action: () =>
                              ((t) => {
                                  if (!t.twoWayLink || t.revoked)
                                      return void (0, u.Z)({
                                          platformType: t.type,
                                          location: "Console Transfer Item",
                                      });
                                  t.type === Z.ABu.XBOX
                                      ? (0, i.ZDy)(async () => {
                                            let { default: t } = await Promise.all([n.e("7784"), n.e("522")]).then(
                                                n.bind(n, 200623),
                                            );
                                            return (n) => (0, r.jsx)(t, p(N({}, n), { channel: e }));
                                        })
                                      : (t.type === Z.ABu.PLAYSTATION || t.type === Z.ABu.PLAYSTATION_STAGING) &&
                                        (0, i.ZDy)(async () => {
                                            let { default: l } = await n.e("638").then(n.bind(n, 543974));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    l,
                                                    p(N({}, n), {
                                                        platform: t.type,
                                                        channel: e,
                                                    }),
                                                );
                                        });
                              })(l),
                          icon: (0, E.Z)(l.type),
                          disabled: _,
                      },
                      l.id,
                  );
              })
        : null;
}
