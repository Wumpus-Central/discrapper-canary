n.d(t, {
    A: () => A,
});
var r = n(627968);
n(64700);
var l = n(417597),
    i = n(397927),
    s = n(882997),
    a = n(731474),
    o = n(383501),
    c = n(977997),
    u = n(458829),
    d = n(857253),
    h = n(694967),
    p = n(431516),
    g = n(652215),
    f = n(985018);

function m(e) {
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

function A(e) {
    let t = (0, l.bG)([o.A], () => o.A.getChannelId() === e.id),
        A = (0, d.A)(),
        y = (null == A ? void 0 : A.channelId) === e.id,
        O = (0, a.J)(e) && !e.isPrivate(),
        _ = (0, a.A)(e),
        j = (!(0, l.bG)([c.A], () => c.A.isInChannel(e.id)) && _) || O,
        x = (0, h.A)();
    if (!y && 0 === x.length) return null;
    let v = (0, p.A)(void 0);
    return y
        ? (0, r.jsx)(i.Drp, {
              label: f.intl.string(f.t.PlwgdU),
              id: "handoff",
              action: () => {
                  (0, u.x)(A);
              },
              icon: v,
              leadingAccessory: {
                  type: "icon",
                  icon: v,
              },
              disabled: j,
          })
        : x.map((l) => {
              var a, o;
              let c = (0, p.A)(l.type);
              return (0, r.jsx)(
                  i.Drp,
                  {
                      id: "transfer-".concat(l.type, "-").concat(l.id),
                      label:
                          ((a = l.type),
                          (o = t),
                          a === g.fg2.XBOX
                              ? o
                                  ? f.intl.string(f.t["qVE/VF"])
                                  : f.intl.string(f.t.E8euSk)
                              : a === g.fg2.PLAYSTATION
                                ? o
                                    ? f.intl.string(f.t.vzfxmY)
                                    : f.intl.string(f.t.QxEYDj)
                                : a === g.fg2.PLAYSTATION_STAGING
                                  ? o
                                      ? f.intl.string(f.t.BDiXtV)
                                      : f.intl.string(f.t["bhdB9+"])
                                  : void 0),
                      action: () => {
                          !l.twoWayLink || l.revoked
                              ? (0, s.A)({
                                    platformType: l.type,
                                    location: "Console Transfer Item",
                                })
                              : l.type === g.fg2.XBOX
                                ? (0, i.mMO)(async () => {
                                      let { default: t } = await Promise.all([n.e("6665"), n.e("67670")]).then(
                                          n.bind(n, 188072),
                                      );
                                      return (n) =>
                                          (0, r.jsx)(
                                              t,
                                              b(m({}, n), {
                                                  channel: e,
                                              }),
                                          );
                                  })
                                : (l.type === g.fg2.PLAYSTATION || l.type === g.fg2.PLAYSTATION_STAGING) &&
                                  (0, i.mMO)(async () => {
                                      let { default: t } = await n.e("71282").then(n.bind(n, 315337));
                                      return (n) =>
                                          (0, r.jsx)(
                                              t,
                                              b(m({}, n), {
                                                  platform: l.type,
                                                  channel: e,
                                              }),
                                          );
                                  });
                      },
                      icon: c,
                      leadingAccessory: {
                          type: "icon",
                          icon: c,
                      },
                      disabled: j,
                  },
                  l.id,
              );
          });
}
